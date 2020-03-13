
const functions = {

    addDiv: (string) => {
        return string
    },

    setBg: (randomColur) => {
        const randomColour = Math.floor(Math.random() * 16777215).toString(16);
        const li = document.createElement("li");
        li.style.backgroundColor = "#" + randomColour;
        let t = document.createTextNode("#" + randomColour);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
};

export default functions;