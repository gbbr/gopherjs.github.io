0�9�testing�3Jpackage testing
import flag "flag"
import fmt "fmt"
import os "os"
import runtime "runtime"
import time "time"
import sync "sync"
import atomic "sync/atomic"
import bytes "bytes"
import io "io"
import strings "strings"
import pprof "runtime/pprof"
import strconv "strconv"
func @"".AllocsPerRun(@"".runs int, @"".f func () ()) (@"".avg float64)
type @"".B struct { ? @"".common; @"".N int; @"".previousN int; @"".previousDuration @"time".Duration; @"".benchmark @"".InternalBenchmark; @"".bytes int64; @"".timerOn bool; @"".showAllocResult bool; @"".result @"".BenchmarkResult; @"".parallelism int; @"".startAllocs uint64; @"".startBytes uint64; @"".netAllocs uint64; @"".netBytes uint64 }
func (? *@"".B) @"".ReportAllocs() ()
func (? *@"".B) @"".ResetTimer() ()
func (? *@"".B) @"".RunParallel(@"".body func (? *@"".PB) ()) ()
func (? *@"".B) @"".SetBytes(@"".n int64) ()
func (? *@"".B) @"".SetParallelism(@"".p int) ()
func (? *@"".B) @"".StartTimer() ()
func (? *@"".B) @"".StopTimer() ()
func (? *@"".B) @"".launch() ()
func (? *@"".B) @"".nsPerOp() (? int64)
func (? *@"".B) @"".run() (? @"".BenchmarkResult)
func (? *@"".B) @"".runN(@"".n int) ()
func (? *@"".B) @"".trimOutput() ()
func @"".Benchmark(@"".f func (@"".b *@"".B) ()) (? @"".BenchmarkResult)
type @"".BenchmarkResult struct { @"".N int; @"".T @"time".Duration; @"".Bytes int64; @"".MemAllocs uint64; @"".MemBytes uint64 }
func (? @"".BenchmarkResult) @"".AllocedBytesPerOp() (? int64)
func (? @"".BenchmarkResult) @"".AllocsPerOp() (? int64)
func (? @"".BenchmarkResult) @"".MemString() (? string)
func (? @"".BenchmarkResult) @"".NsPerOp() (? int64)
func (? @"".BenchmarkResult) @"".String() (? string)
func (? @"".BenchmarkResult) @"".mbPerSec() (? float64)
func (? *@"".BenchmarkResult) @"".AllocedBytesPerOp() (? int64)
func (? *@"".BenchmarkResult) @"".AllocsPerOp() (? int64)
func (? *@"".BenchmarkResult) @"".MemString() (? string)
func (? *@"".BenchmarkResult) @"".NsPerOp() (? int64)
func (? *@"".BenchmarkResult) @"".String() (? string)
func (? *@"".BenchmarkResult) @"".mbPerSec() (? float64)
type @"".Cover struct { @"".Mode string; @"".Counters map[string][]uint32; @"".Blocks map[string][]@"".CoverBlock; @"".CoveredPackages string }
type @"".CoverBlock struct { @"".Line0 uint32; @"".Col0 uint16; @"".Line1 uint32; @"".Col1 uint16; @"".Stmts uint16 }
type @"".InternalBenchmark struct { @"".Name string; @"".F func (@"".b *@"".B) () }
type @"".InternalExample struct { @"".Name string; @"".F func () (); @"".Output string }
type @"".InternalTest struct { @"".Name string; @"".F func (? *@"".T) () }
func @"".Main(@"".matchString func (@"".pat string, @"".str string) (? bool, ? error), @"".tests []@"".InternalTest, @"".benchmarks []@"".InternalBenchmark, @"".examples []@"".InternalExample) ()
type @"".PB struct { @"".globalN *uint64; @"".grain uint64; @"".cache uint64; @"".bN uint64 }
func (? *@"".PB) @"".Next() (? bool)
func @"".RegisterCover(@"".c @"".Cover) ()
func @"".RunBenchmarks(@"".matchString func (@"".pat string, @"".str string) (? bool, ? error), @"".benchmarks []@"".InternalBenchmark) ()
func @"".RunExamples(@"".matchString func (@"".pat string, @"".str string) (? bool, ? error), @"".examples []@"".InternalExample) (@"".ok bool)
func @"".RunTests(@"".matchString func (@"".pat string, @"".str string) (? bool, ? error), @"".tests []@"".InternalTest) (@"".ok bool)
func @"".Short() (? bool)
type @"".T struct { ? @"".common; @"".name string; @"".startParallel chan bool }
func (? *@"".T) @"".Parallel() ()
func (? *@"".T) @"".report() ()
type @"".TB interface { @"".Error(@"".args ...interface {  }) (); @"".Errorf(@"".format string, @"".args ...interface {  }) (); @"".Fail() (); @"".FailNow() (); @"".Failed() (? bool); @"".Fatal(@"".args ...interface {  }) (); @"".Fatalf(@"".format string, @"".args ...interface {  }) (); @"".Log(@"".args ...interface {  }) (); @"".Logf(@"".format string, @"".args ...interface {  }) (); @"".Skip(@"".args ...interface {  }) (); @"".SkipNow() (); @"".Skipf(@"".format string, @"".args ...interface {  }) (); @"".Skipped() (? bool); @"".private() () }
func @"".Verbose() (? bool)
type @"".common struct { @"".mu @"sync".RWMutex; @"".output []byte; @"".failed bool; @"".skipped bool; @"".finished bool; @"".start @"time".Time; @"".duration @"time".Duration; @"".self interface {  }; @"".signal chan interface {  } }
func (? *@"".common) @"".Error(@"".args ...interface {  }) ()
func (? *@"".common) @"".Errorf(@"".format string, @"".args ...interface {  }) ()
func (? *@"".common) @"".Fail() ()
func (? *@"".common) @"".FailNow() ()
func (? *@"".common) @"".Failed() (? bool)
func (? *@"".common) @"".Fatal(@"".args ...interface {  }) ()
func (? *@"".common) @"".Fatalf(@"".format string, @"".args ...interface {  }) ()
func (? *@"".common) @"".Log(@"".args ...interface {  }) ()
func (? *@"".common) @"".Logf(@"".format string, @"".args ...interface {  }) ()
func (? *@"".common) @"".Skip(@"".args ...interface {  }) ()
func (? *@"".common) @"".SkipNow() ()
func (? *@"".common) @"".Skipf(@"".format string, @"".args ...interface {  }) ()
func (? *@"".common) @"".Skipped() (? bool)
func (? *@"".common) @"".log(@"".s string) ()
func (? *@"".common) @"".private() ()
func (? *@"".common) @"".skip() ()
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
type @"sync".RWMutex struct { @"sync".w @"sync".Mutex; @"sync".writerSem uint32; @"sync".readerSem uint32; @"sync".readerCount int32; @"sync".readerWait int32 }
func (? *@"sync".RWMutex) @"sync".Lock() ()
func (? *@"sync".RWMutex) @"sync".RLock() ()
func (? *@"sync".RWMutex) @"sync".RLocker() (? @"sync".Locker)
func (? *@"sync".RWMutex) @"sync".RUnlock() ()
func (? *@"sync".RWMutex) @"sync".Unlock() ()
type @"time".Time struct { @"time".sec int64; @"time".nsec uintptr; @"time".loc *@"time".Location }
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
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
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
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesmathsyscallstringstimeosstrconvreflectfmtsortflagbufiotext/tabwriter
bytesH0ioI0stringsJ0
testing:PBtesting:common
CoverBlock0  0�k 0AG�VAG=$pkg.Cover=$newType(0,"Struct","testing.Cover","Cover","testing",function(Mode_,Counters_,Blocks_,CoveredPackages_){this.$val=this;this.Mode=Mode_!==undefined?Mode_:"";this.Counters=Counters_!==undefined?Counters_:false;this.Blocks=Blocks_!==undefined?Blocks_:false;this.CoveredPackages=CoveredPackages_!==undefined?CoveredPackages_:"";});��AG.init([["Mode","Mode","",$String,""],["Counters","Counters","",($mapType($String,($sliceType($Uint32)))),""],["Blocks","Blocks","",($mapType($String,($sliceType(AE)))),""],["CoveredPackages","CoveredPackages","",$String,""]]);0Cover0testing:CoverBlock 0�� 0AK�AK=$pkg.InternalExample=$newType(0,"Struct","testing.InternalExample","InternalExample","testing",function(Name_,F_,Output_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.F=F_!==undefined?F_:$throwNilPointerError;this.Output=Output_!==undefined?Output_:"";});tAK.init([["Name","Name","",$String,""],["F","F","",($funcType([],[],false)),""],["Output","Output","",$String,""]]);0InternalExample0  0�� 0BC��BC=$pkg.common=$newType(0,"Struct","testing.common","common","testing",function(mu_,output_,failed_,skipped_,finished_,start_,duration_,self_,signal_){this.$val=this;this.mu=mu_!==undefined?mu_:new F.RWMutex.Ptr();this.output=output_!==undefined?output_:($sliceType($Uint8)).nil;this.failed=failed_!==undefined?failed_:false;this.skipped=skipped_!==undefined?skipped_:false;this.finished=finished_!==undefined?finished_:false;this.start=start_!==undefined?start_:new E.Time.Ptr();this.duration=duration_!==undefined?duration_:new E.Duration(0,0);this.self=self_!==undefined?self_:$ifaceNil;this.signal=signal_!==undefined?signal_:($chanType($emptyInterface,false,false)).nil;});��($ptrType(BC)).methods=[["Error","Error","",$funcType([($sliceType($emptyInterface))],[],true),-1],["Errorf","Errorf","",$funcType([$String,($sliceType($emptyInterface))],[],true),-1],["Fail","Fail","",$funcType([],[],false),-1],["FailNow","FailNow","",$funcType([],[],false),-1],["Failed","Failed","",$funcType([],[$Bool],false),-1],["Fatal","Fatal","",$funcType([($sliceType($emptyInterface))],[],true),-1],["Fatalf","Fatalf","",$funcType([$String,($sliceType($emptyInterface))],[],true),-1],["Log","Log","",$funcType([($sliceType($emptyInterface))],[],true),-1],["Logf","Logf","",$funcType([$String,($sliceType($emptyInterface))],[],true),-1],["Skip","Skip","",$funcType([($sliceType($emptyInterface))],[],true),-1],["SkipNow","SkipNow","",$funcType([],[],false),-1],["Skipf","Skipf","",$funcType([$String,($sliceType($emptyInterface))],[],true),-1],["Skipped","Skipped","",$funcType([],[$Bool],false),-1],["log","log","testing",$funcType([$String],[],false),-1],["private$","private","testing",$funcType([],[],false),-1],["skip","skip","testing",$funcType([],[],false),-1]];BC.init([["mu","mu","testing",F.RWMutex,""],["output","output","testing",($sliceType($Uint8)),""],["failed","failed","testing",$Bool,""],["skipped","skipped","testing",$Bool,""],["finished","finished","testing",$Bool,""],["start","start","testing",E.Time,""],["duration","duration","testing",E.Duration,""],["self","self","testing",$emptyInterface,""],["signal","signal","testing",($chanType($emptyInterface,false,false)),""]]);0common0(sync:RWMutex
sync:Mutextesting:benchmarkLock 0W 0T T=new D.MemStats.Ptr();0
memStats0$runtime:MemStatstesting:memStats 0H 0AF AF=new AG.Ptr();0cover0
memProfile0  0# 0AT  0memProfileRate0  0 0AU  0
cpuProfile0  0! 0AV  0blockProfile0  0% 0AW  0blockProfileRate0  0 0AX  0	timeout0  0 0AY  0
cpuListStr0  0 0AZ  0
parallel0  0@ 0BA 	BA=false;0haveExamples0testing:haveExamples 0G 0BB BB=($sliceType($Int)).nil;0	cpuList0testing:cpuList 0P 0BO BO=($ptrType(E.Timer)).nil;0timer0
time:Timer 0�� 0  R    P=A.String("test.bench","","regular expression to select benchmarks to run");0 0&flag:Stringtesting:matchBenchmarks 0�� 0  k    Q=A.Duration("test.benchtime",new E.Duration(0,1000000000),"approximate run time for each benchmark");0 01
flag:Parse
fmt:Printffmt:Printlnos:Exitruntime:NotSupportedErrorsync:RWMutextesting:InternalTest	testing:Ttesting:chattytesting:commontesting:logtesting:reporttesting:skip
runtime:GC	testing:Btesting:benchmarkLock 0mtesting.min0WKW=function(b,c){  c    if(b>c){  preturn c;    }  }return b;    }; 0min0  0mtesting.max0XKX=function(b,c){  �    if(b<c){  �return c;    }  �return b;    }; 0max0  0�ptesting.roundDown100Y�<Y=function(b){var c,d,e,f,g;  (  ,c=0;  Rwhile(b>=10){  bb=(d=b/10,(d===d&&d!==1/0&&d!==-1/0)?d>>0:$throwRuntimeError("integer divide by zero"));  o  oc=c+(1)>>0;    }  �e=1;  �  �f=0;while(f<c){  �e=(g=10,(((e>>>16<<16)*g>>0)+(e<<16>>>16)*g)>>0);      �  �f=f+(1)>>0;}  �return e;    }; 0
<testing.RunBenchmarks0AB��AB=$pkg.RunBenchmarks=function(b,c,$b){var $this=this,$args=arguments,$r,$s=0,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  '�    if(P.$get().length===0){  '�return;    }  '�d=c;e=0;case 1:if(!(e<d.$length)){$s=2;continue;}f=new U.Ptr();$copy(f,((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]),U);  '�g=b(P.$get(),f.Name);h=g[0];i=g[1];  (-    if(!($interfaceIsEqual(i,$ifaceNil))){  (@B.Fprintf(C.Stderr,"testing: invalid regexp for -test.bench: %s\n",new($sliceType($emptyInterface))([i]));  (�C.Exit(1);    }  (�    if(!h){  (�e++;$s=1;continue;    }  (�j=BB;k=0;case 3:if(!(k<j.$length)){$s=4;continue;}l=((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]);  (�D.GOMAXPROCS(l);  )m=new V.Ptr(new BC.Ptr(new F.RWMutex.Ptr(),($sliceType($Uint8)).nil,false,false,false,new E.Time.Ptr(),new E.Duration(0,0),$ifaceNil,new($chanType($emptyInterface,false,false))(0)),0,0,new E.Duration(0,0),$clone(f,U),new $Int64(0,0),false,false,new AA.Ptr(),0,new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0));  )ln=f.Name;  )�    if(!((l===1))){  )�n=B.Sprintf("%s-%d",new($sliceType($emptyInterface))([new $String(f.Name),new $Int(l)]));    }  )�B.Printf("%s\t",new($sliceType($emptyInterface))([new $String(n)]));  * o=m.run(true);$s=5;case 5:if(o&&o.$blocking){o=o();}p=new AA.Ptr();$copy(p,o,AA);  *    if(m.common.failed){  *�B.Printf("--- FAIL: %s\n%s",new($sliceType($emptyInterface))([new $String(n),m.common.output]));  +k++;$s=3;continue;    }  +q=p.String();  +-    if(R.$get()||m.showAllocResult){  +\q=q+("\t"+p.MemString());    }  +�B.Println(new($sliceType($emptyInterface))([new $String(q)]));  ,5    if(m.common.output.$length>0){  ,Pm.trimOutput();  ,cB.Printf("--- BENCH: %s\n%s",new($sliceType($emptyInterface))([new $String(n),m.common.output]));    }  ,�  ,�r=D.GOMAXPROCS(-1);    if(!((r===l))){  ,�B.Fprintf(C.Stderr,"testing: %s left GOMAXPROCS set to %d\n",new($sliceType($emptyInterface))([new $String(n),new $Int(r)]));    }    k++;$s=3;continue;case 4:    e++;$s=1;continue;case 2:    case-1:}return;}};$f.$blocking=true;return $f;}; 0
fmt:Printffmt:Printlnfmt:Sprintfos:Exit	os:Stderrruntime:GOMAXPROCSsync:RWMutex	testing:Btesting:BenchmarkResulttesting:InternalBenchmarktesting:benchmarkMemorytesting:commontesting:cpuListtesting:matchBenchmarkstesting:runtesting:trimOutput
trimOutput0	testing:B 0�*(*testing.PB).Next0 ��AC.Ptr.prototype.Next=function(){var b,c,d,e,f,g,h,i,j,k,l,m;  1b=this;  1+    if((c=b.cache,(c.$high===0&&c.$low===0))){  1@d=G.AddUint64(b.globalN,b.grain);  1n    if((e=b.bN,(d.$high<e.$high||(d.$high===e.$high&&d.$low<=e.$low)))){  1�b.cache=b.grain;        }else if((f=(g=b.bN,h=b.grain,new $Uint64(g.$high+h.$high,g.$low+h.$low)),(d.$high<f.$high||(d.$high===f.$high&&d.$low<f.$low)))){  1�b.cache=(i=(j=b.bN,k=b.grain,new $Uint64(j.$high+k.$high,j.$low+k.$low)),new $Uint64(i.$high-d.$high,i.$low-d.$low));    }else{  1�return false;    }    }  1�  1�b.cache=(l=b.cache,m=new $Uint64(0,1),new $Uint64(l.$high-m.$high,l.$low-m.$low));  2return true;    };AC.prototype.Next=function(){return this.$val.Next();}; 0PB0#sync/atomic:AddUint64
testing:PB 0�(*testing.B).RunParallel0 ��V.Ptr.prototype.RunParallel=function(b){var c,d,e,f,g,h,i,j,k,l,m;  4gc=this;  51d=new $Uint64(0,0);  5E    if(c.previousN>0&&(e=c.previousDuration,(e.$high>0||(e.$high===0&&e.$low>0)))){  5vd=$div64($mul64(new $Uint64(0,100000),new $Uint64(0,c.previousN)),(f=c.previousDuration,new $Uint64(f.$high,f.$low)),false);    }  5�    if((d.$high<0||(d.$high===0&&d.$low<1))){  5�d=new $Uint64(0,1);    }  6U    if((d.$high>0||(d.$high===0&&d.$low>10000))){  6hd=new $Uint64(0,10000);    }  6yg=new $Uint64(0,0);  6�j=(h=c.parallelism,i=D.GOMAXPROCS(0),(((h>>>16<<16)*i>>0)+(h<<16>>>16)*i)>>0);  6�  6�k=new F.WaitGroup.Ptr();$copy(k,new F.WaitGroup.Ptr(),F.WaitGroup);  6�k.Add(j);  6�  6�l=0;while(l<j){  7$go((function(){var $deferred=[],$err=null,m;try{$deferFrames.push($deferred);  7$deferred.push([$methodVal(k,"Done"),[]]);  7)m=new AC.Ptr(new($ptrType($Uint64))(function(){return g;},function($v){g=$v;}),d,new $Uint64(0,0),new $Uint64(0,c.N));  7{b(m);    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}}),[]);      6�  6�l=l+(1)>>0;}  7�k.Wait();  7�    if((m=new $Uint64(0,c.N),(g.$high<m.$high||(g.$high===m.$high&&g.$low<=m.$low)))&&!c.common.Failed()){  7�c.common.Fatal(new($sliceType($emptyInterface))([new $String("RunParallel: body exited without pb.Next() == false")]));    }    };V.prototype.RunParallel=function(b){return this.$val.RunParallel(b);}; 0B0;runtime:GOMAXPROCSsync:WaitGroup	testing:B
testing:PB 0��(*testing.B).SetParallelism0 ��V.Ptr.prototype.SetParallelism=function(b){var c;  8�c=this;  9    if(b>=1){  9c.parallelism=b;    }    };V.prototype.SetParallelism=function(b){return this.$val.SetParallelism(b);}; 0B0	testing:B 0�testing.Benchmark0AD�bAD=$pkg.Benchmark=function(b,$b){var $this=this,$args=arguments,$r,$s=0,c,d;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  9�c=new V.Ptr(new BC.Ptr(new F.RWMutex.Ptr(),($sliceType($Uint8)).nil,false,false,false,new E.Time.Ptr(),new E.Duration(0,0),$ifaceNil,new($chanType($emptyInterface,false,false))(0)),0,0,new E.Duration(0,0),new U.Ptr("",b),new $Int64(0,0),false,false,new AA.Ptr(),0,new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0));  :Bd=c.run(true);$s=1;case 1:if(d&&d.$blocking){d=d();}return d;    case-1:}return;}};$f.$blocking=true;return $f;}; 0	Benchmark0��sync:RWMutex	testing:Btesting:BenchmarkResulttesting:InternalBenchmarktesting:commontesting:run
fmt:Printf	os:Createos:Filetesting:CoverBlock
+testing.runExample0AM�	LAM=function(b,$b){var $this=this,$args=arguments,c=false,$r,$deferred=[],$err=null,$s=0,d,e,f,g,h,i,j;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0:  F6    if(AP.$get()){  FEB.Printf("=== RUN: %s\n",new($sliceType($emptyInterface))([new $String(b.Name)]));    }  F�d=C.Stdout;  F�e=C.Pipe();f=e[0];g=e[1];h=e[2];  F�    if(!($interfaceIsEqual(h,$ifaceNil))){  F�B.Fprintln(C.Stderr,new($sliceType($emptyInterface))([h]));  F�C.Exit(1);    }  F�C.Stdout=g;  F�i=new($chanType($String,false,false))(0);  G$go((function($b){var $this=this,$args=arguments,$r,$s=0,j,k,l;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  G(j=new H.Buffer.Ptr();  GCk=I.Copy(j,f);l=k[1];  G_f.Close();  Gk    if(!($interfaceIsEqual(l,$ifaceNil))){  G~B.Fprintf(C.Stderr,"testing: copying pipe: %v\n",new($sliceType($emptyInterface))([l]));  G�C.Exit(1);    }  G�    $r=$send(i,j.String(),true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}};$f.$blocking=true;return $f;}),[]);  G�j=new E.Time.Ptr();$copy(j,E.Now(),E.Time);  G�c=true;  HS$deferred.push([(function($b){var $this=this,$args=arguments,$r,$s=0,k,l,m,n,o,p,q,r,s;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  Hdk=E.Now().Sub($clone(j,E.Time));  H�g.Close();  H�C.Stdout=d;  H�l=$recv(i,true);$s=1;case 1:if(l&&l.$blocking){l=l();}m=l[0];  H�  H�n="";  H�o=$recover();  I  I	p=J.TrimSpace(m);q=J.TrimSpace(b.Output);r=p;s=q;    if(!(r===s)&&$interfaceIsEqual(o,$ifaceNil)){  Ian=B.Sprintf("got:\n%s\nwant:\n%s\n",new($sliceType($emptyInterface))([new $String(r),new $String(s)]));    }  I�    if(!(n==="")||!($interfaceIsEqual(o,$ifaceNil))){  I�B.Printf("--- FAIL: %s (%v)\n%s",new($sliceType($emptyInterface))([new $String(b.Name),k,new $String(n)]));  I�c=false;        }else if(AP.$get()){  JB.Printf("--- PASS: %s (%v)\n",new($sliceType($emptyInterface))([new $String(b.Name),k]));    }  JK    if(!($interfaceIsEqual(o,$ifaceNil))){  J^$panic(o);    }    case-1:}return;}};$f.$blocking=true;return $f;}),[true]]);  J�b.F();  J�return c;    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return c;}};$f.$blocking=true;return $f;}; 0
runExample0��bytes:Bufferfmt:Fprintffmt:Fprintln
fmt:Printffmt:Sprintfio:Copyos:Exitos:Pipe	os:Stderr	os:Stdoutstrings:TrimSpacetesting:chattytime:Now	time:Time�0l
decorate0Mbytes:Bufferfmt:Fprintfruntime:Callerstrings:LastIndex
fmt:Errorftesting:reporttime:Now	time:Time�0�T(*testing.T).report0 ��BH.Ptr.prototype.report=function(){var b,c,d;  �|b=this;  ��c=B.Sprintf("(%.2f seconds)",new($sliceType($emptyInterface))([new $Float64(b.common.duration.Seconds())]));  ��d="--- %s: %s %s\n%s";  ��    if(b.common.Failed()){  ��B.Printf(d,new($sliceType($emptyInterface))([new $String("FAIL"),new $String(b.name),new $String(c),b.common.output]));        }else if(AP.$get()){  �F    if(b.common.Skipped()){  �ZB.Printf(d,new($sliceType($emptyInterface))([new $String("SKIP"),new $String(b.name),new $String(c),b.common.output]));    }else{  ��B.Printf(d,new($sliceType($emptyInterface))([new $String("PASS"),new $String(b.name),new $String(c),b.common.output]));    }    }    };BH.prototype.report=function(){return this.$val.report();}; 0Treport04
fmt:Printffmt:Sprintf	testing:Ttesting:chatty 0�
RunTests0�fmt:Fprintffmt:Fprintln
fmt:Printffmt:Sprintfos:Exit	os:Stderrruntime:GOMAXPROCSsync:RWMutex	testing:Ttesting:chattytesting:commontesting:cpuListtesting:haveExamples
startAlarm0=fmt:Sprintftesting:timeout
��