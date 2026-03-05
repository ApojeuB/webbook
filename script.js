const totalPaginas = 600

function getPagina(){

let hash = window.location.hash

if(!hash){

return 1

}

return parseInt(hash.replace("#pagina",""))

}

function carregarPagina(){

const pagina = getPagina()

const container = document.getElementById("pagina")

container.innerHTML = `
<h2>Página ${pagina}</h2>

<img src="pages/${pagina}.png">

<div class="hiddenText">
Texto da página ${pagina} para tradução.
</div>

<div class="nav">

<a href="#pagina${pagina-1}">Anterior</a>

<a href="#pagina${pagina+1}">Próxima</a>

</div>
`

}

window.addEventListener("hashchange",carregarPagina)

carregarPagina()