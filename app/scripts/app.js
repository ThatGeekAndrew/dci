'use strict';

/**
 * @ngdoc overview
 * @name dciApp
 * @description
 * # dciApp
 *
 * Main module of the application.
 */

angular
  .module('dciApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/emulator', {
        templateUrl: 'views/emulator.html'
      })
      .when('/bricked', {
        templateUrl: 'views/screens/bricked.html'
      })
      .when('/conwrong', {
        templateUrl: 'views/screens/conwrong.html'
      })
      .when('/nosig', {
        templateUrl: 'views/screens/nosig.html'
      })
      .when('/loading', {
        templateUrl: 'views/screens/loading.html'
      })
      
    /* Channels */

      .when('/commercial', {
        templateUrl: 'views/screens/commercial.html'
      })

    /* Regular menu options */

      .when('/mainmenu', {
        templateUrl: 'views/screens/menu/mainmenu.html'
      })
      .when('/captions', {
        templateUrl: 'views/screens/menu/captions.html'
      })
      .when('/language', {
        templateUrl: 'views/screens/menu/language.html'
      })
      .when('/hdmimenu', {
        templateUrl: 'views/screens/menu/hdmimenu.html'
      })
      .when('/format', {
        templateUrl: 'views/screens/menu/format.html'
      })
      .when('/parental', {
        templateUrl: 'views/screens/menu/parental.html'
      })
      .when('/hdmi-settings', {
        templateUrl: 'views/screens/menu/hdmi-settings.html'
      })
      .when('/format-menu', {
        templateUrl: 'views/screens/menu/format-menu.html'
      })

    /*  Inside the main menu options */

      .when('/channel-menu', {
        templateUrl: 'views/screens/menu/channel-menu.html'
      })
      .when('/captions-menu', {
        templateUrl: 'views/screens/menu/captions-menu.html'
      })

    /* Inside the captions menu */
        
        .when('/captions-menu-service', {
          templateUrl: 'views/screens/menu/captions-menu-service.html'
        })
        .when('/captions-menu-adv', {
          templateUrl: 'views/screens/menu/captions-menu-adv.html'
        })
        .when('/captions-menu-adv-option', {
          templateUrl: 'views/screens/menu/captions-menu-adv-option.html'
        })
      .when('/language-menu', {
        templateUrl: 'views/screens/menu/language-menu.html'
      })

    /* Inside the language menu */

        .when('/language-menu-menus', {
          templateUrl: 'views/screens/menu/language-menu-menus.html'
        })
        .when('/language-menu-options', {
          templateUrl: 'views/screens/menu/language-menu-options.html'
        })
        .when('/language-menu-menu', {
          templateUrl: 'views/screens/menu/language-menu-menu.html'
        })
    
    /* Inside the HDMI menu */

      .when('/hdmi-settings-menu', {
        templateUrl: 'views/screens/menu/hdmi-settings-menu.html'
      })

    /* Inside the format menu */

      .when('/format-menu', {
        templateUrl: 'views/screens/menu/format-menu.html'
      })
      
    /* Inside the parental controls menu */

      .when('/parental-menu', {
        templateUrl: 'views/screens/menu/parental-menu.html'
      })
      .when('/parental-rating', {
        templateUrl: 'views/screens/menu/parental-rating.html'
      })
      .when('/parental-rating-menu', {
        templateUrl: 'views/screens/menu/parental-rating-menu.html'
      })
      .when('/parental-channels', {
        templateUrl: 'views/screens/menu/parental-channels.html'
      })
      .when('/parental-blocked-channels', {
        templateUrl: 'views/screens/menu/parental-blocked-channels.html'
      })
      .when('/parental-pin', {
        templateUrl: 'views/screens/menu/parental-pin.html'
      })
      .when('/parental-pin-entry', {
        templateUrl: 'views/screens/menu/parental-pin-entry.html'
      })
      .when('/new-pin', {
        templateUrl: 'views/screens/menu/new-pin.html'
      })

    /* Diagnostic menu options */

      .when('/diagnostics', {
        templateUrl: 'views/screens/diag/diagnostics.html'
      })
      .when('/status', {
        templateUrl: 'views/screens/diag/status.html'
      })
      .when('/tuner', {
        templateUrl: 'views/screens/diag/tuner.html'
      })
      .when('/curchan', {
        templateUrl: 'views/screens/diag/curchan.html'
      })
      .when('/virtchan', {
        templateUrl: 'views/screens/diag/virtchan.html'
      })
      .when('/received', {
        templateUrl: 'views/screens/diag/received.html'
      })
      .when('/objects', {
        templateUrl: 'views/screens/diag/objects.html'
      })
      .when('/download', {
        templateUrl: 'views/screens/diag/download.html'
      })
      .when('/hdmi', {
        templateUrl: 'views/screens/diag/hdmi.html'
      })
      .when('/logs', {
        templateUrl: 'views/screens/diag/logs.html'
      })
      .when('/qpsk', {
        templateUrl: 'views/screens/diag/qpsk.html'
      })
      .when('/castatus', {
        templateUrl: 'views/screens/diag/castatus.html'
      })
      .when('/cpustatus', {
        templateUrl: 'views/screens/diag/cpustatus.html'
      })

    /* Inside the diagnostic menu options */

      .when('/general-menu', {
        templateUrl: 'views/screens/diag/general-menu.html'
      })
      .when('/status-menu', {
        templateUrl: 'views/screens/diag/status-menu.html'
      })
      .when('/tuner-menu', {
        templateUrl: 'views/screens/diag/tuner-menu.html'
      })
      .when('/curchan-menu', {
        templateUrl: 'views/screens/diag/curchan-menu.html'
      })
      .when('/virtchan-menu', {
        templateUrl: 'views/screens/diag/virtchan-menu.html'
      })
      .when('/received-menu', {
        templateUrl: 'views/screens/diag/received-menu.html'
      })
      .when('/objects-menu', {
        templateUrl: 'views/screens/diag/objects-menu.html'
      })
      .when('/download-menu', {
        templateUrl: 'views/screens/diag/download-menu.html'
      })
      .when('/hdmi-menu', {
        templateUrl: 'views/screens/diag/hdmi-menu.html'
      })
      .when('/logs-menu', {
        templateUrl: 'views/screens/diag/logs-menu.html'
      })
      .when('/qpsk-menu', {
        templateUrl: 'views/screens/diag/qpsk-menu.html'
      })
      .when('/ca-menu', {
        templateUrl: 'views/screens/diag/ca-menu.html'
      })
      .when('/cpu-menu', {
        templateUrl: 'views/screens/diag/cpu-menu.html'
      })

    /* If the route hasn't been defined */
      .otherwise({
        redirectTo: '/emulator'
      });
  });

