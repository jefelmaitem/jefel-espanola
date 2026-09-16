import { AnimatedRole } from "./AnimatedRole";
import { Mail } from "lucide-react";
import { publicAsset } from "../lib/assets";
import { LinkedinIconLink } from "./LinkedinLink";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

function ChatButton() {
  return (
    <div className="hero-chat">
      <Button asChild className="h-auto gap-1.5 px-3 py-1">
        <a href="mailto:jefel.maitem@gmail.com">
          <Mail
            aria-hidden="true"
            size={15}
            strokeWidth={1.75}
            className="shrink-0"
          />
          <span>Let’s chat</span>
        </a>
      </Button>
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
