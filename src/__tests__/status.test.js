'use strict';

const { get } = require("../status");

describe("status test", () => {

  it("when status is called in then return ok", async () => {
    const response = await get({});
    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual('It is ALIVE');
  });

});
