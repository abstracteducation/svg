import{t as e}from"./DDarweVx2.js";var t={git:e(String.raw`
var REMOTE_MAX=48*1024*1024,UNPACK_MAX=192*1024*1024,PACK_OBJECTS=12000;
function pkt(s){var b=typeof s==='string'?te.encode(s):s;var n=b.length+4;if(n>65520)fail('git: packet too long');var h=n.toString(16).padStart(4,'0');return concat(te.encode(h),b);}
function unpackPkt(b,p){var at=p||0,out=[];while(at+4<=b.length){var n=parseInt(td.decode(b.slice(at,at+4)),16);if(!Number.isFinite(n))fail('git: invalid packet header');at+=4;if(n===0)return {lines:out,offset:at,flush:true};if(n<4||at+n-4>b.length)fail('git: truncated Git packet');out.push(b.slice(at,at+n-4));at+=n-4;}return {lines:out,offset:at,flush:false};}
// The Dusk Node engine has no URL global, so HTTPS remotes are split here. Only plain DNS hosts on port 443 pass.
function httpsParts(url){var m=/^https:\/\/([^\/?#]+)([^?#]*)/i.exec(url);if(!m)fail('git: only HTTPS URLs are supported');var host=m[1],port='',colon=host.lastIndexOf(':');if(colon>=0){port=host.slice(colon+1);host=host.slice(0,colon);}if(!host||/[\[\]@]/.test(host))fail('git: remote URL must name a DNS host');if(port&&port!=='443')fail('git: remote URL must use standard HTTPS');return {hostname:host.toLowerCase(),pathname:m[2]||'/'};}
function authHeader(url){var host=httpsParts(url).hostname;var config=pathOf((process.env.HOME||'/home/user')+'/.config/git/credentials');if(!exists(config))return '';var lines=gread(config).split(/\r?\n/);for(var line of lines){var part=line.trim().split(' ');if(part.length===3&&part[0]===host&&part[1]&&part[2]){var basic=te.encode(part[1]+':'+part[2]);var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',out='';for(var i=0;i<basic.length;i+=3){var n=(basic[i]<<16)|((basic[i+1]||0)<<8)|(basic[i+2]||0);out+=alphabet[n>>>18&63]+alphabet[n>>>12&63]+(i+1<basic.length?alphabet[n>>>6&63]:'=')+(i+2<basic.length?alphabet[n&63]:'=');}return 'Authorization: Basic '+out;}}return '';}
// process.spawnSync resolves to {stdout, stderr, status}. A missing status is a transport failure, never success.
// Host errors arrive as objects, strings or {message}. Every git failure text must be a plain string.
function errText(e,depth){depth=depth||0;if(e===null||e===undefined)return 'unknown error';if(typeof e==='string')return e;if(depth<3&&e.message!==undefined)return errText(e.message,depth+1);if(depth<3&&e.error!==undefined)return errText(e.error,depth+1);try{var s=JSON.stringify(e);return s===undefined?'unknown error':s;}catch(x){return 'unknown error';}}
// curl writes only errors to stderr (-sS), so any stderr text is a failure even if the exit status reads 0.
function curlStatus(result){if(!result)fail('git: HTTP transport: no response');if(result.error!==undefined&&result.error!==null)fail('git: HTTP transport: '+errText(result.error));var v=result.value||{};if(typeof v.status!=='number')fail('git: HTTP transport: no exit status');var raw=v.stderr;var msg=typeof raw==='string'?raw.trim():td.decode(Uint8Array.from(raw||[])).trim();if(v.status!==0||msg){fail('git: HTTP request failed'+(msg?': '+msg.replace(/^curl: /,'').slice(0,200):''));}return 0;}
function removeTemp(p){try{if(exists(p))fs.rm(p);}catch(e){}}
// Binary-safe file access. The __fs bridge is text-only: readFile decodes UTF-8 and writeFile stores a serialized
// Uint8Array as "[object Object]", which corrupts objects, the index and packs. The byte messages carry the data as
// number arrays and round-trip exactly. Every git file access goes through these three helpers.
function ipcResult(r,what){if(!r)fail('git: '+what+': no response from the workspace');if(r.error!==undefined&&r.error!==null)fail('git: '+what+': '+errText(r.error));return r.value;}
// Files move through a host session in 1 MiB slices (base64), because an array of numbers over the IPC cannot hold a pack.
function gbytes(p){var s=ipcResult(ipc.send({f:'fs.openRead',path:pathOf(p)}),'read '+p),out=new Uint8Array(s.size);try{for(var at=0;at<out.length;at+=1048576){var part=ipcResult(ipc.send({f:'fs.readChunk',id:s.id,offset:at,length:Math.min(1048576,out.length-at)}),'read '+p);out.set(Buffer.from(part,'base64'),at);}}finally{ipc.send({f:'fs.closeRead',id:s.id});}return out;}
function gread(p){return td.decode(gbytes(p));}
// Pieces of 384 KiB go out as base64; the host writes the file once, when the session closes. A failure discards it.
function gwrite(p,data){var b=typeof data==='string'?te.encode(data):data;p=pathOf(p);mkdirp(dirname(p));var id=ipcResult(ipc.send({f:'fs.openWrite'}),'write '+p),done=false;try{for(var at=0;at<b.length;at+=393216)ipcResult(ipc.send({f:'fs.writeChunk',id:id,data:Buffer.from(b.subarray(at,at+393216)).toString('base64')}),'write '+p);ipcResult(ipc.send({f:'fs.closeWrite',id:id,path:p}),'write '+p);done=true;}finally{if(!done)ipc.send({f:'fs.closeWrite',id:id,path:null});}}
function isDirPath(p){var info=fs.stat(p);return !!(typeof info.isDirectory==='function'?info.isDirectory():info.isDirectory);}
function isFilePath(p){return exists(p)&&!isDirPath(p);}
// Recursive delete built only from primitives. Used for clone temp folders, which must never be left behind.
function removeTree(p){if(!exists(p))return;if(isDirPath(p)){for(var item of names(p)){var n=typeof item==='string'?item:item.name;if(!n||n==='.'||n==='..')continue;removeTree(p+'/'+n);}fs.rm(p,true);return;}fs.rm(p,false);}
function workspaceCurl(url,method,content,ctype,asSession){
  if(!/^https:\/\//i.test(url)||url.indexOf('@')!==-1)fail('git: only HTTPS without embedded credentials is allowed');
  var uri=httpsParts(url);
  var unique=hex(crypto.getRandomValues(new Uint8Array(12))),dir=pathOf((process.env.HOME||'/home/user')+'/.cache/git-wisp');mkdirp(dir);
  var body=dir+'/'+unique+'.body',headers=dir+'/'+unique+'.hdr',payload=dir+'/'+unique+'.payload',cfg=dir+'/'+unique+'.cfg';
  var args=['-sS','-L','--max-time','120','--max-filesize',String(REMOTE_MAX),'-D',headers,'-o',body,'-H','Git-Protocol: version=1'];
  if(method==='POST'){gwrite(payload,content);args.push('-X','POST','--data-binary','@'+payload,'-H','Content-Type: '+ctype,'-H','Accept: '+ctype.replace('-request','-result'));}
  // A temporary config file avoids secrets in /bin/curl argv and the process list. Never persist it past the request.
  var auth=authHeader(url);if(auth){args=args.filter(function(x){return x!=='-L';});gwrite(cfg,'header = '+JSON.stringify(auth)+'\n');args.push('-K',cfg);}
  args.push(url);
  try {
    // Run as "/bin/node /bin/curl ...", the same route the shell uses for the builtin's shebang. Spawning /bin/curl
    // directly inlines the body, where its shebang line is a syntax error.
    var r=ipc.send({f:'process.spawnSync',command:'/bin/node',args:['/bin/curl'].concat(args),options:{cwd:cwd(),env:process.env}});
    curlStatus(r);
    if(!exists(headers)||!exists(body))fail('git: curl did not write its response files');
    var lines=gread(headers),matches=Array.from(lines.matchAll(/(?:^|\n)HTTP\/\S+\s+(\d{3})[^\n]*/g)),code=matches.length?Number(matches[matches.length-1][1]):0;
    // GitHub answers 401 for an unknown or private repository without credentials, so both read as not found.
    if(code===401||code===404)fail("fatal: repository '"+url.replace(/\/info\/refs\?service=git-[a-z-]+$/,'').replace(/\/git-(upload|receive)-pack$/,'')+"' not found");
    if(code!==200)fail('git: HTTP '+code+' from '+uri.hostname,2);
    if(asSession){var sess=ipcResult(ipc.send({f:'fs.openRead',path:body}),'read '+body);if(sess.size>REMOTE_MAX)fail('git: response exceeds size limit');return sess;}var output=gbytes(body);if(output.length>REMOTE_MAX)fail('git: response exceeds size limit');return output;
  } finally {removeTemp(body);removeTemp(headers);removeTemp(payload);removeTemp(cfg);}
}
// Progress goes straight to the terminal, one line per real step, so a long clone never looks stuck.
function note(s){emit(s+'\n');}
// SHA-1 computed synchronously. crypto.subtle is a real async host call, and the Dusk node wrapper ends the program at
// the first real wait, so every git step must finish on microtasks. (The git runner in git.ts calls this from sha().)
// Checked against Node crypto for lengths 0 to 300001, including the padding boundaries.
function sha1Hex(msg){var len=msg.length;var total=((len+9+63)>>6)<<6;var padded=new Uint8Array(total);padded.set(msg);padded[len]=128;var dv=new DataView(padded.buffer);var bits=len*8;dv.setUint32(total-8,Math.floor(bits/4294967296));dv.setUint32(total-4,bits>>>0);var h0=1732584193,h1=4023233417,h2=2562383102,h3=271733878,h4=3285377520;var w=new Uint32Array(80);for(var off=0;off<total;off+=64){for(var i=0;i<16;i++)w[i]=dv.getUint32(off+i*4);for(i=16;i<80;i++){var x=w[i-3]^w[i-8]^w[i-14]^w[i-16];w[i]=(x<<1)|(x>>>31);}var a=h0,b=h1,c=h2,d=h3,e=h4;for(i=0;i<80;i++){var f,k;if(i<20){f=(b&c)|(~b&d);k=1518500249;}else if(i<40){f=b^c^d;k=1859775393;}else if(i<60){f=(b&c)|(b&d)|(c&d);k=2400959708;}else{f=b^c^d;k=3395469782;}var t=(((a<<5)|(a>>>27))+f+e+k+w[i])|0;e=d;d=c;c=(b<<30)|(b>>>2);b=a;a=t;}h0=(h0+a)|0;h1=(h1+b)|0;h2=(h2+c)|0;h3=(h3+d)|0;h4=(h4+e)|0;}return [h0,h1,h2,h3,h4].map(function(v){return (v>>>0).toString(16).padStart(8,'0');}).join('');}
function endpoint(url,service){url=url.replace(/\/+$/,'');return url+'/info/refs?service=git-'+service;}
function advertised(url,service){var bytes=workspaceCurl(endpoint(url,service),'GET');var info=unpackPkt(bytes),heads={};for(var line of info.lines){var s=td.decode(line).split('\0')[0].trim();var m=s.match(/^([0-9a-f]{40})\s+(refs\/(?:heads|tags)\/[^\s]+|HEAD)$/);if(m)heads[m[2]]=m[1];}if(!Object.keys(heads).length){var again=unpackPkt(bytes,info.offset);for(var line of again.lines){var s=td.decode(line).split('\0')[0].trim(),m=s.match(/^([0-9a-f]{40})\s+(refs\/(?:heads|tags)\/[^\s]+|HEAD)$/);if(m)heads[m[2]]=m[1];}}return heads;}
function remoteUrl(name){var cfg=gread(gfile('config')),pattern='[remote "'+name+'"]',i=cfg.indexOf(pattern);if(i<0)fail('git: no remote named '+name);var next=cfg.slice(i+pattern.length).split(/\n\s*\[/)[0],m=next.match(/^\s*url\s*=\s*(https:\/\/\S+)\s*$/m);if(!m)fail('git: remote has no HTTPS URL');return m[1];}
function packHeader(kind,size){var n=size,first=(kind<<4)|(n&15),buf=[];n=Math.floor(n/16);while(n){first|=128;buf.push(first);first=n&127;n=Math.floor(n/128);}buf.push(first);return new Uint8Array(buf);}
function encodePack(ids){var found=new Set(),queue=ids.slice(),parts=[te.encode('PACK'),be(2),be(0)];while(queue.length){var id=queue.shift();if(found.has(id))continue;found.add(id);if(found.size>PACK_OBJECTS)fail('git: too many objects to push');var obj=getObject(id),kind={commit:1,tree:2,blob:3,tag:4}[obj.type];if(!kind)fail('git: cannot push object type '+obj.type);var data=obj.body;
    if(obj.type==='commit'){var text=td.decode(data),tree=text.match(/^tree ([0-9a-f]{40})$/m),parents=Array.from(text.matchAll(/^parent ([0-9a-f]{40})$/gm));if(tree)queue.push(tree[1]);for(var parent of parents)queue.push(parent[1]);}
    if(obj.type==='tree'){for(var v of treeEntries(data))queue.push(v.id);}
    parts.push(packHeader(kind,data.length),transform(data,'zip'));
  }
  parts[2]=be(found.size);var payload=joinBytes(parts);if(payload.length>REMOTE_MAX)fail('git: pack exceeds upload limit');return concat(payload,fromhex(sha(payload)));
}
function treeEntries(data){var pos=0,out=[];while(pos<data.length){var space=data.indexOf(32,pos),end=data.indexOf(0,space+1);if(space<0||end<0||end+21>data.length)fail('git: corrupt tree');var mode=td.decode(data.slice(pos,space)),name=td.decode(data.slice(space+1,end)),id=hex(data.slice(end+1,end+21));checkName(name);out.push({mode,name,id});pos=end+21;}return out;}
function readSize(pack,at){var c=pack[at++],kind=(c>>>4)&7,size=c&15,mul=16;while(c&128){if(at>=pack.length)fail('git: truncated pack header');c=pack[at++];size+=(c&127)*mul;mul*=128;if(size>UNPACK_MAX)fail('git: oversized packed object');}return {kind,size,at};}
// Pure-JS zlib inflate. Host zlib rejects bytes after the end of a stream, and a pack holds many streams back to back,
// so this decoder reports where each stream's own Adler-32 trailer ends. Verified against Node zlib (see the test notes).
var LBASE=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258];
var LEXT=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];
var DBASE=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];
var DEXT=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];
var CLORDER=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
function applyDelta(source,delta){var pos=0;function length(){var n=0,factor=1,c;do{if(pos>=delta.length)fail('git: truncated delta');c=delta[pos++];n+=(c&127)*factor;factor*=128;}while(c&128);return n;}var baseSize=length(),targetSize=length();if(baseSize!==source.length||targetSize>UNPACK_MAX)fail('git: delta length mismatch');var chunks=[],total=0;while(pos<delta.length){var cmd=delta[pos++];if(cmd&128){var offset=0,count=0;for(var i=0;i<4;i++)if(cmd&(1<<i)){if(pos>=delta.length)fail('git: truncated delta');offset+=delta[pos++]*Math.pow(256,i);}for(var i=0;i<3;i++)if(cmd&(1<<(i+4))){if(pos>=delta.length)fail('git: truncated delta');count+=delta[pos++]*Math.pow(256,i);}if(count===0)count=65536;if(offset+count>source.length)fail('git: delta copy outside object');chunks.push(source.slice(offset,offset+count));total+=count;}else if(cmd){if(pos+cmd>delta.length)fail('git: truncated delta insert');chunks.push(delta.slice(pos,pos+cmd));pos+=cmd;total+=cmd;}else fail('git: illegal delta instruction');if(total>targetSize)fail('git: oversized delta');}if(total!==targetSize)fail('git: delta output mismatch');return joinBytes(chunks);}
// The pack stays on the host (a read session). Slices come over the byte channel as base64; inflate and the checksum run
// on the host, which is much faster than the VM interpreter (scripts/patches/io.mjs).
function packSlice(s,at,len){var out=new Uint8Array(len),done=0;while(done<len){var n=Math.min(1048576,len-done);var part=ipcResult(ipc.send({f:'fs.readChunk',id:s.id,offset:at+done,length:n}),'read pack');out.set(Buffer.from(part,'base64'),done);done+=n;}return out;}
function unpackPack(s){var head=packSlice(s,0,Math.min(256,s.size)),base=-1;for(var h=0;h+4<=head.length;h++){if(head[h]===80&&head[h+1]===65&&head[h+2]===67&&head[h+3]===75){base=h;break;}}if(base<0)fail('git: server did not return a Git pack');var end=s.size-20;if(end-base<32)fail('git: unsupported pack');var fixed=packSlice(s,base,12);if(num(fixed,4)!==2&&num(fixed,4)!==3)fail('git: unsupported pack');var digest=ipcResult(ipc.send({f:'fs.digestRange',id:s.id,offset:base,length:end-base}),'digest pack');if(digest!==hex(packSlice(s,end,20)))fail('git: pack checksum mismatch');var count=num(fixed,8);if(count>PACK_OBJECTS)fail('git: pack has too many objects');
// The host unpacks in batches (scripts/patches/io.mjs): receive every object, then resolve the deltas. Each batch reports progress.
var job=ipcResult(ipc.send({f:'git.unpackStart',pack:s.id,gitdir:gitdir,pos:base+12,count:count}),'unpack pack');var receiving=-1,resolving=-1,received=false,st;
for(;;){st=ipcResult(ipc.send({f:'git.unpackStep',job:job,max:300}),'unpack pack');
 if(st.phase==='receive'){var pct=Math.floor(st.processed*100/count);if(pct!==receiving){receiving=pct;emit('\rReceiving objects: '+String(pct).padStart(3)+'% ('+st.processed+'/'+count+')');}}
 else if(!received){received=true;emit('\rReceiving objects: 100% ('+count+'/'+count+'), done.\n');}
 if(st.phase!=='receive'&&st.deltas){var rp=Math.floor(st.resolved*100/st.deltas);if(rp!==resolving){resolving=rp;emit('\rResolving deltas: '+String(rp).padStart(3)+'% ('+st.resolved+'/'+st.deltas+')');}}
 if(st.done)break;}
ipc.send({f:'git.unpackEnd',job:job});
if(!received)emit('\rReceiving objects: 100% ('+count+'/'+count+'), done.\n');
if(st.deltas)emit('\rResolving deltas: 100% ('+st.deltas+'/'+st.deltas+'), done.\n');
if(st.pos!==end)fail('git: pack has unexpected trailing data');
return count;}
function listCheckoutTree(id,prefix,out){var obj=getObject(id);if(obj.type!=='tree')fail('git: expected tree object');for(var e of treeEntries(obj.body)){var rel=prefix?prefix+'/'+e.name:e.name;checkName(rel);if(e.mode==='40000'||e.mode==='040000')listCheckoutTree(e.id,rel,out);else if(e.mode==='100644'||e.mode==='100755'||e.mode==='160000')out.push({path:rel,id:e.id,mode:parseInt(e.mode,8)});else if(e.mode==='120000')fail('git: symlink checkout unsupported for safety');else fail('git: unsupported tree mode '+e.mode);}}
function checkout(id){
  var obj=getObject(id);if(obj.type!=='commit')fail('git: commit not found');
  var m=td.decode(obj.body).match(/^tree ([0-9a-f]{40})$/m);if(!m)fail('git: corrupt commit');
  var files=[];listCheckoutTree(m[1],'',files);var updated=0,updShown=-1,checkoutStart=Date.now();
  var prior=entries(),tracked=new Set(prior.map(function(x){return x.path;}));
  for(var f of files){var target=under(root+'/'+f.path);if(exists(target)&&!tracked.has(f.path))fail('git: untracked file would be overwritten: '+f.path);}
  var newPaths=new Set(files.map(function(f){return f.path;}));
  for(var f of files){var target=under(root+'/'+f.path);if(f.mode===0o160000){mkdirp(target);f.size=0;}else{var b=getObject(f.id);if(b.type!=='blob')fail('git: expected blob');gwrite(target,b.body);f.size=b.body.length;}var pct=Math.floor(++updated*100/files.length);if(pct!==updShown&&Date.now()-checkoutStart>=2000){updShown=pct;emit('\rUpdating files: '+String(pct).padStart(3)+'% ('+updated+'/'+files.length+')');}}
  if(updShown>=0)emit('\rUpdating files: 100% ('+files.length+'/'+files.length+'), done.\n');for(var old of prior)if(!newPaths.has(old.path)){var target=under(root+'/'+old.path);if(exists(target))fs.rm(target);}
  saveIndex(files);
}
function remoteHead(refs){if(refs.HEAD){for(var key of Object.keys(refs))if(key.startsWith('refs/heads/')&&refs[key]===refs.HEAD)return {ref:key,id:refs[key]};}var branch=Object.keys(refs).filter(function(k){return k.startsWith('refs/heads/')}).sort()[0];if(!branch)fail('git: no advertised remote branches');return {ref:branch,id:refs[branch]};}
function wants(ids){var parts=[];for(var i=0;i<ids.length;i++)parts.push(pkt('want '+ids[i]+(i===0?' side-band-64k ofs-delta':'')+'\n'));parts.push(te.encode('0000'),pkt('done\n'));return concat.apply(null,parts);}
// Git prints the server's progress as "remote:" lines; the host splits the side band into progress text and the pack.
function remotePrefix(text){return 'remote: '+text.replace(/\n(?=[^\n])/g,'\nremote: ');}
function upload(url,ids){var output=workspaceCurl(url.replace(/\/+$/,'')+'/git-upload-pack','POST',wants(ids),'application/x-git-upload-pack-request',true);try{var side=ipcResult(ipc.send({f:'fs.demuxSideband',id:output.id}),'read response');if(side.progress)emit(remotePrefix(side.progress));try{return unpackPack(side.pack);}finally{ipc.send({f:'fs.closeRead',id:side.pack.id});}}finally{ipc.send({f:'fs.closeRead',id:output.id});}}
function isClean(){
  var indexed=entries(),previous=currentCommit(),committed=[];
  if(previous){var commit=getObject(previous),m=td.decode(commit.body).match(/^tree ([0-9a-f]{40})$/m);if(!m)fail('git: corrupt commit');listCheckoutTree(m[1],'',committed);}
  if(indexed.length!==committed.length)return false;
  var staged=new Map(committed.map(function(x){return [x.path,x.id];}));
  for(var x of indexed){
    if(staged.get(x.path)!==x.id)return false;
    if(x.mode===0o160000)continue;var p=under(root+'/'+x.path);if(!exists(p))return false;
    var body=gbytes(p),oid=sha(concat(te.encode('blob '+body.length+'\0'),body));if(oid!==x.id)return false;
  }
  return true;
}
// Clone builds the repository in place. The destination is absent or an empty directory (checked above), so a failure
// removes only what this clone created. A rename of the finished tree was too slow on a 5,000-object repository.
function cloneRepo(args){
 var url=args[0];if(!url)fail('usage: git clone HTTPS_URL [DIR]');if(!/^https:\/\/[^@]+$/.test(url))fail('git: HTTPS remotes only');
 var target=args[1]||httpsParts(url).pathname.replace(/\/+$/,'').split('/').pop().replace(/\.git$/,'');
 var leaf=target.replace(/\/+$/,'').split('/').pop();
 if(!leaf||leaf==='.'||leaf==='..')fail("fatal: could not clone into '"+target+"': name a new directory");
 var dest=pathOf(target),parent=dirname(dest);
 if(exists(dest)&&(!isDirPath(dest)||names(dest).length))fail("fatal: destination path '"+target+"' already exists and is not an empty directory.");
 emit("Cloning into '"+(args.display||target)+"'...\n");
 mkdirp(parent);
 var created=!exists(dest),built=false;
 try{
  root=dest;gitdir=dest+'/.git';mkdirp(gfile('objects'));mkdirp(gfile('refs/heads'));mkdirp(gfile('refs/remotes/origin'));
  var refs=advertised(url,'upload-pack'),head=remoteHead(refs),seen={},wanted=[];
  for(var key of Object.keys(refs)){if(key==='HEAD'||key.indexOf('^{}')>=0)continue;if(key.indexOf('refs/heads/')===0||key.indexOf('refs/tags/')===0){if(!seen[refs[key]]){seen[refs[key]]=1;wanted.push(refs[key]);}}}
  if(!seen[head.id])wanted.push(head.id);
  upload(url,wanted);
  var branch=head.ref.split('/').pop();
  gwrite(gfile('HEAD'),'ref: refs/heads/'+branch+'\n');gwrite(gfile('refs/heads/'+branch),head.id+'\n');
  for(var rk of Object.keys(refs)){if(rk.indexOf('^{}')>=0)continue;if(rk.indexOf('refs/heads/')===0)gwrite(gfile('refs/remotes/origin/'+rk.slice('refs/heads/'.length)),refs[rk]+'\n');else if(rk.indexOf('refs/tags/')===0)gwrite(gfile(rk),refs[rk]+'\n');}
  gwrite(gfile('refs/remotes/origin/HEAD'),'ref: refs/remotes/origin/'+branch+'\n');
  gwrite(gfile('config'),'[core]\n\trepositoryformatversion = 0\n\tbare = false\n[remote "origin"]\n\turl = '+url+'\n\tfetch = +refs/heads/*:refs/remotes/origin/*\n[branch "'+branch+'"]\n\tremote = origin\n\tmerge = refs/heads/'+branch+'\n');
  checkout(head.id);
  built=true;
 }finally{if(!built){try{if(created)removeTree(dest);else for(var item of names(dest))removeTree(dest+'/'+childName(item));}catch(e){}}}

}
function gitRemote(cmd,args){
 if(cmd==='clone'){cloneRepo(args);return;}
 repo();var name='origin';if(args[0]&&args[0][0]!=='-')name=args[0];var url=remoteUrl(name),refs=advertised(url,cmd==='push'?'receive-pack':'upload-pack');var localRef=headRef(),branch=localRef&&localRef.slice('refs/heads/'.length);if(!branch)fail('git: detached HEAD is unsupported');var target='refs/heads/'+branch;
 if(cmd==='push'){var id=currentCommit();if(!id)fail('git: nothing to push');var old=refs[target]||'0'.repeat(40),pack=encodePack([id]);var caps='report-status',command=pkt(old+' '+id+' '+target+'\0'+caps+'\n'),request=concat(command,te.encode('0000'),pack);var result=workspaceCurl(url.replace(/\/+$/,'')+'/git-receive-pack','POST',request,'application/x-git-receive-pack-request');var report=td.decode(result);if(!report.includes('unpack ok')||!report.includes('ok '+target))fail('git: push refused by server: '+report.replace(/[^\x20-\x7e\n]/g,''));gwrite(gfile('refs/remotes/'+name+'/'+branch),id+'\n');emit('Pushed '+short(id)+' to '+name+'/'+branch+'\n');return;}
 var chosen=refs[target]?{ref:target,id:refs[target]}:remoteHead(refs);upload(url,[chosen.id]);gwrite(gfile('refs/remotes/'+name+'/'+chosen.ref.split('/').pop()),chosen.id+'\n');if(cmd==='fetch'){emit('Fetched '+short(chosen.id)+' from '+name+'\n');return;}
 if(!isClean())fail('git: local working tree or index has changes; refusing pull');var before=currentCommit();if(before&&before!==chosen.id){var next=chosen.id,found=false;for(var i=0;i<200&&next;i++){if(next===before){found=true;break;}var obj=getObject(next),m=td.decode(obj.body).match(/^parent ([a-f0-9]{40})$/m);next=m?m[1]:'';}if(!found)fail('git: pull requires a merge; only fast-forward is supported');}
 checkout(chosen.id);gwrite(gfile(localRef),chosen.id+'\n');emit('Fast-forwarded to '+short(chosen.id)+'\n');
}
`+String.raw`
var te=new TextEncoder(),td=new TextDecoder(),ZERO=new Uint8Array(0);
function concat(){return joinBytes(Array.prototype.slice.call(arguments));}
function be(n){return new Uint8Array([(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255]);}
function num(b,o){return ((b[o]*16777216)+(b[o+1]<<16)+(b[o+2]<<8)+b[o+3])>>>0;}
function u8(b){return b instanceof Uint8Array?b:new Uint8Array(b);}
function fromhex(s){var out=new Uint8Array(s.length/2);for(var i=0;i<out.length;i++)out[i]=parseInt(s.slice(i*2,i*2+2),16);return out;}
function sha(b){return sha1Hex(b);}
function transform(b,which){if(which==='zip')return new Uint8Array(require('zlib').deflateSync(b));var out=new Uint8Array(require('zlib').inflateSync(b));if(out.length>UNPACK_MAX)fail('git: oversized unpacked object');return out;}
var root='',gitdir='';
var DEFAULT_BRANCH='master';
function under(p){p=pathOf(p);if(p!==root&&p.indexOf(root+'/')!==0)fail('git: refusing path outside the repository: '+p);return p;}
function gfile(p){return gitdir+'/'+p;}
// A repository is a .git folder that has a HEAD file. A half-written .git (no HEAD) is not one, so the walk goes on.
function isRepoDir(dir){return isFilePath(dir+'/.git/HEAD');}
var workBase=cwd();
function fromBase(p){p=String(p||'.');return p.charAt(0)==='/'?pathOf(p):pathOf(workBase+'/'+p);}
function repo(){var dir=workBase;while(dir!=='/'&&!isRepoDir(dir))dir=dirname(dir);if(!isRepoDir(dir))fail('fatal: not a git repository (or any of the parent directories): .git');root=dir;gitdir=dir+'/.git';}
function object(type,data){var raw=concat(te.encode(type+' '+data.length+'\0'),data);var id=sha(raw),dst=gfile('objects/'+id.slice(0,2)+'/'+id.slice(2));if(!exists(dst))gwrite(dst,transform(raw,'zip'));return id;}
function getObject(id){if(!/^[a-f0-9]{40}$/.test(id))fail('git: invalid object id');var p=gfile('objects/'+id.slice(0,2)+'/'+id.slice(2));if(!exists(p))fail('git: missing object '+id);var raw=transform(gbytes(p),'unzip'),i=raw.indexOf(0);if(i<0)fail('git: corrupt object '+id);if(sha(raw)!==id)fail('git: corrupt hash '+id);var header=td.decode(raw.slice(0,i)).split(' '),body=raw.slice(i+1);if(Number(header[1])!==body.length)fail('git: invalid object size');return {type:header[0],body:body};}
function headText(){if(!isFilePath(gfile('HEAD')))fail('fatal: not a git repository: '+gitdir+' has no HEAD');return gread(gfile('HEAD')).trim();}
function headRef(){var h=headText();return h.startsWith('ref: ')?h.slice(5):null;}
function currentCommit(){var ref=headRef();if(ref)return isFilePath(gfile(ref))?gread(gfile(ref)).trim():'';return headText();}
function short(id){return id?id.slice(0,7):'(unborn)';}
function checkName(name){if(!name||name==='.'||name==='..'||name.indexOf('\\')>=0||name.indexOf('\0')>=0||name.split('/').some(function(x){return x==='..'||x==='.git'}))fail('git: unsafe path '+name);}
function entries(){if(!exists(gfile('index')))return [];var b=gbytes(gfile('index'));if(td.decode(b.slice(0,4))!=='DIRC'||num(b,4)!==2||b.length<32)fail('git: unsupported index format');var count=num(b,8),out=[],at=12;for(var i=0;i<count;i++){var start=at;if(at+62>b.length-20)fail('git: corrupt index');var mode=num(b,at+24),id=hex(b.slice(at+40,at+60)),flags=(b[at+60]<<8)|b[at+61],length=flags&4095;at+=62;var end=at;while(end<b.length&&b[end]!==0)end++;if(end>=b.length)fail('git: unterminated index path');var filename=td.decode(b.slice(at,end));if(length!==4095&&filename.length!==length)fail('git: corrupt index filename');checkName(filename);out.push({path:filename,id:id,mode:mode||33188});at=start+Math.ceil((end-start+1)/8)*8;}return out;}
function saveIndex(items){items.sort(function(a,b){return a.path<b.path?-1:a.path>b.path?1:0});var blocks=[te.encode('DIRC'),be(2),be(items.length)];for(var i=0;i<items.length;i++){var e=items[i],name=te.encode(e.path);if(name.length>4095)fail('git: path too long');var fixed=new Uint8Array(62);fixed.set(be(e.mode||0o100644),24);fixed.set(be(e.size||0),36);fixed.set(fromhex(e.id),40);fixed[60]=(name.length>>>8)&15;fixed[61]=name.length&255;var record=concat(fixed,name,new Uint8Array([0]));blocks.push(record,new Uint8Array((8-record.length%8)%8));}var payload=joinBytes(blocks),digest=sha(payload);gwrite(gfile('index'),concat(payload,fromhex(digest)));}
function relative(p){return p.slice(root.length+1);}
function assertBranch(s){if(!/^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(s)||s.indexOf('..')>=0||s.endsWith('.lock'))fail("fatal: '"+s+"' is not a valid branch name",128);}
function createTree(items){var parts=[],dirs=new Map(),files=[];for(var i=0;i<items.length;i++){var name=items[i].path,slash=name.indexOf('/');if(slash===-1)files.push(items[i]);else{var segment=name.slice(0,slash),bucket=dirs.get(segment)||[];bucket.push({path:name.slice(slash+1),id:items[i].id,mode:items[i].mode});dirs.set(segment,bucket);}}for(var f of files)parts.push({name:f.path,mode:(f.mode===0o160000?'160000':f.mode===0o100755?'100755':'100644'),id:f.id});for(var entry of dirs)parts.push({name:entry[0],mode:'40000',id:createTree(entry[1])});parts.sort(function(a,b){return (a.name+(a.mode==='40000'?'/':''))<(b.name+(b.mode==='40000'?'/':''))?-1:1});var data=[];for(var part of parts)data.push(te.encode(part.mode+' '+part.name+'\0'),fromhex(part.id));return object('tree',joinBytes(data));}
var overrides={};
function configOverride(key){return Object.prototype.hasOwnProperty.call(overrides,key)?overrides[key]:undefined;}
// Repository config for one [section] key, e.g. user.name. A -c override wins, as it does in Git.
function userSetting(key){var o=configOverride(key);if(o!==undefined)return o;if(!isFilePath(gfile('config')))return '';var section=gread(gfile('config')).match(/\[user\]([\s\S]*?)(?=\n\[|$)/);if(!section)return '';var m=section[1].match(new RegExp('^\\s*'+key.split('.')[1]+'\\s*=\\s*(.*?)\\s*$','m'));return m?m[1]:'';}

// ---- Commits, trees and dates ----
var WEEKDAY=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function pad2(n){return (n<10?'0':'')+n;}
function zoneText(minutesEast){var sign=minutesEast<0?'-':'+',a=Math.abs(minutesEast);return sign+pad2(Math.floor(a/60))+pad2(a%60);}
function localZone(){return zoneText(-new Date().getTimezoneOffset());}
function zoneMinutes(zone){var sign=zone.charAt(0)==='-'?-1:1;return sign*(Number(zone.slice(1,3))*60+Number(zone.slice(3,5)));}
function gitDate(ts,zone){var d=new Date((ts+zoneMinutes(zone)*60)*1000);return WEEKDAY[d.getUTCDay()]+' '+MONTHS[d.getUTCMonth()]+' '+String(d.getUTCDate()).padStart(2)+' '+pad2(d.getUTCHours())+':'+pad2(d.getUTCMinutes())+':'+pad2(d.getUTCSeconds())+' '+d.getUTCFullYear()+' '+zone;}
function identityParts(line){var m=/^(.*) <([^>]*)> (-?\d+) ([+-]\d{4})$/.exec(line||'');return m?{name:m[1],email:m[2],ts:Number(m[3]),zone:m[4]}:{name:'',email:'',ts:0,zone:'+0000'};}
function commitParts(id){var o=getObject(id);if(o.type!=='commit')fail('fatal: not a commit object: '+id);var text=td.decode(o.body),cut=text.indexOf('\n\n'),head=cut<0?text:text.slice(0,cut),parts={id:id,tree:'',parents:[],author:'',committer:'',message:cut<0?'':text.slice(cut+2)};for(var line of head.split('\n')){if(line.indexOf('tree ')===0)parts.tree=line.slice(5);else if(line.indexOf('parent ')===0)parts.parents.push(line.slice(7));else if(line.indexOf('author ')===0)parts.author=line.slice(7);else if(line.indexOf('committer ')===0)parts.committer=line.slice(10);}return parts;}
function subjectOf(message){return message.split('\n')[0];}
function treeFiles(treeId){var list=[],out=new Map();listCheckoutTree(treeId,'',list);for(var f of list)out.set(f.path,f.id);return out;}
function commitFiles(commitId){if(!commitId)return new Map();var c=commitParts(commitId);return treeFiles(c.tree);}

// ---- Line diffs for commit statistics (the insertion and deletion counts git prints) ----
function blobLines(bytes){var s=td.decode(bytes);if(s==='')return [];var parts=s.split('\n');if(parts[parts.length-1]==='')parts.pop();return parts;}
function lcsLength(A,B){if(!A.length||!B.length)return 0;var prev=new Uint32Array(B.length+1),cur=new Uint32Array(B.length+1);for(var i=1;i<=A.length;i++){cur[0]=0;for(var j=1;j<=B.length;j++)cur[j]=A[i-1]===B[j-1]?prev[j-1]+1:Math.max(prev[j],cur[j-1]);var t=prev;prev=cur;cur=t;}return prev[B.length];}
function changeCounts(oldBytes,newBytes){var ids=new Map();function code(x){var v=ids.get(x);if(v===undefined){v=ids.size;ids.set(x,v);}return v;}var a=blobLines(oldBytes).map(code),b=blobLines(newBytes).map(code);var common=a.length*b.length>20000000?Math.min(a.length,b.length):lcsLength(a,b);return {ins:b.length-common,del:a.length-common};}

// ---- .gitignore (root file only): last matching rule wins, "!" negates, trailing "/" matches directories ----
function globRegExp(glob,anchored){var out='';for(var i=0;i<glob.length;i++){var c=glob.charAt(i);if(c==='*'){if(glob.charAt(i+1)==='*'){out+='.*';i++;}else out+='[^/]*';}else if(c==='?')out+='[^/]';else if('.+()|^$\\{}'.indexOf(c)>=0)out+='\\'+c;else out+=c;}return new RegExp((anchored?'^':'(?:^|/)')+out+'$');}
function ignoreRules(){var rules=[];if(!isFilePath(root+'/.gitignore'))return rules;var lines=gread(root+'/.gitignore').split('\n');for(var raw of lines){var line=raw.replace(/\r$/,'');if(!line||line.charAt(0)==='#')continue;var neg=false;if(line.charAt(0)==='!'){neg=true;line=line.slice(1);}var dirOnly=line.slice(-1)==='/';if(dirOnly)line=line.slice(0,-1);var anchored=line.indexOf('/')>=0;if(line.charAt(0)==='/')line=line.slice(1);if(line)rules.push({neg:neg,dirOnly:dirOnly,re:globRegExp(line,anchored)});}return rules;}
function ignored(rules,rel,isDir){var result=false;for(var r of rules){if(r.dirOnly&&!isDir)continue;if(r.re.test(rel))result=!r.neg;}return result;}
function childName(item){return typeof item==='string'?item:item.name;}

// ---- Working tree: untracked files, collapsed to directories as git does ----
function hasVisibleFile(rules,rel){for(var item of names(root+'/'+rel)){var name=childName(item);if(!name||name==='.git')continue;var child=rel+'/'+name,dir=isDirPath(root+'/'+child);if(ignored(rules,child,dir))continue;if(!dir||hasVisibleFile(rules,child))return true;}return false;}
function walkUntracked(rules,tracked,trackedDirs,dirRel,out){var base=dirRel?root+'/'+dirRel:root;for(var item of names(base)){var name=childName(item);if(!name||name==='.git')continue;var rel=dirRel?dirRel+'/'+name:name,isDir=isDirPath(root+'/'+rel);if(ignored(rules,rel,isDir))continue;if(isDir){if(trackedDirs.has(rel))walkUntracked(rules,tracked,trackedDirs,rel,out);else if(hasVisibleFile(rules,rel))out.push(rel+'/');}else if(!tracked.has(rel))out.push(rel);}}
function filesBelowIgnored(rules,dir){var out=[];for(var item of names(dir)){var name=childName(item);if(!name||name==='.git')continue;var full=dir+'/'+name,rel=relative(full),isDir=isDirPath(full);if(ignored(rules,rel,isDir))continue;if(isDir)out.push.apply(out,filesBelowIgnored(rules,full));else out.push(full);}return out;}
function workBlobId(rel){var b=gbytes(root+'/'+rel);return sha(concat(te.encode('blob '+b.length+'\0'),b));}
function stageTracked(index){var out=[];for(var e of index){if(e.mode===0o160000){out.push(e);continue;}var full=root+'/'+e.path;if(!exists(full)||isDirPath(full))continue;var bytes=gbytes(full);out.push({path:e.path,id:object('blob',bytes),mode:e.mode,size:bytes.length});}return out;}
function byPath(a,b){return a[1]<b[1]?-1:a[1]>b[1]?1:0;}
function statusLines(list){var out='';for(var item of list){var label=item[0]+':';out+='\t'+label+' '.repeat(Math.max(1,12-label.length))+item[1]+'\n';}return out;}

// status: the same sections, hints and final line git prints (wt-status.c).
function statusReport(){
  var head=currentCommit(),unborn=!head,ref=headRef(),label=ref?ref.replace('refs/heads/',''):null;
  var idx=entries(),indexMap=new Map(idx.map(function(e){return [e.path,e.id];})),headMap=commitFiles(head);
  var staged=[],unstaged=[];
  for(var e of idx){if(!headMap.has(e.path))staged.push(['new file',e.path]);else if(headMap.get(e.path)!==e.id)staged.push(['modified',e.path]);}
  for(var hp of headMap.keys())if(!indexMap.has(hp))staged.push(['deleted',hp]);
  for(var w of idx){var full=root+'/'+w.path;if(w.mode===0o160000)continue;if(!exists(full)||isDirPath(full))unstaged.push(['deleted',w.path]);else if(workBlobId(w.path)!==w.id)unstaged.push(['modified',w.path]);}
  staged.sort(byPath);unstaged.sort(byPath);
  var trackedDirs=new Set();for(var t of idx){var parts=t.path.split('/');for(var k=1;k<parts.length;k++)trackedDirs.add(parts.slice(0,k).join('/'));}
  var untracked=[];walkUntracked(ignoreRules(),indexMap,trackedDirs,'',untracked);untracked.sort();
  var text=label?'On branch '+label+'\n':'HEAD detached at '+short(head)+'\n';
  if(unborn)text+='\nNo commits yet\n\n';
  if(staged.length)text+='Changes to be committed:\n'+(unborn?'  (use "git rm --cached <file>..." to unstage)\n':'  (use "git restore --staged <file>..." to unstage)\n')+statusLines(staged)+'\n';
  if(unstaged.length)text+='Changes not staged for commit:\n  (use "git '+(unstaged.some(function(x){return x[0]==='deleted';})?'add/rm':'add')+' <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n'+statusLines(unstaged)+'\n';
  if(untracked.length)text+='Untracked files:\n  (use "git add <file>..." to include in what will be committed)\n'+untracked.map(function(p){return '\t'+p+'\n';}).join('')+'\n';
  var message=null;
  if(!staged.length){if(unstaged.length)message='no changes added to commit (use "git add" and/or "git commit -a")';else if(untracked.length)message='nothing added to commit but untracked files present (use "git add" to track)';else message=unborn?'nothing to commit (create/copy files and use "git add" to track)':'nothing to commit, working tree clean';}
  if(message)text+=message+'\n';
  emit(text);
}

function commitCommand(args){
  var messages=[],all=false,quiet=false;
  for(var i=0;i<args.length;i++){var a=args[i];
    if(a==='--all'){all=true;continue;}if(a==='--quiet'){quiet=true;continue;}if(a==='--message'){if(args[i+1]===undefined)fail("error: option 'message' requires a value");messages.push(args[++i]);continue;}
    if(a.indexOf('--')===0||a.charAt(0)!=='-'||a.length<2)fail("error: unknown option '"+a+"'");
    for(var k=1;k<a.length;k++){var c=a.charAt(k);
      if(c==='m'){var rest=a.slice(k+1);if(rest){messages.push(rest);}else{if(args[i+1]===undefined)fail("error: switch 'm' requires a value");messages.push(args[++i]);}break;}
      if(c==='a')all=true;else if(c==='q')quiet=true;else fail("error: unknown switch '"+c+"'");}}
  if(!messages.length)fail('fatal: no commit message given (use -m)');
  var head=currentCommit(),ref=headRef(),index=entries();
  if(all)index=stageTracked(index);
  var treeId=createTree(index),parent=head?commitParts(head):null;
  // Nothing staged: git prints the status and exits 1.
  if((parent&&parent.tree===treeId)||(!parent&&!index.length)){statusReport();process.exitCode=1;return;}
  var name=process.env.GIT_AUTHOR_NAME||userSetting('user.name')||process.env.USER||'workspace',email=process.env.GIT_AUTHOR_EMAIL||userSetting('user.email')||'user@workspace.invalid';
  var ident=name+' <'+email+'> '+Math.floor(Date.now()/1000)+' '+localZone();
  var message=messages.join('\n\n');if(message.slice(-1)!=='\n')message+='\n';
  var body='tree '+treeId+'\n'+(head?'parent '+head+'\n':'')+'author '+ident+'\ncommitter '+ident+'\n\n'+message;
  var id=object('commit',te.encode(body));
  // Statistics compare against the parent tree, as git's diffstat does.
  var oldFiles=parent?treeFiles(parent.tree):new Map(),newFiles=new Map(index.map(function(e){return [e.path,e.id];})),changed=[],ins=0,del=0;
  for(var ne of index){var was=oldFiles.get(ne.path);if(was===undefined){ins+=blobLines((getObject(ne.id)).body).length;changed.push({path:ne.path,kind:'create'});}else if(was!==ne.id){var c=changeCounts((getObject(was)).body,(getObject(ne.id)).body);ins+=c.ins;del+=c.del;changed.push({path:ne.path,kind:'change'});}}
  for(var pair of Array.from(oldFiles)){if(!newFiles.has(pair[0])){del+=blobLines((getObject(pair[1])).body).length;changed.push({path:pair[0],kind:'delete'});}}
  changed.sort(function(x,y){return x.path<y.path?-1:x.path>y.path?1:0;});
  if(ref)gwrite(gfile(ref),id+'\n');else gwrite(gfile('HEAD'),id+'\n');
  if(all)saveIndex(index);
  var summary=' '+changed.length+(changed.length===1?' file changed':' files changed');
  if(ins)summary+=', '+ins+(ins===1?' insertion(+)':' insertions(+)');
  if(del)summary+=', '+del+(del===1?' deletion(-)':' deletions(-)');
  var branch=ref?ref.replace('refs/heads/',''):'detached HEAD';
  var modes=changed.filter(function(x){return x.kind!=='change';}).map(function(x){return ' '+(x.kind==='create'?'create':'delete')+' mode 100644 '+x.path+'\n';}).join('');
  if(!quiet)emit('['+branch+(parent?'':' (root-commit)')+' '+short(id)+'] '+subjectOf(message)+'\n'+summary+'\n'+modes);
}

function addCommand(args){
  if(!args.length){emit("Nothing specified, nothing added.\nhint: Maybe you wanted to say 'git add .'?\nhint: Turn this message off by running\nhint: \"git config advice.addEmptyPathspec false\"\n");return;}
  var index=entries(),map=new Map(index.map(function(e){return [e.path,e];})),rules=ignoreRules(),plan=[];
  // Validate every pathspec before changing the index, as git does.
  for(var spec of args){var full=fromBase(spec);under(full);
    if(!exists(full)){var rel=relative(full),prefix=rel+'/';if(!index.some(function(e){return e.path===rel||e.path.indexOf(prefix)===0;}))fail("fatal: pathspec '"+spec+"' did not match any files",128);plan.push({removed:rel});}
    else if(isDirPath(full)){plan.push({files:filesBelowIgnored(rules,full)});plan.push({prune:relative(full)});}
    else plan.push({files:[full]});}
  for(var step of plan){
    if(step.removed!==undefined){for(var key of Array.from(map.keys())){if(key===step.removed||key.indexOf(step.removed+'/')===0)map.delete(key);}}
    else if(step.prune!==undefined){for(var gone of Array.from(map.keys())){if((step.prune===''||gone.indexOf(step.prune+'/')===0)&&!exists(root+'/'+gone))map.delete(gone);}}
    else for(var f of step.files){var r=relative(f);checkName(r);var bytes=gbytes(f);map.set(r,{path:r,id:object('blob',bytes),mode:33188,size:bytes.length});}
  }
  saveIndex(Array.from(map.values()));
}

// Every commit reachable from HEAD, newest committer date first (git log's default order, approximated by date).
function reachableCommits(start){var seen=new Set([start]),queue=[start],found=[];while(queue.length){var id=queue.shift(),c=commitParts(id);found.push(c);for(var p of c.parents){if(!seen.has(p)){seen.add(p);queue.push(p);}}}found.sort(function(a,b){return identityParts(b.committer).ts-identityParts(a.committer).ts;});return found;}
function logCommand(args){
  var limit=Infinity,oneline=false;
  for(var j=0;j<args.length;j++){var a=args[j];if(a==='-n'&&args[j+1]!==undefined)limit=Number(args[++j]);else if(/^-\d+$/.test(a))limit=Number(a.slice(1));else if(/^-n\d+$/.test(a))limit=Number(a.slice(2));else if(a==='--oneline')oneline=true;}
  var head=currentCommit();
  if(!head)fail("fatal: your current branch '"+((headRef()||'HEAD').replace('refs/heads/',''))+"' does not have any commits yet",128);
  var commits=(reachableCommits(head)).slice(0,limit),out=[];
  for(var c of commits){
    if(oneline){out.push(short(c.id)+' '+subjectOf(c.message)+'\n');continue;}
    var who=identityParts(c.author),text='commit '+c.id+'\n';
    if(c.parents.length>1)text+='Merge: '+c.parents.map(short).join(' ')+'\n';
    text+='Author: '+who.name+' <'+who.email+'>\nDate:   '+gitDate(who.ts,who.zone)+'\n\n';
    text+=c.message.replace(/\n$/,'').split('\n').map(function(l){return l?'    '+l:'';}).join('\n')+'\n';
    out.push(text);
  }
  // Full entries end with a newline and are separated by a blank line; --oneline entries are plain lines.
  emit(out.join(oneline?'':'\n'));
}

function lsFiles(args){var stage=false,nul=false,specs=[];for(var a of args){if(a==='-s'||a==='--stage')stage=true;else if(a==='-z')nul=true;else if(a.charAt(0)==='-'&&a.length>1){fail("error: unknown option \x60"+a.replace(/^-+/,'')+"\x27\n"+"usage: git ls-files [<options>] [<file>...]"+'\n'+""+'\n'+"    -z                    separate paths with the NUL character"+'\n'+"    -t                    identify the file status with tags"+'\n'+"    -v                    use lowercase letters for 'assume unchanged' files"+'\n'+"    -f                    use lowercase letters for 'fsmonitor clean' files"+'\n'+"    -c, --[no-]cached     show cached files in the output (default)"+'\n'+"    -d, --[no-]deleted    show deleted files in the output"+'\n'+"    -m, --[no-]modified   show modified files in the output"+'\n'+"    -o, --[no-]others     show other files in the output"+'\n'+"    -i, --[no-]ignored    show ignored files in the output"+'\n'+"    -s, --[no-]stage      show staged contents' object name in the output"+'\n'+"    -k, --[no-]killed     show files on the filesystem that need to be removed"+'\n'+"    --[no-]directory      show 'other' directories' names only"+'\n'+"    --[no-]eol            show line endings of files"+'\n'+"    --[no-]empty-directory"+'\n'+"                          don't show empty directories"+'\n'+"    -u, --[no-]unmerged   show unmerged files in the output"+'\n'+"    --[no-]resolve-undo   show resolve-undo information"+'\n'+"    -x, --exclude <pattern>"+'\n'+"                          skip files matching pattern"+'\n'+"    -X, --exclude-from <file>"+'\n'+"                          read exclude patterns from <file>"+'\n'+"    --[no-]exclude-per-directory <file>"+'\n'+"                          read additional per-directory exclude patterns in <file>"+'\n'+"    --exclude-standard    add the standard git exclusions"+'\n'+"    --full-name           make the output relative to the project top directory"+'\n'+"    --[no-]recurse-submodules"+'\n'+"                          recurse through submodules"+'\n'+"    --[no-]error-unmatch  if any <file> is not in the index, treat this as an error"+'\n'+"    --[no-]with-tree <tree-ish>"+'\n'+"                          pretend that paths removed since <tree-ish> are still present"+'\n'+"    --[no-]abbrev[=<n>]   use <n> digits to display object names"+'\n'+"    --[no-]debug          show debugging data"+'\n'+"    --[no-]deduplicate    suppress duplicate entries"+'\n'+"    --[no-]sparse         show sparse directories in the presence of a sparse index"+'\n'+"    --format <format>     format to use for the output"+'\n',129);}else specs.push(a);}var prefixes=specs.map(function(s){var rel=relative(fromBase(s));return rel==='.'?'':rel;});var sep=nul?'\0':'\n',text='';for(var e of entries()){if(prefixes.length&&!prefixes.some(function(p){return p===''||e.path===p||e.path.indexOf(p+'/')===0;}))continue;text+=(stage?e.mode.toString(8)+' '+e.id+' 0\t':'')+e.path+sep;}emit(text);}
function revParse(args){
  for(var i=0;i<args.length;i++){var a=args[i];
    if(a==='--show-toplevel')emit(root+'\n');
    else if(a==='--git-dir')emit((pathOf('.')===root?'.git':gitdir)+'\n');
    else if(a==='--is-inside-work-tree')emit('true\n');
    else if(a==='--abbrev-ref'){var ref=args[++i]||'HEAD';if(ref!=='HEAD')fail('fatal: unsupported --abbrev-ref '+ref,128);var branch=headRef();emit((branch?branch.replace('refs/heads/',''):'HEAD')+'\n');}
    else if(a==='--short'){emit(short(resolveRevision(args[++i]||'HEAD'))+'\n');}
    else emit((resolveRevision(a))+'\n');
  }
}
// A revision is HEAD or a local branch name. Anything else is git's "ambiguous argument" error.
function resolveRevision(name){
  var id='';
  if(name==='HEAD')id=currentCommit();
  else if(exists(gfile('refs/heads/'+name)))id=gread(gfile('refs/heads/'+name)).trim();
  if(!id)fail("fatal: ambiguous argument '"+name+"': unknown revision or path not in the working tree.\nUse '--' to separate paths from revisions, like this:\n'git <command> [<revision>...] -- [<file>...]'",128);
  return id;
}

function refNames(dirRel){var out=[],base=gitdir+'/'+dirRel;if(!exists(base))return out;(function walk(folder,prefix){for(var item of names(folder)){var n=childName(item);if(!n)continue;var full=folder+'/'+n;if(isDirPath(full))walk(full,prefix+n+'/');else out.push(prefix+n);}})(base,'');return out.sort();}
function branchCommand(args){
  var head=currentCommit(),ref=headRef(),current=ref?ref.replace('refs/heads/',''):null,all=false,remove=null,rest=[];
  for(var i=0;i<args.length;i++){var a=args[i];if(a==='-a'||a==='--all')all=true;else if(a==='-d'||a==='-D'||a==='--delete'){remove=args[++i];if(remove===undefined)fail('fatal: branch name required',128);}else if(a.charAt(0)==='-'&&a.length>1)fail("error: unknown option '"+a+"'",129);else rest.push(a);}
  if(remove!==null){
    if(remove===current)fail("error: Cannot delete branch '"+remove+"' checked out at '"+root+"'",1);
    if(!exists(gfile('refs/heads/'+remove)))fail("error: branch '"+remove+"' not found",1);
    var was=gread(gfile('refs/heads/'+remove)).trim();fs.rm(gfile('refs/heads/'+remove));emit('Deleted branch '+remove+' (was '+short(was)+').\n');return;
  }
  if(rest.length){var name=rest[0];assertBranch(name);if(exists(gfile('refs/heads/'+name)))fail("fatal: a branch named '"+name+"' already exists",128);if(!head)fail("fatal: not a valid object name: '"+(current||'HEAD')+"'",128);gwrite(gfile('refs/heads/'+name),head+'\n');return;}
  var text='';for(var n of refNames('refs/heads'))text+=(n===current?'* ':'  ')+n+'\n';
  // A symbolic remote ref (origin/HEAD) prints its target, as git does: "remotes/origin/HEAD -> origin/master".
  if(all)for(var r of refNames('refs/remotes')){var target=gread(gfile('refs/remotes/'+r)).trim();text+='  remotes/'+r+(target.indexOf('ref: ')===0?' -> '+target.slice(5).replace('refs/remotes/',''):'')+'\n';}
  emit(text);
}

function remoteEntries(){var cfg=isFilePath(gfile('config'))?gread(gfile('config')):'',out=[],re=/\[remote "([^"]+)"\]\s*\n\s*url = (\S+)/g,m;while((m=re.exec(cfg))!==null)out.push({name:m[1],url:m[2]});return out;}
function remoteCommand(args){
  var list=remoteEntries();
  if(!args.length){emit(list.map(function(r){return r.name+'\n';}).join(''));return;}
  if(args[0]==='-v'||args[0]==='--verbose'){emit(list.map(function(r){return r.name+'\t'+r.url+' (fetch)\n'+r.name+'\t'+r.url+' (push)\n';}).join(''));return;}
  if(args[0]==='add'){var name=args[1],url=args[2];if(!name||!url)fail('usage: git remote add <name> <url>',129);if(!/^[A-Za-z0-9_-]+$/.test(name))fail("fatal: '"+name+"' is not a valid remote name",128);if(list.some(function(r){return r.name===name;}))fail('error: remote '+name+' already exists.',3);if(!/^https:\/\/[^@\s]+$/.test(url))fail('git: HTTPS remotes only; credentials in URLs are forbidden');var cfg=isFilePath(gfile('config'))?gread(gfile('config')):'';gwrite(gfile('config'),cfg+'[remote "'+name+'"]\n\turl = '+url+'\n\tfetch = +refs/heads/*:refs/remotes/'+name+'/*\n');return;}
  fail("error: unknown subcommand: '"+args[0]+"'",129);
}

function run(){
// -C DIR runs the command as if started in DIR (repeatable, relative paths build on the previous one). -c sets a config value.
var pre=0;while(argv[pre]==='-c'||argv[pre]==='-C'){if(argv[pre]==='-C'){if(argv[pre+1]===undefined)fail('fatal: -C needs a path');workBase=fromBase(argv[pre+1]);pre+=2;continue;}var kv=argv[pre+1]||'',eq=kv.indexOf('=');if(eq<1)fail('fatal: -c expects name=value, got: '+kv);overrides[kv.slice(0,eq).toLowerCase()]=kv.slice(eq+1);pre+=2;}argv.splice(0,pre);
var cmd=argv.shift()||'help';if(cmd==='--version'||cmd==='version'){emit('git version 2.54.0 (Dusk browser)\n');return;}if(cmd==='help'||cmd==='--help'){emit('usage: git init|add|status|commit|log|branch|remote|rev-parse|clone|fetch|pull|push\n');return;}
if(cmd==='init'){root=fromBase(argv[0]);gitdir=root+'/.git';if(exists(gitdir+'/HEAD')){emit('Reinitialized existing Git repository in '+gitdir+'/\n');return;}mkdirp(gitdir+'/objects');mkdirp(gitdir+'/refs/heads');mkdirp(gitdir+'/refs/tags');gwrite(gfile('HEAD'),'ref: refs/heads/'+DEFAULT_BRANCH+'\n');gwrite(gfile('config'),'[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tbare = false\n\tlogallrefupdates = true\n');emit('Initialized empty Git repository in '+gitdir+'/\n');return;}
if(cmd==='clone'||cmd==='fetch'||cmd==='pull'||cmd==='push'){if(cmd==='clone'&&argv[1]){argv.display=argv[1];argv[1]=fromBase(argv[1]);}gitRemote(cmd,argv);return;}
repo();
if(cmd==='add'){addCommand(argv);return;}
if(cmd==='status'){statusReport();return;}
if(cmd==='commit'){commitCommand(argv);return;}
if(cmd==='log'){logCommand(argv);return;}
if(cmd==='ls-files'){lsFiles(argv);return;}
if(cmd==='rev-parse'){revParse(argv);return;}
if(cmd==='branch'){branchCommand(argv);return;}
if(cmd==='remote'){remoteCommand(argv);return;}
fail('git: '+cmd+' is not a git command',1);
}
// Everything here is synchronous (the host calls are blocking IPC), so the exit status set by finish() is read by the
// shell when the script ends, the same as the other builtins.
run();
`)};export{t as sources};