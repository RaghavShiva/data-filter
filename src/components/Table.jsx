import React from "react";
import TableRow from "./TableRow";

const Table = ({ data, sortData, sortConfig }) => {
    const getSortIndicator = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "ascending" ? "↑" : "↓";
        }
        return "";
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th
                            className="border px-4 py-2 cursor-pointer hover:bg-gray-300"
                            onClick={() => sortData("date")}
                        >
                            Date {getSortIndicator("date")}
                        </th>
                        <th
                            className="border px-4 py-2 cursor-pointer hover:bg-gray-300"
                            onClick={() => sortData("revenue")}
                        >
                            Revenue {getSortIndicator("revenue")}
                        </th>
                        <th
                            className="border px-4 py-2 cursor-pointer hover:bg-gray-300"
                            onClick={() => sortData("netIncome")}
                        >
                            Net Income {getSortIndicator("netIncome")}
                        </th>
                        <th className="border px-4 py-2">Gross Profit</th>
                        <th className="border px-4 py-2">EPS</th>
                        <th className="border px-4 py-2">Operating Income</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <TableRow key={index} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
