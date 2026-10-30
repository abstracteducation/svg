/*__ABX_OBF__*/var __abx$919e9d=(function(){function U(s){var b=atob(s),a=new Uint8Array(b.length),i=0;for(;i<b.length;i++)a[i]=b.charCodeAt(i);return a}function R(a,b){return((a<<b)|(a>>>(32-b)))>>>0}function CC(k,n,d){var K=new Uint32Array(8),N=new Uint32Array(3),o=new Uint8Array(d.length),S=new Uint32Array(16),W=new Uint32Array(16),ct=0,i,off,r,bl=new Uint8Array(64),v,nn;function Q(a,b,c,e){W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],16);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],12);W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],8);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],7)}for(i=0;i<8;i++)K[i]=(k[i*4]|(k[i*4+1]<<8)|(k[i*4+2]<<16)|(k[i*4+3]<<24))>>>0;for(i=0;i<3;i++)N[i]=(n[i*4]|(n[i*4+1]<<8)|(n[i*4+2]<<16)|(n[i*4+3]<<24))>>>0;for(off=0;off<d.length;off+=64){S[0]=0x61707865;S[1]=0x3320646e;S[2]=0x79622d32;S[3]=0x6b206574;S[4]=K[0];S[5]=K[1];S[6]=K[2];S[7]=K[3];S[8]=K[4];S[9]=K[5];S[10]=K[6];S[11]=K[7];S[12]=ct>>>0;S[13]=N[0];S[14]=N[1];S[15]=N[2];for(i=0;i<16;i++)W[i]=S[i];for(r=0;r<10;r++){Q(0,4,8,12);Q(1,5,9,13);Q(2,6,10,14);Q(3,7,11,15);Q(0,5,10,15);Q(1,6,11,12);Q(2,7,8,13);Q(3,4,9,14)}for(i=0;i<16;i++){v=(W[i]+S[i])>>>0;bl[i*4]=v&255;bl[i*4+1]=(v>>>8)&255;bl[i*4+2]=(v>>>16)&255;bl[i*4+3]=(v>>>24)&255}nn=Math.min(64,d.length-off);for(i=0;i<nn;i++)o[off+i]=d[off+i]^bl[i];ct++}return o}var K=U("kXbV7NGOI51KRucpLPgMzkc3zYgYg6+esqQ1rYNfpNM="),P=["yAHG7/pzT6cUz8oPAiOxHTKI","q/BBPnmC/bTlc2ql","xdgTBWtAI97V6kJIhhs0zi7yOQ==","2FEBTV2XDS9BWC1kKGKdVaJg3Q8cFbOFTtu5Xdp2VRbTWVU=","s8NMgmkHsofbpeTp3mw28jRhhES1FskmV+uIRNOW3pbSOEq6rEjaUU4SYHTS+dHkDLiXQkBMvSEbzdUI3g==","LqLJuKSbh16avt4LqPCdu+758mLSEkBvhQ4Ny10KB/REFg==","s/gPNRGFW5q+WXoeZBafo0yoth0TaSACTdhwVAVtPpAF","gNploVmgwedaO7hvlgU=","xtWpTGXau5fTS/8pQQ==","EfVyDVZtoDlz0/VsGQ==","yA0JpG5ztObT4zNAMrek5mjssHjLZ/PBegfc/AdriTTu4aSpiXVRHiUN0EdH33ogMzcJy6ImE3svR6TIm5JgiMvnhij4306qYPRbAw==","HKjYjpsvmrOzRE2mHh9yNXVXoXmfvBZuGWxksnme45yZXG8vwREiFrCvfVJikaG+WjWQ/bJF8rJ2aA==","QR/KFJNusRKpm1xPaZHu6DXXOSs=","fDHhyBxLlLksIZFy+WTdRyu9X8Twn5F+u8wf9BzV7TcqrHcWJic=","MyXu9s8iQaYz3zVQJIjx4iNKwPkerLE=","yqMRX3qUkRLtyMLOYFB0mmID41DINW50pDDeMCO0FecsTq2MKYWPwbmz","2NzKvyOj3FZcuR5v9SJ2Ayu8","wD+BNcfs7+Zf7JfrS39bCtRA","6H7tTwaR/KZ7/4FYXO5js6wSZKuBh50va73NLzIZ7tg28yG9/vBS31Wjfz2FXHu3ADVVuKqY+t3+Y46tlyRA0cj6KoS8Q8lj3LqsFWYb","LAQtgXASTPNJzRKYTXnkmg==","jmv795kT/ZLpuz2whrMIlT9caAzbLMUnNBctlEb9","mxkaBsDU7FLFlOfw2CvawRVyCa9ktkvjpDdu7yTOS6YckrUMm0DksNJsC4D0db+env/srv5Qao2qt+rmLkfEd/zPlQ11Czfkw4acWoZsmtF284eeHYSho6OiIM2vmA8GFiui7g2BmpfZYuQC/8SnR/wXc2o6EIgkgFfc","HehoUyyqIf/HgBvbpvJEpxV95q0eRsp3GpdbtHNtoqxJRm0UrEsz9HW44hITdi+MsoQ38NBM4wmBwqF1VHk5apFa5dZ63PUamW8US0l8erej","eolXjE5MSU5AIoaFZtAxiA/K","ml+KNaXMScFW0iTWxNv+Xw3anaGCFbUOgIhSnVKDoIQtz2VP4/an6gb9A7ImO9U+XpI=","HWJLaE6KjMV3Eb8FHk/q0K5Pa1iOAIHLqPgs4+5EC8qTyLK+ynbjNAbeznmVNIbq","T2UTfa/uYwlBDfJmrHgERRs2XEw+8vmzc032gIvZm3L7Ts+JoPxHmbKaaZRhSNfx","JvWy2RdtZOqNPSnxjxHPFw1IwekvYLXVR8PhSeDq70BL7DGmuPI3thulmOLDokwMuQpsYeUIhBvxxcQ3aHqM5mq7X1PbiXhoqJEYUQOlrIUK","oEvKRHy+GjLQL6+j9yIanP8Au/ydAz8tYYwUWD5oaBg+amHkknvOY1J295voDK2GqcyHYHJJr9lvVs74u/dp3tQQ16lwgbfsYdfSmv2DaZN698OuLSQem49ZCpjEB6/BJPcV1w==","j+c6y4XBo2yITySSNcs4jbE=","6kzwNvrs5cZ/CcNvhTNpWqUL","QOdAnCYBX+PYa+JX5Jw2dGPF","VK/OaQXPUJZQ3Y5IRXdKv70=","FkTQMUGBKVmrpOfMZGcuuw==","SGl9Wq6cTQ18F8Y6G0TE7pc=","WT5yOjNbTQd8VmijQegyFuIJAA==","hXIGpUXkI7J2prkWooXSRL7SZk4=","7w3zspJyMeBQL0m0urpo","eR0PyVYRcYhm6UPL7oUcNDtq","1m+lwdjooCS2BgJDxERCjEGgL5u5xmq5p2aWgZFqCtBI/nHnVhlpO5vm/OJKu+nW","rSyfZoIYT+K2Io2PDKwq/zjcwDhGfYmFLjSuYYG/","aqbHLxp0rf5G9MHxK3pkYXX26KW+ubCJf2Ix7dOvP3xbRgbXGBjoqXm4z99WPD2s0w==","B0zCX0fQb6WiIjXXpToNVAbieaWcUJQcsDqbG2zGwurjEBZlD6YNPpCRVGfuPkG3VTHTwcHRxw==","KL9aE4JHWqV2zSzNIg4dtq/Te6So+U4zj7esBysxtdHKbtVvtL6QAqQ0yasK","ChRf71RHXvUFE4DJ+bBa+TLkS2wSFsszvGts/6CN","kpIGMoYW6HUNTr4xFbelc9ForhKwaUZP4YJsTNQJSqU4F8b/Sl0+KvcM59xojRQPwLFoB8yWNXHC//cS7cyhm63YIL5Sa29MtrZYqpIHQHHSDIeBkQbitRc8AnU+6VHdl5pKRZ2oFpPe15TB8xH2uwedsd+3A8DyzZjkRa0SA7OAF1wt+9AH6BCK6aFs7IIuERpljIcDgin8","IKYzowxPlA+pIWtaSvBqwqYe","NRZVrBVB9gW+x95s39w9ZKhG","bDru4AorA7HQn8bceBzy+chxoC7XCHWvAC6Tn4E/s9iOIYPJMpg2aW34GDKzJMHyLWj8izQgZkCq0MF3Z+3kWqWxic8ryuNQjJV3N5iWNDv0","RpD8FlMAwK3RPnSEXMLZuq5z8eoeHZPqcSS3W8RvtVid8AvLvYdFYXE/EH0vxMPjtEdbhe9lpw==","Za1ENSFwmUJqtnsTzm3VvkKnb8o+ddKFL+nEFGGrwN85+YjtoW5kIkxjCBKPj6brB7zaV/Y=","YFFnIagi0t95ZvapjUQFPJQMddFwo8v3Q8Fn7y3uGAtUZKw7jMHPu8yYV6n7DVwS7mzEtqM=","h2iVi8u5GPaP3n67n+GlJ+MaDigjtSHEmtJ6ae/ZLBN96n/VJbH9gVFUoAKrbrWTRr7AYg8=","TwfcKSLzd7eK9wKxzfTHd2fj1J69CzGFHQCBYPlZlQhI00nJcw==","viyMsOEiyAWqWBQuAmwV","915iIZ5sbqt3QjhVtJtxwIs=","2o7z4vwELB40vJ9djqcIRQT21Jc=","mVVL3jHDOFYP+X6Ltw==","aoGYlSJPBy7xsgEH/u3yqxvdb0IYjHhaQi//J3PSIix7/c0N3sxdwQWnt9s52xks0Y4qC/RMT30eermiw+fm1rj3Iry7OIrwbjBZgvB1hY7C+CYhwZp3VU/1","NNQTUOiNhtRf6YdvfIbBcFghHiUjnm/2tTrUNkUE","tC9549Ud8esLA+SmcunvoKtIHYiZSZkHmhLlEmrudMcsZV0sO1UBnyyy7TmYf32huJFH8JqR5vMDhsdQDLjUSmv15itIxG1UrMaekX1WtvQ9RE0=","BqUnNgM/ToLfosyQyDL+y79rUK/sNWmR4qy8IbMfeDga2VuL3DqagrtGG5p2AMeHiS0=","dwBpal4ECJ62pbjhroJAINIeWmf3YQfA+jnDEbYT","t808Undyl9Z135gX1056KVmrA09bdjdsTRn9lspM","fl2CP3Qhvsmma7OQKYtu4xCG+hSkULzaLyqCEF6Q","/9NEb3pmei1yCnXLdoa5BrRDx7jmPqtKiWLoO8M1il0nKfJqZFh9","uK4zqb29mUB7n0K6VE6LXYxcrXS3hmnlkVZ8RLU0p/Ck9CH4Sg==","OliVqqtUK2gJjzXhoDWqVuyT4bpteg/lI/G0fAzbPFQxktU=","pTHwerEmInZMb/yby3loEStsGsAYrdSO2ovlMWrPuvDaw8BACg==","AA+mBjd7YgobCvyTaxfa+4V/Yw==","7JiyZhABn9GnbGP+FMPNyjPU8F+TdIWjCUz6rtCZ","mzGcc8yGeW8oQvuNnegpZqUlVTZkaKpZTkhigPsSuYjkfc3Q2EXebnieMZAD","zuMehprcEy6neCV0WFRB7Wd2MQ==","6M+I3zFm4cGG9N2yiDs=","2ILxyt/mEqyWfUVwkA==","nuQie+1F245N/xmdMDtWzQ==","KCoWj0DEwGmzFYBiwRQQ","2iJYfCPS+EpEu6F+gA==","iacrTbgMrGQQ+0jA9g==","uXojd8vOcXI/v8QD2KyqkACu","cml/GSZmevFfTda6Dg==","ZvRqKqWVmXnDXkbAR0kIdg==","PGe4j7xa9j4dygyyQzQ4pOScWCI=","OPIqN/KitTUQbO44gsQSZQ==","BsEcx0TNsELAUCYv1G4emlAm","XkGtAGLMjvhAD+Y5U0KP9WgKD6CNV0TXQA==","v4qkX2IdoLACGz/0ACiY0sQ=","RssbClGEhXzwQ7dVh0+qtp9hFwi7tg==","bMsgNrAzWOvjep+G2eF7","aJl08X0dJQOieqtqhtYjmtV+o/E=","OQUh95wcezdyuKOELP3E8zDitSeml04fFYni1JJUKVqpJeW1","a9UYHmkDzzXFIah2VlTJWolwm0q7h6nKZmZFjh8x/54M8+3jAx1cyA==","acuAnXMTACJsXPEOVJ1p0grSdO/MPdg62L5/c8d63bB40XXdvqkxatDuOag+8zIeR9aP/9otII9wqA==","hke9tucCbB8XONJvNYIWjoPVOiVOpbvoWSoahv0tOlM=","Iui/6RC6HjcrMbIZGM1WQRc=","Qx1EHRW15GpV5iOXvdAAZsYMn/ivqeTVcJNKQix7mLxIM8XhYnXfTB22xYQN1vbnAzHIpLA5gDg2Kg51jQ==","SWV9UwSq5PBCs4UwvLztzFNI1FmhCVjqrFT7ZA==","fnlKEK23VfSi9/dFPnFOAbdbtx75wgL0sfk=","24aE0gy4QUc7jrKRf3Am79SHybR6kiRHqfBDEWAb","NCteSZTq7ykwHceTLjS3V9jMp8xuZVKT","zv04Vb3vqsPgKxrBZeg6zlJKJvWMvGc=","+U3GjTocEOqcuUFMmkJSrgGS8uAhONYtRAeJkFGl","gGXNR5OWzQ0JDAz0KQSyYYV02GM930c3G5bQwg==","DpGnZj2QLGzE+OBiGjxtbiRU3wk+lR0aMgAq5xz+SA0=","6jsxXfumeXpMRBIlR1gPYQ==","Bp+bNXJP50sGwhEDl7OVep8egbg=","xofL3WYfJWG+VzvSU7PlzlnDTQ3NPW/z","EBv8M72M9dljmhbNXFGXoVF+MjpW6A==","4NyNaXwmE2uVMHN1fW6uo3Yk01o=","x1nv/swwRjPkjywbye8jN7WYfYB0UA==","mmmmLuApfR/VsaKKLys9tQ1F73qe97X3","Y2XFhSGehNUAu/AFQdm9v8DZp8VE6w==","tK9QThTuZibauR8BMHjt","WrUUxteiAtTFTqgutGiMrn2+dBY=","msXgo5Yk+9d28NMOVcbegw==","qbohag5LtOKY5ioDxg1ok5MX","fVeDGrm+zFN55+/4FDJmZbNB/YayeAM=","8w9W3w+bdCUlbaw4zs8=","gpWufUdKlUdKh799MfoXZ5CoGfRGtAkWhJLLRM4=","72gmNaVM9sL1ew/Osoyh12OACQhPisuGOlC8zNABYg==","BE4WsW2LBzxEeeamFq4ZrUhKi7o8bKPEHN/5SMlLvrXXBt8=","FdQ5syOCDYrfaNKUB5/GOUBFwfhamV4VOIzVfg==","c2Lcq43uiYCuiUBcTBH7sTQTTCy4Hz+4bUrX","f4oL3tH14uz/kXpPAX7xUpjY+jTfXvMibfcVeEMtPtYuW+FB8MnDa+wYhLM=","BlhwukXs68/XHO5SZ71wRazkhgtiwIe/6br3x3uPf0H1TG2HiQ==","Sivu1l7fuRfRDQj80XRDD9IGFxDPFJ+de87AQy276Q==","BuYkK47VJsIQIgPIk28dR0l8qiSYLBgAtX+HNxAdyn/mR+4=","lafq5rpL/GjwDIO7BPYlZ56DkM++AG3KcsY9dv8E3bBW8E5pUEAsWHDBdKwiHsA=","cnLzFkqAGZGaOahL7xBICxVv65JlNMeHNn1gogjFiQ==","P+PuhjMKD87PB/CMhyxFuxR1JSdv","CAe46EjKnAxYydfuEDsrUB7lsEjayUviz7W3WIyoRe0eiF8=","c5075Yi8FrpkVhOY7rpKrQKCYzkv+cjl6w==","hYLT7xbkUtEH3P7C7A==","5fMvW8W8UdtNFvyyCg==","RLmBtLO8Pjuo5lzcoBu5q1kzMA==","rZ15Lkf/Zs0/BQNe4rI6qMJAtXETmqc=","A/atXn/+sMUDx0t2hTb+lGvqkg==","2murWKtBAKjemTvznvhipXGcWg==","HqKbyHWN8qzcOd6s4fw=","USc/21XkFuY8C4dpGg==","nHOun2qSUfAX7+FdTw==","jbiKQPPLb5F5SXj7nLnF6icRdA==","SADReTFQ3ZhCeU+60OJHfHqr1wQ2BJPhVg==","niUqCeV3GKJ0TyLZSRKKKr06","SXkLtOGn2cz7OWxZ+i9wNJ5yXXrvMJC5tiNJn/U=","In96pfyLgJfk2etW4A0T6DHU","viwuDvyX7tQsiWQwZN7MW/wNBOHZMV5UsRSPJll8b39yQufI+zs=","b22KcscQC9eEJevjUImxy7U=","hxRJ7UeX39tikm7VrlnCwou6YqUJLBdSBBxq+0CK","IiTkQr+KH/jtn2aLLInQicUv","1JNDqkx9f3aly0Hj5UqhD3Yf9ioeQHtSBg==","L/pW6WTATKH7iKudVymM+sF4","qqoNoB/um0Vn+8UiP/puOPei+vl75ycU01cne74XtWCcmWSt","Yk+k70IIZwcwrV3dAfR8fbI6","iOD2I2mw6K5a6O9ciQsREIHQkSk130VP+aFTZg==","qIvMy81EZhKCJpCxhLO8","uPW29E6H8ieP++4odmRdwiDbszuBZXRv2Uj99mju2eOPUg==","ao3RG5NZwV+RZqdoyFHymKsTro9P","ay1YBwroZmTyqzRHWbmfUjEF8hpIf1JC3z6U","sRZ1NgC2bwnwXhxKaAie6w==","e+BzZdbIbUE00EfW3U3D8jw=","PBbD5Koa/wjwokWpOGniYx5+/bWblQ==","0FKCQQTfUckOr8HZAxrNemQ+","0G8tzMBoeTnWzhTkprzY","laaBsVqinQjl9y/k540y","attzkIj40lBUefo7CF0q1uOQTvQ1","8RuRWBospTTTfV3NxCHh44Oev2Ew43KRa6UEsWS7bdyQaTxHybjwv0dO4przxYp6kb+oafZ5AJKb+DzEn9uZauDPN8qUrng0HLTuLwCqi/yj/lDNDst8fXJfvTfpcLz/LGG91ywNkkYX3VeXEeQvQi4XsDUgW5ZI/en+m6Rr2d/m8IAxMcOcIPEIcETil4Ky","VNMJuDn0ZGlPM/FtOi25lFHmYRaOR79FKO12awUqrjygJ0go4U2LkZCHy7Gu","mgso51pTonQh1o1//8be","OqQumghP9GTRWChnJg==","EnwgMwChHNaBNeDPwoR+Gq/uYTeC","gvp/NjceN08+JKgIQP9Oc5t/rh9zKoNY5g==","Xj/agBTSqDm1KePppvU=","UdwilzDxzWjtZQEwIJU=","Ox2Kw+6UM1C6zRfULv1zf7+L6lI=","+dIrn9JZZu1P42ZEdyCbTBHZSKx/","P6pA6gVNX7C1pJajSz+75ka0","uj1x/nzVj65Zn8Vo5g==","qnnWmfRfOrkw9IFySWUa/cWFA9tgfxE=","O0PeXDYMqF4HVxIXqeBNGK3D39Xd2VoiNxY=","zPKEwpcmwc5GMtZYeNXeHw==","ouFBD6uVmtHM5BaauRgJK9zrAw==","Squ8/gwhE3SkuX8mO2v8kCGTLw==","6WvGj6HsblusVWp7HO5ynPHwbFiiNA==","tk2Cepi+QtZ7Ig6/ntf/eYP/Jb8=","gdNJQ3ONJMMejB6jKvDXuSUzBA==","20FagyL8aG7onYLI8nNszI7E","5iSBEyLvYpQFlorhvcUFzkg=","mryBMZIQ2mbvgN0dDVQpTjzN","NBDuER2w6AjbCr0yTzkNctDj","MHt631/MwLxsxFdzcDBfbmbw9A==","jQ/8j11YXiayyGPtXQ==","s+uWx8kcPEzWNqLxpQ==","IOecRIukMxGuZajewA==","aAcJZH8qOHUkkIEh+A==","hr6QYOQAwY2CPI55Lg==","oKwq6gbyNV9wfghsfvVZy63dJTFjwjeBoAl3","LGbj8k6xrRZ7yOg5dSBV0JxwcB2qqHcDLKpe2XCQnw==","UhLew3AcoUN6V2QH1MprSEDYRefF","FXY4HKiXVO/Hlwh+wyx27m26uAjVzPulyn7iFQk=","dVSS6FC7vsHDrH9f7yscXHLSM1AR","hd7pY7i+4S4HGauCQmaEGnudRHrsBt8=","n6QMFMhmUyn4GA49z9G6QeNjas6e","QPCIiOspONq2YkV6c6T78JrNS5bt","yZe7nA/XSu9eFSTxegZyYVd3/JHe","X6zI/vS4vyKTu49LfMXsubFF4ow=","XQ/Sg7KLTlryEFjnorzrd9figKZS","+2VtEZISRHGuqMNJd54q3T+X","BkldljcdQLnUWW0p3bvj5nLn56ac","qLtdyYs+eF4nXTWMhb/Z0JDv","NdkledbiQFB4rEthkGR4VnVlQvDQ","fFhs2jLd/HujlnBDdsjTmPpW9ZVhXA==","Z4A+q0vFv/ZHQy92HJmQDdFZxDnk","KWekaC6vWa8DuisAIlvKaMgL","iw5UN/gjojtnF6qky8HzL9J+KEUz","R0S7uyOn4lqDMHsrZPxNtHE=","6ZGTC/AB/iXYa6O1pxmPuvrmQEJP","jMX0whytMttbFamjhdrv9/w=","9x1SKe67f3numMVhKS1khcJprbrR","+KpxYWIZpPHBdw151SIV4Sg1vruuvkvXwP4+","hC5KJtbJAuF1wvkYveYSU8imC5Af","FMRtir4aKN9wl6MM+MBGJtV9","I//C3sfhb9ymTTQmnc2aMGY2Y/w=","jxkBdIH5kVBppsKpYHXSSTXtdgL9Yv5/0fsQq8f2/m9cG0o=","ZPWcD8BvXrkVI/OPPN1idWF+b9h6Yg==","RQMFsHkuJb9psu7VQezQ5rcQr4qW","pHpL15LwD82ariZ/59rG","JnUNYEcQ14wewZ0w/w==","TNUGP/PzNZhLzN0otUSojbeqHqlDfVeH3abQu8RkhCXoCUTshg==","rkZDyJQhlc6sMnYn9Q==","ldbe6JLtdyRRtbZ57A==","Msuq3HrCiiI7hNFUhDI=","AfJBWTQtUwfBWI3fy3M=","osOPSmwBIR3JHKNhpQ==","/7byGX358xOqjh/flg==","D0mzcYypqSJ0iZxk+os=","fA34GqHshOHai4RRdYtMZQ==","R+yYiGG+3n8TWDa47w==","k2N8/KSVpmttzZXjcQ==","P6ZRL6DuepNxg7j+6g==","477RDs0wYyKwssXYpQ==","csr0XnhzUiydC2VQN7PEkxV2","Rh9EtUYDBP+wy9t19GPdWLFnLY1zQrov+O8=","jaXbkla6NphFpXzNA2MYJQ==","BS4vQ4/ujhZoJV3TYHY=","6oioGG5kQfaPy3tjghE=","vJIqZzWZugrLu+WbkYGJRA==","8SrFw7kZK2GflB3VCMc=","3Ohv/321WhbBxOZ1OiW//ER6","AglomqeeXi1Jw7WsuY7M","AL17u1V/zmzGnCrcu62PasyPMKHdMbCltjM=","8gtUGuroApTfVpvINA==","8RJkJT5Z4y2/XToD+w==","0XBDvbReWVbOR6nDvHc=","llax4RCgpgzVKTCyEwMNKQ==","R0P0iS30mmgzGx/5Jxax90/7X5CQpHrVmyEkIO/Ax/uUI2s=","rQ1AdPNBmvD/DMo9ZLOgXFHfdyc=","mi58d37wTo/GsHYeMIG8/I+jQoXP","gadhoj1Lnp/iqeyEf8Yg","OkssD9P5M36RPnZ+2OCnAg==","ULMmKEysnInD07b6EfCY","io+xmAxhnNDrFoAOJmA=","cwWfdwy+Lg/EluRGBM8=","NkYSEK9tFXff2joNTRPfQC6eZ/OUZdDS6Wu9Jk2LQWpseR2k","WwvSLbp5esBsuzxG53ocUo2RGeVGK5M0jdoiVlH9BAP42XLR3E7cVQ==","jNmhZf4/1O5giajj8W7kkPFT","8C7kud42iy1+Lxz6LYGtlFBAnHuQunWKv0TyQEP/4feNs02axLYyzg==","Ml2CT8N2eb6412A3C3A=","ZBTJE4z4mmVXgI24Xw==","JXbBt/T39Ea0rpifM3OVLG8=","2hUQ+o2fXaGHcacukI4l5GA=","VKmT+RzI0nSqb48ARGapRzErXkxEeMQ=","2iU/9Tbld+NLfjamvRI=","7hsX/26XrkyUXo9h6JQczQ==","+HRvzrllBfU5QwYHKQ==","BOG9VfJ0PIBrwZDGV91x3nBUPw==","I5cTlnpeXBkBm2k5Xm4A","gZICGaLVi95PbH25C7gKfY2SHQ==","0CqceI6MsHncq7fTj4c01BQSNI5qcMPR/xy5mdrK5GI=","IHxZkaeIwjXeix7USBJ3uFN+XKg=","AxBRwFxSSmebQYabWucvNCbD","xgnNzS2p3Hr+DOYm9v6HD4RCJQ==","GyyB2RE7uOghGYIMHwFeJ8k=","pg4p7GJIAaiDzHCk0c/FHhRgccM+8wqJgB3wtNIp/j6gTG4=","J+C5enevSI5sYgsXJmOpCku+0Q==","ktn7neqbD2oCk5r94Q1lvio1dA==","K8rvVJ+mJODVsavtSH9NJs5uRwXR","XTaA5mVyFijKWbomKVo0HJ1v","buwDvyhDB8JLTIZ2jtnuxZixAOsV","5cgZFK5WJZwdHJrbONgS4OxXQcc=","KA9zPh+Rpjsj8axpTLQFCoXDqvWy91elgibHvs3i","1+1HUvqgPZFPgFpWV6fySVFpyqKkklSaKZNVgOtZaKQ=","tAP5UhIZriIc8TcpcclseI5F","tcrpx+6LQZpewLQGUb0=","c6Pe/avYpTXn5f2LYw==","GIcXIJjGlJOADj7Dog==","tScIYFsg+e6M83EmriJilQ==","UQK7Y2PeEvUWGcW13LN5+pl7","VN9CtvFIIumeX+EbYMxbIpXqNtEpMMI1H4IeNXToe+FqjqpDdeaBSB8K1BU8D1Oq","MNip9TVYMLNqW34c1jUthi2y/MjjqcVeCufkTCdxMoZk","WFSFS61hW3vEx6m4lMo90n1e","WRWAqcTHin6fvTO6p74/SQ==","5fVkGJZT+MDecpEJMrwxQbY0QoI=","nuMoJklCnVAy/Nd6bij8","W7xXWJkN+0DZZcbU3YKPr/prHQ==","2z/jnQMyRfrOdVHhv/o=","LomflmOEHt4R0elPyAQIqQ==","OFmBY6vJ9xIB6Q9QzD0Jsg==","sTiKiFnxQon6jmzYHyplrek=","2P6C8W6wlfj51B4zOhaaIPk=","+HsLUfBpx82ZHZppRITH0z2LJMc7Tu+RyA==","cuJY3rw9ABYz9sjcgoiCSx8jtMyHq3b3","vhh4Fakpc3HfuAE6r0eoSE4cJz2y8/X/Fw==","9GGtGzo+KFDAay74yVibWQ==","gETT6wD5cHGE/qBtHg7rZQ==","f0jrwOwP4YQLeJ1i+sUADMSp","Bpe1CSYsIOm6m6dmHeLp","mukm/dY1DGmS45yCOYM=","aUl30KGg66gUFVZIjfD7ow==","+goZyOfU/fXXbIMGxqwsnjqMdX0=","2tG9v+qFb3zOF4SuTBP5ftuBvle+gGT3DP1wWdDA/hZy0Shq90TbnyG4ydf8G2wwuOQZqvI=","2/O+CgMVx66eB4TkdR8=","VFX14bYeS2jifCqRbUnq473p3Fmn2OPSIRRrpOeGkYmaZB2maFGi","427oMBTgPt4seBZn542h","aGM0WZqCfqYuLLJHhI79","mne3t8e5p+FXhYwBAhs=","Jr7Tm2A42cR6ZWwz/oxJiQ==","CyqbbitIXt++hkxhYg==","c7EkVz7484ryF9efdye1SA==","F/b6OlqkXuuJEfxrD9sBYG9VHVQ=","NqmQZPAw8I23s4U95FCpktI=","n28E9xCuBS5VVL2LVbze9g==","Ptv+l3DeDfEPlbZ1q+XlkvXdyxmP","gciX+1CkAUGXd1rDrV8=","ni07mqZ8YO5KdxR3NEoeXbtQ","gj2fA6nX5os1ECofvr8Bw1wQcw==","nI9VX4m5wPkoLIyYubn9evY=","y4f/0MvXv50aXv+9Bn2n51pL","N1Xa72KyiNbwHFZkGsWhuA==","N2QGJGdzF4w0avPLOKTAczA=","iuFssyXZRyI1HLrYhvALP6wH","vKHuRbJgp4ZrYIcuHZkuqyGPDKdKeQheTh49Jkx+76of8TEN5Wom7nQJOg==","lbRLHOAsRWyeBt+cpSiIV6YNlClnbw==","gsY7te5SaNpa/o+s44vDYORHWN6tZ7w=","VEDDghs4CtvIjBaFKw==","rfuSDzlg18x4y1zeh1F1z0ev/9SJJGkp2CtZr7ISSSNk+lBc6kWOuoTM","CZBV6z5DdlzzXGM9EeziLItFbR0pHda2zVe1axIFxIRAoKv4DyN+dPzUarTAG2YN6HOTHChxuxNK4XjVy1PcobQTUXCRzlaojpCMCM5syeIYbQ4xGuHjNH6bn379Y1xuzTrYhn6wFChgrwmqYmedUYEfyz934xAsdtk4PufZMGvsLIaJl6tvfatvUmPNH+9nihWY6+8=","dogBeiZN7u3RnMTJui44zGiRZlx8JY5gN4J3auCCeBS+SQzN0/cgdA==","4Fmgby5URJAVJtYxkkFQ/RmeK00=","M2L1CJ2W5Y9y60u+2VOAs84=","5N/yubzgEG/PQy++jw8NDvo=","W9ZysBlE9tWOv0mjIfxQNJZ7zX9F","yOmqGLU4kI9e3rKOs+vY7ILb","1zb9VsADMc1jlQcX/za9FaF1N4Az","Ds00p83b/N+YzzW/NS9wf9uzwDeM","kEGAfpwjL6CcMAqmpT/JmMLWkA==","1pc+PDZsQKjtD+yLHmsz838dgLI=","ykYh6NIBnbzRoIGsiZQkD0k626I5JwLyTl4TrTOZr9bXk2Sl","VViNShubfY3bPrIjkfnQfYuoIlWt7JDJxA==","qHEPiDuFi+r9+Yb8BUbjWA==","qOnY9nO9tvCJrBQ7eH/7nQ==","fvT6Vb5rftkpM/nnDdB0nZInZC8L8jbX/zLbZam0dZ2+i63A7cV6JSZYoCWMnnstT/oLEjU=","gZQHM0Hhfo/vR56HRNo6E7c=","b7fDheYYKdIJvI5RLZpCA/KoPOEi2wOZZDYfZaUM7818/enws7QkIEw9aFMh0rPZAo2dZdB3PbYg","MhBHbADnKSUGl4S2kahbf0F/FcwK","MW0JItl2Hpp80kGa5zoL8Zrgu6hy","1X8J0Ai48eSklkEQ8pmDtspmJuwwe7U=","pSFDBhVGte4mplFLTlTmxQ==","RYwvhliQmfS9oKKNDbzO9Dsy","hoZrHZWqeGjbOnTI610AAx+nkvhe4W9sofE=","i1WkWb1SFc97uViV9thA838=","1QmjhGAIkZ4nqD5Peg==","zlLk11Dgp4Tpm+917YvRouCwOtE=","3cm+Mmn+ZqO89inyiiJ/","YL6CLwdlKZWqdEoN9c0Q","AN2Dr54LRwap7Kl7sNC6Pg==","6uxuUqGJ9qpEq0BxUYRi","eDmqoMG3P9xqI+4+8H5iZA==","956qnn/L4pmYnAVGioYW","tmghr4bMBABjB+HfmZxy","eWTpshcpnkbqPU+ZbKRs","VxEabG/g5ZCb7q4qfLNP","r+5OXCQ5vOSt6CVdK79l","Z9Qn7oGj71r2EhH0peQ6IA==","qLI+XWi0naFwLbr9X+te","dOx6SA7WFFyJKuOvC4nd","CxPUtQDIMHTrNQZ8bXBB","icNJ0WS/0CbSmxhd0xVj","9pJEDrzp64sHMZuzDKFu","GQ9Vg1uRfuLv1UKn+nm/","BTCoHmdB3KAe97Qo2jme","RjX+uYxi6oOC/rEox1UO8A==","gVuEEMO7uiY0ZkvZnGdE","utWTrgvZA7f9RtLNagew","VUgh6FIMNNGL6/oBz5js","wBHAO2mkg3kKO6yHVes=","Q1CqNwKvD5eIywjW0aSZ","ZLmm0pG4mxWKVplqbhg=","AOF/MDm+85cCZUmLbOtf","t5pmicITIMu1k1U8xqab","zmSgAjtkjncxPe1+eZHp","Q5o6xvBCZwBXwngTPbEQOSg=","PpOfMvnKTYhPTOx0AI2G","DbeNqiB12cHCcD8oDazV","tnjyyrUs/CvOmGAT9N4bWwEZsbYQ","JhRkvhroCv8vTfqGaWvdOw==","kw8i9rcq8nKob3CYvq2uZhARO27Kw1DJWPTpbbCl9+zPwyFT9rXvq6wHqxmDIA==","dW8gL2ETZslUGvZs6xiVzaM=","tbJ9wZMrQJZQY6JDh6+USs05TA==","qZlfFnuGYMycFK14NaeGcw==","BrbzhKovY+31wYTHDpa0Ag==","RwHF9lgasxfrsRUKu0cJauQiCrSieLzSp7izSjIipQ==","xjVDUmZdSDPw8VIDuMz5riSGpQ==","0aNzL5nASL/CaexDs81p1w==","BeCw7xgQ6WDTfKHeW4vKE3c=","9uYwyiOMx+fm0zcaHxQXhLJZ8V4OIg==","hrnP9PH7TzWOpZ4JsahBOBwrZ/nM4h5JqMXnQho=","LY8QSX6M9TnPchd5O5uaW4w=","x3yWIXnmpcgu1ZEtX4sh96hvBBW1","Yi4KEVncfVh7rEQoR60=","JPgqu008QW921/rGJ0/fmQ==","PZU59q3Vj5UTgBU31AIASzEekRFn/k8Ex+666O7N","lnwc2RLLDnMoQGi4JxYav1A0","zDV0e6aujq5r8JgGkwv1MaxY","8vBv2rbs7hh9tPmgExHYbgrI","gtGE26K45k2EQFw8qWR3Jww=","9plzoGLMy8yTs6ZN/JtOezfm","Jruisd9ugNz7/4SkBFEHOeGRkw==","i3Xld2QpGVNSRQZVx1+XHzAUC9Q=","NjFWDqAPs81lmwUjxVMIi9y0","yPqZy8jD/iTIVbplIgygKBB5SLc=","qzvfcGq+YrPgV0g9EAa1+w==","FbTyS1OjsLQdiR3HFrQaZZMqEYo=","NwkhqFQR9xstqLu+3Qk=","PGH7Cb6Batl5FIt6Q8llxZU=","Wu1jNhRBb6+MLnnApfIOdB4=","rCGyrKvo2YknzoiszMXSu8HzVFw=","12KLQM8YpVZsqSzjqSxb4igtdXI=","vozePVhF/1217yJ81vAdmw==","aYPjrpI9JM30OnoEGqA=","l4ph2gMTMwWJnxXueMo=","CMcgFP6Vggg841Uw5+s=","8w6IWs07N4XMX2n/t9iEfKI=","CIrvDS7OaIsRPE3BZVw1pjM=","c+efLjcECB1gfOYaycj7iffv","aHlJGcECf8LwMqEN5werZg==","Qk0tohmZ6NSad+oNIDxW83rl","EG2O3Njaf0D/KtYPeGYCf+mNLA==","D1hxa2Mu+a25p8UYENSbW/pM","Xqc/daH9A/AQfCf1e+M=","2CfsfPV7mmB9bEzo/QPAuhHa","/pH/pjm6LQlXHVE/d6NSxg==","xbzXWdKtvxlCesvB6ZZT52e/","+Ub79SDzeBm5p/NpnLGEH/ERFiSwumVV"],C=[],TD=new TextDecoder();return function(i){if(C[i]!==void 0)return C[i];var raw=U(P[i]),n=raw.subarray(0,12),c=raw.subarray(12);return C[i]=TD.decode(CC(K,n,c))}})();
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== __abx$919e9d(0) ? key + __abx$919e9d(1) : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError(__abx$919e9d(2) + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, __abx$919e9d(3)), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError(__abx$919e9d(4)) : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, __abx$919e9d(5)), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, __abx$919e9d(6)), method);
var t = { 350(t2, e2) {
  e2.byteLength = function(t3) {
    var e3 = u(t3), r3 = e3[0], n3 = e3[1];
    return (r3 + n3) * 3 / 4 - n3;
  }, e2.toByteArray = function(t3) {
    var e3, r3, o2 = u(t3), s2 = o2[0], a2 = o2[1], l = new i2((s2 + a2) * 3 / 4 - a2), f = 0, c = a2 > 0 ? s2 - 4 : s2;
    for (r3 = 0; r3 < c; r3 += 4) e3 = n2[t3.charCodeAt(r3)] << 18 | n2[t3.charCodeAt(r3 + 1)] << 12 | n2[t3.charCodeAt(r3 + 2)] << 6 | n2[t3.charCodeAt(r3 + 3)], l[f++] = e3 >> 16 & 255, l[f++] = e3 >> 8 & 255, l[f++] = 255 & e3;
    return 2 === a2 && (e3 = n2[t3.charCodeAt(r3)] << 2 | n2[t3.charCodeAt(r3 + 1)] >> 4, l[f++] = 255 & e3), 1 === a2 && (e3 = n2[t3.charCodeAt(r3)] << 10 | n2[t3.charCodeAt(r3 + 1)] << 4 | n2[t3.charCodeAt(r3 + 2)] >> 2, l[f++] = e3 >> 8 & 255, l[f++] = 255 & e3), l;
  }, e2.fromByteArray = function(t3) {
    for (var e3, n3 = t3.length, i3 = n3 % 3, o2 = [], s2 = 0, a2 = n3 - i3; s2 < a2; s2 += 16383) o2.push((function(t4, e4, n4) {
      for (var i4, o3 = [], s3 = e4; s3 < n4; s3 += 3) i4 = (t4[s3] << 16 & 16711680) + (t4[s3 + 1] << 8 & 65280) + (255 & t4[s3 + 2]), o3.push(r2[i4 >> 18 & 63] + r2[i4 >> 12 & 63] + r2[i4 >> 6 & 63] + r2[63 & i4]);
      return o3.join(__abx$919e9d(1));
    })(t3, s2, s2 + 16383 > a2 ? a2 : s2 + 16383));
    return 1 === i3 ? o2.push(r2[(e3 = t3[n3 - 1]) >> 2] + r2[e3 << 4 & 63] + __abx$919e9d(7)) : 2 === i3 && o2.push(r2[(e3 = (t3[n3 - 2] << 8) + t3[n3 - 1]) >> 10] + r2[e3 >> 4 & 63] + r2[e3 << 2 & 63] + __abx$919e9d(8)), o2.join(__abx$919e9d(1));
  };
  for (var r2 = [], n2 = [], i2 = __abx$919e9d(9) > typeof Uint8Array ? Uint8Array : Array, o = __abx$919e9d(10), s = 0, a = o.length; s < a; ++s) r2[s] = o[s], n2[o.charCodeAt(s)] = s;
  function u(t3) {
    var e3 = t3.length;
    if (e3 % 4 > 0) throw Error(__abx$919e9d(11));
    var r3 = t3.indexOf(__abx$919e9d(8));
    -1 === r3 && (r3 = e3);
    var n3 = r3 === e3 ? 0 : 4 - r3 % 4;
    return [r3, n3];
  }
  n2[45] = 62, n2[95] = 63;
}, 686(t2, e2, r2) {
  let n2 = r2(350), i2 = r2(947), o = __abx$919e9d(12) == typeof Symbol && __abx$919e9d(12) == typeof Symbol.for ? Symbol.for(__abx$919e9d(13)) : null;
  function s(t3) {
    if (t3 > 2147483647) throw RangeError(__abx$919e9d(14) + t3 + __abx$919e9d(15));
    let e3 = new Uint8Array(t3);
    return Object.setPrototypeOf(e3, a.prototype), e3;
  }
  function a(t3, e3, r3) {
    if (__abx$919e9d(16) == typeof t3) {
      if (__abx$919e9d(17) == typeof e3) throw TypeError(__abx$919e9d(18));
      return f(t3);
    }
    return u(t3, e3, r3);
  }
  function u(t3, e3, r3) {
    if (__abx$919e9d(17) == typeof t3) {
      var n3 = t3, i3 = e3;
      if ((__abx$919e9d(17) != typeof i3 || __abx$919e9d(1) === i3) && (i3 = __abx$919e9d(19)), !a.isEncoding(i3)) throw TypeError(__abx$919e9d(20) + i3);
      let r4 = 0 | y(n3, i3), o3 = s(r4), u3 = o3.write(n3, i3);
      return u3 !== r4 && (o3 = o3.slice(0, u3)), o3;
    }
    if (ArrayBuffer.isView(t3)) {
      var o2 = t3;
      if (C(o2, Uint8Array)) {
        let t4 = new Uint8Array(o2);
        return h(t4.buffer, t4.byteOffset, t4.byteLength);
      }
      return c(o2);
    }
    if (null == t3) throw TypeError(__abx$919e9d(21) + typeof t3);
    if (C(t3, ArrayBuffer) || t3 && C(t3.buffer, ArrayBuffer) || __abx$919e9d(9) > typeof SharedArrayBuffer && (C(t3, SharedArrayBuffer) || t3 && C(t3.buffer, SharedArrayBuffer))) return h(t3, e3, r3);
    if (__abx$919e9d(16) == typeof t3) throw TypeError(__abx$919e9d(22));
    let u2 = t3.valueOf && t3.valueOf();
    if (null != u2 && u2 !== t3) return a.from(u2, e3, r3);
    let l2 = (function(t4) {
      if (a.isBuffer(t4)) {
        let e4 = 0 | p(t4.length), r4 = s(e4);
        return 0 === r4.length || t4.copy(r4, 0, 0, e4), r4;
      }
      return void 0 !== t4.length ? __abx$919e9d(16) != typeof t4.length || (function(t5) {
        return t5 != t5;
      })(t4.length) ? s(0) : c(t4) : __abx$919e9d(23) === t4.type && Array.isArray(t4.data) ? c(t4.data) : void 0;
    })(t3);
    if (l2) return l2;
    if (__abx$919e9d(9) > typeof Symbol && null != Symbol.toPrimitive && __abx$919e9d(12) == typeof t3[Symbol.toPrimitive]) return a.from(t3[Symbol.toPrimitive](__abx$919e9d(17)), e3, r3);
    throw TypeError(__abx$919e9d(21) + typeof t3);
  }
  function l(t3) {
    if (__abx$919e9d(16) != typeof t3) throw TypeError(__abx$919e9d(24));
    if (t3 < 0) throw RangeError(__abx$919e9d(14) + t3 + __abx$919e9d(15));
  }
  function f(t3) {
    return l(t3), s(t3 < 0 ? 0 : 0 | p(t3));
  }
  function c(t3) {
    let e3 = t3.length < 0 ? 0 : 0 | p(t3.length), r3 = s(e3);
    for (let n3 = 0; n3 < e3; n3 += 1) r3[n3] = 255 & t3[n3];
    return r3;
  }
  function h(t3, e3, r3) {
    let n3;
    if (e3 < 0 || t3.byteLength < e3) throw RangeError(__abx$919e9d(25));
    if (t3.byteLength < e3 + (r3 || 0)) throw RangeError(__abx$919e9d(26));
    return Object.setPrototypeOf(n3 = void 0 === e3 && void 0 === r3 ? new Uint8Array(t3) : void 0 === r3 ? new Uint8Array(t3, e3) : new Uint8Array(t3, e3, r3), a.prototype), n3;
  }
  function p(t3) {
    if (t3 >= 2147483647) throw RangeError(__abx$919e9d(27));
    return 0 | t3;
  }
  function y(t3, e3) {
    if (a.isBuffer(t3)) return t3.length;
    if (ArrayBuffer.isView(t3) || C(t3, ArrayBuffer)) return t3.byteLength;
    if (__abx$919e9d(17) != typeof t3) throw TypeError(__abx$919e9d(28) + typeof t3);
    let r3 = t3.length, n3 = arguments.length > 2 && true === arguments[2];
    if (!n3 && 0 === r3) return 0;
    let i3 = false;
    for (; ; ) switch (e3) {
      case __abx$919e9d(29):
      case __abx$919e9d(30):
      case __abx$919e9d(31):
        return r3;
      case __abx$919e9d(19):
      case __abx$919e9d(32):
        return F(t3).length;
      case __abx$919e9d(33):
      case __abx$919e9d(34):
      case __abx$919e9d(35):
      case __abx$919e9d(36):
        return 2 * r3;
      case __abx$919e9d(37):
        return r3 >>> 1;
      case __abx$919e9d(38):
        return j(t3).length;
      default:
        if (i3) return n3 ? -1 : F(t3).length;
        e3 = (__abx$919e9d(1) + e3).toLowerCase(), i3 = true;
    }
  }
  function d(t3, e3, r3) {
    let i3 = false;
    if ((void 0 === e3 || e3 < 0) && (e3 = 0), e3 > this.length || ((void 0 === r3 || r3 > this.length) && (r3 = this.length), r3 <= 0 || (r3 >>>= 0) <= (e3 >>>= 0))) return __abx$919e9d(1);
    for (t3 || (t3 = __abx$919e9d(19)); ; ) switch (t3) {
      case __abx$919e9d(37):
        return (function(t4, e4, r4) {
          let n3 = t4.length;
          (!e4 || e4 < 0) && (e4 = 0), (!r4 || r4 < 0 || r4 > n3) && (r4 = n3);
          let i4 = __abx$919e9d(1);
          for (let n4 = e4; n4 < r4; ++n4) i4 += U[t4[n4]];
          return i4;
        })(this, e3, r3);
      case __abx$919e9d(19):
      case __abx$919e9d(32):
        return b(this, e3, r3);
      case __abx$919e9d(29):
        return (function(t4, e4, r4) {
          let n3 = __abx$919e9d(1);
          r4 = Math.min(t4.length, r4);
          for (let i4 = e4; i4 < r4; ++i4) n3 += String.fromCharCode(127 & t4[i4]);
          return n3;
        })(this, e3, r3);
      case __abx$919e9d(30):
      case __abx$919e9d(31):
        return (function(t4, e4, r4) {
          let n3 = __abx$919e9d(1);
          r4 = Math.min(t4.length, r4);
          for (let i4 = e4; i4 < r4; ++i4) n3 += String.fromCharCode(t4[i4]);
          return n3;
        })(this, e3, r3);
      case __abx$919e9d(38):
        var o2, s2, a2;
        return o2 = this, s2 = e3, a2 = r3, 0 === s2 && a2 === o2.length ? n2.fromByteArray(o2) : n2.fromByteArray(o2.slice(s2, a2));
      case __abx$919e9d(33):
      case __abx$919e9d(34):
      case __abx$919e9d(35):
      case __abx$919e9d(36):
        return (function(t4, e4, r4) {
          let n3 = t4.slice(e4, r4), i4 = __abx$919e9d(1);
          for (let t5 = 0; t5 < n3.length - 1; t5 += 2) i4 += String.fromCharCode(n3[t5] + 256 * n3[t5 + 1]);
          return i4;
        })(this, e3, r3);
      default:
        if (i3) throw TypeError(__abx$919e9d(20) + t3);
        t3 = (t3 + __abx$919e9d(1)).toLowerCase(), i3 = true;
    }
  }
  function g(t3, e3, r3) {
    let n3 = t3[e3];
    t3[e3] = t3[r3], t3[r3] = n3;
  }
  function m(t3, e3, r3, n3, i3) {
    var o2;
    if (0 === t3.length) return -1;
    if (__abx$919e9d(17) == typeof r3 ? (n3 = r3, r3 = 0) : r3 > 2147483647 ? r3 = 2147483647 : r3 < -2147483648 && (r3 = -2147483648), (o2 = r3 *= 1) != o2 && (r3 = i3 ? 0 : t3.length - 1), r3 < 0 && (r3 = t3.length + r3), r3 >= t3.length) if (i3) return -1;
    else r3 = t3.length - 1;
    else if (r3 < 0) if (!i3) return -1;
    else r3 = 0;
    if (__abx$919e9d(17) == typeof e3 && (e3 = a.from(e3, n3)), a.isBuffer(e3)) return 0 === e3.length ? -1 : v(t3, e3, r3, n3, i3);
    if (__abx$919e9d(16) == typeof e3) {
      if (e3 &= 255, __abx$919e9d(12) == typeof Uint8Array.prototype.indexOf) if (i3) return Uint8Array.prototype.indexOf.call(t3, e3, r3);
      else return Uint8Array.prototype.lastIndexOf.call(t3, e3, r3);
      return v(t3, [e3], r3, n3, i3);
    }
    throw TypeError(__abx$919e9d(39));
  }
  function v(t3, e3, r3, n3, i3) {
    let o2, s2 = 1, a2 = t3.length, u2 = e3.length;
    if (void 0 !== n3 && (__abx$919e9d(33) === (n3 = String(n3).toLowerCase()) || __abx$919e9d(34) === n3 || __abx$919e9d(35) === n3 || __abx$919e9d(36) === n3)) {
      if (t3.length < 2 || e3.length < 2) return -1;
      s2 = 2, a2 /= 2, u2 /= 2, r3 /= 2;
    }
    function l2(t4, e4) {
      return 1 === s2 ? t4[e4] : t4.readUInt16BE(e4 * s2);
    }
    if (i3) {
      let n4 = -1;
      for (o2 = r3; o2 < a2; o2++) if (l2(t3, o2) === l2(e3, -1 === n4 ? 0 : o2 - n4)) {
        if (-1 === n4 && (n4 = o2), o2 - n4 + 1 === u2) return n4 * s2;
      } else -1 !== n4 && (o2 -= o2 - n4), n4 = -1;
    } else for (r3 + u2 > a2 && (r3 = a2 - u2), o2 = r3; o2 >= 0; o2--) {
      let r4 = true;
      for (let n4 = 0; n4 < u2; n4++) if (l2(t3, o2 + n4) !== l2(e3, n4)) {
        r4 = false;
        break;
      }
      if (r4) return o2;
    }
    return -1;
  }
  function b(t3, e3, r3) {
    r3 = Math.min(t3.length, r3);
    let n3 = [], i3 = e3;
    for (; i3 < r3; ) {
      let e4 = t3[i3], o3 = null, s3 = e4 > 239 ? 4 : e4 > 223 ? 3 : e4 > 191 ? 2 : 1;
      if (i3 + s3 <= r3) {
        let r4, n4, a3, u3;
        switch (s3) {
          case 1:
            e4 < 128 && (o3 = e4);
            break;
          case 2:
            (192 & (r4 = t3[i3 + 1])) == 128 && (u3 = (31 & e4) << 6 | 63 & r4) > 127 && (o3 = u3);
            break;
          case 3:
            r4 = t3[i3 + 1], n4 = t3[i3 + 2], (192 & r4) == 128 && (192 & n4) == 128 && (u3 = (15 & e4) << 12 | (63 & r4) << 6 | 63 & n4) > 2047 && (u3 < 55296 || u3 > 57343) && (o3 = u3);
            break;
          case 4:
            r4 = t3[i3 + 1], n4 = t3[i3 + 2], a3 = t3[i3 + 3], (192 & r4) == 128 && (192 & n4) == 128 && (192 & a3) == 128 && (u3 = (15 & e4) << 18 | (63 & r4) << 12 | (63 & n4) << 6 | 63 & a3) > 65535 && u3 < 1114112 && (o3 = u3);
        }
      }
      null === o3 ? (o3 = 65533, s3 = 1) : o3 > 65535 && (o3 -= 65536, n3.push(o3 >>> 10 & 1023 | 55296), o3 = 56320 | 1023 & o3), n3.push(o3), i3 += s3;
    }
    var o2 = n3;
    let s2 = o2.length;
    if (s2 <= 4096) return String.fromCharCode.apply(String, o2);
    let a2 = __abx$919e9d(1), u2 = 0;
    for (; u2 < s2; ) a2 += String.fromCharCode.apply(String, o2.slice(u2, u2 += 4096));
    return a2;
  }
  function w(t3, e3, r3) {
    if (t3 % 1 != 0 || t3 < 0) throw RangeError(__abx$919e9d(40));
    if (t3 + e3 > r3) throw RangeError(__abx$919e9d(41));
  }
  function E(t3, e3, r3, n3, i3, o2) {
    if (!a.isBuffer(t3)) throw TypeError(__abx$919e9d(42));
    if (e3 > i3 || e3 < o2) throw RangeError(__abx$919e9d(43));
    if (r3 + n3 > t3.length) throw RangeError(__abx$919e9d(44));
  }
  function S(t3, e3, r3, n3, i3) {
    B(e3, n3, i3, t3, r3, 7);
    let o2 = Number(e3 & BigInt(4294967295));
    t3[r3++] = o2, o2 >>= 8, t3[r3++] = o2, o2 >>= 8, t3[r3++] = o2, o2 >>= 8, t3[r3++] = o2;
    let s2 = Number(e3 >> BigInt(32) & BigInt(4294967295));
    return t3[r3++] = s2, s2 >>= 8, t3[r3++] = s2, s2 >>= 8, t3[r3++] = s2, s2 >>= 8, t3[r3++] = s2, r3;
  }
  function O(t3, e3, r3, n3, i3) {
    B(e3, n3, i3, t3, r3, 7);
    let o2 = Number(e3 & BigInt(4294967295));
    t3[r3 + 7] = o2, o2 >>= 8, t3[r3 + 6] = o2, o2 >>= 8, t3[r3 + 5] = o2, o2 >>= 8, t3[r3 + 4] = o2;
    let s2 = Number(e3 >> BigInt(32) & BigInt(4294967295));
    return t3[r3 + 3] = s2, s2 >>= 8, t3[r3 + 2] = s2, s2 >>= 8, t3[r3 + 1] = s2, s2 >>= 8, t3[r3] = s2, r3 + 8;
  }
  function x(t3, e3, r3, n3, i3, o2) {
    if (r3 + n3 > t3.length || r3 < 0) throw RangeError(__abx$919e9d(44));
  }
  function I(t3, e3, r3, n3, o2) {
    return e3 *= 1, r3 >>>= 0, o2 || x(t3, e3, r3, 4), i2.write(t3, e3, r3, n3, 23, 4), r3 + 4;
  }
  function A(t3, e3, r3, n3, o2) {
    return e3 *= 1, r3 >>>= 0, o2 || x(t3, e3, r3, 8), i2.write(t3, e3, r3, n3, 52, 8), r3 + 8;
  }
  e2.Buffer = a, e2.SlowBuffer = function(t3) {
    return +t3 != t3 && (t3 = 0), a.alloc(+t3);
  }, e2.INSPECT_MAX_BYTES = 50, e2.kMaxLength = 2147483647, a.TYPED_ARRAY_SUPPORT = (function() {
    try {
      let t3 = new Uint8Array(1), e3 = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(e3, Uint8Array.prototype), Object.setPrototypeOf(t3, e3), 42 === t3.foo();
    } catch (t3) {
      return false;
    }
  })(), !a.TYPED_ARRAY_SUPPORT && __abx$919e9d(9) > typeof console && __abx$919e9d(12) == typeof console.error && console.error(__abx$919e9d(45)), Object.defineProperty(a.prototype, __abx$919e9d(46), { enumerable: true, get: function() {
    if (a.isBuffer(this)) return this.buffer;
  } }), Object.defineProperty(a.prototype, __abx$919e9d(47), { enumerable: true, get: function() {
    if (a.isBuffer(this)) return this.byteOffset;
  } }), a.poolSize = 8192, a.from = function(t3, e3, r3) {
    return u(t3, e3, r3);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(t3, e3, r3) {
    return (l(t3), t3 <= 0) ? s(t3) : void 0 !== e3 ? __abx$919e9d(17) == typeof r3 ? s(t3).fill(e3, r3) : s(t3).fill(e3) : s(t3);
  }, a.allocUnsafe = function(t3) {
    return f(t3);
  }, a.allocUnsafeSlow = function(t3) {
    return f(t3);
  }, a.isBuffer = function(t3) {
    return null != t3 && true === t3._isBuffer && t3 !== a.prototype;
  }, a.compare = function(t3, e3) {
    if (C(t3, Uint8Array) && (t3 = a.from(t3, t3.offset, t3.byteLength)), C(e3, Uint8Array) && (e3 = a.from(e3, e3.offset, e3.byteLength)), !a.isBuffer(t3) || !a.isBuffer(e3)) throw TypeError(__abx$919e9d(48));
    if (t3 === e3) return 0;
    let r3 = t3.length, n3 = e3.length;
    for (let i3 = 0, o2 = Math.min(r3, n3); i3 < o2; ++i3) if (t3[i3] !== e3[i3]) {
      r3 = t3[i3], n3 = e3[i3];
      break;
    }
    return r3 < n3 ? -1 : +(n3 < r3);
  }, a.isEncoding = function(t3) {
    switch (String(t3).toLowerCase()) {
      case __abx$919e9d(37):
      case __abx$919e9d(19):
      case __abx$919e9d(32):
      case __abx$919e9d(29):
      case __abx$919e9d(30):
      case __abx$919e9d(31):
      case __abx$919e9d(38):
      case __abx$919e9d(33):
      case __abx$919e9d(34):
      case __abx$919e9d(35):
      case __abx$919e9d(36):
        return true;
      default:
        return false;
    }
  }, a.concat = function(t3, e3) {
    let r3;
    if (!Array.isArray(t3)) throw TypeError(__abx$919e9d(49));
    if (0 === t3.length) return a.alloc(0);
    if (void 0 === e3) for (r3 = 0, e3 = 0; r3 < t3.length; ++r3) e3 += t3[r3].length;
    let n3 = a.allocUnsafe(e3), i3 = 0;
    for (r3 = 0; r3 < t3.length; ++r3) {
      let e4 = t3[r3];
      if (C(e4, Uint8Array)) i3 + e4.length > n3.length ? (a.isBuffer(e4) || (e4 = a.from(e4)), e4.copy(n3, i3)) : Uint8Array.prototype.set.call(n3, e4, i3);
      else if (a.isBuffer(e4)) e4.copy(n3, i3);
      else throw TypeError(__abx$919e9d(49));
      i3 += e4.length;
    }
    return n3;
  }, a.byteLength = y, a.prototype._isBuffer = true, a.prototype.swap16 = function() {
    let t3 = this.length;
    if (t3 % 2 != 0) throw RangeError(__abx$919e9d(50));
    for (let e3 = 0; e3 < t3; e3 += 2) g(this, e3, e3 + 1);
    return this;
  }, a.prototype.swap32 = function() {
    let t3 = this.length;
    if (t3 % 4 != 0) throw RangeError(__abx$919e9d(51));
    for (let e3 = 0; e3 < t3; e3 += 4) g(this, e3, e3 + 3), g(this, e3 + 1, e3 + 2);
    return this;
  }, a.prototype.swap64 = function() {
    let t3 = this.length;
    if (t3 % 8 != 0) throw RangeError(__abx$919e9d(52));
    for (let e3 = 0; e3 < t3; e3 += 8) g(this, e3, e3 + 7), g(this, e3 + 1, e3 + 6), g(this, e3 + 2, e3 + 5), g(this, e3 + 3, e3 + 4);
    return this;
  }, a.prototype.toString = function() {
    let t3 = this.length;
    return 0 === t3 ? __abx$919e9d(1) : 0 == arguments.length ? b(this, 0, t3) : d.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(t3) {
    if (!a.isBuffer(t3)) throw TypeError(__abx$919e9d(53));
    return this === t3 || 0 === a.compare(this, t3);
  }, a.prototype.inspect = function() {
    let t3 = __abx$919e9d(1), r3 = e2.INSPECT_MAX_BYTES;
    return t3 = this.toString(__abx$919e9d(37), 0, r3).replace(/(.{2})/g, __abx$919e9d(54)).trim(), this.length > r3 && (t3 += __abx$919e9d(55)), __abx$919e9d(56) + t3 + __abx$919e9d(57);
  }, o && (a.prototype[o] = a.prototype.inspect), a.prototype.compare = function(t3, e3, r3, n3, i3) {
    if (C(t3, Uint8Array) && (t3 = a.from(t3, t3.offset, t3.byteLength)), !a.isBuffer(t3)) throw TypeError(__abx$919e9d(58) + typeof t3);
    if (void 0 === e3 && (e3 = 0), void 0 === r3 && (r3 = t3 ? t3.length : 0), void 0 === n3 && (n3 = 0), void 0 === i3 && (i3 = this.length), e3 < 0 || r3 > t3.length || n3 < 0 || i3 > this.length) throw RangeError(__abx$919e9d(59));
    if (n3 >= i3 && e3 >= r3) return 0;
    if (n3 >= i3) return -1;
    if (e3 >= r3) return 1;
    if (e3 >>>= 0, r3 >>>= 0, n3 >>>= 0, i3 >>>= 0, this === t3) return 0;
    let o2 = i3 - n3, s2 = r3 - e3, u2 = Math.min(o2, s2), l2 = this.slice(n3, i3), f2 = t3.slice(e3, r3);
    for (let t4 = 0; t4 < u2; ++t4) if (l2[t4] !== f2[t4]) {
      o2 = l2[t4], s2 = f2[t4];
      break;
    }
    return o2 < s2 ? -1 : +(s2 < o2);
  }, a.prototype.includes = function(t3, e3, r3) {
    return -1 !== this.indexOf(t3, e3, r3);
  }, a.prototype.indexOf = function(t3, e3, r3) {
    return m(this, t3, e3, r3, true);
  }, a.prototype.lastIndexOf = function(t3, e3, r3) {
    return m(this, t3, e3, r3, false);
  }, a.prototype.write = function(t3, e3, r3, n3) {
    var i3, o2, s2, a2, u2, l2, f2, c2;
    if (void 0 === e3) n3 = __abx$919e9d(19), r3 = this.length, e3 = 0;
    else if (void 0 === r3 && __abx$919e9d(17) == typeof e3) n3 = e3, r3 = this.length, e3 = 0;
    else if (isFinite(e3)) e3 >>>= 0, isFinite(r3) ? (r3 >>>= 0, void 0 === n3 && (n3 = __abx$919e9d(19))) : (n3 = r3, r3 = void 0);
    else throw Error(__abx$919e9d(60));
    let h2 = this.length - e3;
    if ((void 0 === r3 || r3 > h2) && (r3 = h2), t3.length > 0 && (r3 < 0 || e3 < 0) || e3 > this.length) throw RangeError(__abx$919e9d(61));
    n3 || (n3 = __abx$919e9d(19));
    let p2 = false;
    for (; ; ) switch (n3) {
      case __abx$919e9d(37):
        return (function(t4, e4, r4, n4) {
          let i4;
          r4 = Number(r4) || 0;
          let o3 = t4.length - r4;
          n4 ? (n4 = Number(n4)) > o3 && (n4 = o3) : n4 = o3;
          let s3 = e4.length;
          for (n4 > s3 / 2 && (n4 = s3 / 2), i4 = 0; i4 < n4; ++i4) {
            var a3;
            let n5 = parseInt(e4.substr(2 * i4, 2), 16);
            if ((a3 = n5) != a3) break;
            t4[r4 + i4] = n5;
          }
          return i4;
        })(this, t3, e3, r3);
      case __abx$919e9d(19):
      case __abx$919e9d(32):
        return i3 = e3, o2 = r3, D(F(t3, this.length - i3), this, i3, o2);
      case __abx$919e9d(29):
      case __abx$919e9d(30):
      case __abx$919e9d(31):
        return s2 = e3, a2 = r3, D((function(t4) {
          let e4 = [];
          for (let r4 = 0; r4 < t4.length; ++r4) e4.push(255 & t4.charCodeAt(r4));
          return e4;
        })(t3), this, s2, a2);
      case __abx$919e9d(38):
        return u2 = e3, l2 = r3, D(j(t3), this, u2, l2);
      case __abx$919e9d(33):
      case __abx$919e9d(34):
      case __abx$919e9d(35):
      case __abx$919e9d(36):
        return f2 = e3, c2 = r3, D((function(t4, e4) {
          let r4, n4, i4 = [];
          for (let o3 = 0; o3 < t4.length && !((e4 -= 2) < 0); ++o3) n4 = (r4 = t4.charCodeAt(o3)) >> 8, i4.push(r4 % 256), i4.push(n4);
          return i4;
        })(t3, this.length - f2), this, f2, c2);
      default:
        if (p2) throw TypeError(__abx$919e9d(20) + n3);
        n3 = (__abx$919e9d(1) + n3).toLowerCase(), p2 = true;
    }
  }, a.prototype.toJSON = function() {
    return { type: __abx$919e9d(23), data: Array.prototype.slice.call(this._arr || this, 0) };
  }, a.prototype.slice = function(t3, e3) {
    let r3 = this.length;
    t3 = ~~t3, e3 = void 0 === e3 ? r3 : ~~e3, t3 < 0 ? (t3 += r3) < 0 && (t3 = 0) : t3 > r3 && (t3 = r3), e3 < 0 ? (e3 += r3) < 0 && (e3 = 0) : e3 > r3 && (e3 = r3), e3 < t3 && (e3 = t3);
    let n3 = this.subarray(t3, e3);
    return Object.setPrototypeOf(n3, a.prototype), n3;
  }, a.prototype.readUintLE = a.prototype.readUIntLE = function(t3, e3, r3) {
    t3 >>>= 0, e3 >>>= 0, r3 || w(t3, e3, this.length);
    let n3 = this[t3], i3 = 1, o2 = 0;
    for (; ++o2 < e3 && (i3 *= 256); ) n3 += this[t3 + o2] * i3;
    return n3;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(t3, e3, r3) {
    t3 >>>= 0, e3 >>>= 0, r3 || w(t3, e3, this.length);
    let n3 = this[t3 + --e3], i3 = 1;
    for (; e3 > 0 && (i3 *= 256); ) n3 += this[t3 + --e3] * i3;
    return n3;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 1, this.length), this[t3];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 2, this.length), this[t3] | this[t3 + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 2, this.length), this[t3] << 8 | this[t3 + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 4, this.length), (this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16) + 16777216 * this[t3 + 3];
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 4, this.length), 16777216 * this[t3] + (this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3]);
  }, a.prototype.readBigUInt64LE = _(function(t3) {
    k(t3 >>>= 0, __abx$919e9d(47));
    let e3 = this[t3], r3 = this[t3 + 7];
    (void 0 === e3 || void 0 === r3) && N(t3, this.length - 8);
    let n3 = e3 + 256 * this[++t3] + 65536 * this[++t3] + 16777216 * this[++t3], i3 = this[++t3] + 256 * this[++t3] + 65536 * this[++t3] + 16777216 * r3;
    return BigInt(n3) + (BigInt(i3) << BigInt(32));
  }), a.prototype.readBigUInt64BE = _(function(t3) {
    k(t3 >>>= 0, __abx$919e9d(47));
    let e3 = this[t3], r3 = this[t3 + 7];
    (void 0 === e3 || void 0 === r3) && N(t3, this.length - 8);
    let n3 = 16777216 * e3 + 65536 * this[++t3] + 256 * this[++t3] + this[++t3], i3 = 16777216 * this[++t3] + 65536 * this[++t3] + 256 * this[++t3] + r3;
    return (BigInt(n3) << BigInt(32)) + BigInt(i3);
  }), a.prototype.readIntLE = function(t3, e3, r3) {
    t3 >>>= 0, e3 >>>= 0, r3 || w(t3, e3, this.length);
    let n3 = this[t3], i3 = 1, o2 = 0;
    for (; ++o2 < e3 && (i3 *= 256); ) n3 += this[t3 + o2] * i3;
    return n3 >= (i3 *= 128) && (n3 -= Math.pow(2, 8 * e3)), n3;
  }, a.prototype.readIntBE = function(t3, e3, r3) {
    t3 >>>= 0, e3 >>>= 0, r3 || w(t3, e3, this.length);
    let n3 = e3, i3 = 1, o2 = this[t3 + --n3];
    for (; n3 > 0 && (i3 *= 256); ) o2 += this[t3 + --n3] * i3;
    return o2 >= (i3 *= 128) && (o2 -= Math.pow(2, 8 * e3)), o2;
  }, a.prototype.readInt8 = function(t3, e3) {
    return (t3 >>>= 0, e3 || w(t3, 1, this.length), 128 & this[t3]) ? -((255 - this[t3] + 1) * 1) : this[t3];
  }, a.prototype.readInt16LE = function(t3, e3) {
    t3 >>>= 0, e3 || w(t3, 2, this.length);
    let r3 = this[t3] | this[t3 + 1] << 8;
    return 32768 & r3 ? 4294901760 | r3 : r3;
  }, a.prototype.readInt16BE = function(t3, e3) {
    t3 >>>= 0, e3 || w(t3, 2, this.length);
    let r3 = this[t3 + 1] | this[t3] << 8;
    return 32768 & r3 ? 4294901760 | r3 : r3;
  }, a.prototype.readInt32LE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 4, this.length), this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16 | this[t3 + 3] << 24;
  }, a.prototype.readInt32BE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 4, this.length), this[t3] << 24 | this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3];
  }, a.prototype.readBigInt64LE = _(function(t3) {
    k(t3 >>>= 0, __abx$919e9d(47));
    let e3 = this[t3], r3 = this[t3 + 7];
    return (void 0 === e3 || void 0 === r3) && N(t3, this.length - 8), (BigInt(this[t3 + 4] + 256 * this[t3 + 5] + 65536 * this[t3 + 6] + (r3 << 24)) << BigInt(32)) + BigInt(e3 + 256 * this[++t3] + 65536 * this[++t3] + 16777216 * this[++t3]);
  }), a.prototype.readBigInt64BE = _(function(t3) {
    k(t3 >>>= 0, __abx$919e9d(47));
    let e3 = this[t3], r3 = this[t3 + 7];
    return (void 0 === e3 || void 0 === r3) && N(t3, this.length - 8), (BigInt((e3 << 24) + 65536 * this[++t3] + 256 * this[++t3] + this[++t3]) << BigInt(32)) + BigInt(16777216 * this[++t3] + 65536 * this[++t3] + 256 * this[++t3] + r3);
  }), a.prototype.readFloatLE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 4, this.length), i2.read(this, t3, true, 23, 4);
  }, a.prototype.readFloatBE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 4, this.length), i2.read(this, t3, false, 23, 4);
  }, a.prototype.readDoubleLE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 8, this.length), i2.read(this, t3, true, 52, 8);
  }, a.prototype.readDoubleBE = function(t3, e3) {
    return t3 >>>= 0, e3 || w(t3, 8, this.length), i2.read(this, t3, false, 52, 8);
  }, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(t3, e3, r3, n3) {
    if (t3 *= 1, e3 >>>= 0, r3 >>>= 0, !n3) {
      let n4 = Math.pow(2, 8 * r3) - 1;
      E(this, t3, e3, r3, n4, 0);
    }
    let i3 = 1, o2 = 0;
    for (this[e3] = 255 & t3; ++o2 < r3 && (i3 *= 256); ) this[e3 + o2] = t3 / i3 & 255;
    return e3 + r3;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(t3, e3, r3, n3) {
    if (t3 *= 1, e3 >>>= 0, r3 >>>= 0, !n3) {
      let n4 = Math.pow(2, 8 * r3) - 1;
      E(this, t3, e3, r3, n4, 0);
    }
    let i3 = r3 - 1, o2 = 1;
    for (this[e3 + i3] = 255 & t3; --i3 >= 0 && (o2 *= 256); ) this[e3 + i3] = t3 / o2 & 255;
    return e3 + r3;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 1, 255, 0), this[e3] = 255 & t3, e3 + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 2, 65535, 0), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, e3 + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 2, 65535, 0), this[e3] = t3 >>> 8, this[e3 + 1] = 255 & t3, e3 + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 4, 4294967295, 0), this[e3 + 3] = t3 >>> 24, this[e3 + 2] = t3 >>> 16, this[e3 + 1] = t3 >>> 8, this[e3] = 255 & t3, e3 + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 4, 4294967295, 0), this[e3] = t3 >>> 24, this[e3 + 1] = t3 >>> 16, this[e3 + 2] = t3 >>> 8, this[e3 + 3] = 255 & t3, e3 + 4;
  }, a.prototype.writeBigUInt64LE = _(function(t3, e3 = 0) {
    return S(this, t3, e3, BigInt(0), BigInt(__abx$919e9d(62)));
  }), a.prototype.writeBigUInt64BE = _(function(t3, e3 = 0) {
    return O(this, t3, e3, BigInt(0), BigInt(__abx$919e9d(62)));
  }), a.prototype.writeIntLE = function(t3, e3, r3, n3) {
    if (t3 *= 1, e3 >>>= 0, !n3) {
      let n4 = Math.pow(2, 8 * r3 - 1);
      E(this, t3, e3, r3, n4 - 1, -n4);
    }
    let i3 = 0, o2 = 1, s2 = 0;
    for (this[e3] = 255 & t3; ++i3 < r3 && (o2 *= 256); ) t3 < 0 && 0 === s2 && 0 !== this[e3 + i3 - 1] && (s2 = 1), this[e3 + i3] = (t3 / o2 | 0) - s2 & 255;
    return e3 + r3;
  }, a.prototype.writeIntBE = function(t3, e3, r3, n3) {
    if (t3 *= 1, e3 >>>= 0, !n3) {
      let n4 = Math.pow(2, 8 * r3 - 1);
      E(this, t3, e3, r3, n4 - 1, -n4);
    }
    let i3 = r3 - 1, o2 = 1, s2 = 0;
    for (this[e3 + i3] = 255 & t3; --i3 >= 0 && (o2 *= 256); ) t3 < 0 && 0 === s2 && 0 !== this[e3 + i3 + 1] && (s2 = 1), this[e3 + i3] = (t3 / o2 | 0) - s2 & 255;
    return e3 + r3;
  }, a.prototype.writeInt8 = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 1, 127, -128), t3 < 0 && (t3 = 255 + t3 + 1), this[e3] = 255 & t3, e3 + 1;
  }, a.prototype.writeInt16LE = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 2, 32767, -32768), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, e3 + 2;
  }, a.prototype.writeInt16BE = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 2, 32767, -32768), this[e3] = t3 >>> 8, this[e3 + 1] = 255 & t3, e3 + 2;
  }, a.prototype.writeInt32LE = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 4, 2147483647, -2147483648), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, this[e3 + 2] = t3 >>> 16, this[e3 + 3] = t3 >>> 24, e3 + 4;
  }, a.prototype.writeInt32BE = function(t3, e3, r3) {
    return t3 *= 1, e3 >>>= 0, r3 || E(this, t3, e3, 4, 2147483647, -2147483648), t3 < 0 && (t3 = 4294967295 + t3 + 1), this[e3] = t3 >>> 24, this[e3 + 1] = t3 >>> 16, this[e3 + 2] = t3 >>> 8, this[e3 + 3] = 255 & t3, e3 + 4;
  }, a.prototype.writeBigInt64LE = _(function(t3, e3 = 0) {
    return S(this, t3, e3, -BigInt(__abx$919e9d(63)), BigInt(__abx$919e9d(64)));
  }), a.prototype.writeBigInt64BE = _(function(t3, e3 = 0) {
    return O(this, t3, e3, -BigInt(__abx$919e9d(63)), BigInt(__abx$919e9d(64)));
  }), a.prototype.writeFloatLE = function(t3, e3, r3) {
    return I(this, t3, e3, true, r3);
  }, a.prototype.writeFloatBE = function(t3, e3, r3) {
    return I(this, t3, e3, false, r3);
  }, a.prototype.writeDoubleLE = function(t3, e3, r3) {
    return A(this, t3, e3, true, r3);
  }, a.prototype.writeDoubleBE = function(t3, e3, r3) {
    return A(this, t3, e3, false, r3);
  }, a.prototype.copy = function(t3, e3, r3, n3) {
    if (!a.isBuffer(t3)) throw TypeError(__abx$919e9d(65));
    if (r3 || (r3 = 0), n3 || 0 === n3 || (n3 = this.length), e3 >= t3.length && (e3 = t3.length), e3 || (e3 = 0), n3 > 0 && n3 < r3 && (n3 = r3), n3 === r3 || 0 === t3.length || 0 === this.length) return 0;
    if (e3 < 0) throw RangeError(__abx$919e9d(66));
    if (r3 < 0 || r3 >= this.length) throw RangeError(__abx$919e9d(44));
    if (n3 < 0) throw RangeError(__abx$919e9d(67));
    n3 > this.length && (n3 = this.length), t3.length - e3 < n3 - r3 && (n3 = t3.length - e3 + r3);
    let i3 = n3 - r3;
    return this === t3 && __abx$919e9d(12) == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e3, r3, n3) : Uint8Array.prototype.set.call(t3, this.subarray(r3, n3), e3), i3;
  }, a.prototype.fill = function(t3, e3, r3, n3) {
    let i3;
    if (__abx$919e9d(17) == typeof t3) {
      if (__abx$919e9d(17) == typeof e3 ? (n3 = e3, e3 = 0, r3 = this.length) : __abx$919e9d(17) == typeof r3 && (n3 = r3, r3 = this.length), void 0 !== n3 && __abx$919e9d(17) != typeof n3) throw TypeError(__abx$919e9d(68));
      if (__abx$919e9d(17) == typeof n3 && !a.isEncoding(n3)) throw TypeError(__abx$919e9d(20) + n3);
      if (1 === t3.length) {
        let e4 = t3.charCodeAt(0);
        (__abx$919e9d(19) === n3 && e4 < 128 || __abx$919e9d(30) === n3) && (t3 = e4);
      }
    } else __abx$919e9d(16) == typeof t3 ? t3 &= 255 : __abx$919e9d(69) == typeof t3 && (t3 = Number(t3));
    if (e3 < 0 || this.length < e3 || this.length < r3) throw RangeError(__abx$919e9d(70));
    if (r3 <= e3) return this;
    if (e3 >>>= 0, r3 = void 0 === r3 ? this.length : r3 >>> 0, t3 || (t3 = 0), __abx$919e9d(16) == typeof t3) for (i3 = e3; i3 < r3; ++i3) this[i3] = t3;
    else {
      let o2 = a.isBuffer(t3) ? t3 : a.from(t3, n3), s2 = o2.length;
      if (0 === s2) throw TypeError(__abx$919e9d(14) + t3 + __abx$919e9d(71));
      for (i3 = 0; i3 < r3 - e3; ++i3) this[i3 + e3] = o2[i3 % s2];
    }
    return this;
  };
  let R = {};
  function T(t3, e3, r3) {
    R[t3] = class extends r3 {
      constructor() {
        super(), Object.defineProperty(this, __abx$919e9d(72), { value: e3.apply(this, arguments), writable: true, configurable: true }), this.name = (__abx$919e9d(1)+String(this.name)+__abx$919e9d(73)+String(t3)+__abx$919e9d(74)), this.stack, delete this.name;
      }
      get code() {
        return t3;
      }
      set code(t4) {
        Object.defineProperty(this, __abx$919e9d(75), { configurable: true, enumerable: true, value: t4, writable: true });
      }
      toString() {
        return (__abx$919e9d(1)+String(this.name)+__abx$919e9d(73)+String(t3)+__abx$919e9d(76)+String(this.message)+__abx$919e9d(1));
      }
    };
  }
  function P(t3) {
    let e3 = __abx$919e9d(1), r3 = t3.length, n3 = +(__abx$919e9d(77) === t3[0]);
    for (; r3 >= n3 + 4; r3 -= 3) e3 = (__abx$919e9d(78)+String(t3.slice(r3 - 3, r3))+__abx$919e9d(1)+String(e3)+__abx$919e9d(1));
    return (__abx$919e9d(1)+String(t3.slice(0, r3))+__abx$919e9d(1)+String(e3)+__abx$919e9d(1));
  }
  function B(t3, e3, r3, n3, i3, o2) {
    if (t3 > r3 || t3 < e3) {
      let n4, i4 = __abx$919e9d(79) == typeof e3 ? __abx$919e9d(80) : __abx$919e9d(1);
      throw n4 = 0 === e3 || e3 === BigInt(0) ? (__abx$919e9d(81)+String(i4)+__abx$919e9d(82)+String(i4)+__abx$919e9d(83)+String((o2 + 1) * 8)+__abx$919e9d(1)+String(i4)+__abx$919e9d(1)) : (__abx$919e9d(84)+String(i4)+__abx$919e9d(83)+String((o2 + 1) * 8 - 1)+__abx$919e9d(1)+String(i4)+__abx$919e9d(85)+String((o2 + 1) * 8 - 1)+__abx$919e9d(1)+String(i4)+__abx$919e9d(1)), new R.ERR_OUT_OF_RANGE(__abx$919e9d(86), n4, t3);
    }
    k(i3, __abx$919e9d(47)), (void 0 === n3[i3] || void 0 === n3[i3 + o2]) && N(i3, n3.length - (o2 + 1));
  }
  function k(t3, e3) {
    if (__abx$919e9d(16) != typeof t3) throw new R.ERR_INVALID_ARG_TYPE(e3, __abx$919e9d(16), t3);
  }
  function N(t3, e3, r3) {
    if (Math.floor(t3) !== t3) throw k(t3, r3), new R.ERR_OUT_OF_RANGE(__abx$919e9d(47), __abx$919e9d(87), t3);
    if (e3 < 0) throw new R.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new R.ERR_OUT_OF_RANGE(__abx$919e9d(47), (__abx$919e9d(88)+String(0)+__abx$919e9d(89)+String(e3)+__abx$919e9d(1)), t3);
  }
  T(__abx$919e9d(90), function(t3) {
    return t3 ? (__abx$919e9d(1)+String(t3)+__abx$919e9d(91)) : __abx$919e9d(92);
  }, RangeError), T(__abx$919e9d(93), function(t3, e3) {
    return (__abx$919e9d(94)+String(t3)+__abx$919e9d(95)+String(typeof e3)+__abx$919e9d(1));
  }, TypeError), T(__abx$919e9d(96), function(t3, e3, r3) {
    let n3 = (__abx$919e9d(97)+String(t3)+__abx$919e9d(98)), i3 = r3;
    return Number.isInteger(r3) && Math.abs(r3) > 4294967296 ? i3 = P(String(r3)) : __abx$919e9d(79) == typeof r3 && (i3 = String(r3), (r3 > BigInt(2) ** BigInt(32) || r3 < -(BigInt(2) ** BigInt(32))) && (i3 = P(i3)), i3 += __abx$919e9d(80)), n3 += (__abx$919e9d(99)+String(e3)+__abx$919e9d(100)+String(i3)+__abx$919e9d(1));
  }, RangeError);
  let M = /[^+/0-9A-Za-z-_]/g;
  function F(t3, e3) {
    let r3;
    e3 = e3 || 1 / 0;
    let n3 = t3.length, i3 = null, o2 = [];
    for (let s2 = 0; s2 < n3; ++s2) {
      if ((r3 = t3.charCodeAt(s2)) > 55295 && r3 < 57344) {
        if (!i3) {
          if (r3 > 56319 || s2 + 1 === n3) {
            (e3 -= 3) > -1 && o2.push(239, 191, 189);
            continue;
          }
          i3 = r3;
          continue;
        }
        if (r3 < 56320) {
          (e3 -= 3) > -1 && o2.push(239, 191, 189), i3 = r3;
          continue;
        }
        r3 = (i3 - 55296 << 10 | r3 - 56320) + 65536;
      } else i3 && (e3 -= 3) > -1 && o2.push(239, 191, 189);
      if (i3 = null, r3 < 128) {
        if ((e3 -= 1) < 0) break;
        o2.push(r3);
      } else if (r3 < 2048) {
        if ((e3 -= 2) < 0) break;
        o2.push(r3 >> 6 | 192, 63 & r3 | 128);
      } else if (r3 < 65536) {
        if ((e3 -= 3) < 0) break;
        o2.push(r3 >> 12 | 224, r3 >> 6 & 63 | 128, 63 & r3 | 128);
      } else if (r3 < 1114112) {
        if ((e3 -= 4) < 0) break;
        o2.push(r3 >> 18 | 240, r3 >> 12 & 63 | 128, r3 >> 6 & 63 | 128, 63 & r3 | 128);
      } else throw Error(__abx$919e9d(101));
    }
    return o2;
  }
  function j(t3) {
    return n2.toByteArray((function(t4) {
      if ((t4 = (t4 = t4.split(__abx$919e9d(8))[0]).trim().replace(M, __abx$919e9d(1))).length < 2) return __abx$919e9d(1);
      for (; t4.length % 4 != 0; ) t4 += __abx$919e9d(8);
      return t4;
    })(t3));
  }
  function D(t3, e3, r3, n3) {
    let i3;
    for (i3 = 0; i3 < n3 && !(i3 + r3 >= e3.length) && !(i3 >= t3.length); ++i3) e3[i3 + r3] = t3[i3];
    return i3;
  }
  function C(t3, e3) {
    return t3 instanceof e3 || null != t3 && null != t3.constructor && null != t3.constructor.name && t3.constructor.name === e3.name;
  }
  let U = (function() {
    let t3 = __abx$919e9d(102), e3 = Array(256);
    for (let r3 = 0; r3 < 16; ++r3) {
      let n3 = 16 * r3;
      for (let i3 = 0; i3 < 16; ++i3) e3[n3 + i3] = t3[r3] + t3[i3];
    }
    return e3;
  })();
  function _(t3) {
    return __abx$919e9d(9) < typeof BigInt ? L : t3;
  }
  function L() {
    throw Error(__abx$919e9d(103));
  }
}, 947(t2, e2) {
  e2.read = function(t3, e3, r2, n2, i2) {
    var o, s, a = 8 * i2 - n2 - 1, u = (1 << a) - 1, l = u >> 1, f = -7, c = r2 ? i2 - 1 : 0, h = r2 ? -1 : 1, p = t3[e3 + c];
    for (c += h, o = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; o = 256 * o + t3[e3 + c], c += h, f -= 8) ;
    for (s = o & (1 << -f) - 1, o >>= -f, f += n2; f > 0; s = 256 * s + t3[e3 + c], c += h, f -= 8) ;
    if (0 === o) o = 1 - l;
    else {
      if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
      s += Math.pow(2, n2), o -= l;
    }
    return (p ? -1 : 1) * s * Math.pow(2, o - n2);
  }, e2.write = function(t3, e3, r2, n2, i2, o) {
    var s, a, u, l = 8 * o - i2 - 1, f = (1 << l) - 1, c = f >> 1, h = 5960464477539062e-23 * (23 === i2), p = n2 ? 0 : o - 1, y = n2 ? 1 : -1, d = +(e3 < 0 || 0 === e3 && 1 / e3 < 0);
    for (isNaN(e3 = Math.abs(e3)) || e3 === 1 / 0 ? (a = +!!isNaN(e3), s = f) : (s = Math.floor(Math.log(e3) / Math.LN2), e3 * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + c >= 1 ? e3 += h / u : e3 += h * Math.pow(2, 1 - c), e3 * u >= 2 && (s++, u /= 2), s + c >= f ? (a = 0, s = f) : s + c >= 1 ? (a = (e3 * u - 1) * Math.pow(2, i2), s += c) : (a = e3 * Math.pow(2, c - 1) * Math.pow(2, i2), s = 0)); i2 >= 8; t3[r2 + p] = 255 & a, p += y, a /= 256, i2 -= 8) ;
    for (s = s << i2 | a, l += i2; l > 0; t3[r2 + p] = 255 & s, p += y, s /= 256, l -= 8) ;
    t3[r2 + p - y] |= 128 * d;
  };
} }, e = {};
function r(n2) {
  var i2 = e[n2];
  if (void 0 !== i2) return i2.exports;
  var o = e[n2] = { exports: {} };
  return t[n2](o, o.exports, r), o.exports;
}
r.d = (t2, e2) => {
  for (var n2 in e2) r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
}, r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
var n = {};
(() => {
  var _t, _e, _r, _n, _i, _o, _s, _a, _u, _l, _f, _to_instances, c_fn, _to_static, h_fn, y_fn, d_fn, p_fn, g_fn, m_fn, v_fn, b_fn, w_fn, E_fn, O_fn, S_fn, _tx_instances, x_fn, A_fn, I_fn;
  r.d(n, { k: () => tH });
  var t2, e2, i2 = r(686);
  function o(t3) {
    for (let e3 in t3) this[e3] = t3[e3];
  }
  [__abx$919e9d(104), __abx$919e9d(105), __abx$919e9d(106), __abx$919e9d(107), __abx$919e9d(108), __abx$919e9d(109), __abx$919e9d(110), __abx$919e9d(12), __abx$919e9d(111)].forEach(function(t3) {
    o.prototype[t3] = null, o.prototype[__abx$919e9d(112) + t3[0].toUpperCase() + t3.substr(1)] = function() {
      return this[t3];
    };
  }), [__abx$919e9d(113), __abx$919e9d(114), __abx$919e9d(115), __abx$919e9d(116)].forEach(function(t3) {
    o.prototype[t3] = false, o.prototype[__abx$919e9d(117) + t3[0].toUpperCase() + t3.substr(1)] = function() {
      return this[t3];
    };
  });
  var s = ((t2 = {}).EACCES = __abx$919e9d(118), t2.EBADF = __abx$919e9d(119), t2.EBUSY = __abx$919e9d(120), t2.EINVAL = __abx$919e9d(121), t2.ENOTDIR = __abx$919e9d(122), t2.EISDIR = __abx$919e9d(123), t2.ENOENT = __abx$919e9d(124), t2.EEXIST = __abx$919e9d(125), t2.EPERM = __abx$919e9d(126), t2.ELOOP = __abx$919e9d(127), t2.ENOTEMPTY = __abx$919e9d(128), t2.EIO = __abx$919e9d(129), t2.ENOSPC = __abx$919e9d(130), t2.UNKNOWN = __abx$919e9d(131), t2), a = { EACCES: 13, EBADF: 9, EBUSY: 16, EINVAL: 22, ENOTDIR: 20, EISDIR: 21, ENOENT: 34, EEXIST: 17, EPERM: 1, ELOOP: 40, ENOTEMPTY: 39, EIO: 5, ENOSPC: 28, UNKNOWN: -1 };
  function u(t3, e3, r2) {
    var n2 = (!(c2 = Error()).stack ? [] : c2.stack.split(__abx$919e9d(132)).slice(1).map(function(t4) {
      if (t4.match(/^\s*[-]{4,}$/)) return new o({ fileName: t4, lineNumber: null, functionName: null, typeName: null, methodName: null, columnNumber: null, native: null });
      let e4 = t4.match(/at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
      if (!e4) return;
      let r3 = null, n3 = null, i4 = null, s2 = null, a2 = null, u3 = __abx$919e9d(115) === e4[5];
      if (e4[1]) {
        let t5 = (i4 = e4[1]).lastIndexOf(__abx$919e9d(133));
        if (__abx$919e9d(133) == i4[t5 - 1] && t5--, t5 > 0) {
          r3 = i4.substr(0, t5), n3 = i4.substr(t5 + 1);
          let e5 = r3.indexOf(__abx$919e9d(134));
          e5 > 0 && (i4 = i4.substr(e5 + 1), r3 = r3.substr(0, e5));
        }
      }
      return n3 && (s2 = r3, a2 = n3), __abx$919e9d(135) === n3 && (a2 = null, i4 = null), new o({ fileName: e4[2] || null, lineNumber: parseInt(e4[3], 10) || null, functionName: i4, typeName: s2, methodName: a2, columnNumber: parseInt(e4[4], 10) || null, native: u3 });
    }).filter(function(t4) {
      return !!t4;
    })).slice(1), i3 = [__abx$919e9d(136).concat(s[t3])], u2 = true, l2 = false, f2 = void 0;
    try {
      for (var c2, h2, p2 = n2[Symbol.iterator](); !(u2 = (h2 = p2.next()).done); u2 = true) {
        var y2, d2, g2, m2, v2, b2 = h2.value, w2 = (null == (y2 = b2.getFunctionName) ? void 0 : y2.call(b2)) || (null == (d2 = b2.getMethodName) ? void 0 : d2.call(b2)) || __abx$919e9d(135), E2 = null == (g2 = b2.getFileName) ? void 0 : g2.call(b2), S2 = null == (m2 = b2.getLineNumber) ? void 0 : m2.call(b2), O2 = null == (v2 = b2.getColumnNumber) ? void 0 : v2.call(b2);
        E2 ? i3.push(__abx$919e9d(137).concat(w2, __abx$919e9d(138)).concat(E2, __abx$919e9d(139)).concat(S2, __abx$919e9d(139)).concat(O2, __abx$919e9d(140))) : i3.push(__abx$919e9d(137).concat(w2));
      }
    } catch (t4) {
      l2 = true, f2 = t4;
    } finally {
      try {
        u2 || null == p2.return || p2.return();
      } finally {
        if (l2) throw f2;
      }
    }
    return __abx$919e9d(141) === t3 && r2 ? { name: __abx$919e9d(141), code: r2, errno: -1, message: s[t3], path: e3, stack: i3.join(__abx$919e9d(132)) } : { name: t3, code: t3, errno: a[t3], message: s[t3], path: e3, stack: i3.join(__abx$919e9d(132)) };
  }
  function l(t3, e3) {
    if (t3 && void 0 === t3.name) {
      var r2 = t3;
      (t3 = {}).name = String(r2);
    }
    if (t3 && __abx$919e9d(142) === t3.name) return u(__abx$919e9d(143), e3);
    if (t3 && __abx$919e9d(144) === t3.name) return u(__abx$919e9d(145), e3);
    if (t3 && __abx$919e9d(146) === t3.name) return u(__abx$919e9d(147), e3);
    if (t3 && __abx$919e9d(148) === t3.name) return u(__abx$919e9d(149), e3);
    if (t3 && __abx$919e9d(150) === t3.name) return u(__abx$919e9d(151), e3);
    else if (t3 && __abx$919e9d(152) === t3.name) return u(__abx$919e9d(153), e3);
    else if (t3 && __abx$919e9d(154) === t3.name) return u(__abx$919e9d(155), e3);
    else if (t3 && __abx$919e9d(156) === t3.name) return u(__abx$919e9d(157), e3);
    else if (t3 && __abx$919e9d(158) === t3.name) return u(__abx$919e9d(153), e3);
    else if (t3 && __abx$919e9d(159) === t3.name) return u(__abx$919e9d(160), e3);
    else return u(__abx$919e9d(141), e3, t3 && t3.message);
  }
  var f = Object.keys(s).reduce(function(t3, e3) {
    var r2 = function(t4, r3) {
      return u(e3, t4, r3);
    };
    t3[e3] = r2;
    var n2 = a[e3];
    return __abx$919e9d(16) == typeof n2 && (t3[n2] = r2), t3;
  }, {});
  function c(t3, e3) {
    (null == e3 || e3 > t3.length) && (e3 = t3.length);
    for (var r2 = 0, n2 = Array(e3); r2 < e3; r2++) n2[r2] = t3[r2];
    return n2;
  }
  function h(t3, e3, r2) {
    return e3 in t3 ? Object.defineProperty(t3, e3, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e3] = r2, t3;
  }
  function p(t3) {
    return (function(t4) {
      if (Array.isArray(t4)) return c(t4);
    })(t3) || (function(t4) {
      if (__abx$919e9d(9) > typeof Symbol && null != t4[Symbol.iterator] || null != t4[__abx$919e9d(161)]) return Array.from(t4);
    })(t3) || (function(t4) {
      if (t4) {
        if (__abx$919e9d(17) == typeof t4) return c(t4, void 0);
        var e3 = Object.prototype.toString.call(t4).slice(8, -1);
        if (__abx$919e9d(162) === e3 && t4.constructor && (e3 = t4.constructor.name), __abx$919e9d(163) === e3 || __abx$919e9d(164) === e3) return Array.from(e3);
        if (__abx$919e9d(165) === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3)) return c(t4, void 0);
      }
    })(t3) || (function() {
      throw TypeError(__abx$919e9d(166));
    })();
  }
  var y = (function() {
    var t3;
    function e3() {
      if (!(this instanceof e3)) throw TypeError(__abx$919e9d(167));
      h(this, __abx$919e9d(168), __abx$919e9d(169)), h(this, __abx$919e9d(170), __abx$919e9d(139));
    }
    return t3 = [{ key: __abx$919e9d(171), value: function(t4, e4) {
      if (e4 && (this.sep = e4), !t4) return this.sep;
      t4.startsWith(__abx$919e9d(169)) || (t4 = this.sep + __abx$919e9d(169) + t4);
      var r2 = t4.split(__abx$919e9d(169)).filter(Boolean), n2 = [], i3 = true, o2 = false, s2 = void 0;
      try {
        for (var a2, u2 = r2[Symbol.iterator](); !(i3 = (a2 = u2.next()).done); i3 = true) {
          var l2 = a2.value;
          __abx$919e9d(133) !== l2 && __abx$919e9d(1) !== l2 && (__abx$919e9d(172) === l2 ? n2.length > 0 && n2.pop() : n2.push(l2));
        }
      } catch (t5) {
        o2 = true, s2 = t5;
      } finally {
        try {
          i3 || null == u2.return || u2.return();
        } finally {
          if (o2) throw s2;
        }
      }
      var f2 = __abx$919e9d(169) + n2.join(__abx$919e9d(169));
      return __abx$919e9d(173) === f2 && (f2 = __abx$919e9d(169)), f2;
    } }, { key: __abx$919e9d(174), value: function(t4, e4) {
      var r2 = t4.split(__abx$919e9d(169)).pop() || __abx$919e9d(1);
      return e4 && r2.endsWith(e4) ? r2.slice(0, -e4.length) || __abx$919e9d(169) : __abx$919e9d(1) === r2 ? __abx$919e9d(169) : r2;
    } }, { key: __abx$919e9d(175), value: function(t4) {
      var e4 = this.normalizePath(t4);
      return __abx$919e9d(169) === e4 ? __abx$919e9d(169) : this.removeTrailing(e4);
    } }, { key: __abx$919e9d(176), value: function(t4) {
      return -1 !== (__abx$919e9d(1) + t4).indexOf(__abx$919e9d(177));
    } }, { key: __abx$919e9d(178), value: function(t4) {
      return t4.replace(/\/*$/, __abx$919e9d(169));
    } }, { key: __abx$919e9d(179), value: function(t4) {
      return __abx$919e9d(1) === (t4 = t4.replace(/\/*$/, __abx$919e9d(1))) ? __abx$919e9d(169) : t4;
    } }, { key: __abx$919e9d(180), value: function() {
      for (var t4 = arguments.length, e4 = Array(t4), r2 = 0; r2 < t4; r2++) e4[r2] = arguments[r2];
      return e4.filter(Boolean).map(function(t5, e5) {
        return 0 === e5 ? t5.replace(/\/+$/, __abx$919e9d(1)) : t5.replace(/^\/+|\/+$/g, __abx$919e9d(1));
      }).join(this.sep);
    } }, { key: __abx$919e9d(181), value: function(t4) {
      if (!t4 || __abx$919e9d(169) === t4) return __abx$919e9d(169);
      var e4 = t4.split(__abx$919e9d(169)).filter(Boolean);
      return e4.pop(), __abx$919e9d(169) + e4.join(__abx$919e9d(169));
    } }, { key: __abx$919e9d(182), value: function(t4) {
      var e4 = t4.split(__abx$919e9d(169)).pop() || __abx$919e9d(1), r2 = e4.lastIndexOf(__abx$919e9d(133));
      return r2 > 0 ? e4.slice(r2) : __abx$919e9d(1);
    } }, { key: __abx$919e9d(183), value: function(t4) {
      return t4.startsWith(__abx$919e9d(169));
    } }, { key: __abx$919e9d(184), value: function(t4, e4) {
      for (var r2 = this.normalizePath(t4).split(__abx$919e9d(169)).filter(Boolean), n2 = this.normalizePath(e4).split(__abx$919e9d(169)).filter(Boolean), i3 = 0; i3 < r2.length && i3 < n2.length && r2[i3] === n2[i3]; ) i3++;
      var o2 = r2.slice(i3).map(function() {
        return __abx$919e9d(172);
      }), s2 = n2.slice(i3);
      return p(o2).concat(p(s2)).join(__abx$919e9d(169)) || __abx$919e9d(133);
    } }, { key: __abx$919e9d(185), value: function() {
      for (var t4 = arguments.length, e4 = Array(t4), r2 = 0; r2 < t4; r2++) e4[r2] = arguments[r2];
      var n2 = __abx$919e9d(1), i3 = true, o2 = false, s2 = void 0;
      try {
        for (var a2, u2 = e4[Symbol.iterator](); !(i3 = (a2 = u2.next()).done); i3 = true) {
          var l2 = a2.value;
          n2 = this.isAbsolute(l2) ? l2 : this.join(n2, l2);
        }
      } catch (t5) {
        o2 = true, s2 = t5;
      } finally {
        try {
          i3 || null == u2.return || u2.return();
        } finally {
          if (o2) throw s2;
        }
      }
      return this.normalize(n2);
    } }], (function(t4, e4) {
      for (var r2 = 0; r2 < e4.length; r2++) {
        var n2 = e4[r2];
        n2.enumerable = n2.enumerable || false, n2.configurable = true, __abx$919e9d(86) in n2 && (n2.writable = true), Object.defineProperty(t4, n2.key, n2);
      }
    })(e3.prototype, t3), e3;
  })();
  let d = (t3, e3, r2) => {
    let n2 = t3 instanceof RegExp ? g(t3, r2) : t3, i3 = e3 instanceof RegExp ? g(e3, r2) : e3, o2 = null !== n2 && null != i3 && m(n2, i3, r2);
    return o2 && { start: o2[0], end: o2[1], pre: r2.slice(0, o2[0]), body: r2.slice(o2[0] + n2.length, o2[1]), post: r2.slice(o2[1] + i3.length) };
  }, g = (t3, e3) => {
    let r2 = e3.match(t3);
    return r2 ? r2[0] : null;
  }, m = (t3, e3, r2) => {
    let n2, i3, o2, s2, a2, u2 = r2.indexOf(t3), l2 = r2.indexOf(e3, u2 + 1), f2 = u2;
    if (u2 >= 0 && l2 > 0) {
      if (t3 === e3) return [u2, l2];
      for (n2 = [], o2 = r2.length; f2 >= 0 && !a2; ) {
        if (f2 === u2) n2.push(f2), u2 = r2.indexOf(t3, f2 + 1);
        else if (1 === n2.length) {
          let t4 = n2.pop();
          void 0 !== t4 && (a2 = [t4, l2]);
        } else void 0 !== (i3 = n2.pop()) && i3 < o2 && (o2 = i3, s2 = l2), l2 = r2.indexOf(e3, f2 + 1);
        f2 = u2 < l2 && u2 >= 0 ? u2 : l2;
      }
      n2.length && void 0 !== s2 && (a2 = [o2, s2]);
    }
    return a2;
  }, v = __abx$919e9d(186) + Math.random() + __abx$919e9d(177), b = __abx$919e9d(187) + Math.random() + __abx$919e9d(177), w = __abx$919e9d(188) + Math.random() + __abx$919e9d(177), E = __abx$919e9d(189) + Math.random() + __abx$919e9d(177), S = __abx$919e9d(190) + Math.random() + __abx$919e9d(177), O = RegExp(v, __abx$919e9d(191)), x = RegExp(b, __abx$919e9d(191)), I = RegExp(w, __abx$919e9d(191)), A = RegExp(E, __abx$919e9d(191)), R = RegExp(S, __abx$919e9d(191)), T = /\\\\/g, P = /\\{/g, B = /\\}/g, k = /\\,/g, N = /\\\./g;
  function M(t3) {
    return isNaN(t3) ? t3.charCodeAt(0) : parseInt(t3, 10);
  }
  function F(t3) {
    return t3.replace(O, __abx$919e9d(192)).replace(x, __abx$919e9d(193)).replace(I, __abx$919e9d(194)).replace(A, __abx$919e9d(195)).replace(R, __abx$919e9d(133));
  }
  function j(t3) {
    return __abx$919e9d(193) + t3 + __abx$919e9d(194);
  }
  function D(t3) {
    return /^-?0\d/.test(t3);
  }
  function C(t3, e3) {
    return t3 <= e3;
  }
  function U(t3, e3) {
    return t3 >= e3;
  }
  let _ = (t3) => {
    if (__abx$919e9d(17) != typeof t3) throw TypeError(__abx$919e9d(196));
    if (t3.length > 65536) throw TypeError(__abx$919e9d(197));
  }, L = { [__abx$919e9d(198)]: [__abx$919e9d(199), true], [__abx$919e9d(200)]: [__abx$919e9d(201), true], [__abx$919e9d(202)]: [__abx$919e9d(203), false], [__abx$919e9d(204)]: [__abx$919e9d(205), true], [__abx$919e9d(206)]: [__abx$919e9d(207), true], [__abx$919e9d(208)]: [__abx$919e9d(209), true], [__abx$919e9d(210)]: [__abx$919e9d(211), true, true], [__abx$919e9d(212)]: [__abx$919e9d(213), true], [__abx$919e9d(214)]: [__abx$919e9d(215), true], [__abx$919e9d(216)]: [__abx$919e9d(217), true], [__abx$919e9d(218)]: [__abx$919e9d(219), true], [__abx$919e9d(220)]: [__abx$919e9d(221), true], [__abx$919e9d(222)]: [__abx$919e9d(223), true], [__abx$919e9d(224)]: [__abx$919e9d(225), false] }, $ = (t3) => t3.replace(/[[\]\\-]/g, __abx$919e9d(226)), z = (t3, e3) => {
    if (__abx$919e9d(227) !== t3.charAt(e3)) throw Error(__abx$919e9d(228));
    let r2 = [], n2 = [], i3 = e3 + 1, o2 = false, s2 = false, a2 = false, u2 = false, l2 = e3, f2 = __abx$919e9d(1);
    t: for (; i3 < t3.length; ) {
      let c3 = t3.charAt(i3);
      if ((__abx$919e9d(229) === c3 || __abx$919e9d(230) === c3) && i3 === e3 + 1) {
        u2 = true, i3++;
        continue;
      }
      if (__abx$919e9d(74) === c3 && o2 && !a2) {
        l2 = i3 + 1;
        break;
      }
      if (o2 = true, __abx$919e9d(192) === c3 && !a2) {
        a2 = true, i3++;
        continue;
      }
      if (__abx$919e9d(227) === c3 && !a2) {
        for (let [o3, [a3, u3, l3]] of Object.entries(L)) if (t3.startsWith(o3, i3)) {
          if (f2) return [__abx$919e9d(231), false, t3.length - e3, true];
          i3 += o3.length, l3 ? n2.push(a3) : r2.push(a3), s2 = s2 || u3;
          continue t;
        }
      }
      if (a2 = false, f2) {
        c3 > f2 ? r2.push($(f2) + __abx$919e9d(77) + $(c3)) : c3 === f2 && r2.push($(c3)), f2 = __abx$919e9d(1), i3++;
        continue;
      }
      if (t3.startsWith(__abx$919e9d(232), i3 + 1)) {
        r2.push($(c3 + __abx$919e9d(77))), i3 += 2;
        continue;
      }
      if (t3.startsWith(__abx$919e9d(77), i3 + 1)) {
        f2 = c3, i3 += 2;
        continue;
      }
      r2.push($(c3)), i3++;
    }
    if (l2 < i3) return [__abx$919e9d(1), false, 0, false];
    if (!r2.length && !n2.length) return [__abx$919e9d(231), false, t3.length - e3, true];
    if (0 === n2.length && 1 === r2.length && /^\\?.$/.test(r2[0]) && !u2) return [(2 === r2[0].length ? r2[0].slice(-1) : r2[0]).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, __abx$919e9d(226)), false, l2 - e3, false];
    let c2 = __abx$919e9d(227) + (u2 ? __abx$919e9d(230) : __abx$919e9d(1)) + r2.join(__abx$919e9d(1)) + __abx$919e9d(74), h2 = __abx$919e9d(227) + (u2 ? __abx$919e9d(1) : __abx$919e9d(230)) + n2.join(__abx$919e9d(1)) + __abx$919e9d(74);
    return [r2.length && n2.length ? __abx$919e9d(233) + c2 + __abx$919e9d(234) + h2 + __abx$919e9d(140) : r2.length ? c2 : h2, s2, l2 - e3, true];
  }, W = (t3, { windowsPathsNoEscape: e3 = false, magicalBraces: r2 = true } = {}) => r2 ? e3 ? t3.replace(/\[([^/\\])\]/g, __abx$919e9d(235)) : t3.replace(/((?!\\).|^)\[([^/\\])\]/g, __abx$919e9d(236)).replace(/\\([^/])/g, __abx$919e9d(235)) : e3 ? t3.replace(/\[([^/\\{}])\]/g, __abx$919e9d(235)) : t3.replace(/((?!\\).|^)\[([^/\\{}])\]/g, __abx$919e9d(236)).replace(/\\([^/{}])/g, __abx$919e9d(235)), Y = /* @__PURE__ */ new Set([__abx$919e9d(229), __abx$919e9d(237), __abx$919e9d(238), __abx$919e9d(239), __abx$919e9d(240)]), G = (t3) => Y.has(t3), H = /* @__PURE__ */ new Map([[__abx$919e9d(229), [__abx$919e9d(240)]], [__abx$919e9d(237), [__abx$919e9d(237), __abx$919e9d(240)]], [__abx$919e9d(240), [__abx$919e9d(240)]], [__abx$919e9d(239), [__abx$919e9d(239), __abx$919e9d(238), __abx$919e9d(237), __abx$919e9d(240)]], [__abx$919e9d(238), [__abx$919e9d(238), __abx$919e9d(240)]]]), X = /* @__PURE__ */ new Map([[__abx$919e9d(229), [__abx$919e9d(237)]], [__abx$919e9d(240), [__abx$919e9d(237)]], [__abx$919e9d(238), [__abx$919e9d(237), __abx$919e9d(239)]]]), K = /* @__PURE__ */ new Map([[__abx$919e9d(229), [__abx$919e9d(237), __abx$919e9d(240)]], [__abx$919e9d(237), [__abx$919e9d(237), __abx$919e9d(240)]], [__abx$919e9d(240), [__abx$919e9d(237), __abx$919e9d(240)]], [__abx$919e9d(239), [__abx$919e9d(239), __abx$919e9d(238), __abx$919e9d(237), __abx$919e9d(240)]], [__abx$919e9d(238), [__abx$919e9d(238), __abx$919e9d(240), __abx$919e9d(237), __abx$919e9d(239)]]]), V = /* @__PURE__ */ new Map([[__abx$919e9d(229), /* @__PURE__ */ new Map([[__abx$919e9d(229), __abx$919e9d(240)]])], [__abx$919e9d(237), /* @__PURE__ */ new Map([[__abx$919e9d(239), __abx$919e9d(239)], [__abx$919e9d(238), __abx$919e9d(239)]])], [__abx$919e9d(240), /* @__PURE__ */ new Map([[__abx$919e9d(229), __abx$919e9d(229)], [__abx$919e9d(237), __abx$919e9d(237)], [__abx$919e9d(240), __abx$919e9d(240)], [__abx$919e9d(239), __abx$919e9d(239)], [__abx$919e9d(238), __abx$919e9d(238)]])], [__abx$919e9d(238), /* @__PURE__ */ new Map([[__abx$919e9d(237), __abx$919e9d(239)], [__abx$919e9d(239), __abx$919e9d(239)]])]]), J = __abx$919e9d(241), Z = /* @__PURE__ */ new Set([__abx$919e9d(227), __abx$919e9d(133)]), q = /* @__PURE__ */ new Set([__abx$919e9d(172), __abx$919e9d(133)]), Q = new Set(__abx$919e9d(242)), tt = (t3) => t3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, __abx$919e9d(226)), te = __abx$919e9d(243), tr = te + __abx$919e9d(244), tn = te + __abx$919e9d(245), ti = 0;
  class to {
    constructor(t3, e3, r2 = {}) {
      __privateAdd(this, _to_instances);
      __publicField(this, __abx$919e9d(246));
      __privateAdd(this, _t);
      __privateAdd(this, _e);
      __privateAdd(this, _r, false);
      __privateAdd(this, _n, []);
      __privateAdd(this, _i);
      __privateAdd(this, _o);
      __privateAdd(this, _s);
      __privateAdd(this, _a, false);
      __privateAdd(this, _u);
      __privateAdd(this, _l);
      __privateAdd(this, _f, false);
      __publicField(this, __abx$919e9d(247), ++ti);
      this.type = t3, t3 && __privateSet(this, _e, true), __privateSet(this, _i, e3), __privateSet(this, _t, __privateGet(this, _i) ? __privateGet(__privateGet(this, _i), _t) : this), __privateSet(this, _u, __privateGet(this, _t) === this ? r2 : __privateGet(__privateGet(this, _t), _u)), __privateSet(this, _s, __privateGet(this, _t) === this ? [] : __privateGet(__privateGet(this, _t), _s)), __abx$919e9d(229) !== t3 || __privateGet(__privateGet(this, _t), _a) || __privateGet(this, _s).push(this), __privateSet(this, _o, __privateGet(this, _i) ? __privateGet(__privateGet(this, _i), _n).length : 0);
    }
    get depth() {
      var _a2;
      return (((_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.depth) ?? -1) + 1;
    }
    [Symbol.for(__abx$919e9d(13))]() {
      var _a2;
      return { [__abx$919e9d(248)]: __abx$919e9d(249), id: this.id, type: this.type, root: __privateGet(this, _t).id, parent: (_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.id, depth: this.depth, partsLength: __privateGet(this, _n).length, parts: __privateGet(this, _n) };
    }
    get hasMagic() {
      if (void 0 !== __privateGet(this, _e)) return __privateGet(this, _e);
      for (let t3 of __privateGet(this, _n)) if (__abx$919e9d(17) != typeof t3 && (t3.type || t3.hasMagic)) return __privateSet(this, _e, true);
      return __privateGet(this, _e);
    }
    toString() {
      return void 0 !== __privateGet(this, _l) ? __privateGet(this, _l) : this.type ? __privateSet(this, _l, this.type + __abx$919e9d(233) + __privateGet(this, _n).map((t3) => String(t3)).join(__abx$919e9d(234)) + __abx$919e9d(140)) : __privateSet(this, _l, __privateGet(this, _n).map((t3) => String(t3)).join(__abx$919e9d(1)));
    }
    push(...t3) {
      for (let r2 of t3) if (__abx$919e9d(1) !== r2) {
        if (__abx$919e9d(17) != typeof r2 && !(r2 instanceof e2 && __privateGet(r2, _i) === this)) throw Error(__abx$919e9d(250) + r2);
        __privateGet(this, _n).push(r2);
      }
    }
    toJSON() {
      var _a2;
      let t3 = null === this.type ? __privateGet(this, _n).slice().map((t4) => __abx$919e9d(17) == typeof t4 ? t4 : t4.toJSON()) : [this.type, ...__privateGet(this, _n).map((t4) => t4.toJSON())];
      return this.isStart() && !this.type && t3.unshift([]), this.isEnd() && (this === __privateGet(this, _t) || __privateGet(__privateGet(this, _t), _a) && ((_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.type) === __abx$919e9d(229)) && t3.push({}), t3;
    }
    isStart() {
      var _a2;
      if (__privateGet(this, _t) === this) return true;
      if (!((_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.isStart())) return false;
      if (0 === __privateGet(this, _o)) return true;
      let t3 = __privateGet(this, _i);
      for (let r2 = 0; r2 < __privateGet(this, _o); r2++) {
        let n2 = __privateGet(t3, _n)[r2];
        if (!(n2 instanceof e2 && __abx$919e9d(229) === n2.type)) return false;
      }
      return true;
    }
    isEnd() {
      var _a2, _b, _c;
      if (__privateGet(this, _t) === this || ((_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.type) === __abx$919e9d(229)) return true;
      if (!((_b = __privateGet(this, _i)) == null ? void 0 : _b.isEnd())) return false;
      if (!this.type) return (_c = __privateGet(this, _i)) == null ? void 0 : _c.isEnd();
      let t3 = __privateGet(this, _i) ? __privateGet(__privateGet(this, _i), _n).length : 0;
      return __privateGet(this, _o) === t3 - 1;
    }
    copyIn(t3) {
      __abx$919e9d(17) == typeof t3 ? this.push(t3) : this.push(t3.clone(this));
    }
    clone(t3) {
      let r2 = new e2(this.type, t3);
      for (let t4 of __privateGet(this, _n)) r2.copyIn(t4);
      return r2;
    }
    static fromGlob(t3, r2 = {}) {
      var _a2;
      let n2 = new e2(null, void 0, r2);
      return __privateMethod(_a2 = e2, _to_static, h_fn).call(_a2, t3, n2, 0, r2, 0), n2;
    }
    toMMPattern() {
      if (this !== __privateGet(this, _t)) return __privateGet(this, _t).toMMPattern();
      let t3 = this.toString(), [e3, r2, n2, i3] = this.toRegExpSource();
      return n2 || __privateGet(this, _e) || __privateGet(this, _u).nocase && !__privateGet(this, _u).nocaseMagicOnly && t3.toUpperCase() !== t3.toLowerCase() ? Object.assign(RegExp((__abx$919e9d(230)+String(e3)+__abx$919e9d(251)), (__privateGet(this, _u).nocase ? __abx$919e9d(252) : __abx$919e9d(1)) + (i3 ? __abx$919e9d(9) : __abx$919e9d(1))), { _src: e3, _glob: t3 }) : r2;
    }
    get options() {
      return __privateGet(this, _u);
    }
    toRegExpSource(t3) {
      var _a2;
      let r2 = t3 ?? !!__privateGet(this, _u).dot;
      if (__privateGet(this, _t) === this && (__privateMethod(this, _to_instances, E_fn).call(this), __privateMethod(this, _to_instances, c_fn).call(this)), !G(this.type)) {
        let n3 = this.isStart() && this.isEnd() && !__privateGet(this, _n).some((t4) => __abx$919e9d(17) != typeof t4), i4 = __privateGet(this, _n).map((r3) => {
          var _a3;
          let [i5, o4, s4, a2] = __abx$919e9d(17) == typeof r3 ? __privateMethod(_a3 = e2, _to_static, S_fn).call(_a3, r3, __privateGet(this, _e), n3) : r3.toRegExpSource(t3);
          return __privateSet(this, _e, __privateGet(this, _e) || s4), __privateSet(this, _r, __privateGet(this, _r) || a2), i5;
        }).join(__abx$919e9d(1)), o3 = __abx$919e9d(1);
        if (this.isStart() && __abx$919e9d(17) == typeof __privateGet(this, _n)[0] && !(1 === __privateGet(this, _n).length && q.has(__privateGet(this, _n)[0]))) {
          let e3 = r2 && Z.has(i4.charAt(0)) || i4.startsWith(__abx$919e9d(253)) && Z.has(i4.charAt(2)) || i4.startsWith(__abx$919e9d(254)) && Z.has(i4.charAt(4)), n4 = !r2 && !t3 && Z.has(i4.charAt(0));
          o3 = e3 ? __abx$919e9d(255) : n4 ? J : __abx$919e9d(1);
        }
        let s3 = __abx$919e9d(1);
        return this.isEnd() && __privateGet(__privateGet(this, _t), _a) && ((_a2 = __privateGet(this, _i)) == null ? void 0 : _a2.type) === __abx$919e9d(229) && (s3 = __abx$919e9d(256)), [o3 + i4 + s3, W(i4), __privateSet(this, _e, !!__privateGet(this, _e)), __privateGet(this, _r)];
      }
      let n2 = __abx$919e9d(239) === this.type || __abx$919e9d(238) === this.type, i3 = __abx$919e9d(229) === this.type ? __abx$919e9d(257) : __abx$919e9d(258), o2 = __privateMethod(this, _to_instances, O_fn).call(this, r2);
      if (this.isStart() && this.isEnd() && !o2 && __abx$919e9d(229) !== this.type) {
        let t4 = this.toString();
        return __privateSet(this, _n, [t4]), this.type = null, __privateSet(this, _e, void 0), [t4, W(this.toString()), false, false];
      }
      let s2 = !n2 || t3 || r2 || !J ? __abx$919e9d(1) : __privateMethod(this, _to_instances, O_fn).call(this, true);
      s2 === o2 && (s2 = __abx$919e9d(1)), s2 && (o2 = (__abx$919e9d(258)+String(o2)+__abx$919e9d(259)+String(s2)+__abx$919e9d(260)));
      return [__abx$919e9d(229) === this.type && __privateGet(this, _f) ? (this.isStart() && !r2 ? J : __abx$919e9d(1)) + tn : i3 + o2 + (__abx$919e9d(229) === this.type ? __abx$919e9d(261) + (!this.isStart() || r2 || t3 ? __abx$919e9d(1) : J) + tr + __abx$919e9d(140) : __abx$919e9d(240) === this.type ? __abx$919e9d(140) : __abx$919e9d(237) === this.type ? __abx$919e9d(262) : __abx$919e9d(238) === this.type && s2 ? __abx$919e9d(140) : __abx$919e9d(239) === this.type && s2 ? __abx$919e9d(262) : (__abx$919e9d(140)+String(this.type)+__abx$919e9d(1))), W(o2), __privateSet(this, _e, !!__privateGet(this, _e)), __privateGet(this, _r)];
    }
  }
  _t = new WeakMap();
  _e = new WeakMap();
  _r = new WeakMap();
  _n = new WeakMap();
  _i = new WeakMap();
  _o = new WeakMap();
  _s = new WeakMap();
  _a = new WeakMap();
  _u = new WeakMap();
  _l = new WeakMap();
  _f = new WeakMap();
  _to_instances = new WeakSet();
  c_fn = function() {
    let t3;
    if (this !== __privateGet(this, _t)) throw Error(__abx$919e9d(263));
    if (__privateGet(this, _a)) return this;
    for (this.toString(), __privateSet(this, _a, true); t3 = __privateGet(this, _s).pop(); ) {
      if (__abx$919e9d(229) !== t3.type) continue;
      let e3 = t3, r2 = __privateGet(e3, _i);
      for (; r2; ) {
        for (let n2 = __privateGet(e3, _o) + 1; !r2.type && n2 < __privateGet(r2, _n).length; n2++) for (let e4 of __privateGet(t3, _n)) {
          if (__abx$919e9d(17) == typeof e4) throw Error(__abx$919e9d(264));
          e4.copyIn(__privateGet(r2, _n)[n2]);
        }
        r2 = __privateGet(e3 = r2, _i);
      }
    }
    return this;
  };
  _to_static = new WeakSet();
  h_fn = function(t3, r2, n2, i3, o2) {
    var _a2, _b, _c, _d;
    let s2 = i3.maxExtglobRecursion ?? 2, a2 = false, u2 = false, l2 = -1, f2 = false;
    if (null === r2.type) {
      let c3 = n2, h3 = __abx$919e9d(1);
      for (; c3 < t3.length; ) {
        let n3 = t3.charAt(c3++);
        if (a2 || __abx$919e9d(192) === n3) {
          a2 = !a2, h3 += n3;
          continue;
        }
        if (u2) {
          c3 === l2 + 1 ? (__abx$919e9d(230) === n3 || __abx$919e9d(229) === n3) && (f2 = true) : __abx$919e9d(74) !== n3 || c3 === l2 + 2 && f2 || (u2 = false), h3 += n3;
          continue;
        }
        if (__abx$919e9d(227) === n3) {
          u2 = true, l2 = c3, f2 = false, h3 += n3;
          continue;
        }
        if (!i3.noext && G(n3) && __abx$919e9d(233) === t3.charAt(c3) && o2 <= s2) {
          r2.push(h3), h3 = __abx$919e9d(1);
          let s3 = new e2(n3, r2);
          c3 = __privateMethod(_a2 = e2, _to_static, h_fn).call(_a2, t3, s3, c3, i3, o2 + 1), r2.push(s3);
          continue;
        }
        h3 += n3;
      }
      return r2.push(h3), c3;
    }
    let c2 = n2 + 1, h2 = new e2(null, r2), p2 = [], y2 = __abx$919e9d(1);
    for (; c2 < t3.length; ) {
      let n3 = t3.charAt(c2++);
      if (a2 || __abx$919e9d(192) === n3) {
        a2 = !a2, y2 += n3;
        continue;
      }
      if (u2) {
        c2 === l2 + 1 ? (__abx$919e9d(230) === n3 || __abx$919e9d(229) === n3) && (f2 = true) : __abx$919e9d(74) !== n3 || c2 === l2 + 2 && f2 || (u2 = false), y2 += n3;
        continue;
      }
      if (__abx$919e9d(227) === n3) {
        u2 = true, l2 = c2, f2 = false, y2 += n3;
        continue;
      }
      if (!i3.noext && G(n3) && __abx$919e9d(233) === t3.charAt(c2) && (o2 <= s2 || r2 && __privateMethod(_b = r2, _to_instances, p_fn).call(_b, n3))) {
        let s3 = r2 && __privateMethod(_c = r2, _to_instances, p_fn).call(_c, n3) ? 0 : 1;
        h2.push(y2), y2 = __abx$919e9d(1);
        let a3 = new e2(n3, h2);
        h2.push(a3), c2 = __privateMethod(_d = e2, _to_static, h_fn).call(_d, t3, a3, c2, i3, o2 + s3);
        continue;
      }
      if (__abx$919e9d(234) === n3) {
        h2.push(y2), y2 = __abx$919e9d(1), p2.push(h2), h2 = new e2(null, r2);
        continue;
      }
      if (__abx$919e9d(140) === n3) return __abx$919e9d(1) === y2 && 0 === __privateGet(r2, _n).length && __privateSet(r2, _f, true), h2.push(y2), y2 = __abx$919e9d(1), r2.push(...p2, h2), c2;
      y2 += n3;
    }
    return r2.type = null, __privateSet(r2, _e, void 0), __privateSet(r2, _n, [t3.substring(n2 - 1)]), c2;
  };
  y_fn = function(t3) {
    return __privateMethod(this, _to_instances, d_fn).call(this, t3, X);
  };
  d_fn = function(t3, e3 = H) {
    if (!t3 || __abx$919e9d(265) != typeof t3 || null !== t3.type || 1 !== __privateGet(t3, _n).length || null === this.type) return false;
    let r2 = __privateGet(t3, _n)[0];
    return !!r2 && __abx$919e9d(265) == typeof r2 && null !== r2.type && __privateMethod(this, _to_instances, p_fn).call(this, r2.type, e3);
  };
  p_fn = function(t3, e3 = K) {
    var _a2;
    return !!((_a2 = e3.get(this.type)) == null ? void 0 : _a2.includes(t3));
  };
  g_fn = function(t3, r2) {
    let n2 = __privateGet(t3, _n)[0], i3 = new e2(null, n2, this.options);
    __privateGet(i3, _n).push(__abx$919e9d(1)), n2.push(i3), __privateMethod(this, _to_instances, m_fn).call(this, t3, r2);
  };
  m_fn = function(t3, e3) {
    let r2 = __privateGet(t3, _n)[0];
    for (let t4 of (__privateGet(this, _n).splice(e3, 1, ...__privateGet(r2, _n)), __privateGet(r2, _n))) __abx$919e9d(265) == typeof t4 && __privateSet(t4, _i, this);
    __privateSet(this, _l, void 0);
  };
  v_fn = function(t3) {
    let e3 = V.get(this.type);
    return !!(e3 == null ? void 0 : e3.has(t3));
  };
  b_fn = function(t3) {
    if (!t3 || __abx$919e9d(265) != typeof t3 || null !== t3.type || 1 !== __privateGet(t3, _n).length || null === this.type || 1 !== __privateGet(this, _n).length) return false;
    let e3 = __privateGet(t3, _n)[0];
    return !!e3 && __abx$919e9d(265) == typeof e3 && null !== e3.type && __privateMethod(this, _to_instances, v_fn).call(this, e3.type);
  };
  w_fn = function(t3) {
    let e3 = V.get(this.type), r2 = __privateGet(t3, _n)[0], n2 = e3 == null ? void 0 : e3.get(r2.type);
    if (!n2) return false;
    for (let t4 of (__privateSet(this, _n, __privateGet(r2, _n)), __privateGet(this, _n))) __abx$919e9d(265) == typeof t4 && __privateSet(t4, _i, this);
    this.type = n2, __privateSet(this, _l, void 0), __privateSet(this, _f, false);
  };
  E_fn = function() {
    var _a2, _b;
    if (G(this.type)) {
      let t3 = 0, e3 = false;
      do {
        e3 = true;
        for (let t4 = 0; t4 < __privateGet(this, _n).length; t4++) {
          let r2 = __privateGet(this, _n)[t4];
          __abx$919e9d(265) == typeof r2 && (__privateMethod(_a2 = r2, _to_instances, E_fn).call(_a2), __privateMethod(this, _to_instances, d_fn).call(this, r2) ? (e3 = false, __privateMethod(this, _to_instances, m_fn).call(this, r2, t4)) : __privateMethod(this, _to_instances, y_fn).call(this, r2) ? (e3 = false, __privateMethod(this, _to_instances, g_fn).call(this, r2, t4)) : __privateMethod(this, _to_instances, b_fn).call(this, r2) && (e3 = false, __privateMethod(this, _to_instances, w_fn).call(this, r2)));
        }
      } while (!e3 && ++t3 < 10);
    } else for (let t3 of __privateGet(this, _n)) __abx$919e9d(265) == typeof t3 && __privateMethod(_b = t3, _to_instances, E_fn).call(_b);
    __privateSet(this, _l, void 0);
  };
  O_fn = function(t3) {
    return __privateGet(this, _n).map((e3) => {
      if (__abx$919e9d(17) == typeof e3) throw Error(__abx$919e9d(266));
      let [r2, n2, i3, o2] = e3.toRegExpSource(t3);
      return __privateSet(this, _r, __privateGet(this, _r) || o2), r2;
    }).filter((t4) => !(this.isStart() && this.isEnd()) || !!t4).join(__abx$919e9d(234));
  };
  S_fn = function(t3, e3, r2 = false) {
    let n2 = false, i3 = __abx$919e9d(1), o2 = false, s2 = false;
    for (let a2 = 0; a2 < t3.length; a2++) {
      let u2 = t3.charAt(a2);
      if (n2) {
        n2 = false, i3 += (Q.has(u2) ? __abx$919e9d(192) : __abx$919e9d(1)) + u2;
        continue;
      }
      if (__abx$919e9d(239) === u2) {
        if (s2) continue;
        s2 = true, i3 += r2 && /^[*]+$/.test(t3) ? tn : tr, e3 = true;
        continue;
      }
      if (s2 = false, __abx$919e9d(192) === u2) {
        a2 === t3.length - 1 ? i3 += __abx$919e9d(267) : n2 = true;
        continue;
      }
      if (__abx$919e9d(227) === u2) {
        let [r3, n3, s3, u3] = z(t3, a2);
        if (s3) {
          i3 += r3, o2 = o2 || n3, a2 += s3 - 1, e3 = e3 || u3;
          continue;
        }
      }
      if (__abx$919e9d(237) === u2) {
        i3 += te, e3 = true;
        continue;
      }
      i3 += tt(u2);
    }
    return [i3, W(t3), !!e3, o2];
  };
  __privateAdd(to, _to_static);
  e2 = to;
  let ts = (t3, e3, r2 = {}) => (_(e3), (!!r2.nocomment || __abx$919e9d(268) !== e3.charAt(0)) && new tx(e3, r2).match(t3)), ta = /^\*+([^+@!?*[(]*)$/, tu = /^\*+\.\*+$/, tl = (t3) => !t3.startsWith(__abx$919e9d(133)) && t3.includes(__abx$919e9d(133)), tf = (t3) => __abx$919e9d(133) !== t3 && __abx$919e9d(172) !== t3 && t3.includes(__abx$919e9d(133)), tc = /^\.\*+$/, th = (t3) => __abx$919e9d(133) !== t3 && __abx$919e9d(172) !== t3 && t3.startsWith(__abx$919e9d(133)), tp = /^\*+$/, ty = (t3) => 0 !== t3.length && !t3.startsWith(__abx$919e9d(133)), td = (t3) => 0 !== t3.length && __abx$919e9d(133) !== t3 && __abx$919e9d(172) !== t3, tg = /^\?+([^+@!?*[(]*)?$/, tm = ([t3]) => {
    let e3 = t3.length;
    return (t4) => t4.length === e3 && !t4.startsWith(__abx$919e9d(133));
  }, tv = ([t3]) => {
    let e3 = t3.length;
    return (t4) => t4.length === e3 && __abx$919e9d(133) !== t4 && __abx$919e9d(172) !== t4;
  }, tb = __abx$919e9d(265) == typeof process && process ? __abx$919e9d(265) == typeof process.env && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : __abx$919e9d(269);
  ts.sep = __abx$919e9d(270) === tb ? __abx$919e9d(192) : __abx$919e9d(169);
  let tw = Symbol(__abx$919e9d(271));
  ts.GLOBSTAR = tw;
  ts.filter = (t3, e3 = {}) => (r2) => ts(r2, t3, e3);
  let tE = (t3, e3 = {}) => Object.assign({}, t3, e3);
  ts.defaults = (t3) => {
    if (!t3 || __abx$919e9d(265) != typeof t3 || !Object.keys(t3).length) return ts;
    let e3 = ts;
    return Object.assign((r2, n2, i3 = {}) => e3(r2, n2, tE(t3, i3)), { Minimatch: class extends e3.Minimatch {
      constructor(e4, r2 = {}) {
        super(e4, tE(t3, r2));
      }
      static defaults(r2) {
        return e3.defaults(tE(t3, r2)).Minimatch;
      }
    }, AST: class extends e3.AST {
      constructor(e4, r2, n2 = {}) {
        super(e4, r2, tE(t3, n2));
      }
      static fromGlob(r2, n2 = {}) {
        return e3.AST.fromGlob(r2, tE(t3, n2));
      }
    }, unescape: (r2, n2 = {}) => e3.unescape(r2, tE(t3, n2)), escape: (r2, n2 = {}) => e3.escape(r2, tE(t3, n2)), filter: (r2, n2 = {}) => e3.filter(r2, tE(t3, n2)), defaults: (r2) => e3.defaults(tE(t3, r2)), makeRe: (r2, n2 = {}) => e3.makeRe(r2, tE(t3, n2)), braceExpand: (r2, n2 = {}) => e3.braceExpand(r2, tE(t3, n2)), match: (r2, n2, i3 = {}) => e3.match(r2, n2, tE(t3, i3)), sep: e3.sep, GLOBSTAR: tw });
  };
  let tS = (t3, e3 = {}) => (_(t3), e3.nobrace || !/\{(?:(?!\{).)*\}/.test(t3)) ? [t3] : (function(t4, e4 = {}) {
    if (!t4) return [];
    let { max: r2 = 1e5 } = e4;
    return __abx$919e9d(272) === t4.slice(0, 2) && (t4 = __abx$919e9d(273) + t4.slice(2)), (function t5(e5, r3, n2) {
      let i3 = [], o2 = d(__abx$919e9d(193), __abx$919e9d(194), e5);
      if (!o2) return [e5];
      let s2 = o2.pre, a2 = o2.post.length ? t5(o2.post, r3, false) : [__abx$919e9d(1)];
      if (/\$$/.test(o2.pre)) for (let t6 = 0; t6 < a2.length && t6 < r3; t6++) {
        let e6 = s2 + __abx$919e9d(193) + o2.body + __abx$919e9d(194) + a2[t6];
        i3.push(e6);
      }
      else {
        let u2, l2, f2 = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o2.body), c2 = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o2.body), h2 = f2 || c2, p2 = o2.body.indexOf(__abx$919e9d(195)) >= 0;
        if (!h2 && !p2) return o2.post.match(/,(?!,).*\}/) ? t5(e5 = o2.pre + __abx$919e9d(193) + o2.body + w + o2.post, r3, true) : [e5];
        if (h2) u2 = o2.body.split(/\.\./);
        else if (1 === (u2 = (function t6(e6) {
          if (!e6) return [__abx$919e9d(1)];
          let r4 = [], n3 = d(__abx$919e9d(193), __abx$919e9d(194), e6);
          if (!n3) return e6.split(__abx$919e9d(195));
          let { pre: i4, body: o3, post: s3 } = n3, a3 = i4.split(__abx$919e9d(195));
          a3[a3.length - 1] += __abx$919e9d(193) + o3 + __abx$919e9d(194);
          let u3 = t6(s3);
          return s3.length && (a3[a3.length - 1] += u3.shift(), a3.push.apply(a3, u3)), r4.push.apply(r4, a3), r4;
        })(o2.body)).length && void 0 !== u2[0] && 1 === (u2 = t5(u2[0], r3, false).map(j)).length) return a2.map((t6) => o2.pre + u2[0] + t6);
        if (h2 && void 0 !== u2[0] && void 0 !== u2[1]) {
          let t6 = M(u2[0]), e6 = M(u2[1]), r4 = Math.max(u2[0].length, u2[1].length), n3 = 3 === u2.length && void 0 !== u2[2] ? Math.max(Math.abs(M(u2[2])), 1) : 1, i4 = C;
          e6 < t6 && (n3 *= -1, i4 = U);
          let o3 = u2.some(D);
          l2 = [];
          for (let s3 = t6; i4(s3, e6); s3 += n3) {
            let t7;
            if (c2) __abx$919e9d(192) === (t7 = String.fromCharCode(s3)) && (t7 = __abx$919e9d(1));
            else if (t7 = String(s3), o3) {
              let e7 = r4 - t7.length;
              if (e7 > 0) {
                let r5 = Array(e7 + 1).join(__abx$919e9d(274));
                t7 = s3 < 0 ? __abx$919e9d(77) + r5 + t7.slice(1) : r5 + t7;
              }
            }
            l2.push(t7);
          }
        } else {
          l2 = [];
          for (let e6 = 0; e6 < u2.length; e6++) l2.push.apply(l2, t5(u2[e6], r3, false));
        }
        for (let t6 = 0; t6 < l2.length; t6++) for (let e6 = 0; e6 < a2.length && i3.length < r3; e6++) {
          let r4 = s2 + l2[t6] + a2[e6];
          (!n2 || h2 || r4) && i3.push(r4);
        }
      }
      return i3;
    })(t4.replace(T, v).replace(P, b).replace(B, w).replace(k, E).replace(N, S), r2, true).map(F);
  })(t3, { max: e3.braceExpandMax });
  ts.braceExpand = tS, ts.makeRe = (t3, e3 = {}) => new tx(t3, e3).makeRe(), ts.match = (t3, e3, r2 = {}) => {
    let n2 = new tx(e3, r2);
    return t3 = t3.filter((t4) => n2.match(t4)), n2.options.nonull && !t3.length && t3.push(e3), t3;
  };
  let tO = /[?*]|[+@!]\(.*?\)|\[|\]/;
  class tx {
    constructor(t3, e3 = {}) {
      __privateAdd(this, _tx_instances);
      __publicField(this, __abx$919e9d(275));
      __publicField(this, __abx$919e9d(276));
      __publicField(this, __abx$919e9d(277));
      __publicField(this, __abx$919e9d(278));
      __publicField(this, __abx$919e9d(279));
      __publicField(this, __abx$919e9d(280));
      __publicField(this, __abx$919e9d(281));
      __publicField(this, __abx$919e9d(282));
      __publicField(this, __abx$919e9d(283));
      __publicField(this, __abx$919e9d(284));
      __publicField(this, __abx$919e9d(285));
      __publicField(this, __abx$919e9d(286));
      __publicField(this, __abx$919e9d(287));
      __publicField(this, __abx$919e9d(288));
      __publicField(this, __abx$919e9d(289));
      __publicField(this, __abx$919e9d(290));
      __publicField(this, __abx$919e9d(291));
      __publicField(this, __abx$919e9d(292));
      _(t3), e3 = e3 || {}, this.options = e3, this.maxGlobstarRecursion = e3.maxGlobstarRecursion ?? 200, this.pattern = t3, this.platform = e3.platform || tb, this.isWindows = __abx$919e9d(270) === this.platform, this.windowsPathsNoEscape = !!e3.windowsPathsNoEscape || false === e3.allowWindowsEscape, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, __abx$919e9d(169))), this.preserveMultipleSlashes = !!e3.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!e3.nonegate, this.comment = false, this.empty = false, this.partial = !!e3.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = void 0 !== e3.windowsNoMagicRoot ? e3.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    hasMagic() {
      if (this.options.magicalBraces && this.set.length > 1) return true;
      for (let t3 of this.set) for (let e3 of t3) if (__abx$919e9d(17) != typeof e3) return true;
      return false;
    }
    debug() {
    }
    make() {
      let t3 = this.pattern, e3 = this.options;
      if (!e3.nocomment && __abx$919e9d(268) === t3.charAt(0)) {
        this.comment = true;
        return;
      }
      if (!t3) {
        this.empty = true;
        return;
      }
      this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], e3.debug && (this.debug = (...t4) => console.error(...t4)), this.debug(this.pattern, this.globSet);
      let r2 = this.globSet.map((t4) => this.slashSplit(t4));
      this.globParts = this.preprocess(r2), this.debug(this.pattern, this.globParts);
      let n2 = this.globParts.map((t4, e4, r3) => {
        if (this.isWindows && this.windowsNoMagicRoot) {
          let e5 = __abx$919e9d(1) === t4[0] && __abx$919e9d(1) === t4[1] && (__abx$919e9d(237) === t4[2] || !tO.test(t4[2])) && !tO.test(t4[3]), r4 = /^[a-z]:/i.test(t4[0]);
          if (e5) return [...t4.slice(0, 4), ...t4.slice(4).map((t5) => this.parse(t5))];
          if (r4) return [t4[0], ...t4.slice(1).map((t5) => this.parse(t5))];
        }
        return t4.map((t5) => this.parse(t5));
      });
      if (this.debug(this.pattern, n2), this.set = n2.filter((t4) => -1 === t4.indexOf(false)), this.isWindows) for (let t4 = 0; t4 < this.set.length; t4++) {
        let e4 = this.set[t4];
        __abx$919e9d(1) === e4[0] && __abx$919e9d(1) === e4[1] && __abx$919e9d(237) === this.globParts[t4][2] && __abx$919e9d(17) == typeof e4[3] && /^[a-z]:$/i.test(e4[3]) && (e4[2] = __abx$919e9d(237));
      }
      this.debug(this.pattern, this.set);
    }
    preprocess(t3) {
      if (this.options.noglobstar) for (let e4 of t3) for (let t4 = 0; t4 < e4.length; t4++) __abx$919e9d(293) === e4[t4] && (e4[t4] = __abx$919e9d(239));
      let { optimizationLevel: e3 = 1 } = this.options;
      return e3 >= 2 ? (t3 = this.firstPhasePreProcess(t3), t3 = this.secondPhasePreProcess(t3)) : t3 = e3 >= 1 ? this.levelOneOptimize(t3) : this.adjascentGlobstarOptimize(t3), t3;
    }
    adjascentGlobstarOptimize(t3) {
      return t3.map((t4) => {
        let e3 = -1;
        for (; -1 !== (e3 = t4.indexOf(__abx$919e9d(293), e3 + 1)); ) {
          let r2 = e3;
          for (; __abx$919e9d(293) === t4[r2 + 1]; ) r2++;
          r2 !== e3 && t4.splice(e3, r2 - e3);
        }
        return t4;
      });
    }
    levelOneOptimize(t3) {
      return t3.map((t4) => 0 === (t4 = t4.reduce((t5, e3) => {
        let r2 = t5[t5.length - 1];
        return __abx$919e9d(293) === e3 && __abx$919e9d(293) === r2 || (__abx$919e9d(172) === e3 && r2 && __abx$919e9d(172) !== r2 && __abx$919e9d(133) !== r2 && __abx$919e9d(293) !== r2 ? t5.pop() : t5.push(e3)), t5;
      }, [])).length ? [__abx$919e9d(1)] : t4);
    }
    levelTwoFileOptimize(t3) {
      Array.isArray(t3) || (t3 = this.slashSplit(t3));
      let e3 = false;
      do {
        if (e3 = false, !this.preserveMultipleSlashes) {
          for (let r3 = 1; r3 < t3.length - 1; r3++) {
            let n2 = t3[r3];
            (1 !== r3 || __abx$919e9d(1) !== n2 || __abx$919e9d(1) !== t3[0]) && (__abx$919e9d(133) === n2 || __abx$919e9d(1) === n2) && (e3 = true, t3.splice(r3, 1), r3--);
          }
          __abx$919e9d(133) === t3[0] && 2 === t3.length && (__abx$919e9d(133) === t3[1] || __abx$919e9d(1) === t3[1]) && (e3 = true, t3.pop());
        }
        let r2 = 0;
        for (; -1 !== (r2 = t3.indexOf(__abx$919e9d(172), r2 + 1)); ) {
          let n2 = t3[r2 - 1];
          n2 && __abx$919e9d(133) !== n2 && __abx$919e9d(172) !== n2 && __abx$919e9d(293) !== n2 && !(this.isWindows && /^[a-z]:$/i.test(n2)) && (e3 = true, t3.splice(r2 - 1, 2), r2 -= 2);
        }
      } while (e3);
      return 0 === t3.length ? [__abx$919e9d(1)] : t3;
    }
    firstPhasePreProcess(t3) {
      let e3 = false;
      do
        for (let r2 of (e3 = false, t3)) {
          let n2 = -1;
          for (; -1 !== (n2 = r2.indexOf(__abx$919e9d(293), n2 + 1)); ) {
            let i4 = n2;
            for (; __abx$919e9d(293) === r2[i4 + 1]; ) i4++;
            i4 > n2 && r2.splice(n2 + 1, i4 - n2);
            let o2 = r2[n2 + 1], s2 = r2[n2 + 2], a2 = r2[n2 + 3];
            if (__abx$919e9d(172) !== o2 || !s2 || __abx$919e9d(133) === s2 || __abx$919e9d(172) === s2 || !a2 || __abx$919e9d(133) === a2 || __abx$919e9d(172) === a2) continue;
            e3 = true, r2.splice(n2, 1);
            let u2 = r2.slice(0);
            u2[n2] = __abx$919e9d(293), t3.push(u2), n2--;
          }
          if (!this.preserveMultipleSlashes) {
            for (let t4 = 1; t4 < r2.length - 1; t4++) {
              let n3 = r2[t4];
              (1 !== t4 || __abx$919e9d(1) !== n3 || __abx$919e9d(1) !== r2[0]) && (__abx$919e9d(133) === n3 || __abx$919e9d(1) === n3) && (e3 = true, r2.splice(t4, 1), t4--);
            }
            __abx$919e9d(133) === r2[0] && 2 === r2.length && (__abx$919e9d(133) === r2[1] || __abx$919e9d(1) === r2[1]) && (e3 = true, r2.pop());
          }
          let i3 = 0;
          for (; -1 !== (i3 = r2.indexOf(__abx$919e9d(172), i3 + 1)); ) {
            let t4 = r2[i3 - 1];
            if (t4 && __abx$919e9d(133) !== t4 && __abx$919e9d(172) !== t4 && __abx$919e9d(293) !== t4) {
              e3 = true;
              let t5 = 1 === i3 && __abx$919e9d(293) === r2[i3 + 1] ? [__abx$919e9d(133)] : [];
              r2.splice(i3 - 1, 2, ...t5), 0 === r2.length && r2.push(__abx$919e9d(1)), i3 -= 2;
            }
          }
        }
      while (e3);
      return t3;
    }
    secondPhasePreProcess(t3) {
      for (let e3 = 0; e3 < t3.length - 1; e3++) for (let r2 = e3 + 1; r2 < t3.length; r2++) {
        let n2 = this.partsMatch(t3[e3], t3[r2], !this.preserveMultipleSlashes);
        if (n2) {
          t3[e3] = [], t3[r2] = n2;
          break;
        }
      }
      return t3.filter((t4) => t4.length);
    }
    partsMatch(t3, e3, r2 = false) {
      let n2 = 0, i3 = 0, o2 = [], s2 = __abx$919e9d(1);
      for (; n2 < t3.length && i3 < e3.length; ) if (t3[n2] === e3[i3]) o2.push(__abx$919e9d(294) === s2 ? e3[i3] : t3[n2]), n2++, i3++;
      else if (r2 && __abx$919e9d(293) === t3[n2] && e3[i3] === t3[n2 + 1]) o2.push(t3[n2]), n2++;
      else if (r2 && __abx$919e9d(293) === e3[i3] && t3[n2] === e3[i3 + 1]) o2.push(e3[i3]), i3++;
      else if (__abx$919e9d(239) === t3[n2] && e3[i3] && (this.options.dot || !e3[i3].startsWith(__abx$919e9d(133))) && __abx$919e9d(293) !== e3[i3]) {
        if (__abx$919e9d(294) === s2) return false;
        s2 = __abx$919e9d(295), o2.push(t3[n2]), n2++, i3++;
      } else {
        if (__abx$919e9d(239) !== e3[i3] || !t3[n2] || !this.options.dot && t3[n2].startsWith(__abx$919e9d(133)) || __abx$919e9d(293) === t3[n2] || __abx$919e9d(295) === s2) return false;
        s2 = __abx$919e9d(294), o2.push(e3[i3]), n2++, i3++;
      }
      return t3.length === e3.length && o2;
    }
    parseNegate() {
      if (this.nonegate) return;
      let t3 = this.pattern, e3 = false, r2 = 0;
      for (let n2 = 0; n2 < t3.length && __abx$919e9d(229) === t3.charAt(n2); n2++) e3 = !e3, r2++;
      r2 && (this.pattern = t3.slice(r2)), this.negate = e3;
    }
    matchOne(t3, e3, r2 = false) {
      let n2 = 0, i3 = 0;
      if (this.isWindows) {
        let r3 = __abx$919e9d(17) == typeof t3[0] && /^[a-z]:$/i.test(t3[0]), o3 = !r3 && __abx$919e9d(1) === t3[0] && __abx$919e9d(1) === t3[1] && __abx$919e9d(237) === t3[2] && /^[a-z]:$/i.test(t3[3]), s2 = __abx$919e9d(17) == typeof e3[0] && /^[a-z]:$/i.test(e3[0]), a2 = !s2 && __abx$919e9d(1) === e3[0] && __abx$919e9d(1) === e3[1] && __abx$919e9d(237) === e3[2] && __abx$919e9d(17) == typeof e3[3] && /^[a-z]:$/i.test(e3[3]), u2 = o3 ? 3 : r3 ? 0 : void 0, l2 = a2 ? 3 : s2 ? 0 : void 0;
        if (__abx$919e9d(16) == typeof u2 && __abx$919e9d(16) == typeof l2) {
          let [r4, o4] = [t3[u2], e3[l2]];
          r4.toLowerCase() === o4.toLowerCase() && (e3[l2] = r4, i3 = l2, n2 = u2);
        }
      }
      let { optimizationLevel: o2 = 1 } = this.options;
      return (o2 >= 2 && (t3 = this.levelTwoFileOptimize(t3)), e3.includes(tw)) ? __privateMethod(this, _tx_instances, x_fn).call(this, t3, e3, r2, n2, i3) : __privateMethod(this, _tx_instances, I_fn).call(this, t3, e3, r2, n2, i3);
    }
    braceExpand() {
      return tS(this.pattern, this.options);
    }
    parse(t3) {
      let e3;
      _(t3);
      let r2 = this.options;
      if (__abx$919e9d(293) === t3) return tw;
      if (__abx$919e9d(1) === t3) return __abx$919e9d(1);
      let n2 = null;
      (e3 = t3.match(tp)) ? n2 = r2.dot ? td : ty : (e3 = t3.match(ta)) ? n2 = (r2.nocase ? r2.dot ? (t4) => (t4 = t4.toLowerCase(), (e4) => e4.toLowerCase().endsWith(t4)) : (t4) => (t4 = t4.toLowerCase(), (e4) => !e4.startsWith(__abx$919e9d(133)) && e4.toLowerCase().endsWith(t4)) : r2.dot ? (t4) => (e4) => e4.endsWith(t4) : (t4) => (e4) => !e4.startsWith(__abx$919e9d(133)) && e4.endsWith(t4))(e3[1]) : (e3 = t3.match(tg)) ? n2 = (r2.nocase ? r2.dot ? ([t4, e4 = __abx$919e9d(1)]) => {
        let r3 = tv([t4]);
        return e4 ? (e4 = e4.toLowerCase(), (t5) => r3(t5) && t5.toLowerCase().endsWith(e4)) : r3;
      } : ([t4, e4 = __abx$919e9d(1)]) => {
        let r3 = tm([t4]);
        return e4 ? (e4 = e4.toLowerCase(), (t5) => r3(t5) && t5.toLowerCase().endsWith(e4)) : r3;
      } : r2.dot ? ([t4, e4 = __abx$919e9d(1)]) => {
        let r3 = tv([t4]);
        return e4 ? (t5) => r3(t5) && t5.endsWith(e4) : r3;
      } : ([t4, e4 = __abx$919e9d(1)]) => {
        let r3 = tm([t4]);
        return e4 ? (t5) => r3(t5) && t5.endsWith(e4) : r3;
      })(e3) : (e3 = t3.match(tu)) ? n2 = r2.dot ? tf : tl : (e3 = t3.match(tc)) && (n2 = th);
      let i3 = to.fromGlob(t3, this.options).toMMPattern();
      return n2 && __abx$919e9d(265) == typeof i3 && Reflect.defineProperty(i3, __abx$919e9d(296), { value: n2 }), i3;
    }
    makeRe() {
      if (this.regexp || false === this.regexp) return this.regexp;
      let t3 = this.set;
      if (!t3.length) return this.regexp = false, this.regexp;
      let e3 = this.options, r2 = e3.noglobstar ? __abx$919e9d(297) : e3.dot ? __abx$919e9d(298) : __abx$919e9d(299), n2 = new Set(e3.nocase ? [__abx$919e9d(252)] : []), i3 = t3.map((t4) => {
        let e4 = t4.map((t5) => {
          if (t5 instanceof RegExp) for (let e5 of t5.flags.split(__abx$919e9d(1))) n2.add(e5);
          return __abx$919e9d(17) == typeof t5 ? t5.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, __abx$919e9d(226)) : t5 === tw ? tw : t5._src;
        });
        e4.forEach((t5, n3) => {
          let i5 = e4[n3 + 1], o3 = e4[n3 - 1];
          t5 === tw && o3 !== tw && (void 0 === o3 ? void 0 !== i5 && i5 !== tw ? e4[n3 + 1] = __abx$919e9d(300) + r2 + __abx$919e9d(301) + i5 : e4[n3] = r2 : void 0 === i5 ? e4[n3 - 1] = o3 + __abx$919e9d(302) + r2 + __abx$919e9d(262) : i5 !== tw && (e4[n3 - 1] = o3 + __abx$919e9d(302) + r2 + __abx$919e9d(303) + i5, e4[n3 + 1] = tw));
        });
        let i4 = e4.filter((t5) => t5 !== tw);
        if (this.partial && i4.length >= 1) {
          let t5 = [];
          for (let e5 = 1; e5 <= i4.length; e5++) t5.push(i4.slice(0, e5).join(__abx$919e9d(169)));
          return __abx$919e9d(258) + t5.join(__abx$919e9d(234)) + __abx$919e9d(140);
        }
        return i4.join(__abx$919e9d(169));
      }).join(__abx$919e9d(234)), [o2, s2] = t3.length > 1 ? [__abx$919e9d(258), __abx$919e9d(140)] : [__abx$919e9d(1), __abx$919e9d(1)];
      i3 = __abx$919e9d(230) + o2 + i3 + s2 + __abx$919e9d(251), this.partial && (i3 = __abx$919e9d(304) + o2 + i3.slice(1, -1) + s2 + __abx$919e9d(305)), this.negate && (i3 = __abx$919e9d(306) + i3 + __abx$919e9d(307));
      try {
        this.regexp = new RegExp(i3, [...n2].join(__abx$919e9d(1)));
      } catch {
        this.regexp = false;
      }
      return this.regexp;
    }
    slashSplit(t3) {
      return this.preserveMultipleSlashes ? t3.split(__abx$919e9d(169)) : this.isWindows && /^\/\/[^/]+/.test(t3) ? [__abx$919e9d(1), ...t3.split(/\/+/)] : t3.split(/\/+/);
    }
    match(t3, e3 = this.partial) {
      if (this.debug(__abx$919e9d(308), t3, this.pattern), this.comment) return false;
      if (this.empty) return __abx$919e9d(1) === t3;
      if (__abx$919e9d(169) === t3 && e3) return true;
      let r2 = this.options;
      this.isWindows && (t3 = t3.split(__abx$919e9d(192)).join(__abx$919e9d(169)));
      let n2 = this.slashSplit(t3);
      this.debug(this.pattern, __abx$919e9d(309), n2);
      let i3 = this.set;
      this.debug(this.pattern, __abx$919e9d(276), i3);
      let o2 = n2[n2.length - 1];
      if (!o2) for (let t4 = n2.length - 2; !o2 && t4 >= 0; t4--) o2 = n2[t4];
      for (let t4 of i3) {
        let i4 = n2;
        if (r2.matchBase && 1 === t4.length && (i4 = [o2]), this.matchOne(i4, t4, e3)) {
          if (r2.flipNegate) return true;
          return !this.negate;
        }
      }
      return !r2.flipNegate && this.negate;
    }
    static defaults(t3) {
      return ts.defaults(t3).Minimatch;
    }
  }
  _tx_instances = new WeakSet();
  x_fn = function(t3, e3, r2, n2, i3) {
    let o2 = e3.indexOf(tw, i3), s2 = e3.lastIndexOf(tw), [a2, u2, l2] = r2 ? [e3.slice(i3, o2), e3.slice(o2 + 1), []] : [e3.slice(i3, o2), e3.slice(o2 + 1, s2), e3.slice(s2 + 1)];
    if (a2.length) {
      let e4 = t3.slice(n2, n2 + a2.length);
      if (!__privateMethod(this, _tx_instances, I_fn).call(this, e4, a2, r2, 0, 0)) return false;
      n2 += a2.length, i3 += a2.length;
    }
    let f2 = 0;
    if (l2.length) {
      if (l2.length + n2 > t3.length) return false;
      let e4 = t3.length - l2.length;
      if (__privateMethod(this, _tx_instances, I_fn).call(this, t3, l2, r2, e4, 0)) f2 = l2.length;
      else {
        if (__abx$919e9d(1) !== t3[t3.length - 1] || n2 + l2.length === t3.length || (e4--, !__privateMethod(this, _tx_instances, I_fn).call(this, t3, l2, r2, e4, 0))) return false;
        f2 = l2.length + 1;
      }
    }
    if (!u2.length) {
      let e4 = !!f2;
      for (let r3 = n2; r3 < t3.length - f2; r3++) {
        let n3 = String(t3[r3]);
        if (e4 = true, __abx$919e9d(133) === n3 || __abx$919e9d(172) === n3 || !this.options.dot && n3.startsWith(__abx$919e9d(133))) return false;
      }
      return r2 || e4;
    }
    let c2 = [[[], 0]], h2 = c2[0], p2 = 0, y2 = [0];
    for (let t4 of u2) t4 === tw ? (y2.push(p2), h2 = [[], 0], c2.push(h2)) : (h2[0].push(t4), p2++);
    let d2 = c2.length - 1, g2 = t3.length - f2;
    for (let t4 of c2) t4[1] = g2 - (y2[d2--] + t4[0].length);
    return !!__privateMethod(this, _tx_instances, A_fn).call(this, t3, c2, n2, 0, r2, 0, !!f2);
  };
  A_fn = function(t3, e3, r2, n2, i3, o2, s2) {
    let a2 = e3[n2];
    if (!a2) {
      for (let e4 = r2; e4 < t3.length; e4++) {
        s2 = true;
        let r3 = t3[e4];
        if (__abx$919e9d(133) === r3 || __abx$919e9d(172) === r3 || !this.options.dot && r3.startsWith(__abx$919e9d(133))) return false;
      }
      return s2;
    }
    let [u2, l2] = a2;
    for (; r2 <= l2; ) {
      if (__privateMethod(this, _tx_instances, I_fn).call(this, t3.slice(0, r2 + u2.length), u2, i3, r2, 0) && o2 < this.maxGlobstarRecursion) {
        let a4 = __privateMethod(this, _tx_instances, A_fn).call(this, t3, e3, r2 + u2.length, n2 + 1, i3, o2 + 1, s2);
        if (false !== a4) return a4;
      }
      let a3 = t3[r2];
      if (__abx$919e9d(133) === a3 || __abx$919e9d(172) === a3 || !this.options.dot && a3.startsWith(__abx$919e9d(133))) return false;
      r2++;
    }
    return i3 || null;
  };
  I_fn = function(t3, e3, r2, n2, i3) {
    let o2, s2, a2, u2;
    for (o2 = n2, s2 = i3, u2 = t3.length, a2 = e3.length; o2 < u2 && s2 < a2; o2++, s2++) {
      let r3;
      this.debug(__abx$919e9d(310));
      let n3 = e3[s2], i4 = t3[o2];
      if (this.debug(e3, n3, i4), false === n3 || n3 === tw || (__abx$919e9d(17) == typeof n3 ? (r3 = i4 === n3, this.debug(__abx$919e9d(311), n3, i4, r3)) : (r3 = n3.test(i4), this.debug(__abx$919e9d(312), n3, i4, r3)), !r3)) return false;
    }
    if (o2 === u2 && s2 === a2) return true;
    if (o2 === u2) return r2;
    if (s2 === a2) return o2 === u2 - 1 && __abx$919e9d(1) === t3[o2];
    throw Error(__abx$919e9d(313));
  };
  function tI(t3, e3, r2, n2, i3, o2, s2) {
    try {
      var a2 = t3[o2](s2), u2 = a2.value;
    } catch (t4) {
      r2(t4);
      return;
    }
    a2.done ? e3(u2) : Promise.resolve(u2).then(n2, i3);
  }
  ts.AST = to, ts.Minimatch = tx, ts.escape = (t3, { windowsPathsNoEscape: e3 = false, magicalBraces: r2 = false } = {}) => r2 ? e3 ? t3.replace(/[?*()[\]{}]/g, __abx$919e9d(314)) : t3.replace(/[?*()[\]\\{}]/g, __abx$919e9d(226)) : e3 ? t3.replace(/[?*()[\]]/g, __abx$919e9d(314)) : t3.replace(/[?*()[\]\\]/g, __abx$919e9d(226)), ts.unescape = W;
  function tA(t3, e3, r2) {
    return e3 in t3 ? Object.defineProperty(t3, e3, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e3] = r2, t3;
  }
  var tR = (function() {
    var t3;
    function e3(t4, r2) {
      var n2 = this, i3 = this;
      if (!(this instanceof e3)) throw TypeError(__abx$919e9d(167));
      tA(this, __abx$919e9d(315), void 0), tA(this, __abx$919e9d(316), void 0), tA(this, __abx$919e9d(317), void 0), tA(this, __abx$919e9d(318), void 0), tA(this, __abx$919e9d(319), { cd: function(t5) {
        return new Promise(function(e4) {
          n2.cd(t5), e4();
        });
      }, cat: function(t5) {
        return new Promise(function(e4, r3) {
          n2.cat(t5, function(t6, n3) {
            t6 ? r3(t6) : e4(n3);
          });
        });
      }, ls: function(t5) {
        return new Promise(function(e4, r3) {
          n2.ls(t5, function(t6, n3) {
            t6 ? r3(t6) : e4(n3);
          });
        });
      }, exec: function(t5) {
        var e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return new Promise(function(r3, n3) {
          i3.exec(t5, e4, function(t6, e5) {
            t6 ? n3(t6) : r3(e5);
          });
        });
      }, touch: function(t5) {
        return new Promise(function(e4, r3) {
          n2.touch(t5, function(t6) {
            t6 ? r3(t6) : e4();
          });
        });
      }, find: function(t5, e4) {
        return new Promise(function(r3, i4) {
          n2.find(t5, e4, function(t6, e5) {
            t6 ? i4(t6) : r3(e5);
          });
        });
      }, rm: function(t5, e4) {
        return new Promise(function(r3, i4) {
          n2.rm(t5, e4, function(t6) {
            t6 ? i4(t6) : r3();
          });
        });
      }, mkdirp: function(t5) {
        return new Promise(function(e4, r3) {
          n2.mkdirp(t5, function(t6) {
            t6 ? r3(t6) : e4();
          });
        });
      }, tempDir: function() {
        return new Promise(function(t5, e4) {
          n2.tempDir(function(r3, n3) {
            r3 ? e4(r3) : t5(n3);
          });
        });
      } }), t4 || (t4 = navigator.storage.getDirectory().then(function(t5) {
        return n2.handle = t5;
      }).catch(function() {
        throw Error(__abx$919e9d(320));
      })), this.handle = t4, this.cwd = __abx$919e9d(169), this.fs = r2 || new tW(this.handle), this.path = new y();
    }
    return t3 = [{ key: __abx$919e9d(321), value: function(t4) {
      var e4 = this, r2 = this.path.join(this.cwd, t4);
      this.fs.exists(r2, function(t5) {
        if (t5) e4.cwd = r2;
        else throw u(__abx$919e9d(143), __abx$919e9d(322).concat(r2));
      });
    } }, { key: __abx$919e9d(323), value: function() {
      return this.cwd;
    } }, { key: __abx$919e9d(324), value: function(t4, e4) {
      var r2 = this, n2 = (Array.isArray(t4) ? t4 : [t4]).map(function(t5) {
        return r2.path.join(r2.cwd, t5);
      }), i3 = [], o2 = 0;
      if (0 === n2.length) {
        e4 && e4(l(__abx$919e9d(142)), null);
        return;
      }
      n2.forEach(function(t5, s2) {
        r2.fs.readFile(t5, __abx$919e9d(19), function(t6, r3) {
          t6 ? e4 && e4(l(t6), null) : i3[s2] = r3, ++o2 === n2.length && e4 && e4(null, i3.join(__abx$919e9d(1)));
        });
      });
    } }, { key: __abx$919e9d(325), value: function(t4, e4) {
      var r2 = this, n2 = this.path.join(this.cwd, t4);
      this.fs.readdir(n2, function(t5, i3) {
        if (t5) {
          e4 && e4(l(t5), null);
          return;
        }
        var o2 = i3 || [];
        if (0 === o2.length) {
          e4 && e4(null, []);
          return;
        }
        var s2 = [], a2 = 0, u2 = false;
        o2.forEach(function(t6, i4) {
          var f2 = r2.path.join(n2, t6);
          r2.fs.stat(f2, function(t7, r3) {
            if (!u2) {
              if (t7) {
                u2 = true, e4 && e4(l(t7, f2), null);
                return;
              }
              s2[i4] = r3, ++a2 === o2.length && e4 && e4(null, s2);
            }
          });
        });
      });
    } }, { key: __abx$919e9d(326), value: function(t4) {
      var e4 = this, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n2 = arguments.length > 2 ? arguments[2] : void 0, i3 = this.path.join(this.cwd, t4);
      this.fs.readFile(i3, __abx$919e9d(19), function(t5, o2) {
        if (t5 || !o2) {
          n2 && n2(l(t5 || __abx$919e9d(142)), null);
          return;
        }
        if (i3 in e4.fs.perms && e4.fs.perms[i3]) {
          var s2 = e4.fs.perms[i3].perms;
          if (!s2.includes(__abx$919e9d(327)) && !s2.includes(__abx$919e9d(295))) {
            n2 && n2(l(__abx$919e9d(150), i3), null);
            return;
          }
        }
        try {
          var a2 = { fs: e4.fs, args: r2, callback: n2 };
          Function(__abx$919e9d(317), __abx$919e9d(328), __abx$919e9d(329), o2)(a2.fs, a2.args, a2.callback);
        } catch (t6) {
          n2 && n2(t6, null);
        }
      });
    } }, { key: __abx$919e9d(330), value: function(t4, e4) {
      var r2 = this.path.join(this.cwd, t4);
      this.fs.writeFile(r2, __abx$919e9d(1), __abx$919e9d(19), function(t5) {
        t5 ? e4 && e4(l(t5)) : e4 && e4(null);
      });
    } }, { key: __abx$919e9d(331), value: function(t4, e4, r2) {
      var n2 = this, i3 = this.path.join(this.cwd, t4), o2 = [], s2 = 0, a2 = false, u2 = function(t5) {
        s2++, n2.fs.readdir(t5, function(i4, f2) {
          if (i4) {
            !a2 && (a2 = true, r2 && r2(l(i4), null));
            return;
          }
          var c2 = f2.length;
          if (!c2) {
            0 == --s2 && !a2 && (a2 = true, r2 && r2(null, o2));
            return;
          }
          f2.forEach(function(i5) {
            var f3 = n2.path.join(t5, i5);
            n2.fs.stat(f3, function(t6, n3) {
              if (t6) {
                !a2 && (a2 = true, r2 && r2(l(t6, f3), null));
                return;
              }
              ts(i5, e4.name) && o2.push(f3), n3 && __abx$919e9d(332) === n3.type && u2(f3), --c2 || 0 != --s2 || a2 || (a2 = true, r2 && r2(null, o2));
            });
          });
        });
      };
      u2(i3);
    } }, { key: __abx$919e9d(333), value: function(t4, e4, r2) {
      var n2 = this, i3 = this.path.join(this.cwd, t4);
      e4.recursive ? this.fs.readdir(i3, function(e5, o2) {
        if (e5) {
          r2 && r2(l(e5));
          return;
        }
        var s2 = o2.length;
        if (!s2) return void n2.fs.rmdir(i3, function(t5) {
          t5 ? r2 && r2(l(t5)) : r2 && r2(null);
        });
        var a2 = false;
        o2.forEach(function(e6) {
          var o3 = n2.path.join(i3, e6);
          n2.fs.stat(o3, function(u2, f2) {
            if (!a2) {
              if (u2) {
                a2 = true, r2 && r2(l(u2, o3));
                return;
              }
              f2 && __abx$919e9d(332) === f2.type ? n2.rm(n2.path.join(t4, e6), { recursive: true }, function(t5) {
                if (!a2) {
                  if (t5) {
                    a2 = true, r2 && r2(t5);
                    return;
                  }
                  --s2 || n2.fs.rmdir(i3, function(t6) {
                    t6 ? r2 && r2(l(t6)) : r2 && r2(null);
                  });
                }
              }) : n2.fs.unlink(o3, function(t5) {
                if (!a2) {
                  if (t5) {
                    a2 = true, r2 && r2(l(t5, o3));
                    return;
                  }
                  --s2 || n2.fs.rmdir(i3, function(t6) {
                    t6 ? r2 && r2(l(t6)) : r2 && r2(null);
                  });
                }
              });
            }
          });
        });
      }) : this.fs.unlink(i3, function(t5) {
        t5 ? r2 && r2(l(t5)) : r2 && r2(null);
      });
    } }, { key: __abx$919e9d(334), value: function(t4, e4) {
      this.fs.mkdir(t4, e4);
    } }, { key: __abx$919e9d(335), value: function(t4) {
      var e4 = __abx$919e9d(336).concat(Date.now(), __abx$919e9d(77)).concat(Math.floor(1e3 * Math.random())), r2 = this.path.join(this.cwd, e4);
      this.fs.mkdir(r2, function(e5) {
        e5 ? t4 && t4(l(e5, r2)) : t4 && t4(null, r2);
      });
    } }, { key: __abx$919e9d(337), value: function() {
      var t4;
      return (t4 = function() {
        var t5, e4;
        return (function(t6, e5) {
          var r2, n2, i3, o2 = { label: 0, sent: function() {
            if (1 & i3[0]) throw i3[1];
            return i3[1];
          }, trys: [], ops: [] }, s2 = Object.create((__abx$919e9d(12) == typeof Iterator ? Iterator : Object).prototype), a2 = Object.defineProperty;
          return a2(s2, __abx$919e9d(338), { value: u2(0) }), a2(s2, __abx$919e9d(339), { value: u2(1) }), a2(s2, __abx$919e9d(340), { value: u2(2) }), __abx$919e9d(12) == typeof Symbol && a2(s2, Symbol.iterator, { value: function() {
            return this;
          } }), s2;
          function u2(a3) {
            return function(u3) {
              var l2 = [a3, u3];
              if (r2) throw TypeError(__abx$919e9d(341));
              for (; s2 && (s2 = 0, l2[0] && (o2 = 0)), o2; ) try {
                if (r2 = 1, n2 && (i3 = 2 & l2[0] ? n2.return : l2[0] ? n2.throw || ((i3 = n2.return) && i3.call(n2), 0) : n2.next) && !(i3 = i3.call(n2, l2[1])).done) return i3;
                switch (n2 = 0, i3 && (l2 = [2 & l2[0], i3.value]), l2[0]) {
                  case 0:
                  case 1:
                    i3 = l2;
                    break;
                  case 4:
                    return o2.label++, { value: l2[1], done: false };
                  case 5:
                    o2.label++, n2 = l2[1], l2 = [0];
                    continue;
                  case 7:
                    l2 = o2.ops.pop(), o2.trys.pop();
                    continue;
                  default:
                    if (!(i3 = (i3 = o2.trys).length > 0 && i3[i3.length - 1]) && (6 === l2[0] || 2 === l2[0])) {
                      o2 = 0;
                      continue;
                    }
                    if (3 === l2[0] && (!i3 || l2[1] > i3[0] && l2[1] < i3[3])) {
                      o2.label = l2[1];
                      break;
                    }
                    if (6 === l2[0] && o2.label < i3[1]) {
                      o2.label = i3[1], i3 = l2;
                      break;
                    }
                    if (i3 && o2.label < i3[2]) {
                      o2.label = i3[2], o2.ops.push(l2);
                      break;
                    }
                    i3[2] && o2.ops.pop(), o2.trys.pop();
                    continue;
                }
                l2 = e5.call(t6, o2);
              } catch (t7) {
                l2 = [6, t7], n2 = 0;
              } finally {
                r2 = i3 = 0;
              }
              if (5 & l2[0]) throw l2[1];
              return { value: l2[0] ? l2[1] : void 0, done: true };
            };
          }
        })(this, function(r2) {
          switch (r2.label) {
            case 0:
              return [4, navigator.storage.getDirectory()];
            case 1:
              return [4, r2.sent().remove({ recursive: true })];
            case 2:
              return r2.sent(), [4, this.handle.getFileHandle(__abx$919e9d(342), { create: true })];
            case 3:
              return [4, r2.sent().createWritable()];
            case 4:
              return [4, (t5 = r2.sent()).write(JSON.stringify({ [__abx$919e9d(343)]: { perms: [__abx$919e9d(344)], uid: 0, gid: 0, c: Date.now() } }, null, 2))];
            case 5:
              return r2.sent(), [4, t5.close()];
            case 6:
              return r2.sent(), e4 = this.fs, [4, this.fs.promises.readFile(__abx$919e9d(342), __abx$919e9d(19)).then(function(t6) {
                return JSON.parse(t6);
              }).catch(function() {
                return {};
              })];
            case 7:
              return e4.perms = r2.sent(), console.log(__abx$919e9d(345).concat((/* @__PURE__ */ new Date()).toISOString())), [2];
          }
        });
      }, function() {
        var e4 = this, r2 = arguments;
        return new Promise(function(n2, i3) {
          var o2 = t4.apply(e4, r2);
          function s2(t5) {
            tI(o2, n2, i3, s2, a2, __abx$919e9d(338), t5);
          }
          function a2(t5) {
            tI(o2, n2, i3, s2, a2, __abx$919e9d(339), t5);
          }
          s2(void 0);
        });
      }).call(this);
    } }], (function(t4, e4) {
      for (var r2 = 0; r2 < e4.length; r2++) {
        var n2 = e4[r2];
        n2.enumerable = n2.enumerable || false, n2.configurable = true, __abx$919e9d(86) in n2 && (n2.writable = true), Object.defineProperty(t4, n2.key, n2);
      }
    })(e3.prototype, t3), e3;
  })();
  function tT(t3, e3) {
    (null == e3 || e3 > t3.length) && (e3 = t3.length);
    for (var r2 = 0, n2 = Array(e3); r2 < e3; r2++) n2[r2] = t3[r2];
    return n2;
  }
  function tP(t3, e3, r2, n2, i3, o2, s2) {
    try {
      var a2 = t3[o2](s2), u2 = a2.value;
    } catch (t4) {
      r2(t4);
      return;
    }
    a2.done ? e3(u2) : Promise.resolve(u2).then(n2, i3);
  }
  function tB(t3) {
    return function() {
      var e3 = this, r2 = arguments;
      return new Promise(function(n2, i3) {
        var o2 = t3.apply(e3, r2);
        function s2(t4) {
          tP(o2, n2, i3, s2, a2, __abx$919e9d(338), t4);
        }
        function a2(t4) {
          tP(o2, n2, i3, s2, a2, __abx$919e9d(339), t4);
        }
        s2(void 0);
      });
    };
  }
  function tk(t3, e3) {
    if (!(t3 instanceof e3)) throw TypeError(__abx$919e9d(167));
  }
  function tN(t3, e3) {
    for (var r2 = 0; r2 < e3.length; r2++) {
      var n2 = e3[r2];
      n2.enumerable = n2.enumerable || false, n2.configurable = true, __abx$919e9d(86) in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
    }
  }
  function tM(t3, e3, r2) {
    return e3 && tN(t3.prototype, e3), t3;
  }
  function tF(t3, e3, r2) {
    return e3 in t3 ? Object.defineProperty(t3, e3, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e3] = r2, t3;
  }
  function tj(t3, e3) {
    return null != e3 && __abx$919e9d(9) > typeof Symbol && e3[Symbol.hasInstance] ? !!e3[Symbol.hasInstance](t3) : t3 instanceof e3;
  }
  function tD(t3) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var r2 = null != arguments[e3] ? arguments[e3] : {}, n2 = Object.keys(r2);
      __abx$919e9d(12) == typeof Object.getOwnPropertySymbols && (n2 = n2.concat(Object.getOwnPropertySymbols(r2).filter(function(t4) {
        return Object.getOwnPropertyDescriptor(r2, t4).enumerable;
      }))), n2.forEach(function(e4) {
        tF(t3, e4, r2[e4]);
      });
    }
    return t3;
  }
  function tC(t3, e3) {
    return e3 = null != e3 ? e3 : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(e3)) : (function(t4) {
      var e4 = Object.keys(t4);
      if (Object.getOwnPropertySymbols) {
        var r2 = Object.getOwnPropertySymbols(t4);
        e4.push.apply(e4, r2);
      }
      return e4;
    })(Object(e3)).forEach(function(r2) {
      Object.defineProperty(t3, r2, Object.getOwnPropertyDescriptor(e3, r2));
    }), t3;
  }
  function tU(t3, e3) {
    return (function(t4) {
      if (Array.isArray(t4)) return t4;
    })(t3) || (function(t4, e4) {
      var r2, n2, i3 = null == t4 ? null : __abx$919e9d(9) > typeof Symbol && t4[Symbol.iterator] || t4[__abx$919e9d(161)];
      if (null != i3) {
        var o2 = [], s2 = true, a2 = false;
        try {
          for (i3 = i3.call(t4); !(s2 = (r2 = i3.next()).done) && (o2.push(r2.value), !e4 || o2.length !== e4); s2 = true) ;
        } catch (t5) {
          a2 = true, n2 = t5;
        } finally {
          try {
            s2 || null == i3.return || i3.return();
          } finally {
            if (a2) throw n2;
          }
        }
        return o2;
      }
    })(t3, e3) || (function(t4, e4) {
      if (t4) {
        if (__abx$919e9d(17) == typeof t4) return tT(t4, e4);
        var r2 = Object.prototype.toString.call(t4).slice(8, -1);
        if (__abx$919e9d(162) === r2 && t4.constructor && (r2 = t4.constructor.name), __abx$919e9d(163) === r2 || __abx$919e9d(164) === r2) return Array.from(r2);
        if (__abx$919e9d(165) === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2)) return tT(t4, e4);
      }
    })(t3, e3) || (function() {
      throw TypeError(__abx$919e9d(346));
    })();
  }
  function t_(t3) {
    return t3 && __abx$919e9d(9) > typeof Symbol && t3.constructor === Symbol ? __abx$919e9d(0) : typeof t3;
  }
  function tL(t3, e3) {
    var r2, n2, i3, o2 = { label: 0, sent: function() {
      if (1 & i3[0]) throw i3[1];
      return i3[1];
    }, trys: [], ops: [] }, s2 = Object.create((__abx$919e9d(12) == typeof Iterator ? Iterator : Object).prototype), a2 = Object.defineProperty;
    return a2(s2, __abx$919e9d(338), { value: u2(0) }), a2(s2, __abx$919e9d(339), { value: u2(1) }), a2(s2, __abx$919e9d(340), { value: u2(2) }), __abx$919e9d(12) == typeof Symbol && a2(s2, Symbol.iterator, { value: function() {
      return this;
    } }), s2;
    function u2(a3) {
      return function(u3) {
        var l2 = [a3, u3];
        if (r2) throw TypeError(__abx$919e9d(341));
        for (; s2 && (s2 = 0, l2[0] && (o2 = 0)), o2; ) try {
          if (r2 = 1, n2 && (i3 = 2 & l2[0] ? n2.return : l2[0] ? n2.throw || ((i3 = n2.return) && i3.call(n2), 0) : n2.next) && !(i3 = i3.call(n2, l2[1])).done) return i3;
          switch (n2 = 0, i3 && (l2 = [2 & l2[0], i3.value]), l2[0]) {
            case 0:
            case 1:
              i3 = l2;
              break;
            case 4:
              return o2.label++, { value: l2[1], done: false };
            case 5:
              o2.label++, n2 = l2[1], l2 = [0];
              continue;
            case 7:
              l2 = o2.ops.pop(), o2.trys.pop();
              continue;
            default:
              if (!(i3 = (i3 = o2.trys).length > 0 && i3[i3.length - 1]) && (6 === l2[0] || 2 === l2[0])) {
                o2 = 0;
                continue;
              }
              if (3 === l2[0] && (!i3 || l2[1] > i3[0] && l2[1] < i3[3])) {
                o2.label = l2[1];
                break;
              }
              if (6 === l2[0] && o2.label < i3[1]) {
                o2.label = i3[1], i3 = l2;
                break;
              }
              if (i3 && o2.label < i3[2]) {
                o2.label = i3[2], o2.ops.push(l2);
                break;
              }
              i3[2] && o2.ops.pop(), o2.trys.pop();
              continue;
          }
          l2 = e3.call(t3, o2);
        } catch (t4) {
          l2 = [6, t4], n2 = 0;
        } finally {
          r2 = i3 = 0;
        }
        if (5 & l2[0]) throw l2[1];
        return { value: l2[0] ? l2[1] : void 0, done: true };
      };
    }
  }
  var t$ = { O_RDONLY: 0, O_WRONLY: 1, O_RDWR: 2, S_IFMT: 61440, S_IFREG: 32768, S_IFDIR: 16384, S_IFCHR: 8192, S_IFBLK: 24576, S_IFIFO: 4096, S_IFLNK: 40960, S_IFSOCK: 49152, O_CREAT: 512, O_EXCL: 2048, O_NOCTTY: 131072, O_TRUNC: 1024, O_APPEND: 8, O_DIRECTORY: 1048576, O_NOFOLLOW: 256, O_SYNC: 128, O_DSYNC: 4194304, O_SYMLINK: 2097152, O_NONBLOCK: 4, S_IRWXU: 448, S_IRUSR: 256, S_IWUSR: 128, S_IXUSR: 64, S_IRWXG: 56, S_IRGRP: 32, S_IWGRP: 16, S_IXGRP: 8, S_IRWXO: 7, S_IROTH: 4, S_IWOTH: 2, S_IXOTH: 1, F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1, UV_FS_COPYFILE_EXCL: 1, COPYFILE_EXCL: 1 };
  var tzDirect = function(t3, e3) {
    return tB(function() {
      var r2, n2, i3, o2, s2, a2;
      return tL(this, function(u2) {
        switch (u2.label) {
          case 0:
            return [4, t3.getFileHandle(__abx$919e9d(342), { create: true })];
          case 1:
            return [4, (r2 = u2.sent()).getFile()];
          case 2:
            return n2 = u2.sent(), i3 = JSON.parse, [4, n2.text()];
          case 3:
            if (o2 = tD({}, i3.apply(JSON, [u2.sent()])), e3) for (var l2 in e3) true === (s2 = e3[l2]) ? delete o2[l2] : false !== s2 && (o2[l2] = s2);
            return [4, r2.createWritable()];
          case 4:
            return [4, (a2 = u2.sent()).write(JSON.stringify(o2, null, 2))];
          case 5:
            return u2.sent(), [4, a2.close()];
          case 6:
            return u2.sent(), [2];
        }
      });
    })();
  }, tzQueue = Promise.resolve(), tz = function(t3, e3) {
    var run = tzQueue.then(function() {
      return tzDirect(t3, e3);
    });
    run.catch(function(e) {
      console.warn(__abx$919e9d(347), e);
    });
    tzQueue = run.catch(function() {});
    return run;
  }, tW = (function() {
    function t3(e3) {
      var r2 = this;
      tk(this, t3), tF(this, __abx$919e9d(315), void 0), tF(this, __abx$919e9d(348), void 0), tF(this, __abx$919e9d(349), void 0), tF(this, __abx$919e9d(350), {}), tF(this, __abx$919e9d(351), t$), tF(this, __abx$919e9d(352), f), tF(this, __abx$919e9d(353), 0), tF(this, __abx$919e9d(354), /* @__PURE__ */ new Map()), tF(this, __abx$919e9d(355), __abx$919e9d(356)), tF(this, __abx$919e9d(319), { writeFile: function(t4, e4, n2) {
        return new Promise(function(i3, o2) {
          r2.writeFile(t4, e4, n2, function(t5) {
            t5 ? o2(t5) : i3();
          });
        });
      }, readFile: function(t4, e4) {
        return new Promise(function(n2, i3) {
          var o2, s2 = e4;
          __abx$919e9d(12) == typeof e4 && (o2 = e4, s2 = void 0);
          var a2 = function(t5, e5) {
            try {
              o2 && o2(t5, e5);
            } catch (t6) {
            }
            t5 ? i3(t5) : n2(e5);
          };
          void 0 === s2 ? r2.readFile(t4, a2) : r2.readFile(t4, s2, a2);
        });
      }, read: function(t4, e4) {
        return r2.read(t4, e4 || { encoding: null });
      }, mkdir: function(t4) {
        return new Promise(function(e4, n2) {
          r2.mkdir(t4, function(t5) {
            t5 ? n2(t5) : e4();
          });
        });
      }, readdir: function(t4, e4) {
        return new Promise(function(n2, i3) {
          r2.readdir(t4, e4, function(t5, e5) {
            t5 ? i3(t5) : n2(e5);
          });
        });
      }, stat: function(t4) {
        return new Promise(function(e4, n2) {
          r2.stat(t4, function(t5, r3) {
            t5 ? n2(t5) : e4(r3);
          });
        });
      }, lstat: function(t4) {
        return new Promise(function(e4, n2) {
          r2.lstat(t4, function(t5, r3) {
            t5 ? n2(t5) : e4(r3);
          });
        });
      }, appendFile: function(t4, e4) {
        return new Promise(function(n2, i3) {
          r2.appendFile(t4, e4, function(t5) {
            t5 ? i3(t5) : n2();
          });
        });
      }, unlink: function(t4) {
        return new Promise(function(e4, n2) {
          r2.unlink(t4, function(t5) {
            t5 ? n2(t5) : e4();
          });
        });
      }, exists: function(t4) {
        return new Promise(function(e4) {
          r2.exists(t4, function(t5) {
            e4(t5);
          });
        });
      }, access: function(t4, e4) {
        return new Promise(function(n2) {
          r2.access(t4, e4, function(t5) {
            n2(t5);
          });
        });
      }, rmdir: function(t4, e4) {
        return new Promise(function(n2, i3) {
          r2.rmdir(t4, e4, function(t5) {
            t5 ? i3(t5) : n2();
          });
        });
      }, rename: function(t4, e4) {
        return new Promise(function(n2, i3) {
          r2.rename(t4, e4, function(t5) {
            t5 ? i3(t5) : n2();
          });
        });
      }, copyFile: function(t4, e4) {
        return new Promise(function(n2, i3) {
          r2.copyFile(t4, e4, function(t5) {
            t5 ? i3(t5) : n2();
          });
        });
      }, symlink: function(t4, e4, n2) {
        return new Promise(function(i3, o2) {
          r2.symlink(t4, e4, n2, function(t5) {
            t5 ? o2(t5) : i3();
          });
        });
      }, readlink: function(t4) {
        return new Promise(function(e4, n2) {
          r2.readlink(t4, function(t5, r3) {
            t5 ? n2(t5) : e4(r3);
          });
        });
      }, link: function(t4, e4) {
        return new Promise(function(n2, i3) {
          r2.link(t4, e4, function(t5) {
            t5 ? i3(t5) : n2();
          });
        });
      }, cp: function(t4, e4) {
        return new Promise(function(n2, i3) {
          r2.cp(t4, e4, function(t5) {
            t5 ? i3(t5) : n2();
          });
        });
      }, chown: function(t4, e4, n2) {
        return new Promise(function(i3, o2) {
          r2.chown(t4, e4, n2, function(t5) {
            t5 ? o2(t5) : i3();
          });
        });
      }, chmod: function(t4, e4) {
        return new Promise(function(n2, i3) {
          r2.chmod(t4, e4, function(t5) {
            t5 ? i3(t5) : n2();
          });
        });
      }, getxattr: function(t4) {
        return new Promise(function(e4) {
          r2.getxattr(t4, function(t5) {
            e4(t5);
          });
        });
      }, setxattr: function(t4, e4) {
        return new Promise(function(n2, i3) {
          r2.setxattr(t4, e4, function(t5) {
            t5 ? i3(t5) : n2();
          });
        });
      } }), this.handle = e3, this.currPath = __abx$919e9d(169), this.shell = new tR(this.handle, this), this.promises.exists(__abx$919e9d(342)).then(function(t4) {
        return tB(function() {
          var e4, r3;
          return tL(this, function(n2) {
            switch (n2.label) {
              case 0:
                if (t4) return [3, 5];
                return [4, this.handle.getFileHandle(__abx$919e9d(342), { create: true })];
              case 1:
                return [4, n2.sent().createWritable()];
              case 2:
                return [4, (e4 = n2.sent()).write(JSON.stringify({ [__abx$919e9d(343)]: { perms: [__abx$919e9d(344)], uid: 0, gid: 0 } }, null, 2))];
              case 3:
                return n2.sent(), [4, e4.close()];
              case 4:
                n2.sent(), n2.label = 5;
              case 5:
                return r3 = this, [4, this.promises.readFile(__abx$919e9d(342), __abx$919e9d(19)).then(function(t5) {
                  return JSON.parse(t5);
                }).catch(function() {
                  return {};
                })];
              case 6:
                return r3.perms = n2.sent(), [2];
            }
          });
        }).call(r2);
      });
    }
    return tM(t3, [{ key: __abx$919e9d(357), value: function(t4, e3) {
      return tB(function() {
        var r2, n2;
        return tL(this, function(o2) {
          switch (o2.label) {
            case 0:
              if (r2 = this, !(n2 = this.normalizePath(t4)).endsWith(__abx$919e9d(358))) return [2, e3];
              return [4, Promise.all(e3.map(function(t5) {
                return tB(function() {
                  var e4, r3, o3, s2, a2, u2;
                  return tL(this, function(l2) {
                    switch (l2.label) {
                      case 0:
                        if (!t5.endsWith(__abx$919e9d(359))) return [2, t5];
                        e4 = __abx$919e9d(1).concat(n2, __abx$919e9d(169)).concat(t5), l2.label = 1;
                      case 1:
                        return l2.trys.push([1, 3, , 4]), [4, this.promises.readFile(e4, { encoding: null })];
                      case 2:
                        if (r3 = l2.sent(), (o3 = (i2.Buffer.isBuffer(r3) ? r3 : i2.Buffer.from(r3)).subarray(0, 4).toString(__abx$919e9d(37))) === this.packIdx) return [2, t5];
                        return s2 = t5.replace(/idx$/, __abx$919e9d(360)), a2 = __abx$919e9d(1).concat(n2, __abx$919e9d(169)).concat(s2), console.warn(__abx$919e9d(361), e4, __abx$919e9d(362), o3), this.unlink(e4, function() {
                        }), this.unlink(a2, function() {
                        }), [2, null];
                      case 3:
                        return u2 = l2.sent(), console.warn(__abx$919e9d(363), e4, u2), [2, null];
                      case 4:
                        return [2];
                    }
                  });
                }).call(r2);
              }))];
            case 1:
              return [2, o2.sent().filter(function(t5) {
                return __abx$919e9d(17) == typeof t5;
              })];
          }
        });
      }).call(this);
    } }, { key: __abx$919e9d(171), value: function(t4, e3) {
      if (e3 && (this.currPath = e3), !t4) return this.currPath;
      t4.startsWith(__abx$919e9d(169)) || (t4 = this.currPath + __abx$919e9d(169) + t4);
      var r2 = t4.split(__abx$919e9d(169)).filter(Boolean), n2 = [], i3 = true, o2 = false, s2 = void 0;
      try {
        for (var a2, u2 = r2[Symbol.iterator](); !(i3 = (a2 = u2.next()).done); i3 = true) {
          var l2 = a2.value;
          __abx$919e9d(133) !== l2 && __abx$919e9d(1) !== l2 && (__abx$919e9d(172) === l2 ? n2.length > 0 && n2.pop() : n2.push(l2));
        }
      } catch (t5) {
        o2 = true, s2 = t5;
      } finally {
        try {
          i3 || null == u2.return || u2.return();
        } finally {
          if (o2) throw s2;
        }
      }
      var f2 = __abx$919e9d(169) + n2.join(__abx$919e9d(169));
      return __abx$919e9d(173) === f2 && (f2 = __abx$919e9d(169)), f2;
    } }, { key: __abx$919e9d(364), value: function(t4, e3, r2, n2) {
      var i3, o2 = function(t5) {
        y2 = y2.then(function(e4) {
          return e4.getDirectoryHandle(p2[t5], { create: true });
        });
      }, s2 = this, a2 = __abx$919e9d(19), u2 = void 0 === r2 || __abx$919e9d(12) == typeof r2 || (void 0 === r2 ? __abx$919e9d(365) : t_(r2)) === __abx$919e9d(265) && null !== r2 && void 0 === r2.encoding;
      if (__abx$919e9d(12) == typeof r2) i3 = r2;
      else if ((void 0 === r2 ? __abx$919e9d(365) : t_(r2)) === __abx$919e9d(265) && null !== r2) {
        var f2 = r2.encoding;
        __abx$919e9d(366) === f2 || __abx$919e9d(367) === f2 || __abx$919e9d(38) === f2 || __abx$919e9d(19) === f2 ? a2 = f2 : (null == f2 || __abx$919e9d(368) === f2 || __abx$919e9d(31) === f2) && (a2 = __abx$919e9d(17) == typeof e3 ? __abx$919e9d(19) : __abx$919e9d(366)), i3 = n2;
      } else a2 = r2 || __abx$919e9d(19), i3 = n2;
      for (var c2 = this.normalizePath(t4), h2 = c2.includes(__abx$919e9d(369)) && (c2.endsWith(__abx$919e9d(359)) || c2.endsWith(__abx$919e9d(370))), p2 = c2.split(__abx$919e9d(169)).filter(Boolean), y2 = Promise.resolve(this.handle), d2 = 0; d2 < p2.length - 1; d2++) o2(d2);
      if (c2 in this.perms && this.perms[c2] && !(this.perms[c2].perms.includes(__abx$919e9d(371)) || this.perms[c2].perms.includes(__abx$919e9d(295)))) {
        i3 && __abx$919e9d(12) == typeof i3 && i3(l(__abx$919e9d(150), c2));
        return;
      }
      var g2 = p2[p2.length - 1];
      y2.then(function(t5) {
        return t5.getFileHandle(g2, { create: true });
      }).then(function(t5) {
        return t5.createWritable();
      }).then(function(t5) {
        return tB(function() {
          var r3, n3, i4, o3, s3, l2, f3, p3, y3, d3;
          return tL(this, function(g3) {
            switch (g3.label) {
              case 0:
                if (n3 = function(t6) {
                  return ArrayBuffer.isView(t6);
                }, h2 && (a2 = __abx$919e9d(366)), !u2) return [3, 1];
                if (__abx$919e9d(17) == typeof e3) if (h2) {
                  for (o3 = 0, i4 = new Uint8Array(e3.length); o3 < e3.length; o3++) i4[o3] = 255 & e3.charCodeAt(o3);
                  r3 = i4.buffer, a2 = __abx$919e9d(366);
                } else r3 = e3, a2 = __abx$919e9d(19);
                else tj(e3, ArrayBuffer) ? (r3 = e3, a2 = __abx$919e9d(366)) : n3(e3) ? (r3 = e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength), a2 = __abx$919e9d(366)) : tj(e3, Blob) ? (r3 = e3, a2 = __abx$919e9d(367)) : (r3 = String(e3), a2 = __abx$919e9d(19));
                return [3, 23];
              case 1:
                switch (a2) {
                  case __abx$919e9d(366):
                    return [3, 2];
                  case __abx$919e9d(367):
                    return [3, 9];
                  case __abx$919e9d(38):
                    return [3, 10];
                }
                return [3, 17];
              case 2:
                if (__abx$919e9d(17) != typeof e3) return [3, 3];
                if (h2) {
                  for (l2 = 0, s3 = new Uint8Array(e3.length); l2 < e3.length; l2++) s3[l2] = 255 & e3.charCodeAt(l2);
                  r3 = s3.buffer;
                } else r3 = new TextEncoder().encode(e3).buffer;
                return [3, 8];
              case 3:
                if (!tj(e3, ArrayBuffer)) return [3, 4];
                return r3 = e3, [3, 8];
              case 4:
                if (!n3(e3)) return [3, 5];
                return r3 = e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength), [3, 8];
              case 5:
                if (!tj(e3, Blob)) return [3, 7];
                return [4, e3.arrayBuffer()];
              case 6:
                return r3 = g3.sent(), [3, 8];
              case 7:
                r3 = new ArrayBuffer(0), g3.label = 8;
              case 8:
                return [3, 23];
              case 9:
                return r3 = tj(e3, Blob) ? e3 : __abx$919e9d(17) == typeof e3 || tj(e3, ArrayBuffer) || tj(e3, Uint8Array) ? new Blob([e3]) : new Blob([]), [3, 23];
              case 10:
                if (__abx$919e9d(17) != typeof e3) return [3, 11];
                for (d3 = 0, y3 = new Uint8Array(p3 = (f3 = atob(e3)).length); d3 < p3; d3++) y3[d3] = f3.charCodeAt(d3);
                return r3 = y3.buffer, [3, 16];
              case 11:
                if (!tj(e3, ArrayBuffer)) return [3, 12];
                return r3 = e3, [3, 16];
              case 12:
                if (!n3(e3)) return [3, 13];
                return r3 = e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength), [3, 16];
              case 13:
                if (!tj(e3, Blob)) return [3, 15];
                return [4, e3.arrayBuffer()];
              case 14:
                return r3 = g3.sent(), [3, 16];
              case 15:
                r3 = new ArrayBuffer(0), g3.label = 16;
              case 16:
                return [3, 23];
              case 17:
                if (__abx$919e9d(17) != typeof e3) return [3, 18];
                return r3 = e3, [3, 23];
              case 18:
                if (!tj(e3, ArrayBuffer)) return [3, 19];
                return r3 = new TextDecoder().decode(e3), [3, 23];
              case 19:
                if (!n3(e3)) return [3, 20];
                return r3 = new TextDecoder().decode(e3), [3, 23];
              case 20:
                if (!tj(e3, Blob)) return [3, 22];
                return [4, e3.text()];
              case 21:
                return r3 = g3.sent(), [3, 23];
              case 22:
                r3 = String(e3), g3.label = 23;
              case 23:
                return [4, t5.write(r3)];
              case 24:
                return g3.sent(), this.perms[c2] || (tz(this.handle, tF({}, c2, { perms: [__abx$919e9d(295)], uid: 0, gid: 0 })), this.perms = tC(tD({}, this.perms), tF({}, c2, { perms: [__abx$919e9d(295)], uid: 0, gid: 0 }))), [4, t5.close()];
              case 25:
                return g3.sent(), [2];
            }
          });
        }).call(s2);
      }).then(function() {
        i3 && __abx$919e9d(12) == typeof i3 && i3(null);
      }).catch(function(t5) {
        i3 && __abx$919e9d(12) == typeof i3 && i3(l(t5, c2));
      });
    } }, { key: __abx$919e9d(372), value: function(t4, e3, r2) {
      var n2, o2 = function(t5) {
        m2 = m2.then(function(e4) {
          return e4.getDirectoryHandle(g2[t5]);
        });
      }, s2 = this, a2 = __abx$919e9d(19), u2 = (void 0 === e3 ? __abx$919e9d(365) : t_(e3)) === __abx$919e9d(265) && null !== e3, f2 = String(t4 || __abx$919e9d(1)), c2 = this.normalizePath(t4), h2 = f2.startsWith(__abx$919e9d(169)) ? c2 : __abx$919e9d(169).concat(f2.replace(/^\/+/, __abx$919e9d(1))), p2 = (String(c2).split(__abx$919e9d(237))[0].split(__abx$919e9d(268))[0].split(__abx$919e9d(133)).pop() || __abx$919e9d(1)).toLowerCase(), y2 = /* @__PURE__ */ new Set([__abx$919e9d(373), __abx$919e9d(374), __abx$919e9d(375), __abx$919e9d(376), __abx$919e9d(377), __abx$919e9d(378), __abx$919e9d(379), __abx$919e9d(380), __abx$919e9d(381), __abx$919e9d(382), __abx$919e9d(383), __abx$919e9d(384), __abx$919e9d(385), __abx$919e9d(386), __abx$919e9d(387), __abx$919e9d(388), __abx$919e9d(389), __abx$919e9d(390), __abx$919e9d(391), __abx$919e9d(392), __abx$919e9d(393), __abx$919e9d(394), __abx$919e9d(395), __abx$919e9d(396), __abx$919e9d(397), __abx$919e9d(398), __abx$919e9d(399), __abx$919e9d(400), __abx$919e9d(401), __abx$919e9d(402), __abx$919e9d(403), __abx$919e9d(360)]);
      if (__abx$919e9d(17) == typeof e3) a2 = e3;
      else if ((void 0 === e3 ? __abx$919e9d(365) : t_(e3)) === __abx$919e9d(265) && null !== e3) {
        var d2 = e3.encoding;
        a2 = null == d2 || __abx$919e9d(368) === d2 || __abx$919e9d(31) === d2 ? __abx$919e9d(366) : d2;
      } else a2 = y2.has(p2) || c2.includes(__abx$919e9d(404)) || c2.includes(__abx$919e9d(369)) ? __abx$919e9d(366) : __abx$919e9d(19);
      if (n2 = __abx$919e9d(17) == typeof e3 || (void 0 === e3 ? __abx$919e9d(365) : t_(e3)) === __abx$919e9d(265) ? r2 : e3, c2 in this.perms && this.perms[c2] && !(this.perms[c2].perms.includes(__abx$919e9d(344)) || this.perms[c2].perms.includes(__abx$919e9d(295)))) {
        n2 && __abx$919e9d(12) == typeof n2 && n2(l(__abx$919e9d(150), c2), null);
        return;
      }
      for (var g2 = c2.split(__abx$919e9d(169)).filter(Boolean), m2 = Promise.resolve(this.handle), v2 = 0; v2 < g2.length - 1; v2++) o2(v2);
      var b2 = g2[g2.length - 1];
      m2.then(function(t5) {
        return t5.getFileHandle(b2);
      }).then(function(t5) {
        return t5.getFile();
      }).then(function(t5) {
        if (__abx$919e9d(366) === a2) return void t5.arrayBuffer().then(function(t6) {
          var e5 = u2 ? i2.Buffer.from(new Uint8Array(t6)) : t6;
          n2 && __abx$919e9d(12) == typeof n2 && n2(null, e5);
        }).catch(function(e5) {
          n2 && __abx$919e9d(12) == typeof n2 && n2(l(e5, t5.name), null);
        });
        if (__abx$919e9d(367) === a2) {
          n2 && __abx$919e9d(12) == typeof n2 && n2(null, t5);
          return;
        }
        if (__abx$919e9d(38) === a2) {
          var e4 = new FileReader();
          e4.onload = function() {
            n2 && __abx$919e9d(12) == typeof n2 && n2(null, e4.result);
          }, e4.onerror = function(e5) {
            n2 && __abx$919e9d(12) == typeof n2 && n2(l(e5, t5.name), null);
          }, e4.readAsDataURL(t5);
          return;
        }
        t5.text().then(function(e5) {
          var r3 = /^symlink:(.+?):(file|dir|junction)$/.exec(e5);
          if (r3) {
            var i3 = r3[1];
            __abx$919e9d(405) === r3[2] ? s2.readFile(i3, a2, n2) : n2 && __abx$919e9d(12) == typeof n2 && n2(l(Error(__abx$919e9d(144)), t5.name), null);
            return;
          }
          n2 && __abx$919e9d(12) == typeof n2 && n2(null, e5);
        }).catch(function(e5) {
          n2 && __abx$919e9d(12) == typeof n2 && n2(l(e5, t5.name), null);
        });
      }).catch(function(i3) {
        f2.startsWith(__abx$919e9d(169)) || h2 === c2 || (null == i3 ? void 0 : i3.name) !== __abx$919e9d(142) && (null == i3 ? void 0 : i3.name) !== __abx$919e9d(144) ? (c2.includes(__abx$919e9d(369)) && (c2.endsWith(__abx$919e9d(359)) || c2.endsWith(__abx$919e9d(370))) && console.error(__abx$919e9d(406), c2, i3), n2 && __abx$919e9d(12) == typeof n2 && n2(l(i3, t4), null)) : s2.readFile(h2, e3, r2);
      });
    } }, { key: __abx$919e9d(407), value: function(t4, e3) {
      var r2 = this.normalizePath(t4), n2 = r2.split(__abx$919e9d(169)).filter(Boolean), i3 = Promise.resolve(this.handle), o2 = true, s2 = false, a2 = void 0;
      try {
        for (var u2, f2 = n2[Symbol.iterator](); !(o2 = (u2 = f2.next()).done); o2 = true) !(function() {
          var t5 = u2.value;
          i3 = i3.then(function(e4) {
            return e4.getDirectoryHandle(t5, { create: true });
          });
        })();
      } catch (t5) {
        s2 = true, a2 = t5;
      } finally {
        try {
          o2 || null == f2.return || f2.return();
        } finally {
          if (s2) throw a2;
        }
      }
      e3 && (i3.then(function() {
        return e3(null);
      }).catch(function(r3) {
        e3(l(r3, t4));
      }), tz(this.handle, tF({}, r2, { perms: [__abx$919e9d(295)], uid: 0, gid: 0 })), this.perms = tC(tD({}, this.perms), tF({}, r2, { perms: [__abx$919e9d(295)], uid: 0, gid: 0 })));
    } }, { key: __abx$919e9d(408), value: function(t4, e3, r2) {
      var n2 = this, i3 = __abx$919e9d(12) == typeof e3 ? e3 : r2, o2 = (void 0 === e3 ? __abx$919e9d(365) : t_(e3)) === __abx$919e9d(265) ? e3 : null, s2 = this.normalizePath(t4), a2 = s2.split(__abx$919e9d(169)).filter(Boolean), u2 = Promise.resolve(this.handle), f2 = true, c2 = false, h2 = void 0;
      try {
        for (var p2, y2 = a2[Symbol.iterator](); !(f2 = (p2 = y2.next()).done); f2 = true) !(function() {
          var t5 = p2.value;
          u2 = u2.then(function(e4) {
            return e4.getDirectoryHandle(t5);
          });
        })();
      } catch (t5) {
        c2 = true, h2 = t5;
      } finally {
        try {
          f2 || null == y2.return || y2.return();
        } finally {
          if (c2) throw h2;
        }
      }
      u2.then(function(e4) {
        var r3 = [], a3 = e4.entries(), u3 = function() {
          a3.next().then(function(e5) {
            if (e5.done) {
              if (o2 && o2.recursive) return void tB(function() {
                var e6, r4, n3;
                return tL(this, function(o3) {
                  switch (o3.label) {
                    case 0:
                      return o3.trys.push([0, 2, , 3]), e6 = this, r4 = [], [4, (n3 = function(t5) {
                        var i4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : __abx$919e9d(1);
                        return tB(function() {
                          var e7, o4, s3, a5, u4, l2, f3, c3, h3, p3, y3;
                          return tL(this, function(d2) {
                            switch (d2.label) {
                              case 0:
                                return [4, this.promises.readdir(t5).catch(function() {
                                  return [];
                                })];
                              case 1:
                                e7 = d2.sent(), o4 = true, s3 = false, a5 = void 0, d2.label = 2;
                              case 2:
                                d2.trys.push([2, 8, 9, 10]), u4 = e7[Symbol.iterator](), d2.label = 3;
                              case 3:
                                if (o4 = (l2 = u4.next()).done) return [3, 7];
                                if (__abx$919e9d(342) === (f3 = l2.value)) return [3, 6];
                                return c3 = i4 ? __abx$919e9d(1).concat(i4, __abx$919e9d(169)).concat(f3) : f3, r4.push(c3), h3 = this.normalizePath(t5 + __abx$919e9d(169) + f3), [4, this.promises.stat(h3).catch(function() {
                                  return null;
                                })];
                              case 4:
                                if (!((p3 = d2.sent()) && __abx$919e9d(332) === p3.type)) return [3, 6];
                                return [4, n3(h3, c3)];
                              case 5:
                                d2.sent(), d2.label = 6;
                              case 6:
                                return o4 = true, [3, 3];
                              case 7:
                                return [3, 10];
                              case 8:
                                return y3 = d2.sent(), s3 = true, a5 = y3, [3, 10];
                              case 9:
                                try {
                                  o4 || null == u4.return || u4.return();
                                } finally {
                                  if (s3) throw a5;
                                }
                                return [7];
                              case 10:
                                return [2];
                            }
                          });
                        }).call(e6);
                      })(this.normalizePath(t4))];
                    case 1:
                      return o3.sent(), i3(null, r4), [3, 3];
                    case 2:
                      return i3(l(o3.sent(), t4), null), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              }).call(n2);
              n2.validatePackIndexEntries(s2, r3).then(function(t5) {
                return i3(null, t5);
              }).catch(function(e6) {
                return i3(l(e6, t4), null);
              });
            } else {
              var a4 = tU(e5.value, 1)[0];
              __abx$919e9d(342) !== a4 && r3.push(a4), u3();
            }
          }).catch(function(e5) {
            i3(l(e5, t4), null);
          });
        };
        u3();
      }).catch(function(e4) {
        i3(l(e4, t4), null);
      });
    } }, { key: __abx$919e9d(409), value: function(t4, e3) {
      var r2, n2 = function(t5) {
        a2 = a2.then(function(e4) {
          return e4.getDirectoryHandle(s2[t5]);
        });
      }, i3 = this, o2 = this.normalizePath(t4);
      if (__abx$919e9d(169) === o2) return void e3(null, { name: __abx$919e9d(169), size: 0, mime: __abx$919e9d(332), type: __abx$919e9d(332), ctime: 0, mtime: 0, atime: /* @__PURE__ */ new Date(), atimeMs: (/* @__PURE__ */ new Date()).getTime(), ctimeMs: 0, mtimeMs: 0, dev: __abx$919e9d(410), isSymbolicLink: function() {
        return false;
      }, isDirectory: function() {
        return true;
      }, isFile: function() {
        return false;
      }, uid: 0, gid: 0, mode: 16877 });
      for (var s2 = o2.split(__abx$919e9d(169)).filter(Boolean), a2 = Promise.resolve(this.handle), u2 = 0; u2 < s2.length - 1; u2++) n2(u2);
      var f2 = s2[s2.length - 1], c2 = this.perms[o2];
      r2 = c2 && c2.perms.includes(__abx$919e9d(295)) ? 33216 : c2 && c2.perms.includes(__abx$919e9d(371)) ? 32896 : c2 && c2.perms.includes(__abx$919e9d(344)) ? 33024 : 33188, a2.then(function(n3) {
        return n3.getFileHandle(f2).then(function(t5) {
          return t5.getFile().then(function(t6) {
            return t6.text().then(function(n4) {
              var s3 = /^symlink:(.+?):(file|dir|junction)$/.exec(n4);
              if (s3) {
                var a3 = s3[1];
                i3.stat(a3, function(t7, r3) {
                  if (t7) e3(l(t7, a3), null);
                  else if (r3) {
                    var n5;
                    e3(null, tC(tD({}, r3), { dev: __abx$919e9d(410), mime: __abx$919e9d(411), type: __abx$919e9d(412), isSymbolicLink: function() {
                      return true;
                    }, isDirectory: function() {
                      return __abx$919e9d(332) === r3.type;
                    }, isFile: function() {
                      return __abx$919e9d(332) !== r3.type;
                    }, mode: (null == (n5 = i3.perms[o2]) ? void 0 : n5.uid) || 41471, atime: /* @__PURE__ */ new Date(), atimeMs: (/* @__PURE__ */ new Date()).getTime() }));
                  }
                });
              } else e3(null, { name: t6.name, size: t6.size, mime: t6.type, type: __abx$919e9d(332) === t6.type ? __abx$919e9d(332) : __abx$919e9d(413), ctime: new Date(t6.lastModified), mtime: new Date(t6.lastModified), atime: /* @__PURE__ */ new Date(), ctimeMs: t6.lastModified, mtimeMs: t6.lastModified, atimeMs: (/* @__PURE__ */ new Date()).getTime(), dev: __abx$919e9d(410), isSymbolicLink: function() {
                return false;
              }, isDirectory: function() {
                return __abx$919e9d(332) === t6.type;
              }, isFile: function() {
                return __abx$919e9d(332) !== t6.type;
              }, uid: 0, gid: 0, mode: r2 });
            });
          });
        }).catch(function(i4) {
          i4 && __abx$919e9d(142) === i4.name ? n3.getDirectoryHandle(f2).then(function() {
            return e3(null, { name: f2, size: 0, type: __abx$919e9d(332), mime: __abx$919e9d(332), ctime: 0, mtime: 0, atime: /* @__PURE__ */ new Date(), atimeMs: (/* @__PURE__ */ new Date()).getTime(), ctimeMs: 0, mtimeMs: 0, dev: __abx$919e9d(410), isSymbolicLink: function() {
              return false;
            }, isDirectory: function() {
              return true;
            }, isFile: function() {
              return false;
            }, uid: 0, gid: 0, mode: r2 });
          }).catch(function(r3) {
            e3(l(r3, t4), null);
          }) : i4 && __abx$919e9d(144) === i4.name ? n3.getDirectoryHandle(f2).then(function() {
            return e3(null, { name: f2, size: 0, type: __abx$919e9d(332), mime: __abx$919e9d(332), ctime: 0, mtime: 0, atime: /* @__PURE__ */ new Date(), ctimeMs: 0, mtimeMs: 0, atimeMs: (/* @__PURE__ */ new Date()).getTime(), dev: __abx$919e9d(410), isSymbolicLink: function() {
              return false;
            }, isDirectory: function() {
              return true;
            }, isFile: function() {
              return false;
            }, uid: 0, gid: 0, mode: r2 });
          }).catch(function(r3) {
            e3(l(r3, t4), null);
          }) : e3(l(i4, t4), null);
        });
      }).catch(function(r3) {
        e3(l(r3, t4), null);
      });
    } }, { key: __abx$919e9d(414), value: function(t4, e3) {
      var r2, n2 = function(t5) {
        s2 = s2.then(function(e4) {
          return e4.getDirectoryHandle(o2[t5]);
        });
      }, i3 = this.normalizePath(t4);
      if (__abx$919e9d(169) === i3) return void e3(null, { name: __abx$919e9d(169), size: 0, type: __abx$919e9d(332), mime: __abx$919e9d(332), ctime: 0, mtime: 0, atime: /* @__PURE__ */ new Date(), atimeMs: (/* @__PURE__ */ new Date()).getTime(), ctimeMs: 0, mtimeMs: 0, dev: __abx$919e9d(410), isSymbolicLink: function() {
        return false;
      }, isDirectory: function() {
        return true;
      }, isFile: function() {
        return false;
      }, uid: 0, gid: 0, mode: 16877 });
      for (var o2 = i3.split(__abx$919e9d(169)).filter(Boolean), s2 = Promise.resolve(this.handle), a2 = 0; a2 < o2.length - 1; a2++) n2(a2);
      var u2 = o2[o2.length - 1], f2 = this.perms[i3];
      r2 = f2 && f2.perms.includes(__abx$919e9d(295)) ? 33216 : f2 && f2.perms.includes(__abx$919e9d(371)) ? 32896 : f2 && f2.perms.includes(__abx$919e9d(344)) ? 33024 : 33188, s2.then(function(n3) {
        return n3.getFileHandle(u2).then(function(t5) {
          return t5.getFile().then(function(t6) {
            return e3(null, { name: t6.name, size: t6.size, mime: t6.type, type: __abx$919e9d(332) === t6.type ? __abx$919e9d(332) : __abx$919e9d(413), ctime: new Date(t6.lastModified), mtime: new Date(t6.lastModified), atime: /* @__PURE__ */ new Date(), ctimeMs: t6.lastModified, mtimeMs: t6.lastModified, atimeMs: (/* @__PURE__ */ new Date()).getTime(), dev: __abx$919e9d(410), isSymbolicLink: function() {
              return false;
            }, isDirectory: function() {
              return __abx$919e9d(332) === t6.type;
            }, isFile: function() {
              return __abx$919e9d(332) !== t6.type;
            }, uid: 0, gid: 0, mode: r2 });
          });
        }).catch(function(i4) {
          i4 && __abx$919e9d(142) === i4.name ? n3.getDirectoryHandle(u2).then(function() {
            return e3(null, { name: u2, size: 0, type: __abx$919e9d(332), mime: __abx$919e9d(332), ctime: 0, mtime: 0, atime: /* @__PURE__ */ new Date(), ctimeMs: 0, mtimeMs: 0, atimeMs: (/* @__PURE__ */ new Date()).getTime(), dev: __abx$919e9d(410), isSymbolicLink: function() {
              return false;
            }, isDirectory: function() {
              return true;
            }, isFile: function() {
              return false;
            }, uid: 0, gid: 0, mode: r2 });
          }).catch(function(r3) {
            e3(l(r3, t4), null);
          }) : i4 && __abx$919e9d(144) === i4.name ? n3.getDirectoryHandle(u2).then(function() {
            return e3(null, { name: u2, size: 0, type: __abx$919e9d(332), mime: __abx$919e9d(332), ctime: 0, mtime: 0, atime: /* @__PURE__ */ new Date(), atimeMs: (/* @__PURE__ */ new Date()).getTime(), ctimeMs: 0, mtimeMs: 0, dev: __abx$919e9d(410), isSymbolicLink: function() {
              return false;
            }, isDirectory: function() {
              return true;
            }, isFile: function() {
              return false;
            }, uid: 0, gid: 0, mode: r2 });
          }).catch(function(r3) {
            e3(l(r3, t4), null);
          }) : e3(l(i4, t4), null);
        });
      }).catch(function(r3) {
        e3(l(r3, t4), null);
      });
    } }, { key: __abx$919e9d(415), value: function(t4, e3, r2) {
      var n2 = this;
      this.readFile(t4, __abx$919e9d(366), function(i3, o2) {
        if (i3 && __abx$919e9d(142) !== i3.name) return void r2(i3);
        var s2 = n2.normalizePath(t4);
        if (s2 in n2.perms && n2.perms[s2] && !(n2.perms[s2].perms.includes(__abx$919e9d(371)) || n2.perms[s2].perms.includes(__abx$919e9d(295)))) {
          r2 && r2(l(__abx$919e9d(150), s2));
          return;
        }
        if (o2) {
          var a2, u2, f2 = new Uint8Array(o2);
          if (__abx$919e9d(17) == typeof e3) u2 = new TextEncoder().encode(e3);
          else if (tj(e3, ArrayBuffer)) u2 = new Uint8Array(e3);
          else {
            if (!ArrayBuffer.isView(e3)) return void r2(l(__abx$919e9d(416)));
            u2 = new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength);
          }
          var c2 = new Uint8Array(f2.length + u2.length);
          c2.set(f2, 0), c2.set(u2, f2.length), a2 = c2.buffer;
        } else if (__abx$919e9d(17) == typeof e3) a2 = new TextEncoder().encode(e3).buffer;
        else if (tj(e3, ArrayBuffer)) a2 = e3;
        else {
          if (!ArrayBuffer.isView(e3)) return void r2(l(__abx$919e9d(416)));
          var h2 = e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength);
          a2 = tj(h2, ArrayBuffer) ? h2 : new ArrayBuffer(0);
        }
        n2.writeFile(t4, a2, __abx$919e9d(366), r2);
      });
    } }, { key: __abx$919e9d(417), value: function(t4, e3, r2) {
      var n2 = this, i3 = this.normalizePath(t4), o2 = false, s2 = /* @__PURE__ */ new Map(), a2 = false, u2 = new ((function() {
        function t5() {
          tk(this, t5), tF(this, __abx$919e9d(418), {});
        }
        return tM(t5, [{ key: __abx$919e9d(419), value: function(t6, e4) {
          this.listeners[t6] || (this.listeners[t6] = []), this.listeners[t6].push(e4);
        } }, { key: __abx$919e9d(420), value: function(t6, e4) {
          if (this.listeners[t6]) {
            var r3 = true, n3 = false, i4 = void 0;
            try {
              for (var o3, s3 = this.listeners[t6][Symbol.iterator](); !(r3 = (o3 = s3.next()).done); r3 = true) (0, o3.value)(t6, e4);
            } catch (t7) {
              n3 = true, i4 = t7;
            } finally {
              try {
                r3 || null == s3.return || s3.return();
              } finally {
                if (n3) throw i4;
              }
            }
          }
        } }, { key: __abx$919e9d(421), value: function() {
          this.listeners = {};
        } }]), t5;
      })())();
      r2 && (u2.on(__abx$919e9d(422), r2), u2.on(__abx$919e9d(423), r2));
      var l2 = function() {
        return tB(function() {
          var t5, r3, n3, l3, f3, c2, h2, p2, y2, d2, g2, m2, v2, b2, w2, E2, S2, O2, x2, I2;
          return tL(this, function(A2) {
            switch (A2.label) {
              case 0:
                if (t5 = this, o2) return [2];
                return r3 = /* @__PURE__ */ new Map(), n3 = function(i4) {
                  return tB(function() {
                    var t6, o3, s3, a3, u3, l4, f4, c3, h3, p3;
                    return tL(this, function(y3) {
                      switch (y3.label) {
                        case 0:
                          return [4, this.promises.readdir(i4).catch(function() {
                            return [];
                          })];
                        case 1:
                          t6 = y3.sent(), o3 = true, s3 = false, a3 = void 0, y3.label = 2;
                        case 2:
                          y3.trys.push([2, 8, 9, 10]), u3 = t6[Symbol.iterator](), y3.label = 3;
                        case 3:
                          if (o3 = (l4 = u3.next()).done) return [3, 7];
                          return f4 = l4.value, c3 = this.normalizePath(i4 + __abx$919e9d(169) + f4), [4, this.promises.stat(c3).catch(function() {
                            return null;
                          })];
                        case 4:
                          if (!(h3 = y3.sent()) || (r3.set(c3, { size: h3.size, lastModified: h3.mtimeMs, type: h3.type }), !((null == e3 ? void 0 : e3.recursive) && __abx$919e9d(332) === h3.type))) return [3, 6];
                          return [4, n3(c3)];
                        case 5:
                          y3.sent(), y3.label = 6;
                        case 6:
                          return o3 = true, [3, 3];
                        case 7:
                          return [3, 10];
                        case 8:
                          return p3 = y3.sent(), s3 = true, a3 = p3, [3, 10];
                        case 9:
                          try {
                            o3 || null == u3.return || u3.return();
                          } finally {
                            if (s3) throw a3;
                          }
                          return [7];
                        case 10:
                          return [2];
                      }
                    });
                  }).call(t5);
                }, [4, this.promises.stat(i3).catch(function() {
                  return null;
                })];
              case 1:
                if (!(l3 = A2.sent()) || (r3.set(i3, { size: l3.size, lastModified: l3.mtimeMs, type: l3.type }), !((null == e3 ? void 0 : e3.recursive) && __abx$919e9d(332) === l3.type))) return [3, 3];
                return [4, n3(i3)];
              case 2:
                A2.sent(), A2.label = 3;
              case 3:
                if (!a2) return s2 = r3, a2 = true, [2];
                f3 = true, c2 = false, h2 = void 0;
                try {
                  for (p2 = r3[Symbol.iterator](); !(f3 = (y2 = p2.next()).done); f3 = true) g2 = (d2 = tU(y2.value, 2))[0], m2 = d2[1], s2.has(g2) ? (v2 = s2.get(g2), (m2.size !== v2.size || m2.lastModified !== v2.lastModified) && u2.emit(__abx$919e9d(422), g2)) : u2.emit(__abx$919e9d(423), g2);
                } catch (t6) {
                  c2 = true, h2 = t6;
                } finally {
                  try {
                    f3 || null == p2.return || p2.return();
                  } finally {
                    if (c2) throw h2;
                  }
                }
                b2 = true, w2 = false, E2 = void 0, A2.label = 4;
              case 4:
                A2.trys.push([4, 9, 10, 11]), S2 = s2.keys()[Symbol.iterator](), A2.label = 5;
              case 5:
                if (b2 = (O2 = S2.next()).done) return [3, 8];
                if (x2 = O2.value, r3.has(x2)) return [3, 7];
                return [4, this.promises.exists(x2).catch(function() {
                  return false;
                })];
              case 6:
                A2.sent() || u2.emit(__abx$919e9d(423), x2), A2.label = 7;
              case 7:
                return b2 = true, [3, 5];
              case 8:
                return [3, 11];
              case 9:
                return I2 = A2.sent(), w2 = true, E2 = I2, [3, 11];
              case 10:
                try {
                  b2 || null == S2.return || S2.return();
                } finally {
                  if (w2) throw E2;
                }
                return [7];
              case 11:
                return s2 = r3, [2];
            }
          });
        }).call(n2);
      }, f2 = setInterval(l2, 500);
      return l2(), { on: function(t5, e4) {
        u2.on(t5, e4);
      }, close: function() {
        o2 = true, clearInterval(f2), u2.removeAllListeners();
      } };
    } }, { key: __abx$919e9d(424), value: function(t4, e3) {
      for (var r2 = function(t5) {
        o2 = o2.then(function(e4) {
          return e4.getDirectoryHandle(i3[t5]);
        });
      }, n2 = this.normalizePath(t4), i3 = n2.split(__abx$919e9d(169)).filter(Boolean), o2 = Promise.resolve(this.handle), s2 = 0; s2 < i3.length - 1; s2++) r2(s2);
      if (n2 in this.perms && this.perms[n2] && !(this.perms[n2].perms.includes(__abx$919e9d(371)) || this.perms[n2].perms.includes(__abx$919e9d(295)))) {
        e3 && e3(l(__abx$919e9d(150), n2));
        return;
      }
      tz(this.handle, tF({}, n2, true));
      var a2 = i3[i3.length - 1];
      o2.then(function(t5) {
        return t5.removeEntry(a2);
      }).then(function() {
        e3 && e3(null);
      }).catch(function(r3) {
        e3 && e3(l(r3, t4));
      });
    } }, { key: __abx$919e9d(425), value: function(t4, e3, r2) {
      for (var n2 = function(t5) {
        a2 = a2.then(function(e4) {
          return e4.getDirectoryHandle(s2[t5]);
        });
      }, i3 = this.normalizePath(t4), o2 = __abx$919e9d(12) == typeof e3 ? e3 : r2, s2 = i3.split(__abx$919e9d(169)).filter(Boolean), a2 = Promise.resolve(this.handle), u2 = 0; u2 < s2.length - 1; u2++) n2(u2);
      var f2 = s2[s2.length - 1];
      if (i3 in this.perms && this.perms[i3] && !(this.perms[i3].perms.includes(__abx$919e9d(371)) || this.perms[i3].perms.includes(__abx$919e9d(295)))) {
        o2 && __abx$919e9d(12) == typeof o2 && o2(l(__abx$919e9d(150), i3));
        return;
      }
      tz(this.handle, tF({}, i3, true)), a2.then(function(t5) {
        return t5.removeEntry(f2);
      }).then(function() {
        o2 && __abx$919e9d(12) == typeof o2 && o2(null);
      }).catch(function(e4) {
        o2 && __abx$919e9d(12) == typeof o2 && o2(l(e4, t4));
      });
    } }, { key: __abx$919e9d(423), value: function(t4, e3, r2) {
      var n2 = this, i3 = this.normalizePath(t4), o2 = this.normalizePath(e3);
      this.stat(i3, function(t5, e4) {
        if (t5 || !e4) {
          r2 && r2(l(t5, i3));
          return;
        }
        __abx$919e9d(332) === e4.type ? n2.cp(i3, o2, function(t6) {
          if (t6) {
            r2 && r2(l(t6, o2));
            return;
          }
          var e5 = {}, s2 = {}, a2 = true, u2 = false, f2 = void 0;
          try {
            for (var c2, h2 = Object.keys(n2.perms)[Symbol.iterator](); !(a2 = (c2 = h2.next()).done); a2 = true) {
              var p2 = c2.value;
              (p2 === i3 || p2.startsWith(i3 + __abx$919e9d(169))) && (e5[p2 === i3 ? o2 : o2 + p2.slice(i3.length)] = tD({}, n2.perms[p2]), s2[p2] = true);
            }
          } catch (t7) {
            u2 = true, f2 = t7;
          } finally {
            try {
              a2 || null == h2.return || h2.return();
            } finally {
              if (u2) throw f2;
            }
          }
          var y2 = tD({}, e5), d2 = true, g2 = false, m2 = void 0;
          try {
            for (var v2, b2 = Object.keys(s2)[Symbol.iterator](); !(d2 = (v2 = b2.next()).done); d2 = true) y2[v2.value] = true;
          } catch (t7) {
            g2 = true, m2 = t7;
          } finally {
            try {
              d2 || null == b2.return || b2.return();
            } finally {
              if (g2) throw m2;
            }
          }
          var w2 = function() {
            if (0 === Object.keys(y2).length) {
              r2 && r2(null);
              return;
            }
            tz(n2.handle, y2).then(function() {
              var t7 = true, i4 = false, o3 = void 0;
              try {
                for (var a3, u3 = Object.keys(s2)[Symbol.iterator](); !(t7 = (a3 = u3.next()).done); t7 = true) {
                  var l2 = a3.value;
                  delete n2.perms[l2];
                }
              } catch (t8) {
                i4 = true, o3 = t8;
              } finally {
                try {
                  t7 || null == u3.return || u3.return();
                } finally {
                  if (i4) throw o3;
                }
              }
              var f3 = true, c3 = false, h3 = void 0;
              try {
                for (var p3, y3 = Object.keys(e5)[Symbol.iterator](); !(f3 = (p3 = y3.next()).done); f3 = true) {
                  var d3 = p3.value;
                  n2.perms[d3] = e5[d3];
                }
              } catch (t8) {
                c3 = true, h3 = t8;
              } finally {
                try {
                  f3 || null == y3.return || y3.return();
                } finally {
                  if (c3) throw h3;
                }
              }
              r2 && r2(null);
            }).catch(function(t7) {
              r2 && r2(l(t7, i3));
            });
          };
          n2.shell.promises.rm(i3, { recursive: true }).then(function() {
            w2();
          }).catch(function(t7) {
            t7 && (__abx$919e9d(143) === t7.code || __abx$919e9d(142) === t7.name) ? w2() : r2 && r2(l(t7, i3));
          });
        }) : n2.copyFile(i3, o2, function(t6) {
          if (t6) {
            r2 && r2(l(t6, i3));
            return;
          }
          if (n2.perms[i3]) tB(function() {
            var t7, e5;
            return tL(this, function(r3) {
              switch (r3.label) {
                case 0:
                  if (!this.perms[i3]) return [2, Promise.resolve()];
                  return t7 = tD({}, this.perms[i3]), [4, tz(this.handle, (tF(e5 = {}, o2, t7), tF(e5, i3, true), e5))];
                case 1:
                  return r3.sent(), delete this.perms[i3], this.perms[o2] = t7, [2];
              }
            });
          }).call(n2).then(function() {
            n2.unlink(i3, function(t7) {
              t7 ? r2 && r2(l(t7, i3)) : r2 && r2(null);
            });
          }).catch(function(t7) {
            r2 && r2(l(t7, i3));
          });
          else n2.unlink(i3, function(t7) {
            t7 ? r2 && r2(l(t7, i3)) : r2 && r2(null);
          });
        });
      });
    } }, { key: __abx$919e9d(426), value: function(t4, e3) {
      var r2 = this.normalizePath(t4);
      this.stat(r2, function(t5, r3) {
        t5 ? e3 && e3(false) : e3 && e3(true);
      });
    } }, { key: __abx$919e9d(427), value: function(t4, e3, r2, n2) {
      this.writeFile(e3, __abx$919e9d(428).concat(t4, __abx$919e9d(139)).concat(r2 || __abx$919e9d(405)), __abx$919e9d(19), function(t5) {
        t5 ? n2 && n2(l(t5, e3)) : n2 && n2(null);
      });
    } }, { key: __abx$919e9d(429), value: function(t4) {
      var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.constants.F_OK, r2 = arguments.length > 2 ? arguments[2] : void 0, n2 = this.normalizePath(t4), i3 = this.perms[n2];
      if (!i3) return void this.exists(n2, function(t5) {
        r2 && r2(t5 ? null : l(__abx$919e9d(142), n2));
      });
      var o2 = true;
      e3 & this.constants.R_OK && (o2 = o2 && (i3.perms.includes(__abx$919e9d(344)) || i3.perms.includes(__abx$919e9d(295)))), e3 & this.constants.W_OK && (o2 = o2 && (i3.perms.includes(__abx$919e9d(371)) || i3.perms.includes(__abx$919e9d(295)))), e3 & this.constants.X_OK && (o2 = o2 && i3.perms.includes(__abx$919e9d(327))), r2 && r2(o2 ? null : l(__abx$919e9d(150), n2));
    } }, { key: __abx$919e9d(430), value: function(t4, e3) {
      for (var r2 = function(t5) {
        i3 = i3.then(function(e4) {
          return e4.getDirectoryHandle(n2[t5]);
        });
      }, n2 = this.normalizePath(t4).split(__abx$919e9d(169)).filter(Boolean), i3 = Promise.resolve(this.handle), o2 = 0; o2 < n2.length - 1; o2++) r2(o2);
      var s2 = n2[n2.length - 1];
      i3.then(function(t5) {
        return t5.getFileHandle(s2);
      }).then(function(t5) {
        return t5.getFile();
      }).then(function(t5) {
        t5.text().then(function(t6) {
          var r3 = /^symlink:(.+?):(file|dir|junction)$/.exec(t6);
          if (r3) {
            var n3 = r3[1];
            e3 && e3(null, n3);
          }
        });
      }).catch(function(r3) {
        e3 && e3(l(r3, t4), null);
      });
    } }, { key: __abx$919e9d(431), value: function(t4, e3, r2) {
      var n2 = this, i3 = this.normalizePath(t4), o2 = this.normalizePath(e3);
      if (i3 === o2) {
        r2 && r2(u(__abx$919e9d(153), o2));
        return;
      }
      this.stat(i3, function(t5, e4) {
        if (t5 || !e4) {
          r2 && r2(t5);
          return;
        }
        if (__abx$919e9d(332) === e4.type) {
          r2 && r2(u(__abx$919e9d(145), i3));
          return;
        }
        n2.stat(o2, function(t6, e5) {
          if (!t6 && e5) {
            r2 && r2(u(__abx$919e9d(153), o2));
            return;
          }
          if (t6 && __abx$919e9d(142) !== t6.name && __abx$919e9d(143) !== t6.code) {
            r2 && r2(t6);
            return;
          }
          n2.readFile(i3, __abx$919e9d(366), function(t7, e6) {
            if (t7) {
              r2 && r2(t7);
              return;
            }
            n2.writeFile(o2, e6, __abx$919e9d(366), function(t8) {
              if (t8) {
                r2 && r2(t8);
                return;
              }
              if (n2.perms[i3]) {
                var e7 = tD({}, n2.perms[i3]);
                tz(n2.handle, tF({}, o2, e7)), n2.perms = tC(tD({}, n2.perms), tF({}, o2, e7));
              }
              r2 && r2(null);
            });
          });
        });
      });
    } }, { key: __abx$919e9d(432), value: function(t4, e3, r2) {
      var n2 = this, i3 = this.normalizePath(t4), o2 = this.normalizePath(e3);
      this.readFile(i3, __abx$919e9d(366), function(t5, e4) {
        t5 && l(t5, i3), n2.writeFile(o2, e4, __abx$919e9d(366), r2);
      });
    } }, { key: __abx$919e9d(433), value: function(t4, e3, r2) {
      var n2 = this;
      this.stat(t4, function(i3, o2) {
        if (i3 || !o2) {
          r2 && r2(l(i3, t4));
          return;
        }
        __abx$919e9d(332) === o2.type ? n2.mkdir(e3, function(i4) {
          if (i4) {
            r2 && r2(l(i4, e3));
            return;
          }
          n2.readdir(t4, function(i5, o3) {
            if (i5) {
              r2 && r2(l(i5, t4));
              return;
            }
            var s2 = o3.length;
            if (!s2) {
              r2 && r2(null);
              return;
            }
            var a2 = false;
            o3.forEach(function(i6) {
              n2.cp(n2.normalizePath(t4 + __abx$919e9d(169) + i6), n2.normalizePath(e3 + __abx$919e9d(169) + i6), function(e4) {
                if (!a2) {
                  if (e4) {
                    a2 = true, r2 && r2(l(e4, t4 + __abx$919e9d(169) + i6));
                    return;
                  }
                  --s2 || !r2 || r2(null);
                }
              });
            });
          });
        }) : n2.copyFile(t4, e3, r2);
      });
    } }, { key: __abx$919e9d(434), value: function(t4, e3, r2) {
      var n2 = this.normalizePath(t4), i3 = this.perms[n2] || this.perms[t4];
      if (!i3) {
        r2 && r2(l(__abx$919e9d(142), n2));
        return;
      }
      var o2 = [];
      (e3 & this.constants.S_IRUSR || e3 & this.constants.S_IRGRP || e3 & this.constants.S_IROTH) && o2.push(__abx$919e9d(344)), (e3 & this.constants.S_IWUSR || e3 & this.constants.S_IWGRP || e3 & this.constants.S_IWOTH) && o2.push(__abx$919e9d(371)), (e3 & this.constants.S_IXUSR || e3 & this.constants.S_IXGRP || e3 & this.constants.S_IXOTH) && o2.push(__abx$919e9d(327)), e3 & this.constants.O_APPEND && o2.push(__abx$919e9d(295)), i3.perms = o2, tz(this.handle, tF({}, n2, i3)), this.perms = tC(tD({}, this.perms), tF({}, n2, { perms: [__abx$919e9d(295)], uid: 0, gid: 0 })), r2 && r2(null);
    } }, { key: __abx$919e9d(435), value: function(t4, e3, r2, n2) {
      var i3 = this.normalizePath(t4), o2 = this.perms[i3] || this.perms[t4];
      if (!o2) {
        n2 && n2(l(__abx$919e9d(142), i3));
        return;
      }
      o2.uid = e3, o2.gid = r2, tz(this.handle, tF({}, i3, o2)), this.perms = tC(tD({}, this.perms), tF({}, i3, { perms: [__abx$919e9d(295)], uid: 0, gid: 0 })), n2 && n2(null);
    } }, { key: __abx$919e9d(436), value: function(t4, e3) {
      var r2 = this.normalizePath(t4), n2 = this.perms[r2];
      if (!n2 || !Array.isArray(n2.perms)) return false;
      var i3 = n2.perms.includes(__abx$919e9d(327)) || n2.perms.includes(__abx$919e9d(295)) || n2.perms.includes(__abx$919e9d(344));
      e3 && e3(i3);
    } }, { key: __abx$919e9d(437), value: function(t4, e3, r2) {
      var n2 = this.normalizePath(t4), i3 = this.perms[n2];
      if (!i3 || !Array.isArray(i3.perms)) {
        r2 && r2(l(__abx$919e9d(142), n2));
        return;
      }
      i3.perms.includes(e3) || (i3.perms.push(e3), tz(this.handle, tF({}, n2, i3)), this.perms = tC(tD({}, this.perms), tF({}, n2, { perms: [__abx$919e9d(295)], uid: 0, gid: 0 }))), r2 && r2(null);
    } }, { key: __abx$919e9d(438), value: function(t4, e3, r2, n2) {
      __abx$919e9d(12) == typeof r2 && (n2 = r2, r2 = 438);
      var i3 = this.normalizePath(t4), o2 = __abx$919e9d(16) == typeof e3 ? e3.toString() : e3;
      tB(function() {
        var t5, e4, r3, s2, a2, l2, f2, c2, h2;
        return tL(this, function(p2) {
          switch (p2.label) {
            case 0:
              p2.trys.push([0, 11, , 12]), t5 = i3.split(__abx$919e9d(169)).filter(Boolean), e4 = this.handle, r3 = 0, p2.label = 1;
            case 1:
              if (!(r3 < t5.length - 1)) return [3, 4];
              if (__abx$919e9d(172) === (s2 = t5[r3])) throw u(__abx$919e9d(143), i3);
              return [4, e4.getDirectoryHandle(s2, { create: false })];
            case 2:
              e4 = p2.sent(), p2.label = 3;
            case 3:
              return r3++, [3, 1];
            case 4:
              if (a2 = t5[t5.length - 1], f2 = o2.includes(__abx$919e9d(371)) || o2.includes(__abx$919e9d(295)) || __abx$919e9d(439) === o2 || __abx$919e9d(440) === o2, __abx$919e9d(344) !== o2 && __abx$919e9d(441) !== o2) return [3, 6];
              return [4, e4.getFileHandle(a2, { create: false })];
            case 5:
            case 7:
              return l2 = p2.sent(), [3, 10];
            case 6:
              if (!f2) return [3, 8];
              return [4, e4.getFileHandle(a2, { create: true })];
            case 8:
              return [4, e4.getFileHandle(a2, { create: false })];
            case 9:
              l2 = p2.sent(), p2.label = 10;
            case 10:
              return c2 = ++this.fdCounter, this.openFiles.set(c2, { handle: l2, path: i3, flags: o2 }), n2 && n2(null, c2), [3, 12];
            case 11:
              return __abx$919e9d(142) === (h2 = p2.sent()).name ? n2 && n2(u(__abx$919e9d(143), i3)) : n2 && n2(h2), [3, 12];
            case 12:
              return [2];
          }
        });
      }).call(this);
    } }, { key: __abx$919e9d(442), value: function(t4, e3) {
      if (!this.openFiles.has(t4)) {
        e3 && e3(u(__abx$919e9d(160), t4.toString()));
        return;
      }
      this.openFiles.delete(t4), e3 && e3(null);
    } }, { key: __abx$919e9d(443), value: function(t4, e3, r2, n2, i3, o2) {
      if (__abx$919e9d(17) == typeof e3) {
        var s2 = __abx$919e9d(16) == typeof r2 ? r2 : null, a2 = __abx$919e9d(12) == typeof i3 ? i3 : o2;
        tB(function() {
          var r3, n3, i4, o3;
          return tL(this, function(l3) {
            switch (l3.label) {
              case 0:
                if (l3.trys.push([0, 7, , 8]), !(r3 = this.openFiles.get(t4))) return a2 && a2(u(__abx$919e9d(160), t4.toString())), [2];
                return [4, r3.handle.getFile()];
              case 1:
                return l3.sent(), [4, r3.handle.createWritable({ keepExistingData: true })];
              case 2:
                if (n3 = l3.sent(), null === s2) return [3, 4];
                return [4, n3.seek(s2)];
              case 3:
                l3.sent(), l3.label = 4;
              case 4:
                return i4 = new TextEncoder().encode(e3), [4, n3.write(i4)];
              case 5:
                return l3.sent(), [4, n3.close()];
              case 6:
                return l3.sent(), a2 && a2(null, i4.length, e3), [3, 8];
              case 7:
                return o3 = l3.sent(), a2 && a2(o3), [3, 8];
              case 8:
                return [2];
            }
          });
        }).call(this);
        return;
      }
      var l2 = __abx$919e9d(16) == typeof r2 ? r2 : 0, f2 = __abx$919e9d(16) == typeof n2 ? n2 : void 0, c2 = __abx$919e9d(16) == typeof i3 ? i3 : null, h2 = __abx$919e9d(12) == typeof i3 ? i3 : o2;
      tB(function() {
        var r3, n3, i4, o3;
        return tL(this, function(s3) {
          switch (s3.label) {
            case 0:
              if (s3.trys.push([0, 6, , 7]), !(r3 = this.openFiles.get(t4))) return h2 && h2(u(__abx$919e9d(160), t4.toString())), [2];
              if (tj(e3, ArrayBuffer)) n3 = new Uint8Array(e3, l2, f2);
              else {
                if (!ArrayBuffer.isView(e3)) return h2 && h2(u(__abx$919e9d(444), t4.toString())), [2];
                n3 = new Uint8Array(e3.buffer, e3.byteOffset + l2, void 0 !== f2 ? f2 : e3.byteLength - l2);
              }
              return [4, r3.handle.createWritable({ keepExistingData: true })];
            case 1:
              if (i4 = s3.sent(), null === c2) return [3, 3];
              return [4, i4.seek(c2)];
            case 2:
              s3.sent(), s3.label = 3;
            case 3:
              return [4, i4.write(n3)];
            case 4:
              return s3.sent(), [4, i4.close()];
            case 5:
              return s3.sent(), h2 && h2(null, n3.length, e3), [3, 7];
            case 6:
              return o3 = s3.sent(), h2 && h2(o3), [3, 7];
            case 7:
              return [2];
          }
        });
      }).call(this);
    } }, { key: __abx$919e9d(445), value: function(t4, e3, r2, n2, i3, o2) {
      var s2 = this;
      if (__abx$919e9d(16) != typeof t4) {
        var a2, l2 = { encoding: null };
        __abx$919e9d(12) == typeof e3 ? a2 = e3 : (l2 = e3 || { encoding: null }, __abx$919e9d(12) == typeof r2 && (a2 = r2), __abx$919e9d(12) == typeof o2 && (a2 = o2));
        var f2 = function() {
          return tB(function() {
            var e4;
            return tL(this, function(r3) {
              switch (r3.label) {
                case 0:
                  return [4, this.promises.readFile(t4, l2 || { encoding: null })];
                case 1:
                  if (tj(e4 = r3.sent(), Uint8Array)) return [2, e4];
                  if (tj(e4, ArrayBuffer)) return [2, new Uint8Array(e4)];
                  if (ArrayBuffer.isView(e4)) return [2, new Uint8Array(e4.buffer, e4.byteOffset, e4.byteLength)];
                  if (__abx$919e9d(17) == typeof e4) return [2, new TextEncoder().encode(e4)];
                  return [2, new Uint8Array(0)];
              }
            });
          }).call(s2);
        };
        return a2 ? void f2().then(function(t5) {
          return a2 && a2(null, t5);
        }).catch(function(t5) {
          return a2 && a2(t5);
        }) : f2();
      }
      var c2 = null != i3 ? i3 : null;
      tB(function() {
        var i4, s3, a3, l3, f3, h2;
        return tL(this, function(p2) {
          switch (p2.label) {
            case 0:
              if (p2.trys.push([0, 3, , 4]), !(i4 = this.openFiles.get(t4))) return o2 && o2(u(__abx$919e9d(160), t4.toString())), [2];
              return [4, i4.handle.getFile()];
            case 1:
              return [4, p2.sent().arrayBuffer()];
            case 2:
              if (s3 = p2.sent(), (l3 = Math.min((a3 = null !== c2 ? c2 : 0) + (n2 || 0), s3.byteLength) - a3) <= 0) return o2 && o2(null, 0, e3), [2];
              return f3 = new Uint8Array(s3, a3, l3), new Uint8Array(e3.buffer, e3.byteOffset + (r2 || 0), n2 || 0).set(f3.subarray(0, Math.min(l3, n2 || 0))), o2 && o2(null, l3, e3), [3, 4];
            case 3:
              return h2 = p2.sent(), o2 && o2(h2), [3, 4];
            case 4:
              return [2];
          }
        });
      }).call(s2);
    } }, { key: __abx$919e9d(446), value: function(t4, e3) {
      var r2 = this.normalizePath(t4), n2 = this.perms[r2];
      if (!n2 || !Array.isArray(n2.perms)) return false;
      n2.perms.includes(__abx$919e9d(327)) ? e3 && e3(false) : (n2.perms.push(__abx$919e9d(327)), tz(this.handle, tF({}, r2, n2)), this.perms = tC(tD({}, this.perms), tF({}, r2, { perms: [__abx$919e9d(295)], uid: 0, gid: 0 })), e3 && e3(true));
    } }]), t3;
  })();
  function tY(t3, e3, r2, n2, i3, o2, s2) {
    try {
      var a2 = t3[o2](s2), u2 = a2.value;
    } catch (t4) {
      r2(t4);
      return;
    }
    a2.done ? e3(u2) : Promise.resolve(u2).then(n2, i3);
  }
  function tG(t3, e3, r2) {
    return e3 in t3 ? Object.defineProperty(t3, e3, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e3] = r2, t3;
  }
  var tH = (function() {
    var t3;
    function e3(t4) {
      if (!(this instanceof e3)) throw TypeError(__abx$919e9d(167));
      tG(this, __abx$919e9d(315), void 0), tG(this, __abx$919e9d(317), void 0), tG(this, __abx$919e9d(318), void 0), tG(this, __abx$919e9d(368), i2.Buffer), tG(this, __abx$919e9d(349), void 0), tG(this, __abx$919e9d(447), __abx$919e9d(448)), tG(this, __abx$919e9d(449), void 0), tG(this, __abx$919e9d(450), void 0), this.handle = t4, this.fs = new tW(this.handle), this.path = new y(), this.shell = new tR(this.handle), this.sh = tR, this.Errors = f;
    }
    return t3 = [{ key: __abx$919e9d(451), value: function() {
      var t4;
      return (t4 = function() {
        return (function(t5, e4) {
          var r2, n2, i3, o2 = { label: 0, sent: function() {
            if (1 & i3[0]) throw i3[1];
            return i3[1];
          }, trys: [], ops: [] }, s2 = Object.create((__abx$919e9d(12) == typeof Iterator ? Iterator : Object).prototype), a2 = Object.defineProperty;
          return a2(s2, __abx$919e9d(338), { value: u2(0) }), a2(s2, __abx$919e9d(339), { value: u2(1) }), a2(s2, __abx$919e9d(340), { value: u2(2) }), __abx$919e9d(12) == typeof Symbol && a2(s2, Symbol.iterator, { value: function() {
            return this;
          } }), s2;
          function u2(a3) {
            return function(u3) {
              var l2 = [a3, u3];
              if (r2) throw TypeError(__abx$919e9d(341));
              for (; s2 && (s2 = 0, l2[0] && (o2 = 0)), o2; ) try {
                if (r2 = 1, n2 && (i3 = 2 & l2[0] ? n2.return : l2[0] ? n2.throw || ((i3 = n2.return) && i3.call(n2), 0) : n2.next) && !(i3 = i3.call(n2, l2[1])).done) return i3;
                switch (n2 = 0, i3 && (l2 = [2 & l2[0], i3.value]), l2[0]) {
                  case 0:
                  case 1:
                    i3 = l2;
                    break;
                  case 4:
                    return o2.label++, { value: l2[1], done: false };
                  case 5:
                    o2.label++, n2 = l2[1], l2 = [0];
                    continue;
                  case 7:
                    l2 = o2.ops.pop(), o2.trys.pop();
                    continue;
                  default:
                    if (!(i3 = (i3 = o2.trys).length > 0 && i3[i3.length - 1]) && (6 === l2[0] || 2 === l2[0])) {
                      o2 = 0;
                      continue;
                    }
                    if (3 === l2[0] && (!i3 || l2[1] > i3[0] && l2[1] < i3[3])) {
                      o2.label = l2[1];
                      break;
                    }
                    if (6 === l2[0] && o2.label < i3[1]) {
                      o2.label = i3[1], i3 = l2;
                      break;
                    }
                    if (i3 && o2.label < i3[2]) {
                      o2.label = i3[2], o2.ops.push(l2);
                      break;
                    }
                    i3[2] && o2.ops.pop(), o2.trys.pop();
                    continue;
                }
                l2 = e4.call(t5, o2);
              } catch (t6) {
                l2 = [6, t6], n2 = 0;
              } finally {
                r2 = i3 = 0;
              }
              if (5 & l2[0]) throw l2[1];
              return { value: l2[0] ? l2[1] : void 0, done: true };
            };
          }
        })(this, function(t5) {
          switch (t5.label) {
            case 0:
              return [4, navigator.storage.getDirectory()];
            case 1:
              return [2, new e3(t5.sent())];
          }
        });
      }, function() {
        var e4 = this, r2 = arguments;
        return new Promise(function(n2, i3) {
          var o2 = t4.apply(e4, r2);
          function s2(t5) {
            tY(o2, n2, i3, s2, a2, __abx$919e9d(338), t5);
          }
          function a2(t5) {
            tY(o2, n2, i3, s2, a2, __abx$919e9d(339), t5);
          }
          s2(void 0);
        });
      })();
    } }, { key: __abx$919e9d(452), value: function() {
      navigator.storage.getDirectory().then(function(t4) {
        var r2 = new e3(t4);
        self.tfs = r2, console.log(__abx$919e9d(453));
      });
    } }], (function(t4, e4) {
      for (var r2 = 0; r2 < e4.length; r2++) {
        var n2 = e4[r2];
        n2.enumerable = n2.enumerable || false, n2.configurable = true, __abx$919e9d(86) in n2 && (n2.writable = true), Object.defineProperty(t4, n2.key, n2);
      }
    })(e3, t3), e3;
  })();
  __abx$919e9d(9) > typeof window && (window.tfs = tH);
})();
var i = n.k;
export {
  i as TFS
};
//# sourceMappingURL=c14.js.map
