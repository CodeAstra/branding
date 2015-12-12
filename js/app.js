angular.module('BrandApp', [])
  .controller('HomeCtrl', function() {
    var home = this;

    home.fonts = {
      "Oswald": {
        family: "'Oswald', sans-serif",
        weights: [300, 400, 700]
      },
      "Lato": {
        family: "'Lato', sans-serif",
        weights: [100, 300, 400, 700, 900]
      },
      "Open Sans": {
        family: "'Open Sans', sans-serif",
        weights: [300, 400, 600, 700, 800]
      },
      "Roboto": {
        family: "'Roboto', sans-serif",
        weights: [100, 300, 400, 500, 700, 900]
      },
      "Yanone Kaffeesatz": {
        family: "'Yanone Kaffeesatz', sans-serif",
        weights: [200, 300, 400, 700]
      },
      "PT Sans": {
        family: "'PT Sans', sans-serif",
        weights: [400, 700]
      },
      "Raleway": {
        family: "'Raleway', sans-serif",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
      "Quicksand": {
        family: "'Quicksand', sans-serif",
        weights: [300, 400, 700]
      },
      "Source Sans Pro": {
        family: "'Source Sans Pro', sans-serif",
        weights: [200, 300, 400, 600, 700, 900]
      },
      "Titillium Web": {
        family: "'Titillium Web', sans-serif",
        weights: [200, 300, 400, 600, 700, 900]
      },
      "Josefin Sans": {
        family: "'Josefin Sans', sans-serif",
        weights: [100, 300, 400, 600, 700]
      },
      "Josefin Slab": {
        family: "'Josefin Slab', serif",
        weights: [100, 300, 400, 600, 700]
      }
    };

    home.colors = ["#1abc9c", "#454753", "#FFFFFF"];

    fetchColorCombinations = function() {
      home.color1 = home.colors[0];
      home.color2 = home.colors[1];
      home.color3 = home.colors[2];

      home.colorCombinations = [
        [home.colors[0], home.colors[1]],
        [home.colors[0], home.colors[2]],
        [home.colors[1], home.colors[0]],
        [home.colors[1], home.colors[2]],
        [home.colors[2], home.colors[0]],
        [home.colors[2], home.colors[1]],
      ];
    };

    home.tileStyles = function(colorCombination) {
      var colorA = colorCombination[0];
      var colorB = colorCombination[1];

      styles = "";
      styles += "background-color: " + colorA + "; ";
      styles += "color: " + colorB + "; ";
      styles += "font-family: " + home.fonts[home.fontName].family;

      return styles;
    };

    fetchFontNames = function() {
      var names = [];
      angular.forEach(home.fonts, function(val, key) {
        names.push(key);
      });

      home.fontNames = names;
    };

    function init() {
      fetchColorCombinations();
      fetchFontNames();
      home.fontName = home.fontNames[0];
    };

    init();
  });
