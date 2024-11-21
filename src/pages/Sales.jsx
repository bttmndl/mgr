import React, { useState } from "react";
import "../style/Sales.css";

const saleData = [
  { date: "2023-06-01", type: "1kg", customer: "RAC", count: 10 },
  { date: "2023-06-02", type: "100gm", customer: "GCK", count: 5 },
  { date: "2023-06-01", type: "1kg", customer: "RAC", count: 10 },
  { date: "2023-06-02", type: "100gm", customer: "GCK", count: 5 },
  { date: "2023-06-01", type: "1kg", customer: "RAC", count: 10 },
  { date: "2023-06-02", type: "100gm", customer: "GCK", count: 5 },
  { date: "2023-06-01", type: "1kg", customer: "RAC", count: 10 },
  { date: "2023-06-02", type: "100gm", customer: "GCK", count: 5 },
  { date: "2023-06-01", type: "1kg", customer: "RAC", count: 10 },
  { date: "2023-06-02", type: "100gm", customer: "GCK", count: 5 },
  { date: "2023-06-01", type: "1kg", customer: "RAC", count: 10 },
  { date: "2023-06-02", type: "100gm", customer: "GCK", count: 5 },
  { date: "2023-06-01", type: "1kg", customer: "RAC", count: 10 },
  { date: "2023-06-02", type: "100gm", customer: "GCK", count: 5 },
  { date: "2023-06-01", type: "1kg", customer: "RAC", count: 10 },
  { date: "2023-06-02", type: "100gm", customer: "GCK", count: 5 },

  // Add more data as needed
];

const Sales = () => {
  const [timeRange, setTimeRange] = useState("Month");
  const [customRange, setCustomRange] = useState({ from: "", to: "" });
  const [openTimeRange, setOpenTimeRange] = useState(false);
  const [salesData, setSalesData] = useState(saleData);

  function groupMonth() {
    const groupData = salesData.reduce((acc, cur) => {
      const yearMonth = cur.date.split("-");
      const date = yearMonth[0] + "-" + yearMonth[1];
      if (acc[date]) {
        acc[date]++;
      } else {
        acc[date] = {};
      }
    }, {});
  }

  const handleTimeRangeChange = (e) => {
    setTimeRange(e.target.value);
    if (e.target.value === "Custom") setOpenTimeRange(true);
  };

  const handleCustomRangeChange = (e) => {
    const { name, value } = e.target;
    setCustomRange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "to") setOpenTimeRange(false);
  };

  function makeYear(year) {
    const yearText = year.split("");
    return yearText[2] + yearText[3];
  }

  function makeMonth(month) {
    const monthMap = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    return monthMap[month];
  }

  function getDate() {
    const from = customRange.from;
    const to = customRange.to;

    const fromText = from.split("-");
    const fromDay = fromText[2];
    const fromMonth = fromText[1];
    const fromYear = fromText[0];
    const finalFrom =
      fromDay + " " + makeMonth(fromMonth) + "," + makeYear(fromYear);

    const toText = to.split("-");
    const toDay = toText[2];
    const toMonth = toText[1];
    const toYear = toText[0];
    const finalTo = toDay + " " + makeMonth(toMonth) + "," + makeYear(toYear);

    return finalFrom + " to " + finalTo;
  }

  return (
    <div className="sales-table-page">
      <div className="header">
        <div className="header-text">
          <h2>Sales Table</h2>
        </div>
        <div className="time-range-selector">
          <label>
            <select
              value={timeRange}
              onChange={handleTimeRangeChange}
              className="time-range-dropdown"
            >
              <option value="Month">Month</option>
              <option value="Year">Year</option>
              <option value="Custom">
                {customRange.from === "" || customRange.to === ""
                  ? "Custom"
                  : getDate()}
              </option>
            </select>
          </label>

          {openTimeRange && (
            <div className="custom-range-inputs">
              <label>
                From:
                <input
                  type="date"
                  name="from"
                  value={customRange.from}
                  onChange={handleCustomRangeChange}
                />
              </label>
              <label>
                To:
                <input
                  type="date"
                  name="to"
                  value={customRange.to}
                  onChange={handleCustomRangeChange}
                />
              </label>
            </div>
          )}
        </div>
      </div>

      <table className="sales-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Customer</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index}>
              <td>{sale.date}</td>
              <td>{sale.type}</td>
              <td>{sale.customer}</td>
              <td>{sale.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;
