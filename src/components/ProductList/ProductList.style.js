import styledComponents from "styled-components";

export const ProductListWrapper = styledComponents.section`
    background:${({ theme }) => theme.grey2};
    padding:30px 0 80px 0;


    .section-heading{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:30px;

        .section-link{
            color:${({ theme }) => theme.green};
            font-weight:300;
            font-size:14px;
        }
    }

    .products{
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;

        .products-item{
            width:47%;
            margin-bottom:35px;
        }
    }
`;

export const ProductListItemWrapper = styledComponents.div`
    width:100%;
    position:relative;

    .fav-action{
        position:absolute;
        right:10px;
        top:10px;
    }


    .fav-action.fav-active{
        svg{
            fill:${({ theme }) => theme.red};
        }
    }

    .product-image{
        width:100%;
        height:120px;
        background:${({ theme }) => theme.grey2};
        border-top-left-radius:5px;
        border-top-right-radius:5px;

        img{
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:4px;
        }
    }

    .product-item-content{
        // background:${({ theme }) => theme.white};
        padding:15px 10px;

        .product-item-description{
            .product-type{
                color:${({ theme }) => theme.grey1};
                font-size:12px;
                margin-bottom:5px;
                font-weight:300;
            }

            .product-name{
                font-size:14px;
                line-height:20px;
                font-weight:500;
                margin-bottom:18px;
            }
        }

        .product-meta{
            display:flex;
            align-items:center;
            justify-content:space-between;
            color:${({ theme }) => theme.grey1};

            .product-price{
                font-size:16px;
                color:${({ theme }) => theme.green};
            }

            .product-rating{
                display:flex;
                align-items:center;
                p{
                    font-size:12px;
                     font-weight:300;
                }
               svg{
                fill:${({ theme }) => theme.gold};
                margin-right:4px;
                margin-bottom:1px;
               }
            }
        }
    }
`;

export const ProductItemWrapper = styledComponents.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;

    .products-item{
        width:47%;
        margin-bottom:35px;
    }
`;
