const boardCategory = [
  { eng: 'all', kor: '전체', active: true },
  { eng: 'free', kor: '자유', active: false },
  { eng: 'question', kor: '질문', active: false },
  { eng: 'review', kor: '면접후기', active: false },
  { eng: 'tip', kor: '면접팁', active: false },
]

const mypageCategory = [
  {title: '내 프로필', link: '/mypage', active: true},
  {title: '내 프로젝트', link: '/mypage/myproject', active: false},
  {title: '내 활동', link: '/mypage/myboard', active: false},
]

export { boardCategory, mypageCategory }
