const div = document.getElementById("contenedorParticulas")
/*puedes optimizar el codigo haciendo un ciclo for para que se imprima unas 40-90 veces el mismo div,
  he intentado hacerlo pero no me tomé el tiempo necesario para codificarlo, esta tarea se la dejo a
  Saul Donas
*/
const element = `<div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <br>
                <br>
                <br>
                <div class="particula"></div>    
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <br>
                <br>
                <br>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <br>
                <br>
                <br>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>

                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <br>
                <br>
                <br>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>
                <div class="particula"></div>

                `
div.innerHTML = element           

