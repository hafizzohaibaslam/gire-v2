import Button from "./Button";

type LoadMoreBtnProps = {
  isLoadingMore: boolean;
  handleClick: () => void;
};

const LoadMoreBtn = ({ isLoadingMore, handleClick }: LoadMoreBtnProps) => {
  return (
    <Button disabled={isLoadingMore} onClick={handleClick}>
      {isLoadingMore ? "Loading..." : "Load More"}
    </Button>
  );
};

export default LoadMoreBtn;
