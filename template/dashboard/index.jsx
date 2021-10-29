import { ReactNode, children } from 'react'


export default function TemplateAdmin(props) {
  return (
    <>
      <header>Header da admin</header>
      <main>
        <h1>Template Admin</h1>
        {props.children}
      </main>
      <footer>Footer da admin</footer>
    </>
  )
}