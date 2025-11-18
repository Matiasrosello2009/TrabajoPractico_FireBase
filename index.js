let configFirebase = {
apiKey: "AIzaSyDmN4qBz3Aw5x7GO0Z-jB_viG6esOtbFVI",
authDomain: "huertili-datini.firebaseapp.com",
databaseURL: "https://huertili-datini-default-rtdb.firebaseio.com",
projectId: "huertili-datini",
storageBucket: "huertili-datini.firebasestorage.app",
messagingSenderId: "675544360936",
appId: "1:675544360936:web:e50313a4113bf99980265d"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

let app = initializeApp(configFirebase);
let base = getDatabase(app);
let referencia = ref(base, "datos");

onValue(referencia, function(datos) {
let info = datos.val();
let temperatura = info.temperatura;
let humedadSuelo = info.humedadSuelo;
let humedadAire = info.humedadAire;

let textoTemp = document.querySelector("#temperatura");
let textoHum = document.querySelector("#humedad");
let textoAir = document.querySelector("#aire");
let textoEstado = document.querySelector("#estado");

textoTemp.innerHTML = "Temperatura : " + temperatura + "°C";
textoHum.innerHTML = "Humedad del suelo: " + humedadSuelo + "%";
textoAir.innerHTML = "Humedad del aire: " + humedadAire + "%";

let estadoSuelo = "";

if (humedadSuelo < 40) {
estadoSuelo = "Regar ahora";
} else if (humedadSuelo >= 40 && humedadSuelo <= 70) {
estadoSuelo = "Estable";
} else {
estadoSuelo = "Exceso de agua";
}

textoEstado.innerHTML = estadoSuelo;
});