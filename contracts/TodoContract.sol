// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;

contract TodoContract {
  uint public taskCount = 0;

  struct Task {
    uint index;
    string taskName;
    bool isComplete;
    string createdAt;
  }

  mapping(uint => Task) public todos;
  event TaskCreadted(string task, uint indexed taskId);
  event TaskUpdated(string task, uint taskId);
  event TaskIsCompleteToggled(string task, uint indexed taskId, bool isComplete, string indexed createdAt);
  event TaskDeleted(uint taskId);

  function createTask (string memory _taskName, string memory _createdAt) external {
    todos[taskCount] = Task(taskCount, _taskName, false, _createdAt);
    taskCount++;
    emit TaskCreadted(_taskName, taskCount - 1);
  }

  function updateTask(uint _taskId, string memory _taskName) external {
    Task memory currTask = todos[_taskId];
    todos[_taskId] = Task(_taskId, _taskName, currTask.isComplete, currTask.createdAt);
    emit TaskUpdated(_taskName, _taskId);
  }

  function deleteTask(uint _taskId) external {
    delete todos[_taskId];
    emit TaskDeleted(_taskId);
  }

  function toggleComplete (uint _taskId) external {
    Task memory currTask = todos[_taskId];
    todos[_taskId] = Task(_taskId, currTask.taskName, !currTask.isComplete, currTask.createdAt);

    emit TaskIsCompleteToggled(currTask.taskName, _taskId, !currTask.isComplete, currTask.createdAt);
  }
}
