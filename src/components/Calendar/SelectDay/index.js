import React from 'react';
import { Container, Day } from './styled';

const index = ({ currentDate, setCurrentDate, monthDays, weekDays, beforeDays, isBefore }) => {
  return (
    <Container>
      {weekDays.map((weekDay, index) => <p key={index}>{weekDay}</p>)}

      {beforeDays.map(day => <Day isBefore={true} key={day}>{day}</Day>)}

      {monthDays.map((_, index) => (
        <Day
          key={index}
          isBefored={!isBefore(index + 1)}
          current={currentDate === index + 1}
          onClick={() => setCurrentDate(index + 1)}
        >
          {index + 1}
        </Day>
      ))}
    </Container>
  )
}

export default index
