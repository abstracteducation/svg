/*__ABX_OBF__*/var __abx$10a4bb=(function(){function U(s){var b=atob(s),a=new Uint8Array(b.length),i=0;for(;i<b.length;i++)a[i]=b.charCodeAt(i);return a}function R(a,b){return((a<<b)|(a>>>(32-b)))>>>0}function CC(k,n,d){var K=new Uint32Array(8),N=new Uint32Array(3),o=new Uint8Array(d.length),S=new Uint32Array(16),W=new Uint32Array(16),ct=0,i,off,r,bl=new Uint8Array(64),v,nn;function Q(a,b,c,e){W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],16);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],12);W[a]=(W[a]+W[b])>>>0;W[e]=R(W[e]^W[a],8);W[c]=(W[c]+W[e])>>>0;W[b]=R(W[b]^W[c],7)}for(i=0;i<8;i++)K[i]=(k[i*4]|(k[i*4+1]<<8)|(k[i*4+2]<<16)|(k[i*4+3]<<24))>>>0;for(i=0;i<3;i++)N[i]=(n[i*4]|(n[i*4+1]<<8)|(n[i*4+2]<<16)|(n[i*4+3]<<24))>>>0;for(off=0;off<d.length;off+=64){S[0]=0x61707865;S[1]=0x3320646e;S[2]=0x79622d32;S[3]=0x6b206574;S[4]=K[0];S[5]=K[1];S[6]=K[2];S[7]=K[3];S[8]=K[4];S[9]=K[5];S[10]=K[6];S[11]=K[7];S[12]=ct>>>0;S[13]=N[0];S[14]=N[1];S[15]=N[2];for(i=0;i<16;i++)W[i]=S[i];for(r=0;r<10;r++){Q(0,4,8,12);Q(1,5,9,13);Q(2,6,10,14);Q(3,7,11,15);Q(0,5,10,15);Q(1,6,11,12);Q(2,7,8,13);Q(3,4,9,14)}for(i=0;i<16;i++){v=(W[i]+S[i])>>>0;bl[i*4]=v&255;bl[i*4+1]=(v>>>8)&255;bl[i*4+2]=(v>>>16)&255;bl[i*4+3]=(v>>>24)&255}nn=Math.min(64,d.length-off);for(i=0;i<nn;i++)o[off+i]=d[off+i]^bl[i];ct++}return o}var K=U("shny4/gArcWNHTLAScXOG59plH5dIKQcJc/+yCDrry0="),P=["P5l2UNqubSd5e3jjiTQ4O9wx10It","CXsJX2+QWkLDr2jFQkH4G30E4A==","1uEs+z+dpPM4nsR1V4INeBMlwrhugss9mCN3srybqx/O63lPeTiK0z5fBDrqVM2bGcNAxD5X7TcJwA//IUr6G8tCj3CXlLxW9maOog==","e0P/0MI0uQAsFz328A==","fH3/wGc7EhGZ57KREQ==","I62keOesHeQxlc567NesEVhV2dwkOKP4RSBbYAcyn17sWZNcYLwWFNl2G9c1dMioMBxWnSts9XDQjg==","AiUiaQsByulUkZ1vXw==","SQZj6F9q/NOQ660I","yd11yy9vGSb5LGQpg70=","J+88expHJ9KWda/TzX1MGol62e4=","K8qdO2S3LjeKJKcjf82+","STR3jGD2aPPl882dHNvTFucxlvuk3LZltO4XvIlnDbuVzY5FTK4=","dmKi3JrIFz3kv7Th9XJKAO/QFvOIM40J6ZXyQIc8gFCpJ6MHefW/iUyvf/XhVhMBVKI+I2Q70LNHVxKsLUAWtlvdhd6vbE7DHKqa/CqIFq8kx0/pMmSpdYSXxtUQ81Z8SslTLBedM4D/8PpVMyKDCVQHXM3er5SAJe55mP4gCwVO33QK6wOOdqIcDrkdZnxrI4LPY1oGhN/G","xDCUbCzLaTP7G9fIL8WhHJfT","haCxGU7t3qxvpYbb62c9TG2K","lapid8fva58kGM/QvJeqFb2ZoYCfqaI=","wN06sSCLPR5AIn9ksVN60NSqjYnY8xz5p0F1NYdFXuf1hum4D0lpmDnT","9I0DjyK8y/nEzKaaT+MMlL/G","zK3tWGC15TQRIgMohptZBnLs","cXLOU3M6XDBEsVEzv+x/Y9/Fu5s4QUPdmF11iKg9SEDdJ6RPUGKxSzLFjGyfjgrAlrbJWrWN9dgO4ep8CKaFyAtJ2/XPBJoDauzQG3Xi","njEazpzVJHBAdS4sO7yJkPAwHHio3LLfYbmJAvHYSN7Ol8Rgb9maJeo6oTHxfSL4CHU2BRlmzSiPBRZeBmH02sGwyO6WK7SVWuCowNHD0ftghbPXCl+gOrk9ZribPgraP5PZ6wnhDOJtUZn45OwXPvlJ1brSKU5+uC47","Wr4vOXPpxJ17I6FV9IuBI2BWgh4DH1be9iZaGQaKo972eh+FZAwvO0089FX/Rk3gLkJycspTzK78gsAwC3mbtTY8TwfDHyDtvYe7r5fluyqM","KmGqpem4RBfDFCS+ZbUJ7PGfRCdZXo78OyfPsupWewYxLfxDr9TkUVNL2NS8RkOpEQE=","lNG9gN2cuRgEBfNBS2mRVw==","fuzBbQfkP9vA4SC/+KC4M3CLDoM2sdanUdEjL2cQ","0al+WEjLmZvbGwzBa3/RniMqroCVq+GLGnC8l4M5Mzrie8nwtnthAcR00/yiy6u3","tnSV+Pux+V4Bb/s0/6e1+9UC+0mCRrATTuGfPYKXsVV7IzyRV8SA2d1U2OpR0ZXW","qUP6fIzNACi7CTxef4QDYZb0","lYe8HELhUPoZ31wto8ed4I+WWuvz48inXNcMRBisoHw/7tvyffNmfPqjXkysTRmu6OATdWp0kFp7xiRMCPlF/IqWfg==","rXDOlg+tppVa9azKdH6jMcYK","Hcv8rt+pO9W+uo53owsnuGPLHOMOmfh2n6DhK9OGDXsq9qx4NyZTpXUgJQgESkz2p7WJYIV93AvUO3pGnalGcRmScVJLtBC1R/MQrlsUraJa","I0dTzQkB8y8pMRMXbT0N","8/lP8is/rcOMCe310RmbqRM=","S/gUY2EL8p9UGGKA3SBvlF8=","eXeTRPntgOuotX19NRMURkF1","b3AaDueXrfVLW2ILlE4TaSqb","QYSxBRY5WF0Ot3jMx8yURYpu","5E5dH7jxmTNvcC76rit9SA==","GcYBH7LzedS28ZQYyHu1bB4=","2DmVu2yhkRlYja5k9BloiDoBPQ==","Jb6oyCZjYMsPtQHPK4WCnEM57Ew=","LShVaHqdFjAks+RjdcMOdMseP2M+J2asVJJesfxOGLuuA3qUKTIJTkLeO1iDP9R8mTLZ6V+E/Q==","tIVljvyW/Rzma1FTaf/nKw8Doua6yBFm5vLcYDg0Na2XM1maWGDVVgdahGeRT6bjNRftf6fUK39Cwg9XNVcHfrIsO5CN20dP5WK6H/uxCKMKhrXBcHTJIiIdHekHsVDO0LB13A==","KiNPQ4UuChqoEBboAD7u9ZLn/IgWdhVHXaT00x9MlM/eLgSYwp4VK1aQeghPxY3K+qluFkE=","hsbiQLZixMTCzMcfvHarPk/7xZfrYeYOPvGO4JsoLucIlHwSbTXJzCJANIIbpg+YOywK4gM=","dNoqFn20p3x3G1pUxGL7nGV3AfoiydnZ6UrBkbv0dd7vlC7PZCXeNjgndJydfh7ilgtEduI=","ntR6Z6r5MdGSKfNnmDAC75T8lkZHS0cqST5Drpn0O86GjMGtEg==","8mD99s4mkBd+qhOGECIv","M5geCedOWpOflh3QJLAeAMg=","aTU9mE3d8PUDd9lf55vdAS07mWg=","2Yjj1/rLICiuPLigjQ==","EKMViy4xzyR+9JGvoG6amAbrI2zVtBFsUIEL85XUaHLvRHGtlZcjO1gttDWMffuS1pSQ03+w9wegFfElSE0aPg3rQNZ1nHfJ+sGCnnzmPG9l5VCk84G7/GTZ","L271Fxl5kbpAy4iiQIMy7jHD6mjC0lOn7kJp4hor","1bW6XoCCt6OyDsGO6a0rb2kDbj+nTqflJw9cveICvjcj0NqNPRSg2vExeNDz63j4","CNbctBzCAyxlRSl6xBB1jq9uyiMM73pqLQM4dlojkAOeyKQ59rxPe5tj6m5jD2O1gj83pcN+Dn0G7s++sTiiYZdINTIs0piddj72MuY1MusqHG4=","1i2MoJZuldxVd7soCDjNi+8u/+DETJ9xuMlJ+gPQE3x7wdK41L8yoigv2BaHf5V2yk8=","C/juicSwGdJrWO9HAOPXECHdPckdEotI/E4MoI14","isHtyTjf+nVvNTUrqa+A7FN1Y0molSGQc3Kh2DEg4v/B6wH2zl6G6biJYQ6WtYdzNw==","sDFZAY0zX0EfuwnPv+5bnJ4j2NoX+0fzy06J1cG9xOg8ZQObd/w99oF6qyg/UMF9nXqxdVlVAA==","HZSn7fjFfHoEvW01G9xRmvCM3q28ooInbha6HOymG5NObVi2uezOlqy2LABF","cF40PL+7qH08wVmeg5Xg8JE7XgK3+q5wLaSMd9un","z5uWzScO2RPcwAqMcsYwKbZElylk7OlE+N7Bf/U0ISvwbnPuUt3p","71A0Q3AtFY9tphX0gDDvUXRFz/xPKaz6FDkkJ7F2+hhPaT247w==","mvKKHneuYs1QG+38dSynsnEzMNo1VAqdDdy2/FStZvl42QE=","wqLUn6nixlxTz6yCscFxFnDYKv+IOJeiZvCNIEM32Qfh+dHgBA==","smtpqK+q06ZwGF7VUB6R3VqsNw==","xBd5YN2GUvcOxgeKx2U4R48Yj1xhvpAu9Zf8FnFQ","SAzjZRwky8RgzRnoZDgHki5inqsGvBaJlRx90FUD8fU92tyUtsKaNwoUcviE","6n6A4RRsof9S73pfjyQqimQwpv8yatcbYDcDVh5N","WYx4DmGBiCOJ6/f+jkUEvpwOveo16VLu7Qn9dw==","4cR2/HAxImRAjkfJ6F+Z2PyNJw==","bzxpe4bbWNUu4DFEyg==","QTfSt1NysE9dkzPXEODyU58WtzE1vP9l4/7uG8zBXfFl2UmFdwciPTdf9DQ5nC6uq1LsgpKdMZbGelxSuZsMQH6x0TXsOrivLpn/8Fjotp8exj4pX509M+GHpjKFUawugeGIYiHs3SyLDROKRGsDWhstNIXfsjI2VL9jH+6KoMNPZDQRBxxPoEBV0ACSDoBpe16SGM0YoXjbJEnU7tkSVZw5bH3uJDMuT3iM80macxrFGwgTayKk2S/LYGnEKsnPZheR7Tc7cHldZV1de3vO87F5lP6Dh4Jom7xNq3Dg9xv7kLWmFEUPRXd2rSy4bvFl58FusF4CzuA6+Jio7fMBsU07OdHMPrxxEM2l0km2AgDNtxUyYLZSB6fX9AyYk98WNw9RSSAA8Rn9Y6bdatsKLf64wFr8qh8d0lP70gYuEyYxKOILFjM7K55CuIJr3WtaT1ViwDczgDfh+gy0aMzgdI3rTB6IBPnLG1BSb4+cIePB8SpfPY5u2vzdi/IAZ6ChLe0C5VMB8m60gI8kixyIQ+y7Gmi/VC57DSTWcV+BP+BpbWFUWE6iv+Cjzg0XcMR/M06wN0tp5B0E405tRPdqWcs3pSMlwXtKTO2mKll9zEhlknY3biUqwjCbhw==","QK+3u5FXqh0kojWuuul9O9O2QKnugCFVHeJKboNo18vzXompQcVCtA==","zV6iofILieE89zQ1jyX2pkK2IHA2oAl1pNuG7GB/vurjZA==","NCM+KUryrSt5m7PmqLF7/lF1RArA","9r5M1SyIhg7xxm7Chl8=","cLa4+R7h4yf+tVWs40W/Uw==","YDzwpl+LDSmERIKvGYMRIbHgBIaY","9UHwnwnQKMitGOeEjvFHCC5R","OnaZ9qQG3SQ0AOW90Q==","7SR5/vToYSBupJuELgU=","hgq1y8WQoNDHp6A8mpYKSxWI36wm349GH5k=","JMwd/4D8akeKx5id9WnjStcpNkXqq9GB9MOjg0CG6tWgU8ILbHE=","elhL/+tzrv2iVqwRwM9lVuMg+rxZ2Io5OyWCguYvCzKP5iHXfjHvqb2WBFljXmEQTYEoi5h69edLNdELat+ItXbQUMHECQUwutrsGFQ=","AlcP2soBo+X1EZbf2P1FMuQNBJTdqRCuzoBDuQcBVBiWIkOqRnWdMj4zDgocCjc8gQ==","uL2ExvOJG4luCYvnuFup/Rms7QexZr1vBboA0av13tmsO6cf1w==","xRvT9ldjFRriSgfVzvjMw8lnKSI+fgOlMaw9+WdKZCr8qr/Kyw==","0fzH4bq5GLn4Yv33oGa5Mv8/cScDoUaurFQTdxwi4aMqfJjIfGxW6wQQeJPFf00wHlaeNwMa","1KcZWE2LHnidZ7Hlbn3oQlwzswQlBcCmJiQzZJlb6ea0lpicDtcIOaiLu2U=","VSXFtCsxhYkNqVh5q+6Kkaf3kpU+3ViZ8gpzd1n9xLSAaN8jzmGoPKEhkKenUOuJ","PeSJrOLWGA0iau85muduOio7","OTVUl4D4zWsFD9LYNrJp+X7QOE09sBBwiow4npS48WOpgVzEaqDhw5jXj9SgTdg4wGA8xeyhIqSsAqZLVcjga2RazQUx6gsYH9Go8Kea6Ocj6HjXTlYNcpePAYUBKA==","xC5/c1jAzAhKt00OgHBLH468ycSFzVbb8rxN/RIa1ElMQG+Iag==","S/dG+ZOg2Yyf7oeVQw==","QEhpodFhegGt8AWu0nIjo6t6nzYDwV6KVjUvlYys","xdZfchSuxANGKj1S/qVF2lDka6eVrwFeOSD9MGL5t8e1Q9tFqQ==","6W9zjDmS6/5DHYlGJzh6PdA5ApuENAlsXv+KcDVwjymsgZ/D5Rk6oVIfOQ==","Z15Z05wquoHGbtvPNDqC1Q4YkUzselTfqlOR66/qB7Cv3g4r4ygiwSMvmHMM","Ak/MLGIBBwKZf1TKLaQ0ELTNG27nMSlheyXGRRRmQbckY8EAustg4Hp0eiI=","Iv/kekksWGq/RNnFLxsG//EuY9kpaZv5Lm87Wpclx5MAdFrZvDPjaMig","DBrFAtzVPYjXH0qcnva9xSoK3UvoQP2RQJemv6CLq0GDT1m60CYFMoc=","3lhLdQlovzdeengZFaRVizs8oKJV2N0R6VcEEph/uHYt0XaS5g==","OQxFcd0RN9acdrJpVGo+JlgXlqxtje7+teq0uBMjn5GE5mU4g7W3ID/WUchY82+KxVEejGbOBTD46DipoQt9xZkvuSVRY+ixUsTjdc7Ch/rbdOLO+UEDUV2Z3tLKZ2CI5uklqsodEm3hNhHjJZ2CR8ziSLKl","vx8ozGwWKIwByPME8XL9Lj2G25b8dNGTVbej+rW5cr7ovCw=","ad2945oCNr0Xu47C0AyPwoe6LlFkbSZs4BdeWKtPKiE+Jdc=","t4YJCyY4Ct3bXrhPGhxjYA6mV8hKRRczxxuTb75xpA==","GFShSuym26ZEsbKOB7/hjuudZN5laqjUOlbfGIWI8wT3","pdUlnooCqJigGZI8Q0w89XY3mysYW+qzK4R32Vb5FDGn","Rv+QLuSvv5zfrKstM717WuoyzKuKvMt/XjJu5A==","sT4EW/benGjn10UDpx5Lre6FA30GBGYwVXaFFTso4ABeUkHtKaZLc+bpEQzDt6oivdko/1WA48In","VEpYB7NI+ry2hBSEFxcclPJxocYuS7NGcrDZO++vso/S7B5oGZt2nAiLnNQ=","sWndZiWTQGpFsWz86xYtQQiLj52VPewRnsmLUAfPfhOFaxry4CgcIZzlVCE=","iBJxwNTNzjQtdGSczRLd","ELgzDijLH2BuQt9yOjs=","PogZoQ1Z5DeQ0jWjeg==","2bZoWD5nDWyY0vFxSBc=","s9UbPu34Me+irlMMtj/wKQ2TJCp/9WlUjwKang2aVXW6ySUBm/DlE6J85A==","qKb2W99QjhZH7WK59RUR3kLH","Fv1x2gubIWBNSme2hh70tcy/Umeo3jyLOwk63e6vCmWVO9aM8Xj5vwz5BXXqxElGJWUh+g9CUI+dHtmHPcVxg3jovx32rHQ7/xPwcQ==","a95Dn07Fvv7Yg0L5Ig==","9uWOmV+UyK0TzKdss+gknzWO","Oh0+EgZ30HTEFy3Ag73ocBce","T6g3BeV1EjcQnvu3VsgwNE/dUw==","p4fnsnO0g+kwHJuSOE/vDeDg","AS7dxq60Xbz3rJybFpb6YVQ/+w==","cx4PBapjOYEqp/qwXPAC6Mz78g==","ltJk1qYL1OCki9o6TV3mGSQg","lPn1WWGOX4kCClRq0AI73p6u","jfuCT5gRV32s1Glk3Auvrq6Cvw==","ovVezYaDVg9UjUHIlUcCAoWCnQ==","isTbk6rK/wudSsM85gxIdUWh2Q==","i403MlfArP0DAthQlDBLWqpAyg==","nFjwCisFk8jfyckNiZqkIAadnQ==","pTIxfFGa32wgGTuq+Wj6cKRJnw==","8jwC+MWDbIJGUr7A/c8s7xI99w==","UzTswxS9MAJ3BIqYZ0cbtaYEJA==","aiWGME+XyaXWcz+9HMvXweG6vA==","NN2O9eufxnyZumjkjLnF5thqkA==","o8M5Q0cNMgQ+VUoBbcUj2EcjIw==","CJuOashCPd0xq0rCjzCu3FSugQ==","mrQ4eQwjUp+SJNaZ1tMBHr3z1A==","ebhRTx9GdEIhufIa9AzLqlcD","w/Sxbcn0U11kXp9oglnGdRRarg==","Zms/2RJmKEcoa/BljeUQsOgjuA==","l2KKgQhh2JPnJMvEzACWbgl55grs","B8qPb2dFKv2za3A8pywnY18iW38AZrK+FtCOo4M=","442V+l7hZ1sRFYyucQqqHfgr2ch8cp+CsQr4hkFi","cvbZ1mCPNBjb2t3Zhw==","9wYGZbYEZJksk4mTyZAcsYO0","CFEUdEU9tKp5nO6+HPf2oVmx4DkOdrTbo+VoPPsxAr5IrLsjEg==","wqrrMWzLO6wljJonABY=","uEVpMEwxua76l+HLbg==","GCrQHxXSkHkq/E4qywP5AT9tsCEduQ==","+t2xqzjIXh9jL+ZzQ2iM4P5Hl4bOezM3LSTz","N4OSQpxwbPJTK27qpaX2nHXBolsBCbstsj+tqXlg6YscLIAenTodBhI5GJ2+RqcXGs1crTN6YRg4","cZvxUSkriTgQPyBn4Y6FXGN9eEJsvEWA49fzonbbBeZGLYIe5hQPCLqlew+k5NAzc8YFHvmkdEr8iy+nFVu7g6W51IHKAum7Gp8cbQ==","NbwdkkFEklGtjpbZw1DzzqI=","uoEgoK6kwtJhyZfb7I/mgjAf/FMbDps6lpIUq5oCaLU4D0mwU7SbJ38=","CQbOxWTI3NVMbJmIYfpwUQiDHMQznAGrYw==","jZjE7YXuwr9wF9ACIK8c8YdPREq/gUgduXO1FMjuiULbOw==","ou+de09dRc/a4VQqnFIsZr4wGMjTe62KXUshtJD0OcieEMrTiy7JTcyLCCjNupJy5utfDEs9DkT6ffM1+S8aiEPDHNo=","36N1QLHkF/3yKTyjtZDPc+CDZfQ0QtMV1Fes90iCZ6eQTfwqF88xeQ6Nw4+Nqd/qVHCPHStzlRtKpqvuuD9cTl0j6n6MmQzUsC1mHIb3oADbJAgYkH40KfJtHyTW3gwiIXZ6cRc42YTnNVsoF6PZXv69MD6hm0vX4A==","LdRxnIwXSzNMEJEI0MnbxdkysT3WAsXwx+1Kf+6wbe53oFk+rf8PZ/KOsQ==","R4zKXfFK4Qogdo3gd5QisyVSoNbVEg==","Ls/z3ZW4+eGjZpVFwEp1abA=","PJfLKCcH7r8lc66chPyreKxv4ivZ66iPiK5u9TasSllhLVN97gGDrBEvXQ==","IOMErdSgDzTeEVjKS9c1v5jZ53SZwCp/+PgUg7vU356zisy0RlgCv0gBUv0M7lo34JgctRKVyB4=","pJN5vBJ4Pkj8L02lIHE=","nbqKso6vI1GKBy+zxA==","rVE9Z3eTw5gkFzVp0Eo=","HoIeOaZDeQU7D2QeK2A=","ukaP+q9qgrcFX/T8oqxYfTyBqR66Aw==","IMWtZZM/QAXM3BC1YEE=","fTY5hjJRNBHvygkegbE=","k2BczEQidYOwCo6bTw==","vGvQ+n6Jiaa0e8FmfX5Ktnu11BTf","0B+33uwR93NKolwfH5B3cA==","arJJj18fZ5/3Nj2dftfADTGp","L/uvMJz6a+gkAsiBdFOfHg==","zBAAnu/U+o1DgR4dJYuhxA==","GGUcBJ2mg3J6FKZsa4c1dQ==","+coODa6cJzNxvgqFSECYwwM=","jfWXErCvqj2eKsTngr5vDATceA==","b4NWEDZWyLt/lgRoRNhw","Qi2EDx6dZzauaHFnPnU=","e8jv1hiNgZVNA0lXOQ==","o484Wo5HuiuPhxkfgE6/w8jPHA==","X6rXlUBX2vrrtI1ZsiuFAHW/JvuyUVE=","jJkQ2HCqd+GykAHH3WzsHbskAHNN","oXBxhTX+loVMoG6kcUI=","kHpYoJHMm77LFtz28A==","V3wsRq3eQn8Ad+Gztx76qbAyBw==","AL4bxZJhZQAmgePYqGI1Kxug","AA9xYzCitBK3oOBgFgTpew==","PibdMd/PiupISRqDUg==","er4e9yEKl4FmLU93LA==","lvdG0Ed5Wgza/29rag==","cNxN81jXSvEc0VaalY+SP7mIPw5Yyw==","OlIa34q/FtohWoAyLEONDTVsDoQ=","EdzSMjPzJaRsIx7phg==","/x/T47WUCjVdWzROTTs=","FqRqSpnAhSE8L5O7cw==","L4BTjwhiqBsr3ZozszNkcIClfCjKCIdCWkie","OqmTzvjx+nRzaPhpbkAmAgIDoVg=","7yRAypOcESSw/talsOo5SjXjQ5I=","/xWCAXyrs3lBmIXPTw==","/49kahLGhA8ZnqffTSY=","Lc3WUXZ0sSIq2R5ouD+z","lEuyG6DOPck5W5ij5XvO1w==","nR5HflbLWNmhct6WuRU=","bz+i5reRv1mOOHL1+LHauA==","qf3hsdpE9PbtnzJ9Gss=","RUmDZU2MSpDwLzErJ4xoh3YO66HF+nt/9eUB","kNjn+/GdbB2+RjV/1Fw5fwifgII2jjg88A==","fUN0KzqDi91mhxmRyKtFYo7JNQLqLVQus5U=","imNEOSXut3CXfxepjcewI3JT","SZbxuZv3cAkZgFNF2q1zxFHVxbzvVbiWFfSiTkKlKVOc2M8Vb3khCGs3Og4yVPZEdIP0hnrvLUwzqhA=","MDym13jy3hnUAaoRq+y87QDpfw==","c92ZHYcszV2UQolgr6Wh","otRjuCdOk3vFKWBcXM0YkducUH0vh10aa7w=","ntBBSMozZbAVCCv7UHs=","oEbHWWQ+5TB+JuXuxpn8wx5cj/Y0","tlHEXZcnMRqQyoYfDBw4Baha74ALn8TYsvuF","vG1eyO1kzlteFMgKKttr2nLuB8ci18kXpDLx/ZdL","g5Y/gN57bMEHEvvECauL05OozjbtMCr4","FwJPYyQ+hi0KEfdd3pN0DqObYOAAcVFztX2mLZ9h","3SRFS+KpoC8slvntGYY6","DvhmMr5An7eoywGW1Khp","fSvKldjm5f0Wdg53Daw2SJu01hpRWL5guNJvUx5/G7v3fxqE7zWCihT18lgnW3I=","QKZEzOw2P6r/JkmuhwE=","AVZhbI7l/rdK98MtPgiVBE5Olm8VJ4BHRptWIMzN+n3MQ6zwTbY=","7soNy+hqCh3fPIAqRuf8GgfFcV6PIFTRQyj6AGysJoDisQ==","9imUstMSDdzG1SBbJhE=","j29cLxkkVLNBzumDBsL66uMYzh/PFYalwOlnOWOIyQhugmEShlww/nqbU+n6yuB7W9fe","7/9cUqG67yPGwXkK+LNp/x3X5b+Xg/cIUwztoliq0hw=","ioGwOlpXdwLUG0GMYMUnFu5T6mkjplwtTFf6X0Q=","5d8SxfwBXuFzcbkRiGN/8yUzQ20pCBC8hKOqJRST3J+m6ndtNHX05299Ay6VOhVMcG77D0ckBpIzubzMUA==","kUBh/QdO1RovW5sDlERfl7Hm2w==","Rf7kwzZ46XwxAmsI95WYcIc=","4Dv140YzOUTC6zHmD8wkwA==","Cxonb3ghQZbDFmUwoVnI","3MZz0dG6nISOTK1Rzm4IMY+L","TCPzCn6bsenI6Greb0zCmA==","cSPXEwXu7GvhnqiqwXjpUgyYIpOkJ0asrjJBwbgM1rU=","2h3zMKU2sp722XmIwunjR2F4qw==","qC5v6Wh2J5JvM/St8BwoiOiBQHuwVEsd1f2S0bHi6vZlHrJwuRKFM3Ju","9BLuX/WN3BI6RP+5tD+bgjMOCATuXXIqeA==","LiYAu/c4W1PFhd/IJJyUGjcKZqWQ5bdF/VMNV7sFKS0=","sl3H+uRszhsWNoCTUXmOyH8zl1++gNUddT+STPl//g==","mkButTmMhIVIjD/R9on0aaZAqdd+FmdfI5l2oiyGMvxyNQBp","/qVpZh8rIvWWhIOU13oZj+5+TjNERzP12UCZmCh23XgsiUT+R3WYkZ0=","tXuIzTDtpLdx/f6ElopZEI5eY6x9u1NiFZ8F7YGCK5Sycbx1iLJYgM0=","pu/FDxKiinfLR8cmbo6nodHfY79nu/QZHV54E00ZVbm0pzlwR4Qxo+HF+U+tjA==","0ZRXBaWf+GQ4BypXPBY/SYfG00pX862e4j6iEKj1fHJpIn+0etwz","3YNwf7JnI6sb1PQa90X/mztbe8Bft2fNFStuBMlDZPjNl80pnxXJYl93oaLooSKS4vHnbCzCSjYSjGUXUw==","A5IQXDnltVb8c3+0twQHwSfiLn7MiyXvgw==","jx/nxvs6P1nNpGC9sozQDYRyY0FQe8f9mPjvUsW2tW/rHTjyXZr1ITI=","kgRM4Vu8nEpLQ/nlcdxtN7a2wC6Y0SMnJOQEdBBlOH6wx4ynt2Y=","E/zHVU/mmRhMzvFw+KraU/zTrbW2nPgYABoQWjOMGmPgs5VwNzKtJAV0Vw==","z8lzKPAh+CX2U0P7qLr4","junRQASBLC69uTwZsCpNB90SIpWqiaO421biXBo3YzjXaHpP7Q==","WMvsLMrLXfH4r1LGWP+wnPbRLXGokXyWrw5iH2rXapQQmam+gpzgJEH8Bn8N/aQ/Qg==","/XbVYRGEn305sQl0EY+zQfLpri4l1a2bMPI/bv1u3/P6YnHgYz4=","IVYd92CDanX+icmv6mPWYRY=","yKaByYT6D3Re4N3kDvxmcJTLyB+BMv7NCuZ52L59xtkbOadjJtAt","5BS+qlqX3DsjhM7bvug5+UzlTNZ0e8I+XrPCKS7cUEkOP/tBG/JuE4KNBMcF","Y8v9OQ+rYDktly+Mgq9cPegh+8Gs97JAAdRqe30VcOJnKeqwgGnDSa/ht3QDD/SnWiUeLHhE+jk=","OVWII8g1xzDRRy18f7CsYKh6KKGoDXNieQeYDuVYF61I","7Pg1kJIyKZytTuSEpHpuj/7ZcyJzd4HXnXPfWKVmflmH5+5cA/Cd9f+zbt/TyLQuEEB/SLdX1C2CkEjDGaNgpJlp4g==","o+TolGfiuWcgZx1edhvwad2norRJPT4JzwSMyrIjBbAU+s1iBmewGQ==","dmykxxbA5fswSmVL7Wj7K52B5jps1xf+LWNyxsUJR7freAc=","feiR3lmg6ur25x9Y2PdCSvEnDQRac6b1qebzdIkdoXJU5+g2","XTbnJREaWrbaH39J37FD7MITDwyW2m6YBZYbwOHFyywEu1cOc+jLmIOCk5m+urexzHScgp7jXzzCj6g2","/95xBKRCLbngh9Seblv42mLo/agos6PuHdrtvq49OiJexw==","pkhYmim8OVuqmWp02HCRe3IWwJOpApnZ+h0P8A==","mhPtkG5HaFSmf8qfl+c8eA==","TcByKPyAosSzjbPMjc/bY49ckbewrWY=","L12PjOflsOhl6BaMGxvXW9IyjQ==","IxQfuUXN2NRoOmbqBZWRAg==","+QLSlvan0dMlLQ3WLf0aKDI1An4R+TQ=","qvx7LsUI9KQsxsD7QUhzew==","BuHkih4OIjKQljmCaxLl2Qj2Y4r/","/UqF/kuos/u6LN7sk3WuSkPOYuQ=","RdMjIyLhUYiACKyN13zn2JUp9cY=","zlu0LGRxRb6Mk8U16Wo=","jQA6ThNejjqYiES+CCLC0ufF8cQeWcc0xt/NIw==","6HLeWC9hhaiwGtq7Fe1Z9yCOgBAJKPqB6L5W9vsYGh2+h7nP","kYF7/gZToXqrAhuQMpOboy0lLnVNfzU=","PeS1fsMd+vtCyAUgvQ2eQpFk4i68NA==","4+N4oHRcfT/vwAqFG5Hes6Wavbe3a3kyFYX3FT3cTvM=","tz/D101i39eA+n69/1jv7TUWAkW1AoyWj8dIUbdHW03lAw0=","nQC1j+kDBD6ipezY5d5Wn4IpVndio6RuS7CcdIPncA06UP3EouhcZpsmJz+3mlTQ","nnIsQnbX/qCVEe85IyCjWcM4Rk0o4C0nBxjl287WMS4=","x/6fU7lTLmAznKME6iNOriaZko27NxdMSCfdv6WAvr96gLdQ50zy","eN3h5aQrTVjcFgeEgm3G+HdJ50v+vOJWVtKhpg==","H3q/5S3iT8jCAMNMY1VJRRo+ohS4lO01SRqfe//YSc8SCsg=","v+V+a6w9sXZLHVNK0nFEd9PiYqoHc20OanXQDy3JXbR8gg==","+1+jYGoH5f7IUxkZpcnUX2GN4Ui0tPVkDupEsbDvhQq3+YigDW5DTpxYVKISvD99KMHYBgJCFjzYhPII","OkF5GEMOVV/q2XLZXCCzLUfPDSAZl8OzZ9Y=","aXbN5zinOPc3UnmgPkRmcgGH2L12aVnnF4Ao7lx0vqpUr3bzCKyPWIw0PSUtfAI=","inqLzfXeJ2s/U6/VfNOscI1kl0GS2IyoOmm+30mSy4iUmgXwBA==","rv/Q1JguRFDDMSvW7eakHOo3m7Tb9KT9GlUtFDvop6+qWXNwPUrmE0JQFqPSg3mai/upO2+/nUA917ao","EhNqAtN2z5fadmNVqNugUC032cRA9+Cx2ByNVKTteGIvxj3/fw==","qquQoxtoWqz0HX3g010ETeDgn555drKdlH/6Kg==","yPlQcRTJF/aLIR/t68We+xSS8LZX4Tpxdbdz/1/PonIsWE8=","QZFy2am1YZpxg1XawUh/tSfPmk35PrA6Inuk5c4BCfnfr/OLUFs69oK97Q==","kV+GOtr+LpxW/mRkGDOqniZ8/bMDXwOuF4oHkhYNRsl9QQ==","vWMDpyvkOTZ9phGlWbnKj6DlGCinVv8bpZX23JxKfJjT1w==","AOWmckKF+CmUVuMi8dIgbsDgEdJYSySfLYbsSbgWPy1v","pK0qYf1NHO3Qze1kXyhgM6EPKrg4AKQ9VPaUkWrNMEpG6x5saQ==","h/gmk1rd4PZzx/nM3rXOduF3LEt94TdNW7RfK3Ns32F4YXkj1wpvaz4O","siYeAO52iH/TzUdAYNlbwiNGS8VZIxS7RgLfQ5/MGGEJWOYG4Bf+Bwc8hL6akQ==","a2Yply1lLmiemo5hFB86GaMP97rdktAoODgFyZTyBADx5hsoVcYx+g==","xmTKAXCJXTsC+7cUkAcFvYL69eV2QgdjCPHxO5n72Q5nsHJnEFnpd9yfbc1kusuufjwsnWHPa8fN6bOT9vX9KLlPM9J+b0A=","V0K+NgFOUmFNZLQvWtcuQYMyCEwWFiwDNYyd/ED//4GfjUjPm8xY","yjzoH2VuSLT2GAkQooQtdLzSi3uEohAiyP41pL9XIcrVmRn6rT/tpxsKumCidjB/l0xMWKrISOLJW7IfCTLfq5ylVJnjAkmwkQl6B3N9/MxA4+9l","SBM5ipNqXLwT97RrBzjLdzGrHjsb/MnqcRdAWw==","Ol+CCipSm8RD06Qx9j/HL6RSEb5Bd44zWg61BOFBl0Ld9XyUhwq87bbIPuyY3Q==","riyPLzxzqTiphb61lAn6Z+Vrag4RdFv1CL7MUck=","jG4pbh8Y2vCPCA0FVDlXMpIBC5AhGqBgWslOBW51NVSDDN4HkX+pGfpUMQ==","N0ld4vpvKPeGsjNCL/4QhOqc48diAV9w8Jmx","OuDlJMIPpTLnMOBKf+MAfoS9hfKk12NsgOI3","HBMpODQ0OTpRfyCgK5luiRrcXW8jHiyQ94nZ9fohIK7EPw==","7dClj2g+u0HS66EJCSueQQxNUaT/RDnTg6uDJw==","XexgUN+WDVVUrCHJ7ROokn0+","DHeob/ZoEOiS5Yfh5IOaB956F9+iYek66KATojYZvkaC3A==","kvMbiuvPKXb5EGflcpD2moWZ/OvBVwuB0Hw=","ZsjZrQ6e8Z0WcT7Xx/EnC9qXGDtd9uTsxZXbLniHRfk=","Mi1GhARW7N0TLV2Hwr/PBb9dPyytMjIY6bEzI0PfpECOL/GkZyHkDbxxO96Rv8w=","c5ysZ+oumVW1VL+6voy1k69bLmVRra3Q4H+lTA==","3XQkB6xoFPCFDJosI9D/Z9haoYzPwF4BNj1H5QJML+Y1Ct7n9WtvpTqCXuS0tu6IE9Milg==","geJYCWheL7wc7aEGjZbcwgLMLg4zfr442Z7kApM=","t6l7zuStadFmJNR67WYkGyJJz1KsvP6jADKYtBp2dG+15w6+2JX0uvDmL6hNw1kI0T1I560=","/9pVSs5FQEY1/HMI1OEOAwx/svWm7Dv9LXv0Og==","EccIWC2i9GC/9FRk7X6utnfTa7FUq/Id/CwpnjItfjSPrnfwKmvg7AJpveCNQhkuYAw=","uUzABqai0THR9/xa33xSjnk=","WSXmXUU3bjtFi6a37ypgkNbQf6nVJw==","O66nN1hF55/NDgnMhlUYLjCB","mwBQLMbrYlzvw1C2NlW2NF98L7Ic1R73lSjBgOFb","gXVg8URHboiMfG2vJOjNNDbsBKLDWhm1q2mI6YUvqT8D","nv1XL56CKEa6JLMMPOqB78cxZHimqFUpOuT1PA4VB7Ychj7WVAVYRoeX","4fvgDsWXVLdWzU8FXupkHHD34KZT0yVaMSrpjt0AhzOi1w==","dLBk2rsSI5ubri+s3PH2y+F76E83fsRv1WitIajuMRBbo0oL90e+kwPf","nJLlJxKZ5fVIeO808MBHDdJpA7eA+CWALKv75MmjGujfMwNarcz9If2R","3KqdxEeIohGYo2i+fxJhF8H4iRReTStrIWw0Z7bR0y7gmKkZ60R3sMELErbI50h+XqL3","KbQSyrqkj7sQcl795GnA7/XM8ojv9+dVvQ==","3f0Ew0/Zgq8FmoGqqGX2Pw/CoNowMuj7B/H697fti8PzsaKUdExTkXuShUjRLVWQ/Dlety4JUwvjbkGyreHJ","ElB6JiT+nQj+UQC8pxRSF/BYqrLFfZiD1vDbbCGxIyKWfxc=","GBeiLQWXggWoQJyb1NEWCpifX8Y0bRsR9Q9ibTHsY3A8hv0vbQ==","B60ST91almSsMfbo7Z98m+NnenIgp+cUv9DZGBTY+qFATg==","4JyH7lvA6MECs8BMWqoMmx9whUi06uHPpuGsZDIsFqUyHUQQ2EMHHkYwEjzYfg==","Vn87s1Exn7LeXrePjVKLvf1jTz3b+nrI88c70pZekZNBXW45","ughy6hedsT4ML1vS9a99oOuMf2J7pSwXEm+ZEQ5r1H8U+xQ=","Nf/H7K8Y40i0rFZa8XDbYV3i51LfB7AH+3U9ZcxwYQ==","u1wUyMbuTiFmdti9OQEL3Tge/4TLZo6Nl4x7gd9lMRBHri0N6VOarqBB","Jf2O/HPjZ7PU1Fm9iphKjs3zhUd1eg8mPHjl7+c0Jw==","Amwl/7INIR3czKm7g7hpp61i5RxX4cgQ4GCGk9lIsfzl1mhkPqExGFHzpQiXgmKfq6PvL1SMlqRUVP1tPfbC7vR0","eOJ1J2Knb/FUjWoMiWRqh9t2PDN8jWl+XOV4MMZ4g3/v8w==","Qbuu6+UEICROYAG9HAdDOZwwbREC0XIPAX+m8IoCrA==","8F5pGs5af0+eiaMn0BTZgT32M5n63iZYt5IbAcY=","rZguaStb3ut5+XIJA9iasZ0XWTB6m35ys9zmMA==","baq9IEaaS76LwxvoRdv62JeEViMIIqQ0SXFCZ3cAQX51lABC4YA73g==","U9IzPaWoPKKxcjP/njGxOGNvvBhpTYY=","ds8taCtuMH9lNjp2XKXG8ZujunXbGdFckb73kw==","9mf49VVLOzWjLUlYfNV95WLX+iJ8qvFLUhPeS+um3faHoBuneJuoaucVaQ==","Fnk9HRlNZSnQ3qGSsqCWWwE31m10JdNfDFLB/w==","fIgBUPIZeiA07agT+P0xUYF7i0WcL7OwHVoet7NTGrrd6OFIbLRFySJbsw==","xrWmxh2PVrpVBKhHVS7w2SuTocNKSShncKlh","Ss83xT4e93DGADnepspx/CyQNAmPSI7IUsNHZmN15FYs/r58Gp44vHc8fLIlWIq893ObZRqLjJPHQ6HV","qjFRhE+Fcc1+ROr5AXhNabNnllhOthDsOdap7Fz2cKvqBPWnqZLROA==","1PQHcco5ouZZBnr4h7q0xf8TyUJ2ii37piOeqkuznp9S3QUknlhp+L/iwi0R16QxcprJzj+YNVgw1qOuIZztGAQ=","zrAnSI20E8hvJnRLQ6/i9wlN5WdJJJUETM0nOeDoKEM6","Jen/wZeEOnnH97DwLveXIUOlh0idyivvtacpbRjB","c+pLmRLERpBdieuYvlwkyDZvI+wZ6AuocQ7o1r5R","X2wh338+UCEP4qyU5KXWuRZLhKFPSfwclf+vYORT7OwsvNTv4w==","uuS1MSRYUqMOw9W0tg8YlrSz/lFF3w1ze9fYnsvDWp78","yQX/PlgZ1yB2pAjkyOVNc5MBJwcBMQlZaFmFM2hzE6m8WkHlIRpGFg==","OHimoCIQQI7fN7gOgnTsj4nJRHxdjhaqZUdfY1LT0n9+","gf2XerBRie9ibk5h6ySX0WHjqzuM0foA49ljYLSkzAAFw82mSWAwfQ==","doTJedFo86OaPRm0z23010N1Hj+TQ3msHEgo7cbBE1Oo70uHUCjOhuFR3uZsWfyP523iYhYW8sK5H88dSbsTOwDM5v4=","9CsB8gtMIqbbWaLUSXN7MuPLaXJ3ShY/lCEFS6+Ai3Whnw==","udgEv77DK/dVRY7+o/dRYos3pppNHmQ3CqFeZ6KvQVha040ZYvT93XbyPv7SSQMGRHp2+j4=","HDh67NpUulyG2LLNjkoQS8010QokS9nffbbDPCuzXR0oHJlzfv+dmvxwQ58hJg==","iuAuVNePq9TME5ArZRiJyGieSQ6higs9D8EU5gpdxjCm4u1LfXtOcQQ6yBXsynWeq0mexQ5iLIaT2A==","EvLzfbd68xVx0FkHtkm3RgK5vNL0vnBA8kGwKtaiN3Eq9h+cAQ3c","b78DPNHTo6rs4QHz4zBixkzbubipjcnzzd0/hPGYjoDrpjfYU1pK2XjQZOCC/QEBIzRRl/OeznKhA8JCwQV251w=","+8/rZPRW85jbnwjORszlAUjw1yNXpBZ9lX5zAXl89OE=","z7z71PHexCcZOn25YqwB8+OCfq6AahuqbaKFyaTfrl4=","7n8InQ0rofEGFrD3kNJ5/yGzFcacCAiXcnDRj0dg","eZ4nGc9COrmjIg2+CVbRrXJkfuxY3kInYuLhQxnQ","tXnTjDEAO0R7QfvnYbb2XGRPxymxtGG1rt0Pm9bSK192hA==","qjT4a+l06RxM9A4y5UDz/V8bDggbjoOhRbcE/IgiL7NWa/k=","UaJ6E55+Ebx1BX1iULZUPAHzyPHlDOoMWNpLEQ8IlaenqV4=","Tg+V/VjTOeNn9Hj97YRegPaQZTEjL+qeKsJylbP7H/0KJDXc","cY25thDa+7GoNobIw6tRYhyzmMvbk9V9AscIjdSNNQ==","R9SidvcHOHdB7ea5vP6e9zqBtWJkGNfr5iaHVd6bYHafvZuxcCxXf5gN4jTHD+I/0TveJ5VC+WnQdgwtkJck9Vbb0iPs2ClEoAyRFQCvbOYPdEHC3A==","GGRzK19lCg0rUGZISpk8QTrD","bQvokmMj76UU2/o9RXgjtzvHX3Gg2qJLWJb+wwLifu7KUxtovrIu23rtrNAkyAmOdZ0iVeE=","0Bb6JsTaXc3FmPKMgYkT4R7OU10mPmEAYyJcoLyUlk5Uoaij5gS0JJccfYs5jkpC0tg=","KEMApzl6c+pbAbgD7giUHHw=","2xmTI8d/ZjaI/e8uhPvrJ6rg8cw1H6mbjK6JRqZ6bwON+tdLGHBg0gl/gB+4/7s=","jpZDO3Mh/Q1DlaOH5jqdc9uI6yasE17ETUkOnUCqytnZjNxtVHe5swZ1KP7BSvsreMI=","5yyjrv3371WLdjpYPKZr2BogzQL+U/m1OY846ZhmLjVks4SJpmX9ZcFjYPBtOAva1EI=","oV8UEUnAg96IKLp5QqovPeerPs6puRo=","2+kuvYaPcMx8UXv14/dCGgvcGN4pV70LZj5ykggWwFQkhA96IJ2LG/iDDQehq9K42ZprVk40BDU=","AqNQ2dX/6fGICikGSIw8mX1+qxp/gB25AtkzFydVTpC9keQC4es1XQfGh1MvmUXwKrhdqjgeMjlCXzovsZJUHufbctyXtCvylEtGdvc=","XU72D0SqXs+eLf/eySQpl55/2S6sUMn9U5Pi4mMY30Aah8i16et2","Hi4QBAU6kVOv1GmJg/kZL51I2owxwhZWq5Q=","GB4/Wqo4oYMBiTiXcg2aiXIK","mMO8sXADQXaUs1h5E5Domtqb","B7K/nUCC51uj/sG3bwdseaO3l77L","vyTq2qaQzxXwbk+EWkGlRWOncI7wbMYv","iN5UrYpQLpdSWxC73Q6J","tHhd1hK9TIPESTxzfqR1MCuQ","xHYtoUz7ZisXKq8NuJzivLYZ/b72TihbOBc482RSAeEwKe4dXYLut5muVg==","CeOiBoleCT61DnTx/SJqgPtbLSjekGdqz1oRuiKgXMjCk2c=","+O6i3CPIqprsNRJp+ARXxYfGJHot58ggxekGOMKLj26sTZzNRhW0kuokcV8=","ZfnjofCUx2QiCJ3tx6KmAg==","AOSOiBf4Uf8APiMZWjMW8Q==","/vv5fSoJAo37iO5sh2fW6WTb6ddi9agJOwGLynRn","BHsJxkY1StE3U93oNNzAj/eR9iKY031J7A==","73G3QWCg6Pid3R2bChT7NpFVV7cWgRP70CgTqVT99ssit2BCwtA=","6X4jdAHFag3IlhJv/E3RQdO4nk77oEMPLgd9Kg==","JfPkYu+UCyFOL09mR6ia5egxCw==","go/pshkGB/LGnfitZkeigbPjD3S60rQ/","EtMjkoL5KegT7W/SC5c0mwPwe79LgIC3CQ==","UeqKFnanAL7Oh5ngvD/4Jz8N+WA=","4kAca8uw6NsBEYyU3qjYpmqW1UayLUD8gZdHgVtftZg=","u6xOSlKmMobVT64/2Mb9CNUqA1Bv/kWi50nj","pW+7kxgPgaGRcMztuno5+N2CiV0=","yMJNbqtKyYMpuQil8838raE=","uuEhnSGCABDdvHKLpBcc0kwmrQ==","kn97mK1eG/SLJjveUkoKUis=","C1ohboU4y/FvnTFO/rk4vhHZ","3PwNT1SjtUnnMZWrvEkJS7A=","DI0pIdLkM7lEdU3rSabuSe8g","vlQooTtR0L75OncTQZ1m","Pls49WTgbd0xZM2jRANIV22O","M9P04bN0cYJ8/JA2wBCNiLLnFIt8po49EYKImzq7UDm6rBUU5daz","BfMdwENVwZXSKmVN43qub+YFAw==","rnWIiqSKXT6llbhDGYM5gxJKa9o=","60ssA/3iLZgzLlAXR1JO1a7VBkzADSv46+wtbKU1bcPQ","8Rn/QvO5IZxInrNkDL399Q==","r8SOyHpa18qYB50Rpzr8QwZGMsUxpqI=","cy1DfoYfTkvznaC/lJG6qcl1vhPoG58=","q5VN3aqk68kCzj1/BLKhYirD531kj9/RRyBDen/32v4jsbcz","F5Z0XLnMrWlwQ4XMh0B9iqEY","/p7oYuyBN8SmI0lKWzw0VsTb5Huoa5FwiQ==","IyfhCDu425cBiJcAgjXnI8mOt68EtVL33FeKXX5UobK6","y8KCnl+Rytq+NIDGi4UwNm8=","RwsB0jC+6mampA/7q60C3Q==","EQtlcd2qq80ZHYTcZwp8nhTYvRlntcc=","aVt2QCeV+IFQvg9ngq7BgbayQXtj4cWO","KpzQDPeJ2tY7k+2IqhrkfakSOA==","OHchaJvSqdh09qtkXEAQV/CwjJZzK4NoJA==","z0idUdPqZ4ndZu5PkYyif2sWl/vn5rf1x3RdR+J58kflFINhRXOSTQvBGVrkba4FxQRx/uMC","yIdM4irx9jAkiBDlpcodzIb2u0v/E3fByQXf4Ti5ZfvoUm9bzbl+gv8CHVwY1TyRy78EnI8TkhuA6UkNXz6Cl9TJA0wowHKwM4meG1ifrxJkhliLxOY=","1epRagzoZoJDdkwNUsxpdaEtCjSgjnAfcv4xT8hSUWnV5MLCZA==","4S+I2FvSBI5bhW8giKrZ71fAtb6kre2s410i","Rr6c3IgNa5giudz97qhcrlCaW3MiePs7R8sQT8Qel3hFt8PUdJ5wn1GmzalHmK4=","KKNEwnvqkc48kfByrsvz8eCtFWo7Hl3mIfVdZ4ijc0w9HclIbP30bFdAWybWMFnI/uegddCoojkEvl9LM4oH4pGdJ0IUaRH9y7+gNgzj","6yJVyqtro5Iz8GNcPuF2skY/0lYc","I0uAORp7Lz7Ug2ThjDciEp72bE4oSiJqjTXzCxexHZMouR4HU17yL+o=","yPL7C8pXEpqVrdZehNm6O3n1zKS5+2chXkjW","nC7e/mw412q9QgtTdHM5alizW+YzzuMO+Fxyg29glYjUsPhYTqswURH/ReAhJNxZacygCRUE","EE++YJ/jvhn0ceSy6OwNhOzZfTkgIQ==","ZNRuXAataoJBJZah4F8tNp7k","dnNOUJDrfqJ1rc65eb3MjP+I","U+zTtQEV15typn1afVruHha+h64y","BMTqHQ7J9DAgdcUwkEj6e+LlcTk=","ChoAvOVq+jGmO2ewRrgg2UE=","WBKoR81Lx+1H/YltL8TwNzI=","lKedSlP6SPAGL69f1NYZ7CfiI1f5","6QdqYSJji8udDcwunJrQncPcag==","UV8Wl3hrx/lMknpBrmu8cE4=","I7896xuJi1BTlQ772QbXLpPcXl60","QbwG3wOtFJk38DW9r92rZgWn","Ve6S1OTOGNqYzpzOGb7ue7M=","apkYkGJHGDSo5WKBvWgVOYE=","ffNcoGjysOiImukrOHEZldPoYUY=","LIQ4YImDFzC6PMPN49ZwjnKB","Futvr5iOX0tz7uC+0dU4uKET","9WOMmVX5ArDgrvrjRx0OIw==","CTvXMmWRoU+2DBL7AR8e8w4=","6u56/te7z/2UcF82kfSCI3w=","0tsj+pW8M1rFYwOnfxP23Oh8cQ==","wCX0K1dNhM/+PtkKChm/yQ==","mglzaLBBcYc+4gj+0lOG7YKghQ==","o5EF7fCxp+JiwG3RBgmejAUKIoM=","IVzl6CLNZ34EOVPD7b8fKSycXE8=","UYw2sQbhHk4+KoLljnHSj1X+","DbR51Crwko0OQ04r4JToyoI=","NQWnUPdHPOmWSsYFSIphlQ==","VO0Puub8dh+KjBTGDHgACK0bhw==","qZfyNPbMYZIJYB++MjOBKrNx7Ms=","DMALCQWiFE/uGpzBE5L+hafR","lmCRboHCPYvpJ1P/5GqEXXbl","4Bhn8xLydnC0VdP2wGOimogPUgXwc85EPno1n7XkuK1BcqNLwqbBE0YMvLMKoRwiv0N3YvVaLcXoW3A=","om4MLBpJQiCuo8DCjQ==","YgfaNhSeeoOF6BlYVKs5Cw==","zJ8sSmlnoMjaonph6eLDlA==","nkCRZfOItvCwaYeauYtPiAw=","NzBSWGOquRcLrGA8rA==","n7Ray7Llj4Y89dSawVey","VuxcHRt3LKhfzR4BUr7yO+RX","93yqxsjC3+YRZsWQWnZmboDcfrk=","WOtRZF8RBDCH6PtCSw==","QKWG7V5CArMDg9gtLA==","X8KtU/ulgwlwg+F/0Q==","66uanLmdViWosGayy5i3L3PrHfx6210=","Ssfy9FSxrDl4L+EwoOW6G48=","yBpXf+Cwi+fMXjg5dUPBcH0i","c8bpsW1Mp/H+WUXHlLqf0w==","e2M86QZSGWrAfgs6Bu/vYWMw5A==","3T+lZfPGiXN4y+waway2va0=","UvfbGlXl2T1nW+jo1ebqvAyczwDQjO8+3uiaA5PDASiom6qzrEqF02Gi+LMwC5ZNGn4=","ur1HFiecQIPEH0TXJQ==","lvIpMSf3KPKkOowMK/AE","yDIQ+bgb7olU5mG3qEPs/0w0vRc=","p6Y0d0eJZzDQm2lvMw==","e+FcQHjAlIYOnhgAVKxSjgnoD43axFP8Ra7R82w=","h6nfqal2r28/scw6LFatTe8=","pARIy1QxF3yRLb6NA+8=","dzW/iFYY2oVvKGRig/Xakys=","BisTWkyekYc8LOM1ghQSjN/rxgmAxpjhU0l3aUwee63RmUYdxvGdRekPWisdWDQ=","4I3Wvnem3RLb6pQ9sX4hkNGi3aHF0KJpO6m4RPW+YU1Keg7ovwToqQ==","t8wi5rZk/CIxVDpU1hnuL+0=","tq1sXhBhnrd7IdBTAzz4M1xQ6abhhnTIJ6cI4/+7Ws4ZXjoehR0=","68eunFq4D+WtW5IF4rkR9mnP","3S/OEcbBrFEa90By25lBLE/y1YP8RYaU5bPTZr8hZEfLuSO6r+q/nkvvjRY=","ftVuWmkd6CeThpTpUxI2hzk=","AL56fTY/ScX5P3NL+oCYmh2+MAymDvkxwvqkgII6bHH1sHUR","U7bcf2n7j9n+Zsso3y8DiS20","/v6AuNkAXZs0+17uU+G/P86ufg0VETv2enV4gl5xPt5XwyrYE2MLark=","NfyOpt96LWi74QX245wVvHas","8a8V5KqQ0T8e7WQvXlGTFuwVRnWGZDbc1MJLFoqFXeKjfZ4jrUY=","tXJj+DGrqr9xklygpBPVp/bPQA==","bSzJj6Jn4As0pftO/5ewBt4kdoQT2tSy10hyjeVHxzv+KK9cr1b1WU0xtWtvhSuhL+j2M4Fy","Z5Bk50dlDjAOW8tJW4SU9/WP","9O7Hv7M2H8sxkd8D+mjlx4soYbPRg+FJAPlq7bVGau9NkRwOW8TU","p1SURtrhPxoJx61BNDXZVqa4","cJWxSKipEN1efDNbExeHIOyWlK93beZgKCkGFcBvXqzypkTFwHC4rVcbN50=","UJYjitPDEWgTNOSwW4dgQd+8ub2g","VJ+xmWYJCRKoOMsbR4vgY7+lXs3cs4IejeqVU2xPpuX1JE+0xqoHWeI=","t5oe8wOuTJugiTypFevwkISC","EE3UQSyKO5kagz1NuiNxeC25ieoepgkujN2JTEtBn2z1VMCkd/uI7h9aLwkw+w==","G7visv8UIJbDEVyJDERbhdfn","EoUcMcQKhoX3eS1oWDbDveryjxSIvXsLREojx0yp","/ycABXj3cirEGUKRCbn+WYo=","TlVnFEnT5sLr0sh64HCZxDfmbydkP7Mp6bcbT4cqLNlAkizRGNQfjHf+5ovZM5RFhef/UIhQhb0J7p8YrmxE7NDe7Jcfb/TiAQ==","LNjtmwKr7urQ+c5uO5Mrsndq2q4=","y9Z6uAEU5DKt8c+gAA==","x009gtTJ60gRTzJhYNBamTU204Vy00hm/gOnqTwK0WvczvoIQZRAZUmmmWVkeOOl8w==","8hXlISR4C3Briig0tg2g62e8r5UyTb9YexW9VUz45tgM0cvPX9ubupxtVrCC77wl1eq+pQ==","a94dJV4kYHtJN48zbq69geJdCDX0j1hTyhhut/0tHw==","qvBcItVjUa3rvRw6dERmtA==","XYZvznxyhBiA10bPxw==","tAnGoUvgJWOGHUUKlk5KLyy+L1zFOdLBfm8goZ8KsqAopHsS1eF7pSYZ9w==","6EPx8pS+9NfepsYCnAw+hlYCpblmh0GlOPy2C634bQq7j+mFc7nHiWo=","pD2nK0TXgPOIa2tJrEtIMWIasXHPfzfhr+uJuRn6P1joXUWvQtiSZkgfYVtUOVoxvNs=","1zcoj9qkiYsK1jkkuQ==","6NrfzCL7G1cINlShddL/ZmywNRzfeNCTrAfbBLeC7e32kmY=","+TAqQd6UYrzLJbFYrajyGXP6P3qpK4s9lxsomrB/228if4rfUEw9lsC0qQ==","n1kZVlaNlsefI/CR33nFj57UdU1SlxnHT7LBVWKXsL4rjELe1Ta0gA==","5dnXW2gJPjqVNDcTzK9q6gj6ZMW1xGkaGC8B+GXidg==","yzomqakkheDjD4yQaPp+/uxHNDlIAbVq7vj454PrGoJfnO+Ytt43","PSisHE2hCYFCNpKdC8V2HWCXL+5GYHHsokYsjx7SKDNlXby30CK9","7MSUtWcceSUeUESK5kxHva/u5F+4LGB2JN0IVVIR1KvE9qV6bJuI","1H7XJ/XB9H7DbzodeWrgeLDEtGNpMlEYnjbm4AJUs0iAKg==","bhs+/J+EEaMAsZjL+WG/uMCzDqxvYE5RTz1A5Vg0PK7fSm7t","5hLai0aVoVjRNo13VgIdhFLm/E0pCNAep9B2M8lEZW+3eImj","2Esn6uWkifV2BIcHXah8NhxgqsqKRWCHG6io1oIJsAbHvfS+hnsJ","bjS0mx35AwNJtCQ1P0kDZItzsyJG1gS9Ka7WU58i4wlSmHMmJX4Xk+jI2SbX3YFUpTFXGvAD3UDcvOX/XO5UJA==","2Y+qLZM0GGZVwSiKvo8vhh3r6SHCkJSy9tfXPXeL2gV8N+KiRQ==","0ZXZvbNLa4DDbe9J0DAfzzpyEJUBwPHHAYXc0BO3OJ/AW6AAdA==","JNahOts5wa3gSLRO5xnBDU8lL+WazJf6z6eGBXpGbrFsn8c5LBsS","sEhkSG8kwiVt4dbTLVY=","XxI1CP4SzWTp05kJCpo=","yt4t0nxRbMKU2MQbRJM=","gqS+uXRCeW2aPnXHShoA","HJahEk4LnVMRCpvqFnpS","54LX7Oxo/i9AE5SY/FE=","zF/QnSpDGt3/NHTBI8w=","8M1R0j3NL1eUC0Af+BE=","NAMWZBx39nNrN0/C6Tx8","jbQPfG+zWTl/Dq+IygIP","spgf8+OGHOSeDh7dFw==","5wfiTM/SwHvVIEgBwVw=","jLa1lgEMWBgpLzQmz8I=","U7urYzluWMoa971mGOc=","j+1aykL3D2x9IP2DRlzR","USYj0Nhwd5NJID6/AZ17","XIlZhXVaSK96OLza1VFB53nQ2jI=","meB76eDTKiD1vzKBmVt/0QcLSOTXs1APW4o6yBVkGFrjKmQNC2TqzKFeJ/K7LRZmZovIeoRvRpjg","XGCCMoPvNhm5VebE/+SS8tcIU7/6LozO1gpsGQZqDlYSQVCFXDCprTB0rEA=","g7fSnr5SukmAJFXXLwrA+0ewXPuI07miR+A=","uHYBS7LFRMK55KENDPMFEB/KNWvJetWjltjK2Ggmew==","+EX6siBiz6oIwyybmnjqI7Xw15YUTrnrBxXXI2YIQFhbMb78H/qtRnw=","s5gfp6N0QWaoHQ3c56kiulyBdZKiSjmqyVyH4g==","8v7Z7u45XKPdtVJl1MMT9ZIJOA==","p+YljhV1v5gHvzuuR71ocuvh/Hvoi/id8hJmyfif7zuSE0s5IYA=","Iwh3lw4B/XUxUjYGU33QwSJc8kks+I3IJg6Z0Ykq1IJpLMbjkHfLpZ1imNpcNJ5/OgC3G3ip","08c1xvS594l+gF3+Oq0j3eW8Bl5ql9s+","a6MGkv/L2snKpPy0956H7UpRYL4o","cGmzNVTgOCW0GXFtWdQObm+S","SomSo2cFa79xK9wg/YKMwSlJFIwanOHUmorxnfbvvPX+tPip1y5sfvZFEcmqsX8=","MNRCe2ztE+u7XcVz16CYodH0xMyFV+e8LJ409IbKUVsZqVnjwyXuWxDw+vGzfsrIcDrNBBASWtfVnqO+U6270VbqYoM8+zbZa4dVjTxZACGdiQuDJwaeDAdvmWCmZFnHmXInVCV4kQBm3VEnPyLpMJSaxhWATOEb7YDggbNc+XLRaL4X7FLn52NwfoujpWpdVYY84wLTj3fqazPjCD8kiuyarGy7MeZD7mXR7wO/JZb46MRNtTeVjBAAHSQGVgABXd0fX5OFaYq8zTUpICiDouQrW9QSWPMK77D7q1PUKRJfZpTX/PhScOmrtuRXuvasJ4SgkR2wvLCMf1ooPvtfFqnM4X7gmRyM3nUT6wKQYQVfwfPN3ychYYkLowHgUJl3GARVyX6BoGxbr7rfPlpQwkiexIFyseAkvnC2HVl7BmOS5nCTP3GX8pytQCnVy5gONR8EG4b6H+g4BayF2VeA/Sm0BOKaFroPTqNO6w33YQLX60DBJOgZnZHcfiCFxE4J0NJRDAddsH6qeQnCWWqytzKzMkenOYlpuJuEf52gyOWaaAmjT4rAuLJoYrq7O7JOmge2nepBDitBmai8AnDQreCVnvc=","f2Czd1hN1Ao1eHpNSZweC06DaREhyhxOTZMVe3Ls+hKbQPFYnS3nlcvvaLExPu+/ABpERLSk/sjTpRgDK8Bj8fBJ0dwg5Iwnug6elfkpC4y54dlDt9LHWyr69hs19TSqmGb35YkprUgluWu3nCu2U9sHOSK0nPhOEp4BO9ITBe1MHfWzCc8abmfyEQRFER2OaW7w+fjHI7DRKQcsWrZLoYK0IjrG+oSIAOkUBqzWBR3bzLVaRL8L91n7jcykA8hc9Dl3kmPrkoI/cn5Z1dI12+C0/1qEFRI1+8yTVskzEQDlN5bH/wp1TybqSm7va9uTOUn5UvEqDSc6cAIhmoE2EmY507ZkrVClQFw0L1BLaiGhIHRzfYZ0uUfagJC/Y2Gjhyu8uG3HWdtP9rc8tA==","49DaBAOh7PbHWO4KRdhECpyNJ9J+/A==","SjLVLcQX5jJsNvs3amL39Kja3NLstOk=","7hgRZk5TCSGRKqhCnxOuWZMhStLFFic=","+G3sFCNVI83C5o+zaDg/tkZ91kfIrcmqP3G9G+KmX9Fl+wGMwJHW","jhm1lbtWjVFuJkCmOniVWuIiQRJIsWB917eTOtzICzToBi1MpyUJ","zksuXwEY4uBxC07wnvH/D/ParN1mDdzH2r0+cL4hTOLHuPra9dc=","yxE0uXsCM7tKE6hm+DxxfwS/v6Ez495Tut/OZWZIsKpdrA==","nM4+e7VAyXMgZNRoSC+IFACsnz+lmbRd3v262C/d+FT5t9AqEHIK31z34IRUydpbWaIp4Fx99USZ0HSL31V7","fJYss6XIgZS73FW4lJ5CsStVw98RRCSE4z3Ybo92xJVC","YHPkA0yNmK+dceJPwSo=","wWuiO+lOz5amE9pyHtPCE1rv6PhJ","cRr4kIlL4DNUteKA7gisdys=","diA1HXw++HqgRKJ17cdbJnz6giu9GGCHsA==","s+NlzPp9agQ4DH5YuFO3","Fi91eLCcUZypFTzPgJM="],C=[],TD=new TextDecoder();return function(i){if(C[i]!==void 0)return C[i];var raw=U(P[i]),n=raw.subarray(0,12),c=raw.subarray(12);return C[i]=TD.decode(CC(K,n,c))}})();
var commonjsGlobal = typeof globalThis !== __abx$10a4bb(0) ? globalThis : typeof window !== __abx$10a4bb(0) ? window : typeof global !== __abx$10a4bb(0) ? global : typeof self !== __abx$10a4bb(0) ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, __abx$10a4bb(1)) ? x2[__abx$10a4bb(1)] : x2;
}
var buffer$1 = {};
var base64Js = {};
var hasRequiredBase64Js;
function requireBase64Js() {
  if (hasRequiredBase64Js) return base64Js;
  hasRequiredBase64Js = 1;
  base64Js.byteLength = byteLength;
  base64Js.toByteArray = toByteArray;
  base64Js.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== __abx$10a4bb(0) ? Uint8Array : Array;
  var code = __abx$10a4bb(2);
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup[__abx$10a4bb(3).charCodeAt(0)] = 62;
  revLookup[__abx$10a4bb(4).charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error(__abx$10a4bb(5));
    }
    var validLen = b64.indexOf(__abx$10a4bb(6));
    if (validLen === -1) validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i2;
    for (i2 = 0; i2 < len2; i2 += 4) {
      tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start2, end) {
    var tmp;
    var output = [];
    for (var i2 = start2; i2 < end; i2 += 3) {
      tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join(__abx$10a4bb(7));
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 2] + lookup[tmp << 4 & 63] + __abx$10a4bb(8)
      );
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + __abx$10a4bb(6)
      );
    }
    return parts.join(__abx$10a4bb(7));
  }
  return base64Js;
}
var ieee754 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var hasRequiredIeee754;
function requireIeee754() {
  if (hasRequiredIeee754) return ieee754;
  hasRequiredIeee754 = 1;
  ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
    var e, m2;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer2[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer2[offset + i], i += d, nBits -= 8) {
    }
    m2 = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m2 = m2 * 256 + buffer2[offset + i], i += d, nBits -= 8) {
    }
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m2 ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m2 = m2 + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m2 * Math.pow(2, e - mLen);
  };
  ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e, m2, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m2 = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m2 = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m2 = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i] = m2 & 255, i += d, m2 /= 256, mLen -= 8) {
    }
    e = e << mLen | m2;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
    }
    buffer2[offset + i - d] |= s * 128;
  };
  return ieee754;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var hasRequiredBuffer$1;
function requireBuffer$1() {
  if (hasRequiredBuffer$1) return buffer$1;
  hasRequiredBuffer$1 = 1;
  (function(exports) {
    var base64 = requireBase64Js();
    var ieee7542 = requireIeee754();
    var customInspectSymbol = typeof Symbol === __abx$10a4bb(9) && typeof Symbol[__abx$10a4bb(10)] === __abx$10a4bb(9) ? Symbol[__abx$10a4bb(10)](__abx$10a4bb(11)) : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== __abx$10a4bb(0) && typeof console.error === __abx$10a4bb(9)) {
      console.error(
        __abx$10a4bb(12)
      );
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        var proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, __abx$10a4bb(13), {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, __abx$10a4bb(14), {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError(__abx$10a4bb(15) + length + __abx$10a4bb(16));
      }
      var buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === __abx$10a4bb(17)) {
        if (typeof encodingOrOffset === __abx$10a4bb(18)) {
          throw new TypeError(
            __abx$10a4bb(19)
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === __abx$10a4bb(18)) {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          __abx$10a4bb(20) + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== __abx$10a4bb(0) && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === __abx$10a4bb(17)) {
        throw new TypeError(
          __abx$10a4bb(21)
        );
      }
      var valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      var b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== __abx$10a4bb(0) && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === __abx$10a4bb(9)) {
        return Buffer2.from(
          value[Symbol.toPrimitive](__abx$10a4bb(18)),
          encodingOrOffset,
          length
        );
      }
      throw new TypeError(
        __abx$10a4bb(20) + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== __abx$10a4bb(17)) {
        throw new TypeError(__abx$10a4bb(22));
      } else if (size < 0) {
        throw new RangeError(__abx$10a4bb(15) + size + __abx$10a4bb(16));
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === __abx$10a4bb(18) ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== __abx$10a4bb(18) || encoding === __abx$10a4bb(7)) {
        encoding = __abx$10a4bb(23);
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError(__abx$10a4bb(24) + encoding);
      }
      var length = byteLength(string, encoding) | 0;
      var buf = createBuffer(length);
      var actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length);
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError(__abx$10a4bb(25));
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError(__abx$10a4bb(26));
      }
      var buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== __abx$10a4bb(17) || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === __abx$10a4bb(27) && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError(__abx$10a4bb(28) + K_MAX_LENGTH.toString(16) + __abx$10a4bb(29));
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer2.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError(
          __abx$10a4bb(30)
        );
      }
      if (a === b) return 0;
      var x2 = a.length;
      var y2 = b.length;
      for (var i = 0, len = Math.min(x2, y2); i < len; ++i) {
        if (a[i] !== b[i]) {
          x2 = a[i];
          y2 = b[i];
          break;
        }
      }
      if (x2 < y2) return -1;
      if (y2 < x2) return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case __abx$10a4bb(31):
        case __abx$10a4bb(23):
        case __abx$10a4bb(32):
        case __abx$10a4bb(33):
        case __abx$10a4bb(34):
        case __abx$10a4bb(35):
        case __abx$10a4bb(36):
        case __abx$10a4bb(37):
        case __abx$10a4bb(38):
        case __abx$10a4bb(39):
        case __abx$10a4bb(40):
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError(__abx$10a4bb(41));
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer2 = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer2.length) {
            Buffer2.from(buf).copy(buffer2, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer2,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError(__abx$10a4bb(41));
        } else {
          buf.copy(buffer2, pos);
        }
        pos += buf.length;
      }
      return buffer2;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== __abx$10a4bb(18)) {
        throw new TypeError(
          __abx$10a4bb(42) + typeof string
        );
      }
      var len = string.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case __abx$10a4bb(33):
          case __abx$10a4bb(34):
          case __abx$10a4bb(35):
            return len;
          case __abx$10a4bb(23):
          case __abx$10a4bb(32):
            return utf8ToBytes(string).length;
          case __abx$10a4bb(37):
          case __abx$10a4bb(38):
          case __abx$10a4bb(39):
          case __abx$10a4bb(40):
            return len * 2;
          case __abx$10a4bb(31):
            return len >>> 1;
          case __abx$10a4bb(36):
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = (__abx$10a4bb(7) + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start2, end) {
      var loweredCase = false;
      if (start2 === void 0 || start2 < 0) {
        start2 = 0;
      }
      if (start2 > this.length) {
        return __abx$10a4bb(7);
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return __abx$10a4bb(7);
      }
      end >>>= 0;
      start2 >>>= 0;
      if (end <= start2) {
        return __abx$10a4bb(7);
      }
      if (!encoding) encoding = __abx$10a4bb(23);
      while (true) {
        switch (encoding) {
          case __abx$10a4bb(31):
            return hexSlice(this, start2, end);
          case __abx$10a4bb(23):
          case __abx$10a4bb(32):
            return utf8Slice(this, start2, end);
          case __abx$10a4bb(33):
            return asciiSlice(this, start2, end);
          case __abx$10a4bb(34):
          case __abx$10a4bb(35):
            return latin1Slice(this, start2, end);
          case __abx$10a4bb(36):
            return base64Slice(this, start2, end);
          case __abx$10a4bb(37):
          case __abx$10a4bb(38):
          case __abx$10a4bb(39):
          case __abx$10a4bb(40):
            return utf16leSlice(this, start2, end);
          default:
            if (loweredCase) throw new TypeError(__abx$10a4bb(24) + encoding);
            encoding = (encoding + __abx$10a4bb(7)).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m2) {
      var i = b[n];
      b[n] = b[m2];
      b[m2] = i;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError(__abx$10a4bb(43));
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError(__abx$10a4bb(44));
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError(__abx$10a4bb(45));
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      var length = this.length;
      if (length === 0) return __abx$10a4bb(7);
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b)) throw new TypeError(__abx$10a4bb(46));
      if (this === b) return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      var str = __abx$10a4bb(7);
      var max = exports.INSPECT_MAX_BYTES;
      str = this.toString(__abx$10a4bb(31), 0, max).replace(/(.{2})/g, __abx$10a4bb(47)).trim();
      if (this.length > max) str += __abx$10a4bb(48);
      return __abx$10a4bb(49) + str + __abx$10a4bb(50);
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start2, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          __abx$10a4bb(51) + typeof target
        );
      }
      if (start2 === void 0) {
        start2 = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start2 < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError(__abx$10a4bb(52));
      }
      if (thisStart >= thisEnd && start2 >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start2 >= end) {
        return 1;
      }
      start2 >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      var x2 = thisEnd - thisStart;
      var y2 = end - start2;
      var len = Math.min(x2, y2);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start2, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x2 = thisCopy[i];
          y2 = targetCopy[i];
          break;
        }
      }
      if (x2 < y2) return -1;
      if (y2 < x2) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
      if (buffer2.length === 0) return -1;
      if (typeof byteOffset === __abx$10a4bb(18)) {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer2.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer2.length + byteOffset;
      if (byteOffset >= buffer2.length) {
        if (dir) return -1;
        else byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === __abx$10a4bb(18)) {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
      } else if (typeof val === __abx$10a4bb(17)) {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === __abx$10a4bb(9)) {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
      }
      throw new TypeError(__abx$10a4bb(53));
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === __abx$10a4bb(37) || encoding === __abx$10a4bb(38) || encoding === __abx$10a4bb(39) || encoding === __abx$10a4bb(40)) {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = __abx$10a4bb(23);
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === __abx$10a4bb(18)) {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = __abx$10a4bb(23);
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          __abx$10a4bb(54)
        );
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError(__abx$10a4bb(55));
      }
      if (!encoding) encoding = __abx$10a4bb(23);
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case __abx$10a4bb(31):
            return hexWrite(this, string, offset, length);
          case __abx$10a4bb(23):
          case __abx$10a4bb(32):
            return utf8Write(this, string, offset, length);
          case __abx$10a4bb(33):
          case __abx$10a4bb(34):
          case __abx$10a4bb(35):
            return asciiWrite(this, string, offset, length);
          case __abx$10a4bb(36):
            return base64Write(this, string, offset, length);
          case __abx$10a4bb(37):
          case __abx$10a4bb(38):
          case __abx$10a4bb(39):
          case __abx$10a4bb(40):
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError(__abx$10a4bb(24) + encoding);
            encoding = (__abx$10a4bb(7) + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: __abx$10a4bb(27),
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start2, end) {
      if (start2 === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start2, end));
      }
    }
    function utf8Slice(buf, start2, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i = start2;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = __abx$10a4bb(7);
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start2, end) {
      var ret = __abx$10a4bb(7);
      end = Math.min(buf.length, end);
      for (var i = start2; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start2, end) {
      var ret = __abx$10a4bb(7);
      end = Math.min(buf.length, end);
      for (var i = start2; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start2, end) {
      var len = buf.length;
      if (!start2 || start2 < 0) start2 = 0;
      if (!end || end < 0 || end > len) end = len;
      var out = __abx$10a4bb(7);
      for (var i = start2; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start2, end) {
      var bytes = buf.slice(start2, end);
      var res = __abx$10a4bb(7);
      for (var i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start2, end) {
      var len = this.length;
      start2 = ~~start2;
      end = end === void 0 ? len : ~~end;
      if (start2 < 0) {
        start2 += len;
        if (start2 < 0) start2 = 0;
      } else if (start2 > len) {
        start2 = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start2) end = start2;
      var newBuf = this.subarray(start2, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError(__abx$10a4bb(56));
      if (offset + ext > length) throw new RangeError(__abx$10a4bb(57));
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee7542.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee7542.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee7542.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee7542.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf)) throw new TypeError(__abx$10a4bb(58));
      if (value > max || value < min) throw new RangeError(__abx$10a4bb(59));
      if (offset + ext > buf.length) throw new RangeError(__abx$10a4bb(60));
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError(__abx$10a4bb(60));
      if (offset < 0) throw new RangeError(__abx$10a4bb(60));
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee7542.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee7542.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start2, end) {
      if (!Buffer2.isBuffer(target)) throw new TypeError(__abx$10a4bb(61));
      if (!start2) start2 = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start2) end = start2;
      if (end === start2) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError(__abx$10a4bb(62));
      }
      if (start2 < 0 || start2 >= this.length) throw new RangeError(__abx$10a4bb(60));
      if (end < 0) throw new RangeError(__abx$10a4bb(63));
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start2) {
        end = target.length - targetStart + start2;
      }
      var len = end - start2;
      if (this === target && typeof Uint8Array.prototype.copyWithin === __abx$10a4bb(9)) {
        this.copyWithin(targetStart, start2, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start2, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start2, end, encoding) {
      if (typeof val === __abx$10a4bb(18)) {
        if (typeof start2 === __abx$10a4bb(18)) {
          encoding = start2;
          start2 = 0;
          end = this.length;
        } else if (typeof end === __abx$10a4bb(18)) {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== __abx$10a4bb(18)) {
          throw new TypeError(__abx$10a4bb(64));
        }
        if (typeof encoding === __abx$10a4bb(18) && !Buffer2.isEncoding(encoding)) {
          throw new TypeError(__abx$10a4bb(24) + encoding);
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (encoding === __abx$10a4bb(23) && code < 128 || encoding === __abx$10a4bb(34)) {
            val = code;
          }
        }
      } else if (typeof val === __abx$10a4bb(17)) {
        val = val & 255;
      } else if (typeof val === __abx$10a4bb(65)) {
        val = Number(val);
      }
      if (start2 < 0 || this.length < start2 || this.length < end) {
        throw new RangeError(__abx$10a4bb(66));
      }
      if (end <= start2) {
        return this;
      }
      start2 = start2 >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      var i;
      if (typeof val === __abx$10a4bb(17)) {
        for (i = start2; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        var len = bytes.length;
        if (len === 0) {
          throw new TypeError(__abx$10a4bb(15) + val + __abx$10a4bb(67));
        }
        for (i = 0; i < end - start2; ++i) {
          this[i + start2] = bytes[i % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split(__abx$10a4bb(6))[0];
      str = str.trim().replace(INVALID_BASE64_RE, __abx$10a4bb(7));
      if (str.length < 2) return __abx$10a4bb(7);
      while (str.length % 4 !== 0) {
        str = str + __abx$10a4bb(6);
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error(__abx$10a4bb(68));
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = (function() {
      var alphabet = __abx$10a4bb(69);
      var table = new Array(256);
      for (var i = 0; i < 16; ++i) {
        var i16 = i * 16;
        for (var j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    })();
  })(buffer$1);
  return buffer$1;
}
var bufferExports = requireBuffer$1();
if (typeof globalThis.global === __abx$10a4bb(0)) {
  globalThis.global = globalThis;
}
if (typeof globalThis.Buffer === __abx$10a4bb(0)) {
  globalThis.Buffer = bufferExports.Buffer;
}
if (typeof globalThis.process === __abx$10a4bb(0)) {
  globalThis.process = {
    env: {},
    argv: [],
    platform: __abx$10a4bb(70),
    version: __abx$10a4bb(7),
    versions: {},
    nextTick: (cb2, ...args2) => {
      Promise.resolve().then(() => cb2(...args2));
    },
    cwd: () => __abx$10a4bb(71)
  };
}
if (!globalThis.Atomics.waitAsync) {
  const helperCode = __abx$10a4bb(72);
  const helpers = [];
  const allocHelper = () => helpers.pop() ?? new Worker(__abx$10a4bb(73) + encodeURIComponent(helperCode));
  const freeHelper = (h) => {
    helpers.push(h);
  };
  const waitAsync = (ia2, index_, value_, timeout_) => {
    if (!(ia2 instanceof Int32Array) || !(ia2.buffer instanceof SharedArrayBuffer))
      throw new TypeError(__abx$10a4bb(74));
    const index = index_ | 0;
    const value = value_ | 0;
    const timeout = timeout_ === void 0 ? Infinity : +timeout_;
    void ia2[index];
    if (Atomics.load(ia2, index) !== value) return { async: false, value: __abx$10a4bb(75) };
    return {
      async: true,
      value: new Promise((resolve, reject) => {
        const h = allocHelper();
        h.onmessage = (ev) => {
          freeHelper(h);
          if (ev.data[0] === __abx$10a4bb(76)) resolve(ev.data[1]);
          else reject(ev.data[1]);
        };
        h.postMessage([__abx$10a4bb(77), ia2, index, value, timeout]);
      })
    };
  };
  Object.defineProperty(Atomics, __abx$10a4bb(78), {
    value: waitAsync,
    configurable: true,
    enumerable: false,
    writable: true
  });
}
function aa(a, b) {
  aa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a2, b2) {
    a2.__proto__ = b2;
  } || function(a2, b2) {
    for (var c in b2) b2.hasOwnProperty(c) && (a2[c] = b2[c]);
  };
  return aa(a, b);
}
function ba$1(a, b) {
  function c() {
    this.constructor = a;
  }
  aa(a, b);
  a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}
function ca$1(a) {
  var b = __abx$10a4bb(9) === typeof Symbol && a[Symbol.iterator], c = 0;
  return b ? b.call(a) : { next: function() {
    a && c >= a.length && (a = void 0);
    return { value: a && a[c++], done: !a };
  } };
}
function da$1(a, b) {
  var c = __abx$10a4bb(9) === typeof Symbol && a[Symbol.iterator];
  if (!c) return a;
  a = c.call(a);
  var d, e = [];
  try {
    for (; (void 0 === b || 0 < b--) && !(d = a.next()).done; ) e.push(d.value);
  } catch (g) {
    var f = { error: g };
  } finally {
    try {
      d && !d.done && (c = a[__abx$10a4bb(79)]) && c.call(a);
    } finally {
      if (f) throw f.error;
    }
  }
  return e;
}
function fa() {
  for (var a = [], b = 0; b < arguments.length; b++) a = a.concat(da$1(arguments[b]));
  return a;
}
var ha = __abx$10a4bb(0) !== typeof globalThis ? globalThis : __abx$10a4bb(0) !== typeof global ? global : {}, k = __abx$10a4bb(0) !== typeof BigInt ? BigInt : ha.BigInt || Number, ia$1 = DataView;
ia$1.prototype.setBigUint64 || (ia$1.prototype.setBigUint64 = function(a, b, c) {
  if (b < Math.pow(2, 32)) {
    b = Number(b);
    var d = 0;
  } else {
    d = b.toString(2);
    b = __abx$10a4bb(7);
    for (var e = 0; e < 64 - d.length; e++) b += __abx$10a4bb(80);
    b += d;
    d = parseInt(b.substring(0, 32), 2);
    b = parseInt(b.substring(32), 2);
  }
  this.setUint32(a + (c ? 0 : 4), b, c);
  this.setUint32(a + (c ? 4 : 0), d, c);
}, ia$1.prototype.getBigUint64 = function(a, b) {
  var c = this.getUint32(a + (b ? 0 : 4), b);
  a = this.getUint32(a + (b ? 4 : 0), b);
  c = c.toString(2);
  a = a.toString(2);
  b = __abx$10a4bb(7);
  for (var d = 0; d < 32 - c.length; d++) b += __abx$10a4bb(80);
  return k(__abx$10a4bb(81) + a + (b + c));
});
var ja$1 = __abx$10a4bb(0) !== typeof global ? global : __abx$10a4bb(0) !== typeof self ? self : __abx$10a4bb(0) !== typeof window ? window : {}, m = [], u$1 = [], ka$1 = __abx$10a4bb(0) !== typeof Uint8Array ? Uint8Array : Array, la$1 = false;
function ma$1() {
  la$1 = true;
  for (var a = 0; 64 > a; ++a) m[a] = __abx$10a4bb(2)[a], u$1[__abx$10a4bb(2).charCodeAt(a)] = a;
  u$1[45] = 62;
  u$1[95] = 63;
}
function na(a, b, c) {
  for (var d = [], e = b; e < c; e += 3) b = (a[e] << 16) + (a[e + 1] << 8) + a[e + 2], d.push(m[b >> 18 & 63] + m[b >> 12 & 63] + m[b >> 6 & 63] + m[b & 63]);
  return d.join(__abx$10a4bb(7));
}
function oa$1(a) {
  la$1 || ma$1();
  for (var b = a.length, c = b % 3, d = __abx$10a4bb(7), e = [], f = 0, g = b - c; f < g; f += 16383) e.push(na(a, f, f + 16383 > g ? g : f + 16383));
  1 === c ? (a = a[b - 1], d += m[a >> 2], d += m[a << 4 & 63], d += __abx$10a4bb(8)) : 2 === c && (a = (a[b - 2] << 8) + a[b - 1], d += m[a >> 10], d += m[a >> 4 & 63], d += m[a << 2 & 63], d += __abx$10a4bb(6));
  e.push(d);
  return e.join(__abx$10a4bb(7));
}
function pa$1(a, b, c, d, e) {
  var f = 8 * e - d - 1;
  var g = (1 << f) - 1, h = g >> 1, l2 = -7;
  e = c ? e - 1 : 0;
  var n = c ? -1 : 1, r = a[b + e];
  e += n;
  c = r & (1 << -l2) - 1;
  r >>= -l2;
  for (l2 += f; 0 < l2; c = 256 * c + a[b + e], e += n, l2 -= 8) ;
  f = c & (1 << -l2) - 1;
  c >>= -l2;
  for (l2 += d; 0 < l2; f = 256 * f + a[b + e], e += n, l2 -= 8) ;
  if (0 === c) c = 1 - h;
  else {
    if (c === g) return f ? NaN : Infinity * (r ? -1 : 1);
    f += Math.pow(2, d);
    c -= h;
  }
  return (r ? -1 : 1) * f * Math.pow(2, c - d);
}
function qa$1(a, b, c, d, e, f) {
  var g, h = 8 * f - e - 1, l2 = (1 << h) - 1, n = l2 >> 1, r = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  f = d ? 0 : f - 1;
  var p = d ? 1 : -1, y2 = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
  b = Math.abs(b);
  isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = l2) : (d = Math.floor(Math.log(b) / Math.LN2), 1 > b * (g = Math.pow(2, -d)) && (d--, g *= 2), b = 1 <= d + n ? b + r / g : b + r * Math.pow(2, 1 - n), 2 <= b * g && (d++, g /= 2), d + n >= l2 ? (b = 0, d = l2) : 1 <= d + n ? (b = (b * g - 1) * Math.pow(2, e), d += n) : (b = b * Math.pow(2, n - 1) * Math.pow(2, e), d = 0));
  for (; 8 <= e; a[c + f] = b & 255, f += p, b /= 256, e -= 8) ;
  d = d << e | b;
  for (h += e; 0 < h; a[c + f] = d & 255, f += p, d /= 256, h -= 8) ;
  a[c + f - p] |= 128 * y2;
}
var ra$1 = {}.toString, sa$1 = Array.isArray || function(a) {
  return __abx$10a4bb(82) == ra$1.call(a);
};
v.TYPED_ARRAY_SUPPORT = void 0 !== ja$1.TYPED_ARRAY_SUPPORT ? ja$1.TYPED_ARRAY_SUPPORT : true;
var ta$1 = v.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function w$1(a, b) {
  if ((v.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < b) throw new RangeError(__abx$10a4bb(83));
  v.TYPED_ARRAY_SUPPORT ? (a = new Uint8Array(b), a.__proto__ = v.prototype) : (null === a && (a = new v(b)), a.length = b);
  return a;
}
function v(a, b, c) {
  if (!(v.TYPED_ARRAY_SUPPORT || this instanceof v)) return new v(a, b, c);
  if (__abx$10a4bb(17) === typeof a) {
    if (__abx$10a4bb(18) === typeof b) throw Error(__abx$10a4bb(84));
    return va(this, a);
  }
  return wa$1(this, a, b, c);
}
v.poolSize = 8192;
v._augment = function(a) {
  a.__proto__ = v.prototype;
  return a;
};
function wa$1(a, b, c, d) {
  if (__abx$10a4bb(17) === typeof b) throw new TypeError(__abx$10a4bb(85));
  if (__abx$10a4bb(0) !== typeof ArrayBuffer && b instanceof ArrayBuffer) {
    b.byteLength;
    if (0 > c || b.byteLength < c) throw new RangeError(__abx$10a4bb(86));
    if (b.byteLength < c + (d || 0)) throw new RangeError(__abx$10a4bb(87));
    b = void 0 === c && void 0 === d ? new Uint8Array(b) : void 0 === d ? new Uint8Array(b, c) : new Uint8Array(b, c, d);
    v.TYPED_ARRAY_SUPPORT ? (a = b, a.__proto__ = v.prototype) : a = xa(a, b);
    return a;
  }
  if (__abx$10a4bb(18) === typeof b) {
    d = a;
    a = c;
    if (__abx$10a4bb(18) !== typeof a || __abx$10a4bb(7) === a) a = __abx$10a4bb(23);
    if (!v.isEncoding(a)) throw new TypeError(__abx$10a4bb(88));
    c = ya$1(b, a) | 0;
    d = w$1(d, c);
    b = d.write(b, a);
    b !== c && (d = d.slice(0, b));
    return d;
  }
  return za$1(a, b);
}
v.from = function(a, b, c) {
  return wa$1(null, a, b, c);
};
v.TYPED_ARRAY_SUPPORT && (v.prototype.__proto__ = Uint8Array.prototype, v.__proto__ = Uint8Array);
function Aa$1(a) {
  if (__abx$10a4bb(17) !== typeof a) throw new TypeError(__abx$10a4bb(89));
  if (0 > a) throw new RangeError(__abx$10a4bb(90));
}
v.alloc = function(a, b, c) {
  Aa$1(a);
  a = 0 >= a ? w$1(null, a) : void 0 !== b ? __abx$10a4bb(18) === typeof c ? w$1(null, a).fill(b, c) : w$1(null, a).fill(b) : w$1(null, a);
  return a;
};
function va(a, b) {
  Aa$1(b);
  a = w$1(a, 0 > b ? 0 : Ba$1(b) | 0);
  if (!v.TYPED_ARRAY_SUPPORT) for (var c = 0; c < b; ++c) a[c] = 0;
  return a;
}
v.allocUnsafe = function(a) {
  return va(null, a);
};
v.allocUnsafeSlow = function(a) {
  return va(null, a);
};
function xa(a, b) {
  var c = 0 > b.length ? 0 : Ba$1(b.length) | 0;
  a = w$1(a, c);
  for (var d = 0; d < c; d += 1) a[d] = b[d] & 255;
  return a;
}
function za$1(a, b) {
  if (z$1(b)) {
    var c = Ba$1(b.length) | 0;
    a = w$1(a, c);
    if (0 === a.length) return a;
    b.copy(a, 0, 0, c);
    return a;
  }
  if (b) {
    if (__abx$10a4bb(0) !== typeof ArrayBuffer && b.buffer instanceof ArrayBuffer || __abx$10a4bb(91) in b) return (c = __abx$10a4bb(17) !== typeof b.length) || (c = b.length, c = c !== c), c ? w$1(a, 0) : xa(a, b);
    if (__abx$10a4bb(27) === b.type && sa$1(b.data)) return xa(a, b.data);
  }
  throw new TypeError(__abx$10a4bb(92));
}
function Ba$1(a) {
  if (a >= (v.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823)) throw new RangeError(__abx$10a4bb(28) + (v.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823).toString(16) + __abx$10a4bb(29));
  return a | 0;
}
v.isBuffer = Ca$1;
function z$1(a) {
  return !(null == a || !a._isBuffer);
}
v.compare = function(a, b) {
  if (!z$1(a) || !z$1(b)) throw new TypeError(__abx$10a4bb(93));
  if (a === b) return 0;
  for (var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e) if (a[e] !== b[e]) {
    c = a[e];
    d = b[e];
    break;
  }
  return c < d ? -1 : d < c ? 1 : 0;
};
v.isEncoding = function(a) {
  switch (String(a).toLowerCase()) {
    case __abx$10a4bb(31):
    case __abx$10a4bb(23):
    case __abx$10a4bb(32):
    case __abx$10a4bb(33):
    case __abx$10a4bb(34):
    case __abx$10a4bb(35):
    case __abx$10a4bb(36):
    case __abx$10a4bb(37):
    case __abx$10a4bb(38):
    case __abx$10a4bb(39):
    case __abx$10a4bb(40):
      return true;
    default:
      return false;
  }
};
v.concat = function(a, b) {
  if (!sa$1(a)) throw new TypeError(__abx$10a4bb(41));
  if (0 === a.length) return v.alloc(0);
  var c;
  if (void 0 === b) for (c = b = 0; c < a.length; ++c) b += a[c].length;
  b = v.allocUnsafe(b);
  var d = 0;
  for (c = 0; c < a.length; ++c) {
    var e = a[c];
    if (!z$1(e)) throw new TypeError(__abx$10a4bb(41));
    e.copy(b, d);
    d += e.length;
  }
  return b;
};
function ya$1(a, b) {
  if (z$1(a)) return a.length;
  if (__abx$10a4bb(0) !== typeof ArrayBuffer && __abx$10a4bb(9) === typeof ArrayBuffer.isView && (ArrayBuffer.isView(a) || a instanceof ArrayBuffer)) return a.byteLength;
  __abx$10a4bb(18) !== typeof a && (a = __abx$10a4bb(7) + a);
  var c = a.length;
  if (0 === c) return 0;
  for (var d = false; ; ) switch (b) {
    case __abx$10a4bb(33):
    case __abx$10a4bb(34):
    case __abx$10a4bb(35):
      return c;
    case __abx$10a4bb(23):
    case __abx$10a4bb(32):
    case void 0:
      return Da$1(a).length;
    case __abx$10a4bb(37):
    case __abx$10a4bb(38):
    case __abx$10a4bb(39):
    case __abx$10a4bb(40):
      return 2 * c;
    case __abx$10a4bb(31):
      return c >>> 1;
    case __abx$10a4bb(36):
      return Ea$1(a).length;
    default:
      if (d) return Da$1(a).length;
      b = (__abx$10a4bb(7) + b).toLowerCase();
      d = true;
  }
}
v.byteLength = ya$1;
function Fa$1(a, b, c) {
  var d = false;
  if (void 0 === b || 0 > b) b = 0;
  if (b > this.length) return __abx$10a4bb(7);
  if (void 0 === c || c > this.length) c = this.length;
  if (0 >= c) return __abx$10a4bb(7);
  c >>>= 0;
  b >>>= 0;
  if (c <= b) return __abx$10a4bb(7);
  for (a || (a = __abx$10a4bb(23)); ; ) switch (a) {
    case __abx$10a4bb(31):
      a = b;
      b = c;
      c = this.length;
      if (!a || 0 > a) a = 0;
      if (!b || 0 > b || b > c) b = c;
      d = __abx$10a4bb(7);
      for (c = a; c < b; ++c) a = d, d = this[c], d = 16 > d ? __abx$10a4bb(80) + d.toString(16) : d.toString(16), d = a + d;
      return d;
    case __abx$10a4bb(23):
    case __abx$10a4bb(32):
      return Ga$1(this, b, c);
    case __abx$10a4bb(33):
      a = __abx$10a4bb(7);
      for (c = Math.min(this.length, c); b < c; ++b) a += String.fromCharCode(this[b] & 127);
      return a;
    case __abx$10a4bb(34):
    case __abx$10a4bb(35):
      a = __abx$10a4bb(7);
      for (c = Math.min(this.length, c); b < c; ++b) a += String.fromCharCode(this[b]);
      return a;
    case __abx$10a4bb(36):
      return b = 0 === b && c === this.length ? oa$1(this) : oa$1(this.slice(b, c)), b;
    case __abx$10a4bb(37):
    case __abx$10a4bb(38):
    case __abx$10a4bb(39):
    case __abx$10a4bb(40):
      b = this.slice(b, c);
      c = __abx$10a4bb(7);
      for (a = 0; a < b.length; a += 2) c += String.fromCharCode(b[a] + 256 * b[a + 1]);
      return c;
    default:
      if (d) throw new TypeError(__abx$10a4bb(24) + a);
      a = (a + __abx$10a4bb(7)).toLowerCase();
      d = true;
  }
}
v.prototype._isBuffer = true;
function A$1(a, b, c) {
  var d = a[b];
  a[b] = a[c];
  a[c] = d;
}
v.prototype.swap16 = function() {
  var a = this.length;
  if (0 !== a % 2) throw new RangeError(__abx$10a4bb(43));
  for (var b = 0; b < a; b += 2) A$1(this, b, b + 1);
  return this;
};
v.prototype.swap32 = function() {
  var a = this.length;
  if (0 !== a % 4) throw new RangeError(__abx$10a4bb(44));
  for (var b = 0; b < a; b += 4) A$1(this, b, b + 3), A$1(this, b + 1, b + 2);
  return this;
};
v.prototype.swap64 = function() {
  var a = this.length;
  if (0 !== a % 8) throw new RangeError(__abx$10a4bb(45));
  for (var b = 0; b < a; b += 8) A$1(this, b, b + 7), A$1(this, b + 1, b + 6), A$1(this, b + 2, b + 5), A$1(this, b + 3, b + 4);
  return this;
};
v.prototype.toString = function() {
  var a = this.length | 0;
  return 0 === a ? __abx$10a4bb(7) : 0 === arguments.length ? Ga$1(this, 0, a) : Fa$1.apply(this, arguments);
};
v.prototype.equals = function(a) {
  if (!z$1(a)) throw new TypeError(__abx$10a4bb(46));
  return this === a ? true : 0 === v.compare(this, a);
};
v.prototype.inspect = function() {
  var a = __abx$10a4bb(7);
  0 < this.length && (a = this.toString(__abx$10a4bb(31), 0, 50).match(/.{2}/g).join(__abx$10a4bb(94)), 50 < this.length && (a += __abx$10a4bb(48)));
  return __abx$10a4bb(49) + a + __abx$10a4bb(50);
};
v.prototype.compare = function(a, b, c, d, e) {
  if (!z$1(a)) throw new TypeError(__abx$10a4bb(46));
  void 0 === b && (b = 0);
  void 0 === c && (c = a ? a.length : 0);
  void 0 === d && (d = 0);
  void 0 === e && (e = this.length);
  if (0 > b || c > a.length || 0 > d || e > this.length) throw new RangeError(__abx$10a4bb(52));
  if (d >= e && b >= c) return 0;
  if (d >= e) return -1;
  if (b >= c) return 1;
  b >>>= 0;
  c >>>= 0;
  d >>>= 0;
  e >>>= 0;
  if (this === a) return 0;
  var f = e - d, g = c - b, h = Math.min(f, g);
  d = this.slice(d, e);
  a = a.slice(b, c);
  for (b = 0; b < h; ++b) if (d[b] !== a[b]) {
    f = d[b];
    g = a[b];
    break;
  }
  return f < g ? -1 : g < f ? 1 : 0;
};
function Ha(a, b, c, d, e) {
  if (0 === a.length) return -1;
  __abx$10a4bb(18) === typeof c ? (d = c, c = 0) : 2147483647 < c ? c = 2147483647 : -2147483648 > c && (c = -2147483648);
  c = +c;
  isNaN(c) && (c = e ? 0 : a.length - 1);
  0 > c && (c = a.length + c);
  if (c >= a.length) {
    if (e) return -1;
    c = a.length - 1;
  } else if (0 > c) if (e) c = 0;
  else return -1;
  __abx$10a4bb(18) === typeof b && (b = v.from(b, d));
  if (z$1(b)) return 0 === b.length ? -1 : Ia(a, b, c, d, e);
  if (__abx$10a4bb(17) === typeof b) return b &= 255, v.TYPED_ARRAY_SUPPORT && __abx$10a4bb(9) === typeof Uint8Array.prototype.indexOf ? e ? Uint8Array.prototype.indexOf.call(a, b, c) : Uint8Array.prototype.lastIndexOf.call(a, b, c) : Ia(a, [b], c, d, e);
  throw new TypeError(__abx$10a4bb(53));
}
function Ia(a, b, c, d, e) {
  function f(a2, b2) {
    return 1 === g ? a2[b2] : a2.readUInt16BE(b2 * g);
  }
  var g = 1, h = a.length, l2 = b.length;
  if (void 0 !== d && (d = String(d).toLowerCase(), __abx$10a4bb(37) === d || __abx$10a4bb(38) === d || __abx$10a4bb(39) === d || __abx$10a4bb(40) === d)) {
    if (2 > a.length || 2 > b.length) return -1;
    g = 2;
    h /= 2;
    l2 /= 2;
    c /= 2;
  }
  if (e) for (d = -1; c < h; c++) if (f(a, c) === f(b, -1 === d ? 0 : c - d)) {
    if (-1 === d && (d = c), c - d + 1 === l2) return d * g;
  } else -1 !== d && (c -= c - d), d = -1;
  else for (c + l2 > h && (c = h - l2); 0 <= c; c--) {
    h = true;
    for (d = 0; d < l2; d++) if (f(a, c + d) !== f(b, d)) {
      h = false;
      break;
    }
    if (h) return c;
  }
  return -1;
}
v.prototype.includes = function(a, b, c) {
  return -1 !== this.indexOf(a, b, c);
};
v.prototype.indexOf = function(a, b, c) {
  return Ha(this, a, b, c, true);
};
v.prototype.lastIndexOf = function(a, b, c) {
  return Ha(this, a, b, c, false);
};
v.prototype.write = function(a, b, c, d) {
  if (void 0 === b) d = __abx$10a4bb(23), c = this.length, b = 0;
  else if (void 0 === c && __abx$10a4bb(18) === typeof b) d = b, c = this.length, b = 0;
  else if (isFinite(b)) b |= 0, isFinite(c) ? (c |= 0, void 0 === d && (d = __abx$10a4bb(23))) : (d = c, c = void 0);
  else throw Error(__abx$10a4bb(54));
  var e = this.length - b;
  if (void 0 === c || c > e) c = e;
  if (0 < a.length && (0 > c || 0 > b) || b > this.length) throw new RangeError(__abx$10a4bb(55));
  d || (d = __abx$10a4bb(23));
  for (e = false; ; ) switch (d) {
    case __abx$10a4bb(31):
      a: {
        b = Number(b) || 0;
        d = this.length - b;
        c ? (c = Number(c), c > d && (c = d)) : c = d;
        d = a.length;
        if (0 !== d % 2) throw new TypeError(__abx$10a4bb(95));
        c > d / 2 && (c = d / 2);
        for (d = 0; d < c; ++d) {
          e = parseInt(a.substr(2 * d, 2), 16);
          if (isNaN(e)) {
            a = d;
            break a;
          }
          this[b + d] = e;
        }
        a = d;
      }
      return a;
    case __abx$10a4bb(23):
    case __abx$10a4bb(32):
      return Ja(Da$1(a, this.length - b), this, b, c);
    case __abx$10a4bb(33):
      return Ja(Ka(a), this, b, c);
    case __abx$10a4bb(34):
    case __abx$10a4bb(35):
      return Ja(Ka(a), this, b, c);
    case __abx$10a4bb(36):
      return Ja(Ea$1(a), this, b, c);
    case __abx$10a4bb(37):
    case __abx$10a4bb(38):
    case __abx$10a4bb(39):
    case __abx$10a4bb(40):
      d = a;
      e = this.length - b;
      for (var f = [], g = 0; g < d.length && !(0 > (e -= 2)); ++g) {
        var h = d.charCodeAt(g);
        a = h >> 8;
        h %= 256;
        f.push(h);
        f.push(a);
      }
      return Ja(f, this, b, c);
    default:
      if (e) throw new TypeError(__abx$10a4bb(24) + d);
      d = (__abx$10a4bb(7) + d).toLowerCase();
      e = true;
  }
};
v.prototype.toJSON = function() {
  return { type: __abx$10a4bb(27), data: Array.prototype.slice.call(this._arr || this, 0) };
};
function Ga$1(a, b, c) {
  c = Math.min(a.length, c);
  for (var d = []; b < c; ) {
    var e = a[b], f = null, g = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
    if (b + g <= c) switch (g) {
      case 1:
        128 > e && (f = e);
        break;
      case 2:
        var h = a[b + 1];
        128 === (h & 192) && (e = (e & 31) << 6 | h & 63, 127 < e && (f = e));
        break;
      case 3:
        h = a[b + 1];
        var l2 = a[b + 2];
        128 === (h & 192) && 128 === (l2 & 192) && (e = (e & 15) << 12 | (h & 63) << 6 | l2 & 63, 2047 < e && (55296 > e || 57343 < e) && (f = e));
        break;
      case 4:
        h = a[b + 1];
        l2 = a[b + 2];
        var n = a[b + 3];
        128 === (h & 192) && 128 === (l2 & 192) && 128 === (n & 192) && (e = (e & 15) << 18 | (h & 63) << 12 | (l2 & 63) << 6 | n & 63, 65535 < e && 1114112 > e && (f = e));
    }
    null === f ? (f = 65533, g = 1) : 65535 < f && (f -= 65536, d.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023);
    d.push(f);
    b += g;
  }
  a = d.length;
  if (a <= La) d = String.fromCharCode.apply(String, d);
  else {
    c = __abx$10a4bb(7);
    for (b = 0; b < a; ) c += String.fromCharCode.apply(String, d.slice(b, b += La));
    d = c;
  }
  return d;
}
var La = 4096;
v.prototype.slice = function(a, b) {
  var c = this.length;
  a = ~~a;
  b = void 0 === b ? c : ~~b;
  0 > a ? (a += c, 0 > a && (a = 0)) : a > c && (a = c);
  0 > b ? (b += c, 0 > b && (b = 0)) : b > c && (b = c);
  b < a && (b = a);
  if (v.TYPED_ARRAY_SUPPORT) b = this.subarray(a, b), b.__proto__ = v.prototype;
  else {
    c = b - a;
    b = new v(c, void 0);
    for (var d = 0; d < c; ++d) b[d] = this[d + a];
  }
  return b;
};
function C$1(a, b, c) {
  if (0 !== a % 1 || 0 > a) throw new RangeError(__abx$10a4bb(56));
  if (a + b > c) throw new RangeError(__abx$10a4bb(57));
}
v.prototype.readUIntLE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C$1(a, b, this.length);
  c = this[a];
  for (var d = 1, e = 0; ++e < b && (d *= 256); ) c += this[a + e] * d;
  return c;
};
v.prototype.readUIntBE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C$1(a, b, this.length);
  c = this[a + --b];
  for (var d = 1; 0 < b && (d *= 256); ) c += this[a + --b] * d;
  return c;
};
v.prototype.readUInt8 = function(a, b) {
  b || C$1(a, 1, this.length);
  return this[a];
};
v.prototype.readUInt16LE = function(a, b) {
  b || C$1(a, 2, this.length);
  return this[a] | this[a + 1] << 8;
};
v.prototype.readUInt16BE = function(a, b) {
  b || C$1(a, 2, this.length);
  return this[a] << 8 | this[a + 1];
};
v.prototype.readUInt32LE = function(a, b) {
  b || C$1(a, 4, this.length);
  return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3];
};
v.prototype.readUInt32BE = function(a, b) {
  b || C$1(a, 4, this.length);
  return 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
};
v.prototype.readIntLE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C$1(a, b, this.length);
  c = this[a];
  for (var d = 1, e = 0; ++e < b && (d *= 256); ) c += this[a + e] * d;
  c >= 128 * d && (c -= Math.pow(2, 8 * b));
  return c;
};
v.prototype.readIntBE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C$1(a, b, this.length);
  c = b;
  for (var d = 1, e = this[a + --c]; 0 < c && (d *= 256); ) e += this[a + --c] * d;
  e >= 128 * d && (e -= Math.pow(2, 8 * b));
  return e;
};
v.prototype.readInt8 = function(a, b) {
  b || C$1(a, 1, this.length);
  return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a];
};
v.prototype.readInt16LE = function(a, b) {
  b || C$1(a, 2, this.length);
  a = this[a] | this[a + 1] << 8;
  return a & 32768 ? a | 4294901760 : a;
};
v.prototype.readInt16BE = function(a, b) {
  b || C$1(a, 2, this.length);
  a = this[a + 1] | this[a] << 8;
  return a & 32768 ? a | 4294901760 : a;
};
v.prototype.readInt32LE = function(a, b) {
  b || C$1(a, 4, this.length);
  return this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
};
v.prototype.readInt32BE = function(a, b) {
  b || C$1(a, 4, this.length);
  return this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
};
v.prototype.readFloatLE = function(a, b) {
  b || C$1(a, 4, this.length);
  return pa$1(this, a, true, 23, 4);
};
v.prototype.readFloatBE = function(a, b) {
  b || C$1(a, 4, this.length);
  return pa$1(this, a, false, 23, 4);
};
v.prototype.readDoubleLE = function(a, b) {
  b || C$1(a, 8, this.length);
  return pa$1(this, a, true, 52, 8);
};
v.prototype.readDoubleBE = function(a, b) {
  b || C$1(a, 8, this.length);
  return pa$1(this, a, false, 52, 8);
};
function D(a, b, c, d, e, f) {
  if (!z$1(a)) throw new TypeError(__abx$10a4bb(58));
  if (b > e || b < f) throw new RangeError(__abx$10a4bb(59));
  if (c + d > a.length) throw new RangeError(__abx$10a4bb(60));
}
v.prototype.writeUIntLE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  c |= 0;
  d || D(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
  d = 1;
  var e = 0;
  for (this[b] = a & 255; ++e < c && (d *= 256); ) this[b + e] = a / d & 255;
  return b + c;
};
v.prototype.writeUIntBE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  c |= 0;
  d || D(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
  d = c - 1;
  var e = 1;
  for (this[b + d] = a & 255; 0 <= --d && (e *= 256); ) this[b + d] = a / e & 255;
  return b + c;
};
v.prototype.writeUInt8 = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 1, 255, 0);
  v.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
  this[b] = a & 255;
  return b + 1;
};
function Ma$1(a, b, c, d) {
  0 > b && (b = 65535 + b + 1);
  for (var e = 0, f = Math.min(a.length - c, 2); e < f; ++e) a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e);
}
v.prototype.writeUInt16LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 2, 65535, 0);
  v.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : Ma$1(this, a, b, true);
  return b + 2;
};
v.prototype.writeUInt16BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 2, 65535, 0);
  v.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : Ma$1(this, a, b, false);
  return b + 2;
};
function Na$1(a, b, c, d) {
  0 > b && (b = 4294967295 + b + 1);
  for (var e = 0, f = Math.min(a.length - c, 4); e < f; ++e) a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255;
}
v.prototype.writeUInt32LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 4, 4294967295, 0);
  v.TYPED_ARRAY_SUPPORT ? (this[b + 3] = a >>> 24, this[b + 2] = a >>> 16, this[b + 1] = a >>> 8, this[b] = a & 255) : Na$1(this, a, b, true);
  return b + 4;
};
v.prototype.writeUInt32BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 4, 4294967295, 0);
  v.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : Na$1(this, a, b, false);
  return b + 4;
};
v.prototype.writeIntLE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  d || (d = Math.pow(2, 8 * c - 1), D(this, a, b, c, d - 1, -d));
  d = 0;
  var e = 1, f = 0;
  for (this[b] = a & 255; ++d < c && (e *= 256); ) 0 > a && 0 === f && 0 !== this[b + d - 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
  return b + c;
};
v.prototype.writeIntBE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  d || (d = Math.pow(2, 8 * c - 1), D(this, a, b, c, d - 1, -d));
  d = c - 1;
  var e = 1, f = 0;
  for (this[b + d] = a & 255; 0 <= --d && (e *= 256); ) 0 > a && 0 === f && 0 !== this[b + d + 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
  return b + c;
};
v.prototype.writeInt8 = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 1, 127, -128);
  v.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
  0 > a && (a = 255 + a + 1);
  this[b] = a & 255;
  return b + 1;
};
v.prototype.writeInt16LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 2, 32767, -32768);
  v.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : Ma$1(this, a, b, true);
  return b + 2;
};
v.prototype.writeInt16BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 2, 32767, -32768);
  v.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : Ma$1(this, a, b, false);
  return b + 2;
};
v.prototype.writeInt32LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 4, 2147483647, -2147483648);
  v.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8, this[b + 2] = a >>> 16, this[b + 3] = a >>> 24) : Na$1(this, a, b, true);
  return b + 4;
};
v.prototype.writeInt32BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || D(this, a, b, 4, 2147483647, -2147483648);
  0 > a && (a = 4294967295 + a + 1);
  v.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : Na$1(this, a, b, false);
  return b + 4;
};
function Oa$1(a, b, c, d) {
  if (c + d > a.length) throw new RangeError(__abx$10a4bb(60));
  if (0 > c) throw new RangeError(__abx$10a4bb(60));
}
v.prototype.writeFloatLE = function(a, b, c) {
  c || Oa$1(this, a, b, 4);
  qa$1(this, a, b, true, 23, 4);
  return b + 4;
};
v.prototype.writeFloatBE = function(a, b, c) {
  c || Oa$1(this, a, b, 4);
  qa$1(this, a, b, false, 23, 4);
  return b + 4;
};
v.prototype.writeDoubleLE = function(a, b, c) {
  c || Oa$1(this, a, b, 8);
  qa$1(this, a, b, true, 52, 8);
  return b + 8;
};
v.prototype.writeDoubleBE = function(a, b, c) {
  c || Oa$1(this, a, b, 8);
  qa$1(this, a, b, false, 52, 8);
  return b + 8;
};
v.prototype.copy = function(a, b, c, d) {
  c || (c = 0);
  d || 0 === d || (d = this.length);
  b >= a.length && (b = a.length);
  b || (b = 0);
  0 < d && d < c && (d = c);
  if (d === c || 0 === a.length || 0 === this.length) return 0;
  if (0 > b) throw new RangeError(__abx$10a4bb(62));
  if (0 > c || c >= this.length) throw new RangeError(__abx$10a4bb(96));
  if (0 > d) throw new RangeError(__abx$10a4bb(63));
  d > this.length && (d = this.length);
  a.length - b < d - c && (d = a.length - b + c);
  var e = d - c;
  if (this === a && c < b && b < d) for (d = e - 1; 0 <= d; --d) a[d + b] = this[d + c];
  else if (1e3 > e || !v.TYPED_ARRAY_SUPPORT) for (d = 0; d < e; ++d) a[d + b] = this[d + c];
  else Uint8Array.prototype.set.call(a, this.subarray(c, c + e), b);
  return e;
};
v.prototype.fill = function(a, b, c, d) {
  if (__abx$10a4bb(18) === typeof a) {
    __abx$10a4bb(18) === typeof b ? (d = b, b = 0, c = this.length) : __abx$10a4bb(18) === typeof c && (d = c, c = this.length);
    if (1 === a.length) {
      var e = a.charCodeAt(0);
      256 > e && (a = e);
    }
    if (void 0 !== d && __abx$10a4bb(18) !== typeof d) throw new TypeError(__abx$10a4bb(64));
    if (__abx$10a4bb(18) === typeof d && !v.isEncoding(d)) throw new TypeError(__abx$10a4bb(24) + d);
  } else __abx$10a4bb(17) === typeof a && (a &= 255);
  if (0 > b || this.length < b || this.length < c) throw new RangeError(__abx$10a4bb(66));
  if (c <= b) return this;
  b >>>= 0;
  c = void 0 === c ? this.length : c >>> 0;
  a || (a = 0);
  if (__abx$10a4bb(17) === typeof a) for (d = b; d < c; ++d) this[d] = a;
  else for (a = z$1(a) ? a : Da$1(new v(a, d).toString()), e = a.length, d = 0; d < c - b; ++d) this[d + b] = a[d % e];
  return this;
};
var Pa$1 = /[^+\/0-9A-Za-z-_]/g;
function Da$1(a, b) {
  b = b || Infinity;
  for (var c, d = a.length, e = null, f = [], g = 0; g < d; ++g) {
    c = a.charCodeAt(g);
    if (55295 < c && 57344 > c) {
      if (!e) {
        if (56319 < c) {
          -1 < (b -= 3) && f.push(239, 191, 189);
          continue;
        } else if (g + 1 === d) {
          -1 < (b -= 3) && f.push(239, 191, 189);
          continue;
        }
        e = c;
        continue;
      }
      if (56320 > c) {
        -1 < (b -= 3) && f.push(239, 191, 189);
        e = c;
        continue;
      }
      c = (e - 55296 << 10 | c - 56320) + 65536;
    } else e && -1 < (b -= 3) && f.push(239, 191, 189);
    e = null;
    if (128 > c) {
      if (0 > --b) break;
      f.push(c);
    } else if (2048 > c) {
      if (0 > (b -= 2)) break;
      f.push(c >> 6 | 192, c & 63 | 128);
    } else if (65536 > c) {
      if (0 > (b -= 3)) break;
      f.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128);
    } else if (1114112 > c) {
      if (0 > (b -= 4)) break;
      f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128);
    } else throw Error(__abx$10a4bb(68));
  }
  return f;
}
function Ka(a) {
  for (var b = [], c = 0; c < a.length; ++c) b.push(a.charCodeAt(c) & 255);
  return b;
}
function Ea$1(a) {
  a = (a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, __abx$10a4bb(7))).replace(Pa$1, __abx$10a4bb(7));
  if (2 > a.length) a = __abx$10a4bb(7);
  else for (; 0 !== a.length % 4; ) a += __abx$10a4bb(6);
  la$1 || ma$1();
  var b = a.length;
  if (0 < b % 4) throw Error(__abx$10a4bb(5));
  var c = __abx$10a4bb(6) === a[b - 2] ? 2 : __abx$10a4bb(6) === a[b - 1] ? 1 : 0;
  var d = new ka$1(3 * b / 4 - c);
  var e = 0 < c ? b - 4 : b;
  var f = 0;
  for (b = 0; b < e; b += 4) {
    var g = u$1[a.charCodeAt(b)] << 18 | u$1[a.charCodeAt(b + 1)] << 12 | u$1[a.charCodeAt(b + 2)] << 6 | u$1[a.charCodeAt(b + 3)];
    d[f++] = g >> 16 & 255;
    d[f++] = g >> 8 & 255;
    d[f++] = g & 255;
  }
  2 === c ? (g = u$1[a.charCodeAt(b)] << 2 | u$1[a.charCodeAt(b + 1)] >> 4, d[f++] = g & 255) : 1 === c && (g = u$1[a.charCodeAt(b)] << 10 | u$1[a.charCodeAt(b + 1)] << 4 | u$1[a.charCodeAt(b + 2)] >> 2, d[f++] = g >> 8 & 255, d[f++] = g & 255);
  return d;
}
function Ja(a, b, c, d) {
  for (var e = 0; e < d && !(e + c >= b.length || e >= a.length); ++e) b[e + c] = a[e];
  return e;
}
function Ca$1(a) {
  return null != a && (!!a._isBuffer || Qa$1(a) || __abx$10a4bb(9) === typeof a.readFloatLE && __abx$10a4bb(9) === typeof a.slice && Qa$1(a.slice(0, 0)));
}
function Qa$1(a) {
  return !!a.constructor && __abx$10a4bb(9) === typeof a.constructor.isBuffer && a.constructor.isBuffer(a);
}
var Ra$1 = Object.freeze({ __proto__: null, INSPECT_MAX_BYTES: 50, kMaxLength: ta$1, Buffer: v, SlowBuffer: function(a) {
  +a != a && (a = 0);
  return v.alloc(+a);
}, isBuffer: Ca$1 }), E$1 = v, Sa$1 = __abx$10a4bb(0) !== typeof globalThis ? globalThis : __abx$10a4bb(0) !== typeof window ? window : __abx$10a4bb(0) !== typeof global ? global : __abx$10a4bb(0) !== typeof self ? self : {};
function Ta$1(a, b) {
  return b = { exports: {} }, a(b, b.exports), b.exports;
}
function Ua$1() {
  throw Error(__abx$10a4bb(97));
}
function Va$1() {
  throw Error(__abx$10a4bb(98));
}
var F$1 = Ua$1, G$1 = Va$1;
__abx$10a4bb(9) === typeof ja$1.setTimeout && (F$1 = setTimeout);
__abx$10a4bb(9) === typeof ja$1.clearTimeout && (G$1 = clearTimeout);
function Wa$1(a) {
  if (F$1 === setTimeout) return setTimeout(a, 0);
  if ((F$1 === Ua$1 || !F$1) && setTimeout) return F$1 = setTimeout, setTimeout(a, 0);
  try {
    return F$1(a, 0);
  } catch (b) {
    try {
      return F$1.call(null, a, 0);
    } catch (c) {
      return F$1.call(this, a, 0);
    }
  }
}
function Xa(a) {
  if (G$1 === clearTimeout) return clearTimeout(a);
  if ((G$1 === Va$1 || !G$1) && clearTimeout) return G$1 = clearTimeout, clearTimeout(a);
  try {
    return G$1(a);
  } catch (b) {
    try {
      return G$1.call(null, a);
    } catch (c) {
      return G$1.call(this, a);
    }
  }
}
var H$1 = [], I$1 = false, J$1, Ya = -1;
function Za() {
  I$1 && J$1 && (I$1 = false, J$1.length ? H$1 = J$1.concat(H$1) : Ya = -1, H$1.length && $a());
}
function $a() {
  if (!I$1) {
    var a = Wa$1(Za);
    I$1 = true;
    for (var b = H$1.length; b; ) {
      J$1 = H$1;
      for (H$1 = []; ++Ya < b; ) J$1 && J$1[Ya].run();
      Ya = -1;
      b = H$1.length;
    }
    J$1 = null;
    I$1 = false;
    Xa(a);
  }
}
function ab$1(a) {
  var b = Array(arguments.length - 1);
  if (1 < arguments.length) for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
  H$1.push(new bb$1(a, b));
  1 !== H$1.length || I$1 || Wa$1($a);
}
function bb$1(a, b) {
  this.fun = a;
  this.array = b;
}
bb$1.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function K$1() {
}
var L$1 = ja$1.performance || {}, cb$1 = L$1.now || L$1.mozNow || L$1.msNow || L$1.oNow || L$1.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
}, db$1 = /* @__PURE__ */ new Date(), eb$1 = { nextTick: ab$1, title: __abx$10a4bb(70), browser: true, env: {}, argv: [], version: __abx$10a4bb(7), versions: {}, on: K$1, addListener: K$1, once: K$1, off: K$1, removeListener: K$1, removeAllListeners: K$1, emit: K$1, binding: function() {
  throw Error(__abx$10a4bb(99));
}, cwd: function() {
  return __abx$10a4bb(71);
}, chdir: function() {
  throw Error(__abx$10a4bb(100));
}, umask: function() {
  return 0;
}, hrtime: function(a) {
  var b = 1e-3 * cb$1.call(L$1), c = Math.floor(b);
  b = Math.floor(b % 1 * 1e9);
  a && (c -= a[0], b -= a[1], 0 > b && (c--, b += 1e9));
  return [c, b];
}, platform: __abx$10a4bb(70), release: {}, config: {}, uptime: function() {
  return (/* @__PURE__ */ new Date() - db$1) / 1e3;
} }, fb$1 = Ta$1(function(a, b) {
  function c(a2, b2) {
    for (var c2 in a2) b2[c2] = a2[c2];
  }
  function d(a2, b2, c2) {
    return e(a2, b2, c2);
  }
  var e = Ra$1.Buffer;
  e.from && e.alloc && e.allocUnsafe && e.allocUnsafeSlow ? a.exports = Ra$1 : (c(Ra$1, b), b.Buffer = d);
  d.prototype = Object.create(e.prototype);
  c(e, d);
  d.from = function(a2, b2, c2) {
    if (__abx$10a4bb(17) === typeof a2) throw new TypeError(__abx$10a4bb(101));
    return e(a2, b2, c2);
  };
  d.alloc = function(a2, b2, c2) {
    if (__abx$10a4bb(17) !== typeof a2) throw new TypeError(__abx$10a4bb(102));
    a2 = e(a2);
    void 0 !== b2 ? __abx$10a4bb(18) === typeof c2 ? a2.fill(b2, c2) : a2.fill(b2) : a2.fill(0);
    return a2;
  };
  d.allocUnsafe = function(a2) {
    if (__abx$10a4bb(17) !== typeof a2) throw new TypeError(__abx$10a4bb(102));
    return e(a2);
  };
  d.allocUnsafeSlow = function(a2) {
    if (__abx$10a4bb(17) !== typeof a2) throw new TypeError(__abx$10a4bb(102));
    return Ra$1.SlowBuffer(a2);
  };
}), gb$1 = Ta$1(function(a, b) {
  function c() {
    throw Error(__abx$10a4bb(103));
  }
  function d(a2, b2) {
    if (__abx$10a4bb(17) !== typeof a2 || a2 !== a2) throw new TypeError(__abx$10a4bb(104));
    if (a2 > p || 0 > a2) throw new TypeError(__abx$10a4bb(105));
    if (a2 > n || a2 > b2) throw new RangeError(__abx$10a4bb(106));
  }
  function e(a2, b2, c2) {
    if (__abx$10a4bb(17) !== typeof a2 || a2 !== a2) throw new TypeError(__abx$10a4bb(107));
    if (a2 > p || 0 > a2) throw new TypeError(__abx$10a4bb(108));
    if (a2 + b2 > c2 || a2 > n) throw new RangeError(__abx$10a4bb(109));
  }
  function f(a2, b2, c2, f2) {
    if (!(l2.isBuffer(a2) || a2 instanceof Sa$1.Uint8Array)) throw new TypeError(__abx$10a4bb(110));
    if (__abx$10a4bb(9) === typeof b2) f2 = b2, b2 = 0, c2 = a2.length;
    else if (__abx$10a4bb(9) === typeof c2) f2 = c2, c2 = a2.length - b2;
    else if (__abx$10a4bb(9) !== typeof f2) throw new TypeError(__abx$10a4bb(111));
    d(b2, a2.length);
    e(c2, b2, a2.length);
    return g(a2, b2, c2, f2);
  }
  function g(a2, b2, c2, d2) {
    b2 = new Uint8Array(a2.buffer, b2, c2);
    r.getRandomValues(b2);
    if (d2) ab$1(function() {
      d2(null, a2);
    });
    else return a2;
  }
  function h(a2, b2, c2) {
    __abx$10a4bb(0) === typeof b2 && (b2 = 0);
    if (!(l2.isBuffer(a2) || a2 instanceof Sa$1.Uint8Array)) throw new TypeError(__abx$10a4bb(110));
    d(b2, a2.length);
    void 0 === c2 && (c2 = a2.length - b2);
    e(c2, b2, a2.length);
    return g(a2, b2, c2);
  }
  var l2 = fb$1.Buffer, n = fb$1.kMaxLength, r = Sa$1.crypto || Sa$1.msCrypto, p = Math.pow(2, 32) - 1;
  r && r.getRandomValues ? (b.randomFill = f, b.randomFillSync = h) : (b.randomFill = c, b.randomFillSync = c);
}), hb$1 = Ta$1(function(a) {
  a.exports = gb$1;
}).randomFillSync, ib$1 = Math.floor(1e-3 * (Date.now() - performance.now()));
function M(a) {
  if (__abx$10a4bb(18) !== typeof a) throw new TypeError(__abx$10a4bb(112) + JSON.stringify(a));
}
function jb$1(a, b) {
  for (var c = __abx$10a4bb(7), d = 0, e = -1, f = 0, g, h = 0; h <= a.length; ++h) {
    if (h < a.length) g = a.charCodeAt(h);
    else if (47 === g) break;
    else g = 47;
    if (47 === g) {
      if (e !== h - 1 && 1 !== f) if (e !== h - 1 && 2 === f) {
        if (2 > c.length || 2 !== d || 46 !== c.charCodeAt(c.length - 1) || 46 !== c.charCodeAt(c.length - 2)) {
          if (2 < c.length) {
            if (e = c.lastIndexOf(__abx$10a4bb(71)), e !== c.length - 1) {
              -1 === e ? (c = __abx$10a4bb(7), d = 0) : (c = c.slice(0, e), d = c.length - 1 - c.lastIndexOf(__abx$10a4bb(71)));
              e = h;
              f = 0;
              continue;
            }
          } else if (2 === c.length || 1 === c.length) {
            c = __abx$10a4bb(7);
            d = 0;
            e = h;
            f = 0;
            continue;
          }
        }
        b && (c = 0 < c.length ? c + __abx$10a4bb(113) : __abx$10a4bb(114), d = 2);
      } else c = 0 < c.length ? c + (__abx$10a4bb(71) + a.slice(e + 1, h)) : a.slice(e + 1, h), d = h - e - 1;
      e = h;
      f = 0;
    } else 46 === g && -1 !== f ? ++f : f = -1;
  }
  return c;
}
var kb$1 = {
  resolve: function() {
    for (var a = __abx$10a4bb(7), b = false, c, d = arguments.length - 1; -1 <= d && !b; d--) {
      if (0 <= d) var e = arguments[d];
      else void 0 === c && (c = eb$1.cwd()), e = c;
      M(e);
      0 !== e.length && (a = e + __abx$10a4bb(71) + a, b = 47 === e.charCodeAt(0));
    }
    a = jb$1(a, !b);
    return b ? 0 < a.length ? __abx$10a4bb(71) + a : __abx$10a4bb(71) : 0 < a.length ? a : __abx$10a4bb(115);
  },
  normalize: function(a) {
    M(a);
    if (0 === a.length) return __abx$10a4bb(115);
    var b = 47 === a.charCodeAt(0), c = 47 === a.charCodeAt(a.length - 1);
    a = jb$1(a, !b);
    0 !== a.length || b || (a = __abx$10a4bb(115));
    0 < a.length && c && (a += __abx$10a4bb(71));
    return b ? __abx$10a4bb(71) + a : a;
  },
  isAbsolute: function(a) {
    M(a);
    return 0 < a.length && 47 === a.charCodeAt(0);
  },
  join: function() {
    if (0 === arguments.length) return __abx$10a4bb(115);
    for (var a, b = 0; b < arguments.length; ++b) {
      var c = arguments[b];
      M(c);
      0 < c.length && (a = void 0 === a ? c : a + (__abx$10a4bb(71) + c));
    }
    return void 0 === a ? __abx$10a4bb(115) : kb$1.normalize(a);
  },
  relative: function(a, b) {
    M(a);
    M(b);
    if (a === b) return __abx$10a4bb(7);
    a = kb$1.resolve(a);
    b = kb$1.resolve(b);
    if (a === b) return __abx$10a4bb(7);
    for (var c = 1; c < a.length && 47 === a.charCodeAt(c); ++c) ;
    for (var d = a.length, e = d - c, f = 1; f < b.length && 47 === b.charCodeAt(f); ++f) ;
    for (var g = b.length - f, h = e < g ? e : g, l2 = -1, n = 0; n <= h; ++n) {
      if (n === h) {
        if (g > h) {
          if (47 === b.charCodeAt(f + n)) return b.slice(f + n + 1);
          if (0 === n) return b.slice(f + n);
        } else e > h && (47 === a.charCodeAt(c + n) ? l2 = n : 0 === n && (l2 = 0));
        break;
      }
      var r = a.charCodeAt(c + n), p = b.charCodeAt(f + n);
      if (r !== p) break;
      else 47 === r && (l2 = n);
    }
    e = __abx$10a4bb(7);
    for (n = c + l2 + 1; n <= d; ++n) if (n === d || 47 === a.charCodeAt(n)) e = 0 === e.length ? e + __abx$10a4bb(114) : e + __abx$10a4bb(113);
    if (0 < e.length) return e + b.slice(f + l2);
    f += l2;
    47 === b.charCodeAt(f) && ++f;
    return b.slice(f);
  },
  _makeLong: function(a) {
    return a;
  },
  dirname: function(a) {
    M(a);
    if (0 === a.length) return __abx$10a4bb(115);
    for (var b = a.charCodeAt(0), c = 47 === b, d = -1, e = true, f = a.length - 1; 1 <= f; --f) if (b = a.charCodeAt(f), 47 === b) {
      if (!e) {
        d = f;
        break;
      }
    } else e = false;
    return -1 === d ? c ? __abx$10a4bb(71) : __abx$10a4bb(115) : c && 1 === d ? __abx$10a4bb(116) : a.slice(0, d);
  },
  basename: function(a, b) {
    if (void 0 !== b && __abx$10a4bb(18) !== typeof b) throw new TypeError(__abx$10a4bb(117));
    M(a);
    var c = 0, d = -1, e = true, f;
    if (void 0 !== b && 0 < b.length && b.length <= a.length) {
      if (b.length === a.length && b === a) return __abx$10a4bb(7);
      var g = b.length - 1, h = -1;
      for (f = a.length - 1; 0 <= f; --f) {
        var l2 = a.charCodeAt(f);
        if (47 === l2) {
          if (!e) {
            c = f + 1;
            break;
          }
        } else -1 === h && (e = false, h = f + 1), 0 <= g && (l2 === b.charCodeAt(g) ? -1 === --g && (d = f) : (g = -1, d = h));
      }
      c === d ? d = h : -1 === d && (d = a.length);
      return a.slice(c, d);
    }
    for (f = a.length - 1; 0 <= f; --f) if (47 === a.charCodeAt(f)) {
      if (!e) {
        c = f + 1;
        break;
      }
    } else -1 === d && (e = false, d = f + 1);
    return -1 === d ? __abx$10a4bb(7) : a.slice(c, d);
  },
  extname: function(a) {
    M(a);
    for (var b = -1, c = 0, d = -1, e = true, f = 0, g = a.length - 1; 0 <= g; --g) {
      var h = a.charCodeAt(g);
      if (47 === h) {
        if (!e) {
          c = g + 1;
          break;
        }
      } else -1 === d && (e = false, d = g + 1), 46 === h ? -1 === b ? b = g : 1 !== f && (f = 1) : -1 !== b && (f = -1);
    }
    return -1 === b || -1 === d || 0 === f || 1 === f && b === d - 1 && b === c + 1 ? __abx$10a4bb(7) : a.slice(b, d);
  },
  format: function(a) {
    if (null === a || __abx$10a4bb(118) !== typeof a) throw new TypeError(__abx$10a4bb(119) + typeof a);
    var b = a.dir || a.root, c = a.base || (a.name || __abx$10a4bb(7)) + (a.ext || __abx$10a4bb(7));
    a = b ? b === a.root ? b + c : b + __abx$10a4bb(71) + c : c;
    return a;
  },
  parse: function(a) {
    M(a);
    var b = { root: __abx$10a4bb(7), dir: __abx$10a4bb(7), base: __abx$10a4bb(7), ext: __abx$10a4bb(7), name: __abx$10a4bb(7) };
    if (0 === a.length) return b;
    var c = a.charCodeAt(0), d = 47 === c;
    if (d) {
      b.root = __abx$10a4bb(71);
      var e = 1;
    } else e = 0;
    for (var f = -1, g = 0, h = -1, l2 = true, n = a.length - 1, r = 0; n >= e; --n) if (c = a.charCodeAt(n), 47 === c) {
      if (!l2) {
        g = n + 1;
        break;
      }
    } else -1 === h && (l2 = false, h = n + 1), 46 === c ? -1 === f ? f = n : 1 !== r && (r = 1) : -1 !== f && (r = -1);
    -1 === f || -1 === h || 0 === r || 1 === r && f === h - 1 && f === g + 1 ? -1 !== h && (b.base = 0 === g && d ? b.name = a.slice(1, h) : b.name = a.slice(g, h)) : (0 === g && d ? (b.name = a.slice(1, f), b.base = a.slice(1, h)) : (b.name = a.slice(g, f), b.base = a.slice(g, h)), b.ext = a.slice(f, h));
    0 < g ? b.dir = a.slice(0, g - 1) : d && (b.dir = __abx$10a4bb(71));
    return b;
  },
  sep: __abx$10a4bb(71),
  delimiter: __abx$10a4bb(120),
  win32: null,
  posix: null
}, lb = kb$1.posix = kb$1, mb = Object.freeze({ __proto__: null, [__abx$10a4bb(1)]: lb, __moduleExports: lb }), pb$1 = { hrtime: /* @__PURE__ */ (function(a) {
  return function(b) {
    b = a(b);
    return 1e9 * b[0] + b[1];
  };
})(function(a) {
  var b = 1e-3 * performance.now(), c = Math.floor(b) + ib$1;
  b = Math.floor(b % 1 * 1e9);
  a && (c -= a[0], b -= a[1], 0 > b && (c--, b += 1e9));
  return [c, b];
}), exit: function(a) {
  throw new nb(a);
}, kill: function(a) {
  throw new ob(a);
}, randomFillSync: hb$1, isTTY: function() {
  return true;
}, path: mb, fs: null }, N, O$1 = k(1), P$1 = k(2), Q$1 = k(4), R = k(8), S = k(16), qb = k(32), T = k(64), V$1 = k(128), sb$1 = k(256), tb$1 = k(512), ub$1 = k(1024), vb$1 = k(2048), wb$1 = k(4096), xb$1 = k(8192), yb$1 = k(16384), zb$1 = k(32768), Ab$1 = k(65536), Bb$1 = k(131072), Cb$1 = k(262144), Db$1 = k(524288), Eb$1 = k(1048576), W$1 = k(2097152), Ib$1 = k(4194304), Jb$1 = k(8388608), Kb$1 = k(16777216), Lb$1 = k(33554432), Mb$1 = k(67108864), X$1 = k(134217728), Nb$1 = k(268435456), Ob$1 = O$1 | P$1 | Q$1 | R | S | qb | T | V$1 | sb$1 | tb$1 | ub$1 | vb$1 | wb$1 | xb$1 | yb$1 | zb$1 | Ab$1 | Bb$1 | Cb$1 | Db$1 | Eb$1 | W$1 | Jb$1 | Ib$1 | Kb$1 | Mb$1 | Lb$1 | X$1 | Nb$1, Pb$1 = O$1 | P$1 | Q$1 | R | S | qb | T | V$1 | sb$1 | W$1 | Ib$1 | Jb$1 | X$1, Qb$1 = k(0), Rb$1 = R | S | V$1 | tb$1 | ub$1 | vb$1 | wb$1 | xb$1 | yb$1 | zb$1 | Ab$1 | Bb$1 | Cb$1 | Db$1 | Eb$1 | W$1 | Jb$1 | Kb$1 | Mb$1 | Lb$1 | X$1, Sb$1 = Rb$1 | Pb$1, Tb$1 = P$1 | R | T | W$1 | X$1 | Nb$1, Ub$1 = P$1 | R | T | W$1 | X$1, Vb$1 = k(0), Wb = {
  E2BIG: 1,
  EACCES: 2,
  EADDRINUSE: 3,
  EADDRNOTAVAIL: 4,
  EAFNOSUPPORT: 5,
  EALREADY: 7,
  EAGAIN: 6,
  EBADF: 8,
  EBADMSG: 9,
  EBUSY: 10,
  ECANCELED: 11,
  ECHILD: 12,
  ECONNABORTED: 13,
  ECONNREFUSED: 14,
  ECONNRESET: 15,
  EDEADLOCK: 16,
  EDESTADDRREQ: 17,
  EDOM: 18,
  EDQUOT: 19,
  EEXIST: 20,
  EFAULT: 21,
  EFBIG: 22,
  EHOSTDOWN: 23,
  EHOSTUNREACH: 23,
  EIDRM: 24,
  EILSEQ: 25,
  EINPROGRESS: 26,
  EINTR: 27,
  EINVAL: 28,
  EIO: 29,
  EISCONN: 30,
  EISDIR: 31,
  ELOOP: 32,
  EMFILE: 33,
  EMLINK: 34,
  EMSGSIZE: 35,
  EMULTIHOP: 36,
  ENAMETOOLONG: 37,
  ENETDOWN: 38,
  ENETRESET: 39,
  ENETUNREACH: 40,
  ENFILE: 41,
  ENOBUFS: 42,
  ENODEV: 43,
  ENOENT: 44,
  ENOEXEC: 45,
  ENOLCK: 46,
  ENOLINK: 47,
  ENOMEM: 48,
  ENOMSG: 49,
  ENOPROTOOPT: 50,
  ENOSPC: 51,
  ENOSYS: 52,
  ENOTCONN: 53,
  ENOTDIR: 54,
  ENOTEMPTY: 55,
  ENOTRECOVERABLE: 56,
  ENOTSOCK: 57,
  ENOTTY: 59,
  ENXIO: 60,
  EOVERFLOW: 61,
  EOWNERDEAD: 62,
  EPERM: 63,
  EPIPE: 64,
  EPROTO: 65,
  EPROTONOSUPPORT: 66,
  EPROTOTYPE: 67,
  ERANGE: 68,
  EROFS: 69,
  ESPIPE: 70,
  ESRCH: 71,
  ESTALE: 72,
  ETIMEDOUT: 73,
  ETXTBSY: 74,
  EXDEV: 75
}, Xb = (N = {}, N[6] = __abx$10a4bb(121), N[8] = __abx$10a4bb(122), N[11] = __abx$10a4bb(123), N[7] = __abx$10a4bb(124), N[15] = __abx$10a4bb(125), N[0] = __abx$10a4bb(126), N[2] = __abx$10a4bb(127), N[5] = __abx$10a4bb(128), N[9] = __abx$10a4bb(129), N[20] = __abx$10a4bb(130), N[12] = __abx$10a4bb(131), N[21] = __abx$10a4bb(132), N[10] = __abx$10a4bb(133), N[1] = __abx$10a4bb(134), N[14] = __abx$10a4bb(135), N[3] = __abx$10a4bb(136), N[4] = __abx$10a4bb(137), N[13] = __abx$10a4bb(138), N[16] = __abx$10a4bb(139), N[17] = __abx$10a4bb(140), N[18] = __abx$10a4bb(141), N[19] = __abx$10a4bb(142), N[23] = __abx$10a4bb(143), N[24] = __abx$10a4bb(144), N[22] = __abx$10a4bb(145), N), Yb = O$1 | P$1 | S | V$1 | W$1 | X$1, Zb$1 = O$1 | T | S | V$1 | W$1 | X$1;
function Y$1(a) {
  var b = Math.trunc(a);
  a = k(Math.round(1e6 * (a - b)));
  return k(b) * k(1e6) + a;
}
function $b(a) {
  __abx$10a4bb(17) === typeof a && (a = Math.trunc(a));
  a = k(a);
  return Number(a / k(1e6));
}
function Z$1(a) {
  return function() {
    for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
    try {
      return a.apply(void 0, fa(b));
    } catch (d) {
      if (d && d.code && __abx$10a4bb(18) === typeof d.code) return Wb[d.code] || 28;
      if (d instanceof ac$1) return d.errno;
      throw d;
    }
  };
}
function bc$1(a, b) {
  var c = a.FD_MAP.get(b);
  if (!c) throw new ac$1(8);
  if (void 0 === c.filetype) {
    var d = a.bindings.fs.fstatSync(c.real);
    a = cc$1(a, b, d);
    b = a.rightsBase;
    d = a.rightsInheriting;
    c.filetype = a.filetype;
    c.rights || (c.rights = { base: b, inheriting: d });
  }
  return c;
}
function cc$1(a, b, c) {
  switch (true) {
    case c.isBlockDevice():
      return { filetype: 1, rightsBase: Ob$1, rightsInheriting: Ob$1 };
    case c.isCharacterDevice():
      return void 0 !== b && a.bindings.isTTY(b) ? { filetype: 2, rightsBase: Ub$1, rightsInheriting: Vb$1 } : { filetype: 2, rightsBase: Ob$1, rightsInheriting: Ob$1 };
    case c.isDirectory():
      return { filetype: 3, rightsBase: Rb$1, rightsInheriting: Sb$1 };
    case c.isFIFO():
      return { filetype: 6, rightsBase: Tb$1, rightsInheriting: Ob$1 };
    case c.isFile():
      return { filetype: 4, rightsBase: Pb$1, rightsInheriting: Qb$1 };
    case c.isSocket():
      return {
        filetype: 6,
        rightsBase: Tb$1,
        rightsInheriting: Ob$1
      };
    case c.isSymbolicLink():
      return { filetype: 7, rightsBase: k(0), rightsInheriting: k(0) };
    default:
      return { filetype: 0, rightsBase: k(0), rightsInheriting: k(0) };
  }
}
var ac$1 = (function(a) {
  function b(c) {
    var d = a.call(this) || this;
    d.errno = c;
    Object.setPrototypeOf(d, b.prototype);
    return d;
  }
  ba$1(b, a);
  return b;
})(Error), nb = (function(a) {
  function b(c) {
    var d = a.call(this, __abx$10a4bb(146) + c) || this;
    d.code = c;
    Object.setPrototypeOf(d, b.prototype);
    return d;
  }
  ba$1(b, a);
  return b;
})(Error), ob = (function(a) {
  function b(c) {
    var d = a.call(this, __abx$10a4bb(147) + c) || this;
    d.signal = c;
    Object.setPrototypeOf(d, b.prototype);
    return d;
  }
  ba$1(b, a);
  return b;
})(Error), dc$1 = (function() {
  function a(a2) {
    function b(a3) {
      switch (a3) {
        case 1:
          return r.hrtime();
        case 0:
          return Y$1(Date.now());
        case 2:
        case 3:
          return r.hrtime() - ec2;
        default:
          return null;
      }
    }
    function d(a3, b2) {
      a3 = bc$1(g, a3);
      if (b2 !== k(0) && (a3.rights.base & b2) === k(0)) throw new ac$1(63);
      return a3;
    }
    function e(a3, b2) {
      g.refreshMemory();
      return Array.from({ length: b2 }, function(b3, c) {
        c = a3 + 8 * c;
        b3 = g.view.getUint32(c, true);
        c = g.view.getUint32(c + 4, true);
        return new Uint8Array(g.memory.buffer, b3, c);
      });
    }
    var f, g = this, h = {};
    a2 && a2.preopens ? h = a2.preopens : a2 && a2.preopenDirectories && (h = a2.preopenDirectories);
    var l2 = {};
    a2 && a2.env && (l2 = a2.env);
    var n = [];
    a2 && a2.args && (n = a2.args);
    var r = pb$1;
    a2 && a2.bindings && (r = a2.bindings);
    this.view = this.memory = void 0;
    this.bindings = r;
    this.FD_MAP = /* @__PURE__ */ new Map([[0, { real: 0, filetype: 2, rights: { base: Yb, inheriting: k(0) }, path: void 0 }], [1, { real: 1, filetype: 2, rights: { base: Zb$1, inheriting: k(0) }, path: void 0 }], [2, { real: 2, filetype: 2, rights: { base: Zb$1, inheriting: k(0) }, path: void 0 }]]);
    var p = this.bindings.fs, y2 = this.bindings.path;
    try {
      for (var ua = ca$1(Object.entries(h)), ea2 = ua.next(); !ea2.done; ea2 = ua.next()) {
        var rb2 = da$1(ea2.value, 2), fc2 = rb2[0], Fb2 = rb2[1], gc2 = p.openSync(Fb2, p.constants.O_RDONLY), hc2 = fa(this.FD_MAP.keys()).reverse()[0] + 1;
        this.FD_MAP.set(hc2, { real: gc2, filetype: 3, rights: { base: Rb$1, inheriting: Sb$1 }, fakePath: fc2, path: Fb2 });
      }
    } catch (t2) {
      var Gb2 = { error: t2 };
    } finally {
      try {
        ea2 && !ea2.done && (f = ua.return) && f.call(ua);
      } finally {
        if (Gb2) throw Gb2.error;
      }
    }
    var ec2 = r.hrtime();
    this.wasiImport = {
      args_get: function(a3, b2) {
        g.refreshMemory();
        var c = a3, d2 = b2;
        n.forEach(function(a4) {
          g.view.setUint32(c, d2, true);
          c += 4;
          d2 += E$1.from(g.memory.buffer).write(a4 + __abx$10a4bb(148), d2);
        });
        return 0;
      },
      args_sizes_get: function(a3, b2) {
        g.refreshMemory();
        g.view.setUint32(
          a3,
          n.length,
          true
        );
        a3 = n.reduce(function(a4, b3) {
          return a4 + E$1.byteLength(b3) + 1;
        }, 0);
        g.view.setUint32(b2, a3, true);
        return 0;
      },
      environ_get: function(a3, b2) {
        g.refreshMemory();
        var c = a3, d2 = b2;
        Object.entries(l2).forEach(function(a4) {
          var b3 = da$1(a4, 2);
          a4 = b3[0];
          b3 = b3[1];
          g.view.setUint32(c, d2, true);
          c += 4;
          d2 += E$1.from(g.memory.buffer).write(a4 + __abx$10a4bb(6) + b3 + __abx$10a4bb(148), d2);
        });
        return 0;
      },
      environ_sizes_get: function(a3, b2) {
        g.refreshMemory();
        var c = Object.entries(l2).map(function(a4) {
          a4 = da$1(a4, 2);
          return a4[0] + __abx$10a4bb(6) + a4[1] + __abx$10a4bb(148);
        }), d2 = c.reduce(function(a4, b3) {
          return a4 + E$1.byteLength(b3);
        }, 0);
        g.view.setUint32(a3, c.length, true);
        g.view.setUint32(b2, d2, true);
        return 0;
      },
      clock_res_get: function(a3, b2) {
        switch (a3) {
          case 1:
          case 2:
          case 3:
            var c = k(1);
            break;
          case 0:
            c = k(1e3);
        }
        g.view.setBigUint64(b2, c);
        return 0;
      },
      clock_time_get: function(a3, c, d2) {
        g.refreshMemory();
        a3 = b(a3);
        if (null === a3) return 28;
        g.view.setBigUint64(d2, k(a3), true);
        return 0;
      },
      fd_advise: Z$1(function(a3) {
        d(a3, V$1);
        return 52;
      }),
      fd_allocate: Z$1(function(a3) {
        d(a3, sb$1);
        return 52;
      }),
      fd_close: Z$1(function(a3) {
        var b2 = d(a3, k(0));
        p.closeSync(b2.real);
        g.FD_MAP.delete(a3);
        return 0;
      }),
      fd_datasync: Z$1(function(a3) {
        a3 = d(a3, O$1);
        p.fdatasyncSync(a3.real);
        return 0;
      }),
      fd_fdstat_get: Z$1(function(a3, b2) {
        a3 = d(a3, k(0));
        g.refreshMemory();
        g.view.setUint8(b2, a3.filetype);
        g.view.setUint16(b2 + 2, 0, true);
        g.view.setUint16(b2 + 4, 0, true);
        g.view.setBigUint64(b2 + 8, k(a3.rights.base), true);
        g.view.setBigUint64(b2 + 8 + 8, k(a3.rights.inheriting), true);
        return 0;
      }),
      fd_fdstat_set_flags: Z$1(function(a3) {
        d(a3, R);
        return 52;
      }),
      fd_fdstat_set_rights: Z$1(function(a3, b2, c) {
        a3 = d(a3, k(0));
        if ((a3.rights.base | b2) > a3.rights.base || (a3.rights.inheriting | c) > a3.rights.inheriting) return 63;
        a3.rights.base = b2;
        a3.rights.inheriting = c;
        return 0;
      }),
      fd_filestat_get: Z$1(function(a3, b2) {
        a3 = d(a3, W$1);
        var c = p.fstatSync(a3.real);
        g.refreshMemory();
        g.view.setBigUint64(b2, k(c.dev), true);
        b2 += 8;
        g.view.setBigUint64(b2, k(c.ino), true);
        b2 += 8;
        g.view.setUint8(b2, a3.filetype);
        b2 += 8;
        g.view.setBigUint64(b2, k(c.nlink), true);
        b2 += 8;
        g.view.setBigUint64(b2, k(c.size), true);
        b2 += 8;
        g.view.setBigUint64(b2, Y$1(c.atimeMs), true);
        b2 += 8;
        g.view.setBigUint64(b2, Y$1(c.mtimeMs), true);
        g.view.setBigUint64(b2 + 8, Y$1(c.ctimeMs), true);
        return 0;
      }),
      fd_filestat_set_size: Z$1(function(a3, b2) {
        a3 = d(a3, Ib$1);
        p.ftruncateSync(
          a3.real,
          Number(b2)
        );
        return 0;
      }),
      fd_filestat_set_times: Z$1(function(a3, c, e2, g2) {
        a3 = d(a3, Jb$1);
        var f2 = p.fstatSync(a3.real), t2 = f2.atime;
        f2 = f2.mtime;
        var q = $b(b(0));
        if (3 === (g2 & 3) || 12 === (g2 & 12)) return 28;
        1 === (g2 & 1) ? t2 = $b(c) : 2 === (g2 & 2) && (t2 = q);
        4 === (g2 & 4) ? f2 = $b(e2) : 8 === (g2 & 8) && (f2 = q);
        p.futimesSync(a3.real, new Date(t2), new Date(f2));
        return 0;
      }),
      fd_prestat_get: Z$1(function(a3, b2) {
        a3 = d(a3, k(0));
        if (!a3.path) return 28;
        g.refreshMemory();
        g.view.setUint8(b2, 0);
        g.view.setUint32(b2 + 4, E$1.byteLength(a3.fakePath), true);
        return 0;
      }),
      fd_prestat_dir_name: Z$1(function(a3, b2, c) {
        a3 = d(a3, k(0));
        if (!a3.path) return 28;
        g.refreshMemory();
        E$1.from(g.memory.buffer).write(a3.fakePath, b2, c, __abx$10a4bb(23));
        return 0;
      }),
      fd_pwrite: Z$1(function(a3, b2, c, f2, h2) {
        var t2 = d(a3, T | Q$1), q = 0;
        e(b2, c).forEach(function(a4) {
          for (var b3 = 0; b3 < a4.byteLength; ) b3 += p.writeSync(t2.real, a4, b3, a4.byteLength - b3, Number(f2) + q + b3);
          q += b3;
        });
        g.view.setUint32(h2, q, true);
        return 0;
      }),
      fd_write: Z$1(function(a3, b2, c, f2) {
        var t2 = d(a3, T), q = 0;
        e(b2, c).forEach(function(a4) {
          for (var b3 = 0; b3 < a4.byteLength; ) {
            var c2 = p.writeSync(t2.real, a4, b3, a4.byteLength - b3, t2.offset ? Number(t2.offset) : null);
            t2.offset && (t2.offset += k(c2));
            b3 += c2;
          }
          q += b3;
        });
        g.view.setUint32(f2, q, true);
        return 0;
      }),
      fd_pread: Z$1(function(a3, b2, c, f2, h2) {
        var t2;
        a3 = d(a3, P$1 | Q$1);
        var q = 0;
        try {
          var x2 = ca$1(e(b2, c)), l3 = x2.next();
          a: for (; !l3.done; l3 = x2.next()) {
            var n2 = l3.value;
            for (b2 = 0; b2 < n2.byteLength; ) {
              var ic2 = n2.byteLength - b2, B = p.readSync(a3.real, n2, b2, n2.byteLength - b2, Number(f2) + q + b2);
              b2 += B;
              q += B;
              if (0 === B || B < ic2) break a;
            }
            q += b2;
          }
        } catch (U) {
          var r2 = { error: U };
        } finally {
          try {
            l3 && !l3.done && (t2 = x2.return) && t2.call(x2);
          } finally {
            if (r2) throw r2.error;
          }
        }
        g.view.setUint32(h2, q, true);
        return 0;
      }),
      fd_read: Z$1(function(a3, b2, c, f2) {
        var t2;
        a3 = d(a3, P$1);
        var q = 0 === a3.real, h2 = 0;
        try {
          var x2 = ca$1(e(b2, c)), l3 = x2.next();
          a: for (; !l3.done; l3 = x2.next()) {
            var n2 = l3.value;
            for (b2 = 0; b2 < n2.byteLength; ) {
              var B = n2.byteLength - b2, r2 = p.readSync(a3.real, n2, b2, B, q || void 0 === a3.offset ? null : Number(a3.offset));
              q || (a3.offset = (a3.offset ? a3.offset : k(0)) + k(r2));
              b2 += r2;
              h2 += r2;
              if (0 === r2 || r2 < B) break a;
            }
          }
        } catch (U) {
          var y3 = { error: U };
        } finally {
          try {
            l3 && !l3.done && (t2 = x2.return) && t2.call(x2);
          } finally {
            if (y3) throw y3.error;
          }
        }
        g.view.setUint32(f2, h2, true);
        return 0;
      }),
      fd_readdir: Z$1(function(a3, b2, c, e2, f2) {
        a3 = d(a3, yb$1);
        g.refreshMemory();
        var t2 = p.readdirSync(a3.path, { withFileTypes: true }), q = b2;
        for (e2 = Number(e2); e2 < t2.length; e2 += 1) {
          var h2 = t2[e2], x2 = E$1.byteLength(h2.name);
          if (b2 - q > c) break;
          g.view.setBigUint64(b2, k(e2 + 1), true);
          b2 += 8;
          if (b2 - q > c) break;
          var l3 = p.statSync(y2.resolve(a3.path, h2.name));
          g.view.setBigUint64(b2, k(l3.ino), true);
          b2 += 8;
          if (b2 - q > c) break;
          g.view.setUint32(b2, x2, true);
          b2 += 4;
          if (b2 - q > c) break;
          switch (true) {
            case l3.isBlockDevice():
              l3 = 1;
              break;
            case l3.isCharacterDevice():
              l3 = 2;
              break;
            case l3.isDirectory():
              l3 = 3;
              break;
            case l3.isFIFO():
              l3 = 6;
              break;
            case l3.isFile():
              l3 = 4;
              break;
            case l3.isSocket():
              l3 = 6;
              break;
            case l3.isSymbolicLink():
              l3 = 7;
              break;
            default:
              l3 = 0;
          }
          g.view.setUint8(b2, l3);
          b2 += 1;
          b2 += 3;
          if (b2 + x2 >= q + c) break;
          E$1.from(g.memory.buffer).write(h2.name, b2);
          b2 += x2;
        }
        g.view.setUint32(f2, Math.min(b2 - q, c), true);
        return 0;
      }),
      fd_renumber: Z$1(function(a3, b2) {
        d(a3, k(0));
        d(b2, k(0));
        p.closeSync(g.FD_MAP.get(a3).real);
        g.FD_MAP.set(a3, g.FD_MAP.get(b2));
        g.FD_MAP.delete(b2);
        return 0;
      }),
      fd_seek: Z$1(function(a3, b2, c, e2) {
        a3 = d(a3, Q$1);
        g.refreshMemory();
        switch (c) {
          case 1:
            a3.offset = (a3.offset ? a3.offset : k(0)) + k(b2);
            break;
          case 2:
            c = p.fstatSync(a3.real).size;
            a3.offset = k(c) + k(b2);
            break;
          case 0:
            a3.offset = k(b2);
        }
        g.view.setBigUint64(e2, a3.offset, true);
        return 0;
      }),
      fd_tell: Z$1(function(a3, b2) {
        a3 = d(a3, qb);
        g.refreshMemory();
        a3.offset || (a3.offset = k(0));
        g.view.setBigUint64(b2, a3.offset, true);
        return 0;
      }),
      fd_sync: Z$1(function(a3) {
        a3 = d(a3, S);
        p.fsyncSync(a3.real);
        return 0;
      }),
      path_create_directory: Z$1(function(a3, b2, c) {
        a3 = d(a3, tb$1);
        if (!a3.path) return 28;
        g.refreshMemory();
        b2 = E$1.from(g.memory.buffer, b2, c).toString();
        p.mkdirSync(y2.resolve(a3.path, b2));
        return 0;
      }),
      path_filestat_get: Z$1(function(a3, b2, c, e2, f2) {
        a3 = d(a3, Cb$1);
        if (!a3.path) return 28;
        g.refreshMemory();
        c = E$1.from(g.memory.buffer, c, e2).toString();
        c = p.statSync(y2.resolve(a3.path, c));
        g.view.setBigUint64(f2, k(c.dev), true);
        f2 += 8;
        g.view.setBigUint64(f2, k(c.ino), true);
        f2 += 8;
        g.view.setUint8(f2, cc$1(g, void 0, c).filetype);
        f2 += 8;
        g.view.setBigUint64(f2, k(c.nlink), true);
        f2 += 8;
        g.view.setBigUint64(f2, k(c.size), true);
        f2 += 8;
        g.view.setBigUint64(f2, Y$1(c.atimeMs), true);
        f2 += 8;
        g.view.setBigUint64(f2, Y$1(c.mtimeMs), true);
        g.view.setBigUint64(f2 + 8, Y$1(c.ctimeMs), true);
        return 0;
      }),
      path_filestat_set_times: Z$1(function(a3, c, e2, f2, h2, l3, n2) {
        a3 = d(a3, Eb$1);
        if (!a3.path) return 28;
        g.refreshMemory();
        var t2 = p.fstatSync(a3.real);
        c = t2.atime;
        t2 = t2.mtime;
        var q = $b(b(0));
        if (3 === (n2 & 3) || 12 === (n2 & 12)) return 28;
        1 === (n2 & 1) ? c = $b(h2) : 2 === (n2 & 2) && (c = q);
        4 === (n2 & 4) ? t2 = $b(l3) : 8 === (n2 & 8) && (t2 = q);
        e2 = E$1.from(g.memory.buffer, e2, f2).toString();
        p.utimesSync(y2.resolve(a3.path, e2), new Date(c), new Date(t2));
        return 0;
      }),
      path_link: Z$1(function(a3, b2, c, e2, f2, h2, l3) {
        a3 = d(a3, vb$1);
        f2 = d(f2, wb$1);
        if (!a3.path || !f2.path) return 28;
        g.refreshMemory();
        c = E$1.from(g.memory.buffer, c, e2).toString();
        h2 = E$1.from(g.memory.buffer, h2, l3).toString();
        p.linkSync(y2.resolve(
          a3.path,
          c
        ), y2.resolve(f2.path, h2));
        return 0;
      }),
      path_open: Z$1(function(a3, b2, c, e2, f2, h2, l3, n2, r2) {
        b2 = d(a3, xb$1);
        h2 = k(h2);
        l3 = k(l3);
        a3 = (h2 & (P$1 | yb$1)) !== k(0);
        var t2 = (h2 & (O$1 | T | sb$1 | Ib$1)) !== k(0);
        if (t2 && a3) var q = p.constants.O_RDWR;
        else a3 ? q = p.constants.O_RDONLY : t2 && (q = p.constants.O_WRONLY);
        a3 = h2 | xb$1;
        h2 |= l3;
        0 !== (f2 & 1) && (q |= p.constants.O_CREAT, a3 |= ub$1);
        0 !== (f2 & 2) && (q |= p.constants.O_DIRECTORY);
        0 !== (f2 & 4) && (q |= p.constants.O_EXCL);
        0 !== (f2 & 8) && (q |= p.constants.O_TRUNC, a3 |= Db$1);
        0 !== (n2 & 1) && (q |= p.constants.O_APPEND);
        0 !== (n2 & 2) && (q = p.constants.O_DSYNC ? q | p.constants.O_DSYNC : q | p.constants.O_SYNC, h2 |= O$1);
        0 !== (n2 & 4) && (q |= p.constants.O_NONBLOCK);
        0 !== (n2 & 8) && (q = p.constants.O_RSYNC ? q | p.constants.O_RSYNC : q | p.constants.O_SYNC, h2 |= S);
        0 !== (n2 & 16) && (q |= p.constants.O_SYNC, h2 |= S);
        t2 && 0 === (q & (p.constants.O_APPEND | p.constants.O_TRUNC)) && (h2 |= Q$1);
        g.refreshMemory();
        c = E$1.from(g.memory.buffer, c, e2).toString();
        c = y2.resolve(b2.path, c);
        if (y2.relative(b2.path, c).startsWith(__abx$10a4bb(114))) return 76;
        try {
          var x2 = p.realpathSync(c);
          if (y2.relative(b2.path, x2).startsWith(__abx$10a4bb(114))) return 76;
        } catch (U) {
          if (__abx$10a4bb(149) === U.code) x2 = c;
          else throw U;
        }
        try {
          var B = p.statSync(x2).isDirectory();
        } catch (U) {
        }
        q = !t2 && B ? p.openSync(x2, p.constants.O_RDONLY) : p.openSync(x2, q);
        B = fa(g.FD_MAP.keys()).reverse()[0] + 1;
        g.FD_MAP.set(B, { real: q, filetype: void 0, rights: { base: a3, inheriting: h2 }, path: x2 });
        bc$1(g, B);
        g.view.setUint32(r2, B, true);
        return 0;
      }),
      path_readlink: Z$1(function(a3, b2, c, e2, f2, h2) {
        a3 = d(a3, zb$1);
        if (!a3.path) return 28;
        g.refreshMemory();
        b2 = E$1.from(g.memory.buffer, b2, c).toString();
        b2 = y2.resolve(a3.path, b2);
        b2 = p.readlinkSync(b2);
        e2 = E$1.from(g.memory.buffer).write(b2, e2, f2);
        g.view.setUint32(h2, e2, true);
        return 0;
      }),
      path_remove_directory: Z$1(function(a3, b2, c) {
        a3 = d(a3, Lb$1);
        if (!a3.path) return 28;
        g.refreshMemory();
        b2 = E$1.from(g.memory.buffer, b2, c).toString();
        p.rmdirSync(y2.resolve(a3.path, b2));
        return 0;
      }),
      path_rename: Z$1(function(a3, b2, c, e2, f2, h2) {
        a3 = d(a3, Ab$1);
        e2 = d(e2, Bb$1);
        if (!a3.path || !e2.path) return 28;
        g.refreshMemory();
        b2 = E$1.from(g.memory.buffer, b2, c).toString();
        f2 = E$1.from(g.memory.buffer, f2, h2).toString();
        p.renameSync(y2.resolve(a3.path, b2), y2.resolve(e2.path, f2));
        return 0;
      }),
      path_symlink: Z$1(function(a3, b2, c, e2, f2) {
        c = d(c, Kb$1);
        if (!c.path) return 28;
        g.refreshMemory();
        a3 = E$1.from(g.memory.buffer, a3, b2).toString();
        e2 = E$1.from(g.memory.buffer, e2, f2).toString();
        p.symlinkSync(a3, y2.resolve(c.path, e2));
        return 0;
      }),
      path_unlink_file: Z$1(function(a3, b2, c) {
        a3 = d(a3, Mb$1);
        if (!a3.path) return 28;
        g.refreshMemory();
        b2 = E$1.from(g.memory.buffer, b2, c).toString();
        p.unlinkSync(y2.resolve(a3.path, b2));
        return 0;
      }),
      poll_oneoff: function(a3, c, d2, e2) {
        var f2 = 0, h2 = 0;
        g.refreshMemory();
        for (var l3 = 0; l3 < d2; l3 += 1) {
          var n2 = g.view.getBigUint64(a3, true);
          a3 += 8;
          var p2 = g.view.getUint8(a3);
          a3 += 1;
          switch (p2) {
            case 0:
              a3 += 7;
              g.view.getBigUint64(a3, true);
              a3 += 8;
              var q = g.view.getUint32(a3, true);
              a3 += 4;
              a3 += 4;
              p2 = g.view.getBigUint64(a3, true);
              a3 += 8;
              g.view.getBigUint64(a3, true);
              a3 += 8;
              var t2 = g.view.getUint16(a3, true);
              a3 += 2;
              a3 += 6;
              var x2 = 1 === t2;
              t2 = 0;
              q = k(b(q));
              null === q ? t2 = 28 : (p2 = x2 ? p2 : q + p2, h2 = p2 > h2 ? p2 : h2);
              g.view.setBigUint64(c, n2, true);
              c += 8;
              g.view.setUint16(c, t2, true);
              c += 2;
              g.view.setUint8(c, 0);
              c += 1;
              c += 5;
              f2 += 1;
              break;
            case 1:
            case 2:
              a3 += 3;
              g.view.getUint32(a3, true);
              a3 += 4;
              g.view.setBigUint64(c, n2, true);
              c += 8;
              g.view.setUint16(c, 52, true);
              c += 2;
              g.view.setUint8(c, p2);
              c += 1;
              c += 5;
              f2 += 1;
              break;
            default:
              return 28;
          }
        }
        for (g.view.setUint32(
          e2,
          f2,
          true
        ); r.hrtime() < h2; ) ;
        return 0;
      },
      proc_exit: function(a3) {
        r.exit(a3);
        return 0;
      },
      proc_raise: function(a3) {
        if (!(a3 in Xb)) return 28;
        r.kill(Xb[a3]);
        return 0;
      },
      random_get: function(a3, b2) {
        g.refreshMemory();
        r.randomFillSync(new Uint8Array(g.memory.buffer), a3, b2);
        return 0;
      },
      sched_yield: function() {
        return 0;
      },
      sock_recv: function() {
        return 52;
      },
      sock_send: function() {
        return 52;
      },
      sock_shutdown: function() {
        return 52;
      }
    };
    a2.traceSyscalls && Object.keys(this.wasiImport).forEach(function(a3) {
      var b2 = g.wasiImport[a3];
      g.wasiImport[a3] = function() {
        for (var c = [], d2 = 0; d2 < arguments.length; d2++) c[d2] = arguments[d2];
        console.log(__abx$10a4bb(150) + a3 + __abx$10a4bb(151) + c + __abx$10a4bb(152));
        try {
          var e2 = b2.apply(void 0, fa(c));
          console.log(__abx$10a4bb(153) + e2);
          return e2;
        } catch (Hb2) {
          throw console.log(__abx$10a4bb(154) + Hb2), Hb2;
        }
      };
    });
  }
  a.prototype.refreshMemory = function() {
    this.view && 0 !== this.view.buffer.byteLength || (this.view = new ia$1(this.memory.buffer));
  };
  a.prototype.setMemory = function(a2) {
    this.memory = a2;
  };
  a.prototype.start = function(a2) {
    a2 = a2.exports;
    if (null === a2 || __abx$10a4bb(118) !== typeof a2) throw Error(__abx$10a4bb(155) + a2 + __abx$10a4bb(115));
    var b = a2.memory;
    if (!(b instanceof WebAssembly.Memory)) throw Error(__abx$10a4bb(156) + b + __abx$10a4bb(115));
    this.setMemory(b);
    a2._start && a2._start();
  };
  a.prototype.getImportNamespace = function(a2) {
    var b, d = null;
    try {
      for (var e = ca$1(WebAssembly.Module.imports(a2)), f = e.next(); !f.done; f = e.next()) {
        var g = f.value;
        if (__abx$10a4bb(9) === g.kind && g.module.startsWith(__abx$10a4bb(157))) {
          if (!d) d = g.module;
          else if (d !== g.module) throw Error(__abx$10a4bb(158));
        }
      }
    } catch (l2) {
      var h = { error: l2 };
    } finally {
      try {
        f && !f.done && (b = e.return) && b.call(e);
      } finally {
        if (h) throw h.error;
      }
    }
    return d;
  };
  a.prototype.getImports = function(a2) {
    switch (this.getImportNamespace(a2)) {
      case __abx$10a4bb(159):
        return { wasi_unstable: this.wasiImport };
      case __abx$10a4bb(160):
        return { wasi_snapshot_preview1: this.wasiImport };
      default:
        throw Error(__abx$10a4bb(161));
    }
  };
  a.defaultBindings = pb$1;
  return a;
})();
var browser$2 = {};
var browser$1 = {};
var safeBuffer = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var hasRequiredSafeBuffer;
function requireSafeBuffer() {
  if (hasRequiredSafeBuffer) return safeBuffer.exports;
  hasRequiredSafeBuffer = 1;
  (function(module, exports) {
    var buffer2 = requireBuffer$1();
    var Buffer2 = buffer2.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer2;
    } else {
      copyProps(buffer2, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === __abx$10a4bb(17)) {
        throw new TypeError(__abx$10a4bb(101));
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== __abx$10a4bb(17)) {
        throw new TypeError(__abx$10a4bb(102));
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === __abx$10a4bb(18)) {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== __abx$10a4bb(17)) {
        throw new TypeError(__abx$10a4bb(102));
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== __abx$10a4bb(17)) {
        throw new TypeError(__abx$10a4bb(102));
      }
      return buffer2.SlowBuffer(size);
    };
  })(safeBuffer, safeBuffer.exports);
  return safeBuffer.exports;
}
var browser = { exports: {} };
var hasRequiredBrowser$2;
function requireBrowser$2() {
  if (hasRequiredBrowser$2) return browser.exports;
  hasRequiredBrowser$2 = 1;
  var MAX_BYTES = 65536;
  var MAX_UINT32 = 4294967295;
  function oldBrowser() {
    throw new Error(__abx$10a4bb(162));
  }
  var Buffer2 = requireSafeBuffer().Buffer;
  var crypto2 = commonjsGlobal.crypto || commonjsGlobal.msCrypto;
  if (crypto2 && crypto2.getRandomValues) {
    browser.exports = randomBytes;
  } else {
    browser.exports = oldBrowser;
  }
  function randomBytes(size, cb2) {
    if (size > MAX_UINT32) throw new RangeError(__abx$10a4bb(163));
    var bytes = Buffer2.allocUnsafe(size);
    if (size > 0) {
      if (size > MAX_BYTES) {
        for (var generated = 0; generated < size; generated += MAX_BYTES) {
          crypto2.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
        }
      } else {
        crypto2.getRandomValues(bytes);
      }
    }
    if (typeof cb2 === __abx$10a4bb(9)) {
      return process.nextTick(function() {
        cb2(null, bytes);
      });
    }
    return bytes;
  }
  return browser.exports;
}
var hasRequiredBrowser$1;
function requireBrowser$1() {
  if (hasRequiredBrowser$1) return browser$1;
  hasRequiredBrowser$1 = 1;
  function oldBrowser() {
    throw new Error(__abx$10a4bb(103));
  }
  var safeBuffer2 = requireSafeBuffer();
  var randombytes = requireBrowser$2();
  var Buffer2 = safeBuffer2.Buffer;
  var kBufferMaxLength = safeBuffer2.kMaxLength;
  var crypto2 = commonjsGlobal.crypto || commonjsGlobal.msCrypto;
  var kMaxUint32 = Math.pow(2, 32) - 1;
  function assertOffset(offset, length) {
    if (typeof offset !== __abx$10a4bb(17) || offset !== offset) {
      throw new TypeError(__abx$10a4bb(104));
    }
    if (offset > kMaxUint32 || offset < 0) {
      throw new TypeError(__abx$10a4bb(105));
    }
    if (offset > kBufferMaxLength || offset > length) {
      throw new RangeError(__abx$10a4bb(106));
    }
  }
  function assertSize(size, offset, length) {
    if (typeof size !== __abx$10a4bb(17) || size !== size) {
      throw new TypeError(__abx$10a4bb(107));
    }
    if (size > kMaxUint32 || size < 0) {
      throw new TypeError(__abx$10a4bb(108));
    }
    if (size + offset > length || size > kBufferMaxLength) {
      throw new RangeError(__abx$10a4bb(109));
    }
  }
  if (crypto2 && crypto2.getRandomValues || !process.browser) {
    browser$1.randomFill = randomFill;
    browser$1.randomFillSync = randomFillSync;
  } else {
    browser$1.randomFill = oldBrowser;
    browser$1.randomFillSync = oldBrowser;
  }
  function randomFill(buf, offset, size, cb2) {
    if (!Buffer2.isBuffer(buf) && !(buf instanceof commonjsGlobal.Uint8Array)) {
      throw new TypeError(__abx$10a4bb(110));
    }
    if (typeof offset === __abx$10a4bb(9)) {
      cb2 = offset;
      offset = 0;
      size = buf.length;
    } else if (typeof size === __abx$10a4bb(9)) {
      cb2 = size;
      size = buf.length - offset;
    } else if (typeof cb2 !== __abx$10a4bb(9)) {
      throw new TypeError(__abx$10a4bb(111));
    }
    assertOffset(offset, buf.length);
    assertSize(size, offset, buf.length);
    return actualFill(buf, offset, size, cb2);
  }
  function actualFill(buf, offset, size, cb2) {
    if (process.browser) {
      var ourBuf = buf.buffer;
      var uint = new Uint8Array(ourBuf, offset, size);
      crypto2.getRandomValues(uint);
      if (cb2) {
        process.nextTick(function() {
          cb2(null, buf);
        });
        return;
      }
      return buf;
    }
    if (cb2) {
      randombytes(size, function(err, bytes2) {
        if (err) {
          return cb2(err);
        }
        bytes2.copy(buf, offset);
        cb2(null, buf);
      });
      return;
    }
    var bytes = randombytes(size);
    bytes.copy(buf, offset);
    return buf;
  }
  function randomFillSync(buf, offset, size) {
    if (typeof offset === __abx$10a4bb(0)) {
      offset = 0;
    }
    if (!Buffer2.isBuffer(buf) && !(buf instanceof commonjsGlobal.Uint8Array)) {
      throw new TypeError(__abx$10a4bb(110));
    }
    assertOffset(offset, buf.length);
    if (size === void 0) size = buf.length - offset;
    assertSize(size, offset, buf.length);
    return actualFill(buf, offset, size);
  }
  return browser$1;
}
var browserHrtime = {};
var hasRequiredBrowserHrtime;
function requireBrowserHrtime() {
  if (hasRequiredBrowserHrtime) return browserHrtime;
  hasRequiredBrowserHrtime = 1;
  Object.defineProperty(browserHrtime, __abx$10a4bb(164), { value: true });
  const baseNow = Math.floor((Date.now() - performance.now()) * 1e-3);
  function hrtime(previousTimestamp) {
    let clocktime = performance.now() * 1e-3;
    let seconds = Math.floor(clocktime) + baseNow;
    let nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds, nanoseconds];
  }
  browserHrtime.default = hrtime;
  return browserHrtime;
}
var pathBrowserify;
var hasRequiredPathBrowserify;
function requirePathBrowserify() {
  if (hasRequiredPathBrowserify) return pathBrowserify;
  hasRequiredPathBrowserify = 1;
  function assertPath(path) {
    if (typeof path !== __abx$10a4bb(18)) {
      throw new TypeError(__abx$10a4bb(112) + JSON.stringify(path));
    }
  }
  function normalizeStringPosix(path, allowAboveRoot) {
    var res = __abx$10a4bb(7);
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for (var i = 0; i <= path.length; ++i) {
      if (i < path.length)
        code = path.charCodeAt(i);
      else if (code === 47)
        break;
      else
        code = 47;
      if (code === 47) {
        if (lastSlash === i - 1 || dots === 1) ;
        else if (lastSlash !== i - 1 && dots === 2) {
          if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
            if (res.length > 2) {
              var lastSlashIndex = res.lastIndexOf(__abx$10a4bb(71));
              if (lastSlashIndex !== res.length - 1) {
                if (lastSlashIndex === -1) {
                  res = __abx$10a4bb(7);
                  lastSegmentLength = 0;
                } else {
                  res = res.slice(0, lastSlashIndex);
                  lastSegmentLength = res.length - 1 - res.lastIndexOf(__abx$10a4bb(71));
                }
                lastSlash = i;
                dots = 0;
                continue;
              }
            } else if (res.length === 2 || res.length === 1) {
              res = __abx$10a4bb(7);
              lastSegmentLength = 0;
              lastSlash = i;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            if (res.length > 0)
              res += __abx$10a4bb(113);
            else
              res = __abx$10a4bb(114);
            lastSegmentLength = 2;
          }
        } else {
          if (res.length > 0)
            res += __abx$10a4bb(71) + path.slice(lastSlash + 1, i);
          else
            res = path.slice(lastSlash + 1, i);
          lastSegmentLength = i - lastSlash - 1;
        }
        lastSlash = i;
        dots = 0;
      } else if (code === 46 && dots !== -1) {
        ++dots;
      } else {
        dots = -1;
      }
    }
    return res;
  }
  function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || __abx$10a4bb(7)) + (pathObject.ext || __abx$10a4bb(7));
    if (!dir) {
      return base;
    }
    if (dir === pathObject.root) {
      return dir + base;
    }
    return dir + sep + base;
  }
  var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
      var resolvedPath = __abx$10a4bb(7);
      var resolvedAbsolute = false;
      var cwd;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path;
        if (i >= 0)
          path = arguments[i];
        else {
          if (cwd === void 0)
            cwd = process.cwd();
          path = cwd;
        }
        assertPath(path);
        if (path.length === 0) {
          continue;
        }
        resolvedPath = path + __abx$10a4bb(71) + resolvedPath;
        resolvedAbsolute = path.charCodeAt(0) === 47;
      }
      resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
      if (resolvedAbsolute) {
        if (resolvedPath.length > 0)
          return __abx$10a4bb(71) + resolvedPath;
        else
          return __abx$10a4bb(71);
      } else if (resolvedPath.length > 0) {
        return resolvedPath;
      } else {
        return __abx$10a4bb(115);
      }
    },
    normalize: function normalize(path) {
      assertPath(path);
      if (path.length === 0) return __abx$10a4bb(115);
      var isAbsolute = path.charCodeAt(0) === 47;
      var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
      path = normalizeStringPosix(path, !isAbsolute);
      if (path.length === 0 && !isAbsolute) path = __abx$10a4bb(115);
      if (path.length > 0 && trailingSeparator) path += __abx$10a4bb(71);
      if (isAbsolute) return __abx$10a4bb(71) + path;
      return path;
    },
    isAbsolute: function isAbsolute(path) {
      assertPath(path);
      return path.length > 0 && path.charCodeAt(0) === 47;
    },
    join: function join() {
      if (arguments.length === 0)
        return __abx$10a4bb(115);
      var joined;
      for (var i = 0; i < arguments.length; ++i) {
        var arg = arguments[i];
        assertPath(arg);
        if (arg.length > 0) {
          if (joined === void 0)
            joined = arg;
          else
            joined += __abx$10a4bb(71) + arg;
        }
      }
      if (joined === void 0)
        return __abx$10a4bb(115);
      return posix.normalize(joined);
    },
    relative: function relative(from, to) {
      assertPath(from);
      assertPath(to);
      if (from === to) return __abx$10a4bb(7);
      from = posix.resolve(from);
      to = posix.resolve(to);
      if (from === to) return __abx$10a4bb(7);
      var fromStart = 1;
      for (; fromStart < from.length; ++fromStart) {
        if (from.charCodeAt(fromStart) !== 47)
          break;
      }
      var fromEnd = from.length;
      var fromLen = fromEnd - fromStart;
      var toStart = 1;
      for (; toStart < to.length; ++toStart) {
        if (to.charCodeAt(toStart) !== 47)
          break;
      }
      var toEnd = to.length;
      var toLen = toEnd - toStart;
      var length = fromLen < toLen ? fromLen : toLen;
      var lastCommonSep = -1;
      var i = 0;
      for (; i <= length; ++i) {
        if (i === length) {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i) === 47) {
              return to.slice(toStart + i + 1);
            } else if (i === 0) {
              return to.slice(toStart + i);
            }
          } else if (fromLen > length) {
            if (from.charCodeAt(fromStart + i) === 47) {
              lastCommonSep = i;
            } else if (i === 0) {
              lastCommonSep = 0;
            }
          }
          break;
        }
        var fromCode = from.charCodeAt(fromStart + i);
        var toCode = to.charCodeAt(toStart + i);
        if (fromCode !== toCode)
          break;
        else if (fromCode === 47)
          lastCommonSep = i;
      }
      var out = __abx$10a4bb(7);
      for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
        if (i === fromEnd || from.charCodeAt(i) === 47) {
          if (out.length === 0)
            out += __abx$10a4bb(114);
          else
            out += __abx$10a4bb(113);
        }
      }
      if (out.length > 0)
        return out + to.slice(toStart + lastCommonSep);
      else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47)
          ++toStart;
        return to.slice(toStart);
      }
    },
    _makeLong: function _makeLong(path) {
      return path;
    },
    dirname: function dirname(path) {
      assertPath(path);
      if (path.length === 0) return __abx$10a4bb(115);
      var code = path.charCodeAt(0);
      var hasRoot = code === 47;
      var end = -1;
      var matchedSlash = true;
      for (var i = path.length - 1; i >= 1; --i) {
        code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
          matchedSlash = false;
        }
      }
      if (end === -1) return hasRoot ? __abx$10a4bb(71) : __abx$10a4bb(115);
      if (hasRoot && end === 1) return __abx$10a4bb(116);
      return path.slice(0, end);
    },
    basename: function basename(path, ext) {
      if (ext !== void 0 && typeof ext !== __abx$10a4bb(18)) throw new TypeError(__abx$10a4bb(117));
      assertPath(path);
      var start2 = 0;
      var end = -1;
      var matchedSlash = true;
      var i;
      if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
        if (ext.length === path.length && ext === path) return __abx$10a4bb(7);
        var extIdx = ext.length - 1;
        var firstNonSlashEnd = -1;
        for (i = path.length - 1; i >= 0; --i) {
          var code = path.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              start2 = i + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd === -1) {
              matchedSlash = false;
              firstNonSlashEnd = i + 1;
            }
            if (extIdx >= 0) {
              if (code === ext.charCodeAt(extIdx)) {
                if (--extIdx === -1) {
                  end = i;
                }
              } else {
                extIdx = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start2 === end) end = firstNonSlashEnd;
        else if (end === -1) end = path.length;
        return path.slice(start2, end);
      } else {
        for (i = path.length - 1; i >= 0; --i) {
          if (path.charCodeAt(i) === 47) {
            if (!matchedSlash) {
              start2 = i + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
        }
        if (end === -1) return __abx$10a4bb(7);
        return path.slice(start2, end);
      }
    },
    extname: function extname(path) {
      assertPath(path);
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var preDotState = 0;
      for (var i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return __abx$10a4bb(7);
      }
      return path.slice(startDot, end);
    },
    format: function format(pathObject) {
      if (pathObject === null || typeof pathObject !== __abx$10a4bb(118)) {
        throw new TypeError(__abx$10a4bb(119) + typeof pathObject);
      }
      return _format(__abx$10a4bb(71), pathObject);
    },
    parse: function parse(path) {
      assertPath(path);
      var ret = { root: __abx$10a4bb(7), dir: __abx$10a4bb(7), base: __abx$10a4bb(7), ext: __abx$10a4bb(7), name: __abx$10a4bb(7) };
      if (path.length === 0) return ret;
      var code = path.charCodeAt(0);
      var isAbsolute = code === 47;
      var start2;
      if (isAbsolute) {
        ret.root = __abx$10a4bb(71);
        start2 = 1;
      } else {
        start2 = 0;
      }
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var i = path.length - 1;
      var preDotState = 0;
      for (; i >= start2; --i) {
        code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === 46) {
          if (startDot === -1) startDot = i;
          else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
          if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
          else ret.base = ret.name = path.slice(startPart, end);
        }
      } else {
        if (startPart === 0 && isAbsolute) {
          ret.name = path.slice(1, startDot);
          ret.base = path.slice(1, end);
        } else {
          ret.name = path.slice(startPart, startDot);
          ret.base = path.slice(startPart, end);
        }
        ret.ext = path.slice(startDot, end);
      }
      if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
      else if (isAbsolute) ret.dir = __abx$10a4bb(71);
      return ret;
    },
    sep: __abx$10a4bb(71),
    delimiter: __abx$10a4bb(120),
    win32: null,
    posix: null
  };
  posix.posix = posix;
  pathBrowserify = posix;
  return pathBrowserify;
}
var lib = {};
var bigint = {};
var hasRequiredBigint;
function requireBigint() {
  if (hasRequiredBigint) return bigint;
  hasRequiredBigint = 1;
  Object.defineProperty(bigint, __abx$10a4bb(164), { value: true });
  const globalObj = typeof globalThis !== __abx$10a4bb(0) ? globalThis : typeof commonjsGlobal !== __abx$10a4bb(0) ? commonjsGlobal : {};
  bigint.BigIntPolyfill = typeof BigInt !== __abx$10a4bb(0) ? BigInt : globalObj.BigInt || Number;
  return bigint;
}
var dataview = {};
var hasRequiredDataview;
function requireDataview() {
  if (hasRequiredDataview) return dataview;
  hasRequiredDataview = 1;
  Object.defineProperty(dataview, __abx$10a4bb(164), { value: true });
  const bigint_1 = requireBigint();
  let exportedDataView = DataView;
  if (!exportedDataView.prototype.setBigUint64) {
    exportedDataView.prototype.setBigUint64 = function(byteOffset, value, littleEndian) {
      let lowWord;
      let highWord;
      if (value < 2 ** 32) {
        lowWord = Number(value);
        highWord = 0;
      } else {
        var bigNumberAsBinaryStr = value.toString(2);
        var bigNumberAsBinaryStr2 = __abx$10a4bb(7);
        for (var i = 0; i < 64 - bigNumberAsBinaryStr.length; i++) {
          bigNumberAsBinaryStr2 += __abx$10a4bb(80);
        }
        bigNumberAsBinaryStr2 += bigNumberAsBinaryStr;
        highWord = parseInt(bigNumberAsBinaryStr2.substring(0, 32), 2);
        lowWord = parseInt(bigNumberAsBinaryStr2.substring(32), 2);
      }
      this.setUint32(byteOffset + (littleEndian ? 0 : 4), lowWord, littleEndian);
      this.setUint32(byteOffset + (littleEndian ? 4 : 0), highWord, littleEndian);
    };
    exportedDataView.prototype.getBigUint64 = function(byteOffset, littleEndian) {
      let lowWord = this.getUint32(byteOffset + (littleEndian ? 0 : 4), littleEndian);
      let highWord = this.getUint32(byteOffset + (littleEndian ? 4 : 0), littleEndian);
      var lowWordAsBinaryStr = lowWord.toString(2);
      var highWordAsBinaryStr = highWord.toString(2);
      var lowWordAsBinaryStrPadded = __abx$10a4bb(7);
      for (var i = 0; i < 32 - lowWordAsBinaryStr.length; i++) {
        lowWordAsBinaryStrPadded += __abx$10a4bb(80);
      }
      lowWordAsBinaryStrPadded += lowWordAsBinaryStr;
      return bigint_1.BigIntPolyfill(__abx$10a4bb(81) + highWordAsBinaryStr + lowWordAsBinaryStrPadded);
    };
  }
  dataview.DataViewPolyfill = exportedDataView;
  return dataview;
}
var buffer = {};
var hasRequiredBuffer;
function requireBuffer() {
  if (hasRequiredBuffer) return buffer;
  hasRequiredBuffer = 1;
  Object.defineProperty(buffer, __abx$10a4bb(164), { value: true });
  const isomorphicBuffer = Buffer;
  buffer.default = isomorphicBuffer;
  return buffer;
}
var constants = {};
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  (function(exports) {
    Object.defineProperty(exports, __abx$10a4bb(164), { value: true });
    const bigint_1 = requireBigint();
    exports.WASI_ESUCCESS = 0;
    exports.WASI_E2BIG = 1;
    exports.WASI_EACCES = 2;
    exports.WASI_EADDRINUSE = 3;
    exports.WASI_EADDRNOTAVAIL = 4;
    exports.WASI_EAFNOSUPPORT = 5;
    exports.WASI_EAGAIN = 6;
    exports.WASI_EALREADY = 7;
    exports.WASI_EBADF = 8;
    exports.WASI_EBADMSG = 9;
    exports.WASI_EBUSY = 10;
    exports.WASI_ECANCELED = 11;
    exports.WASI_ECHILD = 12;
    exports.WASI_ECONNABORTED = 13;
    exports.WASI_ECONNREFUSED = 14;
    exports.WASI_ECONNRESET = 15;
    exports.WASI_EDEADLK = 16;
    exports.WASI_EDESTADDRREQ = 17;
    exports.WASI_EDOM = 18;
    exports.WASI_EDQUOT = 19;
    exports.WASI_EEXIST = 20;
    exports.WASI_EFAULT = 21;
    exports.WASI_EFBIG = 22;
    exports.WASI_EHOSTUNREACH = 23;
    exports.WASI_EIDRM = 24;
    exports.WASI_EILSEQ = 25;
    exports.WASI_EINPROGRESS = 26;
    exports.WASI_EINTR = 27;
    exports.WASI_EINVAL = 28;
    exports.WASI_EIO = 29;
    exports.WASI_EISCONN = 30;
    exports.WASI_EISDIR = 31;
    exports.WASI_ELOOP = 32;
    exports.WASI_EMFILE = 33;
    exports.WASI_EMLINK = 34;
    exports.WASI_EMSGSIZE = 35;
    exports.WASI_EMULTIHOP = 36;
    exports.WASI_ENAMETOOLONG = 37;
    exports.WASI_ENETDOWN = 38;
    exports.WASI_ENETRESET = 39;
    exports.WASI_ENETUNREACH = 40;
    exports.WASI_ENFILE = 41;
    exports.WASI_ENOBUFS = 42;
    exports.WASI_ENODEV = 43;
    exports.WASI_ENOENT = 44;
    exports.WASI_ENOEXEC = 45;
    exports.WASI_ENOLCK = 46;
    exports.WASI_ENOLINK = 47;
    exports.WASI_ENOMEM = 48;
    exports.WASI_ENOMSG = 49;
    exports.WASI_ENOPROTOOPT = 50;
    exports.WASI_ENOSPC = 51;
    exports.WASI_ENOSYS = 52;
    exports.WASI_ENOTCONN = 53;
    exports.WASI_ENOTDIR = 54;
    exports.WASI_ENOTEMPTY = 55;
    exports.WASI_ENOTRECOVERABLE = 56;
    exports.WASI_ENOTSOCK = 57;
    exports.WASI_ENOTSUP = 58;
    exports.WASI_ENOTTY = 59;
    exports.WASI_ENXIO = 60;
    exports.WASI_EOVERFLOW = 61;
    exports.WASI_EOWNERDEAD = 62;
    exports.WASI_EPERM = 63;
    exports.WASI_EPIPE = 64;
    exports.WASI_EPROTO = 65;
    exports.WASI_EPROTONOSUPPORT = 66;
    exports.WASI_EPROTOTYPE = 67;
    exports.WASI_ERANGE = 68;
    exports.WASI_EROFS = 69;
    exports.WASI_ESPIPE = 70;
    exports.WASI_ESRCH = 71;
    exports.WASI_ESTALE = 72;
    exports.WASI_ETIMEDOUT = 73;
    exports.WASI_ETXTBSY = 74;
    exports.WASI_EXDEV = 75;
    exports.WASI_ENOTCAPABLE = 76;
    exports.WASI_SIGABRT = 0;
    exports.WASI_SIGALRM = 1;
    exports.WASI_SIGBUS = 2;
    exports.WASI_SIGCHLD = 3;
    exports.WASI_SIGCONT = 4;
    exports.WASI_SIGFPE = 5;
    exports.WASI_SIGHUP = 6;
    exports.WASI_SIGILL = 7;
    exports.WASI_SIGINT = 8;
    exports.WASI_SIGKILL = 9;
    exports.WASI_SIGPIPE = 10;
    exports.WASI_SIGQUIT = 11;
    exports.WASI_SIGSEGV = 12;
    exports.WASI_SIGSTOP = 13;
    exports.WASI_SIGTERM = 14;
    exports.WASI_SIGTRAP = 15;
    exports.WASI_SIGTSTP = 16;
    exports.WASI_SIGTTIN = 17;
    exports.WASI_SIGTTOU = 18;
    exports.WASI_SIGURG = 19;
    exports.WASI_SIGUSR1 = 20;
    exports.WASI_SIGUSR2 = 21;
    exports.WASI_SIGVTALRM = 22;
    exports.WASI_SIGXCPU = 23;
    exports.WASI_SIGXFSZ = 24;
    exports.WASI_FILETYPE_UNKNOWN = 0;
    exports.WASI_FILETYPE_BLOCK_DEVICE = 1;
    exports.WASI_FILETYPE_CHARACTER_DEVICE = 2;
    exports.WASI_FILETYPE_DIRECTORY = 3;
    exports.WASI_FILETYPE_REGULAR_FILE = 4;
    exports.WASI_FILETYPE_SOCKET_DGRAM = 5;
    exports.WASI_FILETYPE_SOCKET_STREAM = 6;
    exports.WASI_FILETYPE_SYMBOLIC_LINK = 7;
    exports.WASI_FDFLAG_APPEND = 1;
    exports.WASI_FDFLAG_DSYNC = 2;
    exports.WASI_FDFLAG_NONBLOCK = 4;
    exports.WASI_FDFLAG_RSYNC = 8;
    exports.WASI_FDFLAG_SYNC = 16;
    exports.WASI_RIGHT_FD_DATASYNC = bigint_1.BigIntPolyfill(1);
    exports.WASI_RIGHT_FD_READ = bigint_1.BigIntPolyfill(2);
    exports.WASI_RIGHT_FD_SEEK = bigint_1.BigIntPolyfill(4);
    exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS = bigint_1.BigIntPolyfill(8);
    exports.WASI_RIGHT_FD_SYNC = bigint_1.BigIntPolyfill(16);
    exports.WASI_RIGHT_FD_TELL = bigint_1.BigIntPolyfill(32);
    exports.WASI_RIGHT_FD_WRITE = bigint_1.BigIntPolyfill(64);
    exports.WASI_RIGHT_FD_ADVISE = bigint_1.BigIntPolyfill(128);
    exports.WASI_RIGHT_FD_ALLOCATE = bigint_1.BigIntPolyfill(256);
    exports.WASI_RIGHT_PATH_CREATE_DIRECTORY = bigint_1.BigIntPolyfill(512);
    exports.WASI_RIGHT_PATH_CREATE_FILE = bigint_1.BigIntPolyfill(1024);
    exports.WASI_RIGHT_PATH_LINK_SOURCE = bigint_1.BigIntPolyfill(2048);
    exports.WASI_RIGHT_PATH_LINK_TARGET = bigint_1.BigIntPolyfill(4096);
    exports.WASI_RIGHT_PATH_OPEN = bigint_1.BigIntPolyfill(8192);
    exports.WASI_RIGHT_FD_READDIR = bigint_1.BigIntPolyfill(16384);
    exports.WASI_RIGHT_PATH_READLINK = bigint_1.BigIntPolyfill(32768);
    exports.WASI_RIGHT_PATH_RENAME_SOURCE = bigint_1.BigIntPolyfill(65536);
    exports.WASI_RIGHT_PATH_RENAME_TARGET = bigint_1.BigIntPolyfill(131072);
    exports.WASI_RIGHT_PATH_FILESTAT_GET = bigint_1.BigIntPolyfill(262144);
    exports.WASI_RIGHT_PATH_FILESTAT_SET_SIZE = bigint_1.BigIntPolyfill(524288);
    exports.WASI_RIGHT_PATH_FILESTAT_SET_TIMES = bigint_1.BigIntPolyfill(1048576);
    exports.WASI_RIGHT_FD_FILESTAT_GET = bigint_1.BigIntPolyfill(2097152);
    exports.WASI_RIGHT_FD_FILESTAT_SET_SIZE = bigint_1.BigIntPolyfill(4194304);
    exports.WASI_RIGHT_FD_FILESTAT_SET_TIMES = bigint_1.BigIntPolyfill(8388608);
    exports.WASI_RIGHT_PATH_SYMLINK = bigint_1.BigIntPolyfill(16777216);
    exports.WASI_RIGHT_PATH_REMOVE_DIRECTORY = bigint_1.BigIntPolyfill(33554432);
    exports.WASI_RIGHT_PATH_UNLINK_FILE = bigint_1.BigIntPolyfill(67108864);
    exports.WASI_RIGHT_POLL_FD_READWRITE = bigint_1.BigIntPolyfill(134217728);
    exports.WASI_RIGHT_SOCK_SHUTDOWN = bigint_1.BigIntPolyfill(268435456);
    exports.RIGHTS_ALL = exports.WASI_RIGHT_FD_DATASYNC | exports.WASI_RIGHT_FD_READ | exports.WASI_RIGHT_FD_SEEK | exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS | exports.WASI_RIGHT_FD_SYNC | exports.WASI_RIGHT_FD_TELL | exports.WASI_RIGHT_FD_WRITE | exports.WASI_RIGHT_FD_ADVISE | exports.WASI_RIGHT_FD_ALLOCATE | exports.WASI_RIGHT_PATH_CREATE_DIRECTORY | exports.WASI_RIGHT_PATH_CREATE_FILE | exports.WASI_RIGHT_PATH_LINK_SOURCE | exports.WASI_RIGHT_PATH_LINK_TARGET | exports.WASI_RIGHT_PATH_OPEN | exports.WASI_RIGHT_FD_READDIR | exports.WASI_RIGHT_PATH_READLINK | exports.WASI_RIGHT_PATH_RENAME_SOURCE | exports.WASI_RIGHT_PATH_RENAME_TARGET | exports.WASI_RIGHT_PATH_FILESTAT_GET | exports.WASI_RIGHT_PATH_FILESTAT_SET_SIZE | exports.WASI_RIGHT_PATH_FILESTAT_SET_TIMES | exports.WASI_RIGHT_FD_FILESTAT_GET | exports.WASI_RIGHT_FD_FILESTAT_SET_TIMES | exports.WASI_RIGHT_FD_FILESTAT_SET_SIZE | exports.WASI_RIGHT_PATH_SYMLINK | exports.WASI_RIGHT_PATH_UNLINK_FILE | exports.WASI_RIGHT_PATH_REMOVE_DIRECTORY | exports.WASI_RIGHT_POLL_FD_READWRITE | exports.WASI_RIGHT_SOCK_SHUTDOWN;
    exports.RIGHTS_BLOCK_DEVICE_BASE = exports.RIGHTS_ALL;
    exports.RIGHTS_BLOCK_DEVICE_INHERITING = exports.RIGHTS_ALL;
    exports.RIGHTS_CHARACTER_DEVICE_BASE = exports.RIGHTS_ALL;
    exports.RIGHTS_CHARACTER_DEVICE_INHERITING = exports.RIGHTS_ALL;
    exports.RIGHTS_REGULAR_FILE_BASE = exports.WASI_RIGHT_FD_DATASYNC | exports.WASI_RIGHT_FD_READ | exports.WASI_RIGHT_FD_SEEK | exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS | exports.WASI_RIGHT_FD_SYNC | exports.WASI_RIGHT_FD_TELL | exports.WASI_RIGHT_FD_WRITE | exports.WASI_RIGHT_FD_ADVISE | exports.WASI_RIGHT_FD_ALLOCATE | exports.WASI_RIGHT_FD_FILESTAT_GET | exports.WASI_RIGHT_FD_FILESTAT_SET_SIZE | exports.WASI_RIGHT_FD_FILESTAT_SET_TIMES | exports.WASI_RIGHT_POLL_FD_READWRITE;
    exports.RIGHTS_REGULAR_FILE_INHERITING = bigint_1.BigIntPolyfill(0);
    exports.RIGHTS_DIRECTORY_BASE = exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS | exports.WASI_RIGHT_FD_SYNC | exports.WASI_RIGHT_FD_ADVISE | exports.WASI_RIGHT_PATH_CREATE_DIRECTORY | exports.WASI_RIGHT_PATH_CREATE_FILE | exports.WASI_RIGHT_PATH_LINK_SOURCE | exports.WASI_RIGHT_PATH_LINK_TARGET | exports.WASI_RIGHT_PATH_OPEN | exports.WASI_RIGHT_FD_READDIR | exports.WASI_RIGHT_PATH_READLINK | exports.WASI_RIGHT_PATH_RENAME_SOURCE | exports.WASI_RIGHT_PATH_RENAME_TARGET | exports.WASI_RIGHT_PATH_FILESTAT_GET | exports.WASI_RIGHT_PATH_FILESTAT_SET_SIZE | exports.WASI_RIGHT_PATH_FILESTAT_SET_TIMES | exports.WASI_RIGHT_FD_FILESTAT_GET | exports.WASI_RIGHT_FD_FILESTAT_SET_TIMES | exports.WASI_RIGHT_PATH_SYMLINK | exports.WASI_RIGHT_PATH_UNLINK_FILE | exports.WASI_RIGHT_PATH_REMOVE_DIRECTORY | exports.WASI_RIGHT_POLL_FD_READWRITE;
    exports.RIGHTS_DIRECTORY_INHERITING = exports.RIGHTS_DIRECTORY_BASE | exports.RIGHTS_REGULAR_FILE_BASE;
    exports.RIGHTS_SOCKET_BASE = exports.WASI_RIGHT_FD_READ | exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS | exports.WASI_RIGHT_FD_WRITE | exports.WASI_RIGHT_FD_FILESTAT_GET | exports.WASI_RIGHT_POLL_FD_READWRITE | exports.WASI_RIGHT_SOCK_SHUTDOWN;
    exports.RIGHTS_SOCKET_INHERITING = exports.RIGHTS_ALL;
    exports.RIGHTS_TTY_BASE = exports.WASI_RIGHT_FD_READ | exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS | exports.WASI_RIGHT_FD_WRITE | exports.WASI_RIGHT_FD_FILESTAT_GET | exports.WASI_RIGHT_POLL_FD_READWRITE;
    exports.RIGHTS_TTY_INHERITING = bigint_1.BigIntPolyfill(0);
    exports.WASI_CLOCK_REALTIME = 0;
    exports.WASI_CLOCK_MONOTONIC = 1;
    exports.WASI_CLOCK_PROCESS_CPUTIME_ID = 2;
    exports.WASI_CLOCK_THREAD_CPUTIME_ID = 3;
    exports.WASI_EVENTTYPE_CLOCK = 0;
    exports.WASI_EVENTTYPE_FD_READ = 1;
    exports.WASI_EVENTTYPE_FD_WRITE = 2;
    exports.WASI_FILESTAT_SET_ATIM = 1 << 0;
    exports.WASI_FILESTAT_SET_ATIM_NOW = 1 << 1;
    exports.WASI_FILESTAT_SET_MTIM = 1 << 2;
    exports.WASI_FILESTAT_SET_MTIM_NOW = 1 << 3;
    exports.WASI_O_CREAT = 1 << 0;
    exports.WASI_O_DIRECTORY = 1 << 1;
    exports.WASI_O_EXCL = 1 << 2;
    exports.WASI_O_TRUNC = 1 << 3;
    exports.WASI_PREOPENTYPE_DIR = 0;
    exports.WASI_DIRCOOKIE_START = 0;
    exports.WASI_STDIN_FILENO = 0;
    exports.WASI_STDOUT_FILENO = 1;
    exports.WASI_STDERR_FILENO = 2;
    exports.WASI_WHENCE_SET = 0;
    exports.WASI_WHENCE_CUR = 1;
    exports.WASI_WHENCE_END = 2;
    exports.ERROR_MAP = {
      E2BIG: exports.WASI_E2BIG,
      EACCES: exports.WASI_EACCES,
      EADDRINUSE: exports.WASI_EADDRINUSE,
      EADDRNOTAVAIL: exports.WASI_EADDRNOTAVAIL,
      EAFNOSUPPORT: exports.WASI_EAFNOSUPPORT,
      EALREADY: exports.WASI_EALREADY,
      EAGAIN: exports.WASI_EAGAIN,
      // EBADE: WASI_EBADE,
      EBADF: exports.WASI_EBADF,
      // EBADFD: WASI_EBADFD,
      EBADMSG: exports.WASI_EBADMSG,
      // EBADR: WASI_EBADR,
      // EBADRQC: WASI_EBADRQC,
      // EBADSLT: WASI_EBADSLT,
      EBUSY: exports.WASI_EBUSY,
      ECANCELED: exports.WASI_ECANCELED,
      ECHILD: exports.WASI_ECHILD,
      // ECHRNG: WASI_ECHRNG,
      // ECOMM: WASI_ECOMM,
      ECONNABORTED: exports.WASI_ECONNABORTED,
      ECONNREFUSED: exports.WASI_ECONNREFUSED,
      ECONNRESET: exports.WASI_ECONNRESET,
      EDEADLOCK: exports.WASI_EDEADLK,
      EDESTADDRREQ: exports.WASI_EDESTADDRREQ,
      EDOM: exports.WASI_EDOM,
      EDQUOT: exports.WASI_EDQUOT,
      EEXIST: exports.WASI_EEXIST,
      EFAULT: exports.WASI_EFAULT,
      EFBIG: exports.WASI_EFBIG,
      EHOSTDOWN: exports.WASI_EHOSTUNREACH,
      EHOSTUNREACH: exports.WASI_EHOSTUNREACH,
      // EHWPOISON: WASI_EHWPOISON,
      EIDRM: exports.WASI_EIDRM,
      EILSEQ: exports.WASI_EILSEQ,
      EINPROGRESS: exports.WASI_EINPROGRESS,
      EINTR: exports.WASI_EINTR,
      EINVAL: exports.WASI_EINVAL,
      EIO: exports.WASI_EIO,
      EISCONN: exports.WASI_EISCONN,
      EISDIR: exports.WASI_EISDIR,
      ELOOP: exports.WASI_ELOOP,
      EMFILE: exports.WASI_EMFILE,
      EMLINK: exports.WASI_EMLINK,
      EMSGSIZE: exports.WASI_EMSGSIZE,
      EMULTIHOP: exports.WASI_EMULTIHOP,
      ENAMETOOLONG: exports.WASI_ENAMETOOLONG,
      ENETDOWN: exports.WASI_ENETDOWN,
      ENETRESET: exports.WASI_ENETRESET,
      ENETUNREACH: exports.WASI_ENETUNREACH,
      ENFILE: exports.WASI_ENFILE,
      ENOBUFS: exports.WASI_ENOBUFS,
      ENODEV: exports.WASI_ENODEV,
      ENOENT: exports.WASI_ENOENT,
      ENOEXEC: exports.WASI_ENOEXEC,
      ENOLCK: exports.WASI_ENOLCK,
      ENOLINK: exports.WASI_ENOLINK,
      ENOMEM: exports.WASI_ENOMEM,
      ENOMSG: exports.WASI_ENOMSG,
      ENOPROTOOPT: exports.WASI_ENOPROTOOPT,
      ENOSPC: exports.WASI_ENOSPC,
      ENOSYS: exports.WASI_ENOSYS,
      ENOTCONN: exports.WASI_ENOTCONN,
      ENOTDIR: exports.WASI_ENOTDIR,
      ENOTEMPTY: exports.WASI_ENOTEMPTY,
      ENOTRECOVERABLE: exports.WASI_ENOTRECOVERABLE,
      ENOTSOCK: exports.WASI_ENOTSOCK,
      ENOTTY: exports.WASI_ENOTTY,
      ENXIO: exports.WASI_ENXIO,
      EOVERFLOW: exports.WASI_EOVERFLOW,
      EOWNERDEAD: exports.WASI_EOWNERDEAD,
      EPERM: exports.WASI_EPERM,
      EPIPE: exports.WASI_EPIPE,
      EPROTO: exports.WASI_EPROTO,
      EPROTONOSUPPORT: exports.WASI_EPROTONOSUPPORT,
      EPROTOTYPE: exports.WASI_EPROTOTYPE,
      ERANGE: exports.WASI_ERANGE,
      EROFS: exports.WASI_EROFS,
      ESPIPE: exports.WASI_ESPIPE,
      ESRCH: exports.WASI_ESRCH,
      ESTALE: exports.WASI_ESTALE,
      ETIMEDOUT: exports.WASI_ETIMEDOUT,
      ETXTBSY: exports.WASI_ETXTBSY,
      EXDEV: exports.WASI_EXDEV
    };
    exports.SIGNAL_MAP = {
      [exports.WASI_SIGHUP]: __abx$10a4bb(121),
      [exports.WASI_SIGINT]: __abx$10a4bb(122),
      [exports.WASI_SIGQUIT]: __abx$10a4bb(123),
      [exports.WASI_SIGILL]: __abx$10a4bb(124),
      [exports.WASI_SIGTRAP]: __abx$10a4bb(125),
      [exports.WASI_SIGABRT]: __abx$10a4bb(126),
      [exports.WASI_SIGBUS]: __abx$10a4bb(127),
      [exports.WASI_SIGFPE]: __abx$10a4bb(128),
      [exports.WASI_SIGKILL]: __abx$10a4bb(129),
      [exports.WASI_SIGUSR1]: __abx$10a4bb(130),
      [exports.WASI_SIGSEGV]: __abx$10a4bb(131),
      [exports.WASI_SIGUSR2]: __abx$10a4bb(132),
      [exports.WASI_SIGPIPE]: __abx$10a4bb(133),
      [exports.WASI_SIGALRM]: __abx$10a4bb(134),
      [exports.WASI_SIGTERM]: __abx$10a4bb(135),
      [exports.WASI_SIGCHLD]: __abx$10a4bb(136),
      [exports.WASI_SIGCONT]: __abx$10a4bb(137),
      [exports.WASI_SIGSTOP]: __abx$10a4bb(138),
      [exports.WASI_SIGTSTP]: __abx$10a4bb(139),
      [exports.WASI_SIGTTIN]: __abx$10a4bb(140),
      [exports.WASI_SIGTTOU]: __abx$10a4bb(141),
      [exports.WASI_SIGURG]: __abx$10a4bb(142),
      [exports.WASI_SIGXCPU]: __abx$10a4bb(143),
      [exports.WASI_SIGXFSZ]: __abx$10a4bb(144),
      [exports.WASI_SIGVTALRM]: __abx$10a4bb(145)
    };
  })(constants);
  return constants;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  Object.defineProperty(lib, __abx$10a4bb(164), { value: true });
  const bigint_1 = requireBigint();
  const dataview_1 = requireDataview();
  const buffer_1 = requireBuffer();
  let defaultBindings;
  const constants_1 = requireConstants();
  const STDIN_DEFAULT_RIGHTS = constants_1.WASI_RIGHT_FD_DATASYNC | constants_1.WASI_RIGHT_FD_READ | constants_1.WASI_RIGHT_FD_SYNC | constants_1.WASI_RIGHT_FD_ADVISE | constants_1.WASI_RIGHT_FD_FILESTAT_GET | constants_1.WASI_RIGHT_POLL_FD_READWRITE;
  const STDOUT_DEFAULT_RIGHTS = constants_1.WASI_RIGHT_FD_DATASYNC | constants_1.WASI_RIGHT_FD_WRITE | constants_1.WASI_RIGHT_FD_SYNC | constants_1.WASI_RIGHT_FD_ADVISE | constants_1.WASI_RIGHT_FD_FILESTAT_GET | constants_1.WASI_RIGHT_POLL_FD_READWRITE;
  const STDERR_DEFAULT_RIGHTS = STDOUT_DEFAULT_RIGHTS;
  const msToNs = (ms) => {
    const msInt = Math.trunc(ms);
    const decimal = bigint_1.BigIntPolyfill(Math.round((ms - msInt) * 1e6));
    const ns = bigint_1.BigIntPolyfill(msInt) * bigint_1.BigIntPolyfill(1e6);
    return ns + decimal;
  };
  const nsToMs = (ns) => {
    if (typeof ns === __abx$10a4bb(17)) {
      ns = Math.trunc(ns);
    }
    const nsInt = bigint_1.BigIntPolyfill(ns);
    return Number(nsInt / bigint_1.BigIntPolyfill(1e6));
  };
  const wrap = (f) => (...args2) => {
    try {
      return f(...args2);
    } catch (e) {
      if (e && e.code && typeof e.code === __abx$10a4bb(18)) {
        return constants_1.ERROR_MAP[e.code] || constants_1.WASI_EINVAL;
      }
      if (e instanceof WASIError) {
        return e.errno;
      }
      throw e;
    }
  };
  const stat = (wasi, fd2) => {
    const entry = wasi.FD_MAP.get(fd2);
    if (!entry) {
      throw new WASIError(constants_1.WASI_EBADF);
    }
    if (entry.filetype === void 0) {
      const stats = wasi.bindings.fs.fstatSync(entry.real);
      const { filetype, rightsBase, rightsInheriting } = translateFileAttributes(wasi, fd2, stats);
      entry.filetype = filetype;
      if (!entry.rights) {
        entry.rights = {
          base: rightsBase,
          inheriting: rightsInheriting
        };
      }
    }
    return entry;
  };
  const translateFileAttributes = (wasi, fd2, stats) => {
    switch (true) {
      case stats.isBlockDevice():
        return {
          filetype: constants_1.WASI_FILETYPE_BLOCK_DEVICE,
          rightsBase: constants_1.RIGHTS_BLOCK_DEVICE_BASE,
          rightsInheriting: constants_1.RIGHTS_BLOCK_DEVICE_INHERITING
        };
      case stats.isCharacterDevice(): {
        const filetype = constants_1.WASI_FILETYPE_CHARACTER_DEVICE;
        if (fd2 !== void 0 && wasi.bindings.isTTY(fd2)) {
          return {
            filetype,
            rightsBase: constants_1.RIGHTS_TTY_BASE,
            rightsInheriting: constants_1.RIGHTS_TTY_INHERITING
          };
        }
        return {
          filetype,
          rightsBase: constants_1.RIGHTS_CHARACTER_DEVICE_BASE,
          rightsInheriting: constants_1.RIGHTS_CHARACTER_DEVICE_INHERITING
        };
      }
      case stats.isDirectory():
        return {
          filetype: constants_1.WASI_FILETYPE_DIRECTORY,
          rightsBase: constants_1.RIGHTS_DIRECTORY_BASE,
          rightsInheriting: constants_1.RIGHTS_DIRECTORY_INHERITING
        };
      case stats.isFIFO():
        return {
          filetype: constants_1.WASI_FILETYPE_SOCKET_STREAM,
          rightsBase: constants_1.RIGHTS_SOCKET_BASE,
          rightsInheriting: constants_1.RIGHTS_SOCKET_INHERITING
        };
      case stats.isFile():
        return {
          filetype: constants_1.WASI_FILETYPE_REGULAR_FILE,
          rightsBase: constants_1.RIGHTS_REGULAR_FILE_BASE,
          rightsInheriting: constants_1.RIGHTS_REGULAR_FILE_INHERITING
        };
      case stats.isSocket():
        return {
          filetype: constants_1.WASI_FILETYPE_SOCKET_STREAM,
          rightsBase: constants_1.RIGHTS_SOCKET_BASE,
          rightsInheriting: constants_1.RIGHTS_SOCKET_INHERITING
        };
      case stats.isSymbolicLink():
        return {
          filetype: constants_1.WASI_FILETYPE_SYMBOLIC_LINK,
          rightsBase: bigint_1.BigIntPolyfill(0),
          rightsInheriting: bigint_1.BigIntPolyfill(0)
        };
      default:
        return {
          filetype: constants_1.WASI_FILETYPE_UNKNOWN,
          rightsBase: bigint_1.BigIntPolyfill(0),
          rightsInheriting: bigint_1.BigIntPolyfill(0)
        };
    }
  };
  class WASIError extends Error {
    constructor(errno) {
      super();
      this.errno = errno;
      Object.setPrototypeOf(this, WASIError.prototype);
    }
  }
  lib.WASIError = WASIError;
  class WASIExitError extends Error {
    constructor(code) {
      super((__abx$10a4bb(146)+String(code)+__abx$10a4bb(7)));
      this.code = code;
      Object.setPrototypeOf(this, WASIExitError.prototype);
    }
  }
  lib.WASIExitError = WASIExitError;
  class WASIKillError extends Error {
    constructor(signal) {
      super((__abx$10a4bb(147)+String(signal)+__abx$10a4bb(7)));
      this.signal = signal;
      Object.setPrototypeOf(this, WASIKillError.prototype);
    }
  }
  lib.WASIKillError = WASIKillError;
  class WASIDefault {
    constructor(wasiConfig) {
      let preopens = {};
      if (wasiConfig && wasiConfig.preopens) {
        preopens = wasiConfig.preopens;
      } else if (wasiConfig && wasiConfig.preopenDirectories) {
        preopens = wasiConfig.preopenDirectories;
      }
      let env = {};
      if (wasiConfig && wasiConfig.env) {
        env = wasiConfig.env;
      }
      let args2 = [];
      if (wasiConfig && wasiConfig.args) {
        args2 = wasiConfig.args;
      }
      let bindings = defaultBindings;
      if (wasiConfig && wasiConfig.bindings) {
        bindings = wasiConfig.bindings;
      }
      this.memory = void 0;
      this.view = void 0;
      this.bindings = bindings;
      this.FD_MAP = /* @__PURE__ */ new Map([
        [
          constants_1.WASI_STDIN_FILENO,
          {
            real: 0,
            filetype: constants_1.WASI_FILETYPE_CHARACTER_DEVICE,
            // offset: BigInt(0),
            rights: {
              base: STDIN_DEFAULT_RIGHTS,
              inheriting: bigint_1.BigIntPolyfill(0)
            },
            path: void 0
          }
        ],
        [
          constants_1.WASI_STDOUT_FILENO,
          {
            real: 1,
            filetype: constants_1.WASI_FILETYPE_CHARACTER_DEVICE,
            // offset: BigInt(0),
            rights: {
              base: STDOUT_DEFAULT_RIGHTS,
              inheriting: bigint_1.BigIntPolyfill(0)
            },
            path: void 0
          }
        ],
        [
          constants_1.WASI_STDERR_FILENO,
          {
            real: 2,
            filetype: constants_1.WASI_FILETYPE_CHARACTER_DEVICE,
            // offset: BigInt(0),
            rights: {
              base: STDERR_DEFAULT_RIGHTS,
              inheriting: bigint_1.BigIntPolyfill(0)
            },
            path: void 0
          }
        ]
      ]);
      let fs = this.bindings.fs;
      let path = this.bindings.path;
      for (const [k2, v2] of Object.entries(preopens)) {
        const real = fs.openSync(v2, fs.constants.O_RDONLY);
        const newfd = [...this.FD_MAP.keys()].reverse()[0] + 1;
        this.FD_MAP.set(newfd, {
          real,
          filetype: constants_1.WASI_FILETYPE_DIRECTORY,
          // offset: BigInt(0),
          rights: {
            base: constants_1.RIGHTS_DIRECTORY_BASE,
            inheriting: constants_1.RIGHTS_DIRECTORY_INHERITING
          },
          fakePath: k2,
          path: v2
        });
      }
      const getiovs = (iovs, iovsLen) => {
        this.refreshMemory();
        const buffers = Array.from({ length: iovsLen }, (_, i) => {
          const ptr = iovs + i * 8;
          const buf = this.view.getUint32(ptr, true);
          const bufLen = this.view.getUint32(ptr + 4, true);
          return new Uint8Array(this.memory.buffer, buf, bufLen);
        });
        return buffers;
      };
      const CHECK_FD = (fd2, rights) => {
        const stats = stat(this, fd2);
        if (rights !== bigint_1.BigIntPolyfill(0) && (stats.rights.base & rights) === bigint_1.BigIntPolyfill(0)) {
          throw new WASIError(constants_1.WASI_EPERM);
        }
        return stats;
      };
      const CPUTIME_START = bindings.hrtime();
      const now = (clockId) => {
        switch (clockId) {
          case constants_1.WASI_CLOCK_MONOTONIC:
            return bindings.hrtime();
          case constants_1.WASI_CLOCK_REALTIME:
            return msToNs(Date.now());
          case constants_1.WASI_CLOCK_PROCESS_CPUTIME_ID:
          case constants_1.WASI_CLOCK_THREAD_CPUTIME_ID:
            return bindings.hrtime() - CPUTIME_START;
          default:
            return null;
        }
      };
      this.wasiImport = {
        args_get: (argv, argvBuf) => {
          this.refreshMemory();
          let coffset = argv;
          let offset = argvBuf;
          args2.forEach((a) => {
            this.view.setUint32(coffset, offset, true);
            coffset += 4;
            offset += buffer_1.default.from(this.memory.buffer).write((__abx$10a4bb(7)+String(a)+__abx$10a4bb(148)), offset);
          });
          return constants_1.WASI_ESUCCESS;
        },
        args_sizes_get: (argc, argvBufSize) => {
          this.refreshMemory();
          this.view.setUint32(argc, args2.length, true);
          const size = args2.reduce((acc, a) => acc + buffer_1.default.byteLength(a) + 1, 0);
          this.view.setUint32(argvBufSize, size, true);
          return constants_1.WASI_ESUCCESS;
        },
        environ_get: (environ, environBuf) => {
          this.refreshMemory();
          let coffset = environ;
          let offset = environBuf;
          Object.entries(env).forEach(([key, value]) => {
            this.view.setUint32(coffset, offset, true);
            coffset += 4;
            offset += buffer_1.default.from(this.memory.buffer).write((__abx$10a4bb(7)+String(key)+__abx$10a4bb(6)+String(value)+__abx$10a4bb(148)), offset);
          });
          return constants_1.WASI_ESUCCESS;
        },
        environ_sizes_get: (environCount, environBufSize) => {
          this.refreshMemory();
          const envProcessed = Object.entries(env).map(([key, value]) => (__abx$10a4bb(7)+String(key)+__abx$10a4bb(6)+String(value)+__abx$10a4bb(148)));
          const size = envProcessed.reduce((acc, e) => acc + buffer_1.default.byteLength(e), 0);
          this.view.setUint32(environCount, envProcessed.length, true);
          this.view.setUint32(environBufSize, size, true);
          return constants_1.WASI_ESUCCESS;
        },
        clock_res_get: (clockId, resolution) => {
          let res;
          switch (clockId) {
            case constants_1.WASI_CLOCK_MONOTONIC:
            case constants_1.WASI_CLOCK_PROCESS_CPUTIME_ID:
            case constants_1.WASI_CLOCK_THREAD_CPUTIME_ID: {
              res = bigint_1.BigIntPolyfill(1);
              break;
            }
            case constants_1.WASI_CLOCK_REALTIME: {
              res = bigint_1.BigIntPolyfill(1e3);
              break;
            }
          }
          this.view.setBigUint64(resolution, res);
          return constants_1.WASI_ESUCCESS;
        },
        clock_time_get: (clockId, precision, time) => {
          this.refreshMemory();
          const n = now(clockId);
          if (n === null) {
            return constants_1.WASI_EINVAL;
          }
          this.view.setBigUint64(time, bigint_1.BigIntPolyfill(n), true);
          return constants_1.WASI_ESUCCESS;
        },
        fd_advise: wrap((fd2, offset, len, advice) => {
          CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_ADVISE);
          return constants_1.WASI_ENOSYS;
        }),
        fd_allocate: wrap((fd2, offset, len) => {
          CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_ALLOCATE);
          return constants_1.WASI_ENOSYS;
        }),
        fd_close: wrap((fd2) => {
          const stats = CHECK_FD(fd2, bigint_1.BigIntPolyfill(0));
          fs.closeSync(stats.real);
          this.FD_MAP.delete(fd2);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_datasync: wrap((fd2) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_DATASYNC);
          fs.fdatasyncSync(stats.real);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_fdstat_get: wrap((fd2, bufPtr) => {
          const stats = CHECK_FD(fd2, bigint_1.BigIntPolyfill(0));
          this.refreshMemory();
          this.view.setUint8(bufPtr, stats.filetype);
          this.view.setUint16(bufPtr + 2, 0, true);
          this.view.setUint16(bufPtr + 4, 0, true);
          this.view.setBigUint64(bufPtr + 8, bigint_1.BigIntPolyfill(stats.rights.base), true);
          this.view.setBigUint64(bufPtr + 8 + 8, bigint_1.BigIntPolyfill(stats.rights.inheriting), true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_fdstat_set_flags: wrap((fd2, flags) => {
          CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_FDSTAT_SET_FLAGS);
          return constants_1.WASI_ENOSYS;
        }),
        fd_fdstat_set_rights: wrap((fd2, fsRightsBase, fsRightsInheriting) => {
          const stats = CHECK_FD(fd2, bigint_1.BigIntPolyfill(0));
          const nrb = stats.rights.base | fsRightsBase;
          if (nrb > stats.rights.base) {
            return constants_1.WASI_EPERM;
          }
          const nri = stats.rights.inheriting | fsRightsInheriting;
          if (nri > stats.rights.inheriting) {
            return constants_1.WASI_EPERM;
          }
          stats.rights.base = fsRightsBase;
          stats.rights.inheriting = fsRightsInheriting;
          return constants_1.WASI_ESUCCESS;
        }),
        fd_filestat_get: wrap((fd2, bufPtr) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_FILESTAT_GET);
          const rstats = fs.fstatSync(stats.real);
          this.refreshMemory();
          this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(rstats.dev), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(rstats.ino), true);
          bufPtr += 8;
          this.view.setUint8(bufPtr, stats.filetype);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(rstats.nlink), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(rstats.size), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, msToNs(rstats.atimeMs), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, msToNs(rstats.mtimeMs), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, msToNs(rstats.ctimeMs), true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_filestat_set_size: wrap((fd2, stSize) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_FILESTAT_SET_SIZE);
          fs.ftruncateSync(stats.real, Number(stSize));
          return constants_1.WASI_ESUCCESS;
        }),
        fd_filestat_set_times: wrap((fd2, stAtim, stMtim, fstflags) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_FILESTAT_SET_TIMES);
          const rstats = fs.fstatSync(stats.real);
          let atim = rstats.atime;
          let mtim = rstats.mtime;
          const n = nsToMs(now(constants_1.WASI_CLOCK_REALTIME));
          const atimflags = constants_1.WASI_FILESTAT_SET_ATIM | constants_1.WASI_FILESTAT_SET_ATIM_NOW;
          if ((fstflags & atimflags) === atimflags) {
            return constants_1.WASI_EINVAL;
          }
          const mtimflags = constants_1.WASI_FILESTAT_SET_MTIM | constants_1.WASI_FILESTAT_SET_MTIM_NOW;
          if ((fstflags & mtimflags) === mtimflags) {
            return constants_1.WASI_EINVAL;
          }
          if ((fstflags & constants_1.WASI_FILESTAT_SET_ATIM) === constants_1.WASI_FILESTAT_SET_ATIM) {
            atim = nsToMs(stAtim);
          } else if ((fstflags & constants_1.WASI_FILESTAT_SET_ATIM_NOW) === constants_1.WASI_FILESTAT_SET_ATIM_NOW) {
            atim = n;
          }
          if ((fstflags & constants_1.WASI_FILESTAT_SET_MTIM) === constants_1.WASI_FILESTAT_SET_MTIM) {
            mtim = nsToMs(stMtim);
          } else if ((fstflags & constants_1.WASI_FILESTAT_SET_MTIM_NOW) === constants_1.WASI_FILESTAT_SET_MTIM_NOW) {
            mtim = n;
          }
          fs.futimesSync(stats.real, new Date(atim), new Date(mtim));
          return constants_1.WASI_ESUCCESS;
        }),
        fd_prestat_get: wrap((fd2, bufPtr) => {
          const stats = CHECK_FD(fd2, bigint_1.BigIntPolyfill(0));
          if (!stats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          this.view.setUint8(bufPtr, constants_1.WASI_PREOPENTYPE_DIR);
          this.view.setUint32(bufPtr + 4, buffer_1.default.byteLength(stats.fakePath), true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_prestat_dir_name: wrap((fd2, pathPtr, pathLen) => {
          const stats = CHECK_FD(fd2, bigint_1.BigIntPolyfill(0));
          if (!stats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          buffer_1.default.from(this.memory.buffer).write(stats.fakePath, pathPtr, pathLen, __abx$10a4bb(23));
          return constants_1.WASI_ESUCCESS;
        }),
        fd_pwrite: wrap((fd2, iovs, iovsLen, offset, nwritten) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_WRITE | constants_1.WASI_RIGHT_FD_SEEK);
          let written = 0;
          getiovs(iovs, iovsLen).forEach((iov) => {
            let w2 = 0;
            while (w2 < iov.byteLength) {
              w2 += fs.writeSync(stats.real, iov, w2, iov.byteLength - w2, Number(offset) + written + w2);
            }
            written += w2;
          });
          this.view.setUint32(nwritten, written, true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_write: wrap((fd2, iovs, iovsLen, nwritten) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_WRITE);
          let written = 0;
          getiovs(iovs, iovsLen).forEach((iov) => {
            let w2 = 0;
            while (w2 < iov.byteLength) {
              const i = fs.writeSync(stats.real, iov, w2, iov.byteLength - w2, stats.offset ? Number(stats.offset) : null);
              if (stats.offset)
                stats.offset += bigint_1.BigIntPolyfill(i);
              w2 += i;
            }
            written += w2;
          });
          this.view.setUint32(nwritten, written, true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_pread: wrap((fd2, iovs, iovsLen, offset, nread) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_READ | constants_1.WASI_RIGHT_FD_SEEK);
          let read = 0;
          outer: for (const iov of getiovs(iovs, iovsLen)) {
            let r = 0;
            while (r < iov.byteLength) {
              const length = iov.byteLength - r;
              const rr = fs.readSync(stats.real, iov, r, iov.byteLength - r, Number(offset) + read + r);
              r += rr;
              read += rr;
              if (rr === 0 || rr < length) {
                break outer;
              }
            }
            read += r;
          }
          ;
          this.view.setUint32(nread, read, true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_read: wrap((fd2, iovs, iovsLen, nread) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_READ);
          const IS_STDIN = stats.real === 0;
          let read = 0;
          outer: for (const iov of getiovs(iovs, iovsLen)) {
            let r = 0;
            while (r < iov.byteLength) {
              let length = iov.byteLength - r;
              let position = IS_STDIN || stats.offset === void 0 ? null : Number(stats.offset);
              let rr = fs.readSync(
                stats.real,
                // fd
                iov,
                // buffer
                r,
                // offset
                length,
                // length
                position
                // position
              );
              if (!IS_STDIN) {
                stats.offset = (stats.offset ? stats.offset : bigint_1.BigIntPolyfill(0)) + bigint_1.BigIntPolyfill(rr);
              }
              r += rr;
              read += rr;
              if (rr === 0 || rr < length) {
                break outer;
              }
            }
          }
          this.view.setUint32(nread, read, true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_readdir: wrap((fd2, bufPtr, bufLen, cookie, bufusedPtr) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_READDIR);
          this.refreshMemory();
          const entries = fs.readdirSync(stats.path, { withFileTypes: true });
          const startPtr = bufPtr;
          for (let i = Number(cookie); i < entries.length; i += 1) {
            const entry = entries[i];
            let nameLength = buffer_1.default.byteLength(entry.name);
            if (bufPtr - startPtr > bufLen) {
              break;
            }
            this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(i + 1), true);
            bufPtr += 8;
            if (bufPtr - startPtr > bufLen) {
              break;
            }
            const rstats = fs.statSync(path.resolve(stats.path, entry.name));
            this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(rstats.ino), true);
            bufPtr += 8;
            if (bufPtr - startPtr > bufLen) {
              break;
            }
            this.view.setUint32(bufPtr, nameLength, true);
            bufPtr += 4;
            if (bufPtr - startPtr > bufLen) {
              break;
            }
            let filetype;
            switch (true) {
              case rstats.isBlockDevice():
                filetype = constants_1.WASI_FILETYPE_BLOCK_DEVICE;
                break;
              case rstats.isCharacterDevice():
                filetype = constants_1.WASI_FILETYPE_CHARACTER_DEVICE;
                break;
              case rstats.isDirectory():
                filetype = constants_1.WASI_FILETYPE_DIRECTORY;
                break;
              case rstats.isFIFO():
                filetype = constants_1.WASI_FILETYPE_SOCKET_STREAM;
                break;
              case rstats.isFile():
                filetype = constants_1.WASI_FILETYPE_REGULAR_FILE;
                break;
              case rstats.isSocket():
                filetype = constants_1.WASI_FILETYPE_SOCKET_STREAM;
                break;
              case rstats.isSymbolicLink():
                filetype = constants_1.WASI_FILETYPE_SYMBOLIC_LINK;
                break;
              default:
                filetype = constants_1.WASI_FILETYPE_UNKNOWN;
                break;
            }
            this.view.setUint8(bufPtr, filetype);
            bufPtr += 1;
            bufPtr += 3;
            if (bufPtr + nameLength >= startPtr + bufLen) {
              break;
            }
            let memory_buffer = buffer_1.default.from(this.memory.buffer);
            memory_buffer.write(entry.name, bufPtr);
            bufPtr += nameLength;
          }
          const bufused = bufPtr - startPtr;
          this.view.setUint32(bufusedPtr, Math.min(bufused, bufLen), true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_renumber: wrap((from, to) => {
          CHECK_FD(from, bigint_1.BigIntPolyfill(0));
          CHECK_FD(to, bigint_1.BigIntPolyfill(0));
          fs.closeSync(this.FD_MAP.get(from).real);
          this.FD_MAP.set(from, this.FD_MAP.get(to));
          this.FD_MAP.delete(to);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_seek: wrap((fd2, offset, whence, newOffsetPtr) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_SEEK);
          this.refreshMemory();
          switch (whence) {
            case constants_1.WASI_WHENCE_CUR:
              stats.offset = (stats.offset ? stats.offset : bigint_1.BigIntPolyfill(0)) + bigint_1.BigIntPolyfill(offset);
              break;
            case constants_1.WASI_WHENCE_END:
              const { size } = fs.fstatSync(stats.real);
              stats.offset = bigint_1.BigIntPolyfill(size) + bigint_1.BigIntPolyfill(offset);
              break;
            case constants_1.WASI_WHENCE_SET:
              stats.offset = bigint_1.BigIntPolyfill(offset);
              break;
          }
          this.view.setBigUint64(newOffsetPtr, stats.offset, true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_tell: wrap((fd2, offsetPtr) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_TELL);
          this.refreshMemory();
          if (!stats.offset) {
            stats.offset = bigint_1.BigIntPolyfill(0);
          }
          this.view.setBigUint64(offsetPtr, stats.offset, true);
          return constants_1.WASI_ESUCCESS;
        }),
        fd_sync: wrap((fd2) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_FD_SYNC);
          fs.fsyncSync(stats.real);
          return constants_1.WASI_ESUCCESS;
        }),
        path_create_directory: wrap((fd2, pathPtr, pathLen) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_PATH_CREATE_DIRECTORY);
          if (!stats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          const p = buffer_1.default.from(this.memory.buffer, pathPtr, pathLen).toString();
          fs.mkdirSync(path.resolve(stats.path, p));
          return constants_1.WASI_ESUCCESS;
        }),
        path_filestat_get: wrap((fd2, flags, pathPtr, pathLen, bufPtr) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_PATH_FILESTAT_GET);
          if (!stats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          const p = buffer_1.default.from(this.memory.buffer, pathPtr, pathLen).toString();
          const rstats = fs.statSync(path.resolve(stats.path, p));
          this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(rstats.dev), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(rstats.ino), true);
          bufPtr += 8;
          this.view.setUint8(bufPtr, translateFileAttributes(this, void 0, rstats).filetype);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(rstats.nlink), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, bigint_1.BigIntPolyfill(rstats.size), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, msToNs(rstats.atimeMs), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, msToNs(rstats.mtimeMs), true);
          bufPtr += 8;
          this.view.setBigUint64(bufPtr, msToNs(rstats.ctimeMs), true);
          return constants_1.WASI_ESUCCESS;
        }),
        path_filestat_set_times: wrap((fd2, dirflags, pathPtr, pathLen, stAtim, stMtim, fstflags) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_PATH_FILESTAT_SET_TIMES);
          if (!stats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          const rstats = fs.fstatSync(stats.real);
          let atim = rstats.atime;
          let mtim = rstats.mtime;
          const n = nsToMs(now(constants_1.WASI_CLOCK_REALTIME));
          const atimflags = constants_1.WASI_FILESTAT_SET_ATIM | constants_1.WASI_FILESTAT_SET_ATIM_NOW;
          if ((fstflags & atimflags) === atimflags) {
            return constants_1.WASI_EINVAL;
          }
          const mtimflags = constants_1.WASI_FILESTAT_SET_MTIM | constants_1.WASI_FILESTAT_SET_MTIM_NOW;
          if ((fstflags & mtimflags) === mtimflags) {
            return constants_1.WASI_EINVAL;
          }
          if ((fstflags & constants_1.WASI_FILESTAT_SET_ATIM) === constants_1.WASI_FILESTAT_SET_ATIM) {
            atim = nsToMs(stAtim);
          } else if ((fstflags & constants_1.WASI_FILESTAT_SET_ATIM_NOW) === constants_1.WASI_FILESTAT_SET_ATIM_NOW) {
            atim = n;
          }
          if ((fstflags & constants_1.WASI_FILESTAT_SET_MTIM) === constants_1.WASI_FILESTAT_SET_MTIM) {
            mtim = nsToMs(stMtim);
          } else if ((fstflags & constants_1.WASI_FILESTAT_SET_MTIM_NOW) === constants_1.WASI_FILESTAT_SET_MTIM_NOW) {
            mtim = n;
          }
          const p = buffer_1.default.from(this.memory.buffer, pathPtr, pathLen).toString();
          fs.utimesSync(path.resolve(stats.path, p), new Date(atim), new Date(mtim));
          return constants_1.WASI_ESUCCESS;
        }),
        path_link: wrap((oldFd, oldFlags, oldPath, oldPathLen, newFd, newPath, newPathLen) => {
          const ostats = CHECK_FD(oldFd, constants_1.WASI_RIGHT_PATH_LINK_SOURCE);
          const nstats = CHECK_FD(newFd, constants_1.WASI_RIGHT_PATH_LINK_TARGET);
          if (!ostats.path || !nstats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          const op = buffer_1.default.from(this.memory.buffer, oldPath, oldPathLen).toString();
          const np = buffer_1.default.from(this.memory.buffer, newPath, newPathLen).toString();
          fs.linkSync(path.resolve(ostats.path, op), path.resolve(nstats.path, np));
          return constants_1.WASI_ESUCCESS;
        }),
        path_open: wrap((dirfd, dirflags, pathPtr, pathLen, oflags, fsRightsBase, fsRightsInheriting, fsFlags, fd2) => {
          const stats = CHECK_FD(dirfd, constants_1.WASI_RIGHT_PATH_OPEN);
          fsRightsBase = bigint_1.BigIntPolyfill(fsRightsBase);
          fsRightsInheriting = bigint_1.BigIntPolyfill(fsRightsInheriting);
          const read = (fsRightsBase & (constants_1.WASI_RIGHT_FD_READ | constants_1.WASI_RIGHT_FD_READDIR)) !== bigint_1.BigIntPolyfill(0);
          const write = (fsRightsBase & (constants_1.WASI_RIGHT_FD_DATASYNC | constants_1.WASI_RIGHT_FD_WRITE | constants_1.WASI_RIGHT_FD_ALLOCATE | constants_1.WASI_RIGHT_FD_FILESTAT_SET_SIZE)) !== bigint_1.BigIntPolyfill(0);
          let noflags;
          if (write && read) {
            noflags = fs.constants.O_RDWR;
          } else if (read) {
            noflags = fs.constants.O_RDONLY;
          } else if (write) {
            noflags = fs.constants.O_WRONLY;
          }
          let neededBase = fsRightsBase | constants_1.WASI_RIGHT_PATH_OPEN;
          let neededInheriting = fsRightsBase | fsRightsInheriting;
          if ((oflags & constants_1.WASI_O_CREAT) !== 0) {
            noflags |= fs.constants.O_CREAT;
            neededBase |= constants_1.WASI_RIGHT_PATH_CREATE_FILE;
          }
          if ((oflags & constants_1.WASI_O_DIRECTORY) !== 0) {
            noflags |= fs.constants.O_DIRECTORY;
          }
          if ((oflags & constants_1.WASI_O_EXCL) !== 0) {
            noflags |= fs.constants.O_EXCL;
          }
          if ((oflags & constants_1.WASI_O_TRUNC) !== 0) {
            noflags |= fs.constants.O_TRUNC;
            neededBase |= constants_1.WASI_RIGHT_PATH_FILESTAT_SET_SIZE;
          }
          if ((fsFlags & constants_1.WASI_FDFLAG_APPEND) !== 0) {
            noflags |= fs.constants.O_APPEND;
          }
          if ((fsFlags & constants_1.WASI_FDFLAG_DSYNC) !== 0) {
            if (fs.constants.O_DSYNC) {
              noflags |= fs.constants.O_DSYNC;
            } else {
              noflags |= fs.constants.O_SYNC;
            }
            neededInheriting |= constants_1.WASI_RIGHT_FD_DATASYNC;
          }
          if ((fsFlags & constants_1.WASI_FDFLAG_NONBLOCK) !== 0) {
            noflags |= fs.constants.O_NONBLOCK;
          }
          if ((fsFlags & constants_1.WASI_FDFLAG_RSYNC) !== 0) {
            if (fs.constants.O_RSYNC) {
              noflags |= fs.constants.O_RSYNC;
            } else {
              noflags |= fs.constants.O_SYNC;
            }
            neededInheriting |= constants_1.WASI_RIGHT_FD_SYNC;
          }
          if ((fsFlags & constants_1.WASI_FDFLAG_SYNC) !== 0) {
            noflags |= fs.constants.O_SYNC;
            neededInheriting |= constants_1.WASI_RIGHT_FD_SYNC;
          }
          if (write && (noflags & (fs.constants.O_APPEND | fs.constants.O_TRUNC)) === 0) {
            neededInheriting |= constants_1.WASI_RIGHT_FD_SEEK;
          }
          this.refreshMemory();
          const p = buffer_1.default.from(this.memory.buffer, pathPtr, pathLen).toString();
          const fullUnresolved = path.resolve(stats.path, p);
          if (path.relative(stats.path, fullUnresolved).startsWith(__abx$10a4bb(114))) {
            return constants_1.WASI_ENOTCAPABLE;
          }
          let full;
          try {
            full = fs.realpathSync(fullUnresolved);
            if (path.relative(stats.path, full).startsWith(__abx$10a4bb(114))) {
              return constants_1.WASI_ENOTCAPABLE;
            }
          } catch (e) {
            if (e.code === __abx$10a4bb(149)) {
              full = fullUnresolved;
            } else {
              throw e;
            }
          }
          let isDirectory;
          try {
            isDirectory = fs.statSync(full).isDirectory();
          } catch (e) {
          }
          let realfd;
          if (!write && isDirectory) {
            realfd = fs.openSync(full, fs.constants.O_RDONLY);
          } else {
            realfd = fs.openSync(full, noflags);
          }
          const newfd = [...this.FD_MAP.keys()].reverse()[0] + 1;
          this.FD_MAP.set(newfd, {
            real: realfd,
            filetype: void 0,
            // offset: BigInt(0),
            rights: {
              base: neededBase,
              inheriting: neededInheriting
            },
            path: full
          });
          stat(this, newfd);
          this.view.setUint32(fd2, newfd, true);
          return constants_1.WASI_ESUCCESS;
        }),
        path_readlink: wrap((fd2, pathPtr, pathLen, buf, bufLen, bufused) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_PATH_READLINK);
          if (!stats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          const p = buffer_1.default.from(this.memory.buffer, pathPtr, pathLen).toString();
          const full = path.resolve(stats.path, p);
          const r = fs.readlinkSync(full);
          const used = buffer_1.default.from(this.memory.buffer).write(r, buf, bufLen);
          this.view.setUint32(bufused, used, true);
          return constants_1.WASI_ESUCCESS;
        }),
        path_remove_directory: wrap((fd2, pathPtr, pathLen) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_PATH_REMOVE_DIRECTORY);
          if (!stats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          const p = buffer_1.default.from(this.memory.buffer, pathPtr, pathLen).toString();
          fs.rmdirSync(path.resolve(stats.path, p));
          return constants_1.WASI_ESUCCESS;
        }),
        path_rename: wrap((oldFd, oldPath, oldPathLen, newFd, newPath, newPathLen) => {
          const ostats = CHECK_FD(oldFd, constants_1.WASI_RIGHT_PATH_RENAME_SOURCE);
          const nstats = CHECK_FD(newFd, constants_1.WASI_RIGHT_PATH_RENAME_TARGET);
          if (!ostats.path || !nstats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          const op = buffer_1.default.from(this.memory.buffer, oldPath, oldPathLen).toString();
          const np = buffer_1.default.from(this.memory.buffer, newPath, newPathLen).toString();
          fs.renameSync(path.resolve(ostats.path, op), path.resolve(nstats.path, np));
          return constants_1.WASI_ESUCCESS;
        }),
        path_symlink: wrap((oldPath, oldPathLen, fd2, newPath, newPathLen) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_PATH_SYMLINK);
          if (!stats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          const op = buffer_1.default.from(this.memory.buffer, oldPath, oldPathLen).toString();
          const np = buffer_1.default.from(this.memory.buffer, newPath, newPathLen).toString();
          fs.symlinkSync(op, path.resolve(stats.path, np));
          return constants_1.WASI_ESUCCESS;
        }),
        path_unlink_file: wrap((fd2, pathPtr, pathLen) => {
          const stats = CHECK_FD(fd2, constants_1.WASI_RIGHT_PATH_UNLINK_FILE);
          if (!stats.path) {
            return constants_1.WASI_EINVAL;
          }
          this.refreshMemory();
          const p = buffer_1.default.from(this.memory.buffer, pathPtr, pathLen).toString();
          fs.unlinkSync(path.resolve(stats.path, p));
          return constants_1.WASI_ESUCCESS;
        }),
        poll_oneoff: (sin, sout, nsubscriptions, nevents) => {
          let eventc = 0;
          let waitEnd = 0;
          this.refreshMemory();
          for (let i = 0; i < nsubscriptions; i += 1) {
            const userdata = this.view.getBigUint64(sin, true);
            sin += 8;
            const type = this.view.getUint8(sin);
            sin += 1;
            switch (type) {
              case constants_1.WASI_EVENTTYPE_CLOCK: {
                sin += 7;
                this.view.getBigUint64(sin, true);
                sin += 8;
                const clockid = this.view.getUint32(sin, true);
                sin += 4;
                sin += 4;
                const timestamp = this.view.getBigUint64(sin, true);
                sin += 8;
                this.view.getBigUint64(sin, true);
                sin += 8;
                const subclockflags = this.view.getUint16(sin, true);
                sin += 2;
                sin += 6;
                const absolute = subclockflags === 1;
                let e = constants_1.WASI_ESUCCESS;
                const n = bigint_1.BigIntPolyfill(now(clockid));
                if (n === null) {
                  e = constants_1.WASI_EINVAL;
                } else {
                  const end = absolute ? timestamp : n + timestamp;
                  waitEnd = end > waitEnd ? end : waitEnd;
                }
                this.view.setBigUint64(sout, userdata, true);
                sout += 8;
                this.view.setUint16(sout, e, true);
                sout += 2;
                this.view.setUint8(sout, constants_1.WASI_EVENTTYPE_CLOCK);
                sout += 1;
                sout += 5;
                eventc += 1;
                break;
              }
              case constants_1.WASI_EVENTTYPE_FD_READ:
              case constants_1.WASI_EVENTTYPE_FD_WRITE: {
                sin += 3;
                this.view.getUint32(sin, true);
                sin += 4;
                this.view.setBigUint64(sout, userdata, true);
                sout += 8;
                this.view.setUint16(sout, constants_1.WASI_ENOSYS, true);
                sout += 2;
                this.view.setUint8(sout, type);
                sout += 1;
                sout += 5;
                eventc += 1;
                break;
              }
              default:
                return constants_1.WASI_EINVAL;
            }
          }
          this.view.setUint32(nevents, eventc, true);
          while (bindings.hrtime() < waitEnd) {
          }
          return constants_1.WASI_ESUCCESS;
        },
        proc_exit: (rval) => {
          bindings.exit(rval);
          return constants_1.WASI_ESUCCESS;
        },
        proc_raise: (sig) => {
          if (!(sig in constants_1.SIGNAL_MAP)) {
            return constants_1.WASI_EINVAL;
          }
          bindings.kill(constants_1.SIGNAL_MAP[sig]);
          return constants_1.WASI_ESUCCESS;
        },
        random_get: (bufPtr, bufLen) => {
          this.refreshMemory();
          bindings.randomFillSync(new Uint8Array(this.memory.buffer), bufPtr, bufLen);
          return constants_1.WASI_ESUCCESS;
        },
        sched_yield() {
          return constants_1.WASI_ESUCCESS;
        },
        sock_recv() {
          return constants_1.WASI_ENOSYS;
        },
        sock_send() {
          return constants_1.WASI_ENOSYS;
        },
        sock_shutdown() {
          return constants_1.WASI_ENOSYS;
        }
      };
      if (wasiConfig.traceSyscalls) {
        Object.keys(this.wasiImport).forEach((key) => {
          const prevImport = this.wasiImport[key];
          this.wasiImport[key] = function(...args3) {
            console.log((__abx$10a4bb(150)+String(key)+__abx$10a4bb(151)+String(args3)+__abx$10a4bb(152)));
            try {
              let result = prevImport(...args3);
              console.log((__abx$10a4bb(153)+String(result)+__abx$10a4bb(7)));
              return result;
            } catch (e) {
              console.log((__abx$10a4bb(154)+String(e)+__abx$10a4bb(7)));
              throw e;
            }
          };
        });
      }
    }
    refreshMemory() {
      if (!this.view || this.view.buffer.byteLength === 0) {
        this.view = new dataview_1.DataViewPolyfill(this.memory.buffer);
      }
    }
    setMemory(memory) {
      this.memory = memory;
    }
    start(instance) {
      const exports = instance.exports;
      if (exports === null || typeof exports !== __abx$10a4bb(118)) {
        throw new Error((__abx$10a4bb(155)+String(exports)+__abx$10a4bb(115)));
      }
      const { memory } = exports;
      if (!(memory instanceof WebAssembly.Memory)) {
        throw new Error((__abx$10a4bb(156)+String(memory)+__abx$10a4bb(115)));
      }
      this.setMemory(memory);
      if (exports._start) {
        exports._start();
      }
    }
    getImportNamespace(module) {
      let namespace = null;
      for (let imp of WebAssembly.Module.imports(module)) {
        if (imp.kind !== __abx$10a4bb(9)) {
          continue;
        }
        if (!imp.module.startsWith(__abx$10a4bb(157))) {
          continue;
        }
        if (!namespace) {
          namespace = imp.module;
        } else {
          if (namespace !== imp.module) {
            throw new Error(__abx$10a4bb(158));
          }
        }
      }
      return namespace;
    }
    getImports(module) {
      let namespace = this.getImportNamespace(module);
      switch (namespace) {
        case __abx$10a4bb(159):
          return {
            wasi_unstable: this.wasiImport
          };
        case __abx$10a4bb(160):
          return {
            wasi_snapshot_preview1: this.wasiImport
          };
        default:
          throw new Error(__abx$10a4bb(161));
      }
    }
  }
  lib.default = WASIDefault;
  WASIDefault.defaultBindings = defaultBindings;
  lib.WASI = WASIDefault;
  return lib;
}
var hrtime_bigint = {};
var hasRequiredHrtime_bigint;
function requireHrtime_bigint() {
  if (hasRequiredHrtime_bigint) return hrtime_bigint;
  hasRequiredHrtime_bigint = 1;
  Object.defineProperty(hrtime_bigint, __abx$10a4bb(164), { value: true });
  const NS_PER_SEC = 1e9;
  const getBigIntHrtime = (nativeHrtime) => {
    return (time) => {
      const diff = nativeHrtime(time);
      return diff[0] * NS_PER_SEC + diff[1];
    };
  };
  hrtime_bigint.default = getBigIntHrtime;
  return hrtime_bigint;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser$2;
  hasRequiredBrowser = 1;
  Object.defineProperty(browser$2, __abx$10a4bb(164), { value: true });
  const randomfill = requireBrowser$1();
  const browser_hrtime_1 = requireBrowserHrtime();
  const path = requirePathBrowserify();
  const index_1 = requireLib();
  const hrtime_bigint_1 = requireHrtime_bigint();
  const bindings = {
    hrtime: hrtime_bigint_1.default(browser_hrtime_1.default),
    exit: (code) => {
      throw new index_1.WASIExitError(code);
    },
    kill: (signal) => {
      throw new index_1.WASIKillError(signal);
    },
    // @ts-ignore
    randomFillSync: randomfill.randomFillSync,
    isTTY: () => true,
    path,
    // Let the user attach the fs at runtime
    fs: null
  };
  browser$2.default = bindings;
  return browser$2;
}
var browserExports = requireBrowser();
var browserBindings = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
function ba(a, b, c, d) {
  return new (c || (c = Promise))(function(e, f) {
    function g(a2) {
      try {
        k2(d.next(a2));
      } catch (n) {
        f(n);
      }
    }
    function h(a2) {
      try {
        k2(d[__abx$10a4bb(165)](a2));
      } catch (n) {
        f(n);
      }
    }
    function k2(a2) {
      a2.done ? e(a2.value) : new c(function(b2) {
        b2(a2.value);
      }).then(g, h);
    }
    k2((d = d.apply(a, [])).next());
  });
}
function ca(a, b) {
  function c(a2) {
    return function(b2) {
      return d([a2, b2]);
    };
  }
  function d(c2) {
    if (f) throw new TypeError(__abx$10a4bb(166));
    for (; e; ) try {
      if (f = 1, g && (h = c2[0] & 2 ? g[__abx$10a4bb(79)] : c2[0] ? g[__abx$10a4bb(165)] || ((h = g[__abx$10a4bb(79)]) && h.call(g), 0) : g.next) && !(h = h.call(g, c2[1])).done) return h;
      if (g = 0, h) c2 = [c2[0] & 2, h.value];
      switch (c2[0]) {
        case 0:
        case 1:
          h = c2;
          break;
        case 4:
          return e.label++, { value: c2[1], done: false };
        case 5:
          e.label++;
          g = c2[1];
          c2 = [0];
          continue;
        case 7:
          c2 = e.ops.pop();
          e.trys.pop();
          continue;
        default:
          if (!(h = e.trys, h = 0 < h.length && h[h.length - 1]) && (6 === c2[0] || 2 === c2[0])) {
            e = 0;
            continue;
          }
          if (3 === c2[0] && (!h || c2[1] > h[0] && c2[1] < h[3])) e.label = c2[1];
          else if (6 === c2[0] && e.label < h[1]) e.label = h[1], h = c2;
          else if (h && e.label < h[2]) e.label = h[2], e.ops.push(c2);
          else {
            h[2] && e.ops.pop();
            e.trys.pop();
            continue;
          }
      }
      c2 = b.call(a, e);
    } catch (n) {
      c2 = [6, n], g = 0;
    } finally {
      f = h = 0;
    }
    if (c2[0] & 5) throw c2[1];
    return { value: c2[0] ? c2[1] : void 0, done: true };
  }
  var e = { label: 0, sent: function() {
    if (h[0] & 1) throw h[1];
    return h[1];
  }, trys: [], ops: [] }, f, g, h, k2;
  return k2 = { next: c(0), [__abx$10a4bb(165)]: c(1), [__abx$10a4bb(79)]: c(2) }, __abx$10a4bb(9) === typeof Symbol && (k2[Symbol.iterator] = function() {
    return this;
  }), k2;
}
function da(a) {
  var b = __abx$10a4bb(9) === typeof Symbol && a[Symbol.iterator], c = 0;
  return b ? b.call(a) : { next: function() {
    a && c >= a.length && (a = void 0);
    return { value: a && a[c++], done: !a };
  } };
}
function ea(a, b) {
  var c = __abx$10a4bb(9) === typeof Symbol && a[Symbol.iterator];
  if (!c) return a;
  a = c.call(a);
  var d, e = [];
  try {
    for (; (void 0 === b || 0 < b--) && !(d = a.next()).done; ) e.push(d.value);
  } catch (g) {
    var f = { error: g };
  } finally {
    try {
      d && !d.done && (c = a[__abx$10a4bb(79)]) && c.call(a);
    } finally {
      if (f) throw f.error;
    }
  }
  return e;
}
function ia() {
  for (var a = [], b = 0; b < arguments.length; b++) a = a.concat(ea(arguments[b]));
  return a;
}
var l = __abx$10a4bb(0) !== typeof globalThis ? globalThis : __abx$10a4bb(0) !== typeof window ? window : __abx$10a4bb(0) !== typeof global ? global : __abx$10a4bb(0) !== typeof self ? self : {};
function t(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, __abx$10a4bb(1)) ? a[__abx$10a4bb(1)] : a;
}
function u(a, b) {
  return b = { exports: {} }, a(b, b.exports), b.exports;
}
var w = u(function(a, b) {
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  b.constants = {
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFBLK: 24576,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    S_IFSOCK: 49152,
    O_CREAT: 64,
    O_EXCL: 128,
    O_NOCTTY: 256,
    O_TRUNC: 512,
    O_APPEND: 1024,
    O_DIRECTORY: 65536,
    O_NOATIME: 262144,
    O_NOFOLLOW: 131072,
    O_SYNC: 1052672,
    O_DIRECT: 16384,
    O_NONBLOCK: 2048,
    S_IRWXU: 448,
    S_IRUSR: 256,
    S_IWUSR: 128,
    S_IXUSR: 64,
    S_IRWXG: 56,
    S_IRGRP: 32,
    S_IWGRP: 16,
    S_IXGRP: 8,
    S_IRWXO: 7,
    S_IROTH: 4,
    S_IWOTH: 2,
    S_IXOTH: 1,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    UV_FS_COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_EXCL: 1,
    COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE_FORCE: 4
  };
});
t(w);
var ja = u(function(a, b) {
  b.default = __abx$10a4bb(9) === typeof BigInt ? BigInt : function() {
    throw Error(__abx$10a4bb(167));
  };
}), ka = u(function(a, b) {
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  var c = w.constants.S_IFMT, d = w.constants.S_IFDIR, e = w.constants.S_IFREG, f = w.constants.S_IFBLK, g = w.constants.S_IFCHR, h = w.constants.S_IFLNK, k2 = w.constants.S_IFIFO, p = w.constants.S_IFSOCK;
  a = (function() {
    function a2() {
    }
    a2.build = function(b2, c2) {
      void 0 === c2 && (c2 = false);
      var d2 = new a2(), e2 = b2.gid, f2 = b2.atime, g2 = b2.mtime, h2 = b2.ctime;
      c2 = c2 ? ja.default : function(a3) {
        return a3;
      };
      d2.uid = c2(b2.uid);
      d2.gid = c2(e2);
      d2.rdev = c2(0);
      d2.blksize = c2(4096);
      d2.ino = c2(b2.ino);
      d2.size = c2(b2.getSize());
      d2.blocks = c2(1);
      d2.atime = f2;
      d2.mtime = g2;
      d2.ctime = h2;
      d2.birthtime = h2;
      d2.atimeMs = c2(f2.getTime());
      d2.mtimeMs = c2(g2.getTime());
      e2 = c2(h2.getTime());
      d2.ctimeMs = e2;
      d2.birthtimeMs = e2;
      d2.dev = c2(0);
      d2.mode = c2(b2.mode);
      d2.nlink = c2(b2.nlink);
      return d2;
    };
    a2.prototype._checkModeProperty = function(a3) {
      return (Number(this.mode) & c) === a3;
    };
    a2.prototype.isDirectory = function() {
      return this._checkModeProperty(d);
    };
    a2.prototype.isFile = function() {
      return this._checkModeProperty(e);
    };
    a2.prototype.isBlockDevice = function() {
      return this._checkModeProperty(f);
    };
    a2.prototype.isCharacterDevice = function() {
      return this._checkModeProperty(g);
    };
    a2.prototype.isSymbolicLink = function() {
      return this._checkModeProperty(h);
    };
    a2.prototype.isFIFO = function() {
      return this._checkModeProperty(k2);
    };
    a2.prototype.isSocket = function() {
      return this._checkModeProperty(p);
    };
    return a2;
  })();
  b.Stats = a;
  b.default = a;
});
t(ka);
var la = __abx$10a4bb(0) !== typeof global ? global : __abx$10a4bb(0) !== typeof self ? self : __abx$10a4bb(0) !== typeof window ? window : {}, x = [], y = [], ma = __abx$10a4bb(0) !== typeof Uint8Array ? Uint8Array : Array, oa = false;
function pa() {
  oa = true;
  for (var a = 0; 64 > a; ++a) x[a] = __abx$10a4bb(2)[a], y[__abx$10a4bb(2).charCodeAt(a)] = a;
  y[45] = 62;
  y[95] = 63;
}
function qa(a, b, c) {
  for (var d = [], e = b; e < c; e += 3) b = (a[e] << 16) + (a[e + 1] << 8) + a[e + 2], d.push(x[b >> 18 & 63] + x[b >> 12 & 63] + x[b >> 6 & 63] + x[b & 63]);
  return d.join(__abx$10a4bb(7));
}
function ra(a) {
  oa || pa();
  for (var b = a.length, c = b % 3, d = __abx$10a4bb(7), e = [], f = 0, g = b - c; f < g; f += 16383) e.push(qa(a, f, f + 16383 > g ? g : f + 16383));
  1 === c ? (a = a[b - 1], d += x[a >> 2], d += x[a << 4 & 63], d += __abx$10a4bb(8)) : 2 === c && (a = (a[b - 2] << 8) + a[b - 1], d += x[a >> 10], d += x[a >> 4 & 63], d += x[a << 2 & 63], d += __abx$10a4bb(6));
  e.push(d);
  return e.join(__abx$10a4bb(7));
}
function sa(a, b, c, d, e) {
  var f = 8 * e - d - 1;
  var g = (1 << f) - 1, h = g >> 1, k2 = -7;
  e = c ? e - 1 : 0;
  var p = c ? -1 : 1, n = a[b + e];
  e += p;
  c = n & (1 << -k2) - 1;
  n >>= -k2;
  for (k2 += f; 0 < k2; c = 256 * c + a[b + e], e += p, k2 -= 8) ;
  f = c & (1 << -k2) - 1;
  c >>= -k2;
  for (k2 += d; 0 < k2; f = 256 * f + a[b + e], e += p, k2 -= 8) ;
  if (0 === c) c = 1 - h;
  else {
    if (c === g) return f ? NaN : Infinity * (n ? -1 : 1);
    f += Math.pow(2, d);
    c -= h;
  }
  return (n ? -1 : 1) * f * Math.pow(2, c - d);
}
function ta(a, b, c, d, e, f) {
  var g, h = 8 * f - e - 1, k2 = (1 << h) - 1, p = k2 >> 1, n = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  f = d ? 0 : f - 1;
  var q = d ? 1 : -1, B = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
  b = Math.abs(b);
  isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = k2) : (d = Math.floor(Math.log(b) / Math.LN2), 1 > b * (g = Math.pow(2, -d)) && (d--, g *= 2), b = 1 <= d + p ? b + n / g : b + n * Math.pow(2, 1 - p), 2 <= b * g && (d++, g /= 2), d + p >= k2 ? (b = 0, d = k2) : 1 <= d + p ? (b = (b * g - 1) * Math.pow(2, e), d += p) : (b = b * Math.pow(2, p - 1) * Math.pow(2, e), d = 0));
  for (; 8 <= e; a[c + f] = b & 255, f += q, b /= 256, e -= 8) ;
  d = d << e | b;
  for (h += e; 0 < h; a[c + f] = d & 255, f += q, d /= 256, h -= 8) ;
  a[c + f - q] |= 128 * B;
}
var wa = {}.toString, ya = Array.isArray || function(a) {
  return __abx$10a4bb(82) == wa.call(a);
};
z.TYPED_ARRAY_SUPPORT = void 0 !== la.TYPED_ARRAY_SUPPORT ? la.TYPED_ARRAY_SUPPORT : true;
var za = z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function Aa(a, b) {
  if ((z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < b) throw new RangeError(__abx$10a4bb(83));
  z.TYPED_ARRAY_SUPPORT ? (a = new Uint8Array(b), a.__proto__ = z.prototype) : (null === a && (a = new z(b)), a.length = b);
  return a;
}
function z(a, b, c) {
  if (!(z.TYPED_ARRAY_SUPPORT || this instanceof z)) return new z(a, b, c);
  if (__abx$10a4bb(17) === typeof a) {
    if (__abx$10a4bb(18) === typeof b) throw Error(__abx$10a4bb(84));
    return Ba(this, a);
  }
  return Ca(this, a, b, c);
}
z.poolSize = 8192;
z._augment = function(a) {
  a.__proto__ = z.prototype;
  return a;
};
function Ca(a, b, c, d) {
  if (__abx$10a4bb(17) === typeof b) throw new TypeError(__abx$10a4bb(85));
  if (__abx$10a4bb(0) !== typeof ArrayBuffer && b instanceof ArrayBuffer) {
    b.byteLength;
    if (0 > c || b.byteLength < c) throw new RangeError(__abx$10a4bb(86));
    if (b.byteLength < c + (d || 0)) throw new RangeError(__abx$10a4bb(87));
    b = void 0 === c && void 0 === d ? new Uint8Array(b) : void 0 === d ? new Uint8Array(b, c) : new Uint8Array(b, c, d);
    z.TYPED_ARRAY_SUPPORT ? (a = b, a.__proto__ = z.prototype) : a = Da(a, b);
    return a;
  }
  if (__abx$10a4bb(18) === typeof b) {
    d = a;
    a = c;
    if (__abx$10a4bb(18) !== typeof a || __abx$10a4bb(7) === a) a = __abx$10a4bb(23);
    if (!z.isEncoding(a)) throw new TypeError(__abx$10a4bb(88));
    c = Ea(b, a) | 0;
    d = Aa(d, c);
    b = d.write(b, a);
    b !== c && (d = d.slice(0, b));
    return d;
  }
  return Fa(a, b);
}
z.from = function(a, b, c) {
  return Ca(null, a, b, c);
};
z.TYPED_ARRAY_SUPPORT && (z.prototype.__proto__ = Uint8Array.prototype, z.__proto__ = Uint8Array);
function Ga(a) {
  if (__abx$10a4bb(17) !== typeof a) throw new TypeError(__abx$10a4bb(89));
  if (0 > a) throw new RangeError(__abx$10a4bb(90));
}
z.alloc = function(a, b, c) {
  Ga(a);
  a = 0 >= a ? Aa(null, a) : void 0 !== b ? __abx$10a4bb(18) === typeof c ? Aa(null, a).fill(b, c) : Aa(null, a).fill(b) : Aa(null, a);
  return a;
};
function Ba(a, b) {
  Ga(b);
  a = Aa(a, 0 > b ? 0 : Ma(b) | 0);
  if (!z.TYPED_ARRAY_SUPPORT) for (var c = 0; c < b; ++c) a[c] = 0;
  return a;
}
z.allocUnsafe = function(a) {
  return Ba(null, a);
};
z.allocUnsafeSlow = function(a) {
  return Ba(null, a);
};
function Da(a, b) {
  var c = 0 > b.length ? 0 : Ma(b.length) | 0;
  a = Aa(a, c);
  for (var d = 0; d < c; d += 1) a[d] = b[d] & 255;
  return a;
}
function Fa(a, b) {
  if (A(b)) {
    var c = Ma(b.length) | 0;
    a = Aa(a, c);
    if (0 === a.length) return a;
    b.copy(a, 0, 0, c);
    return a;
  }
  if (b) {
    if (__abx$10a4bb(0) !== typeof ArrayBuffer && b.buffer instanceof ArrayBuffer || __abx$10a4bb(91) in b) return (c = __abx$10a4bb(17) !== typeof b.length) || (c = b.length, c = c !== c), c ? Aa(a, 0) : Da(a, b);
    if (__abx$10a4bb(27) === b.type && ya(b.data)) return Da(a, b.data);
  }
  throw new TypeError(__abx$10a4bb(92));
}
function Ma(a) {
  if (a >= (z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823)) throw new RangeError(__abx$10a4bb(28) + (z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823).toString(16) + __abx$10a4bb(29));
  return a | 0;
}
z.isBuffer = Na;
function A(a) {
  return !(null == a || !a._isBuffer);
}
z.compare = function(a, b) {
  if (!A(a) || !A(b)) throw new TypeError(__abx$10a4bb(93));
  if (a === b) return 0;
  for (var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e) if (a[e] !== b[e]) {
    c = a[e];
    d = b[e];
    break;
  }
  return c < d ? -1 : d < c ? 1 : 0;
};
z.isEncoding = function(a) {
  switch (String(a).toLowerCase()) {
    case __abx$10a4bb(31):
    case __abx$10a4bb(23):
    case __abx$10a4bb(32):
    case __abx$10a4bb(33):
    case __abx$10a4bb(34):
    case __abx$10a4bb(35):
    case __abx$10a4bb(36):
    case __abx$10a4bb(37):
    case __abx$10a4bb(38):
    case __abx$10a4bb(39):
    case __abx$10a4bb(40):
      return true;
    default:
      return false;
  }
};
z.concat = function(a, b) {
  if (!ya(a)) throw new TypeError(__abx$10a4bb(41));
  if (0 === a.length) return z.alloc(0);
  var c;
  if (void 0 === b) for (c = b = 0; c < a.length; ++c) b += a[c].length;
  b = z.allocUnsafe(b);
  var d = 0;
  for (c = 0; c < a.length; ++c) {
    var e = a[c];
    if (!A(e)) throw new TypeError(__abx$10a4bb(41));
    e.copy(b, d);
    d += e.length;
  }
  return b;
};
function Ea(a, b) {
  if (A(a)) return a.length;
  if (__abx$10a4bb(0) !== typeof ArrayBuffer && __abx$10a4bb(9) === typeof ArrayBuffer.isView && (ArrayBuffer.isView(a) || a instanceof ArrayBuffer)) return a.byteLength;
  __abx$10a4bb(18) !== typeof a && (a = __abx$10a4bb(7) + a);
  var c = a.length;
  if (0 === c) return 0;
  for (var d = false; ; ) switch (b) {
    case __abx$10a4bb(33):
    case __abx$10a4bb(34):
    case __abx$10a4bb(35):
      return c;
    case __abx$10a4bb(23):
    case __abx$10a4bb(32):
    case void 0:
      return Oa(a).length;
    case __abx$10a4bb(37):
    case __abx$10a4bb(38):
    case __abx$10a4bb(39):
    case __abx$10a4bb(40):
      return 2 * c;
    case __abx$10a4bb(31):
      return c >>> 1;
    case __abx$10a4bb(36):
      return Pa(a).length;
    default:
      if (d) return Oa(a).length;
      b = (__abx$10a4bb(7) + b).toLowerCase();
      d = true;
  }
}
z.byteLength = Ea;
function Qa(a, b, c) {
  var d = false;
  if (void 0 === b || 0 > b) b = 0;
  if (b > this.length) return __abx$10a4bb(7);
  if (void 0 === c || c > this.length) c = this.length;
  if (0 >= c) return __abx$10a4bb(7);
  c >>>= 0;
  b >>>= 0;
  if (c <= b) return __abx$10a4bb(7);
  for (a || (a = __abx$10a4bb(23)); ; ) switch (a) {
    case __abx$10a4bb(31):
      a = b;
      b = c;
      c = this.length;
      if (!a || 0 > a) a = 0;
      if (!b || 0 > b || b > c) b = c;
      d = __abx$10a4bb(7);
      for (c = a; c < b; ++c) a = d, d = this[c], d = 16 > d ? __abx$10a4bb(80) + d.toString(16) : d.toString(16), d = a + d;
      return d;
    case __abx$10a4bb(23):
    case __abx$10a4bb(32):
      return Ra(this, b, c);
    case __abx$10a4bb(33):
      a = __abx$10a4bb(7);
      for (c = Math.min(this.length, c); b < c; ++b) a += String.fromCharCode(this[b] & 127);
      return a;
    case __abx$10a4bb(34):
    case __abx$10a4bb(35):
      a = __abx$10a4bb(7);
      for (c = Math.min(this.length, c); b < c; ++b) a += String.fromCharCode(this[b]);
      return a;
    case __abx$10a4bb(36):
      return b = 0 === b && c === this.length ? ra(this) : ra(this.slice(b, c)), b;
    case __abx$10a4bb(37):
    case __abx$10a4bb(38):
    case __abx$10a4bb(39):
    case __abx$10a4bb(40):
      b = this.slice(b, c);
      c = __abx$10a4bb(7);
      for (a = 0; a < b.length; a += 2) c += String.fromCharCode(b[a] + 256 * b[a + 1]);
      return c;
    default:
      if (d) throw new TypeError(__abx$10a4bb(24) + a);
      a = (a + __abx$10a4bb(7)).toLowerCase();
      d = true;
  }
}
z.prototype._isBuffer = true;
function Sa(a, b, c) {
  var d = a[b];
  a[b] = a[c];
  a[c] = d;
}
z.prototype.swap16 = function() {
  var a = this.length;
  if (0 !== a % 2) throw new RangeError(__abx$10a4bb(43));
  for (var b = 0; b < a; b += 2) Sa(this, b, b + 1);
  return this;
};
z.prototype.swap32 = function() {
  var a = this.length;
  if (0 !== a % 4) throw new RangeError(__abx$10a4bb(44));
  for (var b = 0; b < a; b += 4) Sa(this, b, b + 3), Sa(this, b + 1, b + 2);
  return this;
};
z.prototype.swap64 = function() {
  var a = this.length;
  if (0 !== a % 8) throw new RangeError(__abx$10a4bb(45));
  for (var b = 0; b < a; b += 8) Sa(this, b, b + 7), Sa(this, b + 1, b + 6), Sa(this, b + 2, b + 5), Sa(this, b + 3, b + 4);
  return this;
};
z.prototype.toString = function() {
  var a = this.length | 0;
  return 0 === a ? __abx$10a4bb(7) : 0 === arguments.length ? Ra(this, 0, a) : Qa.apply(this, arguments);
};
z.prototype.equals = function(a) {
  if (!A(a)) throw new TypeError(__abx$10a4bb(46));
  return this === a ? true : 0 === z.compare(this, a);
};
z.prototype.inspect = function() {
  var a = __abx$10a4bb(7);
  0 < this.length && (a = this.toString(__abx$10a4bb(31), 0, 50).match(/.{2}/g).join(__abx$10a4bb(94)), 50 < this.length && (a += __abx$10a4bb(48)));
  return __abx$10a4bb(49) + a + __abx$10a4bb(50);
};
z.prototype.compare = function(a, b, c, d, e) {
  if (!A(a)) throw new TypeError(__abx$10a4bb(46));
  void 0 === b && (b = 0);
  void 0 === c && (c = a ? a.length : 0);
  void 0 === d && (d = 0);
  void 0 === e && (e = this.length);
  if (0 > b || c > a.length || 0 > d || e > this.length) throw new RangeError(__abx$10a4bb(52));
  if (d >= e && b >= c) return 0;
  if (d >= e) return -1;
  if (b >= c) return 1;
  b >>>= 0;
  c >>>= 0;
  d >>>= 0;
  e >>>= 0;
  if (this === a) return 0;
  var f = e - d, g = c - b, h = Math.min(f, g);
  d = this.slice(d, e);
  a = a.slice(b, c);
  for (b = 0; b < h; ++b) if (d[b] !== a[b]) {
    f = d[b];
    g = a[b];
    break;
  }
  return f < g ? -1 : g < f ? 1 : 0;
};
function Ta(a, b, c, d, e) {
  if (0 === a.length) return -1;
  __abx$10a4bb(18) === typeof c ? (d = c, c = 0) : 2147483647 < c ? c = 2147483647 : -2147483648 > c && (c = -2147483648);
  c = +c;
  isNaN(c) && (c = e ? 0 : a.length - 1);
  0 > c && (c = a.length + c);
  if (c >= a.length) {
    if (e) return -1;
    c = a.length - 1;
  } else if (0 > c) if (e) c = 0;
  else return -1;
  __abx$10a4bb(18) === typeof b && (b = z.from(b, d));
  if (A(b)) return 0 === b.length ? -1 : Ua(a, b, c, d, e);
  if (__abx$10a4bb(17) === typeof b) return b &= 255, z.TYPED_ARRAY_SUPPORT && __abx$10a4bb(9) === typeof Uint8Array.prototype.indexOf ? e ? Uint8Array.prototype.indexOf.call(a, b, c) : Uint8Array.prototype.lastIndexOf.call(a, b, c) : Ua(a, [b], c, d, e);
  throw new TypeError(__abx$10a4bb(53));
}
function Ua(a, b, c, d, e) {
  function f(a2, b2) {
    return 1 === g ? a2[b2] : a2.readUInt16BE(b2 * g);
  }
  var g = 1, h = a.length, k2 = b.length;
  if (void 0 !== d && (d = String(d).toLowerCase(), __abx$10a4bb(37) === d || __abx$10a4bb(38) === d || __abx$10a4bb(39) === d || __abx$10a4bb(40) === d)) {
    if (2 > a.length || 2 > b.length) return -1;
    g = 2;
    h /= 2;
    k2 /= 2;
    c /= 2;
  }
  if (e) for (d = -1; c < h; c++) if (f(a, c) === f(b, -1 === d ? 0 : c - d)) {
    if (-1 === d && (d = c), c - d + 1 === k2) return d * g;
  } else -1 !== d && (c -= c - d), d = -1;
  else for (c + k2 > h && (c = h - k2); 0 <= c; c--) {
    h = true;
    for (d = 0; d < k2; d++) if (f(a, c + d) !== f(b, d)) {
      h = false;
      break;
    }
    if (h) return c;
  }
  return -1;
}
z.prototype.includes = function(a, b, c) {
  return -1 !== this.indexOf(a, b, c);
};
z.prototype.indexOf = function(a, b, c) {
  return Ta(this, a, b, c, true);
};
z.prototype.lastIndexOf = function(a, b, c) {
  return Ta(this, a, b, c, false);
};
z.prototype.write = function(a, b, c, d) {
  if (void 0 === b) d = __abx$10a4bb(23), c = this.length, b = 0;
  else if (void 0 === c && __abx$10a4bb(18) === typeof b) d = b, c = this.length, b = 0;
  else if (isFinite(b)) b |= 0, isFinite(c) ? (c |= 0, void 0 === d && (d = __abx$10a4bb(23))) : (d = c, c = void 0);
  else throw Error(__abx$10a4bb(54));
  var e = this.length - b;
  if (void 0 === c || c > e) c = e;
  if (0 < a.length && (0 > c || 0 > b) || b > this.length) throw new RangeError(__abx$10a4bb(55));
  d || (d = __abx$10a4bb(23));
  for (e = false; ; ) switch (d) {
    case __abx$10a4bb(31):
      a: {
        b = Number(b) || 0;
        d = this.length - b;
        c ? (c = Number(c), c > d && (c = d)) : c = d;
        d = a.length;
        if (0 !== d % 2) throw new TypeError(__abx$10a4bb(95));
        c > d / 2 && (c = d / 2);
        for (d = 0; d < c; ++d) {
          e = parseInt(a.substr(2 * d, 2), 16);
          if (isNaN(e)) {
            a = d;
            break a;
          }
          this[b + d] = e;
        }
        a = d;
      }
      return a;
    case __abx$10a4bb(23):
    case __abx$10a4bb(32):
      return Va(Oa(a, this.length - b), this, b, c);
    case __abx$10a4bb(33):
      return Va(Wa(a), this, b, c);
    case __abx$10a4bb(34):
    case __abx$10a4bb(35):
      return Va(Wa(a), this, b, c);
    case __abx$10a4bb(36):
      return Va(Pa(a), this, b, c);
    case __abx$10a4bb(37):
    case __abx$10a4bb(38):
    case __abx$10a4bb(39):
    case __abx$10a4bb(40):
      d = a;
      e = this.length - b;
      for (var f = [], g = 0; g < d.length && !(0 > (e -= 2)); ++g) {
        var h = d.charCodeAt(g);
        a = h >> 8;
        h %= 256;
        f.push(h);
        f.push(a);
      }
      return Va(f, this, b, c);
    default:
      if (e) throw new TypeError(__abx$10a4bb(24) + d);
      d = (__abx$10a4bb(7) + d).toLowerCase();
      e = true;
  }
};
z.prototype.toJSON = function() {
  return { type: __abx$10a4bb(27), data: Array.prototype.slice.call(this._arr || this, 0) };
};
function Ra(a, b, c) {
  c = Math.min(a.length, c);
  for (var d = []; b < c; ) {
    var e = a[b], f = null, g = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
    if (b + g <= c) switch (g) {
      case 1:
        128 > e && (f = e);
        break;
      case 2:
        var h = a[b + 1];
        128 === (h & 192) && (e = (e & 31) << 6 | h & 63, 127 < e && (f = e));
        break;
      case 3:
        h = a[b + 1];
        var k2 = a[b + 2];
        128 === (h & 192) && 128 === (k2 & 192) && (e = (e & 15) << 12 | (h & 63) << 6 | k2 & 63, 2047 < e && (55296 > e || 57343 < e) && (f = e));
        break;
      case 4:
        h = a[b + 1];
        k2 = a[b + 2];
        var p = a[b + 3];
        128 === (h & 192) && 128 === (k2 & 192) && 128 === (p & 192) && (e = (e & 15) << 18 | (h & 63) << 12 | (k2 & 63) << 6 | p & 63, 65535 < e && 1114112 > e && (f = e));
    }
    null === f ? (f = 65533, g = 1) : 65535 < f && (f -= 65536, d.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023);
    d.push(f);
    b += g;
  }
  a = d.length;
  if (a <= ab) d = String.fromCharCode.apply(String, d);
  else {
    c = __abx$10a4bb(7);
    for (b = 0; b < a; ) c += String.fromCharCode.apply(String, d.slice(b, b += ab));
    d = c;
  }
  return d;
}
var ab = 4096;
z.prototype.slice = function(a, b) {
  var c = this.length;
  a = ~~a;
  b = void 0 === b ? c : ~~b;
  0 > a ? (a += c, 0 > a && (a = 0)) : a > c && (a = c);
  0 > b ? (b += c, 0 > b && (b = 0)) : b > c && (b = c);
  b < a && (b = a);
  if (z.TYPED_ARRAY_SUPPORT) b = this.subarray(a, b), b.__proto__ = z.prototype;
  else {
    c = b - a;
    b = new z(c, void 0);
    for (var d = 0; d < c; ++d) b[d] = this[d + a];
  }
  return b;
};
function C(a, b, c) {
  if (0 !== a % 1 || 0 > a) throw new RangeError(__abx$10a4bb(56));
  if (a + b > c) throw new RangeError(__abx$10a4bb(57));
}
z.prototype.readUIntLE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C(a, b, this.length);
  c = this[a];
  for (var d = 1, e = 0; ++e < b && (d *= 256); ) c += this[a + e] * d;
  return c;
};
z.prototype.readUIntBE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C(a, b, this.length);
  c = this[a + --b];
  for (var d = 1; 0 < b && (d *= 256); ) c += this[a + --b] * d;
  return c;
};
z.prototype.readUInt8 = function(a, b) {
  b || C(a, 1, this.length);
  return this[a];
};
z.prototype.readUInt16LE = function(a, b) {
  b || C(a, 2, this.length);
  return this[a] | this[a + 1] << 8;
};
z.prototype.readUInt16BE = function(a, b) {
  b || C(a, 2, this.length);
  return this[a] << 8 | this[a + 1];
};
z.prototype.readUInt32LE = function(a, b) {
  b || C(a, 4, this.length);
  return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3];
};
z.prototype.readUInt32BE = function(a, b) {
  b || C(a, 4, this.length);
  return 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
};
z.prototype.readIntLE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C(a, b, this.length);
  c = this[a];
  for (var d = 1, e = 0; ++e < b && (d *= 256); ) c += this[a + e] * d;
  c >= 128 * d && (c -= Math.pow(2, 8 * b));
  return c;
};
z.prototype.readIntBE = function(a, b, c) {
  a |= 0;
  b |= 0;
  c || C(a, b, this.length);
  c = b;
  for (var d = 1, e = this[a + --c]; 0 < c && (d *= 256); ) e += this[a + --c] * d;
  e >= 128 * d && (e -= Math.pow(2, 8 * b));
  return e;
};
z.prototype.readInt8 = function(a, b) {
  b || C(a, 1, this.length);
  return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a];
};
z.prototype.readInt16LE = function(a, b) {
  b || C(a, 2, this.length);
  a = this[a] | this[a + 1] << 8;
  return a & 32768 ? a | 4294901760 : a;
};
z.prototype.readInt16BE = function(a, b) {
  b || C(a, 2, this.length);
  a = this[a + 1] | this[a] << 8;
  return a & 32768 ? a | 4294901760 : a;
};
z.prototype.readInt32LE = function(a, b) {
  b || C(a, 4, this.length);
  return this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
};
z.prototype.readInt32BE = function(a, b) {
  b || C(a, 4, this.length);
  return this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
};
z.prototype.readFloatLE = function(a, b) {
  b || C(a, 4, this.length);
  return sa(this, a, true, 23, 4);
};
z.prototype.readFloatBE = function(a, b) {
  b || C(a, 4, this.length);
  return sa(this, a, false, 23, 4);
};
z.prototype.readDoubleLE = function(a, b) {
  b || C(a, 8, this.length);
  return sa(this, a, true, 52, 8);
};
z.prototype.readDoubleBE = function(a, b) {
  b || C(a, 8, this.length);
  return sa(this, a, false, 52, 8);
};
function E(a, b, c, d, e, f) {
  if (!A(a)) throw new TypeError(__abx$10a4bb(58));
  if (b > e || b < f) throw new RangeError(__abx$10a4bb(59));
  if (c + d > a.length) throw new RangeError(__abx$10a4bb(60));
}
z.prototype.writeUIntLE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  c |= 0;
  d || E(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
  d = 1;
  var e = 0;
  for (this[b] = a & 255; ++e < c && (d *= 256); ) this[b + e] = a / d & 255;
  return b + c;
};
z.prototype.writeUIntBE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  c |= 0;
  d || E(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
  d = c - 1;
  var e = 1;
  for (this[b + d] = a & 255; 0 <= --d && (e *= 256); ) this[b + d] = a / e & 255;
  return b + c;
};
z.prototype.writeUInt8 = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 1, 255, 0);
  z.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
  this[b] = a & 255;
  return b + 1;
};
function bb(a, b, c, d) {
  0 > b && (b = 65535 + b + 1);
  for (var e = 0, f = Math.min(a.length - c, 2); e < f; ++e) a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e);
}
z.prototype.writeUInt16LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 2, 65535, 0);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : bb(this, a, b, true);
  return b + 2;
};
z.prototype.writeUInt16BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 2, 65535, 0);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : bb(this, a, b, false);
  return b + 2;
};
function cb(a, b, c, d) {
  0 > b && (b = 4294967295 + b + 1);
  for (var e = 0, f = Math.min(a.length - c, 4); e < f; ++e) a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255;
}
z.prototype.writeUInt32LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 4, 4294967295, 0);
  z.TYPED_ARRAY_SUPPORT ? (this[b + 3] = a >>> 24, this[b + 2] = a >>> 16, this[b + 1] = a >>> 8, this[b] = a & 255) : cb(this, a, b, true);
  return b + 4;
};
z.prototype.writeUInt32BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 4, 4294967295, 0);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : cb(this, a, b, false);
  return b + 4;
};
z.prototype.writeIntLE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  d || (d = Math.pow(2, 8 * c - 1), E(this, a, b, c, d - 1, -d));
  d = 0;
  var e = 1, f = 0;
  for (this[b] = a & 255; ++d < c && (e *= 256); ) 0 > a && 0 === f && 0 !== this[b + d - 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
  return b + c;
};
z.prototype.writeIntBE = function(a, b, c, d) {
  a = +a;
  b |= 0;
  d || (d = Math.pow(2, 8 * c - 1), E(this, a, b, c, d - 1, -d));
  d = c - 1;
  var e = 1, f = 0;
  for (this[b + d] = a & 255; 0 <= --d && (e *= 256); ) 0 > a && 0 === f && 0 !== this[b + d + 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
  return b + c;
};
z.prototype.writeInt8 = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 1, 127, -128);
  z.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
  0 > a && (a = 255 + a + 1);
  this[b] = a & 255;
  return b + 1;
};
z.prototype.writeInt16LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 2, 32767, -32768);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : bb(this, a, b, true);
  return b + 2;
};
z.prototype.writeInt16BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 2, 32767, -32768);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : bb(this, a, b, false);
  return b + 2;
};
z.prototype.writeInt32LE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 4, 2147483647, -2147483648);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8, this[b + 2] = a >>> 16, this[b + 3] = a >>> 24) : cb(this, a, b, true);
  return b + 4;
};
z.prototype.writeInt32BE = function(a, b, c) {
  a = +a;
  b |= 0;
  c || E(this, a, b, 4, 2147483647, -2147483648);
  0 > a && (a = 4294967295 + a + 1);
  z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : cb(this, a, b, false);
  return b + 4;
};
function db(a, b, c, d) {
  if (c + d > a.length) throw new RangeError(__abx$10a4bb(60));
  if (0 > c) throw new RangeError(__abx$10a4bb(60));
}
z.prototype.writeFloatLE = function(a, b, c) {
  c || db(this, a, b, 4);
  ta(this, a, b, true, 23, 4);
  return b + 4;
};
z.prototype.writeFloatBE = function(a, b, c) {
  c || db(this, a, b, 4);
  ta(this, a, b, false, 23, 4);
  return b + 4;
};
z.prototype.writeDoubleLE = function(a, b, c) {
  c || db(this, a, b, 8);
  ta(this, a, b, true, 52, 8);
  return b + 8;
};
z.prototype.writeDoubleBE = function(a, b, c) {
  c || db(this, a, b, 8);
  ta(this, a, b, false, 52, 8);
  return b + 8;
};
z.prototype.copy = function(a, b, c, d) {
  c || (c = 0);
  d || 0 === d || (d = this.length);
  b >= a.length && (b = a.length);
  b || (b = 0);
  0 < d && d < c && (d = c);
  if (d === c || 0 === a.length || 0 === this.length) return 0;
  if (0 > b) throw new RangeError(__abx$10a4bb(62));
  if (0 > c || c >= this.length) throw new RangeError(__abx$10a4bb(96));
  if (0 > d) throw new RangeError(__abx$10a4bb(63));
  d > this.length && (d = this.length);
  a.length - b < d - c && (d = a.length - b + c);
  var e = d - c;
  if (this === a && c < b && b < d) for (d = e - 1; 0 <= d; --d) a[d + b] = this[d + c];
  else if (1e3 > e || !z.TYPED_ARRAY_SUPPORT) for (d = 0; d < e; ++d) a[d + b] = this[d + c];
  else Uint8Array.prototype.set.call(a, this.subarray(c, c + e), b);
  return e;
};
z.prototype.fill = function(a, b, c, d) {
  if (__abx$10a4bb(18) === typeof a) {
    __abx$10a4bb(18) === typeof b ? (d = b, b = 0, c = this.length) : __abx$10a4bb(18) === typeof c && (d = c, c = this.length);
    if (1 === a.length) {
      var e = a.charCodeAt(0);
      256 > e && (a = e);
    }
    if (void 0 !== d && __abx$10a4bb(18) !== typeof d) throw new TypeError(__abx$10a4bb(64));
    if (__abx$10a4bb(18) === typeof d && !z.isEncoding(d)) throw new TypeError(__abx$10a4bb(24) + d);
  } else __abx$10a4bb(17) === typeof a && (a &= 255);
  if (0 > b || this.length < b || this.length < c) throw new RangeError(__abx$10a4bb(66));
  if (c <= b) return this;
  b >>>= 0;
  c = void 0 === c ? this.length : c >>> 0;
  a || (a = 0);
  if (__abx$10a4bb(17) === typeof a) for (d = b; d < c; ++d) this[d] = a;
  else for (a = A(a) ? a : Oa(new z(a, d).toString()), e = a.length, d = 0; d < c - b; ++d) this[d + b] = a[d % e];
  return this;
};
var eb = /[^+\/0-9A-Za-z-_]/g;
function Oa(a, b) {
  b = b || Infinity;
  for (var c, d = a.length, e = null, f = [], g = 0; g < d; ++g) {
    c = a.charCodeAt(g);
    if (55295 < c && 57344 > c) {
      if (!e) {
        if (56319 < c) {
          -1 < (b -= 3) && f.push(239, 191, 189);
          continue;
        } else if (g + 1 === d) {
          -1 < (b -= 3) && f.push(239, 191, 189);
          continue;
        }
        e = c;
        continue;
      }
      if (56320 > c) {
        -1 < (b -= 3) && f.push(239, 191, 189);
        e = c;
        continue;
      }
      c = (e - 55296 << 10 | c - 56320) + 65536;
    } else e && -1 < (b -= 3) && f.push(239, 191, 189);
    e = null;
    if (128 > c) {
      if (0 > --b) break;
      f.push(c);
    } else if (2048 > c) {
      if (0 > (b -= 2)) break;
      f.push(c >> 6 | 192, c & 63 | 128);
    } else if (65536 > c) {
      if (0 > (b -= 3)) break;
      f.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128);
    } else if (1114112 > c) {
      if (0 > (b -= 4)) break;
      f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128);
    } else throw Error(__abx$10a4bb(68));
  }
  return f;
}
function Wa(a) {
  for (var b = [], c = 0; c < a.length; ++c) b.push(a.charCodeAt(c) & 255);
  return b;
}
function Pa(a) {
  a = (a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, __abx$10a4bb(7))).replace(eb, __abx$10a4bb(7));
  if (2 > a.length) a = __abx$10a4bb(7);
  else for (; 0 !== a.length % 4; ) a += __abx$10a4bb(6);
  oa || pa();
  var b = a.length;
  if (0 < b % 4) throw Error(__abx$10a4bb(5));
  var c = __abx$10a4bb(6) === a[b - 2] ? 2 : __abx$10a4bb(6) === a[b - 1] ? 1 : 0;
  var d = new ma(3 * b / 4 - c);
  var e = 0 < c ? b - 4 : b;
  var f = 0;
  for (b = 0; b < e; b += 4) {
    var g = y[a.charCodeAt(b)] << 18 | y[a.charCodeAt(b + 1)] << 12 | y[a.charCodeAt(b + 2)] << 6 | y[a.charCodeAt(b + 3)];
    d[f++] = g >> 16 & 255;
    d[f++] = g >> 8 & 255;
    d[f++] = g & 255;
  }
  2 === c ? (g = y[a.charCodeAt(b)] << 2 | y[a.charCodeAt(b + 1)] >> 4, d[f++] = g & 255) : 1 === c && (g = y[a.charCodeAt(b)] << 10 | y[a.charCodeAt(b + 1)] << 4 | y[a.charCodeAt(b + 2)] >> 2, d[f++] = g >> 8 & 255, d[f++] = g & 255);
  return d;
}
function Va(a, b, c, d) {
  for (var e = 0; e < d && !(e + c >= b.length || e >= a.length); ++e) b[e + c] = a[e];
  return e;
}
function Na(a) {
  return null != a && (!!a._isBuffer || fb(a) || __abx$10a4bb(9) === typeof a.readFloatLE && __abx$10a4bb(9) === typeof a.slice && fb(a.slice(0, 0)));
}
function fb(a) {
  return !!a.constructor && __abx$10a4bb(9) === typeof a.constructor.isBuffer && a.constructor.isBuffer(a);
}
var gb = Object.freeze({ __proto__: null, INSPECT_MAX_BYTES: 50, kMaxLength: za, Buffer: z, SlowBuffer: function(a) {
  +a != a && (a = 0);
  return z.alloc(+a);
}, isBuffer: Na }), F = u(function(a, b) {
  function c(a2) {
    for (var b2 = [], c2 = 1; c2 < arguments.length; c2++) b2[c2 - 1] = arguments[c2];
    return new (gb.Buffer.bind.apply(gb.Buffer, d([void 0, a2], b2)))();
  }
  var d = l && l.__spreadArrays || function() {
    for (var a2 = 0, b2 = 0, c2 = arguments.length; b2 < c2; b2++) a2 += arguments[b2].length;
    a2 = Array(a2);
    var d2 = 0;
    for (b2 = 0; b2 < c2; b2++) for (var k2 = arguments[b2], p = 0, n = k2.length; p < n; p++, d2++) a2[d2] = k2[p];
    return a2;
  };
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  b.Buffer = gb.Buffer;
  b.bufferAllocUnsafe = gb.Buffer.allocUnsafe || c;
  b.bufferFrom = gb.Buffer.from || c;
});
t(F);
function hb() {
  throw Error(__abx$10a4bb(97));
}
function ib() {
  throw Error(__abx$10a4bb(98));
}
var jb = hb, kb = ib;
__abx$10a4bb(9) === typeof la.setTimeout && (jb = setTimeout);
__abx$10a4bb(9) === typeof la.clearTimeout && (kb = clearTimeout);
function pb(a) {
  if (jb === setTimeout) return setTimeout(a, 0);
  if ((jb === hb || !jb) && setTimeout) return jb = setTimeout, setTimeout(a, 0);
  try {
    return jb(a, 0);
  } catch (b) {
    try {
      return jb.call(null, a, 0);
    } catch (c) {
      return jb.call(this, a, 0);
    }
  }
}
function rb(a) {
  if (kb === clearTimeout) return clearTimeout(a);
  if ((kb === ib || !kb) && clearTimeout) return kb = clearTimeout, clearTimeout(a);
  try {
    return kb(a);
  } catch (b) {
    try {
      return kb.call(null, a);
    } catch (c) {
      return kb.call(this, a);
    }
  }
}
var sb = [], tb = false, ub, vb = -1;
function wb() {
  tb && ub && (tb = false, ub.length ? sb = ub.concat(sb) : vb = -1, sb.length && xb());
}
function xb() {
  if (!tb) {
    var a = pb(wb);
    tb = true;
    for (var b = sb.length; b; ) {
      ub = sb;
      for (sb = []; ++vb < b; ) ub && ub[vb].run();
      vb = -1;
      b = sb.length;
    }
    ub = null;
    tb = false;
    rb(a);
  }
}
function G(a) {
  var b = Array(arguments.length - 1);
  if (1 < arguments.length) for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
  sb.push(new yb(a, b));
  1 !== sb.length || tb || pb(xb);
}
function yb(a, b) {
  this.fun = a;
  this.array = b;
}
yb.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function zb() {
}
var performance$1 = la.performance || {}, Ab = performance$1.now || performance$1.mozNow || performance$1.msNow || performance$1.oNow || performance$1.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
}, Bb = /* @__PURE__ */ new Date(), Cb = {
  nextTick: G,
  title: __abx$10a4bb(70),
  browser: true,
  env: {},
  argv: [],
  version: __abx$10a4bb(7),
  versions: {},
  on: zb,
  addListener: zb,
  once: zb,
  off: zb,
  removeListener: zb,
  removeAllListeners: zb,
  emit: zb,
  binding: function() {
    throw Error(__abx$10a4bb(99));
  },
  cwd: function() {
    return __abx$10a4bb(71);
  },
  chdir: function() {
    throw Error(__abx$10a4bb(100));
  },
  umask: function() {
    return 0;
  },
  hrtime: function(a) {
    var b = 1e-3 * Ab.call(performance$1), c = Math.floor(b);
    b = Math.floor(b % 1 * 1e9);
    a && (c -= a[0], b -= a[1], 0 > b && (c--, b += 1e9));
    return [c, b];
  },
  platform: __abx$10a4bb(70),
  release: {},
  config: {},
  uptime: function() {
    return (/* @__PURE__ */ new Date() - Bb) / 1e3;
  }
}, Db = __abx$10a4bb(9) === typeof Object.create ? function(a, b) {
  a.super_ = b;
  a.prototype = Object.create(b.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } });
} : function(a, b) {
  function c() {
  }
  a.super_ = b;
  c.prototype = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
}, Eb = /%[sdj%]/g;
function Fb(a) {
  if (!Gb(a)) {
    for (var b = [], c = 0; c < arguments.length; c++) b.push(H(arguments[c]));
    return b.join(__abx$10a4bb(94));
  }
  c = 1;
  var d = arguments, e = d.length;
  b = String(a).replace(Eb, function(a2) {
    if (__abx$10a4bb(168) === a2) return __abx$10a4bb(169);
    if (c >= e) return a2;
    switch (a2) {
      case __abx$10a4bb(170):
        return String(d[c++]);
      case __abx$10a4bb(171):
        return Number(d[c++]);
      case __abx$10a4bb(173):
        try {
          return JSON.stringify(d[c++]);
        } catch (h) {
          return __abx$10a4bb(172);
        }
      default:
        return a2;
    }
  });
  for (var f = d[c]; c < e; f = d[++c]) b = null !== f && Hb(f) ? b + (__abx$10a4bb(94) + H(f)) : b + (__abx$10a4bb(94) + f);
  return b;
}
function Ib(a, b) {
  if (Jb(la.process)) return function() {
    return Ib(a, b).apply(this, arguments);
  };
  if (true === Cb.noDeprecation) return a;
  var c = false;
  return function() {
    if (!c) {
      if (Cb.throwDeprecation) throw Error(b);
      Cb.traceDeprecation ? console.trace(b) : console.error(b);
      c = true;
    }
    return a.apply(this, arguments);
  };
}
var Kb = {}, Lb;
function Mb(a) {
  Jb(Lb) && (Lb = Cb.env.NODE_DEBUG || __abx$10a4bb(7));
  a = a.toUpperCase();
  Kb[a] || (new RegExp(__abx$10a4bb(174) + a + __abx$10a4bb(174), __abx$10a4bb(175)).test(Lb) ? Kb[a] = function() {
    var b = Fb.apply(null, arguments);
    console.error(__abx$10a4bb(176), a, 0, b);
  } : Kb[a] = function() {
  });
  return Kb[a];
}
function H(a, b) {
  var c = { seen: [], stylize: Nb };
  3 <= arguments.length && (c.depth = arguments[2]);
  4 <= arguments.length && (c.colors = arguments[3]);
  Ob(b) ? c.showHidden = b : b && Pb(c, b);
  Jb(c.showHidden) && (c.showHidden = false);
  Jb(c.depth) && (c.depth = 2);
  Jb(c.colors) && (c.colors = false);
  Jb(c.customInspect) && (c.customInspect = true);
  c.colors && (c.stylize = Qb);
  return Rb(c, a, c.depth);
}
H.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
H.styles = { special: __abx$10a4bb(177), number: __abx$10a4bb(178), [__abx$10a4bb(65)]: __abx$10a4bb(178), undefined: __abx$10a4bb(179), [__abx$10a4bb(180)]: __abx$10a4bb(181), string: __abx$10a4bb(182), date: __abx$10a4bb(183), regexp: __abx$10a4bb(184) };
function Qb(a, b) {
  return (b = H.styles[b]) ? __abx$10a4bb(185) + H.colors[b][0] + __abx$10a4bb(186) + a + __abx$10a4bb(185) + H.colors[b][1] + __abx$10a4bb(186) : a;
}
function Nb(a) {
  return a;
}
function Sb(a) {
  var b = {};
  a.forEach(function(a2) {
    b[a2] = true;
  });
  return b;
}
function Rb(a, b, c) {
  if (a.customInspect && b && Tb(b.inspect) && b.inspect !== H && (!b.constructor || b.constructor.prototype !== b)) {
    var d = b.inspect(c, a);
    Gb(d) || (d = Rb(a, d, c));
    return d;
  }
  if (d = Ub(a, b)) return d;
  var e = Object.keys(b), f = Sb(e);
  a.showHidden && (e = Object.getOwnPropertyNames(b));
  if (Vb(b) && (0 <= e.indexOf(__abx$10a4bb(187)) || 0 <= e.indexOf(__abx$10a4bb(188)))) return Zb(b);
  if (0 === e.length) {
    if (Tb(b)) return a.stylize(__abx$10a4bb(189) + (b.name ? __abx$10a4bb(190) + b.name : __abx$10a4bb(7)) + __abx$10a4bb(191), __abx$10a4bb(192));
    if (ac(b)) return a.stylize(
      RegExp.prototype.toString.call(b),
      __abx$10a4bb(193)
    );
    if (bc(b)) return a.stylize(Date.prototype.toString.call(b), __abx$10a4bb(194));
    if (Vb(b)) return Zb(b);
  }
  d = __abx$10a4bb(7);
  var g = false, h = [__abx$10a4bb(195), __abx$10a4bb(196)];
  cc(b) && (g = true, h = [__abx$10a4bb(197), __abx$10a4bb(191)]);
  Tb(b) && (d = __abx$10a4bb(198) + (b.name ? __abx$10a4bb(190) + b.name : __abx$10a4bb(7)) + __abx$10a4bb(191));
  ac(b) && (d = __abx$10a4bb(94) + RegExp.prototype.toString.call(b));
  bc(b) && (d = __abx$10a4bb(94) + Date.prototype.toUTCString.call(b));
  Vb(b) && (d = __abx$10a4bb(94) + Zb(b));
  if (0 === e.length && (!g || 0 == b.length)) return h[0] + d + h[1];
  if (0 > c) return ac(b) ? a.stylize(RegExp.prototype.toString.call(b), __abx$10a4bb(193)) : a.stylize(__abx$10a4bb(199), __abx$10a4bb(192));
  a.seen.push(b);
  e = g ? dc(a, b, c, f, e) : e.map(function(d2) {
    return ec(a, b, c, f, d2, g);
  });
  a.seen.pop();
  return fc(e, d, h);
}
function Ub(a, b) {
  if (Jb(b)) return a.stylize(__abx$10a4bb(0), __abx$10a4bb(0));
  if (Gb(b)) return b = __abx$10a4bb(200) + JSON.stringify(b).replace(/^"|"$/g, __abx$10a4bb(7)).replace(/'/g, __abx$10a4bb(201)).replace(/\\"/g, __abx$10a4bb(202)) + __abx$10a4bb(200), a.stylize(b, __abx$10a4bb(18));
  if (gc(b)) return a.stylize(__abx$10a4bb(7) + b, __abx$10a4bb(17));
  if (Ob(b)) return a.stylize(__abx$10a4bb(7) + b, __abx$10a4bb(65));
  if (null === b) return a.stylize(__abx$10a4bb(180), __abx$10a4bb(180));
}
function Zb(a) {
  return __abx$10a4bb(197) + Error.prototype.toString.call(a) + __abx$10a4bb(191);
}
function dc(a, b, c, d, e) {
  for (var f = [], g = 0, h = b.length; g < h; ++g) Object.prototype.hasOwnProperty.call(b, String(g)) ? f.push(ec(a, b, c, d, String(g), true)) : f.push(__abx$10a4bb(7));
  e.forEach(function(e2) {
    e2.match(/^\d+$/) || f.push(ec(a, b, c, d, e2, true));
  });
  return f;
}
function ec(a, b, c, d, e, f) {
  var g, h;
  b = Object.getOwnPropertyDescriptor(b, e) || { value: b[e] };
  b.get ? h = b.set ? a.stylize(__abx$10a4bb(203), __abx$10a4bb(192)) : a.stylize(__abx$10a4bb(204), __abx$10a4bb(192)) : b.set && (h = a.stylize(__abx$10a4bb(205), __abx$10a4bb(192)));
  Object.prototype.hasOwnProperty.call(d, e) || (g = __abx$10a4bb(197) + e + __abx$10a4bb(191));
  h || (0 > a.seen.indexOf(b.value) ? (h = null === c ? Rb(a, b.value, null) : Rb(a, b.value, c - 1), -1 < h.indexOf(__abx$10a4bb(206)) && (h = f ? h.split(__abx$10a4bb(206)).map(function(a2) {
    return __abx$10a4bb(207) + a2;
  }).join(__abx$10a4bb(206)).substr(2) : __abx$10a4bb(206) + h.split(__abx$10a4bb(206)).map(function(a2) {
    return __abx$10a4bb(208) + a2;
  }).join(__abx$10a4bb(206)))) : h = a.stylize(__abx$10a4bb(172), __abx$10a4bb(192)));
  if (Jb(g)) {
    if (f && e.match(/^\d+$/)) return h;
    g = JSON.stringify(__abx$10a4bb(7) + e);
    g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (g = g.substr(1, g.length - 2), g = a.stylize(g, __abx$10a4bb(209))) : (g = g.replace(/'/g, __abx$10a4bb(201)).replace(/\\"/g, __abx$10a4bb(202)).replace(/(^"|"$)/g, __abx$10a4bb(200)), g = a.stylize(g, __abx$10a4bb(18)));
  }
  return g + __abx$10a4bb(190) + h;
}
function fc(a, b, c) {
  return 60 < a.reduce(function(a2, b2) {
    b2.indexOf(__abx$10a4bb(206));
    return a2 + b2.replace(/\u001b\[\d\d?m/g, __abx$10a4bb(7)).length + 1;
  }, 0) ? c[0] + (__abx$10a4bb(7) === b ? __abx$10a4bb(7) : b + __abx$10a4bb(210)) + __abx$10a4bb(94) + a.join(__abx$10a4bb(211)) + __abx$10a4bb(94) + c[1] : c[0] + b + __abx$10a4bb(94) + a.join(__abx$10a4bb(212)) + __abx$10a4bb(94) + c[1];
}
function cc(a) {
  return Array.isArray(a);
}
function Ob(a) {
  return __abx$10a4bb(65) === typeof a;
}
function gc(a) {
  return __abx$10a4bb(17) === typeof a;
}
function Gb(a) {
  return __abx$10a4bb(18) === typeof a;
}
function Jb(a) {
  return void 0 === a;
}
function ac(a) {
  return Hb(a) && __abx$10a4bb(213) === Object.prototype.toString.call(a);
}
function Hb(a) {
  return __abx$10a4bb(118) === typeof a && null !== a;
}
function bc(a) {
  return Hb(a) && __abx$10a4bb(214) === Object.prototype.toString.call(a);
}
function Vb(a) {
  return Hb(a) && (__abx$10a4bb(215) === Object.prototype.toString.call(a) || a instanceof Error);
}
function Tb(a) {
  return __abx$10a4bb(9) === typeof a;
}
function hc(a) {
  return null === a || __abx$10a4bb(65) === typeof a || __abx$10a4bb(17) === typeof a || __abx$10a4bb(18) === typeof a || __abx$10a4bb(216) === typeof a || __abx$10a4bb(0) === typeof a;
}
function ic(a) {
  return 10 > a ? __abx$10a4bb(80) + a.toString(10) : a.toString(10);
}
var jc = __abx$10a4bb(217).split(__abx$10a4bb(94));
function kc() {
  var a = /* @__PURE__ */ new Date(), b = [ic(a.getHours()), ic(a.getMinutes()), ic(a.getSeconds())].join(__abx$10a4bb(120));
  return [a.getDate(), jc[a.getMonth()], b].join(__abx$10a4bb(94));
}
function Pb(a, b) {
  if (!b || !Hb(b)) return a;
  for (var c = Object.keys(b), d = c.length; d--; ) a[c[d]] = b[c[d]];
  return a;
}
var lc = { inherits: Db, _extend: Pb, log: function() {
  console.log(__abx$10a4bb(218), kc(), Fb.apply(null, arguments));
}, isBuffer: function(a) {
  return Na(a);
}, isPrimitive: hc, isFunction: Tb, isError: Vb, isDate: bc, isObject: Hb, isRegExp: ac, isUndefined: Jb, isSymbol: function(a) {
  return __abx$10a4bb(216) === typeof a;
}, isString: Gb, isNumber: gc, isNullOrUndefined: function(a) {
  return null == a;
}, isNull: function(a) {
  return null === a;
}, isBoolean: Ob, isArray: cc, inspect: H, deprecate: Ib, format: Fb, debuglog: Mb };
function mc(a, b) {
  if (a === b) return 0;
  for (var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e) if (a[e] !== b[e]) {
    c = a[e];
    d = b[e];
    break;
  }
  return c < d ? -1 : d < c ? 1 : 0;
}
var nc = Object.prototype.hasOwnProperty, oc = Object.keys || function(a) {
  var b = [], c;
  for (c in a) nc.call(a, c) && b.push(c);
  return b;
}, pc = Array.prototype.slice, qc;
function rc() {
  return __abx$10a4bb(0) !== typeof qc ? qc : qc = (function() {
    return __abx$10a4bb(219) === (function() {
    }).name;
  })();
}
function sc(a) {
  return Na(a) || __abx$10a4bb(9) !== typeof la.ArrayBuffer ? false : __abx$10a4bb(9) === typeof ArrayBuffer.isView ? ArrayBuffer.isView(a) : a ? a instanceof DataView || a.buffer && a.buffer instanceof ArrayBuffer ? true : false : false;
}
function I(a, b) {
  a || J(a, true, b, __abx$10a4bb(8), tc);
}
var uc = /\s*function\s+([^\(\s]*)\s*/;
function vc(a) {
  if (Tb(a)) return rc() ? a.name : (a = a.toString().match(uc)) && a[1];
}
I.AssertionError = wc;
function wc(a) {
  this.name = __abx$10a4bb(220);
  this.actual = a.actual;
  this.expected = a.expected;
  this.operator = a.operator;
  a.message ? (this.message = a.message, this.generatedMessage = false) : (this.message = xc(yc(this.actual), 128) + __abx$10a4bb(94) + this.operator + __abx$10a4bb(94) + xc(yc(this.expected), 128), this.generatedMessage = true);
  var b = a.stackStartFunction || J;
  Error.captureStackTrace ? Error.captureStackTrace(this, b) : (a = Error(), a.stack && (a = a.stack, b = vc(b), b = a.indexOf(__abx$10a4bb(206) + b), 0 <= b && (b = a.indexOf(__abx$10a4bb(206), b + 1), a = a.substring(b + 1)), this.stack = a));
}
Db(wc, Error);
function xc(a, b) {
  return __abx$10a4bb(18) === typeof a ? a.length < b ? a : a.slice(0, b) : a;
}
function yc(a) {
  if (rc() || !Tb(a)) return H(a);
  a = vc(a);
  return __abx$10a4bb(189) + (a ? __abx$10a4bb(190) + a : __abx$10a4bb(7)) + __abx$10a4bb(191);
}
function J(a, b, c, d, e) {
  throw new wc({ message: c, actual: a, expected: b, operator: d, stackStartFunction: e });
}
I.fail = J;
function tc(a, b) {
  a || J(a, true, b, __abx$10a4bb(8), tc);
}
I.ok = tc;
I.equal = zc;
function zc(a, b, c) {
  a != b && J(a, b, c, __abx$10a4bb(8), zc);
}
I.notEqual = Ac;
function Ac(a, b, c) {
  a == b && J(a, b, c, __abx$10a4bb(221), Ac);
}
I.deepEqual = Bc;
function Bc(a, b, c) {
  Cc(a, b, false) || J(a, b, c, __abx$10a4bb(222), Bc);
}
I.deepStrictEqual = Dc;
function Dc(a, b, c) {
  Cc(a, b, true) || J(a, b, c, __abx$10a4bb(223), Dc);
}
function Cc(a, b, c, d) {
  if (a === b) return true;
  if (Na(a) && Na(b)) return 0 === mc(a, b);
  if (bc(a) && bc(b)) return a.getTime() === b.getTime();
  if (ac(a) && ac(b)) return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
  if (null !== a && __abx$10a4bb(118) === typeof a || null !== b && __abx$10a4bb(118) === typeof b) {
    if (!sc(a) || !sc(b) || Object.prototype.toString.call(a) !== Object.prototype.toString.call(b) || a instanceof Float32Array || a instanceof Float64Array) {
      if (Na(a) !== Na(b)) return false;
      d = d || { actual: [], expected: [] };
      var e = d.actual.indexOf(a);
      if (-1 !== e && e === d.expected.indexOf(b)) return true;
      d.actual.push(a);
      d.expected.push(b);
      return Ec(a, b, c, d);
    }
    return 0 === mc(new Uint8Array(a.buffer), new Uint8Array(b.buffer));
  }
  return c ? a === b : a == b;
}
function Fc(a) {
  return __abx$10a4bb(224) == Object.prototype.toString.call(a);
}
function Ec(a, b, c, d) {
  if (null === a || void 0 === a || null === b || void 0 === b) return false;
  if (hc(a) || hc(b)) return a === b;
  if (c && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
  var e = Fc(a), f = Fc(b);
  if (e && !f || !e && f) return false;
  if (e) return a = pc.call(a), b = pc.call(b), Cc(a, b, c);
  e = oc(a);
  var g = oc(b);
  if (e.length !== g.length) return false;
  e.sort();
  g.sort();
  for (f = e.length - 1; 0 <= f; f--) if (e[f] !== g[f]) return false;
  for (f = e.length - 1; 0 <= f; f--) if (g = e[f], !Cc(a[g], b[g], c, d)) return false;
  return true;
}
I.notDeepEqual = Gc;
function Gc(a, b, c) {
  Cc(a, b, false) && J(a, b, c, __abx$10a4bb(225), Gc);
}
I.notDeepStrictEqual = Hc;
function Hc(a, b, c) {
  Cc(a, b, true) && J(a, b, c, __abx$10a4bb(226), Hc);
}
I.strictEqual = Ic;
function Ic(a, b, c) {
  a !== b && J(a, b, c, __abx$10a4bb(227), Ic);
}
I.notStrictEqual = Jc;
function Jc(a, b, c) {
  a === b && J(a, b, c, __abx$10a4bb(228), Jc);
}
function Kc(a, b) {
  if (!a || !b) return false;
  if (__abx$10a4bb(213) == Object.prototype.toString.call(b)) return b.test(a);
  try {
    if (a instanceof b) return true;
  } catch (c) {
  }
  return Error.isPrototypeOf(b) ? false : true === b.call({}, a);
}
function Lc(a, b, c, d) {
  if (__abx$10a4bb(9) !== typeof b) throw new TypeError(__abx$10a4bb(229));
  __abx$10a4bb(18) === typeof c && (d = c, c = null);
  try {
    b();
  } catch (h) {
    var e = h;
  }
  b = e;
  d = (c && c.name ? __abx$10a4bb(151) + c.name + __abx$10a4bb(230) : __abx$10a4bb(115)) + (d ? __abx$10a4bb(94) + d : __abx$10a4bb(115));
  a && !b && J(b, c, __abx$10a4bb(231) + d);
  e = __abx$10a4bb(18) === typeof d;
  var f = !a && Vb(b), g = !a && b && !c;
  (f && e && Kc(b, c) || g) && J(b, c, __abx$10a4bb(232) + d);
  if (a && b && c && !Kc(b, c) || !a && b) throw b;
}
I.throws = Mc;
function Mc(a, b, c) {
  Lc(true, a, b, c);
}
I.doesNotThrow = Nc;
function Nc(a, b, c) {
  Lc(false, a, b, c);
}
I.ifError = Oc;
function Oc(a) {
  if (a) throw a;
}
var Pc = u(function(a, b) {
  function c(a2) {
    return (function(a3) {
      function b2(b3) {
        for (var c2 = [], e2 = 1; e2 < arguments.length; e2++) c2[e2 - 1] = arguments[e2];
        c2 = a3.call(this, d(b3, c2)) || this;
        c2.code = b3;
        c2[h] = b3;
        c2.name = a3.prototype.name + __abx$10a4bb(233) + c2[h] + __abx$10a4bb(191);
        return c2;
      }
      g(b2, a3);
      return b2;
    })(a2);
  }
  function d(a2, b2) {
    I.strictEqual(typeof a2, __abx$10a4bb(18));
    var c2 = k2[a2];
    I(c2, __abx$10a4bb(234) + a2 + __abx$10a4bb(115));
    if (__abx$10a4bb(9) === typeof c2) a2 = c2;
    else {
      a2 = lc.format;
      if (void 0 === b2 || 0 === b2.length) return c2;
      b2.unshift(c2);
    }
    return String(a2.apply(null, b2));
  }
  function e(a2, b2) {
    k2[a2] = __abx$10a4bb(9) === typeof b2 ? b2 : String(b2);
  }
  function f(a2, b2) {
    I(a2, __abx$10a4bb(235));
    I(__abx$10a4bb(18) === typeof b2, __abx$10a4bb(236));
    if (Array.isArray(a2)) {
      var c2 = a2.length;
      I(0 < c2, __abx$10a4bb(237));
      a2 = a2.map(function(a3) {
        return String(a3);
      });
      return 2 < c2 ? __abx$10a4bb(238) + b2 + __abx$10a4bb(94) + a2.slice(0, c2 - 1).join(__abx$10a4bb(212)) + __abx$10a4bb(239) + a2[c2 - 1] : 2 === c2 ? __abx$10a4bb(238) + b2 + __abx$10a4bb(94) + a2[0] + __abx$10a4bb(240) + a2[1] : __abx$10a4bb(241) + b2 + __abx$10a4bb(94) + a2[0];
    }
    return __abx$10a4bb(241) + b2 + __abx$10a4bb(94) + String(a2);
  }
  var g = l && l.__extends || /* @__PURE__ */ (function() {
    function a2(b2, c2) {
      a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, b3) {
        a3.__proto__ = b3;
      } || function(a3, b3) {
        for (var c3 in b3) b3.hasOwnProperty(c3) && (a3[c3] = b3[c3]);
      };
      return a2(b2, c2);
    }
    return function(b2, c2) {
      function d2() {
        this.constructor = b2;
      }
      a2(b2, c2);
      b2.prototype = null === c2 ? Object.create(c2) : (d2.prototype = c2.prototype, new d2());
    };
  })();
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  var h = __abx$10a4bb(0) === typeof Symbol ? __abx$10a4bb(242) : Symbol(__abx$10a4bb(243)), k2 = {};
  a = (function(a2) {
    function c2(c3) {
      if (__abx$10a4bb(118) !== typeof c3 || null === c3) throw new b.TypeError(__abx$10a4bb(244), __abx$10a4bb(245), __abx$10a4bb(118));
      var d2 = c3.message ? a2.call(this, c3.message) || this : a2.call(this, lc.inspect(c3.actual).slice(0, 128) + __abx$10a4bb(94) + (c3.operator + __abx$10a4bb(94) + lc.inspect(c3.expected).slice(0, 128))) || this;
      d2.generatedMessage = !c3.message;
      d2.name = __abx$10a4bb(246);
      d2.code = __abx$10a4bb(247);
      d2.actual = c3.actual;
      d2.expected = c3.expected;
      d2.operator = c3.operator;
      b.Error.captureStackTrace(d2, c3.stackStartFunction);
      return d2;
    }
    g(c2, a2);
    return c2;
  })(l.Error);
  b.AssertionError = a;
  b.message = d;
  b.E = e;
  b.Error = c(l.Error);
  b.TypeError = c(l.TypeError);
  b.RangeError = c(l.RangeError);
  e(
    __abx$10a4bb(248),
    __abx$10a4bb(249)
  );
  e(__abx$10a4bb(247), __abx$10a4bb(170));
  e(__abx$10a4bb(250), function(a2, b2) {
    return b2 ? __abx$10a4bb(55) : __abx$10a4bb(202) + a2 + __abx$10a4bb(251);
  });
  e(__abx$10a4bb(252), __abx$10a4bb(253));
  e(__abx$10a4bb(254), __abx$10a4bb(255));
  e(__abx$10a4bb(256), __abx$10a4bb(257));
  e(__abx$10a4bb(258), function(a2, b2) {
    return __abx$10a4bb(259) + a2 + __abx$10a4bb(260) + b2 + __abx$10a4bb(191);
  });
  e(
    __abx$10a4bb(261),
    __abx$10a4bb(262)
  );
  e(__abx$10a4bb(263), function(a2) {
    return __abx$10a4bb(264) + a2 + __abx$10a4bb(265);
  });
  e(__abx$10a4bb(266), function(a2) {
    return __abx$10a4bb(267) + a2;
  });
  e(__abx$10a4bb(268), __abx$10a4bb(269));
  e(__abx$10a4bb(270), __abx$10a4bb(271));
  e(__abx$10a4bb(272), __abx$10a4bb(273));
  e(__abx$10a4bb(274), __abx$10a4bb(60));
  e(__abx$10a4bb(244), function(a2, b2, c2) {
    I(a2, __abx$10a4bb(275));
    if (b2.includes(__abx$10a4bb(276))) {
      var d2 = __abx$10a4bb(277);
      b2 = b2.split(__abx$10a4bb(276))[1];
    } else d2 = __abx$10a4bb(278);
    if (Array.isArray(a2)) d2 = __abx$10a4bb(279) + a2.map(function(a3) {
      return __abx$10a4bb(202) + a3 + __abx$10a4bb(202);
    }).join(__abx$10a4bb(212)) + __abx$10a4bb(280) + d2 + __abx$10a4bb(94) + f(b2, __abx$10a4bb(281));
    else if (a2.includes(__abx$10a4bb(282))) d2 = __abx$10a4bb(279) + a2 + __abx$10a4bb(94) + d2 + __abx$10a4bb(94) + f(b2, __abx$10a4bb(281));
    else {
      var e2 = a2.includes(__abx$10a4bb(115)) ? __abx$10a4bb(283) : __abx$10a4bb(284);
      d2 = __abx$10a4bb(264) + a2 + __abx$10a4bb(285) + e2 + __abx$10a4bb(94) + d2 + __abx$10a4bb(94) + f(b2, __abx$10a4bb(281));
    }
    3 <= arguments.length && (d2 += __abx$10a4bb(286) + (null !== c2 ? typeof c2 : __abx$10a4bb(180)));
    return d2;
  });
  e(
    __abx$10a4bb(287),
    function(a2, b2, c2) {
      I.strictEqual(typeof c2, __abx$10a4bb(17));
      return __abx$10a4bb(288) + a2 + __abx$10a4bb(289) + c2 + __abx$10a4bb(290) + b2 + __abx$10a4bb(115);
    }
  );
  e(__abx$10a4bb(291), __abx$10a4bb(292));
  e(__abx$10a4bb(293), __abx$10a4bb(294));
  e(__abx$10a4bb(295), __abx$10a4bb(296));
  e(__abx$10a4bb(297), __abx$10a4bb(298));
  e(__abx$10a4bb(299), __abx$10a4bb(300));
  e(__abx$10a4bb(301), __abx$10a4bb(302));
  e(__abx$10a4bb(303), __abx$10a4bb(304));
  e(__abx$10a4bb(305), __abx$10a4bb(306));
  e(__abx$10a4bb(307), __abx$10a4bb(308));
  e(__abx$10a4bb(309), function(a2, b2) {
    return __abx$10a4bb(15) + String(b2) + __abx$10a4bb(310) + a2 + __abx$10a4bb(202);
  });
  e(__abx$10a4bb(311), function(a2) {
    return __abx$10a4bb(15) + String(a2) + __abx$10a4bb(312);
  });
  e(__abx$10a4bb(313), __abx$10a4bb(314));
  e(
    __abx$10a4bb(315),
    __abx$10a4bb(316)
  );
  e(__abx$10a4bb(317), __abx$10a4bb(318));
  e(__abx$10a4bb(319), __abx$10a4bb(320));
  e(__abx$10a4bb(321), __abx$10a4bb(322));
  e(__abx$10a4bb(323), function(a2) {
    return __abx$10a4bb(324) + f(a2, __abx$10a4bb(325));
  });
  e(__abx$10a4bb(326), __abx$10a4bb(327));
  e(__abx$10a4bb(328), __abx$10a4bb(329));
  e(__abx$10a4bb(330), __abx$10a4bb(331));
  e(
    __abx$10a4bb(332),
    __abx$10a4bb(333)
  );
  e(__abx$10a4bb(334), function() {
    for (var a2 = [], b2 = 0; b2 < arguments.length; b2++) a2[b2] = arguments[b2];
    I(0 < a2.length, __abx$10a4bb(335));
    b2 = __abx$10a4bb(279);
    var c2 = a2.length;
    a2 = a2.map(function(a3) {
      return __abx$10a4bb(202) + a3 + __abx$10a4bb(202);
    });
    switch (c2) {
      case 1:
        b2 += a2[0] + __abx$10a4bb(282);
        break;
      case 2:
        b2 += a2[0] + __abx$10a4bb(336) + a2[1] + __abx$10a4bb(337);
        break;
      default:
        b2 += a2.slice(0, c2 - 1).join(__abx$10a4bb(212)), b2 += __abx$10a4bb(338) + a2[c2 - 1] + __abx$10a4bb(337);
    }
    return b2 + __abx$10a4bb(339);
  });
  e(__abx$10a4bb(340), __abx$10a4bb(341));
  e(__abx$10a4bb(342), __abx$10a4bb(343));
  e(__abx$10a4bb(344), __abx$10a4bb(345));
  e(__abx$10a4bb(346), __abx$10a4bb(347));
  e(__abx$10a4bb(348), __abx$10a4bb(349));
  e(__abx$10a4bb(350), __abx$10a4bb(351));
  e(__abx$10a4bb(352), __abx$10a4bb(353));
  e(__abx$10a4bb(354), __abx$10a4bb(355));
  e(__abx$10a4bb(356), __abx$10a4bb(357));
  e(__abx$10a4bb(358), __abx$10a4bb(359));
  e(__abx$10a4bb(360), __abx$10a4bb(361));
  e(__abx$10a4bb(362), __abx$10a4bb(363));
  e(__abx$10a4bb(364), __abx$10a4bb(365));
  e(__abx$10a4bb(366), __abx$10a4bb(367));
  e(__abx$10a4bb(368), __abx$10a4bb(369));
  e(__abx$10a4bb(370), __abx$10a4bb(371));
  e(__abx$10a4bb(372), function(a2) {
    return __abx$10a4bb(373) + a2 + __abx$10a4bb(374);
  });
  e(__abx$10a4bb(375), __abx$10a4bb(376));
  e(__abx$10a4bb(377), __abx$10a4bb(378));
  e(__abx$10a4bb(379), __abx$10a4bb(380));
  e(__abx$10a4bb(381), __abx$10a4bb(382));
  e(__abx$10a4bb(383), __abx$10a4bb(384));
  e(__abx$10a4bb(385), __abx$10a4bb(386));
  e(__abx$10a4bb(387), __abx$10a4bb(388));
  e(__abx$10a4bb(389), __abx$10a4bb(390));
  e(__abx$10a4bb(391), __abx$10a4bb(392));
  e(__abx$10a4bb(393), __abx$10a4bb(394));
  e(__abx$10a4bb(395), __abx$10a4bb(396));
});
t(Pc);
var K = u(function(a, b) {
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  b.ENCODING_UTF8 = __abx$10a4bb(23);
  b.assertEncoding = function(a2) {
    if (a2 && !F.Buffer.isEncoding(a2)) throw new Pc.TypeError(__abx$10a4bb(311), a2);
  };
  b.strToEncoding = function(a2, d) {
    return d && d !== b.ENCODING_UTF8 ? __abx$10a4bb(397) === d ? new F.Buffer(a2) : new F.Buffer(a2).toString(d) : a2;
  };
});
t(K);
var Qc = u(function(a, b) {
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  var c = w.constants.S_IFMT, d = w.constants.S_IFDIR, e = w.constants.S_IFREG, f = w.constants.S_IFBLK, g = w.constants.S_IFCHR, h = w.constants.S_IFLNK, k2 = w.constants.S_IFIFO, p = w.constants.S_IFSOCK;
  a = (function() {
    function a2() {
      this.name = __abx$10a4bb(7);
      this.mode = 0;
    }
    a2.build = function(b2, c2) {
      var d2 = new a2(), e2 = b2.getNode().mode;
      d2.name = K.strToEncoding(b2.getName(), c2);
      d2.mode = e2;
      return d2;
    };
    a2.prototype._checkModeProperty = function(a3) {
      return (this.mode & c) === a3;
    };
    a2.prototype.isDirectory = function() {
      return this._checkModeProperty(d);
    };
    a2.prototype.isFile = function() {
      return this._checkModeProperty(e);
    };
    a2.prototype.isBlockDevice = function() {
      return this._checkModeProperty(f);
    };
    a2.prototype.isCharacterDevice = function() {
      return this._checkModeProperty(g);
    };
    a2.prototype.isSymbolicLink = function() {
      return this._checkModeProperty(h);
    };
    a2.prototype.isFIFO = function() {
      return this._checkModeProperty(k2);
    };
    a2.prototype.isSocket = function() {
      return this._checkModeProperty(p);
    };
    return a2;
  })();
  b.Dirent = a;
  b.default = a;
});
t(Qc);
function Rc(a, b) {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var e = a[d];
    __abx$10a4bb(115) === e ? a.splice(d, 1) : __abx$10a4bb(114) === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) for (; c--; c) a.unshift(__abx$10a4bb(114));
  return a;
}
function Tc() {
  for (var a = __abx$10a4bb(7), b = false, c = arguments.length - 1; -1 <= c && !b; c--) {
    var d = 0 <= c ? arguments[c] : __abx$10a4bb(71);
    if (__abx$10a4bb(18) !== typeof d) throw new TypeError(__abx$10a4bb(398));
    d && (a = d + __abx$10a4bb(71) + a, b = __abx$10a4bb(71) === d.charAt(0));
  }
  a = Rc(Uc(a.split(__abx$10a4bb(71)), function(a2) {
    return !!a2;
  }), !b).join(__abx$10a4bb(71));
  return (b ? __abx$10a4bb(71) : __abx$10a4bb(7)) + a || __abx$10a4bb(115);
}
function Yc(a, b) {
  function c(a2) {
    for (var b2 = 0; b2 < a2.length && __abx$10a4bb(7) === a2[b2]; b2++) ;
    for (var c2 = a2.length - 1; 0 <= c2 && __abx$10a4bb(7) === a2[c2]; c2--) ;
    return b2 > c2 ? [] : a2.slice(b2, c2 - b2 + 1);
  }
  a = Tc(a).substr(1);
  b = Tc(b).substr(1);
  a = c(a.split(__abx$10a4bb(71)));
  b = c(b.split(__abx$10a4bb(71)));
  for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++) if (a[f] !== b[f]) {
    e = f;
    break;
  }
  d = [];
  for (f = e; f < a.length; f++) d.push(__abx$10a4bb(114));
  d = d.concat(b.slice(e));
  return d.join(__abx$10a4bb(71));
}
var Zc = { sep: __abx$10a4bb(71), relative: Yc, resolve: Tc };
function Uc(a, b) {
  if (a.filter) return a.filter(b);
  for (var c = [], d = 0; d < a.length; d++) b(a[d], d, a) && c.push(a[d]);
  return c;
}
var $c = u(function(a, b) {
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  a = __abx$10a4bb(9) === typeof setImmediate ? setImmediate.bind(l) : setTimeout.bind(l);
  b.default = a;
});
t($c);
var L = u(function(a, b) {
  function c() {
    var a2 = Cb || {};
    a2.getuid || (a2.getuid = function() {
      return 0;
    });
    a2.getgid || (a2.getgid = function() {
      return 0;
    });
    a2.cwd || (a2.cwd = function() {
      return __abx$10a4bb(71);
    });
    a2.nextTick || (a2.nextTick = $c.default);
    a2.emitWarning || (a2.emitWarning = function(a3, b2) {
      console.warn(__abx$10a4bb(7) + b2 + (b2 ? __abx$10a4bb(190) : __abx$10a4bb(7)) + a3);
    });
    a2.env || (a2.env = {});
    return a2;
  }
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  b.createProcess = c;
  b.default = c();
});
t(L);
function ad() {
}
ad.prototype = /* @__PURE__ */ Object.create(null);
function O() {
  O.init.call(this);
}
O.EventEmitter = O;
O.usingDomains = false;
O.prototype.domain = void 0;
O.prototype._events = void 0;
O.prototype._maxListeners = void 0;
O.defaultMaxListeners = 10;
O.init = function() {
  this.domain = null;
  this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new ad(), this._eventsCount = 0);
  this._maxListeners = this._maxListeners || void 0;
};
O.prototype.setMaxListeners = function(a) {
  if (__abx$10a4bb(17) !== typeof a || 0 > a || isNaN(a)) throw new TypeError(__abx$10a4bb(399));
  this._maxListeners = a;
  return this;
};
O.prototype.getMaxListeners = function() {
  return void 0 === this._maxListeners ? O.defaultMaxListeners : this._maxListeners;
};
O.prototype.emit = function(a) {
  var b, c;
  var d = __abx$10a4bb(400) === a;
  if (b = this._events) d = d && null == b.error;
  else if (!d) return false;
  var e = this.domain;
  if (d) {
    b = arguments[1];
    if (e) b || (b = Error(__abx$10a4bb(401))), b.domainEmitter = this, b.domain = e, b.domainThrown = false, e.emit(__abx$10a4bb(400), b);
    else {
      if (b instanceof Error) throw b;
      e = Error(__abx$10a4bb(402) + b + __abx$10a4bb(152));
      e.context = b;
      throw e;
    }
    return false;
  }
  e = b[a];
  if (!e) return false;
  b = __abx$10a4bb(9) === typeof e;
  var f = arguments.length;
  switch (f) {
    case 1:
      if (b) e.call(this);
      else for (b = e.length, e = bd(e, b), d = 0; d < b; ++d) e[d].call(this);
      break;
    case 2:
      d = arguments[1];
      if (b) e.call(this, d);
      else for (b = e.length, e = bd(e, b), f = 0; f < b; ++f) e[f].call(this, d);
      break;
    case 3:
      d = arguments[1];
      f = arguments[2];
      if (b) e.call(this, d, f);
      else for (b = e.length, e = bd(e, b), c = 0; c < b; ++c) e[c].call(this, d, f);
      break;
    case 4:
      d = arguments[1];
      f = arguments[2];
      c = arguments[3];
      if (b) e.call(this, d, f, c);
      else {
        b = e.length;
        e = bd(e, b);
        for (var g = 0; g < b; ++g) e[g].call(this, d, f, c);
      }
      break;
    default:
      d = Array(f - 1);
      for (c = 1; c < f; c++) d[c - 1] = arguments[c];
      if (b) e.apply(this, d);
      else for (b = e.length, e = bd(e, b), f = 0; f < b; ++f) e[f].apply(this, d);
  }
  return true;
};
function cd(a, b, c, d) {
  var e;
  if (__abx$10a4bb(9) !== typeof c) throw new TypeError(__abx$10a4bb(403));
  if (e = a._events) {
    e.newListener && (a.emit(__abx$10a4bb(404), b, c.listener ? c.listener : c), e = a._events);
    var f = e[b];
  } else e = a._events = new ad(), a._eventsCount = 0;
  f ? (__abx$10a4bb(9) === typeof f ? f = e[b] = d ? [c, f] : [f, c] : d ? f.unshift(c) : f.push(c), f.warned || (c = void 0 === a._maxListeners ? O.defaultMaxListeners : a._maxListeners) && 0 < c && f.length > c && (f.warned = true, c = Error(__abx$10a4bb(405) + f.length + __abx$10a4bb(94) + b + __abx$10a4bb(406)), c.name = __abx$10a4bb(407), c.emitter = a, c.type = b, c.count = f.length, __abx$10a4bb(9) === typeof console.warn ? console.warn(c) : console.log(c))) : (e[b] = c, ++a._eventsCount);
  return a;
}
O.prototype.addListener = function(a, b) {
  return cd(this, a, b, false);
};
O.prototype.on = O.prototype.addListener;
O.prototype.prependListener = function(a, b) {
  return cd(this, a, b, true);
};
function dd(a, b, c) {
  function d() {
    a.removeListener(b, d);
    e || (e = true, c.apply(a, arguments));
  }
  var e = false;
  d.listener = c;
  return d;
}
O.prototype.once = function(a, b) {
  if (__abx$10a4bb(9) !== typeof b) throw new TypeError(__abx$10a4bb(403));
  this.on(a, dd(this, a, b));
  return this;
};
O.prototype.prependOnceListener = function(a, b) {
  if (__abx$10a4bb(9) !== typeof b) throw new TypeError(__abx$10a4bb(403));
  this.prependListener(a, dd(this, a, b));
  return this;
};
O.prototype.removeListener = function(a, b) {
  var c;
  if (__abx$10a4bb(9) !== typeof b) throw new TypeError(__abx$10a4bb(403));
  var d = this._events;
  if (!d) return this;
  var e = d[a];
  if (!e) return this;
  if (e === b || e.listener && e.listener === b) 0 === --this._eventsCount ? this._events = new ad() : (delete d[a], d.removeListener && this.emit(__abx$10a4bb(408), a, e.listener || b));
  else if (__abx$10a4bb(9) !== typeof e) {
    var f = -1;
    for (c = e.length; 0 < c--; ) if (e[c] === b || e[c].listener && e[c].listener === b) {
      var g = e[c].listener;
      f = c;
      break;
    }
    if (0 > f) return this;
    if (1 === e.length) {
      e[0] = void 0;
      if (0 === --this._eventsCount) return this._events = new ad(), this;
      delete d[a];
    } else {
      c = f + 1;
      for (var h = e.length; c < h; f += 1, c += 1) e[f] = e[c];
      e.pop();
    }
    d.removeListener && this.emit(__abx$10a4bb(408), a, g || b);
  }
  return this;
};
O.prototype.removeAllListeners = function(a) {
  var b = this._events;
  if (!b) return this;
  if (!b.removeListener) return 0 === arguments.length ? (this._events = new ad(), this._eventsCount = 0) : b[a] && (0 === --this._eventsCount ? this._events = new ad() : delete b[a]), this;
  if (0 === arguments.length) {
    b = Object.keys(b);
    for (var c = 0, d; c < b.length; ++c) d = b[c], __abx$10a4bb(408) !== d && this.removeAllListeners(d);
    this.removeAllListeners(__abx$10a4bb(408));
    this._events = new ad();
    this._eventsCount = 0;
    return this;
  }
  b = b[a];
  if (__abx$10a4bb(9) === typeof b) this.removeListener(
    a,
    b
  );
  else if (b) {
    do
      this.removeListener(a, b[b.length - 1]);
    while (b[0]);
  }
  return this;
};
O.prototype.listeners = function(a) {
  var b = this._events;
  if (b) if (a = b[a]) if (__abx$10a4bb(9) === typeof a) a = [a.listener || a];
  else {
    b = Array(a.length);
    for (var c = 0; c < b.length; ++c) b[c] = a[c].listener || a[c];
    a = b;
  }
  else a = [];
  else a = [];
  return a;
};
O.listenerCount = function(a, b) {
  return __abx$10a4bb(9) === typeof a.listenerCount ? a.listenerCount(b) : ed.call(a, b);
};
O.prototype.listenerCount = ed;
function ed(a) {
  var b = this._events;
  if (b) {
    a = b[a];
    if (__abx$10a4bb(9) === typeof a) return 1;
    if (a) return a.length;
  }
  return 0;
}
O.prototype.eventNames = function() {
  return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : [];
};
function bd(a, b) {
  for (var c = Array(b); b--; ) c[b] = a[b];
  return c;
}
var fd = u(function(a, b) {
  var c = l && l.__extends || /* @__PURE__ */ (function() {
    function a2(b2, c2) {
      a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, b3) {
        a3.__proto__ = b3;
      } || function(a3, b3) {
        for (var c3 in b3) b3.hasOwnProperty(c3) && (a3[c3] = b3[c3]);
      };
      return a2(b2, c2);
    }
    return function(b2, c2) {
      function d2() {
        this.constructor = b2;
      }
      a2(b2, c2);
      b2.prototype = null === c2 ? Object.create(c2) : (d2.prototype = c2.prototype, new d2());
    };
  })();
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  var d = w.constants.S_IFMT, e = w.constants.S_IFDIR, f = w.constants.S_IFREG, g = w.constants.S_IFLNK, h = w.constants.O_APPEND;
  b.SEP = __abx$10a4bb(71);
  a = (function(a2) {
    function b2(b3, c2) {
      void 0 === c2 && (c2 = 438);
      var d2 = a2.call(this) || this;
      d2.uid = L.default.getuid();
      d2.gid = L.default.getgid();
      d2.atime = /* @__PURE__ */ new Date();
      d2.mtime = /* @__PURE__ */ new Date();
      d2.ctime = /* @__PURE__ */ new Date();
      d2.perm = 438;
      d2.mode = f;
      d2.nlink = 1;
      d2.perm = c2;
      d2.mode |= c2;
      d2.ino = b3;
      return d2;
    }
    c(b2, a2);
    b2.prototype.getString = function(a3) {
      void 0 === a3 && (a3 = __abx$10a4bb(23));
      return this.getBuffer().toString(a3);
    };
    b2.prototype.setString = function(a3) {
      this.buf = F.bufferFrom(a3, __abx$10a4bb(23));
      this.touch();
    };
    b2.prototype.getBuffer = function() {
      this.buf || this.setBuffer(F.bufferAllocUnsafe(0));
      return F.bufferFrom(this.buf);
    };
    b2.prototype.setBuffer = function(a3) {
      this.buf = F.bufferFrom(a3);
      this.touch();
    };
    b2.prototype.getSize = function() {
      return this.buf ? this.buf.length : 0;
    };
    b2.prototype.setModeProperty = function(a3) {
      this.mode = this.mode & ~d | a3;
    };
    b2.prototype.setIsFile = function() {
      this.setModeProperty(f);
    };
    b2.prototype.setIsDirectory = function() {
      this.setModeProperty(e);
    };
    b2.prototype.setIsSymlink = function() {
      this.setModeProperty(g);
    };
    b2.prototype.isFile = function() {
      return (this.mode & d) === f;
    };
    b2.prototype.isDirectory = function() {
      return (this.mode & d) === e;
    };
    b2.prototype.isSymlink = function() {
      return (this.mode & d) === g;
    };
    b2.prototype.makeSymlink = function(a3) {
      this.symlink = a3;
      this.setIsSymlink();
    };
    b2.prototype.write = function(a3, b3, c2, d2) {
      void 0 === b3 && (b3 = 0);
      void 0 === c2 && (c2 = a3.length);
      void 0 === d2 && (d2 = 0);
      this.buf || (this.buf = F.bufferAllocUnsafe(0));
      if (d2 + c2 > this.buf.length) {
        var e2 = F.bufferAllocUnsafe(d2 + c2);
        this.buf.copy(e2, 0, 0, this.buf.length);
        this.buf = e2;
      }
      a3.copy(this.buf, d2, b3, b3 + c2);
      this.touch();
      return c2;
    };
    b2.prototype.read = function(a3, b3, c2, d2) {
      void 0 === b3 && (b3 = 0);
      void 0 === c2 && (c2 = a3.byteLength);
      void 0 === d2 && (d2 = 0);
      this.buf || (this.buf = F.bufferAllocUnsafe(0));
      c2 > a3.byteLength && (c2 = a3.byteLength);
      c2 + d2 > this.buf.length && (c2 = this.buf.length - d2);
      this.buf.copy(a3, b3, d2, d2 + c2);
      return c2;
    };
    b2.prototype.truncate = function(a3) {
      void 0 === a3 && (a3 = 0);
      if (a3) if (this.buf || (this.buf = F.bufferAllocUnsafe(0)), a3 <= this.buf.length) this.buf = this.buf.slice(0, a3);
      else {
        var b3 = F.bufferAllocUnsafe(0);
        this.buf.copy(b3);
        b3.fill(0, a3);
      }
      else this.buf = F.bufferAllocUnsafe(0);
      this.touch();
    };
    b2.prototype.chmod = function(a3) {
      this.perm = a3;
      this.mode = this.mode & -512 | a3;
      this.touch();
    };
    b2.prototype.chown = function(a3, b3) {
      this.uid = a3;
      this.gid = b3;
      this.touch();
    };
    b2.prototype.touch = function() {
      this.mtime = /* @__PURE__ */ new Date();
      this.emit(__abx$10a4bb(409), this);
    };
    b2.prototype.canRead = function(a3, b3) {
      void 0 === a3 && (a3 = L.default.getuid());
      void 0 === b3 && (b3 = L.default.getgid());
      return this.perm & 4 || b3 === this.gid && this.perm & 32 || a3 === this.uid && this.perm & 256 ? true : false;
    };
    b2.prototype.canWrite = function(a3, b3) {
      void 0 === a3 && (a3 = L.default.getuid());
      void 0 === b3 && (b3 = L.default.getgid());
      return this.perm & 2 || b3 === this.gid && this.perm & 16 || a3 === this.uid && this.perm & 128 ? true : false;
    };
    b2.prototype.del = function() {
      this.emit(__abx$10a4bb(410), this);
    };
    b2.prototype.toJSON = function() {
      return { ino: this.ino, uid: this.uid, gid: this.gid, atime: this.atime.getTime(), mtime: this.mtime.getTime(), ctime: this.ctime.getTime(), perm: this.perm, mode: this.mode, nlink: this.nlink, symlink: this.symlink, data: this.getString() };
    };
    return b2;
  })(O.EventEmitter);
  b.Node = a;
  a = (function(a2) {
    function d2(b2, c2, d3) {
      var e2 = a2.call(this) || this;
      e2.children = {};
      e2.steps = [];
      e2.ino = 0;
      e2.length = 0;
      e2.vol = b2;
      e2.parent = c2;
      e2.steps = c2 ? c2.steps.concat([d3]) : [d3];
      return e2;
    }
    c(d2, a2);
    d2.prototype.setNode = function(a3) {
      this.node = a3;
      this.ino = a3.ino;
    };
    d2.prototype.getNode = function() {
      return this.node;
    };
    d2.prototype.createChild = function(a3, b2) {
      void 0 === b2 && (b2 = this.vol.createNode());
      var c2 = new d2(this.vol, this, a3);
      c2.setNode(b2);
      b2.isDirectory();
      this.setChild(a3, c2);
      return c2;
    };
    d2.prototype.setChild = function(a3, b2) {
      void 0 === b2 && (b2 = new d2(this.vol, this, a3));
      this.children[a3] = b2;
      b2.parent = this;
      this.length++;
      this.emit(__abx$10a4bb(411), b2, this);
      return b2;
    };
    d2.prototype.deleteChild = function(a3) {
      delete this.children[a3.getName()];
      this.length--;
      this.emit(__abx$10a4bb(412), a3, this);
    };
    d2.prototype.getChild = function(a3) {
      if (Object.hasOwnProperty.call(this.children, a3)) return this.children[a3];
    };
    d2.prototype.getPath = function() {
      return this.steps.join(b.SEP);
    };
    d2.prototype.getName = function() {
      return this.steps[this.steps.length - 1];
    };
    d2.prototype.walk = function(a3, b2, c2) {
      void 0 === b2 && (b2 = a3.length);
      void 0 === c2 && (c2 = 0);
      if (c2 >= a3.length || c2 >= b2) return this;
      var d3 = this.getChild(a3[c2]);
      return d3 ? d3.walk(a3, b2, c2 + 1) : null;
    };
    d2.prototype.toJSON = function() {
      return {
        steps: this.steps,
        ino: this.ino,
        children: Object.keys(this.children)
      };
    };
    return d2;
  })(O.EventEmitter);
  b.Link = a;
  a = (function() {
    function a2(a3, b2, c2, d2) {
      this.position = 0;
      this.link = a3;
      this.node = b2;
      this.flags = c2;
      this.fd = d2;
    }
    a2.prototype.getString = function() {
      return this.node.getString();
    };
    a2.prototype.setString = function(a3) {
      this.node.setString(a3);
    };
    a2.prototype.getBuffer = function() {
      return this.node.getBuffer();
    };
    a2.prototype.setBuffer = function(a3) {
      this.node.setBuffer(a3);
    };
    a2.prototype.getSize = function() {
      return this.node.getSize();
    };
    a2.prototype.truncate = function(a3) {
      this.node.truncate(a3);
    };
    a2.prototype.seekTo = function(a3) {
      this.position = a3;
    };
    a2.prototype.stats = function() {
      return ka.default.build(this.node);
    };
    a2.prototype.write = function(a3, b2, c2, d2) {
      void 0 === b2 && (b2 = 0);
      void 0 === c2 && (c2 = a3.length);
      __abx$10a4bb(17) !== typeof d2 && (d2 = this.position);
      this.flags & h && (d2 = this.getSize());
      a3 = this.node.write(a3, b2, c2, d2);
      this.position = d2 + a3;
      return a3;
    };
    a2.prototype.read = function(a3, b2, c2, d2) {
      void 0 === b2 && (b2 = 0);
      void 0 === c2 && (c2 = a3.byteLength);
      __abx$10a4bb(17) !== typeof d2 && (d2 = this.position);
      a3 = this.node.read(a3, b2, c2, d2);
      this.position = d2 + a3;
      return a3;
    };
    a2.prototype.chmod = function(a3) {
      this.node.chmod(a3);
    };
    a2.prototype.chown = function(a3, b2) {
      this.node.chown(a3, b2);
    };
    return a2;
  })();
  b.File = a;
});
t(fd);
var gd = fd.Node, hd = u(function(a, b) {
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  b.default = function(a2, b2, e) {
    var c = setTimeout.apply(null, arguments);
    c && __abx$10a4bb(118) === typeof c && __abx$10a4bb(9) === typeof c.unref && c.unref();
    return c;
  };
});
t(hd);
function id() {
  this.tail = this.head = null;
  this.length = 0;
}
id.prototype.push = function(a) {
  a = { data: a, next: null };
  0 < this.length ? this.tail.next = a : this.head = a;
  this.tail = a;
  ++this.length;
};
id.prototype.unshift = function(a) {
  a = { data: a, next: this.head };
  0 === this.length && (this.tail = a);
  this.head = a;
  ++this.length;
};
id.prototype.shift = function() {
  if (0 !== this.length) {
    var a = this.head.data;
    this.head = 1 === this.length ? this.tail = null : this.head.next;
    --this.length;
    return a;
  }
};
id.prototype.clear = function() {
  this.head = this.tail = null;
  this.length = 0;
};
id.prototype.join = function(a) {
  if (0 === this.length) return __abx$10a4bb(7);
  for (var b = this.head, c = __abx$10a4bb(7) + b.data; b = b.next; ) c += a + b.data;
  return c;
};
id.prototype.concat = function(a) {
  if (0 === this.length) return z.alloc(0);
  if (1 === this.length) return this.head.data;
  a = z.allocUnsafe(a >>> 0);
  for (var b = this.head, c = 0; b; ) b.data.copy(a, c), c += b.data.length, b = b.next;
  return a;
};
var jd = z.isEncoding || function(a) {
  switch (a && a.toLowerCase()) {
    case __abx$10a4bb(31):
    case __abx$10a4bb(23):
    case __abx$10a4bb(32):
    case __abx$10a4bb(33):
    case __abx$10a4bb(35):
    case __abx$10a4bb(36):
    case __abx$10a4bb(37):
    case __abx$10a4bb(38):
    case __abx$10a4bb(39):
    case __abx$10a4bb(40):
    case __abx$10a4bb(413):
      return true;
    default:
      return false;
  }
};
function kd(a) {
  this.encoding = (a || __abx$10a4bb(23)).toLowerCase().replace(/[-_]/, __abx$10a4bb(7));
  if (a && !jd(a)) throw Error(__abx$10a4bb(24) + a);
  switch (this.encoding) {
    case __abx$10a4bb(23):
      this.surrogateSize = 3;
      break;
    case __abx$10a4bb(37):
    case __abx$10a4bb(39):
      this.surrogateSize = 2;
      this.detectIncompleteChar = ld;
      break;
    case __abx$10a4bb(36):
      this.surrogateSize = 3;
      this.detectIncompleteChar = md;
      break;
    default:
      this.write = nd;
      return;
  }
  this.charBuffer = new z(6);
  this.charLength = this.charReceived = 0;
}
kd.prototype.write = function(a) {
  for (var b = __abx$10a4bb(7); this.charLength; ) {
    b = a.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : a.length;
    a.copy(this.charBuffer, this.charReceived, 0, b);
    this.charReceived += b;
    if (this.charReceived < this.charLength) return __abx$10a4bb(7);
    a = a.slice(b, a.length);
    b = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
    var c = b.charCodeAt(b.length - 1);
    if (55296 <= c && 56319 >= c) this.charLength += this.surrogateSize, b = __abx$10a4bb(7);
    else {
      this.charReceived = this.charLength = 0;
      if (0 === a.length) return b;
      break;
    }
  }
  this.detectIncompleteChar(a);
  var d = a.length;
  this.charLength && (a.copy(this.charBuffer, 0, a.length - this.charReceived, d), d -= this.charReceived);
  b += a.toString(this.encoding, 0, d);
  d = b.length - 1;
  c = b.charCodeAt(d);
  return 55296 <= c && 56319 >= c ? (c = this.surrogateSize, this.charLength += c, this.charReceived += c, this.charBuffer.copy(this.charBuffer, c, 0, c), a.copy(this.charBuffer, 0, 0, c), b.substring(0, d)) : b;
};
kd.prototype.detectIncompleteChar = function(a) {
  for (var b = 3 <= a.length ? 3 : a.length; 0 < b; b--) {
    var c = a[a.length - b];
    if (1 == b && 6 == c >> 5) {
      this.charLength = 2;
      break;
    }
    if (2 >= b && 14 == c >> 4) {
      this.charLength = 3;
      break;
    }
    if (3 >= b && 30 == c >> 3) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = b;
};
kd.prototype.end = function(a) {
  var b = __abx$10a4bb(7);
  a && a.length && (b = this.write(a));
  this.charReceived && (a = this.encoding, b += this.charBuffer.slice(0, this.charReceived).toString(a));
  return b;
};
function nd(a) {
  return a.toString(this.encoding);
}
function ld(a) {
  this.charLength = (this.charReceived = a.length % 2) ? 2 : 0;
}
function md(a) {
  this.charLength = (this.charReceived = a.length % 3) ? 3 : 0;
}
P.ReadableState = od;
var Q = Mb(__abx$10a4bb(414));
Db(P, O);
function pd(a, b, c) {
  if (__abx$10a4bb(9) === typeof a.prependListener) return a.prependListener(b, c);
  if (a._events && a._events[b]) Array.isArray(a._events[b]) ? a._events[b].unshift(c) : a._events[b] = [c, a._events[b]];
  else a.on(b, c);
}
function od(a, b) {
  a = a || {};
  this.objectMode = !!a.objectMode;
  b instanceof V && (this.objectMode = this.objectMode || !!a.readableObjectMode);
  b = a.highWaterMark;
  var c = this.objectMode ? 16 : 16384;
  this.highWaterMark = b || 0 === b ? b : c;
  this.highWaterMark = ~~this.highWaterMark;
  this.buffer = new id();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.reading = this.endEmitted = this.ended = false;
  this.sync = true;
  this.resumeScheduled = this.readableListening = this.emittedReadable = this.needReadable = false;
  this.defaultEncoding = a.defaultEncoding || __abx$10a4bb(23);
  this.ranOut = false;
  this.awaitDrain = 0;
  this.readingMore = false;
  this.encoding = this.decoder = null;
  a.encoding && (this.decoder = new kd(a.encoding), this.encoding = a.encoding);
}
function P(a) {
  if (!(this instanceof P)) return new P(a);
  this._readableState = new od(a, this);
  this.readable = true;
  a && __abx$10a4bb(9) === typeof a.read && (this._read = a.read);
  O.call(this);
}
P.prototype.push = function(a, b) {
  var c = this._readableState;
  c.objectMode || __abx$10a4bb(18) !== typeof a || (b = b || c.defaultEncoding, b !== c.encoding && (a = z.from(a, b), b = __abx$10a4bb(7)));
  return qd(this, c, a, b, false);
};
P.prototype.unshift = function(a) {
  return qd(this, this._readableState, a, __abx$10a4bb(7), true);
};
P.prototype.isPaused = function() {
  return false === this._readableState.flowing;
};
function qd(a, b, c, d, e) {
  var f = c;
  var g = null;
  Na(f) || __abx$10a4bb(18) === typeof f || null === f || void 0 === f || b.objectMode || (g = new TypeError(__abx$10a4bb(415)));
  if (f = g) a.emit(__abx$10a4bb(400), f);
  else if (null === c) b.reading = false, b.ended || (b.decoder && (c = b.decoder.end()) && c.length && (b.buffer.push(c), b.length += b.objectMode ? 1 : c.length), b.ended = true, rd(a));
  else if (b.objectMode || c && 0 < c.length) if (b.ended && !e) a.emit(__abx$10a4bb(400), Error(__abx$10a4bb(416)));
  else if (b.endEmitted && e) a.emit(__abx$10a4bb(400), Error(__abx$10a4bb(417)));
  else {
    if (b.decoder && !e && !d) {
      c = b.decoder.write(c);
      var h = !b.objectMode && 0 === c.length;
    }
    e || (b.reading = false);
    h || (b.flowing && 0 === b.length && !b.sync ? (a.emit(__abx$10a4bb(418), c), a.read(0)) : (b.length += b.objectMode ? 1 : c.length, e ? b.buffer.unshift(c) : b.buffer.push(c), b.needReadable && rd(a)));
    b.readingMore || (b.readingMore = true, G(sd, a, b));
  }
  else e || (b.reading = false);
  return !b.ended && (b.needReadable || b.length < b.highWaterMark || 0 === b.length);
}
P.prototype.setEncoding = function(a) {
  this._readableState.decoder = new kd(a);
  this._readableState.encoding = a;
  return this;
};
function td(a, b) {
  if (0 >= a || 0 === b.length && b.ended) return 0;
  if (b.objectMode) return 1;
  if (a !== a) return b.flowing && b.length ? b.buffer.head.data.length : b.length;
  if (a > b.highWaterMark) {
    var c = a;
    8388608 <= c ? c = 8388608 : (c--, c |= c >>> 1, c |= c >>> 2, c |= c >>> 4, c |= c >>> 8, c |= c >>> 16, c++);
    b.highWaterMark = c;
  }
  return a <= b.length ? a : b.ended ? b.length : (b.needReadable = true, 0);
}
P.prototype.read = function(a) {
  Q(__abx$10a4bb(419), a);
  a = parseInt(a, 10);
  var b = this._readableState, c = a;
  0 !== a && (b.emittedReadable = false);
  if (0 === a && b.needReadable && (b.length >= b.highWaterMark || b.ended)) return Q(__abx$10a4bb(420), b.length, b.ended), 0 === b.length && b.ended ? Jd(this) : rd(this), null;
  a = td(a, b);
  if (0 === a && b.ended) return 0 === b.length && Jd(this), null;
  var d = b.needReadable;
  Q(__abx$10a4bb(421), d);
  if (0 === b.length || b.length - a < b.highWaterMark) d = true, Q(__abx$10a4bb(422), d);
  b.ended || b.reading ? Q(
    __abx$10a4bb(423),
    false
  ) : d && (Q(__abx$10a4bb(424)), b.reading = true, b.sync = true, 0 === b.length && (b.needReadable = true), this._read(b.highWaterMark), b.sync = false, b.reading || (a = td(c, b)));
  d = 0 < a ? Kd(a, b) : null;
  null === d ? (b.needReadable = true, a = 0) : b.length -= a;
  0 === b.length && (b.ended || (b.needReadable = true), c !== a && b.ended && Jd(this));
  null !== d && this.emit(__abx$10a4bb(418), d);
  return d;
};
function rd(a) {
  var b = a._readableState;
  b.needReadable = false;
  b.emittedReadable || (Q(__abx$10a4bb(425), b.flowing), b.emittedReadable = true, b.sync ? G(Ld, a) : Ld(a));
}
function Ld(a) {
  Q(__abx$10a4bb(426));
  a.emit(__abx$10a4bb(427));
  Md(a);
}
function sd(a, b) {
  for (var c = b.length; !b.reading && !b.flowing && !b.ended && b.length < b.highWaterMark && (Q(__abx$10a4bb(428)), a.read(0), c !== b.length); ) c = b.length;
  b.readingMore = false;
}
P.prototype._read = function() {
  this.emit(__abx$10a4bb(400), Error(__abx$10a4bb(429)));
};
P.prototype.pipe = function(a, b) {
  function c(a2) {
    Q(__abx$10a4bb(430));
    a2 === n && e();
  }
  function d() {
    Q(__abx$10a4bb(431));
    a.end();
  }
  function e() {
    Q(__abx$10a4bb(432));
    a.removeListener(__abx$10a4bb(433), h);
    a.removeListener(__abx$10a4bb(434), k2);
    a.removeListener(__abx$10a4bb(435), B);
    a.removeListener(__abx$10a4bb(400), g);
    a.removeListener(__abx$10a4bb(436), c);
    n.removeListener(__abx$10a4bb(437), d);
    n.removeListener(__abx$10a4bb(437), e);
    n.removeListener(__abx$10a4bb(418), f);
    m2 = true;
    !q.awaitDrain || a._writableState && !a._writableState.needDrain || B();
  }
  function f(b2) {
    Q(__abx$10a4bb(438));
    v2 = false;
    false !== a.write(b2) || v2 || ((1 === q.pipesCount && q.pipes === a || 1 < q.pipesCount && -1 !== Nd(q.pipes, a)) && !m2 && (Q(__abx$10a4bb(439), n._readableState.awaitDrain), n._readableState.awaitDrain++, v2 = true), n.pause());
  }
  function g(b2) {
    Q(__abx$10a4bb(440), b2);
    p();
    a.removeListener(__abx$10a4bb(400), g);
    0 === a.listeners(__abx$10a4bb(400)).length && a.emit(__abx$10a4bb(400), b2);
  }
  function h() {
    a.removeListener(__abx$10a4bb(434), k2);
    p();
  }
  function k2() {
    Q(__abx$10a4bb(441));
    a.removeListener(__abx$10a4bb(433), h);
    p();
  }
  function p() {
    Q(__abx$10a4bb(436));
    n.unpipe(a);
  }
  var n = this, q = this._readableState;
  switch (q.pipesCount) {
    case 0:
      q.pipes = a;
      break;
    case 1:
      q.pipes = [
        q.pipes,
        a
      ];
      break;
    default:
      q.pipes.push(a);
  }
  q.pipesCount += 1;
  Q(__abx$10a4bb(442), q.pipesCount, b);
  b = b && false === b.end ? e : d;
  if (q.endEmitted) G(b);
  else n.once(__abx$10a4bb(437), b);
  a.on(__abx$10a4bb(436), c);
  var B = Od(n);
  a.on(__abx$10a4bb(435), B);
  var m2 = false, v2 = false;
  n.on(__abx$10a4bb(418), f);
  pd(a, __abx$10a4bb(400), g);
  a.once(__abx$10a4bb(433), h);
  a.once(__abx$10a4bb(434), k2);
  a.emit(__abx$10a4bb(443), n);
  q.flowing || (Q(__abx$10a4bb(444)), n.resume());
  return a;
};
function Od(a) {
  return function() {
    var b = a._readableState;
    Q(__abx$10a4bb(445), b.awaitDrain);
    b.awaitDrain && b.awaitDrain--;
    0 === b.awaitDrain && a.listeners(__abx$10a4bb(418)).length && (b.flowing = true, Md(a));
  };
}
P.prototype.unpipe = function(a) {
  var b = this._readableState;
  if (0 === b.pipesCount) return this;
  if (1 === b.pipesCount) {
    if (a && a !== b.pipes) return this;
    a || (a = b.pipes);
    b.pipes = null;
    b.pipesCount = 0;
    b.flowing = false;
    a && a.emit(__abx$10a4bb(436), this);
    return this;
  }
  if (!a) {
    a = b.pipes;
    var c = b.pipesCount;
    b.pipes = null;
    b.pipesCount = 0;
    b.flowing = false;
    for (b = 0; b < c; b++) a[b].emit(__abx$10a4bb(436), this);
    return this;
  }
  c = Nd(b.pipes, a);
  if (-1 === c) return this;
  b.pipes.splice(c, 1);
  --b.pipesCount;
  1 === b.pipesCount && (b.pipes = b.pipes[0]);
  a.emit(__abx$10a4bb(436), this);
  return this;
};
P.prototype.on = function(a, b) {
  b = O.prototype.on.call(this, a, b);
  __abx$10a4bb(418) === a ? false !== this._readableState.flowing && this.resume() : __abx$10a4bb(427) === a && (a = this._readableState, a.endEmitted || a.readableListening || (a.readableListening = a.needReadable = true, a.emittedReadable = false, a.reading ? a.length && rd(this) : G(Pd, this)));
  return b;
};
P.prototype.addListener = P.prototype.on;
function Pd(a) {
  Q(__abx$10a4bb(446));
  a.read(0);
}
P.prototype.resume = function() {
  var a = this._readableState;
  a.flowing || (Q(__abx$10a4bb(447)), a.flowing = true, a.resumeScheduled || (a.resumeScheduled = true, G(Qd, this, a)));
  return this;
};
function Qd(a, b) {
  b.reading || (Q(__abx$10a4bb(448)), a.read(0));
  b.resumeScheduled = false;
  b.awaitDrain = 0;
  a.emit(__abx$10a4bb(447));
  Md(a);
  b.flowing && !b.reading && a.read(0);
}
P.prototype.pause = function() {
  Q(__abx$10a4bb(449), this._readableState.flowing);
  false !== this._readableState.flowing && (Q(__abx$10a4bb(450)), this._readableState.flowing = false, this.emit(__abx$10a4bb(450)));
  return this;
};
function Md(a) {
  var b = a._readableState;
  for (Q(__abx$10a4bb(451), b.flowing); b.flowing && null !== a.read(); ) ;
}
P.prototype.wrap = function(a) {
  var b = this._readableState, c = false, d = this;
  a.on(__abx$10a4bb(437), function() {
    Q(__abx$10a4bb(452));
    if (b.decoder && !b.ended) {
      var a2 = b.decoder.end();
      a2 && a2.length && d.push(a2);
    }
    d.push(null);
  });
  a.on(__abx$10a4bb(418), function(e2) {
    Q(__abx$10a4bb(453));
    b.decoder && (e2 = b.decoder.write(e2));
    b.objectMode && (null === e2 || void 0 === e2) || !(b.objectMode || e2 && e2.length) || d.push(e2) || (c = true, a.pause());
  });
  for (var e in a) void 0 === this[e] && __abx$10a4bb(9) === typeof a[e] && (this[e] = /* @__PURE__ */ (function(b2) {
    return function() {
      return a[b2].apply(a, arguments);
    };
  })(e));
  Rd([
    __abx$10a4bb(400),
    __abx$10a4bb(433),
    __abx$10a4bb(454),
    __abx$10a4bb(450),
    __abx$10a4bb(447)
  ], function(b2) {
    a.on(b2, d.emit.bind(d, b2));
  });
  d._read = function(b2) {
    Q(__abx$10a4bb(455), b2);
    c && (c = false, a.resume());
  };
  return d;
};
P._fromList = Kd;
function Kd(a, b) {
  if (0 === b.length) return null;
  if (b.objectMode) var c = b.buffer.shift();
  else if (!a || a >= b.length) c = b.decoder ? b.buffer.join(__abx$10a4bb(7)) : 1 === b.buffer.length ? b.buffer.head.data : b.buffer.concat(b.length), b.buffer.clear();
  else {
    c = b.buffer;
    b = b.decoder;
    if (a < c.head.data.length) b = c.head.data.slice(0, a), c.head.data = c.head.data.slice(a);
    else {
      if (a === c.head.data.length) c = c.shift();
      else if (b) {
        b = c.head;
        var d = 1, e = b.data;
        for (a -= e.length; b = b.next; ) {
          var f = b.data, g = a > f.length ? f.length : a;
          e = g === f.length ? e + f : e + f.slice(
            0,
            a
          );
          a -= g;
          if (0 === a) {
            g === f.length ? (++d, c.head = b.next ? b.next : c.tail = null) : (c.head = b, b.data = f.slice(g));
            break;
          }
          ++d;
        }
        c.length -= d;
        c = e;
      } else {
        b = z.allocUnsafe(a);
        d = c.head;
        e = 1;
        d.data.copy(b);
        for (a -= d.data.length; d = d.next; ) {
          f = d.data;
          g = a > f.length ? f.length : a;
          f.copy(b, b.length - a, 0, g);
          a -= g;
          if (0 === a) {
            g === f.length ? (++e, c.head = d.next ? d.next : c.tail = null) : (c.head = d, d.data = f.slice(g));
            break;
          }
          ++e;
        }
        c.length -= e;
        c = b;
      }
      b = c;
    }
    c = b;
  }
  return c;
}
function Jd(a) {
  var b = a._readableState;
  if (0 < b.length) throw Error(__abx$10a4bb(456));
  b.endEmitted || (b.ended = true, G(Sd, b, a));
}
function Sd(a, b) {
  a.endEmitted || 0 !== a.length || (a.endEmitted = true, b.readable = false, b.emit(__abx$10a4bb(437)));
}
function Rd(a, b) {
  for (var c = 0, d = a.length; c < d; c++) b(a[c], c);
}
function Nd(a, b) {
  for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
  return -1;
}
W.WritableState = Td;
Db(W, O);
function Ud() {
}
function Vd(a, b, c) {
  this.chunk = a;
  this.encoding = b;
  this.callback = c;
  this.next = null;
}
function Td(a, b) {
  Object.defineProperty(this, __abx$10a4bb(397), { get: Ib(function() {
    return this.getBuffer();
  }, __abx$10a4bb(457)) });
  a = a || {};
  this.objectMode = !!a.objectMode;
  b instanceof V && (this.objectMode = this.objectMode || !!a.writableObjectMode);
  var c = a.highWaterMark, d = this.objectMode ? 16 : 16384;
  this.highWaterMark = c || 0 === c ? c : d;
  this.highWaterMark = ~~this.highWaterMark;
  this.finished = this.ended = this.ending = this.needDrain = false;
  this.decodeStrings = false !== a.decodeStrings;
  this.defaultEncoding = a.defaultEncoding || __abx$10a4bb(23);
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function(a2) {
    var c2 = b._writableState, d2 = c2.sync, e = c2.writecb;
    c2.writing = false;
    c2.writecb = null;
    c2.length -= c2.writelen;
    c2.writelen = 0;
    a2 ? (--c2.pendingcb, d2 ? G(e, a2) : e(a2), b._writableState.errorEmitted = true, b.emit(__abx$10a4bb(400), a2)) : ((a2 = Wd(c2)) || c2.corked || c2.bufferProcessing || !c2.bufferedRequest || Xd(b, c2), d2 ? G(Yd, b, c2, a2, e) : Yd(b, c2, a2, e));
  };
  this.writecb = null;
  this.writelen = 0;
  this.lastBufferedRequest = this.bufferedRequest = null;
  this.pendingcb = 0;
  this.errorEmitted = this.prefinished = false;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new Zd(this);
}
Td.prototype.getBuffer = function() {
  for (var a = this.bufferedRequest, b = []; a; ) b.push(a), a = a.next;
  return b;
};
function W(a) {
  if (!(this instanceof W || this instanceof V)) return new W(a);
  this._writableState = new Td(a, this);
  this.writable = true;
  a && (__abx$10a4bb(9) === typeof a.write && (this._write = a.write), __abx$10a4bb(9) === typeof a.writev && (this._writev = a.writev));
  O.call(this);
}
W.prototype.pipe = function() {
  this.emit(__abx$10a4bb(400), Error(__abx$10a4bb(458)));
};
W.prototype.write = function(a, b, c) {
  var d = this._writableState, e = false;
  __abx$10a4bb(9) === typeof b && (c = b, b = null);
  z.isBuffer(a) ? b = __abx$10a4bb(397) : b || (b = d.defaultEncoding);
  __abx$10a4bb(9) !== typeof c && (c = Ud);
  if (d.ended) d = c, a = Error(__abx$10a4bb(459)), this.emit(__abx$10a4bb(400), a), G(d, a);
  else {
    var f = c, g = true, h = false;
    null === a ? h = new TypeError(__abx$10a4bb(460)) : z.isBuffer(a) || __abx$10a4bb(18) === typeof a || void 0 === a || d.objectMode || (h = new TypeError(__abx$10a4bb(415)));
    h && (this.emit(__abx$10a4bb(400), h), G(f, h), g = false);
    g && (d.pendingcb++, e = b, d.objectMode || false === d.decodeStrings || __abx$10a4bb(18) !== typeof a || (a = z.from(a, e)), z.isBuffer(a) && (e = __abx$10a4bb(397)), f = d.objectMode ? 1 : a.length, d.length += f, b = d.length < d.highWaterMark, b || (d.needDrain = true), d.writing || d.corked ? (f = d.lastBufferedRequest, d.lastBufferedRequest = new Vd(a, e, c), f ? f.next = d.lastBufferedRequest : d.bufferedRequest = d.lastBufferedRequest, d.bufferedRequestCount += 1) : $d(this, d, false, f, a, e, c), e = b);
  }
  return e;
};
W.prototype.cork = function() {
  this._writableState.corked++;
};
W.prototype.uncork = function() {
  var a = this._writableState;
  a.corked && (a.corked--, a.writing || a.corked || a.finished || a.bufferProcessing || !a.bufferedRequest || Xd(this, a));
};
W.prototype.setDefaultEncoding = function(a) {
  __abx$10a4bb(18) === typeof a && (a = a.toLowerCase());
  if (!(-1 < __abx$10a4bb(461).split(__abx$10a4bb(94)).indexOf((a + __abx$10a4bb(7)).toLowerCase()))) throw new TypeError(__abx$10a4bb(24) + a);
  this._writableState.defaultEncoding = a;
  return this;
};
function $d(a, b, c, d, e, f, g) {
  b.writelen = d;
  b.writecb = g;
  b.writing = true;
  b.sync = true;
  c ? a._writev(e, b.onwrite) : a._write(e, f, b.onwrite);
  b.sync = false;
}
function Yd(a, b, c, d) {
  !c && 0 === b.length && b.needDrain && (b.needDrain = false, a.emit(__abx$10a4bb(435)));
  b.pendingcb--;
  d();
  ae(a, b);
}
function Xd(a, b) {
  b.bufferProcessing = true;
  var c = b.bufferedRequest;
  if (a._writev && c && c.next) {
    var d = Array(b.bufferedRequestCount), e = b.corkedRequestsFree;
    e.entry = c;
    for (var f = 0; c; ) d[f] = c, c = c.next, f += 1;
    $d(a, b, true, b.length, d, __abx$10a4bb(7), e.finish);
    b.pendingcb++;
    b.lastBufferedRequest = null;
    e.next ? (b.corkedRequestsFree = e.next, e.next = null) : b.corkedRequestsFree = new Zd(b);
  } else {
    for (; c && (d = c.chunk, $d(a, b, false, b.objectMode ? 1 : d.length, d, c.encoding, c.callback), c = c.next, !b.writing); ) ;
    null === c && (b.lastBufferedRequest = null);
  }
  b.bufferedRequestCount = 0;
  b.bufferedRequest = c;
  b.bufferProcessing = false;
}
W.prototype._write = function(a, b, c) {
  c(Error(__abx$10a4bb(429)));
};
W.prototype._writev = null;
W.prototype.end = function(a, b, c) {
  var d = this._writableState;
  __abx$10a4bb(9) === typeof a ? (c = a, b = a = null) : __abx$10a4bb(9) === typeof b && (c = b, b = null);
  null !== a && void 0 !== a && this.write(a, b);
  d.corked && (d.corked = 1, this.uncork());
  if (!d.ending && !d.finished) {
    a = c;
    d.ending = true;
    ae(this, d);
    if (a) if (d.finished) G(a);
    else this.once(__abx$10a4bb(434), a);
    d.ended = true;
    this.writable = false;
  }
};
function Wd(a) {
  return a.ending && 0 === a.length && null === a.bufferedRequest && !a.finished && !a.writing;
}
function ae(a, b) {
  var c = Wd(b);
  c && (0 === b.pendingcb ? (b.prefinished || (b.prefinished = true, a.emit(__abx$10a4bb(462))), b.finished = true, a.emit(__abx$10a4bb(434))) : b.prefinished || (b.prefinished = true, a.emit(__abx$10a4bb(462))));
  return c;
}
function Zd(a) {
  var b = this;
  this.entry = this.next = null;
  this.finish = function(c) {
    var d = b.entry;
    for (b.entry = null; d; ) {
      var e = d.callback;
      a.pendingcb--;
      e(c);
      d = d.next;
    }
    a.corkedRequestsFree ? a.corkedRequestsFree.next = b : a.corkedRequestsFree = b;
  };
}
Db(V, P);
for (var be = Object.keys(W.prototype), ce = 0; ce < be.length; ce++) {
  var de = be[ce];
  V.prototype[de] || (V.prototype[de] = W.prototype[de]);
}
function V(a) {
  if (!(this instanceof V)) return new V(a);
  P.call(this, a);
  W.call(this, a);
  a && false === a.readable && (this.readable = false);
  a && false === a.writable && (this.writable = false);
  this.allowHalfOpen = true;
  a && false === a.allowHalfOpen && (this.allowHalfOpen = false);
  this.once(__abx$10a4bb(437), ee);
}
function ee() {
  this.allowHalfOpen || this._writableState.ended || G(fe, this);
}
function fe(a) {
  a.end();
}
Db(X, V);
function ge(a) {
  this.afterTransform = function(b, c) {
    var d = a._transformState;
    d.transforming = false;
    var e = d.writecb;
    e ? (d.writechunk = null, d.writecb = null, null !== c && void 0 !== c && a.push(c), e(b), b = a._readableState, b.reading = false, (b.needReadable || b.length < b.highWaterMark) && a._read(b.highWaterMark), b = void 0) : b = a.emit(__abx$10a4bb(400), Error(__abx$10a4bb(463)));
    return b;
  };
  this.transforming = this.needTransform = false;
  this.writeencoding = this.writechunk = this.writecb = null;
}
function X(a) {
  if (!(this instanceof X)) return new X(a);
  V.call(this, a);
  this._transformState = new ge(this);
  var b = this;
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  a && (__abx$10a4bb(9) === typeof a.transform && (this._transform = a.transform), __abx$10a4bb(9) === typeof a.flush && (this._flush = a.flush));
  this.once(__abx$10a4bb(462), function() {
    __abx$10a4bb(9) === typeof this._flush ? this._flush(function(a2) {
      he(b, a2);
    }) : he(b);
  });
}
X.prototype.push = function(a, b) {
  this._transformState.needTransform = false;
  return V.prototype.push.call(this, a, b);
};
X.prototype._transform = function() {
  throw Error(__abx$10a4bb(464));
};
X.prototype._write = function(a, b, c) {
  var d = this._transformState;
  d.writecb = c;
  d.writechunk = a;
  d.writeencoding = b;
  d.transforming || (a = this._readableState, (d.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark));
};
X.prototype._read = function() {
  var a = this._transformState;
  null !== a.writechunk && a.writecb && !a.transforming ? (a.transforming = true, this._transform(a.writechunk, a.writeencoding, a.afterTransform)) : a.needTransform = true;
};
function he(a, b) {
  if (b) return a.emit(__abx$10a4bb(400), b);
  b = a._transformState;
  if (a._writableState.length) throw Error(__abx$10a4bb(465));
  if (b.transforming) throw Error(__abx$10a4bb(384));
  return a.push(null);
}
Db(ie, X);
function ie(a) {
  if (!(this instanceof ie)) return new ie(a);
  X.call(this, a);
}
ie.prototype._transform = function(a, b, c) {
  c(null, a);
};
Db(Y, O);
Y.Readable = P;
Y.Writable = W;
Y.Duplex = V;
Y.Transform = X;
Y.PassThrough = ie;
Y.Stream = Y;
function Y() {
  O.call(this);
}
Y.prototype.pipe = function(a, b) {
  function c(b2) {
    a.writable && false === a.write(b2) && k2.pause && k2.pause();
  }
  function d() {
    k2.readable && k2.resume && k2.resume();
  }
  function e() {
    p || (p = true, a.end());
  }
  function f() {
    p || (p = true, __abx$10a4bb(9) === typeof a.destroy && a.destroy());
  }
  function g(a2) {
    h();
    if (0 === O.listenerCount(this, __abx$10a4bb(400))) throw a2;
  }
  function h() {
    k2.removeListener(__abx$10a4bb(418), c);
    a.removeListener(__abx$10a4bb(435), d);
    k2.removeListener(__abx$10a4bb(437), e);
    k2.removeListener(__abx$10a4bb(433), f);
    k2.removeListener(__abx$10a4bb(400), g);
    a.removeListener(__abx$10a4bb(400), g);
    k2.removeListener(
      __abx$10a4bb(437),
      h
    );
    k2.removeListener(__abx$10a4bb(433), h);
    a.removeListener(__abx$10a4bb(433), h);
  }
  var k2 = this;
  k2.on(__abx$10a4bb(418), c);
  a.on(__abx$10a4bb(435), d);
  a._isStdio || b && false === b.end || (k2.on(__abx$10a4bb(437), e), k2.on(__abx$10a4bb(433), f));
  var p = false;
  k2.on(__abx$10a4bb(400), g);
  a.on(__abx$10a4bb(400), g);
  k2.on(__abx$10a4bb(437), h);
  k2.on(__abx$10a4bb(433), h);
  a.on(__abx$10a4bb(433), h);
  a.emit(__abx$10a4bb(443), k2);
  return a;
};
var je = Array.prototype.slice, le = { extend: function ke(a, b) {
  for (var d in b) a[d] = b[d];
  return 3 > arguments.length ? a : ke.apply(null, [a].concat(je.call(arguments, 2)));
} }, me = u(function(a, b) {
  function c(a2, b2, c2) {
    void 0 === c2 && (c2 = function(a3) {
      return a3;
    });
    return function() {
      for (var e2 = [], f = 0; f < arguments.length; f++) e2[f] = arguments[f];
      return new Promise(function(f2, g) {
        a2[b2].bind(a2).apply(void 0, d(e2, [function(a3, b3) {
          return a3 ? g(a3) : f2(c2(b3));
        }]));
      });
    };
  }
  var d = l && l.__spreadArrays || function() {
    for (var a2 = 0, b2 = 0, c2 = arguments.length; b2 < c2; b2++) a2 += arguments[b2].length;
    a2 = Array(a2);
    var d2 = 0;
    for (b2 = 0; b2 < c2; b2++) for (var e2 = arguments[b2], n = 0, q = e2.length; n < q; n++, d2++) a2[d2] = e2[n];
    return a2;
  };
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  var e = (function() {
    function a2(a3, b2) {
      this.vol = a3;
      this.fd = b2;
    }
    a2.prototype.appendFile = function(a3, b2) {
      return c(this.vol, __abx$10a4bb(466))(this.fd, a3, b2);
    };
    a2.prototype.chmod = function(a3) {
      return c(this.vol, __abx$10a4bb(467))(this.fd, a3);
    };
    a2.prototype.chown = function(a3, b2) {
      return c(this.vol, __abx$10a4bb(468))(this.fd, a3, b2);
    };
    a2.prototype.close = function() {
      return c(
        this.vol,
        __abx$10a4bb(433)
      )(this.fd);
    };
    a2.prototype.datasync = function() {
      return c(this.vol, __abx$10a4bb(469))(this.fd);
    };
    a2.prototype.read = function(a3, b2, d2, e2) {
      return c(this.vol, __abx$10a4bb(419), function(b3) {
        return { bytesRead: b3, buffer: a3 };
      })(this.fd, a3, b2, d2, e2);
    };
    a2.prototype.readFile = function(a3) {
      return c(this.vol, __abx$10a4bb(470))(this.fd, a3);
    };
    a2.prototype.stat = function(a3) {
      return c(this.vol, __abx$10a4bb(471))(this.fd, a3);
    };
    a2.prototype.sync = function() {
      return c(this.vol, __abx$10a4bb(472))(this.fd);
    };
    a2.prototype.truncate = function(a3) {
      return c(this.vol, __abx$10a4bb(473))(this.fd, a3);
    };
    a2.prototype.utimes = function(a3, b2) {
      return c(this.vol, __abx$10a4bb(474))(this.fd, a3, b2);
    };
    a2.prototype.write = function(a3, b2, d2, e2) {
      return c(this.vol, __abx$10a4bb(475), function(b3) {
        return { bytesWritten: b3, buffer: a3 };
      })(this.fd, a3, b2, d2, e2);
    };
    a2.prototype.writeFile = function(a3, b2) {
      return c(this.vol, __abx$10a4bb(476))(this.fd, a3, b2);
    };
    return a2;
  })();
  b.FileHandle = e;
  b.default = function(a2) {
    return __abx$10a4bb(0) === typeof Promise ? null : { FileHandle: e, access: function(b2, d2) {
      return c(a2, __abx$10a4bb(477))(b2, d2);
    }, appendFile: function(b2, d2, f) {
      return c(a2, __abx$10a4bb(466))(b2 instanceof e ? b2.fd : b2, d2, f);
    }, chmod: function(b2, d2) {
      return c(a2, __abx$10a4bb(478))(b2, d2);
    }, chown: function(b2, d2, e2) {
      return c(a2, __abx$10a4bb(479))(b2, d2, e2);
    }, copyFile: function(b2, d2, e2) {
      return c(a2, __abx$10a4bb(480))(b2, d2, e2);
    }, lchmod: function(b2, d2) {
      return c(a2, __abx$10a4bb(481))(b2, d2);
    }, lchown: function(b2, d2, e2) {
      return c(a2, __abx$10a4bb(482))(b2, d2, e2);
    }, link: function(b2, d2) {
      return c(a2, __abx$10a4bb(483))(b2, d2);
    }, lstat: function(b2, d2) {
      return c(a2, __abx$10a4bb(484))(b2, d2);
    }, mkdir: function(b2, d2) {
      return c(a2, __abx$10a4bb(485))(b2, d2);
    }, mkdtemp: function(b2, d2) {
      return c(a2, __abx$10a4bb(486))(b2, d2);
    }, open: function(b2, d2, f) {
      return c(a2, __abx$10a4bb(487), function(b3) {
        return new e(a2, b3);
      })(b2, d2, f);
    }, readdir: function(b2, d2) {
      return c(a2, __abx$10a4bb(488))(b2, d2);
    }, readFile: function(b2, d2) {
      return c(a2, __abx$10a4bb(470))(b2 instanceof e ? b2.fd : b2, d2);
    }, readlink: function(b2, d2) {
      return c(a2, __abx$10a4bb(489))(b2, d2);
    }, realpath: function(b2, d2) {
      return c(a2, __abx$10a4bb(490))(b2, d2);
    }, rename: function(b2, d2) {
      return c(a2, __abx$10a4bb(491))(b2, d2);
    }, rmdir: function(b2) {
      return c(a2, __abx$10a4bb(492))(b2);
    }, stat: function(b2, d2) {
      return c(a2, __abx$10a4bb(493))(b2, d2);
    }, symlink: function(b2, d2, e2) {
      return c(a2, __abx$10a4bb(494))(b2, d2, e2);
    }, truncate: function(b2, d2) {
      return c(a2, __abx$10a4bb(495))(b2, d2);
    }, unlink: function(b2) {
      return c(a2, __abx$10a4bb(496))(b2);
    }, utimes: function(b2, d2, e2) {
      return c(a2, __abx$10a4bb(497))(b2, d2, e2);
    }, writeFile: function(b2, d2, f) {
      return c(a2, __abx$10a4bb(476))(b2 instanceof e ? b2.fd : b2, d2, f);
    } };
  };
});
t(me);
var ne = /[^\x20-\x7E]/, oe = /[\x2E\u3002\uFF0E\uFF61]/g, pe = { overflow: __abx$10a4bb(498) }, qe = Math.floor, re = String.fromCharCode;
function se(a, b) {
  var c = a.split(__abx$10a4bb(499)), d = __abx$10a4bb(7);
  1 < c.length && (d = c[0] + __abx$10a4bb(499), a = c[1]);
  a = a.replace(oe, __abx$10a4bb(115));
  a = a.split(__abx$10a4bb(115));
  c = a.length;
  for (var e = []; c--; ) e[c] = b(a[c]);
  b = e.join(__abx$10a4bb(115));
  return d + b;
}
function te(a, b) {
  return a + 22 + 75 * (26 > a) - ((0 != b) << 5);
}
function ue(a) {
  return se(a, function(a2) {
    if (ne.test(a2)) {
      var b;
      var d = [];
      var e = [];
      var f = 0;
      for (b = a2.length; f < b; ) {
        var g = a2.charCodeAt(f++);
        if (55296 <= g && 56319 >= g && f < b) {
          var h = a2.charCodeAt(f++);
          56320 == (h & 64512) ? e.push(((g & 1023) << 10) + (h & 1023) + 65536) : (e.push(g), f--);
        } else e.push(g);
      }
      a2 = e;
      h = a2.length;
      e = 128;
      var k2 = 0;
      var p = 72;
      for (g = 0; g < h; ++g) {
        var n = a2[g];
        128 > n && d.push(re(n));
      }
      for ((f = b = d.length) && d.push(__abx$10a4bb(3)); f < h; ) {
        var q = 2147483647;
        for (g = 0; g < h; ++g) n = a2[g], n >= e && n < q && (q = n);
        var B = f + 1;
        if (q - e > qe((2147483647 - k2) / B)) throw new RangeError(pe.overflow);
        k2 += (q - e) * B;
        e = q;
        for (g = 0; g < h; ++g) {
          n = a2[g];
          if (n < e && 2147483647 < ++k2) throw new RangeError(pe.overflow);
          if (n == e) {
            var m2 = k2;
            for (q = 36; ; q += 36) {
              n = q <= p ? 1 : q >= p + 26 ? 26 : q - p;
              if (m2 < n) break;
              var v2 = m2 - n;
              m2 = 36 - n;
              d.push(re(te(n + v2 % m2, 0)));
              m2 = qe(v2 / m2);
            }
            d.push(re(te(m2, 0)));
            p = B;
            q = 0;
            k2 = f == b ? qe(k2 / 700) : k2 >> 1;
            for (k2 += qe(k2 / p); 455 < k2; q += 36) k2 = qe(k2 / 35);
            p = qe(q + 36 * k2 / (k2 + 38));
            k2 = 0;
            ++f;
          }
        }
        ++k2;
        ++e;
      }
      d = __abx$10a4bb(500) + d.join(__abx$10a4bb(7));
    } else d = a2;
    return d;
  });
}
var ve = Array.isArray || function(a) {
  return __abx$10a4bb(82) === Object.prototype.toString.call(a);
};
function we(a) {
  switch (typeof a) {
    case __abx$10a4bb(18):
      return a;
    case __abx$10a4bb(65):
      return a ? __abx$10a4bb(501) : __abx$10a4bb(502);
    case __abx$10a4bb(17):
      return isFinite(a) ? a : __abx$10a4bb(7);
    default:
      return __abx$10a4bb(7);
  }
}
function xe(a, b, c, d) {
  b = b || __abx$10a4bb(503);
  c = c || __abx$10a4bb(6);
  null === a && (a = void 0);
  return __abx$10a4bb(118) === typeof a ? ye(ze(a), function(d2) {
    var e = encodeURIComponent(we(d2)) + c;
    return ve(a[d2]) ? ye(a[d2], function(a2) {
      return e + encodeURIComponent(we(a2));
    }).join(b) : e + encodeURIComponent(we(a[d2]));
  }).join(b) : d ? encodeURIComponent(we(d)) + c + encodeURIComponent(we(a)) : __abx$10a4bb(7);
}
function ye(a, b) {
  if (a.map) return a.map(b);
  for (var c = [], d = 0; d < a.length; d++) c.push(b(a[d], d));
  return c;
}
var ze = Object.keys || function(a) {
  var b = [], c;
  for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
  return b;
};
function Ae(a, b, c, d) {
  c = c || __abx$10a4bb(6);
  var e = {};
  if (__abx$10a4bb(18) !== typeof a || 0 === a.length) return e;
  var f = /\+/g;
  a = a.split(b || __abx$10a4bb(503));
  b = 1e3;
  d && __abx$10a4bb(17) === typeof d.maxKeys && (b = d.maxKeys);
  d = a.length;
  0 < b && d > b && (d = b);
  for (b = 0; b < d; ++b) {
    var g = a[b].replace(f, __abx$10a4bb(504)), h = g.indexOf(c);
    if (0 <= h) {
      var k2 = g.substr(0, h);
      g = g.substr(h + 1);
    } else k2 = g, g = __abx$10a4bb(7);
    k2 = decodeURIComponent(k2);
    g = decodeURIComponent(g);
    Object.prototype.hasOwnProperty.call(e, k2) ? ve(e[k2]) ? e[k2].push(g) : e[k2] = [e[k2], g] : e[k2] = g;
  }
  return e;
}
var Fe = { parse: Be, resolve: Ce, resolveObject: De, format: Ee, Url: Z };
function Z() {
  this.href = this.path = this.pathname = this.query = this.search = this.hash = this.hostname = this.port = this.host = this.auth = this.slashes = this.protocol = null;
}
var Ge = /^([a-z0-9.+-]+:)/i, He = /:[0-9]*$/, Ie = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Je = __abx$10a4bb(505).split(__abx$10a4bb(7)).concat(__abx$10a4bb(506).split(__abx$10a4bb(7))), Ke = [__abx$10a4bb(200)].concat(Je), Le = [__abx$10a4bb(169), __abx$10a4bb(71), __abx$10a4bb(507), __abx$10a4bb(508), __abx$10a4bb(509)].concat(Ke), Me = [__abx$10a4bb(71), __abx$10a4bb(507), __abx$10a4bb(509)], Ne = 255, Oe = /^[+a-z0-9A-Z_-]{0,63}$/, Pe = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Qe = { javascript: true, [__abx$10a4bb(510)]: true }, Re = { javascript: true, [__abx$10a4bb(510)]: true }, Se = { http: true, https: true, ftp: true, gopher: true, file: true, [__abx$10a4bb(511)]: true, [__abx$10a4bb(512)]: true, [__abx$10a4bb(513)]: true, [__abx$10a4bb(514)]: true, [__abx$10a4bb(515)]: true };
function Be(a, b, c) {
  if (a && Hb(a) && a instanceof Z) return a;
  var d = new Z();
  d.parse(a, b, c);
  return d;
}
Z.prototype.parse = function(a, b, c) {
  return Te(this, a, b, c);
};
function Te(a, b, c, d) {
  if (!Gb(b)) throw new TypeError(__abx$10a4bb(516) + typeof b);
  var e = b.indexOf(__abx$10a4bb(507));
  e = -1 !== e && e < b.indexOf(__abx$10a4bb(509)) ? __abx$10a4bb(507) : __abx$10a4bb(509);
  b = b.split(e);
  b[0] = b[0].replace(/\\/g, __abx$10a4bb(71));
  b = b.join(e);
  e = b.trim();
  if (!d && 1 === b.split(__abx$10a4bb(509)).length && (b = Ie.exec(e))) return a.path = e, a.href = e, a.pathname = b[1], b[2] ? (a.search = b[2], a.query = c ? Ae(a.search.substr(1)) : a.search.substr(1)) : c && (a.search = __abx$10a4bb(7), a.query = {}), a;
  if (b = Ge.exec(e)) {
    b = b[0];
    var f = b.toLowerCase();
    a.protocol = f;
    e = e.substr(b.length);
  }
  if (d || b || e.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var g = __abx$10a4bb(116) === e.substr(0, 2);
    !g || b && Re[b] || (e = e.substr(2), a.slashes = true);
  }
  if (!Re[b] && (g || b && !Se[b])) {
    b = -1;
    for (d = 0; d < Me.length; d++) g = e.indexOf(Me[d]), -1 !== g && (-1 === b || g < b) && (b = g);
    g = -1 === b ? e.lastIndexOf(__abx$10a4bb(499)) : e.lastIndexOf(__abx$10a4bb(499), b);
    -1 !== g && (d = e.slice(0, g), e = e.slice(g + 1), a.auth = decodeURIComponent(d));
    b = -1;
    for (d = 0; d < Le.length; d++) g = e.indexOf(Le[d]), -1 !== g && (-1 === b || g < b) && (b = g);
    -1 === b && (b = e.length);
    a.host = e.slice(0, b);
    e = e.slice(b);
    Ue(a);
    a.hostname = a.hostname || __abx$10a4bb(7);
    g = __abx$10a4bb(197) === a.hostname[0] && __abx$10a4bb(191) === a.hostname[a.hostname.length - 1];
    if (!g) {
      var h = a.hostname.split(/\./);
      d = 0;
      for (b = h.length; d < b; d++) {
        var k2 = h[d];
        if (k2 && !k2.match(Oe)) {
          for (var p = __abx$10a4bb(7), n = 0, q = k2.length; n < q; n++) p = 127 < k2.charCodeAt(n) ? p + __abx$10a4bb(517) : p + k2[n];
          if (!p.match(Oe)) {
            b = h.slice(0, d);
            d = h.slice(d + 1);
            if (k2 = k2.match(Pe)) b.push(k2[1]), d.unshift(k2[2]);
            d.length && (e = __abx$10a4bb(71) + d.join(__abx$10a4bb(115)) + e);
            a.hostname = b.join(__abx$10a4bb(115));
            break;
          }
        }
      }
    }
    a.hostname = a.hostname.length > Ne ? __abx$10a4bb(7) : a.hostname.toLowerCase();
    g || (a.hostname = ue(a.hostname));
    d = a.port ? __abx$10a4bb(120) + a.port : __abx$10a4bb(7);
    a.host = (a.hostname || __abx$10a4bb(7)) + d;
    a.href += a.host;
    g && (a.hostname = a.hostname.substr(1, a.hostname.length - 2), __abx$10a4bb(71) !== e[0] && (e = __abx$10a4bb(71) + e));
  }
  if (!Qe[f]) for (d = 0, b = Ke.length; d < b; d++) g = Ke[d], -1 !== e.indexOf(g) && (k2 = encodeURIComponent(g), k2 === g && (k2 = escape(g)), e = e.split(g).join(k2));
  d = e.indexOf(__abx$10a4bb(509));
  -1 !== d && (a.hash = e.substr(d), e = e.slice(0, d));
  d = e.indexOf(__abx$10a4bb(507));
  -1 !== d ? (a.search = e.substr(d), a.query = e.substr(d + 1), c && (a.query = Ae(a.query)), e = e.slice(0, d)) : c && (a.search = __abx$10a4bb(7), a.query = {});
  e && (a.pathname = e);
  Se[f] && a.hostname && !a.pathname && (a.pathname = __abx$10a4bb(71));
  if (a.pathname || a.search) d = a.pathname || __abx$10a4bb(7), a.path = d + (a.search || __abx$10a4bb(7));
  a.href = Ve(a);
  return a;
}
function Ee(a) {
  Gb(a) && (a = Te({}, a));
  return Ve(a);
}
function Ve(a) {
  var b = a.auth || __abx$10a4bb(7);
  b && (b = encodeURIComponent(b), b = b.replace(/%3A/i, __abx$10a4bb(120)), b += __abx$10a4bb(499));
  var c = a.protocol || __abx$10a4bb(7), d = a.pathname || __abx$10a4bb(7), e = a.hash || __abx$10a4bb(7), f = false, g = __abx$10a4bb(7);
  a.host ? f = b + a.host : a.hostname && (f = b + (-1 === a.hostname.indexOf(__abx$10a4bb(120)) ? a.hostname : __abx$10a4bb(197) + this.hostname + __abx$10a4bb(191)), a.port && (f += __abx$10a4bb(120) + a.port));
  a.query && Hb(a.query) && Object.keys(a.query).length && (g = xe(a.query));
  b = a.search || g && __abx$10a4bb(507) + g || __abx$10a4bb(7);
  c && __abx$10a4bb(120) !== c.substr(-1) && (c += __abx$10a4bb(120));
  a.slashes || (!c || Se[c]) && false !== f ? (f = __abx$10a4bb(116) + (f || __abx$10a4bb(7)), d && __abx$10a4bb(71) !== d.charAt(0) && (d = __abx$10a4bb(71) + d)) : f || (f = __abx$10a4bb(7));
  e && __abx$10a4bb(509) !== e.charAt(0) && (e = __abx$10a4bb(509) + e);
  b && __abx$10a4bb(507) !== b.charAt(0) && (b = __abx$10a4bb(507) + b);
  d = d.replace(/[?#]/g, function(a2) {
    return encodeURIComponent(a2);
  });
  b = b.replace(__abx$10a4bb(509), __abx$10a4bb(518));
  return c + f + d + b + e;
}
Z.prototype.format = function() {
  return Ve(this);
};
function Ce(a, b) {
  return Be(a, false, true).resolve(b);
}
Z.prototype.resolve = function(a) {
  return this.resolveObject(Be(a, false, true)).format();
};
function De(a, b) {
  return a ? Be(a, false, true).resolveObject(b) : b;
}
Z.prototype.resolveObject = function(a) {
  if (Gb(a)) {
    var b = new Z();
    b.parse(a, false, true);
    a = b;
  }
  b = new Z();
  for (var c = Object.keys(this), d = 0; d < c.length; d++) {
    var e = c[d];
    b[e] = this[e];
  }
  b.hash = a.hash;
  if (__abx$10a4bb(7) === a.href) return b.href = b.format(), b;
  if (a.slashes && !a.protocol) {
    c = Object.keys(a);
    for (d = 0; d < c.length; d++) e = c[d], __abx$10a4bb(519) !== e && (b[e] = a[e]);
    Se[b.protocol] && b.hostname && !b.pathname && (b.path = b.pathname = __abx$10a4bb(71));
    b.href = b.format();
    return b;
  }
  var f;
  if (a.protocol && a.protocol !== b.protocol) {
    if (!Se[a.protocol]) {
      c = Object.keys(a);
      for (d = 0; d < c.length; d++) e = c[d], b[e] = a[e];
      b.href = b.format();
      return b;
    }
    b.protocol = a.protocol;
    if (a.host || Re[a.protocol]) b.pathname = a.pathname;
    else {
      for (f = (a.pathname || __abx$10a4bb(7)).split(__abx$10a4bb(71)); f.length && !(a.host = f.shift()); ) ;
      a.host || (a.host = __abx$10a4bb(7));
      a.hostname || (a.hostname = __abx$10a4bb(7));
      __abx$10a4bb(7) !== f[0] && f.unshift(__abx$10a4bb(7));
      2 > f.length && f.unshift(__abx$10a4bb(7));
      b.pathname = f.join(__abx$10a4bb(71));
    }
    b.search = a.search;
    b.query = a.query;
    b.host = a.host || __abx$10a4bb(7);
    b.auth = a.auth;
    b.hostname = a.hostname || a.host;
    b.port = a.port;
    if (b.pathname || b.search) b.path = (b.pathname || __abx$10a4bb(7)) + (b.search || __abx$10a4bb(7));
    b.slashes = b.slashes || a.slashes;
    b.href = b.format();
    return b;
  }
  c = b.pathname && __abx$10a4bb(71) === b.pathname.charAt(0);
  var g = a.host || a.pathname && __abx$10a4bb(71) === a.pathname.charAt(0), h = c = g || c || b.host && a.pathname;
  d = b.pathname && b.pathname.split(__abx$10a4bb(71)) || [];
  e = b.protocol && !Se[b.protocol];
  f = a.pathname && a.pathname.split(__abx$10a4bb(71)) || [];
  e && (b.hostname = __abx$10a4bb(7), b.port = null, b.host && (__abx$10a4bb(7) === d[0] ? d[0] = b.host : d.unshift(b.host)), b.host = __abx$10a4bb(7), a.protocol && (a.hostname = null, a.port = null, a.host && (__abx$10a4bb(7) === f[0] ? f[0] = a.host : f.unshift(a.host)), a.host = null), c = c && (__abx$10a4bb(7) === f[0] || __abx$10a4bb(7) === d[0]));
  if (g) b.host = a.host || __abx$10a4bb(7) === a.host ? a.host : b.host, b.hostname = a.hostname || __abx$10a4bb(7) === a.hostname ? a.hostname : b.hostname, b.search = a.search, b.query = a.query, d = f;
  else if (f.length) d || (d = []), d.pop(), d = d.concat(f), b.search = a.search, b.query = a.query;
  else if (null != a.search) {
    e && (b.hostname = b.host = d.shift(), e = b.host && 0 < b.host.indexOf(__abx$10a4bb(499)) ? b.host.split(__abx$10a4bb(499)) : false) && (b.auth = e.shift(), b.host = b.hostname = e.shift());
    b.search = a.search;
    b.query = a.query;
    if (null !== b.pathname || null !== b.search) b.path = (b.pathname ? b.pathname : __abx$10a4bb(7)) + (b.search ? b.search : __abx$10a4bb(7));
    b.href = b.format();
    return b;
  }
  if (!d.length) return b.pathname = null, b.path = b.search ? __abx$10a4bb(71) + b.search : null, b.href = b.format(), b;
  g = d.slice(-1)[0];
  f = (b.host || a.host || 1 < d.length) && (__abx$10a4bb(115) === g || __abx$10a4bb(114) === g) || __abx$10a4bb(7) === g;
  for (var k2 = 0, p = d.length; 0 <= p; p--) g = d[p], __abx$10a4bb(115) === g ? d.splice(p, 1) : __abx$10a4bb(114) === g ? (d.splice(p, 1), k2++) : k2 && (d.splice(p, 1), k2--);
  if (!c && !h) for (; k2--; k2) d.unshift(__abx$10a4bb(114));
  !c || __abx$10a4bb(7) === d[0] || d[0] && __abx$10a4bb(71) === d[0].charAt(0) || d.unshift(__abx$10a4bb(7));
  f && __abx$10a4bb(71) !== d.join(__abx$10a4bb(71)).substr(-1) && d.push(__abx$10a4bb(7));
  h = __abx$10a4bb(7) === d[0] || d[0] && __abx$10a4bb(71) === d[0].charAt(0);
  e && (b.hostname = b.host = h ? __abx$10a4bb(7) : d.length ? d.shift() : __abx$10a4bb(7), e = b.host && 0 < b.host.indexOf(__abx$10a4bb(499)) ? b.host.split(__abx$10a4bb(499)) : false) && (b.auth = e.shift(), b.host = b.hostname = e.shift());
  (c = c || b.host && d.length) && !h && d.unshift(__abx$10a4bb(7));
  d.length ? b.pathname = d.join(__abx$10a4bb(71)) : (b.pathname = null, b.path = null);
  if (null !== b.pathname || null !== b.search) b.path = (b.pathname ? b.pathname : __abx$10a4bb(7)) + (b.search ? b.search : __abx$10a4bb(7));
  b.auth = a.auth || b.auth;
  b.slashes = b.slashes || a.slashes;
  b.href = b.format();
  return b;
};
Z.prototype.parseHost = function() {
  return Ue(this);
};
function Ue(a) {
  var b = a.host, c = He.exec(b);
  c && (c = c[0], __abx$10a4bb(120) !== c && (a.port = c.substr(1)), b = b.substr(0, b.length - c.length));
  b && (a.hostname = b);
}
var We = u(function(a, b) {
  function c(a2, b2) {
    a2 = a2[b2];
    return 0 < b2 && (__abx$10a4bb(71) === a2 || e && __abx$10a4bb(520) === a2);
  }
  function d(a2) {
    var b2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : true;
    if (e) {
      var d2 = a2;
      if (__abx$10a4bb(18) !== typeof d2) throw new TypeError(__abx$10a4bb(521));
      d2 = d2.replace(/[\\\/]+/g, __abx$10a4bb(71));
      if (false !== b2) if (b2 = d2, d2 = b2.length - 1, 2 > d2) d2 = b2;
      else {
        for (; c(b2, d2); ) d2--;
        d2 = b2.substr(0, d2 + 1);
      }
      return d2.replace(/^([a-zA-Z]+:|\.\/)/, __abx$10a4bb(7));
    }
    return a2;
  }
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  b.unixify = d;
  b.correctPath = function(a2) {
    return d(a2.replace(
      /^\\\\\?\\.:\\/,
      __abx$10a4bb(520)
    ));
  };
  var e = __abx$10a4bb(522) === Cb.platform;
});
t(We);
var Xe = u(function(a, b) {
  function c(a2, b2) {
    void 0 === b2 && (b2 = L.default.cwd());
    return cf(b2, a2);
  }
  function d(a2, b2) {
    return __abx$10a4bb(9) === typeof a2 ? [e(), a2] : [e(a2), q(b2)];
  }
  function e(a2) {
    void 0 === a2 && (a2 = {});
    return aa2({}, df, a2);
  }
  function f(a2) {
    return __abx$10a4bb(17) === typeof a2 ? aa2({}, ud, { mode: a2 }) : aa2({}, ud, a2);
  }
  function g(a2, b2, c2, d2) {
    void 0 === b2 && (b2 = __abx$10a4bb(7));
    void 0 === c2 && (c2 = __abx$10a4bb(7));
    void 0 === d2 && (d2 = __abx$10a4bb(7));
    var e2 = __abx$10a4bb(7);
    c2 && (e2 = __abx$10a4bb(523) + c2 + __abx$10a4bb(200));
    d2 && (e2 += __abx$10a4bb(524) + d2 + __abx$10a4bb(200));
    switch (a2) {
      case __abx$10a4bb(149):
        return __abx$10a4bb(525) + b2 + e2;
      case __abx$10a4bb(527):
        return __abx$10a4bb(526) + b2 + e2;
      case __abx$10a4bb(529):
        return __abx$10a4bb(528) + b2 + e2;
      case __abx$10a4bb(531):
        return __abx$10a4bb(530) + b2 + e2;
      case __abx$10a4bb(533):
        return __abx$10a4bb(532) + b2 + e2;
      case __abx$10a4bb(535):
        return __abx$10a4bb(534) + b2 + e2;
      case __abx$10a4bb(537):
        return __abx$10a4bb(536) + b2 + e2;
      case __abx$10a4bb(539):
        return __abx$10a4bb(538) + b2 + e2;
      case __abx$10a4bb(541):
        return __abx$10a4bb(540) + b2 + e2;
      case __abx$10a4bb(543):
        return __abx$10a4bb(542) + b2 + e2;
      case __abx$10a4bb(545):
        return __abx$10a4bb(544) + b2 + e2;
      case __abx$10a4bb(547):
        return __abx$10a4bb(546) + b2 + e2;
      default:
        return a2 + __abx$10a4bb(548) + b2 + e2;
    }
  }
  function h(a2, b2, c2, d2, e2) {
    void 0 === b2 && (b2 = __abx$10a4bb(7));
    void 0 === c2 && (c2 = __abx$10a4bb(7));
    void 0 === d2 && (d2 = __abx$10a4bb(7));
    void 0 === e2 && (e2 = Error);
    b2 = new e2(g(a2, b2, c2, d2));
    b2.code = a2;
    return b2;
  }
  function k2(a2) {
    if (__abx$10a4bb(17) === typeof a2) return a2;
    if (__abx$10a4bb(18) === typeof a2) {
      var b2 = ua[a2];
      if (__abx$10a4bb(0) !== typeof b2) return b2;
    }
    throw new Pc.TypeError(__abx$10a4bb(309), __abx$10a4bb(549), a2);
  }
  function p(a2, b2) {
    if (b2) {
      var c2 = typeof b2;
      switch (c2) {
        case __abx$10a4bb(18):
          a2 = aa2({}, a2, { encoding: b2 });
          break;
        case __abx$10a4bb(118):
          a2 = aa2({}, a2, b2);
          break;
        default:
          throw TypeError(__abx$10a4bb(550) + c2 + __abx$10a4bb(551));
      }
    } else return a2;
    __abx$10a4bb(397) !== a2.encoding && K.assertEncoding(a2.encoding);
    return a2;
  }
  function n(a2) {
    return function(b2) {
      return p(a2, b2);
    };
  }
  function q(a2) {
    if (__abx$10a4bb(9) !== typeof a2) throw TypeError(fa2.CB);
    return a2;
  }
  function B(a2) {
    return function(b2, c2) {
      return __abx$10a4bb(9) === typeof b2 ? [a2(), b2] : [a2(b2), q(c2)];
    };
  }
  function m2(a2) {
    if (__abx$10a4bb(18) !== typeof a2 && !F.Buffer.isBuffer(a2)) {
      try {
        if (!(a2 instanceof Fe.URL)) throw new TypeError(fa2.PATH_STR);
      } catch (Xa2) {
        throw new TypeError(fa2.PATH_STR);
      }
      if (__abx$10a4bb(7) !== a2.hostname) throw new Pc.TypeError(__abx$10a4bb(301), L.default.platform);
      a2 = a2.pathname;
      for (var b2 = 0; b2 < a2.length; b2++) if (__abx$10a4bb(169) === a2[b2]) {
        var c2 = a2.codePointAt(b2 + 2) | 32;
        if (__abx$10a4bb(552) === a2[b2 + 1] && 102 === c2) throw new Pc.TypeError(__abx$10a4bb(303), __abx$10a4bb(553));
      }
      a2 = decodeURIComponent(a2);
    }
    a2 = String(a2);
    qb2(a2);
    return a2;
  }
  function v2(a2, b2) {
    return (a2 = c(a2, b2).substr(1)) ? a2.split(S2) : [];
  }
  function xa2(a2) {
    return v2(m2(a2));
  }
  function La2(a2, b2) {
    void 0 === b2 && (b2 = K.ENCODING_UTF8);
    return F.Buffer.isBuffer(a2) ? a2 : a2 instanceof Uint8Array ? F.bufferFrom(a2) : F.bufferFrom(String(a2), b2);
  }
  function $b2(a2, b2) {
    return b2 && __abx$10a4bb(397) !== b2 ? a2.toString(b2) : a2;
  }
  function qb2(a2, b2) {
    if (-1 !== (__abx$10a4bb(7) + a2).indexOf(__abx$10a4bb(148))) {
      a2 = Error(__abx$10a4bb(554));
      a2.code = __abx$10a4bb(149);
      throw a2;
    }
    return true;
  }
  function M2(a2, b2) {
    a2 = __abx$10a4bb(17) === typeof a2 ? a2 : __abx$10a4bb(18) === typeof a2 ? parseInt(a2, 8) : b2 ? M2(b2) : void 0;
    if (__abx$10a4bb(17) !== typeof a2 || isNaN(a2)) throw new TypeError(fa2.MODE_INT);
    return a2;
  }
  function Ya2(a2) {
    if (a2 >>> 0 !== a2) throw TypeError(fa2.FD);
  }
  function ha2(a2) {
    if (__abx$10a4bb(18) === typeof a2 && +a2 == a2) return +a2;
    if (a2 instanceof Date) return a2.getTime() / 1e3;
    if (isFinite(a2)) return 0 > a2 ? Date.now() / 1e3 : a2;
    throw Error(__abx$10a4bb(555) + a2);
  }
  function Ha2(a2) {
    if (__abx$10a4bb(17) !== typeof a2) throw TypeError(fa2.UID);
  }
  function Ia2(a2) {
    if (__abx$10a4bb(17) !== typeof a2) throw TypeError(fa2.GID);
  }
  function ef(a2) {
    a2.emit(__abx$10a4bb(556));
  }
  function T2(a2, b2, c2) {
    if (!(this instanceof T2)) return new T2(a2, b2, c2);
    this._vol = a2;
    c2 = aa2({}, p(c2, {}));
    void 0 === c2.highWaterMark && (c2.highWaterMark = 65536);
    Y.Readable.call(this, c2);
    this.path = m2(b2);
    this.fd = void 0 === c2.fd ? null : c2.fd;
    this.flags = void 0 === c2.flags ? __abx$10a4bb(557) : c2.flags;
    this.mode = void 0 === c2.mode ? 438 : c2.mode;
    this.start = c2.start;
    this.end = c2.end;
    this.autoClose = void 0 === c2.autoClose ? true : c2.autoClose;
    this.pos = void 0;
    this.bytesRead = 0;
    if (void 0 !== this.start) {
      if (__abx$10a4bb(17) !== typeof this.start) throw new TypeError(__abx$10a4bb(558));
      if (void 0 === this.end) this.end = Infinity;
      else if (__abx$10a4bb(17) !== typeof this.end) throw new TypeError(__abx$10a4bb(559));
      if (this.start > this.end) throw Error(__abx$10a4bb(560));
      this.pos = this.start;
    }
    __abx$10a4bb(17) !== typeof this.fd && this.open();
    this.on(__abx$10a4bb(437), function() {
      this.autoClose && this.destroy && this.destroy();
    });
  }
  function ff() {
    this.close();
  }
  function R2(a2, b2, c2) {
    if (!(this instanceof R2)) return new R2(a2, b2, c2);
    this._vol = a2;
    c2 = aa2({}, p(c2, {}));
    Y.Writable.call(this, c2);
    this.path = m2(b2);
    this.fd = void 0 === c2.fd ? null : c2.fd;
    this.flags = void 0 === c2.flags ? __abx$10a4bb(561) : c2.flags;
    this.mode = void 0 === c2.mode ? 438 : c2.mode;
    this.start = c2.start;
    this.autoClose = void 0 === c2.autoClose ? true : !!c2.autoClose;
    this.pos = void 0;
    this.bytesWritten = 0;
    if (void 0 !== this.start) {
      if (__abx$10a4bb(17) !== typeof this.start) throw new TypeError(__abx$10a4bb(558));
      if (0 > this.start) throw Error(__abx$10a4bb(562));
      this.pos = this.start;
    }
    c2.encoding && this.setDefaultEncoding(c2.encoding);
    __abx$10a4bb(17) !== typeof this.fd && this.open();
    this.once(__abx$10a4bb(434), function() {
      this.autoClose && this.close();
    });
  }
  var Ja2 = l && l.__extends || /* @__PURE__ */ (function() {
    function a2(b2, c2) {
      a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, b3) {
        a3.__proto__ = b3;
      } || function(a3, b3) {
        for (var c3 in b3) b3.hasOwnProperty(c3) && (a3[c3] = b3[c3]);
      };
      return a2(b2, c2);
    }
    return function(b2, c2) {
      function d2() {
        this.constructor = b2;
      }
      a2(b2, c2);
      b2.prototype = null === c2 ? Object.create(c2) : (d2.prototype = c2.prototype, new d2());
    };
  })(), Xb2 = l && l.__spreadArrays || function() {
    for (var a2 = 0, b2 = 0, c2 = arguments.length; b2 < c2; b2++) a2 += arguments[b2].length;
    a2 = Array(a2);
    var d2 = 0;
    for (b2 = 0; b2 < c2; b2++) for (var e2 = arguments[b2], f2 = 0, g2 = e2.length; f2 < g2; f2++, d2++) a2[d2] = e2[f2];
    return a2;
  };
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  var aa2 = le.extend, cf = Zc.resolve, mb2 = w.constants.O_RDONLY, Ka2 = w.constants.O_WRONLY, na2 = w.constants.O_RDWR, U = w.constants.O_CREAT, nb2 = w.constants.O_EXCL, Za2 = w.constants.O_TRUNC, $a2 = w.constants.O_APPEND, vd = w.constants.O_SYNC, gf = w.constants.O_DIRECTORY, wd = w.constants.F_OK, hf = w.constants.COPYFILE_EXCL, jf = w.constants.COPYFILE_FICLONE_FORCE;
  var S2 = Zc.sep;
  var xd = Zc.relative;
  var Yb2 = __abx$10a4bb(522) === L.default.platform, fa2 = {
    PATH_STR: __abx$10a4bb(563),
    FD: __abx$10a4bb(564),
    MODE_INT: __abx$10a4bb(565),
    CB: __abx$10a4bb(566),
    UID: __abx$10a4bb(567),
    GID: __abx$10a4bb(568),
    LEN: __abx$10a4bb(569),
    ATIME: __abx$10a4bb(570),
    MTIME: __abx$10a4bb(571),
    PREFIX: __abx$10a4bb(572),
    BUFFER: __abx$10a4bb(573),
    OFFSET: __abx$10a4bb(574),
    LENGTH: __abx$10a4bb(575),
    POSITION: __abx$10a4bb(576)
  }, ua;
  (function(a2) {
    a2[a2.r = mb2] = __abx$10a4bb(557);
    a2[a2[__abx$10a4bb(577)] = na2] = __abx$10a4bb(577);
    a2[a2.rs = mb2 | vd] = __abx$10a4bb(578);
    a2[a2.sr = a2.rs] = __abx$10a4bb(579);
    a2[a2[__abx$10a4bb(580)] = na2 | vd] = __abx$10a4bb(580);
    a2[a2[__abx$10a4bb(581)] = a2[__abx$10a4bb(580)]] = __abx$10a4bb(581);
    a2[a2.w = Ka2 | U | Za2] = __abx$10a4bb(561);
    a2[a2.wx = Ka2 | U | Za2 | nb2] = __abx$10a4bb(582);
    a2[a2.xw = a2.wx] = __abx$10a4bb(583);
    a2[a2[__abx$10a4bb(584)] = na2 | U | Za2] = __abx$10a4bb(584);
    a2[a2[__abx$10a4bb(585)] = na2 | U | Za2 | nb2] = __abx$10a4bb(585);
    a2[a2[__abx$10a4bb(586)] = a2[__abx$10a4bb(585)]] = __abx$10a4bb(586);
    a2[a2.a = Ka2 | $a2 | U] = __abx$10a4bb(587);
    a2[a2.ax = Ka2 | $a2 | U | nb2] = __abx$10a4bb(588);
    a2[a2.xa = a2.ax] = __abx$10a4bb(589);
    a2[a2[__abx$10a4bb(590)] = na2 | $a2 | U] = __abx$10a4bb(590);
    a2[a2[__abx$10a4bb(591)] = na2 | $a2 | U | nb2] = __abx$10a4bb(591);
    a2[a2[__abx$10a4bb(592)] = a2[__abx$10a4bb(591)]] = __abx$10a4bb(592);
  })(ua = b.FLAGS || (b.FLAGS = {}));
  b.flagsToNumber = k2;
  a = { encoding: __abx$10a4bb(23) };
  var ob2 = n(a), yd = B(ob2), zd = n({ flag: __abx$10a4bb(557) }), Ad = {
    encoding: __abx$10a4bb(23),
    mode: 438,
    flag: ua[ua.w]
  }, Bd = n(Ad), Cd = { encoding: __abx$10a4bb(23), mode: 438, flag: ua[ua.a] }, Dd = n(Cd), kf = B(Dd), Ed = n(a), lf = B(Ed), ud = { mode: 511, recursive: false }, Fd = { recursive: false }, Gd = n({ encoding: __abx$10a4bb(23), withFileTypes: false }), mf = B(Gd), df = { bigint: false };
  b.pathToFilename = m2;
  if (Yb2) {
    var nf = c, of = We.unixify;
    c = function(a2, b2) {
      return of(nf(a2, b2));
    };
  }
  b.filenameToSteps = v2;
  b.pathToSteps = xa2;
  b.dataToStr = function(a2, b2) {
    void 0 === b2 && (b2 = K.ENCODING_UTF8);
    return F.Buffer.isBuffer(a2) ? a2.toString(b2) : a2 instanceof Uint8Array ? F.bufferFrom(a2).toString(b2) : String(a2);
  };
  b.dataToBuffer = La2;
  b.bufferToEncoding = $b2;
  b.toUnixTimestamp = ha2;
  a = (function() {
    function a2(a3) {
      void 0 === a3 && (a3 = {});
      this.ino = 0;
      this.inodes = {};
      this.releasedInos = [];
      this.fds = {};
      this.releasedFds = [];
      this.maxFiles = 1e4;
      this.openFiles = 0;
      this.promisesApi = me.default(this);
      this.statWatchers = {};
      this.props = aa2({ Node: fd.Node, Link: fd.Link, File: fd.File }, a3);
      a3 = this.createLink();
      a3.setNode(this.createNode(true));
      var b2 = this;
      this.StatWatcher = (function(a4) {
        function c2() {
          return a4.call(this, b2) || this;
        }
        Ja2(c2, a4);
        return c2;
      })(Hd);
      this.ReadStream = (function(a4) {
        function c2() {
          for (var c3 = [], d2 = 0; d2 < arguments.length; d2++) c3[d2] = arguments[d2];
          return a4.apply(this, Xb2([b2], c3)) || this;
        }
        Ja2(c2, a4);
        return c2;
      })(T2);
      this.WriteStream = (function(a4) {
        function c2() {
          for (var c3 = [], d2 = 0; d2 < arguments.length; d2++) c3[d2] = arguments[d2];
          return a4.apply(this, Xb2([b2], c3)) || this;
        }
        Ja2(c2, a4);
        return c2;
      })(R2);
      this.FSWatcher = (function(a4) {
        function c2() {
          return a4.call(this, b2) || this;
        }
        Ja2(c2, a4);
        return c2;
      })(Id);
      this.root = a3;
    }
    a2.fromJSON = function(b2, c2) {
      var d2 = new a2();
      d2.fromJSON(b2, c2);
      return d2;
    };
    Object.defineProperty(
      a2.prototype,
      __abx$10a4bb(593),
      { get: function() {
        if (null === this.promisesApi) throw Error(__abx$10a4bb(594));
        return this.promisesApi;
      }, enumerable: true, configurable: true }
    );
    a2.prototype.createLink = function(a3, b2, c2, d2) {
      void 0 === c2 && (c2 = false);
      if (!a3) return new this.props.Link(this, null, __abx$10a4bb(7));
      if (!b2) throw Error(__abx$10a4bb(595));
      return a3.createChild(b2, this.createNode(c2, d2));
    };
    a2.prototype.deleteLink = function(a3) {
      var b2 = a3.parent;
      return b2 ? (b2.deleteChild(a3), true) : false;
    };
    a2.prototype.newInoNumber = function() {
      var a3 = this.releasedInos.pop();
      return a3 ? a3 : this.ino = (this.ino + 1) % 4294967295;
    };
    a2.prototype.newFdNumber = function() {
      var b2 = this.releasedFds.pop();
      return __abx$10a4bb(17) === typeof b2 ? b2 : a2.fd--;
    };
    a2.prototype.createNode = function(a3, b2) {
      void 0 === a3 && (a3 = false);
      b2 = new this.props.Node(this.newInoNumber(), b2);
      a3 && b2.setIsDirectory();
      return this.inodes[b2.ino] = b2;
    };
    a2.prototype.getNode = function(a3) {
      return this.inodes[a3];
    };
    a2.prototype.deleteNode = function(a3) {
      a3.del();
      delete this.inodes[a3.ino];
      this.releasedInos.push(a3.ino);
    };
    a2.prototype.genRndStr = function() {
      var a3 = (Math.random() + 1).toString(36).substr(2, 6);
      return 6 === a3.length ? a3 : this.genRndStr();
    };
    a2.prototype.getLink = function(a3) {
      return this.root.walk(a3);
    };
    a2.prototype.getLinkOrThrow = function(a3, b2) {
      var c2 = v2(a3);
      c2 = this.getLink(c2);
      if (!c2) throw h(__abx$10a4bb(149), b2, a3);
      return c2;
    };
    a2.prototype.getResolvedLink = function(a3) {
      a3 = __abx$10a4bb(18) === typeof a3 ? v2(a3) : a3;
      for (var b2 = this.root, c2 = 0; c2 < a3.length; ) {
        b2 = b2.getChild(a3[c2]);
        if (!b2) return null;
        var d2 = b2.getNode();
        d2.isSymlink() ? (a3 = d2.symlink.concat(a3.slice(c2 + 1)), b2 = this.root, c2 = 0) : c2++;
      }
      return b2;
    };
    a2.prototype.getResolvedLinkOrThrow = function(a3, b2) {
      var c2 = this.getResolvedLink(a3);
      if (!c2) throw h(__abx$10a4bb(149), b2, a3);
      return c2;
    };
    a2.prototype.resolveSymlinks = function(a3) {
      return this.getResolvedLink(a3.steps.slice(1));
    };
    a2.prototype.getLinkAsDirOrThrow = function(a3, b2) {
      var c2 = this.getLinkOrThrow(a3, b2);
      if (!c2.getNode().isDirectory()) throw h(__abx$10a4bb(537), b2, a3);
      return c2;
    };
    a2.prototype.getLinkParent = function(a3) {
      return this.root.walk(a3, a3.length - 1);
    };
    a2.prototype.getLinkParentAsDirOrThrow = function(a3, b2) {
      a3 = a3 instanceof Array ? a3 : v2(a3);
      var c2 = this.getLinkParent(a3);
      if (!c2) throw h(
        __abx$10a4bb(149),
        b2,
        S2 + a3.join(S2)
      );
      if (!c2.getNode().isDirectory()) throw h(__abx$10a4bb(537), b2, S2 + a3.join(S2));
      return c2;
    };
    a2.prototype.getFileByFd = function(a3) {
      return this.fds[String(a3)];
    };
    a2.prototype.getFileByFdOrThrow = function(a3, b2) {
      if (a3 >>> 0 !== a3) throw TypeError(fa2.FD);
      a3 = this.getFileByFd(a3);
      if (!a3) throw h(__abx$10a4bb(527), b2);
      return a3;
    };
    a2.prototype.getNodeByIdOrCreate = function(a3, b2, c2) {
      if (__abx$10a4bb(17) === typeof a3) {
        a3 = this.getFileByFd(a3);
        if (!a3) throw Error(__abx$10a4bb(596));
        return a3.node;
      }
      var d2 = xa2(a3), e2 = this.getLink(d2);
      if (e2) return e2.getNode();
      if (b2 & U && (b2 = this.getLinkParent(d2))) return e2 = this.createLink(b2, d2[d2.length - 1], false, c2), e2.getNode();
      throw h(__abx$10a4bb(149), __abx$10a4bb(597), m2(a3));
    };
    a2.prototype.wrapAsync = function(a3, b2, c2) {
      var d2 = this;
      q(c2);
      $c.default(function() {
        try {
          c2(null, a3.apply(d2, b2));
        } catch (va2) {
          c2(va2);
        }
      });
    };
    a2.prototype._toJSON = function(a3, b2, c2) {
      var d2;
      void 0 === a3 && (a3 = this.root);
      void 0 === b2 && (b2 = {});
      var e2 = true, r = a3.children;
      a3.getNode().isFile() && (r = (d2 = {}, d2[a3.getName()] = a3.parent.getChild(a3.getName()), d2), a3 = a3.parent);
      for (var D2 in r) {
        e2 = false;
        r = a3.getChild(D2);
        if (!r) throw Error(__abx$10a4bb(598));
        d2 = r.getNode();
        d2.isFile() ? (r = r.getPath(), c2 && (r = xd(c2, r)), b2[r] = d2.getString()) : d2.isDirectory() && this._toJSON(r, b2, c2);
      }
      a3 = a3.getPath();
      c2 && (a3 = xd(c2, a3));
      a3 && e2 && (b2[a3] = null);
      return b2;
    };
    a2.prototype.toJSON = function(a3, b2, c2) {
      void 0 === b2 && (b2 = {});
      void 0 === c2 && (c2 = false);
      var d2 = [];
      if (a3) {
        a3 instanceof Array || (a3 = [a3]);
        for (var e2 = 0; e2 < a3.length; e2++) {
          var r = m2(a3[e2]);
          (r = this.getResolvedLink(r)) && d2.push(r);
        }
      } else d2.push(this.root);
      if (!d2.length) return b2;
      for (e2 = 0; e2 < d2.length; e2++) r = d2[e2], this._toJSON(r, b2, c2 ? r.getPath() : __abx$10a4bb(7));
      return b2;
    };
    a2.prototype.fromJSON = function(a3, b2) {
      void 0 === b2 && (b2 = L.default.cwd());
      for (var d2 in a3) {
        var e2 = a3[d2];
        if (__abx$10a4bb(18) === typeof e2) {
          d2 = c(d2, b2);
          var r = v2(d2);
          1 < r.length && (r = S2 + r.slice(0, r.length - 1).join(S2), this.mkdirpBase(r, 511));
          this.writeFileSync(d2, e2);
        } else this.mkdirpBase(d2, 511);
      }
    };
    a2.prototype.reset = function() {
      this.ino = 0;
      this.inodes = {};
      this.releasedInos = [];
      this.fds = {};
      this.releasedFds = [];
      this.openFiles = 0;
      this.root = this.createLink();
      this.root.setNode(this.createNode(true));
    };
    a2.prototype.mountSync = function(a3, b2) {
      this.fromJSON(b2, a3);
    };
    a2.prototype.openLink = function(a3, b2, c2) {
      void 0 === c2 && (c2 = true);
      if (this.openFiles >= this.maxFiles) throw h(__abx$10a4bb(545), __abx$10a4bb(487), a3.getPath());
      var d2 = a3;
      c2 && (d2 = this.resolveSymlinks(a3));
      if (!d2) throw h(__abx$10a4bb(149), __abx$10a4bb(487), a3.getPath());
      c2 = d2.getNode();
      if (c2.isDirectory()) {
        if ((b2 & (mb2 | na2 | Ka2)) !== mb2) throw h(__abx$10a4bb(539), __abx$10a4bb(487), a3.getPath());
      } else if (b2 & gf) throw h(__abx$10a4bb(537), __abx$10a4bb(487), a3.getPath());
      if (!(b2 & Ka2 || c2.canRead())) throw h(__abx$10a4bb(541), __abx$10a4bb(487), a3.getPath());
      a3 = new this.props.File(a3, c2, b2, this.newFdNumber());
      this.fds[a3.fd] = a3;
      this.openFiles++;
      b2 & Za2 && a3.truncate();
      return a3;
    };
    a2.prototype.openFile = function(a3, b2, c2, d2) {
      void 0 === d2 && (d2 = true);
      var e2 = v2(a3), r = d2 ? this.getResolvedLink(e2) : this.getLink(e2);
      if (!r && b2 & U) {
        var D2 = this.getResolvedLink(e2.slice(0, e2.length - 1));
        if (!D2) throw h(__abx$10a4bb(149), __abx$10a4bb(487), S2 + e2.join(S2));
        b2 & U && __abx$10a4bb(17) === typeof c2 && (r = this.createLink(D2, e2[e2.length - 1], false, c2));
      }
      if (r) return this.openLink(r, b2, d2);
      throw h(__abx$10a4bb(149), __abx$10a4bb(487), a3);
    };
    a2.prototype.openBase = function(a3, b2, c2, d2) {
      void 0 === d2 && (d2 = true);
      b2 = this.openFile(a3, b2, c2, d2);
      if (!b2) throw h(__abx$10a4bb(149), __abx$10a4bb(487), a3);
      return b2.fd;
    };
    a2.prototype.openSync = function(a3, b2, c2) {
      void 0 === c2 && (c2 = 438);
      c2 = M2(c2);
      a3 = m2(a3);
      b2 = k2(b2);
      return this.openBase(a3, b2, c2);
    };
    a2.prototype.open = function(a3, b2, c2, d2) {
      var e2 = c2;
      __abx$10a4bb(9) === typeof c2 && (e2 = 438, d2 = c2);
      c2 = M2(e2 || 438);
      a3 = m2(a3);
      b2 = k2(b2);
      this.wrapAsync(this.openBase, [a3, b2, c2], d2);
    };
    a2.prototype.closeFile = function(a3) {
      this.fds[a3.fd] && (this.openFiles--, delete this.fds[a3.fd], this.releasedFds.push(a3.fd));
    };
    a2.prototype.closeSync = function(a3) {
      Ya2(a3);
      a3 = this.getFileByFdOrThrow(a3, __abx$10a4bb(433));
      this.closeFile(a3);
    };
    a2.prototype.close = function(a3, b2) {
      Ya2(a3);
      this.wrapAsync(
        this.closeSync,
        [a3],
        b2
      );
    };
    a2.prototype.openFileOrGetById = function(a3, b2, c2) {
      if (__abx$10a4bb(17) === typeof a3) {
        a3 = this.fds[a3];
        if (!a3) throw h(__abx$10a4bb(149));
        return a3;
      }
      return this.openFile(m2(a3), b2, c2);
    };
    a2.prototype.readBase = function(a3, b2, c2, d2, e2) {
      return this.getFileByFdOrThrow(a3).read(b2, Number(c2), Number(d2), e2);
    };
    a2.prototype.readSync = function(a3, b2, c2, d2, e2) {
      Ya2(a3);
      return this.readBase(a3, b2, c2, d2, e2);
    };
    a2.prototype.read = function(a3, b2, c2, d2, e2, f2) {
      var r = this;
      q(f2);
      if (0 === d2) return L.default.nextTick(function() {
        f2 && f2(null, 0, b2);
      });
      $c.default(function() {
        try {
          var D2 = r.readBase(
            a3,
            b2,
            c2,
            d2,
            e2
          );
          f2(null, D2, b2);
        } catch (pf) {
          f2(pf);
        }
      });
    };
    a2.prototype.readFileBase = function(a3, b2, c2) {
      var d2 = __abx$10a4bb(17) === typeof a3 && a3 >>> 0 === a3;
      if (!d2) {
        var e2 = m2(a3);
        e2 = v2(e2);
        if ((e2 = this.getResolvedLink(e2)) && e2.getNode().isDirectory()) throw h(__abx$10a4bb(539), __abx$10a4bb(487), e2.getPath());
        a3 = this.openSync(a3, b2);
      }
      try {
        var r = $b2(this.getFileByFdOrThrow(a3).getBuffer(), c2);
      } finally {
        d2 || this.closeSync(a3);
      }
      return r;
    };
    a2.prototype.readFileSync = function(a3, b2) {
      b2 = zd(b2);
      var c2 = k2(b2.flag);
      return this.readFileBase(a3, c2, b2.encoding);
    };
    a2.prototype.readFile = function(a3, b2, c2) {
      c2 = B(zd)(
        b2,
        c2
      );
      b2 = c2[0];
      c2 = c2[1];
      var d2 = k2(b2.flag);
      this.wrapAsync(this.readFileBase, [a3, d2, b2.encoding], c2);
    };
    a2.prototype.writeBase = function(a3, b2, c2, d2, e2) {
      return this.getFileByFdOrThrow(a3, __abx$10a4bb(475)).write(b2, c2, d2, e2);
    };
    a2.prototype.writeSync = function(a3, b2, c2, d2, e2) {
      Ya2(a3);
      var r = __abx$10a4bb(18) !== typeof b2;
      if (r) {
        var D2 = (c2 || 0) | 0;
        var f2 = d2;
        c2 = e2;
      } else var Xa2 = d2;
      b2 = La2(b2, Xa2);
      r ? __abx$10a4bb(0) === typeof f2 && (f2 = b2.length) : (D2 = 0, f2 = b2.length);
      return this.writeBase(a3, b2, D2, f2, c2);
    };
    a2.prototype.write = function(a3, b2, c2, d2, e2, f2) {
      var r = this;
      Ya2(a3);
      var D2 = typeof b2, Xa2 = typeof c2, g2 = typeof d2, h2 = typeof e2;
      if (__abx$10a4bb(18) !== D2) if (__abx$10a4bb(9) === Xa2) var k3 = c2;
      else if (__abx$10a4bb(9) === g2) {
        var lb2 = c2 | 0;
        k3 = d2;
      } else if (__abx$10a4bb(9) === h2) {
        lb2 = c2 | 0;
        var m3 = d2;
        k3 = e2;
      } else {
        lb2 = c2 | 0;
        m3 = d2;
        var n2 = e2;
        k3 = f2;
      }
      else if (__abx$10a4bb(9) === Xa2) k3 = c2;
      else if (__abx$10a4bb(9) === g2) n2 = c2, k3 = d2;
      else if (__abx$10a4bb(9) === h2) {
        n2 = c2;
        var va2 = d2;
        k3 = e2;
      }
      var p2 = La2(b2, va2);
      __abx$10a4bb(18) !== D2 ? __abx$10a4bb(0) === typeof m3 && (m3 = p2.length) : (lb2 = 0, m3 = p2.length);
      var v3 = q(k3);
      $c.default(function() {
        try {
          var c3 = r.writeBase(a3, p2, lb2, m3, n2);
          __abx$10a4bb(18) !== D2 ? v3(null, c3, p2) : v3(null, c3, b2);
        } catch (qf) {
          v3(qf);
        }
      });
    };
    a2.prototype.writeFileBase = function(a3, b2, c2, d2) {
      var e2 = __abx$10a4bb(17) === typeof a3;
      a3 = e2 ? a3 : this.openBase(m2(a3), c2, d2);
      d2 = 0;
      var r = b2.length;
      c2 = c2 & $a2 ? void 0 : 0;
      try {
        for (; 0 < r; ) {
          var D2 = this.writeSync(a3, b2, d2, r, c2);
          d2 += D2;
          r -= D2;
          void 0 !== c2 && (c2 += D2);
        }
      } finally {
        e2 || this.closeSync(a3);
      }
    };
    a2.prototype.writeFileSync = function(a3, b2, c2) {
      var d2 = Bd(c2);
      c2 = k2(d2.flag);
      var e2 = M2(d2.mode);
      b2 = La2(b2, d2.encoding);
      this.writeFileBase(a3, b2, c2, e2);
    };
    a2.prototype.writeFile = function(a3, b2, c2, d2) {
      var e2 = c2;
      __abx$10a4bb(9) === typeof c2 && (e2 = Ad, d2 = c2);
      c2 = q(d2);
      var r = Bd(e2);
      e2 = k2(r.flag);
      d2 = M2(r.mode);
      b2 = La2(b2, r.encoding);
      this.wrapAsync(
        this.writeFileBase,
        [a3, b2, e2, d2],
        c2
      );
    };
    a2.prototype.linkBase = function(a3, b2) {
      var c2 = v2(a3), d2 = this.getLink(c2);
      if (!d2) throw h(__abx$10a4bb(149), __abx$10a4bb(483), a3, b2);
      var e2 = v2(b2);
      c2 = this.getLinkParent(e2);
      if (!c2) throw h(__abx$10a4bb(149), __abx$10a4bb(483), a3, b2);
      e2 = e2[e2.length - 1];
      if (c2.getChild(e2)) throw h(__abx$10a4bb(535), __abx$10a4bb(483), a3, b2);
      a3 = d2.getNode();
      a3.nlink++;
      c2.createChild(e2, a3);
    };
    a2.prototype.copyFileBase = function(a3, b2, c2) {
      var d2 = this.readFileSync(a3);
      if (c2 & hf && this.existsSync(b2)) throw h(__abx$10a4bb(535), __abx$10a4bb(480), a3, b2);
      if (c2 & jf) throw h(__abx$10a4bb(547), __abx$10a4bb(480), a3, b2);
      this.writeFileBase(b2, d2, ua.w, 438);
    };
    a2.prototype.copyFileSync = function(a3, b2, c2) {
      a3 = m2(a3);
      b2 = m2(b2);
      return this.copyFileBase(a3, b2, (c2 || 0) | 0);
    };
    a2.prototype.copyFile = function(a3, b2, c2, d2) {
      a3 = m2(a3);
      b2 = m2(b2);
      if (__abx$10a4bb(9) === typeof c2) var e2 = 0;
      else e2 = c2, c2 = d2;
      q(c2);
      this.wrapAsync(this.copyFileBase, [a3, b2, e2], c2);
    };
    a2.prototype.linkSync = function(a3, b2) {
      a3 = m2(a3);
      b2 = m2(b2);
      this.linkBase(a3, b2);
    };
    a2.prototype.link = function(a3, b2, c2) {
      a3 = m2(a3);
      b2 = m2(b2);
      this.wrapAsync(this.linkBase, [a3, b2], c2);
    };
    a2.prototype.unlinkBase = function(a3) {
      var b2 = v2(a3);
      b2 = this.getLink(b2);
      if (!b2) throw h(__abx$10a4bb(149), __abx$10a4bb(496), a3);
      if (b2.length) throw Error(__abx$10a4bb(599));
      this.deleteLink(b2);
      a3 = b2.getNode();
      a3.nlink--;
      0 >= a3.nlink && this.deleteNode(a3);
    };
    a2.prototype.unlinkSync = function(a3) {
      a3 = m2(a3);
      this.unlinkBase(a3);
    };
    a2.prototype.unlink = function(a3, b2) {
      a3 = m2(a3);
      this.wrapAsync(this.unlinkBase, [a3], b2);
    };
    a2.prototype.symlinkBase = function(a3, b2) {
      var c2 = v2(b2), d2 = this.getLinkParent(c2);
      if (!d2) throw h(__abx$10a4bb(149), __abx$10a4bb(494), a3, b2);
      c2 = c2[c2.length - 1];
      if (d2.getChild(c2)) throw h(__abx$10a4bb(535), __abx$10a4bb(494), a3, b2);
      b2 = d2.createChild(c2);
      b2.getNode().makeSymlink(v2(a3));
      return b2;
    };
    a2.prototype.symlinkSync = function(a3, b2) {
      a3 = m2(a3);
      b2 = m2(b2);
      this.symlinkBase(a3, b2);
    };
    a2.prototype.symlink = function(a3, b2, c2, d2) {
      c2 = q(__abx$10a4bb(9) === typeof c2 ? c2 : d2);
      a3 = m2(a3);
      b2 = m2(b2);
      this.wrapAsync(this.symlinkBase, [a3, b2], c2);
    };
    a2.prototype.realpathBase = function(a3, b2) {
      var c2 = v2(a3);
      c2 = this.getResolvedLink(c2);
      if (!c2) throw h(__abx$10a4bb(149), __abx$10a4bb(490), a3);
      return K.strToEncoding(c2.getPath(), b2);
    };
    a2.prototype.realpathSync = function(a3, b2) {
      return this.realpathBase(m2(a3), Ed(b2).encoding);
    };
    a2.prototype.realpath = function(a3, b2, c2) {
      c2 = lf(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      a3 = m2(a3);
      this.wrapAsync(
        this.realpathBase,
        [a3, b2.encoding],
        c2
      );
    };
    a2.prototype.lstatBase = function(a3, b2) {
      void 0 === b2 && (b2 = false);
      var c2 = this.getLink(v2(a3));
      if (!c2) throw h(__abx$10a4bb(149), __abx$10a4bb(484), a3);
      return ka.default.build(c2.getNode(), b2);
    };
    a2.prototype.lstatSync = function(a3, b2) {
      return this.lstatBase(m2(a3), e(b2).bigint);
    };
    a2.prototype.lstat = function(a3, b2, c2) {
      c2 = d(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      this.wrapAsync(this.lstatBase, [m2(a3), b2.bigint], c2);
    };
    a2.prototype.statBase = function(a3, b2) {
      void 0 === b2 && (b2 = false);
      var c2 = this.getResolvedLink(v2(a3));
      if (!c2) throw h(__abx$10a4bb(149), __abx$10a4bb(493), a3);
      return ka.default.build(c2.getNode(), b2);
    };
    a2.prototype.statSync = function(a3, b2) {
      return this.statBase(m2(a3), e(b2).bigint);
    };
    a2.prototype.stat = function(a3, b2, c2) {
      c2 = d(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      this.wrapAsync(this.statBase, [m2(a3), b2.bigint], c2);
    };
    a2.prototype.fstatBase = function(a3, b2) {
      void 0 === b2 && (b2 = false);
      a3 = this.getFileByFd(a3);
      if (!a3) throw h(__abx$10a4bb(527), __abx$10a4bb(471));
      return ka.default.build(a3.node, b2);
    };
    a2.prototype.fstatSync = function(a3, b2) {
      return this.fstatBase(a3, e(b2).bigint);
    };
    a2.prototype.fstat = function(a3, b2, c2) {
      b2 = d(b2, c2);
      this.wrapAsync(this.fstatBase, [a3, b2[0].bigint], b2[1]);
    };
    a2.prototype.renameBase = function(a3, b2) {
      var c2 = this.getLink(v2(a3));
      if (!c2) throw h(__abx$10a4bb(149), __abx$10a4bb(491), a3, b2);
      var d2 = v2(b2), e2 = this.getLinkParent(d2);
      if (!e2) throw h(__abx$10a4bb(149), __abx$10a4bb(491), a3, b2);
      (a3 = c2.parent) && a3.deleteChild(c2);
      c2.steps = Xb2(e2.steps, [d2[d2.length - 1]]);
      e2.setChild(c2.getName(), c2);
    };
    a2.prototype.renameSync = function(a3, b2) {
      a3 = m2(a3);
      b2 = m2(b2);
      this.renameBase(a3, b2);
    };
    a2.prototype.rename = function(a3, b2, c2) {
      a3 = m2(a3);
      b2 = m2(b2);
      this.wrapAsync(this.renameBase, [a3, b2], c2);
    };
    a2.prototype.existsBase = function(a3) {
      return !!this.statBase(a3);
    };
    a2.prototype.existsSync = function(a3) {
      try {
        return this.existsBase(m2(a3));
      } catch (D2) {
        return false;
      }
    };
    a2.prototype.exists = function(a3, b2) {
      var c2 = this, d2 = m2(a3);
      if (__abx$10a4bb(9) !== typeof b2) throw Error(fa2.CB);
      $c.default(function() {
        try {
          b2(c2.existsBase(d2));
        } catch (va2) {
          b2(false);
        }
      });
    };
    a2.prototype.accessBase = function(a3) {
      this.getLinkOrThrow(a3, __abx$10a4bb(477));
    };
    a2.prototype.accessSync = function(a3, b2) {
      void 0 === b2 && (b2 = wd);
      a3 = m2(a3);
      this.accessBase(a3, b2 | 0);
    };
    a2.prototype.access = function(a3, b2, c2) {
      var d2 = wd;
      __abx$10a4bb(9) !== typeof b2 && (d2 = b2 | 0, b2 = q(c2));
      a3 = m2(a3);
      this.wrapAsync(this.accessBase, [a3, d2], b2);
    };
    a2.prototype.appendFileSync = function(a3, b2, c2) {
      void 0 === c2 && (c2 = Cd);
      c2 = Dd(c2);
      c2.flag && a3 >>> 0 !== a3 || (c2.flag = __abx$10a4bb(587));
      this.writeFileSync(a3, b2, c2);
    };
    a2.prototype.appendFile = function(a3, b2, c2, d2) {
      d2 = kf(c2, d2);
      c2 = d2[0];
      d2 = d2[1];
      c2.flag && a3 >>> 0 !== a3 || (c2.flag = __abx$10a4bb(587));
      this.writeFile(a3, b2, c2, d2);
    };
    a2.prototype.readdirBase = function(a3, b2) {
      var c2 = v2(a3);
      c2 = this.getResolvedLink(c2);
      if (!c2) throw h(__abx$10a4bb(149), __abx$10a4bb(488), a3);
      if (!c2.getNode().isDirectory()) throw h(__abx$10a4bb(537), __abx$10a4bb(600), a3);
      if (b2.withFileTypes) {
        var d2 = [];
        for (e2 in c2.children) (a3 = c2.getChild(e2)) && d2.push(Qc.default.build(a3, b2.encoding));
        Yb2 || __abx$10a4bb(397) === b2.encoding || d2.sort(function(a4, b3) {
          return a4.name < b3.name ? -1 : a4.name > b3.name ? 1 : 0;
        });
        return d2;
      }
      var e2 = [];
      for (d2 in c2.children) e2.push(K.strToEncoding(d2, b2.encoding));
      Yb2 || __abx$10a4bb(397) === b2.encoding || e2.sort();
      return e2;
    };
    a2.prototype.readdirSync = function(a3, b2) {
      b2 = Gd(b2);
      a3 = m2(a3);
      return this.readdirBase(a3, b2);
    };
    a2.prototype.readdir = function(a3, b2, c2) {
      c2 = mf(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      a3 = m2(a3);
      this.wrapAsync(this.readdirBase, [a3, b2], c2);
    };
    a2.prototype.readlinkBase = function(a3, b2) {
      var c2 = this.getLinkOrThrow(a3, __abx$10a4bb(489)).getNode();
      if (!c2.isSymlink()) throw h(__abx$10a4bb(529), __abx$10a4bb(489), a3);
      a3 = S2 + c2.symlink.join(S2);
      return K.strToEncoding(a3, b2);
    };
    a2.prototype.readlinkSync = function(a3, b2) {
      b2 = ob2(b2);
      a3 = m2(a3);
      return this.readlinkBase(a3, b2.encoding);
    };
    a2.prototype.readlink = function(a3, b2, c2) {
      c2 = yd(b2, c2);
      b2 = c2[0];
      c2 = c2[1];
      a3 = m2(a3);
      this.wrapAsync(this.readlinkBase, [a3, b2.encoding], c2);
    };
    a2.prototype.fsyncBase = function(a3) {
      this.getFileByFdOrThrow(a3, __abx$10a4bb(472));
    };
    a2.prototype.fsyncSync = function(a3) {
      this.fsyncBase(a3);
    };
    a2.prototype.fsync = function(a3, b2) {
      this.wrapAsync(this.fsyncBase, [a3], b2);
    };
    a2.prototype.fdatasyncBase = function(a3) {
      this.getFileByFdOrThrow(
        a3,
        __abx$10a4bb(469)
      );
    };
    a2.prototype.fdatasyncSync = function(a3) {
      this.fdatasyncBase(a3);
    };
    a2.prototype.fdatasync = function(a3, b2) {
      this.wrapAsync(this.fdatasyncBase, [a3], b2);
    };
    a2.prototype.ftruncateBase = function(a3, b2) {
      this.getFileByFdOrThrow(a3, __abx$10a4bb(473)).truncate(b2);
    };
    a2.prototype.ftruncateSync = function(a3, b2) {
      this.ftruncateBase(a3, b2);
    };
    a2.prototype.ftruncate = function(a3, b2, c2) {
      var d2 = __abx$10a4bb(17) === typeof b2 ? b2 : 0;
      b2 = q(__abx$10a4bb(17) === typeof b2 ? c2 : b2);
      this.wrapAsync(this.ftruncateBase, [a3, d2], b2);
    };
    a2.prototype.truncateBase = function(a3, b2) {
      a3 = this.openSync(
        a3,
        __abx$10a4bb(577)
      );
      try {
        this.ftruncateSync(a3, b2);
      } finally {
        this.closeSync(a3);
      }
    };
    a2.prototype.truncateSync = function(a3, b2) {
      if (a3 >>> 0 === a3) return this.ftruncateSync(a3, b2);
      this.truncateBase(a3, b2);
    };
    a2.prototype.truncate = function(a3, b2, c2) {
      var d2 = __abx$10a4bb(17) === typeof b2 ? b2 : 0;
      b2 = q(__abx$10a4bb(17) === typeof b2 ? c2 : b2);
      if (a3 >>> 0 === a3) return this.ftruncate(a3, d2, b2);
      this.wrapAsync(this.truncateBase, [a3, d2], b2);
    };
    a2.prototype.futimesBase = function(a3, b2, c2) {
      a3 = this.getFileByFdOrThrow(a3, __abx$10a4bb(474)).node;
      a3.atime = new Date(1e3 * b2);
      a3.mtime = new Date(1e3 * c2);
    };
    a2.prototype.futimesSync = function(a3, b2, c2) {
      this.futimesBase(a3, ha2(b2), ha2(c2));
    };
    a2.prototype.futimes = function(a3, b2, c2, d2) {
      this.wrapAsync(this.futimesBase, [a3, ha2(b2), ha2(c2)], d2);
    };
    a2.prototype.utimesBase = function(a3, b2, c2) {
      a3 = this.openSync(a3, __abx$10a4bb(577));
      try {
        this.futimesBase(a3, b2, c2);
      } finally {
        this.closeSync(a3);
      }
    };
    a2.prototype.utimesSync = function(a3, b2, c2) {
      this.utimesBase(m2(a3), ha2(b2), ha2(c2));
    };
    a2.prototype.utimes = function(a3, b2, c2, d2) {
      this.wrapAsync(this.utimesBase, [m2(a3), ha2(b2), ha2(c2)], d2);
    };
    a2.prototype.mkdirBase = function(a3, b2) {
      var c2 = v2(a3);
      if (!c2.length) throw h(
        __abx$10a4bb(539),
        __abx$10a4bb(485),
        a3
      );
      var d2 = this.getLinkParentAsDirOrThrow(a3, __abx$10a4bb(485));
      c2 = c2[c2.length - 1];
      if (d2.getChild(c2)) throw h(__abx$10a4bb(535), __abx$10a4bb(485), a3);
      d2.createChild(c2, this.createNode(true, b2));
    };
    a2.prototype.mkdirpBase = function(a3, b2) {
      a3 = v2(a3);
      for (var c2 = this.root, d2 = 0; d2 < a3.length; d2++) {
        var e2 = a3[d2];
        if (!c2.getNode().isDirectory()) throw h(__abx$10a4bb(537), __abx$10a4bb(485), c2.getPath());
        var f2 = c2.getChild(e2);
        if (f2) if (f2.getNode().isDirectory()) c2 = f2;
        else throw h(__abx$10a4bb(537), __abx$10a4bb(485), f2.getPath());
        else c2 = c2.createChild(e2, this.createNode(true, b2));
      }
    };
    a2.prototype.mkdirSync = function(a3, b2) {
      b2 = f(b2);
      var c2 = M2(b2.mode, 511);
      a3 = m2(a3);
      b2.recursive ? this.mkdirpBase(a3, c2) : this.mkdirBase(a3, c2);
    };
    a2.prototype.mkdir = function(a3, b2, c2) {
      var d2 = f(b2);
      b2 = q(__abx$10a4bb(9) === typeof b2 ? b2 : c2);
      c2 = M2(d2.mode, 511);
      a3 = m2(a3);
      d2.recursive ? this.wrapAsync(this.mkdirpBase, [a3, c2], b2) : this.wrapAsync(this.mkdirBase, [a3, c2], b2);
    };
    a2.prototype.mkdirpSync = function(a3, b2) {
      this.mkdirSync(a3, { mode: b2, recursive: true });
    };
    a2.prototype.mkdirp = function(a3, b2, c2) {
      var d2 = __abx$10a4bb(9) === typeof b2 ? void 0 : b2;
      b2 = q(__abx$10a4bb(9) === typeof b2 ? b2 : c2);
      this.mkdir(a3, { mode: d2, recursive: true }, b2);
    };
    a2.prototype.mkdtempBase = function(a3, b2, c2) {
      void 0 === c2 && (c2 = 5);
      var d2 = a3 + this.genRndStr();
      try {
        return this.mkdirBase(d2, 511), K.strToEncoding(d2, b2);
      } catch (va2) {
        if (__abx$10a4bb(535) === va2.code) {
          if (1 < c2) return this.mkdtempBase(a3, b2, c2 - 1);
          throw Error(__abx$10a4bb(601));
        }
        throw va2;
      }
    };
    a2.prototype.mkdtempSync = function(a3, b2) {
      b2 = ob2(b2).encoding;
      if (!a3 || __abx$10a4bb(18) !== typeof a3) throw new TypeError(__abx$10a4bb(572));
      qb2(a3);
      return this.mkdtempBase(a3, b2);
    };
    a2.prototype.mkdtemp = function(a3, b2, c2) {
      c2 = yd(b2, c2);
      b2 = c2[0].encoding;
      c2 = c2[1];
      if (!a3 || __abx$10a4bb(18) !== typeof a3) throw new TypeError(__abx$10a4bb(572));
      qb2(a3) && this.wrapAsync(this.mkdtempBase, [a3, b2], c2);
    };
    a2.prototype.rmdirBase = function(a3, b2) {
      b2 = aa2({}, Fd, b2);
      var c2 = this.getLinkAsDirOrThrow(a3, __abx$10a4bb(492));
      if (c2.length && !b2.recursive) throw h(__abx$10a4bb(543), __abx$10a4bb(492), a3);
      this.deleteLink(c2);
    };
    a2.prototype.rmdirSync = function(a3, b2) {
      this.rmdirBase(m2(a3), b2);
    };
    a2.prototype.rmdir = function(a3, b2, c2) {
      var d2 = aa2({}, Fd, b2);
      b2 = q(__abx$10a4bb(9) === typeof b2 ? b2 : c2);
      this.wrapAsync(this.rmdirBase, [m2(a3), d2], b2);
    };
    a2.prototype.fchmodBase = function(a3, b2) {
      this.getFileByFdOrThrow(a3, __abx$10a4bb(467)).chmod(b2);
    };
    a2.prototype.fchmodSync = function(a3, b2) {
      this.fchmodBase(a3, M2(b2));
    };
    a2.prototype.fchmod = function(a3, b2, c2) {
      this.wrapAsync(this.fchmodBase, [a3, M2(b2)], c2);
    };
    a2.prototype.chmodBase = function(a3, b2) {
      a3 = this.openSync(a3, __abx$10a4bb(577));
      try {
        this.fchmodBase(a3, b2);
      } finally {
        this.closeSync(a3);
      }
    };
    a2.prototype.chmodSync = function(a3, b2) {
      b2 = M2(b2);
      a3 = m2(a3);
      this.chmodBase(a3, b2);
    };
    a2.prototype.chmod = function(a3, b2, c2) {
      b2 = M2(b2);
      a3 = m2(a3);
      this.wrapAsync(this.chmodBase, [a3, b2], c2);
    };
    a2.prototype.lchmodBase = function(a3, b2) {
      a3 = this.openBase(a3, na2, 0, false);
      try {
        this.fchmodBase(a3, b2);
      } finally {
        this.closeSync(a3);
      }
    };
    a2.prototype.lchmodSync = function(a3, b2) {
      b2 = M2(b2);
      a3 = m2(a3);
      this.lchmodBase(a3, b2);
    };
    a2.prototype.lchmod = function(a3, b2, c2) {
      b2 = M2(b2);
      a3 = m2(a3);
      this.wrapAsync(this.lchmodBase, [a3, b2], c2);
    };
    a2.prototype.fchownBase = function(a3, b2, c2) {
      this.getFileByFdOrThrow(a3, __abx$10a4bb(468)).chown(b2, c2);
    };
    a2.prototype.fchownSync = function(a3, b2, c2) {
      Ha2(b2);
      Ia2(c2);
      this.fchownBase(a3, b2, c2);
    };
    a2.prototype.fchown = function(a3, b2, c2, d2) {
      Ha2(b2);
      Ia2(c2);
      this.wrapAsync(this.fchownBase, [a3, b2, c2], d2);
    };
    a2.prototype.chownBase = function(a3, b2, c2) {
      this.getResolvedLinkOrThrow(a3, __abx$10a4bb(479)).getNode().chown(
        b2,
        c2
      );
    };
    a2.prototype.chownSync = function(a3, b2, c2) {
      Ha2(b2);
      Ia2(c2);
      this.chownBase(m2(a3), b2, c2);
    };
    a2.prototype.chown = function(a3, b2, c2, d2) {
      Ha2(b2);
      Ia2(c2);
      this.wrapAsync(this.chownBase, [m2(a3), b2, c2], d2);
    };
    a2.prototype.lchownBase = function(a3, b2, c2) {
      this.getLinkOrThrow(a3, __abx$10a4bb(482)).getNode().chown(b2, c2);
    };
    a2.prototype.lchownSync = function(a3, b2, c2) {
      Ha2(b2);
      Ia2(c2);
      this.lchownBase(m2(a3), b2, c2);
    };
    a2.prototype.lchown = function(a3, b2, c2, d2) {
      Ha2(b2);
      Ia2(c2);
      this.wrapAsync(this.lchownBase, [m2(a3), b2, c2], d2);
    };
    a2.prototype.watchFile = function(a3, b2, c2) {
      a3 = m2(a3);
      var d2 = b2;
      __abx$10a4bb(9) === typeof d2 && (c2 = b2, d2 = null);
      if (__abx$10a4bb(9) !== typeof c2) throw Error(__abx$10a4bb(602));
      b2 = 5007;
      var e2 = true;
      d2 && __abx$10a4bb(118) === typeof d2 && (__abx$10a4bb(17) === typeof d2.interval && (b2 = d2.interval), __abx$10a4bb(65) === typeof d2.persistent && (e2 = d2.persistent));
      d2 = this.statWatchers[a3];
      d2 || (d2 = new this.StatWatcher(), d2.start(a3, e2, b2), this.statWatchers[a3] = d2);
      d2.addListener(__abx$10a4bb(409), c2);
      return d2;
    };
    a2.prototype.unwatchFile = function(a3, b2) {
      a3 = m2(a3);
      var c2 = this.statWatchers[a3];
      c2 && (__abx$10a4bb(9) === typeof b2 ? c2.removeListener(__abx$10a4bb(409), b2) : c2.removeAllListeners(__abx$10a4bb(409)), 0 === c2.listenerCount(__abx$10a4bb(409)) && (c2.stop(), delete this.statWatchers[a3]));
    };
    a2.prototype.createReadStream = function(a3, b2) {
      return new this.ReadStream(a3, b2);
    };
    a2.prototype.createWriteStream = function(a3, b2) {
      return new this.WriteStream(a3, b2);
    };
    a2.prototype.watch = function(a3, b2, c2) {
      a3 = m2(a3);
      var d2 = b2;
      __abx$10a4bb(9) === typeof b2 && (c2 = b2, d2 = null);
      var e2 = ob2(d2);
      b2 = e2.persistent;
      d2 = e2.recursive;
      e2 = e2.encoding;
      void 0 === b2 && (b2 = true);
      void 0 === d2 && (d2 = false);
      var f2 = new this.FSWatcher();
      f2.start(a3, b2, d2, e2);
      c2 && f2.addListener(__abx$10a4bb(409), c2);
      return f2;
    };
    a2.fd = 2147483647;
    return a2;
  })();
  b.Volume = a;
  var Hd = (function(a2) {
    function b2(b3) {
      var c2 = a2.call(this) || this;
      c2.onInterval = function() {
        try {
          var a3 = c2.vol.statSync(c2.filename);
          c2.hasChanged(a3) && (c2.emit(__abx$10a4bb(409), a3, c2.prev), c2.prev = a3);
        } finally {
          c2.loop();
        }
      };
      c2.vol = b3;
      return c2;
    }
    Ja2(b2, a2);
    b2.prototype.loop = function() {
      this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
    };
    b2.prototype.hasChanged = function(a3) {
      return a3.mtimeMs > this.prev.mtimeMs || a3.nlink !== this.prev.nlink ? true : false;
    };
    b2.prototype.start = function(a3, b3, c2) {
      void 0 === b3 && (b3 = true);
      void 0 === c2 && (c2 = 5007);
      this.filename = m2(a3);
      this.setTimeout = b3 ? setTimeout : hd.default;
      this.interval = c2;
      this.prev = this.vol.statSync(this.filename);
      this.loop();
    };
    b2.prototype.stop = function() {
      clearTimeout(this.timeoutRef);
      L.default.nextTick(ef, this);
    };
    return b2;
  })(O.EventEmitter);
  b.StatWatcher = Hd;
  var N2;
  lc.inherits(T2, Y.Readable);
  b.ReadStream = T2;
  T2.prototype.open = function() {
    var a2 = this;
    this._vol.open(this.path, this.flags, this.mode, function(b2, c2) {
      b2 ? (a2.autoClose && a2.destroy && a2.destroy(), a2.emit(__abx$10a4bb(400), b2)) : (a2.fd = c2, a2.emit(__abx$10a4bb(487), c2), a2.read());
    });
  };
  T2.prototype._read = function(a2) {
    if (__abx$10a4bb(17) !== typeof this.fd) return this.once(__abx$10a4bb(487), function() {
      this._read(a2);
    });
    if (!this.destroyed) {
      if (!N2 || 128 > N2.length - N2.used) N2 = F.bufferAllocUnsafe(this._readableState.highWaterMark), N2.used = 0;
      var b2 = N2, c2 = Math.min(N2.length - N2.used, a2), d2 = N2.used;
      void 0 !== this.pos && (c2 = Math.min(this.end - this.pos + 1, c2));
      if (0 >= c2) return this.push(null);
      var e2 = this;
      this._vol.read(this.fd, N2, N2.used, c2, this.pos, function(a3, c3) {
        a3 ? (e2.autoClose && e2.destroy && e2.destroy(), e2.emit(__abx$10a4bb(400), a3)) : (a3 = null, 0 < c3 && (e2.bytesRead += c3, a3 = b2.slice(
          d2,
          d2 + c3
        )), e2.push(a3));
      });
      void 0 !== this.pos && (this.pos += c2);
      N2.used += c2;
    }
  };
  T2.prototype._destroy = function(a2, b2) {
    this.close(function(c2) {
      b2(a2 || c2);
    });
  };
  T2.prototype.close = function(a2) {
    var b2 = this;
    if (a2) this.once(__abx$10a4bb(433), a2);
    if (this.closed || __abx$10a4bb(17) !== typeof this.fd) {
      if (__abx$10a4bb(17) !== typeof this.fd) {
        this.once(__abx$10a4bb(487), ff);
        return;
      }
      return L.default.nextTick(function() {
        return b2.emit(__abx$10a4bb(433));
      });
    }
    this.closed = true;
    this._vol.close(this.fd, function(a3) {
      a3 ? b2.emit(__abx$10a4bb(400), a3) : b2.emit(__abx$10a4bb(433));
    });
    this.fd = null;
  };
  lc.inherits(R2, Y.Writable);
  b.WriteStream = R2;
  R2.prototype.open = function() {
    this._vol.open(this.path, this.flags, this.mode, (function(a2, b2) {
      a2 ? (this.autoClose && this.destroy && this.destroy(), this.emit(__abx$10a4bb(400), a2)) : (this.fd = b2, this.emit(__abx$10a4bb(487), b2));
    }).bind(this));
  };
  R2.prototype._write = function(a2, b2, c2) {
    if (!(a2 instanceof F.Buffer)) return this.emit(__abx$10a4bb(400), Error(__abx$10a4bb(603)));
    if (__abx$10a4bb(17) !== typeof this.fd) return this.once(__abx$10a4bb(487), function() {
      this._write(a2, b2, c2);
    });
    var d2 = this;
    this._vol.write(this.fd, a2, 0, a2.length, this.pos, function(a3, b3) {
      if (a3) return d2.autoClose && d2.destroy && d2.destroy(), c2(a3);
      d2.bytesWritten += b3;
      c2();
    });
    void 0 !== this.pos && (this.pos += a2.length);
  };
  R2.prototype._writev = function(a2, b2) {
    if (__abx$10a4bb(17) !== typeof this.fd) return this.once(__abx$10a4bb(487), function() {
      this._writev(a2, b2);
    });
    for (var c2 = this, d2 = a2.length, e2 = Array(d2), f2 = 0, g2 = 0; g2 < d2; g2++) {
      var h2 = a2[g2].chunk;
      e2[g2] = h2;
      f2 += h2.length;
    }
    d2 = F.Buffer.concat(e2);
    this._vol.write(this.fd, d2, 0, d2.length, this.pos, function(a3, d3) {
      if (a3) return c2.destroy && c2.destroy(), b2(a3);
      c2.bytesWritten += d3;
      b2();
    });
    void 0 !== this.pos && (this.pos += f2);
  };
  R2.prototype._destroy = T2.prototype._destroy;
  R2.prototype.close = T2.prototype.close;
  R2.prototype.destroySoon = R2.prototype.end;
  var Id = (function(a2) {
    function b2(b3) {
      var c2 = a2.call(this) || this;
      c2._filename = __abx$10a4bb(7);
      c2._filenameEncoded = __abx$10a4bb(7);
      c2._recursive = false;
      c2._encoding = K.ENCODING_UTF8;
      c2._onNodeChange = function() {
        c2._emit(__abx$10a4bb(409));
      };
      c2._onParentChild = function(a3) {
        a3.getName() === c2._getName() && c2._emit(__abx$10a4bb(491));
      };
      c2._emit = function(a3) {
        c2.emit(__abx$10a4bb(409), a3, c2._filenameEncoded);
      };
      c2._persist = function() {
        c2._timer = setTimeout(c2._persist, 1e6);
      };
      c2._vol = b3;
      return c2;
    }
    Ja2(b2, a2);
    b2.prototype._getName = function() {
      return this._steps[this._steps.length - 1];
    };
    b2.prototype.start = function(a3, b3, c2, d2) {
      void 0 === b3 && (b3 = true);
      void 0 === c2 && (c2 = false);
      void 0 === d2 && (d2 = K.ENCODING_UTF8);
      this._filename = m2(a3);
      this._steps = v2(this._filename);
      this._filenameEncoded = K.strToEncoding(this._filename);
      this._recursive = c2;
      this._encoding = d2;
      try {
        this._link = this._vol.getLinkOrThrow(this._filename, __abx$10a4bb(604));
      } catch (Wb2) {
        throw b3 = Error(__abx$10a4bb(605) + this._filename + __abx$10a4bb(94) + Wb2.code), b3.code = Wb2.code, b3.errno = Wb2.code, b3;
      }
      this._link.getNode().on(__abx$10a4bb(409), this._onNodeChange);
      this._link.on(__abx$10a4bb(411), this._onNodeChange);
      this._link.on(__abx$10a4bb(412), this._onNodeChange);
      if (a3 = this._link.parent) a3.setMaxListeners(a3.getMaxListeners() + 1), a3.on(__abx$10a4bb(412), this._onParentChild);
      b3 && this._persist();
    };
    b2.prototype.close = function() {
      clearTimeout(this._timer);
      this._link.getNode().removeListener(__abx$10a4bb(409), this._onNodeChange);
      var a3 = this._link.parent;
      a3 && a3.removeListener(__abx$10a4bb(412), this._onParentChild);
    };
    return b2;
  })(O.EventEmitter);
  b.FSWatcher = Id;
});
t(Xe);
var Ye = Xe.pathToFilename, Ze = Xe.filenameToSteps, $e = Xe.Volume, af = u(function(a, b) {
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  b.fsProps = __abx$10a4bb(606).split(__abx$10a4bb(94));
  b.fsSyncMethods = __abx$10a4bb(607).split(__abx$10a4bb(94));
  b.fsAsyncMethods = __abx$10a4bb(608).split(__abx$10a4bb(94));
});
t(af);
var bf = u(function(a, b) {
  function c(a2) {
    for (var b2 = { F_OK: g, R_OK: h, W_OK: k2, X_OK: p, constants: w.constants, Stats: ka.default, Dirent: Qc.default }, c2 = 0, d2 = e; c2 < d2.length; c2++) {
      var n = d2[c2];
      __abx$10a4bb(9) === typeof a2[n] && (b2[n] = a2[n].bind(a2));
    }
    c2 = 0;
    for (d2 = f; c2 < d2.length; c2++) n = d2[c2], __abx$10a4bb(9) === typeof a2[n] && (b2[n] = a2[n].bind(a2));
    b2.StatWatcher = a2.StatWatcher;
    b2.FSWatcher = a2.FSWatcher;
    b2.WriteStream = a2.WriteStream;
    b2.ReadStream = a2.ReadStream;
    b2.promises = a2.promises;
    b2._toUnixTimestamp = Xe.toUnixTimestamp;
    return b2;
  }
  var d = l && l.__assign || function() {
    d = Object.assign || function(a2) {
      for (var b2, c2 = 1, d2 = arguments.length; c2 < d2; c2++) {
        b2 = arguments[c2];
        for (var e2 in b2) Object.prototype.hasOwnProperty.call(b2, e2) && (a2[e2] = b2[e2]);
      }
      return a2;
    };
    return d.apply(this, arguments);
  };
  Object.defineProperty(b, __abx$10a4bb(164), { value: true });
  var e = af.fsSyncMethods, f = af.fsAsyncMethods, g = w.constants.F_OK, h = w.constants.R_OK, k2 = w.constants.W_OK, p = w.constants.X_OK;
  b.Volume = Xe.Volume;
  b.vol = new Xe.Volume();
  b.createFsFromVolume = c;
  b.fs = c(b.vol);
  a.exports = d(d({}, a.exports), b.fs);
  a.exports.semantic = true;
});
t(bf);
var rf = bf.createFsFromVolume;
gd.prototype.emit = function(a) {
  for (var b, c, d = [], e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
  e = this.listeners(a);
  try {
    for (var f = da(e), g = f.next(); !g.done; g = f.next()) {
      var h = g.value;
      try {
        h.apply(void 0, ia(d));
      } catch (k2) {
        console.error(k2);
      }
    }
  } catch (k2) {
    b = { error: k2 };
  } finally {
    try {
      g && !g.done && (c = f.return) && c.call(f);
    } finally {
      if (b) throw b.error;
    }
  }
  return 0 < e.length;
};
var sf = (function() {
  function a() {
    this.volume = new $e();
    this.fs = rf(this.volume);
    this.fromJSON({ [__abx$10a4bb(609)]: __abx$10a4bb(7), [__abx$10a4bb(610)]: __abx$10a4bb(7), [__abx$10a4bb(611)]: __abx$10a4bb(7) });
  }
  a.prototype._toJSON = function(a2, c, d) {
    void 0 === c && (c = {});
    var b = true, f;
    for (f in a2.children) {
      b = false;
      var g = a2.getChild(f);
      if (g) {
        var h = g.getNode();
        h && h.isFile() ? (g = g.getPath(), d && (g = Yc(d, g)), c[g] = h.getBuffer()) : h && h.isDirectory() && this._toJSON(g, c, d);
      }
    }
    a2 = a2.getPath();
    d && (a2 = Yc(d, a2));
    a2 && b && (c[a2] = null);
    return c;
  };
  a.prototype.toJSON = function(a2, c, d) {
    var b, f;
    void 0 === c && (c = {});
    void 0 === d && (d = false);
    var g = [];
    if (a2) {
      a2 instanceof Array || (a2 = [a2]);
      try {
        for (var h = da(a2), k2 = h.next(); !k2.done; k2 = h.next()) {
          var p = Ye(k2.value), n = this.volume.getResolvedLink(p);
          n && g.push(n);
        }
      } catch (xa2) {
        var q = { error: xa2 };
      } finally {
        try {
          k2 && !k2.done && (b = h.return) && b.call(h);
        } finally {
          if (q) throw q.error;
        }
      }
    } else g.push(this.volume.root);
    if (!g.length) return c;
    try {
      for (var B = da(g), m2 = B.next(); !m2.done; m2 = B.next()) n = m2.value, this._toJSON(n, c, d ? n.getPath() : __abx$10a4bb(7));
    } catch (xa2) {
      var v2 = { error: xa2 };
    } finally {
      try {
        m2 && !m2.done && (f = B.return) && f.call(B);
      } finally {
        if (v2) throw v2.error;
      }
    }
    return c;
  };
  a.prototype.fromJSONFixed = function(a2, c) {
    for (var b in c) {
      var e = c[b];
      if (e ? null !== Object.getPrototypeOf(e) : null !== e) {
        var f = Ze(b);
        1 < f.length && (f = __abx$10a4bb(71) + f.slice(0, f.length - 1).join(__abx$10a4bb(71)), a2.mkdirpBase(f, 511));
        a2.writeFileSync(b, e || __abx$10a4bb(7));
      } else a2.mkdirpBase(b, 511);
    }
  };
  a.prototype.fromJSON = function(a2) {
    this.volume = new $e();
    this.fromJSONFixed(this.volume, a2);
    this.fs = rf(this.volume);
    this.volume.releasedFds = [0, 1, 2];
    a2 = this.volume.openSync(__abx$10a4bb(611), __abx$10a4bb(561));
    var b = this.volume.openSync(__abx$10a4bb(610), __abx$10a4bb(561)), d = this.volume.openSync(
      __abx$10a4bb(609),
      __abx$10a4bb(557)
    );
    if (2 !== a2) throw Error(__abx$10a4bb(612) + a2);
    if (1 !== b) throw Error(__abx$10a4bb(613) + b);
    if (0 !== d) throw Error(__abx$10a4bb(614) + d);
  };
  a.prototype.getStdOut = function() {
    return ba(this, void 0, void 0, function() {
      var a2, c = this;
      return ca(this, function() {
        a2 = new Promise(function(a3) {
          a3(c.fs.readFileSync(__abx$10a4bb(610), __abx$10a4bb(23)));
        });
        return [2, a2];
      });
    });
  };
  return a;
})();
const SERIAL_RES_SIZE = 1024 * 1024 * 4;
const decoder = new TextDecoder(__abx$10a4bb(23));
let decodeBuffer = new Uint8Array(64 * 1024);
const ensureDecodeCapacity = (needed) => {
  if (needed <= decodeBuffer.length) return;
  let next = decodeBuffer.length;
  while (next < needed) next *= 2;
  if (next > SERIAL_RES_SIZE) next = SERIAL_RES_SIZE;
  decodeBuffer = new Uint8Array(next);
};
let lengthTyped;
let valueTyped;
let js;
let pid;
let wasmUrl;
let args;
let preCompiledModule;
const ready = new Promise((resolve) => {
  self.addEventListener(__abx$10a4bb(187), (e) => {
    const d = e.data;
    if (!lengthTyped && d.lengthBuffer && d.valueBuffer && d.args) {
      lengthTyped = new Int32Array(d.lengthBuffer);
      valueTyped = new Uint8Array(d.valueBuffer);
      js = d.js;
      pid = d.pid;
      wasmUrl = d.wasmUrl;
      args = d.args;
      preCompiledModule = d.wasmModule;
      resolve();
    }
  });
});
const start = async () => {
  await ready;
  if (!lengthTyped || !valueTyped || js === void 0 || !args)
    throw new Error(__abx$10a4bb(615));
  if (!preCompiledModule && !wasmUrl)
    throw new Error(__abx$10a4bb(616));
  const wasmModule = preCompiledModule ?? await WebAssembly.compileStreaming(fetch(wasmUrl));
  const wasmFs = new sf();
  const randomFillSync = (buffer2, offset = 0, size) => {
    const view = buffer2;
    const u8 = new Uint8Array(view.buffer, view.byteOffset + offset, size ?? view.byteLength - offset);
    crypto.getRandomValues(u8);
    return buffer2;
  };
  const wasi = new dc$1({
    args,
    preopens: { [__abx$10a4bb(71)]: __abx$10a4bb(71) },
    env: {},
    bindings: { ...browserBindings, randomFillSync, fs: wasmFs.fs }
  });
  const instance = await WebAssembly.instantiate(wasmModule, wasi.getImports(wasmModule));
  const pidPrefix = pid === void 0 ? __abx$10a4bb(7) : (__abx$10a4bb(617)+String(pid)+__abx$10a4bb(618));
  wasmFs.fs.writeFileSync(__abx$10a4bb(619), pidPrefix + js);
  const fds = wasmFs.volume.fds;
  if (fds[1]) fds[1].position = 0;
  if (fds[2]) fds[2].position = 0;
  wasmFs.fs.writeFileSync(__abx$10a4bb(620), __abx$10a4bb(7));
  wasmFs.fs.writeFileSync(__abx$10a4bb(609), __abx$10a4bb(7));
  wasmFs.fs.writeFileSync(__abx$10a4bb(610), __abx$10a4bb(7));
  wasmFs.fs.writeFileSync(__abx$10a4bb(611), __abx$10a4bb(7));
  let lastStdout = __abx$10a4bb(7);
  wasmFs.fs.watch(__abx$10a4bb(610), {}, () => {
    const stdout = wasmFs.fs.readFileSync(__abx$10a4bb(610), __abx$10a4bb(23));
    const newStdout = stdout.slice(lastStdout.length);
    lastStdout = stdout;
    if (!newStdout) return;
    for (const line of newStdout.split(__abx$10a4bb(206))) {
      if (!line) continue;
      let msg;
      try {
        msg = JSON.parse(line);
      } catch {
        console.warn(line);
        continue;
      }
      Atomics.store(lengthTyped, 0, 0);
      self.postMessage(msg);
      Atomics.wait(lengthTyped, 0, 0, Infinity);
      const length = Atomics.load(lengthTyped, 0);
      ensureDecodeCapacity(length + 1);
      decodeBuffer.set(valueTyped.subarray(0, length));
      const isEvalRaw = length >= 3 && decodeBuffer[0] === 74 && decodeBuffer[1] === 83 && decodeBuffer[2] === 124;
      if (isEvalRaw) {
        decodeBuffer[length] = 10;
        wasmFs.fs.writeFileSync(__abx$10a4bb(620), decodeBuffer.subarray(0, length + 1));
      } else {
        const replyRaw = decoder.decode(decodeBuffer.subarray(0, length));
        let reply = replyRaw;
        if (reply.startsWith(__abx$10a4bb(621))) reply = __abx$10a4bb(622) + JSON.parse(replyRaw).js;
        wasmFs.fs.writeFileSync(__abx$10a4bb(620), reply + __abx$10a4bb(206));
      }
      wasmFs.fs.appendFileSync(__abx$10a4bb(609), __abx$10a4bb(623));
    }
  });
  try {
    wasi.start(instance);
  } catch (e) {
    console.error(e);
  }
};
void start();
//# sourceMappingURL=a0.js.map
