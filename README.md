<img src="https://github.com/user-attachments/assets/63037fd7-6cda-4b23-a5ed-d4eb251da419" alt="Image Alt Text" width="1000">

# Kanban Board Project Overview

This project implements a basic, interactive Kanban board using HTML, CSS, and JavaScript. It allows users to manage tasks across multiple boards, simulating a simple workflow.

## Key Features

* **Board Creation:**
    * Users can create new boards by clicking the "+" button.
    * Each board includes a "delete" button to remove it.
* **Task Management:**
    * Tasks can be added to individual boards by clicking the "+ Add item" button within each board.
    * A modal allows users to input task descriptions.
    * Tasks include edit and delete functionalities, represented by icon buttons.
    * Each task has a time stamp that shows when it was created.
* **Drag-and-Drop Functionality:**
    * Tasks can be dragged and dropped between boards, facilitating movement between workflow stages.
    * Drag and drop functionality is limited to the content area of the boards.
* **Modals:**
    * Modals are used for:
        * Creating new boards.
        * Adding new tasks.
        * Editing existing tasks.

## Implementation Details

* The project utilizes JavaScript to dynamically create and manipulate DOM elements.
* Event listeners are used to handle user interactions, such as button clicks and drag-and-drop events.
* Modals are implemented using CSS and JavaScript to show and hide content.
* The project uses class selectors to manipulate the dom elements.
* The project uses inline event handlers.

## Potential Improvements

* **Persistence:** Implement local storage or a backend to save board and task data.
* **Visual Drag Feedback:** add visual feedback while dragging items.
* **Error Handling:** add error handling to improve the reliability of the application.
* **Accessibility:** improve the accessibility of the application.
* **Refactoring:** improve the code readability and maintainability.
* **Use of data attributes:** use data attributes to store data on the dom elements.

This Kanban board provides a fundamental structure for task management and workflow visualization.
