type StatusProps = {
  status: string;
};

export default function Status(props: StatusProps) {
  const { status } = props;
  return (
    <div>
      {status === "loading" && <h2>Loading...</h2>}
      {status === "success" && <h2>Data fetched successfully</h2>}
      {status === "fail" && <h2>Failed in fetching data</h2>}
    </div>
  );
}
