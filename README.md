The HTML code sets up a basic structure for a blog website with three main sections: Home, Blog List, and Contact Us. It includes navigation links in the header and defines the content layout for each section.

Header Navigation: Provides links to navigate between the Home, Blog List, and Contact Us pages. Each link triggers a JavaScript function to control the display of corresponding sections.

Main Content Sections:
  Home Page: Displays a welcome message and a link to the Blog List page.
  Blog List Page: Includes a search bar, displays blog posts dynamically, and provides pagination for navigating through multiple pages of posts.
  Contact Us Page: Presents a contact form for users to send messages.

External style.css and script.js file is linked to an HTML file for better looks and functionality.


This JavaScript code manages the rendering of blog posts, pagination, search functionality, and page navigation for a blog website. Here's a breakdown:

  blogPosts: An array of objects representing blog posts, each containing an id, title, date, author, and content.
  
  renderPosts(posts): Renders blog posts onto the webpage. It creates HTML elements for each post, including title, date, author, and truncated content. Clicking on the post title triggers the viewPost function.
  
  renderPagination(totalPages): Renders pagination buttons based on the total number of pages. Each button is assigned an event listener to navigate to the corresponding page when clicked.
  
  goToPage(pageNumber): Updates the current page and renders the corresponding posts and pagination buttons based on the page number.
  
  Search Functionality: Listens for input in the search bar and filters blog posts based on the entered search term. It then renders the filtered posts and pagination.
  
  showPage(pageId): Controls the visibility of different sections (Home, Blog List, Contact) based on the pageId.
