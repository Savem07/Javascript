// const balisetitreh4=document.querySelector("h4");
// balisetitreh4.style.background="slateblue"

// const questioncontainer=document.querySelector(".onClick");
// console.log(questioncontainer);

btn1.addEventListener("click", () => {
    console.log("method 2 sur le bouton à l'id btn-1");
    // response.classList.add("showResponse")
    response.classList.toggle("showResponse")
    response.style.background = "green";
})

btn2.addEventListener("click", () => {
    console.log("method 3 sur le bouton à l'id btn-2");
    // response.classList.add("showResponse")
    response.classList.toggle("showResponse")
    response.style.background = "red";
})