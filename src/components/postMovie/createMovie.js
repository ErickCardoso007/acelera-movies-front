import { useState } from 'react'
import { Modal } from '../../components/modal/modal'
import { client } from '../../service/client'

export const CreateMovie = () => {
  const [title, setTitle] = useState('')
  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const [subtitle, setSubtitle] = useState('')
  const handleChangeSubtitle = (e) => {
    setSubtitle(e.target.value)
  }

  const [director, setDirector] = useState('')
  const handleChangeDirector = (e) => {
    setDirector(e.target.value)
  }

  const [gender, setGender] = useState('')
  const handleChangeGender = (e) => {
    setGender(e.target.value)
  }

  const [writer, setWriter] = useState('')
  const handleChangeWriter = (e) => {
    setWriter(e.target.value)
  }

  const [studio, setStudio] = useState('')
  const handleChangeStudio = (e) => {
    setStudio(e.target.value)
  }

  const [actors, setActors] = useState('')
  const handleChangeActors = (e) => {
    setActors(e.target.value)
  }

  const [classification, setClassification] = useState('')
  const handleChangeClassification = (e) => {
    setClassification(e.target.value)
  }

  const [awards, setAwards] = useState('')
  const handleChangeAwards = (e) => {
    setAwards(e.target.value)
  }

  const [resume, setResume] = useState('')
  const handleChangeResume = (e) => {
    setResume(e.target.value)
  }

  const [image, setImage] = useState('')
  const handleChangeImage = (e) => {
    setImage(e.target.value)
  }

  const [note, setNote] = useState('')
  const handleChangeNote = (e) => {
    setNote(e.target.value)
  }

  const [date, setDate] = useState('')
  const handleChangeDate = (e) => {
    setDate(e.target.value)
  }
  const data = {
    title: title,
    gender: gender,
    subtitle: subtitle,
    director: director,
    writer: writer,
    studio: studio,
    actors: actors,
    classification: classification,
    resume: resume,
    awards: awards,
    image: image,
    releaseDate: date,
    note: note
  }

  const url = '/movie'
  const click = () => {
    client.post(url, data)
      .then(response => {
        alert('Alteração feita com sucesso')
        location.reload()
      })
      .catch(alert('Preencha todas as lacunas!'))
  }

  return (
    <>
      <section>
        <Modal title='New modal' click='Create movie' >
          <form className='formEdit'>
            <div className='listaEdit'>
              <input className='inputMovie' value={title} onChange={handleChangeTitle} type='text' placeholder='title' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={subtitle} onChange={handleChangeSubtitle} type='text' placeholder='subtitle' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={director} onChange={handleChangeDirector} type='text' placeholder='director' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={gender} onChange={handleChangeGender} type='text' placeholder='gender' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={classification} onChange={handleChangeClassification} type='text' placeholder='classification' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={writer} onChange={handleChangeWriter} type='text' placeholder='writer' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={studio} onChange={handleChangeStudio} type='text' placeholder='studio' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={actors} onChange={handleChangeActors} type='text' placeholder='actors' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={resume} onChange={handleChangeResume} type='text' placeholder='resume' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={awards} onChange={handleChangeAwards} type='text' placeholder='awards' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={image} onChange={handleChangeImage} type='text' placeholder='image' required ></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={date} onChange={handleChangeDate} type='date' placeholder='date' required></input>
            </div>
            <div className='listaEdit'>
              <input className='inputMovie' value={note} onChange={handleChangeNote} type='number' placeholder='note' required></input>
            </div>
            <div className='liMovie'>
              <button className='buttonMovie' type="button" onClick={click}>create</button>
            </div>
          </form>
        </Modal>
      </section>
    </>
  )
}
