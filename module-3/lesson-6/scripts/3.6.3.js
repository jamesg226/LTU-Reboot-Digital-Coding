hoverElement = document.getElementById('hoverExample');
//console.log(hoverElement);
function alertBox(Event){
    alert ('You hovered over my image');
}
hoverElement.addEventListener('mouseover',alertBox);