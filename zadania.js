let body = document.querySelector("body")
//zadanie1
let div1 = document.createElement("div");
div1.style.height = "100px"
div1.style.width = "100px"
div1.style.border = "1px solid"
body.appendChild(div1)
let btn1 = document.createElement("button");
let inp1 = document.createElement("input");
body.appendChild(btn1)
body.appendChild(inp1)
inp1.type = "color"
btn1.textContent = "color"
btn1.addEventListener("click", function(){
    div1.style.background = inp1.value;
})
//zadanie2 
let inp2 = document.createElement("input")
let btn2 = document.createElement("button")
btn2.textContent = "paragraf"

body.appendChild(inp2)
body.appendChild(btn2)

btn2.addEventListener("click", function(){
    let p = document.createElement("p")
    body.appendChild(p)
    p.textContent = inp2.value
})
//zadanie3
let div2=document.createElement("div")
let inp3=document.createElement("input")
let inp4=document.createElement("input")
let btn3=document.createElement("button")
body.appendChild(inp3)
body.appendChild(inp4)
body.appendChild(btn3)
inp3.placeholder = "wysokosc"
inp4.placeholder = "szerokosc"
btn3.innerHTML = "stworz div"
btn3.addEventListener("click", function(){
    div2.style.height = inp3.value +"px"
    div2.style.width = inp4.value +"px"
    div2.style.border = "1px solid red"
    body.appendChild(div2)
    inp3.value = ""
    inp4.value = ""
})
// zadanie4
let inp5 = document.createElement("input")
let bnt4 = document.createElement("button")
let ul = document.createElement("ul")
body.appendChild(inp5)
body.appendChild(bnt4)
body.appendChild(ul)
bnt4.innerHTML = "lista"
bnt4.addEventListener("click", function(){
    let li =  document.createElement("li")
    let btn5  =document.createElement("button")
    ul.appendChild(li)
    ul.append(btn5)
    li.textContent = inp5.value;
    btn5.innerHTML = "usun"
    btn5.addEventListener("click", function(){
        ul.removeChild(li)
        ul.removeChild(btn5)
    })
})