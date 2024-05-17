import User from "./User.js";

class Admin extends User {
 constructor(nome, email, nascimento, role = 'admin', ativo = true) {
   super(nome, email, nascimento, role, ativo)
 }
}

const newAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01', 'admin')
console.log(newAdmin)
console.log(newAdmin.exibirInfos())