export const clearBlocksForNewQuestion = () => {
  const centerRight = document.querySelector(".center-right");
  const topImage = document.querySelector(".top-image");
  const audioQuize = document.querySelector(".audio-quize");
  const blokItem = document.querySelector(".item-list-left");
  const topQuestion = document.querySelector(".top-question");
  const topQuestionTitle = document.querySelector(".top-question-title");

  blokItem.innerHTML = "";
  topQuestionTitle.innerHTML = "******";
  centerRight.innerHTML = "Listen to the player! Select a bird from the list.";
  topImage.setAttribute("src", "assets/unknown_bird.jpg");
  topQuestion.removeChild(audioQuize);
};
