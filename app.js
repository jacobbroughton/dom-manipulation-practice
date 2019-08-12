let columnOne = document.createElement("div");
let columnTwo = document.createElement("div");

document.body.appendChild(columnOne);
document.body.appendChild(columnTwo);

columnOne.style.height = "100%";
columnOne.style.width = "50%";

columnOne.style.border = "black solid 2px";
columnOne.style.display = "flex";
columnOne.style.flexDirection = "column";
columnOne.style.justifyContent = "center";
columnOne.style.alignItems = "center";
columnTwo.style.height = "100%";
columnTwo.style.width = "50%";
columnTwo.style.border = "black solid 2px";
columnTwo.style.display = "flex";
columnTwo.style.flexDirection = "column";
columnTwo.style.justifyContent = "center";
columnTwo.style.alignItems = "center";


// Use spans for smaller sections of code like text
// Use divs for larger sections of code
let clickElement = document.createElement("div");
let clickHeading = document.createElement("h1");
let element_style = clickElement.style;

clickElement.setAttribute("id", "clickButton");

clickHeading.innerText = "Click Me";
element_style.width = "50%";
element_style.display = "flex";
element_style.justifyContent = "center";
element_style.border = "solid 2px black"


clickElement.appendChild(clickHeading)
columnOne.appendChild(clickElement)

clickElement.addEventListener("mousedown", function() {
    element_style.boxShadow = "5px 5px black"
})

clickElement.addEventListener("mouseup", function() {
    element_style.boxShadow = "0px 0px black"
})
// ----------------------------------------------

let hoverElement = document.createElement("div");
let hoverHeading = document.createElement("h1");
let hoverElementStyle = hoverElement.style

hoverElement.setAttribute("id", "hoverElement");
hoverHeading.innerText = "Hover Me"

hoverElement.style.marginTop = "5%"
hoverElementStyle.border = "solid black 2px"
hoverElementStyle.width = "50%";
hoverElementStyle.display = "flex";
hoverElementStyle.justifyContent = "center"

hoverElement.appendChild(hoverHeading);
columnOne.appendChild(hoverElement);

hoverElement.addEventListener("mouseover", function() {
    hoverElementStyle.boxShadow = "5px 5px black"
})

hoverElement.addEventListener("mouseout", function() {
    hoverElementStyle.boxShadow = "0px 0px black"
})

// ---------------------------------------------
let colorArray = ["green", "lightgreen", "lightgrey", "pink", "purple", "yellow", "brown", "blue", "teal"];
let colorBoxArray = [];
let elementsContainer = document.createElement("div");
let initialElement = document.createElement("div");
let mirroredElement = document.createElement("div");
let initialHeading = document.createElement("h3");
let mirroredHeading = document.createElement("h3");
let colorBoxContainer = document.createElement("div");
let colorBox;

for(let i = 0; i < colorArray.length; i++) {
    colorBox = document.createElement("div");
    colorBoxContainer.appendChild(colorBox);
    colorBoxArray.push(colorBox)
    colorBox.style.width = "10%";
    colorBox.style.height = "100%"
    colorBox.style.border = "black solid .5px";
    colorBox.style.backgroundColor = colorArray[i];

    colorBox.addEventListener("click", function() {
        console.log("boii")
        initialElement.style.backgroundColor = colorBoxArray[i].style.backgroundColor;
    })
}

colorBoxContainer.style.height = "100%";
colorBoxContainer.style.display = "flex"
colorBoxContainer.style.justifyContent = "center"
colorBoxContainer.style.flexDirection = "row"
initialHeading.innerText = "Mirror me!";
initialHeading.style.display = "flex";
initialHeading.style.alignSelf = "center";
mirroredHeading.innerText = "Mirrored!";
mirroredHeading.style.alignSelf = "center";
elementsContainer.style.border = "solid 2px black";
elementsContainer.style.width = "50%";
elementsContainer.style.height = "40%";
elementsContainer.style.marginTop = "5%";
initialElement.style.flexDirection = "column";
initialElement.style.height = "50%";
initialElement.style.paddingTop = "5%";
initialElement.style.display = "flex";
initialElement.style.justifyContent = "center";
initialElement.style.backgroundColor = "lightblue";
mirroredElement.style.height = "44%"
mirroredElement.style.display = "flex";
mirroredElement.style.justifyContent = "center";
mirroredElement.style.borderTop = "solid 2px black";

initialElement.appendChild(colorBoxContainer);
initialElement.appendChild(initialHeading);
mirroredElement.appendChild(mirroredHeading);
elementsContainer.appendChild(initialElement);
elementsContainer.appendChild(mirroredElement);
columnOne.appendChild(elementsContainer);

mirroredElement.addEventListener("click", function() {
    mirroredElement.style.backgroundColor = initialElement.style.backgroundColor
})

// Grid that i can shade in a certain # of boxes
// Return # of boxes shaded
let gridNum = 96;
let gridContainer = document.createElement("div")
columnTwo.appendChild(gridContainer)
let unitArr = [];

for(let i = 0; i < gridNum; i++) {
    let gridUnit = document.createElement("div")
    gridContainer.appendChild(gridUnit)
    gridUnit.style.border = "1px lightblue solid"
    gridUnit.style.width = "5%"
    gridUnit.style.height = "7%"
    gridUnit.style.margin = "0%"
    gridUnit.style.alignSelf = "center"
}

gridContainer.style.height = "40%"
gridContainer.style.width = "60%"
gridContainer.style.border = "solid black 2px"
gridContainer.style.display = "flex"
gridContainer.style.justifyContent = "center"
gridContainer.style.flexWrap = "wrap"
