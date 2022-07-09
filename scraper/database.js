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