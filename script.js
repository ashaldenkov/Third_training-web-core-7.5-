
  $(window).on('load resize', function() {
    if ($(window).width() < 480) {
      $('.services__slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        variableWidth:true,
        })
      } 
  });

  let items;
  let itemsCounter;
  const showAll = document.querySelector('.services__btn-show-all');
  const allItems = document.querySelectorAll('.services__item').length;
  let normalHeight = document.querySelector(".services__slider").offsetHeight;
  let height;

  
  $(window).on('load resize', function() {
    if ($(window).width() < 1120) {
        items = 6;
        itemsCounter = 6;
        height = 172;
      } 
      else {
        items = 8;
        itemsCounter = 8;
        height = 110;
      }
  });



  showAll.addEventListener('click', () => {

    const array = Array.from(document.querySelector('.services__slider').children);
    let visibleItems = array.slice(0, items);

    //Проверка нужно ли показать или скрыть ячейки

    if (visibleItems.length < allItems) {
      items = allItems;
      visibleItems = array.slice(0, items);
      visibleItems.forEach(el => el.classList.add('is-visible'));
      showAll.textContent = 'Скрыть';
        //отображение товаров и иземенение текста

      document.querySelector(".services__slider").style.height = normalHeight + height + "px";
      document.querySelector(".show-logo").style.transform = "rotate(180deg)";
        //изменение высоты блока
    } else {
      items = itemsCounter;
      visibleItems = array.slice(items, allItems);
      visibleItems.forEach(el => el.classList.remove('is-visible'));
      showAll.textContent = 'Показать все';
              //скрытие товаров и иземенение текста обратно

      document.querySelector(".services__slider").style.height = normalHeight + "px";
      document.querySelector(".show-logo").style.transform = "rotate(0deg)";
              //возвращение высоты блока
    }


  })
