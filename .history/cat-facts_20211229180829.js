
window.onload = () => {
    async function getCatFacts() {
        let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
        let data = await response.json()
        let factList = document.querySelector(".facts__list")
        let popup = document.querySelector(".popup-container")
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

    let xButton = document.querySelector("#xButton");
    function slideDown (element, duration, finalheight, callback) {
        var s = element.style;
        s.height = '0px';

        var y = 0;
        var framerate = 10;
        var one_second = 1000;
        var interval = one_second*duration/framerate;
        var totalframes = one_second*duration/interval;
        var heightincrement = finalheight/totalframes;
        var tween = function () {
            y += heightincrement;
            s.height = y+'px';
            if (y<finalheight) {
                setTimeout(tween,interval);
            }
        }
        tween();
    }


}
