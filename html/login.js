module.exports=`
<style>
@media all and (min-width:1220px) {
    #login {
        width: 25vw;
        height: auto;
        border: 1px solid black;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
    }
}
@media all and (max-width:1219px) and (min-width:721px) {
    #login {
        width: 40vw;
        height: auto;
        border: 1px solid black;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
    }
}
@media all and (max-width:720px) {
    #login {
        width: 60vw;
        height: auto;
        border: 1px solid black;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1%;
    }
}
@media all and (min-width:400px) {
    .lab {
        text-align: center;
        font-size: 14px;
        font-weight: 100;
        float: left;
        width: 30%;
    }
}
@media all and (max-width:400px) {
    .lab {
        text-align: center;
        font-size: 13px;
        font-weight: 100;
        float: left;
        width: 27%;
    }
}
.input {
    width: 100%;
    height: 50px;
    float: left;

}
.blo {
    width: 60%;
    height: 25px;
    float: left;
    margin-left: 7%;
    border: 1px solid gray;
    box-sizing: border-box;
}
#btnlog {
    display: block;
    margin: 0 auto;
}
    </style>
<form id="login" action="/log/logcomplete" method="post">
            <div class="input">
                <label class="lab">아이디</label>
                <input class="blo" type="text" name="ID">
            </div>
            <div class="input">
                <label class="lab">비밀번호</label>
                <input class="blo" type="password" name="PASSWORD">
            </div>
            <input type="submit" value="로그인" id="btnlog">
        </form>`
