let note : array = [12,20,19,15,4];
let avg : number = 0;
for(let n of note){
	avg = avg + n;
}
avg = avg + note.length;
min = note[0];
for(let n of note){
	if (min < n){
		min = n;
	}
}

let toto = {
              nom           : "Bob",
              prénom        : "Kelso",
              dateNaissance : new Date(1960, 8, 17),
              nomComplet    : function() {
                   return `${this.nom} ${this.prénom}, né le ${this.dateNaissance}`
              }
};
toto.nomComplet();
 
class Personne {
              nom           : string;
              prénom        : string;
              dateNaissance : Date;
              nomComplet() {
                   return `${this.nom} ${this.prénom}, né le ${this.dateNaissance}`
              }
constructor(nom: string, prénom: string, dn: Date) { this.nom = nom;
this.prénom = prénom;
this.dateNaissance = dn;
} }
let titi = new Personne("Bob", "Kelso", new Date(1960, 8, 17) );

interface Surface2D {
	Aire : () => number; 
	Périmètre: () => number;
}
class Rectangle implements Surface2D {
        largeur : number;
	Hauteur : number;
	constructor(L: number, H:number) {this.largeur=L; this.hauteur=H;}
	Aire(){return this.largeur*this.hauteur}
	Périmètre(){return 2*(this.largeur+this.hauteur)}
}
let surface : Surface2D = new Rectangle()
class Carre extends Rectangle {
	constructor (côté: number) {super(côté, côté)}
}

interface maStructureDeDonnées {
	x : number;
	y : number;
	rayon? : number; 
}
let donnée_1 : maStructureDeDonnées = {x: 32, y: 64},
	Donnée_2 : maStructureDeDonnées = {x: 16, y: 96, rayon: 128};

enum Color { Red, Green, Blue };
var myColor: number = Color.Green; // oui, var existe tjs ;)
console.log('myColor = ' + myColor);
var myColor2: string = Color[0];
console.log('myColor2 = ' + myColor2);

var list1: number[] = [1, 2, 3];
console.log('list1 array = ' + list1);
var list2: Array<number> = [1, 2, 3];
console.log('list2 array = ' + list2);
console.log('anyList[] = ' + anyList);
anyList[1] = 100;
console.log('anyList[] = ' + anyList);
var list3:string[] = new Array(10);
console.log('list3 = ' + list3);

var myUnionNumber: number | number[];

myUnionNumber = 100;

if (typeof myUnionNumber === 'number') {
    console.log('myUnionNumber is a number');
}
else {
    console.log('myUnionNumber is now an object');
}

myUnionNumber = [100, 200, 300];

if (typeof myUnionNumber === 'object') {
    console.log('myUnionNumber is now an object');
}
else {
    console.log('myUnionNumber is a number');
}
var myVarType: string = typeof myUnionNumber;

switch (myVarType) {
    case 'number':
        {
            console.log('myUnionNumber is a number');

            break;
        }
    case 'object':
        {
            console.log('myUnionNumber is now an object');
            break;
        }
}

function add(a: number, b: number): number {
        return a + b;
    }
    console.log('named function');
    console.log('5 + 2 = ' + add(5, 2));
var add2 = function (a: number, b: number): number {
        return a + b;
    }
    console.log('anonymous function');
    console.log('5 + 5 = ' + add2(5, 5));
var add3 = (a: number, b: number): number => {
        return a + b;
    }
    console.log('arrow function');
    console.log('10 + 5 = ' + add3(10, 5));

interface pet {
        name: string;
        age: number;
        weight: number;
    }
var myPets: pet[] = [
        { name: 'Sally', age: 18, weight: 85 },
        { name: 'Jasmine', age: 9, weight: 55 },
        { name: 'Rush', age: 15, weight: 45 },
        { name: 'Roxie', age: 6, weight: 85 }
    ];
var compareAge = function (a: pet, b: pet) {
        if (a.age > b.age) { return -1; }
        if (a.age < b.age) {return 1; }
        return 0;
    }
    console.log(myPets.sort(compareAge));

class employee2 {
        userId: string;

        displayUserId() {
            setTimeout(() => {
                console.log(`"this.UserId" with an arror function is: ${this.userId}`);
            }, 1000);
        }
    }

    // Creating an object of type employee.
    var myEmployee2 = new employee2();
    myEmployee2.userId = 'abc123';

    // Calling the displayUserId method.  
    // Notice "this.userId" returns "abc123".
    myEmployee2.displayUserId();

// create a function to be used as a callback.  This is our callback function.
    var myCB = function () {
        console.log('The callback just ran...');
    };

    // create a function and pass in the callback method.
    function myFunction(cb: () => void) {
        cb();
    }

    myFunction(myCB); // calling the new function and pass in the callback.
