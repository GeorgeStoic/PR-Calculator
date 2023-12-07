//TODO:list of possible reps;

//variables of elements
const weightInput = document.getElementById("weight");
const repsInput = document.getElementById("reps");
const calcButton = document.getElementById("calc");
const para = document.getElementById("para");
const index = document.getElementById("index");
const count = document.getElementById("count");
const checkBox = document.getElementById("var1");
const checkBox2 = document.getElementById("var2");
const container = document.getElementById("container");
const darkModeButton = document.getElementById("darkmode__button");
const switcher = document.getElementById("switch");
const contentDiv = document.getElementById("content");
//adding dark mode class on elements after user clicked on darkmode button
darkModeButton.textContent = "Dark Mode";
darkModeButton.value = "dark"
darkModeButton.addEventListener("click", () => {
  if (darkModeButton.value === "dark") {
    // Switch to dark mode
    container.classList.add("dark");
    weightInput.classList.add("dark");
    repsInput.classList.add("dark");
    calcButton.classList.add("dark");
    para.classList.add("dark");
    index.classList.add("dark");
    count.classList.add("dark");
    darkModeButton.classList.add("dark");
    switcher.classList.add("dark");
    darkModeButton.textContent = "Light Mode";
    darkModeButton.value = "light";
  } else if (darkModeButton.value === "light") {
    // Switch to light mode
    container.classList.remove("dark");
    weightInput.classList.remove("dark");
    repsInput.classList.remove("dark");
    calcButton.classList.remove("dark");
    para.classList.remove("dark");
    index.classList.remove("dark");
    count.classList.remove("dark");
    darkModeButton.classList.remove("dark");
    switcher.classList.remove("dark");
    darkModeButton.textContent = "Dark Mode";
    darkModeButton.value = "dark";
  }
});
//switcher
contentDiv.value = "row";
switcher.addEventListener("click", ()=>{
  if(contentDiv.value == "row"){
    contentDiv.style = "flex-direction: row-reverse;"
    contentDiv.value = "row-reversed"
  }else{
    contentDiv.style = "flex-direction: row;"
    contentDiv.value = "row"
  }
});
//change input field with arrow key
repsInput.addEventListener("keydown", (e) =>{
  if (e.key === "ArrowRight") {
    e.preventDefault();
    weightInput.focus();
  }
});
weightInput.addEventListener("keydown", (e) =>{
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    repsInput.focus();
  }
});
//Event listener for checkboxes
checkBox.addEventListener("change",()=> {
  if (checkBox.checked) {
    checkBox2.checked = false;
    index.textContent = "kg";
    para.textContent = "";
    count.textContent = "";
  }
});
checkBox2.addEventListener("change",() =>{
  if (checkBox2.checked) {
    checkBox.checked = false;
    index.textContent = "lbs";
    para.textContent = "";
    count.textContent = "";
  }
});
//Default startup (kg)
document.addEventListener("DOMContentLoaded", () =>{
  checkBox.checked = !checkBox2.checked;
  index.textContent = "kg";
});
//main event listener
calcButton.addEventListener('click',()=>{
  //kg variant 
   if(checkBox.checked){
    //checking if value of input valley isn't empty, negative or integer
    if(weightInput.value !== "" && repsInput.value !== "" && weightInput.value > 0 && repsInput.value > 0 && repsInput.value % 1 === 0){
      if(repsInput.value <= 1){
      para.textContent = weightInput.value;
      count.textContent = "x1";
      weightInput.value = "";
      repsInput.value = "";
      weightInput.classList.remove("active");
      repsInput.classList.remove("active");
      }else{
        //main logic of calculator (kg)
      //calculation formula
      const answer = (repsInput.value / 30 + 1) * weightInput.value;
      para.textContent = Math.round(answer);
      count.textContent = "x1";
      weightInput.value = "";
      repsInput.value = "";
      weightInput.classList.remove("active");
      repsInput.classList.remove("active");
      //adding active status if numbers from input are empty, negative or integer
      }
 }else {
   if (weightInput.value === "" || weightInput.value < 0) {
       weightInput.classList.add("active");
   } else {
       weightInput.classList.remove("active");
   }
   if (repsInput.value === "" || repsInput.value < 0 || repsInput.value % 1 !== 0) {
       repsInput.classList.add("active");
   } else {
       repsInput.classList.remove("active");
   }
}   //lbs variant
   }else{
    checkBox2.checked = !checkBox.checked;
      //checking if value of input valley isn't empty, negative or integer
    if(weightInput.value !== "" && repsInput.value !== "" && weightInput.value > 0 && repsInput.value > 0 && repsInput.value % 1 === 0){
      if(repsInput.value <= 1){
        para.textContent = weightInput.value;
        count.textContent = "x1";
        weightInput.value = "";
        repsInput.value = "";
        weightInput.classList.remove("active");
        repsInput.classList.remove("active");
      }else{
        //main logic of calculator (lbs)
      const lbsReps = parseInt(repsInput.value);
      const lbsWeight = parseInt(weightInput.value);
      // Calculate bench press max in lbs
      const answer = (lbsReps / 30 + 1) * lbsWeight;
      para.textContent = Math.round(answer);
      count.textContent = "x1";
      weightInput.value = "";
      repsInput.value = "";
      weightInput.classList.remove("active");
      repsInput.classList.remove("active");
      }
      //adding active status if numbers from input are empty, negative or integer
 }else {
   if (weightInput.value === "" || weightInput.value < 0) {
       weightInput.classList.add("active");
   } else {
       weightInput.classList.remove("active");
   }
   if (repsInput.value === "" || repsInput.value < 0 || repsInput.value % 1 !== 0) {
       repsInput.classList.add("active");
   } else {
       repsInput.classList.remove("active");
   }
}
   }
  });
//removing active status if all statements are true
weightInput.addEventListener('input', () => {
  weightInput.classList.remove("active");
});
repsInput.addEventListener('input', () => {
  repsInput.classList.remove("active");
});
//input valley restriction (up to 4)
weightInput.addEventListener('input', () => {
  if (weightInput.value.length > 4) {
      weightInput.value = weightInput.value.slice(0, 4);
  }
});
repsInput.addEventListener('input', () => {
  if (repsInput.value.length > 4) {
      repsInput.value = repsInput.value.slice(0, 4);
  }
});

/*  happy new year!  

        2024
         A
        /=\               /\  /\    ___  _ __  _ __ __    __
      i/ O \i            /  \/  \  / _ \| '__|| '__|\ \  / /
      /=====\           / /\  /\ \|  __/| |   | |    \ \/ /
      /  i  \           \_\ \/ /_/ \___/|_|   |_|     \  /
    i/ O * O \i                                       / /
    /=========\        __  __                        /_/    _
    /  *   *  \        \ \/ /        /\  /\    __ _  ____  | |
  i/ O   i   O \i       \  /   __   /  \/  \  / _` |/ ___\ |_|
  /=============\       /  \  |__| / /\  /\ \| (_| |\___ \  _
  /  O   i   O  \      /_/\_\      \ \ \/ / / \__,_|\____/ |_|
i/ *   O   O   * \i
/=================\
       |___|

last edit: 07.12.2023
*/
