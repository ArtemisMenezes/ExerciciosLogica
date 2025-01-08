/* 
Codigo feito nas primeiras aulas de POO, nao muito otimizado.
Comando: Criar um sistema simples de uma biblioteca utilizando POO
Nela, apliquei o principio de abstração, usando metodo para manipular arrays
Metodos estes que adicionam livros a estante, remove e cria um controle de emprestimos
*/

// Class que cria o livro com suas caracteristicas
class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  }
  
  //Class do usuario
  class Usuario {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  }
  
  //Class biblioteca com os métodos de controle do sistema
  class Biblioteca {
    constructor(nome) {
      this.nome = nome;
      this.livrosEstante = []; // array que guarda os livros que a biblioteca possui
      this.emprestimos = []; //array que registra emprestimos
    }
  
    AdicionarLivro(livro) {
      this.livrosEstante.push(livro); //metodo push "empurra" livro para array
      console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }
  
    EmprestarLivro(titulo, usuario) {
        //funcao de callback que atribui o titulo do livro a variavel index, 
        //Como uma forma de procurar usando indice "titulo"
      const index = this.livrosEstante.findIndex((livro) => livro.titulo === titulo); 

       //Verifica pelo indice se o livro esta ou nao na array
      if (index === -1) {
        console.log(`Livro "${titulo}" não encontrado ou já emprestado.`);
        return;
      }
        //Usa o splice para "cortar" um item(Livro) da array e empurra para registrar nos emprestimos
      const [livroEmprestado] = this.livrosEstante.splice(index, 1);
      this.emprestimos.push({ livro: livroEmprestado, usuario });
      console.log(`Livro "${livroEmprestado.titulo}" emprestado ao usuário ${usuario.nome}.`);
    }
  }

  //Criação de instâncias
  const livro1 = new Livro("Diário de um Banana", "Autor Desconhecido", true);
  const livro2 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", true);
  
  const biblioteca = new Biblioteca("Biblioteca Municipal");
  const usuario = new Usuario("Pedro", "Borges");
  
  //Chamada de métodos
  biblioteca.AdicionarLivro(livro1);
  biblioteca.AdicionarLivro(livro2);
  
  biblioteca.EmprestarLivro("Diário de um Banana", usuario);
  biblioteca.EmprestarLivro("Diário de um Banana", usuario);