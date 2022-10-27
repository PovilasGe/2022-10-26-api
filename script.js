fetch('https://jsonplaceholder.typicode.com/posts?_limit=15&_embed=comments&_expand=user')
  .then(res => res.json())
  .then(posts => {
    let postsList = document.querySelector('#posts-list');

    posts.map(post => {
      let postItem = document.createElement('div');
      postItem.classList.add('post-item');

      let postTitleElement = document.createElement('h2');
      postTitleElement.classList.add('post-title');
      postTitleElement.textContent = post.title;

      let postAuthorElement = document.createElement('span');
      postAuthorElement.classList.add('post-author');
      postAuthorElement.innerHTML = `Author: <a href="./user.html">${post.user.name}</a>`;

      let postContentElement = document.createElement('p');
      postContentElement.classList.add('post-content');
      postContentElement.textContent = post.body;

      let commentsWrapperElement = document.createElement('div');
      commentsWrapperElement.classList.add('comments-wrapper');

      let commentsSectionTitle = document.createElement('h3');
      commentsSectionTitle.classList.add('comments-section-title');
      commentsSectionTitle.textContent = 'Comments:';

      let commentsListElement = document.createElement('div');
      commentsListElement.classList.add('comments-list');
      
      post.comments.map(comment => {
        let commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');

        commentItem.innerHTML = `<h4 class="comment-title">${comment.name}</h4>
                                 <span class="comment-author">Commented by: ${comment.email}</span>
                                 <p class="comment-content">${comment.body}</p>`;

        commentsListElement.append(commentItem);
      })

      commentsWrapperElement.append(commentsSectionTitle, commentsListElement);

      postItem.append(postTitleElement, postAuthorElement, postContentElement, commentsWrapperElement);
      postsList.append(postItem);
    })
  })