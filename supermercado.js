class Produto {
    constructor(nome, preco) {
      this._nome = nome;
      this._preco = preco;
    }
  
    get nome() {
      return this._nome;
    }
  
    set nome(novoNome) {
      this._nome = novoNome;
    }
  
    get preco() {
      return this._preco;
    }
  
    set preco(novoPreco) {
      if (novoPreco > 0) {
        this._preco = novoPreco;
      } else {
        console.log('O preço deve ser maior que 0.');
      }
    }
  
    sobre() {
      return `Produto: ${this._nome} Preço: ${this._preco}`;
    }
  }
  
  // Polimorfismo e herança
  
  class Alimento extends Produto {
    constructor(nome, preco, fabricacao) {
      super(nome, preco);
      this.fabricacao = fabricacao;
    }
  
    sobre() {
      return `${super.sobre()} Data de Fabricação: ${this.fabricacao}`;
    }
  }
  
  // Abstração
  
  class Supermercado {
    constructor(nome, produtos) {
      this.nome = nome;
      this._armazen = [];
    }
  
    AdicionarProduto(produto) {
      this._armazen.push(produto);
      console.log(`Produto ${produto.nome} adicionado ao armazen`);
    }
  
    RemoverProdutos(nomeProduto) {
      const indexProd = this._armazen.findIndex(prod => prod.nome === nomeProduto);
  
      if (indexProd != -1) {
        const remover = this._armazen.splice(indexProd, 1)[0];
        console.log(`Produto ${remover.nome} removido`);
      } else {
        console.log(`Produto não está no estoque`);
      }
    }
  
    ListarProdutos() {
      this._armazen.forEach(prod => console.log(`Produtos no armazen: ${prod.sobre()}`));
    }
  }
  
  const produto1 = new Produto('Amaciante', 20);
  const produto2 = new Alimento('Pao carioquinha', 2, '07/01/25');
  
  produto1.sobre();
  produto2.sobre();
  
  // Criando um supermercado e gerenciando produtos
  const mercado = new Supermercado('Supermercado 24h');
  mercado.AdicionarProduto(produto1);
  mercado.AdicionarProduto(produto2);
  mercado.ListarProdutos();