const SearchBar = ({ searchText, onSearchTextChange, onSearch, onClear }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") onSearch();
  };

  return (
    <section style={{ display: "flex", gap: 8, marginBottom: 12 }}>
      <input
        placeholder="Artista o canción"
        value={searchText}
        onChange={onSearchTextChange}
        onKeyDown={handleKeyDown}
        style={{ flex: 1, padding: 8 }}
      />
      <button onClick={onSearch}>Buscar</button>
      <button onClick={onClear}>Limpiar</button>
    </section>
  );
};

export default SearchBar;
