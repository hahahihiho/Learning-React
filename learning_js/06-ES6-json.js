
let json = {first:1,second:2,third:3};
let log = console.log;
function setCustomJson({first,third}){
    log(third);
}

setCustomJson(json);