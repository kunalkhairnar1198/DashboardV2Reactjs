import React from "react";
import { PieChart, Pie, Tooltip, Label, Cell } from "recharts";


const CustomLabel = ({ viewBox, noOfBubbleTeaSold = 0 }) => {
    const { cx, cy } = viewBox;
    return (
      <React.Fragment>
        <text x={cx - 15} y={cy - 5}>
          <tspan
            style={{
              fontWeight: 700,
              fontSize: "1.5em",
              fill: "black",
              fontFamily: "Roboto"
            }}
          >
            {noOfBubbleTeaSold}
          </tspan>
        </text>
        <text x={cx - 22} y={cy + 15}>
          <tspan
            style={{
              fontSize: "1rem",
              fill: "black",
              fontFamily:'initial',
              fontWeight:'bold',
            }}
          >
            Total
          </tspan>
        </text>
      </React.Fragment>
    );
  };
  const IndicatorList = () => {
    const items = [
        { name: "Connected", color: "blue" },
        { name: "Not connected", color: "#f3f6f9" }
    ];

    return (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <div
                            style={{
                                width: "10px",
                                height: "10px",
                                backgroundColor: item.color,
                                borderRadius: "50%",
                                marginRight: "10px"
                            }}
                        />
                        <span className="text-sm">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const CnapChart = () => {
	const data = [
        { name: "Bubble Tea Sold", value: 2 },
        { name: "Bubble Tea Left", value: 4 }
      ];

	return (
		<div className="flex">
			<PieChart width={110} height={110} className="ml-11">
				<Tooltip />
				<Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={35}
          dataKey="value"
          outerRadius={55}
          fill="blue"
					// label={({ name, value }) =>
					// 	`${name}: ${value}`
					// }
				>
          {data.map((entry, index) => {
                  if (index === 1) {
                  return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
                  }
                  return <Cell key={`cell-${index}`} fill="blue" />;
              })}
              <Label
                  content={<CustomLabel noOfBubbleTeaSold={data[0].value} />}
                  position="center"
              />
          </Pie>
			</PieChart>
            <div className="ml-10">
            <IndicatorList/>
            </div>
        </div>
	);
};

export default CnapChart;
