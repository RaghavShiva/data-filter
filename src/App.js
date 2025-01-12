import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import './App.css';
// import TableRow from "./components/TableRow";

const App = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "date", // default sort by date
    direction: "ascending",
  });
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minRevenue: "",
    maxRevenue: "",
    minNetIncome: "",
    maxNetIncome: "",
  });

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_api_key)

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };
  // Handle input change for filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredData = data.filter((item) => {
    // Apply date filter
    const isDateValid =
      (filters.startDate ? new Date(item.date) >= new Date(filters.startDate) : true) &&
      (filters.endDate ? new Date(item.date) <= new Date(filters.endDate) : true);

    // Apply revenue filter
    const isRevenueValid =
      (filters.minRevenue ? item.revenue >= filters.minRevenue : true) &&
      (filters.maxRevenue ? item.revenue <= filters.maxRevenue : true);

    // Apply net income filter
    const isNetIncomeValid =
      (filters.minNetIncome ? item.netIncome >= filters.minNetIncome : true) &&
      (filters.maxNetIncome ? item.netIncome <= filters.maxNetIncome : true);

    return isDateValid && isRevenueValid && isNetIncomeValid;
  });

  return (
    <div className="page-container">
      <div className="header">
        <div className="min-h-screen bg-gray-800 text-white p-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-semibold text-center mb-6">Company Financial Data</h1>

            <div className="mb-6 p-4 bg-gray-700 rounded-lg shadow-md filters">
              <div className="flex flex-wrap gap-4 ">
                <div className="flex flex-col w-full sm:w-1/3">
                  <label className="mb-2">Date Range</label>
                  <input
                    type="date"
                    name="startDate"
                    value={filters.startDate}
                    onChange={handleFilterChange}
                    className="p-2 bg-gray-600 text-white rounded-md"
                  />
                  <input
                    type="date"
                    name="endDate"
                    value={filters.endDate}
                    onChange={handleFilterChange}
                    className="p-2 mt-2 bg-gray-600 text-white rounded-md"
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/3">
                  <label className="mb-2">Revenue Range</label>
                  <input
                    type="number"
                    name="minRevenue"
                    value={filters.minRevenue}
                    onChange={handleFilterChange}
                    placeholder="Min"
                    className="p-2 bg-gray-600 text-white rounded-md"
                  />
                  <input
                    type="number"
                    name="maxRevenue"
                    value={filters.maxRevenue}
                    onChange={handleFilterChange}
                    placeholder="Max"
                    className="p-2 mt-2 bg-gray-600 text-white rounded-md"
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/3">
                  <label className="mb-2">Net Income Range</label>
                  <input
                    type="number"
                    name="minNetIncome"
                    value={filters.minNetIncome}
                    onChange={handleFilterChange}
                    placeholder="Min"
                    className="p-2 bg-gray-600 text-white rounded-md"
                  />
                  <input
                    type="number"
                    name="maxNetIncome"
                    value={filters.maxNetIncome}
                    onChange={handleFilterChange}
                    placeholder="Max"
                    className="p-2 mt-2 bg-gray-600 text-white rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
            <Table data={filteredData} sortData={sortData} sortConfig={sortConfig} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
