function Rlc(){}
function Xlc(){}
function $lc(){}
function _lc(){_lc=pBc;Wlc=new $lc}
function Plc(){Alb(this,Tlc(new Ulc))}
function Glc(a,b,c){glb.call(this,a,b,c,(o_b(),n_b))}
function zoc(a){var b;if(!a.q){b=new Plc(new Rlc);a.q=b}return a.q}
function amc(a){var b;b=new Vrb;b.b.b+=kIc;Prb(b,k_(a));b.b.b+=lIc;return new S$(b.b.b)}
function bmc(a){var b;b=new Vrb;b.b.b+=kIc;Prb(b,k_(a));b.b.b+=lIc;return new S$(b.b.b)}
function yoc(a){var b;if(!a.p){b=new Glc(pkb(Mlb(a.b)),zoc(a),xoc(a));Hkb((Nlb(a.b),b),Ylb(Nlb(a.b)));a.p=b}return a.p}
function Ulc(){this.f=(new Xlc,_lc(),Wlc);Zlc(this.f);this.b=jr($doc);this.d=jr($doc);this.c=new Q0(this.b);this.e=new Q0(this.d)}
function Zlc(a){if(!a.b){a.b=true;_u();cv((Py(),'.GOBEEQNHK{background-color:#fcf2f2;border-color:#dfb5b4;}.GOBEEQNIK{margin-top:0 !important;}.GOBEEQNJK{margin-left:5px;}'));return true}return false}
function Tlc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I;b=new wGb;hzb(b,(c=new WBb(dIc),hzb(c,(d=new iFb,d.b=TGc,hFb(d),d)),hzb(c,(e=new Uzb,hzb(e,(f=new TCb(4),p1(f._,'GOBEEQNIK',true),f.c=yOc,RCb(f),f)),hzb(e,new GDb((n=new Vrb,n.b.b+='To use Offline, you must first add the extras module to your project. In Maven:',new S$(n.b.b)).b)),hzb(e,(g=new twc,nGb(g,(o=new Vrb,o.b.b+=zOc,new S$(o.b.b)).b),p1(g._,hIc,true),g)),hzb(e,new GDb((p=new Vrb,p.b.b+=AOc,new S$(p.b.b)).b)),hzb(e,(i=new twc,nGb(i,(q=new Vrb,q.b.b+='&lt;inherits name="org.gwtbootstrap3.extras.cachemanifest.Offline"/&gt;',new S$(q.b.b)).b),p1(i._,hIc,true),i)),p1(e._,'GOBEEQNHK',true),e)),hzb(c,(j=new AFb,hzb(j,(r=new LFb(amc(a.b).b),s=S0(r._),P0(a.c),s.c?vq(s.c,s.b,s.d):V0(s.b),veb(r,(t=new TCb(3),t.c='What is Offline?',RCb(t),t),P0(a.c)),r)),hzb(j,(u=new DFb,hzb(u,new Xyb((v=new Vrb,v.b.b+="<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the <b>cache manifest<\/b>.<br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'>http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5<\/a> <\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage.<\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\/b> needs to reflect this new set of files each time.<\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile.<\/p>",new S$(v.b.b)).b)),u)),hzb(j,new HFb),j)),hzb(c,(k=new AFb,hzb(k,(w=new LFb(bmc(a.d).b),x=S0(w._),P0(a.e),x.c?vq(x.c,x.b,x.d):V0(x.b),veb(w,(y=new TCb(3),y.c='How to configure?',RCb(y),y),P0(a.e)),w)),hzb(k,(z=new DFb,hzb(z,new GDb((A=new Vrb,A.b.b+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new S$(A.b.b)).b)),hzb(z,(B=new twc,nGb(B,(C=new Vrb,C.b.b+='&lt;extend-configuration-property name="cachemanifest_static_files" value="index.html" /&gt;\\n',new S$(C.b.b)).b),p1(B._,hIc,true),B)),hzb(z,new GDb((D=new Vrb,D.b.b+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new S$(D.b.b)).b)),hzb(z,(E=new twc,nGb(E,(F=new Vrb,F.b.b+='&lt;inherits name="org.gwtbootstrap3.extras.cachemanifest.Offline"/&gt;\\n &lt;add-linker name="offline" /&gt;',new S$(F.b.b)).b),p1(E._,hIc,true),E)),hzb(z,new GDb((G=new Vrb,G.b.b+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new S$(G.b.b)).b)),hzb(z,(H=new twc,nGb(H,(I=new Vrb,I.b.b+='&lt;!doctype html&gt;\\n &lt;html manifest="&lt;modulename&gt;/appcache.manifest"&gt;\\n ....\\n &lt;/html&gt;\\n',new S$(I.b.b)).b),p1(H._,hIc,true),H)),z)),hzb(k,new HFb),k)),c));return b}
OZ(1230,525,gCc,Glc);OZ(1233,530,hCc,Plc);OZ(1234,1,{},Rlc);OZ(1235,1,{},Ulc);_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;OZ(1236,1,{},Xlc);var Wlc=null;OZ(1237,1,{},$lc);_.b=false;OZ(1289,1,ICc);_.Ab=function kpc(){pnb(this.c,yoc(this.b.b))};var _T=jqb(yHc,'OfflinePresenter',1230),eU=jqb(yHc,'OfflineView',1233),dU=jqb(yHc,'OfflineView_BinderImpl',1234),aU=jqb(yHc,'OfflineView_BinderImpl$Widgets',1235),cU=jqb(yHc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1236),bU=jqb(yHc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1',1237);PCc(fn)(32);