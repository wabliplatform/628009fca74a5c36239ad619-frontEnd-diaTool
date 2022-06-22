const path = require('path');

module.exports = {
  entry: {
	'HomePage' : './javascript/HomePage.js',
	'History' : './javascript/History.js',
	'Assess' : './javascript/Assess.js',
	'UploadAlgo' : './javascript/UploadAlgo.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};