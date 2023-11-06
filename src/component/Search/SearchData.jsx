import React from 'react'

const SearchData = ({changeSearch}) => {
  return (
    <>
        <form className='searchData'>
            <input type="text" placeholder='Cari Judul Catatan...' onChange={(e) => changeSearch(e)}/>
        </form>
    </>
  )
}

export default SearchData