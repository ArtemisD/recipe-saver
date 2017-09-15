var searchRecipes = (options, callback) => {
  $.ajax({
    xhrFields: {
      withCredentials: true
    },
    url: 'https://food2fork.com/api/search?',
    type: 'GET',
    data: {
      key: options.key,
      q: options.q
    },
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
