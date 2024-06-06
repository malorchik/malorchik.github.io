
const navSbisButton1 = document.querySelector('.navigation-sbis-button-1');
const navSbisButton2 = document.querySelector('.navigation-sbis-button-2');
const navSbisButton3 = document.querySelector('.navigation-sbis-button-3');
const navSbisButton4 = document.querySelector('.navigation-sbis-button-4');


const sbisButton = document.querySelector('.sbis-button');
const sbisBlock  = document.querySelector('.sbis-programs-full');

const sbis1Slider = document.querySelector('.sbis-programs-1');
const sbis2Slider = document.querySelector('.sbis-programs-2');
const sbis3Slider = document.querySelector('.sbis-programs-3');
const sbis4Slider = document.querySelector('.sbis-programs-4');

const hideElement = (element) => {
  element.classList.add('d-none');
};

const showElement = (element) => {
  element.classList.remove('d-none');
};

const toggleElementDisable = (element, disable) => {
  disable ? element.setAttribute('disabled', true) : element.removeAttribute('disabled');
};

// const handleButtonClick = (button, slider) => {
//   hideElement(sbis1Slider);
//   hideElement(sbis2Slider);
//   hideElement(sbis3Slider);
//   hideElement(sbis4Slider);
//   showElement(slider);
// };

navSbisButton1.addEventListener('click', () => handleButtonClick(navSbisButton1, sbis1Slider));
navSbisButton2.addEventListener('click', () => handleButtonClick(navSbisButton2, sbis2Slider));
navSbisButton3.addEventListener('click', () => handleButtonClick(navSbisButton3, sbis3Slider));
navSbisButton4.addEventListener('click', () => handleButtonClick(navSbisButton4, sbis4Slider));


showElement(sbis1Slider);
hideElement(sbis2Slider);
hideElement(sbis3Slider);
hideElement(sbis4Slider);

const btn = document.querySelector('.navigation-sbis-block button');
btn.style.backgroundColor = '#C9D1F8';
btn.style.color = '#000000';
navSbisButton1.style.fontWeight = '500';

navSbisButton1.addEventListener('click', (event) => {

  showElement(sbis1Slider);
  hideElement(sbis2Slider);
  hideElement(sbis3Slider);
  hideElement(sbis4Slider);

  // Изменение стилей кнопок
  document.querySelectorAll('.navigation-sbis-block button').forEach(btn => {
    btn.style.backgroundColor = '';
    btn.style.color = '';
    btn.style.fontWeight = 'normal';
  });
  navSbisButton1.style.backgroundColor = '#C9D1F8';
  navSbisButton1.style.color = '#000000';
  navSbisButton1.style.fontWeight = '500';
});

navSbisButton2.addEventListener('click', (event) => {

  hideElement(sbis1Slider);
  showElement(sbis2Slider);
  hideElement(sbis3Slider);
  hideElement(sbis4Slider);

  // Изменение стилей кнопок
  document.querySelectorAll('.navigation-sbis-block button').forEach(btn => {
    btn.style.backgroundColor = '';
    btn.style.color = '';
    btn.style.fontWeight = 'normal';
  });
  navSbisButton2.style.backgroundColor = '#C9D1F8';
  navSbisButton2.style.color = '#000000';
  navSbisButton2.style.fontWeight = '500';
});


navSbisButton3.addEventListener('click', (event) => {

  hideElement(sbis1Slider);
  hideElement(sbis2Slider);
  showElement(sbis3Slider);
  hideElement(sbis4Slider);

  // Изменение стилей кнопок
  document.querySelectorAll('.navigation-sbis-block button').forEach(btn => {
    btn.style.backgroundColor = '';
    btn.style.color = '';
    btn.style.fontWeight = 'normal';
  });
  navSbisButton3.style.backgroundColor = '#C9D1F8';
  navSbisButton3.style.color = '#000000';
  navSbisButton3.style.fontWeight = '500';
});

navSbisButton4.addEventListener('click', (event) => {

  hideElement(sbis1Slider);
  hideElement(sbis2Slider);
  hideElement(sbis3Slider);
  showElement(sbis4Slider);

  // Изменение стилей кнопок
  document.querySelectorAll('.navigation-sbis-block button').forEach(btn => {
    btn.style.backgroundColor = '';
    btn.style.color = '';
    btn.style.fontWeight = 'normal';
  });
  navSbisButton4.style.backgroundColor = '#C9D1F8';
  navSbisButton4.style.color = '#000000';
  navSbisButton4.style.fontWeight = '500';
});



// информационная безопасность
const navSecurityButton1 = document.querySelector('.navigation-security-button-1');
const navSecurityButton2 = document.querySelector('.navigation-security-button-2');
const navSecurityButton3 = document.querySelector('.navigation-security-button-3');
const navSecurityButton4 = document.querySelector('.navigation-security-button-4');

const informationButton = document.querySelector('.information-security-button');
const securityBlock  = document.querySelector('.information-security-full');



const security1Slider = document.querySelector('.sbis-security-1');
const security2Slider = document.querySelector('.sbis-security-2');
const security3Slider = document.querySelector('.sbis-security-3');
const security4Slider = document.querySelector('.sbis-security-4');
const hideElement2 = (element) => {
  element.classList.add('d-none');
};

const showElement2 = (element) => {
  element.classList.remove('d-none');
};

const toggleElementDisable2 = (element, disable) => {
  disable ? element.setAttribute('disabled', true) : element.removeAttribute('disabled');
};
// const handleButtonClick2 = (button, slider2) => {
//   hideElement2(security1Slider);
//   hideElement2(security2Slider);
//   hideElement2(security3Slider);
//   hideElement2(security4Slider);
//   showElement2(slider2);
// };

navSecurityButton1.addEventListener('click', () => handleButtonClick2(navSecurityButton1, security1Slider));
navSecurityButton2.addEventListener('click', () => handleButtonClick2(navSecurityButton2, security2Slider));
navSecurityButton3.addEventListener('click', () => handleButtonClick2(navSecurityButton3, security3Slider));
navSecurityButton4.addEventListener('click', () => handleButtonClick2(navSecurityButton4, security4Slider));


showElement2(security1Slider);
hideElement2(security2Slider);
hideElement2(security3Slider);
hideElement2(security4Slider);

const btn2 = document.querySelector('.navigation-security-block button');
btn2.style.backgroundColor = '#FFD2BF';
btn2.style.color = '#000000';
navSecurityButton1.style.fontWeight = '500';

navSecurityButton1.addEventListener('click', (event) => {

  showElement2(security1Slider);
  hideElement2(security2Slider);
  hideElement2(security3Slider);
  hideElement2(security4Slider);

  // Изменение стилей кнопок
  document.querySelectorAll('.navigation-security-block button').forEach(btn2 => {
    btn2.style.backgroundColor = '';
    btn2.style.color = '';
    btn2.style.fontWeight = 'normal';
  });
  navSecurityButton1.style.backgroundColor = '#FFD2BF';
  navSecurityButton1.style.color = '#000000';
  navSecurityButton1.style.fontWeight = '500';
});

navSecurityButton2.addEventListener('click', (event) => {

  hideElement2(security1Slider);
  showElement2(security2Slider);
  hideElement2(security3Slider);
  hideElement2(security4Slider);

  // Изменение стилей кнопок
  document.querySelectorAll('.navigation-security-block button').forEach(btn2 => {
    btn2.style.backgroundColor = '';
    btn2.style.color = '';
    btn2.style.fontWeight = 'normal';
  });
  navSecurityButton2.style.backgroundColor = '#FFD2BF';
  navSecurityButton2.style.color = '#000000';
  navSecurityButton2.style.fontWeight = '500';
});


navSecurityButton3.addEventListener('click', (event) => {

  hideElement2(security1Slider);
  hideElement2(security2Slider);
  showElement2(security3Slider);
  hideElement2(security4Slider);

  // Изменение стилей кнопок
  document.querySelectorAll('.navigation-security-block button').forEach(btn2 => {
    btn2.style.backgroundColor = '';
    btn2.style.color = '';
    btn2.style.fontWeight = 'normal';
  });
  navSecurityButton3.style.backgroundColor = '#FFD2BF';
  navSecurityButton3.style.color = '#000000';
  navSecurityButton3.style.fontWeight = '500';
});

navSecurityButton4.addEventListener('click', (event) => {

  hideElement2(security1Slider);
  hideElement2(security2Slider);
  hideElement2(security3Slider);
  showElement2(security4Slider);

  // Изменение стилей кнопок
  document.querySelectorAll('.navigation-security-block button').forEach(btn2 => {
    btn2.style.backgroundColor = '';
    btn2.style.color = '';
    btn2.style.fontWeight = 'normal';
  })
  navSecurityButton4.style.backgroundColor = '#FFD2BF';
  navSecurityButton4.style.color = '#000000';
  navSecurityButton4.style.fontWeight = '500';
});



// навигация сбис/информационная безопасность
// showElement2(sbisBlock);
// hideElement2(securityBlock);

// sbisButton.addEventListener('click', (event) => {

// showElement2(sbisBlock);
// hideElement2(securityBlock);

// });
// informationButton.addEventListener('click', (event) => {

//   hideElement2(sbisBlock);
//   showElement2(securityBlock);
  
//   });