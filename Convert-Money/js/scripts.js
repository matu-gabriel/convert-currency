const buttonConvert = document.querySelector(".button-convert");
const currentValueToConvert = document.querySelector(
  ".current-value-to-convert"
);
const selectOption = document.querySelector(".select-option");
const selectOptionCurrent = document.querySelector(".select-option-current");
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
  } else if (selectOption.value == "real") {
    currentValeu.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);
  }
  currentValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrency);
}

function changeCurrency() {
  const currencyName = document.querySelector("#currency-name");
  const countryFlagConvert = document.querySelector(".country-flag-convert");

  if (selectOptionCurrent.value === selectOption.value) {
    buttonConvert.style.display = "none";
  } else {
    buttonConvert.style.display = "block";
  }
  if (selectOption.value == "dolar") {
    currencyName.innerHTML = "Dólar";
    countryFlagConvert.src = "./assets/estados-unidos.png";
  } else if (selectOption.value == "euro") {
    currencyName.innerHTML = "Euro";
    countryFlagConvert.src = "./assets/euro.png";
  } else if (selectOption.value == "libra") {
    currencyName.innerHTML = "Libra";
    countryFlagConvert.src = "./assets/libra1.png";
  } else if (selectOption.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    countryFlagConvert.src = "./assets/bitcoin1.png";
  } else if (selectOption.value == "real") {
    currencyName.innerHTML = "Real Brasileiro";
    countryFlagConvert.src = "./assets/brasil2.png";
  }

  const currencyNameToConvert = document.querySelector(
    "#currency-name-to-convert"
  );
  const countryFlag = document.querySelector(".country-flag");

  if (selectOptionCurrent.value == "dolar") {
    currencyNameToConvert.innerHTML = "Dólar";
    countryFlag.src = "./assets/estados-unidos.png";
  } else if (selectOptionCurrent.value == "euro") {
    currencyNameToConvert.innerHTML = "Euro";
    countryFlag.src = "./assets/euro.png";
  } else if (selectOptionCurrent.value == "libra") {
    currencyNameToConvert.innerHTML = "Libra";
    countryFlag.src = "./assets/libra1.png";
  } else if (selectOptionCurrent.value == "bitcoin") {
    currencyNameToConvert.innerHTML = "Bitcoin";
    countryFlag.src = "./assets/bitcoin1.png";
  } else if (selectOptionCurrent.value == "real") {
    currencyNameToConvert.innerHTML = "Real Brasileiro";
    countryFlag.src = "./assets/brasil2.png";
  }

  convertMoney();
}

selectOption.addEventListener("change", changeCurrency);
selectOptionCurrent.addEventListener("change", changeCurrency);

buttonConvert.addEventListener("click", convertMoney);
