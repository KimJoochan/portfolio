module.exports=`
<style>
       * {
           margin: 0;
           padding: 0;
       }
       @media all and (min-width:1220px) {
                  #board {
                      width: 25vw;
                      height: auto;
                      border: 1px solid black;
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      padding: 1%;
                      box-sizing: border-box;
                  }
              }
      @media all and (max-width:1219px) {
                  #board {
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
              }
       .input{
           width: 100%;
           height: auto;
           margin:10px 0;
       }
       .txt{
           border: 1px solid #666;
           box-sizing: border-box;
       }
       #tit{
           height: 30px;
       }
       #subm{
           width: 100px;
           float: right;
           margin-right: 20px;
           text-align: center;
       }
       #sen{
           border: 1px solid #333;
           box-sizing: border-box;
       }
       .title{
           display: block;
           width: 50px;
           height: 30px;
           float: left;
           line-height: 30px;
       }
   </style>
<form id="board" action="/writing/complete" method="post">
        <div class="input">
            <label class="title">제목</label>
            <input type="text" name="title" class="txt" id="tit">
        </div>
        <div class="input">
            <label class="title">글내용</label>
            <textarea rows="5" cols="50" name="sentence" class="txt">
        </textarea>
        </div>
        <input type="submit" id="subm">
    </form>
`
