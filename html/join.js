module.exports=`
<style>
* {
     margin: 0;
     padding: 0;
 }

 @media all and (min-width:720px) {
     #join {
         width: 50vw;
         height: auto;
         border: 1px solid black;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         padding: 1%;
         box-sizing: border-box;
     }
     .txt {
         width: 30%;
         float: left;
         text-align: center;
         font-size: 14px;
         margin-bottom: 10px;
     }
     .inp {
         width: 68%;
         float: left;
         text-align: left;
         margin-bottom: 10px;
     }
     .submit {
         display: block;
         width: auto;
         text-align: center;
         margin: 0 auto;
     }
     .inp.more {
         height: 60px;
         line-height: 60px;
         text-align: left;

     }
 }
 @media all and (max-width:719px){
     #join {
         width: 50vw;
         height: auto;
         border: 1px solid black;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         padding: 1%;
         box-sizing: border-box;
     }
     .txt {
         width: 30%;
         float: left;
         text-align: center;
         font-size: 14px;
         margin-bottom: 10px;
     }
     .inp {
         width: 68%;
         float: left;
         text-align: left;
         margin-bottom: 10px;
     }
     .submit {
         display: block;
         width: auto;
         text-align: center;
         margin: 0 auto;
     }
     .inp.more {
         height: 60px;
         line-height: 60px;
         text-align: left;

     }
 }
 @media all and (max-width:615px){
     #join {
         width: 75vw;
         height: auto;
         border: 1px solid black;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         padding: 1%;
         box-sizing: border-box;
     }
     .txt {
         width: 30%;
         float: left;
         text-align: center;
         font-size: 14px;
         margin-bottom: 10px;
     }
     .inp {
         width: 68%;
         float: left;
         text-align: left;
         margin-bottom: 10px;
     }
     .submit {
         display: block;
         width: auto;
         text-align: center;
         margin: 0 auto;
     }
     .inp.more {
         height: 60px;
         line-height: 60px;
         text-align: left;

     }
 }
 @media all and (max-width:400px){
     #join {
         width: 75vw;
         height: auto;
         border: 1px solid black;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         padding: 1%;
         box-sizing: border-box;
     }
     .txt {
         width: 30%;
         float: left;
         text-align: center;
         font-size: 12px;
         margin-bottom: 10px;
     }
     .inp {
         width: 68%;
         float: left;
         text-align: left;
         margin-bottom: 10px;
     }
     .submit {
         display: block;
         width: auto;
         text-align: center;
         margin: 0 auto;
     }
     .inp.more {
         height: 60px;
         line-height: 60px;
         text-align: left;

     }
 }
    </style>
<form id="join" action="join/joincomplete" method="post">
        <label class="txt">아이디:</label>
        <input class="inp" type="text" name="ID" placeholder="영어와 숫자 조화르르 하십시오">
        <label class="txt">비밀번호:</label>
        <input class="inp" type="password" name="PW">
        <label class="txt">주민등록번호:</label>
        <input class="inp" type="text" name="RRN" placeholder="'-'기호를 빼고 입력하시오.">
        <label class="txt">주소입력:</label>
        <input class="inp more" type="textarea" name="add" placeholder="only English">
        <label class="txt">이메일</label>
        <input class="inp" type="text" name="email">
        <label class="txt">전화번호</label>
        <input class="inp" type="tel" name="tell">
        <input class="submit" type="submit" value="회원가입">
    </form>
`;
