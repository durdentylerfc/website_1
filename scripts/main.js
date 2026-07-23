
const estimate = navigator.storage.estimate();

estimate.then(({ usage, quota }) => {
  console.log(`Used storage: ${usage} bytes`);
  console.log(`Total storage quota: ${quota} bytes`)
  let result = quota / 1000000000
  console.log(`You have ${result}gigs of storage currently`);
})

navigator.storage.persisted().then(persistent => {
  console.log(`Persistent storage granted: ${persistent}`);
});


