import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import {connect} from 'react-redux';
import {fetchPosts} from './actions';
import './app.scss';

class App extends React.Component {

  render() {
    const {posts, fetchPosts} = this.props;
    console.log(this.props);

    const ButtonConfig = {
      buttonText: 'fetch post',
      emitEvent: fetchPosts,
    };


    return (
      <div className="App" data-test="appComponent">
        <Header/>
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render post"
          />

          <SharedButton {...ButtonConfig}/>

          {posts && posts.length > 0 ? <div>
            {posts.map((post, index) => (<ListItem key={index} title={post.title} desc={post.body}/>))}
          </div> : null
          }

          <ListItem/>
        </section>

      </div>
    );
  }
}

// 定义传递给 props 的字段
const mapStateToProps = state => ({
  posts: state.posts,
});

// 定义传递给 props 的
const mapDispatchToProps = {
  fetchPosts: fetchPosts,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
