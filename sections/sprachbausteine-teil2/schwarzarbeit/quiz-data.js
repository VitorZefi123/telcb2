// ── Sprachbausteine Teil 2 › SCHWARZARBEIT KANN TEUER WERDEN – Quiz Data ────────────────────
function buildText(activeGap) {
  function gap(n) {
    if (n === activeGap) return `<span style="display:inline-block;background:#fef08a;border:2px solid #eab308;border-radius:4px;padding:0 8px;font-weight:bold;font-size:1.05em;min-width:60px;text-align:center">___?___</span>`;
    return `<span style="display:inline-block;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:4px;padding:0 6px;font-size:0.9em;color:#64748b;min-width:40px;text-align:center">_${n}_</span>`;
  }
  return `<div style="font-family:serif;line-height:1.9;font-size:1em">
<p style="text-align:center;font-weight:bold">Schwarzarbeit kann teuer werden</p>
<p>Vorsicht ist bei Aufträgen an Schwarzarbeiter geboten. Denn schnell zahlt der Kunde drauf, ${gap(31)} - wie durch das illegale Arbeitsverhältnis erhofft - Geld zu sparen.</p>
<p>Rund ums Haus ist nicht ${gap(32)} Gelegenheit so günstig, wie sie anfangs scheint: Schwarzarbeit etwa ist nicht nur verboten, sondern es gibt auch ein finanzielles Argument ${gap(33)} illegale Arbeiter. „Abgesehen ${gap(34)}, dass es strafbar ist, Schwarzarbeiter zu beschäftigen, nimmt der Auftraggeber handfeste steuerliche Nachteile in Kauf", warnt Dirk Witte, Steuerberater aus Wildeshausen.</p>
<p>„Das Finanzamt ${gap(35)} eine ordentliche Rechnung und einen Überweisungsbeleg sehen". Barzahler können daher nichts von der Steuer absetzen. Denn mängelfreie Bauten ${gap(36)} eher die Ausnahme.</p>
<p>Ebenso dürften Verbraucher leer ${gap(37)}, wenn beim Bauen etwas zu Bruch geht. Ein ordentlicher Handwerker hat für ${gap(38)} Fälle eine Haftpflichtversicherung.</p>
<p>Die Folgen von Schwarzarbeit lassen sich mit dem Dominoprinzip beschreiben: Fliegt die illegale Beschäftigung auf, dann ${gap(39)} es gleich mehrere Behörden mit. Dann braucht der Auftraggeber ${gap(40)} einen Anwalt. Und der kostet natürlich auch wieder Geld.</p>
<hr style="margin:1.2em 0;border-color:#cbd5e1"/>
<p style="font-size:0.78rem;font-weight:700;color:#94a3b8;letter-spacing:0.08em;margin-bottom:10px;font-family:sans-serif">WÖRTERKASTEN</p>
<div style="display:flex;flex-wrap:wrap;gap:8px">
  ${['A·ALLES','B·ANSTATT','C·AUSGEHEN','D·BEKOMMEN','E·BILDEN','F·DAGEGEN','G·DAVON','H·GEGEN','I·HÖCHSTENS','J·JEDE','K·MEISTENS','L·SOLCHE','M·UM','N·WILL','O·WÜNSCHT'].map(w=>{const[letter,word]=w.split('·');return`<span style="display:inline-flex;align-items:center;gap:5px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:4px 12px;font-family:sans-serif;font-size:0.82rem;white-space:nowrap"><span style="background:#6366f1;color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:0.75rem;flex-shrink:0">${letter}</span><span style="color:#334155;font-weight:500">${word}</span></span>`;}).join('')}
</div></div>`;
}
const OPTIONS=[{letter:'A',text:'ALLES'},{letter:'B',text:'ANSTATT'},{letter:'C',text:'AUSGEHEN'},{letter:'D',text:'BEKOMMEN'},{letter:'E',text:'BILDEN'},{letter:'F',text:'DAGEGEN'},{letter:'G',text:'DAVON'},{letter:'H',text:'GEGEN'},{letter:'I',text:'HÖCHSTENS'},{letter:'J',text:'JEDE'},{letter:'K',text:'MEISTENS'},{letter:'L',text:'SOLCHE'},{letter:'M',text:'UM'},{letter:'N',text:'WILL'},{letter:'O',text:'WÜNSCHT'}];
const QUIZ_DATA={id:'sprachbausteine-teil2--schwarzarbeit',title:'SCHWARZARBEIT KANN TEUER WERDEN – Sprachbausteine Teil 2',subtitle:'Wählen Sie für jede Lücke (gelb markiert) das passende Wort aus dem Kasten (A–O). Jedes Wort kann nur einmal verwendet werden.',questionLabel:'Welches Wort aus dem Kasten passt in die markierte Lücke?',questions:[
{id:31,text:buildText(31),options:OPTIONS,correct:'B',explanation:'„anstatt - wie erhofft - Geld zu sparen" – B ANSTATT (instead of) leitet eine Infinitivkonstruktion ein: anstatt zu sparen = instead of saving.'},
{id:32,text:buildText(32),options:OPTIONS,correct:'J',explanation:'„nicht jede Gelegenheit so günstig, wie sie anfangs scheint" – J JEDE (every): nicht jede Gelegenheit (not every opportunity).'},
{id:33,text:buildText(33),options:OPTIONS,correct:'H',explanation:'„ein finanzielles Argument gegen illegale Arbeiter" – H GEGEN (against): Argument gegen = argument against.'},
{id:34,text:buildText(34),options:OPTIONS,correct:'G',explanation:'„Abgesehen davon, dass es strafbar ist" – G DAVON passt zur festen Wendung „abgesehen davon, dass" (apart from the fact that).'},
{id:35,text:buildText(35),options:OPTIONS,correct:'N',explanation:'„Das Finanzamt will eine ordentliche Rechnung sehen." – N WILL (wants to): das Finanzamt will (the tax office wants to).'},
{id:36,text:buildText(36),options:OPTIONS,correct:'E',explanation:'„mängelfreie Bauten bilden eher die Ausnahme." – E BILDEN (form/constitute): bilden die Ausnahme (constitute the exception).'},
{id:37,text:buildText(37),options:OPTIONS,correct:'C',explanation:'„dürften Verbraucher leer ausgehen" – C AUSGEHEN passt zur festen Wendung „leer ausgehen" (to come away empty-handed).'},
{id:38,text:buildText(38),options:OPTIONS,correct:'L',explanation:'„Ein ordentlicher Handwerker hat für solche Fälle eine Haftpflichtversicherung." – L SOLCHE (such): für solche Fälle (for such cases).'},
{id:39,text:buildText(39),options:OPTIONS,correct:'D',explanation:'„dann bekommen es gleich mehrere Behörden mit." – D BEKOMMEN passt zur Wendung „etwas mitbekommen" (to become aware of something / to get involved).'},
{id:40,text:buildText(40),options:OPTIONS,correct:'K',explanation:'„Dann braucht der Auftraggeber meistens einen Anwalt." – K MEISTENS (usually/mostly): meistens braucht man einen Anwalt.'},
]};
