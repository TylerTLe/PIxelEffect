const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'tiger.png';
let brightnessArray = [];
let particlesArray = [];

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.brightness = 0;
        this.velocity = Math.random() * 3 + 0.1;
        this.radius = Math.random() * 2.5 + 1;

    }

    update(){
        this.y += this.velocity;
        if (this.y >= canvas.height){
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
        this.brightness = brightnessArray[1]
    }


}

img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img,0,0, canvas.width, canvas.height);
    ctx.getImageData(0,0,canvas.width,canvas.height);
    
    for (let i = 0; i < ImageData.data.length; i++) {
        const red = imgData.data[i*4];
        const blue = imgData.data([i*4] + 2);
        const green = imgData.data([i*4] + 1);

        const brightness = (red + green + blue) / 3;
        brightnessArray.push(brightness)
        
    }

    for (let i = 0; i < 10000; i++) {
        particlesArray(new Particle)
        
    }
    
};