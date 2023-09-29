import { useEffect, useRef, useState } from "react";
import { CardBody, Card, Form, Input, Label, Container, Button } from "reactstrap";
import { loadAllCategories } from "../services/category-service";
import JoditEditor from "jodit-react";
import { createPost as doCreatePost } from "../services/post-service";
const AddPost = () => {

    const [categories, setCategories] = useState([]);
    const editor = useRef(null)
    const [post,setPost] = useState({
      title:'',
      content:'',
      categoryId:-1
    })

    useEffect(
        ()=>{
            loadAllCategories().then((data)=>{
                console.log(data)
                setCategories(data)
            }).catch(error=>{
                console.log(error)
            })
        },[]
    )

    const fieldChanged = (event)=>{
      setPost({...post,[event.target.name]:event.target.value})
    }

    const contentFieldChanged = (data)=>{
      setPost({...post,'content':data})
    }
    const createPost =(event)=>{
        event.preventDefault();
        console.log(post)
        if(post.title.trim()===''){
          alert("Post title is required")
          return;
        }
        if(post.content.trim()===''){
          alert("Post content is required");
          return;
        }
        if(post.categoryId===-1){
          alert("Post category is mandatory");
          return;
        }

        doCreatePost(post).then(data=>{
          alert("post created")
          console.log(post)
        }).catch((error)=>{
          alert("error");
          console.log(error);
        })

    }

  return (
    <div className="wrapper">
      <h1 className="text-center my-3">Post</h1>
      <Card className="shadow-sm border-0 mt-2" >
        <CardBody>
          <h3>What's in your mind</h3>
          <Form onSubmit={createPost}>
            <div className="my-3">
              <Label for="title">Post title</Label>
              <Input type="text" id="title" placeholder="Enter here" name="title" onChange={fieldChanged}/>
            </div>
            <div className="my-3">
              <Label for="content">Post Content</Label>
              {/* <Input type="testarea" id="content" placeholder="Enter here" style={{height:'300px'}} /> */}
              <JoditEditor ref={editor} value={post.content} onChange={contentFieldChanged}/>
            </div>
            <div className="my-3">
              <Label for="category">Post Category</Label>
              <Input type="select" id="category" placeholder="Enter here" name="categoryId" onChange={fieldChanged} defaultValue={0}>
                <option disabled value={0}>--Select category--</option>
                {
                    categories.map((category)=>(
                        <option value={category.categoryId} key={category.categoryId}>
                            {category.categoryTitle}
                        </option>
                    ))
                }
                </Input>
            </div>
            <Container className="text-center">
                <Button type="submit" className="rounded-0" color="primary">Create Post</Button>
                <Button className="rounded-0 ms-2" color="danger">Reset content</Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;
