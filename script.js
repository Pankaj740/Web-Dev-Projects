window.onscroll = function () { scrollFunction() };
function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        document.getElementById("main_navbar_cont").style.backgroundColor = 'white';
        // document.getElementById("main_navbar_cont").style.transition-delay = '2s';
        document.getElementById("top_nav_text").style.color = 'black';
        document.getElementById("Home").style.color = 'orange';
        // document.getElementsByClassName("search_input")[0].style.color = 'black';

        // document.getElementById("nav_nav_cont a").style.color = 'black';
        // var collection = getElementsByClassName("mid_cont");
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName("mid_cont")[i].style.color = 'black';
            // document.getElementsByClassName("mid_cont")[i].add('color_mid');
        }

    }
    else {
        document.getElementById("main_navbar_cont").style.backgroundColor = 'transparent';
        document.getElementById("top_nav_text").style.color = 'white';
        document.getElementById("Home").style.color = 'orange';
        // document.getElementsByClassName("search_input")[0].style.color = 'white';
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName("mid_cont")[i].style.color = 'white';
            // document.getElementsByClassName("mid_cont")[i].add('color_mid');
        }

    }



}

