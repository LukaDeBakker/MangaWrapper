const fetch = require('node-fetch');

var mangaDexUrl = 'https://api.mangadex.org'

module.exports = async function(req, res, next) {
    const username = req.body.username
    const password = req.body.password

    const payload = {
        "username": username,
        "password": password
    }

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
        errors: data.errors
    })})
}