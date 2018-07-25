(function($){
    $().ready(function(){
        /*
         * Iterate though navItems and check if it is in the href.
         * If yes, then add is-active class to corresponding menu link.
         */
        var href = window.href.toLowerCase();
        var navItems = ["services", "departments"];

        for (var i=0, l=navItems.length; i<l; i++) {
            var nav = navItems[i];
            if (new RegExp("/"+nav).test(href)){
                $('.sfgov-main-navigation ul.menu a[data-drupal-link-system-path='+nav+']').addClass('is-active');
                break;
            };
        };
    })
})(jQuery);