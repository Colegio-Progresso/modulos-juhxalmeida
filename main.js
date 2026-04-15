import {calculaMedia} from './calculaMedia.js'

const notas = [2, 8, 5, 6, 7, 9, 4]

const media = calculaMedia(notas)

console.log(media)

//cria uma funcao que verifica se o aluno foi aprovado, esta de recuperacao ou foi reprovado, mostrar na tela a media e a situacao do aluno

//regra do negocio
//aprovado - nota maior ou igual a 7
//recuperacao - nota entre 5 e 7
//reprovado - nota menor que 5
