import { useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa6";

import {
  filterProjectsByStatus,
  searchProjects,
  type Project,
  type ProjectStatus,
} from "../../data/projects";
import ProjectGrid from "../../components/project/ProjectGrid";
import ProjectSearch from "../../components/project/ProjectSearch";
import useApp from "../../contexts/useApp";

function Projects() {
  const { projects, setProjects } = useApp();

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedStatus, setSelectedStatus] = useState<"All" | ProjectStatus>(
    "All",
  );

  const filteredProjects = useMemo(() => {
    const searchedProjects = searchProjects(projects, searchQuery);

    return filterProjectsByStatus(searchedProjects, selectedStatus);
  }, [projects, searchQuery, selectedStatus]);

  function handleDeleteProject(id: number) {
    setProjects((previousProjects) =>
      previousProjects.filter((project: { id: number }) => project.id !== id),
    );
  }

  function handleAddProject() {
    const newProject: Project = {
      id: Date.now(),

      name: `New Project ${projects.length + 1}`,

      description: "New project created from the Projects page.",

      status: "Planning",

      dueDate: new Date().toISOString().split("T")[0],

      members: 1,
    };

    setProjects((previousProjects) => [newProject, ...previousProjects]);
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <section className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Projects</h1>

          <p className="mt-2 text-slate-400">
            Manage all your active projects in one place.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddProject}
          className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <FaPlus />

          <span>New Project</span>
        </button>
      </section>

      {/* Search */}

      <ProjectSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />

      {/* Grid */}

      <ProjectGrid projects={filteredProjects} onDelete={handleDeleteProject} />
    </div>
  );
}

export default Projects;
