import classes from './Post.module.css';

function Post({ id, author, body }) {

  const remove = async () => {
    await fetch(`https://chatsanti-1e944-default-rtdb.firebaseio.com/posts/${id}.json/`,{
      method: 'DELETE',  
    }); 
  };
  
  return (
    <li onDoubleClick={remove} className={classes.post}>
      <div>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </div>
    </li>
  );
}

export default Post;
