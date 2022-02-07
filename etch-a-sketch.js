'use strict';

const container = document.querySelector('#container')

function createGrid(number) {
	let h = 960 / number
	let w = 960 / number
	for(let rows=1; rows<=number; rows++ ){
		for(let columns=1; columns<=number; columns++){
			let div = document.createElement('div')
			div.classList.add('grid')
			let grid = document.getElementsByClassName("grid")
			div.setAttribute('style', `height: ${h}px; width: ${w}px`)
			container.appendChild(div)
		};
	};
};

createGrid(16)
paintGrid()

function getDimensions(){
	let gridNumber = prompt('Enter number of grids:')
	createGrid(gridNumber)
	paintGrid();
}

function paintGrid(){
	const grids = document.querySelectorAll('.grid')

	grids.forEach((grid) => {
		grid.addEventListener('mouseenter', (e) => {
			if(!grid.style.background){

				grid.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
			}
		})
	})
}



const reset = document.querySelector("#reset");

reset.addEventListener("click", (e) => {
	const divs = document.querySelectorAll(".grid")
	divs.forEach((div) => {
		container.removeChild(div);
	})
	getDimensions();
})