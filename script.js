const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Only allow digits, operators, decimal points and spaces
    if (!/^[0-9+\-*/.\s]*$/.test(display.value)) {
      throw new Error("Invalid input");
    }
    display.value = Function('"use strict"; return (' + display.value + ")")();
  } catch {
    display.value = "Error";
  }
}
