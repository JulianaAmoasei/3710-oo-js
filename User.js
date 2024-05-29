export default class User {
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  get role() {
    return this.#role
  }

  get ativo() {
    return this.#ativo
  }

  set nome(novoNome) {
    if (novoNome === '') {
      throw new Error('formato não válido')
    }
    this.#nome = novoNome
  } 

  exibirInfos() {
    if (this.role === 'estudante') {
      return `dados estudante: ${this.nome}, ${this.email}`;
    }
    if (this.role === 'admin') {
      return `dados admin: ${this.nome}, ${this.email}, ${this.role}`;      
    }
    if (this.role === 'docente') {
      return `dados docente: ${this.nome}, ${this.role}`;      
    }
  }

  static exibirInfosGenericas(nome, email) {
    return `${nome}, ${email}`
  }
}

// const newUser = new User("Juliana", "j@j.com", "2024-01-01");
// console.log(newUser);
// console.log(newUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(newUser))
