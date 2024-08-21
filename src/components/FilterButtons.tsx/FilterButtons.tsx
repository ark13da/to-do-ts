import React from "react";
import { FilterButtonProps } from "../../types/types";
import styles from "./FilterButtons.module.css";

const FilterButtons: React.FC<FilterButtonProps> = ({ filter, setFilter }) => {
  return (
    <div className={styles.filterButtons}>
      <button
        className={filter === "all" ? styles.active : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "completed" ? styles.active : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={filter === "incomplete" ? styles.active : ""}
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};

export default FilterButtons;
