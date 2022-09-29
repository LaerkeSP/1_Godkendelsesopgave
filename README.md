# 1. Godkendelsesopgave

## Opgavebeskrivelse

> Din innovation skal være en mobil applikation der minimum indeholder 2 views (lav gerne en oversigt over views inklusiv de som ikke er med endnu), navigation, 1-2 knapper, og hente data/information fra en kilde f.eks. en database.

> I kan supplere koden med en mockup - altså en "fake" udgave af appen, der viser værdien for brugeren (som I skal præsentere den for)! .

> Eksempler til inspiration: indkøbsliste, opgaveliste, booking/reservations-app, spejl-app, lokation på kort,  cv-præsentationsapp, "kom-og-hent-mig", ...


## Programmerings resultat


https://user-images.githubusercontent.com/59806877/193126318-ee714a60-fd2c-4a7d-9873-a703f8aa6d08.mp4




https://user-images.githubusercontent.com/59806877/193126341-ac0f2644-e566-43e1-b6d9-7d126ddd6259.mp4



## Læringsdagbog

### 1. dag: 

Den basale struktur er blevet opsat, hvor det er forsøgt at lave en stack navigator først og så derefter en tab (?) navigator. 

Stack navigatoren er blevet sat til side for først at lave tab navigatoren, men dette virker ikke endnu - alle ikonerne sidder oven i hinanden og jeg har ikke pt fundet en løsning på dette. Hertil blev teksten på app siden skuppet op i toppen, hvilket undrer mig. 

Udover dette er den basale struktur dannet - her er ideen at man først skal komme til stack navigatoren, hvori man skal logge ind/oprette en bruger, hvorefter man kommer ind til selve appen. Lige nu er der ikke planer om at lave noget visuelt på de forskellige tab-sider, udover en meddelelse om at man er placeret på de individuelle sider. 

Det kan være jeg skal overveje at lave App.js siden til stack navigatoren og så derfra importere tab navigatoren. jeg ønsker dog at holde App.js fri fra clutter - jeg er ikke sikker på dette er en god ide.  

### 2. dag:
Efter at have arbejdet mere i dybden med navigators i exercise timerne, har jeg fået en bedre forståelse af, hvordan de fungerer. Ud fra dette er der blevet lavet nogle ændringer i opsætningen. I stedet for at have en stack navigator som en seperart fil, er selve funktionaliteten blevet brugt i App.js. Her bliver Home.js og LogIn.js importeret. Home.js består af tab navigatoren og virker efter henblik - her mangles der stadig noget information til de forskellige sider, men dette bliver nedprioriteret for kravspecifikationerne. LogIn.js indeholder pt ikke noget, men det ønskes at denne skal kontakte firebase, hvori man kan logge ind. 

LogIn.js kommer til at blive mere kompliceret. Her ønskes det at man både skal kunne logge ind, men også oprette en ny bruger. Hvis det er muligt, vil jeg gerne kunne lave den knap til endu en stack, så man kan klikke videre fra log in siden. Jeg er endnu ikke nået til den del i øvelsestimerne, da jeg har haft andre vanskligheder der tog længere tid, så jeg er meget nervøs om jeg kan få fikset alle mindre problemer, og få inkluderet de funktionaliteter jeg ønsker. 

Denne kodningssession har ikke varet særlig længe, så det er begrænset hvad jeg har lært. Det største er nok den dybere forståelse for de forskellige navigators, og hvordan de skal sættes op. 

### 3. dag:
Sign in virkede kort, men jeg opdagede at databasen jeg brugte var forkert. Log in er til gengæld kommet længere, efter jeg opdaterede databasen - der er dog stadig en fejl heri da jeg har et problem med at komme til home screen efter en bruger bliver logget ind. 

Lige nu vil jeg fokusere på log in, da dette er det mest håndgribelige problem. Jeg havde fået opret bruger til at virke men det stoppede efter jeg pillede med det hele. Jeg tror det er fordi jeg har opsat det som bil opgaven, hvor jeg egentlig bare kan opsætte det mere specifikt med de rigtige values som øvelsesopgave 4 gør. 

### 4. dag:
Koden virker endelig! Det er en meget forsimplet version af hvad mockuppen er, men den indeholder de forskellige sider som jeg ønsker at inkluderer og har en virkende login og signup version. 

Problemet med at logge ind viste sig at være meget simpel. Måden der blev refereret til HomeScreen resulterede i at den ikke var i en navigationcontainer, hvilket var meget simpelt at løse. 

Problemet med sign up var som forventet, jeg brugte ikke den rigtige database, og drog inspiration fra den forkerte øvelse, hvilket ikke kontaktede authentication databasen på firebase. Her endte koden nærmest med at være identisk med sign in, da det egentlig bare var kaldet til databasen der var anderledes - den gik fra sign in til create user. 

