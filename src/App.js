import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React from 'react';
import {client} from './client';
import Posts from './components/Posts.js'


class App extends React.Component {

  // this will contain data received from contenful
  // once all articles are loaded it gets passed into the posts componenet as a prompt 
  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
    .then((response) => {
      console.log(response)
      this.setState({
        articles: response.items
      })
    })
    .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <header>
            <div className='wrapper'>
              <h1>Blog Post with Contentful</h1>
            </div>
          </header>
          <main>
            <div className='wrapper'>
              <Posts posts = {this.state.articles} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
