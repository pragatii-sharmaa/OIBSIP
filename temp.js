let input = document.querySelector("input");
let unit = document.querySelector("select");
let btn = document.querySelector("button");
let output = document.querySelector(".value");
let val = 0;

const convertTemp = () => {
  if (input.value === "" || isNaN(input.value)) {
    output.textContent = `actual value required`;
  } else if (unit.value === "celsius") {
    val = (9 / 5) * input.value + 32;
    output.textContent = `${val.toFixed(2)} F`;
  } else if (unit.value === "fahrenheit") {
    val = (input.value - 32) * (5 / 9);
    output.textContent = `${val.toFixed(2)} C`;
  }
};

btn.addEventListener("click", convertTemp)