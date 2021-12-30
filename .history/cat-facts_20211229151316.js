async function getUserAsync()
{
  let response = await fetch(`https://cat-fact.herokuapp.com`);
  let data = await response.json()
  return data;
}
