const params = new URLSearchParams(window.location.search);
const postSlug = params.get("post");

if (!postSlug) {
  const articles = [
   {
    title: "Low-Maintenance Is a Lie We Tell Ourselves",
    excerpt: "Being easy-going shouldn’t cost you your voice. Learn why expressing needs respectfully is essential for emotional well-being.",
    slug: "low-maintenance",
    date: "2026-02-03"   
  }, 
  {
    title: "I Accept Luck Without Surrendering to Fate",
    excerpt:"Do luck and fate exist, or are they just stories we tell ourselves to make sense of a chaotic universe?",
    slug: "luck-fate",
    date: "2025-12-07" 
  }, 
  {
    title: "No Gives the Power That Yes Cannot Give",
    excerpt: "A personal reflection on the power of saying no, setting boundaries, and choosing honesty in relationships. Discover why a true “no” creates more meaningful “yeses.”",
    slug: "no-power",
    date: "2025-12-03"  
  },  
  
  {
    title: "We All Are Performing on Social Media",
    excerpt: "How social media shapes identity and authenticity, urging mindful use, algorithm awareness, and intentional self-curation.",
    slug: "social-media",
    date: "2025-11-23" 
  },
  {
    title: "Imposter Syndrome: Do You Feel It Too, or Am I the Only One?",
    excerpt: "From self-doubt to self-belief—an honest reflection on imposter syndrome, early career fear, and the courage to trust your own capability.",
    slug: "imposter",
    date : "2025-11-17" 
  },
  {
    title: "What Are We, If Not Our Memories?",
    excerpt: "A reflection essay exploring how memories shape our identity—our joys, pains, and realities—revealing memory as both a blessing and a burden.",
    slug: "memories",
    date : "2025-11-13"
  },
    {
    title: "How to Slow Down in a World That’s Running at Full Speed?",
    excerpt: "Learn practical ways to slow down, find calm, and stay mindful in a world that’s always rushing at full speed.",
    slug: "slowdown",
    date : "2025-11-01"  
  },
    {
      title: "Imagining My Older Self and Accepting It Gracefully",
      excerpt: "A reflection on ageing, companionship, vanity, and finding peace.",
      slug: "ageing-gracefully",
      date : "2025-10-26"
    },
    
    {
      title: "From Good to Real: The Story of the New Indian Woman",
      excerpt: "How Choice, Not Obedience, Defines Her.",
      slug: "new-indian-woman",
      date : "2025-10-18"
    },
    {
      title: "Growing Up with My 20-Year-Old",
      excerpt: "Lessons in Love, Letting Go, and Late-Night Biryani",
      slug: "growing-up",
      date : "2025-10-11"
    },

  {
      title: "Menopause Burnt Me First, Then Hurt Me in Other Ways",
      excerpt: "My journey through ten years of unexpected symptoms, struggles, and finally — acceptance.",
      slug: "menopause",
      date : "2025-10-03"
    }

  ];
  const container = document.getElementById("articles");
  const searchInput = document.querySelector(".search-container input");
  const articlesPerPage = 3;

  function render() {
    if (!container) return;

   // 1. Filter based on search input
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
    const filtered = articles.filter(art => 
      art.title.toLowerCase().includes(searchTerm) || 
      art.excerpt.toLowerCase().includes(searchTerm)
    );

    // 2. Handle Pagination
    const pageParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(pageParams.get("page")) || 1;
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const paginatedArticles = filtered.slice(startIndex, endIndex);

    // 3. Render Header
    container.innerHTML = `
      <div class="home-header">
        <h1>Srijana’s thoughts</h1>
        <a href="book-reviews.html" class="header-link">BOOK REVIEWS</a>
      </div>
    `;
  // const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
  // year: "numeric",
  // month: "long",
  // day: "numeric"
  //   });
    // 4. Render Articles
    if (paginatedArticles.length === 0) {
      container.innerHTML += `<p>No articles found.</p>`;
    } else {
      paginatedArticles.forEach(article => {
        const post = document.createElement("article");
        post.className = "srijana-post";
        post.innerHTML = `
          <h2><a href="?post=${article.slug}">${article.title}</a></h2>
          <p>${article.excerpt}</p>
          <p style="color: #888; font-size: 13px; margin-top: 6px;">
    Published in Medium on ${article.date}</p>
        `;
        container.appendChild(post);
      });
    }

    // 5. Render Pagination Controls
    const nav = document.createElement("div");
    nav.className = "pagination-container";
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.marginTop = "20px";

    if (currentPage > 1) {
      nav.innerHTML += `<a href="?page=${currentPage - 1}" class="read-more">← Previous</a>`;
    }
    if (endIndex < filtered.length) {
      nav.innerHTML += `<a href="?page=${currentPage + 1}" class="read-more" style="margin-left:auto">Next →</a>`;
    }
    container.appendChild(nav);
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      // Reset to page 1 when searching
      const url = new URL(window.location);
      url.searchParams.set('page', '1');
      window.history.pushState({}, '', url);
      render();
    });
  }

  render(); // Initial call
}
