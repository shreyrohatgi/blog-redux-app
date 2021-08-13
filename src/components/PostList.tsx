import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

interface IPost {
  userId: number;
  id: any;
  title: string;
  body: string;
}

interface IProps {
  fetchPosts: Function;
  posts: [IPost];
}

const PostList: React.FC<IProps> = (props) => {
  const renderList = () => {
    return props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  };

  useEffect(() => {
    props.fetchPosts();
  }, []);
  return <div className='ui relaxed divided list'>{renderList()}</div>;
};

const mapStateToProps = (state: IProps) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
