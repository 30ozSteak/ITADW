let url = location.href;

var currentDiv = document.getElementById("div1");
var newDiv = document.createElement("div");
var newParagraph = document.createTextNode(
  `This is not a dating website. Unsolicited DMs will not be tolerated`
);
document.body.insertBefore(newDiv, currentDiv);

var closeButton = document.createElement("button");
var buttonInner = document.createTextNode(`Got it`);

newDiv.setAttribute("class", "banner");
newDiv.appendChild(newParagraph);
newDiv.appendChild(closeButton);
closeButton.appendChild(buttonInner);

closeButton.addEventListener("click", () => removeBanner());

function removeBanner() {
  newDiv.remove();
}

var sheet = document.createElement("style");

newDiv.style = `
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 24px !important;
  font-family: 'Arial';
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: rgb(255, 74, 74);
  width: 100%;
  height: 100px !important;
  margin: 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.376);
  transition: .2s;
  z-index: 900000;
`;

closeButton.style = `
    border: none;
    border-radius: 15px;
    background-color: white;
    width: 94px !important;
    margin-top: 14px;
    transition: .2s;
    font-size: 24px;
`;

document.body.appendChild(sheet);
