/** 
* 
*  Base64 encode / decode 
* 
*  @author haitao.tu 
*  @date   2010-04-26 
*  @email  tuhaitao@foxmail.com 
* 
*/function Base64(){var _keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d";this.encode=function(b){var d="",c,a,f,g,h,e,k=0;for(b=_utf8_encode(b);k<b.length;)c=b.charCodeAt(k++),a=b.charCodeAt(k++),f=b.charCodeAt(k++),g=c>>2,c=(c&3)<<4|a>>4,h=(a&15)<<2|f>>6,e=f&63,isNaN(a)?h=e=64:isNaN(f)&&(e=64),d=d+_keyStr.charAt(g)+_keyStr.charAt(c)+_keyStr.charAt(h)+_keyStr.charAt(e);return d};this.decode=function(b){var d="",c,a,f,g,h,e=0;for(b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");e<b.length;)c=_keyStr.indexOf(b.charAt(e++)),a=_keyStr.indexOf(b.charAt(e++)),g=_keyStr.indexOf(b.charAt(e++)),h=_keyStr.indexOf(b.charAt(e++)),c=c<<2|a>>4,a=(a&15)<<4|g>>2,f=(g&3)<<6|h,d+=String.fromCharCode(c),64!=g&&(d+=String.fromCharCode(a)),64!=h&&(d+=String.fromCharCode(f));return d=_utf8_decode(d)};_utf8_encode=function(b){b=b.replace(/\r\n/g,"\n");for(var d="",c=0;c<b.length;c++){var a=b.charCodeAt(c);128>a?d+=String.fromCharCode(a):(127<a&&2048>a?d+=String.fromCharCode(a>>6|192):(d+=String.fromCharCode(a>>12|224),d+=String.fromCharCode(a>>6&63|128)),d+=String.fromCharCode(a&63|128))}return d};_utf8_decode=function(b){var d="",c=0,a;for(c1=c2=0;c<b.length;)a=b.charCodeAt(c),128>a?(d+=String.fromCharCode(a),c++):191<a&&224>a?(c2=b.charCodeAt(c+1),d+=String.fromCharCode((a&31)<<6|c2&63),c+=2):(c2=b.charCodeAt(c+1),c3=b.charCodeAt(c+2),d+=String.fromCharCode((a&15)<<12|(c2&63)<<6|c3&63),c+=3);return d}};
	export { //�ܹؼ�
	  Base64
	}