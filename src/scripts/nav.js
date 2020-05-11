let buttonOpenCatalog = document.querySelector('.catalog-nav__toggle');
let catalogNav = document.querySelector('.catalog-nav');

buttonOpenCatalog.addEventListener('click', function() {
  catalogNav.classList.toggle('catalog-nav--show');
});
