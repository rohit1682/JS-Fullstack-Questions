// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 25 },
//   { name: "C", age: 20 }
// ];

// group by age


function groupByAge(users) {
    const group = users.reduce((acc, val) => {
        let names = acc.get(val.age) || [];
        names.push(val.name)
        acc.set(val.age, names);
        return acc;
    }, new Map());

    return Object.fromEntries(group);
}

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 20 }
];

console.log(groupByAge(users));
