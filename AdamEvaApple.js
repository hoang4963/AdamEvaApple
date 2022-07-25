class apple {
    weight
    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight
    }
    isEmpty() {
        if (this.weight > 0)
            return true;
        else return false;
    }
    decrease() {
        this.weight--;
    }
}
class human {
    name
    gender
    weight
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    checkApple() {
        let weight = apple.getWeight()
    }
    eat(apple) {
        if (apple.isEmpty) {
            apple.decrease()
            this.weight++}
        else return 'tao het'
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name;
    }
    getWeight() {
        return this.weight
    }
    setWeight(weight) {
        this.weight = weight
    }
    isMale() {
        if (this.gender === 'male' )
            return true;
        else return false
    }
    setGender(gender) {
        this.gender = gender
    }
    say(string) {
        console.log(string)
    }
}
let hoang = new human('Hoang', "male", 68);
let apple1 = new apple(10);
hoang.eat(apple1)
document.write(apple1.getWeight())


