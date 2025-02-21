document.addEventListener('DOMContentLoaded', function() {  // Wait for DOM to load

    const container = document.getElementById("container");
    const boxes = container.querySelectorAll(".box");

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    boxes.forEach(box => {
        const randomColor = getRandomColor();
        const randomBackgroundColor = getRandomColor();

        box.style.color = randomColor;
        box.style.backgroundColor = randomBackgroundColor;
    });

}); // End of DOMContentLoaded listener