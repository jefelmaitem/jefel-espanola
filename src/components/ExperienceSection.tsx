import { Briefcase } from "lucide-react";
import { experienceEntries, type ExperienceEntry } from "../data/experience";
import { publicAsset } from "../lib/assets";
import { ResumeEntry } from "./ResumeEntry";
import { ExpandableSection } from "./ExpandableSection";

function ExperienceItem({ job }: { job: ExperienceEntry }) {
  const logoSrc = job.logo ? publicAsset(job.logo) : null;

  return (
    <ResumeEntry
      title={job.company}
      subtitle={
        <ul className="experience-role-list" aria-label="Roles" role="list">
          {job.roles.map((role) => (
            <li className="experience-role-tag" key={role}>
              {role}
            </li>
          ))}
        </ul>
      }
      date={job.timeframe}
      details={job.responsibilities}
      logo={
        logoSrc ? (
          <img
            src={logoSrc}
            alt={job.company}
            className={job.logoIsWhite ? "resume-entry-logo-white" : undefined}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Briefcase size={20} aria-hidden="true" />
        )
      }
    />
  );
}

export function ExperienceSection() {
  return (
    <ExpandableSection
      id="experience"
      title="Experience"
      items={experienceEntries}
      getKey={(job) => job.slug}
      renderItem={(job) => <ExperienceItem job={job} />}
    />
  );
}
