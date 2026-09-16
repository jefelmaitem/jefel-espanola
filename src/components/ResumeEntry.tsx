import type { ReactNode } from "react";

type ResumeEntryProps = {
  title: string;
  subtitle: ReactNode;
  date: string;
  logo: ReactNode;
  details: readonly string[];
};

export function ResumeEntry({
  title,
  subtitle,
  date,
  logo,
  details,
}: ResumeEntryProps) {
  return (
    <article className="resume-entry">
      <div className="resume-entry-header">
        <div className="resume-entry-logo">{logo}</div>

        <div className="resume-entry-heading">
          <div className="resume-entry-topline">
            <h3 className="resume-entry-title">{title}</h3>
            <span className="resume-entry-leader" aria-hidden="true" />
            <p className="resume-entry-date">{date}</p>
          </div>
          <div className="resume-entry-subtitle">{subtitle}</div>
        </div>
      </div>

      {details.length > 0 && (
        <ul className="resume-entry-details" role="list">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
