
window.onload = function () {
    async function getCatFacts() {
        let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
        let data = await response.json()
        console.log(data)
        
            return data;
    }
    getCatFacts()

    function showPopUp() {
        document.querySelector(".popup-container").style.visibility = "visible"
    }
    setTimeout(() => showPopUp(), 3000)


}
