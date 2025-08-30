
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import CardHeader from './Posts/postCard/CardHeader'
import userimage from '../assets/836.jpg';
import CardSvg from './Posts/postCard/CardSvg'

export default function Comment({comment,postUserId,callback,setisUpdating,isUpdating}) {
    const {userData} = useContext(AuthContext);
  // console.log(comment)
  
const photoSrc =
  comment.commentCreator._id === userData._id
    ? userData.photo 
    : (comment.commentCreator.photo &&
       !comment.commentCreator.photo.includes("undefined")
        ? comment.commentCreator.photo
        : userimage
)
 return <>

  <div className="p-4 bg-gray-100 -mx-3 -mb-3">
<div className="w-full flex items-center justify-between">
<CardHeader photo={photoSrc}
    name={comment.commentCreator.name}
        date={comment.createdAt}

    
/>

{userData._id == comment.commentCreator._id && userData._id == postUserId&& <CardSvg commentId={comment._id} callback={callback} isUpdating={isUpdating} setisUpdating={setisUpdating} />}
</div>
<p className='p-4 pb-0'>{comment.content}</p>
  </div>
          {comment > 0 && <p className='italic text-lg text-gray-600 ps-4 p-2'>{content}</p>}

  </>
}
