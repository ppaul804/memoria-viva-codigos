# accordion
Pequeno framework para uso de accordions em javascript.
## Modo básico de uso
```html
<!-- estilo do accordion -->
<link rel="stylesheet" href="accordion.css">
<div class="box">
    <button class="accordion">título do botão</button>
    <div class="panel">
        conteúdo
    </div>
</div>
<!-- habilita as funções do accordion -->
<script src="accordion.js"></script>
<!-- correção de altura com uso no Liferay 6.2 -->
<script src="ajusteAlturaLiferay.js"></script>
```
### classe box
É a "caixa" que onde é colocado os elementos de um ou mais accordions.
```html
<div class="box">
    ...
```
É possível usar outros boxes internamente. Atualmente é suportado até o terceiro nível de "subboxes".
```html
<div class="box">
    ...
    <div class="box">
        ...
        <div class="box">
            ...
```

### classes accordion e panel
são os elementos que definem os accordions. O elemento com a classe accordion é o botão de alternancia da ativação do accordion e o elemento com a classe panel é o seu conteúdo.
```html
<div class="box">
    <div class="accordion">
    <div class="panel">
        ...
```
### accordion.js
Onde são definidas as funções de ação do accordion.
```html
<script src="accordion.js"></script>
```
### accordion.css
Folha de estilo usado para definir o visual e animar os accordions.
```html
<link rel="stylesheet" href="accordion.css">
```
### ajusteAlturaLiferay.js (opcional)
Contém uma função para ajustar a altura do ``portlet-content`` ao ``journal-content-article`` no Liferay 6.2
```html
<script src="ajusteAlturaLiferay.js"></script
```