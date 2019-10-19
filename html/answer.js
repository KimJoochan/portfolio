module.exports=`
<style>
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
        .input{
            width: 100%;
            height: 50px;
            float: left;

        }
        .lab{
            text-align: center;
            font-size: 18px;
            font-weight: 100;
            float: left;
            width: 120px;
        }
        .blo{
            width: 200px;
            height: 25px;
            float: left;
            margin-left: 30px;
            border: 1px solid gray;
            box-sizing: border-box;
        }
        #btnlog{
            display: block;
            margin: 0 auto;
        }
    </style>
<form id="login" action="/answer/complete" method="post">
            <div class="input">
                <label class="lab">From 아이디</label>
                <input class="blo" type="text" name="write">
            </div>
            <div class="input">
                <label class="lab">답글</label>
                <input class="blo" type="text" name="answ">
            </div>
            <input type="submit" value="전송" id="btnlog">
        </form>`
