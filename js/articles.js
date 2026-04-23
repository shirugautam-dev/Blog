const params = new URLSearchParams(window.location.search);
const postSlug = params.get("post");


  const articles = [
    {
      title: "A Life, Then Silence",
      excerpt: "When someone dies, what actually remains? A thoughtful exploration of identity, ownership, and the illusions we live by.",
      slug: "death",
      date: "2026-04-19"
    },
    {
      title: "Low-Maintenance Is a Lie We Tell Ourselves",
      excerpt: "Being easy-going shouldn’t cost you your voice. Learn why expressing needs respectfully is essential for emotional well-being.",
      slug: "low-maintenance",
      date: "2026-02-03"
    },
    {
      title: "I Accept Luck Without Surrendering to Fate",
      excerpt: "Do luck and fate exist, or are they just stories we tell ourselves to make sense of a chaotic universe?",
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
      date: "2025-11-17"
    },
    {
      title: "What Are We, If Not Our Memories?",
      excerpt: "A reflection essay exploring how memories shape our identity—our joys, pains, and realities—revealing memory as both a blessing and a burden.",
      slug: "memories",
      date: "2025-11-13"
    },
    {
      title: "How to Slow Down in a World That’s Running at Full Speed?",
      excerpt: "Learn practical ways to slow down, find calm, and stay mindful in a world that’s always rushing at full speed.",
      slug: "slowdown",
      date: "2025-11-01"
    },
    {
      title: "Imagining My Older Self and Accepting It Gracefully",
      excerpt: "A reflection on ageing, companionship, vanity, and finding peace.",
      slug: "ageing-gracefully",
      date: "2025-10-26"
    },

    {
      title: "From Good to Real: The Story of the New Indian Woman",
      excerpt: "How Choice, Not Obedience, Defines Her.",
      slug: "new-indian-woman",
      date: "2025-10-18"
    },
    {
      title: "Growing Up with My 20-Year-Old",
      excerpt: "Lessons in Love, Letting Go, and Late-Night Biryani",
      slug: "growing-up",
      date: "2025-10-11"
    },

    {
      title: "Menopause Burnt Me First, Then Hurt Me in Other Ways",
      excerpt: "My journey through ten years of unexpected symptoms, struggles, and finally — acceptance.",
      slug: "menopause",
      date: "2025-10-03"
    }

  ];
  const container = document.getElementById("articles");
  const articlesPerPage = 8;
  const input = document.querySelector(".search-container input");
  let searchTerm = "";
  if (input) {
    input.addEventListener("input", (e) => {
    searchTerm = e.target.value.toLowerCase();
    const url = new URL(window.location);
    url.searchParams.set('page', '1');
    window.history.pushState({}, '', url);
    render();
    });
  }
  
  function render() {
    if (!container) return;

    // 1. Filter based on search input
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
        <h1><span>Srijana’s</span> thoughts</h1>
        <div class="search-container">
          <input type="text" placeholder="Search thoughts..." value="${searchTerm}" />        
        </div>
      </div>
    `;

    // 4. Render Articles
    if (paginatedArticles.length === 0) {
      container.innerHTML += `<p>No articles yet</p>`;
    } else {
      paginatedArticles.forEach(article => {
        const post = document.createElement("article");
        post.className = "srijana-post";

        const url = `https://shirugautam-dev.github.io/Blog/htmls/${article.slug}.html"`;

        const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });

        post.innerHTML = `
    <h2><a href="/Blog/htmls/${article.slug}.html">${article.title}</a></h2>
    <p>${article.excerpt}</p>

    <p class="post-meta">
      Published in Medium on ${formattedDate}
    </p>

    <div class="share-container">
  <span class="share-label">Share:</span>

  <a href="https://twitter.com/intent/tweet?url=${url}&text=${article.title}" target="_blank" class="share-btn">
    <i class="fa-brands fa-x-twitter"></i>
  </a>

  <a href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" class="share-btn">
    <i class="fa-brands fa-linkedin"></i>
  </a>

  <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" class="share-btn">
    <i class="fa-brands fa-facebook"></i>
  </a>

  <a href="https://wa.me/?text=${url}" target="_blank" class="share-btn">
    <i class="fa-brands fa-whatsapp"></i>
  </a>
</div>
  `;

        container.appendChild(post);
      });
    }
    // 5. Render Pagination Controls
    const totalPages = Math.ceil(filtered.length / articlesPerPage);
    const nav = document.createElement("div");
    nav.className = "pagination-container";
    nav.style.display = "flex";
    nav.style.gap = "10px";
    nav.style.justifyContent = "center";
    nav.style.marginTop = "30px";

    // Always show first page
    nav.innerHTML += `<a href="?page=1" class="${currentPage === 1 ? 'active-page' : ''}">1</a>`;

    // Show "..." if needed before current range
    if (currentPage > 3) {
      nav.innerHTML += `<span>...</span>`;
    }

    // Show pages around current page
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        nav.innerHTML += `<a href="?page=${i}" class="${i === currentPage ? 'active-page' : ''}">${i}</a>`;
      }
    }

    // Show "..." if needed after current range
    if (currentPage < totalPages - 2) {
      nav.innerHTML += `<span>...</span>`;
    }

    // Always show last page
    if (totalPages > 1) {
      nav.innerHTML += `<a href="?page=${totalPages}" class="${currentPage === totalPages ? 'active-page' : ''}">${totalPages}</a>`;
    }

    container.appendChild(nav);
  }

  

  render(); // Initial call

