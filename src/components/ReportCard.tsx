import type { Report } from "../types/report";

interface ReportCardProps {
  report: Report;
  showRecordCount?: boolean;
}

export function Reportcard({
  report,
  showRecordCount = false,
}: ReportCardProps) {
  return (
    <article>
      <h3>{report.name}</h3>
      <p>{report.description}</p>
      <p>Status: {report.status}</p>
      <p>Category: {report.category}</p>
      {showRecordCount && (
        <p>Record Count: {report.recordCount ?? "Unknown"}</p>
      )}
    </article>
  );
}
