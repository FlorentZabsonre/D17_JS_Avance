import{ Promise } from 'es6-promise';
/*Ecrire une fonction testNUm qui prend en param un nombre et  
qui retourne une Promise qui test si le param est plus grand que 8
*/

function testNum (x:number)
{
    var prom= new Promise(function(resolve,reject)
    {
        if ( (x)>10)
        {
            resolve(' >10');
        }else reject ('<=10');
        
    });
    return prom;
}
testNum(12).then( v=>console.log(v) ).catch(err=>console.log('ERROR'));


/*Créer et use des Promises pour trier un tableau des string et
 l'afficher en majuscule.
Si le tableau ne contient pas que des  string, on rejecte la Promise.
*/

let tabString=["eee","zzz","aaa"];
let mots = ["des mots","piment","cafe","abricot"];
console.log(typeof mots);
function testString(tab)
{
    
    console.log(tab);
    var prom1= new Promise(function(resolve,reject)
    {
       tab.forEach(element => {
            element=element.UpperCase;
            console.log('ee');
            if(typeof element !=="string")
            {
                return reject('ce tableau n\' a pas que des string');
            }
        });
        resolve('Ce tableau n\'a que des string');
    });
    return prom1;
}

testString(tabString).then( (value) => console.log(value)).catch((err)=>console.log(err));
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
