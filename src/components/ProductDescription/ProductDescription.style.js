import styledComponents from "styled-components";

export const ProductDescriptionWrapper = styledComponents.div`

    padding-bottom:80px;

    .store-area{
        margin-top:20px;

        .store-details{
            display:flex;
            align-items:center;
            margin-bottom:10px;

            .store-name{
                margin-left:10px;
                font-size:14px;
                color:${({ theme }) => theme.grey1}
            }
        }

        .product-name{
            font-size:22px;
            line-height:30px;
            font-weight:500;
            margin-bottom:15px;
        }

        .product-meta{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-bottom:30px;
            font-size:17px;
            font-weight:300;
            color:${({ theme }) => theme.grey1};


            .product-rating{
                display:flex;
                 align-items:center;
                 svg{
                    fill:${({ theme }) => theme.gold};
                }
                p{
                    margin-left:10px;
                }
            }
        }
    }

    .product-info{
        margin-bottom:20px;

        .product-info-tab{
            display:flex;
            align-items:center;
            border-bottom:2px solid ${({ theme }) => theme.grey2};
            padding-bottom:15px;
            margin-bottom:20px;

            li{
                list-style:none;
                font-size:16px;;
                color: ${({ theme }) => theme.grey1};
                padding:0 30px 0 25px;
                font-weight:300;
                border-radius:3px;
                
                :first-child{
                    margin-right:10px;
                }
            }

            li.active{
                color: ${({ theme }) => theme.green};
                position:relative;
                font-weight:500;

                :after{
                    content:"";
                    position:absolute;
                    bottom:-17.1px;
                    left:0;
                    height:3px;
                    width:100%;
                    background: ${({ theme }) => theme.green};
                    border-radius:3px;

                }
            }
        }

        .about-prouduct-item{
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            justify-content:space-between;
            padding-bottom:20px;
            border-bottom:2px solid ${({ theme }) => theme.grey2};
            margin-bottom:30px;

            li{
                width:50%;
        
                :nth-child(even){
                    text-align:left;
                    width:45%;
                
                }
            }


        }
    }

    .product-description{
        border-bottom:2px solid ${({ theme }) => theme.grey2};
        margin-bottom:30px;

        .product-description-list{
            padding-left:26px;
            margin-bottom:20px;
            font-weight:300px;

            li{
                font-size:14px;
                line-height:20px;
                font-weight:300px;
            }
        }

        .product-description-list li, .support{
            color: ${({ theme }) => theme.grey1};
            font-size:14px;
            line-height:20px;
            font-weight:300px;
        }

        .support{
            margin-bottom:20px;
        }

        .see-more{
            margin-bottom:30px;
            display:flex;
            align-items:center;

            span{
                font-size:14px;
                color: ${({ theme }) => theme.green};
                margin-right:10px;
            }
        }
    }

    .shipping-info{
        border-bottom:2px solid ${({ theme }) => theme.grey2};
        padding-bottom:15px;
        margin-bottom:30px;

        .sub-section-title{
            margin-bottom:25px;
        }
    }

    

    .top-reviews{
        .section-header{
            display:flex;
            align-items:flex-end;
            justify-content:space-between;
            margin-bottom:30px;
            width:100%;
            
            p{
                color:${({ theme }) => theme.grey1};
                font-size:14px;
            }

            .sort-select{
                width:110px;
            }
        }

        .pagination-area{
            margin-bottom:50px;
            display:flex;
            align-items:center;
            justify-content:space-between;

            .see-more{
                color:${({ theme }) => theme.green};
                font-size:14px;
            }
        }
    }

    .product-recommendation{
        
        .product-recommendation-heading{
            display:flex;
            align-items:flex-end;
            justify-content:space-between;
            margin-bottom:20px;

            .sub-section-title{
                margin-bottom:0;
            }

            .section-link{
                font-size:14px;
            }
        }
    }
`;

export const SellerInfoWrapper = styledComponents.div`
    margin-bottom:30px;
    padding-bottom:30px;
    border-bottom:2px solid ${({ theme }) => theme.grey2};

    .sub-section-title{
        margin-bottom:25px;
    }

    .seller-info-content{
        display:flex;
        align-items:flex-start;
        width:100%;

        .store-display-picture{
            width:70px;
            height:70px;
            background:${({ theme }) => theme.grey1};
            border-radius:50%;
            margin-right:16px;
            flex-shrink: 0;
            position:relative;

            :before,:after{
                content:"";
                position:absolute;
                border-radius:50%;
            }

            :before{
                bottom:4px;
                right:4px;
                height:15px;
                width:15px;
                background: ${({ theme }) => theme.white};

            }

            :after{
                bottom:7px;
                right:7px;
                height:10px;
                width:10px;
                background: ${({ theme }) => theme.grey1};
            }
            
        }

        .store-display-info{
            width:100%;

            h5{
                font-weight:500;
                font-weight:18px;
                margin-bottom:10px;
            }

            .availability{
                display:flex;
                align-items:center;
                width:100%;
                margin-bottom:15px;

                span{
                    font-size:12px;
                    color:${({ theme }) => theme.grey1};
                    display:block;
                    margin-right:12px;
                    font-weight:300;

                    :last-child{
                        margin-right:0;
                    }
                }
            }
        }

        .visit-store-btn{
            display:flex;
            align-items:center;
            border:1.5px solid ${({ theme }) => theme.green};
            padding:7px 25px;
            border-radius:8px;
            width:fit-content;

            svg{

            }

            p{
                margin-left:10px;
                font-size:14px;
                color:${({ theme }) => theme.green};
            }
        }
    }
`;

export const ReviewsListWrapper = styledComponents.div`
    .review-rating{
        margin-bottom:35px;

        .sub-section-title{
            margin-bottom:20px;
        }

        .review-rating-content{
            display:flex;
            margin-bottom:20px;

            .average-rating{
                margin-right:20px;
                width: 45%;
                display:flex;
                justify-content:space-between;
                flex-direction:column;
                height:auto;

                h5 {    
                    margin-bottom:15px;

                    .big{
                        font-size:40px;
                        color:${({ theme }) => theme.dark1};
                    }

                    .small{
                        color:${({ theme }) => theme.grey1};
                        font-size:13px;
                    }
                }


                .full-stars{
                    margin-bottom:15px;

                    svg{
                        fill:${({ theme }) => theme.gold};
                        margin-right:2px
                    }
                }

                .total-reviews{
                    color:${({ theme }) => theme.grey1};
                    font-size:13px;
                }
            }

            .rating-breakdown{
                width:100%;

                li{
                    list-style:none;
                    display:flex;
                    align-items:center;
                    width:100%;
                    margin-bottom:10px;

                    :last-child{
                        margin-bottom:0;
                    }

                    .stars{
                        display:flex;
                        align-items:center;
                        margin-right:15px;

                        svg{
                            fill:${({ theme }) => theme.gold};
                        }

                        p{
                            margin-left:5px;
                            font-size:14px;
                            color:${({ theme }) => theme.grey1};
                        }   
                    } 
                }
            }
        }
    }

    .review-pictures{
        border-bottom:2px solid ${({ theme }) => theme.grey2};
        padding-bottom:30px;
        margin-bottom:30px;

        .sub-section-title{
            margin-bottom:20px;
        }
        
        .review-image-list{
            display:flex
            align-items:center;
            justify-content:space-between;
            width:100%;

            .review-image{
                height:78px;
                width:78px;
                border-radius:10px;
                position:relative;
                display:flex;
                align-items:center;
                justify-content:center;

                img{
                    width:100%;
                    height:100%;
                    border-radius:10px;
                }

                .sub-rate{
                    position:absolute;
                    color:${({ theme }) => theme.white};
                    z-index:2;
                }
            }

            .review-image-last{
                :after{
                    content:"";
                    position:absolute;
                    top:0;
                    left:0;
                    display:block;
                    background:rgba(0,0,0,.3);
                    height:100%;
                    width:75px;
                    border-radius:10px;
                }
            }
        }
    }

`;

export const ReviewGuage = styledComponents.div`
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;

    .rating-meter{
        height:10px;
        border-radius:50px;
        width:100%;
        background:${({ theme }) => theme.grey2};
        margin-right:15px;
        position:relative;

        :after{
            content:"";
            position:relative;
            height:10px;
            border-radius:50px;
            background:${({ theme }) => theme.green};
            width:${({ gauge }) => `${gauge ? gauge + 5 : 50}%`};
            bottom:0;
            right:0;
            display:flex;
        }
    }

    .actual-rating-figure{
        font-size:14px;
        font-weight:500;
        width:25px;
        text-align:right;
    }
`;
