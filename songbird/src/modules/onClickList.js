export const onClickList = () => {
    const liItem = document.querySelectorAll('.list-item');
    const audioQuize = document.querySelector(".audio-quize");
    //console.log(audioQuize);
//перебираем все найденные элементы и вешаем на них события
[].forEach.call( liItem, function(el) {
    //вешаем событие
    el.onclick = function(e) {
        let audioQuizeSrc = audioQuize.getAttribute("src")
        console.log(audioQuizeSrc)
        let valueLiAudio = e.target.getAttribute("audio")
       console.log(valueLiAudio)
       if(audioQuizeSrc === valueLiAudio) {
        console.log(e.target.innerHTML)
       el.style.color = "green"
       } else {
        el.style.color = "red"
       }
    }
});
}