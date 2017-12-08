define([
    "skylarkjs",
    "text!scripts/routes/home/home.html"
], function(skylarkjs, homeTpl) {
    var spa = skylarkjs.spa,
        $ = skylarkjs.query;
    return spa.RouteController.inherit({
        klassName: "HomeController",

        rendering: function(e) {
          require(["scripts/brackets/utils/Compatibility"], function () {
              // Load the brackets module. This is a self-running module that loads and runs the entire application.
              require(["scripts/brackets/brackets"]);
          });
        },

        rendered: function(e) {

        },
        entered: function(e) {
        },
        exited: function(e) {
        }
    });
});
