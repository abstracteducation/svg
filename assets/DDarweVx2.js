/*__ABX_OBF__*/var __abx$be1d0b=(function(){function U(s){var b=atob(s),a=new Uint8Array(b.length),i=0;for(;i<b.length;i++)a[i]=b.charCodeAt(i);return a}function R(a,b){return((a<<b)|(a>>>(32-b)))>>>0}function CC(k,n,d){var K=new Uint32Array(8),N=new Uint32Array(3),o=new Uint8Array(d.length),S=new Uint32Array(16),W=new Uint32Array(16),ct=0,i,off,r,bl=new Uint8Array(64),v,nn;function Q(a,b,c,e){W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],16);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],12);W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],8);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],7)}for(i=0;i<8;i++)K[i]=(k[i*4]|(k[i*4+1]<<8)|(k[i*4+2]<<16)|(k[i*4+3]<<24))>>>0;for(i=0;i<3;i++)N[i]=(n[i*4]|(n[i*4+1]<<8)|(n[i*4+2]<<16)|(n[i*4+3]<<24))>>>0;for(off=0;off<d.length;off+=64){S[0]=0x61707865;S[1]=0x3320646e;S[2]=0x79622d32;S[3]=0x6b206574;S[4]=K[0];S[5]=K[1];S[6]=K[2];S[7]=K[3];S[8]=K[4];S[9]=K[5];S[10]=K[6];S[11]=K[7];S[12]=ct>>>0;S[13]=N[0];S[14]=N[1];S[15]=N[2];for(i=0;i<16;i++)W[i]=S[i];for(r=0;r<10;r++){Q(0,4,8,12);Q(1,5,9,13);Q(2,6,10,14);Q(3,7,11,15);Q(0,5,10,15);Q(1,6,11,12);Q(2,7,8,13);Q(3,4,9,14)}for(i=0;i<16;i++){v=(W[i]+S[i])>>>0;bl[i*4]=v&255;bl[i*4+1]=(v>>>8)&255;bl[i*4+2]=(v>>>16)&255;bl[i*4+3]=(v>>>24)&255}nn=Math.min(64,d.length-off);for(i=0;i<nn;i++)o[off+i]=d[off+i]^bl[i];ct++}return o}var K=U("QUmIUZL0zJSf7ITU8byUZuLB4YZI5h0wNCUMz3M2x+U="),P=["n6LqCLgHoG8V6+ykxba0TVEYFFOMmXNS","+u3mDSMS7+Lv33XaRkycJO5S6DlS8QYJ5b/MqdXhwZNOFg==","BWj4QKbrH6a/zP968NuNc+sIJ4pWgSdHGIErMXyYsxCQgH2+rrAhdsj8DINI4lPkdEbBncCZ7G7Q4bdTl3Op205eEp4idqKgAS2K5/CpdPkDiuuud8+ArQjjrg2ahGQpnANvOD6DYOVseoLwx1pTzwYczng="],C=[],TD=new TextDecoder();return function(i){if(C[i]!==void 0)return C[i];var raw=U(P[i]),n=raw.subarray(0,12),c=raw.subarray(12);return C[i]=TD.decode(CC(K,n,c))}})();
var e=String.raw`
var fs = __fs;
var argv = process.argv.slice(2);
var enc = new TextEncoder();
var dec = new TextDecoder();
// The Dusk Node engine's process.exit() does not stop the script, so a reported failure throws and every program body
// runs inside a try block (see script()). finish() reports anything else once.
function fail(s, status) { process.stderr.write(String(s)+'\n'); var e = new Error(String(s)); e.reported = true; e.status = status || 1; throw e; }
// Any thrown value becomes one line of text. Plain objects such as {code, message} from the host never print "[object Object]".
function errText(e) { if (typeof e === 'string' && e) return e; if (e && typeof e.message === 'string' && e.message) return e.message; if (e && typeof e.code === 'string') return e.code; return 'unexpected error'; }
function finish(e) { process.exitCode = (e && e.status) || 1; if (e && e.reported) return; process.stderr.write(base(process.argv[1] || 'node') + ': ' + errText(e) + '\n'); }
function cwd() { return process.cwd ? process.cwd() : (process.env.PWD || '/home/user'); }
function pathOf(p) { p=String(p||'.'); if(p.charAt(0)==='~')p=(process.env.HOME||'/home/user')+p.slice(1); var parts=(p.charAt(0)==='/'?p:cwd()+'/'+p).split('/');var a=[];for(var i=0;i<parts.length;i++){if(!parts[i]||parts[i]==='.')continue;if(parts[i]==='..'){a.pop();continue;}a.push(parts[i]);}return '/'+a.join('/'); }
function dirname(p){return p.substring(0,p.lastIndexOf('/'))||'/';}
function exists(p){try{return Boolean(fs.exists(pathOf(p)));}catch(e){return false;}}
function bytes(p){var b=fs.readFile(pathOf(p));if(typeof b==='string')return enc.encode(b);if(b instanceof Uint8Array)return b;return new Uint8Array(b);}
function read(p){return dec.decode(bytes(p));}
function mkdirp(p){p=pathOf(p);if(exists(p))return;mkdirp(dirname(p));fs.mkdir(p);}
function write(p,b){p=pathOf(p);mkdirp(dirname(p));fs.writeFile(p,typeof b==='string'?enc.encode(b):b);}
function names(p){return fs.readdir(pathOf(p));}
function readInput(){var out=[];for(;;){var r=ipc.send({f:'proc.readStdin'});var d=r&&r.value!==undefined?r.value:r;if(d===null||d===undefined||d.length===0)break;out.push(typeof d==='string'?enc.encode(d):new Uint8Array(d));}return joinBytes(out);}
function joinBytes(chunks){var n=0;for(var i=0;i<chunks.length;i++)n+=chunks[i].length;var o=new Uint8Array(n);var at=0;for(var j=0;j<chunks.length;j++){o.set(chunks[j],at);at+=chunks[j].length;}return o;}
function emit(b){process.stdout.write(typeof b==='string'?b:b);}
function hex(b){return Array.prototype.map.call(b,function(x){return x.toString(16).padStart(2,'0')}).join('');}
function base(p){return p.split('/').pop()||'.';}
function u32(x){return x>>>0;}
function crc32(a){var c=-1;for(var i=0;i<a.length;i++){c^=a[i];for(var j=0;j<8;j++)c=(c>>>1)^((c&1)?0xedb88320:0);}return(c^-1)>>>0;}
function safeTarget(name,root){if(!name||name.charAt(0)==='/'||name.indexOf('\\')>=0||name.indexOf('\0')>=0)fail('unsafe archive path: '+name);var p=pathOf(root+'/'+name);var dir=pathOf(root);if(dir!=='/home/user/workspace'&&dir.indexOf('/home/user/workspace/')!==0)fail('archive extraction must stay in the workspace');if(p!==dir&&p.indexOf(dir+'/')!==0)fail('archive escapes extraction root: '+name);return p;}
`;function t(t){return __abx$be1d0b(0)+e+__abx$be1d0b(1)+t+__abx$be1d0b(2)}export{t};