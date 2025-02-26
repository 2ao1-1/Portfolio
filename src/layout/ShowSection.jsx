import { Link } from "react-router-dom";
import { ProjectPresentation } from "../layout/ProjectPresentation";

export function ShowSection({ projects }) {
  return (
    <section className="md:col-span-6 col-span-1 border-b pb-8">
      <div className=" relative">
        <ProjectPresentation projects={projects} />
      </div>
      <div className="py-4">
        <button className="slideUp border px-4 py-1 rounded-full float-right">
          <Link to="/projects">See In Details</Link>
        </button>
      </div>
    </section>
  );
}
