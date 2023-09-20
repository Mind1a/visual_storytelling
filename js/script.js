const dragDiv = document.querySelector('.swiper');
const draggables = document.querySelectorAll('.swiper-slide');
const drops = document.querySelectorAll('.word');

let draggedItem = null;

draggables.forEach(item => {
    console.log('hi');
    item.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem.style.display = 'flex';
            draggedItem = null;
        }, 0);
    });
});

    dragDiv.addEventListener('dragover', (e) => {
        e.preventDefault(); //kursori
    });

    // dragDiv.addEventListener('drop', (e) => {
    //     e.preventDefault();
        
    //     if (draggedItem) {
    //         dragDiv.appendChild(draggedItem); // Append the dragged element to the drop target
    //     }
    // });
    
drops.forEach(drop => {
    console.log(drop);
    drop.addEventListener('dragover', (e) => {
        console.log('over');
        e.preventDefault(); //kursori
    });

    drop.addEventListener('drop', (e) => {
        e.preventDefault();
        console.log('it works!');
        
        if (draggedItem) {
            drop.appendChild(draggedItem); // Append the dragged element to the drop target
        }
    });
});
