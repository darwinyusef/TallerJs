function ofertas() {
    try {
        fetch('http://localhost:3000/ofertas', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(respuesa => respuesa.json())
        .then(data => cargarOfertas(data))
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

function cargarOfertas(data) {
    const contenedor = document.getElementById('div-ofertas');

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = "div-item";        
                
        const imagen = document.createElement('img');
        imagen.src = "../img/fly.png";
        imagen.alt = "Avion";
      
        const ruta = document.createElement('div');
        ruta.className = "item-ruta";        
        const origen = document.createElement('div');
        origen.textContent = item.origen;
        const destino = document.createElement('div');
        destino.textContent = item.destino;
        ruta.appendChild(origen);
        ruta.appendChild(destino);
      
        const info = document.createElement('div');
        info.className = "item-info";        
        const salida = document.createElement('div');
        salida.textContent = item.salida;  
        const cupos = document.createElement('div');
        cupos.textContent = 'Cupos: ' + item.cupos;           
        const llegada = document.createElement('div');
        llegada.textContent = item.llegada;
        info.appendChild(salida);
        info.appendChild(cupos);
        info.appendChild(llegada);
         
        const precio = document.createElement('div');
        precio.textContent = '$ ' + item.precio; 
        precio.className = "item-precio";       
      
        div.appendChild(imagen);
        div.appendChild(ruta);
        div.appendChild(info);
        div.appendChild(precio);

        contenedor.appendChild(div);
      });
}

function redirigir() {    
    window.location.href = 'administracion.html';
}