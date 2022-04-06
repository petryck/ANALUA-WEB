import mysql from 'mysql'
import express from 'express'
const app = express()
import path from 'path'
import cors from 'cors'
import http from 'http'
const server = http.Server(app);
import { dirname } from 'path'
import { fileURLToPath } from 'url'
// import bodyParser from 'body-parser'
import ejs from 'ejs';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = 3030

app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);


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


  app.get('/categorias', (req, res) => {
    var categoria = req.query.categoria;


    if(req.query.filtro){

    }else{

    }
    
    var categoria_nome = 'FRASE INGLÊS';
    var produtos = [
      { name: 'Camisa Amarela', valor: "28,90"},
      { name: 'Camisa Roxa', valor: "28,90"},
      { name: 'Camisa Roxa', valor: "28,90"},
      { name: 'Camisa Roxa', valor: "28,90"}
  ];

    res.render(path.join(__dirname, '../src/pages/categorias'), {produtos:produtos, categoria:categoria, categoria_nome:categoria_nome});

      // res.sendFile(path.join(__dirname, '../src/pages/categorias.html'))
 
  })

  server.listen(port, function () {
    console.log(`Servidors Carregado ${server.address().port}`);
});