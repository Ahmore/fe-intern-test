(function (app) {
    function Scroller() {
        $(window).scroll(this.onScroll.bind(this));
    }

    Scroller.prototype.onScroll = function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();

        if (scrollHeight - scrollPosition < 1) {
            app.appComponent.appendPhotos();
        }
    };

    app.scroller = Scroller;
})(window.app);