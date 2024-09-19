const dragPiece = document.getElementById("drag-piece");
const emptySlot = document.getElementById("empty-slot");

dragPiece.addEventListener("dragstart", (e) => {
	console.log("Drag started");
	e.dataTransfer.setData("text", e.target.id);
});

emptySlot.addEventListener("dragover", (e) => {
	e.preventDefault();
	emptySlot.classList.add("highlight");
});

emptySlot.addEventListener("dragleave", () => {
	emptySlot.classList.remove("highlight");
});

emptySlot.addEventListener("drop", (e) => {
	const piece = e.dataTransfer.getData("text");
	const draggedElement = document.getElementById(piece);
	emptySlot.appendChild(draggedElement);
	emptySlot.classList.remove("highlight");

	emptySlot.src = "/assets/images/puzzle-of-me.png";
});
