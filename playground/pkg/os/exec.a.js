0���os/exec�Cpackage exec
import bytes "bytes"
import errors "errors"
import io "io"
import os "os"
import filepath "path/filepath"
import runtime "runtime"
import strconv "strconv"
import strings "strings"
import sync "sync"
import syscall "syscall"
type @"".Cmd struct { @"".Path string; @"".Args []string; @"".Env []string; @"".Dir string; @"".Stdin @"io".Reader; @"".Stdout @"io".Writer; @"".Stderr @"io".Writer; @"".ExtraFiles []*@"os".File; @"".SysProcAttr *@"syscall".SysProcAttr; @"".Process *@"os".Process; @"".ProcessState *@"os".ProcessState; @"".lookPathErr error; @"".finished bool; @"".childFiles []*@"os".File; @"".closeAfterStart []@"io".Closer; @"".closeAfterWait []@"io".Closer; @"".goroutine []func () (? error); @"".errch chan error }
func (? *@"".Cmd) @"".CombinedOutput() (? []byte, ? error)
func (? *@"".Cmd) @"".Output() (? []byte, ? error)
func (? *@"".Cmd) @"".Run() (? error)
func (? *@"".Cmd) @"".Start() (? error)
func (? *@"".Cmd) @"".StderrPipe() (? @"io".ReadCloser, ? error)
func (? *@"".Cmd) @"".StdinPipe() (? @"io".WriteCloser, ? error)
func (? *@"".Cmd) @"".StdoutPipe() (? @"io".ReadCloser, ? error)
func (? *@"".Cmd) @"".Wait() (? error)
func (? *@"".Cmd) @"".argv() (? []string)
func (? *@"".Cmd) @"".closeDescriptors(@"".closers []@"io".Closer) ()
func (? *@"".Cmd) @"".envv() (? []string)
func (? *@"".Cmd) @"".stderr() (@"".f *@"os".File, @"".err error)
func (? *@"".Cmd) @"".stdin() (@"".f *@"os".File, @"".err error)
func (? *@"".Cmd) @"".stdout() (@"".f *@"os".File, @"".err error)
func (? *@"".Cmd) @"".writerDescriptor(@"".w @"io".Writer) (@"".f *@"os".File, @"".err error)
func @"".Command(@"".name string, @"".arg ...string) (? *@"".Cmd)
var @"".ErrNotFound error
type @"".Error struct { @"".Name string; @"".Err error }
func (? *@"".Error) @"".Error() (? string)
type @"".ExitError struct { ? *@"os".ProcessState }
func (? *@"".ExitError) @"".Error() (? string)
func @"".LookPath(@"".file string) (? string, ? error)
type @"".closeOnce struct { ? *@"os".File; @"".once @"sync".Once; @"".err error }
func (? *@"".closeOnce) @"".Close() (? error)
func (? *@"".closeOnce) @"".close() ()
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"os".File struct { ? *@"os".file }
func (? *@"os".File) @"os".Chdir() (? error)
func (? *@"os".File) @"os".Chmod(@"os".mode @"os".FileMode) (? error)
func (? *@"os".File) @"os".Chown(@"os".uid int, @"os".gid int) (? error)
func (? *@"os".File) @"os".Close() (? error)
func (? *@"os".File) @"os".Fd() (? uintptr)
func (? *@"os".File) @"os".Name() (? string)
func (? *@"os".File) @"os".Read(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".ReadAt(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".Readdir(@"os".n int) (@"os".fi []@"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".Readdirnames(@"os".n int) (@"os".names []string, @"os".err error)
func (? *@"os".File) @"os".Seek(@"os".offset int64, @"os".whence int) (@"os".ret int64, @"os".err error)
func (? *@"os".File) @"os".Stat() (@"os".fi @"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".Sync() (@"os".err error)
func (? *@"os".File) @"os".Truncate(@"os".size int64) (? error)
func (? *@"os".File) @"os".Write(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".WriteAt(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".WriteString(@"os".s string) (@"os".ret int, @"os".err error)
func (? *@"os".File) @"os".pread(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".pwrite(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".read(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".readdir(@"os".n int) (@"os".fi []@"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".readdirnames(@"os".n int) (@"os".names []string, @"os".err error)
func (? *@"os".File) @"os".seek(@"os".offset int64, @"os".whence int) (@"os".ret int64, @"os".err error)
func (? *@"os".File) @"os".write(@"os".b []byte) (@"os".n int, @"os".err error)
type @"syscall".SysProcAttr struct { @"syscall".Chroot string; @"syscall".Credential *@"syscall".Credential; @"syscall".Ptrace bool; @"syscall".Setsid bool; @"syscall".Setpgid bool; @"syscall".Setctty bool; @"syscall".Noctty bool }
type @"os".Process struct { @"os".Pid int; @"os".handle uintptr; @"os".isdone uint32 }
func (? *@"os".Process) @"os".Kill() (? error)
func (? *@"os".Process) @"os".Release() (? error)
func (? *@"os".Process) @"os".Signal(@"os".sig @"os".Signal) (? error)
func (? *@"os".Process) @"os".Wait() (? *@"os".ProcessState, ? error)
func (? *@"os".Process) @"os".done() (? bool)
func (? *@"os".Process) @"os".kill() (? error)
func (? *@"os".Process) @"os".release() (? error)
func (? *@"os".Process) @"os".setDone() ()
func (? *@"os".Process) @"os".signal(@"os".sig @"os".Signal) (? error)
func (? *@"os".Process) @"os".wait() (@"os".ps *@"os".ProcessState, @"os".err error)
type @"os".ProcessState struct { @"os".pid int; @"os".status @"syscall".WaitStatus; @"os".rusage *@"syscall".Rusage }
func (? *@"os".ProcessState) @"os".Exited() (? bool)
func (? *@"os".ProcessState) @"os".Pid() (? int)
func (? *@"os".ProcessState) @"os".String() (? string)
func (? *@"os".ProcessState) @"os".Success() (? bool)
func (? *@"os".ProcessState) @"os".Sys() (? interface {  })
func (? *@"os".ProcessState) @"os".SysUsage() (? interface {  })
import time "time"
func (? *@"os".ProcessState) @"os".SystemTime() (? @"time".Duration)
func (? *@"os".ProcessState) @"os".UserTime() (? @"time".Duration)
func (? *@"os".ProcessState) @"os".exited() (? bool)
func (? *@"os".ProcessState) @"os".success() (? bool)
func (? *@"os".ProcessState) @"os".sys() (? interface {  })
func (? *@"os".ProcessState) @"os".sysUsage() (? interface {  })
func (? *@"os".ProcessState) @"os".systemTime() (? @"time".Duration)
func (? *@"os".ProcessState) @"os".userTime() (? @"time".Duration)
type @"io".Closer interface { @"io".Close() (? error) }
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"sync".Once struct { @"sync".m @"sync".Mutex; @"sync".done uint32 }
func (? *@"sync".Once) @"sync".Do(@"sync".f func () ()) ()
type @"os".file struct { @"os".fd int; @"os".name string; @"os".dirinfo *@"os".dirInfo; @"os".nepipe int32 }
func (? *@"os".file) @"os".close() (? error)
type @"os".FileMode uint32
func (? @"os".FileMode) @"os".IsDir() (? bool)
func (? @"os".FileMode) @"os".IsRegular() (? bool)
func (? @"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? @"os".FileMode) @"os".String() (? string)
func (? *@"os".FileMode) @"os".IsDir() (? bool)
func (? *@"os".FileMode) @"os".IsRegular() (? bool)
func (? *@"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? *@"os".FileMode) @"os".String() (? string)
type @"os".FileInfo interface { @"os".IsDir() (? bool); @"os".ModTime() (? @"time".Time); @"os".Mode() (? @"os".FileMode); @"os".Name() (? string); @"os".Size() (? int64); @"os".Sys() (? interface {  }) }
type @"syscall".Credential struct { @"syscall".Uid uint32; @"syscall".Gid uint32; @"syscall".Groups []uint32 }
type @"os".Signal interface { @"os".Signal() (); @"os".String() (? string) }
type @"syscall".WaitStatus uint32
func (? @"syscall".WaitStatus) @"syscall".Continued() (? bool)
func (? @"syscall".WaitStatus) @"syscall".CoreDump() (? bool)
func (? @"syscall".WaitStatus) @"syscall".ExitStatus() (? int)
func (? @"syscall".WaitStatus) @"syscall".Exited() (? bool)
func (? @"syscall".WaitStatus) @"syscall".Signal() (? @"syscall".Signal)
func (? @"syscall".WaitStatus) @"syscall".Signaled() (? bool)
func (? @"syscall".WaitStatus) @"syscall".StopSignal() (? @"syscall".Signal)
func (? @"syscall".WaitStatus) @"syscall".Stopped() (? bool)
func (? @"syscall".WaitStatus) @"syscall".TrapCause() (? int)
func (? *@"syscall".WaitStatus) @"syscall".Continued() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".CoreDump() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".ExitStatus() (? int)
func (? *@"syscall".WaitStatus) @"syscall".Exited() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".Signal() (? @"syscall".Signal)
func (? *@"syscall".WaitStatus) @"syscall".Signaled() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".StopSignal() (? @"syscall".Signal)
func (? *@"syscall".WaitStatus) @"syscall".Stopped() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".TrapCause() (? int)
type @"syscall".Rusage struct { @"syscall".Utime @"syscall".Timeval; @"syscall".Stime @"syscall".Timeval; @"syscall".Maxrss int64; @"syscall".Ixrss int64; @"syscall".Idrss int64; @"syscall".Isrss int64; @"syscall".Minflt int64; @"syscall".Majflt int64; @"syscall".Nswap int64; @"syscall".Inblock int64; @"syscall".Oublock int64; @"syscall".Msgsnd int64; @"syscall".Msgrcv int64; @"syscall".Nsignals int64; @"syscall".Nvcsw int64; @"syscall".Nivcsw int64 }
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
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"os".dirInfo struct { @"os".buf []byte; @"os".nbuf int; @"os".bufp int }
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
type @"syscall".Signal int
func (? @"syscall".Signal) @"syscall".Signal() ()
func (? @"syscall".Signal) @"syscall".String() (? string)
func (? *@"syscall".Signal) @"syscall".Signal() ()
func (? *@"syscall".Signal) @"syscall".String() (? string)
type @"syscall".Timeval struct { @"syscall".Sec int64; @"syscall".Usec int32; @"syscall".Pad_cgo_0 [4]byte }
func (? *@"syscall".Timeval) @"syscall".Nano() (? int64)
func (? *@"syscall".Timeval) @"syscall".Unix() (@"syscall".sec int64, @"syscall".nsec int64)
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
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytessyscallstringstimeossort
bytesA0errorsB0ioC0osD0
os:Processos:ProcessStatesyscall:SysProcAttr 0�� 0P��P=$pkg.ExitError=$newType(0,"Struct","exec.ExitError","ExitError","os/exec",function(ProcessState_){this.$val=this;this.ProcessState=ProcessState_!==undefined?ProcessState_:($ptrType(D.ProcessState)).nil;});��P.methods=[["Exited","Exited","",$funcType([],[$Bool],false),0],["Pid","Pid","",$funcType([],[$Int],false),0],["String","String","",$funcType([],[$String],false),0],["Success","Success","",$funcType([],[$Bool],false),0],["Sys","Sys","",$funcType([],[$emptyInterface],false),0],["SysUsage","SysUsage","",$funcType([],[$emptyInterface],false),0],["SystemTime","SystemTime","",$funcType([],[$packages["time"].Duration],false),0],["UserTime","UserTime","",$funcType([],[$packages["time"].Duration],false),0],["exited","exited","os",$funcType([],[$Bool],false),0],["success","success","os",$funcType([],[$Bool],false),0],["sys","sys","os",$funcType([],[$emptyInterface],false),0],["sysUsage","sysUsage","os",$funcType([],[$emptyInterface],false),0],["systemTime","systemTime","os",$funcType([],[$packages["time"].Duration],false),0],["userTime","userTime","os",$funcType([],[$packages["time"].Duration],false),0]];($ptrType(P)).methods=[["Error","Error","",$funcType([],[$String],false),-1],["Exited","Exited","",$funcType([],[$Bool],false),0],["Pid","Pid","",$funcType([],[$Int],false),0],["String","String","",$funcType([],[$String],false),0],["Success","Success","",$funcType([],[$Bool],false),0],["Sys","Sys","",$funcType([],[$emptyInterface],false),0],["SysUsage","SysUsage","",$funcType([],[$emptyInterface],false),0],["SystemTime","SystemTime","",$funcType([],[$packages["time"].Duration],false),0],["UserTime","UserTime","",$funcType([],[$packages["time"].Duration],false),0],["exited","exited","os",$funcType([],[$Bool],false),0],["success","success","os",$funcType([],[$Bool],false),0],["sys","sys","os",$funcType([],[$emptyInterface],false),0],["sysUsage","sysUsage","os",$funcType([],[$emptyInterface],false),0],["systemTime","systemTime","os",$funcType([],[$packages["time"].Duration],false),0],["userTime","userTime","os",$funcType([],[$packages["time"].Duration],false),0]];P.init([["ProcessState","","",($ptrType(D.ProcessState)),""]]);0	ExitError0 os:ProcessState
errors:Newos/exec:ErrNotFound 0��(*os/exec.Error).Error0 ��K.Ptr.prototype.Error=function(){var a;  Ya=this;  ureturn"exec: "+G.Quote(a.Name)+": "+a.Err.Error();    };K.prototype.Error=function(){return this.$val.Error();}; 0Error0
os:Processos:ProcessStatepath/filepath:Basesyscall:SysProcAttr 0�Kos/exec.interfaceEqual0N�N=function(a,b){var $deferred=[],$err=null;try{$deferFrames.push($deferred);  B$deferred.push([(function(){  S$recover();    }),[]]);  creturn $interfaceIsEqual(a,b);    }catch(err){$err=err;return false;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}}; 0interfaceEqual0  0�(*os/exec.Cmd).envv0 ��L.Ptr.prototype.envv=function(){var a;  za=this;  �    if(!(a.Env===($sliceType($String)).nil)){  �return a.Env;    }  �return D.Environ();    };L.prototype.envv=function(){return this.$val.envv();}; 0Cmdenvv0os/exec:Cmd
os:Environ 0�(*os/exec.Cmd).argv0 ��L.Ptr.prototype.argv=function(){var a;  �a=this;  �    if(a.Args.$length>0){  	return a.Args;    }  return new($sliceType($String))([a.Path]);    };L.prototype.argv=function(){return this.$val.argv();}; 0Cmdargv0
    if(!($interfaceIsEqual(c.Stderr,$ifaceNil))&&N(c.Stderr,c.Stdout)){  G    d=(e=c.childFiles,((1<0||1>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+1]));f=$ifaceNil;a=d;b=f;return[a,b];    }  g    g=c.writerDescriptor(c.Stderr);a=g[0];b=g[1];return[a,b];    };L.prototype.stderr=function(){return this.$val.stderr();}; 0
errors:Newos/exec:Cmdos/exec:argvos/exec:closeDescriptorsos/exec:envvos/exec:stderr
os:Processos:StartProcesssyscall:SysProcAttr 0��(*os/exec.ExitError).Error0 ��P.Ptr.prototype.Error=function(){var a;   �a=this;  !return a.ProcessState.String();    };P.prototype.Error=function(){return this.$val.Error();}; 0	ExitError0os/exec:ExitError 0��(*os/exec.Cmd).Wait0 �L.Ptr.prototype.Wait=function($b){var $this=this,$args=arguments,$r,$s=0,a,b,c,d,e,f,g,h,i;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  "�a=$this;  #    if(a.Process===($ptrType(D.Process)).nil){  #-return B.New("exec: not started");    }  #X    if(a.finished){  #jreturn B.New("exec: Wait was already called");    }  #�a.finished=true;  #�b=a.Process.Wait();c=b[0];d=b[1];  #�a.ProcessState=c;  #�  #�e=$ifaceNil;  $f=a.goroutine;g=0;case 1:if(!(g<f.$length)){$s=2;continue;}  $   $#h=$recv(a.errch,true);$s=3;case 3:if(h&&h.$blocking){h=h();}i=h[0];    if(!($interfaceIsEqual(i,$ifaceNil))&&$interfaceIsEqual(e,$ifaceNil)){}else{$s=4;continue;}  $Ye=i;    case 4:    g++;$s=1;continue;case 2:  $ra.closeDescriptors(a.closeAfterWait);  $�    if(!($interfaceIsEqual(d,$ifaceNil))){  $�return d;        }else if(!c.Success()){  $�return new P.Ptr(c);    }  $�return e;    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.Wait=function($b){return this.$val.Wait($b);}; 0Cmd0R
errors:Newos/exec:Cmdos/exec:ExitErroros/exec:closeDescriptors
os:Process�0��(*os/exec.Cmd).Output0 �OL.Ptr.prototype.Output=function($b){var $this=this,$args=arguments,$r,$s=0,a,b,c,d;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  %Ja=$this;  %n    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  %�return[($sliceType($Uint8)).nil,B.New("exec: Stdout already set")];    }  %�  %�b=new A.Buffer.Ptr();$copy(b,new A.Buffer.Ptr(),A.Buffer);  %�a.Stdout=b;  %�c=a.Run(true);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;  %�return[b.Bytes(),d];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.Output=function($b){return this.$val.Output($b);}; 0Cmd0'bytes:Buffer
errors:Newos/exec:Cmd�0�V(*os/exec.Cmd).CombinedOutput0 ��L.Ptr.prototype.CombinedOutput=function($b){var $this=this,$args=arguments,$r,$s=0,a,b,c,d;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  &qa=$this;  &�    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  &�return[($sliceType($Uint8)).nil,B.New("exec: Stdout already set")];    }  &�    if(!($interfaceIsEqual(a.Stderr,$ifaceNil))){  'return[($sliceType($Uint8)).nil,B.New("exec: Stderr already set")];    }  '9  '=b=new A.Buffer.Ptr();$copy(b,new A.Buffer.Ptr(),A.Buffer);  'Ma.Stdout=b;  '\a.Stderr=b;  'kc=a.Run(true);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;  '{return[b.Bytes(),d];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.CombinedOutput=function($b){return this.$val.CombinedOutput($b);}; 0Cmd0'bytes:Buffer
errors:Newos/exec:Cmd�0�3(*os/exec.Cmd).StdinPipe0 ��L.Ptr.prototype.StdinPipe=function(){var a,b,c,d,e,f;  )a=this;  )A    if(!($interfaceIsEqual(a.Stdin,$ifaceNil))){  )Wreturn[$ifaceNil,B.New("exec: Stdin already set")];    }  )�    if(!(a.Process===($ptrType(D.Process)).nil)){  )�return[$ifaceNil,B.New("exec: StdinPipe after process started")];    }  )�b=D.Pipe();c=b[0];d=b[1];e=b[2];  *    if(!($interfaceIsEqual(e,$ifaceNil))){  *return[$ifaceNil,e];    }  *)a.Stdin=c;  *7a.closeAfterStart=$append(a.closeAfterStart,c);  *jf=new Q.Ptr(d,new I.Once.Ptr(),$ifaceNil);  *�a.closeAfterWait=$append(a.closeAfterWait,f);  *�return[f,$ifaceNil];    };L.prototype.StdinPipe=function(){return this.$val.StdinPipe();}; 0Cmd0U
errors:Newos/exec:Cmdos/exec:closeOnceos:Fileos:Pipe
os:Process	sync:Once 0�(*os/exec.closeOnce).Close0 ��Q.Ptr.prototype.Close=function(){var a;  +a=this;  +0a.once.Do($methodVal(a,"close"));  +Dreturn a.err;    };Q.prototype.Close=function(){return this.$val.Close();}; 0	closeOnce0"
errors:Newos/exec:Cmdos:Pipe
os:Process 0��(*os/exec.Cmd).StderrPipe0 ��L.Ptr.prototype.StderrPipe=function(){var a,b,c,d,e;  0�a=this;  1     if(!($interfaceIsEqual(a.Stderr,$ifaceNil))){  1return[$ifaceNil,B.New("exec: Stderr already set")];    }  1N    if(!(a.Process===($ptrType(D.Process)).nil)){  1freturn[$ifaceNil,B.New("exec: StderrPipe after process started")];    }  1�b=D.Pipe();c=b[0];d=b[1];e=b[2];  1�    if(!($interfaceIsEqual(e,$ifaceNil))){  1�return[$ifaceNil,e];    }  1�a.Stderr=d;  1�a.closeAfterStart=$append(a.closeAfterStart,d);  2-a.closeAfterWait=$append(a.closeAfterWait,c);  2^return[c,$ifaceNil];    };L.prototype.StderrPipe=function(){return this.$val.StderrPipe();}; 0Cmd0.
errors:Newos/exec:Cmdos:Pipe
os:Process 0�pos/exec.findExecutable0R�R=function(a){var b,c,d,e;  4Tb=D.Stat(a);c=b[0];d=b[1];  4m    if(!($interfaceIsEqual(d,$ifaceNil))){  4return d;    }  4�  4�e=c.Mode();    if(!(new D.FileMode(e)).IsDir()&&!((((e&73)>>>0)===0))){  4�return $ifaceNil;    }  4�return D.ErrPermission;    }; 0findExecutable0(os:ErrPermissionos:FileModeos:Stat 0�os/exec.LookPath0S�|S=$pkg.LookPath=function(a){var b,c,d,e,f,g,h;  6�    if(H.Contains(a,"/")){  7b=R(a);  7    if($interfaceIsEqual(b,$ifaceNil)){  72return[a,$ifaceNil];    }  7Ireturn["",new K.Ptr(a,b)];    }  7jc=D.Getenv("PATH");  7�    if(c===""){  7�return["",new K.Ptr(a,$pkg.ErrNotFound)];    }  7�d=H.Split(c,":");e=0;while(e<d.$length){f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  7�    if(f===""){  8Bf=".";    }  8Rg=f+"/"+a;  8m  8ph=R(g);    if($interfaceIsEqual(h,$ifaceNil)){  8�return[g,$ifaceNil];    }    e++;}  8�return["",new K.Ptr(a,$pkg.ErrNotFound)];    }; 0
LookPath0hos/exec:ErrNotFound
 �