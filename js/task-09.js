function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
 
 const onBtnChangeColor = document.querySelector(".change-color");
 const valueColor = document.querySelector(".color");
 
 onBtnChangeColor.addEventListener("click", () => {
   const colorRandom = getRandomHexColor();
 
   document.body.style.backgroundColor = colorRandom;
   valueColor.textContent = colorRandom;
 });
