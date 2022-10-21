
function makesvg(selector) {
    var mydiv = document.querySelector(selector);

}
var mydiv = document.querySelector('.cpp')

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    document.body.appendChild(svg);