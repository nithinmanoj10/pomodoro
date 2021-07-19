import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TaskNavBar extends Component {
  render() {
    return (
      <nav className="task-nav-bar">
        <ul className="task-nav-bar__list">
          <li className="task-nav-bar__list__item">
            <Link
              href="javascript:void(0)"
              className="task-nav-bar__list__item__link"
              to="/taskmanager/"
            >
              Tasks
            </Link>
          </li>
          <li className="task-nav-bar__list__item">
            <Link
              href="javascript:void(0)"
              className="task-nav-bar__list__item__link"
              to="/taskmanager/completed"
            >
              Completed
            </Link>
          </li>
          <li className="task-nav-bar__list__item">
            <Link
              href="javascript:void(0)"
              className="task-nav-bar__list__item__link"
              to="/taskmanager/tags"
            >
              Tags
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
