const bluebird = require("bluebird");

const fs = bluebird.promisifyAll(require("fs"));
const promise = bluebird.Promise;


let fileAccess = {};

async function getFileAsString (path){
    if((typeof(path)=="undefined")||(typeof(path)=="number")){
	throw "Enter a valid path as String";
    }    
    var text = await fs.readFileAsync(path, "utf-8"); 
    return text;
};

getFileAsJSON = (async function(path){
    
    if((typeof(path)=="undefined")||(typeof(path)=="number")){
        throw "Enter a valid path as String";
    }       
	var text = await getFileAsString(path);      
	var metrics = JSON.parse(text);
    return metrics;
});

saveStringToFile = (async function(path, text){
    if((typeof(path)=="undefined")||(typeof(path)=="number")){
        	throw "Enter a valid path as String";
    }
    if((typeof(text)=="undefined")||(typeof(text)=="number")){
	throw "Enter a valid text String to save";
    }   
	await fs.writeFileAsync(path, text);
    return true;
});

saveJSONToFile = (async function(path, metrics){
    
    if((typeof(path)=="undefined")||(typeof(path)=="number")){
	throw "Enter a valid path as String";
    }
    var metricstext = JSON.stringify(metrics, null, 4);
    saveStringToFile(path, metricstext);
    return true;
});

fileAccess.saveJSONToFile = saveJSONToFile;
fileAccess.saveStringToFile = saveStringToFile;    
fileAccess.getFileAsJSON = getFileAsJSON;
fileAccess.getFileAsString = getFileAsString;
module.exports = fileAccess;
       
