// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

// Update the post
const updateChessPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-update-chess-post").value.trim();
  const content = document
    .querySelector("#content-update-chess-post")
    .value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); // When successful, load the dashboard page
    } else {
      alert("Failed to update a post."); // When unsuccessful, show alert
    }
  }
};

// Delete the post
const deleteChessPostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard"); // When successful, load the dashboard page
  } else {
    alert("Failed to delete a post."); // When unsuccessful, show alert
  }
};

// Event listeners
const updateChessPostButton = document.querySelector("#update-chess-post");

if (updateChessPostButton) {
  updateChessPostButton.addEventListener("click", updateChessPostFormHandler);
}

const deleteChessPostButton = document.querySelector("#delete-chess-post");

if (deleteChessPostButton) {
  deleteChessPostButton.addEventListener("click", deleteChessPostFormHandler);
}
