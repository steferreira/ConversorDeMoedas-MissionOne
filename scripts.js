let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



async function ConverterMoedas() {


    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high


    let inputValorEmReais = Number(document.getElementById("input").value)
    let InputMoedas = document.getElementById("input-moedas")
    let TextoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dolar Americano") {
        let ValorEmDolares = inputValorEmReais / dolar
        InputMoedas.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    if (select.value === "€ Euro") {
        let ValorEmEuros = inputValorEmReais / euro
        InputMoedas.innerHTML = ValorEmEuros.toLocaleString('de-DE', { style: "currency", currency: "EUR" })

    }
    TextoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

// Essa funcao é responsável por troca da bandeira e nome de moedas
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")
    if (select.value === "US$ Dolar Americano") {
        textoMoedas.innerHTML = "Dolar Americano"
        bandeiraMoedas.src = "./IMG/EUA.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./IMG/EURO.png"

    }

    ConverterMoedas()
}

botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", trocaDeMoeda)
