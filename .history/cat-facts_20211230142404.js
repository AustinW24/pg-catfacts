
window.onload = () => {
    let factList = document.querySelector(".facts__list");
    let popup = document.querySelector(".popup-container");

    const multipleClicks = localStorage.getItem("multiple-clicks");
    if(multipleClicks){
        popup.style.display = "none";
    }
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
    setTimeout(() => document.querySelector(".popup-container").style.visibility = "visible", 500);
}
