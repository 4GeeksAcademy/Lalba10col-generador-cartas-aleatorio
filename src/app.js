import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  function generarcartaaleatoria() {
    let numeros = [2,3,4,5,6,7,8,9,10,"A", "J", "Q", "K"];
    let figuras = ["♠","♥", "♦","♣"];
    let rand1 = Math.floor(Math.random() * numeros.length);
    let rand2 = Math.floor(Math.random() * figuras.length);
    
    let Aleatorio1 = `${figuras[rand2]}`;
    let figuraSuperiorElement = document.getElementById("figuraSuperior");
    let figuraInferiorElement = document.getElementById("figuraInferior");

    //Esta parte del código ejecuta un condicional para cambiar el color de las figuras por rojo si son ♥ ó ♦
    if (Aleatorio1 === "♥" || Aleatorio1 === "♦") {
      figuraSuperiorElement.style.color = "red";
      figuraInferiorElement.style.color = "red";
    } else {
      figuraSuperiorElement.style.color = "black";
      figuraInferiorElement.style.color = "black";
    }
    figuraSuperiorElement.innerHTML = Aleatorio1; // Actualiza figura en la parte superior izquierda
    figuraInferiorElement.innerHTML = Aleatorio1; // Actualiza figura en la parte inferior derecha
  
    let Aleatorio2 = `${numeros[rand1]}`;
    let numeroCentralelement = document.getElementById("numeroCentral");
    numeroCentralelement.innerHTML = Aleatorio2; // Actualiza el número en la parte central

    document.getElementById("btnActualizar").addEventListener("click", generarcartaaleatoria);
    }
  generarcartaaleatoria();
}