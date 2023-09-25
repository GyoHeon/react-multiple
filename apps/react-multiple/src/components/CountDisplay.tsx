interface ICountDisplay {
  count: number;
}

const CountDisplay = ({ count }: ICountDisplay) => {
  console.log("CountDisplay");
  return <span>Count is {count}</span>;
};

export default CountDisplay;
