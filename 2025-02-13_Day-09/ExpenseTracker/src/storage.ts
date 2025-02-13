function saveToLocalStorage<T, U>(key: T, data: U): void {
  localStorage.setItem(JSON.stringify(key), JSON.stringify(data));
}
function getFromLocalStorage<T, U>(key: T): U {
  const serializedData = localStorage.getItem(JSON.stringify(key)) || "";
  return JSON.parse(serializedData) as U;
}
export { saveToLocalStorage, getFromLocalStorage };
