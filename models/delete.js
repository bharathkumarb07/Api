const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
    const deletedata = {
        TableName: 'testing_user',
        key: {
            id: event.pathParameters.id
        }
    };

    try {
        return dynamoDb.delete(deletedata, (error) => {
            if (error) {
                callback(error);
            }
            callback(error, deletedata.key);
        });
    }
    catch (err) {
        console.log(err);
    }

};

// module.exports = { DeleteUser }