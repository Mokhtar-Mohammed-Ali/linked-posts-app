
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spinner } from "@heroui/react";
import { deleteCommentApi } from "../../../services/commentServices";
import { useState } from "react";
import { deletePostApi } from "../../../services/postsServices";

export default function CardSvg({ commentId, callback,setisUpdating ,postId}) {
  const [loading, setLoading] = useState(false);
// delete comment
  async function deleteComment(commentId) {
    setLoading(true);
    const response = await deleteCommentApi(commentId);
    if (response.message) {
      await callback();
    }
    setLoading(false);
  }
  //delete post
   async function deletePost(postId) {
    setLoading(true);
    const response = await deletePostApi(postId);
    if (response.message) {
      await callback();
    }
    setLoading(false);
  }
  function handleClick() {
    if(postId){
      deletePost(postId)
    } else{
deleteComment(commentId)
    }

    
  } 

 
  return <>


    {loading ? <Spinner variant="default" size="md" /> :
      <Dropdown>
        <DropdownTrigger>
          <svg className="w-16 cursor-pointer outline-0" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg>

        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown menu with description" variant="faded">


          <DropdownItem
            key="edit"
            showDivider
            description="Allows you to edit the comment"
            shortcut="⌘⇧E"
            onClick={()=>setisUpdating(true)}
          >
            Edit
          </DropdownItem>
          <DropdownItem onClick={() =>handleClick()}
            key="delete"
            className="text-danger"
            color="danger"
            description="Permanently delete the comment"
            shortcut="⌘⇧D"
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    }
  </>

}
