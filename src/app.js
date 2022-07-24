const balance = document.querySelector("#balance");
const risk = document.querySelector("#risk");
const sl = document.querySelector("#sl");
const currency = document.querySelector("#currency");
const calculate = document.querySelector("#calculate");
const valLot = document.querySelector("#valLot");
const valdollar = document.querySelector("#valdollar");
const copy = document.querySelector("#copy");
const rest = document.querySelector("#rest");
calculate.addEventListener("click", () => {
  const riskMoney = (balance.value * risk.value) / 100;
  const pipValue = riskMoney / sl.value;
  const lotValue = pipValue / currency.value;

  valLot.value = lotValue.toFixed(2);
  valdollar.value = pipValue.toFixed(3);
});

copy.addEventListener("click", () => {
  valLot.select();
  navigator.clipboard.writeText(valLot.value);
});

rest.addEventListener("click", () => {
  balance.value = "";
  currency.value = "";
  risk.value = "";
  sl.value = "";
  valLot.value = "";
  valdollar.value = "";
});
