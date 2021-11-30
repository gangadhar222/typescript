import "./App.css";
import Greet from "./components/Greet";
import PersonList from "./components/PersonList";

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
    </div>
  );
}

export default App;
