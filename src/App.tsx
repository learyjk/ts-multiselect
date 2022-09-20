import { Select } from "./Select";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "fourth", value: 4 },
  { label: "fifth", value: 5 },
];

function App() {
  return (
    <>
      <h1>Hi</h1>
      <Select options={options} />
    </>
  );
}

export default App;