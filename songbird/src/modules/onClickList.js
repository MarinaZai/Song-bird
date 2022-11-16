export const onClickList = () => {
  const liItem = document.querySelectorAll(".list-item");
  const audioQuize = document.querySelector(".audio-quize");
  const imageRightBird = document.querySelector(".top-image");
  const nameRigthBird = document.querySelector(".top-question-title");
  const score = document.querySelector(".score");
  const centerRightBlock = document.querySelector(".center-right");

  let attemptCount = 0;
  score.innerHTML = 0;

  [].forEach.call(liItem, function (el) {
    //console.log(el);
    el.onclick = function (e) {
      attemptCount++;
      console.log(attemptCount);

      let audioQuizeSrc = audioQuize.getAttribute("src");
      //console.log(audioQuizeSrc);
      let valueLiAudio = e.target.getAttribute("audio");
      //console.log(valueLiAudio);
      let imageSrc = e.target.getAttribute("image");
      let name = e.target.innerHTML;
      let english = e.target.getAttribute("species");
      let description = e.target.getAttribute("description");
      if (audioQuizeSrc === valueLiAudio) {
        imageRightBird.setAttribute("src", `${imageSrc}`);
        nameRigthBird.innerHTML = `${name}`;
        el.style.color = "green";

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
        //console.log(englishName);

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
              console.log("5")
              score.innerHTML = 5;
              break;
            case 2:
              console.log("4")
              score.innerHTML = 4;
              break;
            case 3:
              console.log("3")
              score.innerHTML = 3;
              break;
            case 4:
              console.log("2")
              score.innerHTML = 2;
              break;
            case 5:
              console.log("1")
              score.innerHTML = 1;
              break
            case 6:
                score.innerHTML = 0;
              console.log("0")
              break;
          }
          
      } else {
        el.style.color = "red";

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
        //console.log(englishName);

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
