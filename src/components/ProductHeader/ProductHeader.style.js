import styledComponents from "styled-components";

export const ProductHeaderWrapper = styledComponents.div`
    position:fixed;
    left:0;
    right:0;
    top:0;
    width:100%;
    padding:25px 0;
    background:${({ theme }) => theme.white};
    z-index:100;

    .header-content{
        display:flex;
        justify-content:space-between;

        .header-actions-container{
            display:flex; 
            align-items:center;
            justify-content:end;
    
            .header-actions-icon {
                position:relative;
                .badge-number{
                    position:absolute;
                    top:-3px;
                    right:-3px;
                }
            }
    
            .icon-1, .icon-2{
                margin-right:20px;
            }
        }
    }
`;
