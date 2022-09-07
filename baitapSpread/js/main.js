let hover = () => {
    let string = document.querySelector(".heading").innerHTML;
    let charList = [...string];
    let content = "";
    for (const char of charList) {
        content += `
            <span>${char}</span>
        `;
    }
    document.querySelector(".heading").innerHTML = content;
};
hover();