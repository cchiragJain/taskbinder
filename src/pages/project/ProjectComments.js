import { useState } from "react";

/* HOOKS & UTILS */
import { useAuthContext } from "../../hooks/useAuthContext";
import { timestamp } from "../../firebase/config";

const ProjectComments = () => {
  const { user } = useAuthContext();

  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: "_" + Math.random().toString(36).substring(2, 9),
    };

    console.log(commentToAdd);
  };

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button type="submit" className="btn">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default ProjectComments;
