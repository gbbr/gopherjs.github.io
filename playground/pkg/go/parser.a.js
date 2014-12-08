0�m�	go/parser��package parser
import bytes "bytes"
import errors "errors"
import ast "go/ast"
import token "go/token"
import io "io"
import ioutil "io/ioutil"
import os "os"
import filepath "path/filepath"
import strings "strings"
import fmt "fmt"
import scanner "go/scanner"
import strconv "strconv"
import unicode "unicode"
const @"".AllErrors @"".Mode = 0x20
const @"".DeclarationErrors @"".Mode = 0x10
const @"".ImportsOnly @"".Mode = 0x2
type @"".Mode uint
const @"".PackageClauseOnly @"".Mode = 0x1
const @"".ParseComments @"".Mode = 0x4
func @"".ParseDir(@"".fset *@"go/token".FileSet, @"".path string, @"".filter func (? @"os".FileInfo) (? bool), @"".mode @"".Mode) (@"".pkgs map[string]*@"go/ast".Package, @"".first error)
func @"".ParseExpr(@"".x string) (? @"go/ast".Expr, ? error)
func @"".ParseFile(@"".fset *@"go/token".FileSet, @"".filename string, @"".src interface {  }, @"".mode @"".Mode) (@"".f *@"go/ast".File, @"".err error)
const @"".SpuriousErrors @"".Mode = 0x20
const @"".Trace @"".Mode = 0x8
type @"".bailout struct {  }
type @"".parseSpecFunction func (@"".doc *@"go/ast".CommentGroup, @"".keyword @"go/token".Token, @"".iota int) (? @"go/ast".Spec)
type @"".parser struct { @"".file *@"go/token".File; @"".errors @"go/scanner".ErrorList; @"".scanner @"go/scanner".Scanner; @"".mode @"".Mode; @"".trace bool; @"".indent int; @"".comments []*@"go/ast".CommentGroup; @"".leadComment *@"go/ast".CommentGroup; @"".lineComment *@"go/ast".CommentGroup; @"".pos @"go/token".Pos; @"".tok @"go/token".Token; @"".lit string; @"".syncPos @"go/token".Pos; @"".syncCnt int; @"".exprLev int; @"".inRhs bool; @"".pkgScope *@"go/ast".Scope; @"".topScope *@"go/ast".Scope; @"".unresolved []*@"go/ast".Ident; @"".imports []*@"go/ast".ImportSpec; @"".labelScope *@"go/ast".Scope; @"".targetStack [][]*@"go/ast".Ident }
func (? *@"".parser) @"".atComma(@"".context string) (? bool)
func (? *@"".parser) @"".checkExpr(@"".x @"go/ast".Expr) (? @"go/ast".Expr)
func (? *@"".parser) @"".checkExprOrType(@"".x @"go/ast".Expr) (? @"go/ast".Expr)
func (? *@"".parser) @"".closeLabelScope() ()
func (? *@"".parser) @"".closeScope() ()
func (? *@"".parser) @"".consumeComment() (@"".comment *@"go/ast".Comment, @"".endline int)
func (? *@"".parser) @"".consumeCommentGroup(@"".n int) (@"".comments *@"go/ast".CommentGroup, @"".endline int)
func (? *@"".parser) @"".declare(@"".decl interface {  }, @"".data interface {  }, @"".scope *@"go/ast".Scope, @"".kind @"go/ast".ObjKind, @"".idents ...*@"go/ast".Ident) ()
func (? *@"".parser) @"".error(@"".pos @"go/token".Pos, @"".msg string) ()
func (? *@"".parser) @"".errorExpected(@"".pos @"go/token".Pos, @"".msg string) ()
func (? *@"".parser) @"".expect(@"".tok @"go/token".Token) (? @"go/token".Pos)
func (? *@"".parser) @"".expectClosing(@"".tok @"go/token".Token, @"".context string) (? @"go/token".Pos)
func (? *@"".parser) @"".expectSemi() ()
func (? *@"".parser) @"".init(@"".fset *@"go/token".FileSet, @"".filename string, @"".src []byte, @"".mode @"".Mode) ()
func (? *@"".parser) @"".makeExpr(@"".s @"go/ast".Stmt, @"".kind string) (? @"go/ast".Expr)
func (? *@"".parser) @"".makeIdentList(@"".list []@"go/ast".Expr) (? []*@"go/ast".Ident)
func (? *@"".parser) @"".next() ()
func (? *@"".parser) @"".next0() ()
func (? *@"".parser) @"".openLabelScope() ()
func (? *@"".parser) @"".openScope() ()
func (? *@"".parser) @"".parseArrayType() (? @"go/ast".Expr)
func (? *@"".parser) @"".parseBinaryExpr(@"".lhs bool, @"".prec1 int) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseBlockStmt() (? *@"go/ast".BlockStmt)
func (? *@"".parser) @"".parseBody(@"".scope *@"go/ast".Scope) (? *@"go/ast".BlockStmt)
func (? *@"".parser) @"".parseBranchStmt(@"".tok @"go/token".Token) (? *@"go/ast".BranchStmt)
func (? *@"".parser) @"".parseCallExpr(@"".callType string) (? *@"go/ast".CallExpr)
func (? *@"".parser) @"".parseCallOrConversion(@"".fun @"go/ast".Expr) (? *@"go/ast".CallExpr)
func (? *@"".parser) @"".parseCaseClause(@"".typeSwitch bool) (? *@"go/ast".CaseClause)
func (? *@"".parser) @"".parseChanType() (? *@"go/ast".ChanType)
func (? *@"".parser) @"".parseCommClause() (? *@"go/ast".CommClause)
func (? *@"".parser) @"".parseDecl(@"".sync func (? *@"".parser) ()) (? @"go/ast".Decl)
func (? *@"".parser) @"".parseDeferStmt() (? @"go/ast".Stmt)
func (? *@"".parser) @"".parseElement(@"".keyOk bool) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseElementList() (@"".list []@"go/ast".Expr)
func (? *@"".parser) @"".parseExpr(@"".lhs bool) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseExprList(@"".lhs bool) (@"".list []@"go/ast".Expr)
func (? *@"".parser) @"".parseFieldDecl(@"".scope *@"go/ast".Scope) (? *@"go/ast".Field)
func (? *@"".parser) @"".parseFile() (? *@"go/ast".File)
func (? *@"".parser) @"".parseForStmt() (? @"go/ast".Stmt)
func (? *@"".parser) @"".parseFuncDecl() (? *@"go/ast".FuncDecl)
func (? *@"".parser) @"".parseFuncType() (? *@"go/ast".FuncType, ? *@"go/ast".Scope)
func (? *@"".parser) @"".parseFuncTypeOrLit() (? @"go/ast".Expr)
func (? *@"".parser) @"".parseGenDecl(@"".keyword @"go/token".Token, @"".f @"".parseSpecFunction) (? *@"go/ast".GenDecl)
func (? *@"".parser) @"".parseGoStmt() (? @"go/ast".Stmt)
func (? *@"".parser) @"".parseIdent() (? *@"go/ast".Ident)
func (? *@"".parser) @"".parseIdentList() (@"".list []*@"go/ast".Ident)
func (? *@"".parser) @"".parseIfStmt() (? *@"go/ast".IfStmt)
func (? *@"".parser) @"".parseImportSpec(@"".doc *@"go/ast".CommentGroup, _ @"go/token".Token, _ int) (? @"go/ast".Spec)
func (? *@"".parser) @"".parseIndexOrSlice(@"".x @"go/ast".Expr) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseInterfaceType() (? *@"go/ast".InterfaceType)
func (? *@"".parser) @"".parseLhsList() (? []@"go/ast".Expr)
func (? *@"".parser) @"".parseLiteralValue(@"".typ @"go/ast".Expr) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseMapType() (? *@"go/ast".MapType)
func (? *@"".parser) @"".parseMethodSpec(@"".scope *@"go/ast".Scope) (? *@"go/ast".Field)
func (? *@"".parser) @"".parseOperand(@"".lhs bool) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseParameterList(@"".scope *@"go/ast".Scope, @"".ellipsisOk bool) (@"".params []*@"go/ast".Field)
func (? *@"".parser) @"".parseParameters(@"".scope *@"go/ast".Scope, @"".ellipsisOk bool) (? *@"go/ast".FieldList)
func (? *@"".parser) @"".parsePointerType() (? *@"go/ast".StarExpr)
func (? *@"".parser) @"".parsePrimaryExpr(@"".lhs bool) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseReceiver(@"".scope *@"go/ast".Scope) (? *@"go/ast".FieldList)
func (? *@"".parser) @"".parseResult(@"".scope *@"go/ast".Scope) (? *@"go/ast".FieldList)
func (? *@"".parser) @"".parseReturnStmt() (? *@"go/ast".ReturnStmt)
func (? *@"".parser) @"".parseRhs() (? @"go/ast".Expr)
func (? *@"".parser) @"".parseRhsList() (? []@"go/ast".Expr)
func (? *@"".parser) @"".parseRhsOrType() (? @"go/ast".Expr)
func (? *@"".parser) @"".parseSelectStmt() (? *@"go/ast".SelectStmt)
func (? *@"".parser) @"".parseSelector(@"".x @"go/ast".Expr) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseSignature(@"".scope *@"go/ast".Scope) (@"".params *@"go/ast".FieldList, @"".results *@"go/ast".FieldList)
func (? *@"".parser) @"".parseSimpleStmt(@"".mode int) (? @"go/ast".Stmt, ? bool)
func (? *@"".parser) @"".parseStmt() (@"".s @"go/ast".Stmt)
func (? *@"".parser) @"".parseStmtList() (@"".list []@"go/ast".Stmt)
func (? *@"".parser) @"".parseStructType() (? *@"go/ast".StructType)
func (? *@"".parser) @"".parseSwitchStmt() (? @"go/ast".Stmt)
func (? *@"".parser) @"".parseType() (? @"go/ast".Expr)
func (? *@"".parser) @"".parseTypeAssertion(@"".x @"go/ast".Expr) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseTypeList() (@"".list []@"go/ast".Expr)
func (? *@"".parser) @"".parseTypeName() (? @"go/ast".Expr)
func (? *@"".parser) @"".parseTypeSpec(@"".doc *@"go/ast".CommentGroup, _ @"go/token".Token, _ int) (? @"go/ast".Spec)
func (? *@"".parser) @"".parseUnaryExpr(@"".lhs bool) (? @"go/ast".Expr)
func (? *@"".parser) @"".parseValueSpec(@"".doc *@"go/ast".CommentGroup, @"".keyword @"go/token".Token, @"".iota int) (? @"go/ast".Spec)
func (? *@"".parser) @"".parseVarList(@"".isParam bool) (@"".list []@"go/ast".Expr, @"".typ @"go/ast".Expr)
func (? *@"".parser) @"".parseVarType(@"".isParam bool) (? @"go/ast".Expr)
func (? *@"".parser) @"".printTrace(@"".a ...interface {  }) ()
func (? *@"".parser) @"".resolve(@"".x @"go/ast".Expr) ()
func (? *@"".parser) @"".safePos(@"".pos @"go/token".Pos) (@"".res @"go/token".Pos)
func (? *@"".parser) @"".shortVarDecl(@"".decl *@"go/ast".AssignStmt, @"".list []@"go/ast".Expr) ()
func (? *@"".parser) @"".tokPrec() (? @"go/token".Token, ? int)
func (? *@"".parser) @"".tryIdentOrType() (? @"go/ast".Expr)
func (? *@"".parser) @"".tryResolve(@"".x @"go/ast".Expr, @"".collectUnresolved bool) ()
func (? *@"".parser) @"".tryType() (? @"go/ast".Expr)
func (? *@"".parser) @"".tryVarType(@"".isParam bool) (? @"go/ast".Expr)
import sync "sync"
type @"go/token".FileSet struct { @"go/token".mutex @"sync".RWMutex; @"go/token".base int; @"go/token".files []*@"go/token".File; @"go/token".last *@"go/token".File }
func (? *@"go/token".FileSet) @"go/token".AddFile(@"go/token".filename string, @"go/token".base int, @"go/token".size int) (? *@"go/token".File)
func (? *@"go/token".FileSet) @"go/token".Base() (? int)
func (? *@"go/token".FileSet) @"go/token".File(@"go/token".p @"go/token".Pos) (@"go/token".f *@"go/token".File)
func (? *@"go/token".FileSet) @"go/token".Iterate(@"go/token".f func (? *@"go/token".File) (? bool)) ()
func (? *@"go/token".FileSet) @"go/token".Position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".FileSet) @"go/token".Read(@"go/token".decode func (? interface {  }) (? error)) (? error)
func (? *@"go/token".FileSet) @"go/token".Write(@"go/token".encode func (? interface {  }) (? error)) (? error)
func (? *@"go/token".FileSet) @"go/token".file(@"go/token".p @"go/token".Pos) (? *@"go/token".File)
import time "time"
type @"os".FileInfo interface { @"os".IsDir() (? bool); @"os".ModTime() (? @"time".Time); @"os".Mode() (? @"os".FileMode); @"os".Name() (? string); @"os".Size() (? int64); @"os".Sys() (? interface {  }) }
type @"go/ast".Package struct { @"go/ast".Name string; @"go/ast".Scope *@"go/ast".Scope; @"go/ast".Imports map[string]*@"go/ast".Object; @"go/ast".Files map[string]*@"go/ast".File }
func (? *@"go/ast".Package) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Package) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".Expr interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".exprNode() () }
type @"go/ast".File struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Package @"go/token".Pos; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Decls []@"go/ast".Decl; @"go/ast".Scope *@"go/ast".Scope; @"go/ast".Imports []*@"go/ast".ImportSpec; @"go/ast".Unresolved []*@"go/ast".Ident; @"go/ast".Comments []*@"go/ast".CommentGroup }
func (? *@"go/ast".File) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".File) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".CommentGroup struct { @"go/ast".List []*@"go/ast".Comment }
func (? *@"go/ast".CommentGroup) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".CommentGroup) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".CommentGroup) @"go/ast".Text() (? string)
type @"go/token".Token int
func (? @"go/token".Token) @"go/token".IsKeyword() (? bool)
func (? @"go/token".Token) @"go/token".IsLiteral() (? bool)
func (? @"go/token".Token) @"go/token".IsOperator() (? bool)
func (? @"go/token".Token) @"go/token".Precedence() (? int)
func (? @"go/token".Token) @"go/token".String() (? string)
func (? *@"go/token".Token) @"go/token".IsKeyword() (? bool)
func (? *@"go/token".Token) @"go/token".IsLiteral() (? bool)
func (? *@"go/token".Token) @"go/token".IsOperator() (? bool)
func (? *@"go/token".Token) @"go/token".Precedence() (? int)
func (? *@"go/token".Token) @"go/token".String() (? string)
type @"go/ast".Spec interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".specNode() () }
type @"go/token".File struct { @"go/token".set *@"go/token".FileSet; @"go/token".name string; @"go/token".base int; @"go/token".size int; @"go/token".lines []int; @"go/token".infos []@"go/token".lineInfo }
func (? *@"go/token".File) @"go/token".AddLine(@"go/token".offset int) ()
func (? *@"go/token".File) @"go/token".AddLineInfo(@"go/token".offset int, @"go/token".filename string, @"go/token".line int) ()
func (? *@"go/token".File) @"go/token".Base() (? int)
func (? *@"go/token".File) @"go/token".Line(@"go/token".p @"go/token".Pos) (? int)
func (? *@"go/token".File) @"go/token".LineCount() (? int)
func (? *@"go/token".File) @"go/token".MergeLine(@"go/token".line int) ()
func (? *@"go/token".File) @"go/token".Name() (? string)
func (? *@"go/token".File) @"go/token".Offset(@"go/token".p @"go/token".Pos) (? int)
func (? *@"go/token".File) @"go/token".Pos(@"go/token".offset int) (? @"go/token".Pos)
func (? *@"go/token".File) @"go/token".Position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".File) @"go/token".SetLines(@"go/token".lines []int) (? bool)
func (? *@"go/token".File) @"go/token".SetLinesForContent(@"go/token".content []byte) ()
func (? *@"go/token".File) @"go/token".Size() (? int)
func (? *@"go/token".File) @"go/token".info(@"go/token".offset int) (@"go/token".filename string, @"go/token".line int, @"go/token".column int)
func (? *@"go/token".File) @"go/token".position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
type @"go/scanner".ErrorList []*@"go/scanner".Error
func (? @"go/scanner".ErrorList) @"go/scanner".Err() (? error)
func (? @"go/scanner".ErrorList) @"go/scanner".Error() (? string)
func (? @"go/scanner".ErrorList) @"go/scanner".Len() (? int)
func (? @"go/scanner".ErrorList) @"go/scanner".Less(@"go/scanner".i int, @"go/scanner".j int) (? bool)
func (? @"go/scanner".ErrorList) @"go/scanner".Sort() ()
func (? @"go/scanner".ErrorList) @"go/scanner".Swap(@"go/scanner".i int, @"go/scanner".j int) ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Add(@"go/scanner".pos @"go/token".Position, @"go/scanner".msg string) ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Err() (? error)
func (? *@"go/scanner".ErrorList) @"go/scanner".Error() (? string)
func (? *@"go/scanner".ErrorList) @"go/scanner".Len() (? int)
func (? *@"go/scanner".ErrorList) @"go/scanner".Less(@"go/scanner".i int, @"go/scanner".j int) (? bool)
func (? *@"go/scanner".ErrorList) @"go/scanner".RemoveMultiples() ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Reset() ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Sort() ()
func (? *@"go/scanner".ErrorList) @"go/scanner".Swap(@"go/scanner".i int, @"go/scanner".j int) ()
type @"go/scanner".Scanner struct { @"go/scanner".file *@"go/token".File; @"go/scanner".dir string; @"go/scanner".src []byte; @"go/scanner".err @"go/scanner".ErrorHandler; @"go/scanner".mode @"go/scanner".Mode; @"go/scanner".ch rune; @"go/scanner".offset int; @"go/scanner".rdOffset int; @"go/scanner".lineOffset int; @"go/scanner".insertSemi bool; @"go/scanner".ErrorCount int }
func (? *@"go/scanner".Scanner) @"go/scanner".Init(@"go/scanner".file *@"go/token".File, @"go/scanner".src []byte, @"go/scanner".err @"go/scanner".ErrorHandler, @"go/scanner".mode @"go/scanner".Mode) ()
func (? *@"go/scanner".Scanner) @"go/scanner".Scan() (@"go/scanner".pos @"go/token".Pos, @"go/scanner".tok @"go/token".Token, @"go/scanner".lit string)
func (? *@"go/scanner".Scanner) @"go/scanner".error(@"go/scanner".offs int, @"go/scanner".msg string) ()
func (? *@"go/scanner".Scanner) @"go/scanner".findLineEnd() (? bool)
func (? *@"go/scanner".Scanner) @"go/scanner".interpretLineComment(@"go/scanner".text []byte) ()
func (? *@"go/scanner".Scanner) @"go/scanner".next() ()
func (? *@"go/scanner".Scanner) @"go/scanner".scanComment() (? string)
func (? *@"go/scanner".Scanner) @"go/scanner".scanEscape(@"go/scanner".quote rune) (? bool)
func (? *@"go/scanner".Scanner) @"go/scanner".scanIdentifier() (? string)
func (? *@"go/scanner".Scanner) @"go/scanner".scanMantissa(@"go/scanner".base int) ()
func (? *@"go/scanner".Scanner) @"go/scanner".scanNumber(@"go/scanner".seenDecimalPoint bool) (? @"go/token".Token, ? string)
func (? *@"go/scanner".Scanner) @"go/scanner".scanRawString() (? string)
func (? *@"go/scanner".Scanner) @"go/scanner".scanRune() (? string)
func (? *@"go/scanner".Scanner) @"go/scanner".scanString() (? string)
func (? *@"go/scanner".Scanner) @"go/scanner".skipWhitespace() ()
func (? *@"go/scanner".Scanner) @"go/scanner".switch2(@"go/scanner".tok0 @"go/token".Token, @"go/scanner".tok1 @"go/token".Token) (? @"go/token".Token)
func (? *@"go/scanner".Scanner) @"go/scanner".switch3(@"go/scanner".tok0 @"go/token".Token, @"go/scanner".tok1 @"go/token".Token, @"go/scanner".ch2 rune, @"go/scanner".tok2 @"go/token".Token) (? @"go/token".Token)
func (? *@"go/scanner".Scanner) @"go/scanner".switch4(@"go/scanner".tok0 @"go/token".Token, @"go/scanner".tok1 @"go/token".Token, @"go/scanner".ch2 rune, @"go/scanner".tok2 @"go/token".Token, @"go/scanner".tok3 @"go/token".Token) (? @"go/token".Token)
type @"go/token".Pos int
func (? @"go/token".Pos) @"go/token".IsValid() (? bool)
func (? *@"go/token".Pos) @"go/token".IsValid() (? bool)
type @"go/ast".Scope struct { @"go/ast".Outer *@"go/ast".Scope; @"go/ast".Objects map[string]*@"go/ast".Object }
func (? *@"go/ast".Scope) @"go/ast".Insert(@"go/ast".obj *@"go/ast".Object) (@"go/ast".alt *@"go/ast".Object)
func (? *@"go/ast".Scope) @"go/ast".Lookup(@"go/ast".name string) (? *@"go/ast".Object)
func (? *@"go/ast".Scope) @"go/ast".String() (? string)
type @"go/ast".Ident struct { @"go/ast".NamePos @"go/token".Pos; @"go/ast".Name string; @"go/ast".Obj *@"go/ast".Object }
func (? *@"go/ast".Ident) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Ident) @"go/ast".IsExported() (? bool)
func (? *@"go/ast".Ident) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".Ident) @"go/ast".String() (? string)
func (? *@"go/ast".Ident) @"go/ast".exprNode() ()
type @"go/ast".ImportSpec struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Path *@"go/ast".BasicLit; @"go/ast".Comment *@"go/ast".CommentGroup; @"go/ast".EndPos @"go/token".Pos }
func (? *@"go/ast".ImportSpec) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".ImportSpec) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".ImportSpec) @"go/ast".specNode() ()
type @"go/ast".Comment struct { @"go/ast".Slash @"go/token".Pos; @"go/ast".Text string }
func (? *@"go/ast".Comment) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Comment) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".ObjKind int
func (? @"go/ast".ObjKind) @"go/ast".String() (? string)
func (? *@"go/ast".ObjKind) @"go/ast".String() (? string)
type @"go/ast".Stmt interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".stmtNode() () }
type @"go/ast".BlockStmt struct { @"go/ast".Lbrace @"go/token".Pos; @"go/ast".List []@"go/ast".Stmt; @"go/ast".Rbrace @"go/token".Pos }
func (? *@"go/ast".BlockStmt) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".BlockStmt) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".BlockStmt) @"go/ast".stmtNode() ()
type @"go/ast".BranchStmt struct { @"go/ast".TokPos @"go/token".Pos; @"go/ast".Tok @"go/token".Token; @"go/ast".Label *@"go/ast".Ident }
func (? *@"go/ast".BranchStmt) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".BranchStmt) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".BranchStmt) @"go/ast".stmtNode() ()
type @"go/ast".CallExpr struct { @"go/ast".Fun @"go/ast".Expr; @"go/ast".Lparen @"go/token".Pos; @"go/ast".Args []@"go/ast".Expr; @"go/ast".Ellipsis @"go/token".Pos; @"go/ast".Rparen @"go/token".Pos }
func (? *@"go/ast".CallExpr) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".CallExpr) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".CallExpr) @"go/ast".exprNode() ()
type @"go/ast".CaseClause struct { @"go/ast".Case @"go/token".Pos; @"go/ast".List []@"go/ast".Expr; @"go/ast".Colon @"go/token".Pos; @"go/ast".Body []@"go/ast".Stmt }
func (? *@"go/ast".CaseClause) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".CaseClause) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".CaseClause) @"go/ast".stmtNode() ()
type @"go/ast".ChanType struct { @"go/ast".Begin @"go/token".Pos; @"go/ast".Arrow @"go/token".Pos; @"go/ast".Dir @"go/ast".ChanDir; @"go/ast".Value @"go/ast".Expr }
func (? *@"go/ast".ChanType) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".ChanType) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".ChanType) @"go/ast".exprNode() ()
type @"go/ast".CommClause struct { @"go/ast".Case @"go/token".Pos; @"go/ast".Comm @"go/ast".Stmt; @"go/ast".Colon @"go/token".Pos; @"go/ast".Body []@"go/ast".Stmt }
func (? *@"go/ast".CommClause) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".CommClause) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".CommClause) @"go/ast".stmtNode() ()
type @"go/ast".Decl interface { @"go/ast".End() (? @"go/token".Pos); @"go/ast".Pos() (? @"go/token".Pos); @"go/ast".declNode() () }
type @"go/ast".Field struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Names []*@"go/ast".Ident; @"go/ast".Type @"go/ast".Expr; @"go/ast".Tag *@"go/ast".BasicLit; @"go/ast".Comment *@"go/ast".CommentGroup }
func (? *@"go/ast".Field) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".Field) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".FuncDecl struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".Recv *@"go/ast".FieldList; @"go/ast".Name *@"go/ast".Ident; @"go/ast".Type *@"go/ast".FuncType; @"go/ast".Body *@"go/ast".BlockStmt }
func (? *@"go/ast".FuncDecl) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".FuncDecl) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".FuncDecl) @"go/ast".declNode() ()
type @"go/ast".FuncType struct { @"go/ast".Func @"go/token".Pos; @"go/ast".Params *@"go/ast".FieldList; @"go/ast".Results *@"go/ast".FieldList }
func (? *@"go/ast".FuncType) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".FuncType) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".FuncType) @"go/ast".exprNode() ()
type @"go/ast".GenDecl struct { @"go/ast".Doc *@"go/ast".CommentGroup; @"go/ast".TokPos @"go/token".Pos; @"go/ast".Tok @"go/token".Token; @"go/ast".Lparen @"go/token".Pos; @"go/ast".Specs []@"go/ast".Spec; @"go/ast".Rparen @"go/token".Pos }
func (? *@"go/ast".GenDecl) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".GenDecl) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".GenDecl) @"go/ast".declNode() ()
type @"go/ast".IfStmt struct { @"go/ast".If @"go/token".Pos; @"go/ast".Init @"go/ast".Stmt; @"go/ast".Cond @"go/ast".Expr; @"go/ast".Body *@"go/ast".BlockStmt; @"go/ast".Else @"go/ast".Stmt }
func (? *@"go/ast".IfStmt) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".IfStmt) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".IfStmt) @"go/ast".stmtNode() ()
type @"go/ast".InterfaceType struct { @"go/ast".Interface @"go/token".Pos; @"go/ast".Methods *@"go/ast".FieldList; @"go/ast".Incomplete bool }
func (? *@"go/ast".InterfaceType) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".InterfaceType) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".InterfaceType) @"go/ast".exprNode() ()
type @"go/ast".MapType struct { @"go/ast".Map @"go/token".Pos; @"go/ast".Key @"go/ast".Expr; @"go/ast".Value @"go/ast".Expr }
func (? *@"go/ast".MapType) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".MapType) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".MapType) @"go/ast".exprNode() ()
type @"go/ast".FieldList struct { @"go/ast".Opening @"go/token".Pos; @"go/ast".List []*@"go/ast".Field; @"go/ast".Closing @"go/token".Pos }
func (? *@"go/ast".FieldList) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".FieldList) @"go/ast".NumFields() (? int)
func (? *@"go/ast".FieldList) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/ast".StarExpr struct { @"go/ast".Star @"go/token".Pos; @"go/ast".X @"go/ast".Expr }
func (? *@"go/ast".StarExpr) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".StarExpr) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".StarExpr) @"go/ast".exprNode() ()
type @"go/ast".ReturnStmt struct { @"go/ast".Return @"go/token".Pos; @"go/ast".Results []@"go/ast".Expr }
func (? *@"go/ast".ReturnStmt) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".ReturnStmt) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".ReturnStmt) @"go/ast".stmtNode() ()
type @"go/ast".SelectStmt struct { @"go/ast".Select @"go/token".Pos; @"go/ast".Body *@"go/ast".BlockStmt }
func (? *@"go/ast".SelectStmt) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".SelectStmt) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".SelectStmt) @"go/ast".stmtNode() ()
type @"go/ast".StructType struct { @"go/ast".Struct @"go/token".Pos; @"go/ast".Fields *@"go/ast".FieldList; @"go/ast".Incomplete bool }
func (? *@"go/ast".StructType) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".StructType) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".StructType) @"go/ast".exprNode() ()
type @"go/ast".AssignStmt struct { @"go/ast".Lhs []@"go/ast".Expr; @"go/ast".TokPos @"go/token".Pos; @"go/ast".Tok @"go/token".Token; @"go/ast".Rhs []@"go/ast".Expr }
func (? *@"go/ast".AssignStmt) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".AssignStmt) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".AssignStmt) @"go/ast".stmtNode() ()
type @"sync".RWMutex struct { @"sync".w @"sync".Mutex; @"sync".writerSem uint32; @"sync".readerSem uint32; @"sync".readerCount int32; @"sync".readerWait int32 }
func (? *@"sync".RWMutex) @"sync".Lock() ()
func (? *@"sync".RWMutex) @"sync".RLock() ()
func (? *@"sync".RWMutex) @"sync".RLocker() (? @"sync".Locker)
func (? *@"sync".RWMutex) @"sync".RUnlock() ()
func (? *@"sync".RWMutex) @"sync".Unlock() ()
type @"go/token".Position struct { @"go/token".Filename string; @"go/token".Offset int; @"go/token".Line int; @"go/token".Column int }
func (? @"go/token".Position) @"go/token".String() (? string)
func (? *@"go/token".Position) @"go/token".IsValid() (? bool)
func (? *@"go/token".Position) @"go/token".String() (? string)
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
type @"os".FileMode uint32
func (? @"os".FileMode) @"os".IsDir() (? bool)
func (? @"os".FileMode) @"os".IsRegular() (? bool)
func (? @"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? @"os".FileMode) @"os".String() (? string)
func (? *@"os".FileMode) @"os".IsDir() (? bool)
func (? *@"os".FileMode) @"os".IsRegular() (? bool)
func (? *@"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? *@"os".FileMode) @"os".String() (? string)
type @"go/ast".Object struct { @"go/ast".Kind @"go/ast".ObjKind; @"go/ast".Name string; @"go/ast".Decl interface {  }; @"go/ast".Data interface {  }; @"go/ast".Type interface {  } }
func (? *@"go/ast".Object) @"go/ast".Pos() (? @"go/token".Pos)
type @"go/token".lineInfo struct { @"go/token".Offset int; @"go/token".Filename string; @"go/token".Line int }
type @"go/scanner".Error struct { @"go/scanner".Pos @"go/token".Position; @"go/scanner".Msg string }
func (? @"go/scanner".Error) @"go/scanner".Error() (? string)
func (? *@"go/scanner".Error) @"go/scanner".Error() (? string)
type @"go/scanner".ErrorHandler func (@"go/scanner".pos @"go/token".Position, @"go/scanner".msg string) ()
type @"go/scanner".Mode uint
type @"go/ast".BasicLit struct { @"go/ast".ValuePos @"go/token".Pos; @"go/ast".Kind @"go/token".Token; @"go/ast".Value string }
func (? *@"go/ast".BasicLit) @"go/ast".End() (? @"go/token".Pos)
func (? *@"go/ast".BasicLit) @"go/ast".Pos() (? @"go/token".Pos)
func (? *@"go/ast".BasicLit) @"go/ast".exprNode() ()
type @"go/ast".ChanDir int
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
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
0�github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesmathsyscallstringstimeosstrconvreflectfmtsortflagbufiotext/tabwriter
go/scannergo/ast	io/ioutil0��0
bytesA0errorsB0go/astC0
go/scannerK0strconvL0unicodeM0��a0] 0OEO=$pkg.Mode=$newType(4,"Uint","parser.Mode","Mode","go/parser",null); 0Mode0  0�. 0S�_S=$pkg.parser=$newType(0,"Struct","parser.parser","parser","go/parser",function(file_,errors_,scanner_,mode_,trace_,indent_,comments_,leadComment_,lineComment_,pos_,tok_,lit_,syncPos_,syncCnt_,exprLev_,inRhs_,pkgScope_,topScope_,unresolved_,imports_,labelScope_,targetStack_){this.$val=this;this.file=file_!==undefined?file_:($ptrType(D.File)).nil;this.errors=errors_!==undefined?errors_:K.ErrorList.nil;this.scanner=scanner_!==undefined?scanner_:new K.Scanner.Ptr();this.mode=mode_!==undefined?mode_:0;this.trace=trace_!==undefined?trace_:false;this.indent=indent_!==undefined?indent_:0;this.comments=comments_!==undefined?comments_:($sliceType(($ptrType(C.CommentGroup)))).nil;this.leadComment=leadComment_!==undefined?leadComment_:($ptrType(C.CommentGroup)).nil;this.lineComment=lineComment_!==undefined?lineComment_:($ptrType(C.CommentGroup)).nil;this.pos=pos_!==undefined?pos_:0;this.tok=tok_!==undefined?tok_:0;this.lit=lit_!==undefined?lit_:"";this.syncPos=syncPos_!==undefined?syncPos_:0;this.syncCnt=syncCnt_!==undefined?syncCnt_:0;this.exprLev=exprLev_!==undefined?exprLev_:0;this.inRhs=inRhs_!==undefined?inRhs_:false;this.pkgScope=pkgScope_!==undefined?pkgScope_:($ptrType(C.Scope)).nil;this.topScope=topScope_!==undefined?topScope_:($ptrType(C.Scope)).nil;this.unresolved=unresolved_!==undefined?unresolved_:($sliceType(($ptrType(C.Ident)))).nil;this.imports=imports_!==undefined?imports_:($sliceType(($ptrType(C.ImportSpec)))).nil;this.labelScope=labelScope_!==undefined?labelScope_:($ptrType(C.Scope)).nil;this.targetStack=targetStack_!==undefined?targetStack_:($sliceType(($sliceType(($ptrType(C.Ident)))))).nil;});�%t($ptrType(S)).methods=[["atComma","atComma","go/parser",$funcType([$String],[$Bool],false),-1],["checkExpr","checkExpr","go/parser",$funcType([C.Expr],[C.Expr],false),-1],["checkExprOrType","checkExprOrType","go/parser",$funcType([C.Expr],[C.Expr],false),-1],["closeLabelScope","closeLabelScope","go/parser",$funcType([],[],false),-1],["closeScope","closeScope","go/parser",$funcType([],[],false),-1],["consumeComment","consumeComment","go/parser",$funcType([],[($ptrType(C.Comment)),$Int],false),-1],["consumeCommentGroup","consumeCommentGroup","go/parser",$funcType([$Int],[($ptrType(C.CommentGroup)),$Int],false),-1],["declare","declare","go/parser",$funcType([$emptyInterface,$emptyInterface,($ptrType(C.Scope)),C.ObjKind,($sliceType(($ptrType(C.Ident))))],[],true),-1],["error","error","go/parser",$funcType([D.Pos,$String],[],false),-1],["errorExpected","errorExpected","go/parser",$funcType([D.Pos,$String],[],false),-1],["expect","expect","go/parser",$funcType([D.Token],[D.Pos],false),-1],["expectClosing","expectClosing","go/parser",$funcType([D.Token,$String],[D.Pos],false),-1],["expectSemi","expectSemi","go/parser",$funcType([],[],false),-1],["init","init","go/parser",$funcType([($ptrType(D.FileSet)),$String,($sliceType($Uint8)),O],[],false),-1],["makeExpr","makeExpr","go/parser",$funcType([C.Stmt,$String],[C.Expr],false),-1],["makeIdentList","makeIdentList","go/parser",$funcType([($sliceType(C.Expr))],[($sliceType(($ptrType(C.Ident))))],false),-1],["next","next","go/parser",$funcType([],[],false),-1],["next0","next0","go/parser",$funcType([],[],false),-1],["openLabelScope","openLabelScope","go/parser",$funcType([],[],false),-1],["openScope","openScope","go/parser",$funcType([],[],false),-1],["parseArrayType","parseArrayType","go/parser",$funcType([],[C.Expr],false),-1],["parseBinaryExpr","parseBinaryExpr","go/parser",$funcType([$Bool,$Int],[C.Expr],false),-1],["parseBlockStmt","parseBlockStmt","go/parser",$funcType([],[($ptrType(C.BlockStmt))],false),-1],["parseBody","parseBody","go/parser",$funcType([($ptrType(C.Scope))],[($ptrType(C.BlockStmt))],false),-1],["parseBranchStmt","parseBranchStmt","go/parser",$funcType([D.Token],[($ptrType(C.BranchStmt))],false),-1],["parseCallExpr","parseCallExpr","go/parser",$funcType([$String],[($ptrType(C.CallExpr))],false),-1],["parseCallOrConversion","parseCallOrConversion","go/parser",$funcType([C.Expr],[($ptrType(C.CallExpr))],false),-1],["parseCaseClause","parseCaseClause","go/parser",$funcType([$Bool],[($ptrType(C.CaseClause))],false),-1],["parseChanType","parseChanType","go/parser",$funcType([],[($ptrType(C.ChanType))],false),-1],["parseCommClause","parseCommClause","go/parser",$funcType([],[($ptrType(C.CommClause))],false),-1],["parseDecl","parseDecl","go/parser",$funcType([($funcType([($ptrType(S))],[],false))],[C.Decl],false),-1],["parseDeferStmt","parseDeferStmt","go/parser",$funcType([],[C.Stmt],false),-1],["parseElement","parseElement","go/parser",$funcType([$Bool],[C.Expr],false),-1],["parseElementList","parseElementList","go/parser",$funcType([],[($sliceType(C.Expr))],false),-1],["parseExpr","parseExpr","go/parser",$funcType([$Bool],[C.Expr],false),-1],["parseExprList","parseExprList","go/parser",$funcType([$Bool],[($sliceType(C.Expr))],false),-1],["parseFieldDecl","parseFieldDecl","go/parser",$funcType([($ptrType(C.Scope))],[($ptrType(C.Field))],false),-1],["parseFile","parseFile","go/parser",$funcType([],[($ptrType(C.File))],false),-1],["parseForStmt","parseForStmt","go/parser",$funcType([],[C.Stmt],false),-1],["parseFuncDecl","parseFuncDecl","go/parser",$funcType([],[($ptrType(C.FuncDecl))],false),-1],["parseFuncType","parseFuncType","go/parser",$funcType([],[($ptrType(C.FuncType)),($ptrType(C.Scope))],false),-1],["parseFuncTypeOrLit","parseFuncTypeOrLit","go/parser",$funcType([],[C.Expr],false),-1],["parseGenDecl","parseGenDecl","go/parser",$funcType([D.Token,AG],[($ptrType(C.GenDecl))],false),-1],["parseGoStmt","parseGoStmt","go/parser",$funcType([],[C.Stmt],false),-1],["parseIdent","parseIdent","go/parser",$funcType([],[($ptrType(C.Ident))],false),-1],["parseIdentList","parseIdentList","go/parser",$funcType([],[($sliceType(($ptrType(C.Ident))))],false),-1],["parseIfStmt","parseIfStmt","go/parser",$funcType([],[($ptrType(C.IfStmt))],false),-1],["parseImportSpec","parseImportSpec","go/parser",$funcType([($ptrType(C.CommentGroup)),D.Token,$Int],[C.Spec],false),-1],["parseIndexOrSlice","parseIndexOrSlice","go/parser",$funcType([C.Expr],[C.Expr],false),-1],["parseInterfaceType","parseInterfaceType","go/parser",$funcType([],[($ptrType(C.InterfaceType))],false),-1],["parseLhsList","parseLhsList","go/parser",$funcType([],[($sliceType(C.Expr))],false),-1],["parseLiteralValue","parseLiteralValue","go/parser",$funcType([C.Expr],[C.Expr],false),-1],["parseMapType","parseMapType","go/parser",$funcType([],[($ptrType(C.MapType))],false),-1],["parseMethodSpec","parseMethodSpec","go/parser",$funcType([($ptrType(C.Scope))],[($ptrType(C.Field))],false),-1],["parseOperand","parseOperand","go/parser",$funcType([$Bool],[C.Expr],false),-1],["parseParameterList","parseParameterList","go/parser",$funcType([($ptrType(C.Scope)),$Bool],[($sliceType(($ptrType(C.Field))))],false),-1],["parseParameters","parseParameters","go/parser",$funcType([($ptrType(C.Scope)),$Bool],[($ptrType(C.FieldList))],false),-1],["parsePointerType","parsePointerType","go/parser",$funcType([],[($ptrType(C.StarExpr))],false),-1],["parsePrimaryExpr","parsePrimaryExpr","go/parser",$funcType([$Bool],[C.Expr],false),-1],["parseReceiver","parseReceiver","go/parser",$funcType([($ptrType(C.Scope))],[($ptrType(C.FieldList))],false),-1],["parseResult","parseResult","go/parser",$funcType([($ptrType(C.Scope))],[($ptrType(C.FieldList))],false),-1],["parseReturnStmt","parseReturnStmt","go/parser",$funcType([],[($ptrType(C.ReturnStmt))],false),-1],["parseRhs","parseRhs","go/parser",$funcType([],[C.Expr],false),-1],["parseRhsList","parseRhsList","go/parser",$funcType([],[($sliceType(C.Expr))],false),-1],["parseRhsOrType","parseRhsOrType","go/parser",$funcType([],[C.Expr],false),-1],["parseSelectStmt","parseSelectStmt","go/parser",$funcType([],[($ptrType(C.SelectStmt))],false),-1],["parseSelector","parseSelector","go/parser",$funcType([C.Expr],[C.Expr],false),-1],["parseSignature","parseSignature","go/parser",$funcType([($ptrType(C.Scope))],[($ptrType(C.FieldList)),($ptrType(C.FieldList))],false),-1],["parseSimpleStmt","parseSimpleStmt","go/parser",$funcType([$Int],[C.Stmt,$Bool],false),-1],["parseStmt","parseStmt","go/parser",$funcType([],[C.Stmt],false),-1],["parseStmtList","parseStmtList","go/parser",$funcType([],[($sliceType(C.Stmt))],false),-1],["parseStructType","parseStructType","go/parser",$funcType([],[($ptrType(C.StructType))],false),-1],["parseSwitchStmt","parseSwitchStmt","go/parser",$funcType([],[C.Stmt],false),-1],["parseType","parseType","go/parser",$funcType([],[C.Expr],false),-1],["parseTypeAssertion","parseTypeAssertion","go/parser",$funcType([C.Expr],[C.Expr],false),-1],["parseTypeList","parseTypeList","go/parser",$funcType([],[($sliceType(C.Expr))],false),-1],["parseTypeName","parseTypeName","go/parser",$funcType([],[C.Expr],false),-1],["parseTypeSpec","parseTypeSpec","go/parser",$funcType([($ptrType(C.CommentGroup)),D.Token,$Int],[C.Spec],false),-1],["parseUnaryExpr","parseUnaryExpr","go/parser",$funcType([$Bool],[C.Expr],false),-1],["parseValueSpec","parseValueSpec","go/parser",$funcType([($ptrType(C.CommentGroup)),D.Token,$Int],[C.Spec],false),-1],["parseVarList","parseVarList","go/parser",$funcType([$Bool],[($sliceType(C.Expr)),C.Expr],false),-1],["parseVarType","parseVarType","go/parser",$funcType([$Bool],[C.Expr],false),-1],["printTrace","printTrace","go/parser",$funcType([($sliceType($emptyInterface))],[],true),-1],["resolve","resolve","go/parser",$funcType([C.Expr],[],false),-1],["safePos","safePos","go/parser",$funcType([D.Pos],[D.Pos],false),-1],["shortVarDecl","shortVarDecl","go/parser",$funcType([($ptrType(C.AssignStmt)),($sliceType(C.Expr))],[],false),-1],["tokPrec","tokPrec","go/parser",$funcType([],[D.Token,$Int],false),-1],["tryIdentOrType","tryIdentOrType","go/parser",$funcType([],[C.Expr],false),-1],["tryResolve","tryResolve","go/parser",$funcType([C.Expr,$Bool],[],false),-1],["tryType","tryType","go/parser",$funcType([],[C.Expr],false),-1],["tryVarType","tryVarType","go/parser",$funcType([$Bool],[C.Expr],false),-1]];S.init([["file","file","go/parser",($ptrType(D.File)),""],["errors","errors","go/parser",K.ErrorList,""],["scanner","scanner","go/parser",K.Scanner,""],["mode","mode","go/parser",O,""],["trace","trace","go/parser",$Bool,""],["indent","indent","go/parser",$Int,""],["comments","comments","go/parser",($sliceType(($ptrType(C.CommentGroup)))),""],["leadComment","leadComment","go/parser",($ptrType(C.CommentGroup)),""],["lineComment","lineComment","go/parser",($ptrType(C.CommentGroup)),""],["pos","pos","go/parser",D.Pos,""],["tok","tok","go/parser",D.Token,""],["lit","lit","go/parser",$String,""],["syncPos","syncPos","go/parser",D.Pos,""],["syncCnt","syncCnt","go/parser",$Int,""],["exprLev","exprLev","go/parser",$Int,""],["inRhs","inRhs","go/parser",$Bool,""],["pkgScope","pkgScope","go/parser",($ptrType(C.Scope)),""],["topScope","topScope","go/parser",($ptrType(C.Scope)),""],["unresolved","unresolved","go/parser",($sliceType(($ptrType(C.Ident)))),""],["imports","imports","go/parser",($sliceType(($ptrType(C.ImportSpec)))),""],["labelScope","labelScope","go/parser",($ptrType(C.Scope)),""],["targetStack","targetStack","go/parser",($sliceType(($sliceType(($ptrType(C.Ident)))))),""]]);0parser0��go/ast:AssignStmtgo/ast:BlockStmtgo/ast:BranchStmtgo/ast:CallExprgo/ast:CaseClausego/ast:ChanTypego/ast:CommClausego/ast:Commentgo/ast:CommentGroupgo/ast:Declgo/ast:Exprgo/ast:Fieldgo/ast:FieldListgo/ast:Filego/ast:FuncDeclgo/ast:FuncTypego/ast:GenDeclgo/ast:Ident
unresolved0  0N 0      T=new C.Object.Ptr();0 0%
readSource0Bbytes:Buffer
errors:Newio/ioutil:ReadFileio:Copy	io:Reader 0��go/parser.ParseFile0P��P=$pkg.ParseFile=function(a,b,c,d){var e=($ptrType(C.File)).nil,f=$ifaceNil,$deferred=[],$err=null,g,h,i,j,k;try{$deferFrames.push($deferred);  �g=N(b,c);h=g[0];f=g[1];      if(!($interfaceIsEqual(f,$ifaceNil))){  "    i=($ptrType(C.File)).nil;j=f;e=i;f=j;return[e,f];    }  7  ;k=new S.Ptr();$copy(k,new S.Ptr(),S);  E$deferred.push([(function(){var l;  V  Yl=$recover();    if(!($interfaceIsEqual(l,$ifaceNil))){  w    }  �    if(e===($ptrType(C.File)).nil){  
ParseDir0cgo/ast:Packagego/ast:Scopego/parser:ParseFileos:Openpath/filepath:Joinstrings:HasSuffix 0��go/parser.ParseExpr0R��R=$pkg.ParseExpr=function(a){var b,c;  �  �b=new S.Ptr();$copy(b,new S.Ptr(),S);  �b.init(D.NewFileSet(),"",new($sliceType($Uint8))($stringToBytes(a)),0);  �b.openScope();  �b.pkgScope=b.topScope;  �c=b.parseRhsOrType();  b.closeScope();  X(b.topScope===($ptrType(C.Scope)).nil,"unbalanced scopes");  �    if(b.tok===57){  �b.next();    }  �b.expect(1);  �    if(b.errors.Len()>0){  b.errors.Sort();  return[$ifaceNil,b.errors.Err()];    }  8return[c,$ifaceNil];    }; 0	ParseExpr0��go/ast:Scopego/parser:assertgo/parser:closeScopego/parser:expectgo/parser:initgo/parser:nextgo/parser:openScopego/parser:parseRhsOrTypego/parser:parsergo/token:NewFileSet 0�{(*go/parser.parser).init0 ��S.Ptr.prototype.init=function(a,b,c,d){var e,f,g;  Ke=this;  �e.file=a.AddFile(b,-1,c.$length);  �  �f=0;  �    if(!((((d&4)>>>0)===0))){  �f=1;    }   g=(function(g,h){   Gnew($ptrType(K.ErrorList))(function(){return this.$target.errors;},function($v){this.$target.errors=$v;},e).Add($clone(g,D.Position),h);    });   ae.scanner.Init(e.file,c,g,f);   �e.mode=d;   �e.trace=!((((d&8)>>>0)===0));   �e.next();    };S.prototype.init=function(a,b,c,d){return this.$val.init(a,b,c,d);}; 0parserinit0Kgo/parser:nextgo/parser:parsergo/scanner:ErrorListgo/token:Position 0�(*go/parser.parser).openScope0 ��S.Ptr.prototype.openScope=function(){var a;  !Wa=this;  !qa.topScope=C.NewScope(a.topScope);    };S.prototype.openScope=function(){return this.$val.openScope();}; 0parser	openScope0#go/ast:NewScopego/parser:parser 0��(*go/parser.parser).closeScope0 ��S.Ptr.prototype.closeScope=function(){var a;  !�a=this;  !�a.topScope=a.topScope.Outer;    };S.prototype.closeScope=function(){return this.$val.closeScope();}; 0parser
closeScope0go/parser:parser 0��"(*go/parser.parser).openLabelScope0 �S.Ptr.prototype.openLabelScope=function(){var a;  !�a=this;  "a.labelScope=C.NewScope(a.labelScope);  ",a.targetStack=$append(a.targetStack,($sliceType(($ptrType(C.Ident)))).nil);    };S.prototype.openLabelScope=function(){return this.$val.openLabelScope();}; 0parseropenLabelScope01go/ast:Identgo/ast:NewScopego/parser:parser 0�t#(*go/parser.parser).closeLabelScope0 ��S.Ptr.prototype.closeLabelScope=function(){var a,b,c,d,e,f,g;  "`a=this;  "�b=a.targetStack.$length-1>>0;  "�c=a.labelScope;  "�d=(e=a.targetStack,((b<0||b>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+b]));f=0;while(f<d.$length){g=((f<0||f>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+f]);  "�g.Obj=c.Lookup(g.Name);  #    if(g.Obj===($ptrType(C.Object)).nil&&!((((a.mode&16)>>>0)===0))){  #Sa.error(g.Pos(),J.Sprintf("label %s undefined",new($sliceType($emptyInterface))([new $String(g.Name)])));    }    f++;}  #�a.targetStack=$subslice(a.targetStack,0,b);  #�a.labelScope=a.labelScope.Outer;    };S.prototype.closeLabelScope=function(){return this.$val.closeLabelScope();}; 0parsercloseLabelScope0?fmt:Sprintf
tryResolve0ego/ast:Ident
printTrace0I	fmt:Print
fmt:Printffmt:Printlngo/parser:parsergo/token:Position 0��go/parser.trace0U��U=function(a,b){  1�a.printTrace(new($sliceType($emptyInterface))([new $String(b),new $String("(")]));  1�  1�a.indent=a.indent+(1)>>0;  1�return a;    }; 0trace0go/parser:printTrace 0��go/parser.un0V��V=function(a){  2C  2Ca.indent=a.indent-(1)>>0;  2Oa.printTrace(new($sliceType($emptyInterface))([new $String(")")]));    }; 0un0go/parser:printTrace 0�(*go/parser.parser).next00 ��S.Ptr.prototype.next0=function(){var a,b,c;  2�a=this;  3�    if(a.trace&&(new D.Pos(a.pos)).IsValid()){  3�b=(new D.Token(a.tok)).String();  3�  3�if((new D.Token(a.tok)).IsLiteral()){  3�a.printTrace(new($sliceType($emptyInterface))([new $String(b),new $String(a.lit)]));      3�}else if((new D.Token(a.tok)).IsOperator()||(new D.Token(a.tok)).IsKeyword()){  4(a.printTrace(new($sliceType($emptyInterface))([new $String("\""+b+"\"")]));    }else{  4Ta.printTrace(new($sliceType($emptyInterface))([new $String(b)]));    }    }  4mc=a.scanner.Scan();a.pos=c[0];a.tok=c[1];a.lit=c[2];    };S.prototype.next0=function(){return this.$val.next0();}; 0parsernext00Fgo/parser:parsergo/parser:printTracego/token:Posgo/token:Token 0�;"(*go/parser.parser).consumeComment0 ��S.Ptr.prototype.consumeComment=function(){var a=($ptrType(C.Comment)).nil,b=0,c,d;  4�c=this;  5�b=c.file.Line(c.pos);  5�    if(c.lit.charCodeAt(1)===42){  6&  6*d=0;while(d<c.lit.length){  6K    if(c.lit.charCodeAt(d)===10){  6e  6eb=b+(1)>>0;    }      6B  6Bd=d+(1)>>0;}    }  6}a=new C.Comment.Ptr(c.pos,c.lit);  6�c.next0();  6�return[a,b];    };S.prototype.consumeComment=function(){return this.$val.consumeComment();}; 0parserconsumeComment03go/ast:Commentgo/parser:next0go/parser:parser 0��'(*go/parser.parser).consumeCommentGroup0 �S.Ptr.prototype.consumeCommentGroup=function(a){var b=($ptrType(C.CommentGroup)).nil,c=0,d,e,f,g;  7�d=this;  8  8e=($sliceType(($ptrType(C.Comment)))).nil;  8%c=d.file.Line(d.pos);  8Cwhile((d.tok===2)&&d.file.Line(d.pos)<=(c+a>>0)){  8�  8�f=($ptrType(C.Comment)).nil;  8�g=d.consumeComment();f=g[0];c=g[1];  8�e=$append(e,f);    }  9b=new C.CommentGroup.Ptr(e);  9?d.comments=$append(d.comments,b);  9kreturn[b,c];    };S.prototype.consumeCommentGroup=function(a){return this.$val.consumeCommentGroup(a);}; 0parserconsumeCommentGroup0Qgo/ast:Commentgo/ast:CommentGroupgo/parser:consumeCommentgo/parser:parser 0�$(*go/parser.parser).next0 ��S.Ptr.prototype.next=function(){var a,b,c,d,e,f;  ;�a=this;  ;�a.leadComment=($ptrType(C.CommentGroup)).nil;  ;�a.lineComment=($ptrType(C.CommentGroup)).nil;  <b=a.pos;  < a.next0();  <,    if(a.tok===2){  <J  <Nc=($ptrType(C.CommentGroup)).nil;  <j  <nd=0;  <}    if(a.file.Line(a.pos)===a.file.Line(b)){  =#e=a.consumeCommentGroup(0);c=e[0];d=e[1];  =R    if(!((a.file.Line(a.pos)===d))){  =�a.lineComment=c;    }    }  >)d=-1;  >8while(a.tok===2){  >Xf=a.consumeCommentGroup(1);c=f[0];d=f[1];    }  >�    if((d+1>>0)===a.file.Line(a.pos)){  ?;a.leadComment=c;    }    }    };S.prototype.next=function(){return this.$val.next();}; 0parsernext0Wgo/ast:CommentGroupgo/parser:consumeCommentGroupgo/parser:next0go/parser:parser 0�(*go/parser.parser).error0 ��S.Ptr.prototype.error=function(a,b){var c,d,e,f,g,h;  ?�c=this;  ?�d=new D.Position.Ptr();$copy(d,c.file.Position(a),D.Position);  @�    if(((c.mode&32)>>>0)===0){  @�e=c.errors.$length;  @�    if(e>0&&((f=c.errors,g=e-1>>0,((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g])).Pos.Line===d.Line)){  Areturn;    }  A9    if(e>10){  AH$panic((h=new W.Ptr(),new h.constructor.Struct(h)));    }    }  Abnew($ptrType(K.ErrorList))(function(){return this.$target.errors;},function($v){this.$target.errors=$v;},c).Add($clone(d,D.Position),b);    };S.prototype.error=function(a,b){return this.$val.error(a,b);}; 0parsererror0Ngo/parser:bailoutgo/parser:parsergo/scanner:ErrorListgo/token:Position 0�.!(*go/parser.parser).errorExpected0 ��S.Ptr.prototype.errorExpected=function(a,b){var c;  A�c=this;  A�b="expected "+b;  A�    if(a===c.pos){  BB    if((c.tok===57)&&c.lit==="\n"){  Btb=b+(", found newline");    }else{  B�b=b+(", found '"+(new D.Token(c.tok)).String()+"'");  B�    if((new D.Token(c.tok)).IsLiteral()){  B�b=b+(" "+c.lit);    }    }    }  Cc.error(a,b);    };S.prototype.errorExpected=function(a,b){return this.$val.errorExpected(a,b);}; 0parser
expectSemi0Ogo/parser:errorExpectedgo/parser:nextgo/parser:parsergo/parser:syncStmt 0��(*go/parser.parser).atComma0 �4S.Ptr.prototype.atComma=function(a){var b;  F;b=this;  Ff    if(b.tok===52){  F�return true;    }  F�    if((b.tok===57)&&b.lit==="\n"){  F�b.error(b.pos,"missing ',' before newline in "+a);  F�return true;    }  G2return false;    };S.prototype.atComma=function(a){return this.$val.atComma(a);}; 0parseratComma0#go/parser:errorgo/parser:parser 0��go/parser.assert0XgX=function(a,b){  Gh    if(!a){  Gu$panic(new $String("go/parser internal error: "+b));    }    }; 0assert0  0��go/parser.syncStmt0Y��Y=function(a){var b;  Hwhile(true){  H$b=a.tok;  H5if(b===61||b===64||b===65||b===67||b===69||b===70||b===72||b===73||b===74||b===80||b===81||b===83||b===84||b===85){  Jq    if((a.pos===a.syncPos)&&a.syncCnt<10){  J�  J�a.syncCnt=a.syncCnt+(1)>>0;  J�return;    }  J�    if(a.pos>a.syncPos){  J�a.syncPos=a.pos;  J�a.syncCnt=0;  Kreturn;    }      L}else if(b===1){  L"return;    }  L/a.next();    }    }; 0
syncStmt0go/parser:next 0��go/parser.syncDecl0Z�VZ=function(a){var b;  L�while(true){  L�b=a.tok;  L�if(b===64||b===84||b===85){  M    if((a.pos===a.syncPos)&&a.syncCnt<10){  MI  MIa.syncCnt=a.syncCnt+(1)>>0;  MYreturn;    }  Mh    if(a.pos>a.syncPos){  M�a.syncPos=a.pos;  M�a.syncCnt=0;  M�return;    }      M�}else if(b===1){  M�return;    }  M�a.next();    }    }; 0
syncDecl0go/parser:next 0�&(*go/parser.parser).safePos0 ��S.Ptr.prototype.safePos=function(a){var b=0,$deferred=[],$err=null,c;try{$deferFrames.push($deferred);  O�c=this;  P$deferred.push([(function(){  P)    if(!($interfaceIsEqual($recover(),$ifaceNil))){  PBb=((c.file.Base()+c.file.Size()>>0)>>0);    }    }),[]]);  P�c.file.Offset(a);  P�    b=a;return b;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return b;}};S.prototype.safePos=function(a){return this.$val.safePos(a);}; 0parsersafePos0go/parser:parser 0��(*go/parser.parser).parseIdent0 �,S.Ptr.prototype.parseIdent=function(){var a,b,c;  QFa=this;  Qlb=a.pos;  Qzc="_";  Q�    if(a.tok===4){  Q�c=a.lit;  Q�a.next();    }else{  Q�a.expect(4);    }  R return new C.Ident.Ptr(b,c,($ptrType(C.Object)).nil);    };S.prototype.parseIdent=function(){return this.$val.parseIdent();}; 0parser
parseIdent0Qgo/ast:Ident
e=c;f=0;while(f<e.$length){g=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  X&a.resolve(g);    f++;}    }  X;a.inRhs=b;  XJreturn c;    };S.prototype.parseLhsList=function(){return this.$val.parseLhsList();}; 0parserparseLhsList0>go/parser:parseExprListgo/parser:parsergo/parser:resolve 0�X (*go/parser.parser).parseRhsList0 ��S.Ptr.prototype.parseRhsList=function(){var a,b,c;  X_a=this;  X�b=a.inRhs;  X�a.inRhs=true;  X�c=a.parseExprList(false);  X�a.inRhs=b;  X�return c;    };S.prototype.parseRhsList=function(){return this.$val.parseRhsList();}; 0parserparseRhsList0+go/parser:parseExprListgo/parser:parser 0��(*go/parser.parser).parseType0 �S.Ptr.prototype.parseType=function(){var $deferred=[],$err=null,a,b,c;try{$deferFrames.push($deferred);  YEa=this;  Yh    if(a.trace){  Yw$deferred.push([V,[U(a,"Type")]]);    }  Y�b=a.tryType();  Y�    if($interfaceIsEqual(b,$ifaceNil)){  Y�c=a.pos;  Y�a.errorExpected(c,"type");  Y�a.next();  Zreturn new C.BadExpr.Ptr(c,a.pos);    }  Z7return b;    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseType=function(){return this.$val.parseType();}; 0parser	parseType0}go/ast:BadExprgo/parser:errorExpectedgo/parser:nextgo/parser:parsergo/parser:tracego/parser:tryTypego/parser:un 0��!(*go/parser.parser).parseTypeName0 �S.Ptr.prototype.parseTypeName=function(){var $deferred=[],$err=null,a,b,c;try{$deferFrames.push($deferred);  Z�a=this;  Z�    if(a.trace){  Z�$deferred.push([V,[U(a,"TypeName")]]);    }  Z�b=a.parseIdent();  [8    if(a.tok===53){  [ra.next();  [}a.resolve(b);  [�c=a.parseIdent();  [�return new C.SelectorExpr.Ptr(b,c);    }  [�return b;    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseTypeName=function(){return this.$val.parseTypeName();}; 0parser
return l;    }catch(err){$err=err;return($ptrType(C.Field)).nil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseFieldDecl=function(a){return this.$val.parseFieldDecl(a);}; 0parserparseFieldDecl0�Sgo/ast:BadExprgo/ast:BasicLitgo/ast:CommentGroupgo/ast:Fieldgo/ast:Identgo/parser:declarego/parser:derefgo/parser:errorExpectedgo/parser:expectSemigo/parser:isTypeNamego/parser:makeIdentListgo/parser:nextgo/parser:parseVarListgo/parser:parsergo/parser:resolvego/parser:safePosgo/parser:tracego/parser:un 0��#(*go/parser.parser).parseStructType0 ��S.Ptr.prototype.parseStructType=function(){var $deferred=[],$err=null,a,b,c,d,e,f;try{$deferFrames.push($deferred);  c a=this;  cP    if(a.trace){  c_$deferred.push([V,[U(a,"StructType")]]);    }  c�b=a.expect(82);  c�c=a.expect(51);  c�d=C.NewScope(($ptrType(C.Scope)).nil);  c�  c�e=($sliceType(($ptrType(C.Field)))).nil;  d	while((a.tok===4)||(a.tok===14)||(a.tok===49)){  ee=$append(e,a.parseFieldDecl(d));    }  e?f=a.expect(56);  ebreturn new C.StructType.Ptr(b,new C.FieldList.Ptr(c,e,f),false);    }catch(err){$err=err;return($ptrType(C.StructType)).nil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseStructType=function(){return this.$val.parseStructType();}; 0parserparseStructType0��go/ast:Fieldgo/ast:FieldListgo/ast:NewScopego/ast:Scopego/ast:StructTypego/parser:expectgo/parser:parseFieldDeclgo/parser:parsergo/parser:tracego/parser:un 0��$(*go/parser.parser).parsePointerType0 ��S.Ptr.prototype.parsePointerType=function(){var $deferred=[],$err=null,a,b,c;try{$deferFrames.push($deferred);  e�a=this;  f    if(a.trace){  f,$deferred.push([V,[U(a,"PointerType")]]);    }  fSb=a.expect(14);  fpc=a.parseType();  f�return new C.StarExpr.Ptr(b,c);    }catch(err){$err=err;return($ptrType(C.StarExpr)).nil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parsePointerType=function(){return this.$val.parsePointerType();}; 0parserparsePointerType0igo/ast:StarExprgo/parser:expectgo/parser:parseTypego/parser:parsergo/parser:tracego/parser:un 0��(*go/parser.parser).tryVarType0 ��S.Ptr.prototype.tryVarType=function(a){var b,c,d;  f�b=this;  g"    if(a&&(b.tok===48)){  gLc=b.pos;  g[b.next();  gfd=b.tryIdentOrType();  g�    if(!($interfaceIsEqual(d,$ifaceNil))){  g�b.resolve(d);    }else{  g�b.error(c,"'...' parameter is missing type");  h#d=new C.BadExpr.Ptr(c,b.pos);    }  hRreturn new C.Ellipsis.Ptr(c,d);    }  h�return b.tryIdentOrType();    };S.prototype.tryVarType=function(a){return this.$val.tryVarType(a);}; 0parser
tryVarType0��go/ast:BadExprgo/ast:Ellipsisgo/parser:errorgo/parser:nextgo/parser:parsergo/parser:resolvego/parser:tryIdentOrType 0�� (*go/parser.parser).parseVarType0 �BS.Ptr.prototype.parseVarType=function(a){var b,c,d;  h�b=this;  ic=b.tryVarType(a);  i.    if($interfaceIsEqual(c,$ifaceNil)){  i@d=b.pos;  iOb.errorExpected(d,"type");  inb.next();  i�c=new C.BadExpr.Ptr(d,b.pos);    }  i�return c;    };S.prototype.parseVarType=function(a){return this.$val.parseVarType(a);}; 0parserparseVarType0ago/ast:BadExprgo/parser:errorExpectedgo/parser:nextgo/parser:parsergo/parser:tryVarType 0�- (*go/parser.parser).parseVarList0 �jS.Ptr.prototype.parseVarList=function(a){var b=($sliceType(C.Expr)).nil,c=$ifaceNil,$deferred=[],$err=null,d,e;try{$deferFrames.push($deferred);  jd=this;  jU    if(d.trace){  jd$deferred.push([V,[U(d,"VarList")]]);    }  k�  k�e=d.parseVarType(a);while(!($interfaceIsEqual(e,$ifaceNil))){  k�b=$append(b,e);  k�    if(!((d.tok===52))){  k�break;    }  k�d.next();  le=d.tryVarType(a);    }  l�c=d.tryVarType(a);  l�return[b,c];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[b,c];}};S.prototype.parseVarList=function(a){return this.$val.parseVarList(a);}; 0parserparseVarList0|go/ast:Exprgo/parser:nextgo/parser:parseVarTypego/parser:parsergo/parser:tracego/parser:tryVarTypego/parser:un 0��&(*go/parser.parser).parseParameterList0 �_S.Ptr.prototype.parseParameterList=function(a,b){var c=($sliceType(($ptrType(C.Field)))).nil,$deferred=[],$err=null,d,e,f,g,h,i,j,k,l,m,n,o,p;try{$deferFrames.push($deferred);  l�d=this;  m    if(d.trace){  m$$deferred.push([V,[U(d,"ParameterList")]]);    }  m_e=d.parseVarList(b);f=e[0];g=e[1];  m�    if(!($interfaceIsEqual(g,$ifaceNil))){  m�h=d.makeIdentList(f);  m�i=new C.Field.Ptr(($ptrType(C.CommentGroup)).nil,h,g,($ptrType(C.BasicLit)).nil,($ptrType(C.CommentGroup)).nil);  nc=$append(c,i);  n�d.declare(i,$ifaceNil,a,4,h);  n�d.resolve(g);  n�    if(d.tok===52){  od.next();    }  owhile(!((d.tok===54))&&!((d.tok===1))){  oRj=d.parseIdentList();  ork=d.parseVarType(b);  o�l=new C.Field.Ptr(($ptrType(C.CommentGroup)).nil,j,k,($ptrType(C.BasicLit)).nil,($ptrType(C.CommentGroup)).nil);  o�c=$append(c,l);  pad.declare(l,$ifaceNil,a,4,j);  p�d.resolve(k);  p�    if(!d.atComma("parameter list")){  p�break;    }  p�d.next();    }    }else{  q"c=($sliceType(($ptrType(C.Field)))).make(f.$length);  qKm=f;n=0;while(n<m.$length){o=n;p=((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]);  qid.resolve(p);  q{(o<0||o>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+o]=new C.Field.Ptr(($ptrType(C.CommentGroup)).nil,($sliceType(($ptrType(C.Ident)))).nil,p,($ptrType(C.BasicLit)).nil,($ptrType(C.CommentGroup)).nil);    n++;}    }  q�return c;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return c;}};S.prototype.parseParameterList=function(a,b){return this.$val.parseParameterList(a,b);}; 0parserparseParameterList0�go/ast:BasicLitgo/ast:CommentGroupgo/ast:Fieldgo/ast:Identgo/parser:atCommago/parser:declarego/parser:makeIdentListgo/parser:nextgo/parser:parseIdentListgo/parser:parseVarListgo/parser:parseVarTypego/parser:parsergo/parser:resolvego/parser:tracego/parser:un 0�'#(*go/parser.parser).parseParameters0 �XS.Ptr.prototype.parseParameters=function(a,b){var $deferred=[],$err=null,c,d,e,f;try{$deferFrames.push($deferred);  q�c=this;  r    if(c.trace){  r$deferred.push([V,[U(c,"Parameters")]]);    }  r;  r?d=($sliceType(($ptrType(C.Field)))).nil;  rTe=c.expect(49);  rv    if(!((c.tok===54))){  r�d=c.parseParameterList(a,b);    }  r�f=c.expect(54);  r�return new C.FieldList.Ptr(e,d,f);    }catch(err){$err=err;return($ptrType(C.FieldList)).nil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseParameters=function(a,b){return this.$val.parseParameters(a,b);}; 0parserparseParameters0��go/ast:Fieldgo/ast:FieldListgo/parser:expectgo/parser:parseParameterListgo/parser:parsergo/parser:tracego/parser:un 0�k(*go/parser.parser).parseResult0 �rS.Ptr.prototype.parseResult=function(a){var $deferred=[],$err=null,b,c,d;try{$deferFrames.push($deferred);  s:b=this;  su    if(b.trace){  s�$deferred.push([V,[U(b,"Result")]]);    }  s�    if(b.tok===49){  s�return b.parseParameters(a,false);    }  s�c=b.tryType();  t    if(!($interfaceIsEqual(c,$ifaceNil))){  td=($sliceType(($ptrType(C.Field)))).make(1);  t5(0<0||0>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+0]=new C.Field.Ptr(($ptrType(C.CommentGroup)).nil,($sliceType(($ptrType(C.Ident)))).nil,c,($ptrType(C.BasicLit)).nil,($ptrType(C.CommentGroup)).nil);  tWreturn new C.FieldList.Ptr(0,d,0);    }  t~return($ptrType(C.FieldList)).nil;    }catch(err){$err=err;return($ptrType(C.FieldList)).nil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseResult=function(a){return this.$val.parseResult(a);}; 0parserparseResult0��go/ast:BasicLitgo/ast:CommentGroupgo/ast:Fieldgo/ast:FieldListgo/ast:Identgo/parser:parseParametersgo/parser:parsergo/parser:tracego/parser:tryTypego/parser:un 0��"(*go/parser.parser).parseSignature0 ��S.Ptr.prototype.parseSignature=function(a){var b=($ptrType(C.FieldList)).nil,c=($ptrType(C.FieldList)).nil,$deferred=[],$err=null,d;try{$deferFrames.push($deferred);  t�d=this;  t�    if(d.trace){  t�$deferred.push([V,[U(d,"Signature")]]);    }  ub=d.parseParameters(a,true);  u?c=d.parseResult(a);  u`return[b,c];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[b,c];}};S.prototype.parseSignature=function(a){return this.$val.parseSignature(a);}; 0parserparseSignature0ugo/ast:FieldListgo/parser:parseParametersgo/parser:parseResultgo/parser:parsergo/parser:tracego/parser:un 0�!(*go/parser.parser).parseFuncType0 �"S.Ptr.prototype.parseFuncType=function(){var $deferred=[],$err=null,a,b,c,d,e,f;try{$deferFrames.push($deferred);  upa=this;  u�    if(a.trace){  u�$deferred.push([V,[U(a,"FuncType")]]);    }  u�b=a.expect(71);  u�c=C.NewScope(a.topScope);  v/d=a.parseSignature(c);e=d[0];f=d[1];  v\return[new C.FuncType.Ptr(b,e,f),c];    }catch(err){$err=err;return[($ptrType(C.FuncType)).nil,($ptrType(C.Scope)).nil];}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseFuncType=function(){return this.$val.parseFuncType();}; 0parser
isTypeName03go/ast:BadExprgo/ast:Identgo/ast:SelectorExpr 0�go/parser.isLiteralType0AB�bAB=function(a){var b,c,d,e;  �c=a;  �$if($assertType(c,($ptrType(C.BadExpr)),true)[1]){b=c.$val;      �8}else if($assertType(c,($ptrType(C.Ident)),true)[1]){b=c.$val;      �J}else if($assertType(c,($ptrType(C.SelectorExpr)),true)[1]){b=c.$val;  �dd=$assertType(b.X,($ptrType(C.Ident)),true);e=d[1];  ��return e;      ��}else if($assertType(c,($ptrType(C.ArrayType)),true)[1]){b=c.$val;      ��}else if($assertType(c,($ptrType(C.StructType)),true)[1]){b=c.$val;      ��}else if($assertType(c,($ptrType(C.MapType)),true)[1]){b=c.$val;    }else{b=c;  ��return false;    }  �+return true;    }; 0
S.Ptr.prototype.parseBinaryExpr=function(a,b){var $deferred=[],$err=null,c,d,e,f,g,h,i,j,k;try{$deferFrames.push($deferred);  �$c=this;  �`    if(c.trace){  �o$deferred.push([V,[U(c,"BinaryExpr")]]);    }  ��d=c.parseUnaryExpr(a);  ��  ��e=c.tokPrec();f=e[1];while(f>=b){  ��while(true){  ��g=c.tokPrec();h=g[0];i=g[1];  �    if(!((i===f))){  �#break;    }  �1j=c.expect(h);  �H    if(a){  �Uc.resolve(d);  �fa=false;    }  �zk=c.parseBinaryExpr(false,f+1>>0);  ��d=new C.BinaryExpr.Ptr(c.checkExpr(d),j,h,c.checkExpr(k));    }      ��  ��f=f-(1)>>0;}  ��return d;    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseBinaryExpr=function(a,b){return this.$val.parseBinaryExpr(a,b);}; 0parserparseBinaryExpr0��go/ast:BinaryExprgo/parser:checkExprgo/parser:expectgo/parser:parseUnaryExprgo/parser:parsergo/parser:resolvego/parser:tokPrecgo/parser:tracego/parser:un 0�(*go/parser.parser).parseExpr0 ��S.Ptr.prototype.parseExpr=function(a){var $deferred=[],$err=null,b;try{$deferFrames.push($deferred);  ��b=this;  �    if(b.trace){  �'$deferred.push([V,[U(b,"Expression")]]);    }  �Mreturn b.parseBinaryExpr(a,1);    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseExpr=function(a){return this.$val.parseExpr(a);}; 0parser	parseExpr0Lgo/parser:parseBinaryExprgo/parser:parsergo/parser:tracego/parser:un 0�^(*go/parser.parser).parseRhs0 ��S.Ptr.prototype.parseRhs=function(){var a,b,c;  ��a=this;  ��b=a.inRhs;  ��a.inRhs=true;  ��c=a.checkExpr(a.parseExpr(false));  ��a.inRhs=b;  ��return c;    };S.prototype.parseRhs=function(){return this.$val.parseRhs();}; 0parserparseRhs0<go/parser:checkExprgo/parser:parseExprgo/parser:parser 0��"(*go/parser.parser).parseRhsOrType0 ��S.Ptr.prototype.parseRhsOrType=function(){var a,b,c;  �a=this;  �9b=a.inRhs;  �Ia.inRhs=true;  �Yc=a.checkExprOrType(a.parseExpr(false));  ��a.inRhs=b;  ��return c;    };S.prototype.parseRhsOrType=function(){return this.$val.parseRhsOrType();}; 0parserparseRhsOrType0Bgo/parser:checkExprOrTypego/parser:parseExprgo/parser:parser 0�
�#(*go/parser.parser).parseSimpleStmt0 ��S.Ptr.prototype.parseSimpleStmt=function(a){var $deferred=[],$err=null,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;try{$deferFrames.push($deferred);  �{b=this;  ��    if(b.trace){  ��$deferred.push([V,[U(b,"SimpleStmt")]]);    }  ��c=b.parseLhsList();  �d=b.tok;  �if(d===47||d===42||d===23||d===24||d===25||d===26||d===27||d===28||d===29||d===30||d===31||d===32||d===33){  �@e=b.pos;f=b.tok;g=e;h=f;  �[b.next();  �f  �ji=($sliceType(C.Expr)).nil;  �yj=false;  ��    if((a===2)&&(b.tok===79)&&((h===47)||(h===42))){  ��k=b.pos;  ��b.next();  �i=new($sliceType(C.Expr))([new C.UnaryExpr.Ptr(k,79,b.parseRhs())]);  �Xj=true;    }else{  �ui=b.parseRhsList();    }  ��l=new C.AssignStmt.Ptr(c,g,h,i);  ��    if(h===47){  ��b.shortVarDecl(l,c);    }  �return[l,j];    }  �    if(c.$length>1){  �1b.errorExpected(((0<0||0>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+0]).Pos(),"1 expression");    }  ��m=b.tok;  ��if(m===58){  ��n=b.pos;  ��b.next();  ��  ��o=$assertType(((0<0||0>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+0]),($ptrType(C.Ident)),true);p=o[0];q=o[1];    if((a===1)&&q){  ��r=new C.LabeledStmt.Ptr(p,n,b.parseStmt());  �b.declare(r,$ifaceNil,b.labelScope,6,new($sliceType(($ptrType(C.Ident))))([p]));  �:return[r,false];    }  ��b.error(n,"illegal label declaration");  �return[new C.BadStmt.Ptr(((0<0||0>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+0]).Pos(),n+1>>0),false];      �Q}else if(m===36){  �ys=b.pos;  Êb.next();  Õt=b.parseRhs();  éreturn[new C.SendStmt.Ptr(((0<0||0>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+0]),s,t),false];      ��}else if(m===37||m===38){  �$u=new C.IncDecStmt.Ptr(((0<0||0>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+0]),b.pos,b.tok);  �_b.next();  �jreturn[u,false];    }  Ďreturn[new C.ExprStmt.Ptr(((0<0||0>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+0])),false];    }catch(err){$err=err;return[$ifaceNil,false];}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseSimpleStmt=function(a){return this.$val.parseSimpleStmt(a);}; 0parserparseSimpleStmt0��go/ast:AssignStmtgo/ast:BadStmtgo/ast:Exprgo/ast:ExprStmtgo/ast:Identgo/ast:IncDecStmtgo/ast:LabeledStmtgo/ast:SendStmtgo/ast:UnaryExprgo/parser:declarego/parser:errorgo/parser:errorExpectedgo/parser:nextgo/parser:parseLhsListgo/parser:parseRhsgo/parser:parseRhsListgo/parser:parseStmtgo/parser:parsergo/parser:shortVarDeclgo/parser:tracego/parser:un 0��!(*go/parser.parser).parseCallExpr0 �S.Ptr.prototype.parseCallExpr=function(a){var b,c,d,e,f,g,h;  ļb=this;  ��c=b.parseRhsOrType();  �9  �<d=$assertType(c,($ptrType(C.CallExpr)),true);e=d[0];f=d[1];    if(f){  �jreturn e;    }  �z  �}g=$assertType(c,($ptrType(C.BadExpr)),true);h=g[1];    if(!h){  ��b.error(b.safePos(c.End()),J.Sprintf("function must be invoked in %s statement",new($sliceType($emptyInterface))([new $String(a)])));    }  �2return($ptrType(C.CallExpr)).nil;    };S.prototype.parseCallExpr=function(a){return this.$val.parseCallExpr(a);}; 0parser
b.errorExpected(f.Pos(),"(unqualified) identifier");    }  �Hc.List=new($sliceType(($ptrType(C.Field))))([new C.Field.Ptr(($ptrType(C.CommentGroup)).nil,($sliceType(($ptrType(C.Ident)))).nil,new C.BadExpr.Ptr(e.Pos(),b.safePos(e.End())),($ptrType(C.BasicLit)).nil,($ptrType(C.CommentGroup)).nil)]);    }  ��return c;    }catch(err){$err=err;return($ptrType(C.FieldList)).nil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseReceiver=function(a){return this.$val.parseReceiver(a);}; 0parser
f=0; 
g=a.unresolved;h=0;while(h<g.$length){i=((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]); 
YX(i.Obj===T,"object already resolved"); 
�i.Obj=a.pkgScope.Lookup(i.Name); 
�    if(i.Obj===($ptrType(C.Object)).nil){ 
�(j=a.unresolved,(f<0||f>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+f]=i);  f=f+(1)>>0;    }    h++;} 'return new C.File.Ptr(b,c,d,e,a.pkgScope,a.imports,$subslice(a.unresolved,0,f),a.comments);    }catch(err){$err=err;return($ptrType(C.File)).nil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};S.prototype.parseFile=function(){return this.$val.parseFile();}; 0parser	parseFile0��go/ast:CommentGroupgo/ast:Declgo/ast:Filego/ast:Identgo/ast:ImportSpec
 �