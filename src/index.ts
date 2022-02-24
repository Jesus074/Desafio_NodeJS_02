/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

const nome = 'Alef Lima'
const altura =1.71
const idade = 22
const peso = 70
const dev = true

const aluno1 = [nome, idade, peso, dev]


const nome2 = 'Jenoval Silva'
const altura2 = 1.70
const idade2 = 53
const peso2 = 180
const dev2 = true

const aluno2 = [nome2, idade2, peso2, dev2]


const nome3 = 'Carlos Gomes'
const altura3 =1.60
const idade3 = 19
const peso3 = 60
const dev3 = false

const aluno3 = [nome3, idade3, peso3, dev3]


const nome4 = 'Genebra Silva'
const altura4 =1.99
const idade4 = 32
const peso4 = 67
const dev4 = true

const aluno4 = [nome4, idade4, peso4, dev4]


const nome5 = 'Marilene Oliveira'
const altura5 =1.65
const idade5 = 82
const peso5 = 50
const dev5 = false

const aluno5 = [nome5, idade5, peso5, dev5]


const soma = idade + idade2 + idade3 + idade4 + idade5;

console.log('A soma da idade dos alunos é: ', soma);

const nomes = [nome, nome2, nome3, nome4, nome5]

console.log('O nome dos alunos é', nomes);

const imc = peso / (altura * altura);
const imc2 = peso2 / (altura2 * altura2);
const imc3 = peso3 / (altura3 * altura3);
const imc4 = peso4 / (altura4 * altura4);
const imc5 = peso5 / (altura5 * altura5);

const somaImc = imc + imc2 + imc3 + imc4 + imc5;
const mediaImc = somaImc / 5;

console.log('A média do imc dos alunos é:', mediaImc);

const totalDev = [dev, dev2, dev3, dev4, dev5];
let calcDev = 0;
totalDev.forEach(a => a ? calcDev++ : a);

console.log('O total de devs é:', calcDev);

var nome1split = nome.split(' ')
var nome2split = nome2.split(' ')
var nome3split = nome3.split(' ')
var nome4split = nome4.split(' ')
var nome5split = nome5.split(' ')

console.log('Os alunos com nome Silva são:')

if (nome1split[1] === 'Silva') {
	console.log(nome);
} 
if (nome2split[1] === 'Silva') {
	console.log(nome2);
} 
if (nome3split[1] === 'Silva') {
	console.log(nome3);
} 
if (nome4split[1] === 'Silva') {
	console.log(nome4);
} 
if (nome5split[1] === 'Silva') {
	console.log(nome5);
} 
});
