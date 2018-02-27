(function(app) {
    $(function() {
        // Init scroller
        var scroller = new app.scroller();

        // Initial fetch
        app.appComponent.appendPhotos();
    });
})(window.app);