/* Almeida Júnior tem 28 anos, pesa 120kg.
tem 1,85m de altura e seu IMC é de 35,04
Almeida Júnior nasceu em 1995. */

const nome = "Almeida Júnior";
const idade = 28;
const peso = 120;
const alturaEmM = 1.85;
let imc;
let anoNascimento;
const anoAtual = 2025

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = anoAtual - idade;  

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg.
tem ${alturaEmM}m de altura e seu IMC é de ${imc.toFixed(2)}
${nome} nasceu em ${anoNascimento}.`);