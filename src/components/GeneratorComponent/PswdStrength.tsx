/* eslint-disable @typescript-eslint/no-explicit-any */
const PswdStrength = (props: { pswdCondition: any; pswdLength: any }) => {
  const condition = props.pswdCondition;
  const passwordLength = props.pswdLength;
  let Strength = "";
  let Level = "";

  if (passwordLength == 0) {
    Strength = "";
    Level = "";
  } else if (passwordLength > 0 && passwordLength < 8) {
    if (passwordLength > 0 && passwordLength < 3) {
      if (condition.upper || condition.lower) {
        Strength = "TOO WEAK!";
        Level = "tooWeak";
      }
      if (condition.number || condition.symbol) {
        Strength = "TOO WEAK!";
        Level = "tooWeak";
      }
    } else if (passwordLength >= 3 && passwordLength < 6) {
      if (condition.upper || condition.lower) {
        Strength = "WEAK";
        Level = "weak";
      }
      if (condition.number || condition.symbol) {
        Strength = "MEDIUM";
        Level = "medium";
      }
    } else if (passwordLength >= 6 && passwordLength < 8) {
      if (condition.upper || condition.lower) {
        Strength = "MEDIUM";
        Level = "medium";
      }
      if (condition.number || condition.symbol) {
        Strength = "STRONG";
        Level = "strong";
      }
    }
  } else if (passwordLength >= 8) {
    if (condition.upper || condition.lower) {
      Strength = "MEDIUM";
      Level = "medium";
    }
    if (condition.number || condition.symbol) {
      Strength = "STRONG";
      Level = "strong";
    }
  }

  return (
    <div className="PswdStrength">
      <p>STRENGTH</p>
      <div className="Container">
        <h2>{Strength}</h2>
        <div className={`BoxContainer ${Level}`}>
          <div id="Box1"></div>
          <div id="Box2"></div>
          <div id="Box3"></div>
          <div id="Box4"></div>
        </div>
      </div>
    </div>
  );
};

export default PswdStrength;
