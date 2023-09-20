type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
        : `Welcome Guest`}
      <h2></h2>
    </div>
  );
};

export default greet;
