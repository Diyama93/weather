
//une fonction qui nous affiche le maessage
function printMessage(city, temperature, pressure){
    console.log("A " + city + ", la température est de " + (temperature-273.15).toFixed(2) + "C et la pression est de "+ pressure + " pascal"
    );
}

//Fonction de gestion des errors
function printError(error){
    console.error(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;