//-------------------------------------------------//
// --------------  lien actif ------------------- //
const links = document.querySelectorAll('li a');

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});
