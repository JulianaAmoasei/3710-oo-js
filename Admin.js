import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeCurso, qtdVagas) {
    return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`;
  }
}

// const newAdmin = new Admin("Rodrigo", "r@r.com", "2021-01-01", "admin");
// console.log(newAdmin.criarCurso('JS', 20));
