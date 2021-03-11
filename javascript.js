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
document.write("<h2>February</h2>")
months(1,28);
document.write("<h2>May</h2>")
months(5,31);
document.write("<h2>August</h2>")
months(7,31);
document.write("<h2>November</h2>")
months(1,30);
    