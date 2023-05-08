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
if (nota < 0 || nota > 100) {
    console.log('Erro, você foi desclassificado');
} else if (nota >= 90) {
    console.log('A');
} else if (nota >=80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');
} else if (nota >= 60) {
    console.log('D');
}else if (nota >= 50) {
    console.log('E');
}else {
    console.log('F');
}
