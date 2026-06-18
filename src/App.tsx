import { useState } from "react";

const LOGO_SMALL="data:image/png;base64,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";
const GD=150;
const C={bg:"#0B1610",surface:"#142019",card:"#1C2E22",border:"#263D2C",accent:"#5BBA6F",accentGlow:"rgba(91,186,111,0.13)",gold:"#D4A843",goldDim:"rgba(212,168,67,0.13)",text:"#E4EDE6",textMid:"#8FAF97",textDim:"#4E6B56",danger:"#E05C5C",dangerDim:"rgba(224,92,92,0.13)",info:"#5BA4BA",warn:"#E09A3E",purple:"#9B72CF"};
const toP=n=>String(n).replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);
const gC=g=>g==="BB"?C.accent:g==="B+"?C.gold:C.danger;
const sDim=(m)=>m<=6?31:m<=11?30:29;
const sLeap=(y)=>y>1&&y%4===1;
const sLC=(y)=>y<=5?0:Math.floor((y-6)/4)+1;
const sToAbs=(y,m,d)=>{let t=(y-1)*365+sLC(y);for(let i=1;i<m;i++)t+=sDim(i);return t+d;};
const absToS=(t)=>{let y=1;while(true){const dy=sLeap(y)?366:365;if(t<=dy)break;t-=dy;y++;}let m=1;while(true){const dm=sDim(m);if(t<=dm)break;t-=dm;m++;}return[y,m,t];};
const isDate=d=>/^\d{4}\/\d{2}\/\d{2}$/.test(d);
const daysFrom=ds=>{if(!isDate(ds))return null;const now=new Date();const[ty,tm,td]=absToS(sToAbs(now.getFullYear()-621,now.getMonth()+1,now.getDate()));return sToAbs(...ds.split("/").map(Number))-sToAbs(ty,tm,td);};
const addDays=(ds,n)=>{if(!isDate(ds))return null;const[y,m,d]=ds.split("/").map(Number);const[ny,nm,nd]=absToS(sToAbs(y,m,d)+n);return`${ny}/${String(nm).padStart(2,"0")}/${String(nd).padStart(2,"0")}`;};
const fmtRial=n=>{
  if(!n||n===0)return"—";
  return toP(n.toLocaleString("en").replace(/,/g,"٬"))+" ریال";
};
const ageInMonths=a=>{if(isDate(a.birthDate)){const df=daysFrom(a.birthDate);if(df===null||df>0)return null;return Math.floor(Math.abs(df)/30);}if(a.estimatedAge){const n=parseFloat(a.estimatedAge);if(!isNaN(n))return a.estimatedAge.includes("ماه")?n:n*12;}return null;};
const calcAge=a=>{if(isDate(a.birthDate)){const mo=ageInMonths(a);if(mo===null)return a.estimatedAge||"—";const yr=Math.floor(mo/12);const mn=mo%12;if(yr===0)return`${mn} ماه`;if(mn===0)return`${yr} سال`;return`${yr} سال و ${mn} ماه`;}return a.estimatedAge||"—";};
const isPregnant=a=>(a.reproductions||[]).some(r=>r.result==="در انتظار");
const lastWeight=a=>a.weights?.at(-1)?.weight||null;
const calcFin=a=>{const c=(a.costs||[]).reduce((s,x)=>s+(+x.amount||0),0);const r=(a.revenues||[]).reduce((s,x)=>s+(+x.amount||0),0);return{c,r,p:r-c};};
const dlText=dl=>dl===null?"—":dl===0?"🔴 زایمان امروز":dl<0?`🔴 ${toP(Math.abs(dl))} روز تأخیر`:dl<=7?`⚠️ ${toP(dl)} روز تا زایمان`:`${toP(dl)} روز تا زایمان`;
const dlColor=dl=>dl!==null&&dl<=7?C.danger:C.gold;
const vaccText=dl=>dl<=0?"🔴 واکسن معوق":dl<=7?`⚠️ ${toP(dl)} روز تا تزریق`:`${toP(dl)} روز تا تزریق`;
const vaccColor=dl=>dl<=0?C.danger:dl<=7?C.warn:C.info;

const DEMO_ANIMALS=[{"id":"VRG-M01","name":"ستاره","type":"میش","genotype":"BB","birthDate":"1400/06/15","estimatedAge":"۴ سال و ۹ ماه","entryWeight":68,"entryDate":"1401/03/01","entryType":"خرید","purchasePrice":950000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"تب برفکی","lastDate":"1405/01/05","nextDate":"1405/07/05","vet":"دکتر رضایی"},{"id":"v3","name":"آنتروتوکسمی","lastDate":"1405/02/01","nextDate":"1406/02/01","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1401/07/20","birthDate":"1401/12/18","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو — بره نر و ماده","ramCode":"VRG-R01","expectedBirthDate":"1401/12/18"},{"id":"r2","season":2,"matingDate":"1402/07/15","birthDate":"1402/12/12","lambCount":3,"birthType":"طبیعی","result":"زنده","notes":"سه‌قلو — دو نر یک ماده","ramCode":"VRG-R01","expectedBirthDate":"1402/12/12"},{"id":"r3","season":3,"matingDate":"1403/07/20","birthDate":"1404/12/17","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R01","expectedBirthDate":"1404/12/17"},{"id":"r4","season":4,"matingDate":"1404/07/20","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1404/12/19"}],"weights":[{"id":"w1","date":"1401/03/01","weight":68,"physStatus":"ورود"},{"id":"w2","date":"1402/03/15","weight":71,"physStatus":"نرمال"},{"id":"w3","date":"1403/03/10","weight":73,"physStatus":"نرمال"},{"id":"w4","date":"1404/03/01","weight":72,"physStatus":"نرمال"},{"id":"w5","date":"1405/03/01","weight":74,"physStatus":"آبستن"}],"treatments":[{"id":"t1","date":"1403/05/10","description":"تب و بی‌اشتهایی","drug":"آموکسی‌سیلین ۱۵% — ۵ سی‌سی","vet":"دکتر رضایی","result":"بهبود کامل"}],"costs":[{"id":"c1","date":"1401/03/01","category":"خرید دام","amount":950000000,"note":"میش BB تأیید‌شده از آراژن ویرا"},{"id":"c2","date":"1401/03/01","category":"حمل‌ونقل","amount":8000000,"note":"هزینه حمل از تهران"},{"id":"c3","date":"1402/01/01","category":"خوراک","amount":95000000,"note":"خوراک سالانه ۱۴۰۲ — کاه، یونجه، جو، کنسانتره"},{"id":"c4","date":"1402/07/10","category":"دامپزشکی","amount":18000000,"note":"معاینه دوره‌ای + واکسیناسیون سالانه"},{"id":"c5","date":"1403/01/01","category":"خوراک","amount":110000000,"note":"خوراک سالانه ۱۴۰۳"},{"id":"c6","date":"1403/05/10","category":"درمان","amount":22000000,"note":"درمان تب + دارو"},{"id":"c7","date":"1404/01/01","category":"خوراک","amount":125000000,"note":"خوراک سالانه ۱۴۰۴"},{"id":"c8","date":"1404/07/10","category":"دامپزشکی","amount":20000000,"note":"واکسیناسیون سالانه ۱۴۰۴"}],"revenues":[{"id":"rv1","date":"1402/01/10","category":"فروش بره","amount":200000000,"note":"فروش ۲ بره از شکم اول — نر ۱۲۵م + ماده ۷۵م تومان"},{"id":"rv2","date":"1403/01/05","category":"فروش بره","amount":420000000,"note":"فروش ۳ بره سه‌قلو — ۲ نر ۱۴۰م + ۱ ماده BB ۶۵م × ۱۰"},{"id":"rv3","date":"1404/01/08","category":"فروش بره","amount":280000000,"note":"فروش ۲ بره از شکم سوم"}],"quickNotes":[{"id":"n1","date":"1404/12/17","text":"زایمان شکم سوم — دوقلو سالم — مادر و بره‌ها در وضعیت عالی"},{"id":"n2","date":"1402/12/12","text":"سه‌قلوزایی تأیید شد — نشانه قوی ژن BB"}]},{"id":"VRG-M02","name":"مهتاب","type":"میش","genotype":"BB","birthDate":"1400/09/20","estimatedAge":"۴ سال و ۶ ماه","entryWeight":66,"entryDate":"1401/03/01","entryType":"خرید","purchasePrice":900000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"تب برفکی","lastDate":"1405/01/05","nextDate":"1405/07/05","vet":"دکتر رضایی"},{"id":"v3","name":"بروسلوز","lastDate":"1404/08/01","nextDate":"1405/08/01","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1401/07/25","birthDate":"1402/12/22","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R01","expectedBirthDate":"1402/12/22"},{"id":"r2","season":2,"matingDate":"1402/07/20","birthDate":"1403/12/16","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R01","expectedBirthDate":"1403/12/16"},{"id":"r3","season":3,"matingDate":"1404/07/25","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1404/12/24"}],"weights":[{"id":"w1","date":"1401/03/01","weight":66,"physStatus":"ورود"},{"id":"w2","date":"1403/03/01","weight":70,"physStatus":"نرمال"},{"id":"w3","date":"1405/03/01","weight":71,"physStatus":"آبستن"}],"treatments":[],"costs":[{"id":"c1","date":"1401/03/01","category":"خرید دام","amount":900000000,"note":"میش BB"},{"id":"c2","date":"1401/03/01","category":"حمل‌ونقل","amount":8000000,"note":""},{"id":"c3","date":"1402/01/01","category":"خوراک","amount":95000000,"note":"خوراک سالانه ۱۴۰۲"},{"id":"c4","date":"1403/01/01","category":"خوراک","amount":110000000,"note":"خوراک سالانه ۱۴۰۳"},{"id":"c5","date":"1404/01/01","category":"خوراک","amount":125000000,"note":"خوراک سالانه ۱۴۰۴"},{"id":"c6","date":"1404/07/10","category":"دامپزشکی","amount":20000000,"note":"واکسیناسیون سالانه"}],"revenues":[{"id":"rv1","date":"1403/01/05","category":"فروش بره","amount":280000000,"note":"فروش ۲ بره BB از شکم دوم"},{"id":"rv2","date":"1404/01/10","category":"فروش بره","amount":320000000,"note":"فروش ۲ بره از شکم سوم"}],"quickNotes":[]},{"id":"VRG-M03","name":"نسیم","type":"میش","genotype":"BB","birthDate":"1401/01/10","estimatedAge":"۴ سال و ۲ ماه","entryWeight":64,"entryDate":"1402/03/15","entryType":"خرید","purchasePrice":980000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"پاستورلوز","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v3","name":"آنتروتوکسمی","lastDate":"1405/02/01","nextDate":"1406/02/01","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1402/07/18","birthDate":"1402/12/17","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R02","expectedBirthDate":"1402/12/17"},{"id":"r2","season":2,"matingDate":"1403/07/18","birthDate":"1404/12/17","lambCount":3,"birthType":"طبیعی","result":"زنده","notes":"سه‌قلو — اوج عملکرد ژن BB","ramCode":"VRG-R01","expectedBirthDate":"1404/12/17"},{"id":"r3","season":3,"matingDate":"1404/07/18","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1404/12/17"}],"weights":[{"id":"w1","date":"1402/03/15","weight":64,"physStatus":"ورود"},{"id":"w2","date":"1404/03/01","weight":69,"physStatus":"نرمال"},{"id":"w3","date":"1405/03/01","weight":71,"physStatus":"آبستن"}],"treatments":[],"costs":[{"id":"c1","date":"1402/03/15","category":"خرید دام","amount":980000000,"note":"میش BB — قیمت سال ۱۴۰۲"},{"id":"c2","date":"1402/03/15","category":"حمل‌ونقل","amount":9000000,"note":""},{"id":"c3","date":"1403/01/01","category":"خوراک","amount":110000000,"note":"خوراک سالانه ۱۴۰۳"},{"id":"c4","date":"1404/01/01","category":"خوراک","amount":125000000,"note":"خوراک سالانه ۱۴۰۴"},{"id":"c5","date":"1404/07/10","category":"دامپزشکی","amount":20000000,"note":"واکسیناسیون سالانه"}],"revenues":[{"id":"rv1","date":"1403/01/10","category":"فروش بره","amount":260000000,"note":"فروش ۲ بره از شکم اول"},{"id":"rv2","date":"1404/01/10","category":"فروش بره","amount":480000000,"note":"فروش ۳ بره سه‌قلو — ۲ نر BB + ۱ ماده BB"}],"quickNotes":[{"id":"n1","date":"1404/12/17","text":"سه‌قلوزایی تأیید شد — نسیم برترین دام گله از نظر FecB BB"}]},{"id":"VRG-M04","name":"بهار","type":"میش","genotype":"B+","birthDate":"1401/06/20","estimatedAge":"۳ سال و ۹ ماه","entryWeight":62,"entryDate":"1402/06/01","entryType":"خرید","purchasePrice":750000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"تب برفکی","lastDate":"1405/01/05","nextDate":"1405/07/05","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1402/07/22","birthDate":"1402/12/21","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R01","expectedBirthDate":"1402/12/21"},{"id":"r2","season":2,"matingDate":"1403/07/22","birthDate":"1404/12/21","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R01","expectedBirthDate":"1404/12/21"},{"id":"r3","season":3,"matingDate":"1404/07/22","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1404/12/21"}],"weights":[{"id":"w1","date":"1402/06/01","weight":62,"physStatus":"ورود"},{"id":"w2","date":"1404/03/01","weight":67,"physStatus":"نرمال"},{"id":"w3","date":"1405/03/01","weight":69,"physStatus":"آبستن"}],"treatments":[],"costs":[{"id":"c1","date":"1402/06/01","category":"خرید دام","amount":750000000,"note":"میش B+ تأیید‌شده"},{"id":"c2","date":"1402/06/01","category":"حمل‌ونقل","amount":9000000,"note":""},{"id":"c3","date":"1403/01/01","category":"خوراک","amount":110000000,"note":"خوراک سالانه ۱۴۰۳"},{"id":"c4","date":"1404/01/01","category":"خوراک","amount":125000000,"note":"خوراک سالانه ۱۴۰۴"},{"id":"c5","date":"1404/07/10","category":"دامپزشکی","amount":18000000,"note":"واکسیناسیون سالانه"}],"revenues":[{"id":"rv1","date":"1403/01/15","category":"فروش بره","amount":240000000,"note":"فروش ۲ بره — ۱ نر ۱۴۰م + ۱ ماده ۱۰۰م تومان"},{"id":"rv2","date":"1404/01/20","category":"فروش بره","amount":280000000,"note":"فروش ۲ بره از شکم دوم"}],"quickNotes":[]},{"id":"VRG-M05","name":"سپیده","type":"میش","genotype":"B+","birthDate":"1401/04/08","estimatedAge":"۴ سال","entryWeight":63,"entryDate":"1402/06/01","entryType":"خرید","purchasePrice":720000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"آنتروتوکسمی","lastDate":"1405/02/01","nextDate":"1406/02/01","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1402/07/28","birthDate":"1402/12/27","lambCount":1,"birthType":"طبیعی","result":"زنده","notes":"تک‌قلو","ramCode":"VRG-R02","expectedBirthDate":"1402/12/27"},{"id":"r2","season":2,"matingDate":"1403/07/28","birthDate":"1404/12/27","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو — پیشرفت با ژن FecB","ramCode":"VRG-R01","expectedBirthDate":"1404/12/27"},{"id":"r3","season":3,"matingDate":"1404/07/28","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1405/05/02"}],"weights":[{"id":"w1","date":"1402/06/01","weight":63,"physStatus":"ورود"},{"id":"w2","date":"1405/03/01","weight":68,"physStatus":"آبستن"}],"treatments":[],"costs":[{"id":"c1","date":"1402/06/01","category":"خرید دام","amount":720000000,"note":"میش B+"},{"id":"c2","date":"1402/06/01","category":"حمل‌ونقل","amount":9000000,"note":""},{"id":"c3","date":"1403/01/01","category":"خوراک","amount":110000000,"note":"خوراک سالانه ۱۴۰۳"},{"id":"c4","date":"1404/01/01","category":"خوراک","amount":125000000,"note":"خوراک سالانه ۱۴۰۴"},{"id":"c5","date":"1404/07/10","category":"دامپزشکی","amount":18000000,"note":"واکسیناسیون سالانه"}],"revenues":[{"id":"rv1","date":"1403/01/20","category":"فروش بره","amount":130000000,"note":"فروش بره نر — ۱۳ میلیون تومان"},{"id":"rv2","date":"1404/01/20","category":"فروش بره","amount":280000000,"note":"فروش ۲ بره دوقلو"}],"quickNotes":[{"id":"n1","date":"1404/12/27","text":"دوقلوزایی شکم دوم — نشانه تأثیر قوچ BB"}]},{"id":"VRG-M06","name":"پریسا","type":"میش","genotype":"BB","birthDate":"1400/11/05","estimatedAge":"۴ سال و ۴ ماه","entryWeight":70,"entryDate":"1401/06/01","entryType":"خرید","purchasePrice":1100000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"بروسلوز","lastDate":"1404/08/01","nextDate":"1405/08/01","vet":"دکتر رضایی"},{"id":"v3","name":"تب برفکی","lastDate":"1405/01/05","nextDate":"1405/07/05","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1401/07/10","birthDate":"1402/12/08","lambCount":3,"birthType":"طبیعی","result":"زنده","notes":"سه‌قلو","ramCode":"VRG-R01","expectedBirthDate":"1402/12/08"},{"id":"r2","season":2,"matingDate":"1402/07/10","birthDate":"1403/12/08","lambCount":3,"birthType":"طبیعی","result":"زنده","notes":"سه‌قلو دوباره — رکورد گله","ramCode":"VRG-R01","expectedBirthDate":"1403/12/08"},{"id":"r3","season":3,"matingDate":"1403/07/10","birthDate":"1404/12/08","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R01","expectedBirthDate":"1404/12/08"},{"id":"r4","season":4,"matingDate":"1404/07/10","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1404/12/08"}],"weights":[{"id":"w1","date":"1401/06/01","weight":70,"physStatus":"ورود"},{"id":"w2","date":"1403/03/01","weight":75,"physStatus":"نرمال"},{"id":"w3","date":"1405/03/01","weight":76,"physStatus":"آبستن"}],"treatments":[],"costs":[{"id":"c1","date":"1401/06/01","category":"خرید دام","amount":1100000000,"note":"میش BB — سابقه سه‌قلوزایی تأیید‌شده"},{"id":"c2","date":"1401/06/01","category":"حمل‌ونقل","amount":10000000,"note":""},{"id":"c3","date":"1402/01/01","category":"خوراک","amount":95000000,"note":"خوراک سالانه ۱۴۰۲"},{"id":"c4","date":"1403/01/01","category":"خوراک","amount":110000000,"note":"خوراک سالانه ۱۴۰۳"},{"id":"c5","date":"1404/01/01","category":"خوراک","amount":125000000,"note":"خوراک سالانه ۱۴۰۴"},{"id":"c6","date":"1404/07/10","category":"دامپزشکی","amount":20000000,"note":"واکسیناسیون کامل"}],"revenues":[{"id":"rv1","date":"1402/01/01","category":"فروش بره","amount":450000000,"note":"فروش ۳ بره سه‌قلو شکم اول — ۲ نر BB ۱۵۰م + ۱ ماده BB ۶۵م × ۱۰"},{"id":"rv2","date":"1403/01/01","category":"فروش بره","amount":580000000,"note":"فروش ۳ بره سه‌قلو شکم دوم — قیمت بالاتر"},{"id":"rv3","date":"1404/01/05","category":"فروش بره","amount":320000000,"note":"فروش ۲ بره دوقلو شکم سوم"}],"quickNotes":[{"id":"n1","date":"1402/12/08","text":"پریسا دومین سه‌قلو را هم آورد — برترین دام گله"},{"id":"n2","date":"1401/06/01","text":"خریداری با قیمت بالا به دلیل سابقه تأیید‌شده سه‌قلو"}]},{"id":"VRG-M07","name":"آرزو","type":"میش","genotype":"B+","birthDate":"1402/03/01","estimatedAge":"۳ سال و ۳ ماه","entryWeight":58,"entryDate":"1403/06/01","entryType":"تولد در گله","purchasePrice":0,"motherCode":"VRG-M01","fatherCode":"VRG-R01","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"تب برفکی","lastDate":"1405/01/05","nextDate":"1405/07/05","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1403/07/15","birthDate":"1404/12/13","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو — اولین زایمان","ramCode":"VRG-R01","expectedBirthDate":"1404/12/13"},{"id":"r2","season":2,"matingDate":"1404/07/15","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1404/12/13"}],"weights":[{"id":"w1","date":"1403/06/01","weight":58,"physStatus":"ورود"},{"id":"w2","date":"1404/06/01","weight":64,"physStatus":"نرمال"},{"id":"w3","date":"1405/03/01","weight":66,"physStatus":"آبستن"}],"treatments":[],"costs":[{"id":"c1","date":"1403/06/01","category":"هزینه پرورش","amount":35000000,"note":"هزینه پرورش بره تا بلوغ — خوراک + واکسن"},{"id":"c2","date":"1404/01/01","category":"خوراک","amount":110000000,"note":"خوراک سالانه ۱۴۰۴"},{"id":"c3","date":"1404/07/10","category":"دامپزشکی","amount":18000000,"note":"واکسیناسیون"}],"revenues":[{"id":"rv1","date":"1404/01/05","category":"فروش بره","amount":240000000,"note":"فروش ۲ بره دوقلو — ۱ نر + ۱ ماده B+"}],"quickNotes":[{"id":"n1","date":"1403/06/01","text":"نتاج ستاره × شیرآفرین — B+ تأیید‌شده از آراژن ویرا"}]},{"id":"VRG-M08","name":"شکوفه","type":"میش","genotype":"B+","birthDate":"1401/08/15","estimatedAge":"۳ سال و ۷ ماه","entryWeight":61,"entryDate":"1402/09/01","entryType":"خرید","purchasePrice":680000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"پاستورلوز","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1402/07/25","birthDate":"1403/12/23","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R02","expectedBirthDate":"1403/12/23"},{"id":"r2","season":2,"matingDate":"1404/07/25","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1404/12/24"}],"weights":[{"id":"w1","date":"1402/09/01","weight":61,"physStatus":"ورود"},{"id":"w2","date":"1405/03/01","weight":65,"physStatus":"آبستن"}],"treatments":[{"id":"t1","date":"1404/02/10","description":"ورم پستان خفیف","drug":"پنی‌سیلین موضعی ۳ روز","vet":"دکتر رضایی","result":"بهبود کامل"}],"costs":[{"id":"c1","date":"1402/09/01","category":"خرید دام","amount":680000000,"note":"میش B+"},{"id":"c2","date":"1402/09/01","category":"حمل‌ونقل","amount":9000000,"note":""},{"id":"c3","date":"1403/01/01","category":"خوراک","amount":110000000,"note":"خوراک سالانه ۱۴۰۳"},{"id":"c4","date":"1404/01/01","category":"خوراک","amount":125000000,"note":"خوراک سالانه ۱۴۰۴"},{"id":"c5","date":"1404/02/10","category":"درمان","amount":15000000,"note":"درمان ورم پستان"},{"id":"c6","date":"1404/07/10","category":"دامپزشکی","amount":18000000,"note":"واکسیناسیون"}],"revenues":[{"id":"rv1","date":"1403/01/20","category":"فروش بره","amount":220000000,"note":"فروش ۲ بره دوقلو"}],"quickNotes":[]},{"id":"VRG-M09","name":"زیبا","type":"میش","genotype":"BB","birthDate":"1400/05/12","estimatedAge":"۵ سال و ۱ ماه","entryWeight":72,"entryDate":"1401/03/01","entryType":"خرید","purchasePrice":920000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"آنتروتوکسمی","lastDate":"1405/02/01","nextDate":"1406/02/01","vet":"دکتر رضایی"},{"id":"v3","name":"تب برفکی","lastDate":"1405/01/05","nextDate":"1405/07/05","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1401/07/12","birthDate":"1402/12/10","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R01","expectedBirthDate":"1402/12/10"},{"id":"r2","season":2,"matingDate":"1402/07/12","birthDate":"1403/12/10","lambCount":2,"birthType":"طبیعی","result":"زنده","notes":"دوقلو","ramCode":"VRG-R01","expectedBirthDate":"1403/12/10"},{"id":"r3","season":3,"matingDate":"1403/07/12","birthDate":"1404/12/10","lambCount":2,"birthType":"سخت","result":"زنده","notes":"زایمان سخت — کمک دامپزشک","ramCode":"VRG-R01","expectedBirthDate":"1404/12/10"},{"id":"r4","season":4,"matingDate":"1404/07/12","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1404/12/10"}],"weights":[{"id":"w1","date":"1401/03/01","weight":72,"physStatus":"ورود"},{"id":"w2","date":"1403/03/01","weight":74,"physStatus":"نرمال"},{"id":"w3","date":"1405/03/01","weight":73,"physStatus":"آبستن"}],"treatments":[{"id":"t1","date":"1404/12/10","description":"کمک زایمان + احیا","drug":"سرم گلوکز ۵۰۰cc + ویتامین B کمپلکس","vet":"دکتر رضایی","result":"بهبود کامل"}],"costs":[{"id":"c1","date":"1401/03/01","category":"خرید دام","amount":920000000,"note":"میش BB"},{"id":"c2","date":"1401/03/01","category":"حمل‌ونقل","amount":8000000,"note":""},{"id":"c3","date":"1402/01/01","category":"خوراک","amount":95000000,"note":""},{"id":"c4","date":"1403/01/01","category":"خوراک","amount":110000000,"note":""},{"id":"c5","date":"1404/01/01","category":"خوراک","amount":125000000,"note":""},{"id":"c6","date":"1404/12/10","category":"درمان","amount":25000000,"note":"کمک زایمان + سرم‌درمانی"},{"id":"c7","date":"1404/07/10","category":"دامپزشکی","amount":20000000,"note":""}],"revenues":[{"id":"rv1","date":"1402/01/05","category":"فروش بره","amount":260000000,"note":"فروش ۲ بره BB"},{"id":"rv2","date":"1403/01/05","category":"فروش بره","amount":300000000,"note":"فروش ۲ بره BB"},{"id":"rv3","date":"1404/01/05","category":"فروش بره","amount":340000000,"note":"فروش ۲ بره BB"}],"quickNotes":[{"id":"n1","date":"1404/12/10","text":"زایمان سخت — بره‌ها سالم — نیاز به مراقبت ویژه ۴۸ ساعت"}]},{"id":"VRG-M10","name":"مروارید","type":"میش","genotype":"B+","birthDate":"1402/01/20","estimatedAge":"۳ سال و ۲ ماه","entryWeight":59,"entryDate":"1403/06/15","entryType":"تولد در گله","purchasePrice":0,"motherCode":"VRG-M06","fatherCode":"VRG-R01","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"تب برفکی","lastDate":"1405/01/05","nextDate":"1405/07/05","vet":"دکتر رضایی"}],"reproductions":[{"id":"r1","season":1,"matingDate":"1404/07/05","result":"در انتظار","ramCode":"VRG-R01","expectedBirthDate":"1404/12/03"}],"weights":[{"id":"w1","date":"1403/06/15","weight":59,"physStatus":"ورود"},{"id":"w2","date":"1404/06/01","weight":63,"physStatus":"نرمال"},{"id":"w3","date":"1405/03/01","weight":65,"physStatus":"آبستن"}],"treatments":[],"costs":[{"id":"c1","date":"1403/06/15","category":"هزینه پرورش","amount":35000000,"note":"هزینه پرورش تا بلوغ"},{"id":"c2","date":"1404/01/01","category":"خوراک","amount":110000000,"note":""},{"id":"c3","date":"1404/07/10","category":"دامپزشکی","amount":18000000,"note":""}],"revenues":[],"quickNotes":[{"id":"n1","date":"1403/06/15","text":"نتاج پریسا × شیرآفرین — مادر رکورددار سه‌قلو — ارزش ژنتیکی بالا"}]},{"id":"VRG-R01","name":"شیرآفرین","type":"قوچ","genotype":"BB","birthDate":"1399/06/01","estimatedAge":"۶ سال","entryWeight":92,"entryDate":"1401/03/01","entryType":"خرید","purchasePrice":1500000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"تب برفکی","lastDate":"1405/01/05","nextDate":"1405/07/05","vet":"دکتر رضایی"},{"id":"v3","name":"بروسلوز","lastDate":"1404/08/01","nextDate":"1405/08/01","vet":"دکتر رضایی"}],"reproductions":[],"weights":[{"id":"w1","date":"1401/03/01","weight":92,"physStatus":"ورود"},{"id":"w2","date":"1403/07/01","weight":96,"physStatus":"فصل جفت‌گیری"},{"id":"w3","date":"1404/07/01","weight":95,"physStatus":"فصل جفت‌گیری"},{"id":"w4","date":"1405/03/01","weight":93,"physStatus":"نرمال"}],"treatments":[],"costs":[{"id":"c1","date":"1401/03/01","category":"خرید دام","amount":1500000000,"note":"قوچ BB هموزیگوت — هسته اصلی اصلاح‌نژاد — تأیید آراژن ویرا"},{"id":"c2","date":"1401/03/01","category":"حمل‌ونقل","amount":12000000,"note":"حمل از تهران"},{"id":"c3","date":"1402/01/01","category":"خوراک","amount":115000000,"note":"خوراک سالانه — جیره تقویتی فصل جفت‌گیری"},{"id":"c4","date":"1403/01/01","category":"خوراک","amount":130000000,"note":""},{"id":"c5","date":"1404/01/01","category":"خوراک","amount":145000000,"note":""},{"id":"c6","date":"1404/07/10","category":"دامپزشکی","amount":22000000,"note":"واکسیناسیون + معاینه تناسلی"}],"revenues":[],"quickNotes":[{"id":"n1","date":"1401/03/01","text":"قوچ اصلی گله — پدر اکثر بره‌های گله — ۴ فصل جفت‌گیری موفق"},{"id":"n2","date":"1404/07/01","text":"نتایج فرزندان: ۱۲ مورد دوقلو + ۵ مورد سه‌قلو در گله"}]},{"id":"VRG-R02","name":"کوهستان","type":"قوچ","genotype":"BB","birthDate":"1401/05/10","estimatedAge":"۴ سال","entryWeight":85,"entryDate":"1403/01/01","entryType":"خرید","purchasePrice":1200000000,"motherCode":"-","fatherCode":"-","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"},{"id":"v2","name":"تب برفکی","lastDate":"1405/01/05","nextDate":"1405/07/05","vet":"دکتر رضایی"}],"reproductions":[],"weights":[{"id":"w1","date":"1403/01/01","weight":85,"physStatus":"ورود"},{"id":"w2","date":"1404/07/01","weight":89,"physStatus":"فصل جفت‌گیری"},{"id":"w3","date":"1405/03/01","weight":88,"physStatus":"نرمال"}],"treatments":[],"costs":[{"id":"c1","date":"1403/01/01","category":"خرید دام","amount":1200000000,"note":"قوچ BB جوان — جایگزین آینده"},{"id":"c2","date":"1403/01/01","category":"حمل‌ونقل","amount":10000000,"note":""},{"id":"c3","date":"1403/01/01","category":"خوراک","amount":130000000,"note":""},{"id":"c4","date":"1404/01/01","category":"خوراک","amount":145000000,"note":""},{"id":"c5","date":"1404/07/10","category":"دامپزشکی","amount":22000000,"note":""}],"revenues":[],"quickNotes":[{"id":"n1","date":"1403/01/01","text":"قوچ BB جوان — در حال ارزیابی عملکرد — ۲ فصل جفت‌گیری"}]},{"id":"VRG-R03","name":"برفاب","type":"قوچ","genotype":"B+","birthDate":"1402/07/15","estimatedAge":"۲ سال و ۸ ماه","entryWeight":71,"entryDate":"1404/06/01","entryType":"تولد در گله","purchasePrice":0,"motherCode":"VRG-M02","fatherCode":"VRG-R01","hasFecBTest":true,"hasHealthCert":true,"hasVaccCard":true,"status":"در گله","vaccines":[{"id":"v1","name":"آبله گوسفند","lastDate":"1404/07/10","nextDate":"1405/07/10","vet":"دکتر رضایی"}],"reproductions":[],"weights":[{"id":"w1","date":"1404/06/01","weight":71,"physStatus":"ورود"},{"id":"w2","date":"1405/03/01","weight":78,"physStatus":"نرمال"}],"treatments":[],"costs":[{"id":"c1","date":"1404/06/01","category":"هزینه پرورش","amount":40000000,"note":"هزینه پرورش تا بلوغ"},{"id":"c2","date":"1404/07/10","category":"دامپزشکی","amount":15000000,"note":"آزمایش FecB + واکسیناسیون"}],"revenues":[],"quickNotes":[{"id":"n1","date":"1404/06/01","text":"قوچ جوان نتاج داخلی — B+ تأیید — ارزش بازار حدود ۷۵ میلیون تومان"}]},{"id":"VRG-L01","name":"امید","type":"بره","genotype":"BB","birthDate":"1404/12/17","estimatedAge":"۳ ماه","entryWeight":4.2,"entryDate":"1404/12/17","entryType":"تولد در گله","purchasePrice":0,"motherCode":"VRG-M01","fatherCode":"VRG-R01","hasFecBTest":false,"hasHealthCert":false,"hasVaccCard":false,"status":"در گله","vaccines":[],"reproductions":[],"weights":[{"id":"w1","date":"1404/12/17","weight":4.2,"physStatus":"تولد — وزن خوب"},{"id":"w2","date":"1405/01/17","weight":12,"physStatus":"شیردهی — رشد عالی"},{"id":"w3","date":"1405/02/17","weight":20,"physStatus":"از شیر گرفته"},{"id":"w4","date":"1405/03/17","weight":27,"physStatus":"نرمال — رشد ۲۵۰ گرم/روز"}],"treatments":[],"costs":[{"id":"c1","date":"1405/01/01","category":"خوراک","amount":8000000,"note":"شیر مصنوعی + کنسانتره آغازین"},{"id":"c2","date":"1405/03/01","category":"دامپزشکی","amount":5000000,"note":"واکسیناسیون اولیه + آزمایش FecB"}],"revenues":[],"quickNotes":[{"id":"n1","date":"1404/12/17","text":"بره نر BB — رشد عالی ۲۵۰ گرم/روز — کاندیدای قوچ اصلاح‌نژاد — ارزش تخمینی ۸۰-۱۰۰ میلیون تومان"}]},{"id":"VRG-L02","name":"روشنا","type":"بره","genotype":"B+","birthDate":"1404/12/19","estimatedAge":"۳ ماه","entryWeight":3.9,"entryDate":"1404/12/19","entryType":"تولد در گله","purchasePrice":0,"motherCode":"VRG-M03","fatherCode":"VRG-R01","hasFecBTest":false,"hasHealthCert":false,"hasVaccCard":false,"status":"در گله","vaccines":[],"reproductions":[],"weights":[{"id":"w1","date":"1404/12/19","weight":3.9,"physStatus":"تولد"},{"id":"w2","date":"1405/01/19","weight":11,"physStatus":"شیردهی"},{"id":"w3","date":"1405/02/19","weight":18,"physStatus":"از شیر گرفته"},{"id":"w4","date":"1405/03/19","weight":24,"physStatus":"نرمال"}],"treatments":[],"costs":[{"id":"c1","date":"1405/01/01","category":"خوراک","amount":8000000,"note":"شیر مصنوعی + کنسانتره"},{"id":"c2","date":"1405/03/01","category":"دامپزشکی","amount":5000000,"note":"واکسیناسیون اولیه"}],"revenues":[],"quickNotes":[{"id":"n1","date":"1404/12/19","text":"بره ماده B+ — کاندیدای نگهداری برای گله — ارزش تخمینی ۶۰-۷۵ میلیون تومان"}]}];

const Bdg=({l,c,sm})=>(<span style={{background:c+"22",color:c,borderRadius:6,padding:sm?"2px 7px":"3px 10px",fontSize:sm?10:12,fontWeight:700,whiteSpace:"nowrap"}}>{l}</span>);
const Lbl=({l,v,c})=>(<div style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${C.border}`}}><span style={{color:C.textDim,fontSize:12}}>{l}</span><span style={{fontWeight:600,color:c||C.text,fontSize:12}}>{v}</span></div>);

export default function VargehDemo(){
  const[selId,setSelId]=useState(null);
  const[tab,setTab]=useState("info");
  const[page,setPage]=useState("dash");
  const animals=DEMO_ANIMALS;
  const sel=animals.find(a=>a.id===selId)||null;
  const cs={background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:14,marginBottom:10};
  const btnG={background:C.surface,border:`1px solid ${C.border}`,borderRadius:8,color:C.text,cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600};

  const totalAnimals=animals.filter(a=>a.status==="در گله").length;
  const pregnant=animals.filter(a=>isPregnant(a)).length;
  const bbCount=animals.filter(a=>a.genotype==="BB"&&a.status==="در گله").length;
  const bpCount=animals.filter(a=>a.genotype==="B+"&&a.status==="در گله").length;
  const totalRevenue=animals.reduce((s,a)=>(a.revenues||[]).reduce((ss,r)=>ss+(+r.amount||0),s),0);
  const totalCost=animals.reduce((s,a)=>(a.costs||[]).reduce((ss,c)=>ss+(+c.amount||0),s),0);
  const birthCal=animals.filter(a=>a.status==="در گله").flatMap(a=>(a.reproductions||[]).filter(r=>r.result==="در انتظار"&&r.expectedBirthDate).map(r=>({aid:a.id,aname:a.name||a.id,s:r.season,date:r.expectedBirthDate,dl:daysFrom(r.expectedBirthDate),gen:a.genotype}))).sort((a,b)=>(a.dl||999)-(b.dl||999));
  const navItems=[{id:"dash",icon:"🏠",label:"داشبورد"},{id:"list",icon:"🐑",label:"گله"},{id:"cal",icon:"🗓️",label:"تقویم"},{id:"fin",icon:"💰",label:"مالی"},{id:"ai",icon:"🧬",label:"تحلیل"}];

  return(
    <div style={{minHeight:"100vh",background:C.bg,color:C.text,fontFamily:"'Vazirmatn','Tahoma',sans-serif",direction:"rtl",paddingBottom:70}}>
      <div style={{position:"fixed",top:0,left:0,right:0,zIndex:999,background:"#1a0a00",borderBottom:`1px solid ${C.warn}44`,padding:"4px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span style={{fontSize:10,color:C.warn,fontWeight:700}}>🔒 نسخه نمایشی — فقط مشاهده</span>
        <span style={{fontSize:10,color:C.textDim}}>هسته اصلاح‌نژاد وارگه © ۱۴۰۵</span>
      </div>
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"10px 14px",marginTop:28,display:"flex",alignItems:"center",gap:10}}>
        <img src={LOGO_SMALL} style={{width:32,height:32,borderRadius:8,objectFit:"cover"}} alt="وارگه"/>
        <div>
          <div style={{fontWeight:800,color:C.accent,fontSize:14}}>وارگه <span style={{color:C.purple,fontSize:10}}>نسخه نمایشی</span></div>
          <div style={{fontSize:10,color:C.textDim}}>هسته اصلاح‌نژاد قزل افشار — دره‌شهر، ایلام</div>
          <div style={{fontSize:9,color:C.accent}}>🧬 آزمایشگاه مرجع: آراژن ویرا</div>
        </div>
      </div>
      <div style={{maxWidth:680,margin:"0 auto",padding:"10px 10px 0"}}>
        {page==="dash"&&(
          <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8,marginBottom:10}}>
              {(()=>{
                const rams=animals.filter(a=>a.status==="در گله"&&a.type==="قوچ").length;
                const ewes=animals.filter(a=>a.status==="در گله"&&a.type==="میش").length;
                const ratio=ewes>0?Math.round(ewes/Math.max(rams,1)*10)/10:"—";
                return[{l:"کل گله",v:toP(totalAnimals),c:C.accent},{l:"آبستن",v:toP(pregnant),c:C.gold},{l:"هموزیگوت BB",v:toP(bbCount),c:C.accent},{l:"هتروزیگوت B+",v:toP(bpCount),c:C.gold},{l:"نسبت میش به قوچ",v:`۱ : ${toP(ratio)}`,c:C.info},{l:"میانگین بره گله",v:(()=>{const rs=animals.filter(a=>a.type==="میش").flatMap(a=>(a.reproductions||[]).filter(r=>r.birthDate&&r.lambCount));return rs.length?toP((rs.reduce((s,r)=>s+(+r.lambCount),0)/rs.length).toFixed(1))+" رأس":"—";})(),c:C.purple}];
              })().map((s,i)=>(
                <div key={i} style={{...cs,marginBottom:0,textAlign:"center"}}>
                  <div style={{fontSize:11,color:C.textDim,marginBottom:4}}>{s.l}</div>
                  <div style={{fontSize:24,fontWeight:800,color:s.c}}>{s.v}</div>
                </div>
              ))}
            </div>
            <div style={{...cs}}>
              <div style={{fontWeight:700,marginBottom:8,color:C.gold}}>💰 خلاصه مالی</div>
              <Lbl l="جمع هزینه‌ها" v={fmtRial(totalCost)} c={C.danger}/>
              <Lbl l="جمع درآمدها" v={fmtRial(totalRevenue)} c={C.accent}/>
              <Lbl l="سود خالص" v={fmtRial(totalRevenue-totalCost)} c={totalRevenue>totalCost?C.accent:C.danger}/>
            </div>
            <div style={{...cs}}>
              <div style={{fontWeight:700,marginBottom:8,color:C.gold}}>🗓️ زایمان‌های نزدیک</div>
              {birthCal.slice(0,3).map((e,i)=>(
                <div key={i} onClick={()=>{setSelId(e.aid);setPage("detail");setTab("repro");}} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${C.border}`,cursor:"pointer"}}>
                  <span style={{fontWeight:600,fontSize:13}}>{e.aname}</span>
                  <Bdg l={dlText(e.dl)} c={dlColor(e.dl)} sm/>
                </div>
              ))}
              {birthCal.length===0&&<div style={{color:C.textDim,fontSize:12,textAlign:"center",padding:8}}>میش آبستنی ثبت نشده</div>}
            </div>
            <div style={{...cs}}>
              <div style={{fontWeight:700,marginBottom:8,color:C.accent}}>🧬 ترکیب ژنتیکی گله</div>
              {["BB","B+","++"].map(g=>{const cnt=animals.filter(a=>a.genotype===g&&a.status==="در گله").length;if(!cnt)return null;return(<div key={g} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${C.border}`}}><Bdg l={g} c={gC(g)} sm/><span style={{fontWeight:700,color:gC(g)}}>{toP(cnt)} رأس</span></div>);})}
            </div>
          </div>
        )}
        {page==="list"&&(
          <div>
            <div style={{fontWeight:700,fontSize:15,marginBottom:10,color:C.accent}}>🐑 گله ({toP(totalAnimals)} رأس)</div>
            {animals.filter(a=>a.status==="در گله").map(a=>(
              <div key={a.id} onClick={()=>{setSelId(a.id);setPage("detail");setTab("info");}} style={{...cs,cursor:"pointer",borderColor:isPregnant(a)?C.gold+"55":C.border}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <div style={{fontWeight:800,fontSize:14,color:C.accent}}>{a.name}</div>
                    <div style={{fontSize:11,color:C.textDim,marginTop:2}}>{a.id} · {a.type} · {calcAge(a)}</div>
                  </div>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"flex-end"}}>
                    <Bdg l={a.genotype} c={gC(a.genotype)} sm/>
                    {isPregnant(a)&&<Bdg l="🤰 آبستن" c={C.gold} sm/>}
                    {lastWeight(a)&&<Bdg l={`${toP(lastWeight(a))} کیلو`} c={C.info} sm/>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {page==="cal"&&(
          <div>
            <div style={{fontWeight:700,fontSize:15,marginBottom:10,color:C.accent}}>🗓️ تقویم گله</div>
            {birthCal.length>0&&(
              <div style={{...cs,borderColor:C.gold+"44"}}>
                <div style={{fontWeight:700,color:C.gold,marginBottom:8}}>🗓️ زایمان‌های پیش‌رو</div>
                {birthCal.map((e,i)=>(
                  <div key={i} onClick={()=>{setSelId(e.aid);setPage("detail");setTab("repro");}} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${C.border}`,cursor:"pointer"}}>
                    <span style={{fontWeight:600}}>{e.aname} — شکم {toP(e.s)}</span>
                    <div style={{textAlign:"left"}}>
                      <Bdg l={dlText(e.dl)} c={dlColor(e.dl)} sm/>
                      <div style={{fontSize:10,color:C.textDim,marginTop:2}}>{e.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {(()=>{
              const vaccCal=animals.filter(a=>a.status==="در گله").flatMap(a=>(a.vaccines||[]).filter(v=>{const d=daysFrom(v.nextDate);return d!==null&&d<=30;}).map(v=>({aid:a.id,aname:a.name||a.id,label:v.name,dl:daysFrom(v.nextDate)})));
              if(!vaccCal.length)return null;
              return(<div style={{...cs,borderColor:C.info+"44"}}>
                <div style={{fontWeight:700,color:C.info,marginBottom:8}}>💉 واکسن‌های پیش‌رو</div>
                {vaccCal.sort((a,b)=>(a.dl||999)-(b.dl||999)).map((v,i)=>(
                  <div key={i} onClick={()=>{setSelId(v.aid);setPage("detail");setTab("vacc");}} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${C.border}`,cursor:"pointer"}}>
                    <span style={{fontWeight:600}}>{v.aname} — {v.label}</span>
                    <Bdg l={vaccText(v.dl)} c={vaccColor(v.dl)} sm/>
                  </div>
                ))}
              </div>);
            })()}
          </div>
        )}
        {page==="fin"&&(()=>{
          const allCosts=animals.flatMap(a=>(a.costs||[]).map(c=>({...c,aname:a.name||a.id})));
          const allRevs=animals.flatMap(a=>(a.revenues||[]).map(r=>({...r,aname:a.name||a.id})));
          const tc=allCosts.reduce((s,c)=>s+(+c.amount||0),0);
          const tr=allRevs.reduce((s,r)=>s+(+r.amount||0),0);
          return(
            <div>
              <div style={{fontWeight:700,fontSize:15,marginBottom:10,color:C.accent}}>💰 گزارش مالی گله</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8,marginBottom:10}}>
                {(()=>{const roi=tc>0?Math.round((tr-tc)/tc*100):0;return[{l:"هزینه کل",v:fmtRial(tc),c:C.danger},{l:"درآمد کل",v:fmtRial(tr),c:C.accent},{l:"سود خالص",v:fmtRial(tr-tc),c:tr>tc?C.accent:C.danger},{l:"ROI",v:`${roi>=0?"+":""}${toP(roi)}٪`,c:roi>=0?C.accent:C.danger}];})().map((s,i)=>(
                  <div key={i} style={{...cs,marginBottom:0,textAlign:"center"}}>
                    <div style={{fontSize:10,color:C.textDim,marginBottom:4}}>{s.l}</div>
                    <div style={{fontSize:13,fontWeight:800,color:s.c}}>{s.v}</div>
                  </div>
                ))}
              </div>
              <div style={{...cs}}>
                <div style={{fontWeight:700,color:C.danger,marginBottom:8}}>📋 هزینه‌ها</div>
                {allCosts.sort((a,b)=>b.amount-a.amount).map((c,i)=>(
                  <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${C.border}`}}>
                    <span style={{fontSize:12,color:C.textMid}}>{c.aname} — {c.category}</span>
                    <span style={{fontSize:12,fontWeight:600,color:C.danger}}>{fmtRial(+c.amount)}</span>
                  </div>
                ))}
              </div>
              <div style={{...cs}}>
                <div style={{fontWeight:700,color:C.accent,marginBottom:8}}>💵 درآمدها</div>
                {allRevs.sort((a,b)=>b.amount-a.amount).map((r,i)=>(
                  <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${C.border}`}}>
                    <span style={{fontSize:12,color:C.textMid}}>{r.aname} — {r.category}</span>
                    <span style={{fontSize:12,fontWeight:600,color:C.accent}}>{fmtRial(+r.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
        {page==="ai"&&(()=>{
          const inGelle=animals.filter(a=>a.status==="در گله");
          const bbPct=Math.round(inGelle.filter(a=>a.genotype==="BB").length/inGelle.length*100);
          const bpPct=Math.round(inGelle.filter(a=>a.genotype==="B+").length/inGelle.length*100);
          const avgLambs=inGelle.filter(a=>a.type==="میش"&&(a.reproductions||[]).filter(r=>r.birthDate).length>0).map(a=>{const rs=(a.reproductions||[]).filter(r=>r.birthDate&&r.lambCount);return rs.reduce((s,r)=>s+(+r.lambCount||0),0)/rs.length;});
          const avgLambsVal=avgLambs.length?avgLambs.reduce((s,v)=>s+v,0)/avgLambs.length:0;
          const multipleRate=inGelle.filter(a=>a.type==="میش").flatMap(a=>(a.reproductions||[]).filter(r=>r.birthDate&&r.lambCount)).filter(r=>(+r.lambCount||0)>=2).length;
          const totalBirths=inGelle.filter(a=>a.type==="میش").flatMap(a=>(a.reproductions||[]).filter(r=>r.birthDate&&r.lambCount)).length;
          const multiPct=totalBirths?Math.round(multipleRate/totalBirths*100):0;
          const overdueVacc=inGelle.filter(a=>(a.vaccines||[]).some(v=>v.nextDate&&daysFrom(v.nextDate)!==null&&daysFrom(v.nextDate)<=0));
          const noVacc=inGelle.filter(a=>!(a.vaccines||[]).some(v=>v.nextDate));
          const matingReady=inGelle.filter(a=>a.type==="میش"&&!isPregnant(a)).filter(a=>{const d=a.reproductions?.filter(r=>r.birthDate)?.at(-1);if(!d)return false;const df=daysFrom(d.birthDate);return df!==null&&Math.abs(df)>=90;});
          return(
            <div>
              <div style={{fontWeight:700,fontSize:15,marginBottom:10,color:C.accent}}>🧬 تحلیل هوشمند گله</div>
              <div style={{...cs}}>
                <div style={{fontWeight:700,color:C.accent,marginBottom:8}}>📊 شاخص‌های ژنتیکی</div>
                {[["درصد هموزیگوت BB",`${toP(bbPct)}%`,C.accent],["درصد هتروزیگوت B+",`${toP(bpPct)}%`,C.gold],["میانگین بره در زایمان",`${toP(avgLambsVal.toFixed(1))} رأس`,C.info],["نرخ چندقلوزایی",`${toP(multiPct)}%`,C.purple]].map(([l,v,c])=>(<Lbl key={l} l={l} v={v} c={c}/>))}
              </div>
              {overdueVacc.length>0&&<div style={{...cs,borderColor:C.danger+"55"}}>
                <div style={{fontWeight:700,color:C.danger,marginBottom:8}}>🚨 واکسن معوق</div>
                {overdueVacc.map((a,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${C.border}`}}><span style={{fontWeight:600}}>{a.name}</span><Bdg l="🔴 واکسن معوق" c={C.danger} sm/></div>)}
              </div>}
              {noVacc.length>0&&<div style={{...cs,borderColor:C.warn+"55"}}>
                <div style={{fontWeight:700,color:C.warn,marginBottom:8}}>⚠️ بدون برنامه واکسیناسیون</div>
                {noVacc.map((a,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${C.border}`}}><span style={{fontWeight:600}}>{a.name}</span><Bdg l="بدون برنامه" c={C.warn} sm/></div>)}
              </div>}
              {matingReady.length>0&&<div style={{...cs,borderColor:C.gold+"55"}}>
                <div style={{fontWeight:700,color:C.gold,marginBottom:8}}>🐑 آماده جفت‌گیری</div>
                {matingReady.map((a,i)=>{const d=a.reproductions?.filter(r=>r.birthDate)?.at(-1);const days=d?Math.abs(daysFrom(d.birthDate)||0):0;return(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${C.border}`}}><span style={{fontWeight:600}}>{a.name}</span><Bdg l={days>=100?`🔴 ${toP(days)} روز تأخیر`:`${toP(days)} روز از زایمان`} c={days>=100?C.danger:C.gold} sm/></div>);})}
              </div>}
              <div style={{...cs}}>
                <div style={{fontWeight:700,color:C.accent,marginBottom:8}}>🏆 برترین دام‌ها</div>
                {inGelle.filter(a=>a.type==="میش").sort((a,b)=>(b.reproductions||[]).filter(r=>r.birthDate&&(+r.lambCount||0)>=2).length-(a.reproductions||[]).filter(r=>r.birthDate&&(+r.lambCount||0)>=2).length).slice(0,3).map((a,i)=>{const multi=(a.reproductions||[]).filter(r=>r.birthDate&&(+r.lambCount||0)>=2).length;return(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${C.border}`}}><span style={{fontWeight:600}}>{a.name} <span style={{fontSize:10,color:C.textDim}}>({a.genotype})</span></span><Bdg l={`${toP(multi)} بار چندقلو`} c={C.accent} sm/></div>);})}
              </div>

              {(()=>{
                // ══ پیشنهاد بهینه جفت‌گیری ══
                const rams=inGelle.filter(a=>a.type==="قوچ");
                const ewes=inGelle.filter(a=>a.type==="میش");

                // تابع محاسبه بهترین قوچ برای یک میش
                // محاسبه میانگین واقعی بره از سابقه میش
                const realAvgLamb=(ewe)=>{
                  const rs=(ewe.reproductions||[]).filter(r=>r.birthDate&&r.lambCount&&+r.lambCount>0);
                  if(!rs.length)return null;
                  const avg=rs.reduce((s,r)=>s+(+r.lambCount),0)/rs.length;
                  return Math.round(avg*10)/10;
                };
                // درصد چندقلو واقعی میش
                const realMultiPct=(ewe)=>{
                  const rs=(ewe.reproductions||[]).filter(r=>r.birthDate&&r.lambCount);
                  if(!rs.length)return null;
                  const multi=rs.filter(r=>(+r.lambCount)>=2).length;
                  return Math.round(multi/rs.length*100);
                };

                const bestRam=(ewe)=>{
                  // اولویت‌بندی علمی: BB×BB > B+×BB > BB×B+ > B+×B+
                  const eweAvg=realAvgLamb(ewe);
                  const eweMulti=realMultiPct(ewe);
                  const ranked=rams.map(ram=>{
                    let score=0;let lambGeno="";let sciNote="";
                    if(ewe.genotype==="BB"&&ram.genotype==="BB"){
                      score=100;lambGeno="۱۰۰٪ BB";
                      sciNote="بهترین ترکیب ممکن — تمام بره‌ها هموزیگوت BB";
                    }else if(ewe.genotype==="B+"&&ram.genotype==="BB"){
                      score=90;lambGeno="۵۰٪ BB + ۵۰٪ B+";
                      sciNote="ترکیب عالی — نیمی از بره‌ها BB خواهند بود";
                    }else if(ewe.genotype==="BB"&&ram.genotype==="B+"){
                      score=75;lambGeno="۵۰٪ BB + ۵۰٪ B+";
                      sciNote="ترکیب قابل قبول — در صورت امکان از قوچ BB استفاده شود";
                    }else if(ewe.genotype==="B+"&&ram.genotype==="B+"){
                      score=40;lambGeno="۲۵٪ BB + ۵۰٪ B+ + ۲۵٪ ++";
                      sciNote="⚠️ ترکیب ضعیف — تغییر به قوچ BB اکیداً توصیه می‌شود";
                    }
                    return{ram,score,lambGeno,sciNote,eweAvg,eweMulti};
                  });
                  return ranked.sort((a,b)=>b.score-a.score)[0];
                };

                // ══ امتیاز حذف دام ══
                const cullScore=(a)=>{
                  let score=0;const reasons=[];
                  // سن بالا
                  const mo=ageInMonths(a);
                  if(mo!==null&&mo>=84){score+=3;reasons.push("سن بالای ۷ سال");}
                  else if(mo!==null&&mo>=72){score+=1;reasons.push("سن بالای ۶ سال");}
                  // ژنوتیپ ++
                  if(a.genotype==="++"){score+=3;reasons.push("فاقد ژن FecB");}
                  // سابقه تک‌قلو مکرر
                  const repros=(a.reproductions||[]).filter(r=>r.birthDate&&r.lambCount);
                  if(repros.length>=3){
                    const lastThree=repros.slice(-3);
                    const allSingle=lastThree.every(r=>(+r.lambCount)===1);
                    if(allSingle){score+=2;reasons.push("۳ شکم متوالی تک‌قلو");}
                  }
                  // درمان مکرر
                  const treats=(a.treatments||[]);
                  if(treats.length>=3){score+=2;reasons.push("بیش از ۳ بار درمان");}
                  else if(treats.length>=2){score+=1;reasons.push("۲ بار درمان");}
                  // عدم آبستنی طولانی
                  const lastBirth=repros.at(-1);
                  if(lastBirth&&!isPregnant(a)){
                    const d=daysFrom(lastBirth.birthDate);
                    if(d!==null&&Math.abs(d)>=180){score+=2;reasons.push(`${toP(Math.abs(d))} روز بدون آبستنی`);}
                  }
                  return{score,reasons};
                };

                // میش‌های آماده جفت‌گیری
                const readyEwes=ewes.filter(a=>!isPregnant(a));
                // میش‌های آبستن — پیشنهاد برای شکم بعدی
                const pregnantEwes=ewes.filter(a=>isPregnant(a));

                // بررسی نیاز به قوچ BB جدید
                const hasBBRam=rams.some(r=>r.genotype==="BB");
                const bpEwesCount=ewes.filter(e=>e.genotype==="B+").length;
                const needNewRam=!hasBBRam||(bpEwesCount>3&&rams.filter(r=>r.genotype==="BB").length<2);

                return(
                  <div>
                    {readyEwes.length>0&&(
                      <div style={{...cs,borderColor:C.accent+"55",marginTop:10}}>
                        <div style={{fontWeight:800,color:C.accent,marginBottom:10,fontSize:14}}>🧬 پیشنهاد بهینه جفت‌گیری — آماده</div>
                        {readyEwes.map((ewe,i)=>{
                          const best=bestRam(ewe);
                          if(!best)return null;
                          const scoreColor=best.score>=90?C.accent:best.score>=80?C.gold:C.warn;
                          return(
                            <div key={i} style={{marginBottom:12,padding:"10px",background:C.surface,borderRadius:10,border:`1px solid ${scoreColor}44`}}>
                              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                                <div>
                                  <span style={{fontWeight:800,color:C.text,fontSize:13}}>{ewe.name}</span>
                                  <Bdg l={ewe.genotype} c={gC(ewe.genotype)} sm/>
                                </div>
                                <span style={{fontSize:12,color:C.textDim}}>×</span>
                                <div style={{textAlign:"left"}}>
                                  <span style={{fontWeight:800,color:C.text,fontSize:13}}>{best.ram.name}</span>
                                  <Bdg l={best.ram.genotype} c={gC(best.ram.genotype)} sm/>
                                </div>
                              </div>
                              <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:6}}>
                                <Bdg l={`🐑 بره: ${best.lambGeno}`} c={scoreColor} sm/>
                                {best.eweMulti!==null&&<Bdg l={`📊 سابقه چندقلو: ${toP(best.eweMulti)}٪`} c={C.purple} sm/>}
                                {best.eweAvg!==null&&<Bdg l={`میانگین بره: ${toP(best.eweAvg)}`} c={C.info} sm/>}
                              </div>
                              <div style={{fontSize:11,color:C.textMid,fontStyle:"italic"}}>💡 {best.sciNote}</div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {pregnantEwes.length>0&&(
                      <div style={{...cs,borderColor:C.gold+"55",marginTop:10}}>
                        <div style={{fontWeight:800,color:C.gold,marginBottom:10,fontSize:14}}>🔮 برنامه جفت‌گیری شکم بعدی — آبستن‌ها</div>
                        {pregnantEwes.map((ewe,i)=>{
                          const best=bestRam(ewe);
                          if(!best)return null;
                          const currentRam=ewe.reproductions?.filter(r=>r.result==="در انتظار")?.at(-1)?.ramCode;
                          const currentRamObj=animals.find(a=>a.id===currentRam);
                          const scoreColor=best.score>=90?C.accent:best.score>=80?C.gold:C.warn;
                          const sameRam=currentRam===best.ram.id;
                          return(
                            <div key={i} style={{marginBottom:12,padding:"10px",background:C.surface,borderRadius:10,border:`1px solid ${C.gold}44`}}>
                              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                                <div>
                                  <span style={{fontWeight:800,color:C.text,fontSize:13}}>{ewe.name}</span>
                                  <Bdg l={ewe.genotype} c={gC(ewe.genotype)} sm/>
                                </div>
                                <Bdg l="🤰 آبستن" c={C.gold} sm/>
                              </div>
                              <div style={{fontSize:11,color:C.textDim,marginBottom:6}}>قوچ فعلی: {currentRamObj?.name||currentRam||"—"} ({currentRamObj?.genotype||"—"})</div>
                              <div style={{borderTop:`1px solid ${C.border}`,paddingTop:6,marginTop:6}}>
                                <div style={{fontSize:11,color:C.textMid,marginBottom:4}}>📋 پیشنهاد شکم بعدی:</div>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                                  <span style={{fontWeight:700,color:scoreColor}}>{best.ram.name} ({best.ram.genotype})</span>
                                  {sameRam&&<Bdg l="✅ همان قوچ" c={C.accent} sm/>}
                                </div>
                                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:4}}>
                                  <Bdg l={`🐑 بره: ${best.lambGeno}`} c={scoreColor} sm/>
                                  <Bdg l={`📊 چندقلو: ~${toP(best.multiPct)}٪`} c={C.purple} sm/>
                                </div>
                                <div style={{fontSize:11,color:C.textMid,fontStyle:"italic"}}>💡 {best.sciNote}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {(()=>{
                      const cullList=inGelle.filter(a=>a.type==="میش").map(a=>({...a,...cullScore(a)})).filter(a=>a.score>0).sort((a,b)=>b.score-a.score);
                      if(!cullList.length)return null;
                      return(
                        <div style={{...cs,borderColor:C.danger+"55",marginTop:10}}>
                          <div style={{fontWeight:800,color:C.danger,marginBottom:10,fontSize:14}}>⚠️ پیشنهاد بررسی و حذف دام</div>
                          {cullList.map((a,i)=>{
                            const urgency=a.score>=5?"حذف فوری":a.score>=3?"پیشنهاد حذف":"بررسی شود";
                            const urgColor=a.score>=5?C.danger:a.score>=3?C.warn:C.textDim;
                            return(
                              <div key={i} style={{marginBottom:10,padding:"10px",background:C.surface,borderRadius:10,border:`1px solid ${urgColor}44`}}>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                                  <div>
                                    <span style={{fontWeight:800,fontSize:13}}>{a.name}</span>
                                    <Bdg l={a.genotype} c={gC(a.genotype)} sm/>
                                    <Bdg l={`سن: ${calcAge(a)}`} c={C.textDim} sm/>
                                  </div>
                                  <Bdg l={urgency} c={urgColor}/>
                                </div>
                                <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                                  {a.reasons.map((r,j)=><Bdg key={j} l={r} c={urgColor} sm/>)}
                                </div>
                                {a.score>=3&&<div style={{fontSize:11,color:C.textMid,marginTop:6,fontStyle:"italic"}}>
                                  💡 حذف این دام فضا و منابع را برای دام با عملکرد بهتر آزاد می‌کند.
                                </div>}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })()}

                    {needNewRam&&(
                      <div style={{...cs,borderColor:C.warn+"55",marginTop:10,background:C.warn+"11"}}>
                        <div style={{fontWeight:800,color:C.warn,marginBottom:8,fontSize:13}}>⚠️ پیشنهاد خرید قوچ جدید</div>
                        <div style={{fontSize:12,color:C.textMid,lineHeight:1.8}}>
                          گله دارای <span style={{color:C.gold,fontWeight:700}}>{toP(bpEwesCount)} میش B+</span> است که برای بهینه‌سازی نتاج نیاز به <span style={{color:C.accent,fontWeight:700}}>قوچ BB اضافه</span> دارند.
                        </div>
                        <div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap"}}>
                          <Bdg l="قوچ BB: ۱۲۰-۱۵۰ میلیون تومان" c={C.accent} sm/>
                          <Bdg l="افزایش نرخ BB: +۲۵٪" c={C.purple} sm/>
                        </div>
                        <div style={{fontSize:11,color:C.textMid,marginTop:8,fontStyle:"italic"}}>
                          💡 با اضافه کردن یک قوچ BB، نرخ تولید بره BB از ۲۵٪ به ۵۰٪ افزایش می‌یابد.
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

            </div>
          );
        })()}
        {page==="detail"&&sel&&(()=>{
          const a=sel;
          const{c:tc,r:tr,p:tp}=calcFin(a);
          const tabs=[{id:"info",label:"مشخصات"},{id:"repro",label:"تولیدمثل"},{id:"vacc",label:"واکسن"},{id:"weight",label:"وزن"},{id:"treat",label:"درمان"},{id:"fin",label:"مالی"},{id:"note",label:"یادداشت"}];
          return(
            <div>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                <button onClick={()=>{setPage("list");}} style={{...btnG,padding:"6px 12px"}}>← بازگشت</button>
                <div>
                  <div style={{fontWeight:800,fontSize:16,color:C.accent}}>{a.name}</div>
                  <div style={{fontSize:11,color:C.textMid}}>{a.id} · {a.type} · {calcAge(a)}</div>
                </div>
              </div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
                <Bdg l={a.genotype} c={gC(a.genotype)}/>
                <Bdg l={a.type} c={C.info}/>
                {isPregnant(a)&&<Bdg l="🤰 آبستن" c={C.gold}/>}
                {a.hasFecBTest&&<Bdg l="🧬 FecB تأیید" c={C.accent}/>}
              </div>
              <div style={{display:"flex",gap:6,overflowX:"auto",marginBottom:10,paddingBottom:4}}>
                {tabs.map(t=>(<button key={t.id} onClick={()=>setTab(t.id)} style={{...btnG,padding:"5px 12px",background:tab===t.id?C.accent+"33":"",borderColor:tab===t.id?C.accent:C.border,color:tab===t.id?C.accent:C.text,whiteSpace:"nowrap"}}>{t.label}</button>))}
              </div>
              {tab==="info"&&(<div style={{...cs}}>{[["کد",a.id],["نوع",a.type],["ژنوتیپ",a.genotype],["سن",calcAge(a)],["وزن ورود",a.entryWeight?`${toP(a.entryWeight)} کیلو`:"—"],["تاریخ ورود",a.entryDate||"—"],["کد مادر",a.motherCode||"—"],["کد پدر",a.fatherCode||"—"]].map(([l,v])=>(<Lbl key={l} l={l} v={v}/>))}</div>)}
              {tab==="repro"&&(<div>{(a.reproductions||[]).length===0&&<div style={{...cs,color:C.textDim,textAlign:"center"}}>رکوردی ثبت نشده</div>}{(a.reproductions||[]).map((r,i)=>(<div key={i} style={{...cs}}><div style={{fontWeight:700,color:C.gold,marginBottom:6}}>شکم {toP(r.season)}</div>{(()=>{
                        const ramObj=animals.find(x=>x.id===r.ramCode);
                        const ramInfo=ramObj?`${ramObj.name} (${ramObj.genotype})`:(r.ramCode||"—");
                        return[["جفت‌گیری",r.matingDate],["قوچ (پدر)",ramInfo],["ژنوتیپ پدر",ramObj?.genotype||"—"],["زایمان",r.birthDate||"در انتظار"],["تعداد بره",r.lambCount?toP(r.lambCount):"—"],["نوع",r.birthType||"—"],["نتیجه",r.result],["یادداشت",r.notes||"—"]].map(([l,v])=>(<Lbl key={l} l={l} v={v} c={r.result==="در انتظار"?C.gold:l==="ژنوتیپ پدر"?gC(v):undefined}/>));
                      })()}{r.result==="در انتظار"&&r.expectedBirthDate&&(()=>{const dl=daysFrom(r.expectedBirthDate);return dl!==null&&(<div style={{marginTop:8,textAlign:"center"}}><Bdg l={dlText(dl)} c={dlColor(dl)}/></div>);})()}</div>))}</div>)}
              {tab==="vacc"&&(<div>{(a.vaccines||[]).length===0&&<div style={{...cs,color:C.textDim,textAlign:"center"}}>واکسنی ثبت نشده</div>}{(a.vaccines||[]).map((v,i)=>(<div key={i} style={{...cs}}><div style={{fontWeight:700,color:C.info,marginBottom:6}}>{v.name}</div>{[["آخرین تزریق",v.lastDate],["تکرار بعدی",v.nextDate||"—"],["دامپزشک",v.vet||"—"]].map(([l,val])=>(<Lbl key={l} l={l} v={val}/>))}{v.nextDate&&(()=>{const dl=daysFrom(v.nextDate);return dl!==null&&(<div style={{marginTop:6,textAlign:"center"}}><Bdg l={vaccText(dl)} c={vaccColor(dl)} sm/></div>);})()}</div>))}</div>)}
              {tab==="weight"&&(<div>
              {(a.weights||[]).length===0&&<div style={{...cs,color:C.textDim,textAlign:"center"}}>وزنی ثبت نشده</div>}
              {(a.weights||[]).map((w,i,arr)=>{
                const prev=arr[i-1];
                let adg=null;
                if(prev&&isDate(w.date)&&isDate(prev.date)){
                  const days=Math.abs(daysFrom(prev.date)-(daysFrom(w.date)||0));
                  if(days>0)adg=Math.round((w.weight-prev.weight)*1000/days);
                }
                return(<div key={i} style={{...cs}}>
                  {[["تاریخ",w.date],["وزن",`${toP(w.weight)} کیلو`],["وضعیت",w.physStatus||"—"]].map(([l,v])=>(<Lbl key={l} l={l} v={v}/>))}
                  {adg!==null&&<Lbl l="رشد روزانه (ADG)" v={`${adg>0?"+":""}${toP(adg)} گرم/روز`} c={adg>=200?C.accent:adg>=150?C.gold:C.warn}/>}
                </div>);
              })}
            </div>)}
              {tab==="treat"&&(<div>{(a.treatments||[]).length===0&&<div style={{...cs,color:C.textDim,textAlign:"center"}}>درمانی ثبت نشده</div>}{(a.treatments||[]).map((t,i)=>(<div key={i} style={{...cs}}>{[["تاریخ",t.date],["شرح",t.description],["دارو",t.drug||"—"],["دامپزشک",t.vet||"—"],["نتیجه",t.result||"—"]].map(([l,v])=>(<Lbl key={l} l={l} v={v}/>))}</div>))}</div>)}
              {tab==="fin"&&(<div style={{...cs}}><Lbl l="جمع هزینه‌ها" v={fmtRial(tc)} c={C.danger}/><Lbl l="جمع درآمدها" v={fmtRial(tr)} c={C.accent}/><Lbl l="سود/زیان" v={fmtRial(tp)} c={tp>=0?C.accent:C.danger}/>{(()=>{const roi=tc>0?Math.round(tp/tc*100):0;return (<Lbl l="بازگشت سرمایه (ROI)" v={`${roi>=0?"+":""}${toP(roi)}٪`} c={roi>=0?C.accent:C.danger}/>);})()}{(a.costs||[]).length>0&&<><div style={{fontWeight:700,color:C.danger,margin:"10px 0 6px"}}>هزینه‌ها</div>{(a.costs||[]).map((c,i)=>(<Lbl key={i} l={`${c.date} — ${c.category}`} v={fmtRial(+c.amount)} c={C.danger}/>))}</>}{(a.revenues||[]).length>0&&<><div style={{fontWeight:700,color:C.accent,margin:"10px 0 6px"}}>درآمدها</div>{(a.revenues||[]).map((r,i)=>(<Lbl key={i} l={`${r.date} — ${r.category}`} v={fmtRial(+r.amount)} c={C.accent}/>))}</>}</div>)}
              {tab==="note"&&(<div>{(a.quickNotes||[]).length===0&&<div style={{...cs,color:C.textDim,textAlign:"center"}}>یادداشتی ثبت نشده</div>}{(a.quickNotes||[]).map((n,i)=>(<div key={i} style={{...cs}}><div style={{fontSize:11,color:C.textDim,marginBottom:4}}>{n.date}</div><div style={{fontSize:13,lineHeight:1.6}}>{n.text}</div></div>))}</div>)}
            </div>
          );
        })()}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:C.surface,borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-around",padding:"8px 0",zIndex:100}}>
        {navItems.map(n=>(<button key={n.id} onClick={()=>setPage(n.id)} style={{background:"none",border:"none",color:page===n.id?C.accent:C.textDim,cursor:"pointer",fontFamily:"inherit",padding:"4px 8px",fontSize:10,fontWeight:page===n.id?700:400,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}><span style={{fontSize:20}}>{n.icon}</span>{n.label}</button>))}
      </div>
    </div>
  );
}
