import React from "react";

const Filters = ({ filters, setFilters }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const [category, key] = name.split(".");
        setFilters((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [key]: value,
            },
        }));
    };

    return (
        <div className="bg-gray-100 p-4 rounded mb-6">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Date Range */}
                <div>
                    <label className="block font-medium mb-2">Date Range</label>
                    <input
                        type="date"
                        name="dateRange.start"
                        value={filters.dateRange.start}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1 w-full"
                    />
                    <input
                        type="date"
                        name="dateRange.end"
                        value={filters.dateRange.end}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1 w-full mt-2"
                    />
                </div>

                {/* Revenue Range */}
                <div>
                    <label className="block font-medium mb-2">Revenue Range</label>
                    <input
                        type="number"
                        name="revenueRange.min"
                        value={filters.revenueRange.min}
                        onChange={handleInputChange}
                        placeholder="Min"
                        className="border rounded px-2 py-1 w-full"
                    />
                    <input
                        type="number"
                        name="revenueRange.max"
                        value={filters.revenueRange.max}
                        onChange={handleInputChange}
                        placeholder="Max"
                        className="border rounded px-2 py-1 w-full mt-2"
                    />
                </div>

                {/* Net Income Range */}
                <div>
                    <label className="block font-medium mb-2">Net Income Range</label>
                    <input
                        type="number"
                        name="netIncomeRange.min"
                        value={filters.netIncomeRange.min}
                        onChange={handleInputChange}
                        placeholder="Min"
                        className="border rounded px-2 py-1 w-full"
                    />
                    <input
                        type="number"
                        name="netIncomeRange.max"
                        value={filters.netIncomeRange.max}
                        onChange={handleInputChange}
                        placeholder="Max"
                        className="border rounded px-2 py-1 w-full mt-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
