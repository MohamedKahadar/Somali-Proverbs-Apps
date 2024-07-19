const Quotes=[

    "nin kuu digay kuma dilin",
    "sabab la'aan ma jabto geed",
    "nin seexday sedkiisuu helaa",
    "nin sabool ah sabool maahan",
    "samo ku joogso saameyn ku yeelan",
    "sadar qalalaase ma aha sadaal"
]

export const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomIndex];
}