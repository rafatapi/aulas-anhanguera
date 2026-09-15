const courses=[
 {id:'mat',name:'Lógica e Matemática',full:'Lógica e Matemática Computacional',day:'Terça-feira',room:'Lab 2',time:'19h00–20h40 · 21h00–21h50',students:15,approval:'6.000 / 12.000',exam:'mín. 1.500 / 6.000',color:'#ef6c00',icon:'assets/math.svg'},
 {id:'py',name:'Python',full:'Linguagem de Programação',day:'Quarta-feira',room:'B-39',time:'19h00–20h40 · 21h00–21h50',students:14,approval:'6.000 / 12.000',exam:'mín. 1.500 / 6.000',color:'#3776ab',icon:'assets/python.svg'},
 {id:'js',name:'JavaScript',full:'Desenvolvimento em JavaScript',day:'Quinta-feira',room:'B-28',time:'21h00–22h40',students:19,approval:'6.000 / 12.000',exam:'mín. 4.000 / 6.000',color:'#b38800',icon:'assets/javascript.svg'}
];

const studentGroups={
 mat:[
  {id:'mat-1',label:'Lista 1',names:['Gabriel R. P.']},
  {id:'mat-2',label:'Lista 2',names:['Arlindo F.','Caique B.','Gabriel V.','Joao P. O.','Kelly S.','Khaled F.','Murillo S.','Pedro H. P.','Rafael M.']},
  {id:'mat-3',label:'Lista 3',names:['Arthur G.','Gabriel R. S.','Gustavo F.','Rafaela O.','Romair G.']}
 ],
 py:[
  {id:'py-1',label:'Lista 1',names:['Caique B.','Gabriel V.','Joao P. O.','Kelly S.','Khaled F.','Marilton C.','Murillo S.','Rafael M.']},
  {id:'py-2',label:'Lista 2',names:['Gabriel R. P.']},
  {id:'py-3',label:'Lista 3',names:['Arthur G.','Gabriel R. S.','Gustavo F.','Rafaela O.','Romair G.']}
 ],
 js:[
  {id:'js-1',label:'Lista 1',names:['Beatriz S.','Cassio S.','Dawens F.','Felipe N.','Franciny A.','Guilherme O.','Isabelly C.','Ittalo L.','Jeferson L.','Jessica Y.','Joao V. O.','Juvelino B.','Murillo C.','Pedro G. P.','Samuel S.','Tony S.']},
  {id:'js-2',label:'Lista 2',names:['Gabriel R. P.']},
  {id:'js-3',label:'Lista 3',names:['Felipe G.','Lucas F.']}
 ]
};

const rawLessons={
 mat:[['2026-08-11','Início das aulas','Teoria dos Conjuntos'],['2026-08-18','Aula','Álgebra dos Conjuntos'],['2026-08-25','Aula','Proposição Simples e Composta'],['2026-09-01','Férias do professor','Atividade 1'],['2026-09-08','Férias do professor','Atividade 2'],['2026-09-15','Aula','Conectivos e Tabela Verdade'],['2026-09-22','Aula','Estrutura de Decisão / Lógica Proposicional'],['2026-09-29','Avaliação 1','Avaliação'],['2026-10-06','Aula','Diagrama de Bloco'],['2026-10-13','Aula','Diagrama de Bloco — Variáveis'],['2026-10-20','Aula','Diagrama de Bloco — Decisão'],['2026-10-27','Aula','Diagrama de Bloco — Repetição'],['2026-11-17','Revisão','Revisão para avaliação'],['2026-11-24','Avaliação 2','Avaliação'],['2026-12-08','2ª Chamada','Período de 07 a 09/12'],['2026-12-15','Exame Final','Período de 14 a 15/12']],
 py:[['2026-08-12','Início das aulas','Introdução ao Python'],['2026-08-19','Aula','Estruturas Condicionais'],['2026-08-26','Aula','Estruturas de Repetição'],['2026-09-02','Férias do professor','Atividade 1'],['2026-09-09','Férias do professor','Atividade 2'],['2026-09-16','Aula','Funções'],['2026-09-23','Aula','Listas, Tuplas, Array NumPy, Mapping e Set'],['2026-09-30','Avaliação 1','Avaliação'],['2026-10-07','Aula','Classe e Herança'],['2026-10-14','Aula','Módulos'],['2026-10-21','Aula','Banco de Dados'],['2026-10-28','Aula','Pandas'],['2026-11-04','Aula','Frontend / Backend'],['2026-11-18','Revisão','Revisão para avaliação'],['2026-11-25','Avaliação 2','Avaliação'],['2026-12-08','2ª Chamada','Período de 07 a 09/12'],['2026-12-15','Exame Final','Período de 14 a 15/12']],
 js:[['2026-08-13','Início das aulas','Introdução ao JavaScript; tipos de dados; variáveis, constantes e operadores'],['2026-08-20','Aula 2','Operadores relacionais e lógicos; if, else if e else'],['2026-08-27','Aula 3','Estruturas de repetição for, while e do...while'],['2026-09-03','Férias do professor','Atividade 1 — exercícios de lógica'],['2026-09-10','Férias do professor','Atividade 2 — pequeno programa'],['2026-09-17','Aula 4','Funções, parâmetros, retorno, escopo e arrow functions'],['2026-09-24','Aula 5','Arrays e objetos'],['2026-10-01','Avaliação 1','Fundamentos de JavaScript'],['2026-10-08','Aula 6','Introdução ao DOM'],['2026-10-15','Feriado','Sem aula'],['2026-10-22','Aula 7','Programação orientada a eventos'],['2026-10-29','Aula 8','Projeto com HTML, CSS, DOM, eventos, arrays e objetos'],['2026-11-05','Aula 9','APIs, JSON, fetch e programação assíncrona'],['2026-11-12','Aula 10','Frameworks, componentes e React'],['2026-11-19','Revisão','Fundamentos, DOM, eventos e APIs'],['2026-11-26','Avaliação 2','Avaliação prática'],['2026-12-08','2ª Chamada','Período de 07 a 09/12'],['2026-12-15','Exame Final','Período de 14 a 15/12']]
};
const lessons=Object.entries(rawLessons).flatMap(([course,items])=>items.map((item,i)=>({id:`${course}-${i}`,course,date:item[0],type:item[1],topic:item[2]}))).sort((a,b)=>a.date.localeCompare(b.date));
const byId=id=>courses.find(c=>c.id===id);
const dateObj=value=>new Date(`${value}T12:00:00`);
const fmtDate=value=>dateObj(value).toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'});
const stored=key=>{try{return JSON.parse(localStorage.getItem(key))||{}}catch{return{}}};
let lessonState=stored('faculdade-lessons-v1');

document.querySelectorAll('.tab').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.tab,.section').forEach(el=>el.classList.remove('active'));
 button.classList.add('active');document.getElementById(button.dataset.section).classList.add('active');scrollTo({top:0,behavior:'smooth'});
}));

function renderHome(){
 const now=new Date();now.setHours(0,0,0,0);const next=lessons.find(l=>dateObj(l.date)>=now&&l.type!=='Feriado')||lessons[lessons.length-1];const c=byId(next.course);
 document.getElementById('next-class').innerHTML=`<small>PRÓXIMA AULA · ${fmtDate(next.date)}</small><div class="next-layout"><div class="next-content"><h2>${c.name}</h2><p>${next.topic}</p><div class="next-meta"><span>◷ ${c.time}</span></div></div><div class="next-room"><small>SALA</small><strong>${c.room}</strong></div></div>`;
 document.getElementById('course-cards').innerHTML=courses.map(c=>`<article class="course-card" style="--course:${c.color}"><div class="course-top"><span class="course-icon" aria-hidden="true"><img src="${c.icon}" alt=""></span><div><h3>${c.name}</h3><p>${c.day} · ${c.time}</p></div><span>Sala ${c.room}</span></div><div class="course-details"><div>Aprovação<strong>${c.approval}</strong></div><div>Prova<strong>${c.exam}</strong></div><div>Turma<strong>${c.students} alunos</strong></div><div>Período<strong>2026.2</strong></div></div></article>`).join('');
}

let calendarFilter='all';
function renderFilters(){document.getElementById('calendar-filters').innerHTML=[['all','Todas'],...courses.map(c=>[c.id,c.name])].map(([id,label])=>`<button class="filter ${calendarFilter===id?'active':''}" data-filter="${id}">${label}</button>`).join('')}
function renderCalendar(){
 renderFilters();const list=lessons.filter(l=>calendarFilter==='all'||l.course===calendarFilter);
 document.getElementById('calendar-list').innerHTML=list.map(l=>{const c=byId(l.course),d=dateObj(l.date),state=lessonState[l.id]||{};return `<article class="lesson ${state.done?'done':''}" style="--course:${c.color}"><div class="lesson-date"><strong>${String(d.getDate()).padStart(2,'0')}</strong><span>${d.toLocaleDateString('pt-BR',{month:'short'}).replace('.','')}</span></div><div class="lesson-body"><small>${c.name} · ${l.type}</small><h3>${l.topic}</h3><p>Sala ${c.room} · ${c.time}</p></div><label class="lesson-check"><input type="checkbox" data-lesson-check="${l.id}" ${state.done?'checked':''} aria-label="Marcar aula concluída"></label><div class="lesson-note"><textarea data-lesson-note="${l.id}" placeholder="Anotação desta aula…">${state.note||''}</textarea></div></article>`}).join('');updateProgress();
 document.querySelectorAll('#calendar-list .lesson').forEach(card=>{const text=card.querySelector('small').textContent;if(/férias|feriado/i.test(text))card.classList.add('lesson-holiday');else if(/avaliação|chamada|exame/i.test(text))card.classList.add('lesson-exam');else if(/revisão/i.test(text))card.classList.add('lesson-review')});
}
function saveLessonState(){localStorage.setItem('faculdade-lessons-v1',JSON.stringify(lessonState))}
function updateProgress(){const done=lessons.filter(l=>lessonState[l.id]?.done).length,pct=Math.round(done/lessons.length*100);document.getElementById('lesson-progress').textContent=`${done} de ${lessons.length} aulas concluídas`;document.getElementById('progress-pct').textContent=`${pct}%`;document.getElementById('progress-fill').style.width=`${pct}%`}
document.getElementById('calendar-filters').addEventListener('click',e=>{const button=e.target.closest('[data-filter]');if(button){calendarFilter=button.dataset.filter;renderCalendar()}});
document.getElementById('calendar-list').addEventListener('change',e=>{if(e.target.dataset.lessonCheck){const id=e.target.dataset.lessonCheck;lessonState[id]={...(lessonState[id]||{}),done:e.target.checked};saveLessonState();renderCalendar()}});
document.getElementById('calendar-list').addEventListener('input',e=>{if(e.target.dataset.lessonNote){const id=e.target.dataset.lessonNote;lessonState[id]={...(lessonState[id]||{}),note:e.target.value};saveLessonState()}});

// ── CHAMADA OFFLINE ──
const ATTENDANCE_KEY='faculdade-attendance-v1';
let attendance=stored(ATTENDANCE_KEY);
const attendanceCourse=document.getElementById('attendance-course');
const attendanceDate=document.getElementById('attendance-date');
attendanceCourse.innerHTML=courses.map(c=>`<option value="${c.id}">${c.name} · Sala ${c.room}</option>`).join('');
attendanceDate.value=new Date().toLocaleDateString('sv-SE');
const weekdayCourse={2:'mat',3:'py',4:'js'}[new Date().getDay()];if(weekdayCourse)attendanceCourse.value=weekdayCourse;
const currentGroups=()=>studentGroups[attendanceCourse.value];
const attendanceKey=group=>`${attendanceDate.value}|${group.id}`;
const attendanceAliases={
 'mat-1':{'Gabriel R. P.':'Gabriel R.'},
 'mat-2':{'Joao P. O.':'Joao O.','Pedro H. P.':'Pedro P.'},
 'mat-3':{'Gabriel R. S.':'Gabriel R.'},
 'py-1':{'Joao P. O.':'Joao O.'},
 'py-2':{'Gabriel R. P.':'Gabriel R.'},
 'py-3':{'Gabriel R. S.':'Gabriel R.'},
 'js-1':{'Joao V. O.':'Joao O.','Pedro G. P.':'Pedro P.'},
 'js-2':{'Gabriel R. P.':'Gabriel R.'}
};
function attendanceRecord(group){const key=attendanceKey(group),aliases=attendanceAliases[group.id]||{};let changed=false;if(!attendance[key]){const legacy=attendance[`${attendanceDate.value}|${attendanceCourse.value}`]||{};attendance[key]={};changed=true;if(!['mat-3','py-3'].includes(group.id))group.names.forEach(name=>{const oldName=aliases[name]||name;if(legacy[oldName])attendance[key][name]=legacy[oldName]});if(group.id==='js-2'&&legacy['Gabriel P.'])attendance[key]['Gabriel R. P.']=legacy['Gabriel P.']}const record=attendance[key];Object.entries(aliases).forEach(([name,oldName])=>{if(record[oldName]!==undefined){if(record[name]===undefined)record[name]=record[oldName];delete record[oldName];changed=true}});if(changed)saveAttendance();return record}
function saveAttendance(){localStorage.setItem(ATTENDANCE_KEY,JSON.stringify(attendance))}
function renderAttendance(){let present=0,absent=0,total=0;document.getElementById('attendance-list').innerHTML=currentGroups().map(group=>{const record=attendanceRecord(group);present+=group.names.filter(name=>record[name]==='P').length;absent+=group.names.filter(name=>record[name]==='F').length;total+=group.names.length;return `<div class="attendance-group-title"><strong>${group.label}</strong><span>${group.names.length} alunos</span></div>${group.names.map((name,index)=>`<div class="attendance-student"><b>${index+1}</b><strong>${name}</strong><div><button class="attendance-status present ${record[name]==='P'?'active':''}" data-attendance-group="${group.id}" data-attendance-name="${name}" data-status="P">Presente</button><button class="attendance-status absent ${record[name]==='F'?'active':''}" data-attendance-group="${group.id}" data-attendance-name="${name}" data-status="F">Falta</button></div></div>`).join('')}`}).join('');document.getElementById('attendance-summary').innerHTML=`<strong>${present} presentes</strong><span>${absent} faltas · ${total-present-absent} sem marcar</span>`}
attendanceCourse.addEventListener('change',renderAttendance);attendanceDate.addEventListener('change',renderAttendance);
document.getElementById('attendance-list').addEventListener('click',e=>{const button=e.target.closest('[data-attendance-name]');if(!button)return;const group=currentGroups().find(item=>item.id===button.dataset.attendanceGroup),record=attendanceRecord(group),name=button.dataset.attendanceName;record[name]=record[name]===button.dataset.status?'':button.dataset.status;saveAttendance();renderAttendance()});
document.getElementById('attendance-all').addEventListener('click',()=>{currentGroups().forEach(group=>{const record=attendanceRecord(group);group.names.forEach(name=>record[name]='P')});saveAttendance();renderAttendance()});
document.getElementById('attendance-clear').addEventListener('click',()=>{currentGroups().forEach(group=>attendance[attendanceKey(group)]={});saveAttendance();renderAttendance()});
function generateAttendanceText(){const c=byId(attendanceCourse.value),date=attendanceDate.value?new Date(`${attendanceDate.value}T12:00:00`).toLocaleDateString('pt-BR'):'';const lines=[`CHAMADA — ${c.name}`,`Data: ${date} · Sala ${c.room}`];currentGroups().forEach(group=>{const record=attendanceRecord(group),present=group.names.filter(name=>record[name]==='P'),absent=group.names.filter(name=>record[name]==='F'),pending=group.names.filter(name=>!record[name]);lines.push('',`${group.label} (${group.names.length} alunos)`,`Presentes (${present.length}): ${present.join(', ')||'nenhum'}`,`Faltas (${absent.length}): ${absent.join(', ')||'nenhuma'}`);if(pending.length)lines.push(`Sem marcação (${pending.length}): ${pending.join(', ')}`)});const text=lines.join('\n');document.getElementById('attendance-text').value=text;return text}
document.getElementById('attendance-generate').addEventListener('click',generateAttendanceText);
document.getElementById('attendance-copy').addEventListener('click',async()=>{const text=generateAttendanceText();try{await navigator.clipboard.writeText(text);toast('Chamada copiada')}catch{document.getElementById('attendance-text').select();document.execCommand('copy');toast('Chamada copiada')}});
document.getElementById('attendance-download').addEventListener('click',()=>{const text=generateAttendanceText(),link=document.createElement('a');link.href=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));link.download=`chamada-${attendanceCourse.value}-${attendanceDate.value}.txt`;link.click();URL.revokeObjectURL(link.href)});
renderAttendance();

const PRIVATE_KEY='faculdade-private-v1';const privateData=stored(PRIVATE_KEY);document.getElementById('private-email').value=privateData.email||'';document.getElementById('private-wifi').value=privateData.wifi||'';
document.getElementById('private-form').addEventListener('submit',e=>{e.preventDefault();localStorage.setItem(PRIVATE_KEY,JSON.stringify({email:document.getElementById('private-email').value,wifi:document.getElementById('private-wifi').value}));document.getElementById('save-status').textContent='Salvo somente neste aparelho';toast('Informações salvas')});
document.getElementById('show-wifi').addEventListener('change',e=>document.getElementById('private-wifi').type=e.target.checked?'text':'password');
document.getElementById('reset-data').addEventListener('click',()=>{if(confirm('Limpar todas as anotações, chamadas, marcações e informações privadas deste aparelho?')){localStorage.removeItem('faculdade-lessons-v1');localStorage.removeItem(ATTENDANCE_KEY);localStorage.removeItem(PRIVATE_KEY);location.reload()}});
function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1800)}
renderHome();renderCalendar();
if('serviceWorker'in navigator)navigator.serviceWorker.register('./service-worker.js').then(registration=>registration.update());
