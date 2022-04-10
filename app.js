const progress = document.getElementById("file");
let count = 0;
setInterval(() => {
  count++;
  if (count > 100) {
    count = 0;
  }
  progress.value = count;
}, 500);
