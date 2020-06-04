/** JavaScript - Calculadora Gasolina vs Etanol
 * Francisco Nicomedes Batista
*/

var Etanol,gasolina;
/** Variaveis Globais - declaradas foras da function */

function calcular() {
    etanol = parseFloat (calcForm.txtEtanol.value.replace(",","."));
    gasolina = parseFloat (calcForm.txtGas.value.replace(",","."));
/**Convertendo variaveis para o tipo numérico */
    if (etanol < 0.7 * gasolina){
        /*verdadeiro*/
        document.getElementById("status").src="./img/etanol.PNG";
    }else{
        /*falso*/
        document.getElementById("status").src="./img/gasolina.PNG";
    }

        
    }
    function resetar(){
        document.getElementById("status").src="./img/neutro.PNG";
    }