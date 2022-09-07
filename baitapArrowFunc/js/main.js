const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

let selectColor = () => {
    let content = "";
    colorList.map((colorItem,index) =>{
        if (index == 0) {
            content += `
            <button class="color-button ${colorItem} active" onclick="changeColor('${colorItem}')"></button>
        `
        } else{
            content += `
            <button class="color-button ${colorItem}" onclick="changeColor('${colorItem}')"></button>
        `
        }
        
    })
    document.getElementById("colorContainer").innerHTML = content;
}
selectColor();

let changeColor = (clickedColor) => {
    // add color class to #house id
    document.getElementById("house").className = `house ${clickedColor}`; 
    let button = document.querySelectorAll("#colorContainer .color-button");
 
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("active");
    }
    
    document.querySelector(`#colorContainer .${clickedColor}`).className = `color-button ${clickedColor} active`;
}