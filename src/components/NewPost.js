import React, {useState} from 'react';

function NewPost() {
	const [name , setName] = useState('');
	const [email , setEmail] = useState('');
	const [category , setCategory] = useState('');
	const [content , setContent] = useState('');

	const handleChange =(e)=>{
	setName(e.target.value);
	}
	const handleEmailChange =(e)=>{
	setEmail(e.target.value);
	}
	const handleCategoryChange =(e)=>{
	setCategory(e.target.value);
	}
	const handleContentChange =(e)=>{
	setContent(e.target.value);
	}
	const handleSubmit=(e)=>{
		alert('A post was submitted by '+ name + " succesfully");
  }
  
return (
	<div className="NewPost">
	<header className="Post-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	<h2> Write a new Post</h2>
	<h3> It's Quick & Easy </h3>
	{/* <img src="/blogs.jpg" alt='Blog Image'/><br/> */}
		<label >
		Name:
		</label><br/>
		<input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>
		<label >
		Email:
		</label><br/>
		<input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
		<label>
		Category:
		</label><br/>
		<input type="text" value={category} required onChange={(e) => {handleCategoryChange(e)}} /><br/>
		<label>
		Content:
		</label><br/>
		<textarea id="content-area" type="text" value={content} required onChange={(e) => {handleContentChange(e)}} /><br/>
		<input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
);
}

export default NewPost;
