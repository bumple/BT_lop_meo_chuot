class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    say() {
        console.log(this.name + " kêu : meo meo");
    }

    catch(rat) {
        if (this.speed > rat.speed) {
            console.log(this.name + " bắt được chuột r hihi!");
            // return true;
        }else {
            console.log(rat.name+" chạy nhanh quá! "+this.name+" không bắt được")
            // return  false;
        }
    }

    eat(rat) {
        if (this.speed > rat.speed){
            rat.status = false;
            this.weight += rat.weight;
            console.log(this.name + " ăn thịt "+rat.name+" nào!");
            console.log(this.name+" tăng lên "+rat.weight+" kg")
        }
    }
}