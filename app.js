//grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

// link text
playerLivesCount.textContent = playerLives;

//generate the data
const getdata = () => [
    {imgSrc: "./images/cake1.jpg",name:"cake1"},
    {imgSrc: "./images/cake2.jpg",name:"cake2"},
    {imgSrc: "./images/cake3.jpg",name:"cake3"},
    {imgSrc: "./images/cake4.jpg",name:"cake4"},
    {imgSrc: "./images/cake5.jpg",name:"cake5"},
    {imgSrc: "./images/cake6.jpg",name:"cake6"},
    {imgSrc: "./images/cake7.jpg",name:"cake7"},
    {imgSrc: "./images/cake8.jpg",name:"cake8"},
    {imgSrc: "./images/cake1.jpg",name:"cake1"},
    {imgSrc: "./images/cake2.jpg",name:"cake2"},
    {imgSrc: "./images/cake3.jpg",name:"cake3"},
    {imgSrc: "./images/cake4.jpg",name:"cake4"},
    {imgSrc: "./images/cake5.jpg",name:"cake5"},
    {imgSrc: "./images/cake6.jpg",name:"cake6"},
    {imgSrc: "./images/cake7.jpg",name:"cake7"},
    {imgSrc: "./images/cake8.jpg",name:"cake8"},];

//randomize
const randomize = () =>{
    const cardData = getdata();
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData);
    return cardData;
};


//card generator function
const cardGenerator = () => {
    const cardData = randomize();

    //generate the html
    cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";



    //attach the info to  the cards
    face.src = item.imgSrc;
    card.setAttribute("name",item.name);



    //attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click",(e) => {
    card.classList.toggle("toggleCard");
    checkCards(e);
    });
  });
};



// //check cards
        const checkCards =(e) =>{
        console.log(e);
        const clickedCard = e. target;
        clickedCard.classList.add("flipped");
        const flippedCards = document.querySelectorAll(".flipped");
        const toggleCard = document.querySelectorAll(".toggleCard");
        console.log(flippedCards);




//     //logic
    if(flippedCards.length === 2){
         if(
          flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")
          ) {
           console.log("match");
             flippedCards.forEach((card) => {
             card.classList.remove("flipped");
            card.style.pointerevents="none";
           });
        }else { 
             console.log("wrong");
             flippedCards.forEach((card) => {
                 card.classList.remove("flipped");
                 setTimeout(() => card.classList.remove("toggleCard"),1000);
          });
            playerLives--;
             playerLivesCount.textContent = playerLives;
             if(playerLives === 0){
                 restart("TRY AGAIN");
         }
                }
     }


//     // run a check to see if we won the game
     if (toggleCard.length === 16){
         restart("YOU WON");
     }
 };



// //restart
 const restart = (text) => {
     let cardData = randomize();
     let faces = document.querySelectorAll(".face");
     let cards = document.querySelectorAll(".card");
     section.style,pointerEvents = "none";
     cardData.forEach((item, index)  =>  {
         cards[index].classList.remove("toggleCard");

//         //randomize
         setTimeout(()=>{
            cards [index].Style,pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style,pointerEvents = "all";
        },1000);
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text),100);
};
cardGenerator();

