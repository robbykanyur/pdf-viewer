var current_image = 1;
var number_of_images = 10;

var button_back = document.getElementById('button-back');
var button_next = document.getElementById('button-next');

function updateStatus() {
    status_div = document.getElementById('current-page');
    status_div.innerHTML = current_image;
}

function handleBackClick() {
    if(current_image <= 1) {
        return;
    } else {
        var image_div = document.getElementById('image-' + current_image)
        var prev_image = document.getElementById('image-' + (current_image - 1));
        
        image_div.style.left = "100%";
        prev_image.style.left = "0";
    
        current_image -= 1;
        updateStatus();
    }  
}

function handleNextClick() {
    if(current_image >= number_of_images) {
        return;
    } else {
        var image_div = document.getElementById('image-' + current_image)

        var next_image = document.getElementById('image-' + (current_image + 1));
        
        image_div.style.left = "100%";
        next_image.style.left = "0";
    
        current_image += 1;
        updateStatus();
    }
    
}

button_back.addEventListener("click", handleBackClick);
button_next.addEventListener("click", handleNextClick);