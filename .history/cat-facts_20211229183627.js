let factList = document.querySelector(".facts__list");
let popup = document.querySelector(".popup-container");
let xButton = document.querySelector('#xButton');

window.onload = () => {
    async function getCatFacts() {
        let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
        let data = await response.json()
        document.querySelector(".facts__button").addEventListener("click", function () {
            factList.innerHTML = (data.map((fact, idx) => { return '<li>' + fact.text + '</li>' }))
            document.querySelector(".header").style.marginTop = "0px"
            document.querySelector(".facts__button").style.marginBottom = "0px"
            factList.style.visibility = "visible"
        })
        return data;
    }
    getCatFacts()
    const showPopUp = () => { document.querySelector(".popup-container").style.visibility = "visible" }
    setTimeout(() => showPopUp(), 3000)

    xButton.addEventListener("click", () =>{
        
    })
    popup.style.cssText = 'animation:slide-out 1s ease; animation:fill-mode'

    let xButton = document.querySelector("#xButton");




}
