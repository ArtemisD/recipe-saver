var searchRecipes2 = (options, callback) => {
  $.ajax({
    crossOrigin: true,
    url: 'https://api.edamam.com/search?',
    datatype: 'jsonp',
    data: {
      app_key: options.api_key,
      app_id: "6ef698c7",
      q: options.q
    },
    context: {},
    success: function(data) {
      console.log('get success');
      console.log(data.hits);
      console.log(typeof(data));
      // data = data.replace('&amp;', '&') && data.replace('&#8217;', "'");
      // data = JSON.parse(data);
      callback(data);
    },
    error: function() {
      console.error('get failure');
    }
  });
};


window.searchRecipes2 = searchRecipes2;
