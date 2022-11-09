import styled from '../../styles/mypage/Mypage.module.scss'

export const MypageCategory = ({ category, setCategory }) => {
  const handleClick = (item) => {
    const val = item
    setCategory(
      category.map((item) =>
        item.title === val
          ? { ...item, active: true }
          : { ...item, active: false },
      ),
    )
  }

  return (
    <>
      <div className={styled.linkContainer}>
        <ul className={styled.linkGroup}>
          {category.map((item, idx) => (
            <li
              className={
                item.active
                  ? `${styled.category} ${styled.active}`
                  : styled.category
              }
              key={idx}
              onClick={() => handleClick(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MypageCategory
