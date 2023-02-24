import React, {useState,useEffect} from 'react';

 function Viewpost(props) {
	const [post,setPost] = useState({});

    const getPost=async()=>{
        await fetch(
        `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${props.id}`,
            {
                method:"GET",
                // body:JSON.stringify(data),
            }
          )
          .then((response) => response.json())
          .then((data) => {
            //debugger;

            if(data)
            {
                //debugger;
                console.log(data,'data')
                setPost(data);
                // debugger;
                
            }
          })
    }


  
useEffect(() => {

      getPost();
  },[])
  
return (
	<>helo
    {post.title}<br/>
    {post.category}<br/>
    {post.imagestr}
    </>
);
}

export default Viewpost;
