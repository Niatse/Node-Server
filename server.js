
const http = require('http')

const fs = require('fs')
const host = '127.0.0.1'
const port = 3000

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async() => {
  let data = await CoinGeckoClient.ping();
};


const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'text/html'})
   fs.readFile('index.html', 'utf8', (err,data) => {
       if(err){
           res.writeHead(404)
           res.writeHead("Archivo no encontrado!")
       }else{
           res.write(data)
       }
       res.end()
   })
  
})

server.listen(port, host, () =>{
    console.log("Servidor funcionando en",port,host)
})