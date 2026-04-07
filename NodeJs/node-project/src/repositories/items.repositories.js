let items = [];
let nextId = 1;

export async function findAll() {
    return items;
}

export async function findOne(id) {
    return items.find((item) => item.id === id);
}

export async function createOne(data) {
    const id = items.length + 1;
    const newItem = {
        id: nextId++,
        name: data.name,
        description: data.description ?? '',
    };
    items.push(newItem);
    return newItem;
}

export function findOneAndUpdate(id, data) {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return null;

  items[index] = {
    ...items[index],
    name: data.name ?? items[index].name,
    description: data.description ?? items[index].description,
  };

  return items[index];
}

export function deleteAll() {
    items = [];
    return items;
}

export function deleteOne(id) {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
}


