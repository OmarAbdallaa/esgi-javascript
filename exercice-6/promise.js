function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var timeout =function(resolve, reject){
    setTimeout(() => reject("timeout") , 5000);
};



var getStudents = function(resolve, reject){
    setTimeout(() => resolve([
        { name: "Dupont", cours: [ 1, 3, 5 ] }, { name: "Lea", cours: [ 2, 4 ] }, { name: "Charles", cours: [ 1 ] } 
    ]), getRandomInt(2000,4000));
}

var treatment = Promise
.race([ new Promise(getStudents), new Promise(timeout)])
.then((result) => console.log(result))
.catch((error) => console.log(error));

var getCourses = function(resolve, reject){
    setTimeout(() => resolve([
        { id: 1, name: "JS" }, { id: 2, name: "PHP"}, { id: 3, name: "C#" }, { id: 4, name: "F#" }, { id: 5, name: "CSS"} 
    ]), getRandomInt(1000,4000));
}
var treatment = Promise
.race([ new Promise(getCourses), new Promise(timeout)])
.then((result) => console.log(result))
.catch((error) => console.log(error));


var mappedBy = function(resolve, reject){
    setTimeout(() => resolve([
        { id: 1, name: "JS" }, { id: 2, name: "PHP"}, { id: 3, name: "C#" }, { id: 4, name: "F#" }, { id: 5, name: "CSS"} 
    ]), getRandomInt(1000,4000));
}
var treatment = Promise
.race([ new Promise(getCourses), new Promise(timeout)])
.then((result) => console.log(result))
.catch((error) => console.log(error));