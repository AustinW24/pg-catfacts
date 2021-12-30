
window.onload =  () =>{
    async function getCatFacts() {
        let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
        let data = await response.json()
        console.log(data)
        let factList = document.querySelector(".facts__list")
        document.querySelector(".facts__button").addEventListener("click", function () {
            factList.innerHTML = (data.map((fact, idx) => { return '<li>' +  fact.text + '</li>'}))
            document
            factList.style.visibility = "visible"
        })
        return data;
    }
    getCatFacts()


    const showPopUp = () => {
        document.querySelector(".popup-container").style.visibility = "visible"
    }
    setTimeout(() => showPopUp(), 3000)


}
