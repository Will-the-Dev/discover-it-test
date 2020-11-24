module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '@hooks': '<rootDir>/src/hooks/index.ts',
        '@services': '<rootDir>src/services/index.ts',
        '@components': '<rootDir>src/components/index.ts',
        '@types': '<rootDir>src/types/index.ts',
        '@utils': '<rootDir>src/utils/index.ts',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
