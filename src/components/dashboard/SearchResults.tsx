interface SearchResultsProps<T> {
  title: string;

  results: T[];

  getKey: (item: T) => string | number;

  renderItem: (item: T) => React.ReactNode;
}

function SearchResults<T>({
  title,
  results,
  getKey,
  renderItem,
}: SearchResultsProps<T>) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
          {results.length}
        </span>
      </div>

      {results.length === 0 ? (
        <p className="text-sm text-slate-500">No matching results found.</p>
      ) : (
        <div className="space-y-3">
          {results.map((item) => (
            <div
              key={getKey(item)}
              className="rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-blue-500"
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchResults;
