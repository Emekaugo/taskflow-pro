import { FaMagnifyingGlass } from "react-icons/fa6";

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

function ProjectSearch({ value, onChange }: ProjectSearchProps) {
  return (
    <div className="relative w-full max-w-md">
      <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search projects..."
        className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-blue-500"
      />
    </div>
  );
}

export default ProjectSearch;
