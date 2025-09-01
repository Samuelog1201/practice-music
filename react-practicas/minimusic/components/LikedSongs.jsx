import LikedSongCard from "./LikedSongCard";

const LikedSongs = ({ songs, onRemove }) => {
  return (
    <section style={{ marginTop: 20 }}>
      <h2>Liked Songs</h2>
      {songs.length === 0 ? (
        <p>Aún no tienes canciones marcadas.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
          {songs.map((song) => (
            <LikedSongCard key={song.id} song={song} onRemove={() => onRemove(song.id)} />
          ))}
        </div>
      )}
    </section>
  );
};

export default LikedSongs;
