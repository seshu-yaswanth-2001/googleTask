import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import "./pagination.css";

const Pagination = () => {
  const { state, setState } = useContext(TaskContext);

  const totalPages = Math.ceil(state.tasks.length / state.taskPerPage);
  const totalStarPages = Math.ceil(state.starTasks.length / state.taskPerPage);

  if (state.active === "all" && state.tasks.length <= 4) {
    return null;
  }

  if (state.active === "starred" && state.starTasks.length <= 4) {
    return null;
  }

  const pages = [];

  for (
    let i = 1;
    i <= (state.active === "all" ? totalPages : totalStarPages);
    i++
  ) {
    pages.push(i);
  }

  return (
    <div className="pages">
      {pages.map((page, index) => (
        <button
          className={`page ${
            (state.active === "all"
              ? state.currentPage
              : state.currentPageStar) === page
              ? "selected"
              : ""
          }`}
          key={index}
          onClick={() =>
            setState((prev) => ({
              ...prev,
              ...(state.active === "all"
                ? { currentPage: page }
                : { currentPageStar: page }),
            }))
          }
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
