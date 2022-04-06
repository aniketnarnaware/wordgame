let array = ['cricket', 'football', 'hockey', 'baseball', 'kabaddi', 'batminton'];
let array_generated = array[Math.floor(Math.random() * array.length)];
let start_word =  document.querySelector("#word_start");
start_word.innerText = array_generated
let x = 0;

// document.addEventListener("DOMcontentLoaded",()=> {
// })
function transformer() {
  start_word.style.top = x + 'px';
  x++;
  start_word.innerHTML = array[Math.floor(Math.random() * array.length)];
  if (x == 500) {
    x = 10;
  }

}
let correctSection = document.querySelector(".left");
let wrongSection = document.querySelector(".right");

const btn = document.querySelector(".start");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.requestAnimationFrame(transformer);
  let word = document.querySelector("input").value;
  console.log(word);
  let contain = array.includes(word);
  let div = document.createElement("div");
  div.innerHTML = word;
  if (contain) {
    console.log(true);
    correctSection.appendChild(div);
  }
  else {
    wrongSection.appendChild(div);
  }
})


