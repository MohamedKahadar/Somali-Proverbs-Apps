const Quotes=[

    "nin kuu digay kuma dilin",
    "sabab la'aan ma jabto geed",
    "nin seexday sedkiisuu helaa",
    "nin sabool ah sabool maahan",
    "samo ku joogso saameyn ku yeelan",
    "sadar qalalaase ma aha sadaal",
    "Baadi nimaan lahayn bay ag joogtaa",
    "Baahiyi qof kuu daran bay kuu geysaa",
    "Badhi mag ma laha",
"Balaayo laba qad ma leh",
"Balaayo madax la qabtay leedahaye minjo la qabto ma laha",
"Balaayo buulkaagaa laga galaa",
"Ballan habeenimo, jarmaado subax buu leeyahay",
"Ballaysin bir ka adag",
"Ban waraabiyo gaala baqataba baraa la helaa",
"Bannaankaba arkaayow maxaa babac ku saaraaya",
"Bannaankiis mare maradiisa geed ma qabsado",
"Baqal fardo la miratay dhigood bay is moodaa",
"Barasho horteed dad ha nicin",
"Barasho horteed ha i nicin",
    

]

export const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomIndex];
}