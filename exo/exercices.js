// Exercice 1
console.log('exercice 1');
function moyenneNote(tabMoyenne) {
    var result = 0;
    for (var _i = 0, tabMoyenne_1 = tabMoyenne; _i < tabMoyenne_1.length; _i++) {
        var iterator = tabMoyenne_1[_i];
        result += iterator;
    }
    console.log(' la somme des moyene' + result);
    return result / tabMoyenne.length;
}
var tab2 = [1, 2, 7, 0, 4];
console.log('la moyenne est de ' + moyenneNote(tab2));
console.log('-----------------------------');
function noteMax(tabMoyenne) {
    var res1 = tabMoyenne[0];
    for (var index = 1; index < tabMoyenne.length; index++) {
        if (res1 < tabMoyenne[index]) {
            var tmp = res1;
            res1 = tabMoyenne[index];
            tabMoyenne[index] = tmp;
        }
    }
    return res1;
}
console.log('note Max ' + noteMax(tab2));
console.log('-----------------------------');
function noteMin(tabMoyenne) {
    var res1 = tabMoyenne[0];
    for (var index = 0; index < tabMoyenne.length; index++) {
        if (res1 > tabMoyenne[index]) {
            var tmp = res1;
            res1 = tabMoyenne[index];
            tabMoyenne[index] = tmp;
        }
    }
    return res1;
}
console.log('note min ' + noteMin(tab2));
console.log('-----------------------------');
function changementNotation(moyenne20) {
    var note10 = (moyenne20 * 10) / 20;
    return note10;
}
console.log('note sur 1O = ' + changementNotation(14));
console.log('-----------------------------');
function selectionNote(noteMax, noteMin, tabNote) {
    ;
    for (var _i = 0, tabNote_1 = tabNote; _i < tabNote_1.length; _i++) {
        var iterator = tabNote_1[_i];
        if (iterator > noteMin && iterator < noteMax) {
            console.log('note comprise entre ' + noteMin + ' et ' + noteMax + ' : ' + iterator);
        }
    }
}
var tab3 = [5, 17, 4, 10, 12, 14];
selectionNote(18, 2, tab3);
console.log('----------------------------------------------');
console.log('exercice 2');
var str1 = 'slice renvoie un objet tableau, contenant une copie superficielle (shallow copy) d\'une portion du tableau d\'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.';
var copieTout = str1.slice();
console.log('copier tout le string ' + copieTout);
var copie04 = str1.slice(0, 4);
console.log('copier unne partie du string(de pos 0 à pos 4):' + copie04);
var copie1015 = str1.slice(10, 15);
console.log('copier unne partie du string(de pos 10 à pos 15): ' + copie1015);
var copie34Fin = str1.slice(34, str1.length);
console.log('copier unne partie du string(de pos 34 à pos fin): ' + copie34Fin);
var copie34Findepassé = str1.slice(34, (str1.length + 1000));
console.log('copier unne partie du string(de pos 34 à pos fin depassé) :' + copie34Findepassé);
var copieNegatif = str1.slice(-4);
console.log('copier unne partie du string(negatif): ' + copieNegatif);
var copieZero = str1.slice(0);
console.log('copier unne partie du string(negatif): ' + copieZero);
console.log('----------------------------------------------');
console.log('exercice 7');
var lesCouleur;
(function (lesCouleur) {
    lesCouleur[lesCouleur["bleu"] = 0] = "bleu";
    lesCouleur[lesCouleur["noir"] = 1] = "noir";
    lesCouleur[lesCouleur["blanc"] = 2] = "blanc";
})(lesCouleur || (lesCouleur = {}));
var numbre = lesCouleur[1];
console.log('numbre =' + numbre);
console.log('----------------------------------------------');
console.log('exercice 8');
var tab4a = [2, 3, 44, 5, 0];
console.log(tab4a);
var tab4b = [2, 3, 44, 5, 0];
console.log(tab4b);
var tab4 = [1, true, "three"];
console.log(tab4);
var tab4c = new Array(10);
console.log(tab4c);
console.log('----------------------------------------------');
console.log('exercice 9');
var myUnionVar;
console.log('UnionVar before setting a value =' + myUnionVar);
myUnionVar = 5;
console.log('typeof myUnionVar=' + typeof myUnionVar);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
var p0;
var tmp1 = typeof p0;
if (tmp1 === 'number') {
    console.log('ok');
}
/*
switch (tmp1)
{
    case 'number':
    console.log('ok cest number'); break;
    case
}
*/
console.log('----------------------------------------------');
console.log('exercice 10');
function addition2nb(numb1, numb2) {
    var res = numb1 + numb2;
    return res;
}
var adddition2nb0 = function (x, y) { return x + y; };
var result2 = addition2nb(4, 2);
console.log('addition de 2 nb : ' + result2);
var result2Anonym = adddition2nb0(4, 2);
console.log('addition anonyme de 2 nb' + result2Anonym);
var arrow = function (x1, y1) { return x1 + y1; };
var resultLambda = arrow(2, 4);
console.log('addition de 2 nb(fct en lambda):' + resultLambda);
console.log('----------------------------------------------');
console.log('exercice 3');
var Personne = {
    nom: 'kuzan',
    prenom: 'Aokiji',
    dateNaissance: '12/12/2001',
    nomComplet: function () { return 'nomComplet : ' + this.nom + ' ' + this.prenom; }
};
var rr = Personne.nomComplet();
console.log(rr);
