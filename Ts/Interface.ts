interface IPerson {
    name: string,
    age: number,
    address?: string,
    date: Date
}

const p1: IPerson = {
    name: "Rohit Ghosh",
    age: 24,
    date: new Date(Date.now())
} 