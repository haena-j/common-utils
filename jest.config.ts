module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['jest-plugin-context/setup'],
  testPathIgnorePatterns: ['/node_modules'],
  testMatch: ['**/?(*.)+(test).ts?(x)'],
};
