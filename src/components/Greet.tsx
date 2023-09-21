type GreetProps = {
  name: string;
  // optional props
  messageCount?: number;
  //end of optional props
  isLoggedIn: boolean;
};

const greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
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
