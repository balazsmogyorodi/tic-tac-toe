import Mezo from "./jatekMezo.js";
class JatekTer {
    //vezérli a játékot
    // elemeket példányosít
    //figyeli hol tart a játék
    #lepes
    #aktAllapotlista=[];
    constructor() {
        this.#lepes = 0;
        this.#aktAllapotlista=["","","","","","","","",""];
        const articleFeltolto = $("article");
        for (let index = 0; index < 9; index++) {
            const mezo = new Mezo(articleFeltolto, index);
        }
      
        $(window).on("elemKattintas", (event) => {
            console.log(event.detail);
            let aktElem = event.detail;
            if (this.#lepes % 2 == 0) {
                aktElem.setElem("X");
                this.#aktAllapotlista[event.detail.index] = "X";
            }
            else {
                aktElem.setElem("O");
                this.#aktAllapotlista[event.detail.index] = "O";
            }
            this.#lepes += 1;
            
            console.log(this.#aktAllapotlista);
        })
    }

    ellenorzes(){

        return false;
    }

}

export default JatekTer;