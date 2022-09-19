import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../../service/client'
import './home.css'
import { Card } from '../../components/card/card'
import { CreateMovie } from '../../components/postMovie/createMovie'

export const List = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    client.get('/movie')
      .then(response => {
        setItems(response.data)
      })
  }, [])

  return (
    <>
      <form>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div>
                <Link className='link' to={`/movie/${item.id}`}>{item.title}</Link>
              </div>
              <img alt='error image' className='movie' src={item.image}></img>
            </li>
          )
          )}
        </ul>
      </form>
    </>
  )
}

export const Home = () => {
  return (
    <>
      <Card title='All Movies' click='open'>
        <List />
        <div className='ModalPost'>
          <CreateMovie />
        </div>
      </Card>
    </>
  )
}
