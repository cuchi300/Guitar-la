document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
})

function iniciarApp() {
    scrollCursos();
}

function scrollCursos() {
    window.addEventListener('scroll', () => {
        const cursos = document.querySelector('.cursos');

        const cursosTexto = document.querySelector('.cursos__texto');
        const cursosEnlace = document.querySelector('.cursos__enlace');

        if(cursos.getBoundingClientRect().top < 200){
            cursosTexto.classList.add('cursos__texto-mostrar');
            cursosEnlace.classList.add('cursos__enlace-mostrar');
        } 
    })
}