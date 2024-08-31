// Fetch and render users
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const usersContainer = document.getElementById("users");
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.className = "user";
      userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>
            `;
      usersContainer.appendChild(userDiv);
    });
  });

// Fetch and render posts
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const postsContainer = document.getElementById("posts");
    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.className = "post";
      postDiv.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `;
      postsContainer.appendChild(postDiv);
    });
  });

// Fetch and render comments
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((comments) => {
    const commentsContainer = document.getElementById("comments");
    comments.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      commentDiv.innerHTML = `
                <p><strong>${comment.name}</strong> (${comment.email})</p>
                <p>${comment.body}</p>
            `;
      commentsContainer.appendChild(commentDiv);
    });
  });
