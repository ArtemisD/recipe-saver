var searchRecipes = (options, callback) => {
  $.ajax({
    crossOrigin: true,
    url: 'https://api.edamam.com/search?',
    datatype: 'jsonp',
    data: {
      app_key: options.api_key,
      app_id: options.api_id,
      q: options.q
    },
    context: {},
    success: function(data) {
      console.log('get success');
      callback(data);
    },
    error: function() {
      console.error('get failure');
    }
  });
};

window.searchRecipes = searchRecipes;
