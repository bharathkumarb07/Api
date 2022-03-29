const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
    const data = JSON.parse(event.body);

    data.id = event.pathParameters.id;
    // data.UpdateAt = timestamp;

    const updatedata = {
        TableName: 'testing_user',
        Item: data
    };
    try {
        return dynamoDb.put(updatedata, (error) => {
            if (error) {
                callback(error);
            }
            callback(error, updatedata.Item);
        });
    }
    catch (err) {
        console.log(err);
    }
};

// module.exports = { UpdateData }