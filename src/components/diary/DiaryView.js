import React from "react";
import axios from "axios";
import "./DiaryView.css";

//마크다운 에디터
import MDEditor from "@uiw/react-md-editor";

function DiaryView() {
  const diaryTitle = `가져온 제목`;
  const diaryContent = `**content**`;

  // const fetchData = async () => {
  //   const res = await axios.get(
  //     "http://34.64.151.119/api/post/64dfd3daf1361a8eb6858502"
  //   );
  //   console.log(res.data);
  //   return res.data;
  // };
  // fetchData();

  return (
    <section className="diary-view-wrap">
      <div className="diary-view-box">
        <h2 className="diary-view-title">{diaryTitle}</h2>
        <MDEditor.Markdown className="diary-viewer" source={diaryContent} />
        <div className="diary-view-btns">
          <button type="button">목록</button>
          <button type="submit">수정</button>
          <button type="submit">삭제</button>
        </div>
      </div>
    </section>
  );
}

export default DiaryView;
