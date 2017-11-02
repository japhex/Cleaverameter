var selectors = {
    $tooltip: $('[data-toggle="tooltip"]')
};

var tooltips = () => {
    selectors.$tooltip.tooltip();
}

export { tooltips }
