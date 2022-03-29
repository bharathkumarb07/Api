const createuser = require('./models/create');
const readall = require('./models/readall');
const updateuser = require('./models/update');
const deleteuser = require('./models/delete');


module.exports.create = (event, context, callback) => {
  createuser(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };
    context.succeed(response);
  });
};


module.exports.readall = (event, context, callback) => {
  readall(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};


module.exports.update = (event, context, callback) => {
  updateuser(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};


module.exports.delete = (event, context, callback) => {
  deleteuser(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

