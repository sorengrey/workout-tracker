// let db;
// let workoutVersion;

// // creates a new db request for a "workoutDB" database
// const request = indexedDB.open("workoutDB", workoutVersion || 21);

// request.onupgradeneeded = function (e) {
//   console.log("Upgrade needed in IndexDB");

//   const { oldVersion } = e;
//   const newVersion = e.newVersion || db.version;

//   console.log(`DB Updated from version ${oldVersion} to ${newVersion}`);

//   db = e.target.result;

//   if (db.objectStoreNames.length === 0) {
//     db.createObjectStore("workoutDB", { autoIncrement: true });
//   }
// };

// function checkDatabase() {
//   console.log("check db invoked");

//   // Open a transaction on your workout db
//   let transaction = db.transaction(["workoutDB"], "readwrite");

//   // access your workoutDB object
//   const store = transaction.objectStore("workoutDB");

//   // Get all records from store and set to a variable
//   const getAll = store.getAll();

//   // If the request was successful
//   getAll.onsuccess = function () {
//     // If there are stored workouts, we need to bulk add them when we are back online (you might need to change /stats/ to /exercise/)
//     if (getAll.result.length > 0) {
//       fetch("/api/stats/bulk", {
//         method: "POST",
//         body: JSON.stringify(getAll.result),
//         headers: {
//           Accept: "application/json, text/plain, */*",
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => response.json())
//         .then((res) => {
//           // If our returned response is not empty
//           if (res.length !== 0) {
//             // Open another transaction to BudgetStore with the ability to read and write
//             transaction = db.transaction(["workoutDB"], "readwrite");

//             // Assign the current store to a variable
//             const currentStore = transaction.objectStore("workoutDB");

//             // Clear existing entries because our bulk add was successful
//             currentStore.clear();
//             console.log("Clearing store 🧹");
//           }
//         });
//     }
//   };
// }

// // error handling
// request.onerror = function (e) {
//   console.log(`Woops! ${e.target.errorCode}`);
// };

// // success handling if everything is ok with the db
// request.onsuccess = function (e) {
//   console.log("success");
//   db = e.target.result;

//   // Check if app is online before reading from the db
//   if (navigator.onLine) {
//     console.log("Backend online! 🗄️");
//     checkDatabase();
//   }
// };
