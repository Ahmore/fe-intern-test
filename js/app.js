/*

    Use https://codewise-fe-api.herokuapp.com/photos endpoint, to get list of objects that contain photos data, e.g.:

    {
        "width":5616,
        "height":3744,
        "author":"Alejandro Escamilla",
        "url":"https://unsplash.com/photos/N7XodRrbzS0/download"
    }

    This endpoint accepts two query parameters: 'offset' and 'limit'. If you use endpoint like this:
    https://codewise-fe-api.herokuapp.com/photos?offset=0&limit=5
    it will return first 5 records from the database,

    if you use it like this:
    https://codewise-fe-api.herokuapp.com/photos?offset=10&limit=5
    it will return records no. 10-14 end so on.

    If you don't pass any parameters, offset is set to 0 end limit is set to 50.
    
    To use lightweight placeholder images instead of real photos, set truthy value for 'placeholders' parameter, e.g.
    https://codewise-fe-api.herokuapp.com/photos?placeholders=1, or
    https://codewise-fe-api.herokuapp.com/photos?offset=10&limit=5&placeholders=1

    Good luck!

*/


(function(window) {
    window.app = window.app || {};
})(window);