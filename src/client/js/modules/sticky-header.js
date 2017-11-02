var selectors = {
    $main: $('main'),
    $stickyHeader: $('.sticky-header')
};

var stickyHeader = () => {
    $(window).scroll(() => {
        if ($(window).scrollTop() >= 55){
            selectors.$stickyHeader.addClass('stuck');
            selectors.$main.addClass('header-stuck');
        } else {
            selectors.$stickyHeader.removeClass('stuck');
            selectors.$main.removeClass('header-stuck');
        }
    });
}

export { stickyHeader }
