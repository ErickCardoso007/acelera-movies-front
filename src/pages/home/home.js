
import { Link } from 'react-router-dom'

const List = () => {
  const items = [
    { id: 1, nome: 'filme 1' },
    { id: 2, nome: 'filme 2' },
    { id: 3, nome: 'filme 3' }
  ]
  return (
    <ul>
      {items.map((item) => (
        <li key={items}>
          <Link to={`/movie/${item.id}`}>{item.nome}</Link>
        </li>
      ))}
    </ul>
  )
}

export const Home = () => {
  return (
    <>
      <h1>Hello, User!</h1>
      <List />
    </>
  )
}
