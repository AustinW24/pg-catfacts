document.addEventListener('DOMContentLoaded', ()=>{  })

async function getCatFacts()
{
  let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
  let data = await response.json()
  return data;
}
