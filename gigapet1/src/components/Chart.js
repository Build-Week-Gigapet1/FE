import React, { useContext, useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import { UserInfoContext } from "../context/UserInfoContext";


/* Component is supposed to take in a time period like day/week/month
   And spit out a Pie Chart with data displayed by food_category
   data is probably better transformed right here */
export default function Chart({ timePeriod }) {
  const { petFeedLog, setChangeMade } = useContext(UserInfoContext);

//RE SORD FEED LOG TO [{fruit: qty},{dairy: qty},,,] FORMAT
  const [forChart, setForChart] = useState([]);

  useEffect(() => {
    let fruitArr = petFeedLog.filter(item => item.food_category === "fruit");
    let vegetablesArr = petFeedLog.filter(item => item.food_category === "vegetables");
    let dairyArr = petFeedLog.filter(item => item.food_category === "dairy");
    let breadArr = petFeedLog.filter(item => item.food_category === "bread");
    let meatArr = petFeedLog.filter(item => item.food_category === "meat");

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let fruitSum = 0;
    let fruitValues = [];
    if (fruitArr.length > 0) {
      for (let i = 0; i < fruitArr.length; i++) {
        fruitValues.push(fruitArr[i].food_amount)
      }
      fruitSum = fruitValues.reduce(reducer);
    }
    let vegetablesSum = 0;
    let vegetablesValues = [];
    if (fruitArr.length > 0) {
      for (let i = 0; i < vegetablesArr.length; i++) {
        vegetablesValues.push(vegetablesArr[i].food_amount)
      }
      vegetablesSum = vegetablesValues.reduce(reducer);
    }
    let dairySum = 0;
    let dairyValues = [];
    if (dairyArr.length > 0) {
      for (let i = 0; i < dairyArr.length; i++) {
        dairyValues.push(dairyArr[i].food_amount)
      }
      dairySum = dairyValues.reduce(reducer);
    }
    let breadSum = 0;
    let breadValues = [];
    if (breadArr.length > 0) {
      for (let i = 0; i < breadArr.length; i++) {
        breadValues.push(breadArr[i].food_amount)
      }
      breadSum = breadValues.reduce(reducer);
    }
    let meatSum = 0;
    let meatValues = [];
    if (meatArr.length > 0) {
      for (let i = 0; i < meatArr.length; i++) {
        meatValues.push(meatArr[i].food_amount)
      }
      meatSum = meatValues.reduce(reducer);
    }

    setForChart(
      [
        {fruits: fruitSum},
        {vegetables: vegetablesSum},
        {dairy: dairySum},
        {bread: breadSum},
        {meat: meatSum}
      ]
    );
  }, [petFeedLog]);
//forChart state == the reqested [{fruit: qty},{dairy: qty},,,] FORMAT
console.log(forChart);

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
