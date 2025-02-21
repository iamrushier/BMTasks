import { todoItemType } from "./types";

export function loadFromLocalStorage(key: string): todoItemType[] {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

export function saveToLocalStorage(key: string, data: todoItemType[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}
