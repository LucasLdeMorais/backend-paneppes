const awsServerlessExpress = require("aws-serverless-express");

const { connect } = require("./mongoose");

let connection = null;

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (connection === null) connection = await connect();
  const app = require("./src/app");
  const server = awsServerlessExpress.createServer(app);
  return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
};