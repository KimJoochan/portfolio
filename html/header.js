module.exports=function(subnav,subtabNav){
  return `<header id="head">
     <div class="wrap">
         ${subnav}
         <nav id="mainNav">
             <h1 id="logo"></h1>
             <ul id="nav">
                 <li><a href="#">고시원 찾기</a>
                     <ul class="subNav">
                         <li><a href="#">서울틀별시</a></li>
                         <li><a href="#">부산광역시</a>
                             <ul class="dowNav">
                                 <li><a href="#">동래구</a></li>
                                 <li><a href="#">부산진구</a></li>
                                 <li><a href="#">금정구</a></li>
                                 <li><a href="#">금정구</a></li>
                                 <li><a href="#">금정구</a></li>
                                 <li><a href="#">금정구</a></li>
                             </ul>
                         </li>
                         <li><a href="#">광주광역시</a></li>
                         <li><a href="#">전라도</a></li>
                         <li><a href="#">경상도</a></li>
                         <li><a href="#">충청도</a></li>
                     </ul>
                 </li>
                 <li><a href="#">객실</a>
                 <ul class="subNav">
                     <li><a href="#">서울틀별시</a></li>
                     <li><a href="#">부산광역시</a>
                         <ul class="dowNav">
                             <li><a href="#">동래구</a></li>
                             <li><a href="#">부산진구</a></li>
                             <li><a href="#">금정구</a></li>
                             <li><a href="#">금정구</a></li>
                             <li><a href="#">금정구</a></li>
                             <li><a href="#">금정구</a></li>
                         </ul>
                     </li>
                     <li><a href="#">광주광역시</a></li>
                     <li><a href="#">전라도</a></li>
                     <li><a href="#">경상도</a></li>
                     <li><a href="#">충청도</a></li>
                 </ul>
                 </li>
                 <li><a href="#">내부시설</a>
                 <ul class="subNav">
                     <li><a href="#">서울틀별시</a></li>
                     <li><a href="#">부산광역시</a>
                         <ul class="dowNav">
                             <li><a href="#">동래구</a></li>
                             <li><a href="#">부산진구</a></li>
                             <li><a href="#">금정구</a></li>
                             <li><a href="#">금정구</a></li>
                             <li><a href="#">금정구</a></li>
                             <li><a href="#">금정구</a></li>
                         </ul>
                     </li>
                     <li><a href="#">광주광역시</a></li>
                     <li><a href="#">전라도</a></li>
                     <li><a href="#">경상도</a></li>
                     <li><a href="#">충청도</a></li>
                 </ul>
                 </li>
                 <li><a href="#">부대시설</a></li>
                 <li><a href="#">오시는 길</a></li>
                 <li><a href="#">고객센터</a></li>
             </ul>
         </nav>
     </div>
 </header>
 <div id="tabNav">
         <h1 id="tabBut"><img src="tabNav.png"></h1>
         ${subtabNav}
         <ul id="tabMainNav">
             <li><a href="#">서울</a>
                 <ul class="tabSubNav">
                     <li><a href="#">강북</a></li>
                     <li><a href="#">강남</a></li>
                     <li><a href="#">인천</a></li>
                     <li><a href="#">여의도</a></li>
                     <li><a href="#">의정부</a></li>
                 </ul>
             </li>
             <li><a href="#">부산</a>
                 <ul class="tabSubNav">
                     <li><a href="#">강서구</a></li>
                     <li><a href="#">동래구</a></li>
                     <li><a href="#">부산진구</a></li>
                     <li><a href="#">금정구</a></li>
                     <li><a href="#">남포동</a></li>
                 </ul>
             </li>
             <li><a href="#">경기</a>
             <ul class="tabSubNav">
                 <li><a href="#">강남구</a></li>
                 <li><a href="#">강서구</a></li>
                 <li><a href="#">강북구</a></li>
                 <li><a href="#">강동구</a></li>
             </ul>
             </li>
             <li><a href="#">전라</a>
             <ul class="tabSubNav">
                 <li><a href="#">모름</a></li>
                 <li><a href="#">모름</a></li>
                 <li><a href="#">모름</a></li>
                 <li><a href="#">모름</a></li>
             </ul>
             </li>
             <li><a href="#">경상</a>
             <ul class="tabSubNav">
                 <li><a href="#">모름</a></li>
                 <li><a href="#">모름</a></li>
                 <li><a href="#">모름</a></li>
                 <li><a href="#">모름</a></li>
             </ul>
             </li>
             <li><a href="#">충청</a>
             <ul class="tabSubNav">
                 <li><a href="#">모름</a></li>
                 <li><a href="#">모름</a></li>
                 <li><a href="#">모름</a></li>
                 <li><a href="#">모름</a></li>
             </ul>
             </li>
             <li><a href="#">제주</a></li>
         </ul>
     </div>
 `

};
