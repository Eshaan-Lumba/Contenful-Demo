// this will contain all the posts it receives from contentful

import React from 'react'
import Post from './Post'

// loops over array and creates a post for each post it receives
const Posts = ({posts}) => {
  return (
    <div> 
      {posts.map((article, index) => <Post article = {article} key={index}/>)}
    </div>
  )
}

export default Posts