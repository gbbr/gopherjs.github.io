0�(Fnet/smtp��fpackage smtp
import hmac "crypto/hmac"
import md5 "crypto/md5"
import errors "errors"
import fmt "fmt"
import tls "crypto/tls"
import base64 "encoding/base64"
import io "io"
import net "net"
import textproto "net/textproto"
import strings "strings"
type @"".Auth interface { @"".Next(@"".fromServer []byte, @"".more bool) (@"".toServer []byte, @"".err error); @"".Start(@"".server *@"".ServerInfo) (@"".proto string, @"".toServer []byte, @"".err error) }
func @"".CRAMMD5Auth(@"".username string, @"".secret string) (? @"".Auth)
type @"".Client struct { @"".Text *@"net/textproto".Conn; @"".conn @"net".Conn; @"".tls bool; @"".serverName string; @"".ext map[string]string; @"".auth []string; @"".localName string; @"".didHello bool; @"".helloError error }
func (? *@"".Client) @"".Auth(@"".a @"".Auth) (? error)
func (? *@"".Client) @"".Close() (? error)
func (? *@"".Client) @"".Data() (? @"io".WriteCloser, ? error)
func (? *@"".Client) @"".Extension(@"".ext string) (? bool, ? string)
func (? *@"".Client) @"".Hello(@"".localName string) (? error)
func (? *@"".Client) @"".Mail(@"".from string) (? error)
func (? *@"".Client) @"".Quit() (? error)
func (? *@"".Client) @"".Rcpt(@"".to string) (? error)
func (? *@"".Client) @"".Reset() (? error)
func (? *@"".Client) @"".StartTLS(@"".config *@"crypto/tls".Config) (? error)
func (? *@"".Client) @"".Verify(@"".addr string) (? error)
func (? *@"".Client) @"".cmd(@"".expectCode int, @"".format string, @"".args ...interface {  }) (? int, ? string, ? error)
func (? *@"".Client) @"".ehlo() (? error)
func (? *@"".Client) @"".hello() (? error)
func (? *@"".Client) @"".helo() (? error)
func @"".Dial(@"".addr string) (? *@"".Client, ? error)
func @"".NewClient(@"".conn @"net".Conn, @"".host string) (? *@"".Client, ? error)
func @"".PlainAuth(@"".identity string, @"".username string, @"".password string, @"".host string) (? @"".Auth)
func @"".SendMail(@"".addr string, @"".a @"".Auth, @"".from string, @"".to []string, @"".msg []byte) (? error)
type @"".ServerInfo struct { @"".Name string; @"".TLS bool; @"".Auth []string }
type @"".cramMD5Auth struct { @"".username string; @"".secret string }
func (? *@"".cramMD5Auth) @"".Next(@"".fromServer []byte, @"".more bool) (? []byte, ? error)
func (? *@"".cramMD5Auth) @"".Start(@"".server *@"".ServerInfo) (? string, ? []byte, ? error)
type @"".dataCloser struct { @"".c *@"".Client; ? @"io".WriteCloser }
func (? *@"".dataCloser) @"".Close() (? error)
type @"".plainAuth struct { @"".identity string; @"".username string; @"".password string; @"".host string }
func (? *@"".plainAuth) @"".Next(@"".fromServer []byte, @"".more bool) (? []byte, ? error)
func (? *@"".plainAuth) @"".Start(@"".server *@"".ServerInfo) (? string, ? []byte, ? error)
type @"net/textproto".Conn struct { ? @"net/textproto".Reader; ? @"net/textproto".Writer; ? @"net/textproto".Pipeline; @"net/textproto".conn @"io".ReadWriteCloser }
func (? *@"net/textproto".Conn) @"net/textproto".Close() (? error)
func (? *@"net/textproto".Conn) @"net/textproto".Cmd(@"net/textproto".format string, @"net/textproto".args ...interface {  }) (@"net/textproto".id uint, @"net/textproto".err error)
import time "time"
type @"net".Conn interface { @"net".Close() (? error); @"net".LocalAddr() (? @"net".Addr); @"net".Read(@"net".b []byte) (@"net".n int, @"net".err error); @"net".RemoteAddr() (? @"net".Addr); @"net".SetDeadline(@"net".t @"time".Time) (? error); @"net".SetReadDeadline(@"net".t @"time".Time) (? error); @"net".SetWriteDeadline(@"net".t @"time".Time) (? error); @"net".Write(@"net".b []byte) (@"net".n int, @"net".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
import x509 "crypto/x509"
import sync "sync"
type @"crypto/tls".Config struct { @"crypto/tls".Rand @"io".Reader; @"crypto/tls".Time func () (? @"time".Time); @"crypto/tls".Certificates []@"crypto/tls".Certificate; @"crypto/tls".NameToCertificate map[string]*@"crypto/tls".Certificate; @"crypto/tls".RootCAs *@"crypto/x509".CertPool; @"crypto/tls".NextProtos []string; @"crypto/tls".ServerName string; @"crypto/tls".ClientAuth @"crypto/tls".ClientAuthType; @"crypto/tls".ClientCAs *@"crypto/x509".CertPool; @"crypto/tls".InsecureSkipVerify bool; @"crypto/tls".CipherSuites []uint16; @"crypto/tls".PreferServerCipherSuites bool; @"crypto/tls".SessionTicketsDisabled bool; @"crypto/tls".SessionTicketKey [32]byte; @"crypto/tls".ClientSessionCache @"crypto/tls".ClientSessionCache; @"crypto/tls".MinVersion uint16; @"crypto/tls".MaxVersion uint16; @"crypto/tls".CurvePreferences []@"crypto/tls".CurveID; @"crypto/tls".serverInitOnce @"sync".Once }
func (? *@"crypto/tls".Config) @"crypto/tls".BuildNameToCertificate() ()
func (? *@"crypto/tls".Config) @"crypto/tls".cipherSuites() (? []uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".curvePreferences() (? []@"crypto/tls".CurveID)
func (? *@"crypto/tls".Config) @"crypto/tls".getCertificateForName(@"crypto/tls".name string) (? *@"crypto/tls".Certificate)
func (? *@"crypto/tls".Config) @"crypto/tls".maxVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".minVersion() (? uint16)
func (? *@"crypto/tls".Config) @"crypto/tls".mutualVersion(@"crypto/tls".vers uint16) (? uint16, ? bool)
func (? *@"crypto/tls".Config) @"crypto/tls".rand() (? @"io".Reader)
func (? *@"crypto/tls".Config) @"crypto/tls".serverInit() ()
func (? *@"crypto/tls".Config) @"crypto/tls".time() (? @"time".Time)
import bufio "bufio"
type @"net/textproto".Reader struct { @"net/textproto".R *@"bufio".Reader; @"net/textproto".dot *@"net/textproto".dotReader; @"net/textproto".buf []byte }
func (? *@"net/textproto".Reader) @"net/textproto".DotReader() (? @"io".Reader)
func (? *@"net/textproto".Reader) @"net/textproto".ReadCodeLine(@"net/textproto".expectCode int) (@"net/textproto".code int, @"net/textproto".message string, @"net/textproto".err error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadContinuedLine() (? string, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadContinuedLineBytes() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadDotBytes() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadDotLines() (? []string, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadLine() (? string, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadLineBytes() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadMIMEHeader() (? @"net/textproto".MIMEHeader, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".ReadResponse(@"net/textproto".expectCode int) (@"net/textproto".code int, @"net/textproto".message string, @"net/textproto".err error)
func (? *@"net/textproto".Reader) @"net/textproto".closeDot() ()
func (? *@"net/textproto".Reader) @"net/textproto".readCodeLine(@"net/textproto".expectCode int) (@"net/textproto".code int, @"net/textproto".continued bool, @"net/textproto".message string, @"net/textproto".err error)
func (? *@"net/textproto".Reader) @"net/textproto".readContinuedLineSlice() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".readLineSlice() (? []byte, ? error)
func (? *@"net/textproto".Reader) @"net/textproto".skipSpace() (? int)
func (? *@"net/textproto".Reader) @"net/textproto".upcomingHeaderNewlines() (@"net/textproto".n int)
type @"net/textproto".Writer struct { @"net/textproto".W *@"bufio".Writer; @"net/textproto".dot *@"net/textproto".dotWriter }
func (? *@"net/textproto".Writer) @"net/textproto".DotWriter() (? @"io".WriteCloser)
func (? *@"net/textproto".Writer) @"net/textproto".PrintfLine(@"net/textproto".format string, @"net/textproto".args ...interface {  }) (? error)
func (? *@"net/textproto".Writer) @"net/textproto".closeDot() ()
type @"net/textproto".Pipeline struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".request @"net/textproto".sequencer; @"net/textproto".response @"net/textproto".sequencer }
func (? *@"net/textproto".Pipeline) @"net/textproto".EndRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".EndResponse(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".Next() (? uint)
func (? *@"net/textproto".Pipeline) @"net/textproto".StartRequest(@"net/textproto".id uint) ()
func (? *@"net/textproto".Pipeline) @"net/textproto".StartResponse(@"net/textproto".id uint) ()
type @"io".ReadWriteCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
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
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
import crypto "crypto"
type @"crypto/tls".Certificate struct { @"crypto/tls".Certificate [][]byte; @"crypto/tls".PrivateKey @"crypto".PrivateKey; @"crypto/tls".OCSPStaple []byte; @"crypto/tls".Leaf *@"crypto/x509".Certificate }
type @"crypto/x509".CertPool struct { @"crypto/x509".bySubjectKeyId map[string][]int; @"crypto/x509".byName map[string][]int; @"crypto/x509".certs []*@"crypto/x509".Certificate }
func (? *@"crypto/x509".CertPool) @"crypto/x509".AddCert(@"crypto/x509".cert *@"crypto/x509".Certificate) ()
func (? *@"crypto/x509".CertPool) @"crypto/x509".AppendCertsFromPEM(@"crypto/x509".pemCerts []byte) (@"crypto/x509".ok bool)
func (? *@"crypto/x509".CertPool) @"crypto/x509".Subjects() (@"crypto/x509".res [][]byte)
func (? *@"crypto/x509".CertPool) @"crypto/x509".findVerifiedParents(@"crypto/x509".cert *@"crypto/x509".Certificate) (@"crypto/x509".parents []int, @"crypto/x509".errCert *@"crypto/x509".Certificate, @"crypto/x509".err error)
type @"crypto/tls".ClientAuthType int
type @"crypto/tls".ClientSessionCache interface { @"crypto/tls".Get(@"crypto/tls".sessionKey string) (@"crypto/tls".session *@"crypto/tls".ClientSessionState, @"crypto/tls".ok bool); @"crypto/tls".Put(@"crypto/tls".sessionKey string, @"crypto/tls".cs *@"crypto/tls".ClientSessionState) () }
type @"crypto/tls".CurveID uint16
type @"sync".Once struct { @"sync".m @"sync".Mutex; @"sync".done uint32 }
func (? *@"sync".Once) @"sync".Do(@"sync".f func () ()) ()
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
type @"net/textproto".dotReader struct { @"net/textproto".r *@"net/textproto".Reader; @"net/textproto".state int }
func (? *@"net/textproto".dotReader) @"net/textproto".Read(@"net/textproto".b []byte) (@"net/textproto".n int, @"net/textproto".err error)
type @"net/textproto".MIMEHeader map[string][]string
func (? @"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? @"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? @"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Add(@"net/textproto".key string, @"net/textproto".value string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Del(@"net/textproto".key string) ()
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Get(@"net/textproto".key string) (? string)
func (? *@"net/textproto".MIMEHeader) @"net/textproto".Set(@"net/textproto".key string, @"net/textproto".value string) ()
type @"bufio".Writer struct { @"bufio".err error; @"bufio".buf []byte; @"bufio".n int; @"bufio".wr @"io".Writer }
func (? *@"bufio".Writer) @"bufio".Available() (? int)
func (? *@"bufio".Writer) @"bufio".Buffered() (? int)
func (? *@"bufio".Writer) @"bufio".Flush() (? error)
func (? *@"bufio".Writer) @"bufio".ReadFrom(@"bufio".r @"io".Reader) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".Reset(@"bufio".w @"io".Writer) ()
func (? *@"bufio".Writer) @"bufio".Write(@"bufio".p []byte) (@"bufio".nn int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteByte(@"bufio".c byte) (? error)
func (? *@"bufio".Writer) @"bufio".WriteRune(@"bufio".r rune) (@"bufio".size int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteString(@"bufio".s string) (? int, ? error)
func (? *@"bufio".Writer) @"bufio".flush() (? error)
type @"net/textproto".dotWriter struct { @"net/textproto".w *@"net/textproto".Writer; @"net/textproto".state int }
func (? *@"net/textproto".dotWriter) @"net/textproto".Close() (? error)
func (? *@"net/textproto".dotWriter) @"net/textproto".Write(@"net/textproto".b []byte) (@"net/textproto".n int, @"net/textproto".err error)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"net/textproto".sequencer struct { @"net/textproto".mu @"sync".Mutex; @"net/textproto".id uint; @"net/textproto".wait map[uint]chan uint }
func (? *@"net/textproto".sequencer) @"net/textproto".End(@"net/textproto".id uint) ()
func (? *@"net/textproto".sequencer) @"net/textproto".Start(@"net/textproto".id uint) ()
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
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
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"crypto".PrivateKey interface {  }
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
type @"crypto/tls".ClientSessionState struct { @"crypto/tls".sessionTicket []uint8; @"crypto/tls".vers uint16; @"crypto/tls".cipherSuite uint16; @"crypto/tls".masterSecret []byte; @"crypto/tls".serverCertificates []*@"crypto/x509".Certificate }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
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
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
type @"crypto/x509/pkix".RelativeDistinguishedNameSET []@"crypto/x509/pkix".AttributeTypeAndValue
type @"encoding/asn1".RawContent []byte
type @"encoding/asn1".RawValue struct { @"encoding/asn1".Class int; @"encoding/asn1".Tag int; @"encoding/asn1".IsCompound bool; @"encoding/asn1".Bytes []byte; @"encoding/asn1".FullBytes []byte }
$$
0��github.com/gopherjs/gopherjs/jsruntime
crypto/md5unicodebytescontainer/list
crypto/aesreflectencoding/binary
crypto/dessyscallstringstimeosfmt	math/randmath/bigcrypto/ellipticcrypto/ecdsabufiocrypto/rand
crypto/rc4
crypto/rsacrypto/sha1
crypto/dsa
crypto/tls
crypto/md5B0errorsC0fmtD0
crypto/tlsE0encoding/base64F0ioG0netH0
ServerInfo0  0� 0M�EM=$pkg.plainAuth=$newType(0,"Struct","smtp.plainAuth","plainAuth","net/smtp",function(identity_,username_,password_,host_){this.$val=this;this.identity=identity_!==undefined?identity_:"";this.username=username_!==undefined?username_:"";this.password=password_!==undefined?password_:"";this.host=host_!==undefined?host_:"";});��($ptrType(M)).methods=[["Next","Next","",$funcType([($sliceType($Uint8)),$Bool],[($sliceType($Uint8)),$error],false),-1],["Start","Start","",$funcType([($ptrType(L))],[$String,($sliceType($Uint8)),$error],false),-1]];M.init([["identity","identity","net/smtp",$String,""],["username","username","net/smtp",$String,""],["password","password","net/smtp",$String,""],["host","host","net/smtp",$String,""]]);0	plainAuth0net/smtp:ServerInfo 0�O 0O��O=$pkg.cramMD5Auth=$newType(0,"Struct","smtp.cramMD5Auth","cramMD5Auth","net/smtp",function(username_,secret_){this.$val=this;this.username=username_!==undefined?username_:"";this.secret=secret_!==undefined?secret_:"";});�;($ptrType(O)).methods=[["Next","Next","",$funcType([($sliceType($Uint8)),$Bool],[($sliceType($Uint8)),$error],false),-1],["Start","Start","",$funcType([($ptrType(L))],[$String,($sliceType($Uint8)),$error],false),-1]];O.init([["username","username","net/smtp",$String,""],["secret","secret","net/smtp",$String,""]]);0
dataCloser0!io:WriteClosernet/smtp:Client 0W 0U U=$throwNilPointerError;0testHookStartTLS0net/smtp:testHookStartTLS 0��net/smtp.PlainAuth0NIN=$pkg.PlainAuth=function(a,b,c,d){  _return new M.Ptr(a,b,c,d);    }; 0	PlainAuth0net/smtp:plainAuth 0�(*net/smtp.plainAuth).Start0 ��M.Ptr.prototype.Start=function(a){var b,c,d,e,f,g;  �b=this;  �    if(!a.TLS){  �c=false;  
d=a.Auth;e=0;while(e<d.$length){f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  5    if(f==="PLAIN"){  Sc=true;  ibreak;    }    e++;}  z    if(!c){  �return["",($sliceType($Uint8)).nil,C.New("unencrypted connection")];    }    }  �    if(!(a.Name===b.host)){  �return["",($sliceType($Uint8)).nil,C.New("wrong host name")];    }  	g=new($sliceType($Uint8))($stringToBytes(b.identity+"\x00"+b.username+"\x00"+b.password));  	breturn["PLAIN",g,$ifaceNil];    };M.prototype.Start=function(a){return this.$val.Start(a);}; 0	plainAuth0 
errors:Newnet/smtp:plainAuth 0�_(*net/smtp.plainAuth).Next0 �	M.Ptr.prototype.Next=function(a,b){var c;  	�c=this;  	�    if(b){  	�return[($sliceType($Uint8)).nil,C.New("unexpected server challenge")];    }  
3return[($sliceType($Uint8)).nil,$ifaceNil];    };M.prototype.Next=function(a,b){return this.$val.Next(a,b);}; 0	plainAuth0 
errors:Newnet/smtp:plainAuth 0��net/smtp.CRAMMD5Auth0PCP=$pkg.CRAMMD5Auth=function(a,b){  �return new O.Ptr(a,b);    }; 0
errors:Newnet/smtp:Clientnet/smtp:hello�0��(*net/smtp.Client).cmd0 ��Q.Ptr.prototype.cmd=function(a,b,c,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,d,e,f,g,h,i,j,k;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0:  d=$this;  ^f=d.Text.Cmd(b,c,true);$s=1;case 1:if(f&&f.$blocking){f=f();}e=f;g=e[0];h=e[1];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[0,"",h];    }  �$r=d.Text.Pipeline.StartResponse(g,true);$s=2;case 2:if($r&&$r.$blocking){$r=$r();}  �$deferred.push([$methodVal(d.Text,"EndResponse"),[g,true]]);  �i=d.Text.Reader.ReadResponse(a);j=i[0];k=i[1];h=i[2];  return[j,k,h];    case-1:}return;}}catch(err){$err=err;return[0,"",$ifaceNil];}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};Q.prototype.cmd=function(a,b,c,$b){return this.$val.cmd(a,b,c,$b);}; 0
b=a.c.Text.Reader.ReadResponse(250);c=b[2];  (3return c;    };T.prototype.Close=function(){return this.$val.Close();}; 0
dataCloser0net/smtp:dataCloser 0�(*net/smtp.Client).Data0 �Q.Ptr.prototype.Data=function($b){var $this=this,$args=arguments,$r,$s=0,a,b,c,d;if(!$b){$nonblockingCall();};var $f=function(){while(true){switch($s){case 0:  )<a=$this;  )ic=a.cmd(354,"DATA",new($sliceType($emptyInterface))([]),true);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[2];  )�    if(!($interfaceIsEqual(d,$ifaceNil))){  )�return[$ifaceNil,d];    }  )�return[new T.Ptr(a,a.Text.Writer.DotWriter()),$ifaceNil];    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Data=function($b){return this.$val.Data($b);}; 0Client04net/smtp:Clientnet/smtp:cmdnet/smtp:dataCloser�0��net/smtp.SendMail0V�V=$pkg.SendMail=function(a,b,c,d,e,$b){var $this=this,$args=arguments,$r,$deferred=[],$err=null,$s=0,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac;if(!$b){$nonblockingCall();};var $f=function(){try{$deferFrames.push($deferred);while(true){switch($s){case 0:  +Ng=R(a,true);$s=1;case 1:if(g&&g.$blocking){g=g();}f=g;h=f[0];i=f[1];  +d    if(!($interfaceIsEqual(i,$ifaceNil))){  +vreturn i;    }  +�$deferred.push([$methodVal(h,"Close"),[true]]);  +�  +�j=h.hello(true);$s=2;case 2:if(j&&j.$blocking){j=j();}i=j;    if(!($interfaceIsEqual(i,$ifaceNil))){}else{$s=3;continue;}  +�return i;    case 3:  +�  +�l=h.Extension("STARTTLS",true);$s=4;case 4:if(l&&l.$blocking){l=l();}k=l;m=k[0];    if(m){}else{$s=5;continue;}  +�n=new E.Config.Ptr($ifaceNil,$throwNilPointerError,($sliceType(E.Certificate)).nil,false,($ptrType($packages["crypto/x509"].CertPool)).nil,($sliceType($String)).nil,h.serverName,0,($ptrType($packages["crypto/x509"].CertPool)).nil,false,($sliceType($Uint16)).nil,false,false,($arrayType($Uint8,32)).zero(),$ifaceNil,0,0,($sliceType(E.CurveID)).nil,new $packages["sync"].Once.Ptr());  ,&    if(!(U===$throwNilPointerError)){  ,FU(n);    }  ,e  ,ho=h.StartTLS(n,true);$s=6;case 6:if(o&&o.$blocking){o=o();}i=o;    if(!($interfaceIsEqual(i,$ifaceNil))){}else{$s=7;continue;}  ,�return i;    case 7:    case 5:  ,�    if(!($interfaceIsEqual(b,$ifaceNil))&&!(h.ext===false)){}else{$s=8;continue;}  ,�  ,�p=(q=h.ext["AUTH"],q!==undefined?[q.v,true]:["",false]);r=p[1];    if(r){}else{$s=9;continue;}  ,�  ,�s=h.Auth(b,true);$s=10;case 10:if(s&&s.$blocking){s=s();}i=s;    if(!($interfaceIsEqual(i,$ifaceNil))){}else{$s=11;continue;}  -
SendMail0��crypto/tls:Certificatecrypto/tls:Configcrypto/tls:CurveIDcrypto/x509:CertPool
 �