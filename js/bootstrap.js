// alert ("You're entering Efe's website, tread carefully!");
// alert ("Note: This is just a mock-up page");


const tooltips = document.querySelectorAll(".tt");
tooltips.forEach(tooltip => {
    new bootstrap.Tooltip(tooltip)
});