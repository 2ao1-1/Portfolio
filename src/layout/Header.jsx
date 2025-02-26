import { Logo } from "../components/Logo";
import { SiteMap } from "../components/NavbarMenu";
import { Name } from "../components/PageName";

export function Header({
  pageName,
  logo,
  name,
  status,
  birthYear,
  role,
  sitemap,
  social,
  contact,
  projects,
}) {
  return (
    <header className="container mx-auto ">
      <div className="w-full flex justify-between items-center py-4">
        <Logo logo={logo} />
        <Name pageName={pageName} />
        <SiteMap
          name={name}
          birthYear={birthYear}
          role={role}
          sitemap={sitemap}
          social={social}
          contact={contact}
          projects={projects}
          status={status}
        />
      </div>
    </header>
  );
}
