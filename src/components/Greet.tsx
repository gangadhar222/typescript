type GreetProps = {
  name: string;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>Hi {props.name}, you have 10 unread messages</h2>
    </div>
  );
}