export const onClickList = () => {
  const liItem = document.querySelectorAll(".list-item");
  const audioQuize = document.querySelector(".audio-quize");
  const imageRightBird = document.querySelector(".top-image");
  const nameRigthBird = document.querySelector(".top-question-title");
  const score = document.querySelector(".score");
  const centerRightBlock = document.querySelector(".center-right");

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
        imageRightBird.setAttribute("src", `${imageSrc}`);
        nameRigthBird.innerHTML = `${name}`;
        el.style.color = "green";

        const audioRight = new Audio ("../audio/properly.mp3")
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
        el.style.color = "red";

        const audioNotProperly= new Audio ("../audio/not-properly.mp3")
        audioNotProperly.play()

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
    };
  });
};
