import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import { Span } from "./Span";
import { SiteMapMenu } from "./SiteMapMenu";

export function SiteMap({
  name,
  birthYear,
  role,
  status,
  sitemap,
  social,
  contact,
  projects,
}) {
  return (
    <>
      <div className="w-1/4 hidden md:flex flex-col">
        <SiteMapMenu sitemap={sitemap} projects={projects} />
      </div>

      <Menu
        name={name}
        birthYear={birthYear}
        role={role}
        status={status}
        sitemap={sitemap}
        social={social}
        contact={contact}
        projects={projects}
      />
    </>
  );
}
