import { reports } from "../data/report";
const reportsCount: number = reports.length;
function ReportSummary() {
  return (
    <>
      <p>Total Reports: {reportsCount}</p>
    </>
  );
}
export default ReportSummary;
