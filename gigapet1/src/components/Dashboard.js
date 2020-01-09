import React, { useContext, useState, useEffect } from "react";

//Tools and Hooks
import { getCurrentDate } from "../helpers";

//Style

//Components
import { Pet } from "./Pet";
import Chart from "./Chart";
import { UserInfoContext } from "../context/UserInfoContext";

//Coontext/STATE

export const Dashboard = props => {
  const { petFeedLog } = useContext(UserInfoContext);
  const [timePeriod, setTimePeriod] = useState("all-time");
  const [chartData, setChartData] = useState(petFeedLog);
  const timeOptions = ["all-time", "month", "day"];
  useEffect(() => {
    switch (timePeriod) {
      case timeOptions[0]:
        return setChartData(petFeedLog);
      case timeOptions[1]:
        return setChartData(
          petFeedLog.filter(
            elem =>
              elem.date_fed.split("-")[1] === getCurrentDate().split("-")[1]
          )
        );
      case timeOptions[2]:
        return setChartData(
          petFeedLog.filter(
            elem =>
              elem.date_fed.split("-")[2] === getCurrentDate().split("-")[2]
          )
        );
      default:
        return setChartData(petFeedLog);
    }
  }, [timePeriod, petFeedLog]);
  return (
    <>
      <Pet />
      <select onClick={e=>setTimePeriod(e.target.value)}>
        {timeOptions.map((elem, index) => (
          <option value={elem} key={index}>
            {elem}
          </option>
        ))}
      </select>
      <Chart chartData={chartData} />
    </>
  );
};
