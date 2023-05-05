import styledComponents from "styled-components";

export const PurchaseBtnWrapper = styledComponents.div`
    position:fixed;
    bottom:0;
    background:${({ theme }) => theme.white};
    box-shadow:1px 1px 20px rgba(0,0,0,.15);
    left:0;
    width:100%;
    padding:20px 0;

    .purchase-btn-content{
        display:flex;
        align-items:flex-end;
        justify-content:space-between;

        .price-section{
            p{
                margin-bottom:8px;
                color:${({ theme }) => theme.grey1};
                font-size:12px;
                font-weight:300;
            }
            h5{
                color:${({ theme }) => theme.green};
                font-size:24px;
                font-weight:500;
            }
        }

        .product-cta{
            display:flex;
            align-items:center;
            height:52px;
            border-radius:8px;

            .cart{
                background:${({ theme }) => theme.green};
                height:100%;
                display:flex;
                align-items:center;
                padding:0 17px;
                border-top-left-radius:8px;
                border-bottom-left-radius:8px;

                p{
                    color:${({ theme }) => theme.white};
                    font-size:16px;
                }

                svg{
                    margin-right:8px;
                }
            }
        }

        .buy-now{
            background:${({ theme }) => theme.dark1};
            height:100%;
            display:flex;
            align-items:center;
            text-align:center;
            padding:0 25px;
            border-top-right-radius:8px;
            border-bottom-right-radius:8px;

            p{
                color:${({ theme }) => theme.white};
            }
        }
    }

`;
