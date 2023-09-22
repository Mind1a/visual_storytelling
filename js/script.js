const dragDiv = document.querySelector('.swiper-wrapper');
const draggables = document.querySelectorAll('.swiper-slide');
const drops = document.querySelectorAll('.word');

let draggedItem = null;


draggables.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        setTimeout(() => {
            e.target.style.opacity = 0.5;
        }, 0);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem.style.opacity = 1;
            draggedItem = null;
        }, 0);
    });
});

dragDiv.addEventListener('dragover', (e) => {
    e.preventDefault();
});
dragDiv.addEventListener('drop', (e) => {
    e.preventDefault();
    
    if (draggedItem) {
        // draggedItem.style.margin = '2.5rem'
        // draggedItem.style.width = '9.688rem'
        dragDiv.append(draggedItem);
    }
});
    
drops.forEach(drop => {
    console.log(drop);
    drop.addEventListener('dragover', (e) => {
        e.preventDefault(); //kursori
        console.log('over');
    });

    drop.addEventListener('drop', (e) => {
        e.preventDefault();
        console.log('it works!');
        
        if (draggedItem && drop.childElementCount == 0) {
            draggedItem.style.margin = '0'
            draggedItem.style.width = '100%'
            drop.append(draggedItem); // Append the dragged element to the drop target
        }
    });
});
