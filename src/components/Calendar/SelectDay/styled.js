import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: .5rem;
  text-align: center;
`;

export const Day = styled.p`
  color: ${props => props.current ? "#07c" : props.isBefore ? "lightgray" : "black"};
  background-color: ${props => props.current ? "#f1f1ff" : "transparent"};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: ${props => (!props.isBefore && !props.isBefored) && "pointer"};
  transition: .2s;

  :hover {
    background-color: ${props => props.current ? "#f1f1ff" : (!props.isBefore && !props.isBefored) && "#0077cc11"};
    color: ${props => props.current ? "#07c" : !props.isBefore && "black"};
  }
`;
