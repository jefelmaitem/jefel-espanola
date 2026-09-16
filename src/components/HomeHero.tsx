import { Fragment, type CSSProperties, useEffect, useId, useState } from "react";
import { AnimatedRole } from "./AnimatedRole";
import { Mail } from "lucide-react";
import { publicAsset } from "../lib/assets";
import { LinkedinIconLink } from "./LinkedinLink";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const chatTooltipWords = "Go on, I don’t bite :)".split(" ");

function ChatButton() {
  const tooltipId = useId();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    if (!isTooltipOpen) return;

    const dismissTooltip = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsTooltipOpen(false);
    };

    document.addEventListener("keydown", dismissTooltip);
    return () => document.removeEventListener("keydown", dismissTooltip);
  }, [isTooltipOpen]);

  return (
    <div
      className="hero-chat"
      onMouseEnter={() => setIsTooltipOpen(true)}
      onMouseLeave={() => setIsTooltipOpen(false)}
    >
      <Button asChild className="h-auto gap-1.5 px-3 py-1">
        <a
          href="mailto:jefel.maitem@gmail.com"
          aria-describedby={tooltipId}
          onFocus={() => setIsTooltipOpen(true)}
          onBlur={() => setIsTooltipOpen(false)}
          onClick={() => setIsTooltipOpen(false)}
        >
          <Mail
            aria-hidden="true"
            size={15}
            strokeWidth={1.75}
            className="shrink-0"
          />
          <span>Let’s chat</span>
        </a>
      </Button>
      <span
        id={tooltipId}
        role="tooltip"
        className="hero-chat-tooltip"
        data-open={isTooltipOpen}
        aria-hidden={!isTooltipOpen}
      >
        {chatTooltipWords.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            {index > 0 && " "}
            <span
              className="hero-chat-tooltip-word"
              style={{ "--word-index": index } as CSSProperties}
            >
              {word}
            </span>
          </Fragment>
        ))}
      </span>
    </div>
  );
}

export function HomeHero() {
  return (
    <section id="intro" className="hero" aria-labelledby="intro-title">
      <header className="hero-header">
        <div className="hero-actions intro-enter intro-enter--role">
          <LinkedinIconLink />
          <ModeToggle />
        </div>

        <div className="hero-profile">
          <img
            src={publicAsset("jefel-portrait.jpg")}
            alt="Portrait of Jefel Española"
            width={960}
            height={960}
            className="hero-avatar intro-enter"
            loading="eager"
            decoding="async"
          />

          <div className="hero-identity">
            <h1 id="intro-title" className="hero-title intro-enter">
              Hey, It's Jefel.
            </h1>

            <AnimatedRole />
          </div>
        </div>
      </header>

      <div className="hero-about intro-enter intro-enter--about">
        <div className="hero-description">
          <p>
            I design digital work that feels clear, useful, and intentional.
          </p>

          <p>
            I work across graphic design, UI/web design, and front-end
            implementation, shaping visuals that communicate clearly and make
            people feel something.
          </p>
        </div>

        <ChatButton />
      </div>
    </section>
  );
}
