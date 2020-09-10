---
layout: post
title:  "TechGirl: Manual de Sobrevivência"
description: "O TechGirl é um evento de tecnologia voltado para meninas de 10 a 12 anos, realizado pela Valtech com patrocínio da Sitecore. Esse artigo é uma referência ao conteúdo ministrado no evento e portanto, voltado a esse público.o"
lang: 'pt-BR'
category: events
draft: false
---
O TechGirl é um evento de tecnologia voltado para meninas de 10 a 12 anos, realizado pela Valtech com patrocínio da Sitecore.
Esse artigo é uma referência ao conteúdo ministrado no evento e portanto, voltado a esse público.
 

Se você chegou aqui, é por que precisa de ajuda. Mas não se preocupe!
Lembra que a Web é uma bagunça? Ela só tem trinta aninhos, muito jovem mesmo. 

Quem trabalha com a Web ainda não sabe direito com fazer as coisas perfeitas. Algumas pessoas sabem um pouco mais e por isso vendem esse conhecimento para outras empresas, caso da [Valtech](valtech.com). 
Mas nem tudo são negócios! A web pode ser muito divertida, é como um parquinho que você precisa montar os brinquedos. 
Vamos aprender?

No Brasil, de uma turma de dez pessoas nos cursos de Tecnologia da Informação, [só duas são mulheres](https://epocanegocios.globo.com/Economia/noticia/2018/02/apenas-17-dos-programadores-brasileiros-sao-mulheres.html). Sabemos do potencial das meninas, por isso não desista!

## Mulheres na Tecnologia
Pode não ser muito divulgado, mas as mulheres tem um papel muito importante na computação. [Ada Lovelace](https://pt.wikipedia.org/wiki/Ada_Lovelace), além de muito charmosa, escreveu o primeiro algoritmo para ser processado por uma máquina. É a primeira programadora da história.  O computador que a gente usa hoje em dia não existiria sem o trabalho da Jean Bartik e um grupo de mais [cinco mulheres](https://www.ufrgs.br/enigma/2018/08/09/mulheres-da-computacao-as-mulheres-do-eniac/) que operaram o primeiro computador digital da história.

<img src="/womenintech.png" alt="Mulheres que são inspiração na área de tecnologia"/>

A gente conversa com o computador e precisa falar uma linguagem que ele entenda. No começo, isso não era muito fácil. A irmã [Mary Kenneth Keller](https://pt.wikipedia.org/wiki/Mary_Kenneth_Keller) ajudou a criar a linguagem BASIC que inspirou muitas outras linguagens que tornaram mais fácil programar. [Grace Hopper](https://pt.wikipedia.org/wiki/Grace_Hopper) desenvolveu a linguagem COBOL que é usada até hoje em empresas de negócios como bancos.

Lembra a primeira vez que pisamos na Lua? Claro que não, não éramos nascidas! Mas nossos pais e avós vivenciaram aquele momento que foi um marco para a humanidade. Isso aconteceu graças aos esforços de pessoas como a [Margaret Hamilton](https://pt.wikipedia.org/wiki/Margaret_Hamilton_(cientista_da_computa%C3%A7%C3%A3o)). Ela ajudou a escrever o programa de voo do Apollo 11 que levou os astronautas à Lua.

Agora que você sabe do potencial que você e outras meninas tem no mundo da tecnologia, vamos começar a codar!

## Web?
A web é tudo que roda no navegador. O que é o navegador? É um programa que entende a linguagem da web, assim como o computador entende outras linguagens. Aqui, vamos aprender as linguagens HTML e CSS.

Exemplos de navegadores são o Google Chrome, Safari e Firefox.

### O que é site?
É o espaço em que as pessoas ou empresas usam para mostrar conteúdo. Um site pode ter uma ou mais páginas web.

### O que é uma página web?
É um documento HTML que o navegador sabe interpretar (entende e mostra) da maneira que a gente vê quando entramos nos nossos sites favoritos, como o YouTube e Netflix. É parecido como fazer um trabalho da escola no Word. Você salva o arquivo .doc que o programa Word consegue ler e editar.

## HTML - HyperText Markup Language
É uma linguagem que usamos pra comunicar ao navegador a estrutura da página, com o conteúdo. Para isso, usamos as tags HTML para dizer que tipo de conteúdo queremos na página. 

### Tag HTML
Um título, parágrafo ou imagem, cada coisa tem um tag HTML que podemos usar para melhor nos comunicarmos com o navegador.

Uma tag consiste em o símbolo < (menor que) e > (menor que). No meio disso está o nome da tag que queremos usar.
```html
<nome-da-tag> Conteúdo </nome-da-tag>
```

Vamos escrever um texto dentro de um parágrafo:

```html
<p>TechGirl começou e está d+!</p>
```

Observe que colocamos o conteúdo entre as tags <p>, mas a segunda tem uma barra antes do nome da tag. Essa é a forma em que dizemos ao navegador que estamos fechando aquele parágrafo, formando um bloco. Outros exemplos de blocos:

```html
<h1>Título</h2>

<p>Um parágrafo com texto…</p>
```
 
### Documento HTML
```html
<html>
  <head>
    <title>Título</title>
  </head>
  <body>
    Blá blá blá whiskas sachê…
  </body>
</html>
```
 
Html -> Recebe todas as tags HTML dentro

Head (cabeça) -> Informações sobre a página

Title (título) -> título da página

Body (corpo) -> Mostra o que vai aparecer na página
 

## Vamos praticar!

### Títulos
```html
<h1>Título Super Ultra Grande</h1>

<h2>Título Super Grande</h2>

<h3>Título Grande</h3>

<h4>Título Normal</h4>

<h5>Título Pequeno</h5>

<h6>Título Pequenininho</h6>
```
 

### Parágrafo
```html
<p>Parágrafo blá blá blá</p>

<p>Parágrafo 2</p>
```
 

### Conteúdo genérico
```html
<div>Qualquer coisa</div>

<div>Qualquer coisa 2</div>
```
 

### Lista Não-ordenada
```html
<ul>
  <li>
    Suco de laranja
  </li>
  <li>
    Pipoca
  </li>
  <li>
    Biscoito
  </li>
</ul>
```

ul (Unordered List) -> List não-ordenada

li (List Item) -> Item de Lista

### Lista Ordenada
```html
<ol>
  <li>
    Suco de laranja
  </li>
  <li>
    Pipoca
  </li>
  <li>
    Biscoito
  </li>
</ol>
```

ul (Ordered List) -> List Ordenada

li (List Item) -> Item de Lista

### Link
```html
<a href=“http://jackiecardozo.com/” target=“_blank”>Meu site</a>
```
a -> Âncora

href -> Referência

target -> objetivo

<strong>Como fica:</strong>
[Meu site](http://jackiecardozo.com/)

### Imagem
```html
<img src="http://jackiecardozo.com/assets/images/pixgrid.png" alt="Descrição da imagem"/> 
```
img -> Imagem

src (Source) -> Caminho da imagem  

<strong>Como fica:</strong>

<img src="http://jackiecardozo.com/assets/images/pixgrid.png" alt="Descrição da imagem"/> 

### Ênfase
```html
  <strike>Texto fica riscado</strike>
  <b>Texto fica gordinho</b>
  <i>Texto fica inclinado</i>
  <u>Texto fica com uma linha embaixo</u>
```
<strong>Como fica:</strong>

<strike>Texto fica riscado</strike>

<b>Texto fica gordinho</b>

<i>Texto fica inclinado</i>

<u>Texto fica com uma linha embaixo</u>

## HTML & CSS
Sabemos que HTML descreve a estrutura ou o que vai ter na página.
Para deixar a página mais bonita, usamos uma linguagem de estilo chamada CSS.

### CSS
Queremos dizer ao navegador que um título deve ser roxo:
```css
h1 {
  color: purple;
}
```

color -> cor 

purple -> roxo

Se queremos que o navegador adicione uma cor ou tamanho diferente em um tag, temos que saber comunicar isso. Para tal, usamos seletores, que nada mais é do que a referência da tag que queremos estilizar.

```css
seletor {
  atributo: valor;
}
```

### Pixel
É a unidade de medida que usamos para alterar tamanhos de elementos numa página web.

Mude a altura (height) e largura (width) do quadrado. Lembre-se de sempre escrever 'px' depois do número.
<p tabindex="-1" class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="jackiecard1" data-slug-hash="JqLqZJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Brincando com pixels">
  <span>See the Pen <a href="https://codepen.io/jackiecard1/pen/JqLqZJ/">
  Brincando com pixels</a> by Jackie Card (<a href="https://codepen.io/jackiecard1">@jackiecard1</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Criando um blog
Crie um blog usando o que você praticou aqui.
<p tabindex="-1" class="codepen" data-height="591" data-theme-id="0" data-default-tab="html,result" data-user="jackiecard1" data-slug-hash="MdVdBa" style="height: 591px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Blog do Salem - Techgirl Event">
  <span>See the Pen <a href="https://codepen.io/jackiecard1/pen/MdVdBa/">
  Blog do Salem - Techgirl Event</a> by Jackie Card (<a href="https://codepen.io/jackiecard1">@jackiecard1</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Adicionando emoticons
É só copiar e colar no meio do texto:
[Clique aqui para escolher](https://pt.piliapp.com/facebook-symbols/)

### Tabela de Cores
[Visualizar tabela](https://www.quackit.com/css/css_color_codes.cfm)

### Exemplos divertidos
Nem tudo na vida é trabalhar para pagar os sachês dos gatos, não é mesmo! Aqui vai alguns exemplos de brincadeiras
usando HTML & CSS:
* [Totoro](https://codepen.io/jackiecard/pen/GLvLZE/)
* [Pikachu](https://codepen.io/jackiecard/pen/yryGZg/)
* [Jogo da Abelinha](https://codepen.io/jackiecard/pen/EzNqGj)
* [Super Mario](https://codepen.io/jackiecard/pen/GaqEojj)
