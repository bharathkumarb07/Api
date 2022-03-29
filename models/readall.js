const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {

    const params = {
        TableName: 'testing_user',
        IndexName: "ACTIVEINDEX",
        ScanIndexForward: false,
        KeyConditionExpression: "isActive = :isActive",
        ExpressionAttributeValues: {
            ':isActive': "1",
            // ':Depart': "GD"
        }
    };
    if (event.queryStringParameters) {
        params.FilterExpression = "contains(#Depart , :Depart)";
        params.ExpressionAttributeNames = {
            '#Depart': 'Depart',
        };
        params.ExpressionAttributeValues = {
            ':Depart': event.queryStringParameters.Depart,
            // ':Depart': "GD"
        };
    }
    console.log(params, "params")
    try {
        return dynamoDb.query(params, (error, data) => {
            console.log(error, "error")
            if (error) {
                callback(error);
            }
            // console.log(data.Items);
            callback(error, data);
        });
    }
    catch (err) {
        console.log(err);
        callback(err);
    }
};

// module.exports = { GetAllData }