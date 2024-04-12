document.addEventListener('DOMContentLoaded', function () {
 const screenWidth = window.screen.width;
 const body = document.body;

 // header drop-down
 if (document.querySelectorAll('.header__drop-down').length) {
  const dropDown = document.querySelectorAll('.header__drop-down');

  dropDown.forEach(e => {
   const menu = e.querySelector('.header__drop-down_list');
   e.addEventListener('mouseover', evt => {
    e.classList.add('active');
    menu.classList.add('active');
    menu.style.maxHeight = menu.scrollHeight + 'px';
   })
   e.addEventListener('mouseout', evt => {
    e.classList.remove('active')
    menu.classList.remove('active')
    menu.style.maxHeight = null;
   })
  });
 }

 // burger menu
 if (document.querySelectorAll('.header-mobile__wrapper').length) {
  const button = document.querySelector('.header__burger');
  const menu = document.querySelector('.header-mobile__wrapper');
  const close = document.querySelector('.header-mobile__close');

  button.addEventListener('click', e => {
   menu.classList.add('menu-open');
   body.classList.add('menu-open');
  })
  close.addEventListener('click', e => {
   menu.classList.remove('menu-open');
   body.classList.remove('menu-open');
  })
 }

 // mobile drop-down
 if (document.querySelectorAll('.header-mobile__drop-down_list').length) {
  const dropDown = document.querySelectorAll('.header-mobile__drop-down');

  dropDown.forEach(item => {
   const button = item.querySelector('.header-mobile__menu_link.with-arrow');
   const list = item.querySelector('.header-mobile__drop-down_list')
   item.addEventListener('click', evt => {
    if (evt.target == button) {
     item.classList.toggle('active');
     item.classList.contains('active') ? list.style.maxHeight = list.scrollHeight + 'px' : list.style.maxHeight = null;
    }
   })
  });
 }

 // header localization
 if (document.querySelectorAll('.header__localization').length) {
  const buttons = document.querySelectorAll('.header__localization_button');
  buttons.forEach(button => {
   button.addEventListener('click', e => {
    if (!button.classList.contains('active')) {
     buttons.forEach(item => {
      item.classList.remove('active')
     });
     button.classList.add('active');
    }
   })
  })
 }

 //  search modal
 if (document.querySelectorAll('.header__search').length && document.querySelectorAll('.search-modal__wrapper').length) {
  const buttons = document.querySelectorAll('.header__search');
  const modal = document.querySelector('.search-modal__wrapper');
  const buttonClose = document.querySelector('.search-modal__button_close');

  buttons.forEach(button => {
   button.addEventListener('click', function () {
    modal.classList.add('open');
    body.classList.add('menu-open');
   })
  })
  buttonClose.addEventListener('click', function () {
   modal.classList.remove('open');
   body.classList.remove('menu-open');
  })
 }

 // banner swiper
 if (document.querySelectorAll('.banner__swiper').length) {
  const swiper = new Swiper('.banner__swiper', {
   speed: 1000,
   pagination: {
    el: '.banner__swiper-pagination',
   },
  });
 }

 // new-collection swiper
 if (document.querySelectorAll('.new-collection__swiper').length) {
  const swiper = new Swiper('.new-collection__swiper', {
   speed: 1000,
   spaceBetween: 32,
   slidesPerView: 1,
   breakpoints: {
    576: {
     slidesPerView: 2,
    },
    992: {
     slidesPerView: 3,
    }
   },
   navigation: {
    nextEl: '.new-collection__swiper-button-next',
    prevEl: '.new-collection__swiper-button-prev',
   },
   pagination: {
    el: '.new-collection__swiper-pagination',
   },
  });
 }

 // achievements numbers counts
 if (document.querySelectorAll('.achievements__list').length) {
  const wrapper = document.querySelector('.achievements');
  const items = document.querySelectorAll('.achievements__item_title span');

  // function counts
  function countItems() {
   items.forEach(item => {
    const number = item.textContent;
    let i = 0;
    if (number <= 100) {
     let counts = setInterval(function () {
      i++;
      i > number ? clearInterval(counts) : item.innerText = i;
     }, 50);
    } else if (number <= 1000) {
     let counts = setInterval(function () {
      i++;
      i > number ? clearInterval(counts) : item.innerText = i;
     }, 1);
    } else {
     let counts = setInterval(function () {
      i += 4;
      i > number ? clearInterval(counts) : item.innerText = i;
     }, 1);
    }
   })
  }

  // start function on scroll
  let scrollPage = setInterval(function () {
   const offset = wrapper.offsetTop;
   let scrollDistance = window.scrollY;
   let topDistance, bottomDistance;
   if (screenWidth >= 768) {
    topDistance = 350;
    bottomDistance = -650;
   } else {
    topDistance = 600;
    bottomDistance = -500;
   }
   if (offset - scrollDistance <= topDistance && offset - scrollDistance > 0) {
    countItems();
    clearInterval(scrollPage);
   } else if ((offset - scrollDistance >= bottomDistance && offset - scrollDistance < 0)) {
    countItems();
    clearInterval(scrollPage);
   }
  }, 10);
 }

 // goal swiper
 if (document.querySelectorAll('.goal__swiper').length) {
  const swiper = new Swiper('.goal__swiper', {
   speed: 1000,
   navigation: {
    nextEl: '.goal__swiper-button-next',
    prevEl: '.goal__swiper-button-prev',
   },
   pagination: {
    el: '.goal__swiper-pagination',
    clickable: true,
   },
  });
 }

 // clients swiper
 if (document.querySelectorAll('.clients__swiper').length) {
  const swiper = new Swiper('.clients__swiper', {
   speed: 1000,
   loop: true,
   spaceBetween: 48,
   slidesPerView: 2.6,
   speed: 3000,
   autoplay: {
    delay: 0,
   },
   breakpoints: {
    575: {
     slidesPerView: 4,
    },
    768: {
     slidesPerView: 5,
     spaceBetween: 30,
    },
    992: {
     slidesPerView: 6,
     spaceBetween: 60,
    },
    1200: {
     slidesPerView: 6.8,
    }
   }
  });
 }

 // map pins
 if (document.querySelectorAll('.map__dots').length) {
  const wrapper = document.querySelector('.map__dots');
  const items = wrapper.querySelectorAll('.map__dot');
  let m = 0;
  for (let i = 0; i < items.length; i++) {
   m = (i + 1) * 500;
   function addClass() {
    items[i].classList.add('active')
   }
   setInterval(addClass, m);
  }
 }

 // description accordion
 if (document.querySelectorAll('.description').length) {
  const wrapper = document.querySelector('.description__wrapper');
  const button = wrapper.querySelector('.description__button');

  button.addEventListener('click', e => {
   button.classList.toggle('active');
   wrapper.classList.toggle('active');
   if (wrapper.classList.contains('active')) wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
   else if (screenWidth >= 768) wrapper.style.maxHeight = '360px';
   else wrapper.style.maxHeight = '388px'
  });
 }

 // filters desktop
 if (document.querySelectorAll('.filters-desktop').length) {
  const filtersItems = document.querySelectorAll('.filters__item');
  const choosedBlock = document.querySelector('.filters__choosed');
  const choosedList = document.querySelector('.filters__choosed_list');
  const clearButton = document.querySelector('.filters__choosed_clear');
  let arr = [];

  filtersItems.forEach(item => {
   const menu = item.querySelector('.filters__item_list');
   if (menu != null && menu != undefined) {
    // filters drop-down
    item.addEventListener('mouseover', evt => {
     item.classList.add('active');
     menu.classList.add('active');
     menu.style.maxHeight = menu.scrollHeight + 'px';
    })
    item.addEventListener('mouseout', evt => {
     item.classList.remove('active')
     menu.classList.remove('active')
     menu.style.maxHeight = null;
    })
    // filters choose
    if (menu.querySelectorAll('.filters__item_option').length) {
     const options = menu.querySelectorAll('.filters__item_option');

     options.forEach(option => {
      // add choosed item
      option.addEventListener('click', function () {
       if (!arr.includes(option.textContent)) {
        arr.push(option.textContent);
        if (choosedBlock.classList.contains('empty')) choosedBlock.classList.remove('empty');
        let li = document.createElement('li');
        li.classList.add('filters__choosed_item');
        li.innerHTML = `
        <span>${option.textContent}</span>
        <button></button>
        `
        choosedList.appendChild(li);
        // remove item
        const closeButton = li.querySelector('button');
        closeButton.addEventListener('click', function () {
         li.remove();
         if (!choosedList.querySelectorAll('li').length) choosedBlock.classList.add('empty');
         arr = arr.filter(function (m) {
          return m != li.querySelector('span').textContent;
         })
        })
       }
      })
     })
    }
    // clear all choosed filters
    clearButton.addEventListener('click', function () {
     arr = [];
     choosedBlock.classList.add('empty');
     const choosedItem = choosedList.querySelectorAll('li');
     choosedItem.forEach(element => {
      element.remove();
     })
    })
   }
  })
  // filter price range
  if (document.querySelectorAll('.filters__item_list--range').length) {
   const rangeWrapper = document.querySelector('.filters__item_list--range');
   const fromSlider = rangeWrapper.querySelector('#fromSlider');
   const toSlider = rangeWrapper.querySelector('#toSlider');
   const fieldMin = rangeWrapper.querySelector('.filters__item_min');
   const fieldMax = rangeWrapper.querySelector('.filters__item_max');
   const submitButton = rangeWrapper.querySelector('.filters__item_case > button');
   let priceValue, lastPrice;

   // update page
   fieldMin.textContent = fromSlider.value;
   fieldMax.textContent = toSlider.value;

   // change value
   function controlFromSlider(fromSlider, toSlider) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#ffffff', '#000000', toSlider);
    if (from > to) {
     fromSlider.value = to;
     fieldMax.textContent = to;
    } else {
     fromSlider.value = from;
     fieldMin.textContent = from;
    }
   }

   function controlToSlider(fromSlider, toSlider) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#ffffff', '#000000', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
     toSlider.value = to;
     fieldMax.textContent = to;
    } else {
     toSlider.value = from;
     fieldMin.textContent = from;
    }
   }

   function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
   }

   function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
    ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
    ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
    ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
    ${sliderColor} 100%)`;
   }

   function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
     toSlider.style.zIndex = 2;
    } else {
     toSlider.style.zIndex = 0;
    }
   }

   fillSlider(fromSlider, toSlider, '#ffffff', '#000000', toSlider);
   setToggleAccessible(toSlider);
   fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider);
   toSlider.oninput = () => controlToSlider(fromSlider, toSlider);

   // submit button
   submitButton.addEventListener('click', function () {
    // update price
    priceValue = `$${fromSlider.value} - $${toSlider.value}`;
    // not price in array
    if (!arr.includes('thereIsPrice')) {
     arr.push('thereIsPrice');
     arr.push(priceValue);
     lastPrice = priceValue;
     if (choosedBlock.classList.contains('empty')) choosedBlock.classList.remove('empty');
     let li = document.createElement('li');
     li.classList.add('filters__choosed_item', 'filters__choosed_item--price');
     li.innerHTML =
      `<span>${priceValue}</span>
      <button></button>`
     choosedList.appendChild(li);

     // remove item
     const closeButton = li.querySelector('button');
     closeButton.addEventListener('click', function () {
      li.remove();
      arr = arr.filter(function (c) {
       return c != 'thereIsPrice';
      });
      arr = arr.filter(function (m) {
       return m != lastPrice;
      });
      if (!choosedList.querySelectorAll('li').length) choosedBlock.classList.add('empty');
     })
     // there is price but different
    } else if (priceValue != lastPrice) {
     let price = document.querySelector('.filters__choosed_item--price > span');
     price.textContent = priceValue;
     arr.push(priceValue);
     arr = arr.filter(function (m) {
      return m != lastPrice;
     });
     lastPrice = priceValue;
    }
   })
  }
 }

 // filters mobile
 if (document.querySelectorAll('.filters-mobile').length) {
  const filter = document.querySelector('.filters-mobile__wrapper');
  const list = document.querySelectorAll('.filters-mobile__sublist_item');
  const openButton = document.querySelector('.filters__item_trigger');
  const closeButton = document.querySelector('.filters-mobile__close');
  const submitButton = document.querySelector('.filters-mobile__buttons_submit');
  const removeButton = document.querySelector('.filters-mobile__buttons_remove');
  const choosedBlock = document.querySelector('.filters__choosed');
  const choosedList = document.querySelector('.filters__choosed_list');
  const clearButton = document.querySelector('.filters__choosed_clear');
  let arr = [];

  // open & close filter menu
  openButton.addEventListener('click', function () {
   filter.classList.add('open');
   body.classList.add('menu-open');
  })
  closeButton.addEventListener('click', function () {
   filter.classList.remove('open');
   body.classList.remove('menu-open');
  })

  // choose item
  list.forEach(item => {
   item.addEventListener('click', function () {
    if (!item.classList.contains('choosed')) {
     item.classList.add('choosed');
     arr.push(item.textContent);
    } else {
     item.classList.remove('choosed');
     arr = arr.filter(function (m) {
      return m != item.textContent;
     });
    }
   })
  })

  // remove choose items
  removeButton.addEventListener('click', function () {
   arr = [];
   choosedBlock.classList.add('empty');
   const choosedItem = choosedList.querySelectorAll('li');
   choosedItem.forEach(element => {
    element.remove();
   })
   list.forEach(item => {
    if (item.classList.contains('choosed')) item.classList.remove('choosed');
   })
  })

  // submit filters
  submitButton.addEventListener('click', function () {
   if (arr.length > 0) {
    if (choosedBlock.classList.contains('empty')) choosedBlock.classList.remove('empty');
    filter.classList.remove('open');
    body.classList.remove('menu-open');
    const choosedItem = choosedList.querySelectorAll('li');
    choosedItem.forEach(element => {
     element.remove();
    })
    for (let i = 0; i < arr.length; i++) {
     let li = document.createElement('li');
     li.classList.add('filters__choosed_item');
     li.innerHTML =
      `<span>${arr[i]}</span>
     <button></button>`
     choosedList.appendChild(li);
    }
    // remove item
    const choosedItems = document.querySelectorAll('.filters__choosed_item');
    choosedItems.forEach(choosedItem => {
     if (choosedItem.querySelector('span').textContent == 'thereIsPrice') choosedItem.remove();
     const removeItemButton = choosedItem.querySelector('button');
     removeItemButton.addEventListener('click', function () {
      choosedItem.remove();
      if (!choosedList.querySelectorAll('li').length) choosedBlock.classList.add('empty');
      arr = arr.filter(function (m) {
       return m != choosedItem.querySelector('span').textContent;
      });
     })
    })
   }
  })

  // clear all choosed filters
  clearButton.addEventListener('click', function () {
   arr = [];
   choosedBlock.classList.add('empty');
   const choosedItem = choosedList.querySelectorAll('li');
   choosedItem.forEach(element => {
    element.remove();
   })
   list.forEach(item => {
    if (item.classList.contains('choosed')) item.classList.remove('choosed');
   })
  })

   // filter price range
   if (document.querySelectorAll('.filters-mobile__item--range').length) {
    const rangeWrapper = document.querySelector('.filters-mobile__item--range');
    const fromSlider = rangeWrapper.querySelector('#fromMobileSlider');
    const toSlider = rangeWrapper.querySelector('#toMobileSlider');
    const fieldMin = rangeWrapper.querySelector('.filters-mobile__item_min');
    const fieldMax = rangeWrapper.querySelector('.filters-mobile__item_max');
    let priceValue, lastPrice;
 
    // update page
    fieldMin.textContent = fromSlider.value;
    fieldMax.textContent = toSlider.value;
 
    // change value
    function controlFromSlider(fromSlider, toSlider) {
     const [from, to] = getParsed(fromSlider, toSlider);
     fillSlider(fromSlider, toSlider, '#ffffff', '#000000', toSlider);
     if (from > to) {
      fromSlider.value = to;
      fieldMax.textContent = to;
     } else {
      fromSlider.value = from;
      fieldMin.textContent = from;
     }
    }
 
    function controlToSlider(fromSlider, toSlider) {
     const [from, to] = getParsed(fromSlider, toSlider);
     fillSlider(fromSlider, toSlider, '#ffffff', '#000000', toSlider);
     setToggleAccessible(toSlider);
     if (from <= to) {
      toSlider.value = to;
      fieldMax.textContent = to;
     } else {
      toSlider.value = from;
      fieldMin.textContent = from;
     }
    }
 
    function getParsed(currentFrom, currentTo) {
     const from = parseInt(currentFrom.value, 10);
     const to = parseInt(currentTo.value, 10);
     return [from, to];
    }
 
    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
     const rangeDistance = to.max - to.min;
     const fromPosition = from.value - to.min;
     const toPosition = to.value - to.min;
     controlSlider.style.background = `linear-gradient(
     to right,
     ${sliderColor} 0%,
     ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
     ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
     ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
     ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
     ${sliderColor} 100%)`;
    }
 
    function setToggleAccessible(currentTarget) {
     const toSlider = document.querySelector('#toSlider');
     if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
     } else {
      toSlider.style.zIndex = 0;
     }
    }
 
    fillSlider(fromSlider, toSlider, '#ffffff', '#000000', toSlider);
    setToggleAccessible(toSlider);
    fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider);
    toSlider.oninput = () => controlToSlider(fromSlider, toSlider);
 
    // submit button
    submitButton.addEventListener('click', function () {
     if (choosedBlock.classList.contains('empty')) choosedBlock.classList.remove('empty');
    filter.classList.remove('open');
    body.classList.remove('menu-open');
     // update price
     priceValue = `$${fromSlider.value} - $${toSlider.value}`;
     // not price in array
     if (!arr.includes('thereIsPrice')) {
      arr.push('thereIsPrice');
      arr.push(priceValue);
      lastPrice = priceValue;
      if (choosedBlock.classList.contains('empty')) choosedBlock.classList.remove('empty');
      let li = document.createElement('li');
      li.classList.add('filters__choosed_item', 'filters__choosed_item--price');
      li.innerHTML =
      `<span>${priceValue}</span>
      <button></button>`
      choosedList.appendChild(li);
      
      // remove item
      const closeButton = li.querySelector('button');
      closeButton.addEventListener('click', function () {
       li.remove();
       arr = arr.filter(function (c) {
        return c != 'thereIsPrice';
       });
       arr = arr.filter(function (m) {
        return m != lastPrice;
       });
       if (!choosedList.querySelectorAll('li').length) choosedBlock.classList.add('empty');
      })
      // there is price but different
     } else if (priceValue != lastPrice) {

      let price = document.querySelector('.filters__choosed_item--price > span');
      price.textContent = priceValue;
      arr.push(priceValue);
      arr = arr.filter(function (m) {
       return m != lastPrice;
      });
      lastPrice = priceValue;
     }
    })
   } 
 }

 // contact form error
 if (document.querySelectorAll('.contact-form').length) {
  const form = document.querySelector('.contact-form form');
  const requiredFields = form.querySelectorAll('.contact-form__field--required');

  form.addEventListener('submit', e => {
   requiredFields.forEach(field => {
    const input = field.querySelector('input');
    if (input.value == '') {
     field.classList.add('error');
     e.preventDefault();
    } else {
     field.classList.remove('error');
    }
   })
  })
 }

 // featured-product swiper
 if (document.querySelectorAll('.featured-product__swiper').length) {
  const swiper = new Swiper('.featured-product__swiper', {
   speed: 1000,
   spaceBetween: 32,
   slidesPerView: 1,
   breakpoints: {
    576: {
     slidesPerView: 2,
    },
    992: {
     slidesPerView: 3,
    }
   },
   navigation: {
    nextEl: '.featured-product__swiper-button-next',
    prevEl: '.featured-product__swiper-button-prev',
   },
   pagination: {
    el: '.featured-product__swiper-pagination',
   },
  });
 }

 // tabs
 if (document.querySelectorAll('.tabs').length) {
  const barItems = document.querySelectorAll('.tabs__bar_item');
  const contentItems = document.querySelectorAll('.tabs__content_item');

  // add active first elements
  const barItemFirst = document.querySelector('.tabs__bar_item');
  const contentItemFirst = document.querySelector('.tabs__content_item');
  barItemFirst.classList.add('active');
  contentItemFirst.classList.add('active');

  // add data atributes
  for (let i = 0; i < barItems.length; i++) {
   barItems[i].setAttribute('data-bar', i);
  }
  for (let i = 0; i < contentItems.length; i++) {
   contentItems[i].setAttribute('data-content', i);
  }

  // change active tab
  barItems.forEach(item => {
   item.addEventListener('click', function () {
    barItems.forEach(m => {
     m.classList.remove('active');
    })
    const itemAttr = item.getAttribute('data-bar');
    for (let i = 0; i < contentItems.length; i++) {
     const contentAttr = contentItems[i].getAttribute('data-content');
     if (itemAttr == contentAttr) {
      item.classList.add('active');
      contentItems[i].classList.add('active');
     }
     else {
      contentItems[i].classList.remove('active');
     }
    }
   })
  })
 }

 // product popup and swiper
 if (document.querySelectorAll('.product').length) {
  // popup
  Fancybox.bind('[data-fancybox]', {
   Toolbar: {
    display: {
     left: [],
     middle: [],
     right: ["close"],
    },
   },
  });

  // swiper
  const swiper = new Swiper('.product__swiper', {
   speed: 1000,
   spaceBetween: 10,
   pagination: {
    el: '.product__swiper-pagination',
   },
  });
 }

 // product select
 if (document.querySelectorAll('.product__select').length) {
  const selectItems = document.querySelectorAll('.product__select');
  const buttonAdd = document.querySelector('.add-to-cart');

  selectItems.forEach(select => {
   const panel = select.querySelector('.product__select_panel');
   let spanValue = panel.querySelector('span');
   const list = select.querySelector('.product__select_list');
   const items = select.querySelectorAll('.product__select_item');
   const multiLists = select.querySelectorAll('.product__select_multi');
   // open - close select
   panel.addEventListener('click', e => {
    if (!panel.classList.contains('active')) {
     panel.classList.add('active');
     list.classList.add('active');
     list.style.maxHeight = list.scrollHeight + 'px';
    } else {
     panel.classList.remove('active');
     list.classList.remove('active');
     list.style.maxHeight = null;
    }
   })
   // close select
   document.addEventListener('click', e => {
    if (!select.contains(e.target)) {
     panel.classList.remove('active');
     list.classList.remove('active');
     list.style.maxHeight = null;
    }
   })
   // change selects value
   items.forEach(item => {
    item.addEventListener('click', function () {
     panel.setAttribute('data-content', item.innerText);
     if (spanValue.classList.contains('--default')) spanValue.classList.remove('--default');
     spanValue.innerText = item.innerText;
     if (select.classList.contains('error')) select.classList.remove('error');
     if (buttonAdd.classList.contains('error')) buttonAdd.classList.remove('error');
     // check on multichoice for item
     if (item.classList.contains('multichoice')) {
      // check on double click for the active element
      if (!panel.classList.contains('multichoice')) {
       panel.classList.add('multichoice');
       panel.setAttribute('data-choised', null);
      }
     } else {
      panel.classList.remove('multichoice');
      panel.removeAttribute('data-choised');
      // clear class choised for item
      multiLists.forEach(multiList => {
       const multiItems = multiList.querySelectorAll('li');
       multiItems.forEach(multiItem => {
        if (multiItem.classList.contains('choised')) multiItem.classList.remove('choised');
       })
      })
     }
     // multichoice
     if (multiLists.length) {
      const itemAttr = item.getAttribute('data-type');
      multiLists.forEach(multiList => {
       const multiItems = multiList.querySelectorAll('li');
       // choise multi item
       multiList.addEventListener('click', e => {
        multiItems.forEach(multiItem => {
         if (e.target == multiItem) {
          multiItem.classList.add('choised');
          panel.setAttribute('data-choised', multiItem.innerText);
          if (select.classList.contains('error')) select.classList.remove('error');
          if (buttonAdd.classList.contains('error')) buttonAdd.classList.remove('error');
         } else {
          if (e.target != e.currentTarget) multiItem.classList.remove('choised');
         }
        })
       })
       // add class choised for multi list
       multiList.classList.remove('choised');
       const multiListAttr = multiList.getAttribute('data-type');
       if (multiListAttr != null && multiListAttr == itemAttr) {
        multiList.classList.add('choised');
       }
      });
     }
    })
   })
   // selection check
   const buttons = document.querySelectorAll('.product__button');
   buttons.forEach(button => {
    button.addEventListener('click', e => {
     // check on selected
     if (spanValue.classList.contains('--default')) {
      e.preventDefault();
      select.classList.add('error');
      buttonAdd.classList.add('error');
     }
     // check on selected multichoce
     if (panel.classList.contains('multichoice') && panel.getAttribute('data-choised') == 'null') {
      e.preventDefault();
      select.classList.add('error');
      buttonAdd.classList.add('error');
     }
    })
   })
  })
 }

 // short product title
 if (document.querySelectorAll('.product__title').length && screenWidth > 991) {
  const title = document.querySelector('.product__title');
  const text = title.textContent;
  const shortText = text.slice(0, 18);
  if (text.split('').length > 17) {
   title.innerText = shortText + '...'
   title.addEventListener('mouseover', function () {
    title.innerHTML = text;
   })
   title.addEventListener('mouseout', function () {
    title.innerText = shortText + '...'
   })
  }
 }

 // add to cart modal
 if (document.querySelectorAll('.add-to-cart').length && document.querySelectorAll('.modal-add-to-cart').length) {
  const button = document.querySelector('.add-to-cart');
  const modal = document.querySelector('.modal-add-to-cart');
  const buttonClose = document.querySelectorAll('.modal-add-to-cart__button_close');
  const cartIcon = document.querySelectorAll('.header__cart');
  // open modal
  button.addEventListener('click', e => {
   if (!button.classList.contains('error')) {
    modal.classList.add('open');
    body.classList.add('menu-open');
    cartIcon.forEach(icon => {
     icon.classList.add('not-empty');
    })
   }
  })
  // close modal
  buttonClose.forEach(button => {
   button.addEventListener('click', e => {
    modal.classList.remove('open');
    body.classList.remove('menu-open');
   })
  })
 }

});