// for each and every post that comes from contentful, this post file will be rendered

import React from 'react'
import marked from 'marked'

// loops over array and creates a post for each post it receives
const Post = ({article}) => {
  console.log(article)
  const {body, title} = article.fields
  const postBody = marked(body)
  return (
    <div className='post'> 
      <span className = 'title'>{title}</span>
      <section className = 'text' dangerouslySetInnerHTML= {{__html:postBody}}/>
      
    </div>
  )
}

export default Post