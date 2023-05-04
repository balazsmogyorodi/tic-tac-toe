class Mezo {
    constructor(szuloElem, index) {
        this.index = index;
        szuloElem.append(`<div class="elem"><p></p></div>`);
        this.divElem = $("article div:last-child");
        this.pElem = $("article div:last-child");
        this.divElem.on("click", () => {
            this.setElem("X");
            this.esemenyTrigger();
        });
    }

    setElem(ertek) {
        this.pElem.text(ertek)
    }

    esemenyTrigger(){
        const esemeny = new CustomEvent("elemKattintas", {detail:this  });
        window.dispatchEvent(esemeny);
    }
}

export default Mezo;