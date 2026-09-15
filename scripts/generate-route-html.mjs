import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");
const indexPath = path.join(distRoot, "index.html");
const seoConfigPath = path.join(projectRoot, "src/data/seoRoutes.json");
const seoConfig = JSON.parse(await readFile(seoConfigPath, "utf8"));
const imageMetadata = JSON.parse(
  await readFile(path.join(projectRoot, "src/data/imageMetadata.json"), "utf8"),
);
const {
  siteUrl,
  siteName,
  defaultImage,
  defaultImageAlt,
  routes,
} = seoConfig;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function absoluteUrl(routePath) {
  return routePath === "/" ? `${siteUrl}/` : `${siteUrl}${routePath}`;
}

function metadataForImage(image) {
  const filename = image.slice(image.lastIndexOf("/") + 1);
  const metadata = imageMetadata[filename];
  if (!metadata) throw new Error(`Missing image metadata for ${filename}.`);
  return metadata;
}

function replaceOrInsertTag(html, tagPattern, replacement) {
  if (tagPattern.test(html)) {
    return html.replace(tagPattern, replacement);
  }

  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function setMeta(html, attribute, value, content) {
  const pattern = new RegExp(
    `<meta\\b(?=[^>]*\\b${attribute}="${escapeRegExp(value)}")[^>]*>`,
    "i",
  );

  return replaceOrInsertTag(
    html,
    pattern,
    `<meta ${attribute}="${value}" content="${escapeHtml(content)}" />`,
  );
}

function setCanonical(html, href) {
  return replaceOrInsertTag(
    html,
    /<link\b(?=[^>]*\brel="canonical")[^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(href)}" />`,
  );
}

function schemaForRoute(route) {
  const canonicalUrl = absoluteUrl(route.path);
  const image = route.image ?? defaultImage;
  const imageAlt = route.imageAlt ?? defaultImageAlt;
  const { width, height } = metadataForImage(image);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Jefel Española",
        jobTitle: "Graphic and UI/Web Designer",
        url: `${siteUrl}/`,
        image: `${siteUrl}/jefel-640.jpg`,
        email: "jefel.maitem@gmail.com",
        knowsAbout: [
          "Graphic design",
          "UI design",
          "Web design",
          "Branding",
          "Front-end development",
          "WordPress",
          "Social media management",
          "Video editing",
          "Esports graphics",
        ],
        sameAs: [
          "https://www.linkedin.com/in/jefel/",
          "https://github.com/jefel-design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: `${siteUrl}/`,
        inLanguage: "en",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        name: route.title,
        description: route.description,
        url: canonicalUrl,
        inLanguage: "en",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: image,
          width,
          height,
          caption: imageAlt,
        },
      },
    ],
  };
}

function setSchema(html, route) {
  const json = JSON.stringify(schemaForRoute(route));
  const script = `<script type="application/ld+json" id="schema-org">${json}</script>`;

  return replaceOrInsertTag(
    html,
    /<script\b(?=[^>]*\btype="application\/ld\+json")(?=[^>]*\bid="schema-org")[\s\S]*?<\/script>/i,
    script,
  );
}

function withRouteMetadata(template, route) {
  const canonicalUrl = absoluteUrl(route.path);
  const image = route.image ?? defaultImage;
  const imageAlt = route.imageAlt ?? defaultImageAlt;
  const { type, width, height } = metadataForImage(image);

  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = setMeta(html, "name", "description", route.description);
  html = setMeta(html, "name", "robots", "index, follow, max-image-preview:large");
  html = setCanonical(html, canonicalUrl);
  html = setMeta(html, "property", "og:type", "website");
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(html, "property", "og:description", route.description);
  html = setMeta(html, "property", "og:url", canonicalUrl);
  html = setMeta(html, "property", "og:site_name", siteName);
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "property", "og:image:type", type);
  html = setMeta(html, "property", "og:image:width", String(width));
  html = setMeta(html, "property", "og:image:height", String(height));
  html = setMeta(html, "property", "og:image:alt", imageAlt);
  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:title", route.title);
  html = setMeta(html, "name", "twitter:description", route.description);
  html = setMeta(html, "name", "twitter:image", image);
  html = setMeta(html, "name", "twitter:image:alt", imageAlt);
  html = setSchema(html, route);

  return html;
}

for (const route of routes) {
  const template = await readFile(indexPath, "utf8");
  const routeHtml = withRouteMetadata(template, route);

  if (route.path === "/") {
    await writeFile(indexPath, routeHtml);
    continue;
  }

  const routeDir = path.join(distRoot, route.path.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), routeHtml);
}

console.log(`Generated SEO HTML for ${routes.length} routes.`);
