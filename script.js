// Seleciona os elementos
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('nav.menu ul li a'); // Seleciona todos os links no menu

// Abre o menu ao clicar no botão hamburger
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fecha o menu ao clicar no botão de fechar
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Fecha o menu ao clicar em um link de navegação (quando em telas pequenas)
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});







// Selecione todos os links de ancoragem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Realize a rolagem suave até a seção, com um ajuste de deslocamento
    const targetId = this.getAttribute('href').substring(1); // Remove o '#' do link
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 100, // Ajuste a posição do "respiro"
      behavior: 'smooth'
    });
  });
});





  //ativação de animações
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com as classes de animação
    const elements = document.querySelectorAll('.surge-bottom, .surge-right, .surge-left');
  
    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' quando o elemento entra na visualização
          entry.target.classList.add('visible');
          // Para observar uma vez e parar, economizando recursos
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Ajusta para que o elemento seja considerado visível quando 10% dele estiver na viewport
    });
  
    // Observa todos os elementos
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  



  (function () {
    const advImagesContainer = document.getElementById('advSliderImages');
    const advDotsContainer = document.getElementById('advSliderDots');
    const advImages = advImagesContainer.querySelectorAll('img');
    const advTotalImages = advImages.length;

    let advCurrentIndex = 0;

    // Criação dos dots
    advImages.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.addEventListener('click', () => moveToSlide(index));
        advDotsContainer.appendChild(dot);
    });

    const advDots = advDotsContainer.querySelectorAll('button');
    advDots[advCurrentIndex].classList.add('active');

    // Função para mover o slide
    function moveToSlide(index) {
        advCurrentIndex = index;
        const offset = -advCurrentIndex * 100;
        advImagesContainer.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    // Atualizar a classe active nos dots
    function updateDots() {
        advDots.forEach(dot => dot.classList.remove('active'));
        advDots[advCurrentIndex].classList.add('active');
    }

    // Slider automático
    setInterval(() => {
        advCurrentIndex = (advCurrentIndex + 1) % advTotalImages;
        moveToSlide(advCurrentIndex);
    }, 3000);
})();