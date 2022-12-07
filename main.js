const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");

let play = false;
let sWords = ["python", "javascript", "pubg", "clash","winner","arcade","sonar","scar","apple"];
let newWords = "";
let ranWords = "";

const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  let newtempSWords = sWords[ranNum];
//   console.log(newtempSWords.split(""));
  return newtempSWords;
};

const scrambeWords = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    // console.log(temp);
    let j=Math.floor(Math.random()*(i+1));
    // console.log(i);
    // console.log(j);

    arr[i]=arr[j];
    arr[j]=temp;
  }
  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerText = "Guess";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
       ranWords = scrambeWords(newWords.split("")).join('');
    //    console.log(ranWords.join(''));
       msg.innerHTML=`Guess The Word ${ranWords}`;
  }else{
    let tempWord = guess.value;
    if(tempWord===newWords){
        console.log("correct")
        play= false;
       msg.innerHTML=`Awesome It's Correct it is ${newWords}`;
        btn.innerText="Start Again";
    guess.classList.toggle("hidden");
    guess.value="";

    }else{
        console.log("correwerwerwrct")
        msg.innerText=`Sorry Boss..!!!!! ${ranWords} PLzz Guess Again`

    }
  }
});
