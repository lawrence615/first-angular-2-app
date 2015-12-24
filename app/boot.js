/**
 * Created by Lawrence on 12/23/15.
 */

(function(app){
    document.addEventListener('DOMContentLoaded', function(){
       ng.platform.browser.bootstrap(app.AppComponent);
    });


})(window.app || (window.app = {}));