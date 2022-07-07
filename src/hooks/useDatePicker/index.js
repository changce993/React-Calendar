import { useState, useEffect } from 'react';
import { hours, weekDays, months, minutes, seconds } from './constants';

const Index = () => {
  const dateInstance = new Date();
  const [currentHour, setCurrentHour] = useState(dateInstance.getHours());
  const [currentDate, setCurrentDateLocal] = useState(dateInstance.getDate());
  const [currentMonth, setCurrentMonthLocal] = useState(dateInstance.getMonth());
  const [currentYear, setCurrentYear] = useState(dateInstance.getFullYear());
  const [monthDays, setMonthDays] = useState([...Array(getTotalDays(currentMonth))]);
  const beforeDays = [...Array(startDay())].map((_, idx) => (getTotalDays(currentMonth - 1)-startDay()+2)+(idx-1));
  const dateFormat = new Date(currentYear, currentMonth, currentDate, currentHour);
  const currentDay = weekDays[new Date(currentYear, currentMonth, currentDate).getDay()];

  useEffect(() => {
    setMonthDays([...Array(getTotalDays(currentMonth))]);
    // eslint-disable-next-line
  }, [currentMonth]);

  function getTotalDays(month){
    if(month === -1) month = 11;

    if(month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11){
        return 31;
      }else if(month === 3 || month === 5 || month === 8 || month === 10){
        return 30;
      }else{
        return isLeap() ? 29 : 28;
      };
  };

  function isLeap(){
    return ((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
  };

  function startDay(){
    let start = new Date(currentYear, currentMonth, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
  };

  function isBefore(e){
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const olderDate = new Date(year, month, date) <= new Date(currentYear, currentMonth, e);
    return olderDate;
  }

  function setCurrentDate(e){
    if(isBefore(e)){
      setCurrentDateLocal(e);
    }
  }

  function setCurrentMonth(date){
    setCurrentMonthLocal(+date)
  }

  function prevMonth(){
    if(currentMonth === 0){
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    }else {
      setCurrentMonth(currentMonth - 1);
    };
  };

  function nextMonth(){
    if(currentMonth === 11){
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }else {
      setCurrentMonth(currentMonth + 1);
    };
  };

  function prevYear(){
    setCurrentMonth(currentYear - 1);
  };

  function nextYear(){
    setCurrentMonth(currentYear + 1);
  };

  function resetDate(){
    setCurrentHour(dateInstance.getHours());
    setCurrentDateLocal(dateInstance.getDate());
    setCurrentMonthLocal(dateInstance.getMonth());
    setCurrentYear(dateInstance.getFullYear());
  }

  return {
    hours,
    minutes,
    seconds,
    weekDays,
    months,
    currentDay,
    currentHour,
    currentDate,
    currentMonth,
    currentYear,
    monthDays,
    beforeDays,
    dateFormat,
    setCurrentHour,
    setCurrentDate,
    setCurrentMonth,
    setCurrentYear,
    prevMonth,
    nextMonth,
    prevYear,
    nextYear,
    isBefore,
    resetDate
  };
};

export default Index;
