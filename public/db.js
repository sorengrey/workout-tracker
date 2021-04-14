let db;
let workoutVersion;

// creates a new db request for a "workoutsDB" database
const request = indexedDB.open('workoutsDB', workoutVersion || 21);

request.onupgradeneeded = function (e) {
    console.log('Upgrade needed in IndexDB');
  
    const { oldVersion } = e;
    const newVersion = e.newVersion || db.version;
  
    console.log(`DB Updated from version ${oldVersion} to ${newVersion}`);
  
    db = e.target.result;
  
    if (db.objectStoreNames.length === 0) {
      db.createObjectStore('WorkoutStore', { autoIncrement: true });
    }
  };

// error handling
request.onerror = function (e) {
    console.log(`Woops! ${e.target.errorCode}`);
  };