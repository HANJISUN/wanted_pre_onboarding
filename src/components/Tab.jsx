import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = () => {
  const tabMenu = ['감자', '고구마', '카레라이스'];
  const [isTabClicked, setIsTabClicked] = useState(0);

  return (
    <div>
      <h2>Tab</h2>
      <TabContainer>
        {tabMenu.map((element, index) => {
          return (
            <TabButton
              key={index}
              isClicked={isTabClicked === index ? true : false}
              onClick={() => {
                setIsTabClicked(index);
              }}
            >
              {element}
            </TabButton>
          );
        })}
      </TabContainer>
      <TabActiveBar>
        <ActiveLine activeLine={isTabClicked} isClicked={isTabClicked} />
      </TabActiveBar>
    </div>
  );
};

const TabContainer = styled.div`
  display: flex;
  width: 450px;
  height: 40px;
`;

const TabButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props =>
    props.isClicked ? 'var(--textPrimary)' : 'var(--textSecondary)'};

  cursor: pointer;
`;

const TabActiveBar = styled.div`
  width: 450px;
  height: 3px;
  background-color: var(--secondary);
`;

const ActiveLine = styled.div`
  width: 150px;
  height: 3px;
  background-color: var(--primary);
  transition: all 0.3s ease;
  transform: translateX(calc(100% * ${props => props.activeLine}));
`;

export default Tab;
