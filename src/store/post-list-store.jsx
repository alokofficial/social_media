import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if(action.type === 'ADD_POST'){
    newPostList=[action.payload,...currentPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Hometown",
    body: "Hi Frinds, I am going to My Hometown for my vacations. I missed it for long.",
    reactions: 1,
    userId: "5",
    tags: ["vaction", "Hometown", "AfterLong"],
  },
  {
    id: "2",
    title: "Hard Working Pay you lot",
    body: "This is the only way to get success, always study and learn hard to achieve it.",
    reactions: 10,
    userId: "7",
    tags: ["hardwork", "AchieveIt", "PayLot"],
  },
];
export default PostListProvider;
