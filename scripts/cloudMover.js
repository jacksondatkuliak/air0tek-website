// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 50  || document.documentElement.scrollTop > 50) {
            document.getElementById("cloud").style.height = "65px";
            document.getElementById("cloud").style.width = "187.5px";
            document.getElementById("topheader").style.paddingTop = "5px";
            document.getElementById("topheader").style.paddingBottom = "5px";
          } else {
            document.getElementById("cloud").style.height = "260px";
            document.getElementById("cloud").style.width = "750px";
            document.getElementById("topheader").style.paddingTop = "10px";
            document.getElementById("topheader").style.paddingBottom = "10px";
          }
        }