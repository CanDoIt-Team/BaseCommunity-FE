import { useEffect, useState } from 'react'
import { useGetEmployments } from '../../hooks/useGetEmployments'
import Paginaition from '../../components/Paginaition'
import EmploymentsItems from '../employments/EmploymentsItems'
import Loading from '../Loading'

export const EmploymentsContainer = () => {
  const [page, setPage] = useState(1)
  const { data } = useGetEmployments(page)
  const totalPage = data?.totalPages;

  const [employments, setEmployments] = useState([])

  useEffect(() => {
    if (data) {
      setEmployments(data.content)
    }
  }, [data])

  return (
    <>
      {employments.length > 0 ? (
        <>
          <EmploymentsItems employments={employments} />
          <Paginaition
            totalPage={totalPage}
            page={page}
            setPage={setPage}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default EmploymentsContainer
