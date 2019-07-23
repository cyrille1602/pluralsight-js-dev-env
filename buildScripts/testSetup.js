require('babel-register')();

//Disable webpack features that mocka doesn't understand
require.extensions['.css'] = function  () {};
