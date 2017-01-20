function WirteFlashBlock(strURL,nWidth,nHeight,strBkColor,strID,strAlignMode,strQuality,strFlashVars)
{
 var embedTxt;
 embedTxt = "<embed";
 if (strURL==null)
 {
  return;
 }
 embedTxt += ' src="'+strURL+'"';
 document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"');
 if (nHeight)
 {
  document.write(' height="'+nHeight+'"');
  embedTxt += ' height="'+nHeight+'"';
 }
 if (nWidth)
 {
  document.write(' width="'+nWidth+'"');
  embedTxt += ' width="'+nWidth+'"';
 }
 if (strID)
 { 
  document.write(' id="'+strID+'"');
  embedTxt += ' name="'+strID+'"';
 }
 if (strAlignMode)
 {
  document.write(' align="'+strAlignMode+'"');
  embedTxt += ' align="'+strAlignMode+'"';
 } 
 document.write('>');
 document.writeln('<param name="menu" value="false">');
 document.writeln('<param name="WMode" value="Transparent">');
 embedTxt += ' menu="false"';
 document.writeln('<param name="allowScriptAccess" value="always" />');
 embedTxt += ' allowScriptAccess="always"';
 if (strFlashVars)
 {
  document.writeln('<PARAM NAME=FlashVars VALUE="'+strFlashVars+'">');
  embedTxt += ' FlashVars="'+strFlashVars+'"';
 } 
 document.writeln('<param name="movie" value="'+strURL+'" />');
 if (strQuality)
 {
  document.writeln('<param name="quality" value="'+strQuality+'" />');
  embedTxt += ' quality="'+strQuality+'"';
 }
 else
 {
  document.writeln('<param name="quality" value="High" />');
  embedTxt += ' quality="High"';
 }
 if (strBkColor)
 {
  document.writeln('<param name="bgcolor" value="'+strBkColor+'" />');
  embedTxt += ' bgcolor="'+strBkColor+'"';
 }
 embedTxt += ' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"  swLiveConnect="true" ></embed>';
 document.writeln(embedTxt);
 document.writeln('</object>');
}