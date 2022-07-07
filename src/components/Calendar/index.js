import React from 'react';
import SelectDay from './SelectDay';
import SelectMonth from './SelectMonth';
import { Dropdown } from 'components';
import { Button, Container, Flex } from './styled';
import useDatePicker from 'hooks/useDatePicker';

const Index = ({ setShowCalendar }) => {

  const {
    hours,
    weekDays,
    months,
    currentDay,
    currentDate,
    currentMonth,
    currentYear,
    monthDays,
    beforeDays,
    currentHour,
    dateFormat,
    setCurrentDate,
    prevMonth,
    nextMonth,
    setCurrentHour,
    isBefore,
    resetDate
  } = useDatePicker();

  const handleCancel = () => {
    resetDate();
    setShowCalendar(false);
  };

  console.log(    currentDay,
    // currentDate,
    // currentMonth,
    // currentYear,
    )

  return (
    <Container>
      <Flex>
        <SelectMonth
          months={months}
          currentMonth={currentMonth}
          currentYear={currentYear}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
        />

        <Dropdown
          option={hours[currentHour].name}
          options={hours}
          setOption={e => setCurrentHour(+e.index)}
        />
      </Flex>

      <SelectDay
        weekDays={weekDays}
        beforeDays={beforeDays}
        monthDays={monthDays}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        isBefore={isBefore}
      />

      <Flex>
        <Button color="black" onClick={handleCancel}>Cancelar</Button>
        <Button bg="black" onClick={() => console.log(dateFormat)}>Guardar</Button>
      </Flex>
    </Container>
  )
}

export default Index
