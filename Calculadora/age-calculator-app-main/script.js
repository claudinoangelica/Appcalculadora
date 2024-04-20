
//inputs(entradas)
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

//Outputs(saidas)
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

//Elemento formulário(Form Element)
const form = document.querySelector("form");

//Elemento botão
const button = document.querySelector("button");


//Adicionando somatório lista de eventos para formulário
form.addEventListener("submit", handlesubmit);




const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function validate(){
    const inputs = document.querySelectorAll("input");
    let validate = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value){
            i.style.bordercolor = "red";
            parent.querySelector ("small").innerText = "Este campo é obrigatório";
            validate = false;
        } else if (monthInp.value > 12) {
            monthInp.style.bordercolor = "red";
            monthInp.parentElement.querySelector("small").innerText = "Deve ser um mês válido";
            validate = false;
    
        }else if(dayInp.value > 31) {
            dayInp.style.bordercolor = "red";
            dayInp.parentElement.querySelector("small").innerText = "Deve ser um dia válido";
            validate = false;
        } else{
            i.style.bordercolor="black";
            parent.querySelector("small").innerText = "";
            validate = true
        }
    })
}
    function handlesubmit(e) {
         e.preventDefaut();
         if (validate()) {
        if (dayInp.value > day){
            day = day + months[month - 1];
            month = month - 1;            
        
    }
    if (monthInp.value > month){
        month = month + 12;
        year = year - 1;
    }


    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;
    
    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
}
}
