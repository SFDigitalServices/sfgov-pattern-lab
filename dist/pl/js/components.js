"use strict";(function ($) {
    $().ready(function () {
        /*
                            * Iterate though navItems and check if it is in the href.
                            * If yes, then add is-active class to corresponding menu link.
                            */
        var href = document.location.href.toLowerCase();
        var navItems = ["services", "departments"];

        for (var i = 0, l = navItems.length; i < l; i++) {
            var nav = navItems[i];
            if (new RegExp("/" + nav).test(href)) {
                $('.sfgov-main-navigation ul.menu a[data-drupal-link-system-path=' + nav + ']').addClass('is-active');
                break;
            };
        };
    });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLW5hdnMvMDEtbWFpbi1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJyZWFkeSIsImhyZWYiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwidG9Mb3dlckNhc2UiLCJuYXZJdGVtcyIsImkiLCJsIiwibGVuZ3RoIiwibmF2IiwiUmVnRXhwIiwidGVzdCIsImFkZENsYXNzIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiYUFBQSxDQUFDLFVBQVNBLENBQVQsRUFBVztBQUNSQSxRQUFJQyxLQUFKLENBQVUsWUFBVTtBQUNoQjs7OztBQUlBLFlBQUlDLE9BQU9DLFNBQVNDLFFBQVQsQ0FBa0JGLElBQWxCLENBQXVCRyxXQUF2QixFQUFYO0FBQ0EsWUFBSUMsV0FBVyxDQUFDLFVBQUQsRUFBYSxhQUFiLENBQWY7O0FBRUEsYUFBSyxJQUFJQyxJQUFFLENBQU4sRUFBU0MsSUFBRUYsU0FBU0csTUFBekIsRUFBaUNGLElBQUVDLENBQW5DLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN2QyxnQkFBSUcsTUFBTUosU0FBU0MsQ0FBVCxDQUFWO0FBQ0EsZ0JBQUksSUFBSUksTUFBSixDQUFXLE1BQUlELEdBQWYsRUFBb0JFLElBQXBCLENBQXlCVixJQUF6QixDQUFKLEVBQW1DO0FBQy9CRixrQkFBRSxtRUFBaUVVLEdBQWpFLEdBQXFFLEdBQXZFLEVBQTRFRyxRQUE1RSxDQUFxRixXQUFyRjtBQUNBO0FBQ0g7QUFDSjtBQUNKLEtBZkQ7QUFnQkgsQ0FqQkQsRUFpQkdDLE1BakJIIiwiZmlsZSI6ImNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XG4gICAgJCgpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgIC8qXG4gICAgICAgICAqIEl0ZXJhdGUgdGhvdWdoIG5hdkl0ZW1zIGFuZCBjaGVjayBpZiBpdCBpcyBpbiB0aGUgaHJlZi5cbiAgICAgICAgICogSWYgeWVzLCB0aGVuIGFkZCBpcy1hY3RpdmUgY2xhc3MgdG8gY29ycmVzcG9uZGluZyBtZW51IGxpbmsuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIG5hdkl0ZW1zID0gW1wic2VydmljZXNcIiwgXCJkZXBhcnRtZW50c1wiXTtcblxuICAgICAgICBmb3IgKHZhciBpPTAsIGw9bmF2SXRlbXMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hdiA9IG5hdkl0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCIvXCIrbmF2KS50ZXN0KGhyZWYpKXtcbiAgICAgICAgICAgICAgICAkKCcuc2Znb3YtbWFpbi1uYXZpZ2F0aW9uIHVsLm1lbnUgYVtkYXRhLWRydXBhbC1saW5rLXN5c3RlbS1wYXRoPScrbmF2KyddJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9KVxufSkoalF1ZXJ5KTsiXX0=
