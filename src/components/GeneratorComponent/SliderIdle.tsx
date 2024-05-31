import { useState } from "react";

const SliderIdle = (props: { onValueChange: (arg0: number) => void }) => {
  const [value, setValue] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };
  props.onValueChange(value);

  const SliderPercentage = value * 5;

  const sliderStyle = {
    background: `linear-gradient(90deg, #A4FFAF ${SliderPercentage}%, #18171F ${SliderPercentage}%)`,
  };

  return (
    <div className="SliderIdle">
      <div className="SliderText">
        <p>Character Length</p>
        <h1>{value}</h1>
      </div>
      <input
        className="Slider"
        style={sliderStyle}
        type="range"
        min="0"
        max="20"
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SliderIdle;
