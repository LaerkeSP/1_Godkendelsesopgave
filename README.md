# 1. Godkendelsesopgave

## Opgavebeskrivelse

> Din innovation skal være en mobil applikation der minimum indeholder 2 views (lav gerne en oversigt over views inklusiv de som ikke er med endnu), navigation, 1-2 knapper, og hente data/information fra en kilde f.eks. en database.

> I kan supplere koden med en mockup - altså en "fake" udgave af appen, der viser værdien for brugeren (som I skal præsentere den for)! .

> Eksempler til inspiration: indkøbsliste, opgaveliste, booking/reservations-app, spejl-app, lokation på kort,  cv-præsentationsapp, "kom-og-hent-mig", ...






## Læringsdagbog

### 1. dag: 

Den basale struktur er blevet opsat, hvor det er forsøgt at lave en stack navigator først og så derefter en tab (?) navigator. 

Stack navigatoren er blevet sat til side for først at lave tab navigatoren, men dette virker ikke endnu - alle ikonerne sidder oven i hinanden og jeg har ikke pt fundet en løsning på dette. Hertil blev teksten på app siden skuppet op i toppen, hvilket undrer mig. 

Udover dette er den basale struktur dannet - her er ideen at man først skal komme til stack navigatoren, hvori man skal logge ind/oprette en bruger, hvorefter man kommer ind til selve appen. Lige nu er der ikke planer om at lave noget visuelt på de forskellige tab-sider, udover en meddelelse om at man er placeret på de individuelle sider. 

Det kan være jeg skal overveje at lave App.js siden til stack navigatoren og så derfra importere tab navigatoren. jeg ønsker dog at holde App.js fri fra clutter - jeg er ikke sikker på dette er en god ide.  

## 2. dag:
Efter at have arbejdet mere i dybden med navigators i exercise timerne, har jeg fået en bedre forståelse af, hvordan de fungerer. Ud fra dette er der blevet lavet nogle ændringer i opsætningen. I stedet for at have en stack navigator som en seperart fil, er selve funktionaliteten blevet brugt i App.js. Her bliver Home.js og LogIn.js importeret. Home.js består af tab navigatoren og virker efter henblik - her mangles der stadig noget information til de forskellige sider, men dette bliver nedprioriteret for kravspecifikationerne. LogIn.js indeholder pt ikke noget, men det ønskes at denne skal kontakte firebase, hvori man kan logge ind. 

LogIn.js kommer til at blive mere kompliceret. Her ønskes det at man både skal kunne logge ind, men også oprette en ny bruger. Hvis det er muligt, vil jeg gerne kunne lave den knap til endu en stack, så man kan klikke videre fra log in siden. Jeg er endnu ikke nået til den del i øvelsestimerne, da jeg har haft andre vanskligheder der tog længere tid, så jeg er meget nervøs om jeg kan få fikset alle mindre problemer, og få inkluderet de funktionaliteter jeg ønsker. 

Denne kodningssession har ikke varet særlig længe, så det er begrænset hvad jeg har lært. Det største er nok den dybere forståelse for de forskellige navigators, og hvordan de skal sættes op. 