const express=require('express');
const app=express();
const fs=require('fs');
const mysql=require('mysql');
const qs=require('querystring');
const css=require('./resetcss.js');
let header=require('./header.js');
let reset=require('./reset.js');
let body=require('./body.js');
let recom=require('./recom.js');
let inner=require('./innser.js');
let outer=require('./outer.js');
let login=require('./login.js');
let join=require('./join.js');
let html=require('./html.js');
let write=require('./writing.js');
let jquery=require('./jquery.js');
let answer=require('./answer.js');
let beforTab=require('./beforTab.js');
let afterTab=require('./afterTab.js');
let ran=require('./random.js');
let logsel=false;//로그인 전후의 판결할 값,로그인 후 true,전 false
let ress=0;
let arr;
let art="";
let text;
let beforenav=require('./beforenav.js');//로그인 전 subnav
let afternav=require('./afternav.js');//로그인 후 subnav
let numb=[];//게시판 번호가 들어갈 배열
let tit=[];//게시판 제목이 들어갈 배열
let writ=[];//게시판 글쓴이가 들어갈 배열
let date=[];//게시판 날짜가 들어갈 배열
let cou=[];//게시판 조회수
let user="";//로그인 후 유저저장
const end=`     </div>
            </figure>
          </section>
        </section>
      </div>
    </body>
</html>`
let template;
let sum;
let sente;
app.use(express.static('imgs'));

/*필수 모듈연결*/
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'apmsetup',
  database : 'bootcamp'
});
db.connect();
app.get('/',function(req,res){
  fs.readdir('./imgs/recom/img',function(erro,filelist){
    arr=ran(filelist);
    console.log(arr);
  })
  fs.readdir('./imgs/recom/text',function(erro,filelist){
    text=ran(filelist);
    console.log(text);
  });

  template="";
  sum="";
  if(logsel==true){
      template=html(reset,css,header(afternav,afterTab),body,recom(arr,text),inner,outer,jquery());
  }
  else if(logsel==false){
    if(ress==1){
      art=`<script>alert('아이디와 비번 불일치')</script>`;
    }
    ress=0;
    setTimeout(function(){
      template=html(reset,css,header(beforenav,beforTab),body,recom(arr,text),inner,outer,jquery());
    },500);
  }
  db.query('select b_num,b_title,b_write,day,count from board',function(error,table){
    if(error){throw error;}
    var numcout=0;
    numb=[];//게시판 번호가 들어갈 배열
    tit=[];//게시판 제목이 들어갈 배열
    writ=[];//게시판 글쓴이가 들어갈 배열
    date=[];//게시판 날짜가 들어갈 배열
    cou=[];
    for(var counts in table){
      numb.push(table[numcout]['b_num']);
      tit.push(table[numcout]['b_title']);
      writ.push(table[numcout]['b_write']);
      date.push(table[numcout]['day']);
      cou.push(table[numcout]['count']);
      numcout++;
    }
  });
  setTimeout(function(){
    var j=0;
  for (var c in tit) {
    j++;
    var after=`
      <ul class="list">
        <li>${numb[c]}</li>
        <li><a href="/mysql/${j}" title="내용을 볼수 있음">${tit[c]}</a></li>
        <li><a href="/sql/answer/${j}" title="답글을 달 수 있음">${writ[c]}</a></li>
        <li>${date[c]}</li>
        <li>${cou[c]}</li>
      </ul>
    `;
    sum+=after;
  }
},500);
  setTimeout(function(){
    if(ress==4){
      art=`<script>alert('${sente}')</script>`;
    }
    ress=0;
    template+=art;
    template+=sum;
    template+=end;
    res.send(template);
  },1000);
});
app.get(`/mysql/:pageId`,function(req,res){
  var k=req.params['pageId'];
  db.query(`select * from board where b_num=${k}`,function(error,reason){
    if(error){throw error}
    let count=reason[0]['count'];
    count++;
    db.query(`update board set count=${count} where b_num=${k}`,function(error,result){});
    sente="";
    sente+=`글 제목:${reason[0]['b_title']},글 내용:${reason[0]['b_sentence']},작성자:${reason[0]['b_write']}`
    sente+=`댓글자:${reason[0]['answerUser']},답글 내용:${reason[0]['answer']}`;
    ress=4;
    res.writeHead(302, {Location: `/`});
    res.end();
  })
})
let ansSql=0;
app.get('/sql/answer/:pageId',function(req,res){
    ansSql=req.params['pageId'];
    if(logsel==false){
      ress=3;
      res.writeHead(302,{Location:'/'});
      res.end();
    }
    else{
      res.send(answer);
    }
});
app.post('/answer/complete',function(req,res){

    var body = '';
      req.on('data', function(data){
          body = body + data;
      });
      req.on('end', function(){
          var post=qs.parse(body);
          var dear=post.write;
          var ansWer=post.answ;
          db.query(`update board set answerUser=?,answer=? where b_num=${ansSql}`,[dear,ansWer],function(error,reason){
            if(error){throw error}
          });
      });
  res.writeHead(302,{Location: `/`});
  res.end();
})
app.get('/log',function(req,res){
  res.send(login);
})
app.get('/logout',function(req,res){
  logsel=false;
  ress=0;
  res.writeHead(302, {Location: `/`});
  res.end();
})
app.post('/log/logcomplete',function(req,res){
  var body = '';
    req.on('data', function(data){
        body = body + data;
    });
    req.on('end', function(){
        var post=qs.parse(body);
        var Id=post.ID;
        var Pw=post.PASSWORD;
        let i=0;
        db.query('select id,password from member',function(error,tabs){
          if(error){throw error;}
          for (var j in tabs) {
            if(Id == tabs[i]['id'] && Pw==tabs[i]['password']){
              logsel=true;
              user=Id;
              ress=0;
              break;
            }
            else if(Id != tabs[i]['id'] || Pw!=tabs[i]['password']){
              ress=1;
            }
            else{
              ress=2;
            }
            i++;
          }
          res.writeHead(302, {Location: `/`});
          res.end();
        })
    });
})
app.get('/join',function(req,res){
  res.send(join);
});
app.post('/join/joincomplete',function(req,res){
  var body = '';
    req.on('data', function(data){
        body = body + data;
    });
    req.on('end', function(){
        var post = qs.parse(body);
        var id = post.ID;
        var password = post.PW;
        var rrn=post.RRN;
        var address=post.add;
        var email=post.email;
        var tell=post.tell;
        db.query('insert into member(id,password,RRN,address,email,tel) values(?,?,?,?,?,?)',[id,password,rrn,address,email,tell],function(err,results){
          if(err){console.log(err);}
          console.log(results);
        });
        res.writeHead(302, {Location: `/`});
        res.end();
    });
});
app.get('/writing',function(req,res){
  if(logsel==false){
    ress=3;
    res.writeHead(302,{Location:'/'});
    res.end();
  }
  else{
    res.send(write);
  }
})
app.post('/writing/complete',function(req,res){
    var body="";
    req.on('data', function(data){
        body = body + data;
    });
    req.on('end', function(){
        var past = qs.parse(body);
        var b_title = past.title;
        var b_writing = past.sentence;
        db.query('insert into board(b_num,b_title,b_sentence,b_write,day,count) values(null,?,?,?,now(),1)',[b_title,b_writing,user],function(err,results){
          if(err){console.log(err);}
        });
        res.writeHead(302, {Location: `/`});
        res.end();
    });

})
app.listen(4000,function(){
  console.log('Connect complete port:4000');
});
