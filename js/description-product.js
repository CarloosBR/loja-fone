/*
    1 - Ter janela (browser) - window
    2 -  Ter o html - document
    3 - Pegar o coração - querySelector(".nomeSeletor";)
    4 - Pegar o clique no coração
    5 - No momento que o usuário clicar, nós queremos mostrar um texto AE
*/
const $heart = window.document.querySelector(".-heart");
const $addToCart = window.document.querySelector(".-second");

$heart.addEventListener("click", handleClick);
$addToCart.addEventListener("click", handleClick);

function handleClick() {
    console.log("ae");
}
