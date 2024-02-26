const userName = document.getElementById("user_name");
const gfName = document.getElementById("gf_name");
const calculator = document.getElementById("calculator");
const userNameOutput = document.getElementById("user_name_output");
const percent = document.querySelectorAll(".percent");



calculator.addEventListener("click",(()=>{
    const userName = document.getElementById("user_name").value;
    const gfName = document.getElementById("gf_name").value;
    const lovePercent = Math.floor(Math.random()*5) + 95;
    document.getElementById("percent1").innerHTML= lovePercent + "%";
    document.getElementById("percent2").innerHTML= lovePercent + "%";
    document.getElementById("user_name1").innerHTML= userName;
    document.getElementById("user_name2").innerHTML= userName;
    document.getElementById("gf_name1").innerHTML= gfName;
    document.getElementById("gf_name2").innerHTML= gfName;
}))