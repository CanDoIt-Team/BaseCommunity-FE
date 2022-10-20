import { Link } from 'react-router-dom'
import styled from '../styles/Main.module.css'

export const Main = () => {
  return (
    <div className={styled.mainContainer}>
      <div className={styled.projectAndBoardWrap}>
        <div className={styled.containerWrap}>
          <div className={styled.containerTitleGroup}>
            <h3 className={styled.containerTitle}>최근 올라온 프로젝트</h3>
            <Link to="/project">
              <span className={styled.containerMore}>더보기</span>
            </Link>
          </div>
          <ul className={styled.boardContainer}>
            <div className={styled.boardWrap}>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className={styled.containerWrap}>
          <div className={styled.containerTitleGroup}>
            <h3 className={styled.containerTitle}>게시판</h3>
            <Link to="/board">
              <span className={styled.containerMore}>더보기</span>
            </Link>
          </div>
          <div className={styled.boardContainer}>
          <ul className={styled.boardContainer}>
            <div className={styled.boardWrap}>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
            </div>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
