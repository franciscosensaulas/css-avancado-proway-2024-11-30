# Exercício: Trabalhando com Media Queries

## Requisitos do Exercício

### 1. Estrutura HTML
Crie um arquivo HTML com a seguinte estrutura:
- Um `<main>` contendo:
  - Um título (`<h1>`) com o texto **"Praticando Media Queries"**.
  - Um parágrafo explicativo sobre a página responsiva.
  - Um botão com o texto **"Clique aqui"**.

### 2. CSS Básico
Configure a aparência inicial da página com as seguintes características:
- Fonte padrão: `Arial, Helvetica, sans-serif`.
- Alinhamento centralizado para o conteúdo do `<main>`.
- Uma margem automática para o `<main>`.

### 3. Media Queries
Adicione diferentes estilos com base no tamanho da tela, conforme descrito abaixo:

- **Mobile (até 480px):**
  - Fundo da página: `#f0f8ff` (cor azul clara).
  - Tamanho da fonte do `<main>`: `12px`.

- **Tablets (481px a 768px):**
  - Fundo da página: `#e6ffe6` (cor verde clara).
  - Tamanho da fonte do `<main>`: `14px`.

- **Desktops HD (769px a 1199px):**
  - Fundo da página: `#fff5e6` (cor bege).
  - Tamanho da fonte do `<main>`: `16px`.

- **Desktops Full HD e maiores (a partir de 1200px):**
  - Fundo da página: `#ffe6e6` (cor rosa clara).
  - Tamanho da fonte do `<main>`: `18px`.

### 4. Botão Responsivo
Estilize o botão para que ele mude com base no tamanho da tela:
- **Mobile:** Largura de `80%` e cor de fundo `#add8e6`.
- **Tablets:** Largura de `60%` e cor de fundo `#90ee90`.
- **Desktop:** Largura de `40%` e cor de fundo `#ffb6c1`.

## Critérios de Avaliação
- O layout deve responder corretamente às mudanças no tamanho da tela.
- As cores e tamanhos devem seguir as especificações.
- O código CSS deve estar bem organizado, com comentários indicando as diferentes seções de media queries.

## Bônus
- Adicione uma animação suave para a mudança de cor do botão ao passar o mouse.
- Teste a página em diferentes dispositivos ou em ferramentas como o **DevTools** do navegador para verificar a responsividade.