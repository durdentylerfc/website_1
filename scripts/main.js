navigator.storage.estimate().then((estimate) => {
  const { usage = 0, quota = 0 } = estimate;
  if (quota > 0) {
    document.getElementById("percent").textContent = (
      (usage / quota) * 100
    ).toFixed(2);
    document.getElementById("quota").textContent = `${(quota / 1024 / 1024).toFixed(2)}MB`;
  } else {
    document.getElementById("percent").textContent = "0.00";
    document.getElementById("quota").textContent = "0.00MB";
  }

  // show raw values in any .quota element if present
  const quotaEl = document.getElementsByClassName("quota")[0];
  if (quotaEl) quotaEl.innerHTML = "Quota: " + quota + " bytes";

  console.log(`Used storage: ${usage} bytes`);
  console.log(`Total storage quota: ${quota} bytes`);
});

navigator.storage.persisted().then(persistent => {
  console.log(`Persistent storage granted: ${persistent}`);
});

const btn = document.querySelector('.btn');
if (btn) {
  btn.addEventListener("click", function() {
    navigator.storage.persist().then(persistent => {
      if (persistent) {
        document.getElementById("footer-container").innerHTML = "then we have persistent storage!";
      } else {
        document.getElementById("footer-container").innerHTML = "we don't have persistent storage.";
      }
    });
  });
}

document.addEventListener("touchstart", function(event) {
  console.log("Tag name: " + event.target.tagName);
}); 

