const _0x36c4=['length','SceneLoader','isPickable','parent','_holder','_instance\x20-\x20i\x20','renderingGroupId','TransformNode','material','name','transformNodes','_parentNode','_instance\x20-\x20i','ImportMesh','meshes','createInstance','getMaterialByName','LoadAssetContainer'];(function(_0x29a578,_0x36c495){const _0x384549=function(_0x3c39c0){while(--_0x3c39c0){_0x29a578['push'](_0x29a578['shift']());}};_0x384549(++_0x36c495);}(_0x36c4,0xd6));const _0x3845=function(_0x29a578,_0x36c495){_0x29a578=_0x29a578-0x0;let _0x384549=_0x36c4[_0x29a578];return _0x384549;};loaderManager=function(){let _0x3c39c0=function(_0x210730){const _0xa2577b=_0x3845;if(standardMaterialRef===undefined)standardMaterialRef=global_sceneRef[_0xa2577b('0x0')](standardMaterialName);if(waterMaterialRef===undefined)waterMaterialRef=global_sceneRef['getMaterialByName'](waterMaterialName);if(greenMaterialRef===undefined)greenMaterialRef=global_sceneRef[_0xa2577b('0x0')](greenMaterialName);if(brownLightMaterialRef===undefined)brownLightMaterialRef=global_sceneRef[_0xa2577b('0x0')](brownLightMaterialName);if(grayDarkMaterialRef===undefined)grayDarkMaterialRef=global_sceneRef[_0xa2577b('0x0')](grayDarkMaterialName);},_0x28534a=function(_0x34b164,_0x5f3cb9,_0x1e87d5,_0x371721,_0xd29546){const _0x1cdad0=_0x3845;return BABYLON[_0x1cdad0('0x3')][_0x1cdad0('0x1')](_0x34b164,_0x5f3cb9,_0x1e87d5,function(_0x43b3cc){const _0x404d2b=_0x1cdad0;_0x43b3cc['addAllToScene']();for(var _0x37cbc3=0x0;_0x37cbc3<_0x43b3cc[_0x404d2b('0x10')][_0x404d2b('0x2')];_0x37cbc3++){if(_0x43b3cc[_0x404d2b('0x10')][_0x37cbc3][_0x404d2b('0xa')]!==null){_0x3c39c0();if(_0x43b3cc[_0x404d2b('0x10')][_0x37cbc3]['material'][_0x404d2b('0xb')]===standardMaterialName&&standardMaterialRef!==undefined)_0x43b3cc['meshes'][_0x37cbc3][_0x404d2b('0xa')]=standardMaterialRef;}_0x43b3cc[_0x404d2b('0x10')][_0x37cbc3]!==null&&(_0x43b3cc[_0x404d2b('0x10')][_0x37cbc3]['renderingGroupId']=_0x371721,_0x43b3cc[_0x404d2b('0x10')][_0x37cbc3][_0x404d2b('0x4')]=![]);}if(_0xd29546!=null)try{_0xd29546(_0x43b3cc[_0x404d2b('0xc')][0x0][_0x404d2b('0xd')]);}catch(_0x40bc31){_0xd29546();}});},_0x39f143=function(_0x2c40e9,_0x54aca7,_0x35e03c,_0x32a444,_0x2e2cd6,_0x486b84){const _0x2b62c9=_0x3845;BABYLON[_0x2b62c9('0x3')][_0x2b62c9('0xf')]('',_0x2c40e9,_0x54aca7,_0x32a444,function(_0x3c068a){const _0x577fbd=_0x2b62c9;let _0xee9faf=[],_0x40c681=_0x3c068a[_0x577fbd('0x2')];for(let _0xd008d4=0x0;_0xd008d4<_0x40c681;_0xd008d4++){if(_0x3c068a[_0xd008d4][_0x577fbd('0xa')]!==null){_0x3c39c0();if(_0x3c068a[_0xd008d4]['material'][_0x577fbd('0xb')]===standardMaterialName&&standardMaterialRef!==undefined)_0x3c068a[_0xd008d4][_0x577fbd('0xa')]=standardMaterialRef;}_0x3c068a[_0xd008d4]['isVisible']=![],_0x3c068a[_0xd008d4][_0x577fbd('0x8')]=_0x2e2cd6;}for(let _0x2054b4=0x0;_0x2054b4<_0x35e03c;_0x2054b4++){let _0x32641f=new BABYLON[(_0x577fbd('0x9'))](_0x54aca7+_0x577fbd('0x7')+_0x2054b4+_0x577fbd('0x6'));for(let _0x5a4456=0x1;_0x5a4456<_0x3c068a[_0x577fbd('0x2')];_0x5a4456++){let _0x135a28=_0x3c068a[_0x5a4456][_0x577fbd('0x11')](_0x54aca7+_0x577fbd('0xe')+_0x2054b4);_0x135a28['parent']=_0x32641f;}_0xee9faf['push'](_0x32641f),_0x32641f[_0x577fbd('0x5')]=_0x3c068a[0x0];}_0x486b84(_0xee9faf);});};return{'setUpStandardMat':_0x3c39c0,'loadStaticModel':_0x28534a,'loadInstances':_0x39f143};}();