import styledComponents from "styled-components";

export const BottomNavWrapper = styledComponents.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    background:${({ theme }) => theme.white};
    box-shadow:1px 1px 80px rgba(10,10,10,.3);
    padding:15px 0;

    .bottom-nav-content{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

`;

export const BottomNavItemWrapper = styledComponents.div`
    .bottom-nav-icon{
        margin-bottom:8px;

        display:flex;
        justify-content:center;
        align-items:center;
    }

    .menu-text{
        text-align:center;
        font-weight:${({ active }) => (active ? "500" : "300")};
        font-size:13px;
        color:${({ active, theme }) => (active ? theme.black : theme.grey1)};
    }
`;
