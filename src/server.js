import mysql from 'mysql'
import express from 'express'
const app = express()
import path from 'path'
import cors from 'cors'
import http from 'http'
const server = http.Server(app);
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = 3030

app.use(cors())
app.use('/', express.static(path.join(__dirname, '../public')))

var connection = mysql.createConnection({
    host: "ads-con.csvfil6euj3s.sa-east-1.rds.amazonaws.com",
    user: "ads",
    port: "3286",
    password: "99659819aA",
    database: "db",
    charset: "utf8mb4"
  });
  
  
  connection.connect(function(err) {
  
    if(err){
      console.log('ERRO AO ACESSAR DB --> MYSQL')
    }else{
        console.log('CONECTADO DB --> MYSQL')
    }
  
  }); 


  console.log(path.resolve(__dirname, '../public/assets/js'))

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })

  server.listen(port, function () {
    console.log(`Servidors Carregado ${server.address().port}`);
});