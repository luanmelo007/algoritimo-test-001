Instruções para a Atividade
Siga os passos abaixo para realizar a atividade de testes utilizando o Vitest. Certifique-se de seguir cada etapa com atenção e de documentar o processo adequadamente.

Parte 1: Comentar o código
Abra o código fornecido.

Adicione comentários detalhados linha a linha, explicando o que cada parte do código faz.

Use comentários claros e objetivos.

Explique a lógica das funções, variáveis e operações.

Exemplo de comentário:

javascript
// Função que calcula a soma dos elementos do vetor
function calcularSoma(vetor) {
  return vetor.reduce((acc, curr) => acc + curr, 0); // Soma todos os elementos do vetor
}
Parte 2: Criar testes no Vitest
Crie testes que validem as seguintes funcionalidades:

Soma: Verifique se a soma dos elementos do vetor está correta.

Média: Valide se a média dos elementos é calculada corretamente.

Ordenação crescente: Teste se o vetor é ordenado corretamente em ordem crescente.

Ordenação decrescente: Teste se o vetor é ordenado corretamente em ordem decrescente.

Validação do tamanho do vetor:

Certifique-se de que o vetor aceita apenas o número exato de elementos especificados.

Valide se uma mensagem de erro é exibida quando há mais ou menos elementos que o esperado.

Exemplo de teste:

javascript
import { describe, it, expect } from 'vitest';

// Teste para validar soma
describe('Operações no vetor', () => {
  it('Deve calcular a soma corretamente', () => {
    const vetor = [1, 2, 3];
    const soma = vetor.reduce((acc, curr) => acc + curr, 0);
    expect(soma).toBe(6); // Soma esperada: 6
  });
});
Parte 3: Configuração do projeto
Crie uma nova pasta no seu computador para o projeto.

Abra essa pasta no Visual Studio Code (VS Code).

No terminal do VS Code:

Inicie um novo projeto com o comando:

bash
npm init -y
Instale o Vitest como dependência de desenvolvimento:

bash
npm install vitest --save-dev
Configure o script de teste no arquivo package.json:

Adicione a seguinte linha dentro da seção "scripts":

json
"test": "vitest"
Crie um arquivo chamado operacoes.test.js na pasta principal para escrever seus testes.

Parte 4: Salvar e compartilhar os arquivos
Após finalizar os testes:

Crie uma pasta no seu Google Drive com um nome apropriado (ex.: "Atividade Vitest").

Salve todos os arquivos do projeto nessa pasta.

Compartilhe a pasta com o e-mail luan.araujo@docente.senai-ce.org.br.

Apague os arquivos originais do seu computador para liberar espaço.

Checklist Final
 Código comentado linha a linha.

 Testes criados para todas as funcionalidades listadas.

 Projeto configurado e funcional com Vitest.

 Arquivos salvos no Google Drive e compartilhados corretamente.

Boa sorte! 🚀
