var mouseEvent = "Empty"
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
color = "black"
width_of_line = 1
canvas.addEventListener("mouseDown", my_mousedown);

function my_mousedown(e) {

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;


    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouseEvent = "mouseleave"
}



canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {

    mouseEvent = "mouseup"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clientY - canvas.offsetTop
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of X and Y coordinates =");
        console.log("X =" + last_position_of_mouse_x + "Y =" + last_position_of_mouse_y);
        ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y)

        console.log("Current position of X and Y coordinates =")
        console.log("X =" + current_position_of_mouse_x + "Y =" + current_position_of_mouse_y);
        ctx.moveTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_mouse_x = current_position_of_mouse_x;
    last_position_of_mouse_y = current_position_of_mouse_y
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

}