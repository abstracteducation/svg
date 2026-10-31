/*__ABX_OBF__*/var __abx$6888e5=(function(){function U(s){var b=atob(s),a=new Uint8Array(b.length),i=0;for(;i<b.length;i++)a[i]=b.charCodeAt(i);return a}function R(a,b){return((a<<b)|(a>>>(32-b)))>>>0}function CC(k,n,d){var K=new Uint32Array(8),N=new Uint32Array(3),o=new Uint8Array(d.length),S=new Uint32Array(16),W=new Uint32Array(16),ct=0,i,off,r,bl=new Uint8Array(64),v,nn;function Q(a,b,c,e){W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],16);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],12);W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],8);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],7)}for(i=0;i<8;i++)K[i]=(k[i*4]|(k[i*4+1]<<8)|(k[i*4+2]<<16)|(k[i*4+3]<<24))>>>0;for(i=0;i<3;i++)N[i]=(n[i*4]|(n[i*4+1]<<8)|(n[i*4+2]<<16)|(n[i*4+3]<<24))>>>0;for(off=0;off<d.length;off+=64){S[0]=0x61707865;S[1]=0x3320646e;S[2]=0x79622d32;S[3]=0x6b206574;S[4]=K[0];S[5]=K[1];S[6]=K[2];S[7]=K[3];S[8]=K[4];S[9]=K[5];S[10]=K[6];S[11]=K[7];S[12]=ct>>>0;S[13]=N[0];S[14]=N[1];S[15]=N[2];for(i=0;i<16;i++)W[i]=S[i];for(r=0;r<10;r++){Q(0,4,8,12);Q(1,5,9,13);Q(2,6,10,14);Q(3,7,11,15);Q(0,5,10,15);Q(1,6,11,12);Q(2,7,8,13);Q(3,4,9,14)}for(i=0;i<16;i++){v=(W[i]+S[i])>>>0;bl[i*4]=v&255;bl[i*4+1]=(v>>>8)&255;bl[i*4+2]=(v>>>16)&255;bl[i*4+3]=(v>>>24)&255}nn=Math.min(64,d.length-off);for(i=0;i<nn;i++)o[off+i]=d[off+i]^bl[i];ct++}return o}var K=U("Lgd5RqOXNp4ehfYt7sEmhpMkTDvUJUL9pdnZpeZxZoA="),P=["dN95ILkGfNagvFdMKeMJeH8Y","LmAgov+/v2KMhgT5","2CYHp2Zv0UNjcnYu8mg0lQPv","2k35xCcmOoVtsQ02uvHNBlO4Yw==","VfvMAVMyukvDkWpOYntdJ0xD","MGoO1S8ccbmh46JUxOM4/tIQ+IMN","JgBI/IHVlRwX9C41BomFDSvUfw==","9Y3iyE5Po2nMscDnn26tueNd4w==","CbL4H0rwIpdgy0sdLmB6qEbPQQ==","l/GbI0xFJvxXND7ABgBxDdFk","/8WjTq3pg+DAT2cr+xAPeQbu7UBmCCLQRkVbP7OXP7KNLzkHKxNqpKc65fFsAb3zVjnJfbKcQJydPh104Z+8GuFosRSfIAUY","T/2palyk66ea1yEGHPc=","q6vrPe2xovvrXTqs8JwSIQXz","JhGUoGVdgRUCk4LyHhkd","d0IkB5sC1emrWezZJnAydQdURxphgpccwUNhjHdBUMNfzU4mAgFIWUk4D59wvdAlwkT/5iU2Hbw=","V0rbsTZF12anzWWMyakZRmY8zw==","/OTyDegWQuHDJR+bOA==","5ZdglAc1uU5YXJLHxKNb6CT7BL75p+ny","6pg8wmys3WqCiR+C94M0WgtJS/E3ICC4/WKE+g==","FvWyDPtNfQ0AmzTd8+d01GTtQCgcb91B","LgZgqU7G3SIpxPN1OypEURCZHxsv6UeV9ArJ","uxzKqFRedWSzKL4OBMsUU0PTCCsdAY86DeRQ4weg","NWJfPLxSybOnrdLEnVSveMqq2OKljYY=","2xfIN1uNG0UrpEvyFCKHUAb/ksLn5UJMB5G/aHdh6UmC8g==","vpjPjJW7YWNRuV/T7A0/Kk++ZL9CsmwNHVebSI0=","NA0sm91Yria9PMW5EAEaHN6ScJlxKHXIxHQFRSc=","KXt0UBWtssG83RMFKhi5fd5MJg0hLZy523hUBWOHsQ==","HiKQio8T43KrwPpSYoRoFDNdOYfJ3h2Z5kWAdQ==","9sMPaJvFsC1xqJwPlKWDBzCcudVloCoYE17/wp+/qLsjOBgR1RzHnw==","IdiopGHFsb2MhhmLzfupeIklK6ngKlg8","7gl9XytVxGeWte0BXUOhMGRf8H0gHCFQLeg=","9nenP8sBOf/2ErxCS+qBIhcAcDb54CjziE46VlHVbgg=","FdgK17KSqRIyfgc352suh/2UBdypyjFQgo15XBjd","TeaJWsKn6+CtxR+cYuXkcm69JVA7AnC2EhLqVTK8sn2O","GjiMG9ddw3vgT/tu+c0aN7+Zi7ZXaRao4ZIUsrq/Qg==","Hdd0b2aridqaaggs8hqBaVuEQU+JsPT/BYV69TtwuA==","SbXy4USfljilT/N+wxPFTvEJcHwnxaO4ViHgRO4QxpE=","MkNlxFVK06tYMDALcTaezDjfIe3AqVI+Krxwviet4g==","+MeA9lJ/Uvz/QSG5qhtib+680y6m5D8+f7N7r9Nsaw==","KTizTi/AOYbcxxTXMM517AuRV3kfZk547g==","6UHUoMl00rwiPL25NewOXJLcgMX4hs6Ioo5sdJWd9XvtNA==","zfioggiy72iL76f0RMbbcrV519XVjhuOQqnkyw==","PfW0OUyEDcMx/3sebEZG8tFmxrHfD0hGUumrOgkm8hYPXyHr0YI=","UvvBH5iy/V+SSkqRM2AKaOvcPe31w5oo80eF4wK2LgRALbBU9Qmp18oW+Bpc/UhDax1HgElVE73j517V5NKZaWyz6yeLYYJq66w=","SV/fOQoyWs6HDPZxjw==","vj9x0gA44vvVGtnVn83ybMfpY9Qwcq3elJLDi8vf","LeIwk45TqFTqPSoB/ke9odz+XtS0wD0/ighDININ3Q==","d+5TDxayUOmavpW9EklVUdLu+YFkA1HP1yGE1v/G","ROdJccbCxMgmopzr6nOt0OmdcJ1wkxzYfJ2eVlah","XELRhxo5Q1W5W39mAwlLwk5MGOCqK7IA0/8oOQO52SU=","L1PMUBcMo1QgN7qb5XS2S8gWaJRcixlgkW4t7cjq5yyC","oLyvEfpu4EeBuTl7wFa3FgCXGSURpClfPg2sUeD3sQ==","ZqjSYP+1fsDmHPnHm4gBkZZDqipK0RPP6ob0dFljyQ==","Pnz75FWJppgMiVGv4cUr2Jyj761BH0AT1tnnaL9sTw==","iWABFUk69RXLfYsFWehtw8XIf+wqdvCJ4vdnkUQV","MQRMN+othOb1uPBp3OMASHo3x9BWpTDJrIrVUvWbt5c=","9wdYRNnH/ddroFeIMSDbInBkd4WyBy8Y5s6IZPhp897xp8lyQQ==","GAGQ/0BMCiP3ccEUXdeWbImuRJQG/n3NhL2i8ikjiS4G/Ip+7KQ=","aI15BpDD5gN7sUyrVDROZxAz7hIebomv3Wq4EsEl/Q==","jSljIpifmQZthIrROgpAO5I3gD5it2wLNSRpuw==","d6XwYTID2ythrXVokls32VGV91M=","xxDkYDSJ//HigljLHqRqukdMPhPgHhAPxltGAO/k6kd9Blc=","HLZedPC+uRfzkNlotZyBNd1W","XVduXq4wDVTjh3Ng1kerMYHy/ljdZOOjIU03LzUvDUGRjbKitYLn/l+jax/EWuAu4C7XDCAHrYoGzzxmzDhZ8Eimw3bbaA==","Jl4Gl1HuQ8vJENa9PMqozqex/atK2tb1o0A/","8VANG+Zw4NWQUzHfIxA=","pWgHJhUMh4CGuITLV6FsJIS1ixaFaiDjZpnVY9c2","3fAuArfatXkJNKzPrDyAWw==","r1bMmRaFGsIeAydk+rf93PhuG4pLMSPFT8qi4D78fHyZ6o2WctAJJSSHGddVJjZvCL+OR1KvMqR9Yvn2Tslh","IwI4s70jsgmCICjeWknmqo3OSpPpsw==","6ISbrNhpRNKEF+lsYzQ=","ViRpzK+K9XFkFJEIiLq0fRTb","rqSvaf8iNxdsO/b89T/ehIlz","XxFJyt3KGrzBzplG/zfHJCab","fIAOTUhGrg9rM/6uwArdtsgGp4X4XttqIvLIvwXweEms5DIMfffyyQBUIS6qxg0U572HsNEV6gV51A==","Lfv90JtOWjpFVB7ZM/m1GC8hFpwlppMEuj29pYArcpt3anvCbf1Dlp33p1SBhYHW","5yRLtIG5ng3A6NGXAEnup3Er","R5NUBk/2UPWsoEMDOHD4uVC4","YOV9bvPWL1Q6V0nJDOWD2Z+0tsF1gNSu8NA=","CLc5O5JGRfNax6GaNw==","kl3Qv+B1v9q+zWpLIYl6","w/K9ioagBdfTnzR1v2+MDZsW6ux2cn0=","Esjqvuw99EeLk04Ac9Iouh1W+0U3a50=","JT7zCz8k/T/whvhaUvP3","yfOWnPJdII8mNsF8YPPLB1u8Olc=","JecL6l0DNsnOw6autA==","cKiQSVqb2RKynrZIXj80i8JoyTaudnj3Q0IjVjLdI17upUVR/A9a25XRA+VPTOu/XBnaLg==","daizL2Y/zKXgLOPMtqfRcUStKL6SQ1GQ54rk0LIxWDHipzrE4xJCTpDDvaeLHm+DXIu0vY8ZIUjQBLY=","kGnnFJKmsZQpD8GTpOF3Ctobw1XzR9vWMCyOkuNxZqlcfJ+bUDodLntC+7Ml1n8MDTJq","4sGKM+tHtstXhSvLR/EYXoq8yuZiCqvF5t1Tq+XLriXN+B5Vrgy6r74TtA==","/h0X3zuEu1D26IRtOLxtUUb1NK/9L59OnikIxn+ZHtGLUqnxLanMBv2hRCnw6hvaOhJ2v8I=","7V7asvWzUR+tp5nHKNmfAA==","KsaK0erIHs3S19Z0nX/aA52ZfoGDdA==","k3SokhsrDbBhBDtbSAOlng64it2xGn07mDREihowtIgyYzc6MCy89v4=","GgUstd/oN0g3aZZgXQ==","B4OaotT7GucRc3hyM34=","RXXmzoXoc0s3sAoNv2HI","4RrfkxRR0MfJxLCqUpxN","px0PQuNUsskcUGmzGfzPGNg=","U2T0DgGc5JmSfY7wSOt8F704","InZUSQ4NYojEW0RD0M48+D2qdcd2JiyxR3GnxXZReqBUelc3rD8A","3hnPpKK+SizUSfwCXS7fON+79siTAa6HgaR70eaDmzWuSbqoomXQ","zthc621G+q7R9YQUFec=","DXY7cG7BI+KdH8CHtu64hG726pQU7d4Lc4N3pyLSe+/4P3Y3UVgBAQ77Xei3AAJEXADIk4g=","0sxLl3X4EfQwfvcZsK8rOgg9pw==","VATXtAf9NKILH0fiRQ==","5/6HjSuKMdua+fk26z5vTw==","HT8u/ts/FW/ZfaN6Twg3Yt0=","3SZ1MptgGMBS01FBgi7oazg=","kyiizQ1bGpOwcyD60YXQrxg=","9HcQyx8/G39+ylN5pend64++Iy9sZ66fXBU68l0A4TyAQd3OgA==","WZakrEFMArW1I8ktuTnI/Lm10J7EAA==","HEH6+ezD/iAvVsmpEjM=","A1hW+sh1A+z9mw1sKxBAjQ==","hxvklGL/RomoLE03vOg=","7pjWF2TFx/Qi9udh03I=","cgUvTU5srsROagZf2to=","OUlkS9pZu8Q2Kw3NFC8=","FPVm2OxrPdiHXjoTSg==","GxzdjsUsGqIge5MNmg==","eB5z6PU7hWg3rR3kcA==","aWXDBYVwcwGPc+a/vfY=","5GKHtCQJb89Z1vGJ+Vg=","k3F57KXHFClYOuBv2Wk=","w5ev0Uef28E0VoHUjVU=","i1AWfSSonWP8RFOrJJFygeNhcjqO8xLE5tWiWIbB5snUlRH8","yLfgZZMjHIswzcnlbvI=","MKllO43Gn7rmGNYHXQEClNo=","RDGzfhaGke+RdepVK5yBg1YD","vjb83acINgQVJ+wgn8YtjAPx4l0=","DYoWz9fBXUjUuIOppCKVF+cT0Vf3QdX4lR4=","/kAoxvtXQXYhJv0rzw==","wi0KIts7IjAZZjOg6w==","pNVmklhPxCmd6zWyWw==","UhrQfmB1F3Bh2Sh9vA/SIqzN","Ou3UCb7FKGg0EHdxhA==","Jn6NUw22NNjxgX83lQ==","iBHGyvjNaAEOZvpakQf1ww==","3W0YhAOgTCgVr9vhT5dZaro=","fZuA8ToAmVovw2BX01dK2w==","9x860GfqlwMpPPiuDCZWuwuGhAHn","uVnw2xOXvrUj8OLrrIN8qMBrjHo=","B0L7MeHN1/Y2a5bvQx7H3jkriBGU","VmXos3t0qnKtH7JXRhFN+KxU","1PaCfqh8TjczWnHijwYYk5WmoQ==","wUXUZuS0pJnBysSLPrpVuiVoolA=","Vac45OiCLeyP4QJuCGnHfprgOC2eNvRx","khE2Qpg+2DdTbpquZlGb4pY=","GaTdx0jZghhrEFX73EWN2FPf9CtGLQ==","eI+QL0p9NCBmq/EDcy9o0uGaUIxKCNNkDA==","etZp2UHMPQfbqFiefnc=","9Lc6GodGFF2FLUwl98mN/Q==","Lf6atXfAPvzdUt532Y5/+5+OUoQ+U0aH2ouDlwEX","FgRyf+pMqW4jNue0azJej2uV","b1mGqod6gc4VTl9OFrBW7luP7xUL/OvwfTcnXA==","GH0gYqRUgilxyc8bUzZ8cVQqNN+/mq51dJbA6w==","cjrIsZbX1Xq/fV6hXvEp","ayzLASDlWhdhQW2lHQ==","3kXt6UjuH4Y6+5h3HA==","qQeTrfEuK5WGAqE4YHpCsKM=","pgpMO4GVc0sioULJMM52uJa1t85TJQ==","cD3E/9Wtankd/cJPJo5tfFvw","SB6lnJFEGdQgBAGdSXulRap7cevjzsg=","X8YTUvMWUTbqZHIkamNgfnpq","oE+ixRH4RPb7u/aFbxnZCSyurdY8jNY=","LIAmz7gcxSrSJPqAeK6bTaEiRBN9xQ==","8uLJtEScCv6aT2tate2+nFREM9doBKCh/WRuLMIDSZ1d"],C=[],TD=new TextDecoder();return function(i){if(C[i]!==void 0)return C[i];var raw=U(P[i]),n=raw.subarray(0,12),c=raw.subarray(12);return C[i]=TD.decode(CC(K,n,c))}})();
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== __abx$6888e5(0) ? key + __abx$6888e5(1) : key, value);
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== __abx$6888e5(2) && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== __abx$6888e5(3) && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: __abx$6888e5(4) }));
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, __abx$6888e5(3)) ? x[__abx$6888e5(3)] : x;
}
var sqlWasmBrowser$2 = { exports: {} };
var hasRequiredSqlWasmBrowser;
function requireSqlWasmBrowser() {
  if (hasRequiredSqlWasmBrowser) return sqlWasmBrowser$2.exports;
  hasRequiredSqlWasmBrowser = 1;
  (function(module, exports) {
    var initSqlJsPromise = void 0;
    var initSqlJs = function(moduleConfig) {
      if (initSqlJsPromise) {
        return initSqlJsPromise;
      }
      initSqlJsPromise = new Promise(function(resolveModule, reject) {
        var _a, _b;
        var Module = typeof moduleConfig !== __abx$6888e5(5) ? moduleConfig : {};
        var originalOnAbortFunction = Module[__abx$6888e5(6)];
        Module[__abx$6888e5(6)] = function(errorThatCausedAbort) {
          reject(new Error(errorThatCausedAbort));
          if (originalOnAbortFunction) {
            originalOnAbortFunction(errorThatCausedAbort);
          }
        };
        Module[__abx$6888e5(7)] = Module[__abx$6888e5(7)] || [];
        Module[__abx$6888e5(7)].push(function() {
          resolveModule(Module);
        });
        module = void 0;
        var k;
        k || (k = typeof Module != __abx$6888e5(5) ? Module : {});
        var aa = !!globalThis.window, ba = !!globalThis.WorkerGlobalScope;
        k.onRuntimeInitialized = function() {
          function a(f, l) {
            switch (typeof l) {
              case __abx$6888e5(8):
                $b(f, l ? 1 : 0);
                break;
              case __abx$6888e5(9):
                ac(f, l);
                break;
              case __abx$6888e5(2):
                bc(f, l, -1, -1);
                break;
              case __abx$6888e5(12):
                if (null === l) eb(f);
                else if (null != l.length) {
                  var n = ca(l.length);
                  m.set(l, n);
                  cc(f, n, l.length, -1);
                  da(n);
                } else ra(f, __abx$6888e5(10) + l + __abx$6888e5(11), -1);
                break;
              default:
                eb(f);
            }
          }
          function b(f, l) {
            for (var n = [], p = 0; p < f; p += 1) {
              var u = r(l + 4 * p, __abx$6888e5(13)), v = dc(u);
              if (1 === v || 2 === v) u = ec(u);
              else if (3 === v) u = fc(u);
              else if (4 === v) {
                v = u;
                u = gc(v);
                v = hc(v);
                for (var K = new Uint8Array(u), I = 0; I < u; I += 1) K[I] = m[v + I];
                u = K;
              } else u = null;
              n.push(u);
            }
            return n;
          }
          function c(f, l) {
            this.Qa = f;
            this.db = l;
            this.Oa = 1;
            this.yb = [];
          }
          function d(f, l) {
            this.db = l;
            this.ob = ea(f);
            if (null === this.ob) throw Error(__abx$6888e5(14));
            this.ub = this.ob;
            this.gb = this.Fb = null;
          }
          function e(f) {
            this.filename = __abx$6888e5(15) + (4294967295 * Math.random() >>> 0);
            if (null != f) {
              var l = this.filename, n = __abx$6888e5(16), p = l;
              n && (n = __abx$6888e5(2) == typeof n ? n : fa(n), p = l ? ha(n + __abx$6888e5(16) + l) : n);
              l = ia(true, true);
              p = ja(
                p,
                l
              );
              if (f) {
                if (__abx$6888e5(2) == typeof f) {
                  n = Array(f.length);
                  for (var u = 0, v = f.length; u < v; ++u) n[u] = f.charCodeAt(u);
                  f = n;
                }
                ka(p, l | 146);
                n = la(p, 577);
                ma(n, f, 0, f.length, 0);
                na(n);
                ka(p, l);
              }
            }
            this.handleError(q(this.filename, g));
            this.db = r(g, __abx$6888e5(13));
            hb(this.db);
            this.pb = {};
            this.Sa = {};
          }
          var g = y(4), h = k.cwrap, q = h(__abx$6888e5(17), __abx$6888e5(9), [__abx$6888e5(2), __abx$6888e5(9)]), w = h(__abx$6888e5(18), __abx$6888e5(9), [__abx$6888e5(9)]), t = h(__abx$6888e5(19), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(2), __abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9)]), x = h(__abx$6888e5(20), __abx$6888e5(9), [__abx$6888e5(9)]), D = h(
            __abx$6888e5(21),
            __abx$6888e5(9),
            [__abx$6888e5(9), __abx$6888e5(2), __abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9)]
          ), ib = h(__abx$6888e5(22), __abx$6888e5(2), [__abx$6888e5(9)]), jc = h(__abx$6888e5(23), __abx$6888e5(2), [__abx$6888e5(9)]), jb = h(__abx$6888e5(21), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9)]), kc = h(__abx$6888e5(24), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9)]), kb = h(__abx$6888e5(25), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9)]), lc = h(__abx$6888e5(26), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9)]), mc = h(__abx$6888e5(27), __abx$6888e5(9), [
            __abx$6888e5(9),
            __abx$6888e5(9),
            __abx$6888e5(9)
          ]), nc = h(__abx$6888e5(28), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(2)]), oc = h(__abx$6888e5(29), __abx$6888e5(9), [__abx$6888e5(9)]), pc = h(__abx$6888e5(30), __abx$6888e5(2), [__abx$6888e5(9)]), qc = h(__abx$6888e5(31), __abx$6888e5(9), [__abx$6888e5(9)]), rc = h(__abx$6888e5(32), __abx$6888e5(9), [__abx$6888e5(9)]), sc = h(__abx$6888e5(33), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(9)]), lb = h(__abx$6888e5(34), __abx$6888e5(2), [__abx$6888e5(9), __abx$6888e5(9)]), tc = h(__abx$6888e5(35), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(9)]), uc = h(__abx$6888e5(36), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(9)]), vc = h(
            __abx$6888e5(37),
            __abx$6888e5(9),
            [__abx$6888e5(9), __abx$6888e5(9)]
          ), wc = h(__abx$6888e5(38), __abx$6888e5(2), [__abx$6888e5(9), __abx$6888e5(9)]), xc = h(__abx$6888e5(39), __abx$6888e5(9), [__abx$6888e5(9)]), yc = h(__abx$6888e5(40), __abx$6888e5(9), [__abx$6888e5(9)]), zc = h(__abx$6888e5(41), __abx$6888e5(9), [__abx$6888e5(9)]), mb = h(__abx$6888e5(42), __abx$6888e5(9), __abx$6888e5(43).split(__abx$6888e5(44))), dc = h(__abx$6888e5(45), __abx$6888e5(9), [__abx$6888e5(9)]), gc = h(__abx$6888e5(46), __abx$6888e5(9), [__abx$6888e5(9)]), fc = h(__abx$6888e5(47), __abx$6888e5(2), [__abx$6888e5(9)]), hc = h(
            __abx$6888e5(48),
            __abx$6888e5(9),
            [__abx$6888e5(9)]
          ), ec = h(__abx$6888e5(49), __abx$6888e5(9), [__abx$6888e5(9)]), ac = h(__abx$6888e5(50), __abx$6888e5(1), [__abx$6888e5(9), __abx$6888e5(9)]), eb = h(__abx$6888e5(51), __abx$6888e5(1), [__abx$6888e5(9)]), bc = h(__abx$6888e5(52), __abx$6888e5(1), [__abx$6888e5(9), __abx$6888e5(2), __abx$6888e5(9), __abx$6888e5(9)]), cc = h(__abx$6888e5(53), __abx$6888e5(1), [__abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9)]), $b = h(__abx$6888e5(54), __abx$6888e5(1), [__abx$6888e5(9), __abx$6888e5(9)]), ra = h(__abx$6888e5(55), __abx$6888e5(1), [__abx$6888e5(9), __abx$6888e5(2), __abx$6888e5(9)]), nb = h(__abx$6888e5(56), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(9)]), hb = h(
            __abx$6888e5(57),
            __abx$6888e5(9),
            [__abx$6888e5(9)]
          ), ob = h(__abx$6888e5(58), __abx$6888e5(9), [__abx$6888e5(9), __abx$6888e5(9), __abx$6888e5(9)]);
          c.prototype.bind = function(f) {
            if (!this.Qa) throw __abx$6888e5(59);
            this.reset();
            return Array.isArray(f) ? this.Wb(f) : null != f && __abx$6888e5(12) === typeof f ? this.Xb(f) : true;
          };
          c.prototype.step = function() {
            if (!this.Qa) throw __abx$6888e5(59);
            this.Oa = 1;
            var f = oc(this.Qa);
            switch (f) {
              case 100:
                return true;
              case 101:
                return false;
              default:
                throw this.db.handleError(f);
            }
          };
          c.prototype.Pb = function(f) {
            null == f && (f = this.Oa, this.Oa += 1);
            return sc(this.Qa, f);
          };
          c.prototype.hc = function(f) {
            null == f && (f = this.Oa, this.Oa += 1);
            f = lb(this.Qa, f);
            if (__abx$6888e5(60) !== typeof BigInt) throw Error(__abx$6888e5(61));
            return BigInt(f);
          };
          c.prototype.mc = function(f) {
            null == f && (f = this.Oa, this.Oa += 1);
            return lb(this.Qa, f);
          };
          c.prototype.getBlob = function(f) {
            null == f && (f = this.Oa, this.Oa += 1);
            var l = uc(this.Qa, f);
            f = tc(this.Qa, f);
            for (var n = new Uint8Array(l), p = 0; p < l; p += 1) n[p] = m[f + p];
            return n;
          };
          c.prototype.get = function(f, l) {
            l = l || {};
            null != f && this.bind(f) && this.step();
            f = [];
            for (var n = rc(this.Qa), p = 0; p < n; p += 1) switch (vc(this.Qa, p)) {
              case 1:
                var u = l.useBigInt ? this.hc(p) : this.Pb(p);
                f.push(u);
                break;
              case 2:
                f.push(this.Pb(p));
                break;
              case 3:
                f.push(this.mc(p));
                break;
              case 4:
                f.push(this.getBlob(p));
                break;
              default:
                f.push(null);
            }
            return f;
          };
          c.prototype.Db = function() {
            for (var f = [], l = qc(this.Qa), n = 0; n < l; n += 1) f.push(wc(this.Qa, n));
            return f;
          };
          c.prototype.Ob = function(f, l) {
            f = this.get(f, l);
            l = this.Db();
            for (var n = {}, p = 0; p < l.length; p += 1) n[l[p]] = f[p];
            return n;
          };
          c.prototype.lc = function() {
            return ib(this.Qa);
          };
          c.prototype.ic = function() {
            return jc(this.Qa);
          };
          c.prototype.Jb = function(f) {
            null != f && this.bind(f);
            this.step();
            return this.reset();
          };
          c.prototype.Lb = function(f, l) {
            null == l && (l = this.Oa, this.Oa += 1);
            f = ea(f);
            this.yb.push(f);
            this.db.handleError(kc(this.Qa, l, f, -1, 0));
          };
          c.prototype.Vb = function(f, l) {
            null == l && (l = this.Oa, this.Oa += 1);
            var n = ca(f.length);
            m.set(f, n);
            this.yb.push(n);
            this.db.handleError(kb(this.Qa, l, n, f.length, 0));
          };
          c.prototype.Kb = function(f, l) {
            null == l && (l = this.Oa, this.Oa += 1);
            this.db.handleError((f === (f | 0) ? mc : lc)(
              this.Qa,
              l,
              f
            ));
          };
          c.prototype.Yb = function(f) {
            null == f && (f = this.Oa, this.Oa += 1);
            kb(this.Qa, f, 0, 0, 0);
          };
          c.prototype.Mb = function(f, l) {
            null == l && (l = this.Oa, this.Oa += 1);
            switch (typeof f) {
              case __abx$6888e5(2):
                this.Lb(f, l);
                return;
              case __abx$6888e5(9):
                this.Kb(f, l);
                return;
              case __abx$6888e5(62):
                this.Lb(f.toString(), l);
                return;
              case __abx$6888e5(8):
                this.Kb(f + 0, l);
                return;
              case __abx$6888e5(12):
                if (null === f) {
                  this.Yb(l);
                  return;
                }
                if (null != f.length) {
                  this.Vb(f, l);
                  return;
                }
            }
            throw __abx$6888e5(63) + f + __abx$6888e5(11);
          };
          c.prototype.Xb = function(f) {
            var l = this;
            Object.keys(f).forEach(function(n) {
              var p = nc(l.Qa, n);
              0 !== p && l.Mb(f[n], p);
            });
            return true;
          };
          c.prototype.Wb = function(f) {
            for (var l = 0; l < f.length; l += 1) this.Mb(f[l], l + 1);
            return true;
          };
          c.prototype.reset = function() {
            this.Cb();
            return 0 === yc(this.Qa) && 0 === xc(this.Qa);
          };
          c.prototype.Cb = function() {
            for (var f; void 0 !== (f = this.yb.pop()); ) da(f);
          };
          c.prototype.cb = function() {
            this.Cb();
            var f = 0 === zc(this.Qa);
            delete this.db.pb[this.Qa];
            this.Qa = 0;
            return f;
          };
          d.prototype.next = function() {
            if (null === this.ob) return { done: true };
            null !== this.gb && (this.gb.cb(), this.gb = null);
            if (!this.db.db) throw this.Ab(), Error(__abx$6888e5(64));
            var f = oa(), l = y(4);
            pa(g);
            pa(l);
            try {
              this.db.handleError(jb(this.db.db, this.ub, -1, g, l));
              this.ub = r(l, __abx$6888e5(13));
              var n = r(g, __abx$6888e5(13));
              if (0 === n) return this.Ab(), { done: true };
              this.gb = new c(n, this.db);
              this.db.pb[n] = this.gb;
              return { value: this.gb, done: false };
            } catch (p) {
              throw this.Fb = z(this.ub), this.Ab(), p;
            } finally {
              qa(f);
            }
          };
          d.prototype.Ab = function() {
            da(this.ob);
            this.ob = null;
          };
          d.prototype.jc = function() {
            return null !== this.Fb ? this.Fb : z(this.ub);
          };
          __abx$6888e5(60) === typeof Symbol && __abx$6888e5(0) === typeof Symbol.iterator && (d.prototype[Symbol.iterator] = function() {
            return this;
          });
          e.prototype.Jb = function(f, l) {
            if (!this.db) throw __abx$6888e5(64);
            if (l) {
              f = this.Gb(f, l);
              try {
                f.step();
              } finally {
                f.cb();
              }
            } else this.handleError(t(this.db, f, 0, 0, g));
            return this;
          };
          e.prototype.exec = function(f, l, n) {
            if (!this.db) throw __abx$6888e5(64);
            var p = null, u = null, v = null;
            try {
              v = u = ea(f);
              var K = y(4);
              for (f = []; 0 !== r(v, __abx$6888e5(65)); ) {
                pa(g);
                pa(K);
                this.handleError(jb(this.db, v, -1, g, K));
                var I = r(g, __abx$6888e5(13));
                v = r(
                  K,
                  __abx$6888e5(13)
                );
                if (0 !== I) {
                  var H = null;
                  p = new c(I, this);
                  for (null != l && p.bind(l); p.step(); ) null === H && (H = { columns: p.Db(), values: [] }, f.push(H)), H.values.push(p.get(null, n));
                  p.cb();
                }
              }
              return f;
            } catch (L) {
              throw p && p.cb(), L;
            } finally {
              u && da(u);
            }
          };
          e.prototype.ec = function(f, l, n, p, u) {
            __abx$6888e5(60) === typeof l && (p = n, n = l, l = void 0);
            f = this.Gb(f, l);
            try {
              for (; f.step(); ) n(f.Ob(null, u));
            } finally {
              f.cb();
            }
            if (__abx$6888e5(60) === typeof p) return p();
          };
          e.prototype.Gb = function(f, l) {
            pa(g);
            this.handleError(D(this.db, f, -1, g, 0));
            f = r(g, __abx$6888e5(13));
            if (0 === f) throw __abx$6888e5(66);
            var n = new c(f, this);
            null != l && n.bind(l);
            return this.pb[f] = n;
          };
          e.prototype.pc = function(f) {
            return new d(f, this);
          };
          e.prototype.fc = function() {
            Object.values(this.pb).forEach(function(l) {
              l.cb();
            });
            Object.values(this.Sa).forEach(A);
            this.Sa = {};
            this.handleError(w(this.db));
            var f = sa(this.filename);
            this.handleError(q(this.filename, g));
            this.db = r(g, __abx$6888e5(13));
            hb(this.db);
            return f;
          };
          e.prototype.close = function() {
            null !== this.db && (Object.values(this.pb).forEach(function(f) {
              f.cb();
            }), Object.values(this.Sa).forEach(A), this.Sa = {}, this.fb && (A(this.fb), this.fb = void 0), this.handleError(w(this.db)), ta(__abx$6888e5(16) + this.filename), this.db = null);
          };
          e.prototype.handleError = function(f) {
            if (0 === f) return null;
            f = pc(this.db);
            throw Error(f);
          };
          e.prototype.kc = function() {
            return x(this.db);
          };
          e.prototype.bc = function(f, l) {
            Object.prototype.hasOwnProperty.call(this.Sa, f) && (A(this.Sa[f]), delete this.Sa[f]);
            var n = ua(function(p, u, v) {
              u = b(u, v);
              try {
                var K = l.apply(null, u);
              } catch (I) {
                ra(p, I, -1);
                return;
              }
              a(p, K);
            }, __abx$6888e5(67));
            this.Sa[f] = n;
            this.handleError(mb(
              this.db,
              f,
              l.length,
              1,
              0,
              n,
              0,
              0,
              0
            ));
            return this;
          };
          e.prototype.ac = function(f, l) {
            var n = l.init || function() {
              return null;
            }, p = l.finalize || function(H) {
              return H;
            }, u = l.step;
            if (!u) throw __abx$6888e5(68) + f;
            var v = {};
            Object.hasOwnProperty.call(this.Sa, f) && (A(this.Sa[f]), delete this.Sa[f]);
            l = f + __abx$6888e5(69);
            Object.hasOwnProperty.call(this.Sa, l) && (A(this.Sa[l]), delete this.Sa[l]);
            var K = ua(function(H, L, Ka) {
              var V = nb(H, 1);
              Object.hasOwnProperty.call(v, V) || (v[V] = n());
              L = b(L, Ka);
              L = [v[V]].concat(L);
              try {
                v[V] = u.apply(
                  null,
                  L
                );
              } catch (Bc) {
                delete v[V], ra(H, Bc, -1);
              }
            }, __abx$6888e5(67)), I = ua(function(H) {
              var L = nb(H, 1);
              try {
                var Ka = p(v[L]);
              } catch (V) {
                delete v[L];
                ra(H, V, -1);
                return;
              }
              a(H, Ka);
              delete v[L];
            }, __abx$6888e5(70));
            this.Sa[f] = K;
            this.Sa[l] = I;
            this.handleError(mb(this.db, f, u.length - 1, 1, 0, 0, K, I, 0));
            return this;
          };
          e.prototype.vc = function(f) {
            this.fb && (ob(this.db, 0, 0), A(this.fb), this.fb = void 0);
            if (!f) return this;
            this.fb = ua(function(l, n, p, u, v) {
              switch (n) {
                case 18:
                  l = __abx$6888e5(71);
                  break;
                case 23:
                  l = __abx$6888e5(72);
                  break;
                case 9:
                  l = __abx$6888e5(73);
                  break;
                default:
                  throw __abx$6888e5(74) + n;
              }
              p = z(p);
              u = z(u);
              if (v > Number.MAX_SAFE_INTEGER) throw __abx$6888e5(75);
              f(l, p, u, Number(v));
            }, __abx$6888e5(76));
            ob(this.db, this.fb, 0);
            return this;
          };
          c.prototype.bind = c.prototype.bind;
          c.prototype.step = c.prototype.step;
          c.prototype.get = c.prototype.get;
          c.prototype.getColumnNames = c.prototype.Db;
          c.prototype.getAsObject = c.prototype.Ob;
          c.prototype.getSQL = c.prototype.lc;
          c.prototype.getNormalizedSQL = c.prototype.ic;
          c.prototype.run = c.prototype.Jb;
          c.prototype.reset = c.prototype.reset;
          c.prototype.freemem = c.prototype.Cb;
          c.prototype.free = c.prototype.cb;
          d.prototype.next = d.prototype.next;
          d.prototype.getRemainingSQL = d.prototype.jc;
          e.prototype.run = e.prototype.Jb;
          e.prototype.exec = e.prototype.exec;
          e.prototype.each = e.prototype.ec;
          e.prototype.prepare = e.prototype.Gb;
          e.prototype.iterateStatements = e.prototype.pc;
          e.prototype[__abx$6888e5(77)] = e.prototype.fc;
          e.prototype.close = e.prototype.close;
          e.prototype.handleError = e.prototype.handleError;
          e.prototype.getRowsModified = e.prototype.kc;
          e.prototype.create_function = e.prototype.bc;
          e.prototype.create_aggregate = e.prototype.ac;
          e.prototype.updateHook = e.prototype.vc;
          k.Database = e;
        };
        var va = __abx$6888e5(78), wa = (_b = (_a = globalThis.document) == null ? void 0 : _a.currentScript) == null ? void 0 : _b.src;
        ba && (wa = self.location.href);
        var xa = __abx$6888e5(1), ya, za;
        if (aa || ba) {
          try {
            xa = new URL(__abx$6888e5(79), wa).href;
          } catch {
          }
          ba && (za = (a) => {
            var b = new XMLHttpRequest();
            b.open(__abx$6888e5(80), a, false);
            b.responseType = __abx$6888e5(81);
            b.send(null);
            return new Uint8Array(b.response);
          });
          ya = async (a) => {
            a = await fetch(a, { credentials: __abx$6888e5(82) });
            if (a.ok) return a.arrayBuffer();
            throw Error(a.status + __abx$6888e5(83) + a.url);
          };
        }
        var Aa = console.log.bind(console), B = console.error.bind(console), Ba, Ca = false, Da, m, C, Ea, E, F, Fa, Ga, G;
        function Ha() {
          var a = Ia.buffer;
          m = new Int8Array(a);
          Ea = new Int16Array(a);
          C = new Uint8Array(a);
          E = new Int32Array(a);
          F = new Uint32Array(a);
          Fa = new Float32Array(a);
          Ga = new Float64Array(a);
          G = new BigInt64Array(a);
          new BigUint64Array(a);
        }
        function Ja(a) {
          var _a2;
          (_a2 = k.onAbort) == null ? void 0 : _a2.call(k, a);
          a = __abx$6888e5(84) + a + __abx$6888e5(85);
          B(a);
          Ca = true;
          throw new WebAssembly.RuntimeError(a + __abx$6888e5(86));
        }
        var La;
        async function Ma(a) {
          if (!Ba) try {
            var b = await ya(a);
            return new Uint8Array(b);
          } catch {
          }
          if (a == La && Ba) a = new Uint8Array(Ba);
          else if (za) a = za(a);
          else throw __abx$6888e5(87);
          return a;
        }
        async function Na(a, b) {
          try {
            var c = await Ma(a);
            return await WebAssembly.instantiate(c, b);
          } catch (d) {
            B((__abx$6888e5(88)+String(d)+__abx$6888e5(1))), Ja(d);
          }
        }
        async function Oa(a) {
          var b = La;
          if (!Ba) try {
            var c = fetch(b, { credentials: __abx$6888e5(82) });
            return await WebAssembly.instantiateStreaming(c, a);
          } catch (d) {
            B((__abx$6888e5(89)+String(d)+__abx$6888e5(1))), B(__abx$6888e5(90));
          }
          return Na(b, a);
        }
        class Pa {
          constructor(a) {
            __publicField(this, __abx$6888e5(91), __abx$6888e5(92));
            this.message = (__abx$6888e5(93)+String(a)+__abx$6888e5(85));
            this.status = a;
          }
        }
        var Qa = (a) => {
          for (; 0 < a.length; ) a.shift()(k);
        }, Ra = [], Sa = [], Ta = () => {
          var a = k.preRun.shift();
          Sa.push(a);
        }, J = 0, Ua = null;
        function r(a, b = __abx$6888e5(65)) {
          b.endsWith(__abx$6888e5(94)) && (b = __abx$6888e5(94));
          switch (b) {
            case __abx$6888e5(95):
              return m[a];
            case __abx$6888e5(65):
              return m[a];
            case __abx$6888e5(96):
              return Ea[a >> 1];
            case __abx$6888e5(13):
              return E[a >> 2];
            case __abx$6888e5(97):
              return G[a >> 3];
            case __abx$6888e5(98):
              return Fa[a >> 2];
            case __abx$6888e5(99):
              return Ga[a >> 3];
            case __abx$6888e5(94):
              return F[a >> 2];
            default:
              Ja((__abx$6888e5(100)+String(b)+__abx$6888e5(1)));
          }
        }
        var Va = true;
        function pa(a) {
          var b = __abx$6888e5(13);
          b.endsWith(__abx$6888e5(94)) && (b = __abx$6888e5(94));
          switch (b) {
            case __abx$6888e5(95):
              m[a] = 0;
              break;
            case __abx$6888e5(65):
              m[a] = 0;
              break;
            case __abx$6888e5(96):
              Ea[a >> 1] = 0;
              break;
            case __abx$6888e5(13):
              E[a >> 2] = 0;
              break;
            case __abx$6888e5(97):
              G[a >> 3] = BigInt(0);
              break;
            case __abx$6888e5(98):
              Fa[a >> 2] = 0;
              break;
            case __abx$6888e5(99):
              Ga[a >> 3] = 0;
              break;
            case __abx$6888e5(94):
              F[a >> 2] = 0;
              break;
            default:
              Ja((__abx$6888e5(101)+String(b)+__abx$6888e5(1)));
          }
        }
        var Wa = new TextDecoder(), Xa = (a, b, c, d) => {
          c = b + c;
          if (d) return c;
          for (; a[b] && !(b >= c); ) ++b;
          return b;
        }, z = (a, b, c) => a ? Wa.decode(C.subarray(a, Xa(C, a, b, c))) : __abx$6888e5(1), Ya = (a, b) => {
          for (var c = 0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d];
            __abx$6888e5(79) === e ? a.splice(d, 1) : __abx$6888e5(102) === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
          }
          if (b) for (; c; c--) a.unshift(__abx$6888e5(102));
          return a;
        }, ha = (a) => {
          var b = __abx$6888e5(16) === a.charAt(0), c = __abx$6888e5(16) === a.slice(-1);
          (a = Ya(a.split(__abx$6888e5(16)).filter((d) => !!d), !b).join(__abx$6888e5(16))) || b || (a = __abx$6888e5(79));
          a && c && (a += __abx$6888e5(16));
          return (b ? __abx$6888e5(16) : __abx$6888e5(1)) + a;
        }, Za = (a) => {
          var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
          a = b[0];
          b = b[1];
          if (!a && !b) return __abx$6888e5(79);
          b && (b = b.slice(0, -1));
          return a + b;
        }, $a = (a) => a && a.match(/([^\/]+|\/)\/*$/)[1], ab = () => (a) => crypto.getRandomValues(a), bb = (a) => {
          (bb = ab())(a);
        }, cb = (...a) => {
          for (var b = __abx$6888e5(1), c = false, d = a.length - 1; -1 <= d && !c; d--) {
            c = 0 <= d ? a[d] : __abx$6888e5(16);
            if (__abx$6888e5(2) != typeof c) throw new TypeError(__abx$6888e5(103));
            if (!c) return __abx$6888e5(1);
            b = c + __abx$6888e5(16) + b;
            c = __abx$6888e5(16) === c.charAt(0);
          }
          b = Ya(b.split(__abx$6888e5(16)).filter((e) => !!e), !c).join(__abx$6888e5(16));
          return (c ? __abx$6888e5(16) : __abx$6888e5(1)) + b || __abx$6888e5(79);
        }, db = (a) => {
          var b = Xa(a, 0);
          return Wa.decode(a.buffer ? a.subarray(0, b) : new Uint8Array(a.slice(0, b)));
        }, fb = [], gb = (a) => {
          for (var b = 0, c = 0; c < a.length; ++c) {
            var d = a.charCodeAt(c);
            127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
          }
          return b;
        }, M = (a, b, c, d) => {
          if (!(0 < d)) return 0;
          var e = c;
          d = c + d - 1;
          for (var g = 0; g < a.length; ++g) {
            var h = a.codePointAt(g);
            if (127 >= h) {
              if (c >= d) break;
              b[c++] = h;
            } else if (2047 >= h) {
              if (c + 1 >= d) break;
              b[c++] = 192 | h >> 6;
              b[c++] = 128 | h & 63;
            } else if (65535 >= h) {
              if (c + 2 >= d) break;
              b[c++] = 224 | h >> 12;
              b[c++] = 128 | h >> 6 & 63;
              b[c++] = 128 | h & 63;
            } else {
              if (c + 3 >= d) break;
              b[c++] = 240 | h >> 18;
              b[c++] = 128 | h >> 12 & 63;
              b[c++] = 128 | h >> 6 & 63;
              b[c++] = 128 | h & 63;
              g++;
            }
          }
          b[c] = 0;
          return c - e;
        }, pb = [];
        function qb(a, b) {
          pb[a] = { input: [], output: [], kb: b };
          rb(a, sb);
        }
        var sb = { open(a) {
          var b = pb[a.node.nb];
          if (!b) throw new N(43);
          a.Va = b;
          a.seekable = false;
        }, close(a) {
          a.Va.kb.lb(a.Va);
        }, lb(a) {
          a.Va.kb.lb(a.Va);
        }, read(a, b, c, d) {
          if (!a.Va || !a.Va.kb.Qb) throw new N(60);
          for (var e = 0, g = 0; g < d; g++) {
            try {
              var h = a.Va.kb.Qb(a.Va);
            } catch (q) {
              throw new N(29);
            }
            if (void 0 === h && 0 === e) throw new N(6);
            if (null === h || void 0 === h) break;
            e++;
            b[c + g] = h;
          }
          e && (a.node.$a = Date.now());
          return e;
        }, write(a, b, c, d) {
          if (!a.Va || !a.Va.kb.Hb) throw new N(60);
          try {
            for (var e = 0; e < d; e++) a.Va.kb.Hb(a.Va, b[c + e]);
          } catch (g) {
            throw new N(29);
          }
          d && (a.node.Ua = a.node.Ta = Date.now());
          return e;
        } }, tb = { Qb() {
          var _a2;
          a: {
            if (!fb.length) {
              var a = null;
              ((_a2 = globalThis.window) == null ? void 0 : _a2.prompt) && (a = window.prompt(__abx$6888e5(104)), null !== a && (a += __abx$6888e5(105)));
              if (!a) {
                var b = null;
                break a;
              }
              b = Array(gb(a) + 1);
              a = M(a, b, 0, b.length);
              b.length = a;
              fb = b;
            }
            b = fb.shift();
          }
          return b;
        }, Hb(a, b) {
          null === b || 10 === b ? (Aa(db(a.output)), a.output = []) : 0 != b && a.output.push(b);
        }, lb(a) {
          var _a2;
          0 < ((_a2 = a.output) == null ? void 0 : _a2.length) && (Aa(db(a.output)), a.output = []);
        }, Dc() {
          return { yc: 25856, Ac: 5, xc: 191, zc: 35387, wc: [
            3,
            28,
            127,
            21,
            4,
            0,
            1,
            0,
            17,
            19,
            26,
            0,
            18,
            15,
            23,
            22,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ] };
        }, Ec() {
          return 0;
        }, Fc() {
          return [24, 80];
        } }, ub = { Hb(a, b) {
          null === b || 10 === b ? (B(db(a.output)), a.output = []) : 0 != b && a.output.push(b);
        }, lb(a) {
          var _a2;
          0 < ((_a2 = a.output) == null ? void 0 : _a2.length) && (B(db(a.output)), a.output = []);
        } }, O = { Za: null, ab() {
          return O.createNode(null, __abx$6888e5(16), 16895, 0);
        }, createNode(a, b, c, d) {
          if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new N(63);
          O.Za || (O.Za = { dir: { node: { Wa: O.La.Wa, Xa: O.La.Xa, mb: O.La.mb, rb: O.La.rb, Tb: O.La.Tb, xb: O.La.xb, vb: O.La.vb, Ib: O.La.Ib, wb: O.La.wb }, stream: { Ya: O.Ma.Ya } }, file: {
            node: { Wa: O.La.Wa, Xa: O.La.Xa },
            stream: { Ya: O.Ma.Ya, read: O.Ma.read, write: O.Ma.write, sb: O.Ma.sb, tb: O.Ma.tb }
          }, link: { node: { Wa: O.La.Wa, Xa: O.La.Xa, eb: O.La.eb }, stream: {} }, Nb: { node: { Wa: O.La.Wa, Xa: O.La.Xa }, stream: vb } });
          c = wb(a, b, c, d);
          P(c.mode) ? (c.La = O.Za.dir.node, c.Ma = O.Za.dir.stream, c.Na = {}) : 32768 === (c.mode & 61440) ? (c.La = O.Za.file.node, c.Ma = O.Za.file.stream, c.Ra = 0, c.Na = null) : 40960 === (c.mode & 61440) ? (c.La = O.Za.link.node, c.Ma = O.Za.link.stream) : 8192 === (c.mode & 61440) && (c.La = O.Za.Nb.node, c.Ma = O.Za.Nb.stream);
          c.$a = c.Ua = c.Ta = Date.now();
          a && (a.Na[b] = c, a.$a = a.Ua = a.Ta = c.$a);
          return c;
        }, Cc(a) {
          return a.Na ? a.Na.subarray ? a.Na.subarray(0, a.Ra) : new Uint8Array(a.Na) : new Uint8Array(0);
        }, La: { Wa(a) {
          var b = {};
          b.cc = 8192 === (a.mode & 61440) ? a.id : 1;
          b.oc = a.id;
          b.mode = a.mode;
          b.rc = 1;
          b.uid = 0;
          b.nc = 0;
          b.nb = a.nb;
          P(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.Ra : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
          b.$a = new Date(a.$a);
          b.Ua = new Date(a.Ua);
          b.Ta = new Date(a.Ta);
          b.Zb = 4096;
          b.$b = Math.ceil(b.size / b.Zb);
          return b;
        }, Xa(a, b) {
          for (var c of [__abx$6888e5(106), __abx$6888e5(107), __abx$6888e5(108), __abx$6888e5(109)]) null != b[c] && (a[c] = b[c]);
          void 0 !== b.size && (b = b.size, a.Ra != b && (0 == b ? (a.Na = null, a.Ra = 0) : (c = a.Na, a.Na = new Uint8Array(b), c && a.Na.set(c.subarray(0, Math.min(b, a.Ra))), a.Ra = b)));
        }, mb() {
          O.zb || (O.zb = new N(44), O.zb.stack = __abx$6888e5(110));
          throw O.zb;
        }, rb(a, b, c, d) {
          return O.createNode(a, b, c, d);
        }, Tb(a, b, c) {
          try {
            var d = Q(b, c);
          } catch (g) {
          }
          if (d) {
            if (P(a.mode)) for (var e in d.Na) throw new N(55);
            xb(d);
          }
          delete a.parent.Na[a.name];
          b.Na[c] = a;
          a.name = c;
          b.Ta = b.Ua = a.parent.Ta = a.parent.Ua = Date.now();
        }, xb(a, b) {
          delete a.Na[b];
          a.Ta = a.Ua = Date.now();
        }, vb(a, b) {
          var c = Q(a, b), d;
          for (d in c.Na) throw new N(55);
          delete a.Na[b];
          a.Ta = a.Ua = Date.now();
        }, Ib(a) {
          return [__abx$6888e5(79), __abx$6888e5(102), ...Object.keys(a.Na)];
        }, wb(a, b, c) {
          a = O.createNode(a, b, 41471, 0);
          a.link = c;
          return a;
        }, eb(a) {
          if (40960 !== (a.mode & 61440)) throw new N(28);
          return a.link;
        } }, Ma: { read(a, b, c, d, e) {
          var g = a.node.Na;
          if (e >= a.node.Ra) return 0;
          a = Math.min(a.node.Ra - e, d);
          if (8 < a && g.subarray) b.set(g.subarray(e, e + a), c);
          else for (d = 0; d < a; d++) b[c + d] = g[e + d];
          return a;
        }, write(a, b, c, d, e, g) {
          b.buffer === m.buffer && (g = false);
          if (!d) return 0;
          a = a.node;
          a.Ua = a.Ta = Date.now();
          if (b.subarray && (!a.Na || a.Na.subarray)) {
            if (g) return a.Na = b.subarray(c, c + d), a.Ra = d;
            if (0 === a.Ra && 0 === e) return a.Na = b.slice(c, c + d), a.Ra = d;
            if (e + d <= a.Ra) return a.Na.set(b.subarray(c, c + d), e), d;
          }
          g = e + d;
          var h = a.Na ? a.Na.length : 0;
          h >= g || (g = Math.max(g, h * (1048576 > h ? 2 : 1.125) >>> 0), 0 != h && (g = Math.max(g, 256)), h = a.Na, a.Na = new Uint8Array(g), 0 < a.Ra && a.Na.set(h.subarray(0, a.Ra), 0));
          if (a.Na.subarray && b.subarray) a.Na.set(b.subarray(c, c + d), e);
          else for (g = 0; g < d; g++) a.Na[e + g] = b[c + g];
          a.Ra = Math.max(
            a.Ra,
            e + d
          );
          return d;
        }, Ya(a, b, c) {
          1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Ra);
          if (0 > b) throw new N(28);
          return b;
        }, sb(a, b, c, d, e) {
          if (32768 !== (a.node.mode & 61440)) throw new N(43);
          a = a.node.Na;
          if (e & 2 || !a || a.buffer !== m.buffer) {
            e = true;
            d = 65536 * Math.ceil(b / 65536);
            var g = yb(65536, d);
            g && C.fill(0, g, g + d);
            d = g;
            if (!d) throw new N(48);
            if (a) {
              if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
              m.set(a, d);
            }
          } else e = false, d = a.byteOffset;
          return { tc: d, Ub: e };
        }, tb(a, b, c, d) {
          O.Ma.write(
            a,
            b,
            0,
            d,
            c,
            false
          );
          return 0;
        } } }, ia = (a, b) => {
          var c = 0;
          a && (c |= 365);
          b && (c |= 146);
          return c;
        }, zb = null, Ab = {}, Bb = [], Cb = 1, R = null, Db = false, Eb = true, N = class {
          constructor(a) {
            __publicField(this, __abx$6888e5(91), __abx$6888e5(111));
            this.Pa = a;
          }
        }, Fb = class {
          constructor() {
            __publicField(this, __abx$6888e5(112), {});
            __publicField(this, __abx$6888e5(113), null);
          }
          get flags() {
            return this.qb.flags;
          }
          set flags(a) {
            this.qb.flags = a;
          }
          get position() {
            return this.qb.position;
          }
          set position(a) {
            this.qb.position = a;
          }
        }, Gb = class {
          constructor(a, b, c, d) {
            __publicField(this, __abx$6888e5(114), {});
            __publicField(this, __abx$6888e5(115), {});
            __publicField(this, __abx$6888e5(116), null);
            a || (a = this);
            this.parent = a;
            this.ab = a.ab;
            this.id = Cb++;
            this.name = b;
            this.mode = c;
            this.nb = d;
            this.$a = this.Ua = this.Ta = Date.now();
          }
          get read() {
            return 365 === (this.mode & 365);
          }
          set read(a) {
            a ? this.mode |= 365 : this.mode &= -366;
          }
          get write() {
            return 146 === (this.mode & 146);
          }
          set write(a) {
            a ? this.mode |= 146 : this.mode &= -147;
          }
        };
        function S(a, b = {}) {
          if (!a) throw new N(44);
          b.Bb ?? (b.Bb = true);
          __abx$6888e5(16) === a.charAt(0) || (a = __abx$6888e5(117) + a);
          var c = 0;
          a: for (; 40 > c; c++) {
            a = a.split(__abx$6888e5(16)).filter((q) => !!q);
            for (var d = zb, e = __abx$6888e5(16), g = 0; g < a.length; g++) {
              var h = g === a.length - 1;
              if (h && b.parent) break;
              if (__abx$6888e5(79) !== a[g]) if (__abx$6888e5(102) === a[g]) if (e = Za(e), d === d.parent) {
                a = e + __abx$6888e5(16) + a.slice(g + 1).join(__abx$6888e5(16));
                c--;
                continue a;
              } else d = d.parent;
              else {
                e = ha(e + __abx$6888e5(16) + a[g]);
                try {
                  d = Q(d, a[g]);
                } catch (q) {
                  if (44 === (q == null ? void 0 : q.Pa) && h && b.sc) return { path: e };
                  throw q;
                }
                !d.ib || h && !b.Bb || (d = d.ib.root);
                if (40960 === (d.mode & 61440) && (!h || b.hb)) {
                  if (!d.La.eb) throw new N(52);
                  d = d.La.eb(d);
                  __abx$6888e5(16) === d.charAt(0) || (d = Za(e) + __abx$6888e5(16) + d);
                  a = d + __abx$6888e5(16) + a.slice(g + 1).join(__abx$6888e5(16));
                  continue a;
                }
              }
            }
            return { path: e, node: d };
          }
          throw new N(32);
        }
        function fa(a) {
          for (var b; ; ) {
            if (a === a.parent) return a = a.ab.Sb, b ? __abx$6888e5(16) !== a[a.length - 1] ? (__abx$6888e5(1)+String(a)+__abx$6888e5(16)+String(b)+__abx$6888e5(1)) : a + b : a;
            b = b ? (__abx$6888e5(1)+String(a.name)+__abx$6888e5(16)+String(b)+__abx$6888e5(1)) : a.name;
            a = a.parent;
          }
        }
        function Hb(a, b) {
          for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0;
          return (a + c >>> 0) % R.length;
        }
        function xb(a) {
          var b = Hb(a.parent.id, a.name);
          if (R[b] === a) R[b] = a.jb;
          else for (b = R[b]; b; ) {
            if (b.jb === a) {
              b.jb = a.jb;
              break;
            }
            b = b.jb;
          }
        }
        function Q(a, b) {
          var c = P(a.mode) ? (c = Ib(a, __abx$6888e5(118))) ? c : a.La.mb ? 0 : 2 : 54;
          if (c) throw new N(c);
          for (c = R[Hb(a.id, b)]; c; c = c.jb) {
            var d = c.name;
            if (c.parent.id === a.id && d === b) return c;
          }
          return a.La.mb(a, b);
        }
        function wb(a, b, c, d) {
          a = new Gb(a, b, c, d);
          b = Hb(a.parent.id, a.name);
          a.jb = R[b];
          return R[b] = a;
        }
        function P(a) {
          return 16384 === (a & 61440);
        }
        function Ib(a, b) {
          return Eb ? 0 : b.includes(__abx$6888e5(119)) && !(a.mode & 292) || b.includes(__abx$6888e5(120)) && !(a.mode & 146) || b.includes(__abx$6888e5(118)) && !(a.mode & 73) ? 2 : 0;
        }
        function Jb(a, b) {
          if (!P(a.mode)) return 54;
          try {
            return Q(a, b), 20;
          } catch (c) {
          }
          return Ib(a, __abx$6888e5(121));
        }
        function Kb(a, b, c) {
          try {
            var d = Q(a, b);
          } catch (e) {
            return e.Pa;
          }
          if (a = Ib(a, __abx$6888e5(121))) return a;
          if (c) {
            if (!P(d.mode)) return 54;
            if (d === d.parent || __abx$6888e5(16) === fa(d)) return 10;
          } else if (P(d.mode)) return 31;
          return 0;
        }
        function Lb(a) {
          if (!a) throw new N(63);
          return a;
        }
        function T(a) {
          a = Bb[a];
          if (!a) throw new N(8);
          return a;
        }
        function Mb(a, b = -1) {
          a = Object.assign(new Fb(), a);
          if (-1 == b) a: {
            for (b = 0; 4096 >= b; b++) if (!Bb[b]) break a;
            throw new N(33);
          }
          a.bb = b;
          return Bb[b] = a;
        }
        function Nb(a, b = -1) {
          var _a2, _b2;
          a = Mb(a, b);
          (_b2 = (_a2 = a.Ma) == null ? void 0 : _a2.Bc) == null ? void 0 : _b2.call(_a2, a);
          return a;
        }
        function Ob(a, b, c) {
          var d = a == null ? void 0 : a.Ma.Xa;
          a = d ? a : b;
          d ?? (d = b.La.Xa);
          Lb(d);
          d(a, c);
        }
        var vb = { open(a) {
          var _a2, _b2;
          a.Ma = Ab[a.node.nb].Ma;
          (_b2 = (_a2 = a.Ma).open) == null ? void 0 : _b2.call(_a2, a);
        }, Ya() {
          throw new N(70);
        } };
        function rb(a, b) {
          Ab[a] = { Ma: b };
        }
        function Pb(a, b) {
          var c = __abx$6888e5(16) === b;
          if (c && zb) throw new N(10);
          if (!c && b) {
            var d = S(b, { Bb: false });
            b = d.path;
            d = d.node;
            if (d.ib) throw new N(10);
            if (!P(d.mode)) throw new N(54);
          }
          b = { type: a, Gc: {}, Sb: b, qc: [] };
          a = a.ab(b);
          a.ab = b;
          b.root = a;
          c ? zb = a : d && (d.ib = b, d.ab && d.ab.qc.push(b));
        }
        function Qb(a, b, c) {
          var d = S(a, { parent: true }).node;
          a = $a(a);
          if (!a) throw new N(28);
          if (__abx$6888e5(79) === a || __abx$6888e5(102) === a) throw new N(20);
          var e = Jb(d, a);
          if (e) throw new N(e);
          if (!d.La.rb) throw new N(63);
          return d.La.rb(d, a, b, c);
        }
        function ja(a, b = 438) {
          return Qb(a, b & 4095 | 32768, 0);
        }
        function U(a, b = 511) {
          return Qb(a, b & 1023 | 16384, 0);
        }
        function Rb(a, b, c) {
          __abx$6888e5(5) == typeof c && (c = b, b = 438);
          Qb(a, b | 8192, c);
        }
        function Sb(a, b) {
          if (!cb(a)) throw new N(44);
          var c = S(b, { parent: true }).node;
          if (!c) throw new N(44);
          b = $a(b);
          var d = Jb(c, b);
          if (d) throw new N(d);
          if (!c.La.wb) throw new N(63);
          c.La.wb(c, b, a);
        }
        function Tb(a) {
          var b = S(a, { parent: true }).node;
          a = $a(a);
          var c = Q(b, a), d = Kb(b, a, true);
          if (d) throw new N(d);
          if (!b.La.vb) throw new N(63);
          if (c.ib) throw new N(10);
          b.La.vb(b, a);
          xb(c);
        }
        function ta(a) {
          var b = S(a, { parent: true }).node;
          if (!b) throw new N(44);
          a = $a(a);
          var c = Q(b, a), d = Kb(b, a, false);
          if (d) throw new N(d);
          if (!b.La.xb) throw new N(63);
          if (c.ib) throw new N(10);
          b.La.xb(b, a);
          xb(c);
        }
        function Ub(a, b) {
          a = S(a, { hb: !b }).node;
          return Lb(a.La.Wa)(a);
        }
        function Vb(a, b, c, d) {
          Ob(a, b, { mode: c & 4095 | b.mode & -4096, Ta: Date.now(), dc: d });
        }
        function ka(a, b) {
          a = __abx$6888e5(2) == typeof a ? S(a, { hb: true }).node : a;
          Vb(null, a, b);
        }
        function Wb(a, b, c) {
          if (P(b.mode)) throw new N(31);
          if (32768 !== (b.mode & 61440)) throw new N(28);
          var d = Ib(b, __abx$6888e5(120));
          if (d) throw new N(d);
          Ob(a, b, { size: c, timestamp: Date.now() });
        }
        function la(a, b, c = 438) {
          if (__abx$6888e5(1) === a) throw new N(44);
          if (__abx$6888e5(2) == typeof b) {
            var d = { r: 0, [__abx$6888e5(122)]: 2, w: 577, [__abx$6888e5(123)]: 578, a: 1089, [__abx$6888e5(124)]: 1090 }[b];
            if (__abx$6888e5(5) == typeof d) throw Error((__abx$6888e5(125)+String(b)+__abx$6888e5(1)));
            b = d;
          }
          c = b & 64 ? c & 4095 | 32768 : 0;
          if (__abx$6888e5(12) == typeof a) d = a;
          else {
            var e = a.endsWith(__abx$6888e5(16));
            var g = S(a, { hb: !(b & 131072), sc: true });
            d = g.node;
            a = g.path;
          }
          g = false;
          if (b & 64) if (d) {
            if (b & 128) throw new N(20);
          } else {
            if (e) throw new N(31);
            d = Qb(a, c | 511, 0);
            g = true;
          }
          if (!d) throw new N(44);
          8192 === (d.mode & 61440) && (b &= -513);
          if (b & 65536 && !P(d.mode)) throw new N(54);
          if (!g && (d ? 40960 === (d.mode & 61440) ? e = 32 : (e = [__abx$6888e5(119), __abx$6888e5(120), __abx$6888e5(126)][b & 3], b & 512 && (e += __abx$6888e5(120)), e = P(d.mode) && (__abx$6888e5(119) !== e || b & 576) ? 31 : Ib(d, e)) : e = 44, e)) throw new N(e);
          b & 512 && !g && (e = d, e = __abx$6888e5(2) == typeof e ? S(e, { hb: true }).node : e, Wb(null, e, 0));
          b = Mb({ node: d, path: fa(d), flags: b & -131713, seekable: true, position: 0, Ma: d.Ma, uc: [], error: false });
          b.Ma.open && b.Ma.open(b);
          g && ka(d, c & 511);
          return b;
        }
        function na(a) {
          if (null === a.bb) throw new N(8);
          a.Eb && (a.Eb = null);
          try {
            a.Ma.close && a.Ma.close(a);
          } catch (b) {
            throw b;
          } finally {
            Bb[a.bb] = null;
          }
          a.bb = null;
        }
        function Xb(a, b, c) {
          if (null === a.bb) throw new N(8);
          if (!a.seekable || !a.Ma.Ya) throw new N(70);
          if (0 != c && 1 != c && 2 != c) throw new N(28);
          a.position = a.Ma.Ya(a, b, c);
          a.uc = [];
        }
        function Yb(a, b, c, d, e) {
          if (0 > d || 0 > e) throw new N(28);
          if (null === a.bb) throw new N(8);
          if (1 === (a.flags & 2097155)) throw new N(8);
          if (P(a.node.mode)) throw new N(31);
          if (!a.Ma.read) throw new N(28);
          var g = __abx$6888e5(5) != typeof e;
          if (!g) e = a.position;
          else if (!a.seekable) throw new N(70);
          b = a.Ma.read(a, b, c, d, e);
          g || (a.position += b);
          return b;
        }
        function ma(a, b, c, d, e) {
          if (0 > d || 0 > e) throw new N(28);
          if (null === a.bb) throw new N(8);
          if (0 === (a.flags & 2097155)) throw new N(8);
          if (P(a.node.mode)) throw new N(31);
          if (!a.Ma.write) throw new N(28);
          a.seekable && a.flags & 1024 && Xb(a, 0, 2);
          var g = __abx$6888e5(5) != typeof e;
          if (!g) e = a.position;
          else if (!a.seekable) throw new N(70);
          b = a.Ma.write(a, b, c, d, e, void 0);
          g || (a.position += b);
          return b;
        }
        function sa(a) {
          var b = b || 0;
          b = la(a, b);
          a = Ub(a).size;
          var d = new Uint8Array(a);
          Yb(b, d, 0, a, 0);
          na(b);
          return d;
        }
        function W(a, b, c) {
          a = ha(__abx$6888e5(127) + a);
          var d = ia(!!b, !!c);
          W.Rb ?? (W.Rb = 64);
          var e = W.Rb++ << 8 | 0;
          rb(e, { open(g) {
            g.seekable = false;
          }, close() {
            var _a2;
            ((_a2 = c == null ? void 0 : c.buffer) == null ? void 0 : _a2.length) && c(10);
          }, read(g, h, q, w) {
            for (var t = 0, x = 0; x < w; x++) {
              try {
                var D = b();
              } catch (ib) {
                throw new N(29);
              }
              if (void 0 === D && 0 === t) throw new N(6);
              if (null === D || void 0 === D) break;
              t++;
              h[q + x] = D;
            }
            t && (g.node.$a = Date.now());
            return t;
          }, write(g, h, q, w) {
            for (var t = 0; t < w; t++) try {
              c(h[q + t]);
            } catch (x) {
              throw new N(29);
            }
            w && (g.node.Ua = g.node.Ta = Date.now());
            return t;
          } });
          Rb(a, d, e);
        }
        var X = {};
        function Y(a, b, c) {
          if (__abx$6888e5(16) === b.charAt(0)) return b;
          a = -100 === a ? __abx$6888e5(16) : T(a).path;
          if (0 == b.length) {
            if (!c) throw new N(44);
            return a;
          }
          return a + __abx$6888e5(16) + b;
        }
        function Zb(a, b) {
          F[a >> 2] = b.cc;
          F[a + 4 >> 2] = b.mode;
          F[a + 8 >> 2] = b.rc;
          F[a + 12 >> 2] = b.uid;
          F[a + 16 >> 2] = b.nc;
          F[a + 20 >> 2] = b.nb;
          G[a + 24 >> 3] = BigInt(b.size);
          E[a + 32 >> 2] = 4096;
          E[a + 36 >> 2] = b.$b;
          var c = b.$a.getTime(), d = b.Ua.getTime(), e = b.Ta.getTime();
          G[a + 40 >> 3] = BigInt(Math.floor(c / 1e3));
          F[a + 48 >> 2] = c % 1e3 * 1e6;
          G[a + 56 >> 3] = BigInt(Math.floor(d / 1e3));
          F[a + 64 >> 2] = d % 1e3 * 1e6;
          G[a + 72 >> 3] = BigInt(Math.floor(e / 1e3));
          F[a + 80 >> 2] = e % 1e3 * 1e6;
          G[a + 88 >> 3] = BigInt(b.oc);
          return 0;
        }
        var ic = void 0, Ac = () => {
          var a = E[+ic >> 2];
          ic += 4;
          return a;
        }, Cc = 0, Dc = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Ec = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Fc = {}, Gc = (a) => {
          if (!(a instanceof Pa || __abx$6888e5(128) == a)) throw a;
        }, Hc = (a) => {
          var _a2;
          Da = a;
          Va || 0 < Cc || ((_a2 = k.onExit) == null ? void 0 : _a2.call(k, a), Ca = true);
          throw new Pa(a);
        }, Ic = (a) => {
          if (!Ca) try {
            a();
          } catch (b) {
            Gc(b);
          } finally {
            if (!(Va || 0 < Cc)) try {
              Da = a = Da, Hc(a);
            } catch (b) {
              Gc(b);
            }
          }
        }, Jc = {}, Lc = () => {
          var _a2;
          if (!Kc) {
            var a = { USER: __abx$6888e5(129), LOGNAME: __abx$6888e5(129), PATH: __abx$6888e5(16), PWD: __abx$6888e5(16), HOME: __abx$6888e5(130), LANG: (((_a2 = globalThis.navigator) == null ? void 0 : _a2.language) ?? __abx$6888e5(131)).replace(__abx$6888e5(132), __abx$6888e5(133)) + __abx$6888e5(134), _: va || __abx$6888e5(78) }, b;
            for (b in Jc) void 0 === Jc[b] ? delete a[b] : a[b] = Jc[b];
            var c = [];
            for (b in a) c.push((__abx$6888e5(1)+String(b)+__abx$6888e5(135)+String(a[b])+__abx$6888e5(1)));
            Kc = c;
          }
          return Kc;
        }, Kc, Mc = (a, b, c, d) => {
          var e = { string: (t) => {
            var x = 0;
            if (null !== t && void 0 !== t && 0 !== t) {
              x = gb(t) + 1;
              var D = y(x);
              M(t, C, D, x);
              x = D;
            }
            return x;
          }, array: (t) => {
            var x = y(t.length);
            m.set(t, x);
            return x;
          } };
          a = k[__abx$6888e5(133) + a];
          var g = [], h = 0;
          if (d) for (var q = 0; q < d.length; q++) {
            var w = e[c[q]];
            w ? (0 === h && (h = oa()), g[q] = w(d[q])) : g[q] = d[q];
          }
          c = a(...g);
          return c = (function(t) {
            0 !== h && qa(h);
            return __abx$6888e5(2) === b ? z(t) : __abx$6888e5(8) === b ? !!t : t;
          })(c);
        }, ea = (a) => {
          var b = gb(a) + 1, c = ca(b);
          c && M(a, C, c, b);
          return c;
        }, Nc, Oc = [], A = (a) => {
          Nc.delete(Z.get(a));
          Z.set(a, null);
          Oc.push(a);
        }, Pc = (a) => {
          const b = a.length;
          return [b % 128 | 128, b >> 7, ...a];
        }, Qc = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 }, Rc = (a) => Pc(Array.from(a, (b) => Qc[b])), ua = (a, b) => {
          if (!Nc) {
            Nc = /* @__PURE__ */ new WeakMap();
            var c = Z.length;
            if (Nc) for (var d = 0; d < 0 + c; d++) {
              var e = Z.get(d);
              e && Nc.set(e, d);
            }
          }
          if (c = Nc.get(a) || 0) return c;
          c = Oc.length ? Oc.pop() : Z.grow(1);
          try {
            Z.set(c, a);
          } catch (g) {
            if (!(g instanceof TypeError)) throw g;
            b = Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, 1, ...Pc([1, 96, ...Rc(b.slice(1)), ...Rc(__abx$6888e5(136) === b[0] ? __abx$6888e5(1) : b[0])]), 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
            b = new WebAssembly.Module(b);
            b = new WebAssembly.Instance(b, { e: { f: a } }).exports.f;
            Z.set(c, b);
          }
          Nc.set(a, c);
          return c;
        };
        R = Array(4096);
        Pb(O, __abx$6888e5(16));
        U(__abx$6888e5(137));
        U(__abx$6888e5(138));
        U(__abx$6888e5(130));
        (function() {
          U(__abx$6888e5(139));
          rb(259, { read: () => 0, write: (d, e, g, h) => h, Ya: () => 0 });
          Rb(__abx$6888e5(140), 259);
          qb(1280, tb);
          qb(1536, ub);
          Rb(__abx$6888e5(141), 1280);
          Rb(__abx$6888e5(142), 1536);
          var a = new Uint8Array(1024), b = 0, c = () => {
            0 === b && (bb(a), b = a.byteLength);
            return a[--b];
          };
          W(__abx$6888e5(143), c);
          W(__abx$6888e5(144), c);
          U(__abx$6888e5(145));
          U(__abx$6888e5(146));
        })();
        (function() {
          U(__abx$6888e5(147));
          var a = U(__abx$6888e5(148));
          U(__abx$6888e5(149));
          Pb({ ab() {
            var b = wb(a, __abx$6888e5(150), 16895, 73);
            b.Ma = { Ya: O.Ma.Ya };
            b.La = { mb(c, d) {
              c = +d;
              var e = T(c);
              c = { parent: null, ab: { Sb: __abx$6888e5(151) }, La: { eb: () => e.path }, id: c + 1 };
              return c.parent = c;
            }, Ib() {
              return Array.from(Bb.entries()).filter(([, c]) => c).map(([c]) => c.toString());
            } };
            return b;
          } }, __abx$6888e5(149));
        })();
        k.noExitRuntime && (Va = k.noExitRuntime);
        k.print && (Aa = k.print);
        k.printErr && (B = k.printErr);
        k.wasmBinary && (Ba = k.wasmBinary);
        k.thisProgram && (va = k.thisProgram);
        if (k.preInit) for (__abx$6888e5(60) == typeof k.preInit && (k.preInit = [k.preInit]); 0 < k.preInit.length; ) k.preInit.shift()();
        k.stackSave = () => oa();
        k.stackRestore = (a) => qa(a);
        k.stackAlloc = (a) => y(a);
        k.cwrap = (a, b, c, d) => {
          var e = !c || c.every((g) => __abx$6888e5(9) === g || __abx$6888e5(8) === g);
          return __abx$6888e5(2) !== b && e && !d ? k[__abx$6888e5(133) + a] : (...g) => Mc(a, b, c, g);
        };
        k.addFunction = ua;
        k.removeFunction = A;
        k.UTF8ToString = z;
        k.stringToNewUTF8 = ea;
        k.writeArrayToMemory = (a, b) => {
          m.set(a, b);
        };
        var ca, da, yb, Sc, qa, y, oa, Ia, Z, Tc = {
          a: (a, b, c, d) => Ja((__abx$6888e5(152)+String(z(a))+__abx$6888e5(153)) + [b ? z(b) : __abx$6888e5(154), c, d ? z(d) : __abx$6888e5(155)]),
          i: function(a, b) {
            try {
              return a = z(a), ka(a, b), 0;
            } catch (c) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== c.name) throw c;
              return -c.Pa;
            }
          },
          L: function(a, b, c) {
            try {
              b = z(b);
              b = Y(a, b);
              if (c & -8) return -28;
              var d = S(b, { hb: true }).node;
              if (!d) return -44;
              a = __abx$6888e5(1);
              c & 4 && (a += __abx$6888e5(119));
              c & 2 && (a += __abx$6888e5(120));
              c & 1 && (a += __abx$6888e5(118));
              return a && Ib(d, a) ? -2 : 0;
            } catch (e) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== e.name) throw e;
              return -e.Pa;
            }
          },
          j: function(a, b) {
            try {
              var c = T(a);
              Vb(c, c.node, b, false);
              return 0;
            } catch (d) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== d.name) throw d;
              return -d.Pa;
            }
          },
          h: function(a) {
            try {
              var b = T(a);
              Ob(b, b.node, { timestamp: Date.now(), dc: false });
              return 0;
            } catch (c) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== c.name) throw c;
              return -c.Pa;
            }
          },
          b: function(a, b, c) {
            ic = c;
            try {
              var d = T(a);
              switch (b) {
                case 0:
                  var e = Ac();
                  if (0 > e) break;
                  for (; Bb[e]; ) e++;
                  return Nb(d, e).bb;
                case 1:
                case 2:
                  return 0;
                case 3:
                  return d.flags;
                case 4:
                  return e = Ac(), d.flags |= e, 0;
                case 12:
                  return e = Ac(), Ea[e + 0 >> 1] = 2, 0;
                case 13:
                case 14:
                  return 0;
              }
              return -28;
            } catch (g) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== g.name) throw g;
              return -g.Pa;
            }
          },
          g: function(a, b) {
            try {
              var c = T(a), d = c.node, e = c.Ma.Wa;
              a = e ? c : d;
              e ?? (e = d.La.Wa);
              Lb(e);
              var g = e(a);
              return Zb(b, g);
            } catch (h) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== h.name) throw h;
              return -h.Pa;
            }
          },
          H: function(a, b) {
            b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
            try {
              if (isNaN(b)) return -61;
              var c = T(a);
              if (0 > b || 0 === (c.flags & 2097155)) throw new N(28);
              Wb(c, c.node, b);
              return 0;
            } catch (d) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== d.name) throw d;
              return -d.Pa;
            }
          },
          G: function(a, b) {
            try {
              if (0 === b) return -28;
              var c = gb(__abx$6888e5(16)) + 1;
              if (b < c) return -68;
              M(__abx$6888e5(16), C, a, b);
              return c;
            } catch (d) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== d.name) throw d;
              return -d.Pa;
            }
          },
          K: function(a, b) {
            try {
              return a = z(a), Zb(b, Ub(a, true));
            } catch (c) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== c.name) throw c;
              return -c.Pa;
            }
          },
          C: function(a, b, c) {
            try {
              return b = z(b), b = Y(a, b), U(b, c), 0;
            } catch (d) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== d.name) throw d;
              return -d.Pa;
            }
          },
          J: function(a, b, c, d) {
            try {
              b = z(b);
              var e = d & 256;
              b = Y(a, b, d & 4096);
              return Zb(c, e ? Ub(b, true) : Ub(b));
            } catch (g) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== g.name) throw g;
              return -g.Pa;
            }
          },
          x: function(a, b, c, d) {
            ic = d;
            try {
              b = z(b);
              b = Y(a, b);
              var e = d ? Ac() : 0;
              return la(b, c, e).bb;
            } catch (g) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== g.name) throw g;
              return -g.Pa;
            }
          },
          v: function(a, b, c, d) {
            try {
              b = z(b);
              b = Y(a, b);
              if (0 >= d) return -28;
              var e = S(b).node;
              if (!e) throw new N(44);
              if (!e.La.eb) throw new N(28);
              var g = e.La.eb(e);
              var h = Math.min(d, gb(g)), q = m[c + h];
              M(g, C, c, d + 1);
              m[c + h] = q;
              return h;
            } catch (w) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== w.name) throw w;
              return -w.Pa;
            }
          },
          u: function(a) {
            try {
              return a = z(a), Tb(a), 0;
            } catch (b) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== b.name) throw b;
              return -b.Pa;
            }
          },
          f: function(a, b) {
            try {
              return a = z(a), Zb(b, Ub(a));
            } catch (c) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== c.name) throw c;
              return -c.Pa;
            }
          },
          r: function(a, b, c) {
            try {
              b = z(b);
              b = Y(a, b);
              if (c) if (512 === c) Tb(b);
              else return -28;
              else ta(b);
              return 0;
            } catch (d) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== d.name) throw d;
              return -d.Pa;
            }
          },
          q: function(a, b, c) {
            try {
              b = z(b);
              b = Y(a, b, true);
              var d = Date.now(), e, g;
              if (c) {
                var h = F[c >> 2] + 4294967296 * E[c + 4 >> 2], q = E[c + 8 >> 2];
                1073741823 == q ? e = d : 1073741822 == q ? e = null : e = 1e3 * h + q / 1e6;
                c += 16;
                h = F[c >> 2] + 4294967296 * E[c + 4 >> 2];
                q = E[c + 8 >> 2];
                1073741823 == q ? g = d : 1073741822 == q ? g = null : g = 1e3 * h + q / 1e6;
              } else g = e = d;
              if (null !== (g ?? e)) {
                a = e;
                var w = S(b, { hb: true }).node;
                Lb(w.La.Xa)(w, { $a: a, Ua: g });
              }
              return 0;
            } catch (t) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== t.name) throw t;
              return -t.Pa;
            }
          },
          m: () => Ja(__abx$6888e5(1)),
          l: () => {
            Va = false;
            Cc = 0;
          },
          A: function(a, b) {
            a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
            a = new Date(1e3 * a);
            E[b >> 2] = a.getSeconds();
            E[b + 4 >> 2] = a.getMinutes();
            E[b + 8 >> 2] = a.getHours();
            E[b + 12 >> 2] = a.getDate();
            E[b + 16 >> 2] = a.getMonth();
            E[b + 20 >> 2] = a.getFullYear() - 1900;
            E[b + 24 >> 2] = a.getDay();
            var c = a.getFullYear();
            E[b + 28 >> 2] = (0 !== c % 4 || 0 === c % 100 && 0 !== c % 400 ? Ec : Dc)[a.getMonth()] + a.getDate() - 1 | 0;
            E[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
            c = new Date(a.getFullYear(), 6, 1).getTimezoneOffset();
            var d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
            E[b + 32 >> 2] = (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
          },
          y: function(a, b, c, d, e, g, h) {
            e = -9007199254740992 > e || 9007199254740992 < e ? NaN : Number(e);
            try {
              var q = T(d);
              if (0 !== (b & 2) && 0 === (c & 2) && 2 !== (q.flags & 2097155)) throw new N(2);
              if (1 === (q.flags & 2097155)) throw new N(2);
              if (!q.Ma.sb) throw new N(43);
              if (!a) throw new N(28);
              var w = q.Ma.sb(q, a, e, b, c);
              var t = w.tc;
              E[g >> 2] = w.Ub;
              F[h >> 2] = t;
              return 0;
            } catch (x) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== x.name) throw x;
              return -x.Pa;
            }
          },
          z: function(a, b, c, d, e, g) {
            g = -9007199254740992 > g || 9007199254740992 < g ? NaN : Number(g);
            try {
              var h = T(e);
              if (c & 2) {
                if (32768 !== (h.node.mode & 61440)) throw new N(43);
                d & 2 || h.Ma.tb && h.Ma.tb(h, C.slice(a, a + b), g, b, d);
              }
            } catch (q) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== q.name) throw q;
              return -q.Pa;
            }
          },
          n: (a, b) => {
            Fc[a] && (clearTimeout(Fc[a].id), delete Fc[a]);
            if (!b) return 0;
            var c = setTimeout(() => {
              delete Fc[a];
              Ic(() => Sc(a, performance.now()));
            }, b);
            Fc[a] = { id: c, Hc: b };
            return 0;
          },
          B: (a, b, c, d) => {
            var e = (/* @__PURE__ */ new Date()).getFullYear(), g = new Date(e, 0, 1).getTimezoneOffset();
            e = new Date(e, 6, 1).getTimezoneOffset();
            F[a >> 2] = 60 * Math.max(g, e);
            E[b >> 2] = Number(g != e);
            b = (h) => {
              var q = Math.abs(h);
              return (__abx$6888e5(156)+String(0 <= h ? __abx$6888e5(132) : __abx$6888e5(157))+__abx$6888e5(1)+String(String(Math.floor(q / 60)).padStart(2, __abx$6888e5(158)))+__abx$6888e5(1)+String(String(q % 60).padStart(2, __abx$6888e5(158)))+__abx$6888e5(1));
            };
            a = b(g);
            b = b(e);
            e < g ? (M(a, C, c, 17), M(b, C, d, 17)) : (M(a, C, d, 17), M(b, C, c, 17));
          },
          d: () => Date.now(),
          s: () => 2147483648,
          c: () => performance.now(),
          o: (a) => {
            var b = C.length;
            a >>>= 0;
            if (2147483648 < a) return false;
            for (var c = 1; 4 >= c; c *= 2) {
              var d = b * (1 + 0.2 / c);
              d = Math.min(d, a + 100663296);
              a: {
                d = (Math.min(2147483648, 65536 * Math.ceil(Math.max(a, d) / 65536)) - Ia.buffer.byteLength + 65535) / 65536 | 0;
                try {
                  Ia.grow(d);
                  Ha();
                  var e = 1;
                  break a;
                } catch (g) {
                }
                e = void 0;
              }
              if (e) return true;
            }
            return false;
          },
          E: (a, b) => {
            var c = 0, d = 0, e;
            for (e of Lc()) {
              var g = b + c;
              F[a + d >> 2] = g;
              c += M(e, C, g, Infinity) + 1;
              d += 4;
            }
            return 0;
          },
          F: (a, b) => {
            var c = Lc();
            F[a >> 2] = c.length;
            a = 0;
            for (var d of c) a += gb(d) + 1;
            F[b >> 2] = a;
            return 0;
          },
          e: function(a) {
            try {
              var b = T(a);
              na(b);
              return 0;
            } catch (c) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== c.name) throw c;
              return c.Pa;
            }
          },
          p: function(a, b) {
            try {
              var c = T(a);
              m[b] = c.Va ? 2 : P(c.mode) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
              Ea[b + 2 >> 1] = 0;
              G[b + 8 >> 3] = BigInt(0);
              G[b + 16 >> 3] = BigInt(0);
              return 0;
            } catch (d) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== d.name) throw d;
              return d.Pa;
            }
          },
          w: function(a, b, c, d) {
            try {
              a: {
                var e = T(a);
                a = b;
                for (var g, h = b = 0; h < c; h++) {
                  var q = F[a >> 2], w = F[a + 4 >> 2];
                  a += 8;
                  var t = Yb(e, m, q, w, g);
                  if (0 > t) {
                    var x = -1;
                    break a;
                  }
                  b += t;
                  if (t < w) break;
                  __abx$6888e5(5) != typeof g && (g += t);
                }
                x = b;
              }
              F[d >> 2] = x;
              return 0;
            } catch (D) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== D.name) throw D;
              return D.Pa;
            }
          },
          D: function(a, b, c, d) {
            b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
            try {
              if (isNaN(b)) return 61;
              var e = T(a);
              Xb(e, b, c);
              G[d >> 3] = BigInt(e.position);
              e.Eb && 0 === b && 0 === c && (e.Eb = null);
              return 0;
            } catch (g) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== g.name) throw g;
              return g.Pa;
            }
          },
          I: function(a) {
            var _a2, _b2;
            try {
              var b = T(a);
              return (_b2 = (_a2 = b.Ma) == null ? void 0 : _a2.lb) == null ? void 0 : _b2.call(_a2, b);
            } catch (c) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== c.name) throw c;
              return c.Pa;
            }
          },
          t: function(a, b, c, d) {
            try {
              a: {
                var e = T(a);
                a = b;
                for (var g, h = b = 0; h < c; h++) {
                  var q = F[a >> 2], w = F[a + 4 >> 2];
                  a += 8;
                  var t = ma(e, m, q, w, g);
                  if (0 > t) {
                    var x = -1;
                    break a;
                  }
                  b += t;
                  if (t < w) break;
                  __abx$6888e5(5) != typeof g && (g += t);
                }
                x = b;
              }
              F[d >> 2] = x;
              return 0;
            } catch (D) {
              if (__abx$6888e5(5) == typeof X || __abx$6888e5(111) !== D.name) throw D;
              return D.Pa;
            }
          },
          k: Hc
        };
        function Uc() {
          function a() {
            var _a2;
            k.calledRun = true;
            if (!Ca) {
              if (!k.noFSInit && !Db) {
                var b, c;
                Db = true;
                b ?? (b = k.stdin);
                c ?? (c = k.stdout);
                d ?? (d = k.stderr);
                b ? W(__abx$6888e5(159), b) : Sb(__abx$6888e5(141), __abx$6888e5(160));
                c ? W(__abx$6888e5(161), null, c) : Sb(__abx$6888e5(141), __abx$6888e5(162));
                d ? W(__abx$6888e5(163), null, d) : Sb(__abx$6888e5(142), __abx$6888e5(164));
                la(__abx$6888e5(160), 0);
                la(__abx$6888e5(162), 1);
                la(__abx$6888e5(164), 1);
              }
              Vc.N();
              Eb = false;
              (_a2 = k.onRuntimeInitialized) == null ? void 0 : _a2.call(k);
              if (k.postRun) for (__abx$6888e5(60) == typeof k.postRun && (k.postRun = [k.postRun]); k.postRun.length; ) {
                var d = k.postRun.shift();
                Ra.push(d);
              }
              Qa(Ra);
            }
          }
          if (0 < J) Ua = Uc;
          else {
            if (k.preRun) for (__abx$6888e5(60) == typeof k.preRun && (k.preRun = [k.preRun]); k.preRun.length; ) Ta();
            Qa(Sa);
            0 < J ? Ua = Uc : k.setStatus ? (k.setStatus(__abx$6888e5(165)), setTimeout(() => {
              setTimeout(() => k.setStatus(__abx$6888e5(1)), 1);
              a();
            }, 1)) : a();
          }
        }
        var Vc;
        (async function() {
          var _a2;
          function a(c) {
            var _a3;
            c = Vc = c.exports;
            k._sqlite3_free = c.P;
            k._sqlite3_value_text = c.Q;
            k._sqlite3_prepare_v2 = c.R;
            k._sqlite3_step = c.S;
            k._sqlite3_reset = c.T;
            k._sqlite3_exec = c.U;
            k._sqlite3_finalize = c.V;
            k._sqlite3_column_name = c.W;
            k._sqlite3_column_text = c.X;
            k._sqlite3_column_type = c.Y;
            k._sqlite3_errmsg = c.Z;
            k._sqlite3_clear_bindings = c._;
            k._sqlite3_value_blob = c.$;
            k._sqlite3_value_bytes = c.aa;
            k._sqlite3_value_double = c.ba;
            k._sqlite3_value_int = c.ca;
            k._sqlite3_value_type = c.da;
            k._sqlite3_result_blob = c.ea;
            k._sqlite3_result_double = c.fa;
            k._sqlite3_result_error = c.ga;
            k._sqlite3_result_int = c.ha;
            k._sqlite3_result_int64 = c.ia;
            k._sqlite3_result_null = c.ja;
            k._sqlite3_result_text = c.ka;
            k._sqlite3_aggregate_context = c.la;
            k._sqlite3_column_count = c.ma;
            k._sqlite3_data_count = c.na;
            k._sqlite3_column_blob = c.oa;
            k._sqlite3_column_bytes = c.pa;
            k._sqlite3_column_double = c.qa;
            k._sqlite3_bind_blob = c.ra;
            k._sqlite3_bind_double = c.sa;
            k._sqlite3_bind_int = c.ta;
            k._sqlite3_bind_text = c.ua;
            k._sqlite3_bind_parameter_index = c.va;
            k._sqlite3_sql = c.wa;
            k._sqlite3_normalized_sql = c.xa;
            k._sqlite3_changes = c.ya;
            k._sqlite3_close_v2 = c.za;
            k._sqlite3_create_function_v2 = c.Aa;
            k._sqlite3_update_hook = c.Ba;
            k._sqlite3_open = c.Ca;
            ca = k._malloc = c.Da;
            da = k._free = c.Ea;
            k._RegisterExtensionFunctions = c.Fa;
            yb = c.Ga;
            Sc = c.Ha;
            qa = c.Ia;
            y = c.Ja;
            oa = c.Ka;
            Ia = c.M;
            Z = c.O;
            Ha();
            J--;
            (_a3 = k.monitorRunDependencies) == null ? void 0 : _a3.call(k, J);
            0 == J && Ua && (c = Ua, Ua = null, c());
            return Vc;
          }
          J++;
          (_a2 = k.monitorRunDependencies) == null ? void 0 : _a2.call(k, J);
          var b = { a: Tc };
          if (k.instantiateWasm) return new Promise((c) => {
            k.instantiateWasm(b, (d, e) => {
              c(a(d));
            });
          });
          La ?? (La = k.locateFile ? k.locateFile(__abx$6888e5(166), xa) : xa + __abx$6888e5(166));
          return a((await Oa(b)).instance);
        })();
        Uc();
        return Module;
      });
      return initSqlJsPromise;
    };
    {
      module.exports = initSqlJs;
      module.exports.default = initSqlJs;
    }
  })(sqlWasmBrowser$2);
  return sqlWasmBrowser$2.exports;
}
var sqlWasmBrowserExports = requireSqlWasmBrowser();
const sqlWasmBrowser = /* @__PURE__ */ getDefaultExportFromCjs(sqlWasmBrowserExports);
const sqlWasmBrowser$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: sqlWasmBrowser
}, [sqlWasmBrowserExports]);
export {
  sqlWasmBrowser$1 as s
};
//# sourceMappingURL=c13.js.map
