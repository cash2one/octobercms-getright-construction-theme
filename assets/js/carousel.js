var carousel = (function () {

    // Keep this variable private inside this closure scope
    var interval = 5000;

    var init = function() {
        $('.carousel').carousel({
            interval: interval
        });
    };

    return {
        init: init,
    }
})();
