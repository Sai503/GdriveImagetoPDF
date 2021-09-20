const {google} = require('googleapis');
const fs = require('fs');

exports.genPDFHandler = async (event) => {
    if (event.httpMethod !== 'POST') { //initial verification
        throw new Error(`genPDF only accepts POST method, you tried: ${event.httpMethod} method.`);
    }
    //code goes here




    const response = { //http response
        statusCode: 200,
        body: JSON.stringify()//response body
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response; //end lambda
}
