export const handleDelete = (
  objId: string,
  isDeleting: boolean,
  deleteFn: (objId: string) => void
) => {
  if (isDeleting) return;
  if (window.confirm(`Are you sure you want to delete this item?`)) {
    deleteFn(objId);
  }
};
