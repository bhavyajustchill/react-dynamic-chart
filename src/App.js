import React, { useState, useEffect } from "react";
import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import DynamicPieChart from "./components/DynamicPieChart";

function App() {
  const [sampleChartData, setSampleChartData] = useState([]);

  useEffect(() => {
    setSampleChartData([
      {
        program: "B.C.A.",
        year: "2018-19",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [11, 10, 26, 50],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.Sc.I.T.",
        year: "2018-19",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [18, 9, 8, 61],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "M.Sc.I.T.",
        year: "2018-19",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [0, 30, 0, 0],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.C.A.",
        year: "2019-20",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [30, 22, 13, 26],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.Sc.I.T.",
        year: "2019-20",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [27, 21, 18, 49],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "M.Sc.I.T.",
        year: "2019-20",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [0, 22, 4, 3],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.C.A.",
        year: "2020-21",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [34, 33, 12, 21],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.Sc.I.T.",
        year: "2020-21",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [35, 28, 18, 19],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "M.Sc.I.T.",
        year: "2020-21",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [2, 10, 2, 1],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.C.A.",
        year: "2021-22",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [61, 43, 22, 20],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.Sc.I.T.",
        year: "2021-22",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [41, 22, 14, 20],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "M.Sc.I.T.",
        year: "2021-22",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [0, 22, 7, 5],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
    ]);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex align-items-center justify-content-center me-0">
          <h5 className="display-5 text-decoration-underline text-center my-5">
            Consolidate Placement Details with Dynamic Pie Chart
          </h5>
          <PrimeReactProvider>
            {sampleChartData.map((data) => {
              return (
                <>
                  <div className="my-2 col-md-4 mx-0">
                    <DynamicPieChart
                      columns={data.columns}
                      row={data.row}
                      backgroundColor={data.backgroundColor}
                      hoverBackgroundColor={data.hoverBackgroundColor}
                      pointStyle={true}
                      year={data.year}
                      pdfUrl={data.pdfUrl}
                      program={data.program}
                    />
                  </div>
                </>
              );
            })}
          </PrimeReactProvider>
        </div>
      </div>
    </>
  );
}

export default App;
