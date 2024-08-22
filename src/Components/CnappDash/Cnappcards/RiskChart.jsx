import React from "react";
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";

const CustomLabel = ({ viewBox, data }) => {
    const { cx, cy } = viewBox;
    const total = data.reduce((acc, entry) => acc + entry.value, 0); 

    return (
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
            <tspan
                style={{
                    fontWeight: 700,
                    fontSize: "1.5em",
                    fill: "black",
                    fontFamily: "Roboto"
                }}
            >
                {total}
            </tspan>
            <tspan
                x={cx}
                dy="1.2em"
                style={{
                    fontSize: "1rem",
                    fill: "black",
                    fontFamily: 'initial',
                    fontWeight: 'bold',
                }}
            >
                Total
            </tspan>
        </text>
    );
};

const IndicatorList = () => {
    const items = [
        { name: "Passed", value: 16899, color: "#28a745" },   // Green
        { name: "Failed", value: 681, color: "#dc3545" },     // Red
        { name: "Warning", value: 7253, color: "#ffc107" },   // Yellow
        { name: "Not Available", value: 36, color: "#6c757d" } // Gray
    ];

    return (
        <div style={{ marginTop: "2px", textAlign: "left" }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "2.5px" }}>
                        <div
                            style={{
                                width: "10px",
                                height: "10px",
                                backgroundColor: item.color,
                                borderRadius: "50%",
                                marginRight: "10px"
                            }}
                        />
                        <span className="text-sm">
                            {item.name} ({item.value})
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const data = [
    { name: "Bubble Tea Sold", value: 16899 },
    { name: "Bubble Tea Left", value: 681 },
    { name: "Coffee Sold", value: 7253 },
    { name: "Coffee Left", value: 36 },
];

const COLORS = ["green", "red", "yellow", "gray"]; 

const RiskChart = () => {
    return (
        <div className="flex" >
            <PieChart width={110} height={110} className="ml-3">
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={55}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label
                        content={<CustomLabel data={data} />}
                        position="center"
                    />
                </Pie>
                <Tooltip />
            </PieChart>
            <div className="ml-11">
                <IndicatorList/>
            </div>
        </div>
    );
};

export default RiskChart;
