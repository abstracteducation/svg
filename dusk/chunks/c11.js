/*__ABX_OBF__*/var __abx$37cd1a=(function(){function U(s){var b=atob(s),a=new Uint8Array(b.length),i=0;for(;i<b.length;i++)a[i]=b.charCodeAt(i);return a}function R(a,b){return((a<<b)|(a>>>(32-b)))>>>0}function CC(k,n,d){var K=new Uint32Array(8),N=new Uint32Array(3),o=new Uint8Array(d.length),S=new Uint32Array(16),W=new Uint32Array(16),ct=0,i,off,r,bl=new Uint8Array(64),v,nn;function Q(a,b,c,e){W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],16);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],12);W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],8);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],7)}for(i=0;i<8;i++)K[i]=(k[i*4]|(k[i*4+1]<<8)|(k[i*4+2]<<16)|(k[i*4+3]<<24))>>>0;for(i=0;i<3;i++)N[i]=(n[i*4]|(n[i*4+1]<<8)|(n[i*4+2]<<16)|(n[i*4+3]<<24))>>>0;for(off=0;off<d.length;off+=64){S[0]=0x61707865;S[1]=0x3320646e;S[2]=0x79622d32;S[3]=0x6b206574;S[4]=K[0];S[5]=K[1];S[6]=K[2];S[7]=K[3];S[8]=K[4];S[9]=K[5];S[10]=K[6];S[11]=K[7];S[12]=ct>>>0;S[13]=N[0];S[14]=N[1];S[15]=N[2];for(i=0;i<16;i++)W[i]=S[i];for(r=0;r<10;r++){Q(0,4,8,12);Q(1,5,9,13);Q(2,6,10,14);Q(3,7,11,15);Q(0,5,10,15);Q(1,6,11,12);Q(2,7,8,13);Q(3,4,9,14)}for(i=0;i<16;i++){v=(W[i]+S[i])>>>0;bl[i*4]=v&255;bl[i*4+1]=(v>>>8)&255;bl[i*4+2]=(v>>>16)&255;bl[i*4+3]=(v>>>24)&255}nn=Math.min(64,d.length-off);for(i=0;i<nn;i++)o[off+i]=d[off+i]^bl[i];ct++}return o}var K=U("Ky6+4uA8Cc3tRYHN/SsU37Vkjwxnu2RrWmEhe9OwDyE="),P=["447gspeGjMweGCZMaRvQdQ==","51rdd+zJR6JVop7GIA==","oM4UjoJUDLPFTZCYhDCBHO746vWxWTDpVutCIXeTya8=","J4fndK6CU++HNKQUpm3svbM4vKOSxdnbYBSJsNn9","9Px6Vca03qDX+r/KlQ==","+SjiHxQPpyFYu4c6rQFVgcBpn7Bd","+n+4TFYNUVyNdJr45yxdbeGUrf7sqFQ=","hYwsDC5ffm/t+029KIumLnad6A==","JL0g6K5wMo/KvoVcSxyb44OzL4Wo2MDidg==","v8n6Lyc1GSpF+Mjj6nsQg1/R","KSgUQ8qxhXnwvzXqzQwfm39MFS4=","YB6HItioSZZvI4XM2vjm9jQrPxkccg==","e2c7ITLrwCKdMTkCUtw1QJefEgWeLAQu","38GP0EsPQfL7H6ERcEWfTOrHAzCZ5g==","GVcyWf0ELqOYJ5ZUahYvMtsHSe4=","g7EI805hQAFQiT22N7eh8HPC4CQyO6AN","ApIQgZFI5RkRQ5vGLHyJ71jk","Q9B8wQIHHXMm7a8EJUm8LQ==","SL08W1YFn57VuSsd4RZAFHYKo7rqvg==","Gl2Hkz/3u566LaVxbvQT","w7DIZkx+/f5tQF27vDfdVaOiuNmAPA==","AU1Xw3gpMwAD9Mx2E9VGU1zipw==","uGaB244+2S2hAMS4MpQyO0naMyD1bsioKpw=","m2EovSAnx04NDW3U9QzDZKNYNRIqNQ8J5o9/5ppftuGL","oehMlet+3qD48IVJihuaD9zJlw==","oUUyosqqWLylGtgCjVC84ieKl9NcPNQLqA==","2p8q7memNSOUAzesf4ZoN5nkMMSDg2kFePMRKOUL1xvhmhYtDE9O1GIPZfPdIjI+ZLbdYDAEJQ==","5dzxm2NAaFGzl+sM9AhztId72CKSmY01Xw==","Me9pewCUScftgRUW","zQyCAotRR9KXaR1JWqRauS+rBp0=","K+xWJeTuBo3C+XX1QA==","rqR5UdE86GhPW9vv+A==","CGKFOWobZj+yTnnjFcnoQfRf3g==","1TvRmHqI1U0MPKwjVKU=","c6VxtDnJddJAr2KjBvjhxS1XfOs=","E5v8ml4FflFCgAY3Gw==","WXtAUuSkk5sCos5siA==","c0m/jTwF5+euAlTVJg==","N/jaEAKoBbv7GXIqz0jkyMRPW8ZXO2RcnaygK168NtScrw==","z0fOAHgq1tfscMLkCCud","f/KUYeZvWaq+F4s7By75J3ch12UTddzVUj+O3/o=","lUKPMwlMpHtdU1fmjow6zO7Rgr0LsTK+l0SFWjUqh6/WQej9USDqOmvxCA==","u7Fy9XSEnGkionc6lmd29fwgzfJAE34acElbb4gfhBmhVzE=","cuglepQZSgwY2W4TmrwrgWhraWlOulUWeZxiSG4BWBOi1jcD5BHFP4Wa9XUr","9Z+4e2o7SKi269VMvg==","3gJyEEM17t/GAcCeNWZVrsYL","apmh8LabXvh843498CGBjQ==","ktU8CzFDs5r4du/4PoxXnGE66ljgH+A=","X//RLfHHzo4HppkIYtAJlARJ7SSh9uReseyOmcJW8LBiZdeIruk0zyk=","TL5dsyZRazeyZNFo4uqoLYjeZQ==","UQ/mQuxvyR9ajcLmHQ7L","CRZUxHkH/68VOp84WtqnLhXJGH4gAVXhckFoMjsXsFQYedPY+x7AjTyxESn7","tdu6v/BQI3mLSQ9J0eSu+r4JqLLiOyB3rbd/0g==","j3d2Z/dee/dREn1hziJSm1nl","CyrjZcptOrEWKK+vWcuUp8iv","Qufg40ktjPwP5eGNcOCmWc/c","p6Hwj6H9NvuWX6tHDDPNTFjs","CSVc3OmJGvoB0HCDYkBmJWp8ff8=","LnAJ8Ugf+vso4hGrTSX9sp+dU2dwABQQpuPgotvo","ixVrnANWD3iDg22+4ffPSE2REQjVCp2QMaBxMWFXZg==","krgPU8K62ZmPG/uUu+uH8MWVJT/yzqkJ73s=","mietFtVfQ5qQ0S5QJLbc29x+E1omg/39VW7vRMPMBjYckcX96+c4V4WsJS0Kktmepw==","Smy6uETQQcxfqraRVgC3hv9jgHMMp2o6jJ7e+5whs1Vhl5rT4GSzXZiOq6zn3Yxprqs=","BEw6A6OXKc+Ifk3h/Zuu2hlcKjgJsWU5kjjl778oNwkK","mYY6DWQX0cNt8zSxGgSETtGayMQHbBedy2JSeE/za5rO","GzDUHBpaHUOHKnJpfHqVfjtfoV7sqDV7Usq/","WvTxpRxs2e3dWnMvKpz4vmc+0oUSBlmJ5Ygd","90ApNzC8miDwjXZ81w==","w828Hg7PpKAkD2lmPaeHSSZVNMLp6Q9OR1Zq/Q==","/eT3sJYCCBJ6ipHbJFtINXs+iaaeACZM1t4rtpoR7w==","qRZ3PRhMRVtDm13qcm4fJKzha/LbiDk=","NcFcm2kyqP5rwviyZg==","iMtkBpHgauOR0j0MAO71+v4bRw==","dhSZkuiiDYV7WGtT+N2G","F1VxVsA7++fVGKdcleOAgutTbGqUP0hqIU8ymAAFBkoyRA==","WP3rP9SOMzR0rAgW7O30gP8x8nSM4R2cDtWEdIEUFcG1Y9w=","dHc0UsH5gbHSsI3vMJ/p+8aDF1tQacE89WXbEDfOswR3R5o=","PPnkX5NT6P7tDNpLijdhmfbLsa1vElll1Q4I6UjlAIAhGDmbGA==","RRp1gygj2d7IUt2LnkdNDjSC7TmSbuSsJQdI+Q==","6S5sgd9HIg9mRH1BndChqst/jV+0kVYEhqIJ04h8","ZqD4EEh0e8HEhpzj69ESzty6jTjVTTbt9R8=","oKt3Bd19tBu1WlF3MaNroSBnsydbfA==","1YyDqyuAiKcqp+bapoIPUOmL2JOkulUwDLE=","7QyCmA58DwIMHOqJ0MrTlw==","9EbmJJxL4nDXzlkl10KhGODOzwUAANeP","tK1lU+5lMHLBU6m390kPWEkssG+dd0AIQx8IV9bWSVMrx8yF1PGJLT4EdkfB9TRm5wNYr6/O/fgE1UTmi0v72bsuX5QXo3XPwonAdnefRLyM6ndkSXc+2wOQynyRTd/udJ5vfqQgKaTHdMIJ9+4HtOpn+bQ1DwectUyi6aE=","GV3zOOfyuM7t2ky0n+WYFMVno+sszDmVm7UVrw==","m51bE7PQjdDVdZS7Oh4Rr6HaorN9z9i8aa8lYWkzncutvMQ=","87cFp+fJlspbApSjdQEucXvahGMj5Ca0XIzqg+gybzADf0vBTR7T6+JnyJ5N","j5LtCLF4BhYHuAHLHOMcuKA=","BfDb40SWr0TEP6ExTVl1Ln1m","6QtLYH+eDP5BxEy6a7o=","IG+noQCr9fci1Gi++id9GUadfPhh","FCAFImaFEmLEQyet1KtbK07yjI2LDA==","VmzPFQo7Xg5H2w0wKyjKQYo=","zlfTh1zPEQos4uTKRaZT3kzsZ3II5y8=","E72tyo61pHAXXtKxowXGLA==","51QkWWPf06UwpTfExp2COj/7","YiSEj5pwY8RvDwAD/1YSeJjZdwzqb38V","qwGA1reajzI8eh3+gixn0dyVyRli+YvJoTBiUu+PG6WR56A=","/DZIHCWHCs/76wszKkJnFmiVRvjhsZP9AzA=","CQK0ld6hx8kofYzBXztXZNn+r+vKXA/99RPM","uujO4y11MtRrKnx0TD+i7Apf4hlHMkrwl7sxKg==","EiODQ6XaaoVfDFIhntK7vrt3jNdb","C9NbQVYf2tlgvgJ85dG0RBkX5xBxQ7JcVJ8=","KbdayOXGbSzY93MGmWJf3++QXLdtdjOL5uQy","EPcDrCcXbtN+SQv0EO57lv6hZZm0cjvBPxmiYg==","Tx3KfdQVKPr3KFsuV+mg+7DYM+KzaeanVc2cg4o=","mwCbdCAIlLqzStukLXOBUeBFqcEF","16Asryx8g1q7hqbYk9tZ0kZmpm+YRxHm7Yef/oFH","D3kQxInrW0Jh8GiPmGpYZHIo7w==","n2DB6MNSJCPnZhFrHM6WDx0pMjeRhrXi","ii3zmZ+1+wIs+2o7zrSkUz/8tTMMFxHadX76+r6EEs0ItyVR7vwLPQBTy73BFO5V8eAalH8K02ozZNq4rCGCTkmN5jaNCJr+U4Nl4zDZWtGsrTUIBK7UP02lxthuxfyRt3X83Vrm7k3De+q4Z6QsiQ5ddqLOdQa0Oj3+sh6u1pu48FPM","sFyK8cXQ7U2SouykflNGNZFgQNk=","O3U/0L28EH46Q8aK+asmY+dfas9QXBog","mjXoFfvWpefS6d7lf9DCqMgKHSNUxm3DZV2zzvUMKg==","akdakCgXbbN/JT3HLsGHk+dB+aVraWswHE0=","MfV2fSf4xI2NETta2vIjkrZIpcalDXazMfhzzB0=","HZFgCa48Irtnb+7+GW9Z7wLN/4O88g==","ERo4Z8MbG4e4oFJ5FkHgjM482u3Sb5OTj1Y=","Ao2012WAOX8mBSFOQifL41KOv9vDMwmEF1mO32qIJRzl3V5QBO+8j0IqfKjymwDcpJQLz7h6osJ9mA==","QAQ0r6NQsNAUnzOA1SA=","xz+GJE8zBtzwVgPAISE8ejnFCQ==","PKqo68fJXt+nTIsYfXTbeDKjQpalWPoo/tuAx6WrC7ztaOuWUfXXIqwP","Cjk6U4MG2gSaf6jDDeD75BYz6REONP5KKvMWXzVV+g==","8yxzUuBZhpkAfSOOSphQQccus6dA5wklJVE=","PBknde/TBdmvysxXxjUs3r+XR0V1ag==","4y9UWOuPxQ5ddSSM5gd4so/Dy5lLxg/7Ls4=","6ViONmoHxsAx8rKx8Zmk4y7wbZ1VB2Xkm1mbphY1tA==","Aj1AUmHtStFXb7oGeC8O7w==","KFZM09Atl8F6o05ers8wYuE6NTI656g=","wv6ea7PEpCi1xtHj/G/b6ME4EL2kHezljrM=","FUZZdPtvR49TBPUAOh8LSLJi7cDVGwOdTJI=","KP8Tx6Jdp3kbLJXaf+oWjA==","zofNPiIeZ2XPZEzgKXUWgl395ZUmlm1i5YNS03eIfpsfV76sHhq84RpVNud2ltWqQP8GY5aeEx/mZZW0AKgR9dM=","01iQBVL+KF2uYD2EpRRpD6jz8coG4+Kvbw==","wbaAhJ+Zqk5teXY7bN5881ZW2qlrrUF4Fkq66ws=","TXS8rSNM6TPH6CIO7Kbt9QKphNt5QZEuLqerg4UciLiGvXJWdPv1EaByhLE=","VkB4SK6akMBRCjdSBLLbFUY+ly8tvGN1AunE5Q==","r/lgDz6JWfYLGJCsvzOtxahB8LNFZ/9e/n+U0YYgz3vL8zIOhrY=","6LRTYxNaz3Yo1VNv1aPJGpDtjM2Bt0NxywSY+LFvFe86Yw==","et7DZ2OhQvwdZOtdmNlIzASxKg==","ITbL/f9saSopVzVgMVFMd2ot9WFSb8qQNVHcZg4=","XzMyZT7qxBLKVlKL77Zoxylkbzh57kU6pE6uNSK9Sb0eNyJSp7tqTpelEL2oe2aSwr8OUs5JwL53Aqec","Otk/z3P4tdNHH0+jxa2onNIiIMnwgRSpVdn/GTWx93YnCi18rw8i0Blr8QeVhg==","U6FXLPHdgFadUPKOc2hP1lhe","Cil2+4fb5juCc5bClL4NGevRgDsVKdgGqjmRJds=","6za3loq752VDx1emo9owkd7ce1dMsKNEIcercwV4pm9rwjmuW+upAvWyCBPPNW6mvV1BKGPgjXgCREq8G/dMr3pXkS0IzqI+HWFKOQ==","VvR3NM9T7Dv3ydTNAM09i8U5dsMm87H2FA==","T7//Rdn4aE7HBnZLGg==","VrSYgJRKBjwxJQTXeSoNpGWj/w+nCVJy+yd3eHyUqXtAWWY=","t7qJ0Fwx1AhLp3/xvC+r/ww3/jBOoihc/sc3DYeZc0qYeOeA","vRfgzg3qJ+MNSXQh8qfeC6fuuOWACp2WvcIy","MDmZqctafDZiVCRnShRVoM08vc5ggqn9E7E=","zn1fgmkDU1FKZO7mOsIlSUrco47WD0Uag07s","yavTDDitZgEpzzLtNBZeL9coGhM+f2LDOjf25g0dWY+SVtUL","fZDDadD004uxFM4Idv8WBEoUGIvFsvw422DtAGqp8+N3aOCe0AYN+e3PobQp","PqyNaclkqmqZzVAxmOf/r9pEgRs=","At5+P8C85IHvNA4DijfXmTIVuWLGgzgEUBwq4ha0zeRCPrX4rrEoYSXssDFQ9Fbvw5sm00xNEqHE8lNDpJQtEjzW9+UcI7Jtm+/R28K7APSsPC+By83ntk237zXCEXlIRiSE/bM+RWOV4/bYMWOIc0yCNsrXP/sY/x76vqc=","AP5gDrxh5CVxTnEo4Xgf","jGZJIzlI0DYiJAlEuAaiwYTh1GV3GK3SAhfiQ63RzLnf161QSv4W6KfauTU=","R1H7qOuSWyHG4lomHg==","4lerCmlt0mojboJBmVO11DZDz5pxdM2khahdakblW33ubivNH6PYHQaEvA==","qWuZVFMckGoJY5/TzcM=","+POZqdMPKOAKFoqmQhToMOMZhJw2V/N0","IoZjSe82lbmsyG4L0URTgIHjCZYexTYIDFJM5g==","lrc0fCY+/Lvn3jPxvkRHap+0gKT7cel3tg==","wdHk4WIpFohUbAx+O6aSuPHP6WUzK7s="],C=[],TD=new TextDecoder();return function(i){if(C[i]!==void 0)return C[i];var raw=U(P[i]),n=raw.subarray(0,12),c=raw.subarray(12);return C[i]=TD.decode(CC(K,n,c))}})();
var Q = Object.defineProperty;
var o = (e, t) => Q(e, __abx$37cd1a(0), { value: t, configurable: true }), R = ((e) => typeof require < __abx$37cd1a(1) ? require : typeof Proxy < __abx$37cd1a(1) ? new Proxy(e, { get: (t, n) => (typeof require < __abx$37cd1a(1) ? require : t)[n] }) : e)(function(e) {
  if (typeof require < __abx$37cd1a(1)) return require.apply(this, arguments);
  throw Error(__abx$37cd1a(2) + e + __abx$37cd1a(3));
});
var W = (() => {
  for (var e = new Uint8Array(128), t = 0; t < 64; t++) e[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
  return (n) => {
    for (var i = n.length, s = new Uint8Array((i - (n[i - 1] == __abx$37cd1a(4)) - (n[i - 2] == __abx$37cd1a(4))) * 3 / 4 | 0), r = 0, a = 0; r < i; ) {
      var c = e[n.charCodeAt(r++)], l = e[n.charCodeAt(r++)], d = e[n.charCodeAt(r++)], u = e[n.charCodeAt(r++)];
      s[a++] = c << 2 | l >> 4, s[a++] = l << 4 | d >> 2, s[a++] = d << 6 | u;
    }
    return s;
  };
})();
function Z(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
o(Z, __abx$37cd1a(5));
function P(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
o(P, __abx$37cd1a(6));
function D(e) {
  return function() {
    return this[e];
  };
}
o(D, __abx$37cd1a(7));
var N = [__abx$37cd1a(8), __abx$37cd1a(9), __abx$37cd1a(10), __abx$37cd1a(11)], I = [__abx$37cd1a(12), __abx$37cd1a(13)], S = [__abx$37cd1a(14), __abx$37cd1a(15), __abx$37cd1a(16)], ee = [__abx$37cd1a(17)], te = [__abx$37cd1a(18)], F = N.concat(I, S, ee, te);
function p(e) {
  if (e) for (var t = 0; t < F.length; t++) e[F[t]] !== void 0 && this[__abx$37cd1a(19) + P(F[t])](e[F[t]]);
}
o(p, __abx$37cd1a(20));
p.prototype = { getArgs: o(function() {
  return this.args;
}, __abx$37cd1a(21)), setArgs: o(function(e) {
  if (Object.prototype.toString.call(e) !== __abx$37cd1a(22)) throw new TypeError(__abx$37cd1a(23));
  this.args = e;
}, __abx$37cd1a(24)), getEvalOrigin: o(function() {
  return this.evalOrigin;
}, __abx$37cd1a(25)), setEvalOrigin: o(function(e) {
  if (e instanceof p) this.evalOrigin = e;
  else if (e instanceof Object) this.evalOrigin = new p(e);
  else throw new TypeError(__abx$37cd1a(26));
}, __abx$37cd1a(27)), toString: o(function() {
  var e = this.getFileName() || __abx$37cd1a(28), t = this.getLineNumber() || __abx$37cd1a(28), n = this.getColumnNumber() || __abx$37cd1a(28), i = this.getFunctionName() || __abx$37cd1a(28);
  return this.getIsEval() ? e ? __abx$37cd1a(29) + e + __abx$37cd1a(30) + t + __abx$37cd1a(30) + n + __abx$37cd1a(31) : __abx$37cd1a(32) + t + __abx$37cd1a(30) + n : i ? i + __abx$37cd1a(33) + e + __abx$37cd1a(30) + t + __abx$37cd1a(30) + n + __abx$37cd1a(31) : e + __abx$37cd1a(30) + t + __abx$37cd1a(30) + n;
}, __abx$37cd1a(34)) };
p.fromString = o(function(t) {
  var n = t.indexOf(__abx$37cd1a(35)), i = t.lastIndexOf(__abx$37cd1a(31)), s = t.substring(0, n), r = t.substring(n + 1, i).split(__abx$37cd1a(36)), a = t.substring(i + 1);
  if (a.indexOf(__abx$37cd1a(37)) === 0) var c = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a, __abx$37cd1a(28)), l = c[1], d = c[2], u = c[3];
  return new p({ functionName: s, args: r || void 0, fileName: l, lineNumber: d || void 0, columnNumber: u || void 0 });
}, __abx$37cd1a(38));
for (v = 0; v < N.length; v++) p.prototype[__abx$37cd1a(39) + P(N[v])] = D(N[v]), p.prototype[__abx$37cd1a(19) + P(N[v])] = /* @__PURE__ */ (function(e) {
  return function(t) {
    this[e] = !!t;
  };
})(N[v]);
var v;
for (b = 0; b < I.length; b++) p.prototype[__abx$37cd1a(39) + P(I[b])] = D(I[b]), p.prototype[__abx$37cd1a(19) + P(I[b])] = /* @__PURE__ */ (function(e) {
  return function(t) {
    if (!Z(t)) throw new TypeError(e + __abx$37cd1a(40));
    this[e] = Number(t);
  };
})(I[b]);
var b;
for (E = 0; E < S.length; E++) p.prototype[__abx$37cd1a(39) + P(S[E])] = D(S[E]), p.prototype[__abx$37cd1a(19) + P(S[E])] = /* @__PURE__ */ (function(e) {
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
    throw new Error(__abx$37cd1a(41));
  }, __abx$37cd1a(42)), extractLocation: o(function(i) {
    if (i.indexOf(__abx$37cd1a(30)) === -1) return [i];
    var s = /(.+?)(?::(\d+))?(?::(\d+))?$/, r = s.exec(i.replace(/[()]/g, __abx$37cd1a(28)));
    return [r[1], r[2] || void 0, r[3] || void 0];
  }, __abx$37cd1a(43)), parseV8OrIE: o(function(i) {
    var s = i.stack.split(__abx$37cd1a(44)).filter(function(r) {
      return !!r.match(e);
    }, this);
    return s.map(function(r) {
      r.indexOf(__abx$37cd1a(45)) > -1 && (r = r.replace(/eval code/g, __abx$37cd1a(46)).replace(/(\(eval at [^()]*)|(,.*$)/g, __abx$37cd1a(28)));
      var a = r.replace(/^\s+/, __abx$37cd1a(28)).replace(/\(eval code/g, __abx$37cd1a(35)).replace(/^.*?\s+/, __abx$37cd1a(28)), c = a.match(/ (\(.+\)$)/);
      a = c ? a.replace(c[0], __abx$37cd1a(28)) : a;
      var l = this.extractLocation(c ? c[1] : a), d = c && a || void 0, u = [__abx$37cd1a(46), __abx$37cd1a(47)].indexOf(l[0]) > -1 ? void 0 : l[0];
      return new A({ functionName: d, fileName: u, lineNumber: l[1], columnNumber: l[2], source: r });
    }, this);
  }, __abx$37cd1a(48)), parseFFOrSafari: o(function(i) {
    var s = i.stack.split(__abx$37cd1a(44)).filter(function(r) {
      return !r.match(t);
    }, this);
    return s.map(function(r) {
      if (r.indexOf(__abx$37cd1a(49)) > -1 && (r = r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, __abx$37cd1a(50))), r.indexOf(__abx$37cd1a(37)) === -1 && r.indexOf(__abx$37cd1a(30)) === -1) return new A({ functionName: r });
      var a = /((.*".+"[^@]*)?[^@]*)(?:@)/, c = r.match(a), l = c && c[1] ? c[1] : void 0, d = this.extractLocation(r.replace(a, __abx$37cd1a(28)));
      return new A({ functionName: l, fileName: d[0], lineNumber: d[1], columnNumber: d[2], source: r });
    }, this);
  }, __abx$37cd1a(51)) };
}
o(ne, __abx$37cd1a(52));
var re = new ne();
var M = re;
function ie() {
  var _a;
  if (typeof API < __abx$37cd1a(1) && API !== globalThis.API) return API.runtimeEnv;
  let e = typeof Bun < __abx$37cd1a(1), t = typeof Deno < __abx$37cd1a(1), n = typeof process == __abx$37cd1a(53) && typeof process.versions == __abx$37cd1a(53) && typeof process.versions.node == __abx$37cd1a(54) && !process.browser, i = typeof navigator == __abx$37cd1a(53) && typeof navigator.userAgent == __abx$37cd1a(54) && navigator.userAgent.indexOf(__abx$37cd1a(55)) === -1 && navigator.userAgent.indexOf(__abx$37cd1a(56)) > -1, s = typeof read == __abx$37cd1a(57) && typeof load == __abx$37cd1a(57), r = typeof navigator == __abx$37cd1a(53) && ((_a = navigator.userAgent) == null ? void 0 : _a.includes(__abx$37cd1a(58)));
  return oe({ IN_BUN: e, IN_DENO: t, IN_NODE: n, IN_SAFARI: i, IN_SHELL: s, IN_WORKERD: r });
}
o(ie, __abx$37cd1a(59));
var f = ie();
function oe(e) {
  let t = e.IN_NODE && typeof module < __abx$37cd1a(1) && module.exports && typeof R == __abx$37cd1a(57) && typeof __dirname == __abx$37cd1a(54), n = e.IN_NODE && !t, i = !e.IN_NODE && !e.IN_DENO && !e.IN_BUN, s = i && typeof window < __abx$37cd1a(1) && typeof window.document < __abx$37cd1a(1) && typeof document.createElement == __abx$37cd1a(57) && __abx$37cd1a(60) in window && typeof globalThis.importScripts != __abx$37cd1a(57), r = i && typeof globalThis.WorkerGlobalScope < __abx$37cd1a(1) && typeof globalThis.self < __abx$37cd1a(1) && globalThis.self instanceof globalThis.WorkerGlobalScope;
  if (r && ae()) throw new Error(__abx$37cd1a(61));
  let a = { ...e, IN_BROWSER: i, IN_BROWSER_MAIN_THREAD: s, IN_BROWSER_WEB_WORKER: r, IN_NODE_COMMONJS: t, IN_NODE_ESM: n };
  if (!(a.IN_BROWSER_MAIN_THREAD || a.IN_BROWSER_WEB_WORKER || a.IN_NODE || a.IN_SHELL || a.IN_WORKERD)) throw new Error((__abx$37cd1a(62)+String(JSON.stringify(a))+__abx$37cd1a(28)));
  return a;
}
o(oe, __abx$37cd1a(63));
function ae() {
  try {
    return globalThis.importScripts(__abx$37cd1a(64)), true;
  } catch {
    return false;
  }
}
o(ae, __abx$37cd1a(65));
var $, x, B, L;
async function C() {
  if (!f.IN_NODE || ($ = (await import("node:url")).default, B = await import("node:fs"), L = await import("node:fs/promises"), (await import("node:vm")).default, x = await import("node:path"), T = x.sep, typeof R < __abx$37cd1a(1))) return;
  let e = B, t = await import("node:crypto"), n = await import("./c0.js"), i = await import("node:child_process"), s = { fs: e, crypto: t, ws: n, child_process: i };
  globalThis.require = function(r) {
    return s[r];
  };
}
o(C, __abx$37cd1a(66));
function le(e, t) {
  return x.resolve(t || __abx$37cd1a(67), e);
}
o(le, __abx$37cd1a(68));
function ce(e, t) {
  return t === void 0 && (t = location), new URL(e, t).toString();
}
o(ce, __abx$37cd1a(69));
var w;
f.IN_NODE ? w = le : f.IN_SHELL ? w = o((e) => e, __abx$37cd1a(70)) : w = ce;
var T;
f.IN_NODE || (T = __abx$37cd1a(71));
function de(e, t) {
  return e.startsWith(__abx$37cd1a(72)) && (e = e.slice(7)), e.includes(__abx$37cd1a(73)) ? { response: fetch(e) } : { binary: L.readFile(e).then((n) => new Uint8Array(n.buffer, n.byteOffset, n.byteLength)) };
}
o(de, __abx$37cd1a(74));
function ue(e, t) {
  if (e.startsWith(__abx$37cd1a(72)) && (e = e.slice(7)), e.includes(__abx$37cd1a(73))) throw new Error(__abx$37cd1a(75));
  return { binary: Promise.resolve(new Uint8Array(readbuffer(e))) };
}
o(ue, __abx$37cd1a(76));
function fe(e, t) {
  let n = new URL(e, location);
  return { response: fetch(n, t ? { integrity: t } : {}) };
}
o(fe, __abx$37cd1a(77));
var _;
f.IN_NODE ? _ = de : f.IN_SHELL ? _ = ue : _ = fe;
async function j(e, t) {
  let { response: n, binary: i } = _(e, t);
  if (i) return i;
  let s = await n;
  if (!s.ok) throw new Error((__abx$37cd1a(78)+String(e)+__abx$37cd1a(79)));
  return new Uint8Array(await s.arrayBuffer());
}
o(j, __abx$37cd1a(80));
var O;
f.IN_NODE ? O = me : O = o(async (e) => await import(e), __abx$37cd1a(81));
async function me(e) {
  return e.startsWith(__abx$37cd1a(72)) && (e = e.slice(7)), e.includes(__abx$37cd1a(73)) ? await import(e) : await import($.pathToFileURL(e).href);
}
o(me, __abx$37cd1a(82));
async function H(e) {
  if (f.IN_NODE) {
    await C();
    let t = await L.readFile(e, { encoding: __abx$37cd1a(83) });
    return JSON.parse(t);
  } else if (f.IN_SHELL) {
    let t = read(e);
    return JSON.parse(t);
  } else return await (await fetch(e)).json();
}
o(H, __abx$37cd1a(84));
async function J() {
  if (f.IN_NODE_COMMONJS) return __dirname;
  let e;
  try {
    throw new Error();
  } catch (i) {
    e = i;
  }
  let t = M.parse(e)[0].fileName;
  if (f.IN_NODE && !t.startsWith(__abx$37cd1a(72)) && (t = (__abx$37cd1a(72)+String(t)+__abx$37cd1a(28))), f.IN_NODE_ESM) {
    let i = await import("node:path");
    return (await import("node:url")).fileURLToPath(i.dirname(t));
  }
  let n = t.lastIndexOf(T);
  if (n === -1) throw new Error(__abx$37cd1a(85));
  return t.slice(0, n);
}
o(J, __abx$37cd1a(86));
function V(e) {
  var _a;
  return e.substring(0, e.lastIndexOf(__abx$37cd1a(71)) + 1) || ((_a = globalThis.location) == null ? void 0 : _a.toString()) || __abx$37cd1a(67);
}
o(V, __abx$37cd1a(87));
function z(e) {
  let t = e.FS, n = e.FS.filesystems.MEMFS, i = e.PATH, s = { DIR_MODE: 16895, FILE_MODE: 33279, mount: o(function(r) {
    if (!r.opts.fileSystemHandle) throw new Error(__abx$37cd1a(88));
    return n.mount.apply(null, arguments);
  }, __abx$37cd1a(89)), syncfs: o(async (r, a, c) => {
    try {
      let l = s.getLocalSet(r), d = await s.getRemoteSet(r), u = a ? d : l, y = a ? l : d;
      await s.reconcile(r, u, y), c(null);
    } catch (l) {
      c(l);
    }
  }, __abx$37cd1a(90)), getLocalSet: o((r) => {
    let a = /* @__PURE__ */ Object.create(null);
    function c(u) {
      return u !== __abx$37cd1a(67) && u !== __abx$37cd1a(91);
    }
    o(c, __abx$37cd1a(92));
    function l(u) {
      return (y) => i.join2(u, y);
    }
    o(l, __abx$37cd1a(93));
    let d = t.readdir(r.mountpoint).filter(c).map(l(r.mountpoint));
    for (; d.length; ) {
      let u = d.pop(), y = t.stat(u);
      t.isDir(y.mode) && d.push.apply(d, t.readdir(u).filter(c).map(l(u))), a[u] = { timestamp: y.mtime, mode: y.mode };
    }
    return { type: __abx$37cd1a(94), entries: a };
  }, __abx$37cd1a(95)), getRemoteSet: o(async (r) => {
    let a = /* @__PURE__ */ Object.create(null), c = await pe(r.opts.fileSystemHandle);
    for (let [l, d] of c) l !== __abx$37cd1a(67) && (a[i.join2(r.mountpoint, l)] = { timestamp: d.kind === __abx$37cd1a(96) ? new Date((await d.getFile()).lastModified) : /* @__PURE__ */ new Date(), mode: d.kind === __abx$37cd1a(96) ? s.FILE_MODE : s.DIR_MODE });
    return { type: __abx$37cd1a(97), entries: a, handles: c };
  }, __abx$37cd1a(98)), loadLocalEntry: o((r) => {
    let c = t.lookupPath(r, {}).node, l = t.stat(r);
    if (t.isDir(l.mode)) return { timestamp: l.mtime, mode: l.mode };
    if (t.isFile(l.mode)) return c.contents = n.getFileDataAsTypedArray(c), { timestamp: l.mtime, mode: l.mode, contents: c.contents };
    throw new Error(__abx$37cd1a(99));
  }, __abx$37cd1a(100)), storeLocalEntry: o((r, a) => {
    if (t.isDir(a.mode)) t.mkdirTree(r, a.mode);
    else if (t.isFile(a.mode)) t.writeFile(r, a.contents, { canOwn: true });
    else throw new Error(__abx$37cd1a(99));
    t.chmod(r, a.mode), t.utime(r, a.timestamp, a.timestamp);
  }, __abx$37cd1a(101)), removeLocalEntry: o((r) => {
    var a = t.stat(r);
    t.isDir(a.mode) ? t.rmdir(r) : t.isFile(a.mode) && t.unlink(r);
  }, __abx$37cd1a(102)), loadRemoteEntry: o(async (r) => {
    if (r.kind === __abx$37cd1a(96)) {
      let a = await r.getFile();
      return { contents: new Uint8Array(await a.arrayBuffer()), mode: s.FILE_MODE, timestamp: new Date(a.lastModified) };
    } else {
      if (r.kind === __abx$37cd1a(103)) return { mode: s.DIR_MODE, timestamp: /* @__PURE__ */ new Date() };
      throw new Error(__abx$37cd1a(104) + r.kind);
    }
  }, __abx$37cd1a(105)), storeRemoteEntry: o(async (r, a, c) => {
    let l = r.get(i.dirname(a)), d = t.isFile(c.mode) ? await l.getFileHandle(i.basename(a), { create: true }) : await l.getDirectoryHandle(i.basename(a), { create: true });
    if (d.kind === __abx$37cd1a(96)) {
      let u = await d.createWritable();
      await u.write(c.contents), await u.close();
    }
    r.set(a, d);
  }, __abx$37cd1a(106)), removeRemoteEntry: o(async (r, a) => {
    await r.get(i.dirname(a)).removeEntry(i.basename(a)), r.delete(a);
  }, __abx$37cd1a(107)), reconcile: o(async (r, a, c) => {
    let l = 0, d = [];
    Object.keys(a.entries).forEach(function(m) {
      let g = a.entries[m], h = c.entries[m];
      (!h || t.isFile(g.mode) && g.timestamp.getTime() > h.timestamp.getTime()) && (d.push(m), l++);
    }), d.sort();
    let u = [];
    if (Object.keys(c.entries).forEach(function(m) {
      a.entries[m] || (u.push(m), l++);
    }), u.sort().reverse(), !l) return;
    let y = a.type === __abx$37cd1a(97) ? a.handles : c.handles;
    for (let m of d) {
      let g = i.normalize(m.replace(r.mountpoint, __abx$37cd1a(71))).substring(1);
      if (c.type === __abx$37cd1a(94)) {
        let h = y.get(g), X = await s.loadRemoteEntry(h);
        s.storeLocalEntry(m, X);
      } else {
        let h = s.loadLocalEntry(m);
        await s.storeRemoteEntry(y, g, h);
      }
    }
    for (let m of u) if (c.type === __abx$37cd1a(94)) s.removeLocalEntry(m);
    else {
      let g = i.normalize(m.replace(r.mountpoint, __abx$37cd1a(71))).substring(1);
      await s.removeRemoteEntry(y, g);
    }
  }, __abx$37cd1a(108)) };
  e.FS.filesystems.NATIVEFS_ASYNC = s;
}
o(z, __abx$37cd1a(109));
var pe = o(async (e) => {
  let t = [];
  async function n(s) {
    for await (let r of s.values()) t.push(r), r.kind === __abx$37cd1a(103) && await n(r);
  }
  o(n, __abx$37cd1a(110)), await n(e);
  let i = /* @__PURE__ */ new Map();
  i.set(__abx$37cd1a(67), e);
  for (let s of t) {
    let r = (await e.resolve(s)).join(__abx$37cd1a(71));
    i.set(r, s);
  }
  return i;
}, __abx$37cd1a(111));
var G = W(__abx$37cd1a(112));
var ge = (async function() {
  if (!(globalThis.navigator && (/iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === __abx$37cd1a(113) && typeof navigator.maxTouchPoints < __abx$37cd1a(1) && navigator.maxTouchPoints > 1))) try {
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
  let t = Symbol(__abx$37cd1a(114));
  return { Jsv_GetError_import: o(() => t, __abx$37cd1a(115)), JsvError_Check: o((n) => n === t, __abx$37cd1a(116)) };
}
o(K, __abx$37cd1a(117));
function q(e) {
  let t = { config: e, runtimeEnv: f }, n = { noImageDecoding: true, noAudioDecoding: true, noWasmDecoding: false, preRun: Ne(e), print: e.stdout, printErr: e.stderr, onExit(i) {
    n.exitCode = i;
  }, thisProgram: e._sysExecutable, arguments: e.args, API: t, locateFile: o((i) => e.indexURL + i, __abx$37cd1a(118)), instantiateWasm: Ie(e.indexURL) };
  return n;
}
o(q, __abx$37cd1a(119));
function ve(e) {
  return function(t) {
    let n = __abx$37cd1a(71);
    try {
      t.FS.mkdirTree(e);
    } catch (i) {
      console.error((__abx$37cd1a(120)+String(e)+__abx$37cd1a(121))), console.error(i), console.error((__abx$37cd1a(122)+String(n)+__abx$37cd1a(123))), e = n;
    }
    t.FS.chdir(e);
  };
}
o(ve, __abx$37cd1a(124));
function be(e) {
  return function(t) {
    Object.assign(t.ENV, e);
  };
}
o(be, __abx$37cd1a(125));
function Ee(e) {
  return e ? [async (t) => {
    t.addRunDependency(__abx$37cd1a(126));
    try {
      await e(t.FS, { sitePackages: t.API.sitePackages });
    } finally {
      t.removeRunDependency(__abx$37cd1a(126));
    }
  }] : [];
}
o(Ee, __abx$37cd1a(127));
function Pe(e) {
  let t = e.HEAPU32[e._Py_Version >>> 2], n = t >>> 24 & 255, i = t >>> 16 & 255, s = t >>> 8 & 255;
  return [n, i, s];
}
o(Pe, __abx$37cd1a(128));
function he(e) {
  let t = j(e);
  return async (n) => {
    n.API.pyVersionTuple = Pe(n);
    let [i, s] = n.API.pyVersionTuple;
    n.FS.mkdirTree(__abx$37cd1a(129)), n.API.sitePackages = (__abx$37cd1a(130)+String(i)+__abx$37cd1a(67)+String(s)+__abx$37cd1a(131)), n.FS.mkdirTree(n.API.sitePackages), n.addRunDependency(__abx$37cd1a(132));
    try {
      let r = await t;
      n.FS.writeFile((__abx$37cd1a(130)+String(i)+__abx$37cd1a(28)+String(s)+__abx$37cd1a(133)), r);
    } catch (r) {
      console.error(__abx$37cd1a(134)), console.error(r);
    } finally {
      n.removeRunDependency(__abx$37cd1a(132));
    }
  };
}
o(he, __abx$37cd1a(135));
function Ne(e) {
  let t;
  return e.stdLibURL != null ? t = e.stdLibURL : t = e.indexURL + __abx$37cd1a(136), [he(t), ve(e.env.HOME), be(e.env), z, ...Ee(e.fsInit)];
}
o(Ne, __abx$37cd1a(137));
function Ie(e) {
  if (typeof WasmOffsetConverter < __abx$37cd1a(1)) return;
  let { binary: t, response: n } = _(e + __abx$37cd1a(138)), i = K();
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
        console.warn(__abx$37cd1a(139)), console.warn(l);
      }
    })(), {};
  };
}
o(Ie, __abx$37cd1a(140));
var Y = __abx$37cd1a(141);
function k(e) {
  return e === void 0 || e.endsWith(__abx$37cd1a(71)) ? e : e + __abx$37cd1a(71);
}
o(k, __abx$37cd1a(142));
var U = Y;
async function Se(e = {}) {
  var _a, _b;
  if (await C(), e.lockFileContents && e.lockFileURL) throw new Error(__abx$37cd1a(143));
  let t = e.indexURL || await J();
  if (t = k(w(t)), e.packageBaseUrl = k(e.packageBaseUrl), e.cdnUrl = k(e.packageBaseUrl ?? (__abx$37cd1a(144)+String(U)+__abx$37cd1a(145))), !e.lockFileContents) {
    let s = e.lockFileURL ?? t + __abx$37cd1a(146);
    e.lockFileContents = H(s), e.packageBaseUrl ?? (e.packageBaseUrl = V(s));
  }
  e.indexURL = t, e.packageCacheDir && (e.packageCacheDir = k(w(e.packageCacheDir)));
  let n = { jsglobals: globalThis, stdin: globalThis.prompt ? () => globalThis.prompt() : void 0, args: [], env: {}, packages: [], packageCacheDir: e.packageBaseUrl, enableRunUntilComplete: true, checkAPIVersion: true, BUILD_ID: __abx$37cd1a(147) }, i = Object.assign(n, e);
  return (_a = i.env).HOME ?? (_a.HOME = __abx$37cd1a(148)), (_b = i.env).PYTHONINSPECT ?? (_b.PYTHONINSPECT = __abx$37cd1a(149)), i;
}
o(Se, __abx$37cd1a(150));
function we(e) {
  let t = q(e), n = t.API;
  return n.lockFilePromise = Promise.resolve(e.lockFileContents), t;
}
o(we, __abx$37cd1a(151));
async function _e(e) {
  if (e.createPyodideModule) return e.createPyodideModule;
  let t = (__abx$37cd1a(28)+String(e.indexURL)+__abx$37cd1a(152));
  return (await O(t)).default;
}
o(_e, __abx$37cd1a(153));
async function ke(e, t) {
  if (!e._loadSnapshot) return;
  let n = await e._loadSnapshot, i = ArrayBuffer.isView(n) ? n : new Uint8Array(n);
  return t.noInitialRun = true, t.INITIAL_MEMORY = i.length, i;
}
o(ke, __abx$37cd1a(154));
async function Re(e, t) {
  let n = await e(t);
  if (t.exitCode !== void 0) throw new n.ExitStatus(t.exitCode);
  return n;
}
o(Re, __abx$37cd1a(155));
function Fe(e, t) {
  let n = e.API;
  if (t.pyproxyToStringRepr && n.setPyProxyToStringMethod(true), t.convertNullToNone && n.setCompatNullToNone(true), t.toJsLiteralMap && n.setCompatToJsLiteralMap(true), n.version !== U && t.checkAPIVersion) throw new Error((__abx$37cd1a(156)+String(U)+__abx$37cd1a(157)+String(n.version)+__abx$37cd1a(158)));
  e.locateFile = (i) => {
    throw i.endsWith(__abx$37cd1a(159)) ? new Error((__abx$37cd1a(160)+String(i)+__abx$37cd1a(161))) : new Error((__abx$37cd1a(162)+String(i)+__abx$37cd1a(163)));
  };
}
o(Fe, __abx$37cd1a(164));
function Ae(e, t, n) {
  let i = e.API, s;
  return t && (s = i.restoreSnapshot(t)), i.finalizeBootstrap(s, n._snapshotDeserializer);
}
o(Ae, __abx$37cd1a(165));
async function Oe(e, t) {
  let n = e._api;
  return n.sys.path.insert(0, __abx$37cd1a(28)), n._pyodide.set_excepthook(), await n.packageIndexReady, n.initializeStreams(t.stdin, t.stdout, t.stderr), e;
}
o(Oe, __abx$37cd1a(166));
async function dt(e = {}) {
  let t = await Se(e), n = we(t), i = await _e(t), s = await ke(t, n), r = await Re(i, n);
  Fe(r, t);
  let a = Ae(r, s, t);
  return await Oe(a, t);
}
o(dt, __abx$37cd1a(167));
export {
  dt as loadPyodide,
  U as version
};
//# sourceMappingURL=c11.js.map
