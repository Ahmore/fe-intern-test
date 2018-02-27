(function (app) {
    app.photosService = {
        getPhotos: function(offset, limit) {
            var params = $.extend({}, {
                offset: offset,
                limit: limit
            });

            return $.get(app.config.API, params);
        },

        getPhotosPlaceholders: function(offset, limit) {
            var params = $.extend({}, {
                offset: offset,
                limit: limit,
                placeholders: 1
            });

            return $.get(app.config.API, params);
        }
    };
})(window.app);