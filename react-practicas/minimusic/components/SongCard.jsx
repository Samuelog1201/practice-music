const SongCard = ({ song, onLike }) => {
  return (
    <article style={{ border: "1px solid #eee", padding: 8, borderRadius: 8 }}>
      <img src={song.cover} alt={`Portada de ${song.title}`} width="100%" height="auto" />
      <div style={{ marginTop: 6 }}>
        <strong>{song.title}</strong>
        <div style={{ fontSize: 14 }}>{song.artist}</div>
      </div>
      <button style={{ marginTop: 8 }} onClick={onLike}>Like</button>
    </article>
  );
};

export default SongCard;
