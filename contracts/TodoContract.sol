// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;

contract TodoContract {
    uint256 public taskCount = 0;

    struct Task {
        uint256 index;
        string taskName;
        bool isComplete;
        string createdAt;
    }

    mapping(uint256 => Task) public todos;
    event TaskCreadted(string task, uint256 indexed taskId);
    event TaskUpdated(string task, uint256 taskId);
    event TaskIsCompleteToggled(
        string task,
        uint256 indexed taskId,
        bool isComplete,
        string indexed createdAt
    );
    event TaskDeleted(uint256 taskId);

    function getTasks() external view returns (Task[] memory values) {
        Task[] memory tasks = new Task[](taskCount);

        for (uint256 i = 0; i < taskCount; i++) {
            tasks[i] = todos[i];
        }

        return tasks;
    }

    function createTask(string memory _taskName, string memory _createdAt)
        external
    {
        todos[taskCount] = Task(taskCount, _taskName, false, _createdAt);
        taskCount++;
        emit TaskCreadted(_taskName, taskCount - 1);
    }

    function updateTask(uint256 _taskId, string memory _taskName) external {
        Task memory currTask = todos[_taskId];
        todos[_taskId] = Task(
            _taskId,
            _taskName,
            currTask.isComplete,
            currTask.createdAt
        );
        emit TaskUpdated(_taskName, _taskId);
    }

    function deleteTask(uint256 _taskId) external {
        delete todos[_taskId];
        emit TaskDeleted(_taskId);
    }

    function toggleComplete(uint256 _taskId) external {
        Task memory currTask = todos[_taskId];
        todos[_taskId] = Task(
            _taskId,
            currTask.taskName,
            !currTask.isComplete,
            currTask.createdAt
        );

        emit TaskIsCompleteToggled(
            currTask.taskName,
            _taskId,
            !currTask.isComplete,
            currTask.createdAt
        );
    }
}
