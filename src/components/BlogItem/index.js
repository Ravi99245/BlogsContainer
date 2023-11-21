import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="Item-link">
      <div className="blog-Item">
        <img src={imageUrl} className="image" alt={`item${id}`} />
        <div className="topics-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile">
            <img src={avatarUrl} className="avatar" alt={author} />
            <p className="name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
