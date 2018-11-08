import{ Promise } from 'es6-promise';
let et : number =1;
let r: number=1.2;

console.log('entier '+et);
console.log('mon reel '+r);

let b: boolean= true;
let  str: string= 'string';
let strNb: string = '123 est un chiffre';
console.log('result'+ parseInt(strNb));
console.log(strNb.split(' '));
console.log(strNb.slice(3,7));
console.log(strNb.slice(-3));
console.log('-----------------------------');

let tab: number[]=[];
let tab1: Array<number>= [];
let tabInit=[1,2,3,4];
tab.push(0);
for (let index = 0; index < tabInit.length; index++) {
    const element = tabInit[index];
    console.log('for classiq ' + element);
    
}
console.log('-----------------------------');
for(let i in tabInit)
{
    console.log('let in '+ i);

}
console.log('-----------------------------');
for (let i of tabInit)
{
    console.log('let of ' + i);
}
console.log('-----------------------------');
tabInit.forEach((e,i) =>console.log('for each ' + i +' : '+ e));
console.log('-----------------------------');
tabInit.forEach(e => console.log('for each'+ e));
console.log('-----------------------------');
let carre= tabInit.map(e=>Math.pow(e,2));
console.log('carre '+ carre);
let somme= tabInit.reduce((a,e) => a += e);
console.log(somme);
//filter:lambda boolean, sort lambda : 0 , -1 ou 1
enum monEnum{A ,B, C};
let eu : monEnum =monEnum.A;
console.log('-----------------------------');

function carre1(x: number): number 
{
    return Math.pow(x,2);
}

let carrelambda= (x:number)=>Math.pow(x,2);
let puissance=(x:number , p?:number) =>
    p=== undefined ? Math.pow(x,2) : Math.pow(x,p);


    let sommeLambda=(x:number,...autre:number[]) =>
    autre.reduce((s,e)=>s+=e) +x ;
    console.log(sommeLambda(1,2,3,9,8));

    //Objet à la vollée
    let totoObject=
    {
        nom:'toto',
        prenom:'titi',
        affiche: function()
        {
            console.log('je m\'appelle '+this.prenom);
        }
    }
// import {Rezctangle} from './demo.ts'
    class Personnes
    {
        nom: string;
        prenom:string;
        constructor(nom:string, prenom:string)
        {
            this.nom=nom;
            this.prenom=prenom;
        }
        affiche():void
        {
            console.log ( `${this.nom} ${this.prenom}`);
        }
    }
    let mickey = new Personnes('mickey', 'mouse');
    totoObject.affiche();
    mickey.affiche();

    interface Figure
    {
        aire : () => number;
    }
    class Rectangles implements Figure
    {
        largeur: number;
        longueur: number;
        constructor(largeur: number, longueur: number)
        {
            this.largeur = largeur;
            this.longueur= longueur;
        }
        aire() : number
        {
            return this.largeur * this.longueur;
        }
    }
    class Carres extends Rectangles
    {
        constructor(cote: number)
        {
            super(cote,cote);
        }
    }
    let [d, g, ...autres]= [0,9];
    console.log('d= '+d+ ' et g = '+ g+'vet autres = '+ autres);

    console.log('------------------------------------------------------------------------------------');

function hello(onBefore, onAfter)
{
    if(onBefore)
    {
        onBefore();

    }
    console.log('hello');
    if(onAfter)
    {
        onAfter();
    }
}//ordonancer lappel de sa focntion dans une foonction en asynchrone:cest une promise
hello(()=> console.log('avant') ,()=> console.log('apres'));

function doAsyncTask(cb) 
{
    setTimeout ( ()=> {
    console.log('Asyn Task callinng Callback');
    cb();
    },1000);
}
doAsyncTask( ()=>console.log("callback Called") );
console.log('toto');

var prom= new Promise(function(resolve,reject)
{
    resolve('Bravo');
});
prom.then( (value) => console.log(value)).catch((err)=>console.log(err));
/*Ecrire une fonction testNUm qui prend en param un nombre et  
qui retourne une Promise qui test si le param est plus grand que 10
*/

/*Créer et use des Promises pour trier un tableau dez string et
 l'afficher en majuscule.
Si le tableau ne contient pas que des  string, on rejecte la Promise.
*/

