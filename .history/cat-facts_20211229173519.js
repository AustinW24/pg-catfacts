
window.onload = function () {
    async function getCatFacts() {
        let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
        let data = await response.json()
        console.log(data)
        let factList = document.querySelector(".facts__list")
        document.querySelector(".facts__button").addEventListener("click", function () {
            factList.innerHTML = (data.map((fact, idx) => { return '<li>' +  fact.text + '</li>'}))
            document.getElementsByTagName("H1").animate({ marginTop: }) = "5px"
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
