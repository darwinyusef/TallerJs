function getHoras() {
    const now = new Date();
    const horas = [];
    
    // Ciudad de Nueva York, EE. UU.
    const newYorkTime = now.toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false });
    horas.push({ city: 'New York', hour: newYorkTime.split(',')[1]});
    
    // Ciudad de Londres, Reino Unido
    const londonTime = now.toLocaleString('en-GB', { timeZone: 'Europe/London', hour12: false });
    horas.push({ city: 'Londres', hour: londonTime.split(',')[1]});
    
    // Ciudad de Sydney, Australia
    const sydneyTime = now.toLocaleString('en-AU', { timeZone: 'Australia/Sydney', hour12: false });
    horas.push({ city: 'Sydney', hour: sydneyTime.split(',')[1]});
    
    // Ciudad de BsAs, Argentina
    const bsAsTime = now.toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hour12: false });
    horas.push({ city: 'Buenos Aires', hour: bsAsTime.split(',')[1]});

    cargarHoras(horas);
}

function cargarHoras(horas) {
    const divHoras = document.getElementById('divHoras');

    horas.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `${item.hour}<span>${item.city}</span>`
        
        divHoras.appendChild(div);
    });
}

export default getHoras;