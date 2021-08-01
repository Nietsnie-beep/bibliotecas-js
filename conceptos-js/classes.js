class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
    get cname() {
        return this.brand + this.model
    }

    set cname(value) {
        this.brand = x
        this.model = y
    }
}

log = Car.cname = { y: 2005, e: 2 };

console.log(log);