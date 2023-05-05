import styledComponents from "styled-components";

export const PaginationWrapper = styledComponents.div`
  .pagination-content{
    display:flex;
    align-items:center;

    .icons{
      border-radius:50%;
      width:27px;
      height:27px;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    .left-arrow{
      margin-right:17px;
      background:${({ theme }) => theme.grey2};
    }

    .right-arrow{
      box-shadow:1px 1px 20px rgba(0,0,0,.15);
    }

    .pagination-number{
      display:flex;
      align-items:center;

      span{
        cursor:pointer;
        margin-right:16px;
        font-size:14px;
        color:${({ theme }) => theme.grey1};
      }

      span.active{
        color:${({ theme }) => theme.green};
      }
    }
  }
`;
