type GreetProps = {
  name: string;
  messageCount: number;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        Hi {props.name}, you have {props.messageCount} unread messages
      </h2>
    </div>
  );
}
