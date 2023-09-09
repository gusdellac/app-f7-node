var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/home/',
        url: 'index.html',
      },
    ],
    // ... other parameters
  });
  
var mainView = app.views.create('.view-main');

var panel = app.panel.create({
    el: '.panel-left',
    resizable: true,
    visibleBreakpoint: 1024,
    collapsedBreakpoint: 768,
});

var panel = app.panel.create({
    el: '.panel-right',
    resizable: true,
    visibleBreakpoint: 1024,
    collapsedBreakpoint: 768,
});

var swiper = app.swiper.create('.swiper', {
    speed: 200,
    spaceBetween: 50,
});

  