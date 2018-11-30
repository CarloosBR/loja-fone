# HTML5

É uma liguagem de marcação que tem as seguintes responsabilidades:

- Conteúdo;
- Semântico (tags);
- Estrutura

* `<h1>` - heading 1 - 6
  Usamos ele quando queremos definir títulos

- `<a>` - Link ( a - anchor)
  Usamos ela para definir a nevegação do usuário. Se você tem um teto que você quer que o usuário clique e ele vá para outro lugar você pode usar tag junto com o atributo `href`. Exemplo de um `a` que o usuário é direcionado para o site da collabcode.training:

  ```
  <a href="https://www.collabcode.training">CollabCode.Training</a>
  ```

- `<nav>` -Navigation
  representa uma seção de uma página que aponta para outras páginas ou para outras áreas da página, ou seja, uma seção com links de navegação.

- `<header>` - Cabeçalho
  Pode conter alguns elementos de cabeçalho mas também outros elementos como um logo, seções de cabeçalho,

# CSS

É uma linguagem de estilo, isso quer dizer que ela tem as seguintes responsabilidades:

- Visual;

## Float

- Cria um novo contexto
  - Passa a existir: contexto da página e contexto que do float.
  - O elemento pai ignora o contexto do float
- Nunca esconde um conteúdo
- O conteúdo define a altura e largura do elemento.

## Propriedades

### [003 - 3] Float de uma forma feliz

- `overflow: hidden;`
  - Recalcular contexto de elemento quando tem filho float.
    - Quando o elemento não tem tamanho definido, ele assume os valores do contexto do float
  - Caso o elemento tiver altura e largura definida e o conteúdo deste elemento ultrapassa os limites definidos, a parte do conteúdo que excedeu não será exibida.

### [003 - 4] Respiros, interno e externo

- `margin`: Respiro/espaçamento externo. Utilizar quando quiser afastar elementos um do outro.

```
EX: margin: 20px  15px 20px 15px;
    margin: 20px 15px;
    margin: 20px;
```

- `padding`: Respiro/espaçamento interno. Utilizar quando quiser afastar o conteúdo de um elemento das suas extremidades

```
EX: padding: 20px  15px 20px 15px;
    padding: 20px 15px;
    padding: 20px;
```
