import User from "./User.js";

export default class Docente extends User {
 constructor(nome, email, nascimento, role = 'docente', ativo = true) {
   super(nome, email, nascimento, role, ativo)
 }

 aprovarEstudante(estudante, curso) {
   return `estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}`
 }
}

// const ana = new Docente('Ana', 'a@a.com', '2024-01-01')
// console.log(ana.aprovarEstudante('Juliana', 'JS', ana.nome))
