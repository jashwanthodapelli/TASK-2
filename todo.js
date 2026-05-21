const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

const notification = document.getElementById("notification");

// Add Task
function addTask(){

    const task = taskInput.value.trim();

    if(task === ""){

        showNotification("⚠ Please enter a task!", "delete");

        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Left section
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("task-left");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Task Text
    const span = document.createElement("span");
    span.innerText = task;
    span.classList.add("task-text");

    // Complete functionality
    checkbox.addEventListener("change", function(){

        span.classList.toggle("completed");

        updateStats();

        if(checkbox.checked){

            showNotification("🎉 Task Completed!", "complete");

        }

    });

    // Delete Button
    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(){

        li.remove();

        updateStats();

        showNotification("🗑 Task Deleted Successfully!", "delete");
    });

    // Append
    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Update Stats
    updateStats();

    // Success Notification
    showNotification("✅ Task Added Successfully!", "success");
}

// Enter Key Support
taskInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        addTask();
    }

});

// Update Stats
function updateStats(){

    const total = document.querySelectorAll("#taskList li").length;

    const completed = document.querySelectorAll(".completed").length;

    totalTasks.innerText = total;

    completedTasks.innerText = completed;
}

// Notification Function
function showNotification(message, type){

    notification.style.display = "block";

    notification.className = "";

    notification.classList.add(type);

    notification.innerText = message;

    setTimeout(() => {

        notification.style.display = "none";

    }, 2500);
}

// Go Back
function goBack(){

    window.location.href = "index.html";
}