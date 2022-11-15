export const onClickList = () => {
  const liItem = document.querySelectorAll(".list-item");
  const audioQuize = document.querySelector(".audio-quize");
  const imageRightBird = document.querySelector(".top-image")
  const nameRigthBird = document.querySelector(".top-question-title")
  const score = document.querySelector(".score");

  let scoreResult = 0;
  score.innerHTML = `${scoreResult}`;
  
  [].forEach.call(liItem, function (el) {
    //console.log(el)
    el.onclick = function (e) {
      let audioQuizeSrc = audioQuize.getAttribute("src");
      //console.log(audioQuizeSrc);
      let valueLiAudio = e.target.getAttribute("audio");
      //console.log(valueLiAudio);
      let name = e.target.innerHTML
      let imageSrc = e.target.getAttribute("image")

      if (audioQuizeSrc === valueLiAudio) {
        scoreResult = scoreResult + 5;
        score.innerHTML = `${scoreResult}`;
        imageRightBird.setAttribute("src", `${imageSrc}`)
        nameRigthBird.innerHTML = `${name}`
        el.style.color = "green";
      } else {
        scoreResult = scoreResult - 1;
        score.innerHTML = `${scoreResult}`
        el.style.color = "red";
      }
      
    };
  });
};
