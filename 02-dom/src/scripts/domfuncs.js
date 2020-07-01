/**
 * @description javascript Events / DOM
 * @name buildCard
 */

let i = 0;

const functions = {
    
    buildLi: (text) => {
        // random colour math
        const randomColour = Math.floor(Math.random() * 16777215).toString(16);
        // create li element and add attributes
        const li = document.createElement("li");
        li.className = "myOlitems";
        li.style.backgroundColor = "#" + randomColour;
        // create a textnode and append it to li
        const t = document.createTextNode(text + " #" + randomColour);
        li.appendChild(t);
        return li;
    },

    buildCard: (text) => {
        i++;
        const myCard = document.createElement("div");
        myCard.setAttribute("class", "cards");
        const cardTitle = document.createElement("cardTitle");
        cardTitle.setAttribute("id", "cardTitle");
        cardTitle.textContent = text + i;
        myCard.appendChild(cardTitle);
        myCard.appendChild(document.createElement("br"));
        // add buttons
        myCard.appendChild(functions.buildBtn("Add Before", "addCardBeforeBtn", "cardBtn"));
        myCard.appendChild(functions.buildBtn("Add After", "addCardAfterBtn", "cardBtn"));
        myCard.appendChild(functions.buildBtn("Delete", "deleteCardBtn", "cardBtn"));

        return myCard;
    },

    buildBtn: (textContent, id, className) => {
        let btn = document.createElement("button");
        btn.textContent = textContent;
        btn.id = id;
        btn.className = className;
        return btn;
    },

    addCardBefore: (node, text) => {
        const myCard = functions.buildCard(text);
        node.parentElement.insertBefore(myCard, node);
    },
    addCardAfter: (node, text) => {
        const myCard = functions.buildCard(text);
        node.parentNode.insertBefore(myCard, node.nextSibling);
    },
    deleteCard: (node) => {
        node.remove();
    }
};

export default functions;