import { Data } from "../Data";

import { Header } from "../layout/Header";
import { HeadBar } from "../layout/HeadBar";
import { Role } from "../layout/Role";
import { Sidebar } from "../layout/Sidebar";
import { ShowSection } from "../layout/ShowSection";
import { ShowSkills } from "../layout/ShowSkills";
import { Link } from "react-router-dom";
import MouseFollower from "../components/MouseFollower";

export default function Index() {
  return (
    <>
      {/* <MouseFollower /> */}
      <div className="z-50 relative px-4 cursor-default">
        {/* header */}
        <Header
          pageName="My Portfolio"
          logo={Data.images.logo}
          name={Data.name}
          status={Data.status}
          birthYear={Data.birthYear}
          role={Data.role}
          sitemap={Data.siteMap}
          social={Data.social.links}
          contact={Data.social.contacts}
          projects={Data.projects}
        />
        <HeadBar
          name={Data.name}
          city={Data.location.city}
          country={Data.location.country}
        />
        <Role role={Data.role} />
      </div>
      <main className="z-50 relative px-4 cursor-default">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-8 gap-4 py-8">
          <ShowSection projects={Data.projects} />
          <Sidebar
            bio={Data.bio}
            eduField={Data.education.field}
            eduUni={Data.education.uni}
            contact={Data.social.contacts}
            social={Data.social.links}
          />
        </div>
        <ShowSkills skills={Data.skills} />
      </main>
      <footer className="container mx-auto pt-4 border-t z-30 relative cursor-default">
        <div className="text-center mt-4 text-sm flex justify-center gap-8 items-center pb-4">
          <span>{Data.name}™, 2025</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="stock-2 "
            >
              <path d="M6 3h12l4 6-10 13L2 9Z" />
              <path d="M11 3 8 9l4 13 4-13-3-6" />
              <path d="M2 9h20" />
            </svg>
          </span>
          <span>&copy; All Rights Reserved</span>
        </div>
      </footer>
    </>
  );
}
