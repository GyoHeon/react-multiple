interface ICountButton {
  onClick: () => void;
}

const CountButton = ({ onClick }: ICountButton) => {
  return <button onClick={onClick}>count up</button>;
};

export default CountButton;
