p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �7@��#github.com/gopherjs/gopherjs/nosyncnosync�0package nosync
type @"".Mutex struct { @"".locked bool }
func (? *@"".Mutex) @"".Lock() ()
func (? *@"".Mutex) @"".Unlock() ()
type @"".Once struct { @"".doing bool; @"".done bool }
func (? *@"".Once) @"".Do(@"".f func () ()) ()
type @"".Pool struct { @"".store []interface {  }; @"".New func () (? interface {  }) }
func (? *@"".Pool) @"".Get() (? interface {  })
func (? *@"".Pool) @"".Put(@"".x interface {  }) ()
type @"".RWMutex struct { @"".writeLocked bool; @"".readLockCounter int }
func (? *@"".RWMutex) @"".Lock() ()
func (? *@"".RWMutex) @"".RLock() ()
func (? *@"".RWMutex) @"".RUnlock() ()
func (? *@"".RWMutex) @"".Unlock() ()
type @"".WaitGroup struct { @"".counter int }
func (? *@"".WaitGroup) @"".Add(@"".delta int) ()
func (? *@"".WaitGroup) @"".Done() ()
func (? *@"".WaitGroup) @"".Wait() ()
$$
Mutex��	Mutex = $pkg.Mutex = $newType(0, $kindStruct, "nosync.Mutex", "Mutex", "github.com/gopherjs/gopherjs/nosync", function(locked_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.locked = false;
			return;
		}
		this.locked = locked_;
	});
��	ptrType.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}];
r	Mutex.init([{prop: "locked", name: "locked", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}]);
Mutex)github.com/gopherjs/gopherjs/nosync.Mutex+github.com/gopherjs/gopherjs/nosync.ptrType RWMutex�r	RWMutex = $pkg.RWMutex = $newType(0, $kindStruct, "nosync.RWMutex", "RWMutex", "github.com/gopherjs/gopherjs/nosync", function(writeLocked_, readLockCounter_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.writeLocked = false;
			this.readLockCounter = 0;
			return;
		}
		this.writeLocked = writeLocked_;
		this.readLockCounter = readLockCounter_;
	});
�;	ptrType$1.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}, {prop: "RLock", name: "RLock", pkg: "", typ: $funcType([], [], false)}, {prop: "RUnlock", name: "RUnlock", pkg: "", typ: $funcType([], [], false)}];
��	RWMutex.init([{prop: "writeLocked", name: "writeLocked", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}, {prop: "readLockCounter", name: "readLockCounter", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Int, tag: ""}]);
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex-github.com/gopherjs/gopherjs/nosync.ptrType$1 	WaitGroup�	WaitGroup = $pkg.WaitGroup = $newType(0, $kindStruct, "nosync.WaitGroup", "WaitGroup", "github.com/gopherjs/gopherjs/nosync", function(counter_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.counter = 0;
			return;
		}
		this.counter = counter_;
	});
��	ptrType$2.methods = [{prop: "Add", name: "Add", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Done", name: "Done", pkg: "", typ: $funcType([], [], false)}, {prop: "Wait", name: "Wait", pkg: "", typ: $funcType([], [], false)}];
w	WaitGroup.init([{prop: "counter", name: "counter", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Int, tag: ""}]);
	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup-github.com/gopherjs/gopherjs/nosync.ptrType$2 Once�&	Once = $pkg.Once = $newType(0, $kindStruct, "nosync.Once", "Once", "github.com/gopherjs/gopherjs/nosync", function(doing_, done_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.doing = false;
			this.done = false;
			return;
		}
		this.doing = doing_;
		this.done = done_;
	});
a	ptrType$3.methods = [{prop: "Do", name: "Do", pkg: "", typ: $funcType([funcType], [], false)}];
��	Once.init([{prop: "doing", name: "doing", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}, {prop: "done", name: "done", pkg: "github.com/gopherjs/gopherjs/nosync", typ: $Bool, tag: ""}]);
Once(github.com/gopherjs/gopherjs/nosync.Once,github.com/gopherjs/gopherjs/nosync.funcType-github.com/gopherjs/gopherjs/nosync.ptrType$3 Pool�:	Pool = $pkg.Pool = $newType(0, $kindStruct, "nosync.Pool", "Pool", "github.com/gopherjs/gopherjs/nosync", function(store_, New_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.store = sliceType.nil;
			this.New = $throwNilPointerError;
			return;
		}
		this.store = store_;
		this.New = New_;
	});
��	ptrType$4.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Put", name: "Put", pkg: "", typ: $funcType([$emptyInterface], [], false)}];
��	Pool.init([{prop: "store", name: "store", pkg: "github.com/gopherjs/gopherjs/nosync", typ: sliceType, tag: ""}, {prop: "New", name: "New", pkg: "", typ: funcType$1, tag: ""}]);
Pool(github.com/gopherjs/gopherjs/nosync.Pool.github.com/gopherjs/gopherjs/nosync.funcType$1-github.com/gopherjs/gopherjs/nosync.ptrType$4-github.com/gopherjs/gopherjs/nosync.sliceType ptrType	ptrType = $ptrType(Mutex);
ptrType)github.com/gopherjs/gopherjs/nosync.Mutex 	ptrType$1 	ptrType$1 = $ptrType(RWMutex);
	ptrType$1+github.com/gopherjs/gopherjs/nosync.RWMutex 	ptrType$2"	ptrType$2 = $ptrType(WaitGroup);
	ptrType$2-github.com/gopherjs/gopherjs/nosync.WaitGroup funcType&	funcType = $funcType([], [], false);
funcType 	ptrType$3	ptrType$3 = $ptrType(Once);
	ptrType$3(github.com/gopherjs/gopherjs/nosync.Once 	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType 	ptrType$4	ptrType$4 = $ptrType(Pool);
	ptrType$4(github.com/gopherjs/gopherjs/nosync.Pool 
funcType$17	funcType$1 = $funcType([], [$emptyInterface], false);

funcType$1 1(*github.com/gopherjs/gopherjs/nosync.Mutex).Lock�(	Mutex.ptr.prototype.Lock = function() {
		var $ptr, m;
		/* */ $ptr = {};
   �		m = this;
       �    		if (m.locked) {
   �			$panic(new $String("nosync: mutex is already locked"));
    		}
   �		m.locked = true;
    	};
	Mutex.prototype.Lock = function() { return this.$val.Lock(); };
Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.Mutex).Unlock�1	Mutex.ptr.prototype.Unlock = function() {
		var $ptr, m;
		/* */ $ptr = {};
  P		m = this;
      f    		if (!m.locked) {
  w			$panic(new $String("nosync: unlock of unlocked mutex"));
    		}
  �		m.locked = false;
    	};
	Mutex.prototype.Unlock = function() { return this.$val.Unlock(); };
Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.RWMutex).Lock�[	RWMutex.ptr.prototype.Lock = function() {
		var $ptr, rw;
		/* */ $ptr = {};
  �		rw = this;
      �    		if (!((rw.readLockCounter === 0)) || rw.writeLocked) {
  �			$panic(new $String("nosync: mutex is already locked"));
    		}
  			rw.writeLocked = true;
    	};
	RWMutex.prototype.Lock = function() { return this.$val.Lock(); };
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 5(*github.com/gopherjs/gopherjs/nosync.RWMutex).Unlock�C	RWMutex.ptr.prototype.Unlock = function() {
		var $ptr, rw;
		/* */ $ptr = {};
  �		rw = this;
      �    		if (!rw.writeLocked) {
  �			$panic(new $String("nosync: unlock of unlocked mutex"));
    		}
  �		rw.writeLocked = false;
    	};
	RWMutex.prototype.Unlock = function() { return this.$val.Unlock(); };
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.RWMutex).RLock�d	RWMutex.ptr.prototype.RLock = function() {
		var $ptr, rw;
		/* */ $ptr = {};
  e		rw = this;
      }    		if (rw.writeLocked) {
  �			$panic(new $String("nosync: mutex is already locked"));
    		}
  �  �		rw.readLockCounter = rw.readLockCounter + (1) >> 0;
        	};
	RWMutex.prototype.RLock = function() { return this.$val.RLock(); };
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 6(*github.com/gopherjs/gopherjs/nosync.RWMutex).RUnlock�u	RWMutex.ptr.prototype.RUnlock = function() {
		var $ptr, rw;
		/* */ $ptr = {};
  l		rw = this;
      �    		if (rw.readLockCounter === 0) {
  �			$panic(new $String("nosync: unlock of unlocked mutex"));
    		}
  �  �		rw.readLockCounter = rw.readLockCounter - (1) >> 0;
        	};
	RWMutex.prototype.RUnlock = function() { return this.$val.RUnlock(); };
RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Add�m	WaitGroup.ptr.prototype.Add = function(delta) {
		var $ptr, delta, wg;
		/* */ $ptr = {};
  �		wg = this;
      �  �		wg.counter = wg.counter + (delta) >> 0;
      �    		if (wg.counter < 0) {
  �			$panic(new $String("sync: negative WaitGroup counter"));
    		}
    	};
	WaitGroup.prototype.Add = function(delta) { return this.$val.Add(delta); };
	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Done��	WaitGroup.ptr.prototype.Done = function() {
		var $ptr, wg;
		/* */ $ptr = {};
  Y		wg = this;
      r		wg.Add(-1);
    	};
	WaitGroup.prototype.Done = function() { return this.$val.Done(); };
	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Wait�(	WaitGroup.ptr.prototype.Wait = function() {
		var $ptr, wg;
		/* */ $ptr = {};
  �		wg = this;
      �    		if (!((wg.counter === 0))) {
  �			$panic(new $String("sync: WaitGroup counter not zero"));
    		}
    	};
	WaitGroup.prototype.Wait = function() { return this.$val.Wait(); };
	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup .(*github.com/gopherjs/gopherjs/nosync.Once).Do�J	Once.ptr.prototype.Do = function $blocking_Do(f) {
		var $ptr, f, o, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $ptr = $f.$ptr; f = $f.f; o = $f.o; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred); $ptr = {};
		o = [o];
  �		o[0] = this;
      �    		if (o[0].done) {
  �			return;
    		}
  �    		if (o[0].doing) {
  �			$panic(new $String("nosync: Do called within f"));
    		}
  �		o[0].doing = true;
  		$deferred.push([(function(o) { return function() {
			var $ptr;
			/* */ $ptr = {};
      			o[0].doing = false;
  1			o[0].done = true;
    		}; })(o), []]);
  E		$r = f(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* */ $s = -1; case -1: } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: $blocking_Do }; } $f.$ptr = $ptr; $f.f = f; $f.o = o; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Once.prototype.Do = function(f) { return this.$val.Do(f); };
Once(github.com/gopherjs/gopherjs/nosync.Once /(*github.com/gopherjs/gopherjs/nosync.Pool).Get��	Pool.ptr.prototype.Get = function $blocking_Get() {
		var $ptr, _r, p, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $ptr = $f.$ptr; _r = $f._r; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0: $ptr = {};
  f		p = this;
      �		/* */ if (p.store.$length === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (p.store.$length === 0) { */ case 1:
  �			/* */ if (!(p.New === $throwNilPointerError)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!(p.New === $throwNilPointerError)) { */ case 3:
  �				_r = p.New(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				return _r;
    			/* } */ case 4:
  �			return $ifaceNil;
    		/* } */ case 2:
  �		x$2 = (x = p.store, x$1 = p.store.$length - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? $throwRuntimeError("index out of range") : x.$array[x.$offset + x$1]));
  �		p.store = $subslice(p.store, 0, (p.store.$length - 1 >> 0));
  		return x$2;
    		/* */ $s = -1; case -1: } return; } if ($f === undefined) { $f = { $blk: $blocking_Get }; } $f.$ptr = $ptr; $f._r = _r; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Pool.prototype.Get = function() { return this.$val.Get(); };
Pool(github.com/gopherjs/gopherjs/nosync.Pool /(*github.com/gopherjs/gopherjs/nosync.Pool).Put�	Pool.ptr.prototype.Put = function(x) {
		var $ptr, p, x;
		/* */ $ptr = {};
  E		p = this;
      d    		if ($interfaceIsEqual(x, $ifaceNil)) {
  t			return;
    		}
  		p.store = $append(p.store, x);
    	};
	Pool.prototype.Put = function(x) { return this.$val.Put(x); };
Pool(github.com/gopherjs/gopherjs/nosync.Pool ��{"Base":5279,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/mutex.go","Base":1,"Size":2073,"Lines":[0,15,16,59,79,92,94,95,159,184,199,242,245,262,264,265,329,356,372,416,419,437,439,440,485,507,529,550,552,553,653,681,729,772,775,798,800,801,891,921,943,987,990,1014,1016,1017,1118,1147,1168,1211,1214,1236,1238,1239,1381,1412,1442,1486,1489,1511,1513,1514,1561,1585,1598,1600,1601,1702,1740,1761,1782,1826,1829,1831,1832,1874,1904,1916,1918,1919,1972,2002,2024,2068,2071],"Infos":null},{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/once.go","Base":2075,"Size":1072,"Lines":[0,15,16,75,94,106,118,120,121,190,253,271,349,423,473,476,553,629,677,730,733,780,783,859,881,884,914,927,936,939,953,991,994,1010,1026,1044,1060,1065,1070],"Infos":null},{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/pool.go","Base":3148,"Size":2130,"Lines":[0,15,16,91,105,108,188,265,295,298,363,366,440,517,597,612,615,687,761,838,862,865,942,1021,1091,1105,1108,1188,1267,1347,1361,1364,1383,1404,1430,1432,1433,1501,1540,1600,1675,1706,1709,1780,1812,1847,1871,1891,1909,1913,1926,1929,1959,1995,2005,2007,2008,2035,2071,2086,2095,2098,2128],"Infos":null}]}
 