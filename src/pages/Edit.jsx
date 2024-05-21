import { Editor } from '@tinymce/tinymce-react';
import {useState} from 'react'
import GetData from '../components/Api'

const Edit = () => {
  const [article, setArticle] = useState('')
  const [published, setPublished] = useState(false)
  const [title, setTitle] = useState('');
  const [setContent] = useState('');
 
  const addArticle = (e) => {
    e.preventDefault()
    console.log(published)
    const stringToHTML = window.tinymce
      .get("content")
      .getContent({ format: "html" }); 
    const co = <div dangerouslySetInnerHTML={{ __html: stringToHTML }}/>
    const newArticle = {title: title, content: co.props.dangerouslySetInnerHTML.__html,  published: published.toString()};
    postArticle(newArticle)
    setArticle(newArticle)
    // setContent(window.tinymce.activeEditor.setContent(""));
  }

  const postArticle = (body) => {
    const url = "http://localhost:3005/blog/createblog"
    const method = 'POST'
    let requestOptions = JSON.stringify(body)
    console.log(requestOptions)
    GetData(url, method, requestOptions)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  }

  return (
    <>
      <form className='postContainer'>
      <div className='published'>
          <h3>Published</h3>
          <label className="switch">
            <input
              value={published} 
              checked={published}
              type="checkbox" placeholder='Publish'
              onChange={(ev) => setPublished(ev.target.checked)}
            />
            <span className="slider round"></span>
            
          </label>
        </div>
        <div className='inputContainer'>
          <input
            value={title}
            placeholder="Title"
            onChange={(ev) => setTitle(ev.target.value)}
            className='title'
          />
          
        </div>
        <Editor
          id='content'
          apiKey="wvrnp6q7psywmrupwobogs3rquqvn0a464njttl1szupfo6b"
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 300,
            width: 550,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={addArticle}>Add</button>
        {/* <div className={'inputContainer'}>
          <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        </div> */}
      </form>
    </>
  )
}

export default Edit