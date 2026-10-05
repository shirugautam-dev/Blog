const searchData = [
    {
        type: "article",
        title: "Am I Drinking the Hype?",
        description: "Protein Powder: Is it the need or the taste? I’m still trying to figure out.",
        url: "/htmls/protein.html",
        keywords: "protein plant whey yeast exercise"
    },
    {
        type: "article",
        title: "Why Insomniacs Must Read at Night",
        description: "Reading at night has calmed my mind and help me fall asleep.",
        url: "/htmls/reading.html",
        keywords: "insomnia reading night sleep"
    },
    {
        type: "article",
        title: "My Mother Thought Investing Wasn’t Her Domain. I Disagree.",
        description: "Don't let fear hold back your financial freedom. Learn how women can take control of their financial future and start investing with confidence.",
        url: "/htmls/invest.html",
        keywords: "invest SIP finance"
    },
    {
        type: "article",
        title: "I Met an Orchid, and It Made Me Question Myself",
        description: "Living with an orchid husband made me question my dandelion nature. A personal essay on personality, resilience, flourishing, and family.",
        url: "/htmls/orchid.html",
        keywords: "nature family personality floursing"
    },
    {
        type: "article",
        title: "The Versions of Myself I have Missed",
        description: "Why reuniting with old friends never quite feels the same — a personal essay on nostalgia, memory, and the selves we leave behind.",
        url: "/htmls/versions.html",
        keywords: ""
    },
    {
        type: "article",
        title: "I Am Not Rich, She Is Not Poor",
        description: "A simple lottery question to my domestic help revealed an uncomfortable truth about money, security and the moving goalpost of enough.",
        url: "/htmls/richandpoor.html",
        keywords: "rich poor enough"
    },
    {
        type: "article",
        title: "Why We Feel Life Is Better Somewhere Else",
        description: "Why do we dream of living elsewhere? A reflection on Fernweh, restlessness, and the belief that life is better away.",
        url: "/htmls/fernweh.html",
        keywords: "restlessness escape"
    },
    {
        type: "article",
        title: "We Have Johatsu Everywhere",
        description: "What makes someone leave everything behind? A thoughtful exploration of voluntary disappearance and personal freedom.",
        url: "/htmls/johatsu.html",
        keywords: "leave disappear freedom"
    },
    {
        type: "article",
        title: "US, Israel-Iran War Is Psychological Destruction",
        description: "An ordinary Indian reflects on fear, anxiety, media overload, and uncertainty during the US–Israel–Iran war crisis.",
        url: "/htmls/US-Iran_war.html",
        keywords: ""
    },
    {
        type: "article",
        title: "Global Warming Is True; I See It in My Husband",
        description: "A personal reflection on rising heat, air conditioning guilt, and how global warming is changing everyday life.",
        url: "/htmls/global_warming.html",
        keywords: ""
    },
    {
        type: "article",
        title: "I Was on the List",
        description: "A true story about immigration, student visa issues, and the risk of deportation. A young student’s experience of fear, mistakes, and the second chance that shaped everything that followed.",
        url: "/htmls/list.html",
        keywords: "list immigration"
    },
    {
        type: "article",
        title: "The Strange Comfort of Keeping Busy",
        description: "The Strange Comfort of Keeping Busy On leaving a job, filling the silence, and what I found when I stopped.",
        url: "/htmls/busyness.html",
        keywords: "busyness silence"
    },
    {
        type: "article",
        title: "A Life, Then Silence",
        description: "When someone dies, what actually remains? A thoughtful exploration of identity, ownership, and the illusions we live by.",
        url: "/htmls/death.html",
        keywords: "death rituals silence tradition"
    },
    {
        type: "article",
        title: "Low-Maintenance Is a Lie We Tell Ourselves",
        description: "Being easy-going shouldn’t cost you your voice. Learn why expressing needs respectfully is essential for emotional well-being.",
        url: "/htmls/low-maintenance.html",
        keywords: "compromise"
    },
    {
        type: "article",
        title: "I Accept Luck Without Surrendering to Fate",
        description: "Do luck and fate exist, or are they just stories we tell ourselves to make sense of a chaotic universe?",
        url: "/htmls/luck-fate.html",
        keywords: "luck"
    },
    {
        type: "article",
        title: "No Gives the Power That Yes Cannot Give",
        description: "A personal reflection on the power of saying no, setting boundaries, and choosing honesty in relationships. Discover why a true “no” creates more meaningful “yeses.”",
        url: "/htmls/no-power.html",
        keywords: "power reflection"
    },
    {
        type: "article",
        title: "We All Are Performing on Social Media",
        description: "How social media shapes identity and authenticity, urging mindful use, algorithm awareness, and intentional self-curation.",
        url: "/htmls/social-media.html",
        keywords: "perform social media"
    },
    {
        type: "article",
        title: "Imposter Syndrome: Do You Feel It Too, or Am I the Only One?",
        description: "From self-doubt to self-belief—an honest reflection on imposter syndrome, early career fear, and the courage to trust your own capability.",
        url: "/htmls/imposter.html",
        keywords: "imposter syndrome"
    },
    {
        type: "article",
        title: "What Are We, If Not Our Memories?",
        description: "A reflection essay exploring how memories shape our identity—our joys, pains, and realities—revealing memory as both a blessing and a burden.",
        url: "/htmls/memories.html",
        keywords: "memories"
    },
    {
        type: "article",
        title: "How to Slow Down in a World That’s Running at Full Speed?",
        description: "Learn practical ways to slow down, find calm, and stay mindful in a world that’s always rushing at full speed.",
        url: "/htmls/slowdown.html",
        keywords: "slow down running"
    },
    {
        type: "article",
        title: "Imagining My Older Self and Accepting It Gracefully",
        description: "A reflection on ageing, companionship, vanity, and finding peace.",
        url: "/htmls/ageing-gracefully.html",
        keywords: "old age"
    },
    {
        type: "article",
        title: "From Good to Real: The Story of the New Indian Woman",
        description: "How Choice, Not Obedience, Defines Her.",
        url: "/htmls/new-indian-woman.html",
        keywords: ""
    },
    {
        type: "article",
        title: "Growing Up with My 20-Year-Old",
        description: "Lessons in Love, Letting Go, and Late-Night Biryani",
        url: "/htmls/growing-up.html",
        keywords: "growing 20 biryani"
    },
    {
        type: "article",
        title: "Menopause Burnt Me First, Then Hurt Me in Other Ways",
        description: "My journey through ten years of unexpected symptoms, struggles, and finally — acceptance.",
        url: "/htmls/menopause.html",
        keywords: "memopause symptoms struggles"
    },
    {
        type: "book",
        title: "Atmosphere",
        author: "Taylor Jenkins Reid",
        url: "/books/atmosphere.html"
    },
    {
        type: "book",
        title: "The Forty Rules of Love",
        author: "Elif Shafak",
        url: "/books/the-forty-rules-of-love.html"
    },
    {
        type: "book",
        title: "Kin",
        author: "Tayari Jones",
        url: "/books/kin.html"
    },
    {
        type: "book",
        title: "Beartown",
        author: "Fredrik Backman",
        url: "/books/beartown.html"
    },
    {
        type: "book",
        title: "Evidence of the Affair",
        author: "Taylor Jenkins Reid",
        url: "/books/evidence-of-the-affair.html"
    },
    {
        type: "book",
        title: "Mother Mary Comes To Me",
        author: "Arundhati Roy",
        url: "/books/mother-mary-comes-to-me.html"
    },
    {
        type: "book",
        title: "On Earth We Are Briefly Gorgeous",
        author: "Ocean Vuong",
        url: "/books/on-earth-we-are-briefly-gorgeous.html"
    },
    {
        type: "book",
        title: "The Answer Is No",
        author: "Fredrik Backman",
        url: "/books/the-answer-is-no.html"
    },
    {
        type: "book",
        title: "Whistler",
        author: "Ann Patchett",
        url: "/books/whistler.html"
    },
    {
        type: "book",
        title: "Anxious People",
        author: "Fredrik Backman",
        url: "/books/anxious-people.html"
    }

];