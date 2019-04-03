// XHR - xmlHttpRequest
let rides = [];

const domStringBuilder = (arrayToPrint) =>{
    console.log(arrayToPrint);
    // INSERT for loop
    // arrayToPrint.name
    // build up domString
    // call printToDom
};

function executeThisCodeAfterFileLoads(){
    const data = JSON.parse(this.responseText);
    rides = data.rides;
    domStringBuilder(data.rides);
};

function executeThisCodeIfXHRFails(){
    console.error('oh shit');
};

const getRidesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/rides.json')
    myRequest.send();
};

const init = () => {
    getRidesData();
};

init();