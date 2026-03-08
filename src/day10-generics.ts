function identity<T>(value: T): T {
    return value
}

console.log(identity<string>("Hello"))
console.log(identity<number>(100))