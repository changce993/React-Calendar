import React from 'react';
import { Container, Button } from './styled';

const index = ({ months, currentMonth, currentYear, nextMonth, prevMonth }) => {

  return (
    <Container>
      <Button onClick={prevMonth}>&#9664;</Button>
      <p>{months[currentMonth].name}, {currentYear}</p>
      <Button onClick={nextMonth}>&#9654;</Button>
    </Container>
  )
}

export default index
