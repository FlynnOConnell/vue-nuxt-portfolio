
var topOffset1, topOffset2;
function scrollFunction(){

    var sticky1 = $('#firstHeader');
    var sticky2 = $('#resume-section');

    var stickyHeight1 = sticky1.outerHeight();
    var stickyHeight2 = sticky2.outerHeight();

    var scrollHeight = $(window).scrollTop();

    if(topOffset1 <= scrollHeight && scrollHeight < topOffset2 - stickyHeight1){
        sticky1.css({
            position: "fixed",
            top: 0
        });
        sticky2.css({
            position: "static",
            top: 0
        });
        $('body').css({
            "padding-top": stickyHeight1
        });
    }
    else if(scrollHeight >= topOffset2 - stickyHeight1 && scrollHeight < topOffset2){
        sticky1.css({
            position: "fixed",
            top: - (scrollHeight - (topOffset2 - stickyHeight1))
        });
         sticky2.css({
            position: "fixed",
            top: stickyHeight1 - (scrollHeight - (topOffset2 - stickyHeight1))
        });
        $('body').css({
            "padding-top": stickyHeight1 + stickyHeight2
        });
    }
    else if(scrollHeight >=  topOffset2){
        sticky1.css({
            position: "static"
        });
         sticky2.css({
            position: "fixed",
            top: 0
        });
        $('body').css({
            "padding-top": stickyHeight2
        });
    }
    else{
        sticky1.css({
            position: "static",
            top: 0
        });
        sticky2.css({
            position: "static",
            top: 0
        });
        $('body').css({
            "padding-top": 0
        });
    }

}