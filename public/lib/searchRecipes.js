var searchRecipes = (options, callback) => {
  $.ajax({
    url: 'http://food2fork.com/api/search?',
    type: 'GET',
    data: {
      key: options.key,
      q: options.q
    },
    success: function(data) {
      console.log('get success');
      data = data.replace('&amp;', '&');
      data = JSON.parse(data);
      callback(data);
    },
    error: function() {
      console.error('get failure');
    }
  });
};

window.searchRecipes = searchRecipes;
