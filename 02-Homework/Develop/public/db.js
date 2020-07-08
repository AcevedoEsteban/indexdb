let db;
const request = indexedDB.open("budget", 8);

request.onupgradeneeded = ({ target }) => {
  db = target.result;
  db.createObjectStore("pending", { autoIncrementt: true });
};

request.onsuccess = ({ target }) => {
  db = target.result;
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = ({ target }) => {
  console.log("err" + target);
  // console.log(`err ${target}`);
};
