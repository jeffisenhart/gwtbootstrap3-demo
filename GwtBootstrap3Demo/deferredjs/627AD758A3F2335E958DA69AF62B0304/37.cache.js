function Qrc(){}
function Orc(){dnb(this,Src(new Trc))}
function Frc(a,b,c){Lmb.call(this,a,b,c,(Z0b(),Y0b))}
function esc(a){var b;if(!a.g){b=new Orc(new Qrc);a.g=b}return a.g}
function Urc(a){var b;b=new Ctb;Io(b.a,WJc);wtb(b,i0(a));Io(b.a,XJc);return new P_(b.a.a)}
function Vrc(a){var b;b=new Ctb;Io(b.a,WJc);wtb(b,i0(a));Io(b.a,XJc);return new P_(b.a.a)}
function Wrc(a){var b;b=new Ctb;Io(b.a,WJc);wtb(b,i0(a));Io(b.a,XJc);return new P_(b.a.a)}
function Xrc(a){var b;b=new Ctb;Io(b.a,WJc);wtb(b,i0(a));Io(b.a,XJc);return new P_(b.a.a)}
function dsc(a){var b;if(!a.f){b=new Frc(Ulb(qnb(a.a)),esc(a),csc(a));kmb((rnb(a.a),b),Cnb(rnb(a.a)));a.f=b}return a.f}
function Trc(){this.a=Jr($doc);this.c=Jr($doc);this.e=Jr($doc);this.g=Jr($doc);this.b=new N1(this.a);this.d=new N1(this.c);this.f=new N1(this.e);this.i=new N1(this.g)}
function Src(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q;b=new iIb;SAb(b,(c=new FDb(PJc),SAb(c,(d=new VGb,d.a='Project Setup',UGb(d),d.b='basic setup and using custom themes',UGb(d),d)),SAb(c,(e=new lHb,SAb(e,(j=new xHb(Urc(a.a).a),k=P1((Mab(),j.cb)),M1(a.b),k.b?Fq(k.b,k.a,k.c):S1(k.a),wHb(j,(n=new CEb(3),n.b=QJc,AEb(n),n),M1(a.b)),j)),SAb(e,(o=new oHb,SAb(o,new qFb((p=new Ctb,Io(p.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new P_(p.a.a)).a)),SAb(o,(q=new fyc,_Hb(q,(r=new Ctb,Io(r.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new P_(r.a.a)).a),p2(q.cb,TJc,true),q)),o)),e)),SAb(c,(f=new lHb,SAb(f,(s=new xHb(Wrc(a.c).a),t=P1(s.cb),M1(a.d),t.b?Fq(t.b,t.a,t.c):S1(t.a),wHb(s,(u=new CEb(3),u.b='Bootstrap2 Look-a-like Setup',AEb(u),u),M1(a.d)),s)),SAb(f,(v=new oHb,SAb(v,new qFb((w=new Ctb,Io(w.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new P_(w.a.a)).a)),SAb(v,(A=new fyc,_Hb(A,(B=new Ctb,Io(B.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new P_(B.a.a)).a),p2(A.cb,TJc,true),A)),v)),f)),SAb(c,(g=new lHb,SAb(g,(C=new xHb(Xrc(a.e).a),D=P1(C.cb),M1(a.f),D.b?Fq(D.b,D.a,D.c):S1(D.a),wHb(C,(F=new CEb(3),F.b='Custom Theme',AEb(F),F),M1(a.f)),C)),SAb(g,(G=new oHb,SAb(G,new qFb((H=new Ctb,Io(H.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new P_(H.a.a)).a)),SAb(G,(I=new fyc,_Hb(I,(J=new Ctb,Io(J.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new P_(J.a.a)).a),p2(I.cb,TJc,true),I)),G)),g)),SAb(c,(i=new lHb,SAb(i,(K=new xHb(Vrc(a.g).a),L=P1(K.cb),M1(a.i),L.b?Fq(L.b,L.a,L.c):S1(L.a),wHb(K,(M=new CEb(3),M.b='Support for IE8',AEb(M),M),M1(a.i)),K)),SAb(i,(N=new oHb,SAb(N,new qFb((O=new Ctb,Io(O.a,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new P_(O.a.a)).a)),SAb(N,(P=new fyc,_Hb(P,(Q=new Ctb,Io(Q.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new P_(Q.a.a)).a),p2(P.cb,TJc,true),P)),N)),i)),c));return b}
F$(1309,531,YDc,Frc);F$(1312,536,ZDc,Orc);F$(1313,1,{},Qrc);F$(1314,1,{},Trc);F$(1320,1,yEc);_.Ab=function usc(){Vob(this.b,dsc(this.a.a))};var YV=Prb(jJc,'SetupPresenter',1309),_V=Prb(jJc,'SetupView',1312),$V=Prb(jJc,'SetupView_BinderImpl',1313),ZV=Prb(jJc,'SetupView_BinderImpl$Widgets',1314);FEc(dn)(37);