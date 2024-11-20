let mojo = document.getElementById("emoji");
    let picker = document.getElementById("colorpicker");

    picker.addEventListener("input", () => {
        mojo.style.backgroundColor = picker.value; 
        mojo.style.boxShadow = `0px 0px 25px `; 
        mojo.style.transition = "0.5s ease-in-out"; 
    });