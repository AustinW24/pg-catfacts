async function getUserAsync()
{
  let response = await fetch(``);
  let data = await response.json()
  return data;
}
