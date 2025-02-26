import { Span } from "../components/Span";
import { SubHead } from "./SubHead";
import { ContactsLinks } from "../components/ContactsLinks";
import { SocialLinks } from "../components/SocialLinks";

export function Sidebar({ bio, eduField, eduUni, contact, social }) {
  return (
    <section className="md:col-span-2 float-right">
      <div className="border-l pl-4 sticky top-0">
        <SubHead title="Who I am?" />
        <p className="text-justify first-letter:text-5xl  first-letter:float-left pb-4 border-b">
          {bio}
        </p>
        <div className="py-4 border-b">
          <Span text="Education" />
          <p>
            <i>{eduField}</i>, <i>{eduUni}</i>
          </p>
        </div>
        <div className="py-4 border-b">
          <ContactsLinks contact={contact} delay="0.8" />
        </div>
        <div className="py-4 border-b">
          <SocialLinks social={social} delay="0.9" />
        </div>
      </div>
    </section>
  );
}
