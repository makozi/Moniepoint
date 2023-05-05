import styledComponents from "styled-components";

export const ProductSlideWrapper = styledComponents.div`
    height:40vh;
    width:100%;

    .featured-image{
        background:${({ theme }) => theme.grey1};
        height:100%;
        width:100%;
        border-radius:12px;
        position:relative;

        .primary-img{
            height:100%;
            width:100%;
            object-fit:cover;
            border-radius:12px;
        }

        .image-options{
            position:absolute;
            top:15px;
            left:15px;

            .image-option-item{
                height:40px;
                width:40px;
                margin-bottom:15px;
                border-radius:6px;

                img{
                    height:100%;
                    width:100%;
                    border-radius:6px;
                }
            }

        }

        .image-gallery{
            height:100%;
            width:100%;
        }
    }
`;
