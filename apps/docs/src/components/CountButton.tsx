export interface ICountButtonProps {
  onClick: () => void;
}

const CountButton = ({ onClick }: ICountButtonProps) => {
  return <button onClick={onClick}>count up</button>;
};

export default CountButton;
