

function checkAddress(checkbox) {

    let myImg = document.getElementById("resume")
    if (checkbox.checked) {
        myImg.classList.add('hidden');
        console.log("hidden added")
    } else {
        myImg.classList.remove('hidden')
        console.log("hidden unadded")
    }
}


function resumeChanger() {
    let active = $(this)
    let img
    if(active.attr("id") === "button-dev"){
        img = $("#resume")
        $("#resume2").addClass("hide-this")
        img.removeClass("hide-this")
    }
    else {
        img = $("#resume2")
        $("#resume").addClass("hide-this")
        img.removeClass("hide-this")
     }
}

