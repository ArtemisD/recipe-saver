var searchRecipes = (options, callback) => {
  $.ajax({
    crossOrigin: true,
    url: 'http://food2fork.com/api/search?',
    // proxy:, 
    data: {
      key: options.key,
      q: options.q
    },
    context: {},
    success: function(data) {
      console.log('get success');
      data = data.replace('&amp;', '&') && data.replace('&#8217;', "'");
      data = JSON.parse(data);
      callback(data);
    },
    error: function() {
      console.error('get failure');
    }
  });
};

window.searchRecipes = searchRecipes;
