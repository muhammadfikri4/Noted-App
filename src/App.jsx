import { useState } from 'react'
import {dataCatatan} from './data';
import CatatanAktif from './component/Catatan-Aktif/CatatanAktif';
import FormTambahCatatan from './component/Tambah-Catatan/FormTambahCatatan';
import ArsipCatatan from './component/Arsip-Catatan/ArsipCatatan';
import SearchData from './component/Search/SearchData';
import './App.css'


function App() {

  const [catatan, setCatatan] = useState(dataCatatan);
  const filterCatatanAktif = catatan.filter((item) => {
    return item.archived === false
  })
  const [catatanAktif, setCatatanAktif] = useState(filterCatatanAktif);
  const filterCatatanArsip = catatan.filter((item) => {
    return item.archived === true
  })
  const [catatanArsip, setCatatanArsip] = useState(filterCatatanArsip);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('');
  const dayList = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"]
  const monthList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const date = new Date();
  const tahun = date.getUTCFullYear();
  const bulan = date.getUTCMonth() + 1;
  const tanggal = date.getUTCDate();
  const hari = date.getUTCDay();
  const jam = date.getHours();
  const menit = date.getMinutes();

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeBody = (e) => {
    setBody(e.target.value)
  }

  const submitCatatan = (e) => {
    e.preventDefault()
    const catatans = [...catatan];
    const catatansAktif = [...catatanAktif]
    const newCatatan = {
      id: catatan.length + 1,
      title,
      body,
      archived: false,
      createdAt: `${jam}:${menit} ${dayList[hari]}, ${tanggal} ${monthList[bulan]} ${tahun}`
    }

    catatans.push(newCatatan);
    catatansAktif.push(newCatatan);
    setCatatan(catatans);
    setCatatanAktif(catatansAktif)
    setTitle('');
    setBody('')
  }

  const ArsipkanCatatan = (id) => {
    const findIndex = catatan.findIndex((item) => {
      return item.id === id;
    });
    const newData = {
      ...catatan[findIndex]
    }
    newData.archived = true;

    catatan.splice(findIndex, 1, newData)
    const filterAktif = catatan.filter((item) => {
      return item.archived === false
    })
    const filterArsip = catatan.filter((item) => {
      return item.archived === true
    })

    setCatatanAktif(filterAktif);
    setCatatanArsip(filterArsip);
  }
  const AktifkanCatatan = (id) => {
    const findIndex = catatan.findIndex((item) => {
      return item.id === id;
    });
    const newData = {
      ...catatan[findIndex]
    }
    newData.archived = false;

    catatan.splice(findIndex, 1, newData)
    const filterAktif = catatan.filter((item) => {
      return item.archived === false
    })
    const filterArsip = catatan.filter((item) => {
      return item.archived === true
    })

    setCatatanAktif(filterAktif);
    setCatatanArsip(filterArsip);
  }

  const hapusCatatanAktif = (id) => {
    const findIndex = catatan.findIndex((item) => {
      return item.id === id;
    });
    const newCatatan = [...catatan];
    const newCatatanAktif = [...catatanAktif];
    newCatatan.splice(findIndex, 1)
    newCatatanAktif.splice(findIndex, 1);
    setCatatan(newCatatan);
    setCatatanAktif(newCatatanAktif)
  }
  const hapusCatatanArsip = (id) => {
    const findIndex = catatan.findIndex((item) => {
      return item.id === id;
    });
    const newCatatan = [...catatan];
    const newCatatanArsip = [...catatanArsip];
    newCatatan.splice(findIndex, 1)
    newCatatanArsip.splice(findIndex, 1);
    setCatatan(newCatatan);
    setCatatanArsip(newCatatanArsip)
  }

  const changeSearch = (e) => {
   

    const lowerSearch = e.target.value.toLowerCase();
    const filtering = catatanAktif.filter((item) => {
      const lowerTitle = item.title.toLowerCase();

      return lowerTitle.includes(lowerSearch)
    })
    setCatatanAktif(filtering)
    if(e.target.value.length === 0) {
      const filteringCatatanAktif = catatan.filter((item) => {
        return item.archived === false
      })
      setCatatanAktif(filteringCatatanAktif)
    }
  }
  return (
    <>
      <SearchData changeSearch={changeSearch} />
      <h2>Buat Catatan</h2>
      <FormTambahCatatan changeBody={changeBody} body={body} title={title} changeTitle={changeTitle} length={50} submitCatatan={submitCatatan} />
      <br />
      <h2>Catatan Aktif</h2>
      <CatatanAktif data={catatanAktif} arsipkanCatatan={ArsipkanCatatan} hapusCatatanAktif={hapusCatatanAktif}/>
      <br />
      <h2>Arsip Catatan</h2>
      <ArsipCatatan data={catatanArsip} aktifkanCatatan={AktifkanCatatan} hapusCatatanArsip={hapusCatatanArsip}/>
    </>
  )
}

export default App
