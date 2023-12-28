import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setIsDeleting(true);

    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      setIsDeleting(false);
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>Error: Failed to fetch blog details</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>

          {showConfirmation && (
            <div className="confirmation-modal">
              <p>Are you sure you want to delete this blog?</p>
              <button onClick={handleConfirmDelete}>Yes</button>
              <button onClick={() => setShowConfirmation(false)}>No</button>
            </div>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
