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
      <form className='form-home'>
        <ul>
          {items.map((item, index) => (
            <div key={index}>
              <div className='title'>
                <Link className='link' to={`/movie/${item.id}`}>{item.title}</Link>
              </div>
              <div className='img'>
                <img alt='error image' className='movie' src={item.image}></img>
              </div>
            </div>
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
