function calculateStardate() {
    const StardateOriginToday = new Date("July 15, 1987 00:00:00");
    const now = new Date();

    const stardateToday = now.getTime() - StardateOriginToday.getTime();
    const adjustedStardate = stardateToday / (1000 * 60 * 60 * 24 * 0.036525); 
    const finalStardate = Math.floor(adjustedStardate + 410000) / 10;

    return finalStardate;
}

function formatCurrentDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function updateDateTime() {
  const currentDate = formatCurrentDate();
  document.getElementById('currentDateDisplay').textContent = "Current Date: " + currentDate; 
}

const stardate = calculateStardate();
document.getElementById('stardateDisplay').textContent += stardate;

updateDateTime(); 

setInterval(updateDateTime, 1000); 

setInterval(function () {
    const newBubble = document.createElement('div');
    newBubble.classList.add('bubbles');
    document.body.appendChild(newBubble);
    newBubble.style.top = Math.floor(Math.random() * window.innerHeight + 1) + 'px';
    newBubble.style.left = Math.floor(Math.random() * window.innerWidth + 1) + 'px';
    // newBubble.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const myDirection = Math.floor(Math.random() * 5);
    setTimeout(function () {
      newBubble.style.opacity = '0.5';
    }, 1);
    const speed = 0.16;
    let mytime = setInterval(function () {
      if (myDirection == 1) {
        newBubble.style.top = (parseInt(newBubble.style.top) - speed) + 'px';
        newBubble.style.left = (parseInt(newBubble.style.left) - speed) + 'px';
      } else if (myDirection == 2) {
        newBubble.style.top = (parseInt(newBubble.style.top) - speed) + 'px';
        newBubble.style.right = (parseInt(newBubble.style.right) - speed) + 'px';
      } else if (myDirection == 3) {
        newBubble.style.top = (parseInt(newBubble.style.top) + speed) + 'px';
        newBubble.style.left = (parseInt(newBubble.style.left) + speed) + 'px';
      } else {
        newBubble.style.top = (parseInt(newBubble.style.top) + speed) + 'px';
        newBubble.style.right = (parseInt(newBubble.style.right) + speed) + 'px';
      }
      if (newBubble.style.top <= 0) return clearInterval(mytime);
      if (newBubble.style.left <= 0) return clearInterval(mytime);
      if (newBubble.style.right >= window.innerWidth) return clearInterval(mytime);
      if (newBubble.style.bottom >= window.innerWidth) return clearInterval(mytime);
    }, 1000 / 60);
    setTimeout(function () {
      newBubble.classList.add('bubble-hide');
      setTimeout(function () {
        newBubble.remove();
      }, 2000);
    }, Math.floor(Math.random() * 1000) + 2000);
  }, 900);

function copyStardate() {
  const stardateText = document.getElementById('stardateDisplay').textContent;
  const textArea = document.createElement('textarea');
  textArea.value = stardateText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy"); 
  textArea.remove();

  // alert("Stardate copied!"); 
}

document.getElementById('copyStardateButton').addEventListener('click', copyStardate);
