import styled from 'styled-components';
import noise from './noise.gif';

export default styled.div`
  background-image: url(${noise});
  opacity: .05;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -100;
`;