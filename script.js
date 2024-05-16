const blogPosts = [
  {
    id: 1,
    title: "First Blog Post",
    date: "May 15, 2024",
    author: "Suraj",
    content:
      "Welcome to our first blog post. This is where you can get know about football news.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    date: "May 14, 2024",
    author: "Suraj",
    content: "This is the second blog post. News about Tech.",
  },
  {
    id: 3,
    title: "Third Blog Post",
    date: "May 13, 2024",
    author: "Suraj",
    content: "Here's another post.",
  },
];

let currentPage = 1;
const postsPerPage = 2;
let currentPostId = null;

function renderPosts(posts) {
  const blogList = document.getElementById("blog-list");
  blogList.innerHTML = "";
  posts.forEach((post) => {
    const article = document.createElement("article");
    article.innerHTML = `
                <h2 onclick="viewPost(${post.id})" style="cursor:pointer;">${
      post.title
    }</h2>
                <p class="meta">Posted on ${post.date} by ${post.author}</p>
                <p>${post.content.substring(0, 100)}</p>
            `;
    blogList.appendChild(article);
  });
}

function renderPagination(totalPages) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => goToPage(i));
    pagination.appendChild(button);
  }
}

function goToPage(pageNumber) {
  currentPage = pageNumber;
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  renderPosts(blogPosts.slice(start, end));
  renderPagination(Math.ceil(blogPosts.length / postsPerPage));
}

document.getElementById("search").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm)
  );
  renderPosts(filteredPosts.slice(0, postsPerPage));
  renderPagination(Math.ceil(filteredPosts.length / postsPerPage));
});

document.addEventListener("DOMContentLoaded", () => {
  goToPage(1);
});

function showPage(pageId) {
  const pages = ["home-page", "blog-list-page", "contact-page"];
  pages.forEach((page) => {
    document.getElementById(page).style.display =
      page === pageId ? "block" : "none";
  });
}
