document.addEventListener('DOMContentLoaded', (event) => {
    
    let boxColor = "black"; 
    let boxIdCounter = 0; 
    const newBoxButton = document.getElementById('new-box-button'); 
    const colorForm = document.getElementById('color-form'); 
    const boxContainer = document.getElementById('box-container'); 
    const colorInput = document.getElementById('color-input'); 

    // Event listener for the "New Box" button
    newBoxButton.addEventListener("click", function(event) {
        // Create a new div element for the box
        const newBox = document.createElement('div');
        newBox.classList.add('box'); 
        newBox.id = 'box-' + boxIdCounter++; 
        newBox.style.backgroundColor = boxColor; 
        newBox.innerText = newBox.id; 

        // Add double-click event listener to remove the box
        newBox.addEventListener('dblclick', function() {
            
            boxContainer.removeChild(newBox);
        });

        // Append the new box to the box container
        boxContainer.appendChild(newBox);
    });

    // Event listener for the color form submission
    colorForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        boxColor = colorInput.value; 

        // Update the background color of all existing boxes
        boxContainer.querySelectorAll('.box').forEach(box => {
            box.style.backgroundColor = boxColor;
 
        });
    });

    // Event listener for mouseover boxes
    newBox.addEventListener("mouseover", (event)){

        
    }
});