// jest.config.js
module.exports = {
    transform: { '^.+\\.jsx?$': 'babel-jest', },
    moduleNameMapper: { '\\.(css|png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js', },
    testEnvironment: 'jest-environment-jsdom',
};