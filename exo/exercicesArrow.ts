let listEntier= [1,12,14,2,3,40,4,9,7,11];
let list=[1,2,3,4];
//let sum=(x:number,y:number)=>x+y;
let sum= listEntier.reduce(function(x:number,y:number){return x+y});
console.log('somme des elements du tableau = '+sum);
console.log('-------------------------------------------------------------------------');

let moyenne=sum/ listEntier.length;
console.log('moyenne des elements du tableau = '+moyenne);
console.log('-------------------------------------------------------------------------');

let nbSupAsix=listEntier.filter((x)=>x>6 );
console.log('tab des elements sup à 6'+nbSupAsix);
console.log('-------------------------------------------------------------------------');

let nbElementTab=listEntier.reduce((compteur) => compteur+=1);
console.log('nombre d\'element dans le tableau : '+nbElementTab);
console.log('-------------------------------------------------------------------------');

class Persone
 {
    nom:string;
    prenom:string
    constructor(nom:string, prenom:string)
    {
        this.nom=nom;
        this.prenom=prenom;
    } 
 }
 let p1= new Persone('bond','james');
 let p2= new Persone('larson','nicky');
 let p3= new Persone('jacquin','quentin');
 
 let listPersonne:Persone[]=[];
let orderByNom=(e1:Persone,e2:Persone) =>(e1.nom<e2.nom) ? -1 :(e1.nom>e2.nom) ? 1 :0;
let orderByPrenom=(e1:Persone,e2:Persone) =>(e1.prenom<e2.prenom) ? -1 :(e1.prenom>e2.prenom) ? 1 :0;
 listPersonne.push(p1);
 listPersonne.push(p2);
 listPersonne.push(p3);
 //let orderNom= listPersonne.sort(orderByNom);
 console.log('---------------------------------Par nom---------------------------------');
 console.log( listPersonne.sort(orderByNom));
 console.log('-------------------------------------------------------------------------');

 console.log('---------------------------------Par prenom------------------------------');
 console.log( listPersonne.sort(orderByPrenom));
 console.log('-------------------------------------------------------------------------');

 console.log('--------------------------------affiche les noms------------------------');
 let affichNom=(e:Persone) => e.nom;
 console.log(listPersonne.map(affichNom));
 console.log('-------------------------------------------------------------------------');

 console.log('----------affiche les noms maj et le prenom des personne trié en decroissant------------------------');
let orderDecroissant=(e1:Persone,e2:Persone) =>(e1.nom<e2.nom) ? 1 :(e1.nom>e2.nom) ? -1 :0;
let nomMaj=(e:Persone) => (e.nom).toUpperCase();
let nomMaj1= listPersonne.forEach(element =>{
    element.nom=element.nom.toUpperCase;
})
//console.log(listPersonne.sort(orderDecroissant));


