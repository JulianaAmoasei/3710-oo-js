const user = {
  nome: 'Juliana',
  email: 'j@j.com',
  nascimento: '2024-01-01',
  role: 'estudante',
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email);
  }
}

// const exibir = user.exibirInfos
// exibir()

const exibir = function() {
  console.log(this.nome)
 }

// exibir()

const exibirNome = exibir.bind(user)
exibirNome() //Juliana
exibir() //undefined
 