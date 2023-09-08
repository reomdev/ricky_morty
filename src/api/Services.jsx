const getCharacters = async () => {
  const response = await fetch(`${process.env.API}/character`);

  if (!response.ok) {
    const message = `An error has ocurred : ${response.status}`;
    throw new Error(message);
  }

  const characters = await response.json();

  return characters;
};

const getCharacter = async (id) => {
  try {
    const response = await fetch(`${process.env.API}/character/${id}`);

    if (!response.ok) {
      const message = `An error has ocurred : ${response.status}`;
      throw new Error(message);
    }

    const characters = await response.json();

    return characters;
  } catch (error) {
    return { status: 500, error };
  }
};

export { getCharacters, getCharacter };
