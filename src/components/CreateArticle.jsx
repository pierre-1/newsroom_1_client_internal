import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import {createArticle} from '../state/actions/articleActions';

const CreateArticle = props => {

  const onCreate = (titleValue, leadValue, contentValue, categoryValue) => {
    props.createArticle(titleValue, leadValue, contentValue, categoryValue)
  //   e.preventDefault();
  //   let response = await axios.post(
  //     "/articles",
      // {
      //   article: {
      //     title: e.target.title.value,
      //     lead: e.target.lead.value,
      //     content: e.target.content.value,
      //     category: e.target.category.value
      //   }
      // },
      // { headers: { "Content-Type": "application/json" } }
    // );
    // if (response.status === 200) {
    //   this.setState({ message: response.data.message })
    // } else {
    //   this.setState({ message: response.data.error })
    // }
  };

    return (
      <>
        <form id="new-article-form" onSubmit={() => onCreate(title.value, lead.value, content.value, category.value)}>
          Title <input id="title" placeholder="title" key="title" />
          Lead
          <input id="lead" placeholder="lead" key="lead" />
          Content
          <textarea id="content" placeholder="content" key="content" />
          <select id="category-selector" key="category" name="category">
            <option value="latest_news">Latest News</option>
            <option value="tech">Tech</option>
            <option value="food">Food</option>
            <option value="sports">Sports</option>
            <option value="culture">Culture</option>
          </select>
          <button id="create-article-button" type="submit">
            Create Article
          </button>
        </form>
        <p id="message">{this.state.message}</p>
      </>
    );
  
}

const mapDispatchToProps = dispatch => {
  return {
    createArticle: dispatchCreateArticleAction(createArticle, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(CreateArticle);
