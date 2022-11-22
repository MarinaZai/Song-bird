export const onClickList = () => {
  const liItem = document.querySelectorAll(".list-item");
  const audioQuize = document.querySelector(".audio-quize");
  const imageRightBird = document.querySelector(".top-image");
  const nameRigthBird = document.querySelector(".top-question-title");
  const score = document.querySelector(".score");
  const centerRightBlock = document.querySelector(".center-right");
  const buttonNextQuestion = document.querySelector(".bottom-button");
  let attemptCount = 0;

  [].forEach.call(liItem, function (el) {
    el.onclick = function (e) {
      attemptCount++;
      let audioQuizeSrc = audioQuize.getAttribute("src");
      let valueLiAudio = e.target.getAttribute("audio");
      let imageSrc = e.target.getAttribute("image");
      let name = e.target.innerHTML;
      let english = e.target.getAttribute("species");
      let description = e.target.getAttribute("description");
      if (audioQuizeSrc === valueLiAudio) {
        localStorage.setItem('isFinishedGame', true);
        imageRightBird.setAttribute("src", `${imageSrc}`);
        nameRigthBird.innerHTML = `${name}`;
        el.style.color = "green";

        const audioRight = new Audio ("https://cdn.pixabay.com/download/audio/2021/08/04/audio_473a42432c.mp3?filename=tada-fanfare-a-6313.mp3")
        audioRight.play()
        const centerRightImage = document.createElement("img");
        centerRightImage.src = imageSrc;
        centerRightImage.alt = name;
        centerRightImage.classList.add("center-right-image");

        const centerRightFullDescription = document.createElement("div");
        centerRightFullDescription.classList.add(
          "center-right-full-description"
        );

        const russianName = document.createElement("span");
        russianName.classList.add("russian-name");
        russianName.innerHTML = `${name}`;

        const englishName = document.createElement("span");
        englishName.classList.add("english-name");
        englishName.innerHTML = ` (${english})`;

        const audio = document.createElement("AUDIO");
        audio.setAttribute("src", `${valueLiAudio}`);
        audio.setAttribute("controls", "controls");

        const centerRightDescription = document.createElement("div");
        centerRightDescription.classList.add("enter-right-description");
        centerRightDescription.innerHTML = `${description}`;
        centerRightBlock.innerHTML = "";
        centerRightBlock.appendChild(centerRightImage);
        centerRightBlock.appendChild(centerRightFullDescription);
        centerRightFullDescription.appendChild(russianName);
        centerRightFullDescription.appendChild(englishName);
        centerRightFullDescription.appendChild(audio);
        centerRightFullDescription.appendChild(centerRightDescription);

        switch (attemptCount) {
          case 1:
            score.innerHTML = +score.innerHTML + 5;
            break;
          case 2:
            score.innerHTML = +score.innerHTML + 4;
            break;
          case 3:
            score.innerHTML = +score.innerHTML + 3;
            break;
          case 4:
            score.innerHTML = +score.innerHTML + 2;
            break;
          case 5:
            score.innerHTML = +score.innerHTML + 1;
            break;
          case 6:
            score.innerHTML = +score.innerHTML + 0;
            break;
        }
        //console.log(score.innerHTML);
      } else {
        const audioNotProperly= new Audio ("https://cdn.pixabay.com/download/audio/2022/03/10/audio_e4e7943871.mp3?filename=windows-error-sound-effect-35894.mp3")
        const isFinishedGame = localStorage.getItem('isFinishedGame');
        if(isFinishedGame !== 'true') {
          el.style.color = "red";
          audioNotProperly.play()
        }

        const centerRightImage = document.createElement("img");
        centerRightImage.src = imageSrc;
        centerRightImage.alt = name;
        centerRightImage.classList.add("center-right-image");

        const centerRightFullDescription = document.createElement("div");
        centerRightFullDescription.classList.add(
          "center-right-full-description"
        );

        const russianName = document.createElement("span");
        russianName.classList.add("russian-name");
        russianName.innerHTML = `${name}`;

        const englishName = document.createElement("span");
        englishName.classList.add("english-name");
        englishName.innerHTML = ` (${english})`;

        const audio = document.createElement("AUDIO");
        audio.setAttribute("src", `${valueLiAudio}`);
        audio.setAttribute("controls", "controls");

        const centerRightDescription = document.createElement("div");
        centerRightDescription.classList.add("enter-right-description");
        centerRightDescription.innerHTML = `${description}`;
        centerRightBlock.innerHTML = "";
        centerRightBlock.appendChild(centerRightImage);
        centerRightBlock.appendChild(centerRightFullDescription);
        centerRightFullDescription.appendChild(russianName);
        centerRightFullDescription.appendChild(englishName);
        centerRightFullDescription.appendChild(audio);
        centerRightFullDescription.appendChild(centerRightDescription);
      }
      const isFinishedGame = localStorage.getItem('isFinishedGame');
      buttonNextQuestion.disabled = isFinishedGame !== 'true'
    };
  });
};
