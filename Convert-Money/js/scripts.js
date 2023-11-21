const buttonConvert = document.querySelector(".button-convert");
const currentValueToConvert = document.querySelector(
  ".current-value-to-convert"
);
const selectOption = document.querySelector(".select-option");
const currentValeu = document.querySelector(".current-value");

function convertMoney() {
  const inputCurrency = document.querySelector(".input-currency").value;

  if (selectOption.value == "dolar") {
    currentValeu.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency / 5.1);
  } else if (selectOption.value == "euro") {
    currentValeu.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency / 5.31);
  } else if (selectOption.value == "libra") {
    currentValeu.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency / 6.07);
  } else if (selectOption.value == "bitcoin") {
    currentValeu.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency / 181974.48);
  }

  currentValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrency);
}

function changeCurrency() {
  const currencyName = document.querySelector("#currency-name");
  const countryFlag = document.querySelector(".country-flag");

  if (selectOption.value == "dolar") {
    currencyName.innerHTML = "Dólar";
    countryFlag.src = "./assets/estados-unidos.png";
  } else if (selectOption.value == "euro") {
    currencyName.innerHTML = "Euro";
    countryFlag.src = "./assets/euro.png";
  } else if (selectOption.value == "libra") {
    currencyName.innerHTML = "Libra";
    countryFlag.src = "./assets/libra1.png";
  } else if (selectOption == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    countryFlag.src = "./assets/bitcoin1.png";
  }

  convertMoney();
}

selectOption.addEventListener("change", changeCurrency);

buttonConvert.addEventListener("click", convertMoney);
