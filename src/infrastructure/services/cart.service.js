export function addCart(shoppingCar, item) {
  shoppingCar = shoppingCar.filter((car) => car.id !== item.id) ?? [];
  item = shoppingCar.find((car) => car.id === item.id) ?? item;
  item.count = (item.count ?? 0) + 1;
  shoppingCar.push(item);
  localStorage.setItem("shoppingCar", JSON.stringify(shoppingCar, true));
  return shoppingCar;
}

export function removeCart(shoppingCar, item) {
  item = shoppingCar.find((car) => car.id === item.id) ?? item;
  shoppingCar = shoppingCar.filter((car) => car.id !== item.id);
  item.count = item.count - 1;
  if (item.count > 0) shoppingCar.push(item);
  localStorage.setItem("shoppingCar", JSON.stringify(shoppingCar, true));
  return shoppingCar;
}

export function getAllCart() {
  return localStorage.getItem("shoppingCar") ?? [];
}
