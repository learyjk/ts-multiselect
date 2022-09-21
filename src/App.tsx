import { useState } from "react";
import { Select, SelectOption } from "./Select";
import styles from "./app.module.css";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "fourth", value: 4 },
  { label: "fifth", value: 5 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <main className={styles.main}>
      <h1>Select Components</h1>
      <br />
      <h2>Multiple Select</h2>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => {
          setValue1(o);
        }}
      />
      <br />
      <h2>Single Select</h2>
      <Select
        options={options}
        value={value2}
        onChange={(o) => {
          setValue2(o);
        }}
      />
    </main>
  );
}

export default App;
