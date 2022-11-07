const wordsection=document.querySelector(".word");
const boardsection=document.querySelector(".board");
const figure=document.querySelector(".figure");

const letters=["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];

const human=["head","body","rightarm","leftarm","rightleg","leftleg","dick"]

let randomword="0";

function createkeyboard() {
    boardsection.innerHTML = "";
    for (let a = 0; a < letters.length; a++) {
        let square = document.createElement("div");
        square.classList.add("lettersquare");
        square.textContent = letters[a];
        boardsection.appendChild(square);
    }
}

const createWord=()=>{
    wordsection.innerHTML=""
    randomword=selectWord()
    for(let a=0;a<7;a++){
        let square=document.createElement("div")
        square.classList.add("square")
        square.textContent=randomword[a]
        wordsection.appendChild(square)
    }
}

const selectWord=()=>{
     const word=[
"övünme",
"sevinme",
"ağlanma",
"yakınma",
"çekişme",
"yitirme",
"katılma",
"seçilme",
"bağırma",
"boşanma",
"evlenme",
"bırakma",
"suçlama",
"cemirem",
"giyinme",
"çağırma",
"başlama",
"bitirme",
"besleme",
"toplama",
"dağıtma",
"mengene",
"ışıldak",
"testere",
"tencere",
"mobilya",
"telefon",
"karyola",
"firkete",
"karınca",
"papağan",
"örümcek",
"penguen",
"balaban",
"pelikan",
"kızkuşu",
"kukumav",
"makarna",
"börülce",
"cemremm",
"domates",
"avokado",
"brokoli",
"dereotu",
"ıspanak",
"muşmula",
"kereviz",
"patates",
"şeftali",
"muhalif",
"realist",
"payidar",
"faydalı",
"güvenli",
"yumuşak",
"detaylı",
"yararlı",
"utangaç",
"değişik",
"manidar",
"kasıntı",
"çaçaron",
"ukrayna",
"romanya",
"bayburt",
"kocaeli",
"selanik",
"malatya",
"uruguay",
"kayseri",
"antalya",
"antakya",
"saldırı",
"öğrenci",
"gürültü",
"cemreee",
"hamiyet",
"meziyet",
"klarnet",
"darbuka",
"trompet",
"okarina",
"trombon",
"bağlama",
"tapınak",
"iltihap",
"tiyatro",
"trajedi",
"ittifak",
];
const randomWord=Math.floor(Math.random()*word.length);
console.log(word[randomWord]);
    return keyWord=Array.from(word[randomWord])
};

const generatebody=(value)=>{
    let bodypart=document.createElement("div")
    bodypart.classList.add(human[value])
    figure.appendChild(bodypart);
};

const startgame=()=>{
    createkeyboard();
    createWord();
    let buttons=document.querySelectorAll(".lettersquare")
    let squares=document.querySelectorAll(".square")
    let figuresection=document.querySelectorAll(".figure div")
    let wrongcount=0
    let correctcount=0
    figuresection.forEach(item=>{
        if(!item.getAttribute("data-value"))item.remove();
        })
    buttons.forEach(item=>{
        item.addEventListener("click",(e)=>{
            let chosenletter=e.target.textContent
            if(randomword.includes(chosenletter))
            {
                e.target.classList.add("correct")
                squares.forEach(item=>{
                    if(item.textContent===chosenletter)
                    {
                        item.classList.add("show")
                        correctcount++
                    }
                })
                if(correctcount===7)
                {
                    buttons.forEach(item=>{
                        item.classList.add("close")
                    })
                    squares.forEach(item=>{
                        item.style.background="green"
                    })
                    setTimeout(()=>{
                        startgame()
                    },4000)
                }
            }
            else{
                e.target.classList.add("wrong")
                wrongcount++
                generatebody(wrongcount-1)
                if(wrongcount==7)
                {
                    buttons.forEach(item=>{
                        item.classList.add("close")
                    })
                    squares.forEach(item=>{
                        item.classList.add("show")
                        item.style.background="red"
                    })
                    setTimeout(()=>{
                        startgame()
                    },4000)
                }
            }
        })
    }) 
}

startgame();