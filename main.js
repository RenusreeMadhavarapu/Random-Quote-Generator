const quoteText = document.querySelector(".quote");
const quoteBtn= document.querySelector("button");
const aut = document.querySelector(".name")

quoteBtn.addEventListener("click",randomQuote);

function randomQuote(){
const quotes=[

   "The Way to get started is to get doing.",
   "Never Quit.",
   "Change is the only constant.",
]
const authors=[

   "Albert",
   "Ein",
   "William"
]
let randomNumber = Math.floor(Math.random()*(quotes.length));
console.log(randomNumber)
quoteText.innerText= quotes[randomNumber];
aut.innerText=authors[randomNumber];


}

// function randomQuote(){

//    fetch("https://api.quotable.io/random")
//    .then(res =>res.json()).then(result=>{
    

//     quoteText.innerText= result.content;
//     aut.innerText=result.author;
//    });

  
// }