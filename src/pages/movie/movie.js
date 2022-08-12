import { useParams } from 'react-router-dom'

export const Movie = () => {
  const { id } = useParams()
  return (
  <>
      <h1>Pagina Movie</h1>
      <p> Você está no filme com id: {id}</p>
  </>
  )
}
