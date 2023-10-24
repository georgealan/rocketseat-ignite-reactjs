import { ThumbsUp, Trash } from '@phosphor-icons/react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment(props: CommentProps) {
  // When we create react states is important set an initial value that have the same type of the data that we'll use in the field.
  const [likeCount, setLikeCount] = useState(0) // React state initialized with value 0, the same type of the field we are using.

  function handleDeleteComment() {
    props.onDeleteComment(props.content)
  }

  function handleLikeComment() {
    // setLikeCount(likeCount + 1)

    // Other way to handle closures in React, always when you have to update an information and this info depends on its previous value
    // is recommended use this aproach to handle this problem with functions
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src='https://github.com/georgealan.png' alt=''/>

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>George Alan</strong>
              <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}