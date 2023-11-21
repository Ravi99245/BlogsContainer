import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBLogsData()
  }

  getBLogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')

    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsList: updatedData, isLoading: false})

    console.log(updatedData)
  }

  render() {
    const {isLoading, blogsList} = this.state

    return (
      <div className="blogList-container">
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
          blogsList.map(eachItem => (
            <BlogItem key={eachItem.id} blogItem={eachItem} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
