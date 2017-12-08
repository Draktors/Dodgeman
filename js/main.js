let dodgeman;
const bricks = [];


function startGame(){
    dodgeman = new component(30, 30, "red", 10, 120);
    gameField.start();

}

let gameField = {
    canvas : document.createElement('canvas'),
    start : function () {
        this.canvas.width = 900;
        this.canvas.heigth = 800;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameField, 20);
    },

    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

};
