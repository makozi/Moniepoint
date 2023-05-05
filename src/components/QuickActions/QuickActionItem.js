import { object, string } from "prop-types";
import { QuickActionItemWrapper } from "./QuickActions.style";

export default function QuickActionItem({ text, icon }) {
  return (
    <QuickActionItemWrapper>
      <div className="icon-container">{icon}</div>
      <h6 className="quick-action-text">{text}</h6>
    </QuickActionItemWrapper>
  );
}

QuickActionItem.propTypes = {
  text: string,
  icon: object,
};
