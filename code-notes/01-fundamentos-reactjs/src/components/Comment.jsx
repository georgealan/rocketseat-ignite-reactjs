import { ThumbsUp, Trash } from '@phosphor-icons/react'
import style from './Comment.module.css'

export function Comment() {
  return (
    <div className={style.comment}>
      <img src='https://avatars.githubusercontent.com/u/37253093?v=4' alt=''/>

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div>
              <strong>George Alan</strong>
              <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Very good George! Congratulations!! 👏👏</p>
        </div>

        <footer>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </footer>
      </div>
    </div>
  )
}