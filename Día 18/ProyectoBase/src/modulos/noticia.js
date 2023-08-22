function getNoticia() {
    fetch('../ultima-noticia.json')
    .then(response => response.json())
    .then(data => cargarNoticia(data))
    .catch(error => console.error(error));
}

function cargarNoticia(nota) {
    const div = document.getElementById('bloqueNoticia');
    div.style.backgroundImage = `url("${nota.imagen}")`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";

    document.getElementById('noticiaTitulo').innerHTML = nota.titulo;    
    document.getElementById('noticiaContenido').innerHTML = nota.contenido;    
    document.getElementById('noticiaAutor').innerHTML = nota.autor;
}

export default getNoticia;