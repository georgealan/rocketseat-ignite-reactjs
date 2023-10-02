import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import style from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="George Alan" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sint molestias quas itaque architecto quisquam dignissimos, temporibus alias odit repudiandae eaque porro quos nisi non consectetur, laboriosam, fugit odio! Voluptas!"
          />

          <Post 
            author="Jose Carlos" 
            content="Another good post"
          />
        </main>
      </div>
    </div>
  )
}
