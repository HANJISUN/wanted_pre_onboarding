import { useState } from "react";
import styled from "styled-components";

export default function Slider() {
  const sliderPointList = [1, 25, 50, 75, 100];

  const [sliderState, setSliderState] = useState(1);
  const handleChangeState = e => setSliderState(e.target.value);
  const handleClickBtn = e => setSliderState(e.target.value);

  return (
    <SliderDiv>
      <SliderContainer>
        <SliderTitle>Slider</SliderTitle>
        <SliderStateContainer>
          <SliderStateValue>{sliderState}</SliderStateValue>
          <SliderStateSimbol>%</SliderStateSimbol>
        </SliderStateContainer>
        <SliderBarContainer>
          <SliderBarInput
            type="range"
            min="1"
            max="100"
            value={sliderState}
            onChange={handleChangeState}
          />
          <SliderPointContainer>
            {sliderPointList.map((element, index) => {
              return (
                <SliderPointDot
                  key={element}
                  value={element}
                  currentState={sliderState}
                />
              );
            })}
          </SliderPointContainer>
        </SliderBarContainer>

        <SliderBtnContainer>
          {sliderPointList.map(element => {
            return (
              <SliderBtn key={element} value={element} onClick={handleClickBtn}>
                {element}%
              </SliderBtn>
            );
          })}
        </SliderBtnContainer>
      </SliderContainer>
    </SliderDiv>
  );
}

const SliderDiv = styled.div`
  margin: 10px 0;
`;

const SliderContainer = styled.div`
  width: 400px;
  margin: 100px;
`;

const SliderTitle = styled.h2`
  margin: 10px 0;
`;

const SliderStateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  margin-bottom: 20px;
  background-color: var(--inputBackground);
  border: 1px solid var(--borderPrimary);
  border-radius: 5px;
`;

const SliderStateValue = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
`;
const SliderStateSimbol = styled.div`
  margin: 20px;
  color: var(--textSecondary);
`;

const SliderBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const SliderBarInput = styled.input`
  -webkit-appearance: none;
  position: absolute;
  width: 400px;
  height: 5px;
  background: linear-gradient(
    to right,
    var(--primary) 1%,
    var(--primary) ${props => props.value}%,
    var(--secondary) ${props => props.value}%,
    var(--secondary) 100%
  );
  border-radius: 50px;
  z-index: 20;
  cursor: pointer;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 23px;
    height: 23px;
    background: var(--primary);
    border: solid 3px white;
    border-radius: 100%;
    box-shadow: 0 1px 1px 0 #a5a5a5;
  }
`;

const SliderPointContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 0;
  margin: 10px 0;
`;

const SliderPointDot = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: ${props =>
    props.currentState < props.value ? "var(--secondary)" : "var(--primary)"};
`;

const SliderBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SliderBtn = styled.button`
  width: 45px;
  height: 20px;
  border: none;
  border-radius: 10px;
  font-size: 9px;
  color: var(--textSecondary);
  &:hover {
    background-color: var(--primary);
    color: #fff;
  }
`;
