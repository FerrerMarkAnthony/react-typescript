import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "bruce",
    last: "wayne",
  };

  const nameList = [
    {
      first: "bruce",
      last: "wayne",
    },
    {
      first: "clark",
      last: "kent",
    },
    {
      first: "princess",
      last: "diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="Mark" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList name={nameList} />
    </div>
  );
}

export default App;
