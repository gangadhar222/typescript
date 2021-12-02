import "./App.css";
import Greet from "./components/Greet";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const namelist = [
    {
      first: "Sachin",
      last: "Tendulkar",
    },
    {
      first: "M.S",
      last: "Dhoni",
    },
    {
      first: "Rahul",
      last: "Dravid",
    },
  ];
  return (
    <div className="App">
      <Greet name="Gangadhar" messageCount={22} />
      <PersonList nameList={namelist} />
      <Status status="loading" />
    </div>
  );
}

export default App;
