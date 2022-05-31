var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '6cdd9f6514854c089c429df2914f6e6d',
  clientSecret: '1befb0af7fb0474b8cc07b9de349641d',
  redirectUri: 'http://www.example.com/callback',
  accessToken: 'BQCCjzG9MVD3elCFgVDpsjXQMp1yFuM39QDVrN82xQjruxcpnWSCSLMypUL0_iMbj9jg3zF6fMcqHEJfYii-4J40hKIhBHh4VtjRSLPe3Rm_R9ni8Zz033ZcD8Udx9fdtvi6cDk1qKMxWzfJPlbp0fAI6fWhl0zQFhY'
});

// The code that's returned as a query parameter to the redirect URI

// spotifyApi.getPlaylistTracks('3HtxV9v9DJ8HkadZE1hAiL', {
//     offset: 1,
//     limit: 5,
//     fields: 'items'
//   })
//   .then(
//     function(data) {
//       console.log('The playlist contains these tracks', data.body.items[0]);
//     },
//     function(err) {
//       console.log('Something went wrong!', err);
//     }
//   );

// // Search artists whose name contains 'Love'
// spotifyApi.searchArtists('Kendrick Lamar')
//   .then(function(data) {
//     var aid = data.body.artists.items[0].id;
//     spotifyApi.getArtistAlbums(aid)
//   .then(function(data) {
//     console.log('Artist albums', data.body);
//   }, function(err) {
//     console.error(err);
//   });
//   }, function(err) {
//     console.error(err);
//   });

// // Get album
// spotifyApi.getAlbum('1LLOGSa5ehwSWrPg1Qc3Vg')
//   .then(function(data) {
//     console.log('Album information', data.body.tracks);
//   }, function(err) {
//     console.error(err);
//   });

  /* Get Audio Features for a Track */
spotifyApi.getAudioFeaturesForTrack('2YdXsq3MTdch9N3snxwSdI')
.then(function(data) {
  console.log(data.body);
}, function(err) {
  done(err);
});