import "./App.css";
import Header from "./components/Header";
import { Reportcard } from "./components/ReportCard";
import ReportSummary from "./components/ReportSummary";
import { reports } from "./data/report";

function App() {
  return (
    <main>
      <Header />
      <section>
        <h2>Available Reports</h2>
        {reports.map((report) => (
          <Reportcard key={report.id} report={report} showRecordCount={true} />
        ))}
      </section>
      <ReportSummary />
    </main>
  );
}

export default App;
