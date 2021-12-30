
window.onload = function () {
    async function getCatFacts() {
        let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
        let data = await response.json()
        console.log(data)
        let factList = document.querySelector(".facts__list")
        document.querySelector(".facts__button").addEventListener("click", function () {
            let allFacts = data.map((fact, idx) => { return `<li>${fact.text}</li>` })
            factList.innerHtml = allFacts
            factList.style.visibility = "visible"
        })
        return data;
    }
    getCatFacts()


    function showPopUp() {
        document.querySelector(".popup-container").style.visibility = "visible"
    }
    setTimeout(() => showPopUp(), 3000)


}
