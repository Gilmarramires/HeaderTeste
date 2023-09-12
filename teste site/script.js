document.addEventListener("DOMContentLoaded", function () {
    var botaocpf = document.querySelector(".botaocpf");
    var modal = document.getElementById("myModal");
    var closeButton = document.querySelector(".close");
  

    botaocpf.addEventListener("click", function () {
      modal.style.display = "block";
    });
  

    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
});
  
  