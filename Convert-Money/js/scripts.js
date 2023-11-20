const buttonConvert = document.querySelector(".button-convert");
const currentValueToConvert = document.querySelector(
  ".current-value-to-convert"
);
const currentValeu = document.querySelector(".current-value");

function convertMoney() {
  const inputCurrency = document.querySelector(".input-currency").value;

  const dolarToday = 5.1;

  const convertValue = inputCurrency / dolarToday;

  currentValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrency);

  currentValeu.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(convertValue);
}

buttonConvert.addEventListener("click", convertMoney);
