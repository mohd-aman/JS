let ladder = {
    step:0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this
    },
    showStep(){
        console.log(this.step);
        return this;
    }
}

// ladder.showStep()
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.up();
// ladder.showStep();


// let a = ladder.up();
// console.log(a);
// a.up();

ladder.up().up().up().up().up().down().showStep().up().up().showStep();
