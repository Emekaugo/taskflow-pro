import { useMemo, useState } from "react";

function useSearch<T>(
  items: T[],
  searchFunction: (item: T, query: string) => boolean,
) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return items;
    }

    return items.filter((item) =>
      searchFunction(item, query.trim().toLowerCase()),
    );
  }, [items, query, searchFunction]);

  function clearSearch() {
    setQuery("");
  }

  return {
    query,

    setQuery,

    clearSearch,

    filteredItems,

    hasQuery: query.trim().length > 0,

    resultCount: filteredItems.length,
  };
}

export default useSearch;
