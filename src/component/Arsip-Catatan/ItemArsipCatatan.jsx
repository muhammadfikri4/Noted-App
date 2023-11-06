import React from 'react'

const ItemArsipCatatan = ({title, createdAt, body, aktifkanCatatan, id, hapusCatatanArsip}) => {
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
                <div className='hapus' onClick={() => hapusCatatanArsip(id)}>
                    <strong>Hapus</strong>
                </div>
                <div className='arsip' onClick={() => aktifkanCatatan(id)}>
                    <strong>Pindahkan</strong>
                </div>
            </section>
        </div>
    </>
  )
}

export default ItemArsipCatatan