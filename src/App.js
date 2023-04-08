import { useState } from "react";
import { InputMoney } from "./InputMoney";

import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0.0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <InputMoney
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}
