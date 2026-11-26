const articlesData = [
  {
    title: "Is Happiness the Goal? I Doubt.",
    excerpt: "Achieving more doesn’t make us happier. Knowing when enough is enough probably does.",
    slug: "happiness",
    mediumUrl: "https://medium.com/write-your-world/is-happiness-the-goal-i-doubt-454895eea334",
    date: "2026-11-11",
    thumbnail: "Images/articles/happiness.jpg"
  },
  {
    title: "Carl Jung’s Synchronicity Gave Me an Eerie Feeling",
    excerpt: "Three coincidences in two weeks. Mathematics, psychology and Carl Jung. All fail to convince me!",
    slug: "synchronicity",
    mediumUrl: "https://medium.com/write-your-world/carl-jungs-synchronicity-gave-me-an-eerie-feeling-59a0e85d1fc7",
    date: "2026-10-29",
    thumbnail: "Images/articles/synchronicity.jpg"
  },
  {
    title: "Am I Drinking the Hype?",
    excerpt: "Protein Powder: Is it the need or the taste? I’m still trying to figure out.",
    slug: "protein",
    date: "2026-09-29",
    thumbnail: "Images/articles/protein.jpg"
  },
  {
    title: "Why Insomniacs Must Read at Night",
    excerpt: "How reading before bed helps calm a restless mind and makes sleepless nights a little easier.",
    slug: "reading",
    mediumUrl: "https://medium.com/@shiru.gautam/why-insomniacs-must-read-at-night-7fe5b15c6412",
    date: "2026-09-11",
    thumbnail: "Images/articles/reading.jpg"
  },
  {
    title: "My Mother Thought Investing Wasn’t Her Domain. I Disagree.",
    excerpt: "Don't let fear hold back your financial freedom. Learn how women can take control of their financial future and start investing with confidence.",
    slug: "invest",
    mediumUrl: "https://medium.com/women-write/my-mother-thought-investing-wasnt-her-domain-i-disagree-cb918a729285",
    date: "2026-08-17",
    thumbnail: "Images/articles/invest.jpg"
  },
  {
    title: "I Met an Orchid, and It Made Me Question Myself",
    excerpt: "Living with an orchid husband made me question my dandelion nature. A personal essay on personality, resilience, flourishing, and family.",
    slug: "orchid",
    date: "2026-07-29",
    thumbnail: "Images/articles/orchid.jpg"
  },
  {
    title: "The Versions of Myself I have Missed",
    excerpt: "Why reuniting with old friends never quite feels the same — a personal essay on nostalgia, memory, and the selves we leave behind.",
    slug: "versions",
    mediumUrl: "https://medium.com/women-write/the-versions-of-myself-i-have-missed-8624364b6164",
    date: "2026-07-07",
    thumbnail: "Images/articles/versions.jpg"
  },
  {
    title: "I Am Not Rich, She Is Not Poor",
    excerpt: "A simple lottery question to my domestic help revealed an uncomfortable truth about money, security and the moving goalpost of enough.",
    slug: "richandpoor",
    mediumUrl: "https://medium.com/women-write/i-am-not-rich-she-is-not-poor-c78127c5da1b",
    date: "2026-06-29",
    thumbnail: "Images/articles/richandpoor.jpg"
  },
  {
    title: "Why We Feel Life Is Better Somewhere Else",
    excerpt: "Why do we dream of living elsewhere? A reflection on Fernweh, restlessness, and the belief that life is better away.",
    slug: "fernweh",
    mediumUrl: "https://medium.com/women-write/why-we-feel-life-is-better-somewhere-else-065f08efd638",
    date: "2026-06-18",
    thumbnail: "Images/articles/fernwah.jpg"
  },
  {
    title: "We Have Johatsu Everywhere",
    excerpt: "Exploring Johatsu, the Japanese phenomenon of people who voluntarily disappear, and what it reveals about freedom, escape and starting over.",
    slug: "johatsu",
    mediumUrl: "https://medium.com/women-write/we-have-johatsu-everywhere-e393842cd022",
    date: "2026-06-09",
    thumbnail: "Images/articles/johatsu.jpg"
  },
  {
    title: "US, Israel-Iran War Is Psychological Destruction",
    excerpt: "An ordinary Indian reflects on fear, anxiety, media overload, and uncertainty during the US–Israel–Iran war crisis.",
    slug: "US-Iran_war",
    date: "2026-05-26",
    thumbnail: "Images/articles/explosion.jpg"
  },
  {
    title: "Global Warming Is True; I See It in My Husband",
    excerpt: "A personal reflection on rising heat, air conditioning guilt, and how global warming is changing everyday life.",
    slug: "global_warming",
    date: "2026-05-16",
    thumbnail: "Images/articles/global_warming.jpg"
  },
  {
    title: "I Was on the List",
    excerpt: "A true story about immigration, student visa issues, and the risk of deportation. A young student’s experience of fear, mistakes, and the second chance that shaped everything that followed.",
    slug: "list",
    date: "2026-05-01",
    thumbnail: "Images/articles/list.jpg"
  },
  {
    title: "The Strange Comfort of Keeping Busy",
    excerpt: "A personal reflection on leaving a job, filling the silence with activity, and discovering what happens when we finally slow down.",
    slug: "busyness",
    mediumUrl: "https://medium.com/women-write/the-strange-comfort-of-keeping-busy-ea29c7fc8b30",
    date: "2026-04-24",
    thumbnail: "Images/articles/busyness.jpg"
  },
  {
    title: "A Life, Then Silence",
    excerpt: "When someone dies, what actually remains? A thoughtful exploration of identity, ownership, and the illusions we live by.",
    slug: "death",
    mediumUrl: "https://medium.com/women-write/a-life-then-silence-455dd413b2c8",
    date: "2026-04-19",
    thumbnail: "Images/articles/death.jpg"
  },
  {
    title: "Low-Maintenance Is a Lie We Tell Ourselves",
    excerpt: "Being easy-going shouldn’t cost you your voice. Learn why expressing needs respectfully is essential for emotional well-being.",
    slug: "low-maintenance",
    date: "2026-02-03",
    thumbnail: "Images/articles/low_maintenance.jpg"
  },
  {
    title: "I Accept Luck Without Surrendering to Fate",
    excerpt: "Do luck and fate exist, or are they just stories we tell ourselves to make sense of a chaotic universe?",
    slug: "luck-fate",
    date: "2025-12-07",
    thumbnail: "Images/articles/luck.jpg"
  },
  {
    title: "No Gives the Power That Yes Cannot Give",
    excerpt: "A personal reflection on the power of saying no, setting boundaries, and choosing honesty in relationships. Discover why a true “no” creates more meaningful “yeses.”",
    slug: "no-power",
    date: "2025-12-03",
    thumbnail: "Images/articles/no.jpg"
  },

  {
    title: "We All Are Performing on Social Media",
    excerpt: "How social media shapes identity and authenticity, urging mindful use, algorithm awareness, and intentional self-curation.",
    slug: "social-media",
    mediumUrl: "https://medium.com/women-write/we-all-are-performing-on-social-media-4306222dafa2",
    date: "2025-11-23",
    thumbnail: "Images/articles/social_media.jpg"
  },
  {
    title: "Imposter Syndrome: Do You Feel It Too, or Am I the Only One?",
    excerpt: "From self-doubt to self-belief—an honest reflection on imposter syndrome, early career fear, and the courage to trust your own capability.",
    slug: "imposter",
    date: "2025-11-17",
    thumbnail: "Images/articles/imposter.jpg"
  },
  {
    title: "What Are We, If Not Our Memories?",
    excerpt: "A reflection essay exploring how memories shape our identity—our joys, pains, and realities—revealing memory as both a blessing and a burden.",
    slug: "memories",
    mediumUrl: "https://medium.com/women-write/what-are-we-if-not-our-memories-e11d6043e366",
    date: "2025-11-13",
    thumbnail: "Images/articles/memories.jpg"
  },
  {
    title: "How to Slow Down in a World That’s Running at Full Speed?",
    excerpt: "Learn practical ways to slow down, find calm, and stay mindful in a world that’s always rushing at full speed.",
    slug: "slowdown",
    mediumUrl: "https://medium.com/women-write/how-to-slow-down-in-a-world-thats-running-at-full-speed-73848f03e8e8",
    date: "2025-11-01",
    thumbnail: "Images/articles/slowdown.jpg"
  },
  {
    title: "Imagining My Older Self and Accepting It Gracefully",
    excerpt: "A reflection on ageing, companionship, vanity, and finding peace.",
    slug: "ageing-gracefully",
    date: "2025-10-26",
    thumbnail: "Images/articles/aging.jpg"
  },

  {
    title: "From Good to Real: The Story of the New Indian Woman",
    excerpt: "How the expectations placed on Indian women are changing, and why choice, independence and self-expression matter more than obedience.",
    slug: "new-indian-woman",
    mediumUrl: "https://medium.com/women-write/from-good-to-real-the-story-of-the-new-indian-woman-089511731b50",
    date: "2025-10-18",
    thumbnail: "Images/articles/indian_women.jpg"
  },
  {
    title: "Growing Up with My 20-Year-Old",
    excerpt: "A personal essay about motherhood, growing alongside an adult child, learning to let go and finding unexpected joy in everyday moments.",
    slug: "growing-up",
    mediumUrl: "https://medium.com/women-write/growing-up-with-my-20-year-old-7038f31dd7e6",
    date: "2025-10-11",
    thumbnail: "Images/articles/twenty.jpg"
  },

  {
    title: "Menopause Burnt Me First, Then Hurt Me in Other Ways",
    excerpt: "My journey through ten years of unexpected symptoms, struggles, and finally — acceptance.",
    slug: "menopause",
    date: "2025-10-03",
    thumbnail: "Images/articles/menopause.jpg"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = articlesData;
} else {
  window.articlesData = articlesData;
}
