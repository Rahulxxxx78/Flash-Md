






const _0x5684ce=_0x4247;(function(_0x318d73,_0x80a0af){const _0xac0ff7=_0x4247,_0x28b286=_0x318d73();while(!![]){try{const _0x4aedaa=parseInt(_0xac0ff7(0x126))/0x1*(-parseInt(_0xac0ff7(0x119))/0x2)+-parseInt(_0xac0ff7(0x12d))/0x3+-parseInt(_0xac0ff7(0x12e))/0x4+-parseInt(_0xac0ff7(0x115))/0x5*(parseInt(_0xac0ff7(0x118))/0x6)+-parseInt(_0xac0ff7(0x117))/0x7+-parseInt(_0xac0ff7(0x11e))/0x8*(-parseInt(_0xac0ff7(0x112))/0x9)+parseInt(_0xac0ff7(0x124))/0xa;if(_0x4aedaa===_0x80a0af)break;else _0x28b286['push'](_0x28b286['shift']());}catch(_0x2bb194){_0x28b286['push'](_0x28b286['shift']());}}}(_0x43d2,0x6d246),require('dotenv')[_0x5684ce(0x128)]());const {Pool}=require('pg'),s=require('../set');var dbUrl=s[_0x5684ce(0x129)]?s[_0x5684ce(0x129)]:_0x5684ce(0x121);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}};var proConfig2={'connectionString':_0x5684ce(0x12a),'ssl':{'rejectUnauthorized':![]}};function _0x43d2(){const _0x503741=['Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20informations\x20des\x20thèmes\x20:','rows','3033Xxfhim','log','choix','30aAuhGB','SELECT\x20id,\x20nom,\x20auteur\x20FROM\x20themes\x20ORDER\x20BY\x20id\x20ASC','2240546AGhIRi','635382RFWUqf','2208bcVvme','error','La\x20valeur\x20de\x20\x22choix\x22\x20dans\x20la\x20table\x20\x22theme\x22\x20a\x20été\x20mise\x20à\x20jour\x20avec\x20succès.','connect','Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20informations\x20du\x20thème\x20par\x20ID\x20:','8248YOzpWd','release','\x0a\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20theme\x20(id,\x20choix)\x20VALUES\x20(1,\x20\x271\x27);\x0a\x20\x20\x20\x20','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','SELECT\x20auteur,\x20liens,\x20nom\x20FROM\x20themes\x20WHERE\x20id\x20=\x20$1','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27theme\x27:','26965830MVNaCi','La\x20table\x20\x22theme\x22\x20a\x20été\x20créée\x20avec\x20succès.','259qdsKSo','query','config','DATABASE_URL','postgres://postgres:BDd2eGfbdbeEf23a2A22ddc*3Bf5FcBg@roundhouse.proxy.rlwy.net:24513/railway','Erreur\x20lors\x20de\x20la\x20récupération\x20du\x20choix\x20de\x20thème\x20:','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20la\x20valeur\x20de\x20\x27choix\x27:','2464698fiCxDM','2136088Wesiqy','\x0a\x20\x20\x20\x20\x20\x20UPDATE\x20theme\x20\x0a\x20\x20\x20\x20\x20\x20SET\x20choix\x20=\x20$1\x0a\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x201;\x20\x20--\x20Cible\x20l\x27entrée\x20ayant\x20l\x27id\x20égal\x20à\x201\x0a\x20\x20\x20\x20','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20theme\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20SERIAL\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20choix\x20TEXT\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','length'];_0x43d2=function(){return _0x503741;};return _0x43d2();}const pool=new Pool(proConfig),pool2=new Pool(proConfig2);async function createThemeTable(){const _0x52aedb=_0x5684ce,_0x5a63a9=await pool[_0x52aedb(0x11c)]();try{await _0x5a63a9[_0x52aedb(0x127)](_0x52aedb(0x130)),await _0x5a63a9[_0x52aedb(0x127)](_0x52aedb(0x120)),console[_0x52aedb(0x113)](_0x52aedb(0x125));}catch(_0x4058ea){console[_0x52aedb(0x11a)](_0x52aedb(0x123),_0x4058ea);}finally{_0x5a63a9['release']();}}createThemeTable();async function updateThemeValue(_0x4baa99){const _0x10c0b8=_0x5684ce,_0x5e500b=await pool['connect']();try{await _0x5e500b[_0x10c0b8(0x127)](_0x10c0b8(0x12f),[_0x4baa99]),console[_0x10c0b8(0x113)](_0x10c0b8(0x11b));}catch(_0x3f2546){console[_0x10c0b8(0x11a)](_0x10c0b8(0x12c),_0x3f2546);}finally{_0x5e500b[_0x10c0b8(0x11f)]();}}function _0x4247(_0x11988c,_0x68778a){const _0x43d2e7=_0x43d2();return _0x4247=function(_0x424732,_0x2b0f7e){_0x424732=_0x424732-0x10f;let _0x441f04=_0x43d2e7[_0x424732];return _0x441f04;},_0x4247(_0x11988c,_0x68778a);};async function getThemeChoice(){const _0x19fc10=_0x5684ce,_0x5e0f7f=await pool[_0x19fc10(0x11c)]();try{const _0x22de98=await _0x5e0f7f[_0x19fc10(0x127)]('SELECT\x20choix\x20FROM\x20theme\x20WHERE\x20id\x20=\x201');return _0x22de98[_0x19fc10(0x111)][_0x19fc10(0x10f)]>0x0?_0x22de98[_0x19fc10(0x111)][0x0][_0x19fc10(0x114)]:null;}catch(_0x2036c){return console[_0x19fc10(0x11a)](_0x19fc10(0x12b),_0x2036c),null;}finally{_0x5e0f7f[_0x19fc10(0x11f)]();}};async function getThemeInfoById(_0x483e5f){const _0x1f1978=_0x5684ce;try{const _0x5e5cf6=await pool2[_0x1f1978(0x11c)]();}catch(_0x57fb99){console[_0x1f1978(0x113)]('👿👿\x20'+_0x57fb99);}try{const _0x906fdc=_0x1f1978(0x122),_0x212b46=await client[_0x1f1978(0x127)](_0x906fdc,[_0x483e5f]);if(_0x212b46[_0x1f1978(0x111)]['length']>0x0){const {auteur:_0x5cb22b,liens:_0x201d25,nom:_0x471794}=_0x212b46['rows'][0x0];return{'auteur':_0x5cb22b,'liens':_0x201d25,'nom':_0x471794};}else return null;}catch(_0x528028){return console[_0x1f1978(0x11a)](_0x1f1978(0x11d),_0x528028),null;}finally{client[_0x1f1978(0x11f)]();}};async function getAllThemesInfo(){const _0x42b469=_0x5684ce;try{const _0x26c88a=await pool2[_0x42b469(0x11c)](),_0x5dc1da=_0x42b469(0x116),_0x3bfef0=await _0x26c88a[_0x42b469(0x127)](_0x5dc1da);return _0x26c88a[_0x42b469(0x11f)](),_0x3bfef0[_0x42b469(0x111)];}catch(_0x4fec67){return console[_0x42b469(0x11a)](_0x42b469(0x110),_0x4fec67),[];}};module['exports']={'getThemeChoice':getThemeChoice,'getThemeInfoById':getThemeInfoById,'updateThemeValue':updateThemeValue,'getAllThemesInfo':getAllThemesInfo};