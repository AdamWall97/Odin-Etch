const container = document.querySelector('#container');


let str = "Box "; //Creates 16 Boxes
for(let i = 0;i<16;i++){

        const square = document.createElement('div');
        square.classList.add("Box");
        square.textContent = "Box: " + (i+1);
        container.appendChild(square);
}

