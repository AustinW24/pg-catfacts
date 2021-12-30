window.onload = function()

document.addEventListener('DOMContentLoaded', ()=>{

    async function getCatFacts(){
      let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
      let data = await response.json()
      console.log(data)
      return data;
    }
    getCatFacts()

    let popup = document.querySelector(".popup-container");
    setTimeout(() => popup)

 })
