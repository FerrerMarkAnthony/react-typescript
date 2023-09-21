import "./App.css";
// import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import { Button } from "./components/Button";
// import { Input } from "./components/Input";
// import { Container } from "./components/Container";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";

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
    // <div className="App">
    //   <Greet name="Mark" messageCount={10} isLoggedIn={true} />
    //   <Person name={personName} />
    //   <PersonList name={nameList} />
    //   <Status status="loading" />
    //   <Heading>Placeholder text</Heading>
    //   <Oscar>
    //     <Heading>Oscar goes to leonardo dicaprio </Heading>
    //   </Oscar>
    //   <Button
    //     handleClick={(event, id) => {
    //       console.log("Button clicked", event, id);
    //     }}
    //   />
    //   <Input value="" handleChange={(event) => console.log(event)} />
    //   <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    // </div>
    // <div className="App">
    //   <ThemeContextProvider>
    //     <Box />
    //   </ThemeContextProvider>
    // </div>
    // <div className="App">
    //   <UserContextProvider>
    //     <User />
    //   </UserContextProvider>
    // </div>
    // <div className="App">
    //   <Private isLoggedIn={false} component={Profile} />
    // </div>
    // <div className="App">
    //   {/* <List
    //     items={["Batman", "Superman", "Wonder Woman"]}
    //     onClick={(item) => console.log(item)}
    //   />
    //   <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />  */}
    //   <List
    //     items={[
    //       {
    //         id: 1,
    //         first: "Bruce",
    //         Last: "Wayne",
    //       },
    //       {
    //         id: 2,
    //         first: "Clark",
    //         Last: "Kent",
    //       },
    //       {
    //         id: 3,
    //         first: "Princess",
    //         Last: "Diana",
    //       },
    //     ]}
    //     onClick={(item) => console.log(item)}
    //   />
    // </div>

    // <div className="App">
    //   <RandomNumber value={10} isPositive />
    // </div>
    <div className="App">
      <Toast position="center" />
    </div>
  );
}

export default App;
