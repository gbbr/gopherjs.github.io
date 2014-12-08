0��	net/http/httputil���package httputil
import bufio "bufio"
import bytes "bytes"
import errors "errors"
import fmt "fmt"
import io "io"
import ioutil "io/ioutil"
import net "net"
import http "net/http"
import url "net/url"
import strings "strings"
import time "time"
import textproto "net/textproto"
import sync "sync"
import log "log"
type @"".ClientConn struct { @"".lk @"sync".Mutex; @"".c @"net".Conn; @"".r *@"bufio".Reader; @"".re error; @"".we error; @"".lastbody @"io".ReadCloser; @"".nread int; @"".nwritten int; @"".pipereq map[*@"net/http".Request]uint; @"".pipe @"net/textproto".Pipeline; @"".writeReq func (? *@"net/http".Request, ? @"io".Writer) (? error) }
func (? *@"".ClientConn) @"".Close() (? error)
func (? *@"".ClientConn) @"".Do(@"".req *@"net/http".Request) (@"".resp *@"net/http".Response, @"".err error)
func (? *@"".ClientConn) @"".Hijack() (@"".c @"net".Conn, @"".r *@"bufio".Reader)
func (? *@"".ClientConn) @"".Pending() (? int)
func (? *@"".ClientConn) @"".Read(@"".req *@"net/http".Request) (@"".resp *@"net/http".Response, @"".err error)
func (? *@"".ClientConn) @"".Write(@"".req *@"net/http".Request) (@"".err error)
func @"".DumpRequest(@"".req *@"net/http".Request, @"".body bool) (@"".dump []byte, @"".err error)
func @"".DumpRequestOut(@"".req *@"net/http".Request, @"".body bool) (? []byte, ? error)
func @"".DumpResponse(@"".resp *@"net/http".Response, @"".body bool) (@"".dump []byte, @"".err error)
var @"".ErrClosed *@"net/http".ProtocolError
var @"".ErrLineTooLong error
var @"".ErrPersistEOF *@"net/http".ProtocolError
var @"".ErrPipeline *@"net/http".ProtocolError
func @"".NewChunkedReader(@"".r @"io".Reader) (? @"io".Reader)
func @"".NewChunkedWriter(@"".w @"io".Writer) (? @"io".WriteCloser)
func @"".NewClientConn(@"".c @"net".Conn, @"".r *@"bufio".Reader) (? *@"".ClientConn)
func @"".NewProxyClientConn(@"".c @"net".Conn, @"".r *@"bufio".Reader) (? *@"".ClientConn)
func @"".NewServerConn(@"".c @"net".Conn, @"".r *@"bufio".Reader) (? *@"".ServerConn)
func @"".NewSingleHostReverseProxy(@"".target *@"net/url".URL) (? *@"".ReverseProxy)
type @"".ReverseProxy struct { @"".Director func (? *@"net/http".Request) (); @"".Transport @"net/http".RoundTripper; @"".FlushInterval @"time".Duration }
func (? *@"".ReverseProxy) @"".ServeHTTP(@"".rw @"net/http".ResponseWriter, @"".req *@"net/http".Request) ()
func (? *@"".ReverseProxy) @"".copyResponse(@"".dst @"io".Writer, @"".src @"io".Reader) ()
type @"".ServerConn struct { @"".lk @"sync".Mutex; @"".c @"net".Conn; @"".r *@"bufio".Reader; @"".re error; @"".we error; @"".lastbody @"io".ReadCloser; @"".nread int; @"".nwritten int; @"".pipereq map[*@"net/http".Request]uint; @"".pipe @"net/textproto".Pipeline }
func (? *@"".ServerConn) @"".Close() (? error)
func (? *@"".ServerConn) @"".Hijack() (@"".c @"net".Conn, @"".r *@"bufio".Reader)
func (? *@"".ServerConn) @"".Pending() (? int)
func (? *@"".ServerConn) @"".Read() (@"".req *@"net/http".Request, @"".err error)
func (? *@"".ServerConn) @"".Write(@"".req *@"net/http".Request, @"".resp *@"net/http".Response) (? error)
type @"".chunkedReader struct { @"".r *@"bufio".Reader; @"".n uint64; @"".err error; @"".buf [2]byte }
func (? *@"".chunkedReader) @"".Read(@"".b []uint8) (@"".n int, @"".err error)
func (? *@"".chunkedReader) @"".beginChunk() ()
func (? *@"".chunkedReader) @"".chunkHeaderAvailable() (? bool)
type @"".chunkedWriter struct { @"".Wire @"io".Writer }
func (? *@"".chunkedWriter) @"".Close() (? error)
func (? *@"".chunkedWriter) @"".Write(@"".data []byte) (@"".n int, @"".err error)
type @"".delegateReader struct { @"".c chan @"io".Reader; @"".r @"io".Reader }
func (? *@"".delegateReader) @"".Read(@"".p []byte) (? int, ? error)
type @"".dumpConn struct { ? @"io".Writer; ? @"io".Reader }
func (? *@"".dumpConn) @"".Close() (? error)
func (? *@"".dumpConn) @"".LocalAddr() (? @"net".Addr)
func (? *@"".dumpConn) @"".RemoteAddr() (? @"net".Addr)
func (? *@"".dumpConn) @"".SetDeadline(@"".t @"time".Time) (? error)
func (? *@"".dumpConn) @"".SetReadDeadline(@"".t @"time".Time) (? error)
func (? *@"".dumpConn) @"".SetWriteDeadline(@"".t @"time".Time) (? error)
type @"".failureToReadBody struct {  }
func (? @"".failureToReadBody) @"".Close() (? error)
func (? @"".failureToReadBody) @"".Read(? []byte) (? int, ? error)
func (? *@"".failureToReadBody) @"".Close() (? error)
func (? *@"".failureToReadBody) @"".Read(? []byte) (? int, ? error)
type @"".maxLatencyWriter struct { @"".dst @"".writeFlusher; @"".latency @"time".Duration; @"".lk @"sync".Mutex; @"".done chan bool }
func (? *@"".maxLatencyWriter) @"".Write(@"".p []byte) (? int, ? error)
func (? *@"".maxLatencyWriter) @"".flushLoop() ()
func (? *@"".maxLatencyWriter) @"".stop() ()
type @"".neverEnding byte
func (? @"".neverEnding) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".neverEnding) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".writeFlusher interface { @"net/http".Flush() (); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
type @"bufio".Reader struct { @"bufio".buf []byte; @"bufio".rd @"io".Reader; @"bufio".r int; @"bufio".w int; @"bufio".err error; @"bufio".lastByte int; @"bufio".lastRuneSize int }
func (? *@"bufio".Reader) @"bufio".Buffered() (? int)
func (? *@"bufio".Reader) @"bufio".Peek(@"bufio".n int) (? []byte, ? error)
func (? *@"bufio".Reader) @"bufio".Read(@"bufio".p []byte) (@"bufio".n int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadByte() (@"bufio".c byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadBytes(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadLine() (@"bufio".line []byte, @"bufio".isPrefix bool, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadRune() (@"bufio".r rune, @"bufio".size int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadSlice(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadString(@"bufio".delim byte) (@"bufio".line string, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".Reset(@"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".UnreadByte() (? error)
func (? *@"bufio".Reader) @"bufio".UnreadRune() (? error)
func (? *@"bufio".Reader) @"bufio".WriteTo(@"bufio".w @"io".Writer) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".fill() ()
func (? *@"bufio".Reader) @"bufio".readErr() (? error)
func (? *@"bufio".Reader) @"bufio".reset(@"bufio".buf []byte, @"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".writeBuf(@"bufio".w @"io".Writer) (? int64, ? error)
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
import multipart "mime/multipart"
import tls "crypto/tls"
type @"net/http".Request struct { @"net/http".Method string; @"net/http".URL *@"net/url".URL; @"net/http".Proto string; @"net/http".ProtoMajor int; @"net/http".ProtoMinor int; @"net/http".Header @"net/http".Header; @"net/http".Body @"io".ReadCloser; @"net/http".ContentLength int64; @"net/http".TransferEncoding []string; @"net/http".Close bool; @"net/http".Host string; @"net/http".Form @"net/url".Values; @"net/http".PostForm @"net/url".Values; @"net/http".MultipartForm *@"mime/multipart".Form; @"net/http".Trailer @"net/http".Header; @"net/http".RemoteAddr string; @"net/http".RequestURI string; @"net/http".TLS *@"crypto/tls".ConnectionState }
func (? *@"net/http".Request) @"net/http".AddCookie(@"net/http".c *@"net/http".Cookie) ()
func (? *@"net/http".Request) @"net/http".Cookie(@"net/http".name string) (? *@"net/http".Cookie, ? error)
func (? *@"net/http".Request) @"net/http".Cookies() (? []*@"net/http".Cookie)
func (? *@"net/http".Request) @"net/http".FormFile(@"net/http".key string) (? @"mime/multipart".File, ? *@"mime/multipart".FileHeader, ? error)
func (? *@"net/http".Request) @"net/http".FormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".MultipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".ParseForm() (? error)
func (? *@"net/http".Request) @"net/http".ParseMultipartForm(@"net/http".maxMemory int64) (? error)
func (? *@"net/http".Request) @"net/http".PostFormValue(@"net/http".key string) (? string)
func (? *@"net/http".Request) @"net/http".ProtoAtLeast(@"net/http".major int, @"net/http".minor int) (? bool)
func (? *@"net/http".Request) @"net/http".Referer() (? string)
func (? *@"net/http".Request) @"net/http".SetBasicAuth(@"net/http".username string, @"net/http".password string) ()
func (? *@"net/http".Request) @"net/http".UserAgent() (? string)
func (? *@"net/http".Request) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".WriteProxy(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Request) @"net/http".closeBody() ()
func (? *@"net/http".Request) @"net/http".expectsContinue() (? bool)
func (? *@"net/http".Request) @"net/http".multipartReader() (? *@"mime/multipart".Reader, ? error)
func (? *@"net/http".Request) @"net/http".wantsClose() (? bool)
func (? *@"net/http".Request) @"net/http".wantsHttp10KeepAlive() (? bool)
func (? *@"net/http".Request) @"net/http".write(@"net/http".w @"io".Writer, @"net/http".usingProxy bool, @"net/http".extraHeaders @"net/http".Header) (? error)
type @"net/textproto".Pipeline struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".request @"net/textproto".sequencer; @"net/textproto".response @"net/textproto".sequencer }
func (? *@"net/textproto".Pipeline) @"net/textproto".EndRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".EndResponse(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".Next() (? uint)
func (? *@"net/textproto".Pipeline) @"net/textproto".StartRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".StartResponse(@"net/textproto".id uint) ()
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"net/http".Response struct { @"net/http".Status string; @"net/http".StatusCode int; @"net/http".Proto string; @"net/http".ProtoMajor int; @"net/http".ProtoMinor int; @"net/http".Header @"net/http".Header; @"net/http".Body @"io".ReadCloser; @"net/http".ContentLength int64; @"net/http".TransferEncoding []string; @"net/http".Close bool; @"net/http".Trailer @"net/http".Header; @"net/http".Request *@"net/http".Request; @"net/http".TLS *@"crypto/tls".ConnectionState }
func (? *@"net/http".Response) @"net/http".Cookies() (? []*@"net/http".Cookie)
func (? *@"net/http".Response) @"net/http".Location() (? *@"net/url".URL, ? error)
func (? *@"net/http".Response) @"net/http".ProtoAtLeast(@"net/http".major int, @"net/http".minor int) (? bool)
func (? *@"net/http".Response) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
type @"net/http".ProtocolError struct { @"net/http".ErrorString string }
func (? *@"net/http".ProtocolError) @"net/http".Error() (? string)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"net/url".URL struct { @"net/url".Scheme string; @"net/url".Opaque string; @"net/url".User *@"net/url".Userinfo; @"net/url".Host string; @"net/url".Path string; @"net/url".RawQuery string; @"net/url".Fragment string }
func (? *@"net/url".URL) @"net/url".IsAbs() (? bool)
func (? *@"net/url".URL) @"net/url".Parse(@"net/url".ref string) (? *@"net/url".URL, ? error)
func (? *@"net/url".URL) @"net/url".Query() (? @"net/url".Values)
func (? *@"net/url".URL) @"net/url".RequestURI() (? string)
func (? *@"net/url".URL) @"net/url".ResolveReference(@"net/url".ref *@"net/url".URL) (? *@"net/url".URL)
func (? *@"net/url".URL) @"net/url".String() (? string)
type @"net/http".RoundTripper interface { @"net/http".RoundTrip(? *@"net/http".Request) (? *@"net/http".Response, ? error) }
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
type @"net/http".ResponseWriter interface { @"net/http".Header() (? @"net/http".Header); @"net/http".Write(? []byte) (? int, ? error); @"net/http".WriteHeader(? int) () }
type @"net".Addr interface { @"net".Network() (? string); @"net".String() (? string) }
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
type @"net/http".Header map[string][]string
func (? @"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? @"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? @"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
func (? @"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? @"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? @"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? @"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? @"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
func (? *@"net/http".Header) @"net/http".Add(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Del(@"net/http".key string) ()
func (? *@"net/http".Header) @"net/http".Get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".Set(@"net/http".key string, @"net/http".value string) ()
func (? *@"net/http".Header) @"net/http".Write(@"net/http".w @"io".Writer) (? error)
func (? *@"net/http".Header) @"net/http".WriteSubset(@"net/http".w @"io".Writer, @"net/http".exclude map[string]bool) (? error)
func (? *@"net/http".Header) @"net/http".clone() (? @"net/http".Header)
func (? *@"net/http".Header) @"net/http".get(@"net/http".key string) (? string)
func (? *@"net/http".Header) @"net/http".sortedKeyValues(@"net/http".exclude map[string]bool) (@"net/http".kvs []@"net/http".keyValues, @"net/http".hs *@"net/http".headerSorter)
type @"net/url".Values map[string][]string
func (? @"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? @"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? @"net/url".Values) @"net/url".Encode() (? string)
func (? @"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? @"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? *@"net/url".Values) @"net/url".Encode() (? string)
func (? *@"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? *@"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
type @"mime/multipart".Form struct { @"mime/multipart".Value map[string][]string; @"mime/multipart".File map[string][]*@"mime/multipart".FileHeader }
func (? *@"mime/multipart".Form) @"mime/multipart".RemoveAll() (? error)
import x509 "crypto/x509"
type @"crypto/tls".ConnectionState struct { @"crypto/tls".Version uint16; @"crypto/tls".HandshakeComplete bool; @"crypto/tls".DidResume bool; @"crypto/tls".CipherSuite uint16; @"crypto/tls".NegotiatedProtocol string; @"crypto/tls".NegotiatedProtocolIsMutual bool; @"crypto/tls".ServerName string; @"crypto/tls".PeerCertificates []*@"crypto/x509".Certificate; @"crypto/tls".VerifiedChains [][]*@"crypto/x509".Certificate }
type @"net/http".Cookie struct { @"net/http".Name string; @"net/http".Value string; @"net/http".Path string; @"net/http".Domain string; @"net/http".Expires @"time".Time; @"net/http".RawExpires string; @"net/http".MaxAge int; @"net/http".Secure bool; @"net/http".HttpOnly bool; @"net/http".Raw string; @"net/http".Unparsed []string }
func (? *@"net/http".Cookie) @"net/http".String() (? string)
type @"mime/multipart".File interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".ReadAt(@"io".p []byte, @"io".off int64) (@"io".n int, @"io".err error); @"io".Seek(@"io".offset int64, @"io".whence int) (? int64, ? error) }
type @"mime/multipart".FileHeader struct { @"mime/multipart".Filename string; @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".content []byte; @"mime/multipart".tmpfile string }
func (? *@"mime/multipart".FileHeader) @"mime/multipart".Open() (? @"mime/multipart".File, ? error)
type @"mime/multipart".Reader struct { @"mime/multipart".bufReader *@"bufio".Reader; @"mime/multipart".currentPart *@"mime/multipart".Part; @"mime/multipart".partsRead int; @"mime/multipart".nl []byte; @"mime/multipart".nlDashBoundary []byte; @"mime/multipart".dashBoundaryDash []byte; @"mime/multipart".dashBoundary []byte }
func (? *@"mime/multipart".Reader) @"mime/multipart".NextPart() (? *@"mime/multipart".Part, ? error)
func (? *@"mime/multipart".Reader) @"mime/multipart".ReadForm(@"mime/multipart".maxMemory int64) (@"mime/multipart".f *@"mime/multipart".Form, @"mime/multipart".err error)
func (? *@"mime/multipart".Reader) @"mime/multipart".isBoundaryDelimiterLine(@"mime/multipart".line []byte) (@"mime/multipart".ret bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".isFinalBoundary(@"mime/multipart".line []byte) (? bool)
func (? *@"mime/multipart".Reader) @"mime/multipart".peekBufferIsEmptyPart(@"mime/multipart".peek []byte) (? bool)
type @"net/textproto".sequencer struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".wait map[uint]chan uint }
func (? *@"net/textproto".sequencer) @"net/textproto".End(@"net/textproto".id uint) ()
func (? *@"net/textproto".sequencer) @"net/textproto".Start(@"net/textproto".id uint) ()
type @"net/url".Userinfo struct { @"net/url".username string; @"net/url".password string; @"net/url".passwordSet bool }
func (? *@"net/url".Userinfo) @"net/url".Password() (? string, ? bool)
func (? *@"net/url".Userinfo) @"net/url".String() (? string)
func (? *@"net/url".Userinfo) @"net/url".Username() (? string)
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
type @"net/http".keyValues struct { @"net/http".key string; @"net/http".values []string }
type @"net/http".headerSorter struct { @"net/http".kvs []@"net/http".keyValues }
func (? *@"net/http".headerSorter) @"net/http".Len() (? int)
func (? *@"net/http".headerSorter) @"net/http".Less(@"net/http".i int, @"net/http".j int) (? bool)
func (? *@"net/http".headerSorter) @"net/http".Swap(@"net/http".i int, @"net/http".j int) ()
import big "math/big"
import pkix "crypto/x509/pkix"
import asn1 "encoding/asn1"
type @"crypto/x509".Certificate struct { @"crypto/x509".Raw []byte; @"crypto/x509".RawTBSCertificate []byte; @"crypto/x509".RawSubjectPublicKeyInfo []byte; @"crypto/x509".RawSubject []byte; @"crypto/x509".RawIssuer []byte; @"crypto/x509".Signature []byte; @"crypto/x509".SignatureAlgorithm @"crypto/x509".SignatureAlgorithm; @"crypto/x509".PublicKeyAlgorithm @"crypto/x509".PublicKeyAlgorithm; @"crypto/x509".PublicKey interface {  }; @"crypto/x509".Version int; @"crypto/x509".SerialNumber *@"math/big".Int; @"crypto/x509".Issuer @"crypto/x509/pkix".Name; @"crypto/x509".Subject @"crypto/x509/pkix".Name; @"crypto/x509".NotBefore @"time".Time; @"crypto/x509".NotAfter @"time".Time; @"crypto/x509".KeyUsage @"crypto/x509".KeyUsage; @"crypto/x509".Extensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtraExtensions []@"crypto/x509/pkix".Extension; @"crypto/x509".ExtKeyUsage []@"crypto/x509".ExtKeyUsage; @"crypto/x509".UnknownExtKeyUsage []@"encoding/asn1".ObjectIdentifier; @"crypto/x509".BasicConstraintsValid bool; @"crypto/x509".IsCA bool; @"crypto/x509".MaxPathLen int; @"crypto/x509".SubjectKeyId []byte; @"crypto/x509".AuthorityKeyId []byte; @"crypto/x509".OCSPServer []string; @"crypto/x509".IssuingCertificateURL []string; @"crypto/x509".DNSNames []string; @"crypto/x509".EmailAddresses []string; @"crypto/x509".IPAddresses []@"net".IP; @"crypto/x509".PermittedDNSDomainsCritical bool; @"crypto/x509".PermittedDNSDomains []string; @"crypto/x509".CRLDistributionPoints []string; @"crypto/x509".PolicyIdentifiers []@"encoding/asn1".ObjectIdentifier }
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckCRLSignature(@"crypto/x509".crl *@"crypto/x509/pkix".CertificateList) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignature(@"crypto/x509".algo @"crypto/x509".SignatureAlgorithm, @"crypto/x509".signed []byte, @"crypto/x509".signature []byte) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CheckSignatureFrom(@"crypto/x509".parent *@"crypto/x509".Certificate) (@"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".CreateCRL(@"crypto/x509".rand @"io".Reader, @"crypto/x509".priv interface {  }, @"crypto/x509".revokedCerts []@"crypto/x509/pkix".RevokedCertificate, @"crypto/x509".now @"time".Time, @"crypto/x509".expiry @"time".Time) (@"crypto/x509".crlBytes []byte, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Equal(@"crypto/x509".other *@"crypto/x509".Certificate) (? bool)
func (? *@"crypto/x509".Certificate) @"crypto/x509".Verify(@"crypto/x509".opts @"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".VerifyHostname(@"crypto/x509".h string) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".buildChains(@"crypto/x509".cache map[int][][]*@"crypto/x509".Certificate, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".isValid(@"crypto/x509".certType int, @"crypto/x509".currentChain []*@"crypto/x509".Certificate, @"crypto/x509".opts *@"crypto/x509".VerifyOptions) (? error)
func (? *@"crypto/x509".Certificate) @"crypto/x509".systemVerify(@"crypto/x509".opts *@"crypto/x509".VerifyOptions) (@"crypto/x509".chains [][]*@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"net/textproto".MIMEHeader map[string][]string
func (? @"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? @"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
type @"mime/multipart".Part struct { @"mime/multipart".Header @"net/textproto".MIMEHeader; @"mime/multipart".buffer *@"bytes".Buffer; @"mime/multipart".mr *@"mime/multipart".Reader; @"mime/multipart".bytesRead int; @"mime/multipart".disposition string; @"mime/multipart".dispositionParams map[string]string; @"mime/multipart".r @"io".Reader }
func (? *@"mime/multipart".Part) @"mime/multipart".Close() (? error)
func (? *@"mime/multipart".Part) @"mime/multipart".FileName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".FormName() (? string)
func (? *@"mime/multipart".Part) @"mime/multipart".Read(@"mime/multipart".d []byte) (@"mime/multipart".n int, @"mime/multipart".err error)
func (? *@"mime/multipart".Part) @"mime/multipart".parseContentDisposition() ()
func (? *@"mime/multipart".Part) @"mime/multipart".populateHeaders() (? error)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
type @"crypto/x509".SignatureAlgorithm int
type @"crypto/x509".PublicKeyAlgorithm int
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"math/big".n int64, @"math/big".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"math/big".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"math/big".y *@"math/big".Int) (@"math/big".r int)
func (? *@"math/big".Int) @"math/big".Div(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Format(@"math/big".s @"fmt".State, @"math/big".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"math/big".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"math/big".text []byte, @"math/big".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"math/big".g *@"math/big".Int, @"math/big".p *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"math/big".a int64, @"math/big".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"math/big".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"math/big".rnd *@"math/rand".Rand, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"math/big".s @"fmt".ScanState, @"math/big".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"math/big".x *@"math/big".Int, @"math/big".i int, @"math/big".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"math/big".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"math/big".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"math/big".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"math/big".s string, @"math/big".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"math/big".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? *@"math/big".Int, ? int, ? error)
type @"crypto/x509/pkix".Name struct { @"crypto/x509/pkix".Country []string; @"crypto/x509/pkix".Organization []string; @"crypto/x509/pkix".OrganizationalUnit []string; @"crypto/x509/pkix".Locality []string; @"crypto/x509/pkix".Province []string; @"crypto/x509/pkix".StreetAddress []string; @"crypto/x509/pkix".PostalCode []string; @"crypto/x509/pkix".SerialNumber string; @"crypto/x509/pkix".CommonName string; @"crypto/x509/pkix".Names []@"crypto/x509/pkix".AttributeTypeAndValue }
func (? @"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".FillFromRDNSequence(@"crypto/x509/pkix".rdns *@"crypto/x509/pkix".RDNSequence) ()
func (? *@"crypto/x509/pkix".Name) @"crypto/x509/pkix".ToRDNSequence() (@"crypto/x509/pkix".ret @"crypto/x509/pkix".RDNSequence)
type @"crypto/x509".KeyUsage int
type @"crypto/x509/pkix".Extension struct { @"crypto/x509/pkix".Id @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Critical bool "asn1:\"optional\""; @"crypto/x509/pkix".Value []byte }
type @"crypto/x509".ExtKeyUsage int
type @"encoding/asn1".ObjectIdentifier []int
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? @"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".Equal(@"encoding/asn1".other @"encoding/asn1".ObjectIdentifier) (? bool)
func (? *@"encoding/asn1".ObjectIdentifier) @"encoding/asn1".String() (? string)
type @"net".IP []byte
func (? @"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? @"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? @"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? @"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? @"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? @"net".IP) @"net".IsLoopback() (? bool)
func (? @"net".IP) @"net".IsMulticast() (? bool)
func (? @"net".IP) @"net".IsUnspecified() (? bool)
func (? @"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? @"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? @"net".IP) @"net".String() (? string)
func (? @"net".IP) @"net".To16() (? @"net".IP)
func (? @"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".DefaultMask() (? @"net".IPMask)
func (? *@"net".IP) @"net".Equal(@"net".x @"net".IP) (? bool)
func (? *@"net".IP) @"net".IsGlobalUnicast() (? bool)
func (? *@"net".IP) @"net".IsInterfaceLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalMulticast() (? bool)
func (? *@"net".IP) @"net".IsLinkLocalUnicast() (? bool)
func (? *@"net".IP) @"net".IsLoopback() (? bool)
func (? *@"net".IP) @"net".IsMulticast() (? bool)
func (? *@"net".IP) @"net".IsUnspecified() (? bool)
func (? *@"net".IP) @"net".MarshalText() (? []byte, ? error)
func (? *@"net".IP) @"net".Mask(@"net".mask @"net".IPMask) (? @"net".IP)
func (? *@"net".IP) @"net".String() (? string)
func (? *@"net".IP) @"net".To16() (? @"net".IP)
func (? *@"net".IP) @"net".To4() (? @"net".IP)
func (? *@"net".IP) @"net".UnmarshalText(@"net".text []byte) (? error)
type @"crypto/x509/pkix".CertificateList struct { @"crypto/x509/pkix".TBSCertList @"crypto/x509/pkix".TBSCertificateList; @"crypto/x509/pkix".SignatureAlgorithm @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".SignatureValue @"encoding/asn1".BitString }
func (? *@"crypto/x509/pkix".CertificateList) @"crypto/x509/pkix".HasExpired(@"crypto/x509/pkix".now @"time".Time) (? bool)
type @"crypto/x509/pkix".RevokedCertificate struct { @"crypto/x509/pkix".SerialNumber *@"math/big".Int; @"crypto/x509/pkix".RevocationTime @"time".Time; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"optional\"" }
type @"crypto/x509".VerifyOptions struct { @"crypto/x509".DNSName string; @"crypto/x509".Intermediates *@"crypto/x509".CertPool; @"crypto/x509".Roots *@"crypto/x509".CertPool; @"crypto/x509".CurrentTime @"time".Time; @"crypto/x509".KeyUsages []@"crypto/x509".ExtKeyUsage }
type @"bytes".Buffer struct { @"bytes".buf []byte; @"bytes".off int; @"bytes".runeBytes [4]byte; @"bytes".bootstrap [64]byte; @"bytes".lastRead @"bytes".readOp }
func (? *@"bytes".Buffer) @"bytes".Bytes() (? []byte)
func (? *@"bytes".Buffer) @"bytes".Grow(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".Len() (? int)
func (? *@"bytes".Buffer) @"bytes".Next(@"bytes".n int) (? []byte)
func (? *@"bytes".Buffer) @"bytes".Read(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadByte() (@"bytes".c byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadBytes(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadFrom(@"bytes".r @"io".Reader) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadRune() (@"bytes".r rune, @"bytes".size int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadString(@"bytes".delim byte) (@"bytes".line string, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".Reset() ()
func (? *@"bytes".Buffer) @"bytes".String() (? string)
func (? *@"bytes".Buffer) @"bytes".Truncate(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".UnreadByte() (? error)
func (? *@"bytes".Buffer) @"bytes".UnreadRune() (? error)
func (? *@"bytes".Buffer) @"bytes".Write(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteByte(@"bytes".c byte) (? error)
func (? *@"bytes".Buffer) @"bytes".WriteRune(@"bytes".r rune) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteString(@"bytes".s string) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteTo(@"bytes".w @"io".Writer) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".grow(@"bytes".n int) (? int)
func (? *@"bytes".Buffer) @"bytes".readSlice(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"fmt".c int) (? bool); @"fmt".Precision() (@"fmt".prec int, @"fmt".ok bool); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool); @"fmt".Write(@"fmt".b []byte) (@"fmt".ret int, @"fmt".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"math/rand".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"math/rand".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"math/rand".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"math/rand".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"math/rand".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"fmt".buf []byte) (@"fmt".n int, @"fmt".err error); @"fmt".ReadRune() (@"fmt".r rune, @"fmt".size int, @"fmt".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"fmt".skipSpace bool, @"fmt".f func (? rune) (? bool)) (@"fmt".token []byte, @"fmt".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error); @"io".UnreadRune() (? error) }
type @"crypto/x509/pkix".AttributeTypeAndValue struct { @"crypto/x509/pkix".Type @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Value interface {  } }
type @"crypto/x509/pkix".RDNSequence []@"crypto/x509/pkix".RelativeDistinguishedNameSET
type @"net".IPMask []byte
func (? @"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? @"net".IPMask) @"net".String() (? string)
func (? *@"net".IPMask) @"net".Size() (@"net".ones int, @"net".bits int)
func (? *@"net".IPMask) @"net".String() (? string)
type @"crypto/x509/pkix".TBSCertificateList struct { @"crypto/x509/pkix".Raw @"encoding/asn1".RawContent; @"crypto/x509/pkix".Version int "asn1:\"optional,default:2\""; @"crypto/x509/pkix".Signature @"crypto/x509/pkix".AlgorithmIdentifier; @"crypto/x509/pkix".Issuer @"crypto/x509/pkix".RDNSequence; @"crypto/x509/pkix".ThisUpdate @"time".Time; @"crypto/x509/pkix".NextUpdate @"time".Time; @"crypto/x509/pkix".RevokedCertificates []@"crypto/x509/pkix".RevokedCertificate "asn1:\"optional\""; @"crypto/x509/pkix".Extensions []@"crypto/x509/pkix".Extension "asn1:\"tag:0,optional,explicit\"" }
type @"crypto/x509/pkix".AlgorithmIdentifier struct { @"crypto/x509/pkix".Algorithm @"encoding/asn1".ObjectIdentifier; @"crypto/x509/pkix".Parameters @"encoding/asn1".RawValue "asn1:\"optional\"" }
type @"encoding/asn1".BitString struct { @"encoding/asn1".Bytes []byte; @"encoding/asn1".BitLength int }
func (? @"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? @"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".At(@"encoding/asn1".i int) (? int)
func (? *@"encoding/asn1".BitString) @"encoding/asn1".RightAlign() (? []byte)
type @"crypto/x509".CertPool struct { @"crypto/x509".bySubjectKeyId map[string][]int; @"crypto/x509".byName map[string][]int; @"crypto/x509".certs []*@"crypto/x509".Certificate }
func (? *@"crypto/x509".CertPool) @"crypto/x509".AddCert(@"crypto/x509".cert *@"crypto/x509".Certificate) ()
func (? *@"crypto/x509".CertPool) @"crypto/x509".AppendCertsFromPEM(@"crypto/x509".pemCerts []byte) (@"crypto/x509".ok bool)
func (? *@"crypto/x509".CertPool) @"crypto/x509".Subjects() (@"crypto/x509".res [][]byte)
func (? *@"crypto/x509".CertPool) @"crypto/x509".findVerifiedParents(@"crypto/x509".cert *@"crypto/x509".Certificate) (@"crypto/x509".parents []int, @"crypto/x509".errCert *@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"bytes".readOp int
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
$$
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesbufiomathsyscallstringstimeosstrconvreflectfmtsort
hash/crc32
crypto/aesencoding/binary
crypto/desmath/bigcrypto/ellipticcrypto/ecdsacrypto/hmac
crypto/md5crypto/rand
crypto/rc4
crypto/rsacrypto/sha1
crypto/dsa
crypto/tlsmime
bufioA0
bytesB0errorsC0fmtD0ioE0	io/ioutilF0netG0
dumpConn0+	io:Reader	io:Writernet:Addr	time:Time 0�A 0YeY=$pkg.neverEnding=$newType(1,"Uint8","httputil.neverEnding","neverEnding","net/http/httputil",null);��Y.methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];($ptrType(Y)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];0
ServerConn0pbufio:Reader
sync:Mutex 0�� 0AO��AO=$pkg.ClientConn=$newType(0,"Struct","httputil.ClientConn","ClientConn","net/http/httputil",function(lk_,c_,r_,re_,we_,lastbody_,nread_,nwritten_,pipereq_,pipe_,writeReq_){this.$val=this;this.lk=lk_!==undefined?lk_:new M.Mutex.Ptr();this.c=c_!==undefined?c_:$ifaceNil;this.r=r_!==undefined?r_:($ptrType(A.Reader)).nil;this.re=re_!==undefined?re_:$ifaceNil;this.we=we_!==undefined?we_:$ifaceNil;this.lastbody=lastbody_!==undefined?lastbody_:$ifaceNil;this.nread=nread_!==undefined?nread_:0;this.nwritten=nwritten_!==undefined?nwritten_:0;this.pipereq=pipereq_!==undefined?pipereq_:false;this.pipe=pipe_!==undefined?pipe_:new L.Pipeline.Ptr();this.writeReq=writeReq_!==undefined?writeReq_:$throwNilPointerError;});�N($ptrType(AO)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Do","Do","",$funcType([($ptrType(H.Request))],[($ptrType(H.Response)),$error],false),-1],["Hijack","Hijack","",$funcType([],[G.Conn,($ptrType(A.Reader))],false),-1],["Pending","Pending","",$funcType([],[$Int],false),-1],["Read","Read","",$funcType([($ptrType(H.Request))],[($ptrType(H.Response)),$error],false),-1],["Write","Write","",$funcType([($ptrType(H.Request))],[$error],false),-1]];AO.init([["lk","lk","net/http/httputil",M.Mutex,""],["c","c","net/http/httputil",G.Conn,""],["r","r","net/http/httputil",($ptrType(A.Reader)),""],["re","re","net/http/httputil",$error,""],["we","we","net/http/httputil",$error,""],["lastbody","lastbody","net/http/httputil",E.ReadCloser,""],["nread","nread","net/http/httputil",$Int,""],["nwritten","nwritten","net/http/httputil",$Int,""],["pipereq","pipereq","net/http/httputil",($mapType(($ptrType(H.Request)),$Uint)),""],["pipe","pipe","net/http/httputil",L.Pipeline,""],["writeReq","writeReq","net/http/httputil",($funcType([($ptrType(H.Request)),E.Writer],[$error],false)),""]]);0
ClientConn0{bufio:Reader
sync:Mutex 0�� 0AS�tAS=$pkg.ReverseProxy=$newType(0,"Struct","httputil.ReverseProxy","ReverseProxy","net/http/httputil",function(Director_,Transport_,FlushInterval_){this.$val=this;this.Director=Director_!==undefined?Director_:$throwNilPointerError;this.Transport=Transport_!==undefined?Transport_:$ifaceNil;this.FlushInterval=FlushInterval_!==undefined?FlushInterval_:new K.Duration(0,0);});��($ptrType(AS)).methods=[["ServeHTTP","ServeHTTP","",$funcType([H.ResponseWriter,($ptrType(H.Request))],[],false),-1],["copyResponse","copyResponse","net/http/httputil",$funcType([E.Writer,E.Reader],[],false),-1]];AS.init([["Director","Director","",($funcType([($ptrType(H.Request))],[],false)),""],["Transport","Transport","",H.RoundTripper,""],["FlushInterval","FlushInterval","",K.Duration,""]]);0ReverseProxy0g	io:Reader	io:Writernet/http:Requestnet/http:ResponseWriternet/http:RoundTripper
sync:Mutex
hopHeaders0  0t 0  7    $pkg.ErrLineTooLong=C.New("header line too long");0 0.
errors:New net/http/httputil:ErrLineTooLong 0�� 0ab ��    AC=(a=new $Map(),b="Host",a[b]={k:b,v:true},b="Content-Length",a[b]={k:b,v:true},b="Transfer-Encoding",a[b]={k:b,v:true},b="Trailer",a[b]={k:b,v:true},a);0reqWriteExcludeHeaderDump0-+net/http/httputil:reqWriteExcludeHeaderDump 0^ 0  &    AF=C.New("sentinel error value");0 0)
errors:Newnet/http/httputil:errNoBody 0y 0  %    AH=F.NopCloser(J.NewReader(""));0 0Eio/ioutil:NopClosernet/http/httputil:emptyBodystrings:NewReader 0�� 0  P    $pkg.ErrPersistEOF=new H.ProtocolError.Ptr("persistent connection closed");0
errors:Newnet/http/httputil:errClosed 0�� 0  ��    AW=new($sliceType($String))(["Connection","Keep-Alive","Proxy-Authenticate","Proxy-Authorization","Te","Trailers","Transfer-Encoding","Upgrade"]);0
hopHeaders0net/http/httputil:hopHeaders 0�c"net/http/httputil.newChunkedReader0O��O=function(c){var d,e,f;  �d=$assertType(c,($ptrType(A.Reader)),true);e=d[0];f=d[1];  �    if(!f){  �e=A.NewReader(c);    }  �return new P.Ptr(e,new $Uint64(0,0),$ifaceNil,($arrayType($Uint8,2)).zero());    }; 0newChunkedReader0@bufio:NewReaderbufio:Readernet/http/httputil:chunkedReader 0�-(*net/http/httputil.chunkedReader).beginChunk0 ��P.Ptr.prototype.beginChunk=function(){var c,d,e,f,g;  sc=this;  �  �d=($sliceType($Uint8)).nil;  �e=Q(c.r);d=e[0];c.err=e[1];  �    if(!($interfaceIsEqual(c.err,$ifaceNil))){  �return;    }  �f=V(d);c.n=f[0];c.err=f[1];      if(!($interfaceIsEqual(c.err,$ifaceNil))){  2return;    }  =    if((g=c.n,(g.$high===0&&g.$low===0))){  Nc.err=E.EOF;    }    };P.prototype.beginChunk=function(){return this.$val.beginChunk();}; 0
beginChunk0eio:EOFnet/http/httputil:chunkedReadernet/http/httputil:parseHexUintnet/http/httputil:readLine 0��7(*net/http/httputil.chunkedReader).chunkHeaderAvailable0 � P.Ptr.prototype.chunkHeaderAvailable=function(){var c,d,e,f;  jc=this;  �d=c.r.Buffered();  �    if(d>0){  �e=c.r.Peek(d);f=e[0];  �return B.IndexByte(f,10)>=0;    }  return false;    };P.prototype.chunkHeaderAvailable=function(){return this.$val.chunkHeaderAvailable();}; 0%
errors:Newio:ReadFullnet/http/httputil:beginChunk&net/http/httputil:chunkHeaderAvailablenet/http/httputil:chunkedReader 0��net/http/httputil.readLine0Q�'Q=function(c){var d=($sliceType($Uint8)).nil,e=$ifaceNil,f,g,h,i,j,k,l;  
=  
@f=c.ReadSlice(10);d=f[0];e=f[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  
�    if($interfaceIsEqual(e,E.EOF)){  
�e=E.ErrUnexpectedEOF;        }else if($interfaceIsEqual(e,A.ErrBufferFull)){  ,e=$pkg.ErrLineTooLong;    }  G    g=($sliceType($Uint8)).nil;h=e;d=g;e=h;return[d,e];    }  [    if(d.$length>=4096){  z    i=($sliceType($Uint8)).nil;j=$pkg.ErrLineTooLong;d=i;e=j;return[d,e];    }  �    k=R(d);l=$ifaceNil;d=k;e=l;return[d,e];    }; 0
readLine0~bufio:ErrBufferFullio:EOFio:ErrUnexpectedEOF net/http/httputil:ErrLineTooLong(net/http/httputil:trimTrailingWhitespace 0�M(net/http/httputil.trimTrailingWhitespace0R��R=function(c){var d;  �while(c.$length>0&&S((d=c.$length-1>>0,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d])))){  "c=$subslice(c,0,(c.$length-1>>0));    }  7return c;    }; 0trimTrailingWhitespace0 net/http/httputil:isASCIISpace 0��net/http/httputil.isASCIISpace0SFS=function(c){  ereturn(c===32)||(c===9)||(c===10)||(c===13);    }; 0isASCIISpace0  0��"net/http/httputil.newChunkedWriter0T.T=function(c){  �return new U.Ptr(c);    }; 0newChunkedWriter0!net/http/httputil:chunkedWriter 0�/((*net/http/httputil.chunkedWriter).Write0 ��U.Ptr.prototype.Write=function(c){var d=0,e=$ifaceNil,f,g,h,i,j,k,l,m;  �f=this;  	    if(c.$length===0){      g=0;h=$ifaceNil;d=g;e=h;return[d,e];    }  2  5i=D.Fprintf(f.Wire,"%x\r\n",new($sliceType($emptyInterface))([new $Int(c.$length)]));e=i[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  x    j=0;k=e;d=j;e=k;return[d,e];    }  �  �l=f.Wire.Write(c);d=l[0];e=l[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[d,e];    }  �    if(!((d===c.$length))){  �e=E.ErrShortWrite;  �return[d,e];    }  �m=E.WriteString(f.Wire,"\r\n");e=m[1];  *return[d,e];    };U.prototype.Write=function(c){return this.$val.Write(c);}; 0
errors:New 0��net/http/httputil.drainBody0W�W=function(c){var d=$ifaceNil,e=$ifaceNil,f=$ifaceNil,g,h,i,j,k,l,m,n,o,p,q;  N  Rg=new B.Buffer.Ptr();$copy(g,new B.Buffer.Ptr(),B.Buffer);  d  gh=g.ReadFrom(c);f=h[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  �    i=$ifaceNil;j=$ifaceNil;k=f;d=i;e=j;f=k;return[d,e,f];    }  �  �f=c.Close();    if(!($interfaceIsEqual(f,$ifaceNil))){  �    l=$ifaceNil;m=$ifaceNil;n=f;d=l;e=m;f=n;return[d,e,f];    }  �    o=F.NopCloser(g);p=F.NopCloser(B.NewReader(g.Bytes()));q=$ifaceNil;d=o;e=p;f=q;return[d,e,f];    }; 0	drainBody04bytes:Bufferbytes:NewReaderio/ioutil:NopCloser 0��#(*net/http/httputil.dumpConn).Close0 ��X.Ptr.prototype.Close=function(){var c;  �c=this;  �return $ifaceNil;    };X.prototype.Close=function(){return this.$val.Close();}; 0
dumpConn0net/http/httputil:dumpConn 0��'(*net/http/httputil.dumpConn).LocalAddr0 ��X.Ptr.prototype.LocalAddr=function(){var c;  �c=this;  1return $ifaceNil;    };X.prototype.LocalAddr=function(){return this.$val.LocalAddr();}; 0
dumpConn0net/http/httputil:dumpConn 0��((*net/http/httputil.dumpConn).RemoteAddr0 ��X.Ptr.prototype.RemoteAddr=function(){var c;  Dc=this;  wreturn $ifaceNil;    };X.prototype.RemoteAddr=function(){return this.$val.RemoteAddr();}; 0
dumpConn0net/http/httputil:dumpConn 0��)(*net/http/httputil.dumpConn).SetDeadline0 ��X.Ptr.prototype.SetDeadline=function(c){var d;  �d=this;  �return $ifaceNil;    };X.prototype.SetDeadline=function(c){return this.$val.SetDeadline(c);}; 0
dumpConn0net/http/httputil:dumpConn 0�-(*net/http/httputil.dumpConn).SetReadDeadline0 ��X.Ptr.prototype.SetReadDeadline=function(c){var d;  �d=this;  return $ifaceNil;    };X.prototype.SetReadDeadline=function(c){return this.$val.SetReadDeadline(c);}; 0
dumpConn0net/http/httputil:dumpConn 0�.(*net/http/httputil.dumpConn).SetWriteDeadline0 ��X.Ptr.prototype.SetWriteDeadline=function(c){var d;  d=this;  Ireturn $ifaceNil;    };X.prototype.SetWriteDeadline=function(c){return this.$val.SetWriteDeadline(c);}; 0
dumpConn0net/http/httputil:dumpConn 0��$(net/http/httputil.neverEnding).Read0 ��Y.prototype.Read=function(c){var d=0,e=$ifaceNil,f,g,h,i,j,k;  tf=this.$val!==undefined?this.$val:this;  �g=c;h=0;while(h<g.$length){i=h;  �(i<0||i>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+i]=(f<<24>>>24);    h++;}  �    j=c.$length;k=$ifaceNil;d=j;e=k;return[d,e];    };$ptrType(Y).prototype.Read=function(c){return new Y(this.$get()).Read(c);}; 0
sync:Mutexsync:RWMutex
h=W(c.Body);g=h[0];c.Body=h[1];f=h[2];  (6    if(!($interfaceIsEqual(f,$ifaceNil))){  (Ireturn[e,f];    }    }  (Y  (]i=new B.Buffer.Ptr();$copy(i,new B.Buffer.Ptr(),B.Buffer);  (nD.Fprintf(i,"%s %s HTTP/%d.%d\r\n",new($sliceType($emptyInterface))([new $String(AB(c.Method,"GET")),new $String(c.URL.RequestURI()),new $Int(c.ProtoMajor),new $Int(c.ProtoMinor)]));  (�j=c.Host;  )    if(j===""&&!(c.URL===($ptrType(I.URL)).nil)){  ))j=c.URL.Host;    }  )A    if(!(j==="")){  )SD.Fprintf(i,"Host: %s\r\n",new($sliceType($emptyInterface))([new $String(j)]));    }  )~l=c.TransferEncoding.$length>0&&(k=c.TransferEncoding,((0<0||0>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]))==="chunked";  )�    if(c.TransferEncoding.$length>0){  )�D.Fprintf(i,"Transfer-Encoding: %s\r\n",new($sliceType($emptyInterface))([new $String(J.Join(c.TransferEncoding,","))]));    }  *O    if(c.Close){  *`D.Fprintf(i,"Connection: close\r\n",new($sliceType($emptyInterface))([]));    }  *�f=(new H.Header(c.Header)).WriteSubset(i,AC);  *�    if(!($interfaceIsEqual(f,$ifaceNil))){  *�return[e,f];    }  *�E.WriteString(i,"\r\n");  +    if(!($interfaceIsEqual(c.Body,$ifaceNil))){  +  +!m=i;  +7    if(l){  +Gm=AK(m);    }  +kn=E.Copy(m,c.Body);f=n[1];  +�    if(l){  +�$assertType(m,E.Closer).Close();  +�E.WriteString(i,"\r\n");    }    }  +�c.Body=g;  +�    if(!($interfaceIsEqual(f,$ifaceNil))){  ,return[e,f];    }  ,e=i.Bytes();  ,return[e,f];    }; 0
sync:Mutex 0�B&(*net/http/httputil.ServerConn).Hijack0 ��AM.Ptr.prototype.Hijack=function(){var c=$ifaceNil,d=($ptrType(A.Reader)).nil,$deferred=[],$err=null,e;try{$deferFrames.push($deferred);  >�e=this;  ?e.lk.Lock();  ?&$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  ?<c=e.c;  ?Fd=e.r;  ?Pe.c=$ifaceNil;  ?\e.r=($ptrType(A.Reader)).nil;  ?hreturn[c,d];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[c,d];}};AM.prototype.Hijack=function(){return this.$val.Hijack();}; 0
ServerConn0,bufio:Readernet/http/httputil:ServerConn 0�R%(*net/http/httputil.ServerConn).Close0 ��AM.Ptr.prototype.Close=function(){var c,d,e;  ?�c=this;  ?�d=c.Hijack();e=d[0];  ?�    if(!($interfaceIsEqual(e,$ifaceNil))){  @return e.Close();    }  @return $ifaceNil;    };AM.prototype.Close=function(){return this.$val.Close();}; 0
ServerConn0net/http/httputil:ServerConn 0��$(*net/http/httputil.ServerConn).Read0 �
�AM.Ptr.prototype.Read=function($b){var $this=this,$args=arguments,c=($ptrType(H.Request)).nil,d=$ifaceNil,$r,$deferred=[],$err=null,$s=0,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0:  A/e=$this;  A�f=e.pipe.Next();  A�$r=e.pipe.StartRequest(f,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  A�$deferred.push([(function($b){var $this=this,$args=arguments,$r,$s=0,g;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  A�$r=e.pipe.EndRequest(f,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  A�    if(c===($ptrType(H.Request)).nil){}else{$s=2;continue;}  B$r=e.pipe.StartResponse(f,true);$s=4;case 4:if($r&&$r.$blocking){$r=$r();}  B$$r=e.pipe.EndResponse(f,true);$s=5;case 5:if($r&&$r.$blocking){$r=$r();}    $s=3;continue;case 2:  Bye.lk.Lock();  B�g=c;(e.pipereq||$throwRuntimeError("assignment to entry in nil map"))[g.$key()]={k:g,v:f};  B�e.lk.Unlock();    case 3:    case-1:}return;}};$f.$blocking=true;return $f;}),[true]]);  B�e.lk.Lock();  B�    if(!($interfaceIsEqual(e.we,$ifaceNil))){  C$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  C)    g=($ptrType(H.Request)).nil;h=e.we;c=g;d=h;return[c,d];    }  C?    if(!($interfaceIsEqual(e.re,$ifaceNil))){  CS$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  Cj    i=($ptrType(H.Request)).nil;j=e.re;c=i;d=j;return[c,d];    }  C�    if(e.r===($ptrType(A.Reader)).nil){  C�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  C�    k=($ptrType(H.Request)).nil;l=AL;c=k;d=l;return[c,d];    }  C�m=e.r;  C�n=e.lastbody;  De.lastbody=$ifaceNil;  D(e.lk.Unlock();  D�    if(!($interfaceIsEqual(n,$ifaceNil))){  E'd=n.Close();  E@    if(!($interfaceIsEqual(d,$ifaceNil))){  ESe.lk.Lock();  Ec$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  E{e.re=d;  E�    o=($ptrType(H.Request)).nil;p=d;c=o;d=p;return[c,d];    }    }  E�q=H.ReadRequest(m);c=q[0];d=q[1];  E�e.lk.Lock();  E�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  E�    if(!($interfaceIsEqual(d,$ifaceNil))){  E�    if($interfaceIsEqual(d,E.ErrUnexpectedEOF)){  F�e.re=$pkg.ErrPersistEOF;  F�    r=($ptrType(H.Request)).nil;s=e.re;c=r;d=s;return[c,d];    }else{  F�e.re=d;  F�    t=c;u=d;c=t;d=u;return[c,d];    }    }  G
e.lastbody=c.Body;  G"  G"e.nread=e.nread+(1)>>0;  G.    if(c.Close){  G?e.re=$pkg.ErrPersistEOF;  GW    v=c;w=e.re;c=v;d=w;return[c,d];    }  Gm    x=c;y=d;c=x;d=y;return[c,d];    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return[c,d];}};$f.$blocking=true;return $f;};AM.prototype.Read=function($b){return this.$val.Read($b);}; 0
ServerConn0��bufio:Readerio:ErrUnexpectedEOFnet/http/httputil:ErrPersistEOFnet/http/httputil:ServerConnnet/http/httputil:errClosednet/http:ReadRequestnet/http:Request�0��'(*net/http/httputil.ServerConn).Pending0 �rAM.Ptr.prototype.Pending=function(){var $deferred=[],$err=null,c;try{$deferFrames.push($deferred);  G�c=this;  H
c.lk.Lock();  H$deferred.push([$methodVal(c.lk,"Unlock"),[]]);  H.return c.nread-c.nwritten>>0;    }catch(err){$err=err;return 0;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AM.prototype.Pending=function(){return this.$val.Pending();}; 0
ServerConn0net/http/httputil:ServerConn 0�"%(*net/http/httputil.ServerConn).Write0 �XAM.Ptr.prototype.Write=function(c,d,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,e,f,g,h,i,j,k;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0:  IDe=$this;  I�e.lk.Lock();  I�f=(g=e.pipereq[c.$key()],g!==undefined?[g.v,true]:[0,false]);h=f[0];i=f[1];  I�delete e.pipereq[c.$key()];  J	    if(!i){  Je.lk.Unlock();  J%return $pkg.ErrPipeline;    }  J<e.lk.Unlock();  Jg$r=e.pipe.StartResponse(h,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  J�$deferred.push([$methodVal(e.pipe,"EndResponse"),[h,true]]);  J�e.lk.Lock();  J�    if(!($interfaceIsEqual(e.we,$ifaceNil))){  J�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  J�return e.we;    }  J�    if($interfaceIsEqual(e.c,$ifaceNil)){  K,$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  KCreturn $pkg.ErrClosed;    }  KXj=e.c;  Kc    if(e.nread<=e.nwritten){  K�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  K�return C.New("persist server pipe count");    }  K�    if(d.Close){  Lre.re=$pkg.ErrPersistEOF;    }  L�e.lk.Unlock();  L�k=d.Write(j);  L�e.lk.Lock();  L�$deferred.push([$methodVal(e.lk,"Unlock"),[true]]);  L�    if(!($interfaceIsEqual(k,$ifaceNil))){  L�e.we=k;  L�return k;    }  M  Me.nwritten=e.nwritten+(1)>>0;  Mreturn $ifaceNil;    case-1:}return;}}catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};AM.prototype.Write=function(c,d,$b){return this.$val.Write(c,d,$b);}; 0
ServerConn0��
errors:Newnet/http/httputil:ErrClosednet/http/httputil:ErrPersistEOFnet/http/httputil:ErrPipelinenet/http/httputil:ServerConn�0��net/http/httputil.NewClientConn0AP�AP=$pkg.NewClientConn=function(c,d){  QE    if(d===($ptrType(A.Reader)).nil){  QUd=A.NewReader(c);    }  Qpreturn new AO.Ptr(new M.Mutex.Ptr(),c,d,$ifaceNil,$ifaceNil,$ifaceNil,0,0,new $Map(),new L.Pipeline.Ptr(),$methodExpr(($ptrType(H.Request)).prototype.Write));    }; 0
sync:Mutex 0�$net/http/httputil.NewProxyClientConn0AQ��AQ=$pkg.NewProxyClientConn=function(c,d){var e;  Se=AP(c,d);  S+e.writeReq=$methodExpr(($ptrType(H.Request)).prototype.WriteProxy);  SUreturn e;    }; 0NewProxyClientConn03net/http/httputil:NewClientConnnet/http:Request 0�B&(*net/http/httputil.ClientConn).Hijack0 ��AO.Ptr.prototype.Hijack=function(){var c=$ifaceNil,d=($ptrType(A.Reader)).nil,$deferred=[],$err=null,e;try{$deferFrames.push($deferred);  T�e=this;  T�e.lk.Lock();  T�$deferred.push([$methodVal(e.lk,"Unlock"),[]]);  T�c=e.c;  Ud=e.r;  Ue.c=$ifaceNil;  Ue.r=($ptrType(A.Reader)).nil;  U&return[c,d];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[c,d];}};AO.prototype.Hijack=function(){return this.$val.Hijack();}; 0
ClientConn0,bufio:Readernet/http/httputil:ClientConn 0�R%(*net/http/httputil.ClientConn).Close0 ��AO.Ptr.prototype.Close=function(){var c,d,e;  U{c=this;  U�d=c.Hijack();e=d[0];  U�    if(!($interfaceIsEqual(e,$ifaceNil))){  U�return e.Close();    }  U�return $ifaceNil;    };AO.prototype.Close=function(){return this.$val.Close();}; 0
ClientConn0net/http/httputil:ClientConn 0��%(*net/http/httputil.ClientConn).Write0 �
ClientConn0\net/http/httputil:ClientConnnet/http/httputil:ErrPersistEOFnet/http/httputil:errClosed�0��'(*net/http/httputil.ClientConn).Pending0 �rAO.Ptr.prototype.Pending=function(){var $deferred=[],$err=null,c;try{$deferFrames.push($deferred);  [�c=this;  [�c.lk.Lock();  [�$deferred.push([$methodVal(c.lk,"Unlock"),[]]);  [�return c.nwritten-c.nread>>0;    }catch(err){$err=err;return 0;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AO.prototype.Pending=function(){return this.$val.Pending();}; 0
ClientConn0net/http/httputil:ClientConn 0�	5$(*net/http/httputil.ClientConn).Read0 �@AO.Ptr.prototype.Read=function(c,$b){var $this=this,$args=arguments,d=($ptrType(H.Response)).nil,e=$ifaceNil,$r,$deferred=[],$err=null,$s=0,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0:  ].f=$this;  ]�f.lk.Lock();  ]�g=(h=f.pipereq[c.$key()],h!==undefined?[h.v,true]:[0,false]);i=g[0];j=g[1];  ]�delete f.pipereq[c.$key()];  ]�    if(!j){  ^f.lk.Unlock();  ^    k=($ptrType(H.Response)).nil;l=$pkg.ErrPipeline;d=k;e=l;return[d,e];    }  ^/f.lk.Unlock();  ^Z$r=f.pipe.StartResponse(i,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  ^u$deferred.push([$methodVal(f.pipe,"EndResponse"),[i,true]]);  ^�f.lk.Lock();  ^�    if(!($interfaceIsEqual(f.re,$ifaceNil))){  ^�$deferred.push([$methodVal(f.lk,"Unlock"),[true]]);  ^�    m=($ptrType(H.Response)).nil;n=f.re;d=m;e=n;return[d,e];    }  ^�    if(f.r===($ptrType(A.Reader)).nil){  _$$deferred.push([$methodVal(f.lk,"Unlock"),[true]]);  _;    o=($ptrType(H.Response)).nil;p=AL;d=o;e=p;return[d,e];    }  _Uq=f.r;  _`r=f.lastbody;  _yf.lastbody=$ifaceNil;  _�f.lk.Unlock();  _�    if(!($interfaceIsEqual(r,$ifaceNil))){  `�e=r.Close();  `�    if(!($interfaceIsEqual(e,$ifaceNil))){  `�f.lk.Lock();  `�$deferred.push([$methodVal(f.lk,"Unlock"),[true]]);  `�f.re=e;  `�    s=($ptrType(H.Response)).nil;t=e;d=s;e=t;return[d,e];    }    }  au=H.ReadResponse(q,c);d=u[0];e=u[1];  a.f.lk.Lock();  a<$deferred.push([$methodVal(f.lk,"Unlock"),[true]]);  aR    if(!($interfaceIsEqual(e,$ifaceNil))){  adf.re=e;  ar    v=d;w=e;d=v;e=w;return[d,e];    }  a�f.lastbody=d.Body;  a�  a�f.nread=f.nread+(1)>>0;  a�    if(d.Close){  a�f.re=$pkg.ErrPersistEOF;  a�    x=d;y=f.re;d=x;e=y;return[d,e];    }  b    z=d;aa=e;d=z;e=aa;return[d,e];    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return[d,e];}};$f.$blocking=true;return $f;};AO.prototype.Read=function(c,$b){return this.$val.Read(c,$b);}; 0
ClientConn0��bufio:Readernet/http/httputil:ClientConnnet/http/httputil:ErrPersistEOFnet/http/httputil:ErrPipelinenet/http/httputil:errClosednet/http:ReadResponsenet/http:Response�0��"(*net/http/httputil.ClientConn).Do0 �,AO.Ptr.prototype.Do=function(c,$b){var $this=this,$args=arguments,d=($ptrType(H.Response)).nil,e=$ifaceNil,$r,$s=0,f,g,h,i;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  bqf=$this;  b�g=f.Write(c,true);$s=1;case 1:if(g&&g.$blocking){g=g();}e=g;  b�    if(!($interfaceIsEqual(e,$ifaceNil))){  b�return[d,e];    }  b�    i=f.Read(c,true);$s=2;case 2:if(i&&i.$blocking){i=i();}h=i;d=h[0];e=h[1];return[d,e];    case-1:}return;}};$f.$blocking=true;return $f;};AO.prototype.Do=function(c,$b){return this.$val.Do(c,$b);}; 0
ClientConn01net/http/httputil:ClientConnnet/http:Response�0�;$net/http/httputil.singleJoiningSlash0AT��AT=function(c,d){var e,f;  g�e=J.HasSuffix(c,"/");  g�f=J.HasPrefix(d,"/");  g�  g�if(e&&f){  g�return c+d.substring(1);      h}else if(!e&&!f){  h*return c+"/"+d;    }  hAreturn c+d;    }; 0singleJoiningSlash0&strings:HasPrefixstrings:HasSuffix 0�4+net/http/httputil.NewSingleHostReverseProxy0AU��AU=$pkg.NewSingleHostReverseProxy=function(c){var d,e;  i�d=c.RawQuery;  i�e=(function(e){  i�e.URL.Scheme=c.Scheme;  i�e.URL.Host=c.Host;  je.URL.Path=AT(c.Path,e.URL.Path);  jU    if(d===""||e.URL.RawQuery===""){  j�e.URL.RawQuery=d+e.URL.RawQuery;    }else{  j�e.URL.RawQuery=d+"&"+e.URL.RawQuery;    }    });  k	return new AS.Ptr(e,$ifaceNil,new K.Duration(0,0));    }; 0NewSingleHostReverseProxy0Unet/http/httputil:ReverseProxy$net/http/httputil:singleJoiningSlash
copyHeader0net/http:Header 0�	+(*net/http/httputil.ReverseProxy).ServeHTTP0 ��AS.Ptr.prototype.ServeHTTP=function(c,d,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0:  l�e=$this;  m9f=e.Transport;  mS    if($interfaceIsEqual(f,$ifaceNil)){  mkf=H.DefaultTransport;    }  m�g=new H.Request.Ptr();  m�$copy(g,d,H.Request);  m�e.Director(g);  ng.Proto="HTTP/1.1";  ng.ProtoMajor=1;  n3g.ProtoMinor=1;  nJg.Close=false;  o�h=false;  o�i=AW;j=0;while(j<i.$length){k=((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]);  o�    if(!((new H.Header(g.Header)).Get(k)==="")){  o�    if(!h){  o�g.Header=new $Map();  pAV(g.Header,d.Header);  pHh=true;    }  pe(new H.Header(g.Header)).Del(k);    }    j++;}  p�  p�l=G.SplitHostPort(d.RemoteAddr);m=l[0];n=l[2];    if($interfaceIsEqual(n,$ifaceNil)){  qe  qho=(p=g.Header["X-Forwarded-For"],p!==undefined?[p.v,true]:[($sliceType($String)).nil,false]);q=o[0];r=o[1];    if(r){  q�m=J.Join(q,", ")+", "+m;    }  q�(new H.Header(g.Header)).Set("X-Forwarded-For",m);    }  rs=f.RoundTrip(g);t=s[0];u=s[1];  r9    if(!($interfaceIsEqual(u,$ifaceNil))){  rKN.Printf("http: proxy error: %v",new($sliceType($emptyInterface))([u]));  rvc.WriteHeader(500);  r�return;    }  r�$deferred.push([$methodVal(t.Body,"Close"),[true]]);  r�v=AW;w=0;while(w<v.$length){x=((w<0||w>=v.$length)?$throwRuntimeError("index out of range"):v.$array[v.$offset+w]);  r�(new H.Header(t.Header)).Del(x);    w++;}  sAV(c.Header(),t.Header);  s)c.WriteHeader(t.StatusCode);  sI$r=e.copyResponse(c,t.Body,true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};AS.prototype.ServeHTTP=function(c,d,$b){return this.$val.ServeHTTP(c,d,$b);}; 0ReverseProxy0��
log:Printfnet/http/httputil:ReverseProxynet/http/httputil:copyHeadernet/http/httputil:copyResponsenet/http/httputil:hopHeadersnet/http:DefaultTransportnet/http:Headernet/http:Requestnet:SplitHostPortstrings:Join�0��.(*net/http/httputil.ReverseProxy).copyResponse0 ��AS.Ptr.prototype.copyResponse=function(c,d,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,e,f,g,h,i,j;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0:  soe=$this;  s�    if(!((f=e.FlushInterval,(f.$high===0&&f.$low===0)))){}else{$s=1;continue;}  s�  s�g=$assertType(c,AX,true);h=g[0];i=g[1];    if(i){}else{$s=2;continue;}  s�j=new AY.Ptr(h,e.FlushInterval,new M.Mutex.Ptr(),new($chanType($Bool,false,false))(0));  tb$go($methodVal(j,"flushLoop"),[]);  tx$deferred.push([$methodVal(j,"stop"),[true]]);  t�c=j;    case 2:    case 1:  t�E.Copy(c,d);    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};AS.prototype.copyResponse=function(c,d,$b){return this.$val.copyResponse(c,d,$b);}; 0ReverseProxycopyResponse0��io:Copynet/http/httputil:ReverseProxynet/http/httputil:flushLoop"net/http/httputil:maxLatencyWriternet/http/httputil:stopnet/http/httputil:writeFlusher
sync:Mutex
 �