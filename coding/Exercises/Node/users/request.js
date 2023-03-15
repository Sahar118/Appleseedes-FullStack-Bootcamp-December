const request = require('request');

const request = require('request');

let options = {
    url: 'https://6403106df61d96ac48766ebe.mockapi.io/users/user',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'localhost'
    }
};

request(options, (error, response, body) => {
    let json = JSON.parse(body);
    console.log(json);
});
