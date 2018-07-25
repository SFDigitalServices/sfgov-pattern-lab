"use strict";(function ($) {
    $().ready(function () {
        /*
                            * Iterate though navItems and check if it is in the href.
                            * If yes, then add is-active class to corresponding menu link.
                            */
        var href = window.href.toLowerCase();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLW5hdnMvMDEtbWFpbi1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJyZWFkeSIsImhyZWYiLCJ3aW5kb3ciLCJ0b0xvd2VyQ2FzZSIsIm5hdkl0ZW1zIiwiaSIsImwiLCJsZW5ndGgiLCJuYXYiLCJSZWdFeHAiLCJ0ZXN0IiwiYWRkQ2xhc3MiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJhQUFBLENBQUMsVUFBU0EsQ0FBVCxFQUFXO0FBQ1JBLFFBQUlDLEtBQUosQ0FBVSxZQUFVO0FBQ2hCOzs7O0FBSUEsWUFBSUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRSxXQUFaLEVBQVg7QUFDQSxZQUFJQyxXQUFXLENBQUMsVUFBRCxFQUFhLGFBQWIsQ0FBZjs7QUFFQSxhQUFLLElBQUlDLElBQUUsQ0FBTixFQUFTQyxJQUFFRixTQUFTRyxNQUF6QixFQUFpQ0YsSUFBRUMsQ0FBbkMsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3ZDLGdCQUFJRyxNQUFNSixTQUFTQyxDQUFULENBQVY7QUFDQSxnQkFBSSxJQUFJSSxNQUFKLENBQVcsTUFBSUQsR0FBZixFQUFvQkUsSUFBcEIsQ0FBeUJULElBQXpCLENBQUosRUFBbUM7QUFDL0JGLGtCQUFFLG1FQUFpRVMsR0FBakUsR0FBcUUsR0FBdkUsRUFBNEVHLFFBQTVFLENBQXFGLFdBQXJGO0FBQ0E7QUFDSDtBQUNKO0FBQ0osS0FmRDtBQWdCSCxDQWpCRCxFQWlCR0MsTUFqQkgiLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKXtcbiAgICAkKCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgLypcbiAgICAgICAgICogSXRlcmF0ZSB0aG91Z2ggbmF2SXRlbXMgYW5kIGNoZWNrIGlmIGl0IGlzIGluIHRoZSBocmVmLlxuICAgICAgICAgKiBJZiB5ZXMsIHRoZW4gYWRkIGlzLWFjdGl2ZSBjbGFzcyB0byBjb3JyZXNwb25kaW5nIG1lbnUgbGluay5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBocmVmID0gd2luZG93LmhyZWYudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIG5hdkl0ZW1zID0gW1wic2VydmljZXNcIiwgXCJkZXBhcnRtZW50c1wiXTtcblxuICAgICAgICBmb3IgKHZhciBpPTAsIGw9bmF2SXRlbXMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hdiA9IG5hdkl0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCIvXCIrbmF2KS50ZXN0KGhyZWYpKXtcbiAgICAgICAgICAgICAgICAkKCcuc2Znb3YtbWFpbi1uYXZpZ2F0aW9uIHVsLm1lbnUgYVtkYXRhLWRydXBhbC1saW5rLXN5c3RlbS1wYXRoPScrbmF2KyddJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9KVxufSkoalF1ZXJ5KTsiXX0=
