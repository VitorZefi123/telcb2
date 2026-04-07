// ── Leseverstehen Teil 3 › AUTOS – Quiz Data ──────────────────────────────

const OPTIONS_AUTOS = [
  { letter: 'A', text: 'Workshop: Alles rund ums Thema Geld' },
  { letter: 'B', text: 'Die Geldschule (Buch)' },
  { letter: 'C', text: 'Energiesparen im Haushalt (Vortrag)' },
  { letter: 'D', text: 'Energiesparen leicht gemacht' },
  { letter: 'E', text: 'Ohne Auto unterwegs (Buch)' },
  { letter: 'F', text: 'Technikmuseum Walldorf' },
  { letter: 'G', text: 'Mobilität in der Stadt von morgen (Vortrag)' },
  { letter: 'H', text: 'Ausbildung: Versicherungskaufmann/-frau' },
  { letter: 'I', text: 'Ferrari-Fahrtraining' },
  { letter: 'J', text: 'Carsharing – auto-to-go' },
  { letter: 'K', text: 'Strommessgerät Smart-Check 365' },
  { letter: 'L', text: 'Verbraucherkredit Vergobank' },
  { letter: 'X', text: 'Kein Infotext passt' },
];

const QUIZ_DATA = {
  id:            'leseverstehen-teil3--autos',
  title:         'AUTOS – Leseverstehen Teil 3',
  subtitle:      'Lesen Sie die Situationen und die Infotexte A–L. Welcher Infotext passt zu welcher Situation?',
  questionLabel: 'Welcher Infotext passt zu dieser Situation?',

  infotexts: [
    {
      letter: 'A',
      title:  'Workshop: Alles rund ums Thema Geld',
      content: 'Möglichkeiten der Budgetplanung · Einnahmen und Ausgaben erfassen und analysieren · Einsparpotenziale erkennen · Schuldenfallen vermeiden · Finanzieller Blick in die Zukunft · Finanzentscheidungen planen und umsetzen · Sparen und anlegen · Kreditentscheidungen treffen · Schulden aktiv angehen. Referent: Diplom-Ökonom Martin Herges. Uhrzeit: jeweils 10 bis 15 Uhr. Teilnahmegebühr: 50 €. Akademie der DPV-Bank, Gustavstr. 12, 33659 Bielefeld.',
    },
    {
      letter: 'B',
      title:  'Die Geldschule: Sparen – Steuern – Altersvorsorge',
      content: 'Nehmen Sie Ihre Finanzen selbst in die Hand: Ob Sie für Ihre Rente vorsorgen wollen oder einfach mehr sparen wollen – das neue Buch des Finanzexperten Kai Mueggenburg liefert Ihnen wertvolle Informationen. Es stellt Ihnen ein umfangreiches Basiswissen zum Thema Geld zur Verfügung. Außerdem bekommen Sie Tipps, wie Sie sich Ihre eigene Spar- und Investitionsstrategie erarbeiten können. Taschenbuch, 14,80 €.',
    },
    {
      letter: 'C',
      title:  'Energiesparen im Haushalt – Vortrag',
      content: 'Keine Frage: Die Energiekosten werden weiter steigen und das Haushaltsbudget strapazieren. Erfahren Sie, wie Sie Ihren Energieverbrauch senken können. Energieberater Jörg Schneid gibt Ihnen Tipps und steht für Fragen zur Verfügung. In dem Vortrag werden Grundlagen zum Stromsparen sowie zum richtigen Heizen und Lüften angesprochen. Eine kostenlose Veranstaltung in Kooperation mit der Verbraucherzentrale. Freitag, 18.09, 18:30 bis 20 Uhr, Volkshochschule Rendsburg.',
    },
    {
      letter: 'D',
      title:  'Energiesparen leicht gemacht',
      content: 'Hohe Strompreise sind für viele eine Belastung. Wenn ein neues Gerät angeschafft werden muss, sollte man vor allem auf die Energiekosten achten. Mit sparsamen Wäschetrocknern, Geschirrspülern etc. kann man die Kosten senken. Doch wie findet man die passenden Geräte? Wir haben die Besten für Sie ausgewählt: Auf unserer Website finden Sie eine Liste und weiterführende Tipps. Dort können Sie kostenlos nach Geräten mit bestimmter Bauart, Größe oder Effizienz suchen. www.tech-check.net',
    },
    {
      letter: 'E',
      title:  'Entspannt unterwegs – ohne Auto',
      content: 'Ohne Auto lebt man einfacher und glücklicher. Und zwar nicht nur als Großstadtsingel, sondern auch als Familie auf dem Land. Davon ist Susanne Sonnental jedenfalls überzeugt. Seit fünf Jahren lebt sie mit ihrer Familie auf dem Dorf und zwar ohne Auto. In dem Buch erzählt sie, wie ihr Alltag aussieht und liefert viele nützliche Informationen. Sie zeigt jede Menge leicht umsetzbare Alternativen. Taschenbuch, 12,90 €.',
    },
    {
      letter: 'F',
      title:  'Technikmuseum Walldorf',
      content: 'Begeben Sie sich auf eine Zeitreise und entdecken Sie die Meilensteine der Technikgeschichte. Unsere Hauptattraktionen sind die beiden Überschallflugzeuge Concorde und Tupolow Tu-144. Außerdem: weitere Flugzeuge, Oldtimer, historische Luxusautomobile und Rennwägen, Motorräder, nostalgische Rennräder und Dampfloks. Mehr als 3.000 Exponate auf einer Fläche von über 50.000 m². Für Kinder: Spielplatz, Fahrsimulatoren und Spieleparadies mit fahrbaren Mini-Autos. Öffnungszeiten: täglich von 9 bis 18 Uhr. Technikmuseum Walldorf, Schwetzinger Str. 23, 69190 Walldorf.',
    },
    {
      letter: 'G',
      title:  'Mobilität in der Stadt von morgen',
      content: 'Erstmals in der Weltgeschichte leben mehr Menschen in Städten als auf dem Land. Welche Auswirkungen wird dieser Trend auf die Mobilität der Zukunft haben? Und welche Rolle wird das Auto dabei spielen? Über diese Fragen spricht Mobilitätsexperte Dr. Hans-Peter Grafemeyer: Fußgängerzonen, Fahrradfahren, öffentlicher Personennahverkehr, Bahn, Carsharing-Modelle – dies alles wird den Verkehr von morgen bestimmen. Der Vortrag bietet Informationen über innovative Technologien und neue Mobilitätsformen. Mittwoch, 08.09, 19 Uhr, Eintritt frei, Bürgerhaus Michelstadt.',
    },
    {
      letter: 'H',
      title:  'Ausbildung: Versicherungskaufmann/-frau',
      content: 'Auf Versicherungen kann niemand verzichten. Die Versicherungsbranche bietet Arbeitsplätze mit Zukunft und hervorragende Jobaussichten! Wir suchen eine/n Auszubildende/n zum Versicherungskaufmann/zur Versicherungskauffrau. Sind Sie aufgeschlossen gegenüber Kunden und gut im Umgang mit dem Computer? Sind Sie fit in Mathe und bringen Verständnis für Zahlen mit? Dann bewerben Sie sich bei uns! Liga-Versicherung Deutschland AG, www.liga-versicherung.de/auszubildende',
    },
    {
      letter: 'I',
      title:  'Ferrari-Fahrtraining',
      content: 'Sie interessieren sich für Rennwägen und würden gerne selbst einmal mit Vollgas fahren? Unser Ferrari-Fahrtraining auf der Rollbahn eines Flugplatzes macht dies möglich. Vor dem Fahrtraining erläutern wir Ihnen die Sicherheitsregeln und geben Ihnen Hinweise für die Fahrt. Danach können Sie sich direkt ans Steuer setzen. Fahren Sie ein Traumauto ohne Geschwindigkeitsbegrenzung! Mindestalter 18 Jahre, gültiger Führerschein der Klasse B. www.fahrtraining-flugplatz.net',
    },
    {
      letter: 'J',
      title:  'Carsharing – auto-to-go',
      content: 'Unkompliziert und spontan unterwegs sein? Wir haben die Lösung für Sie: Mieten Sie einfach ein Fahrzeug in Ihrer Nähe. Ob Kleinwagen, Kombi, Cabrio, E-Auto, Bus oder Transporter – wir haben die größte Auswahl an Carsharing-Autos in Nürnberg. Ihre Vorteile: günstiger als ein eigenes Fahrzeug · rund um die Uhr verfügbar · Kraftstoff, Wartung und Vollkasko inklusive · keine Grundkosten oder Mindestlaufzeit. Registrieren Sie sich einfach über unsere Smartphone-App. www.auto-to-go.net',
    },
    {
      letter: 'K',
      title:  'Strommessgerät Smart-Check 365',
      content: 'Wollen Sie wissen, wie viel Strom Ihr Kühlschrank, Wasserkocher und Staubsauger benötigen? Haben Sie Stromfresser in Ihrer Wohnung, die die Kosten hochtreiben? Das Strommessgerät Smart-Check 365 findet sie. Smart-Check 365 misst zuverlässig den Verbrauch Ihrer Geräte und berechnet automatisch die Stromkosten. Auf dem hochauflösenden LCD-Display lassen sich alle Ergebnisse leicht ablesen. 100 Prozent Zufriedenheitsgarantie! Preis: 17,99 €.',
    },
    {
      letter: 'L',
      title:  'Verbraucherkredit Vergobank',
      content: 'Eine neue Küche, eine berufliche Weiterbildung oder ein modernes Heimkino: Wenn keine Rücklagen da sind, hilft ein Verbraucherkredit der Vergobank weiter. Finanzieren Sie Ihre Wünsche einfach in festen monatlichen Raten. Flexibel von 1.000 € bis 50.000 €, schnell und sicher. Ihre Vorteile: keine Anzahlung · günstige Zinssätze · individuelle Laufzeit, schon ab 50 € im Monat · schnelle Online-Kreditentscheidung. Tel: 0800 772930304.',
    },
    {
      letter: 'X',
      title:  'Kein passender Infotext',
      content: '',
    },
  ],

  questions: [
    {
      id: 11,
      text: '<strong>Situation 11:</strong> Ein Bekannter interessiert sich für wertvolle alte Fahrzeuge.',
      options:  OPTIONS_AUTOS,
      correct:  'F',
      explanation: 'Infotext F (Technikmuseum Walldorf) zeigt Oldtimer, historische Luxusautomobile und Rennwägen.',
    },
    {
      id: 12,
      text: '<strong>Situation 12:</strong> Eine Nachbarin möchte für ihr neues Auto eine Versicherung abschließen.',
      options:  OPTIONS_AUTOS,
      correct:  'X',
      explanation: 'Kein Infotext bietet eine Kfz-Versicherung an. Infotext H ist eine Stellenanzeige für eine Ausbildung in der Versicherungsbranche.',
    },
    {
      id: 13,
      text: '<strong>Situation 13:</strong> Ihr Bruder möchte in einem Kurs sein Wissen über Finanzen erweitern.',
      options:  OPTIONS_AUTOS,
      correct:  'A',
      explanation: 'Infotext A ist ein Finanz-Workshop mit Themen wie Budgetplanung, Sparen, Anlegen und Kreditentscheidungen.',
    },
    {
      id: 14,
      text: '<strong>Situation 14:</strong> Ihr Cousin würde gerne mal mit einem schnellen Sportwagen fahren.',
      options:  OPTIONS_AUTOS,
      correct:  'I',
      explanation: 'Infotext I bietet ein Ferrari-Fahrtraining auf einem Flugplatz an – Vollgas ohne Geschwindigkeitsbegrenzung.',
    },
    {
      id: 15,
      text: '<strong>Situation 15:</strong> Ihr Sohn interessiert sich für schnelle Autos. Sie suchen für ihn ein Buch mit Bildern.',
      options:  OPTIONS_AUTOS,
      correct:  'X',
      explanation: 'Kein Infotext bietet ein Bilderbuch über schnelle Autos an.',
    },
    {
      id: 16,
      text: '<strong>Situation 16:</strong> Ihr Nachbar braucht einen neuen Kühlschrank und möchte sich über verschiedene Modelle informieren.',
      options:  OPTIONS_AUTOS,
      correct:  'D',
      explanation: 'Infotext D bietet eine Website, auf der man kostenlos nach Haushaltsgeräten (inkl. Kühlschränken) nach Bauart, Größe und Effizienz suchen kann.',
    },
    {
      id: 17,
      text: '<strong>Situation 17:</strong> Ihre Schwester hat kein Auto. Für gelegentliche Fahrten sucht sie eine Alternative zu öffentlichen Verkehrsmitteln.',
      options:  OPTIONS_AUTOS,
      correct:  'J',
      explanation: 'Infotext J (Carsharing) bietet ein Fahrzeug nach Bedarf – ohne eigenes Auto, günstiger als öffentliche Verkehrsmittel bei gelegentlichem Bedarf.',
    },
    {
      id: 18,
      text: '<strong>Situation 18:</strong> Sie brauchen bald neue Haushaltsgeräte, haben aber noch nicht genug Geld gespart.',
      options:  OPTIONS_AUTOS,
      correct:  'L',
      explanation: 'Infotext L (Verbraucherkredit Vergobank) ermöglicht die Finanzierung von Wünschen in monatlichen Raten – ohne Anzahlung.',
    },
    {
      id: 19,
      text: '<strong>Situation 19:</strong> Sie möchten auf Ihren PKW verzichten und suchen Tipps.',
      options:  OPTIONS_AUTOS,
      correct:  'E',
      explanation: 'Infotext E ist ein Buch über das Leben ohne Auto – mit Alltagstipps und leicht umsetzbaren Alternativen.',
    },
    {
      id: 20,
      text: '<strong>Situation 20:</strong> Sie hatten eine hohe Stromrechnung und möchten wissen, wie viel Energie die Geräte in Ihrem Haushalt verbrauchen.',
      options:  OPTIONS_AUTOS,
      correct:  'K',
      explanation: 'Infotext K (Smart-Check 365) ist ein Strommessgerät, das den Verbrauch einzelner Haushaltsgeräte misst und die Kosten berechnet.',
    },
  ],
};
