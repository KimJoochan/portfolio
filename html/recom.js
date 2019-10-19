module.exports=function(arr,text){
  return `

  <section id="recom" class="bodySub">
     <h1 class="recTitle" id="mbTi">추천 고시원룸</h1>
     <figure class="allBody" id="mbAllbody">
         <h1 class="recTitle" id="pcTit">추천 고시원룸</h1>
         <ul id="recChart">
             <li><img src="recom/img/${arr[0]}">
                 <div class="moreView">
                     <h1 class="recoTitle">${text[0]}</h1>
                     <input class="moreBtn" id="detail" type="button" value="자세히 보기">
                     <input class="moreBtn" id="reser" type="button" value="예약하기">
                 </div>
             </li>
             <li><img src="recom/img/${arr[2]}">
                 <div class="moreView">
                     <h1 class="recoTitle">${text[2]}</h1>
                     <input class="moreBtn" id="detail" type="button" value="자세히 보기">
                     <input class="moreBtn" id="reser" type="button" value="예약하기">
                 </div>
             </li>
             <li><img src="recom/img/${arr[3]}">
                 <div class="moreView">
                     <h1 class="recoTitle">${text[3]}</h1>
                     <input class="moreBtn" id="detail" type="button" value="자세히 보기">
                     <input class="moreBtn" id="reser" type="button" value="예약하기">
                 </div>
             </li>
             <li><img src="recom/img/${arr[4]}">
                 <div class="moreView">
                     <h1 class="recoTitle">${text[4]}</h1>
                     <input class="moreBtn" id="detail" type="button" value="자세히 보기">
                     <input class="moreBtn" id="reser" type="button" value="예약하기">
                 </div>
             </li>
             <li><img src="recom/img/${arr[5]}">
                 <div class="moreView">
                     <h1 class="recoTitle">${text[5]}</h1>
                     <input class="moreBtn" id="detail" type="button" value="자세히 보기">
                     <input class="moreBtn" id="reser" type="button" value="예약하기">
                 </div>
             </li>
             <li><img src="recom/img/${arr[1]}">
                 <div class="moreView">
                     <h1 class="recoTitle">${text[1]}</h1>
                     <input class="moreBtn" id="detail" type="button" value="자세히 보기">
                     <input class="moreBtn" id="reser" type="button" value="예약하기">
                 </div>
             </li>
         </ul>
     </figure>
 </section>`
}
