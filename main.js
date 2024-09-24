//-------------------------------------------------//
// --------------  lien actif ------------------- //
const links = document.querySelectorAll('li a');

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// --------------  calcul taille header ------------------- //
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const headerHeight = header.offsetHeight;

sections.forEach(section => {
    section.style.marginTop = headerHeight + 'px';
});
