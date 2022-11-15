export const onClickList = () => {
  const liItem = document.querySelectorAll(".list-item");
  const audioQuize = document.querySelector(".audio-quize");
  const imageRightBird = document.querySelector(".top-image");
  const nameRigthBird = document.querySelector(".top-question-title");
  const score = document.querySelector(".score");
  const centerRightBlock = document.querySelector(".center-right");

  let scoreResult = 0;
  score.innerHTML = `${scoreResult}`;

  [].forEach.call(liItem, function (el) {
    //console.log(el);
    el.onclick = function (e) {
      let audioQuizeSrc = audioQuize.getAttribute("src");
      //console.log(audioQuizeSrc);
      let valueLiAudio = e.target.getAttribute("audio");
      //console.log(valueLiAudio);
      let imageSrc = e.target.getAttribute("image");
      let name = e.target.innerHTML;
      let english = e.target.getAttribute("species");
      let description = e.target.getAttribute("description");
      if (audioQuizeSrc === valueLiAudio) {
        scoreResult = scoreResult + 5;
        score.innerHTML = `${scoreResult}`;
        imageRightBird.setAttribute("src", `${imageSrc}`);
        nameRigthBird.innerHTML = `${name}`;
        el.style.color = "green";

        const centerRightImage = document.createElement("img");
        centerRightImage.src = imageSrc;
        centerRightImage.alt = name;
        centerRightImage.classList.add("center-right-image");

        const centerRightFullDescription = document.createElement("div");
        centerRightFullDescription.classList.add("center-right-full-description");

        const russianName = document.createElement("span");
        russianName.classList.add("russian-name");
        russianName.innerHTML = `${name}`

        const englishName = document.createElement("span");
        englishName.classList.add("english-name");
        englishName.innerHTML = ` (${english})`
        console.log(englishName)

        const audio = document.createElement("AUDIO");
        audio.setAttribute("src", `${valueLiAudio}`);
        audio.setAttribute("controls", "controls");

        const centerRightDescription = document.createElement("div");
        centerRightDescription.classList.add("enter-right-description");
        centerRightDescription.innerHTML = `${description}`
        centerRightBlock.innerHTML = ""
        centerRightBlock.appendChild(centerRightImage)
        centerRightBlock.appendChild(centerRightFullDescription)
        centerRightFullDescription.appendChild(russianName)
        centerRightFullDescription.appendChild(englishName)
        centerRightFullDescription.appendChild(audio)
        centerRightFullDescription.appendChild(centerRightDescription)

      } else {
        scoreResult = scoreResult - 1;
        score.innerHTML = `${scoreResult}`;
        el.style.color = "red";

        const centerRightImage = document.createElement("img");
        centerRightImage.src = imageSrc;
        centerRightImage.alt = name;
        centerRightImage.classList.add("center-right-image");

        const centerRightFullDescription = document.createElement("div");
        centerRightFullDescription.classList.add("center-right-full-description");

        const russianName = document.createElement("span");
        russianName.classList.add("russian-name");
        russianName.innerHTML = `${name}`

        const englishName = document.createElement("span");
        englishName.classList.add("english-name");
        englishName.innerHTML = ` (${english})`
        console.log(englishName)

        const audio = document.createElement("AUDIO");
        audio.setAttribute("src", `${valueLiAudio}`);
        audio.setAttribute("controls", "controls");

        const centerRightDescription = document.createElement("div");
        centerRightDescription.classList.add("enter-right-description");
        centerRightDescription.innerHTML = `${description}`
        centerRightBlock.innerHTML = ""
        centerRightBlock.appendChild(centerRightImage)
        centerRightBlock.appendChild(centerRightFullDescription)
        centerRightFullDescription.appendChild(russianName)
        centerRightFullDescription.appendChild(englishName)
        centerRightFullDescription.appendChild(audio)
        centerRightFullDescription.appendChild(centerRightDescription)
      }
    };
  });
};
