var welcomeBtn=document.querySelector('.welcome');
var WelcomeBtn=document.querySelector('input[type="button"]');
var WelcomeInput=document.querySelector('input[name="msg"]');
welcomeBtn.addEventListener("click",function(){
    alert('"Welcome to JavaScript');
})
WelcomeBtn.addEventListener("click", Hienthi)
function Hienthi(){
    alert(WelcomeInput.value);
}

// CAU 6
checkBtn=document.querySelector('.check');
ageInput=document.querySelector('input[name="age"]');
function Check(){
    if(ageInput.value>=18)
        alert('du tuoi di tu');
    else alert('chua du');
}
checkBtn.addEventListener('click',Check);

// cau 7
num1=document.querySelector('input[name="num1"]');
num2=document.querySelector('input[name="num2"]');
sum=document.querySelector('input[name="sum"]');
sumBtn=document.querySelector('.sum');
sumBtn.addEventListener('click',function(){
    if(isNaN(num1.value)||isNaN(num2.value))
        alert('nhap lai gium!!');
    else 
    {
        
        sum.value=parseInt(num1.value)+parseInt(num2.value);
    }
    
})

// cau 8
// var number1 = prompt("Nhap so dau tien" );
// var  number2= prompt("Nhap so thu hai");
// var choice=prompt("Hay ghi phep tinh ban muon thuc hien:cong,tru,nhan,chia","cong/tru/nhan/chia");
// switch(choice)
// {
//     case "cong":
//         prompt("tong:",parseInt(number1)+parseInt(number2));
//         break;    
//     case "tru":
//         prompt("hieu:",parseInt(number1)-parseInt(number2));
//         break;
//     case "nhan":
//         prompt("tich:",parseInt(number1)*parseInt(number2));
//         break;
//     case "chia":
//         prompt("thuong:",parseInt(number1)/parseInt(number2));
//         break;
// }

// cau 9
// var n=prompt('nhap 1 so');
// while(isNaN(n))
//     {
//         var n=prompt('nhap 1 so');
//     }

// var text = "";
// var i = 0;
// do {
//     i++;
//     text += "    " + i;
//     }
// while (i < n);
// document.querySelector(".bai9").innerHTML = text; 

// cau 10
var n=prompt('nhap 1 so(cau10)');
while(isNaN(n))
    {
        var n=prompt('nhap 1 so(cau10)');
    }

var text = "";
var m=0;
for(var i=1;i<=n;i++)
{   
    m+=i;
}
document.querySelector(".bai9").innerHTML = m; 

// cau 11+12:
var person={
    name:'thien',
    age:20,
    dichuyen:function(){
        return this.age;
    }
}

