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

const BUBBLE_SIZE = 120;
        const BUBBLE_FADE_OUT_TIME = 2000;
        const MIN_MOVEMENT_SPEED = 0.16;
        const MAX_MOVEMENT_SPEED = 0.3;
        const BUBBLE_CREATION_INTERVAL = 1000;

        const directions = [
            { x: -1, y: -1 },
            { x: -1, y: 1 },
            { x: 1, y: -1 },
            { x: 1, y: 1 },
            { x: 0, y: -1 },
            { x: 0, y: 1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
        ];

        setInterval(function () {
            const newBubble = document.createElement('div');
            newBubble.classList.add('bubbles');
            document.body.appendChild(newBubble);

            let top = Math.floor(Math.random() * window.innerHeight + 1);
            let left = Math.floor(Math.random() * window.innerWidth + 1);
            newBubble.style.top = `${top}px`;
            newBubble.style.left = `${left}px`;

            const direction = directions[Math.floor(Math.random() * directions.length)];
            const speed = MIN_MOVEMENT_SPEED + Math.random() * (MAX_MOVEMENT_SPEED - MIN_MOVEMENT_SPEED);

            setTimeout(() => {
                newBubble.style.opacity = '0.5';
            }, 50);

            const mytime = setInterval(() => {
                top += direction.y * speed;
                left += direction.x * speed;

                newBubble.style.top = `${top}px`;
                newBubble.style.left = `${left}px`;

            }, 1000 / 180);

            const bubbleLifespan = Math.floor(Math.random() * 3000) + 2000;

            setTimeout(() => {
                newBubble.classList.add('bubble-hide');
                setTimeout(() => {
                    newBubble.remove();
                    clearInterval(mytime);
                }, BUBBLE_FADE_OUT_TIME);
            }, bubbleLifespan);

        }, BUBBLE_CREATION_INTERVAL);

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
