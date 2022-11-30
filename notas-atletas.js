let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];

class PontuacaoDosAtletas {
   constructor(dadosAtletas){
     this.dados = dadosAtletas;
     this.nomes = [];
     this.notas = [];
     this.notasValidas = [];
     this.somaNotaDosAtletas = [];
     this.mediaNotaDosAtletas = [];
   }

   obterNomes() {
     for(let i = 0; i < this.dados.length;i++){
       this.nomes[i] = this.dados[i].nome;
       }
   }
   ordenarNotas() {
     for(let i = 0; i < this.dados.length; i++){
     this.notas[i] = this.dados[i].notas.sort((b, a) => a - b);
     }
   }
 
   notasComputadas() {
     for(let i = 0; i < this.dados.length; i++){
     this.notasValidas[i] = this.notas[i].slice(1, 4);
     }
   }
 
   somaNotasValidas() {
     for(let i = 0; i < this.dados.length; i++){
       this.somaNotaDosAtletas[i] = this.notasValidas[i].reduce(function(soma, nota){
         return soma += nota;
       }, 0)
   }
 }
   obterMediaDosAtletas() {
     for(let i = 0; i < this.dados.length; i++){
       this.mediaNotaDosAtletas[i] = this.somaNotaDosAtletas[i]/this.notasValidas[i].length;
   }
 }
   exibirResultado() {
     for(let i = 0; i < this.dados.length; i++){
       console.log(`Atleta: ${this.nomes[i]} \nNotas Obtidas: ${this.notas[i]}\nMédia Válida: ${this.mediaNotaDosAtletas[i]}
`);
     }
   }
 }
 
 let pontuacao = new PontuacaoDosAtletas(atletas);
 pontuacao.obterNomes();
 pontuacao.ordenarNotas();
 pontuacao.notasComputadas();
 pontuacao.somaNotasValidas();
 pontuacao.obterMediaDosAtletas();
 pontuacao.exibirResultado();