const path = require('path');
module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@services': path.resolve(__dirname, 'src/services/index'),
            '@components': path.resolve(__dirname, 'src/components/index'),
            '@hooks': path.resolve(__dirname, 'src/hooks/index'),
            '@utils': path.resolve(__dirname, 'src/utils/index'),
            '@types': path.resolve(__dirname, 'src/types/index'),
        },
    };
    return config;
};
