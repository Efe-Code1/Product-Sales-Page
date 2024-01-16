alert ("NOTE: This is just a customized mockup website for a product created by Efe, and so no interactions when the 'Buy' button is clicked");



const tooltips = document.querySelectorAll(".tt");
tooltips.forEach(tooltip => {
    new bootstrap.Tooltip(tooltip)
});