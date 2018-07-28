var searchRecipes = (options, callback) => {
  $.ajax({
    crossOrigin: true,
    url: 'https://api.edamam.com/search?',
    datatype: 'jsonp',
    data: {
      q: options.q,
      app_id: options.api_id,
      app_key: options.api_key
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
//
// var searchRecipes = (options, callback) => {
//   $.ajax({
//     crossOrigin: true,
//     url: 'http://api.yummly.com/v1/api/recipes?',
//     datatype: 'jsonp',
//     data: {
//       _app_id: options.api_id,
//       _app_key: options.api_key,
//       q: options.q
//     },
//     context: {},
//     success: function(data) {
//       console.log('get success');
//       callback(data);
//     },
//     error: function() {
//       console.error('get failure');
//     }
//   });
// };


window.searchRecipes = searchRecipes;
