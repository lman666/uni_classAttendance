(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_chat/common/vendor"],{404:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.parseAudio=_,o.parseGroupSystemNotice=g,o.parseGroupTip=c,o.parseImage=j,o.parseText=t,o.parseVideo=x;var i=n(405);function p(e,o){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||o&&e&&"number"===typeof e.length){n&&(e=n);var i=0,p=function(){};return{s:p,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:p}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var m,r=!0,t=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){t=!0,m=e},f:function(){try{r||null==n.return||n.return()}finally{if(t)throw m}}}}function a(e,o){if(e){if("string"===typeof e)return m(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,o):void 0}}function m(e,o){(null==o||o>e.length)&&(o=e.length);for(var n=0,i=new Array(o);n<o;n++)i[n]=e[n];return i}var r={MEMBER_JOIN:1,MEMBER_QUIT:2,MEMBER_KICKED_OUT:3,MEMBER_SET_ADMIN:4,MEMBER_CANCELED_ADMIN:5,GROUP_INFO_MODIFIED:6,MEMBER_INFO_MODIFIED:7};function t(e){var o=[],n=e.payload.text,p=-1,a=-1;while(""!==n)switch(p=n.indexOf("["),a=n.indexOf("]"),p){case 0:if(-1===a)o.push({name:"span",text:n}),n="";else{var m=n.slice(0,a+1);i.emojiMap[m]?(o.push({name:"img",src:i.emojiUrl+i.emojiMap[m]}),n=n.substring(a+1)):(o.push({name:"span",text:"["}),n=n.slice(1))}break;case-1:o.push({name:"span",text:n}),n="";break;default:o.push({name:"span",text:n.slice(0,p)}),n=n.substring(p);break}return o}function g(e){var o,n=e.payload,i=n.groupProfile.name||n.groupProfile.groupID,p=n.groupProfile.groupID;switch(n.operationType){case 1:o="".concat(n.operatorID," 申请加入群组：").concat(i,"（群ID:").concat(p,")");break;case 2:o="成功加入群组：".concat(i," （群ID:").concat(p,")");break;case 3:o="申请加入群组：".concat(i," （群ID:").concat(p,")被拒绝");break;case 4:o="被管理员".concat(n.operatorID,"踢出群组：").concat(i,"（群ID:").concat(p,")");break;case 5:o="群：".concat(i," （群ID:").concat(p,")已被").concat(n.operatorID,"解散");break;case 6:o="我（用户ID:".concat(n.operatorID,"）成功创建群聊:").concat(i,"（群ID:").concat(p,")");break;case 7:o="用户ID：".concat(n.operatorID,"邀请你加群：").concat(i,"（群ID:").concat(p,")");break;case 8:o="你退出群组：".concat(i,"（群ID:").concat(p,")");break;case 9:o="你被".concat(n.operatorID,"设置为群：").concat(i,"（群ID:").concat(p,")的管理员");break;case 10:o="你被".concat(n.operatorID,"撤销群：").concat(i," （群ID:").concat(p,")的管理员身份");break;case 255:o="自定义群系统通知: ".concat(n.userDefinedField);break}return o}function c(e){var o,n,i=e.payload,a=e.nick||i.userIDList.join(",");switch(i.operationType){case r.MEMBER_JOIN:o="".concat(a," 加入群聊");break;case r.MEMBER_QUIT:o="群成员退群：".concat(a);break;case r.MEMBER_KICKED_OUT:o="群成员被踢：".concat(a);break;case r.MEMBER_SET_ADMIN:o="".concat(i.operatorID,"将 ").concat(a,"设置为管理员");break;case r.MEMBER_CANCELED_ADMIN:o="".concat(i.operatorID,"将 ").concat(a,"取消作为管理员");break;case r.GROUP_INFO_MODIFIED:o="群资料修改";break;case r.MEMBER_INFO_MODIFIED:var m,t=p(i.memberList);try{for(t.s();!(m=t.n()).done;){var g=m.value;o=g.muteTime>0?"群成员：".concat(g.userID,"被禁言").concat(g.muteTime,"秒"):"群成员：".concat(g.userID,"被取消禁言")}}catch(c){t.e(c)}finally{t.f()}break;case 256:n=e.nick||e.from,"无应答"===i.text&&(n=i.userIDList.join(",")),o="结束群聊"===i.text?"结束群聊":'"'.concat(n,'" ').concat(i.text);break}return[{name:"groupTip",text:o}]}function j(e){var o=[{name:"image",src:e.payload.imageInfoArray[0].url}];return o}function x(e){var o={name:"video",src:e.payload.videoUrl};return o}function _(e){var o={name:"audio",src:e.payload.url,second:0===e.payload.second?1:e.payload.second};return o}},405:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.emojiUrl=o.emojiName=o.emojiMap=void 0;var i="https://web.sdk.qcloud.com/im/assets/emoji/";o.emojiUrl=i;var p={"[NO]":"emoji_0@2x.png","[OK]":"emoji_1@2x.png","[下雨]":"emoji_2@2x.png","[么么哒]":"emoji_3@2x.png","[乒乓]":"emoji_4@2x.png","[便便]":"emoji_5@2x.png","[信封]":"emoji_6@2x.png","[偷笑]":"emoji_7@2x.png","[傲慢]":"emoji_8@2x.png","[再见]":"emoji_9@2x.png","[冷汗]":"emoji_10@2x.png","[凋谢]":"emoji_11@2x.png","[刀]":"emoji_12@2x.png","[删除]":"emoji_13@2x.png","[勾引]":"emoji_14@2x.png","[发呆]":"emoji_15@2x.png","[发抖]":"emoji_16@2x.png","[可怜]":"emoji_17@2x.png","[可爱]":"emoji_18@2x.png","[右哼哼]":"emoji_19@2x.png","[右太极]":"emoji_20@2x.png","[右车头]":"emoji_21@2x.png","[吐]":"emoji_22@2x.png","[吓]":"emoji_23@2x.png","[咒骂]":"emoji_24@2x.png","[咖啡]":"emoji_25@2x.png","[啤酒]":"emoji_26@2x.png","[嘘]":"emoji_27@2x.png","[回头]":"emoji_28@2x.png","[困]":"emoji_29@2x.png","[坏笑]":"emoji_30@2x.png","[多云]":"emoji_31@2x.png","[大兵]":"emoji_32@2x.png","[大哭]":"emoji_33@2x.png","[太阳]":"emoji_34@2x.png","[奋斗]":"emoji_35@2x.png","[奶瓶]":"emoji_36@2x.png","[委屈]":"emoji_37@2x.png","[害羞]":"emoji_38@2x.png","[尴尬]":"emoji_39@2x.png","[左哼哼]":"emoji_40@2x.png","[左太极]":"emoji_41@2x.png","[左车头]":"emoji_42@2x.png","[差劲]":"emoji_43@2x.png","[弱]":"emoji_44@2x.png","[强]":"emoji_45@2x.png","[彩带]":"emoji_46@2x.png","[彩球]":"emoji_47@2x.png","[得意]":"emoji_48@2x.png","[微笑]":"emoji_49@2x.png","[心碎了]":"emoji_50@2x.png","[快哭了]":"emoji_51@2x.png","[怄火]":"emoji_52@2x.png","[怒]":"emoji_53@2x.png","[惊恐]":"emoji_54@2x.png","[惊讶]":"emoji_55@2x.png","[憨笑]":"emoji_56@2x.png","[手枪]":"emoji_57@2x.png","[打哈欠]":"emoji_58@2x.png","[抓狂]":"emoji_59@2x.png","[折磨]":"emoji_60@2x.png","[抠鼻]":"emoji_61@2x.png","[抱抱]":"emoji_62@2x.png","[抱拳]":"emoji_63@2x.png","[拳头]":"emoji_64@2x.png","[挥手]":"emoji_65@2x.png","[握手]":"emoji_66@2x.png","[撇嘴]":"emoji_67@2x.png","[擦汗]":"emoji_68@2x.png","[敲打]":"emoji_69@2x.png","[晕]":"emoji_70@2x.png","[月亮]":"emoji_71@2x.png","[棒棒糖]":"emoji_72@2x.png","[汽车]":"emoji_73@2x.png","[沙发]":"emoji_74@2x.png","[流汗]":"emoji_75@2x.png","[流泪]":"emoji_76@2x.png","[激动]":"emoji_77@2x.png","[灯泡]":"emoji_78@2x.png","[炸弹]":"emoji_79@2x.png","[熊猫]":"emoji_80@2x.png","[爆筋]":"emoji_81@2x.png","[爱你]":"emoji_82@2x.png","[爱心]":"emoji_83@2x.png","[爱情]":"emoji_84@2x.png","[猪头]":"emoji_85@2x.png","[猫咪]":"emoji_86@2x.png","[献吻]":"emoji_87@2x.png","[玫瑰]":"emoji_88@2x.png","[瓢虫]":"emoji_89@2x.png","[疑问]":"emoji_90@2x.png","[白眼]":"emoji_91@2x.png","[皮球]":"emoji_92@2x.png","[睡觉]":"emoji_93@2x.png","[磕头]":"emoji_94@2x.png","[示爱]":"emoji_95@2x.png","[礼品袋]":"emoji_96@2x.png","[礼物]":"emoji_97@2x.png","[篮球]":"emoji_98@2x.png","[米饭]":"emoji_99@2x.png","[糗大了]":"emoji_100@2x.png","[红双喜]":"emoji_101@2x.png","[红灯笼]":"emoji_102@2x.png","[纸巾]":"emoji_103@2x.png","[胜利]":"emoji_104@2x.png","[色]":"emoji_105@2x.png","[药]":"emoji_106@2x.png","[菜刀]":"emoji_107@2x.png","[蛋糕]":"emoji_108@2x.png","[蜡烛]":"emoji_109@2x.png","[街舞]":"emoji_110@2x.png","[衰]":"emoji_111@2x.png","[西瓜]":"emoji_112@2x.png","[调皮]":"emoji_113@2x.png","[象棋]":"emoji_114@2x.png","[跳绳]":"emoji_115@2x.png","[跳跳]":"emoji_116@2x.png","[车厢]":"emoji_117@2x.png","[转圈]":"emoji_118@2x.png","[鄙视]":"emoji_119@2x.png","[酷]":"emoji_120@2x.png","[钞票]":"emoji_121@2x.png","[钻戒]":"emoji_122@2x.png","[闪电]":"emoji_123@2x.png","[闭嘴]":"emoji_124@2x.png","[闹钟]":"emoji_125@2x.png","[阴险]":"emoji_126@2x.png","[难过]":"emoji_127@2x.png","[雨伞]":"emoji_128@2x.png","[青蛙]":"emoji_129@2x.png","[面条]":"emoji_130@2x.png","[鞭炮]":"emoji_131@2x.png","[风车]":"emoji_132@2x.png","[飞吻]":"emoji_133@2x.png","[飞机]":"emoji_134@2x.png","[饥饿]":"emoji_135@2x.png","[香蕉]":"emoji_136@2x.png","[骷髅]":"emoji_137@2x.png","[麦克风]":"emoji_138@2x.png","[麻将]":"emoji_139@2x.png","[鼓掌]":"emoji_140@2x.png","[龇牙]":"emoji_141@2x.png"};o.emojiMap=p;var a=["[龇牙]","[调皮]","[流汗]","[偷笑]","[再见]","[敲打]","[擦汗]","[猪头]","[玫瑰]","[流泪]","[大哭]","[嘘]","[酷]","[抓狂]","[委屈]","[便便]","[炸弹]","[菜刀]","[可爱]","[色]","[害羞]","[得意]","[吐]","[微笑]","[怒]","[尴尬]","[惊恐]","[冷汗]","[爱心]","[示爱]","[白眼]","[傲慢]","[难过]","[惊讶]","[疑问]","[困]","[么么哒]","[憨笑]","[爱情]","[衰]","[撇嘴]","[阴险]","[奋斗]","[发呆]","[右哼哼]","[抱抱]","[坏笑]","[飞吻]","[鄙视]","[晕]","[大兵]","[可怜]","[强]","[弱]","[握手]","[胜利]","[抱拳]","[凋谢]","[米饭]","[蛋糕]","[西瓜]","[啤酒]","[瓢虫]","[勾引]","[OK]","[爱你]","[咖啡]","[月亮]","[刀]","[发抖]","[差劲]","[拳头]","[心碎了]","[太阳]","[礼物]","[皮球]","[骷髅]","[挥手]","[闪电]","[饥饿]","[困]","[咒骂]","[折磨]","[抠鼻]","[鼓掌]","[糗大了]","[左哼哼]","[打哈欠]","[快哭了]","[吓]","[篮球]","[乒乓]","[NO]","[跳跳]","[怄火]","[转圈]","[磕头]","[回头]","[跳绳]","[激动]","[街舞]","[献吻]","[左太极]","[右太极]","[闭嘴]","[猫咪]","[红双喜]","[鞭炮]","[红灯笼]","[麻将]","[麦克风]","[礼品袋]","[信封]","[象棋]","[彩带]","[蜡烛]","[爆筋]","[棒棒糖]","[奶瓶]","[面条]","[香蕉]","[飞机]","[左车头]","[车厢]","[右车头]","[多云]","[下雨]","[钞票]","[熊猫]","[灯泡]","[风车]","[闹钟]","[雨伞]","[彩球]","[钻戒]","[沙发]","[纸巾]","[手枪]","[青蛙]"];o.emojiName=a},420:function(e,o){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/page_chat/common/vendor.js.map