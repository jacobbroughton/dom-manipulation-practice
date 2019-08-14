let columnOne = document.createElement("div");
let columnTwo = document.createElement("div");
columnOne.setAttribute("id","columnOne")
columnTwo.setAttribute("id","columnTwo")

document.body.appendChild(columnOne);
document.body.appendChild(columnTwo);


// Use spans for smaller sections of code like text
// Use divs for larger sections of code
let clickMeElement = document.createElement("div");
let clickHeading = document.createElement("h1");
clickMeElement.setAttribute("id", "clickMeElement");
clickHeading.innerText = "Click Me";
clickMeElement.appendChild(clickHeading)
columnOne.appendChild(clickMeElement)

clickMeElement.addEventListener("mousedown", function() {
    clickMeElement.style.boxShadow = "5px 5px black"
})

clickMeElement.addEventListener("mouseup", function() {
    clickMeElement.style.boxShadow = "0px 0px black"
})
// ----------------------------------------------

let hoverElement = document.createElement("div");
let hoverHeading = document.createElement("h1");
hoverElement.setAttribute("id", "hoverElement");
hoverHeading.innerText = "Hover Me"
hoverElement.appendChild(hoverHeading);
columnOne.appendChild(hoverElement);

hoverElement.addEventListener("mouseover", function() {
    hoverElement.style.boxShadow = "5px 5px black"
})

hoverElement.addEventListener("mouseout", function() {
    hoverElement.style.boxShadow = "0px 0px black"
})

// ---------------------------------------------
let colorArray = ["green", "lightgreen", "lightgrey", "pink", "purple", "yellow", "brown", "blue", "teal"];
let colorBoxArray = [];
let mirrorElementsContainer = document.createElement("div");
let initialElement = document.createElement("div");
let mirroredElement = document.createElement("div");
let initialHeading = document.createElement("h3");
let mirroredHeading = document.createElement("h3");
let colorBoxContainer = document.createElement("div");
let colorBox;

mirrorElementsContainer.setAttribute("id", "mirrorElementsContainer")
initialElement.setAttribute("id", "initialElement")
mirroredElement.setAttribute("id", "mirroredElement")
colorBoxContainer.setAttribute("id", "colorBoxContainer")

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


mirroredHeading.innerText = "Mirrored!"
initialElement.appendChild(colorBoxContainer);
initialElement.appendChild(initialHeading);
mirroredElement.appendChild(mirroredHeading);
mirrorElementsContainer.appendChild(initialElement);
mirrorElementsContainer.appendChild(mirroredElement);
columnOne.appendChild(mirrorElementsContainer);

mirroredElement.addEventListener("click", function() {
    mirroredElement.style.backgroundColor = initialElement.style.backgroundColor
})

// Grid that i can shade in a certain # of boxes
// Return # of boxes shaded
let gridNum = 96;
let gridContainer = document.createElement("div")
let amountSelectedDiv = document.createElement("div")
let amountSelectedText = document.createElement("h3")
let resetButton = document.createElement("button")
let unitArr = [];
let selectedArr = []
let amountSelected = 0;
gridContainer.setAttribute("id", "gridContainer")
amountSelectedDiv.setAttribute("id","amountSelectedDiv")
columnTwo.appendChild(gridContainer)
resetButton.setAttribute("id", "resetButton")

for(let i = 0; i < gridNum; i++) {
    let gridUnit = document.createElement("div")
    gridContainer.appendChild(gridUnit)
    unitArr.push(gridUnit)
    unitArr[i].setAttribute("id", [i])
    gridUnit.style.border = "1px black solid"
    gridUnit.style.width = "7%"
    gridUnit.style.height = "10%"
    gridUnit.style.alignSelf = "center"

    gridUnit.addEventListener("click", function() {
        unitArr[i].style.background = "black";
        // FIX THIS
        if(selectedArr[i] !== unitArr[i]) {
            selectedArr.push(unitArr[i]);
            amountSelected = selectedArr.length;
            amountSelectedText.innerHTML = + amountSelected + " units selected"
        }
    })

    resetButton.addEventListener("click", function() {
        selectedArr = [];
        unitArr[i].style.backgroundColor = "";
        amountSelected = selectedArr.length;
        amountSelectedText.innerHTML = + amountSelected + " units selected"
    })
}

amountSelectedText.innerHTML = + amountSelected + " units selected";
resetButton.innerText = "Reset"
amountSelectedDiv.appendChild(resetButton)
amountSelectedDiv.appendChild(amountSelectedText);
columnTwo.appendChild(amountSelectedDiv);




// Grid that changes when you hover over certain parts
let gridNum2 = 96;
let gridContainer2 = document.createElement("div")
let unitArr2 = [];
let selectedArr2 = []
let amountSelected2 = 0;
gridContainer2.setAttribute("id", "gridContainer2")
columnTwo.appendChild(gridContainer2)

for(let i = 0; i < gridNum2; i++) {
    let dynamicGridUnit = document.createElement("div")
    gridContainer2.appendChild(dynamicGridUnit)
    unitArr2.push(dynamicGridUnit)
    unitArr2[i].setAttribute("id", [i])
    dynamicGridUnit.style.border = "1px black solid"
    dynamicGridUnit.style.width = "7%"
    dynamicGridUnit.style.height = "10%"
    dynamicGridUnit.style.alignSelf = "center"

    dynamicGridUnit.addEventListener("mouseover", function() {
        dynamicGridUnit.style.boxShadow = "inset 0 0 9px black"
        dynamicGridUnit.style.borderRadius = "10px"
        dynamicGridUnit.style.backgroundColor = "lightblue"
    })

    dynamicGridUnit.addEventListener("mouseout", function() {
        dynamicGridUnit.style.margin = "0"
        dynamicGridUnit.style.boxShadow = "inset 0 0 0px white"
        setTimeout(function() {
            dynamicGridUnit.style.borderRadius = "0px"
            dynamicGridUnit.style.backgroundColor = "white"
        }, 1500)
    })
}


// Make a doodle jump type of game
// in here or separately