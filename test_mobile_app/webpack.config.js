'use strict';

// make friends page
module.exports = {
    mode: 'development',
    entry: './src/makeFriendCard.js',
    output: {
        filename: 'makeFriendCard.js',
        path: __dirname + '/dist/js/makeFriendCard/'
    },
    watch: true,

    devtool: "source-map",
};

// money page
module.exports = {
    mode: 'development',
    entry: './src/moneyPage.js',
    output: {
        filename: 'moneyPage.js',
        path: __dirname + '/dist/js/moneyPage/'
    },
    watch: true,

    devtool: "source-map",
};