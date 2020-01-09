import React, { useContext, useState, useEffect } from "react";

//Tools and Hooks
import { getCurrentDate } from "../helpers";

//Components
import { Pet } from "./Pet";
import Chart from "./Chart";

//Coontext/STATE
import { UserInfoContext } from "../context/UserInfoContext";
//Style
import { DashboardWrapper } from "./styled";


export const Dashboard = props => {
  const { petFeedLog } = useContext(UserInfoContext);
  const [timePeriod, setTimePeriod] = useState("all-time");
  const [chartData, setChartData] = useState(petFeedLog);
  const timeOptions = ["all-time", "month", "day"];
  const [petLvl, setPetLvl] = useState(0);
  useEffect(()=>{
    let feedingsToday = petFeedLog.filter(elem=>elem.date_fed===getCurrentDate()).length;
    if(feedingsToday>2) setPetLvl(2);
    if(feedingsToday===1) setPetLvl(1);
    if(feedingsToday===0) setPetLvl(0);
  },[petFeedLog])

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
    <DashboardWrapper>
      <Pet petLvl={petLvl}/>
      <h3>Summary of food entries for selected period:</h3>
      <select onClick={e=>setTimePeriod(e.target.value)}>
        {timeOptions.map((elem, index) => (
          <option value={elem} key={index}>
            {elem}
          </option>
        ))}
      </select>
      <Chart chartData={chartData} />
    </DashboardWrapper>
  );
};
