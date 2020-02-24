const path = require("path");
// es6 = import path from 'path'

//this is telling webpack any file that ends in .tsx (apart from node_modules) use babel-loader to load it
const rules = [
  { test: /\.tsx/, exclude: /node_modules/, loader: "babel-loader" }
];

module.exports = {
  //target you want to export code to web/native app etc...
  target: "web",
  //what mode the code is in
  mode: "development",
  //entry where the main js file will be in
  entry: "./src/index.tsx",
  //where you want webpack to output the code to...this matches the script tag in index.html
  output: {
    //once production ready code is built it will put the production code into this folder
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: { rules },
  //when importing files you won't have to add the file type at the end of the import statement
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  // webpack will get content from the root and export it to whatever port you choose. Here it's 5000
  // when running on the dev server it puts the code into memory and displays on that port
  devServer: {
    contentBase: "./",
    port: 5000
  }
};
