import { ThumbsUp, Trash } from '@phosphor-icons/react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props) {
  function handleDeleteComment() {
    props.onDeleteComment(props.content)
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src='https://github.com/georgealan.png'/>

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
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}