import SongCard from "./SongCard";

const SongGrid = ({ songs, onLike }) => {
  return (
    <section>
      <h2>Resultados</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
        {songs.map((song) => (
          <SongCard key={song.id} song={song} onLike={() => onLike(song)} />
        ))}
      </div>
    </section>
  );
};

export default SongGrid;
