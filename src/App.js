import './App.css';
import styled from 'styled-components';
import { Calendar, Noise } from 'components';
import { useState } from 'react';

const Button = styled.button`
  width: 120px;
  height: 48px;
  background-color: #5991FF;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

const Layout = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.showCalendar ? 1 : 0};
  visibility: ${props => props.showCalendar ? "show" : "hidden"};
  transition: .3s;
  transform: translateY(${props => props.showCalendar ? "0" : "12px"});
  background-color: #00000025;
`;

function App() {
  const [ showCalendar, setShowCalendar ] = useState(false);
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      <Noise/>
      <Button onClick={() => setShowCalendar(true)}>Show Calendar</Button>

      <Layout showCalendar={showCalendar}>
        <Calendar setShowCalendar={setShowCalendar}/>
      </Layout>
    </div>
  );
}

export default App;
