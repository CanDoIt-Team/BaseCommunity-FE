import Button from '../components/Button'
import ProjectShow from './../components/project/ProjectShow'

import { useNavigate } from 'react-router-dom'

export default function Project() {
  const navigate = useNavigate()

  return (
    <>
      <Button onClick={() => navigate('write')} />
      <ProjectShow />
    </>
  )
}
