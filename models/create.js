
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = (event, callback) => {
    const data = JSON.parse(event.body);

    data.id = uuid.v1();
    data.createdAt = Date.now();
    data.updatedAt = Date.now();
    data.isActive = "1"

    const createData = {
        TableName: 'testing_user',
        Item: data
    };

    try {
        return dynamoDb.put(createData, (error, data) => {
            console.log(error)
            if (error) {
                callback(error);
            }
            callback(error, createData.Item);
        });
    }
    catch (err) {
        console.log(err);
    }
};
