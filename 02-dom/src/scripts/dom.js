import functions from './domfuncs.js'

// addLi Btn Eventlistener
const addLiBtn = document.getElementById('addLi');
addLiBtn.addEventListener('click', function (e) {
  const myOl = document.getElementById("myOl");
  const li = document.createElement("li");
  myOl.appendChild(functions.buildLi("Your new div's colour is"));
});

// Show Btn Eventlistener
const list = document.getElementsByClassName("myOlitems");
const showLiBtn = document.getElementById('showLi');
showLiBtn.addEventListener('click', function (e) {
  for (let i = list.length - 1; i >= 0; --i) {
    if (list[i].style.display === "none") {
      list[i].style.display = "block";
      console.log(list[i]);
    } else {
      list[i].style.display = "none";
      console.log(list[i]);
    }
  }

});

// delete Btn Eventlistener
const deleteBtn = document.getElementById('deleteLi');
deleteBtn.addEventListener('click', function (e) {
  for (let i = list.length - 1; i >= 0; --i) {
    list[i].remove();
  }
});

// click window Eventlistener
addEventListener('click', function (ev) {
  console.log(ev);
  console.log(ev.target.textContent);
});

// buildCar Btn Eventlistener
const lPanel = document.getElementById('leftPanel');
const onCardClick = (e) => {
  switch (e.target.id) {
    case 'addCard':
      const newCard = functions.buildCard("Card # ");
      lPanel.appendChild(newCard);
      break;
    case 'addCardBeforeBtn':
      functions.addCardBefore(e.target.parentElement, "Card # ");
      break;
    case 'addCardAfterBtn':
      functions.addCardAfter(e.target.parentElement, "Card # ");
      break;
    case 'deleteCardBtn':
      functions.deleteCard(e.target.parentElement);
      break;
  }
};
leftPanel.addEventListener('click', ((e) => {
  onCardClick(e);
}));