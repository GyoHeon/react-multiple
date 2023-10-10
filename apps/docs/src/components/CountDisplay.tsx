export interface ICountDisplayProps {
  count: number;
}

const CountDisplay = ({ count }: ICountDisplayProps) => {
  console.log("CountDisplay");
  return <span>Count is {count}</span>;
};

export default CountDisplay;
