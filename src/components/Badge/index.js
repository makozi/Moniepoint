import { string } from "prop-types";
import styledComponents from "styled-components";

const BadgeWrapper = styledComponents.div`
    width:18px;
    height:16px;
    border-radius:5px;
    background:${({ theme }) => theme.red};
    color:${({ theme }) => theme.white};
    font-size:8px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default function Badge({ value }) {
  return <BadgeWrapper className="badge-number">{value}</BadgeWrapper>;
}

Badge.propTypes = {
  value: string,
};
