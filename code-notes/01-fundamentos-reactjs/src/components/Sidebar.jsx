import style from './Sidebar.module.css'
import { PencilLine } from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img 
        className={style.cover} 
        src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=30'>
      </img>

      <div className={style.profile}>
        <img 
          className={style.avatar}
          src='https://avatars.githubusercontent.com/u/37253093?v=4'>
        </img>

        <strong>George Alan</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
