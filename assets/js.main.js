function htt_orion(){

setTimeout(function(){

var senderid = $("#senderid").val();
var sendername = $("#sendername").val();
var loverid = $("#loverid").val();
var lovername = $("#lovername").val();
swal({  

 title: "Thím nhận được một món quà !",   
text: sendername + " vừa gửi thím một món quà đặc biệt", 
 imageUrl: "https://graph.facebook.com/"+senderid+"/picture?type=large",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà",
   cancelButtonText: "No, thank you.", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Thím có phải là Sho ?",
  text: "Nhập mã xác nhận. Gợi ý: full name, không cách ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "shomustang") {   
  swal.showInputError("Sai rồi thím :v ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Nhập tên món quà nào đó :3~ ", 
  text: lovername + " Thím muốn nhận gì =)) ? ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: ".... " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("OK ! ", "Món quà : " + inputValue + " sẽ tặng cho thím trong 10s nữa hãy đợi nhé, giờ thì good night nha ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Thím vừa từ chối món quà từ "+ sendername +" ,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

