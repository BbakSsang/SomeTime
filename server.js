//express불러오기
const express = require("express");

//express 사용
const app =express();

//포트번호 설정
const port= 5000;

//http 서버 실행
app.listen(port,()=>{

    console.log("서버가 정상적으로 실행되었습니다.")
});
// http:/localhost:5000/ 경로 접근시
app.get("/",(request,response)=>{
    response.send("성공입니다 수정완 노데몬");
});