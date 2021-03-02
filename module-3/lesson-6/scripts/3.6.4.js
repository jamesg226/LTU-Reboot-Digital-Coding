hoverElement = document.querySelector('.preventClick');
//console.log(hoverElement);
function alertBox(event){
    event.preventDefault();
    alert ('You clicked a link and I stopped it! Muwahahahaha!');
}
hoverElement.addEventListener('click',alertBox);