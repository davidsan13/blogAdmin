import { Editor } from '@tinymce/tinymce-react';
import {useState} from 'react'
const Edit = () => {
  const [article, setArticle] =useState('')
  const [title, setTitle] = useState('');
  const [setContent] = useState('');
 
  const addArticle = (e) => {
    e.preventDefault()
    const stringToHTML = window.tinymce
      .get("content")
      .getContent({ format: "html" }); 
    const newArticle = {title: title, content: <div dangerouslySetInnerHTML={{ __html: stringToHTML }} />,};
    setArticle(newArticle)
    setContent(window.tinymce.activeEditor.setContent(""));
  }

  return (
    <>
      <form >
        <div className={'inputContainer'}>
          <input
            value={title}
            placeholder="Enter your Title here"
            onChange={(ev) => setTitle(ev.target.value)}
            className={'inputBox'}
          />
          
        </div>
        <Editor
          id='content'
          apiKey="wvrnp6q7psywmrupwobogs3rquqvn0a464njttl1szupfo6b"
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
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
        <button onClick={addArticle}>Add Article</button>
        {/* <div className={'inputContainer'}>
          <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        </div> */}
      </form>
      <h3>{article.title}</h3>
      <h3>{article.content}</h3>
    </>
  )
}

export default Edit