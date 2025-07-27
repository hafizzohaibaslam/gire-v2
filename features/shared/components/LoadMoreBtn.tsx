import Button from "./Button";

type LoadMoreBtnProps = {
  isLoadingMore: boolean;
  handleClick: () => void;
};

const LoadMoreBtn = ({ isLoadingMore, handleClick }: LoadMoreBtnProps) => {
  return (
    <Button
      disabled={isLoadingMore}
      onClick={handleClick}
      className="max-w-[300px] mx-auto"
    >
      {isLoadingMore ? "Loading..." : "Load More"}
    </Button>
  );
};

export default LoadMoreBtn;
