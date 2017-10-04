$(document).ready( function() {
  $('button#play-pause').click( function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').click( function() {
    if (player.playState !== "playing") { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];

    if (nextSongIndex >= album.songs.length) { return; }

    player.playPause(nextSong);
  });

  $('button#previous').click( function() {
    if (player.playState !== "playing") { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1;
    const prevSong = album.songs[prevSongIndex];

    if (prevSongIndex < 0) { return; }
    
    player.playPause(prevSong);
  });
});
