let display = document.querySelector(".display");
// Add values to display
function appendValue(value){
  display.value += value;
}
// Clear everything
function clearDisplay(){
  display.value = "";
}
// Delete last character
function deleteLast(){
  display.value = display.value.slice(0,-1);
}
// Calculate answer
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch{
    display.value = "Error";
  }
}