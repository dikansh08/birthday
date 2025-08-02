document.addEventListener('DOMContentLoaded', () => {
  const fireworkContainer = document.querySelector('.fireworks');

  setInterval(() => {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight / 2;
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    fireworkContainer.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 1000);
  }, 300);
});

const style = document.createElement('style');
style.innerHTML = `
.spark {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: hsl(${Math.random()*360}, 100%, 60%);
  animation: boom 1s ease-out;
}
@keyframes boom {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(4); opacity: 0; }
}
`;
document.head.appendChild(style);
