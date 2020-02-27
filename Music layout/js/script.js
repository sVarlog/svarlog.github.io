$(function() {
  // Preloader
  // var $preloader = $('#page-preloader'),
  //     $spinner   = $preloader.find('.spinner');
  // $spinner.fadeOut();
  // $preloader.delay(350).dafeOut('slow');

  /* Паралакс от движения мыши */
  if($(window).width() > 960) {
    $('body').parallax({
      'elements': [
        {
          'selector': '.ellipse',
          'properties': {
            'x': {
              'right': {
                'initial': -10,
                'multiplier': 0.001,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'bottom': {
                'initial': -5,
                'multiplier': 0.01,
                'unit': '%',
                'invert': true
              }
            }
          }
        },
        {
          'selector': '.plus-yellow',
          'properties': {
            'x': {
              'left': {
                'initial': 42,
                'multiplier': 0.003,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': -30,
                'multiplier': 0.003,
                'unit': '%',
                'invert': true
              }
            }
          }
        },
        {
          'selector': '.triangles',
          'properties': {
            'x': {
              'right': {
                'initial': 10,
                'multiplier': 0.01,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': -20,
                'multiplier': 0.01,
                'unit': '%',
                'invert': true
              }
            }
          }
        },
        {
          'selector': '.line-wave',
          'properties': {
            'x': {
              'left': {
                'initial': -10,
                'multiplier': 0.01,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': -20,
                'multiplier': 0.01,
                'unit': '%',
                'invert': true
              }
            }
          }
        },
        {
          'selector': '.lines-dot',
          'properties': {
            'x': {
              'left': {
                'initial': -9,
                'multiplier': 0.01,
                'unit': '%',
                'invert': true
              }
            },
            'y': {
              'bottom': {
                'initial': -11,
                'multiplier': 0.01,
                'unit': '%',
                'invert': true
              }
            }
          }
        },
        {
          'selector': '.rnb-man',
          'properties': {
            'x': {
              'left': {
                'initial': -20,
                'multiplier': 0.001,
                'unit': '%',
                'invert': true
              }
            },
            'y': {
              'bottom': {
                'initial': 0,
                'multiplier': 0,
                'unit': '%',
                'invert': true
              }
            }
          }
        }
      ]
    });
  };
});