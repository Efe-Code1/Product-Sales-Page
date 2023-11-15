// alert("You're currently in Efe's Web Page");

const tooltips = document.querySelectorAll(".tt");
tooltips.forEach(tooltip => {
    new bootstrap.Tooltip(tooltip)
});