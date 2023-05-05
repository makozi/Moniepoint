import styledComponents from "styled-components";

export const SingleListWrapper = styledComponents.li`
    list-style:none;
    display:flex;
    align-items:center;
    font-size:14px;
    margin-bottom:15px;
    width:100%;

    .title{
        color: ${({ theme }) => theme.grey1};
        margin-right:15px;
        font-weight:400;
    }

    .value{
        font-weight:500;
    }
`;
