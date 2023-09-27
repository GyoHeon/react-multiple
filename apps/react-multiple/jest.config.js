const module = {
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
  testRegex: "(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default module;
