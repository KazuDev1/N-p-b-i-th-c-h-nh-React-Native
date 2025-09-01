// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
// const myPromise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("Something went wrong"))
//   },1000)
// })

// myPromise.then((value) => {
//   console.log(value)
// }).catch(err => console.error(err.message))



// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1
// second.

// const myPromise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("Something went wrong"))
//   },1000)
// })

// myPromise.then((value) => {
//   console.log(value)
// }).catch(err => console.error(err.message))


// 4. Use .then() and .catch() to handle a Promise that returns a random number.
// const numberRandom: number = Math.ceil(Math.random() * 100)

// const myPromise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(numberRandom)
//   }, 1000);

// })

// myPromise.then((value) => {
//   console.log(value)
// }).catch(err => console.error(err.message))

// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.

// const simulateTask = (time:number):Promise<string> => {
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task done")
//   }, time);
// })
// }

// simulateTask(2000).then((value) => console.log(value))


// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
// const simulateTask = (time:number):Promise<string> => {
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Task done in ${time} ms`)
//   }, time);
// })
// }


// async function runParallelTasks() {
//   try {
//     const result = await Promise.all([
//       simulateTask(1000),
//       simulateTask(2000),
//       simulateTask(3000)
//     ])
//     console.log(result);

//   } catch (error) {
//     console.error("One of the tasks failed:", error);
//   }
// } 

// runParallelTasks()


// 7. Use Promise.race() to return whichever Promise resolves first.
// const simulateTask = (time:number):Promise<string> => {
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Task done in ${time} ms`)
//   }, time);
// })
// }


// async function runParallelTasks() {
//   try {
//     const result = await Promise.race([
//       simulateTask(1000),
//       simulateTask(2000),
//       simulateTask(3000)
//     ])
//     console.log(result);

//   } catch (error) {
//     console.error("One of the tasks failed:", error);
//   }
// } 

// runParallelTasks()

// 8. Create a Promise chain: square the number 2, then double it, then add 5.
// const square = (number: number): Promise<number> => {
//   return new Promise((resolve, reject) => { resolve(number*number) })
// }

// const double = (number: number): Promise<number> => {
//   return new Promise((resolve, reject) => { resolve(number*2) })
// }

// const add = (number: number): Promise<number> => {
//   return new Promise((resolve, reject) => { resolve(number+5) })
// }

// square(2)
//   .then(result => double(result))
//   .then(result => add(result))
//   .then(result => console.log('Result finally: ', result)
// )

// 9. Write a Promise that reads an array after 1 second and filters even numbers.

// const filterEvenNumbers = (arr: number[]): Promise<number[]> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       arr = arr.filter((item) => item % 2 == 0)
//       resolve(arr)
//     }, 1000);
//   })

// }

// filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]).then(result => console.log(result))

// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
const myPromise = new Promise<string>((resolve, reject) => {
  const success = Math.random() > 0.5; 

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))      
  .catch(error => console.error(error))     
  .finally(() => console.log("Done"));      

// // 11. Convert Exercise 1 into async/await.
// const helloWorldFunction = async () => {
//     await setTimeout(() => {
//       console.log("Hello world!");
//     }, 1000);
// }

// helloWorldFunction()

// 12. Write an async function that calls simulateTask(2000) and logs the result.
// const simulateTask = (time:number):void => {
//   setTimeout(() => {
//     console.log("Hello world!");
    
//   }, time);
// }

// const helloWorld = async () => {
//   await simulateTask(2000)
// }

// helloWorld()

// 13. Handle errors using try/catch with async/await.
// const simulateTask = (time: number, shouldFail: boolean): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(new Error("Something went wrong!"));
//       } else {
//         resolve("Task completed successfully!");
//       }
//     }, time);
//   });
// };

// const runTask = async () => {
//   try {
//     const result = await simulateTask(2000, true); 
//     console.log("Result:", result);
//   } catch (error) {
//     console.error("Caught error:", error);
//   } finally {
//     console.log("Done"); 
//   }
// };

// runTask();

// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.


  const handleWaitAsync = async (number:number):Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number * 3)
      }, 3000);
    })
  }


(async () => {
  const result = await handleWaitAsync(3);
  console.log("Your number: ", result); 
})();