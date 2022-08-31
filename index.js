//hent biblioteket IP 
const ip = require('ip')
//fordi vi har hentet biblioteket IP kan vi hurtoigt få fat på ip adressen
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 4040

//serve en statisk mappe i roden 
app.use('/', express.static('public'))

//Hvis der kommer klienter til endpointet /hvaler
app.get('/api/hvaler', (req, res)=>{
    const obj = {
        'blåhval':{
            'farve': 'grøn',
            'vægt':'1/2 mazda'
        }
    }
    res.json(obj)
})

//Hvis der kommer klienter til endpointet /hvaler
app.get('/api/dato', (req, res)=>{
    res.send('Du er kommet til mit dato api')
})

//serveren skal bare sidde og køre på porten
app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
}) 