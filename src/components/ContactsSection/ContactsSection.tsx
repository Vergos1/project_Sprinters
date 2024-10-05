import { Tabs } from "../Tabs/Tabs";
import s from "./contactsSection.module.scss";

export const ContactsSection = () => {
  return (
    <div className={`${s.contacts} animate`}>
      <div className="container">
        <div className={s.wrapper}>
          <Tabs />
        </div>
      </div>
    </div>
  );
};
