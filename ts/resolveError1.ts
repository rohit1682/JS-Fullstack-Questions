// some error with enum need to resolve that
enum Status { 
    Active, 
    Inactive, 
    Pending 
} 

interface User { 
    id: number; 
    name: string; 
    status: Status; 
}

function filterUsers(users: User[], status: Status | string): User[] {  
    // the error is here. the | string needs to be removed as there is no string type defined in the status enum
    
    return users.filter(u => u.status === status); 
}

// abstract class Repository { 
//     data: User[] = [];  // User interface or type has not been defined
//     save(user: User) { 
//         this.data.push(user); 
//     } 
    
//     abstract findById(id: number): User | undefined; 
// }





// const users: User[] = [
//   { id: 1, name: "Rohit", status: Status.Active },
//   { id: 2, name: "Amit", status: Status.Inactive },
//   { id: 3, name: "Neha", status: Status.Pending },
//   { id: 4, name: "Priya", status: Status.Active },
//   { id: 5, name: "Rahul", status: Status.Inactive }
// ];

// console.log(filterUsers(users, Status.Active));