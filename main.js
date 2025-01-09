
document.getElementById("menuToggle").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");

    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        mainContent.style.marginLeft = "250px";
    } else {
        sidebar.style.left = "-250px";
        mainContent.style.marginLeft = "0";
    }
});

document.getElementById("closeBtn").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");

    sidebar.style.left = "-250px";
    mainContent.style.marginLeft = "0";
});
