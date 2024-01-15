const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Hey chiquita, me encantas, tu, tu carita, tu forma de ser, el estar contigo da paz y lo disfruta un monton, haz hecho que el conocerte sea una experiencia hermosa, descubrir de a poco cada cosa que te gusta, que te da placer, que te molesta, que te da tristeza, tus pasatiempos, tus metas, eres increible, me haz ayudado a entenderme un poco mas y estar mejor en varias cosas, me encantas como eres y mejoraras todo eso que sientes que debes, te apoyare siempre mi niña linda, besitos ya sabes donde feliz mes Yor 💛 <br><br> 15/12/2023 "

  gif.src = "https://media0.giphy.com/media/SdNbDxnsrAww053vFz/giphy_s.gif?cid=ecf05e47f30mmh7j1oous02rz3df2a9bpgn227wpwf0grrfr&ep=v1_stickers_search&rid=giphy_s.gif&ct=s";

  wrapper.classList.add("after-yes-click");

  yesBtn.remove();
  noBtn.remove();
  document.querySelector("h1").remove();

    const backButton = document.createElement("button");
    backButton.innerText = "Volver";
    backButton.classList.add("back-btn");
    backButton.addEventListener("click", () => {
      location.reload();
    });
    wrapper.appendChild(backButton);
    
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});