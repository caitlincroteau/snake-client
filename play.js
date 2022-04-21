

const { connect } = require('./client');
console.log(5)
const { setupInput } = require('./input');

console.log("Connecting ...");
let conn = connect();

setupInput(conn);