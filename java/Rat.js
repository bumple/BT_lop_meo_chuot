class Rat {
    constructor(name,weight,speed,boolean) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = boolean;
    }

    say() {
        console.log(this.name+" kêu : chít, chít!")
    }
}