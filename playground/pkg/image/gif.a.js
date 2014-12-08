0��6	image/gif�#�package gif
import bufio "bufio"
import lzw "compress/lzw"
import errors "errors"
import fmt "fmt"
import image "image"
import color "image/color"
import io "io"
import palette "image/color/palette"
import draw "image/draw"
func @"".Decode(@"".r @"io".Reader) (? @"image".Image, ? error)
func @"".DecodeAll(@"".r @"io".Reader) (? *@"".GIF, ? error)
func @"".DecodeConfig(@"".r @"io".Reader) (? @"image".Config, ? error)
func @"".Encode(@"".w @"io".Writer, @"".m @"image".Image, @"".o *@"".Options) (? error)
func @"".EncodeAll(@"".w @"io".Writer, @"".g *@"".GIF) (? error)
type @"".GIF struct { @"".Image []*@"image".Paletted; @"".Delay []int; @"".LoopCount int }
type @"".Options struct { @"".NumColors int; @"".Quantizer @"image/draw".Quantizer; @"".Drawer @"image/draw".Drawer }
type @"".blockReader struct { @"".r @"".reader; @"".slice []byte; @"".err error; @"".tmp [256]byte }
func (? *@"".blockReader) @"".Read(@"".p []byte) (? int, ? error)
type @"".blockWriter struct { @"".e *@"".encoder }
func (? @"".blockWriter) @"".Write(@"".data []byte) (? int, ? error)
func (? *@"".blockWriter) @"".Write(@"".data []byte) (? int, ? error)
type @"".decoder struct { @"".r @"".reader; @"".vers string; @"".width int; @"".height int; @"".flags byte; @"".headerFields byte; @"".backgroundIndex byte; @"".loopCount int; @"".delayTime int; @"".aspect byte; @"".imageFields byte; @"".transparentIndex byte; @"".hasTransparentIndex bool; @"".pixelSize uint; @"".globalColorMap @"image/color".Palette; @"".delay []int; @"".image []*@"image".Paletted; @"".tmp [1024]byte }
func (? *@"".decoder) @"".decode(@"".r @"io".Reader, @"".configOnly bool) (? error)
func (? *@"".decoder) @"".newImageFromDescriptor() (? *@"image".Paletted, ? error)
func (? *@"".decoder) @"".readBlock() (? int, ? error)
func (? *@"".decoder) @"".readColorMap() (? @"image/color".Palette, ? error)
func (? *@"".decoder) @"".readExtension() (? error)
func (? *@"".decoder) @"".readGraphicControl() (? error)
func (? *@"".decoder) @"".readHeaderAndScreenDescriptor() (? error)
type @"".encoder struct { @"".w @"".writer; @"".err error; @"".g *@"".GIF; @"".buf [1024]byte }
func (? *@"".encoder) @"".flush() ()
func (? *@"".encoder) @"".write(@"".p []byte) ()
func (? *@"".encoder) @"".writeByte(@"".b byte) ()
func (? *@"".encoder) @"".writeColorTable(@"".p @"image/color".Palette, @"".size int) ()
func (? *@"".encoder) @"".writeHeader() ()
func (? *@"".encoder) @"".writeImageBlock(@"".pm *@"image".Paletted, @"".delay int) ()
type @"".interlaceScan struct { @"".skip int; @"".start int }
type @"".reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".ReadByte() (@"io".c byte, @"io".err error) }
type @"".writer interface { @"".Flush() (? error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error); @"io".WriteByte(@"io".c byte) (? error) }
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"image".Image interface { @"image".At(@"image".x int, @"image".y int) (? @"image/color".Color); @"image".Bounds() (? @"image".Rectangle); @"image".ColorModel() (? @"image/color".Model) }
type @"image".Config struct { @"image".ColorModel @"image/color".Model; @"image".Width int; @"image".Height int }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"image".Paletted struct { @"image".Pix []uint8; @"image".Stride int; @"image".Rect @"image".Rectangle; @"image".Palette @"image/color".Palette }
func (? *@"image".Paletted) @"image".At(@"image".x int, @"image".y int) (? @"image/color".Color)
func (? *@"image".Paletted) @"image".Bounds() (? @"image".Rectangle)
func (? *@"image".Paletted) @"image".ColorIndexAt(@"image".x int, @"image".y int) (? uint8)
func (? *@"image".Paletted) @"image".ColorModel() (? @"image/color".Model)
func (? *@"image".Paletted) @"image".Opaque() (? bool)
func (? *@"image".Paletted) @"image".PixOffset(@"image".x int, @"image".y int) (? int)
func (? *@"image".Paletted) @"image".Set(@"image".x int, @"image".y int, @"image".c @"image/color".Color) ()
func (? *@"image".Paletted) @"image".SetColorIndex(@"image".x int, @"image".y int, @"image".index uint8) ()
func (? *@"image".Paletted) @"image".SubImage(@"image".r @"image".Rectangle) (? @"image".Image)
type @"image/draw".Quantizer interface { @"image/draw".Quantize(@"image/draw".p @"image/color".Palette, @"image/draw".m @"image".Image) (? @"image/color".Palette) }
type @"image/draw".Drawer interface { @"image/draw".Draw(@"image/draw".dst @"image/draw".Image, @"image/draw".r @"image".Rectangle, @"image/draw".src @"image".Image, @"image/draw".sp @"image".Point) () }
type @"image/color".Palette []@"image/color".Color
func (? @"image/color".Palette) @"image/color".Convert(@"image/color".c @"image/color".Color) (? @"image/color".Color)
func (? @"image/color".Palette) @"image/color".Index(@"image/color".c @"image/color".Color) (? int)
func (? *@"image/color".Palette) @"image/color".Convert(@"image/color".c @"image/color".Color) (? @"image/color".Color)
func (? *@"image/color".Palette) @"image/color".Index(@"image/color".c @"image/color".Color) (? int)
type @"image/color".Color interface { @"image/color".RGBA() (@"image/color".r uint32, @"image/color".g uint32, @"image/color".b uint32, @"image/color".a uint32) }
type @"image".Rectangle struct { @"image".Min @"image".Point; @"image".Max @"image".Point }
func (? @"image".Rectangle) @"image".Add(@"image".p @"image".Point) (? @"image".Rectangle)
func (? @"image".Rectangle) @"image".Canon() (? @"image".Rectangle)
func (? @"image".Rectangle) @"image".Dx() (? int)
func (? @"image".Rectangle) @"image".Dy() (? int)
func (? @"image".Rectangle) @"image".Empty() (? bool)
func (? @"image".Rectangle) @"image".Eq(@"image".s @"image".Rectangle) (? bool)
func (? @"image".Rectangle) @"image".In(@"image".s @"image".Rectangle) (? bool)
func (? @"image".Rectangle) @"image".Inset(@"image".n int) (? @"image".Rectangle)
func (? @"image".Rectangle) @"image".Intersect(@"image".s @"image".Rectangle) (? @"image".Rectangle)
func (? @"image".Rectangle) @"image".Overlaps(@"image".s @"image".Rectangle) (? bool)
func (? @"image".Rectangle) @"image".Size() (? @"image".Point)
func (? @"image".Rectangle) @"image".String() (? string)
func (? @"image".Rectangle) @"image".Sub(@"image".p @"image".Point) (? @"image".Rectangle)
func (? @"image".Rectangle) @"image".Union(@"image".s @"image".Rectangle) (? @"image".Rectangle)
func (? *@"image".Rectangle) @"image".Add(@"image".p @"image".Point) (? @"image".Rectangle)
func (? *@"image".Rectangle) @"image".Canon() (? @"image".Rectangle)
func (? *@"image".Rectangle) @"image".Dx() (? int)
func (? *@"image".Rectangle) @"image".Dy() (? int)
func (? *@"image".Rectangle) @"image".Empty() (? bool)
func (? *@"image".Rectangle) @"image".Eq(@"image".s @"image".Rectangle) (? bool)
func (? *@"image".Rectangle) @"image".In(@"image".s @"image".Rectangle) (? bool)
func (? *@"image".Rectangle) @"image".Inset(@"image".n int) (? @"image".Rectangle)
func (? *@"image".Rectangle) @"image".Intersect(@"image".s @"image".Rectangle) (? @"image".Rectangle)
func (? *@"image".Rectangle) @"image".Overlaps(@"image".s @"image".Rectangle) (? bool)
func (? *@"image".Rectangle) @"image".Size() (? @"image".Point)
func (? *@"image".Rectangle) @"image".String() (? string)
func (? *@"image".Rectangle) @"image".Sub(@"image".p @"image".Point) (? @"image".Rectangle)
func (? *@"image".Rectangle) @"image".Union(@"image".s @"image".Rectangle) (? @"image".Rectangle)
type @"image/color".Model interface { @"image/color".Convert(@"image/color".c @"image/color".Color) (? @"image/color".Color) }
type @"image/draw".Image interface { @"image".At(@"image".x int, @"image".y int) (? @"image/color".Color); @"image".Bounds() (? @"image".Rectangle); @"image".ColorModel() (? @"image/color".Model); @"image/draw".Set(@"image/draw".x int, @"image/draw".y int, @"image/draw".c @"image/color".Color) () }
type @"image".Point struct { @"image".X int; @"image".Y int }
func (? @"image".Point) @"image".Add(@"image".q @"image".Point) (? @"image".Point)
func (? @"image".Point) @"image".Div(@"image".k int) (? @"image".Point)
func (? @"image".Point) @"image".Eq(@"image".q @"image".Point) (? bool)
func (? @"image".Point) @"image".In(@"image".r @"image".Rectangle) (? bool)
func (? @"image".Point) @"image".Mod(@"image".r @"image".Rectangle) (? @"image".Point)
func (? @"image".Point) @"image".Mul(@"image".k int) (? @"image".Point)
func (? @"image".Point) @"image".String() (? string)
func (? @"image".Point) @"image".Sub(@"image".q @"image".Point) (? @"image".Point)
func (? *@"image".Point) @"image".Add(@"image".q @"image".Point) (? @"image".Point)
func (? *@"image".Point) @"image".Div(@"image".k int) (? @"image".Point)
func (? *@"image".Point) @"image".Eq(@"image".q @"image".Point) (? bool)
func (? *@"image".Point) @"image".In(@"image".r @"image".Rectangle) (? bool)
func (? *@"image".Point) @"image".Mod(@"image".r @"image".Rectangle) (? @"image".Point)
func (? *@"image".Point) @"image".Mul(@"image".k int) (? @"image".Point)
func (? *@"image".Point) @"image".String() (? string)
func (? *@"image".Point) @"image".Sub(@"image".q @"image".Point) (? @"image".Point)
$$
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesbufiomathsyscallstringstimeosstrconvreflectfmtcompress/lzwimage/colorimageimage/color/palette
image/draw0��0
bufioA0compress/lzwB0errorsC0fmtD0
imageE0image/colorF0ioG0image/color/paletteH0
image/drawI0�x�0�� 0MMM=$pkg.reader=$newType(8,"Interface","gif.reader","reader","image/gif",null);��M.init([["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false)],["ReadByte","ReadByte","",$funcType([],[$Uint8,$error],false)]]);0reader0  0�� 0N�N=$pkg.decoder=$newType(0,"Struct","gif.decoder","decoder","image/gif",function(r_,vers_,width_,height_,flags_,headerFields_,backgroundIndex_,loopCount_,delayTime_,aspect_,imageFields_,transparentIndex_,hasTransparentIndex_,pixelSize_,globalColorMap_,delay_,image_,tmp_){this.$val=this;this.r=r_!==undefined?r_:$ifaceNil;this.vers=vers_!==undefined?vers_:"";this.width=width_!==undefined?width_:0;this.height=height_!==undefined?height_:0;this.flags=flags_!==undefined?flags_:0;this.headerFields=headerFields_!==undefined?headerFields_:0;this.backgroundIndex=backgroundIndex_!==undefined?backgroundIndex_:0;this.loopCount=loopCount_!==undefined?loopCount_:0;this.delayTime=delayTime_!==undefined?delayTime_:0;this.aspect=aspect_!==undefined?aspect_:0;this.imageFields=imageFields_!==undefined?imageFields_:0;this.transparentIndex=transparentIndex_!==undefined?transparentIndex_:0;this.hasTransparentIndex=hasTransparentIndex_!==undefined?hasTransparentIndex_:false;this.pixelSize=pixelSize_!==undefined?pixelSize_:0;this.globalColorMap=globalColorMap_!==undefined?globalColorMap_:F.Palette.nil;this.delay=delay_!==undefined?delay_:($sliceType($Int)).nil;this.image=image_!==undefined?image_:($sliceType(($ptrType(E.Paletted)))).nil;this.tmp=tmp_!==undefined?tmp_:($arrayType($Uint8,1024)).zero();});�($ptrType(N)).methods=[["decode","decode","image/gif",$funcType([G.Reader,$Bool],[$error],false),-1],["newImageFromDescriptor","newImageFromDescriptor","image/gif",$funcType([],[($ptrType(E.Paletted)),$error],false),-1],["readBlock","readBlock","image/gif",$funcType([],[$Int,$error],false),-1],["readColorMap","readColorMap","image/gif",$funcType([],[F.Palette,$error],false),-1],["readExtension","readExtension","image/gif",$funcType([],[$error],false),-1],["readGraphicControl","readGraphicControl","image/gif",$funcType([],[$error],false),-1],["readHeaderAndScreenDescriptor","readHeaderAndScreenDescriptor","image/gif",$funcType([],[$error],false),-1]];N.init([["r","r","image/gif",M,""],["vers","vers","image/gif",$String,""],["width","width","image/gif",$Int,""],["height","height","image/gif",$Int,""],["flags","flags","image/gif",$Uint8,""],["headerFields","headerFields","image/gif",$Uint8,""],["backgroundIndex","backgroundIndex","image/gif",$Uint8,""],["loopCount","loopCount","image/gif",$Int,""],["delayTime","delayTime","image/gif",$Int,""],["aspect","aspect","image/gif",$Uint8,""],["imageFields","imageFields","image/gif",$Uint8,""],["transparentIndex","transparentIndex","image/gif",$Uint8,""],["hasTransparentIndex","hasTransparentIndex","image/gif",$Bool,""],["pixelSize","pixelSize","image/gif",$Uint,""],["globalColorMap","globalColorMap","image/gif",F.Palette,""],["delay","delay","image/gif",($sliceType($Int)),""],["image","image","image/gif",($sliceType(($ptrType(E.Paletted)))),""],["tmp","tmp","image/gif",($arrayType($Uint8,1024)),""]]);0	decoder0Bimage/color:Paletteimage/gif:readerimage:Paletted	io:Reader 0�� 0O�LO=$pkg.blockReader=$newType(0,"Struct","gif.blockReader","blockReader","image/gif",function(r_,slice_,err_,tmp_){this.$val=this;this.r=r_!==undefined?r_:$ifaceNil;this.slice=slice_!==undefined?slice_:($sliceType($Uint8)).nil;this.err=err_!==undefined?err_:$ifaceNil;this.tmp=tmp_!==undefined?tmp_:($arrayType($Uint8,256)).zero();});�($ptrType(O)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];O.init([["r","r","image/gif",M,""],["slice","slice","image/gif",($sliceType($Uint8)),""],["err","err","image/gif",$error,""],["tmp","tmp","image/gif",($arrayType($Uint8,256)),""]]);0
errTooMuch0  0 0L  0
log2Lookup0  0^ 0  +    J=C.New("gif: not enough image data");0 0$
errors:Newimage/gif:errNotEnough 0Z 0  )    K=C.New("gif: too much image data");0 0"
errors:Newimage/gif:errTooMuch 0[ 0  )    L=C.New("gif: invalid pixel value");0 0#
errors:Newimage/gif:errBadPixel 0�� 0  Y    Q=new($sliceType(P))([new P.Ptr(8,0),new P.Ptr(8,4),new P.Ptr(4,2),new P.Ptr(2,1)]);0
log2Lookup0image/gif:log2Lookup 0�d(*image/gif.blockReader).Read0 ��O.Ptr.prototype.Read=function(a){var b,c,d,e,f;  	b=this;  	J    if(!($interfaceIsEqual(b.err,$ifaceNil))){  	^return[0,b.err];    }  	r    if(a.$length===0){  	�return[0,$ifaceNil];    }  	�    if(b.slice.$length===0){  	�  	�c=0;  	�d=b.r.ReadByte();c=d[0];b.err=d[1];  	�    if(!($interfaceIsEqual(b.err,$ifaceNil))){  	�return[0,b.err];    }  
    if(c===0){  
)b.err=G.EOF;  
;return[0,b.err];    }  
Qb.slice=$subslice(new($sliceType($Uint8))(b.tmp),0,c);  
o  
re=G.ReadFull(b.r,b.slice);b.err=e[1];    if(!($interfaceIsEqual(b.err,$ifaceNil))){  
�return[0,b.err];    }    }  
�f=$copySlice(a,b.slice);  
�b.slice=$subslice(b.slice,f);  
�return[f,$ifaceNil];    };O.prototype.Read=function(a){return this.$val.Read(a);}; 0
fmt:Errorfimage/color:RGBAimage/gif:blockReaderimage/gif:decoderimage/gif:errBadPixelimage/gif:errNotEnoughimage/gif:errTooMuch image/gif:newImageFromDescriptorimage/gif:readColorMapimage/gif:readExtension'image/gif:readHeaderAndScreenDescriptorimage/gif:readerimage/gif:uninterlaceio:EOFio:ErrUnexpectedEOFio:ReadFull 0��2(*image/gif.decoder).readHeaderAndScreenDescriptor0 �gN.Ptr.prototype.readHeaderAndScreenDescriptor=function(){var a,b,c;  �a=this;  �b=G.ReadFull(a.r,$subslice(new($sliceType($Uint8))(a.tmp),0,13));c=b[1];      if(!($interfaceIsEqual(c,$ifaceNil))){  return c;    }  'a.vers=$bytesToString($subslice(new($sliceType($Uint8))(a.tmp),0,6));  D    if(!(a.vers==="GIF87a")&&!(a.vers==="GIF89a")){  treturn D.Errorf("gif: can't recognize format %s",new($sliceType($emptyInterface))([new $String(a.vers)]));    }  �a.width=(a.tmp[6]>>0)+((a.tmp[7]>>0)<<8>>0)>>0;  �a.height=(a.tmp[8]>>0)+((a.tmp[9]>>0)<<8>>0)>>0;  
fmt:Errorfimage/gif:decoderio:ReadFull 0��!(*image/gif.decoder).readColorMap0 �N.Ptr.prototype.readColorMap=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  �a=this;  �    if(a.pixelSize>8){  �return[F.Palette.nil,D.Errorf("gif: can't handle %d bits per pixel",new($sliceType($emptyInterface))([new $Uint(a.pixelSize)]))];    }  Ic=(b=a.pixelSize,b<32?(1<<b):0)>>0;  h    if(!((((a.imageFields&128)>>>0)===0))){  �c=(d=(((((a.imageFields&7)>>>0))+1<<24>>>24)),d<32?(1<<d):0)>>0;    }  �e=(((3>>>16<<16)*c>>0)+(3<<16>>>16)*c)>>0;  �f=G.ReadFull(a.r,$subslice(new($sliceType($Uint8))(a.tmp),0,e));g=f[1];      if(!($interfaceIsEqual(g,$ifaceNil))){  /return[F.Palette.nil,D.Errorf("gif: short read on color map: %s",new($sliceType($emptyInterface))([g]))];    }  sh=F.Palette.make(c);  �i=0;  �j=h;k=0;while(k<j.$length){l=k;  �(l<0||l>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+l]=(m=new F.RGBA.Ptr((n=a.tmp,o=i+0>>0,((o<0||o>=n.length)?$throwRuntimeError("index out of range"):n[o])),(p=a.tmp,q=i+1>>0,((q<0||q>=p.length)?$throwRuntimeError("index out of range"):p[q])),(r=a.tmp,s=i+2>>0,((s<0||s>=r.length)?$throwRuntimeError("index out of range"):r[s])),255),new m.constructor.Struct(m));  i=i+(3)>>0;    k++;}  return[h,$ifaceNil];    };N.prototype.readColorMap=function(){return this.$val.readColorMap();}; 0decoderreadColorMap0S
fmt:Errorfimage/color:Paletteimage/color:RGBAimage/gif:decoderio:ReadFull 0��"(*image/gif.decoder).readExtension0 �N.Ptr.prototype.readExtension=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  1a=this;  Vb=a.r.ReadByte();c=b[0];d=b[1];  x    if(!($interfaceIsEqual(d,$ifaceNil))){  �return d;    }  �e=0;  �f=c;  �if(f===1){  �e=13;      �}else if(f===249){  �return a.readGraphicControl();      }else if(f===254){      >}else if(f===255){  Sg=a.r.ReadByte();h=g[0];i=g[1];  n    if(!($interfaceIsEqual(i,$ifaceNil))){  �return i;    }  �e=(h>>0);    }else{  �return D.Errorf("gif: unknown extension 0x%.2x",new($sliceType($emptyInterface))([new $Uint8(c)]));    }  .    if(e>0){  >  Aj=G.ReadFull(a.r,$subslice(new($sliceType($Uint8))(a.tmp),0,e));k=j[1];    if(!($interfaceIsEqual(k,$ifaceNil))){  |return k;    }    }      if((c===255)&&$bytesToString($subslice(new($sliceType($Uint8))(a.tmp),0,e))==="NETSCAPE2.0"){  Nl=a.readBlock();m=l[0];n=l[1];  h    if((m===0)||!($interfaceIsEqual(n,$ifaceNil))){  �return n;    }  �    if((m===3)&&(a.tmp[0]===1)){  �a.loopCount=(a.tmp[1]>>0)|((a.tmp[2]>>0)<<8>>0);    }    }  �while(true){  �o=a.readBlock();p=o[0];q=o[1];      if((p===0)||!($interfaceIsEqual(q,$ifaceNil))){  ,return q;    }    }    };N.prototype.readExtension=function(){return this.$val.readExtension();}; 0decoder
fmt:Errorfimage/gif:decoderimage/gif:readBlockimage/gif:readGraphicControlio:ReadFull 0��'(*image/gif.decoder).readGraphicControl0 �RN.Ptr.prototype.readGraphicControl=function(){var a,b,c;  Ga=this;  q  tb=G.ReadFull(a.r,$subslice(new($sliceType($Uint8))(a.tmp),0,6));c=b[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  �return D.Errorf("gif: can't read graphic control: %s",new($sliceType($emptyInterface))([c]));    }  �a.flags=a.tmp[1];  a.delayTime=(a.tmp[2]>>0)|((a.tmp[3]>>0)<<8>>0);  1    if(!((((a.flags&1)>>>0)===0))){  [a.transparentIndex=a.tmp[4];  {a.hasTransparentIndex=true;    }  �return $ifaceNil;    };N.prototype.readGraphicControl=function(){return this.$val.readGraphicControl();}; 0decoderreadGraphicControl0,
fmt:Errorfimage/gif:decoderio:ReadFull 0��+(*image/gif.decoder).newImageFromDescriptor0 ��N.Ptr.prototype.newImageFromDescriptor=function(){var a,b,c,d,e,f,g,h;  �a=this;  �  �b=G.ReadFull(a.r,$subslice(new($sliceType($Uint8))(a.tmp),0,9));c=b[1];    if(!($interfaceIsEqual(c,$ifaceNil))){   +return[($ptrType(E.Paletted)).nil,D.Errorf("gif: can't read image descriptor: %s",new($sliceType($emptyInterface))([c]))];    }   sd=(a.tmp[0]>>0)+((a.tmp[1]>>0)<<8>>0)>>0;   �e=(a.tmp[2]>>0)+((a.tmp[3]>>0)<<8>>0)>>0;   �f=(a.tmp[4]>>0)+((a.tmp[5]>>0)<<8>>0)>>0;   �g=(a.tmp[6]>>0)+((a.tmp[7]>>0)<<8>>0)>>0;  !a.imageFields=a.tmp[8];  !�h=new E.Rectangle.Ptr();$copy(h,E.Rect(d,e,d+f>>0,e+g>>0),E.Rectangle);  ""    if(!($equal(h,h.Intersect($clone(E.Rect(0,0,a.width,a.height),E.Rectangle)),E.Rectangle))){  "ireturn[($ptrType(E.Paletted)).nil,C.New("gif: frame bounds larger than image bounds")];    }  "�return[E.NewPaletted($clone(h,E.Rectangle),F.Palette.nil),$ifaceNil];    };N.prototype.newImageFromDescriptor=function(){return this.$val.newImageFromDescriptor();}; 0!decodernewImageFromDescriptor0��
errors:New
fmt:Errorfimage/color:Paletteimage/gif:decoderimage:NewPalettedimage:Paletted
image:Rectimage:Rectangleio:ReadFull 0��(*image/gif.decoder).readBlock0 �BN.Ptr.prototype.readBlock=function(){var a,b,c,d;  "�a=this;  #b=a.r.ReadByte();c=b[0];d=b[1];  #(    if((c===0)||!($interfaceIsEqual(d,$ifaceNil))){  #Dreturn[0,d];    }  #Vreturn G.ReadFull(a.r,$subslice(new($sliceType($Uint8))(a.tmp),0,c));    };N.prototype.readBlock=function(){return this.$val.readBlock();}; 0decoder	readBlock0 image/gif:decoderio:ReadFull 0��image/gif.uninterlace0R��R=function(a){var b,c,d,e,f,g,h,i,j,k,l;  %�  %�b=($sliceType($Uint8)).nil;  %�c=a.Bounds().Dx();  %�d=a.Bounds().Dy();  &b=($sliceType($Uint8)).make(((((c>>>16<<16)*d>>0)+(c<<16>>>16)*d)>>0));  &"e=0;  &df=Q;g=0;while(g<f.$length){h=new P.Ptr();$copy(h,((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g]),P);  &�j=(i=h.start,(((i>>>16<<16)*c>>0)+(i<<16>>>16)*c)>>0);  &�  &�k=h.start;while(k<d){  '$copySlice($subslice(b,j,(j+c>>0)),$subslice(a.Pix,e,(e+c>>0)));  'Be=e+(c)>>0;  'Rj=j+((l=h.skip,(((c>>>16<<16)*l>>0)+(c<<16>>>16)*l)>>0))>>0;      &�k=k+(h.skip)>>0;}    g++;}  'ta.Pix=b;    }; 0
errors:Newimage/gif:blockWriterimage/gif:encoderimage/gif:log2image/gif:writeimage/gif:writeByteimage/gif:writeColorTableimage/gif:writeUint16image:Rectangle 0�4image/gif.EncodeAll0AE�WAE=$pkg.EncodeAll=function(a,b){var c,d,e,f,g,h,i,j,k;  C�    if(b.Image.$length===0){  Dreturn C.New("gif: must provide at least one image");    }  DG    if(!((b.Image.$length===b.Delay.$length))){  Dkreturn C.New("gif: mismatched image and delay lengths");    }  D�    if(b.LoopCount<0){  D�b.LoopCount=0;    }  D�c=new AB.Ptr($ifaceNil,$ifaceNil,b,($arrayType($Uint8,1024)).zero());  D�  D�d=$assertType(a,AA,true);e=d[0];f=d[1];    if(f){  Ec.w=e;    }else{  E!c.w=A.NewWriter(a);    }  E?c.writeHeader();  EPg=b.Image;h=0;while(h<g.$length){i=h;j=((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]);  Eoc.writeImageBlock(j,(k=b.Delay,((i<0||i>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+i])));    h++;}  E�c.writeByte(59);  E�c.flush();  E�return c.err;    }; 0	EncodeAll0��bufio:NewWriter
errors:New
errors:Newimage/color/palette:Plan9image/color:Paletteimage/draw:FloydSteinbergimage/gif:EncodeAll
 �