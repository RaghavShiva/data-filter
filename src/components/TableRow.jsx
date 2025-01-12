import React from "react";

const TableRow = ({ item }) => {
    return (
        <tr className="odd:bg-gray-100 even:bg-gray-200">
            <td className="border px-4 py-2">{item.date}</td>
            <td className="border px-4 py-2">{item.revenue}</td>
            <td className="border px-4 py-2">{item.netIncome}</td>
            <td className="border px-4 py-2">{item.grossProfit}</td>
            <td className="border px-4 py-2">{item.eps}</td>
            <td className="border px-4 py-2">{item.operatingIncome}</td>
        </tr>
    );
};

export default TableRow;
