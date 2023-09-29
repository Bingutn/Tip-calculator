import { useState } from "react";
import Bill from "./Bill";
import Service from "./Service";
import Total from "./Total";
import "./styles.css";
import Reset from "./Reset";

export default function App() {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  const tip = bill * ((percent1 + percent2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} onSetBill={setBill} />
      <Service
        percent={percent1}
        onPercent={setPercent1}
        text="How did you like the service?"
      />
      <Service
        percent={percent2}
        onPercent={setPercent2}
        text="How did your friend like the service?"
      />
      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
