function html() {
  const modal = document.getElementById('janela-modal2');
  modal.classList.add('abre');

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    modal.style.top = scrollPosition + 'px';
  });

  modal.addEventListener('click', (e) => {
    if (e.target.id == 'fechar' || e.target.id == 'janela-modal2') {
      modal.classList.remove('abre');
    }
  });

  // Adiciona ouvinte de eventos de teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'x') { // Verifica se a letra "x" foi pressionada
      modal.classList.remove('abre');
    }
  });
}
//audio
html();
 var audio = new Audio("descriçãopt.mp4");
    var playPauseButton = document.getElementById("playPauseButton");
    var playIcon = document.querySelector(".play-icon");

    function togglePlay() {
      if (audio.paused) {
        audio.play();
        playPauseButton.classList.add("playing"); 
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause"); 
      } else {
        audio.pause();
        playPauseButton.classList.remove("playing"); playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play"); 
      }
    }

    document.addEventListener("keydown", function(event) {
      if (event.code === "KeyY") {
        togglePlay();
      }
    });
//api da google/tradução
function translatePage() {
  var lang = 'en';
  var url = 'https://translate.google.com/translate?hl=' + lang + '&sl=auto&u=' + encodeURIComponent(window.location.href);
  window.location.href = url;

  var audio = new Audio();
  if (lang === 'en') {
    audio.src = 'descriçãoen.mp4';
  } else {
    audio.src = 'descriçãopt.mp4';
  }
  audio.play();
}

//menu hamburguer

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('menu-open');
});

//Modo escuro

  const toggleBtn = document.getElementById ("toggle-mode");
const body = document.body

toggleBtn.addEventListener('click', function () {
   body.classList.toggle('dark-mode')
} )