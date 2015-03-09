p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ����unicode/utf16utf16�package utf16
func @"".Decode(@"".s []uint16) (? []rune)
func @"".DecodeRune(@"".r1 rune, @"".r2 rune) (? rune)
func @"".Encode(@"".s []rune) (? []uint16)
func @"".EncodeRune(@"".r rune) (@"".r1 rune, @"".r2 rune)
func @"".IsSurrogate(@"".r rune) (? bool)
$$
FF=$sliceType($Uint16);F GG=$sliceType($Int32);G unicode/utf16.IsSurrogateA\A=$pkg.IsSurrogate=function(a){var $ptr,a;$ptr={};      �return 55296<=a&&a<57344;    };IsSurrogateunicode/utf16.IsSurrogate unicode/utf16.DecodeRuneB��B=$pkg.DecodeRune=function(a,b){var $ptr,a,b;$ptr={};      �    if(55296<=a&&a<56320&&56320<=b&&b<57344){  �return((((a-55296>>0))<<10>>0)|((b-56320>>0)))+65536>>0;    }  $return 65533;    };
DecodeRuneunicode/utf16.DecodeRune unicode/utf16.EncodeRuneC�C=$pkg.EncodeRune=function(a){var $ptr,a,b,c,d,e,f,g;$ptr={};b=0;c=0;      $    if(a<65536||a>1114111||A(a)){  Y    d=65533;e=65533;b=d;c=e;return[b,c];    }  �  �a=a-(65536)>>0;      �    f=55296+(((a>>10>>0))&1023)>>0;g=56320+(a&1023)>>0;b=f;c=g;return[b,c];    };
EncodeRuneunicode/utf16.EncodeRuneunicode/utf16.IsSurrogate unicode/utf16.EncodeD�|D=$pkg.Encode=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m;$ptr={};      3b=a.$length;  @c=a;d=0;while(true){if(!(d<c.$length)){break;}e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  X    if(e>=65536){  n  nb=b+(1)>>0;        }    d++;}  {f=$makeSlice(F,b);  �b=0;  �g=a;h=0;while(true){if(!(h<g.$length)){break;}i=((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]);  �  �if(i<0||55296<=i&&i<57344||i>1114111){  �i=65533;  	  -((b<0||b>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+b]=(i<<16>>>16));  A  Ab=b+(1)>>0;          }else if(i<65536){  -((b<0||b>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+b]=(i<<16>>>16));  A  Ab=b+(1)>>0;        }else{  Sj=C(i);k=j[0];l=j[1];  n((b<0||b>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+b]=(k<<16>>>16));  �(m=b+1>>0,((m<0||m>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+m]=(l<<16>>>16)));  �  �b=b+(2)>>0;        }    h++;}  �return $subslice(f,0,b);    };Encodeunicode/utf16.Encodeunicode/utf16.EncodeRuneunicode/utf16.F unicode/utf16.DecodeE�hE=$pkg.Decode=function(a){var $ptr,a,b,c,d,e,f,g,h;$ptr={};      	7b=$makeSlice(G,a.$length);  	Rc=0;  	Z  	^d=0;while(true){if(!(d<a.$length)){break;}  	z  	�e=((d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]);  	�if(55296<=e&&e<56320&&(d+1>>0)<a.$length&&56320<=(f=d+1>>0,((f<0||f>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+f]))&&(g=d+1>>0,((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g]))<57344){  
((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]=B((e>>0),((h=d+1>>0,((h<0||h>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+h]))>>0)));  
4  
4d=d+(1)>>0;      
;  
;c=c+(1)>>0;          
A}else if(55296<=e&&e<57344){  
�((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]=65533);  
�  
�c=c+(1)>>0;        }else{  
�((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]=(e>>0));  
�  
�c=c+(1)>>0;        }      	r  	rd=d+(1)>>0;    }  
�return $subslice(b,0,c);    };Decodeunicode/utf16.Decodeunicode/utf16.DecodeRuneunicode/utf16.G �o{"Base":2800,"Files":[{"Name":"/usr/local/go/src/unicode/utf16/utf16.go","Base":1,"Size":2798,"Lines":[0,56,110,160,161,232,246,247,310,365,440,441,449,514,583,585,586,594,648,701,746,762,778,794,795,815,817,818,882,917,949,981,983,984,1047,1119,1165,1201,1262,1311,1314,1338,1340,1341,1416,1492,1530,1570,1622,1664,1667,1682,1729,1731,1732,1808,1841,1854,1877,1898,1905,1909,1912,1913,1937,1944,1967,1978,2030,2053,2068,2089,2109,2116,2127,2154,2175,2198,2208,2212,2215,2230,2232,2233,2295,2324,2357,2384,2392,2423,2445,2495,2533,2564,2608,2615,2622,2654,2687,2713,2720,2731,2749,2767,2774,2778,2781,2796],"Infos":null}]}
 