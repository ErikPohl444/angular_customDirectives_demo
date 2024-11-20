var app = angular.module("customDirectives", []);

app.directive("ngCustomHover", function() {
	return {
  	link : function(scope, element, attrs) {

    	var originalColor = element.css("color");
    	element
      	.on("mouseenter", function() {
      	var selectedColor = element.attr("ng-custom-hover");
        element.css("color", selectedColor)
        .on("mouseleave", function() {
        	element.css("color", originalColor);
        });
      });
    }
  }
});