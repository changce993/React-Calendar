import React, { useState } from 'react';
import { Container, Options, Option } from './styled';

function Dropdown({ children, width, options = [], setOption, option, link, ...props }){
  const [ isOpen, setIsOpen ] = useState(false);

  const onClick = e => {
    setIsOpen(false);
    setOption(e);
  };

  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <Container width={width} onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} {...props} link={link}>
        <p>{option || children || "select"}</p>
        <span style={{ color: "gray" }}>&#9662;</span>
      </Container>

      {isOpen && (
        <Options width={width}>
          {options.length > 0 && (
            options.map((opt, index) => (
              <Option onClick={() => onClick(opt)} key={index}>
                {opt.name}
              </Option>
            ))
          )}
        </Options>
      )}
    </div>
  )
}

export default Dropdown;
