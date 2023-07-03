let numberOfFaces = 5;
let gameCount = 0;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");
window.addEventListener('load', generateFaces);
function generateFaces(){
    for(let i=0;i<numberOfFaces;i++){
        const face = document.createElement('img');
        face.src = 'smile.png';
        let randomTop = Math.floor((Math.random() * 400) + 1);
        let randomLeft = Math.floor((Math.random() * 400) + 1);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    gameCount += 1;
    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
}

function gameOver(){
    alert('Game Over!\n\nYou Made it to Level '+gameCount);
    document.body.removeEventListener();
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
}

function nextLevel(event){
    event.stopPropagation();
    numberOfFaces += 5;
    
    removeAllChildNodes(theLeftSide);
    removeAllChildNodes(theRightSide);
    
    generateFaces();

}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
