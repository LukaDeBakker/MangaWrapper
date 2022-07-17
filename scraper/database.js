const sql = require("mssql");

const config = {
    user: "manga",
    password: "manga",
    server: "localhost",
    database: "MangaWrapper",
    options: {
      trustServerCertificate: true
    }
};

module.exports = {
  createUserIfNotExists: async function(username) {
    // connect to your database
    await sql.connect(config, function (err) {
    
      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();

      // query to the database and get the records
      request.query(`if not exists(select username from Users where username = '${username}')
                      INSERT into Users (username) VALUES ('${username}')`,
        function (err, result) 
      {        
        if (err) console.log(err)
      });
    });
  }
}