let memory = 0;

function append(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function clearEntry() {
  document.getElementById("display").value = '';
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}

function square() {
  let val = document.getElementById("display").value;
  document.getElementById("display").value = val * val;
}

function sqrt() {
  let val = document.getElementById("display").value;
  document.getElementById("display").value = Math.sqrt(val);
}

function reciprocal() {
  let val = document.getElementById("display").value;
  document.getElementById("display").value = 1 / val;
}

function negate() {
  let val = document.getElementById("display").value;
  document.getElementById("display").value = -val;
}

function power() {
  let val = document.getElementById("display").value;
  document.getElementById("display").value = Math.pow(val, 2);
}

// Memory functions
function storeMemory() {
  memory = parseFloat(document.getElementById("display").value || 0);
}

function recallMemory() {
  document.getElementById("display").value += memory;
}

function addToMemory() {
  memory += parseFloat(document.getElementById("display").value || 0);
}

function subtractFromMemory() {
  memory -= parseFloat(document.getElementById("display").value || 0);
}

function clearMemory() {
  memory = 0;
}
