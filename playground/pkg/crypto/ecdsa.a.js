p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �y���crypto/ecdsaecdsacryptocrypto/ellipticencoding/asn1iomath/big�Lpackage ecdsa
import crypto "crypto"
import elliptic "crypto/elliptic"
import asn1 "encoding/asn1"
import io "io"
import big "math/big"
func @"".GenerateKey(@"".c @"crypto/elliptic".Curve, @"".rand @"io".Reader) (@"".priv *@"".PrivateKey, @"".err error)
type @"".PrivateKey struct { ? @"".PublicKey; @"".D *@"math/big".Int }
func (? *@"".PrivateKey) @"".Public() (? @"crypto".PublicKey)
func (? *@"".PrivateKey) @"".Sign(@"".rand @"io".Reader, @"".msg []byte, @"".opts @"crypto".SignerOpts) (? []byte, ? error)
type @"".PublicKey struct { ? @"crypto/elliptic".Curve; @"".X *@"math/big".Int; @"".Y *@"math/big".Int }
func @"".Sign(@"".rand @"io".Reader, @"".priv *@"".PrivateKey, @"".hash []byte) (@"".r *@"math/big".Int, @"".s *@"math/big".Int, @"".err error)
func @"".Verify(@"".pub *@"".PublicKey, @"".hash []byte, @"".r *@"math/big".Int, @"".s *@"math/big".Int) (? bool)
type @"".ecdsaSignature struct { @"".R *@"math/big".Int; @"".S *@"math/big".Int }
type @"crypto/elliptic".Curve interface { @"crypto/elliptic".Add(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int, @"crypto/elliptic".x2 *@"math/big".Int, @"crypto/elliptic".y2 *@"math/big".Int) (@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int); @"crypto/elliptic".Double(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int) (@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int); @"crypto/elliptic".IsOnCurve(@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int) (? bool); @"crypto/elliptic".Params() (? *@"crypto/elliptic".CurveParams); @"crypto/elliptic".ScalarBaseMult(@"crypto/elliptic".k []byte) (@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int); @"crypto/elliptic".ScalarMult(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int, @"crypto/elliptic".k []byte) (@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int) }
type @"io".Reader interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"".n int64, @"".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"".y *@"math/big".Int) (@"".r int)
func (? *@"math/big".Int) @"math/big".Div(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int)
import fmt "fmt"
func (? *@"math/big".Int) @"math/big".Format(@"".s @"fmt".State, @"".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"".text []byte, @"".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"".g *@"math/big".Int, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"".a int64, @"".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"".rnd *@"math/rand".Rand, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"".s @"fmt".ScanState, @"".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"".x *@"math/big".Int, @"".i int, @"".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"".s string, @"".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? *@"math/big".Int, ? int, ? error)
type @"crypto".PublicKey interface {  }
type @"crypto".SignerOpts interface { @"crypto".HashFunc() (? @"crypto".Hash) }
type @"crypto/elliptic".CurveParams struct { @"crypto/elliptic".P *@"math/big".Int; @"crypto/elliptic".N *@"math/big".Int; @"crypto/elliptic".B *@"math/big".Int; @"crypto/elliptic".Gx *@"math/big".Int; @"crypto/elliptic".Gy *@"math/big".Int; @"crypto/elliptic".BitSize int }
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".Add(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int, @"crypto/elliptic".x2 *@"math/big".Int, @"crypto/elliptic".y2 *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".Double(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".IsOnCurve(@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int) (? bool)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".Params() (? *@"crypto/elliptic".CurveParams)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".ScalarBaseMult(@"crypto/elliptic".k []byte) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".ScalarMult(@"crypto/elliptic".Bx *@"math/big".Int, @"crypto/elliptic".By *@"math/big".Int, @"crypto/elliptic".k []byte) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".addJacobian(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int, @"crypto/elliptic".z1 *@"math/big".Int, @"crypto/elliptic".x2 *@"math/big".Int, @"crypto/elliptic".y2 *@"math/big".Int, @"crypto/elliptic".z2 *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".affineFromJacobian(@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int, @"crypto/elliptic".z *@"math/big".Int) (@"crypto/elliptic".xOut *@"math/big".Int, @"crypto/elliptic".yOut *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".doubleJacobian(@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int, @"crypto/elliptic".z *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int, ? *@"math/big".Int)
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"".c int) (? bool); @"fmt".Precision() (@"".prec int, @"".ok bool); @"fmt".Width() (@"".wid int, @"".ok bool); @"fmt".Write(@"".b []byte) (@"".ret int, @"".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"".buf []byte) (@"".n int, @"".err error); @"fmt".ReadRune() (@"".r rune, @"".size int, @"".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"".skipSpace bool, @"".f func (? rune) (? bool)) (@"".token []byte, @"".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"".wid int, @"".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"".r rune, @"".size int, @"".err error); @"io".UnreadRune() (? error) }
type @"crypto".Hash uint
func (? @"crypto".Hash) @"crypto".Available() (? bool)
func (? @"crypto".Hash) @"crypto".HashFunc() (? @"crypto".Hash)
import hash "hash"
func (? @"crypto".Hash) @"crypto".New() (? @"hash".Hash)
func (? @"crypto".Hash) @"crypto".Size() (? int)
func (? *@"crypto".Hash) @"crypto".Available() (? bool)
func (? *@"crypto".Hash) @"crypto".HashFunc() (? @"crypto".Hash)
func (? *@"crypto".Hash) @"crypto".New() (? @"hash".Hash)
func (? *@"crypto".Hash) @"crypto".Size() (? int)
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"".seed int64) () }
type @"hash".Hash interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
$$
AA=$packages["crypto"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["crypto/elliptic"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["encoding/asn1"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["io"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["math/big"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} F��F=$pkg.PublicKey=$newType(0,$kindStruct,"ecdsa.PublicKey","PublicKey","crypto/ecdsa",function(Curve_,X_,Y_){this.$val=this;if(arguments.length===0){this.Curve=$ifaceNil;this.X=Q.nil;this.Y=Q.nil;return;}this.Curve=Curve_;this.X=X_;this.Y=Y_;});��F.init([{prop:"Curve",name:"",pkg:"",typ:B.Curve,tag:""},{prop:"X",name:"X",pkg:"",typ:Q,tag:""},{prop:"Y",name:"Y",pkg:"",typ:Q,tag:""}]);	PublicKeycrypto/ecdsa.PublicKeycrypto/ecdsa.Qcrypto/elliptic.Curve G��G=$pkg.PrivateKey=$newType(0,$kindStruct,"ecdsa.PrivateKey","PrivateKey","crypto/ecdsa",function(PublicKey_,D_){this.$val=this;if(arguments.length===0){this.PublicKey=new F.ptr();this.D=Q.nil;return;}this.PublicKey=PublicKey_;this.D=D_;});��R.methods=[{prop:"Public",name:"Public",pkg:"",typ:$funcType([],[A.PublicKey],false)},{prop:"Sign",name:"Sign",pkg:"",typ:$funcType([D.Reader,P,A.SignerOpts],[P,$error],false)}];aG.init([{prop:"PublicKey",name:"",pkg:"",typ:F,tag:""},{prop:"D",name:"D",pkg:"",typ:Q,tag:""}]);
PrivateKeycrypto.PublicKeycrypto.SignerOptscrypto/ecdsa.Pcrypto/ecdsa.PrivateKeycrypto/ecdsa.PublicKeycrypto/ecdsa.Qcrypto/ecdsa.R	io.Reader H��H=$pkg.ecdsaSignature=$newType(0,$kindStruct,"ecdsa.ecdsaSignature","ecdsaSignature","crypto/ecdsa",function(R_,S_){this.$val=this;if(arguments.length===0){this.R=Q.nil;this.S=Q.nil;return;}this.R=R_;this.S=S_;});ZH.init([{prop:"R",name:"R",pkg:"",typ:Q,tag:""},{prop:"S",name:"S",pkg:"",typ:Q,tag:""}]);ecdsaSignaturecrypto/ecdsa.Qcrypto/ecdsa.ecdsaSignature PP=$sliceType($Uint8);P QQ=$ptrType(E.Int);Qmath/big.Int RR=$ptrType(G);Rcrypto/ecdsa.PrivateKey Ione 1    I=new E.Int.ptr().SetInt64(new $Int64(0,1));crypto/ecdsa.onemath/big.Int !(*crypto/ecdsa.PrivateKey).Public��G.ptr.prototype.Public=function(){var $ptr,a;$ptr={};  _a=this;      �return a.PublicKey;    };G.prototype.Public=function(){return this.$val.Public();};
PrivateKeycrypto/ecdsa.PrivateKey (*crypto/ecdsa.PrivateKey).Sign��G.ptr.prototype.Sign=function $b(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};  �d=this;      �f=N(a,d,b);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];h=e[1];i=e[2];  "    if(!($interfaceIsEqual(i,$ifaceNil))){  4return[P.nil,i];    }  Ik=C.Marshal((j=new H.ptr(g,h),new j.constructor.elem(j)));$s=2;case 2:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}return k;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Sign=function(a,b,c){return this.$val.Sign(a,b,c);};
PrivateKeycrypto/ecdsa.Pcrypto/ecdsa.PrivateKeycrypto/ecdsa.Signcrypto/ecdsa.ecdsaSignatureencoding/asn1.Marshal crypto/ecdsa.randFieldElementJ��J=function $b(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};c=Q.nil;d=$ifaceNil;      oe=a.Params();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;  �h=$makeSlice(P,((g=f.BitSize/8,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero"))+8>>0));  �j=D.ReadFull(b,h);$s=2;case 2:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;d=i[1];  �    if(!($interfaceIsEqual(d,$ifaceNil))){  �return[c,d];    }  �c=new E.Int.ptr().SetBytes(h);  k=new E.Int.ptr().Sub(f.N,I);  -c.Mod(c,k);  :c.Add(c,I);  Ireturn[c,d];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};randFieldElementcrypto/ecdsa.Pcrypto/ecdsa.Qcrypto/ecdsa.onecrypto/ecdsa.randFieldElementio.ReadFullmath/big.Int crypto/ecdsa.GenerateKeyK�nK=$pkg.GenerateKey=function $b(a,b){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};c=R.nil;d=$ifaceNil;      �f=J(a,b);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];d=e[1];      if(!($interfaceIsEqual(d,$ifaceNil))){  return[c,d];    }  "c=new G.ptr();  :c.PublicKey.Curve=a;  Tc.D=g;  `i=a.ScalarBaseMult(g.Bytes());$s=2;case 2:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;c.PublicKey.X=h[0];c.PublicKey.Y=h[1];  �return[c,d];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};GenerateKeycrypto/ecdsa.GenerateKeycrypto/ecdsa.PrivateKeycrypto/ecdsa.Rcrypto/ecdsa.randFieldElement crypto/ecdsa.hashToIntL��L=function $b(a,b){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};      
c=b.Params();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c.N.BitLen();$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  
�g=(f=((e+7>>0))/8,(f===f&&f!==1/0&&f!==-1/0)?f>>0:$throwRuntimeError("integer divide by zero"));  
�    if(a.$length>g){  
�a=$subslice(a,0,g);    }  h=new E.Int.ptr().SetBytes(a);  &i=(a.$length*8>>0)-e>>0;  I    if(i>0){  [h.Rsh(h,(i>>>0));    }  zreturn h;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};	hashToIntcrypto/ecdsa.hashToIntmath/big.Int crypto/ecdsa.fermatInverseM��M=function(a,b){var $ptr,a,b,c,d;$ptr={};      �c=E.NewInt(new $Int64(0,2));  �d=new E.Int.ptr().Sub(b,c);  �return new E.Int.ptr().Exp(a,d,b);    };fermatInversecrypto/ecdsa.fermatInversemath/big.Intmath/big.NewInt crypto/ecdsa.SignN�N=$pkg.Sign=function $b(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};d=Q.nil;e=Q.nil;f=$ifaceNil;      �g=b.PublicKey.Curve;  �h=g.Params();$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=h.N;  �  �j=Q.nil;k=Q.nil;l=j;m=k;  �case 2:  �case 4:  �o=J(g,a);$s=6;case 6:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}n=o;l=n[0];f=n[1];       if(!($interfaceIsEqual(f,$ifaceNil))){  d=Q.nil;   return[d,e,f];    }  0m=M(l,i);  Nq=b.PublicKey.Curve.ScalarBaseMult(l.Bytes());$s=7;case 7:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}p=q;d=p[0];  }d.Mod(d,i);  �    if(!((d.Sign()===0))){  �$s=5;continue;    }    $s=4;continue;case 5:  �r=L(c,g);$s=8;case 8:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}s=r;  �e=new E.Int.ptr().Mul(b.D,d);  �e.Add(e,s);  �e.Mul(e,m);  e.Mod(e,i);      if(!((e.Sign()===0))){  4$s=3;continue;    }    $s=2;continue;case 3:  Creturn[d,e,f];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.$s=$s;$f.$r=$r;return $f;};Signcrypto/ecdsa.Qcrypto/ecdsa.Signcrypto/ecdsa.fermatInversecrypto/ecdsa.hashToIntcrypto/ecdsa.randFieldElementmath/big.Int crypto/ecdsa.VerifyO�ZO=$pkg.Verify=function $b(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$ptr={};      )e=a.Curve;  9f=e.Params();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f.N;  M    if((c.Sign()===0)||(d.Sign()===0)){  sreturn false;    }  �    if(c.Cmp(g)>=0||d.Cmp(g)>=0){  �return false;    }  �h=L(b,e);$s=2;case 2:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=h;  �j=new E.Int.ptr().ModInverse(d,g);  �k=i.Mul(i,j);  k.Mod(k,g);  l=j.Mul(c,j);  .l.Mod(l,g);  >n=e.ScalarBaseMult(k.Bytes());$s=3;case 3:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;o=m[0];p=m[1];  fr=e.ScalarMult(a.X,a.Y,l.Bytes());$s=4;case 4:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}q=r;s=q[0];t=q[1];  �v=e.Add(o,p,s,t);$s=5;case 5:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;w=u[0];x=u[1];  �    if((w.Sign()===0)&&(x.Sign()===0)){  �return false;    }  �w.Mod(w,g);  �return w.Cmp(c)===0;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.$s=$s;$f.$r=$r;return $f;};Verifycrypto/ecdsa.Verifycrypto/ecdsa.hashToIntmath/big.Int ��{"Base":4883,"Files":[{"Name":"/usr/local/go/src/crypto/ecdsa/ecdsa.go","Base":1,"Size":4881,"Lines":[0,55,109,159,160,239,265,279,280,295,350,396,420,476,477,486,496,515,532,538,550,552,553,598,622,638,653,655,656,702,727,738,750,752,753,782,797,799,800,856,908,932,934,935,1009,1087,1164,1177,1276,1312,1329,1347,1350,1351,1394,1396,1397,1432,1433,1512,1563,1645,1667,1706,1737,1754,1763,1766,1767,1797,1835,1848,1863,1871,1873,1874,1930,2013,2050,2067,2076,2079,2080,2104,2130,2142,2208,2216,2218,2219,2296,2371,2449,2524,2601,2628,2685,2721,2756,2785,2812,2815,2816,2852,2887,2904,2933,2936,2948,2950,2951,3028,3106,3177,3215,3260,3282,3319,3359,3361,3362,3442,3520,3599,3608,3694,3714,3741,3760,3761,3783,3790,3798,3836,3855,3867,3878,3883,3884,3914,3961,3976,3998,4008,4013,4017,4018,4044,4078,4092,4109,4123,4144,4153,4157,4160,4161,4169,4171,4172,4252,4308,4371,4391,4407,4426,4427,4464,4479,4482,4519,4534,4537,4562,4598,4599,4618,4633,4652,4667,4668,4708,4758,4789,4826,4841,4844,4857,4879],"Infos":null}]}
 