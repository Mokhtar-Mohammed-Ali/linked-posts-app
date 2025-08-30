
import Comment from '../Comment';
import CardBody from './postCard/CardBody';
import CardFooter from './postCard/CardFooter';
import CardHeader from './postCard/CardHeader';
import CardSvg from './postCard/CardSvg';
import { useContext, useState } from 'react';
import { createCommentApi, getPostCommentApi, updateCommentApi } from '../../services/commentServices';
import { AuthContext } from '../context/AuthContext';
import CreatePost from './CreatePost';
import { Button, Input } from '@heroui/react';


export default function PostCard({ post, commentLimit, callback }) {
  const [loading, setsetLoading] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [isupdating, setisUpdating] = useState(false);
  const [createComment, setCreateComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);

  const { userData } = useContext(AuthContext);
 
  // create comment
  async function createCommentForm(e) {
    e.preventDefault();
    setsetLoading(true);

    // لو في تعديل
    if (editCommentId) {
      const response = await updateCommentApi(createComment, editCommentId);
      if (response.message) {
        await getPostComments(); // get comments after update
        setEditCommentId(null); 
      }
    } else {
      // add a new comment
      const response = await createCommentApi(createComment, post.id);
      if (response.message) {
        setComments(response.comments);
      }
    }

    setsetLoading(false);
    setCreateComment('');
  }

  // get post comments 
  async function getPostComments() {
    const response = await getPostCommentApi(post.id);
    setComments(response.comments);
  }


  
  return (
    <>
      {isupdating ? (
        <CreatePost callback={callback} isupdating={isupdating} setisUpdating={setisUpdating} post={post} />
      ) : (
        <div className="w-full rounded-md shadow-md sm:h-screen md:h-auto overflow-hidden bg-white mt-5">
          <div className="w-full h-auto items-center flex justify-between border-b mb-4">
            <CardHeader name={post.user.name} date={post.createdAt} photo={post.user.photo} />
            {userData._id == post.user._id && (
              <CardSvg setisUpdating={setisUpdating} postId={post.id} callback={callback} />
            )}
          </div>

          <CardBody body={post.body} image={post.image} />

          <div className="border-b py-2">
            <CardFooter commentNumber={comments?.length || 0} postId={post.id} />
          </div>

          {/* فورم الكومنت سواء جديد أو تعديل */}
          <form onSubmit={createCommentForm} className="flex gap-3 w-4/5 mx-auto py-2 mt-2">
            <Input
              variant="bordered"
              value={createComment}
              minLength={3}
              onChange={(e) => {
                if (e.target.value.length <= 60) {
                  setCreateComment(e.target.value);
                }
              }}
              placeholder={editCommentId ? "update comment..." : "create a comment"}
            />

            {editCommentId ? (
              <>
                <Button
                  isLoading={loading}
                  disabled={createComment.length < 3}
                  type="submit"
                  color="primary"
                >
                  Update
                </Button>

                <Button
                  type="button"
                  color="danger"
                  variant="flat"
                  onClick={() => {
                    setEditCommentId(null);
                    setCreateComment('');
                  }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                isLoading={loading}
                disabled={createComment.length < 3}
                type="submit"
                color="primary"
              >
                Add
              </Button>
            )}
          </form>


          {/* dispay comments*/}
          {comments.length > 0 && (
            <div className="w-full h-auto mt-3 bg-gray-300 -my-3 ">
              {comments.slice(0, commentLimit).map((comment) => (
                <Comment
                  key={comment._id}
                  setisUpdating={() => {
                    setEditCommentId(comment._id);
                    setCreateComment(comment.content); // add content in input
                  }}
                  isUpdating={editCommentId === comment._id}
                  comment={comment}
                  callback={getPostComments}
                  postUserId={post.user._id}
                />
              ))}
              
            </div>
          )}
      
        </div>
      )}
      
    </>
       
  );
}
