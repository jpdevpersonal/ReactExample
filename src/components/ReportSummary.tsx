import { reports } from "../data/report";
const reportsCount: number = reports.length;
function ReportSummary() {
  return (
    <>
      <h2>Available Reports</h2>
      <p>Total Reports: {reportsCount}</p>
    </>
  );
}
export default ReportSummary;
