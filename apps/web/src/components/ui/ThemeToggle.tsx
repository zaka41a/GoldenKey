export default function ThemeToggle(){
  return <button className="btn btn-outline-secondary rounded-4" onClick={()=>document.body.classList.toggle('dark')}><i className="bi bi-moon" /></button>;
}
