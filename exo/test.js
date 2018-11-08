"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
/*Ecrire une fonction testNUm qui prend en param un nombre et
qui retourne une Promise qui test si le param est plus grand que 8
*/
function testNum(x) {
    var prom = new es6_promise_1.Promise(function (resolve, reject) {
        if ((x) > 10) {
            resolve(' >10');
        }
        else
            reject('<=10');
    });
    return prom;
}
testNum(12).then(function (v) { return console.log(v); })["catch"](function (err) { return console.log('ERROR'); });
/*Créer et use des Promises pour trier un tableau des string et
 l'afficher en majuscule.
Si le tableau ne contient pas que des  string, on rejecte la Promise.
*/
var tabString = ["eee", "zzz", "aaa"];
var mots = ["des mots", "piment", "cafe", "abricot"];
console.log(typeof mots);
function testString(tab) {
    console.log(tab);
    var prom1 = new es6_promise_1.Promise(function (resolve, reject) {
        tab.forEach(function (element) {
            element = element.UpperCase;
            console.log('ee');
            if (typeof element !== "string") {
                return reject('ce tableau n\' a pas que des string');
            }
        });
        resolve('Ce tableau n\'a que des string');
    });
    return prom1;
}
testString(tabString).then(function (value) { return console.log(value); })["catch"](function (err) { return console.log(err); });
/*
let mots = ["des mots","piment","cafe","abricot"];
const sortTabString = (tab) =>{tab.sort()};
const toutMaj = (tab) =>{
    return new Promise((resolve, reject) =>{
        let maj = tab.map(e =>{
            console.log(typeof e)
            if(typeof e === "string")
                return e.toUpperCase();
            else
                reject("Not only string in tab");
            });
        resolve(maj);
    });
};
toutMaj(mots).
    then((result)=>console.log(result)).
    catch((err)=>console.log(err));
*/
