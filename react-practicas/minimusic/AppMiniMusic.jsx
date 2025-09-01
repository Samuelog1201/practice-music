import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SongGrid from "./components/SongGrid";
import LikedSongs from "./components/LikedSongs";

const AppMiniMusic = () => {
  const [searchText, setSearchText] = useState("");
  const [songs, setSongs] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");

  useEffect(() => {
    if (hasError) setHasError("");
  }, [searchText]);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = async () => {
    const query = searchText.trim();
    if (query.length === 0) {
      setSongs([]);
      setHasError("Escribe algo para buscar.");
      return;
    }
    setIsLoading(true);
    setHasError("");
    setSongs([]);
    try {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=12`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al buscar");
      const data = await response.json();
      const normalized = (data.results || []).map((item) => ({
        id: item.trackId,
        title: item.trackName,
        artist: item.artistName,
        cover: item.artworkUrl100,
      }));
      setSongs(normalized);
      if (normalized.length === 0) setHasError("No hay resultados.");
    } catch (e) {
      setHasError("Ocurrió un error. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearResults = () => {
    setSongs([]);
    setHasError("");
  };

  const handleLike = (song) => {
    const already = likedSongs.some((s) => s.id === song.id);
    if (!already) setLikedSongs([...likedSongs, song]);
  };

  const handleRemoveLiked = (songId) => {
    setLikedSongs(likedSongs.filter((s) => s.id !== songId));
  };

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 16 }}>
      <h1>MiniMusic</h1>

      <SearchBar
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
        onSearch={handleSearch}
        onClear={handleClearResults}
      />

      {isLoading && <p>Cargando...</p>}
      {!isLoading && hasError && <p>{hasError}</p>}

      {!isLoading && !hasError && songs.length > 0 && (
        <SongGrid songs={songs} onLike={handleLike} />
      )}

      <LikedSongs songs={likedSongs} onRemove={handleRemoveLiked} />
    </main>
  );
};

export default AppMiniMusic;
