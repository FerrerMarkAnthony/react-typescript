import { Name } from "./Person.types";

// Array of objects
type PersonListProps = {
  name: Name[];
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.name.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
