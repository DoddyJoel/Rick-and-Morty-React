export default async function getCharacter(search) {
  const apiURL = `https://rickandmortyapi.com/api/character/?page=1&name=${search}`;
  const resp = await fetch(apiURL);
  const data = await resp.json();
  const { results } = data;
  const imgRK = results.map((item) => {
    const { id, name, status, species, location, origin, image } = item;
    const { name: nameLocation } = location;
    const { name: nameOrigin } = origin;
    return { id, name, status, species, image, nameLocation, nameOrigin };
  });
  return imgRK;
}
