const superagent = require('superagent');

function performGet(url, onData, onError) {

    // console.log(url)

    superagent.get(url)
        .then(response => {

            // res.body, res.headers, res.status
            onData(response.text)
        })
        .catch(error => {

            // err.message, err.response
            onError(error)
        });
}

module.exports = {performGet}
