function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Joao', 'Silva', 32)
const pessoa2 = criaPessoa('Junny', 'Pereira', 6)
const pessoa3 = criaPessoa('Tony', 'Pereira', 6)
const pessoa4 = criaPessoa('Almeida', 'Júnior', 28)
const pessoa5 = criaPessoa('Vitória', 'Yasmim', 26)

console.log(pessoa1.idade, pessoa1.nome)