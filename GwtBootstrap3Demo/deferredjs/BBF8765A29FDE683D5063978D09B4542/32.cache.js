function Hnc(){}
function Nnc(){}
function Qnc(){}
function Rnc(){Rnc=fDc;Mnc=new Qnc}
function Fnc(){nnb(this,Jnc(new Knc))}
function wnc(a,b,c){Vmb.call(this,a,b,c,(e1b(),d1b))}
function pqc(a){var b;if(!a.p){b=new Fnc(new Hnc);a.p=b}return a.p}
function Pnc(a){if(!a.a){a.a=true;fv();iv((Vy(),gvd));return true}return false}
function Snc(a){var b;b=new Jtb;so(b.a,xXc);Dtb(b,$_(a));so(b.a,yXc);return new G_(xo(b.a))}
function Tnc(a){var b;b=new Jtb;so(b.a,xXc);Dtb(b,$_(a));so(b.a,yXc);return new G_(xo(b.a))}
function oqc(a){var b;if(!a.o){b=new wnc(cmb(znb(a.a)),pqc(a),nqc(a));umb((Anb(a.a),b),Lnb(Anb(a.a)));a.o=b}return a.o}
function Knc(){this.e=(new Nnc,Rnc(),Mnc);Pnc(this.e);this.a=gr($doc);this.c=gr($doc);this.b=new E1(this.a);this.d=new E1(this.c)}
function Jnc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I;b=new mIb;XAb(b,(c=new LDb(kXc),XAb(c,(d=new $Gb,d.a=INc,ZGb(d),d)),XAb(c,(e=new IBb,XAb(e,(f=new JEb(4),c2(f.$,Vud,true),f.b=zod,HEb(f),f)),XAb(e,new wFb((n=new Jtb,so(n.a,Wud),new G_(xo(n.a))).a)),XAb(e,(g=new jyc,dIb(g,(o=new Jtb,so(o.a,Bod),new G_(xo(o.a))).a),c2(g.$,pXc,true),g)),XAb(e,new wFb((p=new Jtb,so(p.a,Cod),new G_(xo(p.a))).a)),XAb(e,(i=new jyc,dIb(i,(q=new Jtb,so(q.a,Xud),new G_(xo(q.a))).a),c2(i.$,pXc,true),i)),c2(e.$,Yud,true),e)),XAb(c,(j=new qHb,XAb(j,(r=new BHb(Snc(a.a).a),s=G1(r.$),D1(a.b),s.b?oq(s.b,s.a,s.c):J1(s.a),Sfb(r,(t=new JEb(3),t.b=Zud,HEb(t),t),D1(a.b)),r)),XAb(j,(u=new tHb,XAb(u,new LAb((v=new Jtb,so(v.a,$ud),new G_(xo(v.a))).a)),u)),XAb(j,new xHb),j)),XAb(c,(k=new qHb,XAb(k,(w=new BHb(Tnc(a.c).a),x=G1(w.$),D1(a.d),x.b?oq(x.b,x.a,x.c):J1(x.a),Sfb(w,(y=new JEb(3),y.b=_ud,HEb(y),y),D1(a.d)),w)),XAb(k,(z=new tHb,XAb(z,new wFb((A=new Jtb,so(A.a,avd),new G_(xo(A.a))).a)),XAb(z,(B=new jyc,dIb(B,(C=new Jtb,so(C.a,bvd),new G_(xo(C.a))).a),c2(B.$,pXc,true),B)),XAb(z,new wFb((D=new Jtb,so(D.a,cvd),new G_(xo(D.a))).a)),XAb(z,(E=new jyc,dIb(E,(F=new Jtb,so(F.a,dvd),new G_(xo(F.a))).a),c2(E.$,pXc,true),E)),XAb(z,new wFb((G=new Jtb,so(G.a,evd),new G_(xo(G.a))).a)),XAb(z,(H=new jyc,dIb(H,(I=new Jtb,so(I.a,fvd),new G_(xo(I.a))).a),c2(H.$,pXc,true),H)),z)),XAb(k,new xHb),k)),c));return b}
var fvd='&lt;!doctype html&gt;\\n &lt;html manifest="&lt;modulename&gt;/appcache.manifest"&gt;\\n ....\\n &lt;/html&gt;\\n',bvd='&lt;extend-configuration-property name="cachemanifest_static_files" value="index.html" /&gt;\\n',Xud='&lt;inherits name="org.gwtbootstrap3.extras.cachemanifest.Offline"/&gt;',dvd='&lt;inherits name="org.gwtbootstrap3.extras.cachemanifest.Offline"/&gt;\\n &lt;add-linker name="offline" /&gt;',gvd='.GOBEEQNHK{background-color:#fcf2f2;border-color:#dfb5b4;}.GOBEEQNIK{margin-top:0 !important;}.GOBEEQNJK{margin-left:5px;}',$ud="<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the <b>cache manifest<\/b>.<br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'>http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5<\/a> <\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage.<\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\/b> needs to reflect this new set of files each time.<\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile.<\/p>",evd='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',Yud='GOBEEQNHK',Vud='GOBEEQNIK',_ud='How to configure?',hvd='OfflinePresenter',ivd='OfflineView',jvd='OfflineView_BinderImpl',kvd='OfflineView_BinderImpl$Widgets',lvd='OfflineView_BinderImpl_GenBundle_default_StaticClientBundleGenerator',mvd='OfflineView_BinderImpl_GenBundle_default_StaticClientBundleGenerator$1',avd='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',cvd='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',Wud='To use Offline, you must first add the extras module to your project. In Maven:',Zud='What is Offline?';_Z(1242,537,XDc,wnc);_Z(1245,542,YDc,Fnc);_Z(1246,1,{},Hnc);_Z(1247,1,{},Knc);_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_Z(1248,1,{},Nnc);var Mnc=null;_Z(1249,1,{},Qnc);_.a=false;_Z(1301,1,xEc);_.vb=function arc(){cpb(this.b,oqc(this.a.a))};var lU=Yrb(iQc,hvd,1242),qU=Yrb(iQc,ivd,1245),pU=Yrb(iQc,jvd,1246),mU=Yrb(iQc,kvd,1247),oU=Yrb(iQc,lvd,1248),nU=Yrb(iQc,mvd,1249);EEc(Ym)(32);