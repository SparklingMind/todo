import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DiaryWrite from "./DiaryWrite";
import "./DiaryHome.css";

//마크다운 에디터
import MDEditor from "@uiw/react-md-editor";

function DiaryHome() {
  const [diaryList, setDiaryList] = useState([]);

  //임시 날짜
  const date = 20230821;

  const viewDiaryList = async () => {
    const res = await axios.get(
      `http://34.64.151.119/api/posts/?date=${date}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGU2OWE2Y2VmYTZmNjdiZjc0MTZhYzAiLCJpYXQiOjE2OTI4MzQ0NTQsImV4cCI6MTcwMDYxMDQ1NH0.IXDlGN3E_OmlKteegULvlDtMsyb_wF59_vJgH6LJuww`,
        },
      }
    );
    console.log(res.data);
    setDiaryList(res.data);
  };

  useEffect(() => {
    viewDiaryList(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  return (
    <section className="wrapper">
      <Link to="/DiaryWrite">
        <button className="diary-write-btn" type="button">
          글쓰기
        </button>
      </Link>
      <ul className="diary-list">
        {diaryList.map((diaryListItem) => (
          // map 함수로 데이터 출력
          <li className="diary-list-item" key={diaryListItem.idx}>
            <h4 className="diary-list-title">{diaryListItem.title}</h4>
            <MDEditor.Markdown
              className="diary-list-content"
              source={diaryListItem.content}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DiaryHome;
