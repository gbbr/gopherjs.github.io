0�Z�fmt�l�package fmt
import math "math"
import strconv "strconv"
import utf8 "unicode/utf8"
import errors "errors"
import io "io"
import os "os"
import reflect "reflect"
import sync "sync"
func @"".Errorf(@"".format string, @"".a ...interface {  }) (? error)
type @"".Formatter interface { @"".Format(@"".f @"".State, @"".c rune) () }
func @"".Fprint(@"".w @"io".Writer, @"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Fprintf(@"".w @"io".Writer, @"".format string, @"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Fprintln(@"".w @"io".Writer, @"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Fscan(@"".r @"io".Reader, @"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Fscanf(@"".r @"io".Reader, @"".format string, @"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Fscanln(@"".r @"io".Reader, @"".a ...interface {  }) (@"".n int, @"".err error)
type @"".GoStringer interface { @"".GoString() (? string) }
func @"".Print(@"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Printf(@"".format string, @"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Println(@"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Scan(@"".a ...interface {  }) (@"".n int, @"".err error)
type @"".ScanState interface { @"".Read(@"".buf []byte) (@"".n int, @"".err error); @"".ReadRune() (@"".r rune, @"".size int, @"".err error); @"".SkipSpace() (); @"".Token(@"".skipSpace bool, @"".f func (? rune) (? bool)) (@"".token []byte, @"".err error); @"".UnreadRune() (? error); @"".Width() (@"".wid int, @"".ok bool) }
func @"".Scanf(@"".format string, @"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Scanln(@"".a ...interface {  }) (@"".n int, @"".err error)
type @"".Scanner interface { @"".Scan(@"".state @"".ScanState, @"".verb rune) (? error) }
func @"".Sprint(@"".a ...interface {  }) (? string)
func @"".Sprintf(@"".format string, @"".a ...interface {  }) (? string)
func @"".Sprintln(@"".a ...interface {  }) (? string)
func @"".Sscan(@"".str string, @"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Sscanf(@"".str string, @"".format string, @"".a ...interface {  }) (@"".n int, @"".err error)
func @"".Sscanln(@"".str string, @"".a ...interface {  }) (@"".n int, @"".err error)
type @"".State interface { @"".Flag(@"".c int) (? bool); @"".Precision() (@"".prec int, @"".ok bool); @"".Width() (@"".wid int, @"".ok bool); @"".Write(@"".b []byte) (@"".ret int, @"".err error) }
type @"".Stringer interface { @"".String() (? string) }
type @"".buffer []byte
func (? *@"".buffer) @"".Write(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".buffer) @"".WriteByte(@"".c byte) (? error)
func (? *@"".buffer) @"".WriteRune(@"".r rune) (? error)
func (? *@"".buffer) @"".WriteString(@"".s string) (@"".n int, @"".err error)
type @"".fmt struct { @"".intbuf [65]byte; @"".buf *@"".buffer; @"".wid int; @"".prec int; @"".widPresent bool; @"".precPresent bool; @"".minus bool; @"".plus bool; @"".sharp bool; @"".space bool; @"".unicode bool; @"".uniQuote bool; @"".zero bool }
func (? *@"".fmt) @"".clearflags() ()
func (? *@"".fmt) @"".computePadding(@"".width int) (@"".padding []byte, @"".leftWidth int, @"".rightWidth int)
func (? *@"".fmt) @"".fmt_E32(@"".v float32) ()
func (? *@"".fmt) @"".fmt_E64(@"".v float64) ()
func (? *@"".fmt) @"".fmt_G32(@"".v float32) ()
func (? *@"".fmt) @"".fmt_G64(@"".v float64) ()
func (? *@"".fmt) @"".fmt_boolean(@"".v bool) ()
func (? *@"".fmt) @"".fmt_bx(@"".b []byte, @"".digits string) ()
func (? *@"".fmt) @"".fmt_c128(@"".v complex128, @"".verb rune) ()
func (? *@"".fmt) @"".fmt_c64(@"".v complex64, @"".verb rune) ()
func (? *@"".fmt) @"".fmt_complex(@"".r float64, @"".j float64, @"".size int, @"".verb rune) ()
func (? *@"".fmt) @"".fmt_e32(@"".v float32) ()
func (? *@"".fmt) @"".fmt_e64(@"".v float64) ()
func (? *@"".fmt) @"".fmt_f32(@"".v float32) ()
func (? *@"".fmt) @"".fmt_f64(@"".v float64) ()
func (? *@"".fmt) @"".fmt_fb32(@"".v float32) ()
func (? *@"".fmt) @"".fmt_fb64(@"".v float64) ()
func (? *@"".fmt) @"".fmt_g32(@"".v float32) ()
func (? *@"".fmt) @"".fmt_g64(@"".v float64) ()
func (? *@"".fmt) @"".fmt_q(@"".s string) ()
func (? *@"".fmt) @"".fmt_qc(@"".c int64) ()
func (? *@"".fmt) @"".fmt_s(@"".s string) ()
func (? *@"".fmt) @"".fmt_sbx(@"".s string, @"".b []byte, @"".digits string) ()
func (? *@"".fmt) @"".fmt_sx(@"".s string, @"".digits string) ()
func (? *@"".fmt) @"".formatFloat(@"".v float64, @"".verb byte, @"".prec int, @"".n int) ()
func (? *@"".fmt) @"".init(@"".buf *@"".buffer) ()
func (? *@"".fmt) @"".integer(@"".a int64, @"".base uint64, @"".signedness bool, @"".digits string) ()
func (? *@"".fmt) @"".pad(@"".b []byte) ()
func (? *@"".fmt) @"".padString(@"".s string) ()
func (? *@"".fmt) @"".truncate(@"".s string) (? string)
func (? *@"".fmt) @"".writePadding(@"".n int, @"".padding []byte) ()
type @"".pp struct { @"".n int; @"".panicking bool; @"".erroring bool; @"".buf @"".buffer; @"".arg interface {  }; @"".value @"reflect".Value; @"".reordered bool; @"".goodArgNum bool; @"".runeBuf [4]byte; @"".fmt @"".fmt }
func (? *@"".pp) @"".Flag(@"".b int) (? bool)
func (? *@"".pp) @"".Precision() (@"".prec int, @"".ok bool)
func (? *@"".pp) @"".Width() (@"".wid int, @"".ok bool)
func (? *@"".pp) @"".Write(@"".b []byte) (@"".ret int, @"".err error)
func (? *@"".pp) @"".add(@"".c rune) ()
func (? *@"".pp) @"".argNumber(@"".argNum int, @"".format string, @"".i int, @"".numArgs int) (@"".newArgNum int, @"".newi int, @"".found bool)
func (? *@"".pp) @"".badVerb(@"".verb rune) ()
func (? *@"".pp) @"".catchPanic(@"".arg interface {  }, @"".verb rune) ()
func (? *@"".pp) @"".doPrint(@"".a []interface {  }, @"".addspace bool, @"".addnewline bool) ()
func (? *@"".pp) @"".doPrintf(@"".format string, @"".a []interface {  }) ()
func (? *@"".pp) @"".fmt0x64(@"".v uint64, @"".leading0x bool) ()
func (? *@"".pp) @"".fmtBool(@"".v bool, @"".verb rune) ()
func (? *@"".pp) @"".fmtBytes(@"".v []byte, @"".verb rune, @"".goSyntax bool, @"".typ @"reflect".Type, @"".depth int) ()
func (? *@"".pp) @"".fmtC(@"".c int64) ()
func (? *@"".pp) @"".fmtComplex128(@"".v complex128, @"".verb rune) ()
func (? *@"".pp) @"".fmtComplex64(@"".v complex64, @"".verb rune) ()
func (? *@"".pp) @"".fmtFloat32(@"".v float32, @"".verb rune) ()
func (? *@"".pp) @"".fmtFloat64(@"".v float64, @"".verb rune) ()
func (? *@"".pp) @"".fmtInt64(@"".v int64, @"".verb rune) ()
func (? *@"".pp) @"".fmtPointer(@"".value @"reflect".Value, @"".verb rune, @"".goSyntax bool) ()
func (? *@"".pp) @"".fmtString(@"".v string, @"".verb rune, @"".goSyntax bool) ()
func (? *@"".pp) @"".fmtUint64(@"".v uint64, @"".verb rune, @"".goSyntax bool) ()
func (? *@"".pp) @"".fmtUnicode(@"".v int64) ()
func (? *@"".pp) @"".free() ()
func (? *@"".pp) @"".handleMethods(@"".verb rune, @"".plus bool, @"".goSyntax bool, @"".depth int) (@"".wasString bool, @"".handled bool)
func (? *@"".pp) @"".printArg(@"".arg interface {  }, @"".verb rune, @"".plus bool, @"".goSyntax bool, @"".depth int) (@"".wasString bool)
func (? *@"".pp) @"".printReflectValue(@"".value @"reflect".Value, @"".verb rune, @"".plus bool, @"".goSyntax bool, @"".depth int) (@"".wasString bool)
func (? *@"".pp) @"".printValue(@"".value @"reflect".Value, @"".verb rune, @"".plus bool, @"".goSyntax bool, @"".depth int) (@"".wasString bool)
func (? *@"".pp) @"".unknownType(@"".v interface {  }) ()
type @"".readRune struct { @"".reader @"io".Reader; @"".buf [4]byte; @"".pending int; @"".pendBuf [4]byte }
func (? *@"".readRune) @"".ReadRune() (@"".rr rune, @"".size int, @"".err error)
func (? *@"".readRune) @"".readByte() (@"".b byte, @"".err error)
func (? *@"".readRune) @"".unread(@"".buf []byte) ()
type @"".runeUnreader interface { @"".UnreadRune() (? error) }
type @"".scanError struct { @"".err error }
type @"".ss struct { @"".rr @"io".RuneReader; @"".buf @"".buffer; @"".peekRune rune; @"".prevRune rune; @"".count int; @"".atEOF bool; ? @"".ssave }
func (? *@"".ss) @"".Read(@"".buf []byte) (@"".n int, @"".err error)
func (? *@"".ss) @"".ReadRune() (@"".r rune, @"".size int, @"".err error)
func (? *@"".ss) @"".SkipSpace() ()
func (? *@"".ss) @"".Token(@"".skipSpace bool, @"".f func (? rune) (? bool)) (@"".tok []byte, @"".err error)
func (? *@"".ss) @"".UnreadRune() (? error)
func (? *@"".ss) @"".Width() (@"".wid int, @"".ok bool)
func (? *@"".ss) @"".accept(@"".ok string) (? bool)
func (? *@"".ss) @"".advance(@"".format string) (@"".i int)
func (? *@"".ss) @"".complexTokens() (@"".real string, @"".imag string)
func (? *@"".ss) @"".consume(@"".ok string, @"".accept bool) (? bool)
func (? *@"".ss) @"".convertFloat(@"".str string, @"".n int) (? float64)
func (? *@"".ss) @"".convertString(@"".verb rune) (@"".str string)
func (? *@"".ss) @"".doScan(@"".a []interface {  }) (@"".numProcessed int, @"".err error)
func (? *@"".ss) @"".doScanf(@"".format string, @"".a []interface {  }) (@"".numProcessed int, @"".err error)
func (? *@"".ss) @"".error(@"".err error) ()
func (? *@"".ss) @"".errorString(@"".err string) ()
func (? *@"".ss) @"".floatToken() (? string)
func (? *@"".ss) @"".free(@"".old @"".ssave) ()
func (? *@"".ss) @"".getBase(@"".verb rune) (@"".base int, @"".digits string)
func (? *@"".ss) @"".getRune() (@"".r rune)
func (? *@"".ss) @"".hexByte() (@"".b byte, @"".ok bool)
func (? *@"".ss) @"".hexDigit(@"".d rune) (? int)
func (? *@"".ss) @"".hexString() (? string)
func (? *@"".ss) @"".mustReadRune() (@"".r rune)
func (? *@"".ss) @"".notEOF() ()
func (? *@"".ss) @"".okVerb(@"".verb rune, @"".okVerbs string, @"".typ string) (? bool)
func (? *@"".ss) @"".peek(@"".ok string) (? bool)
func (? *@"".ss) @"".quotedString() (? string)
func (? *@"".ss) @"".scanBasePrefix() (@"".base int, @"".digits string, @"".found bool)
func (? *@"".ss) @"".scanBool(@"".verb rune) (? bool)
func (? *@"".ss) @"".scanComplex(@"".verb rune, @"".n int) (? complex128)
func (? *@"".ss) @"".scanInt(@"".verb rune, @"".bitSize int) (? int64)
func (? *@"".ss) @"".scanNumber(@"".digits string, @"".haveDigits bool) (? string)
func (? *@"".ss) @"".scanOne(@"".verb rune, @"".arg interface {  }) ()
func (? *@"".ss) @"".scanRune(@"".bitSize int) (? int64)
func (? *@"".ss) @"".scanUint(@"".verb rune, @"".bitSize int) (? uint64)
func (? *@"".ss) @"".skipSpace(@"".stopAtNewline bool) ()
func (? *@"".ss) @"".token(@"".skipSpace bool, @"".f func (? rune) (? bool)) (? []byte)
type @"".ssave struct { @"".validSave bool; @"".nlIsEnd bool; @"".nlIsSpace bool; @"".argLimit int; @"".limit int; @"".maxWid int }
type @"".stringReader string
func (? *@"".stringReader) @"".Read(@"".b []byte) (@"".n int, @"".err error)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"reflect".Value struct { @"reflect".typ *@"reflect".rtype; @"reflect".ptr @"unsafe".Pointer; @"reflect".scalar uintptr; ? @"reflect".flag }
func (? @"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Bool() (? bool)
func (? @"reflect".Value) @"reflect".Bytes() (? []byte)
func (? @"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CanAddr() (? bool)
func (? @"reflect".Value) @"reflect".CanInterface() (? bool)
func (? @"reflect".Value) @"reflect".CanSet() (? bool)
func (? @"reflect".Value) @"reflect".Cap() (? int)
func (? @"reflect".Value) @"reflect".Close() ()
func (? @"reflect".Value) @"reflect".Complex() (? complex128)
func (? @"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Float() (? float64)
func (? @"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Int() (? int64)
func (? @"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? @"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? @"reflect".Value) @"reflect".IsNil() (? bool)
func (? @"reflect".Value) @"reflect".IsValid() (? bool)
func (? @"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? @"reflect".Value) @"reflect".Len() (? int)
func (? @"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".NumField() (? int)
func (? @"reflect".Value) @"reflect".NumMethod() (? int)
func (? @"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? @"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? @"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? @"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? @"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? @"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? @"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? @"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? @"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? @"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? @"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? @"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".String() (? string)
func (? @"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? @"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? @"reflect".Value) @"reflect".Uint() (? uint64)
func (? @"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? @"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target *interface {  }) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".iword() (? @"reflect".iword)
func (? @"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? @"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".runes() (? []rune)
func (? @"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? @"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
func (? *@"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Bool() (? bool)
func (? *@"reflect".Value) @"reflect".Bytes() (? []byte)
func (? *@"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CanAddr() (? bool)
func (? *@"reflect".Value) @"reflect".CanInterface() (? bool)
func (? *@"reflect".Value) @"reflect".CanSet() (? bool)
func (? *@"reflect".Value) @"reflect".Cap() (? int)
func (? *@"reflect".Value) @"reflect".Close() ()
func (? *@"reflect".Value) @"reflect".Complex() (? complex128)
func (? *@"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Float() (? float64)
func (? *@"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Int() (? int64)
func (? *@"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? *@"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? *@"reflect".Value) @"reflect".IsNil() (? bool)
func (? *@"reflect".Value) @"reflect".IsValid() (? bool)
func (? *@"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".Value) @"reflect".Len() (? int)
func (? *@"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".NumField() (? int)
func (? *@"reflect".Value) @"reflect".NumMethod() (? int)
func (? *@"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? *@"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? *@"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? *@"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? *@"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? *@"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? *@"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? *@"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? *@"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? *@"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? *@"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".String() (? string)
func (? *@"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? *@"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? *@"reflect".Value) @"reflect".Uint() (? uint64)
func (? *@"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? *@"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target *interface {  }) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".iword() (? @"reflect".iword)
func (? *@"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? *@"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".runes() (? []rune)
func (? *@"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? *@"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
type @"reflect".Type interface { @"reflect".Align() (? int); @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Bits() (? int); @"reflect".ChanDir() (? @"reflect".ChanDir); @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Elem() (? @"reflect".Type); @"reflect".Field(@"reflect".i int) (? @"reflect".StructField); @"reflect".FieldAlign() (? int); @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField); @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool); @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool); @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool); @"reflect".In(@"reflect".i int) (? @"reflect".Type); @"reflect".IsVariadic() (? bool); @"reflect".Key() (? @"reflect".Type); @"reflect".Kind() (? @"reflect".Kind); @"reflect".Len() (? int); @"reflect".Method(? int) (? @"reflect".Method); @"reflect".MethodByName(? string) (? @"reflect".Method, ? bool); @"reflect".Name() (? string); @"reflect".NumField() (? int); @"reflect".NumIn() (? int); @"reflect".NumMethod() (? int); @"reflect".NumOut() (? int); @"reflect".Out(@"reflect".i int) (? @"reflect".Type); @"reflect".PkgPath() (? string); @"reflect".Size() (? uintptr); @"reflect".String() (? string); @"reflect".common() (? *@"reflect".rtype); @"reflect".uncommon() (? *@"reflect".uncommonType) }
type @"io".RuneReader interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error) }
type @"reflect".rtype struct { @"reflect".size uintptr; @"reflect".hash uint32; _ uint8; @"reflect".align uint8; @"reflect".fieldAlign uint8; @"reflect".kind uint8; @"reflect".alg *uintptr; @"reflect".gc @"unsafe".Pointer; @"reflect".string *string; ? *@"reflect".uncommonType; @"reflect".ptrToThis *@"reflect".rtype; @"reflect".zero @"unsafe".Pointer }
func (? *@"reflect".rtype) @"reflect".Align() (? int)
func (? *@"reflect".rtype) @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Bits() (? int)
func (? *@"reflect".rtype) @"reflect".ChanDir() (? @"reflect".ChanDir)
func (? *@"reflect".rtype) @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Elem() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Field(@"reflect".i int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldAlign() (? int)
func (? *@"reflect".rtype) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".In(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".IsVariadic() (? bool)
func (? *@"reflect".rtype) @"reflect".Key() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".rtype) @"reflect".Len() (? int)
func (? *@"reflect".rtype) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".rtype) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".rtype) @"reflect".Name() (? string)
func (? *@"reflect".rtype) @"reflect".NumField() (? int)
func (? *@"reflect".rtype) @"reflect".NumIn() (? int)
func (? *@"reflect".rtype) @"reflect".NumMethod() (? int)
func (? *@"reflect".rtype) @"reflect".NumOut() (? int)
func (? *@"reflect".rtype) @"reflect".Out(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".PkgPath() (? string)
func (? *@"reflect".rtype) @"reflect".Size() (? uintptr)
func (? *@"reflect".rtype) @"reflect".String() (? string)
func (? *@"reflect".rtype) @"reflect".common() (? *@"reflect".rtype)
func (? *@"reflect".rtype) @"reflect".pointers() (? bool)
func (? *@"reflect".rtype) @"reflect".ptrTo() (? *@"reflect".rtype)
type @"reflect".flag uintptr
func (? @"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? @"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? @"reflect".flag) @"reflect".mustBeAssignable() ()
func (? @"reflect".flag) @"reflect".mustBeExported() ()
func (? *@"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? *@"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? *@"reflect".flag) @"reflect".mustBeAssignable() ()
func (? *@"reflect".flag) @"reflect".mustBeExported() ()
type @"reflect".Kind uint
func (? @"reflect".Kind) @"reflect".String() (? string)
func (? *@"reflect".Kind) @"reflect".String() (? string)
type @"reflect".iword @"unsafe".Pointer
type @"reflect".ChanDir int
func (? @"reflect".ChanDir) @"reflect".String() (? string)
func (? *@"reflect".ChanDir) @"reflect".String() (? string)
type @"reflect".StructField struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Tag @"reflect".StructTag; @"reflect".Offset uintptr; @"reflect".Index []int; @"reflect".Anonymous bool }
type @"reflect".Method struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Func @"reflect".Value; @"reflect".Index int }
type @"reflect".uncommonType struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".methods []@"reflect".method }
func (? *@"reflect".uncommonType) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".uncommonType) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".uncommonType) @"reflect".Name() (? string)
func (? *@"reflect".uncommonType) @"reflect".NumMethod() (? int)
func (? *@"reflect".uncommonType) @"reflect".PkgPath() (? string)
func (? *@"reflect".uncommonType) @"reflect".uncommon() (? *@"reflect".uncommonType)
type @"reflect".StructTag string
func (? @"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
func (? *@"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
type @"reflect".method struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".mtyp *@"reflect".rtype; @"reflect".typ *@"reflect".rtype; @"reflect".ifn @"unsafe".Pointer; @"reflect".tfn @"unsafe".Pointer }
$$
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciomathunicodeunicode/utf8bytessyscallstringstimeosstrconvreflect0d0	mathA0strconvB0unicode/utf8C0errorsD0ioE0osF0reflectG0	syncH0��0�
[($ptrType(L)).methods=[["clearflags","clearflags","fmt",$funcType([],[],false),-1],["computePadding","computePadding","fmt",$funcType([$Int],[($sliceType($Uint8)),$Int,$Int],false),-1],["fmt_E32","fmt_E32","fmt",$funcType([$Float32],[],false),-1],["fmt_E64","fmt_E64","fmt",$funcType([$Float64],[],false),-1],["fmt_G32","fmt_G32","fmt",$funcType([$Float32],[],false),-1],["fmt_G64","fmt_G64","fmt",$funcType([$Float64],[],false),-1],["fmt_boolean","fmt_boolean","fmt",$funcType([$Bool],[],false),-1],["fmt_bx","fmt_bx","fmt",$funcType([($sliceType($Uint8)),$String],[],false),-1],["fmt_c128","fmt_c128","fmt",$funcType([$Complex128,$Int32],[],false),-1],["fmt_c64","fmt_c64","fmt",$funcType([$Complex64,$Int32],[],false),-1],["fmt_complex","fmt_complex","fmt",$funcType([$Float64,$Float64,$Int,$Int32],[],false),-1],["fmt_e32","fmt_e32","fmt",$funcType([$Float32],[],false),-1],["fmt_e64","fmt_e64","fmt",$funcType([$Float64],[],false),-1],["fmt_f32","fmt_f32","fmt",$funcType([$Float32],[],false),-1],["fmt_f64","fmt_f64","fmt",$funcType([$Float64],[],false),-1],["fmt_fb32","fmt_fb32","fmt",$funcType([$Float32],[],false),-1],["fmt_fb64","fmt_fb64","fmt",$funcType([$Float64],[],false),-1],["fmt_g32","fmt_g32","fmt",$funcType([$Float32],[],false),-1],["fmt_g64","fmt_g64","fmt",$funcType([$Float64],[],false),-1],["fmt_q","fmt_q","fmt",$funcType([$String],[],false),-1],["fmt_qc","fmt_qc","fmt",$funcType([$Int64],[],false),-1],["fmt_s","fmt_s","fmt",$funcType([$String],[],false),-1],["fmt_sbx","fmt_sbx","fmt",$funcType([$String,($sliceType($Uint8)),$String],[],false),-1],["fmt_sx","fmt_sx","fmt",$funcType([$String,$String],[],false),-1],["formatFloat","formatFloat","fmt",$funcType([$Float64,$Uint8,$Int,$Int],[],false),-1],["init","init","fmt",$funcType([($ptrType(AI))],[],false),-1],["integer","integer","fmt",$funcType([$Int64,$Uint64,$Bool,$String],[],false),-1],["pad","pad","fmt",$funcType([($sliceType($Uint8))],[],false),-1],["padString","padString","fmt",$funcType([$String],[],false),-1],["truncate","truncate","fmt",$funcType([$String],[$String],false),-1],["writePadding","writePadding","fmt",$funcType([$Int,($sliceType($Uint8))],[],false),-1]];L.init([["intbuf","intbuf","fmt",($arrayType($Uint8,65)),""],["buf","buf","fmt",($ptrType(AI)),""],["wid","wid","fmt",$Int,""],["prec","prec","fmt",$Int,""],["widPresent","widPresent","fmt",$Bool,""],["precPresent","precPresent","fmt",$Bool,""],["minus","minus","fmt",$Bool,""],["plus","plus","fmt",$Bool,""],["sharp","sharp","fmt",$Bool,""],["space","space","fmt",$Bool,""],["unicode","unicode","fmt",$Bool,""],["uniQuote","uniQuote","fmt",$Bool,""],["zero","zero","fmt",$Bool,""]]);0fmt0
fmt:buffer 0�] 0AEEAE=$pkg.State=$newType(8,"Interface","fmt.State","State","fmt",null);��AE.init([["Flag","Flag","",$funcType([$Int],[$Bool],false)],["Precision","Precision","",$funcType([],[$Int,$Bool],false)],["Width","Width","",$funcType([],[$Int,$Bool],false)],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false)]]);0State0  0�� 0AFQAF=$pkg.Formatter=$newType(8,"Interface","fmt.Formatter","Formatter","fmt",null);BAF.init([["Format","Format","",$funcType([AE,$Int32],[],false)]]);0	Formatter0	fmt:State 0�� 0AGNAG=$pkg.Stringer=$newType(8,"Interface","fmt.Stringer","Stringer","fmt",null);@AG.init([["String","String","",$funcType([],[$String],false)]]);0
Stringer0  0�� 0AHTAH=$pkg.GoStringer=$newType(8,"Interface","fmt.GoStringer","GoStringer","fmt",null);DAH.init([["GoString","GoString","",$funcType([],[$String],false)]]);0
GoStringer0  0�� 0AIEAI=$pkg.buffer=$newType(12,"Slice","fmt.buffer","buffer","fmt",null);�J($ptrType(AI)).methods=[["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["WriteByte","WriteByte","",$funcType([$Uint8],[$error],false),-1],["WriteRune","WriteRune","",$funcType([$Int32],[$error],false),-1],["WriteString","WriteString","",$funcType([$String],[$Int,$error],false),-1]];AI.init($Uint8);0buffer0  0�
O($ptrType(AJ)).methods=[["Flag","Flag","",$funcType([$Int],[$Bool],false),-1],["Precision","Precision","",$funcType([],[$Int,$Bool],false),-1],["Width","Width","",$funcType([],[$Int,$Bool],false),-1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["add","add","fmt",$funcType([$Int32],[],false),-1],["argNumber","argNumber","fmt",$funcType([$Int,$String,$Int,$Int],[$Int,$Int,$Bool],false),-1],["badVerb","badVerb","fmt",$funcType([$Int32],[],false),-1],["catchPanic","catchPanic","fmt",$funcType([$emptyInterface,$Int32],[],false),-1],["doPrint","doPrint","fmt",$funcType([($sliceType($emptyInterface)),$Bool,$Bool],[],false),-1],["doPrintf","doPrintf","fmt",$funcType([$String,($sliceType($emptyInterface))],[],false),-1],["fmt0x64","fmt0x64","fmt",$funcType([$Uint64,$Bool],[],false),-1],["fmtBool","fmtBool","fmt",$funcType([$Bool,$Int32],[],false),-1],["fmtBytes","fmtBytes","fmt",$funcType([($sliceType($Uint8)),$Int32,$Bool,G.Type,$Int],[],false),-1],["fmtC","fmtC","fmt",$funcType([$Int64],[],false),-1],["fmtComplex128","fmtComplex128","fmt",$funcType([$Complex128,$Int32],[],false),-1],["fmtComplex64","fmtComplex64","fmt",$funcType([$Complex64,$Int32],[],false),-1],["fmtFloat32","fmtFloat32","fmt",$funcType([$Float32,$Int32],[],false),-1],["fmtFloat64","fmtFloat64","fmt",$funcType([$Float64,$Int32],[],false),-1],["fmtInt64","fmtInt64","fmt",$funcType([$Int64,$Int32],[],false),-1],["fmtPointer","fmtPointer","fmt",$funcType([G.Value,$Int32,$Bool],[],false),-1],["fmtString","fmtString","fmt",$funcType([$String,$Int32,$Bool],[],false),-1],["fmtUint64","fmtUint64","fmt",$funcType([$Uint64,$Int32,$Bool],[],false),-1],["fmtUnicode","fmtUnicode","fmt",$funcType([$Int64],[],false),-1],["free","free","fmt",$funcType([],[],false),-1],["handleMethods","handleMethods","fmt",$funcType([$Int32,$Bool,$Bool,$Int],[$Bool,$Bool],false),-1],["printArg","printArg","fmt",$funcType([$emptyInterface,$Int32,$Bool,$Bool,$Int],[$Bool],false),-1],["printReflectValue","printReflectValue","fmt",$funcType([G.Value,$Int32,$Bool,$Bool,$Int],[$Bool],false),-1],["printValue","printValue","fmt",$funcType([G.Value,$Int32,$Bool,$Bool,$Int],[$Bool],false),-1],["unknownType","unknownType","fmt",$funcType([$emptyInterface],[],false),-1]];AJ.init([["n","n","fmt",$Int,""],["panicking","panicking","fmt",$Bool,""],["erroring","erroring","fmt",$Bool,""],["buf","buf","fmt",AI,""],["arg","arg","fmt",$emptyInterface,""],["value","value","fmt",G.Value,""],["reordered","reordered","fmt",$Bool,""],["goodArgNum","goodArgNum","fmt",$Bool,""],["runeBuf","runeBuf","fmt",($arrayType($Uint8,4)),""],["fmt","fmt","fmt",L,""]]);0pp02
fmt:bufferfmt:fmtreflect:Type
fmt:buffer	fmt:ssave
readRune0	io:Reader 0  0I  0padZeroBytes0  0! 0J  0
falseBytes0  0# 0P  0commaSpaceBytes0  0! 0Q  0
nilBytes0  0 0T  0
mapBytes0  0$ 0U  0percentBangBytes0  0  0V  0missingBytes0  0! 0W  0
panicBytes0  0 0Y  0
extraBytes0  0  0Z  0irparenBytes0  0 0AA  0
bytesBytes0  0" 0AB  0
falseBytes0fmt:falseBytes 0j 0  5    P=new($sliceType($Uint8))($stringToBytes(", "));0commaSpaceBytes0fmt:commaSpaceBytes 0i 0  8    Q=new($sliceType($Uint8))($stringToBytes("<nil>"));0
nilBytes0fmt:nilBytes 0^ 0  7    T=new($sliceType($Uint8))($stringToBytes("map["));0
mapBytes0fmt:mapBytes 0l 0  5    U=new($sliceType($Uint8))($stringToBytes("%!"));0percentBangBytes0fmt:percentBangBytes 0k 0  <    V=new($sliceType($Uint8))($stringToBytes("(MISSING)"));0missingBytes0fmt:missingBytes 0n 0  =    W=new($sliceType($Uint8))($stringToBytes("(BADINDEX)"));0
panicBytes0fmt:panicBytes 0g 0  <    Y=new($sliceType($Uint8))($stringToBytes("%!(EXTRA "));0
extraBytes0fmt:extraBytes 0d 0  5    Z=new($sliceType($Uint8))($stringToBytes("i)"));0irparenBytes0fmt:irparenBytes 0f 0  ;    AA=new($sliceType($Uint8))($stringToBytes("[]byte{"));0
bytesBytes0fmt:bytesBytes 0q 0  @    AB=new($sliceType($Uint8))($stringToBytes("%!(BADWIDTH)"));0
fmt:ppFree	sync:Pool 0Q 0  %    AY=G.TypeOf(new $Int(0)).Bits();0 0fmt:intBitsreflect:TypeOf 0Y 0  )    AZ=G.TypeOf(new $Uintptr(0)).Bits();0 0!fmt:uintptrBitsreflect:TypeOf 0�� 0  ��    BS=new($sliceType(($arrayType($Uint16,2))))([$toNativeArray("Uint16",[9,13]),$toNativeArray("Uint16",[32,32]),$toNativeArray("Uint16",[133,133]),$toNativeArray("Uint16",[160,160]),$toNativeArray("Uint16",[5760,5760]),$toNativeArray("Uint16",[8192,8202]),$toNativeArray("Uint16",[8232,8233]),$toNativeArray("Uint16",[8239,8239]),$toNativeArray("Uint16",[8287,8287]),$toNativeArray("Uint16",[12288,12288])]);0space0	fmt:space 0�� 0  k    BW=new H.Pool.Ptr(0,0,($sliceType($emptyInterface)).nil,(function(){  �
fmt:ssFree	sync:Pool 0c 0  6    BY=D.New("syntax error scanning complex number");0 0
errors:Newfmt:complexError 0Y 0  /    BZ=D.New("syntax error scanning boolean");0 0
errors:New
clearflags0	fmt:fmt 0��(*fmt.fmt).init0 ��L.Ptr.prototype.init=function(a){var b;  1
fmtpad0/fmt:computePaddingfmt:fmtfmt:writePadding 0�#(*fmt.fmt).padString0 ��L.Ptr.prototype.padString=function(a){var b,c,d,e,f;  5�b=this;  5�    if(!b.widPresent||(b.wid===0)){  5�b.buf.WriteString(a);  5�return;    }  5�c=b.computePadding(C.RuneCountInString(a));d=c[0];e=c[1];f=c[2];  65    if(e>0){  6Eb.writePadding(e,d);    }  6gb.buf.WriteString(a);  6}    if(f>0){  6�b.writePadding(f,d);    }    };L.prototype.padString=function(a){return this.$val.padString(a);}; 0fmt	padString0Ofmt:computePaddingfmt:fmtfmt:writePaddingunicode/utf8:RuneCountInString 0�-(*fmt.fmt).fmt_boolean0 ��L.Ptr.prototype.fmt_boolean=function(a){var b;  7b=this;  7>    if(a){  7Gb.pad(M);    }else{  7db.pad(N);    }    };L.prototype.fmt_boolean=function(a){return this.$val.fmt_boolean(a);}; 0fmtfmt_boolean01fmt:falseBytesfmt:fmtfmt:pad
fmt.doPrec0OZO=function(a,b){  H+    if(a.precPresent){  H@return a.prec;    }  HRreturn b;    }; 0doPrec0  0��(*fmt.fmt).formatFloat0 �RL.Ptr.prototype.formatFloat=function(a,b,c,d){var $deferred=[],$err=null,e,f;try{$deferFrames.push($deferred);  H�e=this;  IFf=B.AppendFloat($subslice(new($sliceType($Uint8))(e.intbuf),0,1),a,b,c,d);  I�    if((((1<0||1>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+1])===45)||(((1<0||1>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+1])===43)){  I�f=$subslice(f,1);    }else{  I�(0<0||0>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+0]=43;    }  J;    if(A.IsInf(a,0)){  JS    if(e.zero){  Jb$deferred.push([(function(){  Jqe.zero=true;    }),[]]);  J�e.zero=false;    }    }  K^    if(e.zero&&e.widPresent&&e.wid>f.$length){  K�    if(e.space&&a>=0){  K�e.buf.WriteByte(32);  K�  K�e.wid=e.wid-(1)>>0;        }else if(e.plus||a<0){  L(e.buf.WriteByte(((0<0||0>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+0]));  LC  LCe.wid=e.wid-(1)>>0;    }  LQe.pad($subslice(f,1));  Lbreturn;    }  L�    if(e.space&&(((0<0||0>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+0])===43)){  L�(0<0||0>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+0]=32;  L�e.pad(f);  L�return;    }  M�    if(e.plus||(((0<0||0>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+0])===45)||A.IsInf(a,0)){  M�e.pad(f);  M�return;    }  N-e.pad($subslice(f,1));    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};L.prototype.formatFloat=function(a,b,c,d){return this.$val.formatFloat(a,b,c,d);}; 0fmtformatFloat03fmt:fmtfmt:pad
math:IsInfstrconv:AppendFloat 0��(*fmt.fmt).fmt_e640 ��L.Ptr.prototype.fmt_e64=function(a){var b;  Nyb=this;  N�b.formatFloat(a,101,O(b,6),64);    };L.prototype.fmt_e64=function(a){return this.$val.fmt_e64(a);}; 0fmtfmt_e640&
fmt:doPrecfmt:fmtfmt:formatFloat 0��(*fmt.fmt).fmt_E640 ��L.Ptr.prototype.fmt_E64=function(a){var b;  N�b=this;  Ob.formatFloat(a,69,O(b,6),64);    };L.prototype.fmt_E64=function(a){return this.$val.fmt_E64(a);}; 0fmtfmt_E640&
fmt:doPrecfmt:fmtfmt:formatFloat 0��(*fmt.fmt).fmt_f640 ��L.Ptr.prototype.fmt_f64=function(a){var b;  Oyb=this;  O�b.formatFloat(a,102,O(b,6),64);    };L.prototype.fmt_f64=function(a){return this.$val.fmt_f64(a);}; 0fmtfmt_f640&
fmt:doPrecfmt:fmtfmt:formatFloat 0��(*fmt.fmt).fmt_g640 ��L.Ptr.prototype.fmt_g64=function(a){var b;  Pb=this;  P+b.formatFloat(a,103,O(b,-1),64);    };L.prototype.fmt_g64=function(a){return this.$val.fmt_g64(a);}; 0fmtfmt_g640&
fmt:doPrecfmt:fmtfmt:formatFloat 0��(*fmt.fmt).fmt_G640 ��L.Ptr.prototype.fmt_G64=function(a){var b;  P�b=this;  P�b.formatFloat(a,71,O(b,-1),64);    };L.prototype.fmt_G64=function(a){return this.$val.fmt_G64(a);}; 0fmtfmt_G640&
fmt:doPrecfmt:fmtfmt:formatFloat 0��(*fmt.fmt).fmt_fb640 ��L.Ptr.prototype.fmt_fb64=function(a){var b;  Q>b=this;  Q\b.formatFloat(a,98,0,64);    };L.prototype.fmt_fb64=function(a){return this.$val.fmt_fb64(a);}; 0fmtfmt_fb640fmt:fmtfmt:formatFloat 0�(*fmt.fmt).fmt_e320 ��L.Ptr.prototype.fmt_e32=function(a){var b;  Rb=this;  R:b.formatFloat($coerceFloat32(a),101,O(b,6),32);    };L.prototype.fmt_e32=function(a){return this.$val.fmt_e32(a);}; 0fmtfmt_e320&
fmt:doPrecfmt:fmtfmt:formatFloat 0�(*fmt.fmt).fmt_E320 ��L.Ptr.prototype.fmt_E32=function(a){var b;  R�b=this;  R�b.formatFloat($coerceFloat32(a),69,O(b,6),32);    };L.prototype.fmt_E32=function(a){return this.$val.fmt_E32(a);}; 0fmtfmt_E320&
fmt:doPrecfmt:fmtfmt:formatFloat 0�(*fmt.fmt).fmt_f320 ��L.Ptr.prototype.fmt_f32=function(a){var b;  S/b=this;  SLb.formatFloat($coerceFloat32(a),102,O(b,6),32);    };L.prototype.fmt_f32=function(a){return this.$val.fmt_f32(a);}; 0fmtfmt_f320&
fmt:doPrecfmt:fmtfmt:formatFloat 0�(*fmt.fmt).fmt_g320 ��L.Ptr.prototype.fmt_g32=function(a){var b;  S�b=this;  S�b.formatFloat($coerceFloat32(a),103,O(b,-1),32);    };L.prototype.fmt_g32=function(a){return this.$val.fmt_g32(a);}; 0fmtfmt_g320&
fmt:doPrecfmt:fmtfmt:formatFloat 0�(*fmt.fmt).fmt_G320 ��L.Ptr.prototype.fmt_G32=function(a){var b;  Tlb=this;  T�b.formatFloat($coerceFloat32(a),71,O(b,-1),32);    };L.prototype.fmt_G32=function(a){return this.$val.fmt_G32(a);}; 0fmtfmt_G320&
fmt:doPrecfmt:fmtfmt:formatFloat 0��(*fmt.fmt).fmt_fb320 ��L.Ptr.prototype.fmt_fb32=function(a){var b;  Ub=this;  U-b.formatFloat($coerceFloat32(a),98,0,32);    };L.prototype.fmt_fb32=function(a){return this.$val.fmt_fb32(a);}; 0fmtfmt_fb320fmt:fmtfmt:formatFloat 0�(*fmt.fmt).fmt_c640 ��L.Ptr.prototype.fmt_c64=function(a,b){var c;  U�c=this;  U�c.fmt_complex($coerceFloat32(a.$real),$coerceFloat32(a.$imag),32,b);    };L.prototype.fmt_c64=function(a,b){return this.$val.fmt_c64(a,b);}; 0fmtfmt_c640fmt:fmtfmt:fmt_complex 0��(*fmt.fmt).fmt_c1280 ��L.Ptr.prototype.fmt_c128=function(a,b){var c;  V:c=this;  Vgc.fmt_complex(a.$real,a.$imag,64,b);    };L.prototype.fmt_c128=function(a,b){return this.$val.fmt_c128(a,b);}; 0fmtfmt_c1280fmt:fmtfmt:fmt_complex 0��(*fmt.fmt).fmt_complex0 �:L.Ptr.prototype.fmt_complex=function(a,b,c,d){var e,f,g,h,i,j;  V�e=this;  We.buf.WriteByte(40);  Wf=e.plus;  W0g=e.space;  WEh=e.wid;  WV  WZi=0;while(true){  Wlj=d;  W|if(j===98){  W�e.formatFloat(a,98,0,c);      W�}else if(j===101){  W�e.formatFloat(a,101,O(e,6),c);      W�}else if(j===69){  W�e.formatFloat(a,69,O(e,6),c);      X}else if(j===102||j===70){  X.e.formatFloat(a,102,O(e,6),c);      XZ}else if(j===103){  Xge.formatFloat(a,103,O(e,-1),c);      X�}else if(j===71){  X�e.formatFloat(a,71,O(e,-1),c);    }  X�    if(!((i===0))){  X�break;    }  Ye.plus=true;  Y$e.space=false;  Y6e.wid=h;  YGa=b;      Wd  Wdi=i+(1)>>0;}  YQe.space=g;  Yee.plus=f;  Ywe.wid=h;  Y�e.buf.Write(Z);    };L.prototype.fmt_complex=function(a,b,c,d){return this.$val.fmt_complex(a,b,c,d);}; 0fmtfmt_complex08
fmt:doPrecfmt:fmtfmt:formatFloatfmt:irparenBytes 0��(*fmt.buffer).Write0 ��$ptrType(AI).prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f;  cAd=this;  crd.$set($appendSlice(d.$get(),a));  c�    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    }; 0buffer0
fmt:buffer 0�(*fmt.buffer).WriteString0 ��$ptrType(AI).prototype.WriteString=function(a){var b=0,c=$ifaceNil,d,e,f;  c�d=this;  c�d.$set($appendSlice(d.$get(),new AI($stringToBytes(a))));  c�    e=a.length;f=$ifaceNil;b=e;c=f;return[b,c];    }; 0buffer0
fmt:buffer 0��(*fmt.buffer).WriteByte0 }$ptrType(AI).prototype.WriteByte=function(a){var b;  db=this;  d5b.$set($append(b.$get(),a));  dIreturn $ifaceNil;    }; 0buffer0
fmt:buffer 0�(*fmt.buffer).WriteRune0 ��$ptrType(AI).prototype.WriteRune=function(a){var b,c,d,e,f;  d]b=this;  d�    if(a<128){  d�b.$set($append(b.$get(),(a<<24>>>24)));  d�return $ifaceNil;    }  d�c=b.$get();  d�d=c.$length;  d�while((d+4>>0)>c.$capacity){  e c=$append(c,0);    }  ef=C.EncodeRune((e=$subslice(c,d,(d+4>>0)),$subslice(new($sliceType($Uint8))(e.$array),e.$offset,e.$offset+e.$length)),a);  eBb.$set($subslice(c,0,(d+f>>0)));  eQreturn $ifaceNil;    }; 0buffer0%
fmt:bufferunicode/utf8:EncodeRune 0�Hfmt.newPrinter0AL��AL=function(){var a;  h,a=$assertType(AK.Get(),($ptrType(AJ)));  hEa.panicking=false;  hZa.erroring=false;  hna.fmt.init(new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},a));  h�return a;    }; 0
newPrinter0*
fmt:bufferfmt:initfmt:pp
fmt:ppFree 0��(*fmt.pp).free0 �5AJ.Ptr.prototype.free=function(){var a;  h�a=this;  i'    if(a.buf.$capacity>1024){  i@return;    }  iKa.buf=$subslice(a.buf,0,0);  i^a.arg=$ifaceNil;  ik$copy(a.value,new G.Value.Ptr(($ptrType(G.rtype)).nil,0,0,0),G.Value);  i�AK.Put(a);    };AJ.prototype.free=function(){return this.$val.free();}; 0
ppfree02fmt:pp
fmt:ppFree
fmt:bufferfmt:pp 0�M(*fmt.pp).Write0 �AJ.Ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e;  k�d=this;  k�    e=new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},d).Write(a);b=e[0];c=e[1];return[b,c];    };AJ.prototype.Write=function(a){return this.$val.Write(a);}; 0pp0
fmt:bufferfmt:pp 0�Dfmt.Fprintf0AM��AM=$pkg.Fprintf=function(a,b,c){var d=0,e=$ifaceNil,f,g,h;  mf=AL();  m0f.doPrintf(b,c);  mGg=a.Write((h=f.buf,$subslice(new($sliceType($Uint8))(h.$array),h.$offset,h.$offset+h.$length)));d=g[0];e=g[1];  m`f.free();  mjreturn[d,e];    }; 0	Fprintf0(fmt:doPrintffmt:freefmt:newPrinter 0��
fmt.Printf0ANqAN=$pkg.Printf=function(a,b){var c=0,d=$ifaceNil,e;  nS    e=AM(F.Stdout,a,b);c=e[0];d=e[1];return[c,d];    }; 0Printf0fmt:Fprintf	os:Stdout 0��fmt.Sprintf0AO��AO=$pkg.Sprintf=function(a,b){var c,d;  oc=AL();  oc.doPrintf(a,b);  o5d=$bytesToString(c.buf);  oIc.free();  oSreturn d;    }; 0	Sprintf0(fmt:doPrintffmt:freefmt:newPrinter 0}
fmt.Errorf0AP?AP=$pkg.Errorf=function(a,b){  preturn D.New(AO(a,b));    }; 0Errorf0
errors:Newfmt:Sprintf 0�G
fmt.Fprint0AQ��AQ=$pkg.Fprint=function(a,b){var c=0,d=$ifaceNil,e,f,g;  qve=AL();  q�e.doPrint(b,false,false);  q�f=a.Write((g=e.buf,$subslice(new($sliceType($Uint8))(g.$array),g.$offset,g.$offset+g.$length)));c=f[0];d=f[1];  q�e.free();  q�return[c,d];    }; 0Fprint0'fmt:doPrintfmt:freefmt:newPrinter 0��	fmt.Print0ARlAR=$pkg.Print=function(a){var b=0,c=$ifaceNil,d;  r�    d=AQ(F.Stdout,a);b=d[0];c=d[1];return[b,c];    }; 0Print0
fmt:Fprint	os:Stdout 0��
fmt.Sprint0AS��AS=$pkg.Sprint=function(a){var b,c;  s�b=AL();  s�b.doPrint(a,false,false);  tc=$bytesToString(b.buf);  tb.free();  treturn c;    }; 0Sprint0'fmt:doPrintfmt:freefmt:newPrinter 0�Kfmt.Fprintln0AT��AT=$pkg.Fprintln=function(a,b){var c=0,d=$ifaceNil,e,f,g;  u�e=AL();  u�e.doPrint(b,true,true);  vf=a.Write((g=e.buf,$subslice(new($sliceType($Uint8))(g.$array),g.$offset,g.$offset+g.$length)));c=f[0];d=f[1];  v'e.free();  v1return[c,d];    }; 0
Fprintln0'fmt:doPrintfmt:freefmt:newPrinter 0��fmt.Println0AUnAU=$pkg.Println=function(a){var b=0,c=$ifaceNil,d;  w_    d=AT(F.Stdout,a);b=d[0];c=d[1];return[b,c];    }; 0	Println0fmt:Fprintln	os:Stdout 0��fmt.Sprintln0AV��AV=$pkg.Sprintln=function(a){var b,c;  xUb=AL();  xhb.doPrint(a,true,true);  x�c=$bytesToString(b.buf);  x�b.free();  x�return c;    }; 0
Sprintln0'fmt:doPrintfmt:freefmt:newPrinter 0��fmt.getField0AW��AW=function(a,b){var c;  y�c=new G.Value.Ptr();$copy(c,a.Field(b),G.Value);  y�    if((c.Kind()===20)&&!c.IsNil()){  y�$copy(c,c.Elem(),G.Value);    }  y�return c;    }; 0
getField0
parsenum0  0�(*fmt.pp).unknownType0 ��AJ.Ptr.prototype.unknownType=function(a){var b;  {db=this;  {�    if($interfaceIsEqual(a,$ifaceNil)){  {�new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},b).Write(Q);  {�return;    }  {�new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},b).WriteByte(63);  {�new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},b).WriteString(G.TypeOf(a).String());  |new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},b).WriteByte(63);    };AJ.prototype.unknownType=function(a){return this.$val.unknownType(a);}; 0ppunknownType07
fmt:bufferfmt:nilAngleBytesfmt:ppreflect:TypeOf 0��(*fmt.pp).badVerb0 �[AJ.Ptr.prototype.badVerb=function(a){var b;  |$b=this;  |Ab.erroring=true;  |Tb.add(37);  |`b.add(33);  |lb.add(a);  |yb.add(40);  |�  |�if(!($interfaceIsEqual(b.arg,$ifaceNil))){  |�new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},b).WriteString(G.TypeOf(b.arg).String());  |�b.add(61);  |�b.printArg(b.arg,118,false,false,0);      }}else if(b.value.IsValid()){  }(new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},b).WriteString(b.value.Type().String());  }Ub.add(61);  }bb.printValue($clone(b.value,G.Value),118,false,false,0);    }else{  }�new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},b).Write(Q);    }  }�b.add(41);  }�b.erroring=false;    };AJ.prototype.badVerb=function(a){return this.$val.badVerb(a);}; 0
fmt:bufferfmt:nilAngleBytesfmt:ppfmt:printArgfmt:printValuereflect:TypeOf
ppfmtC0*fmt:padfmt:ppunicode/utf8:EncodeRune 0�(*fmt.pp).fmtInt640 ��AJ.Ptr.prototype.fmtInt64=function(a,b){var c,d;  Mc=this;  td=b;  �if(d===98){  �c.fmt.integer(a,new $Uint64(0,2),true,"0123456789abcdef");      �}else if(d===99){  �c.fmtC(a);      �}else if(d===100||d===118){  �c.fmt.integer(a,new $Uint64(0,10),true,"0123456789abcdef");      �}else if(d===111){  �c.fmt.integer(a,new $Uint64(0,8),true,"0123456789abcdef");      �6}else if(d===113){  �B    if((0<a.$high||(0===a.$high&&0<=a.$low))&&(a.$high<0||(a.$high===0&&a.$low<=1114111))){  �fc.fmt.fmt_qc(a);    }else{  ��c.badVerb(b);    }      ��}else if(d===120){  ��c.fmt.integer(a,new $Uint64(0,16),true,"0123456789abcdef");      ��}else if(d===85){  ��c.fmtUnicode(a);      ��}else if(d===88){  ��c.fmt.integer(a,new $Uint64(0,16),true,"0123456789ABCDEF");    }else{  �'c.badVerb(b);    }    };AJ.prototype.fmtInt64=function(a,b){return this.$val.fmtInt64(a,b);}; 0ppfmtInt640Hfmt:badVerbfmt:fmtCfmt:fmtUnicode
fmt:fmt_qcfmt:integerfmt:pp 0�\(*fmt.pp).fmt0x640 �AJ.Ptr.prototype.fmt0x64=function(a,b){var c,d;  ��c=this;  ��d=c.fmt.sharp;  �c.fmt.sharp=b;  �!c.fmt.integer(new $Int64(a.$high,a.$low),new $Uint64(0,16),false,"0123456789abcdef");  �Qc.fmt.sharp=d;    };AJ.prototype.fmt0x64=function(a,b){return this.$val.fmt0x64(a,b);}; 0
fmtUnicode0fmt:integerfmt:pp 0��(*fmt.pp).fmtUint640 �AJ.Ptr.prototype.fmtUint64=function(a,b,c){var d,e;  ��d=this;  �e=b;  �if(e===98){  �+d.fmt.integer(new $Int64(a.$high,a.$low),new $Uint64(0,2),false,"0123456789abcdef");      �Z}else if(e===99){  �fd.fmtC(new $Int64(a.$high,a.$low));      �x}else if(e===100){  ��d.fmt.integer(new $Int64(a.$high,a.$low),new $Uint64(0,10),false,"0123456789abcdef");      ��}else if(e===118){  ��    if(c){  ��d.fmt0x64(a,true);    }else{  ��d.fmt.integer(new $Int64(a.$high,a.$low),new $Uint64(0,10),false,"0123456789abcdef");    }      �&}else if(e===111){  �2d.fmt.integer(new $Int64(a.$high,a.$low),new $Uint64(0,8),false,"0123456789abcdef");      �a}else if(e===113){  �m    if((0<a.$high||(0===a.$high&&0<=a.$low))&&(a.$high<0||(a.$high===0&&a.$low<=1114111))){  ��d.fmt.fmt_qc(new $Int64(a.$high,a.$low));    }else{  ��d.badVerb(b);    }      ��}else if(e===120){  ��d.fmt.integer(new $Int64(a.$high,a.$low),new $Uint64(0,16),false,"0123456789abcdef");      �}else if(e===88){  �d.fmt.integer(new $Int64(a.$high,a.$low),new $Uint64(0,16),false,"0123456789ABCDEF");      �C}else if(e===85){  �Od.fmtUnicode(new $Int64(a.$high,a.$low));    }else{  �rd.badVerb(b);    }    };AJ.prototype.fmtUint64=function(a,b,c){return this.$val.fmtUint64(a,b,c);}; 0pp	fmtUint640Ufmt:badVerbfmt:fmt0x64fmt:fmtCfmt:fmtUnicode
fmt:fmt_qcfmt:integerfmt:pp 0��(*fmt.pp).fmtFloat320 ��AJ.Ptr.prototype.fmtFloat32=function(a,b){var c,d;  ��c=this;  ��d=b;  ��if(d===98){  ��c.fmt.fmt_fb32(a);      ��}else if(d===101){  ��c.fmt.fmt_e32(a);      �}else if(d===69){  �c.fmt.fmt_E32(a);      �#}else if(d===102||d===70){  �4c.fmt.fmt_f32(a);      �F}else if(d===103||d===118){  �Wc.fmt.fmt_g32(a);      �i}else if(d===71){  �uc.fmt.fmt_G32(a);    }else{  ��c.badVerb(b);    }    };AJ.prototype.fmtFloat32=function(a,b){return this.$val.fmtFloat32(a,b);}; 0pp
fmtFloat320dfmt:badVerbfmt:fmt_E32fmt:fmt_G32fmt:fmt_e32fmt:fmt_f32fmt:fmt_fb32fmt:fmt_g32fmt:pp 0��(*fmt.pp).fmtFloat640 ��AJ.Ptr.prototype.fmtFloat64=function(a,b){var c,d;  ��c=this;  ��d=b;  ��if(d===98){  ��c.fmt.fmt_fb64(a);      �}else if(d===101){  �c.fmt.fmt_e64(a);      �%}else if(d===69){  �1c.fmt.fmt_E64(a);      �C}else if(d===102||d===70){  �Tc.fmt.fmt_f64(a);      �f}else if(d===103||d===118){  �wc.fmt.fmt_g64(a);      ��}else if(d===71){  ��c.fmt.fmt_G64(a);    }else{  ��c.badVerb(b);    }    };AJ.prototype.fmtFloat64=function(a,b){return this.$val.fmtFloat64(a,b);}; 0pp
fmtFloat640dfmt:badVerbfmt:fmt_E64fmt:fmt_G64fmt:fmt_e64fmt:fmt_f64fmt:fmt_fb64fmt:fmt_g64fmt:pp 0��(*fmt.pp).fmtComplex640 �QAJ.Ptr.prototype.fmtComplex64=function(a,b){var c,d;  ��c=this;  ��d=b;  �if(d===98||d===101||d===69||d===102||d===70||d===103||d===71){  �6c.fmt.fmt_c64(a,b);      �N}else if(d===118){  �Zc.fmt.fmt_c64(a,103);    }else{  �|c.badVerb(b);    }    };AJ.prototype.fmtComplex64=function(a,b){return this.$val.fmtComplex64(a,b);}; 0ppfmtComplex640"fmt:badVerbfmt:fmt_c64fmt:pp 0��(*fmt.pp).fmtComplex1280 �VAJ.Ptr.prototype.fmtComplex128=function(a,b){var c,d;  ��c=this;  ��d=b;  ��if(d===98||d===101||d===69||d===102||d===70||d===103||d===71){  �c.fmt.fmt_c128(a,b);      �}else if(d===118){  �'c.fmt.fmt_c128(a,103);    }else{  �Jc.badVerb(b);    }    };AJ.prototype.fmtComplex128=function(a,b){return this.$val.fmtComplex128(a,b);}; 0pp
fmt:fmt_sxfmt:pp 0�	�(*fmt.pp).fmtBytes0 ��AJ.Ptr.prototype.fmtBytes=function(a,b,c,d,e){var f,g,h,i,j,k;  ��f=this;  ��    if((b===118)||(b===100)){  �    if(c){  �-    if(a===($sliceType($Uint8)).nil){  �?    if($interfaceIsEqual(d,$ifaceNil)){  �Tnew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).WriteString("[]byte(nil)");    }else{  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).WriteString(d.String());  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).Write(R);    }  ��return;    }  ��    if($interfaceIsEqual(d,$ifaceNil)){  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).Write(AA);    }else{  �new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).WriteString(d.String());  �@new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).WriteByte(123);    }    }else{  �hnew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).WriteByte(91);    }  ��g=a;h=0;while(h<g.$length){i=h;j=((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]);  ��    if(i>0){  ��    if(c){  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).Write(P);    }else{  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).WriteByte(32);    }    }  �f.printArg(new $Uint8(j),118,f.fmt.plus,c,e+1>>0);    h++;}  �H    if(c){  �Ynew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).WriteByte(125);    }else{  �|new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},f).WriteByte(93);    }  ��return;    }  ��k=b;  ��if(k===115){  ��f.fmt.fmt_s($bytesToString(a));      ��}else if(k===120){  ��f.fmt.fmt_bx(a,"0123456789abcdef");      ��}else if(k===88){  �f.fmt.fmt_bx(a,"0123456789ABCDEF");      �!}else if(k===113){  �-f.fmt.fmt_q($bytesToString(a));    }else{  �Pf.badVerb(b);    }    };AJ.prototype.fmtBytes=function(a,b,c,d,e){return this.$val.fmtBytes(a,b,c,d,e);}; 0ppfmtBytes0��fmt:badVerb
fmt:bufferfmt:bytesBytesfmt:commaSpaceBytes
fmt:fmt_bx	fmt:fmt_q	fmt:fmt_sfmt:nilParenBytesfmt:ppfmt:printArg 0�b(*fmt.pp).fmtPointer0 ��AJ.Ptr.prototype.fmtPointer=function(a,b,c){var d,e,f,g,h;  �ld=this;  ��e=true;  ��f=b;  ��if(f===112||f===118){      ��}else if(f===98||f===100||f===111||f===120||f===88){  �e=false;    }else{  �,d.badVerb(b);  �>return;    }  �J  �Ng=0;  �Yh=a.Kind();  �pif(h===18||h===19||h===21||h===22||h===23||h===26){  ��g=a.Pointer();    }else{  ��d.badVerb(b);  �return;    }  �    if(c){  �!d.add(40);  �.new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},d).WriteString(a.Type().String());  �Yd.add(41);  �fd.add(40);  �s    if(g===0){  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},d).Write(S);    }else{  ��d.fmt0x64(new $Uint64(0,g.constructor===Number?g:1),true);    }  ��d.add(41);        }else if((b===118)&&(g===0)){  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},d).Write(Q);    }else{  �    if(e){  �.d.fmt0x64(new $Uint64(0,g.constructor===Number?g:1),!d.fmt.sharp);    }else{  �_d.fmtUint64(new $Uint64(0,g.constructor===Number?g:1),b,false);    }    }    };AJ.prototype.fmtPointer=function(a,b,c){return this.$val.fmtPointer(a,b,c);}; 0pp
fmtPointer0gfmt:addfmt:badVerb
fmt:bufferfmt:fmt0x64
catchPanic0��fmt:add
fmt:bufferfmt:nilAngleBytesfmt:panicBytesfmt:percentBangBytesfmt:ppfmt:printArg
�AJ.Ptr.prototype.printArg=function(a,b,c,d,e){var f=false,g,h,i,j,k,l,m,n,o;  �@g=this;  ��g.arg=a;  ��$copy(g.value,new G.Value.Ptr(($ptrType(G.rtype)).nil,0,0,0),G.Value);  ��    if($interfaceIsEqual(a,$ifaceNil)){  ��    if((b===84)||(b===118)){  ��g.fmt.pad(Q);    }else{  �%g.badVerb(b);    }  �;    f=false;return f;    }  ��h=b;  ��if(h===84){  ��g.printArg(new $String(G.TypeOf(a).String()),115,false,false,0);  �%    f=false;return f;      �3}else if(h===112){  �?g.fmtPointer($clone(G.ValueOf(a),G.Value),b,d);  �t    f=false;return f;    }  �bi=g.fmt.plus;  �yj=g.fmt.sharp;  ��    if(c){  ��g.fmt.plus=false;    }  ��    if(d){  ��g.fmt.sharp=false;    }  �
printValue0��fmt:badVerb
fmt:bufferfmt:fmtPointerfmt:handleMethodsfmt:nilAngleBytesfmt:ppfmt:printArgfmt:printReflectValue
}else if(j===18||j===19||j===26){  �Dg.fmtPointer($clone(a,G.Value),b,d);    }else{  �tg.unknownType(new i.constructor.Struct(i));    }}  ��$copy(g.value,h,G.Value);  ��    f=f;return f;    };AJ.prototype.printReflectValue=function(a,b,c,d,e){return this.$val.printReflectValue(a,b,c,d,e);}; 0ppprintReflectValue0�Ufmt:add
fmt:bufferfmt:commaSpaceBytesfmt:fmtBoolfmt:fmtBytesfmt:fmtComplex128fmt:fmtComplex64fmt:fmtFloat32fmt:fmtFloat64fmt:fmtInt64fmt:fmtPointer
intFromArg0  0��fmt.parseArgNumber0BB��BB=function(a){var b=0,c=0,d=false,e,f,g,h,i,j,k,l,m,n,o,p,q,r;  ��  ��e=1;while(e<a.length){  ��    if(a.charCodeAt(e)===93){  �f=AX(a,1,e);g=f[0];h=f[1];i=f[2];  �C    if(!h||!((i===e))){  �]    j=0;k=e+1>>0;l=false;b=j;c=k;d=l;return[b,c,d];    }  �|    m=g-1>>0;n=e+1>>0;o=true;b=m;c=n;d=o;return[b,c,d];    }      ��  ��e=e+(1)>>0;}  ��    p=0;q=1;r=false;b=p;c=q;d=r;return[b,c,d];    }; 0parseArgNumber0fmt:parsenum 0�k(*fmt.pp).argNumber0 �AJ.Ptr.prototype.argNumber=function(a,b,c,d){var e=0,f=0,g=false,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  ��h=this;  �^    if(b.length<=c||!((b.charCodeAt(c)===91))){  ��    i=a;j=c;k=false;e=i;f=j;g=k;return[e,f,g];    }  ��h.reordered=true;  ��l=BB(b.substring(c));m=l[0];n=l[1];o=l[2];  ��    if(o&&0<=m&&m<d){  �    p=m;q=c+n>>0;r=true;e=p;f=q;g=r;return[e,f,g];    }  �3h.goodArgNum=false;  �I    s=a;t=c+n>>0;u=true;e=s;f=t;g=u;return[e,f,g];    };AJ.prototype.argNumber=function(a,b,c,d){return this.$val.argNumber(a,b,c,d);}; 0pp	argNumber0fmt:parseArgNumberfmt:pp 0��(*fmt.pp).doPrintf0 �"AJ.Ptr.prototype.doPrintf=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;  �oc=this;  ��d=a.length;  ��e=0;  ��f=false;  �Dc.reordered=false;  �Y  �]g=0;while(g<d){  �rc.goodArgNum=true;  h=g;  while(g<d&&!((a.charCodeAt(g)===37))){  º  ºg=g+(1)>>0;    }  ��    if(g>h){  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).WriteString(a.substring(h,g));    }  ��    if(g>=d){  �4break;    }  �W  �Wg=g+(1)>>0;  �uc.fmt.clearflags();  É  ÎF:while(g<d){  æi=a.charCodeAt(g);  üif(i===35){  ��c.fmt.sharp=true;      ��}else if(i===48){  ��c.fmt.zero=true;      �}else if(i===43){  �c.fmt.plus=true;      �&}else if(i===45){  �4c.fmt.minus=true;      �J}else if(i===32){  �Xc.fmt.space=true;    }else{  �{break F;    }      Ý  Ýg=g+(1)>>0;}  Ļj=c.argNumber(e,a,g,b.$length);e=j[0];g=j[1];f=j[2];  �    if(g<d&&(a.charCodeAt(g)===42)){  �8  �8g=g+(1)>>0;  �?k=BA(b,e);c.fmt.wid=k[0];c.fmt.widPresent=k[1];e=k[2];  �~    if(!c.fmt.widPresent){  řnew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).Write(AB);    }  żf=false;    }else{  ��l=AX(a,g,d);c.fmt.wid=l[0];c.fmt.widPresent=l[1];g=l[2];  �    if(f&&c.fmt.widPresent){  �Nc.goodArgNum=false;    }    }  Ɗ    if((g+1>>0)<d&&(a.charCodeAt(g)===46)){  ư  ưg=g+(1)>>0;  Ʒ    if(f){  ��c.goodArgNum=false;    }  ��m=c.argNumber(e,a,g,b.$length);e=m[0];g=m[1];f=m[2];  �7    if(a.charCodeAt(g)===42){  �Q  �Qg=g+(1)>>0;  �Yn=BA(b,e);c.fmt.prec=n[0];c.fmt.precPresent=n[1];e=n[2];  Ǜ    if(!c.fmt.precPresent){  Ǹnew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).Write(AC);    }  ��f=false;    }else{  ��o=AX(a,g,d);c.fmt.prec=o[0];c.fmt.precPresent=o[1];g=o[2];  �?    if(!c.fmt.precPresent){  �\c.fmt.prec=0;  �pc.fmt.precPresent=true;    }    }    }  ț    if(!f){  ȯp=c.argNumber(e,a,g,b.$length);e=p[0];g=p[1];f=p[2];    }  ��    if(g>=d){  �new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).Write(AD);  �"continue;    }  �1q=C.DecodeRuneInString(a.substring(g));r=q[0];s=q[1];  �_g=g+(s)>>0;  ɕ    if(r===37){  ɦnew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).WriteByte(37);  ��continue;    }  ��    if(!c.goodArgNum){  � new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).Write(U);  �!c.add(r);  �-new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).Write(W);  �Kcontinue;        }else if(e>=b.$length){  ʉnew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).Write(U);  ʪc.add(r);  ʶnew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).Write(V);  ��continue;    }  ��t=((e<0||e>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+e]);  ��  ��e=e+(1)>>0;  �u=(r===118)&&c.fmt.sharp;  �'v=(r===118)&&c.fmt.plus;  �Hc.printArg(t,r,v,u,0);    }  �2    if(!c.reordered&&e<b.$length){  �Ynew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).Write(Y);  �swhile(e<b.$length){  ̘w=((e<0||e>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+e]);  ̬    if(!($interfaceIsEqual(w,$ifaceNil))){  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).WriteString(G.TypeOf(w).String());  ��new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).WriteByte(61);    }  �c.printArg(w,118,false,false,0);  �:    if((e+1>>0)<b.$length){  �Unew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).Write(P);    }      ̊  ̊e=e+(1)>>0;}  �}new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c).WriteByte(41);    }    };AJ.prototype.doPrintf=function(a,b){return this.$val.doPrintf(a,b);}; 0ppdoPrintf0�/fmt:add
fmt:bufferfmt:clearflagsfmt:commaSpaceBytesfmt:extraBytesfmt:intFromArgfmt:missingBytesfmt:noVerbBytesfmt:parsenumfmt:percentBangBytesfmt:ppfmt:printArgreflect:TypeOfunicode/utf8:DecodeRuneInString 0�V(*fmt.pp).doPrint0 ��AJ.Ptr.prototype.doPrint=function(a,b,c){var d,e,f,g,h;  ͞d=this;  ��e=false;  ��  ��f=0;while(f<a.$length){  � d.fmt.clearflags();  �cg=((f<0||f>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+f]);  �v    if(f>0){  Ήh=!($interfaceIsEqual(g,$ifaceNil))&&(G.TypeOf(g).Kind()===24);  ��    if(b||!h&&!e){  �new($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},d).WriteByte(32);    }    }  �!e=d.printArg(g,118,false,false,0);      �  �f=f+(1)>>0;}  �X    if(c){  �jnew($ptrType(AI))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},d).WriteByte(10);    }    };AJ.prototype.doPrint=function(a,b,c){return this.$val.doPrint(a,b,c);}; 0
fmt:bufferfmt:clearflagsfmt:ppfmt:printArgreflect:TypeOf 0��fmt.Scan0BFjBF=$pkg.Scan=function(a){var b=0,c=$ifaceNil,d;  �P    d=BM(F.Stdin,a);b=d[0];c=d[1];return[b,c];    }; 0Scan0	fmt:Fscanos:Stdin 0��
fmt.Scanln0BGlBG=$pkg.Scanln=function(a){var b=0,c=$ifaceNil,d;  �    d=BN(F.Stdin,a);b=d[0];c=d[1];return[b,c];    }; 0Scanln0fmt:Fscanlnos:Stdin 0��	fmt.Scanf0BHoBH=$pkg.Scanf=function(a,b){var c=0,d=$ifaceNil,e;  �M    e=BO(F.Stdin,a,b);c=e[0];d=e[1];return[c,d];    }; 0Scanf0
fmt:Fscanfos:Stdin 0�(*fmt.stringReader).Read0 ��$ptrType(BI).prototype.Read=function(a){var b=0,c=$ifaceNil,d;  ݖd=this;  ��b=$copyString(a,d.$get());  ��d.$set((d.$get()).substring(b));  ��    if(b===0){  ��c=E.EOF;    }  �return[b,c];    }; 0stringReader0fmt:stringReaderio:EOF 0�	fmt.Sscan0BJ��BJ=$pkg.Sscan=function(a,b){var c=0,d=$ifaceNil,e,f;  �Z    e=BM((f=new($ptrType($String))(function(){return a;},function($v){a=$v;}),new($ptrType(BI))(f.$get,f.$set)),b);c=e[0];d=e[1];return[c,d];    }; 0Sscan0	fmt:Fscanfmt:stringReader 0�fmt.Sscanln0BK��BK=$pkg.Sscanln=function(a,b){var c=0,d=$ifaceNil,e,f;  �D    e=BN((f=new($ptrType($String))(function(){return a;},function($v){a=$v;}),new($ptrType(BI))(f.$get,f.$set)),b);c=e[0];d=e[1];return[c,d];    }; 0	Sscanln0fmt:Fscanlnfmt:stringReader 0�
fmt.Sscanf0BL��BL=$pkg.Sscanf=function(a,b,c){var d=0,e=$ifaceNil,f,g;  �    f=BO((g=new($ptrType($String))(function(){return a;},function($v){a=$v;}),new($ptrType(BI))(g.$get,g.$set)),b,c);d=f[0];e=f[1];return[d,e];    }; 0Sscanf0
fmt:Fscanffmt:stringReader 0�!	fmt.Fscan0BM��BM=$pkg.Fscan=function(a,b){var c=0,d=$ifaceNil,e,f,g,h;  ��e=BX(a,true,false);f=e[0];g=new BR.Ptr();$copy(g,e[1],BR);  �$h=f.doScan(b);c=h[0];d=h[1];  �:f.free($clone(g,BR));  �Greturn[c,d];    }; 0Fscan03
fmt:doScanfmt:freefmt:newScanState	fmt:ssave 0�'fmt.Fscanln0BN��BN=$pkg.Fscanln=function(a,b){var c=0,d=$ifaceNil,e,f,g,h;  �e=BX(a,false,true);f=e[0];g=new BR.Ptr();$copy(g,e[1],BR);  �7h=f.doScan(b);c=h[0];d=h[1];  �Mf.free($clone(g,BR));  �Zreturn[c,d];    }; 0	Fscanln03
fmt:doScanfmt:freefmt:newScanState	fmt:ssave 0�+
fmt.Fscanf0BO��BO=$pkg.Fscanf=function(a,b,c){var d=0,e=$ifaceNil,f,g,h,i;  �rf=BX(a,false,false);g=f[0];h=new BR.Ptr();$copy(h,f[1],BR);  �i=g.doScanf(b,c);d=i[0];e=i[1];  �g.free($clone(h,BR));  ��return[d,e];    }; 0Fscanf04fmt:doScanffmt:freefmt:newScanState	fmt:ssave 0�(*fmt.ss).Read0 ��BQ.Ptr.prototype.Read=function(a){var b=0,c=$ifaceNil,d,e,f;  �jd=this;  �    e=0;f=D.New("ScanState's Read should not be called. Use ReadRune");b=e;c=f;return[b,c];    };BQ.prototype.Read=function(a){return this.$val.Read(a);}; 0ss0
errors:Newfmt:ss 0��(*fmt.ss).ReadRune0 ��BQ.Ptr.prototype.ReadRune=function(){var a=0,b=0,c=$ifaceNil,d,e;  ��d=this;  �     if(d.peekRune>=0){  �7  �7d.count=d.count+(1)>>0;  �Ca=d.peekRune;  �Tb=C.RuneLen(a);  �md.prevRune=a;  �~d.peekRune=-1;  �return[a,b,c];    }  �    if(d.atEOF||d.ssave.nlIsEnd&&(d.prevRune===10)||d.count>=d.ssave.argLimit){  ��c=E.EOF;  ��return[a,b,c];    }  �e=d.rr.ReadRune();a=e[0];b=e[1];c=e[2];  �!    if($interfaceIsEqual(c,$ifaceNil)){  �3  �3d.count=d.count+(1)>>0;  �?d.prevRune=a;        }else if($interfaceIsEqual(c,E.EOF)){  �kd.atEOF=true;    }  �~return[a,b,c];    };BQ.prototype.ReadRune=function(){return this.$val.ReadRune();}; 0ss0&fmt:ssio:EOFunicode/utf8:RuneLen 0�D(*fmt.ss).Width0 �BQ.Ptr.prototype.Width=function(){var a=0,b=false,c,d,e,f,g;  �c=this;  �    if(c.ssave.maxWid===1073741824){  ��    d=0;e=false;a=d;b=e;return[a,b];    }  ��    f=c.ssave.maxWid;g=true;a=f;b=g;return[a,b];    };BQ.prototype.Width=function(){return this.$val.Width();}; 0ss0fmt:ss 0��(*fmt.ss).getRune0 �?BQ.Ptr.prototype.getRune=function(){var a=0,b,c,d;  �zb=this;  �c=b.ReadRune();a=c[0];d=c[2];  ��    if(!($interfaceIsEqual(d,$ifaceNil))){  ��    if($interfaceIsEqual(d,E.EOF)){  ��    a=-1;return a;    }  ��b.error(d);    }  ��return a;    };BQ.prototype.getRune=function(){return this.$val.getRune();}; 0
errors:New
notSpace0
readRune0`fmt:readBytefmt:readRune
fmt:unreadio:EOFunicode/utf8:DecodeRuneunicode/utf8:FullRune 0��fmt.newScanState0BX�BX=function(a,b,c){var d=($ptrType(BQ)).nil,e=new BR.Ptr(),f,g,h,i,j;  �f=$assertType(a,($ptrType(BQ)),true);d=f[0];g=f[1];  �%    if(g){  �/$copy(e,d.ssave,BR);  �?d.ssave.limit=d.ssave.argLimit;  �Vd.ssave.nlIsEnd=c||d.ssave.nlIsEnd;  �yd.ssave.nlIsSpace=b;  ��return[d,e];    }  ��d=$assertType(BW.Get(),($ptrType(BQ)));  ��  ��h=$assertType(a,E.RuneReader,true);i=h[0];j=h[1];    if(j){  ��d.rr=i;    }else{  ��d.rr=new BV.Ptr(a,($arrayType($Uint8,4)).zero(),0,($arrayType($Uint8,4)).zero());    }  �d.ssave.nlIsSpace=b;  �-d.ssave.nlIsEnd=c;  �Bd.prevRune=-1;  �Sd.peekRune=-1;  �dd.atEOF=false;  �ud.ssave.limit=1073741824;  ��d.ssave.argLimit=1073741824;  ��d.ssave.maxWid=1073741824;  ��d.ssave.validSave=true;  ��d.count=0;  ��return[d,e];    }; 0newScanState0<fmt:readRunefmt:ss
fmt:ssFree	fmt:ssave
ssfree0fmt:ss
fmt:ssFree	fmt:ssave 0�^(*fmt.ss).skipSpace0 ��BQ.Ptr.prototype.skipSpace=function(a){var b,c;  �rb=this;  ��while(true){  ��c=b.getRune();  ��    if(c===-1){  ��return;    }  ��    if((c===13)&&b.peek("\n")){  ��continue;    }      if(c===10){      if(a){  -break;    }  ;    if(b.ssave.nlIsSpace){  Pcontinue;    }  ab.errorString("unexpected newline");  �return;    }  �    if(!BT(c)){  �b.UnreadRune();  �break;    }    }    };BQ.prototype.skipSpace=function(a){return this.$val.skipSpace(a);}; 0ss	skipSpace0=fmt:errorStringfmt:getRunefmt:isSpacefmt:peekfmt:ss 0�b(*fmt.ss).token0 �BQ.Ptr.prototype.token=function(a,b){var c,d,e; }c=this; �    if(a){ �c.skipSpace(false);    } while(true){ 
fmt:bufferfmt:getRune
fmt:bufferfmt:getRune
sspeek0$fmt:getRune
(b.error(BZ);    } 
Areturn true;     
N}else if(c===102||c===70){ 
_    if(b.accept("aA")&&(!b.accept("lL")||!b.accept("sS")||!b.accept("eE"))){ 
�b.error(BZ);    } 
�return false;    } 
�return false;    };BQ.prototype.scanBool=function(a){return this.$val.scanBool(a);}; 0ssscanBool0b
fmt:accept
fmt:notEOF
fmt:okVerb
fmt:okVerbfmt:ss 0��(*fmt.ss).scanNumber0 �;BQ.Ptr.prototype.scanNumber=function(a,b){var c; 
scanNumber01
fmt:acceptfmt:errorString
fmt:notEOFfmt:ss 0��(*fmt.ss).scanRune0 ��BQ.Ptr.prototype.scanRune=function(a){var b,c,d,e; �b=this; 
b.notEOF(); c=new $Int64(0,b.getRune()); /d=(a>>>0); Ce=$shiftRightInt64(($shiftLeft64(c,((64-d>>>0)))),((64-d>>>0))); e    if(!((e.$high===c.$high&&e.$low===c.$low))){ sb.errorString("overflow on character value "+$encodeRune(c.$low));    } �return c;    };BQ.prototype.scanRune=function(a){return this.$val.scanRune(a);}; 0ssscanRune02fmt:errorStringfmt:getRune
fmt:notEOFfmt:ss 0�0(*fmt.ss).scanBasePrefix0 ��BQ.Ptr.prototype.scanBasePrefix=function(){var a=0,b="",c=false,d,e,f,g,h,i,j,k; ud=this; �    if(!d.peek("0")){ �    e=10;f="0123456789";g=false;a=e;b=f;c=g;return[a,b,c];    } �d.accept("0"); �c=true; Yh=8;i="01234567";a=h;b=i; x    if(d.peek("xX")){ �d.consume("xX",false); �j=16;k="0123456789aAbBcCdDeEfF";a=j;b=k;    } �return[a,b,c];    };BQ.prototype.scanBasePrefix=function(){return this.$val.scanBasePrefix();}; 0ssscanBasePrefix0+
fmt:acceptfmt:consumefmt:peekfmt:ss 0�F(*fmt.ss).scanInt0 �mBQ.Ptr.prototype.scanInt=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n; bc=this; �    if(a===99){ �return c.scanRune(b);    } �c.skipSpace(false); �c.notEOF(); �d=c.getBase(a);e=d[0];f=d[1]; g=false;     if(a===85){ -    if(!c.consume("U",false)||!c.consume("+",false)){ fc.errorString("bad unicode format ");    }    }else{ �c.accept("+-"); �    if(a===118){ �h=c.scanBasePrefix();e=h[0];f=h[1];g=h[2];    }    } 1i=c.scanNumber(f,g); Zj=B.ParseInt(i,e,64);k=j[0];l=j[1]; �    if(!($interfaceIsEqual(l,$ifaceNil))){ �c.error(l);    } �m=(b>>>0); �n=$shiftRightInt64(($shiftLeft64(k,((64-m>>>0)))),((64-m>>>0))); �    if(!((n.$high===k.$high&&n.$low===k.$low))){ �c.errorString("integer overflow on token "+i);    } "return k;    };BQ.prototype.scanInt=function(a,b){return this.$val.scanInt(a,b);}; 0
fmt:acceptfmt:consume	fmt:errorfmt:errorStringfmt:getBase
fmt:notEOFfmt:scanBasePrefixfmt:scanNumberfmt:scanRune
fmt:notEOFfmt:scanBasePrefixfmt:scanNumberfmt:scanRune
floatToken0
fmt:acceptfmt:ss 0�`(*fmt.ss).complexTokens0 ��BQ.Ptr.prototype.complexTokens=function(){var a="",b="",c,d,e,f,g; Oc=this; �d=c.accept("("); �a=c.floatToken(); �c.buf=$subslice(c.buf,0,0);     if(!c.accept("+-")){ c.error(BY);    } Ne=$bytesToString(c.buf); ib=c.floatToken(); �    if(!c.accept("i")){ �c.error(BY);    } �    if(d&&!c.accept(")")){ �c.error(BY);    } �    f=a;g=e+b;a=f;b=g;return[a,b];    };BQ.prototype.complexTokens=function(){return this.$val.complexTokens();}; 0ss
fmt:acceptfmt:complexError	fmt:errorfmt:floatTokenfmt:ss 0��(*fmt.ss).convertFloat0 �)BQ.Ptr.prototype.convertFloat=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r; Gc=this; y |d=CA(a,112);    if(d>=0){ �e=B.ParseFloat(a.substring(0,d),b);f=e[0];g=e[1];     if(!($interfaceIsEqual(g,$ifaceNil))){ S Vh=$assertType(g,($ptrType(B.NumError)),true);i=h[0];j=h[1];    if(j){ �i.Num=a;    } �c.error(g);    } �k=B.Atoi(a.substring((d+1>>0)));l=k[0];g=k[1]; �    if(!($interfaceIsEqual(g,$ifaceNil))){    m=$assertType(g,($ptrType(B.NumError)),true);n=m[0];o=m[1];    if(o){  /n.Num=a;    }  Cc.error(g);    }  Vreturn A.Ldexp(f,l);    }  rp=B.ParseFloat(a,b);q=p[0];r=p[1];  �    if(!($interfaceIsEqual(r,$ifaceNil))){  �c.error(r);    }  �return q;    };BQ.prototype.convertFloat=function(a,b){return this.$val.convertFloat(a,b);}; 0ssconvertFloat0b	fmt:error
math:Ldexpstrconv:Atoistrconv:NumErrorstrconv:ParseFloat 0��(*fmt.ss).scanComplex0 �@BQ.Ptr.prototype.scanComplex=function(a,b){var c,d,e,f,g,h,i,j; !�c=this; "    if(!c.okVerb(a,"beEfFgGv","complex")){ "Freturn new $Complex128(0,0);    } "Sc.skipSpace(false); "gc.notEOF(); "sd=c.complexTokens();e=d[0];f=d[1]; "�h=c.convertFloat(e,(g=b/2,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero"))); "�j=c.convertFloat(f,(i=b/2,(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero"))); "�return new $Complex128(h,j);    };BQ.prototype.scanComplex=function(a,b){return this.$val.scanComplex(a,b);}; 0ssscanComplex0Tfmt:complexTokensfmt:convertFloat
fmt:notEOF
fmt:okVerb
fmt:notEOFfmt:notSpace
fmt:okVerbfmt:quotedString
fmt:buffer	fmt:errorfmt:errorStringfmt:getRunefmt:mustReadRune
fmt:notEOFfmt:ssstrconv:Unquote 0�L(*fmt.ss).hexDigit0 �BQ.Ptr.prototype.hexDigit=function(a){var b,c,d; )b=this; )8c=(a>>0); )Id=c; )Yif(d===48||d===49||d===50||d===51||d===52||d===53||d===54||d===55||d===56||d===57){ )�return c-48>>0;     )�}else if(d===97||d===98||d===99||d===100||d===101||d===102){ )�return(10+c>>0)-97>>0;     )�}else if(d===65||d===66||d===67||d===68||d===69||d===70){ *	return(10+c>>0)-65>>0;    } *%b.errorString("illegal hex digit"); *Ireturn 0;    };BQ.prototype.hexDigit=function(a){return this.$val.hexDigit(a);}; 0sshexDigit0fmt:errorStringfmt:ss 0��(*fmt.ss).hexByte0 �|BQ.Ptr.prototype.hexByte=function(){var a=0,b=false,c,d,e,f,g; *�c=this; + d=c.getRune(); +6    if(d===-1){ +Jreturn[a,b];    } +U    if(BT(d)){ +kc.UnreadRune(); +|return[a,b];    } +�e=c.mustReadRune(); +�    f=(((c.hexDigit(d)<<4>>0)|c.hexDigit(e))<<24>>>24);g=true;a=f;b=g;return[a,b];    };BQ.prototype.hexByte=function(){return this.$val.hexByte();}; 0
fmt:bufferfmt:errorStringfmt:hexByte
fmt:notEOFfmt:ss 0�y(*fmt.ss).scanOne0 �BQ.Ptr.prototype.scanOne=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u; -�c=this; -�c.buf=$subslice(c.buf,0,0); -� -�d=$ifaceNil; .$ .'e=$assertType(b,BE,true);f=e[0];g=e[1];    if(g){ .Fd=f.Scan(c,a); .^    if(!($interfaceIsEqual(d,$ifaceNil))){ .q    if($interfaceIsEqual(d,E.EOF)){ .�d=E.ErrUnexpectedEOF;    } .�c.error(d);    } .�return;    } .�i=b; .�if($assertType(i,($ptrType($Bool)),true)[1]){h=i.$val; .�h.$set(c.scanBool(a));     /}else if($assertType(i,($ptrType($Complex64)),true)[1]){h=i.$val; /h.$set((j=c.scanComplex(a,64),new $Complex64(j.$real,j.$imag)));     /D}else if($assertType(i,($ptrType($Complex128)),true)[1]){h=i.$val; /Xh.$set(c.scanComplex(a,128));     /w}else if($assertType(i,($ptrType($Int)),true)[1]){h=i.$val; /�h.$set(((k=c.scanInt(a,AY),k.$low+((k.$high>>31)*4294967296))>>0));     /�}else if($assertType(i,($ptrType($Int8)),true)[1]){h=i.$val; /�h.$set(((l=c.scanInt(a,8),l.$low+((l.$high>>31)*4294967296))<<24>>24));     /�}else if($assertType(i,($ptrType($Int16)),true)[1]){h=i.$val; /�h.$set(((m=c.scanInt(a,16),m.$low+((m.$high>>31)*4294967296))<<16>>16));     0}else if($assertType(i,($ptrType($Int32)),true)[1]){h=i.$val; 0h.$set(((n=c.scanInt(a,32),n.$low+((n.$high>>31)*4294967296))>>0));     05}else if($assertType(i,($ptrType($Int64)),true)[1]){h=i.$val; 0Dh.$set(c.scanInt(a,64));     0^}else if($assertType(i,($ptrType($Uint)),true)[1]){h=i.$val; 0lh.$set((c.scanUint(a,AY).$low>>>0));     0�}else if($assertType(i,($ptrType($Uint8)),true)[1]){h=i.$val; 0�h.$set((c.scanUint(a,8).$low<<24>>>24));     0�}else if($assertType(i,($ptrType($Uint16)),true)[1]){h=i.$val; 0�h.$set((c.scanUint(a,16).$low<<16>>>16));     0�}else if($assertType(i,($ptrType($Uint32)),true)[1]){h=i.$val; 1h.$set((c.scanUint(a,32).$low>>>0));     1(}else if($assertType(i,($ptrType($Uint64)),true)[1]){h=i.$val; 18h.$set(c.scanUint(a,64));     1S}else if($assertType(i,($ptrType($Uintptr)),true)[1]){h=i.$val; 1dh.$set((c.scanUint(a,AZ).$low>>>0));     2>}else if($assertType(i,($ptrType($Float32)),true)[1]){h=i.$val; 2O    if(c.okVerb(a,"beEfFgGv","float32")){ 2}c.skipSpace(false); 2�c.notEOF(); 2�h.$set(c.convertFloat(c.floatToken(),32));    }     2�}else if($assertType(i,($ptrType($Float64)),true)[1]){h=i.$val; 2�    if(c.okVerb(a,"beEfFgGv","float64")){ 3c.skipSpace(false); 3,c.notEOF(); 3:h.$set(c.convertFloat(c.floatToken(),64));    }     3g}else if($assertType(i,($ptrType($String)),true)[1]){h=i.$val; 3wh.$set(c.convertString(a));     3�}else if($assertType(i,($ptrType(($sliceType($Uint8)))),true)[1]){h=i.$val; 4&h.$set(new($sliceType($Uint8))($stringToBytes(c.convertString(a))));    }else{h=i; 4Uo=new G.Value.Ptr();$copy(o,G.ValueOf(h),G.Value); 4qp=new G.Value.Ptr();$copy(p,o,G.Value); 4~    if(!((p.Kind()===22))){ 4�c.errorString("type not a pointer: "+o.Type().String()); 4�return;    } 4� 4�q=new G.Value.Ptr();$copy(q,p.Elem(),G.Value);r=q.Kind(); 5if(r===1){ 5'q.SetBool(c.scanBool(a));     5E}else if(r===2||r===3||r===4||r===5||r===6){ 5�q.SetInt(c.scanInt(a,q.Type().Bits()));     5�}else if(r===7||r===8||r===9||r===10||r===11||r===12){ 6(q.SetUint(c.scanUint(a,q.Type().Bits()));     6W}else if(r===24){ 6oq.SetString(c.convertString(a));     6�}else if(r===23){ 6�s=q.Type(); 6�    if(!((s.Elem().Kind()===8))){ 7c.errorString("can't scan type: "+o.Type().String());    } 7\t=c.convertString(a); 7|q.Set($clone(G.MakeSlice(s,t.length,t.length),G.Value)); 7� 7�u=0;while(u<t.length){ 7�q.Index(u).SetUint(new $Uint64(0,t.charCodeAt(u)));     7� 7�u=u+(1)>>0;}     7�}else if(r===13||r===14){ 8)c.skipSpace(false); 8?c.notEOF(); 8Mq.SetFloat(c.convertFloat(c.floatToken(),q.Type().Bits()));     8�}else if(r===15||r===16){ 8�q.SetComplex(c.scanComplex(a,q.Type().Bits()));    }else{ 8�c.errorString("can't scan type: "+o.Type().String());    }    }    };BQ.prototype.scanOne=function(a,b){return this.$val.scanOne(a,b);}; 0
fmt:notEOF
fmt:okVerbfmt:scanBoolfmt:scanComplexfmt:scanIntfmt:scanUint
 �