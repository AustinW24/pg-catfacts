async function getUserAsync()
{
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json()
  return data;
}
