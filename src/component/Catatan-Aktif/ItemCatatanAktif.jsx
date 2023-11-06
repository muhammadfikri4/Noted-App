import React from 'react'

const ItemCatatanAktif = ({title, createdAt, body, arsipkanCatatan, id, hapusCatatanAktif}) => {
  return (
    <>
        <div className='container-item'>
            <section className='head'>
                <h3>{title}</h3>
                <p>{createdAt}</p>
            </section>
            <section className='body'>
                <p>{body}</p>
            </section>
            <section className='foot'>
                <div className='hapus' onClick={() => hapusCatatanAktif(id)}>
                    <strong>Hapus</strong>
                </div>
                <div className='arsip' onClick={() => arsipkanCatatan(id)}>
                    <strong>Arsipkan</strong>
                </div>
            </section>
        </div>
    </>
  )
}

export default ItemCatatanAktif