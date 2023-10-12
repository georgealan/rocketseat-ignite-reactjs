import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'
import { useState } from 'react'


export function Post(props) {
  // React State
  const [comments, setComments] = useState([
    'Post muito bacana hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  /*
  Example formating Date using JS Intl library:

  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(props.publishedAt)
  */

  // Formating Date using library date-fns
  const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeletedOne)
    /*
    In React we never change information, we aways create new information, it's a concept of imutability
    Above we are setting a new comment list, without the one comment deleted using JS filter function.
    */
  }

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={props.author.avatarUrl}/>

          <div className={style.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={style.content}>
        {props.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea 
          name='comment'
          value={newCommentText}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
        />

        <footer>  
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map(comment => {
          // Here you can pass a function as a property
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  )
}