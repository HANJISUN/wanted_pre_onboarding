import React, { useState } from "react";
import styled from "styled-components";

const Slider = () => {
  const [sliderState, serSliderState] = useState(1);

  return (
    <div>
      <h2>Slider</h2>
      <SliderContainer>
        <SliderStateBox>
          <SliderStateValue>{sliderState}</SliderStateValue>
          <SliderStateSimbol>%</SliderStateSimbol>
        </SliderStateBox>
        <SliderBox>
          <SliderBar />
        </SliderBox>
      </SliderContainer>
    </div>
  );
};

const SliderContainer = styled.div`
  display: flex;
  width: 450px;
  height: 40px;
`;

const SliderBox = styled.div`
  position: relative;
`;

const SliderBar = styled.div`
  width: 450px;
  height: 5px;
  background-color: var(--secondary);
`;

export default Slider;
