# Exercício: Transformações no CSS

## Passo 1: Estrutura básica do HTML
1. Crie um arquivo HTML com a estrutura básica.
2. Adicione um título na aba do navegador como **"Transformações no CSS"**.
3. Adicione um título principal `<h1>` com o texto **"Explorando Transformações no CSS"**.

---

## Passo 2: Criação das caixas de exemplo
1. Dentro do corpo do HTML, crie um contêiner `<div>` com a classe `container`.
2. Dentro deste contêiner, adicione 4 caixas `<div>`, cada uma com uma classe correspondente às transformações que serão aplicadas:
   - `box-skew`
   - `box-translate`
   - `box-rotate`
   - `box-scale`
3. Insira um texto dentro de cada caixa com o nome da transformação que ela irá representar (por exemplo, **"Skew"**, **"Translate"**, etc.).

## Passo 3: Estilização básica (CSS)
1. No arquivo CSS:
   - Adicione uma estilização geral para o `body` com um fundo claro, fonte padrão e centralize o conteúdo.
   - Estilize o contêiner `.container` para exibir as caixas lado a lado, com espaçamento entre elas.
   - Para as caixas:
     - Defina um tamanho fixo (exemplo: `150px x 150px`).
     - Adicione uma cor de fundo para cada caixa.
     - Centralize o texto dentro das caixas.
     - Adicione bordas arredondadas e um efeito de transição suave para a transformação.

## Passo 4: Aplicação das transformações
1. **`Skew`**:
   - No CSS, crie uma regra para `.box-skew:hover` que incline a caixa em **20 graus no eixo X** e **10 graus no eixo Y**.
2. **`Translate`**:
   - No CSS, crie uma regra para `.box-translate:hover` que mova a caixa **50px para a direita** e **30px para baixo**.
3. **`Rotate`**:
   - No CSS, crie uma regra para `.box-rotate:hover` que gire a caixa em **45 graus no sentido horário**.
4. **`Scale`**:
   - No CSS, crie uma regra para `.box-scale:hover` que amplie a caixa em **1,5 vezes** o seu tamanho original.
