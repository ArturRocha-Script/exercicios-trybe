// exercício 01
let a = 8;
let b = 15;
//console.log(a+b, a-b, a*b, a/b, a%b);
//--------------------------------------------------------------
// exercício 02
// if (a > b) {
//     console.log('a é maior, Uhull!!');
// } else {
//     console.log('b é maior, que pena!');
// }
//--------------------------------------------------------------
// exercício 03
let c = 20;
// if (a > b && a > c) {
//     console.log('A é maior');
// } else if (b > a && b > c) {
//     console.log('B é maior');
// } else {
//     console.log('C é maior');
// }
//-----------------------------------------
// Exercício 04
// if (c > 10) {
//     console.log('positive');
// } else if (c < 10) {
//     console.log('negative');
// } else {
//     console.log('zero');
// }
//-----------------------------------------
//Exercício 05
let soma = a + b + c;
// if (soma == 180) {
//     console.log('true');
// } else if (soma !== 180) {
//     console.log('false');
// } else {
//    console.log('erro bipbippawn');   
// }
//--------------------------------
// Exercício 06
let chessPiece = 'bispo';
// switch (chessPiece.toLowerCase()) {
//     case 'rainha':
//         console.log('rainha: move-se em qualquer direção');
//         break;
//     case 'rei':
//         console.log('rei: move-se para qualquer casa adjacente');
//         break;
//     case 'peão':
//         console.log('peão: move-se uma casa por vez, para frente');
//         break;
//     case 'bispo':
//         console.log('bispo: move-se diagonalmente');
//         break;
//     case 'torre':
//         console.log('torre: move-se verticalmente e horizontalmente');
//         break;
//     case 'cavalo':
//         console.log('cavalo: move-se em forma de L, horizontalmente ou verticalmente');
//         break;
//         default:
//             console.log('erro, GameOver');             
// }
//---------------------------------------------------------
// Exercício 07
let nota = 88;
// if (nota < 0 || nota > 100) {
//     console.log('Erro, você foi desclassificado');
// } else if (nota >= 90) {
//     console.log('A');
// } else if (nota >=80) {
//     console.log('B');
// } else if (nota >= 70) {
//     console.log('C');
// } else if (nota >= 60) {
//     console.log('D');
// }else if (nota >= 50) {
//     console.log('E');
// }else {
//     console.log('F');
// }
//---------------------------------------------------------------
// Exercício 08
// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
//----------------------------------------------------------------
// Exercício 09
// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
//-----------------------------------------------------------------
//Exercício 10
let custo = 20;
let venda = 50;
// if (custo >= 0 && venda >= 0) {
let custoTotal = custo * 1.2;
let lucro = (venda - custoTotal) * 1000;
//    console.log(lucro);
// } else {
//     console.log('Valores não podem ser menor que zero');
// }
//----------------------------------------------------------------
// Exercício 11
let salarioBruto = 3500;
let inss;
let ir;
if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
     inss = salarioBruto * 0.11;
    //console.log(inss);
}
let salarioBase = salarioBruto - inss;
//console.log(salarioBase);
if (salarioBase >= 2826.66 && salarioBase <= 3751, 05) {
    ir = (salarioBase * 0.15) - 354.80;
}
console.log('Meu salario Liquido é: ', salarioBase - ir);

