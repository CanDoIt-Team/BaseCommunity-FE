import styled from '../styles/Paginaition.module.scss'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { useEffect, useState } from 'react'

export const Paginaition = ({ totalPage, page, setPage }) => {
  const [total, setTotal] = useState([])

  let pageGroup = Math.ceil(page / 5)
  let lastPage = pageGroup * 5 < totalPage ? pageGroup * 5 : totalPage
  let firstPage =
    lastPage - (pageGroup * 5 - 1) <= 0
      ? lastPage - (5 - ((pageGroup * 5) - lastPage + 1)) 
      : lastPage - (5 - 1)

  const handlePageClick = (page) => {
    console.log(page)
    setPage(page)
  }

  useEffect(() => {
    let totalarr = []

    for (let i = firstPage; i <= lastPage; i++) {
      totalarr.push(i)
    }

    setTotal(totalarr)
  }, [firstPage, lastPage, totalPage])

  return (
    <div className={styled.paginationContainer}>
      <button
        className={styled.directionContainer}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <BsArrowLeftShort className={styled.directionIcon} />
        <span className={styled.directionTitle}>Pre</span>
      </button>

      <div className={styled.pageContainer}>
        {total.map((item) => (
          <button
            key={item}
            className={page === item ? styled.selectNum : styled.num}
            onClick={() => handlePageClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        className={styled.directionContainer}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
      >
        <span className={styled.directionTitle}>Next</span>
        <BsArrowRightShort className={styled.directionIcon} />
      </button>
    </div>
  )
}

export default Paginaition
