window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) { 
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; 
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    var langLinks = document.querySelectorAll('.header_ru, .header_en');
  
    langLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        langLinks.forEach(function(link) {
          link.classList.add('active-lang');
        });
        var otherLink = (this.classList.contains('header_ru')) ? document.querySelector('.header_en') : document.querySelector('.header_ru');
        otherLink.classList.remove('active-lang');
      });
    });
  });


  document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('questions_button')) {
      if (e.target.innerHTML == '+') {
        e.target.innerHTML = '-';
      } else {
        e.target.innerHTML = '+';
      }
    }
  });

  var isClicked = false;

  document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('questions_button')) {
      var questionBlock = e.target.closest('.question_block');
      
      // Переключаем класс 'expanded'
      questionBlock.classList.toggle('expanded');
  
      if (questionBlock.classList.contains('expanded')) {
        // Если блок расширен, добавляем новый элемент p
        var newP = document.createElement('p');
        newP.textContent = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.';
        newP.classList.add('newP'); // Добавляем уникальный класс
        questionBlock.appendChild(newP);
      } else {
        // Если блок свернут, удаляем последний элемент p
        var lastP = questionBlock.querySelector('.newP:last-child');
        if (lastP) questionBlock.removeChild(lastP);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    var langLinks = document.querySelectorAll('.footer__right-language-link, .footer__right-language-link_two');
  
    langLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        langLinks.forEach(function(link) {
          link.classList.add('active-lang-footer');
        });
        var otherLink = (this.classList.contains('footer__right-language-link')) ? document.querySelector('.footer__right-language-link_two') : document.querySelector('.footer__right-language-link');
        otherLink.classList.remove('active-lang-footer');
      });
    });
  });


  document.querySelector('.header_logo-link').addEventListener('click', function(e) {
    e.preventDefault();
    var scrollDuration = 1000;
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
});