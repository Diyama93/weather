
var http = require('http');
var printer = require('./printer');

function get(city){

    //faire une requete vers l'url de API
    var request = http.get("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=a39ab6bb7ce1b30ad2f71aed83cd88e8", function(response){
        //console.log(response.statusCode);

        //Lire le contenu du fichier  
        var body = "";

        response.on('data', function (chunk) {
            body += chunk;
        });


        //Quel est le type du contenu récupérer? avec typeof body

        //faire le parcing(convertir)
        response.on('end', function ()  {
            if(response.statusCode === 200){            
                try {
                    var data_weather = JSON.parse(body)
                    //console.log(typeof data_weather);
            
                    //récuprer de des info
                    printer.printMessage(city, data_weather.main.temp, data_weather.main.pressure);            
                } catch (error) {
                    //console.error(error.message);ou
                    printer.printError({ message : "Veillez vérifier la ville saisie"});
                }
            }else{
                printer.printError({message : "Impossible de récupérer les informations"});
            }
            
        });       
    })
    request.on('error', printer.printError) ;
}

module.exports.get = get;