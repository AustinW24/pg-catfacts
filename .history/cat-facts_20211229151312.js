async function getUserAsync()
{
  let response = await fetch(`https://cat-fact.herokuapp.co`);
  let data = await response.json()
  return data;
}
