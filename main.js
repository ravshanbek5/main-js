let promptElement=prompt("Yoshingizni kiriting:" ,17)

let bogchaElement = document.getElementById("bogcha")
let maktabElement = document.getElementById("maktab")
let univElement = document.getElementById("universitet")
let ishElement = document.getElementById("ish")
let pensiyaElement = document.getElementById("pensiya")

if(promptElement<=6){
    console.log("sz bogchada oqishingiz kerak");
    bogchaElement.style.display="block";
}
if(promptElement>6 && promptElement<=17){
    console.log("sz maktabda oqishingiz kerak");
    maktabElementElement.style.display="block";
}if(promptElement>17 && promptElement<=22){
    console.log("sz universitetda oqishingiz kerak");
    univElement.style.display="block";
}if(promptElement>22 && promptElement<=62){
    console.log("sz ishda ishlashingiz kerak");
    ishElement.style.display="block";
}if(promptElement>63){
    console.log("sz pensiyaner bo'lishingiz kerak");
    pensiyaElementElement.style.display="block";
}
