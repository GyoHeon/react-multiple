interface ICountDisplay {
  count: number;
}

const CountDisplay = ({ count }: ICountDisplay) => {
  return <span>Count is {count}</span>;
};

export default CountDisplay;
