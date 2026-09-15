import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/experience";
import { getImageMetadata, publicAsset } from "../lib/assets";
import { ModeToggle } from "./mode-toggle";

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="project-meta-item">
      <dt className="project-meta-label">{label}</dt>
      <dd className="portfolio-card-copy">{value}</dd>
    </div>
  );
}

export function ProjectPage() {
  const { projectSlug } = useParams();
  const project = projectSlug ? getProjectBySlug(projectSlug) : undefined;

  if (!project) {
    return <Navigate to="/#experience" replace />;
  }

  const { width, height } = getImageMetadata(project.image);

  return (
    <main className="project-page min-h-screen">
      <div className="page-container">
        <div className="project-page-nav">
          <Link to="/#experience" className="section-back-link slide-fade-up">
            <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.75} />
            <span>Back to work</span>
          </Link>

          <ModeToggle className="slide-fade-up" />
        </div>

        <header className="project-page-header slide-fade-up slide-fade-up-delay-1">
          {project.label && (
            <span className="portfolio-tag">{project.label}</span>
          )}
          <h1 className="project-page-title">{project.name}</h1>
          {project.summary && (
            <p className="project-page-summary">{project.summary}</p>
          )}
        </header>

        <div className="project-page-image-frame slide-fade-up slide-fade-up-delay-2">
          <img
            src={publicAsset(project.image)}
            alt={project.imageAlt ?? project.name}
            width={width}
            height={height}
            className="project-page-image"
            decoding="async"
          />
        </div>

        <dl className="project-meta-list slide-fade-up slide-fade-up-delay-3">
          <ProjectMeta label="Client" value={project.client} />
          <ProjectMeta label="Role" value={project.role} />
          <ProjectMeta label="Timeframe" value={project.timeframe} />
          <ProjectMeta label="Tools" value={project.tools.join(", ")} />
        </dl>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-external-link"
        >
          View original project
          <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.75} />
        </a>
      </div>
    </main>
  );
}
