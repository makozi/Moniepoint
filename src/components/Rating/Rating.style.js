import styledComponents from "styled-components";

export const CustomerRatingWrapper = styledComponents.section`
    margin-bottom:30px;
    padding-bottom:30px;
    border-bottom:1px solid ${({ theme }) => theme.grey2};

    .top{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:16px;

        .customer-info{
            display:flex;
            align-items:center;

            .customer-display{
                width:25px;
                height:25px;
                border-radius:50%;
                background:${({ theme }) => theme.grey1};
                margin-right:10px;
            }
            .customer-name{
                font-size:14px;
                font-weight:500;
                color:${({ theme }) => theme.dark1};
            }   
        }

        .customer-rating{
            display:flex;
            align-items:center;
            font-size:14px;
            font-weight:500;

            svg{
                fill:${({ theme }) => theme.gold};
            }
            p{
                margin:0 10px 0 5px;
            }
        }
    }

    .hightligh-tags{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:100%;
        margin-bottom:16px;

        .hightligh-tag-item{
            font-size:10px;  
            background:${({ theme }) => theme.green2};
            color:${({ theme }) => theme.green};
            border:1px solid ${({ theme }) => theme.green};
            padding:5px 7px;
            border-radius:20px;
        }
    }

    .customer-review-text{
        font-size:14px; 
        line-height:20px;
        font-weight:400;
        margin-bottom:16px;
        color:${({ theme }) => theme.dark1};
    }

    .customer-review-action{
        display:flex;
        align-items:center;
        justify-content:space-between;

        .helpful{
            display:flex;
            align-items:center;
            font-size:14px;
            color:${({ theme }) => theme.green};

            svg{
                fill:${({ theme }) => theme.green};
                margin-right:5px;
            }
        }

        .customer-review-day{
            font-size:12px;
            color:${({ theme }) => theme.grey1};
        }
    }

`;
