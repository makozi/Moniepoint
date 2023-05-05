import styledComponents from "styled-components";

export const AppWrapper = styledComponents.div`
  padding: 0 20px;
  width: 100%;
`;

export const DotWrapper = styledComponents.div`
    border-radius: 10px;
    padding:10px;

    .slick-active{
        width:15px !important;

        .dot-li-content{
            width:15px;
            border-radius: 10px;
            background:${({ theme }) => theme.dark1};
        }
    }
`;

export const DotContent = styledComponents.div`
    background:${({ theme }) => theme.grey1};
    width: 5px;
    height: 5px;
    border-radius:50%;
`;
