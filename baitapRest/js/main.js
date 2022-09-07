let calAverage = (...numArray) => {
    let sum = 0;
    let avg = 0;
    for (let i in numArray) {
        sum += numArray[i];
        n = numArray.length;
        avg = sum/n;
    }
    return avg;
}
let getAvgK1 = () => {
    let toan = Number(document.getElementById("inpToan").value);
    let ly = Number(document.getElementById("inpLy").value);
    let hoa = Number(document.getElementById("inpHoa").value);
    let dtb = calAverage(toan,ly,hoa);
    document.getElementById("tbKhoi1").innerHTML= dtb;
}
document.getElementById("btnKhoi1").onclick = getAvgK1;

let getAvgK2 = () => {
    let van = Number(document.getElementById("inpVan").value);
    let su = Number(document.getElementById("inpSu").value);
    let dia = Number(document.getElementById("inpDia").value);
    let anh = Number(document.getElementById("inpEnglish").value);
    let dtb = calAverage(van, su, dia, anh);
    document.getElementById("tbKhoi2").innerHTML= dtb;
}
document.getElementById("btnKhoi2").onclick = getAvgK2;