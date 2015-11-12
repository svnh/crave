angular.module('crave.services', [])

.factory('Restaurants', function() {
  var restaurants = [
    { name: 'Ruthiez', rating: 5 },
    { name: 'Sharz', rating: 5 },
    { name: 'Sweettartz', rating: 4 },
    { name: 'Svnhz', rating: 4 },
    { name: 'Donovanz', rating: 3 },
    { name: 'Fefez', rating: 2 }
  ];

  return {
    get: function() {
      return restaurants;
    }
  }
})

.factory('Nearby', function() {
  // Fake testing data
  var nearby = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return nearby;
    },
    remove: function(nearby) {
      nearby.splice(nearby.indexOf(nearby), 1);
    },
    get: function(id) {
      for (var i = 0; i < nearby.length; i++) {
        if (nearby[i].id === parseInt(id)) {
          return nearby[i];
        }
      }
      return null;
    }
  };
});
