import React, { useContext } from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import { UserInfoContext } from "../context/UserInfoContext";

export default function Chart({ timePeriod }) {
  const { petFeedLog, setChangeMade } = useContext(UserInfoContext);
  function transformData(inputData) {
    console.log(inputData);    
    let categoryArray = [];
    inputData.forEach(elem=>categoryArray.includes(elem.food_category)? "" : categoryArray.push(elem.food_category));
    console.log(categoryArray);
    const sortedData = categoryArray.map(
      elem => inputData.reduce((acc, value) => acc + value.food_amount)
    );
    console.log(sortedData);
    
    return sortedData;
  }
  const data = transformData(petFeedLog)
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart height={250}>
        <Pie
          data={data}
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
            console.log("handling label?");
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
                {data[index].name} ({value})
              </text>
            );
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
