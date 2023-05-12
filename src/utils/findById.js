export const findById = (data, id) => {
  const idx = data.findIndex((note) => note.id === id);
  return data[idx];
};
