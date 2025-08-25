// Import các module bằng cú pháp ESM
// import { Person } from './Person';
// import { Student } from './Student';
// import { Car } from './Car';
// import { Rectangle } from './Rectangle';
// import { BankAccount } from './BankAccount';
// import { Book } from './Book';
// import { User } from './User';
// import { Product } from './Product';
// import { Dog } from './Dog';

import { Box } from "./schema/Box";
import { Developer } from "./schema/Developer";
import { Dog } from "./schema/Dog";
import { Libary } from "./schema/Libary";
import { Logger } from "./schema/Logger";
import { Manager } from "./schema/Manager";
import { Person } from "./schema/Person";
import { User } from "./schema/User";
import { MathUtil } from "./schema/MathUtil";
import { Repository } from "./schema/Repository";
import { Stack } from "./schema/Stack";

// import { Product } from "./Product";

// Bai1
// const huydeptrai = new Person("Nguyen Quang Huy", 18);
// console.log(huydeptrai.name);
// console.log(huydeptrai.age);
// console.log(huydeptrai.helloPerson());

// Bai2
// const huydeptrai = new Student("Nguyen Quang Huy", 18, 9.5);
// console.log(huydeptrai.name);
// console.log(huydeptrai.age);
// console.log(huydeptrai.grade);
// console.log(huydeptrai.yourGrade());

// Bai3
// const car1 = new Car("Honda", "GTX", 1);
// console.log(car1.brand);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.inforYourCar());

// Bai4
// const rectangle1 = new Rectangle(1, 2);
// console.log("Acreage: " + rectangle1.acreage());
// console.log("Perimeter: " + rectangle1.perimeter());

// Bai5
// // Deposit
// const account1 = new BankAccount();
// console.log("Your money: " + account1.balance);
// console.log("Your money: " + account1.deposit(10));
// console.log("Your money: " + account1.balance);

// // Withdraw
// console.log("Your money: " + account1.balance);
// console.log("Your money: " + account1.withdraw(5));
// console.log("Your money: " + account1.balance);

// Bai6
// const book1 = new Book("");
// const book2 = new Book("Sach 1");
// const book3 = new Book("Sach 1", "Huy");
// const book4 = new Book("Sach 1", "Huy", 12);
// console.log(book1);
// console.log(book2);
// console.log(book3);
// console.log(book4);

// Bai7
// const user = new User("");
// console.log("Your name: " + user.nameUser);
// user.nameUser = "Nguyen Quang Huy";
// console.log("Your name: " + user.nameUser);

// Bai8
// const arrProduct = [];

// for (let i = 1; i <= 10; i++) {
//     const product = new Product(`Product ${i}`, i * 20);
//     arrProduct.push(product);
// }

// console.log("Danh sách sản phẩm: ");
// arrProduct.forEach((item, index) => {
//     console.log(`Sản phẩm ${index + 1}: ${item.name}, Price: ${item.price}`);
// });

// console.log("Danh sách sản phẩm với giá hơn 100: ");
// arrProduct.forEach((item, index) => {
//     if (item.price > 100) {
//         console.log(`Sản phẩm ${index + 1}: ${item.name}, Price: ${item.price}`);
//     }
// });

// Bai9


// Test Dogcd
// const dog = new Dog('DogBuddy');
// dog.sound('Woof!');

// // Test Person
// const p = new Person('Huy', 20);
// console.log(p.helloPerson());

// //Bai11
// import { Dog1 } from "./schema/Dog1"
// const dog1 = new Dog1('DogBuddy');
// dog1.sound('Woof!');

// //Bai14
// const developer1 = new Developer("1", "Nguyen Quang Huy", 1000, "Express JS")
// const developer2 = new Developer("2", "Nguyen Huy Hoang", 2000, "Spring Boot")
// const manager1 = new Manager("3", "Nguyen Huy Hoang", 11000, 4)
// console.log("Lương nhân viên 1: ", developer1.getSalary);
// console.log("Lương nhân viên 2: ", developer2.getSalary);


// developer1.setSalary = 2000
// developer2.setSalary = 3000
// console.log("Lương nhân viên 1: ", developer1.getSalary);
// console.log("Lương nhân viên 2: ", developer2.getSalary);
// console.log(developer1.work);
// console.log(developer2.work);
// console.log("Lương quản lý: ", manager1.getSalary);
// console.log(manager1.assignTask("ABC"));


// //Bai 15
// const user1 = new User("Nguyen Quang Huy 1", "1");
// const user2 = new User("Nguyen Quang Huy 2", "2");
// const user3 = new User("Nguyen Quang Huy 3", "3");
// const user4 = new User("Nguyen Quang Huy 4", "4");

// const libary = new Libary();
// libary.addUser(user1)
// libary.addUser(user2)
// libary.addUser(user3)
// libary.addUser(user4)

// for (let user of libary.getListUser) {
//     console.log("Username: " + user.nameUser);

// }



// //Bai 16

// const user = new User("Nguyen Quang Huy", "1")
// const user1 = new User("Nguyen Quang Huy 1", "100")

// const box = new Box(user);

// console.log(box.getT);

// box.setT = user1

// console.log(box.getT);
// const developer = new Developer("1", "Nguyen Quang Huy", 1000, "Express JS")
// const box1 = new Box(developer)

// console.log(box1.getT);

// // //Bai 17
// const logger = Logger.getInstance();
// logger.log("Bai 17");


// // //Bai 17

// console.log(MathUtil.add(1, 2));
// console.log(MathUtil.subtract(1, 2));
// console.log(MathUtil.multiply(1, 2));
// console.log(MathUtil.devide(1, 2));


// //Bai21

// const repository = new Repository<User>();

// const user1 = new User("Nguyen Quang Huy 1", "1");
// const user2 = new User("Nguyen Quang Huy 1", "1");
// const user3 = new User("Nguyen Quang Huy 1", "1");
// const user4 = new User("Nguyen Quang Huy 1", "1");
// const user5 = new User("Nguyen Quang Huy 1", "1");

// repository.add(user1);
// repository.add(user2);
// repository.add(user3);
// repository.add(user4);
// repository.add(user5);

// repository.getAll().forEach(item => {
//     console.log(item.nameUser);

// })

//Bai 22:
const Stack = new Stack<User>()

