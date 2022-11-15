import birdsData from "./bird";
import { shuffle } from "./shuffleArray";

export const quizeItem = (array) => {
  const blokItem = document.querySelector(".item-list-left");
  if (!blokItem) {
    return;
  }
  array.forEach((array_item, index) => {
    const listBlock = document.createElement("li");
    listBlock.classList.add("list-item");
    listBlock.innerHTML = array_item.name;
    blokItem.appendChild(listBlock);

listBlock.setAttribute("audio", array_item.audio)

listBlock.setAttribute("image", array_item.image)
    //console.log(listBlock)
    return listBlock;
  });
};
