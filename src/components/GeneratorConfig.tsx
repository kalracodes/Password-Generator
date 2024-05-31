import { MouseEventHandler, SetStateAction, useState } from "react";

import SliderIdle from "./GeneratorComponent/SliderIdle";
import CheckBoxContainer from "./GeneratorComponent/CheckBoxContainer";
import PswdStrength from "./GeneratorComponent/PswdStrength";
import GenerateBtn from "./GeneratorComponent/GenerateBtn";

const GeneratorConfig = (props: {
  passData: (
    arg0: number,
    arg1: { upper: boolean; lower: boolean; number: boolean; symbol: boolean }
  ) => void;
  generatePassword: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const [value, setValue] = useState(0);
  const [checkBox, setCheckbox] = useState({
    upper: false,
    lower: false,
    number: false,
    symbol: false,
  });

  const getValue = (sliderValue: SetStateAction<number>) => {
    setValue(sliderValue);
  };

  const getCheckbox = (
    checkboxData: SetStateAction<{
      upper: boolean;
      lower: boolean;
      number: boolean;
      symbol: boolean;
    }>
  ) => {
    setCheckbox(checkboxData);
  };

  props.passData(value, checkBox);

  return (
    <div className="GeneratorConfig">
      <SliderIdle onValueChange={getValue} />
      <CheckBoxContainer onCheckboxChange={getCheckbox} />
      <PswdStrength pswdLength={value} pswdCondition={checkBox} />
      <GenerateBtn onGenerateClick={props.generatePassword} />
    </div>
  );
};

export default GeneratorConfig;
