/*__ABX_OBF__*/var __abx$c47b59=(function(){function U(s){var b=atob(s),a=new Uint8Array(b.length),i=0;for(;i<b.length;i++)a[i]=b.charCodeAt(i);return a}function R(a,b){return((a<<b)|(a>>>(32-b)))>>>0}function CC(k,n,d){var K=new Uint32Array(8),N=new Uint32Array(3),o=new Uint8Array(d.length),S=new Uint32Array(16),W=new Uint32Array(16),ct=0,i,off,r,bl=new Uint8Array(64),v,nn;function Q(a,b,c,e){W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],16);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],12);W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],8);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],7)}for(i=0;i<8;i++)K[i]=(k[i*4]|(k[i*4+1]<<8)|(k[i*4+2]<<16)|(k[i*4+3]<<24))>>>0;for(i=0;i<3;i++)N[i]=(n[i*4]|(n[i*4+1]<<8)|(n[i*4+2]<<16)|(n[i*4+3]<<24))>>>0;for(off=0;off<d.length;off+=64){S[0]=0x61707865;S[1]=0x3320646e;S[2]=0x79622d32;S[3]=0x6b206574;S[4]=K[0];S[5]=K[1];S[6]=K[2];S[7]=K[3];S[8]=K[4];S[9]=K[5];S[10]=K[6];S[11]=K[7];S[12]=ct>>>0;S[13]=N[0];S[14]=N[1];S[15]=N[2];for(i=0;i<16;i++)W[i]=S[i];for(r=0;r<10;r++){Q(0,4,8,12);Q(1,5,9,13);Q(2,6,10,14);Q(3,7,11,15);Q(0,5,10,15);Q(1,6,11,12);Q(2,7,8,13);Q(3,4,9,14)}for(i=0;i<16;i++){v=(W[i]+S[i])>>>0;bl[i*4]=v&255;bl[i*4+1]=(v>>>8)&255;bl[i*4+2]=(v>>>16)&255;bl[i*4+3]=(v>>>24)&255}nn=Math.min(64,d.length-off);for(i=0;i<nn;i++)o[off+i]=d[off+i]^bl[i];ct++}return o}var K=U("ymFmg0Rmu7yPZ+Rqu7b9+kTPl/ie3tKaidp5CEV64ms="),P=["VOXW4I9nEKrVSsvxWa9bsg==","ajtY5b6SCeYuX7yK7Q==","SDrbQCmFQt6AUY9C/9gT31DOrTNN9cGhW6wl7kBvxlc=","rlHKEC42tbquEJpiQWQxCnd4DRdYusSKdwmX+GjX","UpHrghdz0ZodGAW2wg==","Y0RUNHd4amT0APe9C82p2IcRq8g9","KUA3X8Pz+VTZa5vHRe2m7XY0wh187pc=","iKgh+997J6Zu6ljxAlfpQyvjVQ==","FknMEzzJDFch1vdqrvsm8l+FR97C7rCsWA==","X0DS8OOi5wJniBMYWhf11he5","4UqRBFLu0aiFeoB/3aN1anRYG34=","MBf5cZEikk2lrBJwhOnXDRatqPcIcA==","3naAtiSGNbXlTHY46wrDXMETeQDIMZlB","R5hK88hyGB1Fa77/sMkCDj+JCSZ6VA==","tnyroLK9o3FTfVU9Rlsifi4+qZw=","+ghqR8K2efcTs2A5Vi+olxr0Zkw7gtGh","HkXt4siZ9qHhuGnB9ZtK7vyG","XMsHmcAR7IwK8IruLLZz/w==","GlFuHKGvmNTQ9Sk20xC2peMTydcsOg==","vW7SYLP1wukY0/Wk+Kvi","oNLQqGg7X1vR1YMs/tinU2Oaq2GrIw==","U0uk8ZUSqRXDealW0gnrhs4OEA==","FDferIMBPCEIU5FK1/VdsFQCQBnOq734PxM=","MV3EknyHhBAKRBqEL7uobhoJi6xBfftjnfVio1PsTDB1","RV3OastUpKw/TQXA+ip2dtnbrw==","WiYUntIOoR1hxHCcVKuH8oHZK8/J+qyhsw==","LcCvoMYyHco/XNUjBSTqsiWJpUNx6nJd3N2oHGx40b8bifSyG0b/silukIp8E3SZIZE4CtekFw==","vE4J+S77y8izNVLbcL1l1Oq/IbGhr/0BoQ==","4Tmjhd0eGuVHgkEz","QUfR728XPOdqqSC7hLU5SqQN4kY=","PViGMI0H6TwdX3mKjA==","L95jBFl2HMKPb+8qQw==","9Dzy0Wu/8uhMMFVzKlhJfqqj5g==","Ejvd8Gdbq3X/Ursd3og=","je2qha189JxFNsbee3ARpj4pHRY=","YsDzSSijObRe/tB6jQ==","4KLXFvPqAeO3BU/RKg==","rdyS8rJ2NWsM7mt55g==","34qcGCiqbxvC+p2dIh/eCui3vuJT4U9z2hcKTK+zBzMyww==","67APU0JMhxS+tvkIT2NJ","2nQqV9CJdxvBmCKzuO9Vv5bhVCwyXrqayPPvPMI=","ENNwstWA4SW9zGXuXlYunTg0Vxwqb9T6bTKwQoGxw91xg9cP8rrkiVio+g==","f3aQArwvpb7KHC+kFF61p1op5BO94moJsKKbCpIimS6PaZA=","jFu+pIFCJgt5TAbGB6TNFrORU4RdS5GOr4vRUPKd34a8sJbBE3vkHBpuoTyM","92hFU61DBAHB84KrIA==","wF81ip/OkUtRW/0e/VLKb7F+","x0vmnclvHCmLpU5t0JlfEQ==","MFaosuSAmLP0if+rrTnUXBLIzkuULgU=","2aBO7+An3bQ8khtAx1U42hzIcuCv7H533xz0A49hZG/Vw8qkcRYJI9c=","7DDctpKy2yW0TX2Q83pvjPJPkQ==","wi7A4w818mjGi0sso+Bz","87bCfxzUzptDsPcEAzpCW3fmHpw9XtVl3WL2pvmnZcKVXbTqYFZJWIp4I/4z","z++z/yshyvOEdpmHkG/DrrO6+a0kiinchPl2Jg==","cBDavdDiKl9nDq1/VQPaF5O2","WYgt8wqn05g8i9OuGU5XH+Mr","4gtNgXlztxU7S+5V9TUNmyhl","eNbHpkLI9Nk2dj96s8mMm8GA","pLhfqerrF7yiCGTO4AR9WqhEvf4=","EoA4PLlI5lsWeH8FjWaRtweBNrwX3TlQa2wN/Nw8","zYM3FuTtVuws6OEKXZuJXAWNt/XeDIKYhmU44PTm6Q==","PLOiR3N76qw6ySy0q7KlgGeXsz4i6Sn69JU=","elf8DRZV2oVZGgiOxnzKN/1nCqV/Vbq7S5ecErebGz6EjXBWkXJOqGlGmoT4dRkP0g==","kuYaqaYTD4n+Bnegc9u4f+VQdpQoOCbXN6EumBnFwkzAyloC5dUA19zsWaqCTJhULcg=","KJomTCmAsn+EWUelvA/r4zb7LyCkNGeysO5n+kWqjyUp","PKlApEe3GlPSXLtjzkMc152tYXPtTmNAs8DAPlRVmkAX","DN9pXTi3BHQrR8lxM4VPpU6B2/JXzq1WJ6+d","Z3Jm38TOTY5frsl7/O+aGE1H8P0nduG1kX6i","RBXJNwccK0zPFxnKNg==","jyfaGfT874IBkP/oFnExns4uJvUvjqPYHolGiw==","mhzgHt4jpd5y0mscRZ4QYfud0afFW17t52qMjkqcPQ==","2So9+kkfHLFr9GmqD7X3hcjfxDXe844=","d1y3UYOxhn4eKlnPHA==","EfQMSExy44Ss8ZMJpYH0BjjH2w==","04HExfF2/S7rTDBq9GJM","TGvwiFDtAL9Xm+tcJZ+lU3YiQCTMuTZhjNt0NcYdLhQxuw==","+wu5qHVunfJPcJbmYJWp61y9qwPaDe27ocQ6FV6TNit5+LA=","waSVLhDhOdnBnOatd1+xaFrpgo5SAS165i6uXhNrUk9X/o4=","UybhHWNyjptLFelqkiOxHuaHHsxGALwk4duNgFKQO2Nb3kJJZw==","lLTi1JYxoA2ArSKYBguF8OZE3zYRWPiaxv7V0Q==","amc7f1Q4hXisLMiBZs9NRYxFsH/ks6zyO3m2Qw2C","WhgDayVPyJ8Yo4a8tJrca4QzjOnUJpRa8xU=","atytvrkLCrXHlr52SFZofgVOFqbJ2A==","CKHKHqFbUlg8EhIMRvKjpix5VzR8leS1ZD0=","TDdNlj7zk6X0/djqC3+ZdQ==","gJTMOQIHjXjUcIxnzKaXUGONqlgZPIjM","VSN48D14BtZCYqDDjM3c7J39sBPVJWShfXEWR/n4YyyVcLJhH1vL3nN+afLKbF3FQkkRhAqIWMv0RB/76wq07Vu8ryM8KU/LlDN1Hk0uFGT+CCkEKq3Mw1rGW4N2mxCg9p8S6ARyzZJ/QstJROUfXIFwB+8jX4WOqMbt9rw=","Lcl7P+Zjrw+r3rBr8zZeTG+TcCqFuev2vmrS3Q==","SXzPjsTfK8YN4p/3Wf7I3E9M1WvfWcet8Oma0Q4L76m4psc=","pN22mVRbguRH4Hilwfef74mtLlkY0Amc9mYLf1ryVQ7pXuG8lbOAOQN9/Sgl","bGk98+cASLPKiULzbtzi/to=","bQkHlU/JTmoXqBflcJPOukH/","U1Q16XR2NQ4TfF4rsno=","41HVYs1RUffWKvPLykz4nfnQ6/QF","BnqL5t7yBiutsqz/FCKyj/hjbdl29Q==","e3Smx5UUdWA8rsr0tLF8KcM=","7RWp3qAT81uxdf1HcPefjVOO7DBDuCE=","w7thwR1YDTQ4dqawzbN6Ug==","5f0kc/c1EJxk/qiQq6udBAOK","2Jw+KWXpTLQwawHOkV0Pjv1oUSsJrTHX","YxwofeqzPZtYRy7wC5xDsqyz9BMVMkEqp/JfrmRCvjz6M1o=","a9Ow6+XMEucScIveiUwfjmxw3gvFjqy4Kh8=","ZMdUvEEcvbAeGSvjNg0tAh6fcmk8k6r/FsTs","8hF+AoihHZxT0MOPOPDCDmae+Osf3KlIFz0jEA==","8OFvc8ZRDfWC/qC2J3qluvP7fof7","Zp+B14g9XIguCzwDdUUPM5M7UnxHi9uWH/4=","DSEdUbqH18d8b2KcvQ5JbsaPTyENGbhouF/g","RUO11CYX3siwXzGbTfuDQwCuFF53QtkRaXa/oQ==","XgVLjJNnztnduLwVQA4Ibpn5qaDTHnO37czvU10=","HFupVMZ+bNBTX43P9fR0QdJMG3Y+","4VInrM/MmAr+GHoqm9pQ8Sgno/pl0CiLFv9MCPKI","Ws4EazuCtCFWaR7a0uZ0AZolng==","SYosTUDaiGkUdtIoNFweobR5oy/TAamo","BrcAvAA3eZUXDcsdZNAWcTPFTmawAyUhTjyoMYobysAmslqsy6XqwEEgKFM40sJRe/M+hvIOgFnm0JTfgvuxO7rmbxjOtHOKpMlOnCIwlI8LC2LAdNbQJsKqzqiTdJQn/FR00jJbNiWZytQY4aSBYNQiRzp72D5aB8JEyVFzmBEA7Csd","1Vv17/dsiySc4xiFItp7AryAK6k=","yr07yrTUdC+fulZPmnQ6ww1lRHnW7zPk","FMUV+OfAnD03rWAGGVixkLiApt5zu8vwb7rp42k0Gg==","Xu6LTv7wz5b19v946sFQqpayuZuEEDRXPko=","FHdXDBDPj8urn4rNOVq8ingyFqtfLBLRHSIHr4c=","SQRpbxxVJSTEh/oTPhK/YXuO1nY+uQ==","YG+eC8fDA8OvhZ5mUih5R8kAy1ec2vVpfxo=","VwEj4DMBt6KMZhOMhBd6IuaMj3uZdWKeIajqpS3zPYX/oiSqzgKPn6InePw6wY0BYN4dIX0cySS98g==","bO2pLb8Z/IHhwkbPPEc=","jHwv9b8oCtZeSuz0UkP7uhavfw==","yQB/ZwSGFoGbloNaWBRAFwBJie3iTYP+aTChWVCZu8yXrIBzgLuHVLQA","XYsXOQFE2a0dt3s220J1YhzARrSFoFopo2STxBfIDw==","7y3QJEC91TwibiBz5y1xFM7hrvaHQKuw75o=","Wa/DxuKu8ReInUzF7v2uPvVzzP7EwQ==","Tl4ZyQjm+EKw60iSwq8U/sW0lxOdJC2o35k=","nrdWZBFFMATMOqAJYGa+/kE4UIjXtUtLylOhlghSBw==","PKdEMvF05XCRslzdtiqztA==","QOlBQbjc9K3lOP/xTguBDr08uPMgxwg=","e4TrbTU6CX3kjeqeq02iKAjd79qYtohbhpo=","wd1QfCy295HbUAk918HLyro1QokjbrFYp2w=","NWCrdD4UYMwWwvzpuhjW4w==","w7Xz4pU8l98jDMtibhYzrk+GHM7ZwT779w7P2Vomwf/XU5+UiMv2RF/dUAqTDcRyoa6DFkguCYWn7FAUjXvELvA=","qE0jZ6B34VI1/priGC2yUzCvLsNOwUBVaw==","COJeRgZlsBz0BdY4lTpYFtQDHpW2w4Bg2RQkppc=","gGYYrlWgcfmgQeNx42C5RH30bno3x/95LV+9qhCtg/Q5uvgrg1wYHVeJI9U=","sfwOZw/2yxnInyjotGQKrZ4mGc/ES04oKmntvw==","SyJTVqRzwq7eU+uRi4SfAng0i6KRlZuCxai2R/e/NgqnL8EVhwo=","Zvb+bn26dFi4M9qbWi1EtZdhV4IZ+89pNlxidCyO/PrBtw==","DglcmSN4Zu/UG8kGp+3Yt2MhfA==","c+65UW2Ix6N4oQ52su8KxP+4313rlfGJ0JV03Cg=","xK8iQCofgvtTz/uAEnxkz1nW7mTCt0vzQ7bNMXW6NTgPlufv6N333TbsSoXPRbfjAlnNkOFpawTq1D1+","PzGVIylTdvuqvNR91lDV427xgcQhSYShQafizlC1ns4C0c5EpPJ0SLfkqch83w==","UZKBz/WjTJg3+YSgT+2e3P5d","9OBf1lx/byeeb14jcKD74v+q71OO0BItvkGyd+Q=","i9ogxoCc0xtJmD8cIfS8R40ASu9pdIipoO6sy0qY8KQMGDVPTUMKSfqkSbRXIjYMajivK6Dk6vIY+czLNeMGJiOqLoPvVrPuAtl2fQ==","rA6FuYqNb2H5K4yWFCFGc7epT/vHzZDXog==","NUogjKuoj2kDH/afyA==","+T5vRmnxRiqw0dx2GJp6snnjTGNA3ZrbduUeK8KZnYSdKjU=","RUwlh4IE4TzxJ5i3J7MGp0KdblgwZqDwdjphJLGLpC/371qt","2cCNEr2WSDSYYwjnE9ED0Gx4pnhqG7A492yu","fF7VOOyPLJMR2ILSD9eM1B+pzBljOYhVQ5E=","oaD6ZVqHhJx5uZEMu2xruWPQsb+2lSZtKEmY","KPXXjuAW+2oGGi2YzBsJ9N+eHEZ2fPcHiQviLCZQvQxlw9JU","7par3HXtoxHI8zoaxKhpJa2fPoEoHuqwpUEy2n0q36oUjtj9czbbAyd5/mcW","aRxenUm3g7Qm8VLE1gdmwzw32i8=","QoxaRIMJEYhN0DRFjSll5qQ+/DZvex8UTPWcZWnXmdjIH1xPpnDOMhYYzWjSRb3BpG24W8+IiNxvFRbJmm68JW75sFJhOswbTT9MRyHyU2x/rNEjcTvsRH84c75xq9d+f95dJ9HPbOcrFdMYfPl6M7Rml4amyGMEW495c4I=","8PkK/MQnXv4UEQ/aALK4","38nWs36Mob713fbH7JLbLXQqx9x8gZRnWaJna9J6PgVrqRpyt+MoSHWHVls=","gw/HX8odC3oA0yKHsQ==","idWN0lGruxccq2CFwGyWtb7CJCM9egEfjOTg5+pJ/AFVF+ojKUoo2ZfKIA==","4ul2ezeZpnbNzz6hvII=","Zx6CN7MLXSEL6v1rUDWfeELtenjliu1R","+lPE/505QycAh+IwUsX1lbt7ftACSi3I2VDzRw==","UZhk6LzBLeAi8MceUvzooZWGgjfRgr6Udg==","E3t9lD32SxQTKRfG0qly4BcZ8QF7Wfw="],C=[],TD=new TextDecoder();return function(i){if(C[i]!==void 0)return C[i];var raw=U(P[i]),n=raw.subarray(0,12),c=raw.subarray(12);return C[i]=TD.decode(CC(K,n,c))}})();
var Q = Object.defineProperty;
var o = (e, t) => Q(e, __abx$c47b59(0), { value: t, configurable: true }), R = ((e) => typeof require < __abx$c47b59(1) ? require : typeof Proxy < __abx$c47b59(1) ? new Proxy(e, { get: (t, n) => (typeof require < __abx$c47b59(1) ? require : t)[n] }) : e)(function(e) {
  if (typeof require < __abx$c47b59(1)) return require.apply(this, arguments);
  throw Error(__abx$c47b59(2) + e + __abx$c47b59(3));
});
var W = (() => {
  for (var e = new Uint8Array(128), t = 0; t < 64; t++) e[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
  return (n) => {
    for (var i = n.length, s = new Uint8Array((i - (n[i - 1] == __abx$c47b59(4)) - (n[i - 2] == __abx$c47b59(4))) * 3 / 4 | 0), r = 0, a = 0; r < i; ) {
      var c = e[n.charCodeAt(r++)], l = e[n.charCodeAt(r++)], d = e[n.charCodeAt(r++)], u = e[n.charCodeAt(r++)];
      s[a++] = c << 2 | l >> 4, s[a++] = l << 4 | d >> 2, s[a++] = d << 6 | u;
    }
    return s;
  };
})();
function Z(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
o(Z, __abx$c47b59(5));
function P(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
o(P, __abx$c47b59(6));
function D(e) {
  return function() {
    return this[e];
  };
}
o(D, __abx$c47b59(7));
var N = [__abx$c47b59(8), __abx$c47b59(9), __abx$c47b59(10), __abx$c47b59(11)], I = [__abx$c47b59(12), __abx$c47b59(13)], S = [__abx$c47b59(14), __abx$c47b59(15), __abx$c47b59(16)], ee = [__abx$c47b59(17)], te = [__abx$c47b59(18)], F = N.concat(I, S, ee, te);
function p(e) {
  if (e) for (var t = 0; t < F.length; t++) e[F[t]] !== void 0 && this[__abx$c47b59(19) + P(F[t])](e[F[t]]);
}
o(p, __abx$c47b59(20));
p.prototype = { getArgs: o(function() {
  return this.args;
}, __abx$c47b59(21)), setArgs: o(function(e) {
  if (Object.prototype.toString.call(e) !== __abx$c47b59(22)) throw new TypeError(__abx$c47b59(23));
  this.args = e;
}, __abx$c47b59(24)), getEvalOrigin: o(function() {
  return this.evalOrigin;
}, __abx$c47b59(25)), setEvalOrigin: o(function(e) {
  if (e instanceof p) this.evalOrigin = e;
  else if (e instanceof Object) this.evalOrigin = new p(e);
  else throw new TypeError(__abx$c47b59(26));
}, __abx$c47b59(27)), toString: o(function() {
  var e = this.getFileName() || __abx$c47b59(28), t = this.getLineNumber() || __abx$c47b59(28), n = this.getColumnNumber() || __abx$c47b59(28), i = this.getFunctionName() || __abx$c47b59(28);
  return this.getIsEval() ? e ? __abx$c47b59(29) + e + __abx$c47b59(30) + t + __abx$c47b59(30) + n + __abx$c47b59(31) : __abx$c47b59(32) + t + __abx$c47b59(30) + n : i ? i + __abx$c47b59(33) + e + __abx$c47b59(30) + t + __abx$c47b59(30) + n + __abx$c47b59(31) : e + __abx$c47b59(30) + t + __abx$c47b59(30) + n;
}, __abx$c47b59(34)) };
p.fromString = o(function(t) {
  var n = t.indexOf(__abx$c47b59(35)), i = t.lastIndexOf(__abx$c47b59(31)), s = t.substring(0, n), r = t.substring(n + 1, i).split(__abx$c47b59(36)), a = t.substring(i + 1);
  if (a.indexOf(__abx$c47b59(37)) === 0) var c = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a, __abx$c47b59(28)), l = c[1], d = c[2], u = c[3];
  return new p({ functionName: s, args: r || void 0, fileName: l, lineNumber: d || void 0, columnNumber: u || void 0 });
}, __abx$c47b59(38));
for (v = 0; v < N.length; v++) p.prototype[__abx$c47b59(39) + P(N[v])] = D(N[v]), p.prototype[__abx$c47b59(19) + P(N[v])] = /* @__PURE__ */ (function(e) {
  return function(t) {
    this[e] = !!t;
  };
})(N[v]);
var v;
for (b = 0; b < I.length; b++) p.prototype[__abx$c47b59(39) + P(I[b])] = D(I[b]), p.prototype[__abx$c47b59(19) + P(I[b])] = /* @__PURE__ */ (function(e) {
  return function(t) {
    if (!Z(t)) throw new TypeError(e + __abx$c47b59(40));
    this[e] = Number(t);
  };
})(I[b]);
var b;
for (E = 0; E < S.length; E++) p.prototype[__abx$c47b59(39) + P(S[E])] = D(S[E]), p.prototype[__abx$c47b59(19) + P(S[E])] = /* @__PURE__ */ (function(e) {
  return function(t) {
    this[e] = String(t);
  };
})(S[E]);
var E, A = p;
function ne() {
  var e = /^\s*at .*(\S+:\d+|\(native\))/m, t = /^(eval@)?(\[native code])?$/;
  return { parse: o(function(i) {
    if (i.stack && i.stack.match(e)) return this.parseV8OrIE(i);
    if (i.stack) return this.parseFFOrSafari(i);
    throw new Error(__abx$c47b59(41));
  }, __abx$c47b59(42)), extractLocation: o(function(i) {
    if (i.indexOf(__abx$c47b59(30)) === -1) return [i];
    var s = /(.+?)(?::(\d+))?(?::(\d+))?$/, r = s.exec(i.replace(/[()]/g, __abx$c47b59(28)));
    return [r[1], r[2] || void 0, r[3] || void 0];
  }, __abx$c47b59(43)), parseV8OrIE: o(function(i) {
    var s = i.stack.split(__abx$c47b59(44)).filter(function(r) {
      return !!r.match(e);
    }, this);
    return s.map(function(r) {
      r.indexOf(__abx$c47b59(45)) > -1 && (r = r.replace(/eval code/g, __abx$c47b59(46)).replace(/(\(eval at [^()]*)|(,.*$)/g, __abx$c47b59(28)));
      var a = r.replace(/^\s+/, __abx$c47b59(28)).replace(/\(eval code/g, __abx$c47b59(35)).replace(/^.*?\s+/, __abx$c47b59(28)), c = a.match(/ (\(.+\)$)/);
      a = c ? a.replace(c[0], __abx$c47b59(28)) : a;
      var l = this.extractLocation(c ? c[1] : a), d = c && a || void 0, u = [__abx$c47b59(46), __abx$c47b59(47)].indexOf(l[0]) > -1 ? void 0 : l[0];
      return new A({ functionName: d, fileName: u, lineNumber: l[1], columnNumber: l[2], source: r });
    }, this);
  }, __abx$c47b59(48)), parseFFOrSafari: o(function(i) {
    var s = i.stack.split(__abx$c47b59(44)).filter(function(r) {
      return !r.match(t);
    }, this);
    return s.map(function(r) {
      if (r.indexOf(__abx$c47b59(49)) > -1 && (r = r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, __abx$c47b59(50))), r.indexOf(__abx$c47b59(37)) === -1 && r.indexOf(__abx$c47b59(30)) === -1) return new A({ functionName: r });
      var a = /((.*".+"[^@]*)?[^@]*)(?:@)/, c = r.match(a), l = c && c[1] ? c[1] : void 0, d = this.extractLocation(r.replace(a, __abx$c47b59(28)));
      return new A({ functionName: l, fileName: d[0], lineNumber: d[1], columnNumber: d[2], source: r });
    }, this);
  }, __abx$c47b59(51)) };
}
o(ne, __abx$c47b59(52));
var re = new ne();
var M = re;
function ie() {
  var _a;
  if (typeof API < __abx$c47b59(1) && API !== globalThis.API) return API.runtimeEnv;
  let e = typeof Bun < __abx$c47b59(1), t = typeof Deno < __abx$c47b59(1), n = typeof process == __abx$c47b59(53) && typeof process.versions == __abx$c47b59(53) && typeof process.versions.node == __abx$c47b59(54) && !process.browser, i = typeof navigator == __abx$c47b59(53) && typeof navigator.userAgent == __abx$c47b59(54) && navigator.userAgent.indexOf(__abx$c47b59(55)) === -1 && navigator.userAgent.indexOf(__abx$c47b59(56)) > -1, s = typeof read == __abx$c47b59(57) && typeof load == __abx$c47b59(57), r = typeof navigator == __abx$c47b59(53) && ((_a = navigator.userAgent) == null ? void 0 : _a.includes(__abx$c47b59(58)));
  return oe({ IN_BUN: e, IN_DENO: t, IN_NODE: n, IN_SAFARI: i, IN_SHELL: s, IN_WORKERD: r });
}
o(ie, __abx$c47b59(59));
var f = ie();
function oe(e) {
  let t = e.IN_NODE && typeof module < __abx$c47b59(1) && module.exports && typeof R == __abx$c47b59(57) && typeof __dirname == __abx$c47b59(54), n = e.IN_NODE && !t, i = !e.IN_NODE && !e.IN_DENO && !e.IN_BUN, s = i && typeof window < __abx$c47b59(1) && typeof window.document < __abx$c47b59(1) && typeof document.createElement == __abx$c47b59(57) && __abx$c47b59(60) in window && typeof globalThis.importScripts != __abx$c47b59(57), r = i && typeof globalThis.WorkerGlobalScope < __abx$c47b59(1) && typeof globalThis.self < __abx$c47b59(1) && globalThis.self instanceof globalThis.WorkerGlobalScope;
  if (r && ae()) throw new Error(__abx$c47b59(61));
  let a = { ...e, IN_BROWSER: i, IN_BROWSER_MAIN_THREAD: s, IN_BROWSER_WEB_WORKER: r, IN_NODE_COMMONJS: t, IN_NODE_ESM: n };
  if (!(a.IN_BROWSER_MAIN_THREAD || a.IN_BROWSER_WEB_WORKER || a.IN_NODE || a.IN_SHELL || a.IN_WORKERD)) throw new Error((__abx$c47b59(62)+String(JSON.stringify(a))+__abx$c47b59(28)));
  return a;
}
o(oe, __abx$c47b59(63));
function ae() {
  try {
    return globalThis.importScripts(__abx$c47b59(64)), true;
  } catch {
    return false;
  }
}
o(ae, __abx$c47b59(65));
var $, x, B, L;
async function C() {
  if (!f.IN_NODE || ($ = (await import("node:url")).default, B = await import("node:fs"), L = await import("node:fs/promises"), (await import("node:vm")).default, x = await import("node:path"), T = x.sep, typeof R < __abx$c47b59(1))) return;
  let e = B, t = await import("node:crypto"), n = await import("./c0.js"), i = await import("node:child_process"), s = { fs: e, crypto: t, ws: n, child_process: i };
  globalThis.require = function(r) {
    return s[r];
  };
}
o(C, __abx$c47b59(66));
function le(e, t) {
  return x.resolve(t || __abx$c47b59(67), e);
}
o(le, __abx$c47b59(68));
function ce(e, t) {
  return t === void 0 && (t = location), new URL(e, t).toString();
}
o(ce, __abx$c47b59(69));
var w;
f.IN_NODE ? w = le : f.IN_SHELL ? w = o((e) => e, __abx$c47b59(70)) : w = ce;
var T;
f.IN_NODE || (T = __abx$c47b59(71));
function de(e, t) {
  return e.startsWith(__abx$c47b59(72)) && (e = e.slice(7)), e.includes(__abx$c47b59(73)) ? { response: fetch(e) } : { binary: L.readFile(e).then((n) => new Uint8Array(n.buffer, n.byteOffset, n.byteLength)) };
}
o(de, __abx$c47b59(74));
function ue(e, t) {
  if (e.startsWith(__abx$c47b59(72)) && (e = e.slice(7)), e.includes(__abx$c47b59(73))) throw new Error(__abx$c47b59(75));
  return { binary: Promise.resolve(new Uint8Array(readbuffer(e))) };
}
o(ue, __abx$c47b59(76));
function fe(e, t) {
  let n = new URL(e, location);
  return { response: fetch(n, t ? { integrity: t } : {}) };
}
o(fe, __abx$c47b59(77));
var _;
f.IN_NODE ? _ = de : f.IN_SHELL ? _ = ue : _ = fe;
async function j(e, t) {
  let { response: n, binary: i } = _(e, t);
  if (i) return i;
  let s = await n;
  if (!s.ok) throw new Error((__abx$c47b59(78)+String(e)+__abx$c47b59(79)));
  return new Uint8Array(await s.arrayBuffer());
}
o(j, __abx$c47b59(80));
var O;
f.IN_NODE ? O = me : O = o(async (e) => await import(e), __abx$c47b59(81));
async function me(e) {
  return e.startsWith(__abx$c47b59(72)) && (e = e.slice(7)), e.includes(__abx$c47b59(73)) ? await import(e) : await import($.pathToFileURL(e).href);
}
o(me, __abx$c47b59(82));
async function H(e) {
  if (f.IN_NODE) {
    await C();
    let t = await L.readFile(e, { encoding: __abx$c47b59(83) });
    return JSON.parse(t);
  } else if (f.IN_SHELL) {
    let t = read(e);
    return JSON.parse(t);
  } else return await (await fetch(e)).json();
}
o(H, __abx$c47b59(84));
async function J() {
  if (f.IN_NODE_COMMONJS) return __dirname;
  let e;
  try {
    throw new Error();
  } catch (i) {
    e = i;
  }
  let t = M.parse(e)[0].fileName;
  if (f.IN_NODE && !t.startsWith(__abx$c47b59(72)) && (t = (__abx$c47b59(72)+String(t)+__abx$c47b59(28))), f.IN_NODE_ESM) {
    let i = await import("node:path");
    return (await import("node:url")).fileURLToPath(i.dirname(t));
  }
  let n = t.lastIndexOf(T);
  if (n === -1) throw new Error(__abx$c47b59(85));
  return t.slice(0, n);
}
o(J, __abx$c47b59(86));
function V(e) {
  var _a;
  return e.substring(0, e.lastIndexOf(__abx$c47b59(71)) + 1) || ((_a = globalThis.location) == null ? void 0 : _a.toString()) || __abx$c47b59(67);
}
o(V, __abx$c47b59(87));
function z(e) {
  let t = e.FS, n = e.FS.filesystems.MEMFS, i = e.PATH, s = { DIR_MODE: 16895, FILE_MODE: 33279, mount: o(function(r) {
    if (!r.opts.fileSystemHandle) throw new Error(__abx$c47b59(88));
    return n.mount.apply(null, arguments);
  }, __abx$c47b59(89)), syncfs: o(async (r, a, c) => {
    try {
      let l = s.getLocalSet(r), d = await s.getRemoteSet(r), u = a ? d : l, y = a ? l : d;
      await s.reconcile(r, u, y), c(null);
    } catch (l) {
      c(l);
    }
  }, __abx$c47b59(90)), getLocalSet: o((r) => {
    let a = /* @__PURE__ */ Object.create(null);
    function c(u) {
      return u !== __abx$c47b59(67) && u !== __abx$c47b59(91);
    }
    o(c, __abx$c47b59(92));
    function l(u) {
      return (y) => i.join2(u, y);
    }
    o(l, __abx$c47b59(93));
    let d = t.readdir(r.mountpoint).filter(c).map(l(r.mountpoint));
    for (; d.length; ) {
      let u = d.pop(), y = t.stat(u);
      t.isDir(y.mode) && d.push.apply(d, t.readdir(u).filter(c).map(l(u))), a[u] = { timestamp: y.mtime, mode: y.mode };
    }
    return { type: __abx$c47b59(94), entries: a };
  }, __abx$c47b59(95)), getRemoteSet: o(async (r) => {
    let a = /* @__PURE__ */ Object.create(null), c = await pe(r.opts.fileSystemHandle);
    for (let [l, d] of c) l !== __abx$c47b59(67) && (a[i.join2(r.mountpoint, l)] = { timestamp: d.kind === __abx$c47b59(96) ? new Date((await d.getFile()).lastModified) : /* @__PURE__ */ new Date(), mode: d.kind === __abx$c47b59(96) ? s.FILE_MODE : s.DIR_MODE });
    return { type: __abx$c47b59(97), entries: a, handles: c };
  }, __abx$c47b59(98)), loadLocalEntry: o((r) => {
    let c = t.lookupPath(r, {}).node, l = t.stat(r);
    if (t.isDir(l.mode)) return { timestamp: l.mtime, mode: l.mode };
    if (t.isFile(l.mode)) return c.contents = n.getFileDataAsTypedArray(c), { timestamp: l.mtime, mode: l.mode, contents: c.contents };
    throw new Error(__abx$c47b59(99));
  }, __abx$c47b59(100)), storeLocalEntry: o((r, a) => {
    if (t.isDir(a.mode)) t.mkdirTree(r, a.mode);
    else if (t.isFile(a.mode)) t.writeFile(r, a.contents, { canOwn: true });
    else throw new Error(__abx$c47b59(99));
    t.chmod(r, a.mode), t.utime(r, a.timestamp, a.timestamp);
  }, __abx$c47b59(101)), removeLocalEntry: o((r) => {
    var a = t.stat(r);
    t.isDir(a.mode) ? t.rmdir(r) : t.isFile(a.mode) && t.unlink(r);
  }, __abx$c47b59(102)), loadRemoteEntry: o(async (r) => {
    if (r.kind === __abx$c47b59(96)) {
      let a = await r.getFile();
      return { contents: new Uint8Array(await a.arrayBuffer()), mode: s.FILE_MODE, timestamp: new Date(a.lastModified) };
    } else {
      if (r.kind === __abx$c47b59(103)) return { mode: s.DIR_MODE, timestamp: /* @__PURE__ */ new Date() };
      throw new Error(__abx$c47b59(104) + r.kind);
    }
  }, __abx$c47b59(105)), storeRemoteEntry: o(async (r, a, c) => {
    let l = r.get(i.dirname(a)), d = t.isFile(c.mode) ? await l.getFileHandle(i.basename(a), { create: true }) : await l.getDirectoryHandle(i.basename(a), { create: true });
    if (d.kind === __abx$c47b59(96)) {
      let u = await d.createWritable();
      await u.write(c.contents), await u.close();
    }
    r.set(a, d);
  }, __abx$c47b59(106)), removeRemoteEntry: o(async (r, a) => {
    await r.get(i.dirname(a)).removeEntry(i.basename(a)), r.delete(a);
  }, __abx$c47b59(107)), reconcile: o(async (r, a, c) => {
    let l = 0, d = [];
    Object.keys(a.entries).forEach(function(m) {
      let g = a.entries[m], h = c.entries[m];
      (!h || t.isFile(g.mode) && g.timestamp.getTime() > h.timestamp.getTime()) && (d.push(m), l++);
    }), d.sort();
    let u = [];
    if (Object.keys(c.entries).forEach(function(m) {
      a.entries[m] || (u.push(m), l++);
    }), u.sort().reverse(), !l) return;
    let y = a.type === __abx$c47b59(97) ? a.handles : c.handles;
    for (let m of d) {
      let g = i.normalize(m.replace(r.mountpoint, __abx$c47b59(71))).substring(1);
      if (c.type === __abx$c47b59(94)) {
        let h = y.get(g), X = await s.loadRemoteEntry(h);
        s.storeLocalEntry(m, X);
      } else {
        let h = s.loadLocalEntry(m);
        await s.storeRemoteEntry(y, g, h);
      }
    }
    for (let m of u) if (c.type === __abx$c47b59(94)) s.removeLocalEntry(m);
    else {
      let g = i.normalize(m.replace(r.mountpoint, __abx$c47b59(71))).substring(1);
      await s.removeRemoteEntry(y, g);
    }
  }, __abx$c47b59(108)) };
  e.FS.filesystems.NATIVEFS_ASYNC = s;
}
o(z, __abx$c47b59(109));
var pe = o(async (e) => {
  let t = [];
  async function n(s) {
    for await (let r of s.values()) t.push(r), r.kind === __abx$c47b59(103) && await n(r);
  }
  o(n, __abx$c47b59(110)), await n(e);
  let i = /* @__PURE__ */ new Map();
  i.set(__abx$c47b59(67), e);
  for (let s of t) {
    let r = (await e.resolve(s)).join(__abx$c47b59(71));
    i.set(r, s);
  }
  return i;
}, __abx$c47b59(111));
var G = W(__abx$c47b59(112));
var ge = (async function() {
  if (!(globalThis.navigator && (/iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === __abx$c47b59(113) && typeof navigator.maxTouchPoints < __abx$c47b59(1) && navigator.maxTouchPoints > 1))) try {
    let t = await WebAssembly.compile(G);
    return await WebAssembly.instantiate(t);
  } catch (t) {
    if (t instanceof WebAssembly.CompileError) return;
    throw t;
  }
})();
async function K() {
  let e = await ge;
  if (e) return e.exports;
  let t = Symbol(__abx$c47b59(114));
  return { Jsv_GetError_import: o(() => t, __abx$c47b59(115)), JsvError_Check: o((n) => n === t, __abx$c47b59(116)) };
}
o(K, __abx$c47b59(117));
function q(e) {
  let t = { config: e, runtimeEnv: f }, n = { noImageDecoding: true, noAudioDecoding: true, noWasmDecoding: false, preRun: Ne(e), print: e.stdout, printErr: e.stderr, onExit(i) {
    n.exitCode = i;
  }, thisProgram: e._sysExecutable, arguments: e.args, API: t, locateFile: o((i) => e.indexURL + i, __abx$c47b59(118)), instantiateWasm: Ie(e.indexURL) };
  return n;
}
o(q, __abx$c47b59(119));
function ve(e) {
  return function(t) {
    let n = __abx$c47b59(71);
    try {
      t.FS.mkdirTree(e);
    } catch (i) {
      console.error((__abx$c47b59(120)+String(e)+__abx$c47b59(121))), console.error(i), console.error((__abx$c47b59(122)+String(n)+__abx$c47b59(123))), e = n;
    }
    t.FS.chdir(e);
  };
}
o(ve, __abx$c47b59(124));
function be(e) {
  return function(t) {
    Object.assign(t.ENV, e);
  };
}
o(be, __abx$c47b59(125));
function Ee(e) {
  return e ? [async (t) => {
    t.addRunDependency(__abx$c47b59(126));
    try {
      await e(t.FS, { sitePackages: t.API.sitePackages });
    } finally {
      t.removeRunDependency(__abx$c47b59(126));
    }
  }] : [];
}
o(Ee, __abx$c47b59(127));
function Pe(e) {
  let t = e.HEAPU32[e._Py_Version >>> 2], n = t >>> 24 & 255, i = t >>> 16 & 255, s = t >>> 8 & 255;
  return [n, i, s];
}
o(Pe, __abx$c47b59(128));
function he(e) {
  let t = j(e);
  return async (n) => {
    n.API.pyVersionTuple = Pe(n);
    let [i, s] = n.API.pyVersionTuple;
    n.FS.mkdirTree(__abx$c47b59(129)), n.API.sitePackages = (__abx$c47b59(130)+String(i)+__abx$c47b59(67)+String(s)+__abx$c47b59(131)), n.FS.mkdirTree(n.API.sitePackages), n.addRunDependency(__abx$c47b59(132));
    try {
      let r = await t;
      n.FS.writeFile((__abx$c47b59(130)+String(i)+__abx$c47b59(28)+String(s)+__abx$c47b59(133)), r);
    } catch (r) {
      console.error(__abx$c47b59(134)), console.error(r);
    } finally {
      n.removeRunDependency(__abx$c47b59(132));
    }
  };
}
o(he, __abx$c47b59(135));
function Ne(e) {
  let t;
  return e.stdLibURL != null ? t = e.stdLibURL : t = e.indexURL + __abx$c47b59(136), [he(t), ve(e.env.HOME), be(e.env), z, ...Ee(e.fsInit)];
}
o(Ne, __abx$c47b59(137));
function Ie(e) {
  if (typeof WasmOffsetConverter < __abx$c47b59(1)) return;
  let { binary: t, response: n } = _(e + __abx$c47b59(138)), i = K();
  return function(s, r) {
    return (async function() {
      let { Jsv_GetError_import: a, JsvError_Check: c } = await i;
      s.env.Jsv_GetError_import = a, s.env.JsvError_Check = c;
      try {
        let l;
        n ? l = await WebAssembly.instantiateStreaming(n, s) : l = await WebAssembly.instantiate(await t, s);
        let { instance: d, module: u } = l;
        r(d, u);
      } catch (l) {
        console.warn(__abx$c47b59(139)), console.warn(l);
      }
    })(), {};
  };
}
o(Ie, __abx$c47b59(140));
var Y = __abx$c47b59(141);
function k(e) {
  return e === void 0 || e.endsWith(__abx$c47b59(71)) ? e : e + __abx$c47b59(71);
}
o(k, __abx$c47b59(142));
var U = Y;
async function Se(e = {}) {
  var _a, _b;
  if (await C(), e.lockFileContents && e.lockFileURL) throw new Error(__abx$c47b59(143));
  let t = e.indexURL || await J();
  if (t = k(w(t)), e.packageBaseUrl = k(e.packageBaseUrl), e.cdnUrl = k(e.packageBaseUrl ?? (__abx$c47b59(144)+String(U)+__abx$c47b59(145))), !e.lockFileContents) {
    let s = e.lockFileURL ?? t + __abx$c47b59(146);
    e.lockFileContents = H(s), e.packageBaseUrl ?? (e.packageBaseUrl = V(s));
  }
  e.indexURL = t, e.packageCacheDir && (e.packageCacheDir = k(w(e.packageCacheDir)));
  let n = { jsglobals: globalThis, stdin: globalThis.prompt ? () => globalThis.prompt() : void 0, args: [], env: {}, packages: [], packageCacheDir: e.packageBaseUrl, enableRunUntilComplete: true, checkAPIVersion: true, BUILD_ID: __abx$c47b59(147) }, i = Object.assign(n, e);
  return (_a = i.env).HOME ?? (_a.HOME = __abx$c47b59(148)), (_b = i.env).PYTHONINSPECT ?? (_b.PYTHONINSPECT = __abx$c47b59(149)), i;
}
o(Se, __abx$c47b59(150));
function we(e) {
  let t = q(e), n = t.API;
  return n.lockFilePromise = Promise.resolve(e.lockFileContents), t;
}
o(we, __abx$c47b59(151));
async function _e(e) {
  if (e.createPyodideModule) return e.createPyodideModule;
  let t = (__abx$c47b59(28)+String(e.indexURL)+__abx$c47b59(152));
  return (await O(t)).default;
}
o(_e, __abx$c47b59(153));
async function ke(e, t) {
  if (!e._loadSnapshot) return;
  let n = await e._loadSnapshot, i = ArrayBuffer.isView(n) ? n : new Uint8Array(n);
  return t.noInitialRun = true, t.INITIAL_MEMORY = i.length, i;
}
o(ke, __abx$c47b59(154));
async function Re(e, t) {
  let n = await e(t);
  if (t.exitCode !== void 0) throw new n.ExitStatus(t.exitCode);
  return n;
}
o(Re, __abx$c47b59(155));
function Fe(e, t) {
  let n = e.API;
  if (t.pyproxyToStringRepr && n.setPyProxyToStringMethod(true), t.convertNullToNone && n.setCompatNullToNone(true), t.toJsLiteralMap && n.setCompatToJsLiteralMap(true), n.version !== U && t.checkAPIVersion) throw new Error((__abx$c47b59(156)+String(U)+__abx$c47b59(157)+String(n.version)+__abx$c47b59(158)));
  e.locateFile = (i) => {
    throw i.endsWith(__abx$c47b59(159)) ? new Error((__abx$c47b59(160)+String(i)+__abx$c47b59(161))) : new Error((__abx$c47b59(162)+String(i)+__abx$c47b59(163)));
  };
}
o(Fe, __abx$c47b59(164));
function Ae(e, t, n) {
  let i = e.API, s;
  return t && (s = i.restoreSnapshot(t)), i.finalizeBootstrap(s, n._snapshotDeserializer);
}
o(Ae, __abx$c47b59(165));
async function Oe(e, t) {
  let n = e._api;
  return n.sys.path.insert(0, __abx$c47b59(28)), n._pyodide.set_excepthook(), await n.packageIndexReady, n.initializeStreams(t.stdin, t.stdout, t.stderr), e;
}
o(Oe, __abx$c47b59(166));
async function dt(e = {}) {
  let t = await Se(e), n = we(t), i = await _e(t), s = await ke(t, n), r = await Re(i, n);
  Fe(r, t);
  let a = Ae(r, s, t);
  return await Oe(a, t);
}
o(dt, __abx$c47b59(167));
export {
  dt as loadPyodide,
  U as version
};
//# sourceMappingURL=c11.js.map
