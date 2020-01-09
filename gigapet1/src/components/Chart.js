import React, { useContext, useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { UserInfoContext } from "../context/UserInfoContext";

/* Component is supposed to take in a time period like day/week/month
   And spit out a Pie Chart with data displayed by food_category
   data is probably better transformed right here */
export default function Chart({ chartData }) {

  //RE SORD FEED LOG TO [{fruit: qty},{dairy: qty},,,] FORMAT
  const [forChart, setForChart] = useState([]);
  const colors = ["#aaff31", "#e53d00", "#550527", "#21a0a0", "#db222a"]

  useEffect(() => {
    console.log(chartData);
    
    function transformData(inputData) {
      let categoryArray = [];
      inputData.forEach(elem =>
        categoryArray.includes(elem.food_category)
          ? ""
          : categoryArray.push(elem.food_category)
      );
      const sortedData = categoryArray.map(elem => {
        return({
          name: elem,
          value: inputData.reduce((acc, value) => value.food_category===elem ? acc + value.food_amount : acc, 0)
        })
      });
      return sortedData;
    }
    setForChart(transformData(chartData));

    
  }, [chartData]);
  //forChart state == the reqested [{fruit: qty},{dairy: qty},,,] FORMAT

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart height={250}>
        <Pie
          data={forChart}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index
          }) => {
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="#8884d8"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {forChart[index].name} ({value})
              </text>
            );
          }}
        >
          {
          	forChart.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
