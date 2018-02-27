(function (app) {
    function Scroller() {
        this.scrollTimer = null;
        this.resizeTimer = null;

        $(window).scroll(this.onScroll.bind(this));
        $(window).resize(this.onResize.bind(this));
    }

    Scroller.prototype.onScroll = function() {
        if (this.scrollTimer) {
            clearTimeout(this.scrollTimer);
        }

        this.scrollTimer = setTimeout(this.handleScroll.bind(this), app.config.SCROLLER_DELAY);
    };

    Scroller.prototype.onResize = function() {
        if (this.resizeTimer) {
            clearTimeout(this.resizeTimer);
        }

        this.resizeTimer = setTimeout(this.handleScroll.bind(this), app.config.SCROLLER_DELAY);
    };

    Scroller.prototype.handleScroll = function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();

        if (scrollHeight - scrollPosition < 1) {
            app.appComponent.appendPhotos();
        }
    };

    app.scroller = Scroller;
})(window.app);