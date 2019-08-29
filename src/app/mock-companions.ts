import { Companion } from './model/companion';

export const COMPANIONS: Companion[] = [

    {
        name: "Eckard Lokin",
        description: "SIS Dossier:\nName: Eckard Lokin (unconfirmed)\nGender: Male\nSpecies: Human\nAge: 65 (estimate)\nLikes: Clever solutions, long-term thinking, technology, pragmatism\nDislikes: Ideology, honesty, selfish actions without clear long-term gain\n\nPersonal History: Age and surname suggest Lokin was born on Dromund Kaas during the pre-war years. Files acquired during Operation: Freefall reference a \"Doctor E. Lokin\" working as Science and Medical Advisor to Kaas City military police during this period, but no visual is provided.\n\nFirst confirmed sighting was during the boarding of Imperial dreadnought Warhammer--Lokin was one of the two individuals aboard who evaded capture. Interestingly, he was not listed in the crew roster. First identification as Fixer Fifteen came during Operation: Red Cell (see listening post transcripts). Additional sightings and references to the Fixer Fifteen designation uncovered intermittently since.\n\nAnalysis: Take a close look at the operations where we caught Lokin, and you'll notice a pattern--every time he turns up, something big is happening and we can't figure the role he's playing. He's professional, he knows his science and he's sneaky. We know he rubs some of his colleagues the wrong way, but even his fellow agents haven't given us anything useful under questioning.\n\nNote by Harson Nild, Director of Core World Operations: Is Lokin still in active service? I remember hearing about a Fixer biologist back in the day, but thought he'd retired years ago.",
        class: "Agent",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Favorite" },
            { type: "Technology", reaction: "Love" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Love" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {
        name: "Ensign Raina Temple",
        description: "SIS Dossier:\nName: Raina Temple\nGender: Female\nSpecies: Human\nAge: 24\nLikes: The Empire, the Sith, duty, honor\nDislikes: Cruelty, casual violence, selfishness\n\nPersonal History: Standard searches reveal no Imperial citizenship record for a \"Raina Temple,\" but the usual caveats apply--our data on the Imperial populace remains sadly incomplete. Temple's skills and attitude suggest Imperial Army training, but her presence inside the Chiss Expansionary Defense Force is extremely unusual; neither the CEDF nor the Imperial military is known for its transfer programs.\n\nAnalysis: Personable and bright Imperial military cadets don't end up embedded with aliens at the far edge of the galaxy without good reason. Temple could be a plant, but it's just as likely she's been intentionally forced out of the picture. Best-guess personality profile suggests she's a typically patriotic example of the rank-and-file Imperial military--a true believer in Imperial superiority and duty. No matter how easygoing or empathetic she may be at times, the needs of her nation have to come first.\n\nNote by SIS Agent Hunter: She's cute, isn't she? Enjoy the file, Cipher Nine... we can spare the occasional dossier if you're willing to play along.",
        class: "Agent",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Love" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {
        name: "Kaliyo Djannis",
        description: "Intelligence Profile:\nName: Kaliyo Djannis\nGender: Female\nSpecies: Rattataki\nAge: 29 (unconfirmed)\nLikes: Disrespecting authority, casual violence, anarchy for the fun of it\nDislikes: Self-sacrifice for the greater good, sincerity, obedience, patriotic spirit and being taken advantage of\n\nBackground (Summary): Multiple contradictory accounts make full background assessment difficult. Subject likely born on Rattatak. Escaped homeworld at a young age. Proceeded to find employment as freelance enforcer and assassin for major criminal syndicates (Exchange, Hutt Cartel) and individual underworld figures (Rholl). Persistent links to Brentaal Four anarchist cells (see Revolutionary Edge Brigade). Minimal activity within Imperial borders.\n\nPersonality: Kaliyo Djannis prizes her freedom and will lie, murder and blackmail in order to ensure that she is in control of a situation and able to indulge her vices. Known to pursue lengthy vendettas to redress grievances. Possesses a track record of expertly manipulating employers, lovers and associates (agents should not be fooled by attempts at seduction). As with many mercenaries, her loyalty cannot be purchased, but her services can be--if only temporarily.\n\nNotes: No known military training, but extremely capable with assault weapons. Has been known to bite when disarmed.",
        class: "Agent",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Favorite" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Favorite" },
            { type: "Underworld Good", reaction: "Love" },
            { type: "Delicacies", reaction: "Favorite" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {
        name: "SCORPIO",
        description: "Intelligence Profile:\nName: SCORPIO\nGender: None (identifies as female?)\nSpecies: Droid\nAge: Unknown\nLikes: Learning and gaining new tech, selfishness, killing threats\nDislikes: Self-sacrifice, duty, wastefulness\n\nBackground (Summary): Claims to have been designed for heuristic self-improvement by unknown parties. Current chassis is of recent design, suggesting multiple precursor bodies or independent database.\n\nOver a century ago, SCORPIO became involved with the Star Cabal organization and accepted guardianship of Belsavis Megasecurity Ward 23. In return for rare technology, SCORPIO willingly acted as the Star Cabal's security system until application of control codes by Cipher Nine. Currently unable to directly harm Cipher Nine without provocation or depart Cipher Nine's presence on a long-term basis.\n\nPersonality: Application of Wreyn-Tsatke Cyber-Psychology Scale results in a 9-NIX rating for SCORPIO (level 9 intelligence, non-human, independent, unknown) with 22% accuracy. These preliminary results match anecdotal experience--SCORPIO places no inherent value on biological or cybernetic life and is interested primarily in self-iteration through rapid experience. If given appropriate challenges and upgrade opportunities, SCORPIO may prove cooperative for limited periods. She appears to value others who share her traits--intelligence, amoral self-interest and curiosity.\n\nSimilar cybernetic personalities include Mentor (10-NCM) and G0-T9 (8-HSM)--both considered galaxy-level threats. Recommend full application of Wreyn-Tsatke Test at earliest opportunity.\n\nNotes: This profile is a work in progress and should not be considered definitive.\n\nSpecial: By order of the Minister of Intelligence, access to this profile is restricted.",
        class: "Agent",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Love" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Love" }
        ] 

    },
    {
        name: "Vector Hyllus",
        description: "Intelligence Profile:\nName: Vector Hyllus\nGender: Male\nSpecies: Human (enhanced)\nAge: 26\nLikes: Diplomacy, helping people, exploring alien cultures\nDislikes: Greed, cruelty, prejudice, anti-alien sentiment\n\nBackground (Summary): Second-generation Imperial; mother native to Jurio, married Captain Adronik Hyllus after Jurio was granted Imperial governance. Expressed desire to join Diplomatic Service at an early age and displayed appropriate traits. Ranked high academically during training, and soon after graduation was granted (by request) post aboard exploration and first contact vessel (see service record).\n\nReassigned to Alderaan due to diplomatic manpower needs (see House Thul). Served ably until encounter with Killik species and subsequent \"Joiner\" transformation. Current status is unclear.\n\nPersonality: Vector Hyllus has repeatedly expressed admiration for Imperial accomplishments while indicating a desire to spread Imperial influence through diplomatic channels. His attitudes were likely shaped by the Imperial reconstruction of his homeworld and are appropriate for a Diplomatic Service member. Hyllus is obedient, intelligent, charismatic and effective. He is unlikely to advance further within diplomatic or military hierarchies.\n\nNotes: Personality profile compiled from performance reports from before Hyllus's \"Joiner\" transformation. Data should be considered non-comprehensive.",
        class: "Agent",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Favorite" },
            { type: "Cultural Artifact", reaction: "Love" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Like" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {
        name: "Blizz",
        description: "Infinitely curious and adventuresome, Blizz always felt confined on his native Tatooine--the endless rolling dunes and limited selection of scrap leaving him perpetually bored. So when the traveling salvager Slam Streever visited Blizz's clan to offer Jawas work as \"ferrets\"--individuals he could send into dangerous and dilapidated areas to scout for salvage treasure--Blizz leapt at the opportunity.\n\nBlizz spent several years with Slam's crew before the old scrapper made the mistake of selling his services to Hoth's White Maw pirates. Years of toil under the menacing watch of the White Maw would soon deprive the salvagers of reasons to smile--but first, Slam gave his small friend the nickname \"Blizz\" after the little Jawa kicked up a snowstorm of excitement during his first encounter with the \"white sands.\" It's a name Blizz cherishes; one that reminds him of happier times.\n\nLikes: Adventure, gadgets, attention, praise, friendship\nDislikes: Scary things, extreme violence, people who are mean to him",
        class: "Bounty Hunter",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Favorite" },
            { type: "Technology", reaction: "Love" },
            { type: "Republic Memorabilia",	reaction: "Favorite" },
            { type: "Imperial Memorabilia",	reaction: "Favorite" },
            { type: "Cultural Artifact", reaction: "Favorite" },
            { type: "Trophy", reaction: "Favorite" },
            { type: "Underworld Good", reaction: "Love" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {
        name: "Gault Rennow",
        description: "Formerly the notorious smuggler and confidence man Tyresius Lokai, Gault Rennow now enjoys a relatively paranoia-free lifestyle as an unknown gun-for-hire. Still, old habits are hard to shake, and Gault's cautiousness and duplicity are a constant reminder that the only thing to really change is his name. How long until the crafty Devaronian finds himself climbing up the galaxy's most wanted list again is anyone's guess.\n\nLikes: Greed, indulgence, thinking your way through a problem\nDislikes: Fair fights, pain, charity, rules",
        class: "Bounty Hunter",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Love" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Favorite" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Mako",
        description: "At first glance, Mako's relationship with Braden seems more like that of a father and daughter than members of a team of professional bounty hunters--and that assessment wouldn't be too far off the mark.\n\nOrphaned and homeless but with an uncanny instinct for computing, Mako had been living as a freelance slicer in the shadows of Nar Shaddaa's underbelly... until the day Braden pulled the girl bleeding out of an alley, and paid a street surgeon to patch her blaster burns.\n\nRecognizing talent and trouble when he saw it, Braden took Mako under his wing and has been looking after her as his own ever since. But while Mako loves the old man more than anything, her independent nature is beginning to chafe under Braden's protectiveness.\n\nLikes: Professionalism, bounty hunters, making money, freedom, kindness\nDislikes: Bullying, cruelty, snobs",
        class: "Bounty Hunter",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Love" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Favorite" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Skadge",
        description: "A career gangster and psychopath, Skadge had been enjoying a prestigious position at the top of Coruscant's most wanted list when a joint police, military and SIS task force managed to finally capture him. Deemed impossible to control or reform, the murderous Houk was secretly ushered to the only facility capable of housing him: Belsavis.\n\nAlthough considered a prime candidate for the prison's domination experiments, Skadge was removed from the program during his initial evaluation--a period over which he destroyed a gang of armed Kaleesh, every remaining member of his test group, half the observing researchers and three security details... with his bare hands.\n\nNow, with the Imperial invasion of Belsavis, Skadge has been set loose after nearly three years of solitary confinement. He's ready to settle some grudges.\n\nLikes: Violence, causing suffering, destruction, bullying\nDislikes: Compromise, taking orders, weakness",
        class: "Bounty Hunter",
        gifts: [
            { type: "Weapon", reaction: "Love" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Love" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Torian Cadera",
        description: "It is the Mandalorian ideal that a warrior be judged by his or her own actions, not by those of his or her ancestors--but reality rarely lives up to ideals.\n\nTorian Cadera has spent his entire short life trying to overcome the stigma of being a traitor's son--a shame he has seldom been allowed to forget in the company of his peers. But Torian long ago learned to armor himself against contempt, and others' doubts regarding his loyalty have only driven him to strive harder to prove his worth.\n\nBecause of this, Torian adheres to the codes and traditions of the Mandalorians with more devotion than many twice his age. Upholding honor and enduring adversity are the cornerstones of his existence.\n\nLikes: Challenges, honor, Mandalorians, respect\nDislikes: Selling out, cowardice",
        class: "Bounty Hunter",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Love" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Love" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Lieutenant Felix Iresso",
        description: "The son of refugees made homeless during the Great War, Lieutenant Felix Iresso has been a career soldier for many years. His file shows participation in several notable battles, including the so-called Eight-Hour Invasion of Dubrillion where Republic forces repelled an Imperial invasion force with minimal reinforcements. Since then, Lieutenant Iresso has earned excellent technical scores and commendations for exemplary service.\n\nHowever, his file also contains some discrepancies. Lieutenant Iresso has one of the highest transfer rates in the Republic military, serving under almost a dozen commanders across the galaxy in two years. The lieutenant has also been overlooked for promotion several times. The only explanation from his superiors is a reference to an incident on Althir where Lieutenant Iresso was captured by the Empire, but no details are given.\n\nLikes: Republic military, leadership, danger for the greater good, honor and mercy\n\nDislikes: Breaking the law, cruelty",
        class: "Consular",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Favorite" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Love" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Nadia Grell",
        description: "A native of distant Sarkhai and daughter of Senator Tobas Grell, Nadia Grell is a newcomer not only to the Republic, but to the entire concept of space exploration. Surrounded by new species and strange cultures, Nadia is eager to experience everything she can. She has become interested in the intricacies of galactic diplomacy while traveling alongside her father, and often acts as his assistant during talks.\n\nAs she revealed on Attis Station, Nadia is also strong in the Force; unusually strong, in fact. As Force sensitives are relatively unknown on Sarkhai, Nadia's untrained powers left her shunned and feared by her own people. Senator Grell's decision to take her with him when he left Sarkhai was motivated by the hope of finding others like her in the Republic, and perhaps discovering some way for her to control her incredible talents.\n\nLikes: Learning, helping the weak, charity, mercy, testing her powers\nDislikes: Cruelty, dark Jedi, insulting authority",
        class: "Consular",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Favorite" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Love" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Qyzen Fess",
        description: "In contrast to many Trandoshans, Qyzen Fess rejected the path of a mercenary to become a hunter of the galaxy's most dangerous beasts. Earning \"Jagannath points\" with every honorable kill, Qyzen has traveled for years, seeking worthy prey and honoring his goddess, the Scorekeeper. Although his travels have brought him to Tython several times, he is never seen by the Jedi if Yuon Par is not at the temple.\n\nDespite his disdain of fame and fortune, Qyzen has attracted some notoriety. He often slips through apparently watertight Imperial borders to follow his prey, much to the consternation of the Empire's officials. Qyzen is also the only living hunter to have killed a greater crested gundark, thought extinct for centuries. His simple habits and devotion to the Scorekeeper give him common ground with the Jedi, though many disapprove of the attitudes and instincts that come naturally to a Trandoshan.\n\nLikes: Killing powerful enemies, encouraging others to defend themselves, danger, honor\nDislikes: Killing the weak, mercenary work, sparing powerful enemies",
        class: "Consular",
        gifts: [
            { type: "Weapon", reaction: "Love" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Tharan Cedrax",
        description: "Although not a household name, Tharan Cedrax is well known in several circles. In the casinos of Nar Shaddaa, he is cursed as a card-counting mathematical genius. To the eligible women of the galaxy, he is a famous charmer who sees rejection as an intriguing challenge. Among technologists, he earned accolades for solving a technical paradox that revolutionized computer slicing; despite his achievements, however, Tharan isn't taken seriously by the galaxy's scientific community, which looks down on him as a playboy rather than a serious researcher.\n\nIn recent years, Tharan has taken an interest in \"exo-technology,\" an almost unknown field involving esoteric alien sciences, and gone into business making custom gadgets for wealthy clients. Often accompanied by his lovely holographic companion, Holiday, Tharan has spent his credits freely, enjoying the very best Nar Shaddaa has to offer while staying just shy of its dangers.\n\nLikes: Cleverness, logical thinking, aiding scientists and beautiful women, getting something for nothing\nDislikes: Mystical Jedi nonsense, Force Persuade, destroying science, heroism that involves danger",
        class: "Consular",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Love" },
            { type: "Technology", reaction: "Favorite" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Zenith",
        description: "\"Zenith\" is the code name of a Balmorran revolutionary fighter who has made a career out of hurting the Empire. Once a member of a powerful resistance cell broken up by Imperial infiltrators, Zenith has struck out on his own, gathering followers from Balmorra's oppressed population to launch sneak attacks, raids and bombings against the occupying Imperial forces.\n\nYears spent in hiding and seeing the plight of Balmorran citizens have left Zenith with a deep-seated paranoia and hatred of the Empire--especially Balmorra's Sith governor, Darth Lachris. Nothing enrages him more than those who collaborate with the oppressors; he has been known to refuse aid to Balmorrans who cooperate with Imperial soldiers. The sacrifices he has endured have also nurtured Zenith's ambitions--when Balmorra is finally free, someone will have to ensure her new government is strong enough to prevent another occupation.\n\nLikes: Hurting Imperials, standing up for the weak, stubbornness, resolve\nDislikes: Mercy to the Empire, betrayal, second chances for those who do wrong",
        class: "Consular",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Love" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Favorite" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Andronikos Revel",
        description: "For five notorious years, the pirate Andronikos Revel terrorized Republic and Imperial space alike as the captain of the Sky Princess. Known for his sharp temper and sharper flying skills, Revel was one of the few pirate captains to serve as his own pilot.\n\nHis piracy career was cut short by a strange mutiny, however, and he was abandoned to the Imperials who had been hunting him since he'd raided a ship carrying valuable artifacts. After a year in Imperial prison, Andronikos Revel was let loose. He has been meticulously hunting and killing the mutineers who betrayed him ever since.\n\nLikes: Action, keeping promises, complications\nDislikes: Authority, betrayal, backing down from a fight",
        class: "Inquisitor",
        gifts: [
            { type: "Weapon", reaction: "Love" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Favorite" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Ashara Zavros",
        description: "A twenty-year-old Togruta Padawan, Ashara Zavros descends from a long line of Force users. From an early age, she has aspired to study the Force and become one of the best Jedi the order has to offer.\n\nAshara came to Taris to train under Jedi Masters Ryen and Ocera, whose philosophy is that Padawans best learn the travails of using the Force through firsthand experience of the galaxy. In Ashara's case, the Masters brought her to Taris for two reasons: First, to teach her compassion amidst the destruction that had occurred there and warn against the dangers of pride and the dark side. Second, to complete her trials by helping to drive a dark ghost from the ruins of a Jedi enclave.\n\nLikes: Rational choices, secrets of the Force, fighting bullies\nDislikes: Random cruelty, fighting Jedi",
        class: "Inquisitor",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Love" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Favorite" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Khem Val",
        description: "Once a loyal servant of the Sith Lord Tulak Hord, Khem Val was placed in a stasis chamber in the tomb of Naga Sadow centuries ago by his master for safekeeping. Tulak Hord is long dead, but Khem Val lives on; a terrifying nightmare from the ancient past.\n\nPowerful, cunning and ruthless enough to slay even the strongest Force users, Khem Val was trained as an elite assassin. After emerging from his long slumber, the Dashade is the very embodiment of death and destruction; a reminder that there are things even Sith and Jedi must fear.\n\nAlthough once pledged to a life of service, with his original master gone, it is uncertain where Khem Val's true loyalties now lie. A near-perfect killing machine, he could prove a valuable weapon for anyone willing to take him on... though he is a weapon that can cut both ways.\n\nLikes: Killing Force users, displays of strength, making foolish people unhappy\nDislikes: Weakness in any form, not killing Force users",
        class: "Inquisitor",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Love" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Talos Drellik",
        description: "Lieutenant Talos Drellik has never excelled as a soldier, and his true passion has always been history and archaeology. To Talos, the Imperial Reclamation Service does an invaluable job, preserving Imperial and Sith history against the onslaught of time.\n\nUnlike many Reclamation Service officers who are career soldiers with only a passing interest in history, Lieutenant Drellik has thrown himself into his work, studying with experts in the field such as the illustrious Professor Auselio Gann and galactic historian Deravon Wells.\n\nLikes: Artifacts, discovery, history, pro-Empire sentiment, clever word play\nDislikes: Cruelty, rudeness, secrets from allies",
        class: "Inquisitor",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Favorite" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Favorite" },
            { type: "Imperial Memorabilia",	reaction: "Love" },
            { type: "Cultural Artifact", reaction: "Love" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Xalek",
        description: "A Kaleesh warrior who was captured by the Empire in battle and brought to Korriban to train as a Sith, Xalek prefers to let his actions speak in place of words. Before even reaching Korriban, Xalek had killed several of his fellow slaves who were also intended for training--a bold statement by any measure.\n\nXalek melds his training as a Kaleesh warrior with a firm belief in the Sith Code. He kills without remorse and is an expert student of lightsaber technique and martial combat.\n\nLikes: Following the Sith Code, fighting overwhelming odds, brevity\nDislikes: Mercy, weakness, talking",
        class: "Inquisitor",
        gifts: [
            { type: "Weapon", reaction: "Love" },
            { type: "Military Gear", reaction: "Love" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Favorite" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Doc",
        description: "The brilliant medtech known simply as \"Doc\" is driven to bring quality health care to underserved star systems. This has led Doc to keep some unusual company: pathosis-riddled crime lord Fashaka Four-Toes, the Red Band Rebels of Cadinth and even the Imperial military during a brief stint impersonating a member of the Imperial Medical Corps on the conquered planet Sullust.\n\nDoc has a talent for using bad people to save good lives--a fact he emphasizes to anyone within earshot. Some characterize Doc as a blowhard and scoundrel, but these individuals have never required his impressive surgical skills. Doc has visited every major galactic battleground over the past five years and saved more lives than even he can count.\n\nLikes: Looking like a hero, romance and flirtation, helping those in need\nDislikes: Looking bad, hurting the innocent, refusing to help",
        class: "Knight",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Love" },
            { type: "Luxury", reaction: "Love" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Favorite" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Kira Carsen",
        description: "Kira Carsen ist eine für den Jedi-Orden eher untypische Rekrutin - sie neigt zum Zynismus und hat einen sturen, eigensinnigen Charakter. Dies lässt sich zum Teil dadurch entschuldigen, dass sie ihre Padawan-Ausbildung erst als junge Erwachsene begann; Kira verbrachte den Großteil ihres Lebens davor als heimatlose Streunerin und führte ein armseliges Leben auf einigen der unangenehmsten Welten der Galaxis.\n\nDank ihrer schweren Kindheit verfügt Kira über deutlich mehr Lebenserfahrung als die meisten anderen Jedi - und eine dazu passende verbitterte Einstellung. In den Augen der anderen Jedi ist Kira jemand, der nichts ernst nimmt und sich nicht ganz auf den Weg der Jedi einlässt.\n\nWer jedoch genauer hinsieht, der entdeckt einen Schimmer von Optimismus hinter Kiras sarkastischer Fassade. Obwohl sie die Lehren des Jedi-Ordens immer wieder in Frage stellt, weiß sie das Maß an Sicherheit und Komfort zu schätzen, das der Orden ihr bietet.\n\nVorlieben: lustig sein, sich einmischen, das Imperium verspotten und besiegen\nAbneigungen: Einschüchterung, sich wie ein Söldner benehmen, mit den Sith zusammenarbeiten",
        class: "Knight",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },	
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Favorite" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia", reaction: "Love" },
            { type: "Imperial Memorabilia", reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },	
            { type: "Maintenance", reaction: "Indifferent" }
        ] 
 
    },
    {

        name: "Lord Scourge",
        description: "As the Sith Emperor's personal executioner, the grimly fatalistic Lord Scourge has personally killed more than a hundred Jedi--and ten times as many Sith. Even the most powerful members of the Dark Council avoid offending the man bearing the title \"the Emperor's Wrath.\"\n\nLord Scourge has dutifully served the Empire for over three hundred years, his life unnaturally prolonged by perverse technology and his master's dark side powers. Centuries spent watching his fellow Sith Lords rise and fall has given Lord Scourge a unique perspective on people. He can analyze someone's flaws after only brief observation, and freely shares his perceptions (whether they're wanted or not).\n\nLikes: Using power against the weak, power, anger, revenge and spite\nDislikes: Greed, acts of mercy, Jedi and Republic authorities",
        class: "Knight",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Favorite" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Favorite" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Love" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Sergeant Fideltin Rusk",
        description: "Raised by a colony of pacifist Chagrians, Rusk rebelled against his family's beliefs and enlisted with the Republic military as soon as he could. At first, he proved to be a brilliant soldier and was identified as a rising star in the Republic's ranks. Somewhere along the way, however, his bravery crossed the line into recklessness.\n\nAlthough he still accomplished his missions, casualty rates among his squad rose astronomically. Rusk quickly became a pariah among other soldiers, including his superiors. His aggressive pursuit of victory over the Empire at any cost has earned him many medals from politicians, but no promotions from his commanders.\n\nLikes: Killing Imperials, protecting the Republic, motivating others to fight\nDislikes: Avoiding fights, weakness, disrespecting authority",
        class: "Knight",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Love" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Favorite" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "T7-01",
        description: "A quirky and surprisingly stubborn astromech droid with a lively personality and strong independent streak, T7-01 serves the Jedi by bravely facing danger on a daily basis. Skilled in high-resolution sensor scans, mechanical repair and starship piloting (along with numerous undocumented talents), the droid's hard work is responsible for saving dozens, if not hundreds, of lives on Tython alone.\n\nLittle is known about T7 before the droid came into the service of the Jedi. Certain features of its construction hint at it being a custom model built some time ago, but there are no official records to substantiate the theory. Despite the uncertainty of its origins, the droid's enthusiasm and willingness to put itself in harm's way leave little doubt as to its loyalty.\n\nLikes: Jedi, morally correct actions, defeating the Empire\nDislikes: Bullying, killing innocents, disrespecting authority",
        class: "Knight",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Love" },
            { type: "Republic Memorabilia",	reaction: "Favorite" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Favorite" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Favorite" }
        ] 

    },
    {

        name: "Akaavi Spar",
        description: "Akaavi Spar was born into a respected Mandalorian clan and became one of its finest warriors. She killed her first foe--an abusive Abyssin mercenary--at the age of eight using an improvised flamethrower. This victory earned her the nickname \"firehand\" among her clan and marked the beginning of an impressive career as an Imperial bounty hunter. Akaavi captured and killed all manner of targets in her youth, from career criminals to Jedi.\n\nWhen her entire clan was framed for crimes against the Empire and executed, Akaavi alone survived the brutal purge--but her outlook on the galaxy changed forever. With no connection to her Mandalorian heritage, she became a wandering mercenary loyal to no one.\n\nLikes: Combat challenges, profit, irritating authority figures\nDislikes: The Republic, dishonorable acts, mercy",
        class: "Smuggler",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Love" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Love" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Bowdaar",
        description: "The mighty Wookiee gladiator named Bowdaar has spent over a century facing countless opponents without ever losing a match. He solidified his title as the galaxy's greatest gladiator when he defeated notorious Wookiee-hunter Karssk on Ord Mantell. The more gullible underworld scum whisper that Bowdaar is an immortal creature who can't be killed, but those who have faced him and lived know that he is simply the best there is.\n\nOn the surface, Bowdaar may seem like a simple-minded brute, but nothing could be further from the truth. Case in point: Bowdaar eventually discovered the identity of the Trandoshans who first captured and enslaved him. One night in an arena on Loovria, Bowdaar learned that his former captors were sitting in the stands. An unfortunate \"weapons malfunction\" caused the drunken Trandoshan slavers to meet an untimely--and extremely messy--end.\n\nLikes: A good fight against worthy foes, protecting the weak, personal honor\nDislikes: Cruelty, bullying, slavery, respecting authority that's in the wrong",
        class: "Smuggler",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Love" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Favorite" },
            { type: "Trophy", reaction: "Love" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Favorite" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Corso Riggs",
        description: "Corso Riggs is a cheerful, disarmingly optimistic mercenary soldier. Raised as a rancher's son on the rough frontier of Ord Mantell, Corso developed a mixture of naive innocence and primitive toughness, wrapped with old-fashioned chivalry.\n\nIn addition to his gung-ho enjoyment of a good, dirty fight and his encyclopedic knowledge of weapons, Corso remains a ray of sunshine in even the worst circumstances. He has no sense of his own mortality and is absolutely convinced he's going to live forever. Corso also has a soft spot for damsels in distress, even when it's clear they're up to no good.\n\nLikes: Protecting the weak, being nice to ladies, punishing bad guys\nDislikes: Hurting for profit, hurting women no matter what they did, working with Sith or Imperials",
        class: "Smuggler",
        gifts: [
            { type: "Weapon", reaction: "Love" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Languss \"Guss\" Tuno",
        description: "A failed Jedi Padawan who abandoned his training, the enthusiastically greedy Guss Tuno prefers the underworld lifestyle's potential for material riches. In a perfect galaxy, Guss would spend his retirement lounging in a heated swimming pool surrounded by exotic beauties while consuming a steady diet of fresh fish and expensive cocktails.\n\nAlthough he often speaks before he thinks, Guss has talked his way out of certain death many times. He often uses his minimal knowledge of Jedi--and the lightsaber he stole from his old Master--to fool gullible criminals into leaving him alone. When that fails, Guss reveals he's a much better shot than anyone would believe.\n\nLikes: Mocking Force users, profit from those who can afford it, a good scam\nDislikes: Killing innocents, risking your neck for nothing",
        class: "Smuggler",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Favorite" },
            { type: "Luxury", reaction: "Favorite" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Love" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Love" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Risha",
        description: "Petty criminal, starship mechanic, woman of mystery, royal queen: all of these terms apply to Risha, daughter of notorious crime lord Nok Drayen. Considering her upbringing as a violent gangster's child, it's a wonder Risha turned out remotely normal. Wise and experienced beyond her years, she has led an adventurous life containing some extremely dark chapters.\n\nDespite her biting sarcasm and general selfishness, one can never shake the feeling that Risha would be a better person if only she knew how. Years spent among the galaxy's dregs have fostered layers of personal self-defense mechanisms and a cynical shell around her. Only the most persistent friend has any hope of meeting the \"real\" Risha hiding beneath the surface.\n\nLikes: Self-interest, profit, secrets and new tech\nDislikes: Unprofessional or emotional behavior, killing innocents, working with the stupid or uneducated",
        class: "Smuggler",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Love" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Favorite" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Favorite" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Aric Jorgan",
        description: "A born leader, Aric Jorgan is one of the Republic's most capable field officers. He enlisted in the military at an early age and quickly distinguished himself as a talented marksman. His impeccable service record earned him a spot in the Republic's top sniper squad, where he successfully carried out over a dozen missions against high-ranking Imperial targets.\n\nSince his transfer to Fort Garnik, Jorgan has earned a reputation as a hard and demanding taskmaster. However, few realize his surly demeanor belies a genuine concern for the well-being of his troops. While those under his command may not particularly like the brooding Cathar, they almost always respect him.\n\nLikes: Efficiency, duty, the Republic military, honesty\nDislikes: Failure, excuses, callous sacrifices",
        class: "Trooper",
        gifts: [
            { type: "Weapon", reaction: "Love" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Favorite" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Elara Dorne",
        description: "A highly talented field medic, Elara Dorne was born Imperial and served in the Empire's military for two years before defecting to the Republic. She has since served with distinction as a search-and-rescue squad leader, earning several commendations for aiding wounded men under direct enemy fire. Her operational record is flawless.\n\nWhat no record can show is that Dorne's background, combined with her strict adherence to regulations and rigid, uncompromising personality, has made her fairly unpopular with her fellow soldiers. In truth, she's widely regarded as a cold, asocial killjoy, an unfortunate side effect of her dedication to embodying the laws and ideals of the Republic.\n\nLikes: Rules, propriety, selflessness\nDislikes: Unnecessary violence, corruption",
        class: "Trooper",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Favorite" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Love" },
            { type: "Imperial Memorabilia",	reaction: "Love" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "M1-4X",
        description: "M1-4X is a highly advanced war droid designed and built specifically to serve in Havoc Squad. As such, his engineers programmed him to be a perfect soldier: completely loyal, fervently patriotic, and willing and eager to go to any length or face any risk in order to destroy the Republic's enemies.\n\nM1-4X's armor plating, weapons systems and processing power are significantly advanced over typical military droid standards, due in large part to his unusual power core. Constructed by an unknown group or organization, the core was recovered during a classified operation and has output capabilities far beyond conventional models.\n\nLikes: Destroying the Republic's enemies, pro-Republic messages, courage\nDislikes: Anything against the Republic's goals",
        class: "Trooper",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Favorite" },
            { type: "Republic Memorabilia",	reaction: "Love" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Favorite" }
        ] 

    },
    {

        name: "Sergeant Yuun",
        description: "Even in an organization as diverse as the Republic Army, Yuun stands out. A member of the Gand species and hailing from the Gand homeworld, Yuun is a Findsman, a type of shamanistic tracker held in very high regard among his people. He applies his unusual training to technical tasks of every kind, resulting in a success record unmatched by any other technician in the military.\n\nAs effective as Yuun's methods are, they rarely meet with understanding or approval from his fellow soldiers. But despite his eccentricities, Yuun's fighting skill and calm approach to any challenge generally earn at least the grudging respect of the men and women he serves with.\n\nLikes: Mysteries, respect for unusual people/beliefs, patience, self-restraint\nDislikes: Unnecessary violence, chaos, rudeness, recklessness, bragging",
        class: "Trooper",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Love" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Favorite" },
            { type: "Trophy", reaction: "Love" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Tanno Vik",
        description: "One of the most talented demolitions experts to ever serve in the Republic military, Tanno Vik is charming, highly skilled and completely amoral. Born to the lawless streets of Nar Shaddaa, Vik is accustomed to putting his own interests first; enlistment was merely a convenient means of escape after betraying one criminal partner too many. But once he got his hands on the most advanced weapons and explosives in the galaxy, he was hooked.\n\nDuring training, Vik impressed his instructors with his unprecedented speed at locating structural weaknesses in everything from buildings to vehicles, ensuring that he always planted his explosives where they would do the most damage. He was even considered for entry into Special Forces division, but his belligerent attitude and disregard for authority held him back. Criminal accusations were registered against him throughout his short service career, leading to his eventual conviction and discharge.\n\nLikes: Ruthlessness, mercenary behavior, mocking authority and everyone else, blowing things up\n\nDislikes: Kindness, self-sacrifice",
        class: "Trooper",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Love" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Love" },
            { type: "Delicacies", reaction: "Love" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Broonmark",
        description: "Broonmark is a unique creature among the Talz. While his peers spent their youths learning survival skills and playing on the frozen tundra of Alzoc Three, Broonmark developed a fascination with death. As a child, Broonmark watched his father killed by one of Alzoc Three's predators, and instead of sadness, Broonmark felt only shame at his father's weakness. Violence became an obsession and point of pride for Broonmark; he started hunting in secret and lived for the rush of a kill.\n\nWhen the Republic began recruiting Talz for their elite commando units, Broonmark eagerly volunteered for the chance to turn his claws against more challenging prey. But with each kill, Broonmark's desire for carnage and bloodshed intensified. His clan soon challenged his brutal leadership, and Broonmark watched in anger as the gentle Talz he fought to empower mutinied against him.\n\nLikes: Violence as a solution, testing yourself, protecting those close to you\nDislikes: Betrayal of allies, inaction, talking things out",
        class: "Warrior",
        gifts: [
            { type: "Weapon", reaction: "Love" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Favorite" },
            { type: "Republic Memorabilia",	reaction: "Favorite" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Like" },
            { type: "Trophy", reaction: "Love" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Jaesa Willsaam (Dark)",
        description: "Once in a millennium, a man or woman is born who expands the frontiers of what Force users can achieve. Proud, young Jedi Padawan Jaesa Willsaam discovered the unprecedented ability to discern any being's true nature and uncover a person's most secret intentions. Born to a family of servants on Alderaan, she was brought to the Jedi Order and trained by Master Nomen Karr.\n\nBut Nomen Karr could only protect and shield his Padawan from the world for so long. Through the machinations of Darth Baras, Jaesa was drawn away from the protection of the order and confronted by Baras's own apprentice--and with the emotional instability of her Master.\n\nHaving finally witnessed the Jedi Order's weakness and the dark side's true power, Jaesa embraces the Sith path with reckless abandon. She now knows that the only truth-inducing force in the galaxy is fear.\n\nLikes: Random cruelty, secrets of the Force, murder and chaos\nDislikes: Honor, mercy, helping people",
        class: "Warrior",
        gifts: [
            { type: "Weapon", reaction: "Love" },
            { type: "Military Gear", reaction: "Like" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Favorite" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Favorite" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Jaesa Willsaam (Light)",
        description: "Once in a millennium, a man or woman is born who expands the frontiers of what Force users can achieve. Proud, young Jedi Padawan Jaesa Willsaam discovered the unprecedented ability to discern any being's true nature and uncover a person's most secret intentions. Born to a family of servants on Alderaan, she was brought to the Jedi Order and trained by Master Nomen Karr.\n\nBut Nomen Karr could only protect and shield his Padawan from the world for so long. Through the machinations of Darth Baras, Jaesa was drawn away from the protection of the order and confronted by Baras's own apprentice--and with the emotional instability of her Master.\n\nHaving now seen the darkness within the Jedi Order, Jaesa has left its corruption behind completely to help transform the Empire from within. She has searched her whole life for something to believe in, and her new teacher has provided the answer.\n\nLikes: Helping the weak, secrets of the Force, honor\nDislikes: Random cruelty, hurting innocents, rudeness",
        class: "Warrior",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Favorite" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Indifferent" },
            { type: "Republic Memorabilia",	reaction: "Love" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Love" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Lieutenant Pierce",
        description: "While few who are not Force sensitive in the Empire have any choice but to join the military, Lieutenant Pierce joined eagerly--not out of a sense of duty but out of a lust for action. In fact, although his soldiering and his bravery are beyond question, Pierce has faced resistance and scrutiny throughout his military career due to his occasionally reckless attitude and his disdain for authority.\n\nFortunately, Pierce's years in military black operations groups kept him away from the stuffier elements of the military hierarchy. Very often, Pierce is assigned to the most dangerous and far-flung worlds, where the Empire's primary goal is destruction--which suits the lieutenant just fine.\n\nLikes: Personal gain, hurting the Republic, danger and laughing at authority\nDislikes: Rules, kissing up, peace",
        class: "Warrior",
        gifts: [
            { type: "Weapon", reaction: "Love" },
            { type: "Military Gear", reaction: "Love" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Favorite" },
            { type: "Underworld Good", reaction: "Like" },
            { type: "Delicacies", reaction: "Favorite" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Malavai Quinn",
        description: "An officer in the Imperial military, Malavai Quinn is loyal to the Empire and everything it stands for: order, the glory of the Sith and the conquest of the Republic. Following his mysterious disgrace at the Battle of Druckenwell, he was stationed on Balmorra where he occasionally carried out small missions for Darth Baras (to whom he owes much of his career's early success).\n\nDuty-bound and honorable, Quinn is not afraid to express earned admiration for his superiors, but he is neither a bootlicker nor a mindless servant. He values competence alongside loyalty and will do whatever is necessary to thwart the enemies of the Empire as a whole and Darth Baras personally.\n\nLikes: Patriotism to the Empire, rewarding hard work, honor\nDislikes: Selfishness, betrayal, irrational behavior",
        class: "Warrior",
        gifts: [
            { type: "Weapon", reaction: "Favorite" },
            { type: "Military Gear", reaction: "Love" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Indifferent" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Love" },
            { type: "Cultural Artifact", reaction: "Indifferent" },
            { type: "Trophy", reaction: "Like" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "Vette",
        description: "A Twi'lek born into slavery on the planet Ryloth, Vette escaped a life of servitude to become an accomplished rogue and treasure hunter. Too daring for her own good, she managed to breach Imperial defenses and sneak onto Korriban, gaining entry into the most sacred Sith tombs before being caught.\n\nYears of travel and close calls have made Vette quick with a blaster. Outspoken, uppity and unfiltered, she can be fiercely loyal or relentlessly taxing, making her a source of annoyance to some and of great amusement to others.\n\nLikes: Anti-authority behavior, protecting the weak, treasure and getting paid\nDislikes: Bullying, killing innocents, kissing up",
        class: "Warrior",
        gifts: [
            { type: "Weapon", reaction: "Like" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Like" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Like" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Favorite" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Love" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Indifferent" }
        ] 

    },
    {

        name: "2V-R8",
        description: "2V-R8 is a Seneschal-series factotum droid outfitted to serve the galaxy's most dangerous individuals. Due to experiences with previous masters, he knows that any moment of weakness or failure could easily result in his permanent deactivation, and he has therefore created multiple subroutines to reroute all his processing capabilities, maximizing his efficiency when seeing to whatever single task his master has assigned him. Despite the constant fear of destruction hanging over his head, 2V-R8 makes every effort to appear professional and composed. He has activated numerous crisis-management programming modules to assist him with handling the stress on his processors. So far, his power core has overheated only once.",
        class: "Imperial",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Favorite" },
            { type: "Republic Memorabilia",	reaction: "Indifferent" },
            { type: "Imperial Memorabilia",	reaction: "Like" },
            { type: "Cultural Artifact", reaction: "Love" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Love" }
        ] 

    },
    {

        name: "C2-N2",
        description: "C2-N2 is a model of gentlemanly manners and polite efficiency. A Hollis-series steward droid that served one of the Republic's most famous heroes, he will do everything in his considerable programming power to ensure that his master's starship always maintains the proper air of respectability. This includes high-powered dusting capabilities, monitoring the crew's caloric intake and a selection of aromas from across the galaxy to satisfy even the pickiest of noses.",
        class: "Republic",
        gifts: [
            { type: "Weapon", reaction: "Indifferent" },
            { type: "Military Gear", reaction: "Indifferent" },
            { type: "Courting", reaction: "Indifferent" },
            { type: "Luxury", reaction: "Like" },
            { type: "Technology", reaction: "Favorite" },
            { type: "Republic Memorabilia",	reaction: "Like" },
            { type: "Imperial Memorabilia",	reaction: "Indifferent" },
            { type: "Cultural Artifact", reaction: "Love" },
            { type: "Trophy", reaction: "Indifferent" },
            { type: "Underworld Good", reaction: "Indifferent" },
            { type: "Delicacies", reaction: "Indifferent" },
            { type: "Maintenance", reaction: "Love" }
        ] 

    }

];

    