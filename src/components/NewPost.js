import React, { useState } from "react";

function NewPost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
//   const [imagestr, setImage] = useState("");
  const [signature, setSign] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
//   const handleImageChange = (e) => {
//     setImage(e.target.value);
//   };
   const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleSignatureChange = (e) => {
    setSign(e.target.value);
  };
  const handleSubmit = async(e) => {
    alert("A post was submitted by " + title + " succesfully");
    const data = {
      title: title,
      category: category,
    //   imagestr: imagestr,
      content: [content],
      signature: [signature],
    };
	debugger;
	await fetch(
        `https://zpworkshopapis.netlify.app/.netlify/functions/blog`,
            {
                method:"POST",
                body:JSON.stringify(data),
            }
          )
		  .then((response) => {
	debugger;

			response.json()})
          .then((data) => {
			debugger;
			console.log("successs",data);
		  }).catch((e)=>{console.log(e);
		debugger;})
	debugger;

  };

  return (
    <div className="NewPost">
      <header className="Post-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2> Write a new Post</h2>
          <h3> It's Quick & Easy </h3>
          {/* <img src="/blogs.jpg" alt='Blog Image'/><br/> */}
          <label>Title:</label><br />
          <input type="text" value={title} required onChange={(e) => { handleChange(e);}}/>
          <br/>
          <label>Category:</label><br />
          <input type="text" value={category} required onChange={(e) => {handleCategoryChange(e);}}/>
		  {/* <label>Image:</label> */}
          <br />
          {/* <input type="image" value={imagestr} required onChange={(e) => {handleImageChange(e);}}
          />
          <br /> */}
          <label>Content:</label>
          <br />
          <textarea
            id="content-area"
            type="text"
            value={content}
            required
            onChange={(e) => {
              handleContentChange(e);
            }}
          />
          <br />
		  <label>Signature:</label>
          <br />
          <textarea
            id="sign-area"
            type="text"
            value={signature}
            required
            onChange={(e) => {
              handleSignatureChange(e);
            }}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default NewPost;
