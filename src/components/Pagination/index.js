import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import useTheme from "hooks/theme";
import { PaginationWrapper } from "./Pagination.style";

export default function Pagination() {
  const { theme } = useTheme();

  return (
    <PaginationWrapper>
      <div className="pagination-content">
        <div className="left-arrow icons">
          <ArrowLeft2 size="14" color={theme.black} />
        </div>
        <div className="pagination-number">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>.....</span>
        </div>
        <div className="right-arrow icons">
          <ArrowRight2 size="14" color={theme.black} />
        </div>
      </div>
    </PaginationWrapper>
  );
}
