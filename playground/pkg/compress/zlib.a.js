0�U�
import bufio "bufio"
import flate "compress/flate"
import errors "errors"
import hash "hash"
import adler32 "hash/adler32"
import io "io"
import fmt "fmt"
const @"".BestCompression = 0x9
const @"".BestSpeed = 0x1
const @"".DefaultCompression = -0x1
var @"".ErrChecksum error
var @"".ErrDictionary error
var @"".ErrHeader error
func @"".NewReader(@"".r @"io".Reader) (? @"io".ReadCloser, ? error)
func @"".NewReaderDict(@"".r @"io".Reader, @"".dict []byte) (? @"io".ReadCloser, ? error)
func @"".NewWriter(@"".w @"io".Writer) (? *@"".Writer)
func @"".NewWriterLevel(@"".w @"io".Writer, @"".level int) (? *@"".Writer, ? error)
func @"".NewWriterLevelDict(@"".w @"io".Writer, @"".level int, @"".dict []byte) (? *@"".Writer, ? error)
const @"".NoCompression = 0x0
type @"".Writer struct { @"".w @"io".Writer; @"".level int; @"".dict []byte; @"".compressor *@"compress/flate".Writer; @"".digest @"hash".Hash32; @"".err error; @"".scratch [4]byte; @"".wroteHeader bool }
func (? *@"".Writer) @"".Close() (? error)
func (? *@"".Writer) @"".Flush() (? error)
func (? *@"".Writer) @"".Reset(@"".w @"io".Writer) ()
func (? *@"".Writer) @"".Write(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".Writer) @"".writeHeader() (@"".err error)
type @"".reader struct { @"".r @"compress/flate".Reader; @"".decompressor @"io".ReadCloser; @"".digest @"hash".Hash32; @"".err error; @"".scratch [4]byte }
func (? *@"".reader) @"".Close() (? error)
func (? *@"".reader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"compress/flate".Writer struct { @"compress/flate".d @"compress/flate".compressor; @"compress/flate".dict []byte }
func (? *@"compress/flate".Writer) @"compress/flate".Close() (? error)
func (? *@"compress/flate".Writer) @"compress/flate".Flush() (? error)
func (? *@"compress/flate".Writer) @"compress/flate".Reset(@"compress/flate".dst @"io".Writer) ()
func (? *@"compress/flate".Writer) @"compress/flate".Write(@"compress/flate".data []byte) (@"compress/flate".n int, @"compress/flate".err error)
type @"hash".Hash32 interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"hash".Sum32() (? uint32); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"compress/flate".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".ReadByte() (@"io".c byte, @"io".err error) }
type @"compress/flate".compressor struct { ? @"compress/flate".compressionLevel; @"compress/flate".w *@"compress/flate".huffmanBitWriter; @"compress/flate".fill func (? *@"compress/flate".compressor, ? []byte) (? int); @"compress/flate".step func (? *@"compress/flate".compressor) (); @"compress/flate".sync bool; @"compress/flate".chainHead int; @"compress/flate".hashHead []int; @"compress/flate".hashPrev []int; @"compress/flate".hashOffset int; @"compress/flate".index int; @"compress/flate".window []byte; @"compress/flate".windowEnd int; @"compress/flate".blockStart int; @"compress/flate".byteAvailable bool; @"compress/flate".tokens []@"compress/flate".token; @"compress/flate".length int; @"compress/flate".offset int; @"compress/flate".hash int; @"compress/flate".maxInsertIndex int; @"compress/flate".err error }
func (? *@"compress/flate".compressor) @"compress/flate".close() (? error)
func (? *@"compress/flate".compressor) @"compress/flate".deflate() ()
func (? *@"compress/flate".compressor) @"compress/flate".fillDeflate(@"compress/flate".b []byte) (? int)
func (? *@"compress/flate".compressor) @"compress/flate".fillStore(@"compress/flate".b []byte) (? int)
func (? *@"compress/flate".compressor) @"compress/flate".findMatch(@"compress/flate".pos int, @"compress/flate".prevHead int, @"compress/flate".prevLength int, @"compress/flate".lookahead int) (@"compress/flate".length int, @"compress/flate".offset int, @"compress/flate".ok bool)
func (? *@"compress/flate".compressor) @"compress/flate".init(@"compress/flate".w @"io".Writer, @"compress/flate".level int) (@"compress/flate".err error)
func (? *@"compress/flate".compressor) @"compress/flate".initDeflate() ()
func (? *@"compress/flate".compressor) @"compress/flate".reset(@"compress/flate".w @"io".Writer) ()
func (? *@"compress/flate".compressor) @"compress/flate".store() ()
func (? *@"compress/flate".compressor) @"compress/flate".syncFlush() (? error)
func (? *@"compress/flate".compressor) @"compress/flate".write(@"compress/flate".b []byte) (@"compress/flate".n int, @"compress/flate".err error)
func (? *@"compress/flate".compressor) @"compress/flate".writeBlock(@"compress/flate".tokens []@"compress/flate".token, @"compress/flate".index int, @"compress/flate".eof bool) (? error)
func (? *@"compress/flate".compressor) @"compress/flate".writeStoredBlock(@"compress/flate".buf []byte) (? error)
type @"compress/flate".compressionLevel struct { @"compress/flate".good int; @"compress/flate".lazy int; @"compress/flate".nice int; @"compress/flate".chain int; @"compress/flate".fastSkipHashing int }
type @"compress/flate".huffmanBitWriter struct { @"compress/flate".w @"io".Writer; @"compress/flate".bits uint32; @"compress/flate".nbits uint32; @"compress/flate".bytes [64]byte; @"compress/flate".nbytes int; @"compress/flate".literalFreq []int32; @"compress/flate".offsetFreq []int32; @"compress/flate".codegen []uint8; @"compress/flate".codegenFreq []int32; @"compress/flate".literalEncoding *@"compress/flate".huffmanEncoder; @"compress/flate".offsetEncoding *@"compress/flate".huffmanEncoder; @"compress/flate".codegenEncoding *@"compress/flate".huffmanEncoder; @"compress/flate".err error }
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".flush() ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".flushBits() ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".generateCodegen(@"compress/flate".numLiterals int, @"compress/flate".numOffsets int) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".reset(@"compress/flate".writer @"io".Writer) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeBits(@"compress/flate".b int32, @"compress/flate".nb int32) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeBlock(@"compress/flate".tokens []@"compress/flate".token, @"compress/flate".eof bool, @"compress/flate".input []byte) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeBytes(@"compress/flate".bytes []byte) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeCode(@"compress/flate".code *@"compress/flate".huffmanEncoder, @"compress/flate".literal uint32) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeDynamicHeader(@"compress/flate".numLiterals int, @"compress/flate".numOffsets int, @"compress/flate".numCodegens int, @"compress/flate".isEof bool) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeFixedHeader(@"compress/flate".isEof bool) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeStoredHeader(@"compress/flate".length int, @"compress/flate".isEof bool) ()
type @"compress/flate".token uint32
func (? @"compress/flate".token) @"compress/flate".length() (? uint32)
func (? @"compress/flate".token) @"compress/flate".literal() (? uint32)
func (? @"compress/flate".token) @"compress/flate".offset() (? uint32)
func (? @"compress/flate".token) @"compress/flate".typ() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".length() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".literal() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".offset() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".typ() (? uint32)
type @"compress/flate".huffmanEncoder struct { @"compress/flate".codeBits []uint8; @"compress/flate".code []uint16 }
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".assignEncodingAndSize(@"compress/flate".bitCount []int32, @"compress/flate".list []@"compress/flate".literalNode) ()
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".bitCounts(@"compress/flate".list []@"compress/flate".literalNode, @"compress/flate".maxBits int32) (? []int32)
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".bitLength(@"compress/flate".freq []int32) (? int64)
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".generate(@"compress/flate".freq []int32, @"compress/flate".maxBits int32) ()
type @"compress/flate".literalNode struct { @"compress/flate".literal uint16; @"compress/flate".freq int32 }
$$
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesbufiomathsyscallstringstimeosstrconvreflectfmtsortcompress/flatehashhash/adler320_0
bufioA0compress/flateB0errorsC0	hashD0hash/adler32E0ioF0fmtG0�+"0�� 0H��H=$pkg.reader=$newType(0,"Struct","zlib.reader","reader","compress/zlib",function(r_,decompressor_,digest_,err_,scratch_){this.$val=this;this.r=r_!==undefined?r_:$ifaceNil;this.decompressor=decompressor_!==undefined?decompressor_:$ifaceNil;this.digest=digest_!==undefined?digest_:$ifaceNil;this.err=err_!==undefined?err_:$ifaceNil;this.scratch=scratch_!==undefined?scratch_:($arrayType($Uint8,4)).zero();});��($ptrType(H)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];H.init([["r","r","compress/zlib",B.Reader,""],["decompressor","decompressor","compress/zlib",F.ReadCloser,""],["digest","digest","compress/zlib",D.Hash32,""],["err","err","compress/zlib",$error,""],["scratch","scratch","compress/zlib",($arrayType($Uint8,4)),""]]);0reader03compress/flate:Readerhash:Hash32
errors:New 0r 0  :    $pkg.ErrDictionary=C.New("zlib: invalid dictionary");0 0)compress/zlib:ErrDictionary
errors:New 0f 0  2    $pkg.ErrHeader=C.New("zlib: invalid header");0 0%compress/zlib:ErrHeader
errors:New 0��compress/zlib.NewReader0INI=$pkg.NewReader=function(a){  Greturn J(a,($sliceType($Uint8)).nil);    }; 0	NewReader0compress/zlib:NewReaderDict 0��compress/zlib.NewReaderDict0J��J=$pkg.NewReaderDict=function(a,b){var c,d,e,f,g,h,i,j,k,l;  Dc=new H.Ptr();  V  Yd=$assertType(a,B.Reader,true);e=d[0];f=d[1];    if(f){  |c.r=e;    }else{  �c.r=A.NewReader(a);    }  �g=F.ReadFull(c.r,$subslice(new($sliceType($Uint8))(c.scratch),0,2));h=g[1];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[$ifaceNil,h];    }   i=(((c.scratch[0]>>>0)<<8>>>0)|(c.scratch[1]>>>0))>>>0;  1    if((!((((c.scratch[0]&15)>>>0)===8)))||(!(((j=i%31,j===j?j:$throwRuntimeError("integer divide by zero"))===0)))){  jreturn[$ifaceNil,$pkg.ErrHeader];    }  �    if(!((((c.scratch[1]&32)>>>0)===0))){  �k=F.ReadFull(c.r,$subslice(new($sliceType($Uint8))(c.scratch),0,4));h=k[1];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[$ifaceNil,h];    }  �l=(((((((c.scratch[0]>>>0)<<24>>>0)|((c.scratch[1]>>>0)<<16>>>0))>>>0)|((c.scratch[2]>>>0)<<8>>>0))>>>0)|(c.scratch[3]>>>0))>>>0;  	j    if(!((l===E.Checksum(b)))){  	�return[$ifaceNil,$pkg.ErrDictionary];    }  	�c.decompressor=B.NewReaderDict(c.r,b);    }else{  	�c.decompressor=B.NewReader(c.r);    }  
c.digest=E.New();  
5return[c,$ifaceNil];    }; 0
Ld=this;  
|    if(!($interfaceIsEqual(d.err,$ifaceNil))){  
�    e=0;f=d.err;b=e;c=f;return[b,c];    }  
�    if(a.$length===0){  
�    g=0;h=$ifaceNil;b=g;c=h;return[b,c];    }  
�i=d.decompressor.Read(a);b=i[0];c=i[1];  
�d.digest.Write($subslice(a,0,b));      if(!((b===0))||!($interfaceIsEqual(c,F.EOF))){  "d.err=c;  0return[b,c];    }  _  bj=F.ReadFull(d.r,$subslice(new($sliceType($Uint8))(d.scratch),0,4));k=j[1];    if(!($interfaceIsEqual(k,$ifaceNil))){  �d.err=k;  �    l=0;m=k;b=l;c=m;return[b,c];    }  �n=(((((((d.scratch[0]>>>0)<<24>>>0)|((d.scratch[1]>>>0)<<16>>>0))>>>0)|((d.scratch[2]>>>0)<<8>>>0))>>>0)|(d.scratch[3]>>>0))>>>0;  j    if(!((n===d.digest.Sum32()))){  �d.err=$pkg.ErrChecksum;  �    o=0;p=d.err;b=o;c=p;return[b,c];    }  �return[b,c];    };H.prototype.Read=function(a){return this.$val.Read(a);}; 0reader0Fcompress/zlib:ErrChecksumcompress/zlib:readerio:EOFio:ReadFull 0�=(*compress/zlib.reader).Close0 ��H.Ptr.prototype.Close=function(){var a;  
fmt:Errorf 0�	(*compress/zlib.Writer).Reset0 ��K.Ptr.prototype.Reset=function(a){var b;  �b=this;  �b.w=a;  �    if(!(b.compressor===($ptrType(B.Writer)).nil)){  b.compressor.Reset(a);    }       if(!($interfaceIsEqual(b.digest,$ifaceNil))){  7b.digest.Reset();    }  Lb.err=$ifaceNil;  Y$copy(b.scratch,($arrayType($Uint8,4)).zero(),($arrayType($Uint8,4)));  pb.wroteHeader=false;    };K.prototype.Reset=function(a){return this.$val.Reset(a);}; 0Writer0-compress/flate:Writercompress/zlib:Writer 0�#(*compress/zlib.Writer).writeHeader0 �JK.Ptr.prototype.writeHeader=function(){var a=$ifaceNil,b,c,d,e,f,g,h,i,j,k,l;  �b=this;  �b.wroteHeader=true;  �b.scratch[0]=120;  �c=b.level;  �if(c===0||c===1){  b.scratch[1]=0;      }else if(c===2||c===3||c===4||c===5){  /b.scratch[1]=64;      F}else if(c===6||c===-1){  Tb.scratch[1]=128;      k}else if(c===7||c===8||c===9){  {b.scratch[1]=192;    }else{  �$panic(new $String("unreachable"));    }  �    if(!(b.dict===($sliceType($Uint8)).nil)){  �d=b.scratch;e=1;(e<0||e>=d.length)?$throwRuntimeError("index out of range"):d[e]=(((e<0||e>=d.length)?$throwRuntimeError("index out of range"):d[e])|(32))>>>0;    }  �f=b.scratch;g=1;(g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g]=((g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g])+(((31-(h=((((b.scratch[0]<<16>>>16)<<8<<16>>>16)+(b.scratch[1]<<16>>>16)<<16>>>16))%31,h===h?h:$throwRuntimeError("integer divide by zero"))<<16>>>16)<<24>>>24))<<24>>>24;  5  8i=b.w.Write($subslice(new($sliceType($Uint8))(b.scratch),0,2));a=i[1];    if(!($interfaceIsEqual(a,$ifaceNil))){  k    a=a;return a;    }  z    if(!(b.dict===($sliceType($Uint8)).nil)){  �j=E.Checksum(b.dict);  �b.scratch[0]=((j>>>24>>>0)<<24>>>24);  #b.scratch[1]=((j>>>16>>>0)<<24>>>24);  Jb.scratch[2]=((j>>>8>>>0)<<24>>>24);  pb.scratch[3]=((j>>>0>>>0)<<24>>>24);  �  �k=b.w.Write($subslice(new($sliceType($Uint8))(b.scratch),0,4));a=k[1];    if(!($interfaceIsEqual(a,$ifaceNil))){  �    a=a;return a;    }    }  �    if(b.compressor===($ptrType(B.Writer)).nil){  Ol=B.NewWriterDict(b.w,b.level,b.dict);b.compressor=l[0];a=l[1];  �    if(!($interfaceIsEqual(a,$ifaceNil))){  �    a=a;return a;    }  �b.digest=E.New();    }  �    a=$ifaceNil;return a;    };K.prototype.writeHeader=function(){return this.$val.writeHeader();}; 0WriterwriteHeader0tcompress/flate:NewWriterDictcompress/flate:Writercompress/zlib:Writerhash/adler32:Checksumhash/adler32:New 0��(*compress/zlib.Writer).Write0 �(K.Ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f,g,h,i;  �d=this;  �    if(!d.wroteHeader){  �d.err=d.writeHeader();    }  �    if(!($interfaceIsEqual(d.err,$ifaceNil))){      e=0;f=d.err;b=e;c=f;return[b,c];    }      if(a.$length===0){  /    g=0;h=$ifaceNil;b=g;c=h;return[b,c];    }  Ai=d.compressor.Write(a);b=i[0];c=i[1];  a    if(!($interfaceIsEqual(c,$ifaceNil))){  sd.err=c;  �return[b,c];    }  �d.digest.Write(a);  �return[b,c];    };K.prototype.Write=function(a){return this.$val.Write(a);}; 0Writer01compress/zlib:Writercompress/zlib:writeHeader 0��(*compress/zlib.Writer).Flush0 �.K.Ptr.prototype.Flush=function(){var a;  �a=this;       if(!a.wroteHeader){   a.err=a.writeHeader();    }   6    if(!($interfaceIsEqual(a.err,$ifaceNil))){   Jreturn a.err;    }   [a.err=a.compressor.Flush();   yreturn a.err;    };K.prototype.Flush=function(){return this.$val.Flush();}; 0Writer01compress/zlib:Writercompress/zlib:writeHeader 0��(*compress/zlib.Writer).Close0 ��K.Ptr.prototype.Close=function(){var a,b,c;  !a=this;  !0    if(!a.wroteHeader){  !Fa.err=a.writeHeader();    }  !b    if(!($interfaceIsEqual(a.err,$ifaceNil))){  !vreturn a.err;    }  !�a.err=a.compressor.Close();  !�    if(!($interfaceIsEqual(a.err,$ifaceNil))){  !�return a.err;    }  !�b=a.digest.Sum32();  "#a.scratch[0]=((b>>>24>>>0)<<24>>>24);  "Ia.scratch[1]=((b>>>16>>>0)<<24>>>24);  "oa.scratch[2]=((b>>>8>>>0)<<24>>>24);  "�a.scratch[3]=((b>>>0>>>0)<<24>>>24);  "�c=a.w.Write($subslice(new($sliceType($Uint8))(a.scratch),0,4));a.err=c[1];  "�return a.err;    };K.prototype.Close=function(){return this.$val.Close();}; 0Writer01compress/zlib:Writercompress/zlib:writeHeader 0 ��{"Base":8943,"Files":[{"Name":"/usr/local/go/src/pkg/compress/zlib/reader.go","Base":1,"Size":3469,"Lines":[0,55,109,159,160,163,239,265,266,333,401,414,415,435,460,495,506,507,535,536,566,589,600,603,616,617,626,635,653,663,671,687,693,695,696,718,719,725,806,858,943,999,1076,1124,1126,1127,1148,1175,1203,1229,1249,1271,1273,1274,1316,1390,1472,1552,1605,1635,1637,1638,1703,1788,1858,1876,1913,1924,1934,1961,1964,2008,2025,2043,2046,2095,2151,2175,2178,2207,2251,2269,2288,2292,2407,2449,2478,2482,2532,2542,2582,2585,2611,2626,2628,2629,2682,2701,2719,2722,2740,2756,2759,2760,2793,2817,2847,2861,2870,2873,2874,2909,2970,2984,3000,3003,3062,3176,3211,3233,3251,3254,3262,3264,3265,3351,3384,3403,3418,3421,3453,3467],"Infos":null},{"Name":"/usr/local/go/src/pkg/compress/zlib/writer.go","Base":3471,"Size":5471,"Lines":[0,55,109,159,160,173,174,183,201,208,216,232,238,240,241,321,387,395,437,475,519,566,568,569,632,694,715,738,755,775,802,827,846,867,885,887,888,923,989,992,1073,1128,1166,1222,1232,1234,1235,1315,1350,1353,1427,1503,1550,1613,1655,1657,1658,1733,1751,1754,1834,1859,1939,1999,2070,2073,2090,2102,2118,2133,2141,2143,2144,2220,2300,2309,2347,2356,2395,2421,2445,2448,2470,2489,2492,2505,2528,2551,2553,2554,2593,2638,2660,2720,2825,2904,2925,3003,3045,3103,3158,3176,3188,3212,3230,3254,3267,3291,3306,3330,3340,3363,3366,3386,3411,3414,3493,3546,3559,3562,3582,3652,3691,3730,3769,3807,3845,3899,3913,3917,3920,3946,4005,4030,4094,4112,4126,4130,4157,4160,4172,4174,4175,4247,4325,4348,4402,4423,4449,4452,4471,4489,4492,4510,4526,4529,4561,4578,4592,4601,4604,4623,4631,4633,4634,4691,4724,4745,4771,4774,4793,4808,4811,4841,4855,4857,4858,4932,4991,5024,5045,5071,5074,5093,5108,5111,5141,5160,5175,5178,5208,5267,5305,5343,5380,5417,5455,5469],"Infos":null}]}
 �