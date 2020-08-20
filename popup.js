console.log(
  location.href,
  "is not a dating website, please think twice before sending unsolicited DMs"
);

var newDiv = document.createElement("div", { class: "banner" });
newDiv.setAttribute("class", "banner");

// and give it some content
var newParagraph = document.createTextNode(
  `This is not a dating website. Please think twice before sending unsolicited DMs`
);

var closeButton = document.createElement("button");
// add the text node to the newly created div
newDiv.appendChild(newParagraph);
newDiv.appendChild(closeButton);
// newDiv.appendChild(closeButton);

// add the newly created element and its content into the DOM
var currentDiv = document.getElementById("div1");
document.body.insertBefore(newDiv, currentDiv);
