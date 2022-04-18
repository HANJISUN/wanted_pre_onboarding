import React, { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <h2>Toggle</h2>
      <ToggleContainer>
        <ToggleActiveBar isClicked={isClicked} />
        <ToggleButton isClicked={isClicked} onClick={() => setIsClicked(false)}>
          기본
        </ToggleButton>
        <ToggleButton isClicked={!isClicked} onClick={() => setIsClicked(true)}>
          상세
        </ToggleButton>
      </ToggleContainer>
    </div>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  margin: 10px;
  width: 300px;
  height: 40px;
  background-color: var(--secondary);
  border: 3px solid var(--secondary);
  border-radius: 50px;
  z-index: 1;
`;

const ToggleActiveBar = styled.div`
  position: absolute;
  width: 150px;
  height: 40px;
  background-color: #fff;
  border-radius: 50px;
  z-index: 2;
  transition: all 0.1s ease-in-out;
  transform: translateX(${props => (props.isClicked ? '100' : '')}%);
`;

const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(
    ${props => (props.isClicked ? '--textSecondary' : '--textPrimary')}
  );

  cursor: pointer;
  width: 150px;
  border-radius: 50px;
  z-index: 3;
`;

export default Toggle;
