import axios from "axios";
import { CREATE_NEW_ARTICLE } from "./actionTypes";

const createArticle = (titleValue, leadValue, contentValue, categoryValue) => {
  return async dispatch => {
    let response = await axios.post("/articles",
    {
        article: {
          title: titleValue,
          lead: leadValue,
          content: contentValue,
          category: categoryValue
        }
      },  { headers: { "Content-Type": "application/json" } }
      )

      if (response.status === 200) {
        dispatch(dispatchCreateArticleAction(response.data.message));
      } else {
        dispatch(dispatchCreateArticleAction(response.data.error))
      }

  };
};

const dispatchCreateArticleAction = json => {
  return { type: CREATE_NEW_ARTICLE, payload: json };
};

export { createArticle };
