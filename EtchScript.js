function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}


const container = document.querySelector('#container');




//Creates 16 Boxes
for(let i = 0;i<16;i++){

        const square = document.createElement('div');
        square.classList.add("Box");
        square.addEventListener('mouseenter',colorchange);        
        container.appendChild(square);
}


function colorchange(){
  
  var randomcolor = Math.floor(Math.random()*16777215).toString(16); 
    event.target.style.backgroundColor = "#"+randomcolor;

    }


const button = document.querySelector('#button');
button.classList.add('clear');
button.addEventListener('click',cleargrid);
container.appendChild(button);


function cleargrid(){

//clear grid and start new
    const test = container.children;


    for(let i = 0; i < test.length; i++){
        
        test[i].style.backgroundColor = 'white';
    }

let newgrid = window.prompt("Enter grid size:");
if (newgrid > 100){
    newgrid = 100;
}
container.clearBox
console.log(newgrid*newgrid);
//Create the grid asked
for(let i = 0;i<(newgrid*newgrid);i++){

    const square = document.createElement('div');
    square.classList.add("Box");
    square.addEventListener('mouseenter',colorchange);        
    container.appendChild(square);
    
}
container.style = "grid-template-columns: repeat("+newgrid+","+(100/newgrid)+"%);grid-template-rows: repeat("+newgrid+",1fr);";
 
const button = document.querySelector('#button');
button.classList.add('clear');
button.addEventListener('click',cleargrid);
container.appendChild(button);

}

