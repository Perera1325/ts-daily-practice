class Car {

    brand: string

    constructor(brand: string) {
        this.brand = brand
    }

    drive() {
        console.log(this.brand + " is driving")
    }
}

const car = new Car("Tesla")
car.drive()