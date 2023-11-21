import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogDataItem: {}}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(match, id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogData = await response.json()

    const updatedBlog = {
      id: blogData.id,
      title: blogData.title,
      imageUrl: blogData.image_url,
      avatarUrl: blogData.avatar_url,
      author: blogData.author,
      content: blogData.content,
      topic: blogData.topic,
    }
    this.setState({blogDataItem: updatedBlog, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogDataItem} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogDataItem

    return (
      <div className="blog-item-container">
        <h1 className="heading">{title}</h1>
        <div className="profile-blog">
          <img src={avatarUrl} className="avatar" alt={author} />
          <p className="name">{author}</p>
        </div>
        <img src={imageUrl} className="blog-view" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-info">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              data-testid="loader"
            />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
