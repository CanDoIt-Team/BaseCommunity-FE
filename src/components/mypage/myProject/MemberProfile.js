import { useState, useEffect } from 'react'
import Image from '../../common/Image'

export default function MemberProfile({ className, users, nickname }) {
  const [path, setPath] = useState()

  useEffect(() => {
    const profileImage = () => {
      const res = users.filter((user) => {
        return user.member.nickname === nickname
      })

      console.log(res)
      return res
    }

    const result = profileImage()
    if (result.length > 0) {
      if (result[0].member.urlFilename) {
        setPath(result[0].member.urlFilename)
      }
    }
  }, [])

  useEffect(() => {
    console.log(path)
  }, [path])

  return <Image size={40} src={path} className={className} />
}
