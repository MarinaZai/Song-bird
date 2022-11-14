import birdsData from "./bird";
import { shuffle } from "./shuffleAray";

export const quizeItem = (array) => {
  const blokItem = document.querySelector(".item-list-left");
  if (!blokItem) {
    return;
  }
  console.log(blokItem);
  array.forEach((array_item, index) => {
    const listBlock = document.createElement("li");
    listBlock.classList.add("list-item");
    listBlock.innerHTML = array_item.name;
    blokItem.appendChild(listBlock);
    return listBlock;
  });
};
