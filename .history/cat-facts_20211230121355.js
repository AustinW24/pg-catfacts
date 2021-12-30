
window.onload = () => {
    let factList = document.querySelector(".facts__list");
    let popup = document.querySelector(".popup-container");
    let xButton = document.querySelector('#xButton');
    async function getCatFacts() {
        let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
        let data = await response.json();
        document.querySelector(".facts__button").addEventListener("click", function () {
            factList.innerHTML = (data.map((fact) => { return "<li>" + fact.text + "</li>" }));
            document.querySelector(".header").style.marginTop = "4px";
            document.querySelector(".facts__button").style.marginBottom = "4px";
            factList.style.visibility = "visible";
        })
        return data;
    }
    getCatFacts();

    const showPopUp = () => { document.querySelector(".popup-container").style.visibility = "visible" };
    setTimeout(() => showPopUp(), 3000);

    xButton.addEventListener("click", (e) => {
        popup.style.cssText = 'animation:slide-out 1s ease; animation-fill-mode: forwards';
    })
    let xCounter = 0;
    const xClicks = () => {

    }
    // const onLoad = () => {
    //     var showDiv;
    //     if(localStorage.getItem("showDiv") == null) {
    //         showDiv = true;
    //     }
    //     else {
    //         showDiv = localStorage.getItem("showDiv")
    //     }

    //     if (showDiv) {
    //          document.getElementById('myDiv').style.display = 'block';
    //     }
    //     else {
    //         document.getElementById('myDiv').remove();
    //     }
    // }
    // const onClose = () => {
    //     document.getElementById('myDiv').remove();
    //     localStorage.setItem("showDiv", false);
    // }
}
