//your JS code here. If required.
const gridItems = document.querySelectorAll(".grid-item");
const changeColor = document.getElementById("change_button");
const resetButton = document.getElementById("reset_button");

changeColor.addEventListener('click', () => {
	const color = document.getElementById("colour_id").value;
	const blockId = document.getElementById("block_id").value;

	const selectBlock = document.getElementById(blockId);
	if(selectBlock){
		gridItems.forEach((item)=>{
			item.style.backgroundColor = "transparent";
		}); 
		selectBlock.style.backgroundColor = color;
	}else{
		alert("Invalid block Id. Please provide correct Id... ");
	}
 });

	resetButton.addEventListener('click', ()=>{
		gridItems.forEach((item)=>{
			item.style.backgroundColor = "transparent";
		});
  });
