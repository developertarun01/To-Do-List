let input1 = document.getElementById("title");
let input2 = document.getElementById("desc");
let text = document.querySelector(".text");
let i = 1;

function Add(){
    if(input1.value == "") {
        alert("Please Enter a Task")
    }
    else {
        let newEle = document.createElement("ul");
        newEle.innerHTML=`<div>${i}. <b>${input1.value}:</b> ${input2.value}</div> <h1>X</h1>`;
        text.appendChild(newEle);
        input1.value ="";
        input2.value ="";
        newEle.querySelector("h1").addEventListener("click", remove);
        function remove() {
            newEle.remove()
            i--;
        }
        i++;
    }
}

// submit.addEventListener("click", (e)=>{
//     e.preventDefault()
//     let titlec = title.value   
//     let descc = desc.value
//     localStorage.setItem("todo", JSON.stringify([titlec, descc]))
//     console.log(e)
//     todo.innerHTML = `
//     ${titlec}<br> 
//     ${descc}
//     `
//     title.value = ""
//     desc.value = ""
// })

// deleteBtn.addEventListener("click", (e)=>{
//     e.preventDefault()
//     localStorage.removeItem("todo")
//     todo.innerHTML = ""
// })