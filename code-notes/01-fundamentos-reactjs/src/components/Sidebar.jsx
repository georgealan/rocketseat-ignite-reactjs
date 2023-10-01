import './Sidebar.modules.css'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=30'></img>

      <div>
        <strong>George Alan</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href='#'>Editar o seu perfil</a>
      </footer>
    </aside>
  )
}
