module.exports=function(filelist){
  var array=new Array();
  var arr=new Array();
  var s;
  for (var i = 0; i <filelist.length; i++) {
    var ran=Math.floor(Math.random()*(filelist.length));
      for (j = 0; j < arr.length; j++) {
        if(ran==arr[j]){
          s=j;
          break;
        }
      }
      if(ran == arr[s]){
        i--;
        continue;
      }
      arr.push(ran);
      console.log(arr);
      array.push(filelist[ran]);
    }
    return array;
}
