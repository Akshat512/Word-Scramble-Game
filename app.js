const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play=false;
let words = ['java','python','android','c#','c++','swift','reactjs','angular','php','css','sql','javascript','html','jquery','ruby'];
let newWords = "";
let randWords = "";

const createNewWords = () => {
let ranNum = Math.floor(Math.random() * words.length);
let tempWords = words[ranNum];
return tempWords;
}
const scrambleWords = (arr) => {
for(let i=arr.length-1;i>0;i--){
   let temp = arr[i];
//    console.log(temp);
   let j = Math.floor(Math.random() * (i+1));
//    console.log(i);
//    console.log(j);
   arr[i]=arr[j];
   arr[j]=temp;
}
return arr;
}
btn.addEventListener('click',function(){
   if(!play){
       play=true;
       btn.innerHTML = "Guess Now";
       guess.classList.toggle('hidden');
       newWords = createNewWords();
       randWords = scrambleWords(newWords.split(""));
    //    console.log(randWords);
       msg.innerHTML = ` Guess the word - ${randWords.join("")}`;
   }
   else{
       let inpWord = guess.value;
       if(newWords == inpWord){
           play=false;
           msg.innerHTML = `Congratulations , Its correct - ${newWords}`;
           btn.innerHTML = "Start Again!!!";
           guess.classList.toggle('hidden');
           guess.value = "";
       }
       else{
        msg.innerHTML = `Sorry , Its Incorrect , Please try again : ${randWords.join("")}`;
       }
   }
})