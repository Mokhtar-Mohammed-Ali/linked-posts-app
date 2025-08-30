


import { Button, Spinner } from '@heroui/react'
import { useEffect, useState } from 'react'
import { creatPostApi, updatePostApi } from '../../services/postsServices';

export default function CreatePost({ callback, isupdating, setisUpdating, post }) {
    const [postBody, setPostBody] = useState(post?.body ?? "");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(post?.image ?? null);
    const [loading, setLoading] = useState(false);

    async function imageSrcToURL() {
        if (!post?.image) return;
        const response = await fetch(post.image);
        const data = await response.blob();
        let imageFile = new File([data], 'image', { type: 'image/jpg' });
        setImage(imageFile);
    };

    useEffect(() => {
        imageSrcToURL();
    }, [post]);

    async function creatPost(e) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        if (postBody) formData.append('body', postBody);
        if (image) formData.append('image', image);

        let response;
        if (isupdating) {
            response = await updatePostApi(formData, post.id);
            await callback();
            setisUpdating(false);
        } else {
            response = await creatPostApi(formData);
        }

        if (response.message) {
            await callback();
            setPostBody('');
            setImage(null);
            setImageUrl(null);
        };

        setLoading(false);
    }

    function handleImage(e) {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImageUrl(URL.createObjectURL(file));
        }
        e.target.value = "";
    }

    return (
        <div className="relative w-full rounded-md shadow-md p-3 -mb-4 overflow-hidden bg-white">
            <form onSubmit={creatPost}>
                <textarea
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    className='w-full border-b-2 border-blue-400 outline-0 resize-none mb-3'
                    placeholder="what's in your mind..."
                    rows="3"
                ></textarea>


                {imageUrl && (
                    <div className='relative'>
                        <img className='w-full object-cover rounded' src={imageUrl} alt="post photo" />
                        <svg
                            onClick={() => {
                                setImage(null);
                                setImageUrl(null);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill='none'
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-10 absolute top-4 end-4 bg-black/50 rounded-full text-white hover:text-red-500 cursor-pointer"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                )}

                <div className="flex justify-between px-4">
                    <label className='flex items-center cursor-pointer hover:text-blue-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <input onChange={handleImage} type="file" className='hidden' />
                    </label>

                    <div className="flex mt-2 gap-3">
                        {isupdating && <Button onPress={() => setisUpdating(false)} color='danger'>cancel</Button>}
                        <Button type='submit' color='primary'>Post</Button>
                    </div>
                </div>
            </form>

            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <Spinner variant="simple" size='lg' />
                </div>
            )}
        </div>
    )
}
