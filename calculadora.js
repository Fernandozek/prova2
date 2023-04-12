let result = document.getElementById("result");

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  let calculation = result.value;
  result.value = eval(calculation);
}
