// 'use strict';

// // make friends page
// module.exports = {
//     mode: 'development',
//     entry: './src/makeFriendCard.js',
//     output: {
//         filename: 'makeFriendCard.js',
//         path: __dirname + '/dist/js/makeFriendCard/'
//     },
//     watch: true,

//     devtool: "source-map",
// };

// // money page
// module.exports = {
//     mode: 'development',
//     entry: './src/moneyPage.js',
//     output: {
//         filename: 'moneyPage.js',
//         path: __dirname + '/dist/js/moneyPage/'
//     },
//     watch: true,

//     devtool: "source-map",
// };

// // withdraw page
// module.exports = {
//     mode: 'development',
//     entry: './src/withdrawPage.js',
//     output: {
//         filename: 'withdrawPage.js',
//         path: __dirname + '/dist/js/withdrawPage/'
//     },
//     watch: true,

//     devtool: "source-map",
// };

// // authorization page
// module.exports = {
//     mode: 'development',
//     entry: './src/authorization.js',
//     output: {
//         filename: 'authorization.js',
//         path: __dirname + '/dist/js/authorization/'
//     },
//     watch: true,

//     devtool: "source-map",
// };

'use strict';

// make friends page
module.exports = [{
    mode: 'development',
    entry: './src/makeFriendCard.js',
    output: {
        filename: 'makeFriendCard.js',
        path: __dirname + '/dist/js/makeFriendCard/'
    },
    watch: true,

    devtool: "source-map",
},
// money page
{
    mode: 'development',
    entry: './src/moneyPage.js',
    output: {
        filename: 'moneyPage.js',
        path: __dirname + '/dist/js/moneyPage/'
    },
    watch: true,

    devtool: "source-map",
},
// withdraw page
{
    mode: 'development',
    entry: './src/withdrawPage.js',
    output: {
        filename: 'withdrawPage.js',
        path: __dirname + '/dist/js/withdrawPage/'
    },
    watch: true,

    devtool: "source-map",
},
// authorization page
{
    mode: 'development',
    entry: './src/authorization.js',
    output: {
        filename: 'authorization.js',
        path: __dirname + '/dist/js/authorization/'
    },
    watch: true,

    devtool: "source-map",
},
// external registration page
{
    mode: 'development',
    entry: './src/externalRegistration.js',
    output: {
        filename: 'externalRegistration.js',
        path: __dirname + '/dist/js/authorization/'
    },
    watch: true,

    devtool: "source-map",
},
// external authorization page
{
    mode: 'development',
    entry: './src/externalAuthorization.js',
    output: {
        filename: 'externalAuthorization.js',
        path: __dirname + '/dist/js/authorization/'
    },
    watch: true,

    devtool: "source-map",
},
// forgot pass page
{
    mode: 'development',
    entry: './src/externalForgotPass.js',
    output: {
        filename: 'externalForgotPass.js',
        path: __dirname + '/dist/js/authorization/'
    },
    watch: true,

    devtool: "source-map",
}];