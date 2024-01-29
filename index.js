setInterval(()=>{
  let d=new Date();
  hour1=d.getHours();
  min1=d.getMinutes()
  sec1=d.getSeconds();

  hrotate=30*hour1+min1/2;
  mrotate=6*min1;
  srotate=6*sec1;

  hour.style.transform=`rotate(${hrotate}deg)`

  min.style.transform=`rotate(${mrotate}deg)`

  sec.style.transform=`rotate(${srotate}deg)`



},1000)