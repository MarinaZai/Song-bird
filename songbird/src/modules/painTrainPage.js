import birdsData from "./bird";

export const painTrainPage = () => {
  const trainPage = document.querySelector(".train-page");
  if(!trainPage) {
    return
  }
  console.log(trainPage)
  birdsData.forEach((array_item, index) => {
   /*  item.forEach((array_item, index) => { */
      const newOneBlock = document.createElement("div");
      newOneBlock.classList.add("one_block");
      const newImage = document.createElement("img");
      newImage.src = array_item.image;
      newImage.alt = array_item.name;
      newImage.classList.add("picture");
      const audio = document.createElement("AUDIO");
      audio.setAttribute("src", `${array_item.audio}`);
      audio.setAttribute("controls", "controls");
      const newDescriptionImage = document.createElement("div");
      newDescriptionImage.classList.add("description_image");
      const newTextNamePet = document.createElement("div");
      newTextNamePet.innerHTML = array_item.name;
      newTextNamePet.classList.add("name_bird");
      const newTextName = document.createElement("div");
      newTextName.innerHTML = `(${array_item.species})`;
      newTextName.classList.add("name");
      const newDescriptionPet = document.createElement("div");
      newDescriptionPet.innerHTML = array_item.description;
      newDescriptionPet.classList.add("description_pet");
      newOneBlock.appendChild(newImage);
      newOneBlock.appendChild(audio)
      newOneBlock.appendChild(newDescriptionImage);
      newDescriptionImage.appendChild(newTextNamePet);
      newDescriptionImage.appendChild(newTextName);
      newDescriptionImage.appendChild(newDescriptionPet);
      trainPage.appendChild(newOneBlock);
      return newOneBlock;
    });
  /* }) */;
};
