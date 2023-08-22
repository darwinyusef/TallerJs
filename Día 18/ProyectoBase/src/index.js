import { cargarCancion } from "./modulos/cancion.js";
import getHoras from "./modulos/hora.js";
import getNoticia from "./modulos/noticia.js";
import getTiempo from "./modulos/tiempo.js";

getTiempo();
getHoras();
getNoticia();
cargarCancion("../assets/Moby - We Are All Made Of Stars.mp3");