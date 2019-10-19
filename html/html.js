module.exports=function(reset,css,header,body,recom,inner,outer,js){return`
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <style>
      ${reset}
      ${css}
      </style>
      <script src="jquery-3.2.1.js"></script>
      <script>
        $(document).ready(function(){
          ${js}
        })
      </script>
      <title></title>
    </head>
    <body>
      ${header}
      <script>
        ${js}
      </script>
      <div id="body">
      ${body}
      <div class="wrap">
      ${recom}
      <section class="bodySub">
      ${inner}
      </section>
      <section class="bodySub">
      ${outer}
      </section>
      <section id="hidSection">
        <section id="howCome" class="hid">
          <figure class="allBody">
              <h2 class="abTitle">본사로 오시는 길</h2>
              <ul class="hidHalf">
                  <li><img src="howcome.PNG"></li>
                  <li>
                  <p>부산광역시 부산진구 양정동 양지로 54</p>
                  <p>538F+82 Busan</p>
                  <p>dit.ac.kr</p>
                  <p>051-524-0240</p>
                  <p>54 Yangji-ro, Yangjeong-dong, Busanjin-gu, Busan</p>
                  </li>
              </ul>
          </figure>
        </section>
        <section id="wirSec" class="hid">
            <figure class="allBody">
                <h2 class="abTitle">본사 게시판/FAQ</h2>
                <a id="wirte" href="/writing">글쓰기</a>
                <div id="faq">
                    <ul class="list">
                        <li>번호</li>
                        <li>제목</li>
                        <li>글쓴이</li>
                        <li>날짜</li>
                        <li>조회</li>
                    </ul>
`};
