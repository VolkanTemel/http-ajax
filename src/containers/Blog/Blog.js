import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={ {
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                } }>Posts</NavLink></li>
                            <li><NavLink to={ {
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            } }>NewPost</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    { this.state.auth ? <Route path='/new-post' component={ AsyncNewPost } /> : null }
                    <Route path='/posts' component={ Posts } />
                    <Route Route render={ () => <h1>Not found</h1> } />
                    {/* <Redirect from="/" to="/posts" /> */ }
                    {/* <Route path='/' component={ Posts } /> */ }
                </Switch>

            </div >
        );
    }
}

export default Blog;