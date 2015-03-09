p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �����go/tokentokenfmt#github.com/gopherjs/gopherjs/nosyncsortstrconvtesting�=}package token
import testing "testing"
import fmt "fmt"
import sort "sort"
import nosync "github.com/gopherjs/gopherjs/nosync"
import strconv "strconv"
const @"".ADD @"".Token = 0xc
const @"".ADD_ASSIGN @"".Token = 0x17
const @"".AND @"".Token = 0x11
const @"".AND_ASSIGN @"".Token = 0x1c
const @"".AND_NOT @"".Token = 0x16
const @"".AND_NOT_ASSIGN @"".Token = 0x21
const @"".ARROW @"".Token = 0x24
const @"".ASSIGN @"".Token = 0x2a
const @"".BREAK @"".Token = 0x3d
const @"".CASE @"".Token = 0x3e
const @"".CHAN @"".Token = 0x3f
const @"".CHAR @"".Token = 0x8
const @"".COLON @"".Token = 0x3a
const @"".COMMA @"".Token = 0x34
const @"".COMMENT @"".Token = 0x2
const @"".CONST @"".Token = 0x40
const @"".CONTINUE @"".Token = 0x41
const @"".DEC @"".Token = 0x26
const @"".DEFAULT @"".Token = 0x42
const @"".DEFER @"".Token = 0x43
const @"".DEFINE @"".Token = 0x2f
const @"".ELLIPSIS @"".Token = 0x30
const @"".ELSE @"".Token = 0x44
const @"".EOF @"".Token = 0x1
const @"".EQL @"".Token = 0x27
const @"".FALLTHROUGH @"".Token = 0x45
const @"".FLOAT @"".Token = 0x6
const @"".FOR @"".Token = 0x46
const @"".FUNC @"".Token = 0x47
type @"".File struct { @"".set *@"".FileSet; @"".name string; @"".base int; @"".size int; @"".lines []int; @"".infos []@"".lineInfo }
func (? *@"".File) @"".AddLine(@"".offset int) ()
func (? *@"".File) @"".AddLineInfo(@"".offset int, @"".filename string, @"".line int) ()
func (? *@"".File) @"".Base() (? int)
func (? *@"".File) @"".Line(@"".p @"".Pos) (? int)
func (? *@"".File) @"".LineCount() (? int)
func (? *@"".File) @"".MergeLine(@"".line int) ()
func (? *@"".File) @"".Name() (? string)
func (? *@"".File) @"".Offset(@"".p @"".Pos) (? int)
func (? *@"".File) @"".Pos(@"".offset int) (? @"".Pos)
func (? *@"".File) @"".Position(@"".p @"".Pos) (@"".pos @"".Position)
func (? *@"".File) @"".PositionFor(@"".p @"".Pos, @"".adjusted bool) (@"".pos @"".Position)
func (? *@"".File) @"".SetLines(@"".lines []int) (? bool)
func (? *@"".File) @"".SetLinesForContent(@"".content []byte) ()
func (? *@"".File) @"".Size() (? int)
func (? *@"".File) @"".position(@"".p @"".Pos, @"".adjusted bool) (@"".pos @"".Position)
func (? *@"".File) @"".unpack(@"".offset int, @"".adjusted bool) (@"".filename string, @"".line int, @"".column int)
type @"".FileSet struct { @"".mutex @"github.com/gopherjs/gopherjs/nosync".RWMutex; @"".base int; @"".files []*@"".File; @"".last *@"".File }
func (? *@"".FileSet) @"".AddFile(@"".filename string, @"".base int, @"".size int) (? *@"".File)
func (? *@"".FileSet) @"".Base() (? int)
func (? *@"".FileSet) @"".File(@"".p @"".Pos) (@"".f *@"".File)
func (? *@"".FileSet) @"".Iterate(@"".f func (? *@"".File) (? bool)) ()
func (? *@"".FileSet) @"".Position(@"".p @"".Pos) (@"".pos @"".Position)
func (? *@"".FileSet) @"".PositionFor(@"".p @"".Pos, @"".adjusted bool) (@"".pos @"".Position)
func (? *@"".FileSet) @"".Read(@"".decode func (? interface {  }) (? error)) (? error)
func (? *@"".FileSet) @"".Write(@"".encode func (? interface {  }) (? error)) (? error)
func (? *@"".FileSet) @"".file(@"".p @"".Pos) (? *@"".File)
const @"".GEQ @"".Token = 0x2e
const @"".GO @"".Token = 0x48
const @"".GOTO @"".Token = 0x49
const @"".GTR @"".Token = 0x29
const @"".HighestPrec = 0x7
const @"".IDENT @"".Token = 0x4
const @"".IF @"".Token = 0x4a
const @"".ILLEGAL @"".Token = 0x0
const @"".IMAG @"".Token = 0x7
const @"".IMPORT @"".Token = 0x4b
const @"".INC @"".Token = 0x25
const @"".INT @"".Token = 0x5
const @"".INTERFACE @"".Token = 0x4c
const @"".LAND @"".Token = 0x22
const @"".LBRACE @"".Token = 0x33
const @"".LBRACK @"".Token = 0x32
const @"".LEQ @"".Token = 0x2d
const @"".LOR @"".Token = 0x23
const @"".LPAREN @"".Token = 0x31
const @"".LSS @"".Token = 0x28
func @"".Lookup(@"".ident string) (? @"".Token)
const @"".LowestPrec = 0x0
const @"".MAP @"".Token = 0x4d
const @"".MUL @"".Token = 0xe
const @"".MUL_ASSIGN @"".Token = 0x19
const @"".NEQ @"".Token = 0x2c
const @"".NOT @"".Token = 0x2b
func @"".NewFileSet() (? *@"".FileSet)
const @"".NoPos @"".Pos = 0x0
const @"".OR @"".Token = 0x12
const @"".OR_ASSIGN @"".Token = 0x1d
const @"".PACKAGE @"".Token = 0x4e
const @"".PERIOD @"".Token = 0x35
type @"".Pos int
func (? @"".Pos) @"".IsValid() (? bool)
func (? *@"".Pos) @"".IsValid() (? bool)
type @"".Position struct { @"".Filename string; @"".Offset int; @"".Line int; @"".Column int }
func (? @"".Position) @"".String() (? string)
func (? *@"".Position) @"".IsValid() (? bool)
func (? *@"".Position) @"".String() (? string)
const @"".QUO @"".Token = 0xf
const @"".QUO_ASSIGN @"".Token = 0x1a
const @"".RANGE @"".Token = 0x4f
const @"".RBRACE @"".Token = 0x38
const @"".RBRACK @"".Token = 0x37
const @"".REM @"".Token = 0x10
const @"".REM_ASSIGN @"".Token = 0x1b
const @"".RETURN @"".Token = 0x50
const @"".RPAREN @"".Token = 0x36
const @"".SELECT @"".Token = 0x51
const @"".SEMICOLON @"".Token = 0x39
const @"".SHL @"".Token = 0x14
const @"".SHL_ASSIGN @"".Token = 0x1f
const @"".SHR @"".Token = 0x15
const @"".SHR_ASSIGN @"".Token = 0x20
const @"".STRING @"".Token = 0x9
const @"".STRUCT @"".Token = 0x52
const @"".SUB @"".Token = 0xd
const @"".SUB_ASSIGN @"".Token = 0x18
const @"".SWITCH @"".Token = 0x53
const @"".TYPE @"".Token = 0x54
func @"".TestFileSetRace(@"".t *@"testing".T) ()
type @"".Token int
func (? @"".Token) @"".IsKeyword() (? bool)
func (? @"".Token) @"".IsLiteral() (? bool)
func (? @"".Token) @"".IsOperator() (? bool)
func (? @"".Token) @"".Precedence() (? int)
func (? @"".Token) @"".String() (? string)
func (? *@"".Token) @"".IsKeyword() (? bool)
func (? *@"".Token) @"".IsLiteral() (? bool)
func (? *@"".Token) @"".IsOperator() (? bool)
func (? *@"".Token) @"".Precedence() (? int)
func (? *@"".Token) @"".String() (? string)
const @"".UnaryPrec = 0x6
const @"".VAR @"".Token = 0x55
const @"".XOR @"".Token = 0x13
const @"".XOR_ASSIGN @"".Token = 0x1e
type @"".lineInfo struct { @"".Offset int; @"".Filename string; @"".Line int }
type @"".serializedFile struct { @"".Name string; @"".Base int; @"".Size int; @"".Lines []int; @"".Infos []@"".lineInfo }
type @"".serializedFileSet struct { @"".Base int; @"".Files []@"".serializedFile }
type @"github.com/gopherjs/gopherjs/nosync".RWMutex struct { @"github.com/gopherjs/gopherjs/nosync".writeLocked bool; @"github.com/gopherjs/gopherjs/nosync".readLockCounter int }
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RLock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RUnlock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"testing".T struct { ? @"testing".common; @"testing".name string; @"testing".startParallel chan bool }
func (? *@"testing".T) @"testing".Parallel() ()
func (? *@"testing".T) @"testing".report() ()
import time "time"
type @"testing".common struct { @"testing".mu @"github.com/gopherjs/gopherjs/nosync".RWMutex; @"testing".output []byte; @"testing".failed bool; @"testing".skipped bool; @"testing".finished bool; @"testing".start @"time".Time; @"testing".duration @"time".Duration; @"testing".self interface {  }; @"testing".signal chan interface {  } }
func (? *@"testing".common) @"testing".Error(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Errorf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fail() ()
func (? *@"testing".common) @"testing".FailNow() ()
func (? *@"testing".common) @"testing".Failed() (? bool)
func (? *@"testing".common) @"testing".Fatal(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fatalf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Log(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Logf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skip(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".SkipNow() ()
func (? *@"testing".common) @"testing".Skipf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skipped() (? bool)
func (? *@"testing".common) @"testing".log(@"testing".s string) ()
func (? *@"testing".common) @"testing".private() ()
func (? *@"testing".common) @"testing".skip() ()
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
CBB=$packages["fmt"];a    $r=B.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D3D=$packages["github.com/gopherjs/gopherjs/nosync"];a    $r=D.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["sort"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["strconv"];a    $r=E.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["testing"];a    $r=A.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} G�4G=$pkg.Position=$newType(0,$kindStruct,"token.Position","Position","go/token",function(Filename_,Offset_,Line_,Column_){this.$val=this;if(arguments.length===0){this.Filename="";this.Offset=0;this.Line=0;this.Column=0;return;}this.Filename=Filename_;this.Offset=Offset_;this.Line=Line_;this.Column=Column_;});��G.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];AC.methods=[{prop:"IsValid",name:"IsValid",pkg:"",typ:$funcType([],[$Bool],false)}];��G.init([{prop:"Filename",name:"Filename",pkg:"",typ:$String,tag:""},{prop:"Offset",name:"Offset",pkg:"",typ:$Int,tag:""},{prop:"Line",name:"Line",pkg:"",typ:$Int,tag:""},{prop:"Column",name:"Column",pkg:"",typ:$Int,tag:""}]);Positiongo/token.ACgo/token.Position HBH=$pkg.Pos=$newType(4,$kindInt,"token.Pos","Pos","go/token",null);SH.methods=[{prop:"IsValid",name:"IsValid",pkg:"",typ:$funcType([],[$Bool],false)}];Posgo/token.Pos I�^I=$pkg.File=$newType(0,$kindStruct,"token.File","File","go/token",function(set_,name_,base_,size_,lines_,infos_){this.$val=this;if(arguments.length===0){this.set=AD.nil;this.name="";this.base=0;this.size=0;this.lines=X.nil;this.infos=AA.nil;return;}this.set=set_;this.name=name_;this.base=base_;this.size=size_;this.lines=lines_;this.infos=infos_;});��Y.methods=[{prop:"Name",name:"Name",pkg:"",typ:$funcType([],[$String],false)},{prop:"Base",name:"Base",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"LineCount",name:"LineCount",pkg:"",typ:$funcType([],[$Int],false)},{prop:"AddLine",name:"AddLine",pkg:"",typ:$funcType([$Int],[],false)},{prop:"MergeLine",name:"MergeLine",pkg:"",typ:$funcType([$Int],[],false)},{prop:"SetLines",name:"SetLines",pkg:"",typ:$funcType([X],[$Bool],false)},{prop:"SetLinesForContent",name:"SetLinesForContent",pkg:"",typ:$funcType([AE],[],false)},{prop:"AddLineInfo",name:"AddLineInfo",pkg:"",typ:$funcType([$Int,$String,$Int],[],false)},{prop:"Pos",name:"Pos",pkg:"",typ:$funcType([$Int],[H],false)},{prop:"Offset",name:"Offset",pkg:"",typ:$funcType([H],[$Int],false)},{prop:"Line",name:"Line",pkg:"",typ:$funcType([H],[$Int],false)},{prop:"unpack",name:"unpack",pkg:"go/token",typ:$funcType([$Int,$Bool],[$String,$Int,$Int],false)},{prop:"position",name:"position",pkg:"go/token",typ:$funcType([H,$Bool],[G],false)},{prop:"PositionFor",name:"PositionFor",pkg:"",typ:$funcType([H,$Bool],[G],false)},{prop:"Position",name:"Position",pkg:"",typ:$funcType([H],[G],false)}];�^I.init([{prop:"set",name:"set",pkg:"go/token",typ:AD,tag:""},{prop:"name",name:"name",pkg:"go/token",typ:$String,tag:""},{prop:"base",name:"base",pkg:"go/token",typ:$Int,tag:""},{prop:"size",name:"size",pkg:"go/token",typ:$Int,tag:""},{prop:"lines",name:"lines",pkg:"go/token",typ:X,tag:""},{prop:"infos",name:"infos",pkg:"go/token",typ:AA,tag:""}]);File	go/token.AAgo/token.ADgo/token.AEgo/token.Filego/token.FileSetgo/token.Posgo/token.Position
go/token.X
go/token.Y J�
J=$pkg.lineInfo=$newType(0,$kindStruct,"token.lineInfo","lineInfo","go/token",function(Offset_,Filename_,Line_){this.$val=this;if(arguments.length===0){this.Offset=0;this.Filename="";this.Line=0;return;}this.Offset=Offset_;this.Filename=Filename_;this.Line=Line_;});��J.init([{prop:"Offset",name:"Offset",pkg:"",typ:$Int,tag:""},{prop:"Filename",name:"Filename",pkg:"",typ:$String,tag:""},{prop:"Line",name:"Line",pkg:"",typ:$Int,tag:""}]);lineInfogo/token.lineInfo L�2L=$pkg.FileSet=$newType(0,$kindStruct,"token.FileSet","FileSet","go/token",function(mutex_,base_,files_,last_){this.$val=this;if(arguments.length===0){this.mutex=new D.RWMutex.ptr();this.base=0;this.files=Z.nil;this.last=Y.nil;return;}this.mutex=mutex_;this.base=base_;this.files=files_;this.last=last_;});��AD.methods=[{prop:"Base",name:"Base",pkg:"",typ:$funcType([],[$Int],false)},{prop:"AddFile",name:"AddFile",pkg:"",typ:$funcType([$String,$Int,$Int],[Y],false)},{prop:"Iterate",name:"Iterate",pkg:"",typ:$funcType([AF],[],false)},{prop:"file",name:"file",pkg:"go/token",typ:$funcType([H],[Y],false)},{prop:"File",name:"File",pkg:"",typ:$funcType([H],[Y],false)},{prop:"PositionFor",name:"PositionFor",pkg:"",typ:$funcType([H,$Bool],[G],false)},{prop:"Position",name:"Position",pkg:"",typ:$funcType([H],[G],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([AG],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([AG],[$error],false)}];��L.init([{prop:"mutex",name:"mutex",pkg:"go/token",typ:D.RWMutex,tag:""},{prop:"base",name:"base",pkg:"go/token",typ:$Int,tag:""},{prop:"files",name:"files",pkg:"go/token",typ:Z,tag:""},{prop:"last",name:"last",pkg:"go/token",typ:Y,tag:""}]);FileSet	+github.com/gopherjs/gopherjs/nosync.RWMutexgo/token.ADgo/token.AFgo/token.AGgo/token.FileSetgo/token.Posgo/token.Position
go/token.Y
go/token.Z P�YP=$pkg.serializedFile=$newType(0,$kindStruct,"token.serializedFile","serializedFile","go/token",function(Name_,Base_,Size_,Lines_,Infos_){this.$val=this;if(arguments.length===0){this.Name="";this.Base=0;this.Size=0;this.Lines=X.nil;this.Infos=AA.nil;return;}this.Name=Name_;this.Base=Base_;this.Size=Size_;this.Lines=Lines_;this.Infos=Infos_;});�P.init([{prop:"Name",name:"Name",pkg:"",typ:$String,tag:""},{prop:"Base",name:"Base",pkg:"",typ:$Int,tag:""},{prop:"Size",name:"Size",pkg:"",typ:$Int,tag:""},{prop:"Lines",name:"Lines",pkg:"",typ:X,tag:""},{prop:"Infos",name:"Infos",pkg:"",typ:AA,tag:""}]);serializedFilego/token.AA
go/token.Xgo/token.serializedFile Q��Q=$pkg.serializedFileSet=$newType(0,$kindStruct,"token.serializedFileSet","serializedFileSet","go/token",function(Base_,Files_){this.$val=this;if(arguments.length===0){this.Base=0;this.Files=AB.nil;return;}this.Base=Base_;this.Files=Files_;});lQ.init([{prop:"Base",name:"Base",pkg:"",typ:$Int,tag:""},{prop:"Files",name:"Files",pkg:"",typ:AB,tag:""}]);serializedFileSetgo/token.ABgo/token.serializedFileSet RHR=$pkg.Token=$newType(4,$kindInt,"token.Token","Token","go/token",null);��R.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"Precedence",name:"Precedence",pkg:"",typ:$funcType([],[$Int],false)},{prop:"IsLiteral",name:"IsLiteral",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"IsOperator",name:"IsOperator",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"IsKeyword",name:"IsKeyword",pkg:"",typ:$funcType([],[$Bool],false)}];Tokengo/token.Token WW=$sliceType($emptyInterface);W XX=$sliceType($Int);X YY=$ptrType(I);Ygo/token.File ZZ=$sliceType(Y);Z
go/token.Y AAAA=$sliceType(J);AAgo/token.lineInfo ABAB=$sliceType(P);ABgo/token.serializedFile ACAC=$ptrType(G);ACgo/token.Position ADAD=$ptrType(L);ADgo/token.FileSet AEAE=$sliceType($Uint8);AE AF AF=$funcType([Y],[$Bool],false);AF
go/token.Y AG/AG=$funcType([$emptyInterface],[$error],false);AG Stokens TT=false;keywordsgo/token.keywords �     S=$toNativeArray($kindString,["ILLEGAL","EOF","COMMENT","","IDENT","INT","FLOAT","IMAG","CHAR","STRING","","","+","-","*","/","%","&","|","^","<<",">>","&^","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>=","&^=","&&","||","<-","++","--","==","<",">","=","!","!=","<=",">=",":=","...","(","[","{",",",".",")","]","}",";",":","","","break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"]);tokensgo/token.tokens go/token.TestFileSetRaceF��F=$pkg.TestFileSetRace=function $b(a){var $ptr,a,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};       [$r=a.common.Skip(new W([]));$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.$s=$s;$f.$r=$r;return $f;};TestFileSetRacego/token.TestFileSetRace
go/token.W (*go/token.Position).IsValid��G.ptr.prototype.IsValid=function(){var $ptr,a;$ptr={};  Ea=this;      ereturn a.Line>0;    };G.prototype.IsValid=function(){return this.$val.IsValid();};Positiongo/token.Position (go/token.Position).String�$G.ptr.prototype.String=function $b(){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};  �a=$clone(this,G);      �b=a.Filename;  �if(a.IsValid()){$s=1;continue;}$s=2;continue;    case 1:  �    if(!(b==="")){  �  �b=b+(":");        }    c=B.Sprintf("%d:%d",new W([new $Int(a.Line),new $Int(a.Column)]));$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=b+(c);        case 2:  6    if(b===""){  Eb="-";    }  Qreturn b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.String=function(){return this.$val.String();};Positionfmt.Sprintfgo/token.Position
go/token.W (go/token.Pos).IsValid��H.prototype.IsValid=function(){var $ptr,a;$ptr={};  
�a=this.$val;      
�return!((a===0));    };$ptrType(H).prototype.IsValid=function(){return new H(this.$get()).IsValid();};Posgo/token.Pos (*go/token.File).Name��I.ptr.prototype.Name=function(){var $ptr,a;$ptr={};  va=this;      �return a.name;    };I.prototype.Name=function(){return this.$val.Name();};Filego/token.File (*go/token.File).Base��I.ptr.prototype.Base=function(){var $ptr,a;$ptr={};  �a=this;      return a.base;    };I.prototype.Base=function(){return this.$val.Base();};Filego/token.File (*go/token.File).Size��I.ptr.prototype.Size=function(){var $ptr,a;$ptr={};  Za=this;      qreturn a.size;    };I.prototype.Size=function(){return this.$val.Size();};Filego/token.File (*go/token.File).LineCount��I.ptr.prototype.LineCount=function(){var $ptr,a,b;$ptr={};  �a=this;      �a.set.mutex.RLock();  �b=a.lines.$length;   a.set.mutex.RUnlock();  return b;    };I.prototype.LineCount=function(){return this.$val.LineCount();};Filego/token.File (*go/token.File).AddLine��I.ptr.prototype.AddLine=function(a){var $ptr,a,b,c,d,e;$ptr={};  �b=this;      b.set.mutex.Lock();  !  $c=b.lines.$length;    if(((c===0)||(d=b.lines,e=c-1>>0,((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]))<a)&&a<b.size){  pb.lines=$append(b.lines,a);    }  �b.set.mutex.Unlock();    };I.prototype.AddLine=function(a){return this.$val.AddLine(a);};Filego/token.File (*go/token.File).MergeLine��I.ptr.prototype.MergeLine=function(a){var $ptr,a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);$ptr={};  �b=this;      �    if(a<=0){  $panic(new $String("illegal line number (line numbering starts at 1)"));    }  Ib.set.mutex.Lock();  ]$deferred.push([$methodVal(b.set.mutex,"Unlock"),[]]);  y    if(a>=b.lines.$length){  �$panic(new $String("illegal line number"));    }  �$copySlice($subslice(b.lines,a),$subslice(b.lines,(a+1>>0)));  #b.lines=$subslice(b.lines,0,(b.lines.$length-1>>0));    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};I.prototype.MergeLine=function(a){return this.$val.MergeLine(a);};Filego/token.File (*go/token.File).SetLines�*I.ptr.prototype.SetLines=function(a){var $ptr,a,b,c,d,e,f,g,h;$ptr={};  �b=this;      Ec=b.size;  Ud=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  v    if(f>0&&g<=(h=f-1>>0,((h<0||h>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+h]))||c<=g){  �return false;    }    e++;}  �b.set.mutex.Lock();  �b.lines=a;  �b.set.mutex.Unlock();  return true;    };I.prototype.SetLines=function(a){return this.$val.SetLines(a);};Filego/token.File #(*go/token.File).SetLinesForContent�I.ptr.prototype.SetLinesForContent=function(a){var $ptr,a,b,c,d,e,f,g,h;$ptr={};  �b=this;      �  �c=X.nil;  �d=0;  �e=a;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);      if(d>=0){  !c=$append(c,d);    }  Cd=-1;  O    if(h===10){  ad=g+1>>0;    }    f++;}  �b.set.mutex.Lock();  �b.lines=c;  �b.set.mutex.Unlock();    };I.prototype.SetLinesForContent=function(a){return this.$val.SetLinesForContent(a);};Filego/token.File
go/token.X (*go/token.File).AddLineInfo��I.ptr.prototype.AddLineInfo=function(a,b,c){var $ptr,a,b,c,d,e,f,g;$ptr={};  ~d=this;      �d.set.mutex.Lock();  �  �e=d.infos.$length;    if((e===0)||(f=d.infos,g=e-1>>0,((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g])).Offset<a&&a<d.size){  %d.infos=$append(d.infos,new J.ptr(a,b,c));    }  ed.set.mutex.Unlock();    };I.prototype.AddLineInfo=function(a,b,c){return this.$val.AddLineInfo(a,b,c);};Filego/token.Filego/token.lineInfo (*go/token.File).Pos��I.ptr.prototype.Pos=function(a){var $ptr,a,b;$ptr={};  �b=this;          if(a>b.size){  4$panic(new $String("illegal file offset"));    }  Ureturn((b.base+a>>0)>>0);    };I.prototype.Pos=function(a){return this.$val.Pos(a);};Filego/token.File (*go/token.File).Offset�I.ptr.prototype.Offset=function(a){var $ptr,a,b;$ptr={};  b=this;      *    if((a>>0)<b.base||(a>>0)>(b.base+b.size>>0)){  [$panic(new $String("illegal Pos value"));    }  zreturn(a>>0)-b.base>>0;    };I.prototype.Offset=function(a){return this.$val.Offset(a);};Filego/token.File (*go/token.File).Line�I.ptr.prototype.Line=function $b(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};  b=this;      (c=b.Position(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}return c.Line;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.Line=function(a){return this.$val.Line(a);};Filego/token.File go/token.searchLineInfosK��K=function $b(a,b){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};a=[a];b=[b];      vc=C.Search(a[0].$length,(function(a,b){return function(c){var $ptr,c;$ptr={};      �return((c<0||c>=a[0].$length)?$throwRuntimeError("index out of range"):a[0].$array[a[0].$offset+c]).Offset>b[0];    };})(a,b));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}return c-1>>0;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};searchLineInfosgo/token.searchLineInfossort.Search (*go/token.File).unpack�,I.ptr.prototype.unpack=function $b(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};c="";d=0;e=0;   �f=this;      !c=f.name;  !  !g=O(f.lines,a);    if(g>=0){  !Kh=g+1>>0;i=(a-(j=f.lines,((g<0||g>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+g]))>>0)+1>>0;d=h;e=i;    }  !wif(b&&f.infos.$length>0){$s=1;continue;}$s=2;continue;    case 1:  !�  !�k=K(f.infos,a);$s=3;case 3:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=k;if(l>=0){$s=4;continue;}$s=5;continue;    case 4:  !�n=(m=f.infos,((l<0||l>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+l]));  "c=n.Filename;  "-  "0o=O(f.lines,n.Offset);    if(o>=0){  "c  "cd=d+(((n.Line-o>>0)-1>>0))>>0;        }    case 5:    case 2:  "�return[c,d,e];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.unpack=function(a,b){return this.$val.unpack(a,b);};Fileunpack~go/token.Filego/token.searchIntsgo/token.searchLineInfos (*go/token.File).position��I.ptr.prototype.position=function $b(a,b){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};c=new G.ptr();  "�d=this;      "�e=(a>>0)-d.base>>0;  "�c.Offset=e;  #g=d.unpack(e,b);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;c.Filename=f[0];c.Line=f[1];c.Column=f[2];  #Dreturn c;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.position=function(a,b){return this.$val.position(a,b);};File	position~go/token.Filego/token.Positiongo/token.unpack~ (*go/token.File).PositionFor�&I.ptr.prototype.PositionFor=function $b(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};c=new G.ptr();  $Kd=this;      $�if(!((a===0))){$s=1;continue;}$s=2;continue;    case 1:  $�    if((a>>0)<d.base||(a>>0)>(d.base+d.size>>0)){  $�$panic(new $String("illegal Pos value"));    }  $�e=d.position(a,b);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$copy(c,e,G);    case 2:  %return c;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.PositionFor=function(a,b){return this.$val.PositionFor(a,b);};Filego/token.Filego/token.Positiongo/token.position~ (*go/token.File).Position�YI.ptr.prototype.Position=function $b(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};b=new G.ptr();  %�c=this;      %�    d=c.PositionFor(a,true);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$copy(b,d,G);return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.Position=function(a){return this.$val.Position(a);};Filego/token.Filego/token.Position go/token.NewFileSetMsM=$pkg.NewFileSet=function(){var $ptr;$ptr={};      ("return new L.ptr(new D.RWMutex.ptr(),1,Z.nil,Y.nil);    };
NewFileSet+github.com/gopherjs/gopherjs/nosync.RWMutexgo/token.Filego/token.FileSetgo/token.NewFileSet
go/token.Y
go/token.Z (*go/token.FileSet).Base��L.ptr.prototype.Base=function(){var $ptr,a,b;$ptr={};  (�a=this;      (�a.mutex.RLock();  (�b=a.base;  (�a.mutex.RUnlock();  )return b;    };L.prototype.Base=function(){return this.$val.Base();};FileSetgo/token.FileSet (*go/token.FileSet).AddFile�8L.ptr.prototype.AddFile=function(a,b,c){var $ptr,a,b,c,d,e,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);$ptr={};  ,Cd=this;      ,�d.mutex.Lock();  ,�$deferred.push([$methodVal(d.mutex,"Unlock"),[]]);  ,�    if(b<0){  ,�b=d.base;    }  ,�    if(b<d.base||c<0){  ,�$panic(new $String("illegal base or size"));    }  -.e=new I.ptr(d,a,b,c,new X([0]),AA.nil);  -b  -bb=b+((c+1>>0))>>0;      -�    if(b<0){  -�$panic(new $String("token.Pos offset overflow (> 2G of source code in file set)"));    }  .d.base=b;  .#d.files=$append(d.files,e);  .Ad.last=e;  .Mreturn e;    }catch(err){$err=err;return Y.nil;}finally{$callDeferred($deferred,$err);}};L.prototype.AddFile=function(a,b,c){return this.$val.AddFile(a,b,c);};FileSetgo/token.AAgo/token.Filego/token.FileSet
go/token.X
go/token.Ygo/token.lineInfo (*go/token.FileSet).Iterate��L.ptr.prototype.Iterate=function $b(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};  .�b=this;      .�  .�c=0;case 1:  /  /d=Y.nil;  /b.mutex.RLock();  /.    if(c<b.files.$length){  /Gd=(e=b.files,((c<0||c>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+c]));    }  /_b.mutex.RUnlock();  /sif(d===Y.nil){f=true;$s=5;continue s;}g=a(d);$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=!g;case 5:if(f){$s=3;continue;}$s=4;continue;    case 3:  /�$s=2;continue;    case 4:      /  /c=c+(1)>>0;    $s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Iterate=function(a){return this.$val.Iterate(a);};FileSetgo/token.FileSet
go/token.Y go/token.searchFilesN��N=function $b(a,b){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};a=[a];b=[b];      /�c=C.Search(a[0].$length,(function(a,b){return function(c){var $ptr,c;$ptr={};      /�return((c<0||c>=a[0].$length)?$throwRuntimeError("index out of range"):a[0].$array[a[0].$offset+c]).base>b[0];    };})(a,b));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}return c-1>>0;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};searchFilesgo/token.searchFilessort.Search (*go/token.FileSet).file�IL.ptr.prototype.file=function $b(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};  0 b=this;      0Ab.mutex.RLock();  0u  0xc=b.last;    if(!(c===Y.nil)&&c.base<=(a>>0)&&(a>>0)<=(c.base+c.size>>0)){  0�b.mutex.RUnlock();  0�return c;    }  1  1d=N(b.files,(a>>0));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;if(e>=0){$s=2;continue;}$s=3;continue;    case 2:  1@g=(f=b.files,((e<0||e>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+e]));  1�    if((a>>0)<=(g.base+g.size>>0)){  1�b.mutex.RUnlock();  1�b.mutex.Lock();  1�b.last=g;  2b.mutex.Unlock();  2return g;    }    case 3:  2&b.mutex.RUnlock();  29return Y.nil;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.file=function(a){return this.$val.file(a);};FileSetfile~go/token.FileSet
go/token.Ygo/token.searchFiles (*go/token.FileSet).File�{L.ptr.prototype.File=function $b(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};b=Y.nil;  2�c=this;      2�if(!((a===0))){$s=1;continue;}$s=2;continue;    case 1:  3d=c.file(a);$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}b=d;    case 2:  3!return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.File=function(a){return this.$val.File(a);};FileSetgo/token.FileSet
go/token.Ygo/token.file~ (*go/token.FileSet).PositionFor��L.ptr.prototype.PositionFor=function $b(a,b){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};c=new G.ptr();  4%d=this;      4eif(!((a===0))){$s=1;continue;}$s=2;continue;    case 1:  4w  4ze=d.file(a);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;if(!(f===Y.nil)){$s=4;continue;}$s=5;continue;    case 4:  4�g=f.position(a,b);$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}$copy(c,g,G);    case 5:    case 2:  4�return c;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.PositionFor=function(a,b){return this.$val.PositionFor(a,b);};FileSetgo/token.FileSetgo/token.Position
go/token.Ygo/token.file~go/token.position~ (*go/token.FileSet).Position�YL.ptr.prototype.Position=function $b(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};b=new G.ptr();  5^c=this;      5�    d=c.PositionFor(a,true);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$copy(b,d,G);return b;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Position=function(a){return this.$val.Position(a);};FileSetgo/token.FileSetgo/token.Position go/token.searchIntsO��O=function(a,b){var $ptr,a,b,c,d,e,f,g,h;$ptr={};      8c=0;d=a.$length;e=c;f=d;  8while(true){if(!(e<f)){break;}  8'h=e+(g=((f-e>>0))/2,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero"))>>0;  8n    if(((h<0||h>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+h])<=b){  8�e=h+1>>0;    }else{  8�f=h;    }    }  8�return e-1>>0;    };
searchIntsgo/token.searchInts (*go/token.FileSet).Read��L.ptr.prototype.Read=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};  :�b=this;      :�  :�c=$clone(new Q.ptr(),Q);  :�  :�d=a(c);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;if(!($interfaceIsEqual(e,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  ; return e;    case 3:  ;0b.mutex.Lock();  ;@b.base=c.Base;  ;Rf=$makeSlice(Z,c.Files.$length);  ;y  ;}g=0;while(true){if(!(g<c.Files.$length)){break;}  ;�i=(h=c.Files,((g<0||g>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+g]));  ;�((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g]=new I.ptr(b,i.Name,i.Base,i.Size,i.Lines,i.Infos));      ;�  ;�g=g+(1)>>0;    }  ;�b.files=f;  <b.last=Y.nil;  <b.mutex.Unlock();  <(return $ifaceNil;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Read=function(a){return this.$val.Read(a);};FileSetgo/token.Filego/token.FileSet
go/token.Y
go/token.Zgo/token.serializedFileSet (*go/token.FileSet).Write�LL.ptr.prototype.Write=function $b(a){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};  <ob=this;      <�  <�c=$clone(new Q.ptr(),Q);  <�b.mutex.Lock();  <�c.Base=b.base;  <�d=$makeSlice(AB,b.files.$length);  =e=b.files;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  =4$copy(((g<0||g>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+g]),new P.ptr(h.name,h.base,h.size,h.lines,h.infos),P);    f++;}  =|c.Files=d;  =�b.mutex.Unlock();  =�i=a(new c.constructor.elem(c));$s=1;case 1:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}return i;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Write=function(a){return this.$val.Write(a);};FileSetgo/token.ABgo/token.FileSetgo/token.serializedFilego/token.serializedFileSet (go/token.Token).String�\R.prototype.String=function(){var $ptr,a,b;$ptr={};  K�a=this.$val;      K�b="";  K�    if(0<=a&&a<86){  K�b=((a<0||a>=S.length)?$throwRuntimeError("index out of range"):S[a]);    }  L    if(b===""){  L b="token("+E.Itoa((a>>0))+")";    }  LPreturn b;    };$ptrType(R).prototype.String=function(){return new R(this.$get()).String();};Tokengo/token.Tokengo/token.tokensstrconv.Itoa (go/token.Token).Precedence��R.prototype.Precedence=function(){var $ptr,a,b;$ptr={};  Nxa=this.$val;      N�b=a;  N�if(b===35){  N�return 1;      N�}else if(b===34){  N�return 2;      N�}else if(b===39||b===44||b===40||b===45||b===41||b===46){  N�return 3;      N�}else if(b===12||b===13||b===18||b===19){  Oreturn 4;      O#}else if(b===14||b===15||b===16||b===20||b===21||b===17||b===22){  OQreturn 5;    }  O^return 0;    };$ptrType(R).prototype.Precedence=function(){return new R(this.$get()).Precedence();};Tokengo/token.Token go/token.initU�U=function(){var $ptr,a,b;$ptr={};      O�T=new $Map();  O�  O�a=61;while(true){if(!(a<86)){break;}  O�b=((a<0||a>=S.length)?$throwRuntimeError("index out of range"):S[a]);(T||$throwRuntimeError("assignment to entry in nil map"))[b]={k:b,v:a};      O�  O�a=a+(1)>>0;    }    };	    U();go/token.initgo/token.keywordsgo/token.tokens go/token.LookupV��V=$pkg.Lookup=function(a){var $ptr,a,b,c,d,e;$ptr={};      P�  P�b=(c=T[a],c!==undefined?[c.v,true]:[0,false]);d=b[0];e=b[1];    if(e){  P�return d;    }  P�return 4;    };Lookupgo/token.Lookupgo/token.keywords (go/token.Token).IsLiteral��R.prototype.IsLiteral=function(){var $ptr,a;$ptr={};  Qqa=this.$val;      Q�return 3<a&&a<10;    };$ptrType(R).prototype.IsLiteral=function(){return new R(this.$get()).IsLiteral();};Tokengo/token.Token (go/token.Token).IsOperator��R.prototype.IsOperator=function(){var $ptr,a;$ptr={};  R9a=this.$val;      RXreturn 11<a&&a<59;    };$ptrType(R).prototype.IsOperator=function(){return new R(this.$get()).IsOperator();};Tokengo/token.Token (go/token.Token).IsKeyword��R.prototype.IsKeyword=function(){var $ptr,a;$ptr={};  R�a=this.$val;      Sreturn 60<a&&a<86;    };$ptrType(R).prototype.IsKeyword=function(){return new R(this.$get()).IsKeyword();};Tokengo/token.Token ��{"Base":21314,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/go/token/token_test.go","Base":1,"Size":101,"Lines":[0,13,14,28,29,38,49,51,52,89,99],"Infos":null},{"Name":"/usr/local/go/src/go/token/position.go","Base":103,"Size":14414,"Lines":[0,55,109,159,160,174,175,184,191,199,207,209,210,291,304,305,356,406,456,459,482,519,561,608,675,677,678,728,788,789,841,844,897,953,1008,1066,1069,1107,1126,1146,1161,1173,1177,1227,1230,1244,1254,1257,1267,1269,1270,1339,1410,1437,1440,1518,1596,1608,1611,1678,1747,1816,1885,1926,1929,2005,2077,2151,2227,2287,2290,2303,2304,2378,2449,2519,2564,2567,2587,2588,2638,2668,2687,2689,2690,2771,2779,2780,2837,2888,2891,2910,2925,2974,3042,3091,3092,3139,3248,3266,3268,3269,3337,3368,3383,3385,3386,3456,3484,3499,3501,3502,3565,3593,3608,3610,3611,3663,3696,3717,3736,3759,3769,3771,3772,3820,3892,3965,3968,4005,4025,4103,4139,4142,4164,4166,4167,4243,4323,4401,4458,4461,4498,4514,4574,4577,4597,4625,4652,4683,4686,4757,4824,4892,4965,5011,5051,5087,5089,5090,5167,5240,5311,5360,5433,5505,5515,5518,5562,5597,5613,5645,5700,5716,5720,5723,5724,5744,5764,5781,5803,5816,5818,5819,5891,5940,5992,6009,6020,6054,6071,6102,6106,6118,6135,6156,6160,6163,6164,6184,6204,6221,6243,6245,6246,6310,6373,6407,6430,6485,6499,6516,6530,6532,6533,6602,6672,6739,6791,6794,6860,6926,6929,6997,7017,7100,7162,7165,7187,7189,7190,7246,7281,7309,7312,7349,7371,7402,7405,7434,7436,7437,7497,7542,7580,7583,7618,7666,7695,7698,7722,7724,7725,7788,7836,7839,7872,7899,7901,7902,7950,8027,8029,8030,8107,8183,8262,8265,8352,8371,8418,8460,8463,8498,8541,8594,8616,8643,8696,8725,8730,8734,8737,8745,8747,8748,8811,8838,8859,8924,8932,8934,8935,9008,9081,9139,9179,9182,9248,9265,9314,9344,9348,9380,9383,9391,9393,9394,9464,9538,9541,9589,9620,9622,9623,9704,9715,9716,9763,9825,9858,9861,9883,9928,9981,10048,10100,10102,10103,10141,10170,10188,10213,10216,10218,10219,10284,10322,10325,10356,10373,10386,10405,10415,10416,10418,10419,10496,10572,10648,10729,10791,10794,10869,10944,11006,11009,11033,11036,11115,11189,11219,11222,11289,11305,11329,11344,11360,11363,11395,11427,11430,11462,11514,11570,11585,11656,11659,11692,11707,11737,11749,11759,11761,11762,11840,11866,11869,11917,11938,11955,11973,11997,12018,12022,12042,12073,12082,12086,12089,12091,12092,12133,12208,12210,12211,12249,12266,12301,12376,12396,12407,12410,12455,12503,12521,12572,12603,12624,12642,12695,12715,12727,12731,12734,12753,12765,12767,12768,12823,12882,12904,12907,12949,12966,12982,12985,12993,12995,12996,13066,13139,13197,13237,13240,13309,13326,13358,13391,13395,13398,13406,13408,13409,13476,13550,13553,13604,13635,13637,13638,13719,13739,13740,13778,13835,13839,13914,13918,13988,14054,14121,14180,14238,14257,14270,14324,14341,14358,14371,14382,14391,14395,14398,14412],"Infos":null},{"Name":"/usr/local/go/src/go/token/serialize.go","Base":14518,"Size":1279,"Lines":[0,55,109,159,160,174,175,204,276,290,301,312,325,343,345,346,378,389,413,415,416,490,553,579,616,629,632,633,649,667,706,744,764,828,831,848,862,880,881,893,895,896,947,1011,1037,1038,1054,1072,1119,1148,1218,1221,1239,1257,1258,1277],"Infos":null},{"Name":"/usr/local/go/src/go/token/token.go","Base":15798,"Size":5515,"Lines":[0,55,109,159,160,237,316,319,333,334,351,352,422,437,438,461,469,488,510,515,524,525,538,578,627,643,660,678,697,712,729,742,743,757,786,796,806,816,826,836,837,851,865,879,894,909,924,925,943,961,979,997,1015,1016,1038,1060,1082,1105,1128,1151,1152,1165,1178,1191,1204,1217,1218,1232,1245,1258,1271,1284,1285,1301,1317,1333,1349,1366,1367,1380,1393,1406,1419,1432,1433,1449,1465,1481,1497,1513,1527,1528,1541,1554,1561,1567,1573,1580,1590,1591,1600,1607,1613,1626,1631,1632,1638,1642,1648,1652,1660,1661,1672,1677,1686,1693,1701,1702,1710,1718,1726,1732,1737,1750,1752,1753,1779,1800,1801,1818,1839,1840,1858,1874,1892,1909,1926,1945,1946,1957,1968,1979,1990,2001,2002,2017,2032,2047,2063,2079,2095,2096,2115,2134,2153,2172,2191,2192,2215,2238,2261,2285,2309,2333,2334,2348,2362,2376,2390,2404,2405,2420,2434,2448,2462,2476,2477,2494,2511,2528,2545,2563,2564,2578,2592,2606,2620,2634,2635,2652,2669,2686,2703,2720,2721,2741,2760,2779,2799,2822,2823,2848,2871,2893,2922,2943,2944,2961,2976,2993,3008,3027,3028,3053,3072,3095,3116,3138,3139,3158,3177,3196,3213,3229,3231,3232,3293,3361,3429,3495,3563,3566,3601,3610,3653,3671,3674,3688,3734,3737,3747,3749,3750,3813,3876,3941,4002,4056,4059,4067,4101,4118,4135,4137,4138,4198,4257,4281,4284,4319,4332,4343,4354,4366,4377,4413,4424,4449,4460,4505,4516,4519,4538,4540,4541,4571,4572,4586,4621,4671,4697,4700,4702,4703,4782,4785,4819,4872,4885,4888,4902,4904,4905,4919,4920,4986,5042,5045,5129,5130,5199,5242,5245,5332,5333,5397,5428,5431],"Infos":null}]}
 