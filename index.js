import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";


const novoUser = new User('juliana', 'j@j.com', '2021-01-01')
console.log(novoUser.nome)
novoUser.nome = 'julia'
console.log(novoUser.nome);

// const novoAdmin = new Admin('rodrigo', 'r@r.com', '2024-01-01')
// console.log(novoAdmin.nome);