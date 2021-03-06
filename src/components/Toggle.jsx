import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ToggleDiv>
      <ToggleTitle>Toggle</ToggleTitle>
      <ToggleContainer>
        <ToggleBox>
          <ToggleActiveBar isClicked={isClicked} />
          <ToggleButton
            isClicked={isClicked}
            onClick={() => setIsClicked(false)}
          >
            기본
          </ToggleButton>
          <ToggleButton
            isClicked={!isClicked}
            onClick={() => setIsClicked(true)}
          >
            상세
          </ToggleButton>
        </ToggleBox>
      </ToggleContainer>
    </ToggleDiv>
  );
};

const ToggleDiv = styled.div`
  margin: 10px 0;
`;

const ToggleTitle = styled.h2`
  margin: 10px 0;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;
  height: 100px;
`;

const ToggleBox = styled.div`
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
  transition: all 0.2s ease;
  transform: ${props => (props.isClicked ? "translateX(100%)" : "")};
`;

const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${props =>
    props.isClicked ? "var(--textSecondary)" : "var(--textPrimary)"};

  cursor: pointer;
  width: 150px;
  border-radius: 50px;
  z-index: 3;
`;

export default Toggle;
