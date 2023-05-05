import { string } from "prop-types";
import { SingleListWrapper } from "./SingleList.style";

export default function SingleList({ title, value }) {
  return (
    <SingleListWrapper>
      <span className="title">{title}:</span>
      <span className="value">{value}</span>
    </SingleListWrapper>
  );
}

SingleList.propTypes = {
  title: string,
  value: string,
};
