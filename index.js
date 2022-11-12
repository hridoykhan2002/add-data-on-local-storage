

// Selected Element

const selectFontSize = document.querySelector("#selectFontSize");
const selectBgColor = document.querySelector("#selectBgColor");
const resetButton = document.querySelector("#resetButton");
const mainElement = document.querySelector("main");

const setValues = (BgColor,FontSize) =>{
    selectBgColor.value = BgColor;
    selectFontSize.value = FontSize;
    mainElement.style.fontSize = FontSize;
    mainElement.style.color = BgColor;
};


const pickLocalStorage = () =>{
    const BgColor = localStorage.getItem("bgColor");
    const FontSize = localStorage.getItem("fontSize");
    if(BgColor && FontSize){
        setValues(BgColor,FontSize)
    }
    else if(!BgColor && FontSize){
        setValues(FontSize,"black")
    }
    else if(BgColor && !FontSize){
        setValues("20px",BgColor)
    }else{
        setValues("20px","black")
    }
};

// change background color
const changeBgColor = (event) => {
    const storeBgColor = event.target.value;
    mainElement.style.color = storeBgColor;
    localStorage.setItem("bgColor",storeBgColor);
};

// change background color
const changeFontSize = (event) => {
    const storeFontSize = event.target.value;
    mainElement.style.fontSize = storeFontSize;
    localStorage.setItem("fontSize",storeFontSize);

};

// reset everything
const resetEverything = () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    selectBgColor.value = "black";
    selectFontSize.value = "20px";
    mainElement.style.fontSize = "18px";
    mainElement.style.color = "black";
    
}

// add event listener

selectBgColor.addEventListener("change",changeBgColor);
selectFontSize.addEventListener("change",changeFontSize);
resetButton.addEventListener("click",resetEverything);

// call function

pickLocalStorage();