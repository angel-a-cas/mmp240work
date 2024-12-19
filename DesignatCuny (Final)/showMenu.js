function showMenu(){
    var menu = document.getElementById("topMenu");
    if (menu.style.display === "none" || menu.style.display === ""){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// Close dropdowns if the user clicks outside
window.onclick = function (event) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        if (!event.target.matches('.dropdown > a')) {
            dropdowns[i].classList.remove("show");
        }
    }
};
