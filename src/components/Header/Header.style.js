import styledComponents from "styled-components";

export const HeaderWrapper = styledComponents.div`
    position:fixed;
    left:0;
    right:0;
    width:100%;
    top:0;
    padding:25px 0;
    z-index:100;
    transition:all ease .3s;

    &.header-background{
        background:${({ theme }) => theme.white};
        box-shadow:1px 1px 25px rgba(0,0,0,.2);
    }

    .header-content{
        display:flex;
        justify-content:space-between;

        .search-input{
            display:flex;   
            align-items:center;
            height:42px;
            border:1px solid ${({ theme }) => theme.grey1};
            padding:0 10px;
            border-radius:5px;
            margin-right:20px;
            width:100%;

          
    
            input{
                border:none;
                background:${({ theme }) => theme.transparent};
                color:${({ theme }) => theme.grey1};
                font-size:14px;
                font-weight:300;
                
                ::placeholder{
                    color:${({ theme }) => theme.grey1};
                    font-size:15px;
                    font-weight:300;
                }
            }
            svg{
                margin-right:10px;
            }
        }

        .header-actions-container{
            display:flex; 
            align-items:center;
    
            .header-actions-icon {
                position:relative;
    
                .badge-number{
                    position:absolute;
                    top:-3px;
                    right:-3px;
                }
            }
    
            .icon-1{
                margin-right:25px;
            }
    
            .icon-2{
                
            }
        }
    }
`;
