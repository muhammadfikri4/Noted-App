import React, {useState, useEffect} from 'react';
import ItemCatatanAktif from './ItemCatatanAktif';

const CatatanAktif = ({data, arsipkanCatatan, hapusCatatanAktif}) => {


  return (
    <>
        <div className='container'>
            {data.length > 0? data.map((item) => (
                <ItemCatatanAktif key={item.id} title={item.title} body={item.body} createdAt={item.createdAt} arsipkanCatatan={arsipkanCatatan} id={item.id} hapusCatatanAktif={hapusCatatanAktif}/>
            )) : <i>Catatan Kosong!</i>}
        </div>
    </>
  )
}

export default CatatanAktif