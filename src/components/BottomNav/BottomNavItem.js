import { object, string, bool } from "prop-types";
import { BottomNavItemWrapper } from "./BottomNav.style";


export default function BottomNavItem({ icon, text, active }) {
  return (
    <BottomNavItemWrapper active={active}>
      <div className="bottom-nav-icon">{icon}</div>
      <p className="menu-text">{text}</p>
    </BottomNavItemWrapper>
  );
}

BottomNavItem.propTypes = {
  icon: object,
  text: string,
  active: bool,
};
