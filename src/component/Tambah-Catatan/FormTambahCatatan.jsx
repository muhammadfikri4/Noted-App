import React, {useState} from 'react'

const FormTambahCatatan = ({changeTitle, title, changeBody, body, length, submitCatatan}) => {

  return (
    <>
      <p align="right">Sisa Karakter : {length - title.length}</p>
      <form className='form-tambah-catatan' onSubmit={(e) => submitCatatan(e)}>
        <input type="text" placeholder='Judul Catatan...' onChange={(e) => changeTitle(e)} value={title} maxLength={50} />
        <textarea onChange={(e) => changeBody(e)} cols="30" rows="10" value={body} placeholder='Tulis Catatan'></textarea>  
        <button type='submit' className='btn-add'>Buat Catatan</button>
      </form> 
    </>
  )
}

export default FormTambahCatatan