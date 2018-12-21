const path = require('path');

module.exports = {
    entry: './src/mode1.js',
    mode:'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js/main.js')
    }
};