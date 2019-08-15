
/*----------------------------------------------------------------------------
 CHIM - CHuoi's Input Method
----------------------------------------------------------------------------
 copyright         : (C) 2005, 2006, 2007 by Dao Hai Lam
 http:/xvnkb.sf.net/chim
 email             : daohailam<at>yahoo<dot>com
 last modify       : Thu, 05 Jul 2007 23:07:22 +0700
 version           : 0.9.3
----------------------------------------------------------------------------
 Mudim - Mudzot's Input Method
 (c)2008 by Mudzot
 http:/code.google.com/p/mudim
 email: mudzot<at>gmail.com
 version: 0.8
 date: 29.05.08
----------------------------------------------------------------------------
 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.
-------------------------------------------------------------------------------
 Packed with Dean Edwards' Packer ported to Python by Florian Schulze
----------------------------------------------------------------------------*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c]);return p}('J(2K(aK)==\'2J\'){}D=P(){L 4G};F=P(){L 4G};F.3F=[\'1d-15\',\'1d-6Z\',\'1d-6Y\',\'1d-6X\',\'1d-6W\',\'1d-6V\'];F.6f=\'1d-6U\';F.6e=\'1d-6T\';D.54=\'A\';D.55=\'a\';D.7a=\'E\';D.7b=\'e\';D.59=\'U\';D.5a=\'u\';D.57=\'G\';D.58=\'g\';D.1O=\'Q\';D.1P=\'q\';D.7c=\'y\';D.7d=\'Y\';D.aJ=\'i\';D.aI=\'I\';D.3S=5Y.5X(aH);D.2f="8Q";D.1T=" !@#$%^&*()8P+=-{}[]|\\\\:\\";\'<>?,./~`\\r\\n\\t";D.15=0;D.1g=[];D.1S=V;D.3R=P(u){K n,2E=D.2E;u=u.1k(0);1l(n=0;2E[n]!=0&&2E[n]!=u;n++){}L 2E[n]!=0?n:-1};D.56=P(u){K n,O=D.O;u=u.1k(0);1l(n=0;O[n]!=0&&O[n]!=u;n++){}L O[n]!=0?n:-1};D.7e=P(8S,8R){K 1H=D.1H;K n,i=-1,j=-1,u;1l(n=0,u=8S.1k(0);1H[n]!=0&&1H[n]!=u;n++){}J(1H[n]!=0){i=n}1l(n=0,u=8R.1k(0);1H[n]!=0&&1H[n]!=u;n++){}J(1H[n]){j=n}L i-j};D.2Q=P(n,c){D.1g[n]=5Y.5X(c)};D.W=P(){L 4G};D.W.20=Z;D.W.1s=0;D.W.1f=0;D.W.2f=[];D.W.6l=[];D.W.1Z=P(){D.W.20=!D.W.20;F.1X()};D.W.4K=P(1s,11){D.W.2f[D.W.1f]=D.W.1s;D.W.6l[D.W.1f++]=11;D.W.1s=1s};D.W.6g=P(){D.W.1s=-1;D.W.1f=0};D.W.8L=P(){L D.W.6l[D.W.1f-1]};F.6i="aG";F.8N="8Q|aF|\'`~?.^*+=";F.8K="|aE|aD|aC|aB|aA|az|ax|aw|ai|av|at|au|as|ar|aq|ap|ao|an|ay|am|al|ak|";F.8M="aj";F.1T="!@#$%^&*()8P+=-{}[]|\\\\:\\";\'<>?,./~`";F.8O=\'|c|ah|p|t|m|n|4M|6o|\';F.2L=P(11,3H){K b=D.1g;K 14=b.X;K n=11.1Q();J(D.W.20&&!F.3L){J(3H>0&&D.15==0){J(F.1V.X>0){K 6k=F.8O.1i(\'|\'+F.1V+\'|\');J(6k<0){D.15=14;F.1V=\'\';L Z}S J(6k<9&&3H==2){K 4L=F.1w(n,2);J(4L!=0&&4L!=1&&4L!=5){D.15=14;F.1V=\'\';L Z}}}J(14==2&&(b[1]==D.5a||b[1]==D.59)&&(b[0]==D.1P||b[0]==D.1O)&&(3H==2||(3H==1&&F.1w(n,1)==1))){D.15=14;L D.1U(14,c,11)}}S J(!D.15){K 1J=F.8N.1i(11);J(14>0){K 1n=b[14-1].1Q()}J(14==0){J(F.8M.1i(11)>=0){D.15=-1}S J(1J>=0&&1J<12){D.W.4K(0,11)}S J(1J==12||1J>37){L}S{D.W.6g()}}S J(1J==12||1J>37){D.1I();L}S J(1J>12){D.15=14}S J(1J>=0){K i=0;1q(F.6i.1i(b[i])>=0){i++}J(i>0){F.1L=b.7f(0,i).2R().1Y(/,/g,\'\').1Q()}J(D.W.1s<0){J(F.1L==\'q\'){J(14==1&&n!=\'u\'){D.15=14}S J(b[1]==\'u\'&&n==\'u\'){D.15=14}}S J(1n==\'p\'&&n!=\'h\'){D.15=14}S J(1n==\'k\'&&n!=\'i\'&&n!=\'e\'&&n!=\'y\'){D.15=14}S J(F.1L==\'ag\'&&n!=\'i\'&&n!=\'e\'){D.15=14}S{D.W.4K(14,11);J(n==\'y\'){J(\'af\'.1i(1n)<0){D.15=14}}S J(n==\'e\'||n==\'i\'){J(14>1&&(1n==\'g\')){D.15=14}J(1n==\'c\'){D.15=1}}}}S J(14-D.W.1s>1){D.15=14}S{K w="|"+D.W.8L().1Q()+11.1Q()+"|";K 6j=F.8K.1i(w);J(6j<0){D.15=14}S J(6j<18&&(F.1L==\'c\'||F.1L==\'C\')){D.15=14}S J(1n==\'y\'&&F.1L==\'\'&&n!=\'e\'){D.15=14}S{D.W.4K(14,11)}}}S{2e(11){19\'h\':19\'H\':J(1n>=D.3S||"ae".1i(1n)<0){D.15=14}1e;19\'g\':19\'G\':J(1n!=\'n\'&&1n!=\'N\'){D.15=14}1e;19\'r\':19\'R\':J(1n!=\'t\'&&1n!=\'T\'){D.15=14}1e;7g:J(F.6i.1i(1n)>=0){D.15=14}1e}}}J(D.15!=0){L Z}}L V};D.1U=P(1f,ad,11){J(F.1T.1i(11)>=0){D.1I();L}F.ac=\'ab\';D.1g.8J(11);L F.51(D.1v[F.1c-1][2].1F(0))};D.8k=P(11){K p=-1;K i,j=-1;K b,c=0,aa,l;K 1f=D.1g.X;K m=D.1v[F.1c-1],n;K v=1m;K 1B=V;J(!1f||D.15!=0||F.3M){J(F.2L(11,l)){L D.1U(1f,c,11)}L D.1U(0,0,11)}b=D.1g;c=b[p=1f-1];n=11.1Q();1l(l=1;l<m.X;l++)J(m[l].1i(n)>=0){1e}J(l>=m.X){F.2L(11,0);L D.1U(1f,c,11)}J(F.1c==5){F.1c=F.75(n);1B=Z}J((p=F.50(n))<0){J(1B){F.1c=5;1B=V}F.2L(11,0);L D.1U(1f,c,11)}F.a9=\'a8\';J(F.2L(11,l)){J(1B){F.1c=5;1B=V}L D.1U(1f,c,11)}c=b[p];K x=c.1k(0);K 3G=V;J(l==1){m=m[0];1l(i=0;!3G&&i<m.X;i++){K k=m[i];J(k[0]==n){1l(i=1;i<k.X;i++){v=D.7G[k[i]];F.51(n);x=b[p].1k(0);J(F.1w(n,1)==3){p=0;c=b[p];x=c.1k(0)}J(F.1E(p,x,1,v,n,Z)){J(p>0&&F.1w(n,1)==1&&p<1f-1&&D.56(b[p])>=0&&D.3R(b[p-1])>=0&&b[0]!=D.1P&&b[0]!=D.1O){F.1E(p-1,b[p-1].1k(0),1,D.1G,n,V)}3G=Z;1e}}1e}}}S{1l(i=0;i<D.2P.X;i++){v=D.2P[i];J(F.1E(p,x,2,v,n,Z)){3G=Z;1e}}}J(!3G){F.2L(11,0);J(1B){F.1c=5}1B=V;L D.1U(1f,c,11)}S{J(1B){D.2d()}1B=V}J(D.15!=0){D.1g.8J(11)}L p>=0};D.8D=P(){K 1f=D.1g.X;J(1f<=0){D.1S=Z}S{J(F.2M[0]==1f-1)F.3Q();K i=D.22.X-1;K 6h=D.1g[1f-1].1k(0);1q(i>=0&&D.22[i]!=6h){i--}J(i<0){i=D.1G.X-1;1q(i>=0&&D.1G[i]!=6h){i--}}J(i>=0&&(i%2)==1){F.w--}--1f;D.1g.a7();J(1f==D.W.1s){D.W.1s=D.W.2f[--D.W.1f]}J((D.15<0&&!1f)||(1f<=D.15)){D.15=0}}};D.1I=P(){D.15=0;F.w=0;D.W.6g();F.3Q();F.1V=\'\';F.1L=\'\';F.2a=0;F.29=0;J(D.1g.X>0){F.3M=V;F.3L=V}D.1g=[]};D.2d=P(){J(2K(F.3F)!="2J"&&F.1c<F.3F.X){K r;1l(K i=0;i<5;i++){r=1j.4J(F.3F[i]);J(r){r.4I=V}}r=1j.4J(F.3F[F.1c]);J(r){r.4I=Z}}J(2K(F.6f)!="2J"){K r=1j.4J(F.6f);J(r){r.4I=D.W.20}}J(2K(F.6e)!="2J"){K r=1j.4J(F.6e);J(r){r.4I=F.1D}}};D.4U=P(){D.1I();F.1c=(++F.1c%6);D.2d();F.1X()};D.1t=P(m){D.1I();F.1c=m;D.2d();F.1X()};D.1Z=P(){K p;J(!(p=F.1M)){F.4S()}J(F.1c==0){D.1t(F.4P)}S{F.4P=F.1c;D.1t(0)}F.1X()};D.5R=P(e){K r;J(e==1m){e=1x.4A}J(e==1m){L 1m}J(e.8I!=1m){r=e.8I}S{r=e.M;1q(r&&r.a6!=1)r=r.4F}J(r.2h==\'a5\'){r=r.4F}D.5Q=r.2h==\'5b\'||r.1A==\'a4\'||r.1A==\'1z\';L r};D.2T=P(M){J(M==1m||M.1a==1m||M.1a.X==0){L-1}J(2K(M.3E)!=\'2J\'){J(M.3E<0||M.3E>M.X||M.6d<0||M.6d>M.X||M.6d<M.3E){L-1}L M.3E}J(1j.1y){K 1y=1j.1y.67();K 27=M.6a();J(27==1m||1y==1m||((1y.1z!="")&&27.a3(1y)==V)){L-1}J(1y.1z==""){K 1p=1;J(M.2h=="a2"){K 6c=27.1z;1q(1p<6c.X){27.a1(6c.2S(1p));J(27.8H==1y.8H){1e}1p++}}S J(M.2h=="a0"){K 6b=1j.1y.67().9Z();1p=M.1a.X+1;1q(6b.9Y()==M&&6b.9X("26",1)==1){--1p;J(M.1a.1k(1p)==10){1p-=1}}J(1p==M.1a.X+1){1p=-1}}L 1p}L 27.1z.1i(1y.1z)}};D.7j=P(M,p){J(p<0){L}J(M.8G){M.8G(p,p)}S J(M.6a){K 1h=M.6a();1h.9W(Z);K i;K 4H=0;1l(i=0;i<p;i++){J((M.1a.1k(i)==10)||(M.1a.1k(i)==13)){J(4H==0){--p;4H=1}}S{4H=0}}1h.4D(\'26\',p);1h.8q(\'26\',0);1h.9V()}};D.8l=P(M){D.1I();J(M.2h!=\'5b\'){K 1T=D.1T;K c=D.2T(M)-1;J(c>0){1q(c>=0&&1T.1i(M.1a.1F(c))<0){D.1g.9U(M.1a.1F(c));c=c-1}}F.28=c+1}S{D.1g=D.1R.8s(M).4Z(\'\')}D.1S=V};D.8F=9;D.61=8;D.5W=13;D.8C=46;D.5V=32;D.8m=9T;D.60=37;D.5Z=39;D.8B=36;D.8A=35;D.8z=33;D.8y=34;D.8x=38;D.8w=40;D.8u=9S;D.8t=5n;D.8v=9R;D.5S=17;D.5U=16;D.9Q=18;D.5O=P(1b,8E){2e(1b){19 D.8F:19 D.5W:D.1I();1e;19 D.61:J(!8E){D.8D()}1e;19 D.8C:19 D.60:19 D.5Z:19 D.8B:19 D.8A:19 D.8z:19 D.8y:19 D.8x:19 D.8w:D.1S=Z;1e}};D.8h=P(e,k){J(k==D.8v){F.4Y();L Z}S J(k==D.8u||k==D.8t){D.1Z();L Z}L V};D.1R=P(){L 4G};D.1R.63=P(M){J(!M.4F.3C){L}K 66=M.4F.3C.5N;L(!1x.2H&&1j.2G)?66.1j.1y.67():66.8r().9P(0)};D.1R.8s=P(M){K 1h=D.1R.63(M);J(!1h){L\'\'}J(!1x.2H&&1j.2G){1q(1h.4D(\'26\',-1)==-1){J(D.1T.1i(1h.1z.1F(0))>=0){1h.4D(\'26\',1);1e}}L 1h.1z}K 4E=\'\';K s;J(!(s=1h.8p.4C)){L\'\'}K c=1h.8o-1;J(c>0){1q(c>=0&&D.1T.1i(s.1F(c))<0&&s.1k(c)!=9O){4E=s.1F(c)+4E;c=c-1}}L 4E};D.1R.7l=P(M,l){K 62=1x.8r();K 1h=D.1R.63(M);J(2K(1h)==\'2J\'){L}K b=D.1g;J(!1x.2H&&1j.2G){K x=-l;1h.4D(\'26\',x);1h.8q(\'26\',x+b.X);1h.9N(b.2R().1Y(/,/g,\'\'));L}K 2I=1h.8p;K 3D=1h.8o;K 2g=3D-l;2I.4C=2I.4C.2S(0,2g)+b.2R().1Y(/,/g,\'\')+2I.4C.2S(2g+l);J(l<b.X){3D++}1h.9M(2I,3D);1h.9L(2I,3D);62.9K();62.9J(1h)};D.5P=P(M){K 4B=F.6n;J(4B.X>0){1l(K i=0;i<4B.X;i++){J(M.1u==4B[i]){L Z}}}L V};D.4u=P(e){J(e==1m){e=1x.4A}J(e.8n==Z){L}e.8n=Z;K 1b=e.1b;J(1b==0){1b=e.4z}J(1b==0){1b=e.8e}J(F.1c==0){L}K M=1m;J(!(M=D.5R(e))||!D.5Q||D.5P(M)){L}J(e.8g||e.8f||e.5T){J(1b==D.61||1b==D.60||1b==D.5Z){D.1S=Z}L}J(e.4z==1m||e.4z!=0){K 11=5Y.5X(1b);J(1b==D.5V||1b==D.5W){D.1I()}S J(1b>D.5V&&1b<D.8m){J(D.1S){D.8l(M)}K l=D.1g.X;J(l==0){F.28=D.2T(M)}J(F.3K){D.1I();F.28=D.2T(M);F.3K=V}J(D.8k(11)){J(e.8j){e.8j()}J(e.8i){e.8i()}e.9I=Z;e.9H=V;F.7m(M,l)}}S{D.1S=Z}}S{D.5O(1b,Z)}};D.4v=P(e){J(e==1m){e=1x.4A}J(e.1b==D.5U){J(F.29==1){F.3M=Z;F.29=0}}J(e.1b==D.5S){J(F.2a==1){F.3L=Z;F.2a=0;F.3K=Z}}};D.4w=P(e){K M=1m;J(e==1m){e=1x.4A}J(D.8h(e,e.1b)){L}J(e.9G||e.9F){L}J(e.9E||e.9D||e.5T){F.29|=1;J(e.1b!=D.5U){F.29|=2}L}J(e.8g||e.8f||e.5T){F.2a|=1;J(e.1b!=D.5S){F.2a|=2}L}J(!(M=D.5R(e))||!D.5Q||D.5P(M)){L}K 1b=e.1b;J(1b==0){1b=e.4z}J(1b==0){1b=e.8e}D.5O(1b,V)};D.4t=P(e){D.4R();D.1S=Z};D.4s=P(e,r){J(!e){L}J(!e.88){J(!r){J(!1x.2H&&1j.2G){e.4y(\'8d\',D.4w);e.4y(\'8c\',D.4v);e.4y(\'8b\',D.4u);e.4y(\'8a\',D.4t)}S{e.4x(\'9C\',D.4w,V);e.4x(\'9B\',D.4v,V);e.4x(\'9A\',D.4u,V);e.4x(\'9z\',D.4t,V)}}S{e.8d=D.4w;e.8c=D.4v;e.8b=D.4u;e.8a=D.4t}e.88=Z}K f=e.87(\'3C\');1l(K i=0;i<f.X;i++){K 2F=(!1x.2H&&1j.2G)?f[i].5N.1j:f[i].86;5M{2F.3C=f[i];D.4s(2F,V)}5L(e){}}K f=e.87(\'9y\');1l(K i=0;i<f.X;i++){K 2F=(!1x.2H&&1j.2G)?f[i].5N.1j:f[i].86;5M{2F.3C=f[i];D.4s(2F,V)}5L(e){}}};D.4R=P(){5M{D.4s(1j,Z);D.2d()}5L(9x){}};D.84=[65,4q,4o,4m,4k,4i];D.83=[97,4r,4p,4n,4l,4j];D.82=[3A,3y,3w,3u,3s,3q];D.81=[3B,3z,3x,3v,3t,3r];D.80=[3o,3m,3k,3i,3g,3e];D.7Z=[3p,3n,3l,3j,3h,3f];D.7Y=[79,3b,31,2Z,2X,2V];D.7X=[3d,3c,3a,30,2Y,2W];D.7W=[2C,2A,2U,2x,2v,2t];D.7V=[2D,2B,2z,2y,2w,2u];D.7U=[2r,2p,25,2m,2k,2i];D.7T=[2s,2q,2o,2n,2l,2j];D.7S=[85,4f,4d,4b,49,47];D.7R=[4h,4g,4e,4c,4a,48];D.7Q=[44,42,3Z,3X,3V,3T];D.7P=[45,43,41,3Y,3W,3U];D.7O=[69,5I,5G,5E,5C,5A];D.7N=[5K,5J,5H,5F,5D,5B];D.7M=[5y,5w,5u,5s,5q,5o];D.7L=[5z,5x,5v,5t,5r,5p];D.7K=[73,5k,5i,5g,5e,5c];D.7J=[5m,5l,5j,5h,5f,5d];D.7I=[89,7x,7v,7t,7r,7p];D.7H=[5n,7y,7w,7u,7s,7q];D.2P=[D.84,D.83,D.82,D.81,D.80,D.7Z,D.7Y,D.7X,D.7W,D.7V,D.7U,D.7T,D.7S,D.7R,D.7Q,D.7P,D.7O,D.7N,D.7M,D.7L,D.7K,D.7J,D.7I,D.7H];D.7F=[65,3A,4q,3y,4o,3w,4m,3u,4k,3s,4i,3q,3o,3A,3m,3y,3k,3w,3i,3u,3g,3s,3e,3q,97,3B,4r,3z,4p,3x,4n,3v,4l,3t,4j,3r,3p,3B,3n,3z,3l,3x,3j,3v,3h,3t,3f,3r];D.7C=[65,3o,4q,3m,4o,3k,4m,3i,4k,3g,4i,3e,3A,3o,3y,3m,3w,3k,3u,3i,3s,3g,3q,3e,97,3p,4r,3n,4p,3l,4n,3j,4l,3h,4j,3f,3B,3p,3z,3n,3x,3l,3v,3j,3t,3h,3r,3f];D.7D=[79,2C,3b,2A,31,2U,2Z,2x,2X,2v,2V,2t,2r,2C,2p,2A,25,25,2m,2x,2k,2v,2i,2t,3d,2D,3c,2B,3a,2z,30,2y,2Y,2w,2W,2u,2s,2D,2q,2B,2o,2z,2n,2y,2l,2w,2j,2u];D.22=[79,2r,3b,2p,31,25,2Z,2m,2X,2k,2V,2i,2C,2r,2A,2p,2U,25,2x,2m,2v,2k,2t,2i,3d,2s,3c,2q,3a,2o,30,2n,2Y,2l,2W,2j,2D,2s,2B,2q,2z,2o,2y,2n,2w,2l,2u,2j];D.1G=[85,44,4f,42,4d,3Z,4b,3X,49,3V,47,3T,4h,45,4g,43,4e,41,4c,3Y,4a,3W,48,3U];D.7E=[69,5y,5I,5w,5G,5u,5E,5s,5C,5q,5A,5o,5K,5z,5J,5x,5H,5v,5F,5t,5D,5r,5B,5p];D.7B=[68,7n,3I,7o];D.7G=[D.7F,D.7E,D.7D,D.7C,D.22,D.1G,D.7B];D.1v=[[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6]],\'9w\',\'9v\'],[[[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6]],\'9u\',\'9t\'],[[[\'^\',0,1,2],[\'+\',4,5],[\'(\',3],[\'d\',6]],\'^+(d\',"=\'`?~."],[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6],[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6]],\'7A\',"7z"],[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6],[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6],[\'^\',0,1,2],[\'+\',4,5],[\'(\',3],[\'d\',6]],\'7A^+(d\',"7z=\'`?~."]];D.2E=[85,4f,4d,4b,49,47,4h,4g,4e,4c,4a,48,44,42,3Z,3X,3V,3T,45,43,41,3Y,3W,3U,73,5k,5i,5g,5e,5c,5m,5l,5j,5h,5f,5d,0];D.O=[79,3b,31,2Z,2X,2V,3d,3c,3a,30,2Y,2W,2C,2A,2U,2x,2v,2t,2D,2B,2z,2y,2w,2u,2r,2p,25,2m,2k,2i,2s,2q,2o,2n,2l,2j,0];D.1H=[97,65,4r,4q,4p,4o,4n,4m,4l,4k,4j,4i,3B,3A,3z,3y,3x,3w,3v,3u,3t,3s,3r,3q,3p,3o,3n,3m,3l,3k,3j,3i,3h,3g,3f,3e,5K,69,5J,5I,5H,5G,5F,5E,5D,5C,5B,5A,5z,5y,5x,5w,5v,5u,5t,5s,5r,5q,5p,5o,3d,79,3c,3b,3a,31,30,2Z,2Y,2X,2W,2V,2D,2C,2B,2A,2z,2U,2y,2x,2w,2v,2u,2t,2s,2r,2q,2p,2o,25,2n,2m,2l,2k,2j,2i,5n,89,7y,7x,7w,7v,7u,7t,7s,7r,7q,7p,4h,85,4g,4f,4e,4d,4c,4b,4a,49,48,47,45,44,43,42,41,3Z,3Y,3X,3W,3V,3U,3T,5m,73,5l,5k,5j,5i,5h,5g,5f,5e,5d,5c,7o,7n,0];F.7m=P(M,l){K b=D.1g;J(M.2h==\'5b\'){D.1R.7l(M,l);J(l<D.1g.X){L}L V}K 2g=F.28<0?0:F.28;K 7k=D.2T(M);K t=M.7i;M.1a=M.1a.2S(0,2g)+b.2R().1Y(/,/g,\'\')+M.1a.2S(7k);D.7j(M,2g+b.X);M.7i=t};F.50=P(7h){K k=7h.1Q();K m=D.1v[F.1c-1];K b=D.1g;K 14=b.X;K i,j,l,p,c;J(!14||D.15!=0){L-1}1l(i=1;i<m.X;i++)J(m[i].1i(k)>=0){1e}p=14-1;F.9s=\'9r\';2e(l=i){19 1:J(F.1w(k,1)==3){1e}19 2:7g:i=p;1q(i>=0&&b[i]<D.3S&&D.2f.1i(b[i])<0)i--;J(i<0){L-1}J(i<14-1){F.1V=b.7f(i+1,14).2R().1Y(/,/g,\'\').1Q()}1q(i-1>=0&&(D.2f.1i(b[i-1])>=0||b[i-1]>D.3S)&&D.7e(b[i-1],b[i])<0)i--;J(i==14-1&&i-1>=0&&(j=D.3R(b[i-1]))>0){2e(b[i]){19 D.55:19 D.54:J((i-2<0||(j<24&&b[i-2]!=D.1P&&b[i-2]!=D.1O)||(j>=24&&b[i-2]!=D.58&&b[i-2]!=D.57))&&(l==2||(l==1&&F.1w(k,1)==1)))i--;1e;19 D.5a:19 D.59:J(i-2<0||(b[i-2]!=D.58&&b[i-2]!=D.57))i--;1e;19 D.7d:19 D.7c:J((!F.1D)&&i-2>=0&&b[i-2]!=D.1P&&b[i-2]!=D.1O){i--}1e}}J(i==14-1&&i-1>=0&&D.56(b[i-1])>0){2e(b[i]){19 D.55:19 D.54:J(!F.1D&&(l==2||(l==1&&F.1w(k,1)!=1)))i--;1e;19 D.7b:19 D.7a:J(!F.1D)i--;1e}}J(i==14-2&&i-1>=0){K 53=D.3R(b[i]);J(53>=0&&53<24&(b[i-1]==D.1P||b[i-1]==D.1O)){i++}}p=i;1e};J(F.1w(k,1)==3&&b[0]==\'d\'){L 0}L p};F.1E=P(23,77,2O,78,11,52){K v=78;K i;1l(i=0;i<v.X;i++){J(v[i]==77){2e(2O){19 1:J(F.1w(11,1)==1){F.w++}J(i%2==0){D.2Q(23,v[i+1])}S{D.2Q(23,v[i-1]);J(52){D.15=D.1g.X+1}}1e;19 2:K j=F.1w(11,2);J(j>=0){J(j!=i){D.2Q(23,v[j]);F.2M=[23,(D.1g[23]).1k(0),v,11]}S{D.2Q(23,v[0]);F.3Q();J(52){D.15=D.1g.X+1}}}1e}L Z}}L V};F.3Q=P(){F.2M=[-1,0,1m,\'z\']};F.51=P(76){J(D.15!=0){L V}K p=F.50(76);K a=F.2M;K b=D.1g;K v,i,j,c;J(p<0){L V}i=D.22.X-1;c=b[p].1k(0);1q(i>=0&&D.22[i]!=c){i--}j=D.1G.X-1;J(p>0){c=b[p-1].1k(0);1q(j>=0&&D.1G[j]!=c){j--}}S{j=-1}J(p<b.X-1&&p>0&&i>=0&&j>=0){J(F.w==1){J(i%2==0){F.1E(p,b[p].1k(0),1,D.22,D.1v[F.1c-1][1].1F(1),V);J(b[0]==D.1P||b[0]==D.1O){F.1E(p-1,b[p-1].1k(0),1,D.1G,D.1v[F.1c-1][1].1F(1),V)}}S{J(b[0]!=D.1P&&b[0]!=D.1O){F.1E(p-1,b[p-1].1k(0),1,D.1G,D.1v[F.1c-1][1].1F(1),V)}}L Z}}J(a[0]>=0&&p>0&&a[0]!=p){F.1E(a[0],a[1],2,a[2],a[3],V);1l(i=0;i<D.2P.X;i++){v=D.2P[i];J(F.1E(p,b[p].1k(0),2,v,a[3],Z)){1e}}L Z}L V};F.1w=P(11,2O){K m=D.1v[F.1c-1];J(F.1c!=4){L m[2O].1i(11)}S{K j=-1;1l(K i=0;i<2;i++){j=D.1v[i][2O].1i(11);J(j>=0){L j}}L j}};F.75=P(c){K 21;J((21=D.1v[4][1].1i(c))>=0){J(21<4){L 1}S J(21<9){L 2}S{L 3}}S J((21=D.1v[4][2].1i(c))>=0){J(21<6){L 1}S J(21<12){L 2}S{L 3}}S{L 0}};F.1X=P(){K d=9q 9p();d.9o(d.9n()+9m);K 74=\';9l=\'+d.9k()+\';9j=/\';K 1a=F.1c;K 1a=D.W.20?1a+8:1a;1a=F.1D?1a+16:1a;1a=F.1C?1a+32:1a;1a+=F.1K*64;1j.72=\'|1d-71=\'+1a+74};F.70=P(){K c=1j.72.4Z(\';\');1l(K i=0;i<c.X&&c[i].1i(\'|1d-71\')<0;i++);J(i==c.X){D.2d()}S{K 1a=9i(c[i].4Z(\'=\')[1],10);F.1c=1a&7;D.W.20=(1a&8)?Z:V;D.1D=(1a&16)?Z:V;F.1C=(1a&32)?Z:V;F.1K=(1a&64)>>6}};F.6R=P(){F.1D=!F.1D};F.4Y=P(){F.1C=!F.1C;F.1M.1W.3N=F.1C?\'\':\'4X\';F.1X()};F.6s=P(){F.1C=Z;F.1M.1W.3N=\'\'};F.6r=P(){F.1C=V;F.1M.1W.3N=\'4X\'};F.4S=P(){J(!F.1M){F.70();F.3J=[\'<2N 1u="6P" 1W="1s: 6O; 6N: 0; 6M:0; 9h:0; 6L: 3I%; 6K: 3P 6J 6I; 6H: 3P; 6G: \'+F.4N+\'; 6F:\'+F.4O+\'; z-1p:9g; 1z-6E: 6D; 6C-6B: 6A;"><a 3O="6z://1d.6y.6x" 6w="6v\\\'s 6u 6t" 1r="F.4W();L V;">F</a> 9f.8 <1N 2c="1d" 1u="1d-15" 1r="F.1t(0);" 1A="2b">\'+F.1o[0]+\'<1N 2c="1d" 1u="1d-6Z" 1r="F.1t(1);" 1A="2b"> \'+F.1o[1]+\' <1N 2c="1d" 1u="1d-6Y" 1r="F.1t(2);" 1A="2b"> \'+F.1o[2]+\' <1N 2c="1d" 1u="1d-6X" 1r="F.1t(3);" 1A="2b"> \'+F.1o[3]+\' <1N 2c="1d" 1u="1d-6W" 1r="F.1t(4);" 1A="2b"> \'+F.1o[4]+\' <1N 2c="1d" 1u="1d-6V" 1r="F.1t(5);" 1A="2b"> \'+F.1o[5]+\' <1N 1u="1d-6U" 1r="6S:F.6q();" 1A="6Q">\'+F.1o[6]+\'<1N 1u="1d-6T" 1r="6S:F.6R();" 1A="6Q">\'+F.1o[7]+\' [&9e;<a 3O="#" 1r="F.1Z();L V;">\'+F.1o[8]+\'</a> (9d) <a 3O="#" 1r="F.4Y();L V;">\'+F.1o[9]+\'</a> (9c) ]</2N>\',\'<2N 1u="6P" 1W="1s: 6O; 6N: 0; 6M: 0; 6L: 9b; 6K: 3P 6J 6I; 6H: 3P; 6G: \'+F.4N+\'; 6F:\'+F.4O+\'; z-1p:3I; 1z-6E: 6D; 6C-6B: 6A;"><a 3O="6z://1d.6y.6x" 6w="6v\\\'s 6u 6t" 1r="F.4W();L V;">F</a>:#4V#</2N>\'];K f=1j.9a(\'2N\');f.6p=F.3J[F.1K].1Y(\'#4V#\',F.1o[F.1c]);f.1W.3N=\'4X\';1j.99.98(f);F.1M=f;J(F.1C){F.6s()}S{F.6r()}}};F.6q=P(){D.W.1Z()};F.1Z=P(){D.1Z()};F.4W=P(){J(F.1K){F.1K=0}S{F.1K=1}F.4T();F.1M.6p=F.3J[F.1K].1Y(\'#4V#\',F.1o[F.1c]);F.4Q();F.1X()};F.1t=P(m){D.1t(m)};F.4U=P(){D.4U()};F.4T=P(){};F.4Q=P(){};F.6m=P(){F.4T();F.4S();D.4R();F.4Q()};F.96=P(){L F.1M.95.1W};F.1c=4;F.1D=Z;F.4P=4;F.1C=Z;F.2M=[-1,0,1m,-1];F.w=0;F.3M=V;F.3L=V;F.3K=V;F.2a=0;F.29=0;F.1L=\'\';F.1V=\'\';F.28=0;F.4O=\'94\';F.4N=\'93\';F.1o=[\'Tắt\',\'92\',\'91\',\'90\',\'Tổ4M hợp\',\'Tự độ4M\',\'8Zí6o tả\',\'Bỏ dấu 8Yểu mới\',\'Bật/Tắt\',\'Ẩn/8Xện\'];F.6n=[];F.1K=0;F.3J=[\'\',\'\'];F.8W=8V;1l(K i=1;i<3I;i++){8U("F.6m()",8T*i)}',62,667,'|||||||||||||||||||||||||||||||||||||||CHIM||Mudim||||if|var|return|target|||function|||else|||false|Speller|length||true||key|||len|off||||case|value|keyCode|method|mudim|break|count|buffer|range|indexOf|document|charCodeAt|for|null|lkey|LANG|index|while|onclick|position|SetMethod|id|modes|GetMarkTypeID|window|selection|text|type|autoModeProbe|showPanel|newAccentRule|PutMark|charAt|vn_UW|VN|ClearBuffer|kp|displayMode|headConsonants|Panel|input|CHAR_Q|CHAR_q|toLowerCase|HTMLEditor|dirty|separators|Append|tailConsonants|style|SetPreference|replace|Toggle|enabled|gi|vn_OW|pos||7900|character|textRange|startWordOffset|shiftSerie|ctrlSerie|radio|name|SetDisplay|switch|vowels|start|tagName|7906|7907|7904|7905|7902|7903|7901|7898|7899|416|417|7896|7897|7894|7895|7892|7893|7891|7888|7889|212|244|UI|doc|all|opera|container|undefined|typeof|CheckSpell|accent|div|group|vncode_2|SetCharAt|toString|substring|GetCursorPosition|7890|7884|7885|213|245|7886|7887|210|||||||||242|211|243|111|7862|7863|7860|7861|7858|7859|7856|7857|7854|7855|258|259|7852|7853|7850|7851|7848|7849|7846|7847|7844|7845|194|226|iframe|offset|selectionStart|DISPLAY_ID|found|grp|100|panels|newTempDisableSpellCheckRequest|tempDisableSpellCheck|tempOff|display|href|1px|ResetAccentInfo|CharIsUI|CHAR_0x80|7920|7921|7918|7919|7916|7917|7914||7915|7912|7913|431|432||7908|7909|360|361|7910|7911|217|249|218|250|117|7840|7841|195|227|7842|7843|192|224|193|225|Attach|MouseDown|KeyHandler|KeyUp|KeyDown|addEventListener|attachEvent|charCode|event|ign|nodeValue|moveStart|word|parentNode|this|dec|checked|getElementById|Set|typeid|ng|PANEL_BACKGROUND|COLOR|oldMethod|AfterInit|Activate|InitPanel|BeforeInit|SwitchMethod|METHOD|ToggleDisplayMode|None|TogglePanel|split|FindAccentPos|AdjustAccent|checkDouble|uipos|CHAR_A|CHAR_a|CharIsO|CHAR_G|CHAR_g|CHAR_U|CHAR_u|HTML|7882|7883|296|297|7880|7881|204|236|205|237|105|121|7878|7879|7876|7877|7874|7875|7872|7873|7870|7871|202|234|7864|7865|7868|7869|7866|7867|200|232|201|233|101|catch|try|contentWindow|ProcessControlKey|Freeze|peckable|GetTarget|VK_CTRL|metaKey|VK_SHIFT|VK_SPACE|VK_ENTER|fromCharCode|String|VK_RIGHT_ARROW|VK_LEFT_ARROW|VK_BACKSPACE|sel|GetRange|||win|createRange|||createTextRange|caret|contents|selectionEnd|ACCENTRULE_ID|SPELLCHECK_ID|Clear|code|consonants|idx|ecIdx|lasts|Init|IGNORE_ID|nh|innerHTML|ToggleSpeller|HidePanel|ShowPanel|Method|Input|Mudzot|title|com|googlecode|http|10pt|size|font|center|align|color|background|padding|black|solid|border|width|right|bottom|fixed|mudimPanel|checkbox|ToggleAccentRule|javascript|accentrule|checkspell|auto|mix|viqr|telex|vni|GetPreference|settings|cookie||tail|AutoDetectMode|vk|charCodeAtPos|subsTab||CHAR_E|CHAR_e|CHAR_y|CHAR_Y|CharPriorityCompare|slice|default|nKey|scrollTop|SetCursorPosition|end|Process|UpdateUI|272|273|7924|7925|7928|7929|7926|7927|7922|7923|221|253|012345zsfrxj|6789ewoda|vn_DD|vn_AW|vn_OO|vn_EE|vn_AA|vncode_1|vn_y0|vn_Y0|vn_i0|vn_I0|vn_e6|vn_E6|vn_e0|vn_E0|vn_u7|vn_U7|vn_u0|vn_U0|vn_o7|vn_O7|vn_o6|vn_O6|vn_o0|vn_O0|vn_a8|vn_A8|vn_a6|vn_A6|vn_a0|vn_A0||contentDocument|getElementsByTagName|chim||onmousedown|onkeypress|onkeyup|onkeydown|which|ctrlLeft|ctrlKey|IsHotkey|preventDefault|stopPropagation|AddKey|UpdateBuffer|VK_LIMIT|isHandled|startOffset|startContainer|moveEnd|getSelection|GetCurrentWord|VK_ONOFF2|VK_ONOFF|VK_PANELTOGGLE|VK_DOWN_ARROW|VK_UP_ARROW|VK_PAGE_DOWN|VK_PAGE_UP|VK_END|VK_HOME|VK_DELETE|BackSpace|release|VK_TAB|setSelectionRange|boundingLeft|srcElement|push|vwchk|Last|nvchk|spchk|tailConsonantsPattern|_|AIUEOYaiueoy|u2|u1|2000|setTimeout|153|REV|Hi|ki|Ch|Viqr|Telex|VNI|lightYellow|Black|firstChild|GetPanelStyle||appendChild|body|createElement|120px|F8|F9|nbsp|v0|4000|left|parseInt|path|toGMTString|expires|604800000|getTime|setTime|Date|new|ot|is|zsfrxj|ewoda|012345|6789|exc|frame|mousedown|keypress|keyup|keydown|shiftLeft|shiftKey|altLeft|altKey|returnValue|cancelBubble|addRange|removeAllRanges|setStart|setEnd|pasteHTML|160|getRangeAt|VK_ALT|119|120|128|unshift|select|collapse|move|parentElement|duplicate|TEXTAREA|findText|INPUT|inRange|textarea|BODY|nodeType|pop|dz|lord|cc|mu|my|lastkey|CGKNPTcgknpt|hklmst|ngh|ch||FfJjWwZz|yu|io|uu|eo||ie|eu|ia|iu|oi||ui|uo|ua||ye|ou|oe|ue|uy|oa|BDFJKLQSVWXZbdfjklqsvwxz|BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz|0x80|CHAR_I|CHAR_i|console'.split('|'),0,{}))
Mudim.BeforeInit = function() {
	//Mudim.COLOR='Black';
	//Mudim.PANEL_BACKGROUND='lightBlue';
	//Mudim.LANG=['Tắt','VNI','Telex','Viqr','Tổng hợp','Tự động','Chính tả','Bỏ dấu kiểu mới','Bật/Tắt','Ẩn/Hiện bảng điều khiển'];
	//Mudim.displayMode = 1;
	Mudim.LANG=['Tắt','Tổng hợp','Tự động','VNI','Telex','Viqr'];
	Mudim.IGNORE_ID = ['email','url'];
};
Mudim.AfterInit = function() {
	//s = Mudim.GetPanelStyle();
	//s.fontSize = '14pt';
	//s.fontFamily = 'Serif';
};

