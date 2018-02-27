(function(app) {
    function AppComponent() {
        this.element = $(".app-component");
        this.loadedPhotos = 0;
    }

    AppComponent.prototype.appendPhotos = function() {
        var self = this;

        app.photosService.getPhotos(
            this.loadedPhotos,
            app.config.PHOTOS_CHUNK
        ).done(function(photos) {
            self.loadedPhotos += app.config.PHOTOS_CHUNK;

            for (var i in photos) {
                var photo = photos[i];
                var photoElement = $("<img>")
                    .addClass("app-photo")
                    .addClass("app-photo-loading")
                    .attr("src", photo.url);

                photoElement.on("load", function() {
                    $(this).removeClass("app-photo-loading");
                });

                self.element.append(photoElement);
            }
        });
    };

    app.appComponent = new AppComponent();
})(window.app);