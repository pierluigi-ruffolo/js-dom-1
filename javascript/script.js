/* Inseriamo in pagina l’immagine della lampadina spenta che 
trovate in allegato e accanto un bottone con la scritta “Accendi”. */

/* Al click del bottone, la lampadina dovrà accendersi 
(dovremo quindi utilizzare l’immagine della lampadina accesa, 
 sempre in allegato) */

/* BONUS
Facciamo accendi e spegni: */
/* Al primo click la lampadina si accende e nel bottone 
compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone
 compare la scritta "Accendi"
E così via...
Rendete il tutto un po più bello e creativo  */

/* raccolgo elementi necessari */
const imgElem = document.querySelector(".img");

const btnElem = document.querySelector(".btn");

/* uso arrow function */

/* btnElem.addEventListener("click", () => {
  if (btnElem.innerHTML === "Spegni") {
    imgElem.src = "./img/white_lamp.png";
    btnElem.innerHTML = "Accendi";
    btnElem.classList.remove("btn-danger");
  } else {
    imgElem.src = "./img/yellow_lamp.png";
    btnElem.innerHTML = "Spegni";
    btnElem.classList.add("btn-danger");
  }
}); */

/* ALTRA VERSIONE */
let valore = true;

btnElem.addEventListener("click", () => {
  if (valore) {
    imgElem.src = "./img/yellow_lamp.png";
    btnElem.innerHTML = "Spegni";
  } else {
    imgElem.src = "./img/white_lamp.png";
    btnElem.innerHTML = "Accendi";
  }
  btnElem.classList.toggle("btn-danger");
  valore = !valore;
});
