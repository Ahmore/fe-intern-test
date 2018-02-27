(function (app) {
    function Scroller() {
        this.timer;

        $(window).scroll(this.onScroll.bind(this));
    }

    Scroller.prototype.onScroll = function() {
        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout(this.handleScroll.bind(this), app.config.SCROLLER_DELAY);
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