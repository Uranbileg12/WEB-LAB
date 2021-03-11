function months(ehlel, honog){
  var tooluur, ehnii_mor=1;
  document.write("&nbsp&nbsp&nbsp&nbsp", "M", "&nbsp&nbsp&nbsp&nbsp", 
  "T", "&nbsp&nbsp&nbsp&nbsp", "W", "&nbsp&nbsp&nbsp&nbsp", "T", "&nbsp&nbsp&nbsp&nbsp", 
  "F", "&nbsp&nbsp&nbsp&nbsp&nbsp", "S", "&nbsp&nbsp&nbsp&nbsp&nbsp", "S", '<br>');
  for(var odor=1; odor<=honog; odor++)
  {
      if(ehnii_mor)
      {
          if(ehlel>odor)
          {
              document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
          }
          else{
              document.write("&nbsp&nbsp&nbsp&nbsp", 1);
              odor=1;
              ehnii_mor=0;
              tooluur=ehlel;
          }
      }
      else{
          if(tooluur==7)
          {
              tooluur=1;
              document.write('<br>');
          }
          else{
              tooluur++;
          }
          if(odor<10){
            document.write("&nbsp&nbsp");
          }
          if(odor<=honog)
          {
              document.write("&nbsp&nbsp&nbsp");
          document.write(odor);
          }
      }
  }
}
document.write("<h2>March</h2>")
months(1,31);
document.write("<h2>June</h2>")
months(2,30);
document.write("<h2>September</h2>")
months(3,31);
document.write("<h2>December</h2>")
months(3,31);