const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyvalue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueconverted = document.querySelector(".currency-value")

    const dolarToday = 5.20
    const euroToday = 6.20
    const bitcoinToday = 100.000
    const xrpToday = 0.60

    if (currencySelect.value == "dolar") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyvalue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyvalue / euroToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "btc"
        }).format(inputCurrencyvalue / bitcoinToday)
    }
    if (currencySelect.value == "xrp") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "xrp"
        }).format(inputCurrencyvalue / xrpToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyvalue)
}



function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "./img/estados-unidos (1) 1.png"

        

    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "EURO"
        currencyImg.src ="./img/Design sem nome 3.png"
       

    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BTC"
        currencyImg.src ="./img/bitcoin 1.png"
         

    }
    if (currencySelect.value == "xrp") {
        currencyName.innerHTML = "XRP"
        currencyImg.src ="./img/xrp png (1).png"


    }
    convertValues()


   



}



currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)

