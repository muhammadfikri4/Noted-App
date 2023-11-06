import React from 'react';
import ItemArsipCatatan from './ItemArsipCatatan';

const ArsipCatatan = ({data, aktifkanCatatan, hapusCatatanArsip}) => {
  return (
    <>
    <div className='container'>
            {data.length > 0? data.map((item) => (
                <ItemArsipCatatan key={item.id} title={item.title} body={item.body} createdAt={item.createdAt} aktifkanCatatan={aktifkanCatatan} id={item.id} hapusCatatanArsip={hapusCatatanArsip}/>
            )) : <i>Catatan Kosong!</i>}
        </div>
    </>
  )
}

export default ArsipCatatan