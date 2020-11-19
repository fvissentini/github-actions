"use strict";

module.exports.get = async function(event, context) {
  return {
    statusCode: 200,
    body: "It is ALIVE",
    headers: {
      "Content-Type": "application/json"
    }
  };
}
