const fetch = require('node-fetch');

var mangaDexUrl = 'https://api.mangadex.org'

module.exports = async function(req, res, next) {
    // Take data out of request body.
    const username = req.body.username
    const password = req.body.password

    // Create JSON payload.
    const payload = {
        "username": username,
        "password": password
    }

    // Call URL and retrieve data.
    // Then return this data.
    await fetch(`${mangaDexUrl}/auth/login`, 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'POST',
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {return res.json({
        result: data.result,
        errors: data.errors,
        token: data.token
    })})
}