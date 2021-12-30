function showPopUp(){
    document.querySelector(".popup-container").getElementsByClassName.visibility=""
}

window.onload = function(){
    let popup = document.querySelector(".popup-container");
    setTimeout(() => popup)
}

document.addEventListener('DOMContentLoaded', ()=>{

    async function getCatFacts(){
      let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
      let data = await response.json()
      console.log(data)
      return data;
    }
    getCatFacts()

 })
