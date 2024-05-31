import TextField from "../components/TextField";
import GeneratorConfig from "../components/GeneratorConfig";
import { SetStateAction, useState } from "react";

const Main = () => {

  const [value, setValue] = useState(0);
  const [checkBox, setCheckbox] = useState({
    upper: false,
    lower: false,
    number: false,
    symbol: false,
  });

  const getData = (length: SetStateAction<number> , check: SetStateAction<{ upper: boolean; lower: boolean; number: boolean; symbol: boolean; }>) => {
    setValue(length);
    setCheckbox(check);
  }

  const [password, setPassword] = useState("P@$5W0rD!");

  const generatePassword = () => {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChar = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`";

    let final = "";
    let pswd = "";
    
    if (checkBox.upper) {
      final += upperCaseLetters;
    }
    if (checkBox.lower) {
      final += lowerCaseLetters;
    }
    if (checkBox.number) {
      final += numbers;
    }
    if (checkBox.symbol) {
      final += specialChar;
    }

    for (let i = 0; i < value; i++) {
      const randomChar = final.charAt(Math.random() * final.length);
      pswd += randomChar;
    }
    value != 0 && (checkBox.upper || checkBox.lower || checkBox.number || checkBox.symbol) && setPassword(pswd);
  }

  return (
    <main>
      <TextField generatedPassword={password}/>
      <GeneratorConfig passData={getData} generatePassword={generatePassword}/>
    </main>
  );
};

export default Main;
