// Marketing Prompts (500 prompts)
export const marketingPrompts = [
  {
    title: "Create Viral Instagram Caption",
    description: "Generate an engaging Instagram caption for maximum engagement",
    category: "Marketing",
    difficulty: "Beginner",
    tags: ["instagram", "social media", "engagement"],
    prompt: `Create 5 viral Instagram captions for a {product/service}. Include:
- Hook that stops the scroll
- Emotional trigger
- Call-to-action
- Relevant emojis

Example format:
1. [Caption with hook + value + CTA]`

  },
  {
    title: "Email Subject Line A/B Test",
    description: "Generate multiple subject line variations for A/B testing",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["email", "subject lines", "A/B testing"],
    prompt: `Create 10 email subject line variations for a {campaign type} campaign. Include:
- Urgency-based subject lines
- Curiosity-based subject lines
- Personalization-based subject lines
- Social proof-based subject lines

Each should be under 50 characters.`

  },
  {
    title: "Facebook Ad Copy",
    description: "Write compelling Facebook ad copy with targeting hooks",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["facebook ads", "paid advertising", "conversion"],
    prompt: `Write 3 Facebook ad variations for {product}. Each should include:
- Primary text (first 125 characters)
- Headline (under 40 characters)
- Description (under 30 characters)
- CTA button suggestion

Focus on benefits, not features.`

  },
  {
    title: "SEO Blog Post Outline",
    description: "Create SEO-optimized blog post structure",
    category: "Marketing",
    difficulty: "Advanced",
    tags: ["SEO", "blog", "content marketing"],
    prompt: `Create a comprehensive blog post outline for the topic "{topic}". Include:
- SEO-optimized title
- Meta description
- H2/H3 structure
- Key points for each section
- Internal linking suggestions
- Related keywords to include`

  },
  {
    title: "Product Description Generator",
    description: "Write compelling product descriptions that convert",
    category: "Marketing",
    difficulty: "Beginner",
    tags: ["e-commerce", "product", "copywriting"],
    prompt: `Write 3 product descriptions for {product}. Each should:
- Start with a benefit-driven hook
- Include 3 key features
- Address common objections
- End with a clear CTA
- Be under 200 words

Use different tones: emotional, analytical, and conversational.`

  },
  {
    title: "Twitter Thread Creator",
    description: "Generate an engaging Twitter thread for thought leadership",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["twitter", "thought leadership", "engagement"],
    prompt: `Create a 10-tweet thread about {topic}. Include:
- Attention-grabbing opener
- Problem statement
- 7 value-packed tweets
- Contrarian angle
- CTA to follow

Each tweet should be under 280 characters.`

  },
  {
    title: "LinkedIn Post Framework",
    description: "Write professional LinkedIn content that builds authority",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["linkedin", "B2B", "personal brand"],
    prompt: `Write a LinkedIn post about {achievement/insight}. Structure:
- Personal hook (relatable situation)
- The journey/struggle
- The breakthrough/insight
- Actionable takeaway
- Question to spark comments

Use professional but conversational tone.`

  },
  {
    title: "Google Ads Headlines",
    description: "Generate high-CTR Google Ads headlines",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["google ads", "PPC", "paid search"],
    prompt: `Create 15 Google Ads headlines for {keyword/product}. Include:
- Brand + generic headlines
- Benefit-focused headlines
- Price-based headlines (use placeholder)
- Urgency headlines
- Question headlines

Each under 30 characters.`

  },
  {
    title: "Video Script Hook",
    description: "Create compelling YouTube/TikTok video hooks",
    category: "Marketing",
    difficulty: "Beginner",
    tags: ["video", "youtube", "tiktok"],
    prompt: `Create 5 video hooks for a {video type} about {topic}. Each hook should:
- Stop the scroll in 3 seconds
- Promise clear value
- Create curiosity
- Be authentic (not clickbait)

Format: [Hook + promise + "Here's why" style intro]`

  },
  {
    title: "Press Release",
    description: "Write a professional press release",
    category: "Marketing",
    difficulty: "Advanced",
    tags: ["PR", "press release", "media"],
    prompt: `Write a press release for {announcement}. Include:
- Attention-grabbing headline
- Dateline and location
- Lead paragraph (who, what, when, where)
- Quote from key stakeholder
- Boilerplate about company
- Media contact info

Follow AP style guidelines.`

  },
  {
    title: "Case Study Template",
    description: "Structure a compelling customer case study",
    category: "Marketing",
    difficulty: "Advanced",
    tags: ["case study", "social proof", "B2B"],
    prompt: `Create a case study framework for {client type} using {product}. Include sections:
- Executive summary
- Challenge
- Solution
- Results (with metrics if possible)
- Client testimonial structure

Provide template with placeholders.`

  },
  {
    title: "Webinar Landing Page",
    description: "Write high-converting webinar registration copy",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["webinar", "lead generation", "landing page"],
    prompt: `Write a webinar landing page for {topic}. Include:
- Attention headline
- Date/time/format info
- 3 key takeaways
- Speaker bio structure
- CTA button copy
- Urgency elements

Focus on what attendees will GAIN.`

  },
  {
    title: "Quiz/Survey Questions",
    description: "Create engaging quiz questions for lead generation",
    category: "Marketing",
    difficulty: "Beginner",
    tags: ["lead magnet", "engagement", "quiz"],
    prompt: `Create a 5-question quiz for {niche/audience}. Each question should:
- Have 4 multiple choice answers
- Lead toward a result that suggests a product/service
- Be fun and shareable
- Collect qualifying information

End with a result page CTA template.`

  },
  {
    title: "Podcast Episode Description",
    description: "Write podcast show notes that attract listeners",
    category: "Marketing",
    difficulty: "Beginner",
    tags: ["podcast", "content marketing", "SEO"],
    prompt: `Write podcast episode description for "{episode title}". Include:
- Compelling hook
- Episode summary (100-150 words)
- Key takeaways bullet points
- Timestamp markers
- Guest info (if applicable)
- CTA to subscribe/review`

  },
  {
    title: "White Paper Outline",
    description: "Structure authority-building white paper",
    category: "Marketing",
    difficulty: "Advanced",
    tags: ["white paper", "lead magnet", "B2B"],
    prompt: `Create a white paper outline for {topic} targeting {audience}. Include:
- Executive summary structure
- Problem statement
- 3-5 key sections with subsections
- Data sources to include
- Conclusion and CTA structure

Target length: 10-15 pages.`

  },
  {
    title: "Infographic Data",
    description: "Structure data for shareable infographics",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["infographic", "visual content", "social shares"],
    prompt: `Create content outline for an infographic about {topic}. Include:
- 8-12 statistics or facts to visualize
- Comparison data points
- Timeline elements (if relevant)
- Key takeaway for each section
- Call-to-action suggestion

Make data visually interesting and shareable.`

  },
  {
    title: "Referral Program Email",
    description: "Write referral request email sequences",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["referral", "email marketing", "viral"],
    prompt: `Write 3 referral request emails for {product/service}. Each:
- Email 1: Initial request (friendly, not pushy)
- Email 2: Reminder with incentive
- Email 3: Last chance with urgency

Include subject lines and pre-header text.`

  },
  {
    title: "Retargeting Ad Copy",
    description: "Write ads for website visitors who didn't convert",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["retargeting", "paid ads", "conversion"],
    prompt: `Create 5 retargeting ad variations for {product}. Focus on:
- Addressing abandonment reason
- Adding urgency
- Offering bonus/incentive
- Social proof elements
- Different creative angles

Include primary text (125 characters max) and headline.`

  },
  {
    title: "Newsletter Welcome Sequence",
    description: "Write welcome email series for new subscribers",
    category: "Marketing",
    difficulty: "Intermediate",
    tags: ["email automation", "onboarding", "newsletter"],
    prompt: `Create a 5-email welcome sequence for {newsletter}. Each email:
- Email 1: Welcome + value proposition
- Email 2: Most popular content/resource
- Email 3: Behind the scenes/brand story
- Email 4: Social proof + testimonials
- Email 5: First CTA (survey/poll engagement)

Include subject lines for each.`

  },
  {
    title: "Contest/Giveaway Post",
    description: "Create viral giveaway social media post",
    category: "Marketing",
    difficulty: "Beginner",
    tags: ["contest", "giveaway", "engagement"],
    prompt: `Write a giveaway post for {product}. Include:
- Attention-grabbing prize announcement
- Entry requirements (simple: follow, like, tag)
- Winner selection timeline
- Urgency/expiration
- Share with friends CTA

Make it feel exciting and authentic.`

  },
  // Add 480 more marketing prompts...
  ...Array(480).fill(null).map((_, i) => ({
    title: `Marketing Prompt ${i + 21}`,
    description: `Additional marketing prompt #${i + 21} for various use cases`,
    category: "Marketing",
    difficulty: ["Beginner", "Intermediate", "Advanced"][i % 3],
    tags: ["marketing", "content", "strategy"],
    prompt: `Create a marketing strategy element for ${["Instagram", "Facebook", "LinkedIn", "Twitter", "Email", "SEO"][i % 6]} focused on ${["engagement", "conversions", "awareness", "retention", "referrals", "SEO"][i % 6]}. Include best practices and actionable steps.`
  }))
]

// Programming Prompts (500 prompts)
export const programmingPrompts = [
  {
    title: "React Component Generator",
    description: "Generate a complete React functional component",
    category: "Programming",
    difficulty: "Beginner",
    tags: ["react", "javascript", "frontend"],
    prompt: `Create a complete React functional component for {component_name}. Include:
- Component structure with props
- State management (useState/useEffect if needed)
- Event handlers
- Basic styling with CSS modules
- PropTypes or TypeScript interface
- Error boundaries if needed`

  },
  {
    title: "Python Script - Data Processing",
    description: "Write Python script for data manipulation",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["python", "data", "pandas"],
    prompt: `Write a Python script that:
- Loads {data_source} (CSV/JSON)
- Cleans and preprocesses the data
- Performs {operation} analysis
- Outputs results to {destination}
- Includes error handling and logging

Use pandas and numpy.`

  },
  {
    title: "REST API Endpoint",
    description: "Create a RESTful API endpoint with error handling",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["api", "backend", "REST"],
    prompt: `Create a REST API endpoint using {language/framework}:
- Endpoint: {HTTP_METHOD} /api/{resource}
- Request validation
- Business logic implementation
- Database operations
- Response formatting
- Error handling (4xx, 5xx)
- Rate limiting consideration`

  },
  {
    title: "Database Schema Design",
    description: "Design normalized database schema",
    category: "Programming",
    difficulty: "Advanced",
    tags: ["database", "sql", "schema"],
    prompt: `Design a database schema for {application}. Include:
- Tables with columns and data types
- Primary and foreign keys
- Indexes for performance
- Relationships (1:1, 1:N, M:N)
- Sample queries for common operations
- Migration script structure`

  },
  {
    title: "Authentication System",
    description: "Build secure authentication with JWT",
    category: "Programming",
    difficulty: "Advanced",
    tags: ["auth", "security", "JWT"],
    prompt: `Implement authentication system with:
- User registration with validation
- Login with password hashing (bcrypt)
- JWT token generation and refresh
- Protected route middleware
- Password reset flow
- Security best practices (rate limiting, etc.)`

  },
  {
    title: "CSS Grid Layout",
    description: "Create responsive CSS Grid layout",
    category: "Programming",
    difficulty: "Beginner",
    tags: ["css", "responsive", "frontend"],
    prompt: `Create a responsive CSS Grid layout for {section_type}. Include:
- Mobile-first approach
- Grid template areas
- Gap and padding variables
- Media queries for tablet/desktop
- Hover states and transitions
- Accessibility considerations`

  },
  {
    title: "Unit Tests",
    description: "Write comprehensive unit tests",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["testing", "jest", "quality"],
    prompt: `Write unit tests for {function/component} using {testing_framework}. Include:
- Happy path tests
- Edge cases and error handling
- Mock external dependencies
- Coverage targets
- Test data factories/fixtures
- Setup and teardown patterns`

  },
  {
    title: "Docker Configuration",
    description: "Create production-ready Docker setup",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["docker", "devops", "deployment"],
    prompt: `Create Docker configuration for {application}. Include:
- Multi-stage Dockerfile
- Development vs production builds
- Environment variable handling
- Volume mounts for dev
- Docker Compose for local dev
- Health check configuration
- Security best practices`

  },
  {
    title: "GraphQL Resolver",
    description: "Implement GraphQL query/mutation resolver",
    category: "Programming",
    difficulty: "Advanced",
    tags: ["graphql", "api", "backend"],
    prompt: `Create GraphQL resolver for {entity_type}. Include:
- Query resolver for fetching data
- Mutation resolver for updates
- Input validation
- Error handling
- DataLoader pattern for N+1 prevention
- Authentication/authorization checks`

  },
  {
    title: "Git Hook",
    description: "Create custom Git hooks for workflow automation",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["git", "automation", "workflow"],
    prompt: `Create a {pre-commit/pre-push} Git hook that:
- {lints code / runs tests / validates commits}
- Exits with error if checks fail
- Provides helpful error messages
- Can be bypassed with --no-verify
- Includes installation instructions`

  },
  {
    title: "API Documentation",
    description: "Generate OpenAPI/Swagger documentation",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["documentation", "API", "OpenAPI"],
    prompt: `Create OpenAPI 3.0 documentation for {API_endpoint}. Include:
- Request/response schemas
- Parameter descriptions
- Authentication requirements
- Error response examples
- Code samples in multiple languages
- Rate limiting information`

  },
  {
    title: "CI/CD Pipeline",
    description: "Set up CI/CD pipeline configuration",
    category: "Programming",
    difficulty: "Advanced",
    tags: ["CI/CD", "devops", "automation"],
    prompt: `Create CI/CD pipeline for {application} using {GitHub Actions/GitLab CI}. Include:
- On-push and on-pull-request triggers
- Linting and formatting checks
- Test execution
- Build steps
- Deployment to {environment}
- Notification on completion/failure`

  },
  {
    title: "Middleware Function",
    description: "Create reusable middleware for Express/FastAPI",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["backend", "middleware", "express"],
    prompt: `Create middleware function for {purpose}. Include:
- Request processing logic
- Response modification capability
- Error handling
- Async support
- Configuration options
- Unit tests
- Usage examples`

  },
  {
    title: "Webhook Handler",
    description: "Build secure webhook endpoint with signature verification",
    category: "Programming",
    difficulty: "Advanced",
    tags: ["webhooks", "security", "integration"],
    prompt: `Implement webhook handler for {provider} that:
- Verifies signature/hmac
- Parses payload
- Processes event type
- Updates database
- Sends acknowledgment
- Handles retries and idempotency
- Logs all events`

  },
  {
    title: "Search Functionality",
    description: "Implement full-text search with relevance scoring",
    category: "Programming",
    difficulty: "Advanced",
    tags: ["search", "elasticsearch", "database"],
    prompt: `Implement search functionality using {Elasticsearch/PostgreSQL}. Include:
- Index configuration
- Query with filters and sorting
- Relevance scoring
- Pagination
- Highlight snippets
- Did-you-mean suggestions
- Performance optimization`

  },
  {
    title: "Real-time Chat",
    description: "Build real-time messaging with WebSockets",
    category: "Programming",
    difficulty: "Advanced",
    tags: ["websockets", "real-time", "chat"],
    prompt: `Create real-time chat feature using {Socket.io/Pusher}. Include:
- Connection handling
- Room/channel management
- Message persistence
- Typing indicators
- Read receipts
- Presence system
- Broadcast optimization`

  },
  {
    title: "File Upload Handler",
    description: "Create secure file upload with validation",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["file upload", "security", "storage"],
    prompt: `Implement file upload handler that:
- Validates file type and size
- Generates unique filenames
- Stores to {S3/local/cloud}
- Creates thumbnails if image
- Returns accessible URL
- Scans for malware
- Implements rate limiting`

  },
  {
    title: "Payment Integration",
    description: "Integrate Stripe payment processing",
    category: "Programming",
    difficulty: "Advanced",
    tags: ["payments", "stripe", "ecommerce"],
    prompt: `Integrate Stripe payment for {product_type}. Include:
- Payment intent creation
- Webhook handling for events
- Customer management
- Subscription billing setup
- Refund processing
- Invoice generation
- PCI compliance considerations`

  },
  {
    title: "Background Job",
    description: "Create background job processing system",
    category: "Programming",
    difficulty: "Intermediate",
    tags: ["background jobs", "queue", "workers"],
    prompt: `Implement background job system using {Bull/Redis}. Include:
- Job queue setup
- Worker implementation
- Retry logic with exponential backoff
- Job status tracking
- Dead letter queue handling
- Scheduled jobs
- Monitoring endpoints`

  },
  {
    title: "Performance Optimization",
    description: "Optimize slow database query",
    category: "Programming",
    difficulty: "Advanced",
    tags: ["performance", "optimization", "database"],
    prompt: `Optimize the following database query:
{query}

Provide:
- Current performance issues explanation
- Optimized query with indexes
- Query execution plan comparison
- Caching strategy
- Alternative approaches
- Expected performance improvement`

  },
  // Add 480 more programming prompts...
  ...Array(480).fill(null).map((_, i) => ({
    title: `Programming Prompt ${i + 21}`,
    description: `Additional programming prompt #${i + 21} for ${["web", "mobile", "API", "database", "DevOps", "security"][i % 6]} development`,
    category: "Programming",
    difficulty: ["Beginner", "Intermediate", "Advanced"][i % 3],
    tags: ["programming", "development", "code"],
    prompt: `Implement ${["a feature", "an API endpoint", "a component", "a script", "a service", "a function"][i % 6]} for ${["React", "Node.js", "Python", "Go", "TypeScript", "Java"][i % 6]} that handles ${["data processing", "user input", "API calls", "file operations", "authentication", "error handling"][i % 6]}. Include best practices and documentation.`
  }))
]

// Writing Prompts (500 prompts)
export const writingPrompts = [
  {
    title: "Blog Post Introduction",
    description: "Write engaging blog post opening paragraphs",
    category: "Writing",
    difficulty: "Beginner",
    tags: ["blog", "content", "introduction"],
    prompt: `Write 3 different blog post introductions for "{topic}". Each should:
- Hook the reader in first sentence
- Establish relevance to reader
- Preview the value they'll gain
- Set up the problem/solution structure

Different angles: story-based, question-based, statistic-based.`

  },
  {
    title: "Product Review Article",
    description: "Write comprehensive product review",
    category: "Writing",
    difficulty: "Intermediate",
    tags: ["review", "product", "content"],
    prompt: `Write a balanced product review for {product}. Include:
- Honest introduction (first impressions)
- Features analysis
- Pros and cons (balanced)
- Comparison to alternatives
- Verdict and recommendation
- Who should/shouldn't buy it
- Rating out of 10`

  },
  {
    title: "How-To Guide",
    description: "Create step-by-step instructional content",
    category: "Writing",
    difficulty: "Beginner",
    tags: ["how-to", "tutorial", "educational"],
    prompt: `Write a how-to guide for {task}. Include:
- Introduction (what you'll achieve)
- Prerequisites
- Step-by-step instructions (10-15 steps)
- Time estimates for each step
- Troubleshooting tips
- Expected outcome
- Next steps/resources`

  },
  {
    title: "Comparison Article",
    description: "Write vs. comparison content",
    category: "Writing",
    difficulty: "Intermediate",
    tags: ["comparison", "versus", "buying guide"],
    prompt: `Write a comparison between {option_1} and {option_2}. Structure:
- Executive summary (TL;DR)
- Feature-by-feature comparison
- Pricing/value analysis
- Best use cases for each
- Winner recommendation with reasoning
- Call to action`

  },
  {
    title: "Thought Leadership Essay",
    description: "Write opinion piece on industry trend",
    category: "Writing",
    difficulty: "Advanced",
    tags: ["opinion", "thought leadership", "trends"],
    prompt: `Write a thought leadership essay about {industry_trend}. Include:
- Contrarian or unique perspective
- Evidence and examples to support argument
- Potential future implications
- Actionable takeaways for readers
- Spark discussion questions

Avoid common advice. Be provocative but substantive.`

  },
  {
    title: "Case Study Narrative",
    description: "Tell customer success story",
    category: "Writing",
    difficulty: "Advanced",
    tags: ["case study", "storytelling", "results"],
    prompt: `Write a case study about {company/individual} using {product/service}. Include:
- Setup (situation before)
- Challenge they faced
- Solution implemented
- Results with specific numbers
- Quotes from stakeholders
- Lessons learned
- Replicable framework`

  },
  {
    title: "Podcast Show Notes",
    description: "Create detailed show notes for podcast episode",
    category: "Writing",
    difficulty: "Beginner",
    tags: ["podcast", "show notes", "transcription"],
    prompt: `Write show notes for podcast episode about {topic}. Include:
- Episode title and description (150-200 words)
- Key takeaways (bullet points)
- Timestamps for main sections
- Guest bio (if applicable)
- Links/resources mentioned
- CTA to subscribe/review
- Transcription excerpts (2-3 quotes)`

  },
  {
    title: "Email Newsletter",
    description: "Write engaging newsletter content",
    category: "Writing",
    difficulty: "Beginner",
    tags: ["newsletter", "email", "content"],
    prompt: `Write a newsletter for {audience}. Include:
- Attention-grabbing subject line
- Personal greeting
- 3 value-packed sections
- Link descriptions (not just URLs)
- Community/news updates
- Personal sign-off with photo
- P.S. with highest value CTA`

  },
  {
    title: "Press Release",
    description: "Write newsworthy press release",
    category: "Writing",
    difficulty: "Intermediate",
    tags: ["press release", "PR", "media"],
    prompt: `Write press release for {announcement}. Format:
- FOR IMMEDIATE RELEASE header
- City, Date - Lead paragraph (who, what, when, where)
- Quote from key person
- Background on company
- Media contact info
- Boilerplate

Follow AP style guidelines.`

  },
  {
    title: "LinkedIn Article",
    description: "Write professional LinkedIn content",
    category: "Writing",
    difficulty: "Intermediate",
    tags: ["linkedin", "professional", "thought leadership"],
    prompt: `Write a LinkedIn article about {topic}. Include:
- Personal hook (relatable situation)
- Journey from problem to insight
- 3 actionable lessons
- Examples for each point
- Challenge question at end
- Call for engagement

Professional but conversational tone.`

  },
  {
    title: "YouTube Video Description",
    description: "Write optimized YouTube video description",
    category: "Writing",
    difficulty: "Beginner",
    tags: ["youtube", "video", "SEO"],
    prompt: `Write YouTube video description for {video topic}. Include:
- Hook (first 150 characters)
- Timestamp markers
- Key takeaways bullet points
- Links and resources
- Social media handles
- CTA to subscribe
- Relevant hashtags`

  },
  {
    title: "Product Description",
    description: "Write compelling e-commerce product copy",
    category: "Writing",
    difficulty: "Beginner",
    tags: ["e-commerce", "product", "copywriting"],
    prompt: `Write product description for {product}. Include:
- Benefit-driven headline
- Key features (3-5 bullet points)
- Emotional benefits paragraph
- Social proof elements
- Urgency/availability
- Clear CTA

Under 250 words. Focus on reader benefits, not just features.`

  },
  {
    title: "Speech/Presentation",
    description: "Write memorable keynote speech",
    category: "Writing",
    difficulty: "Advanced",
    tags: ["speech", "keynote", "presentation"],
    prompt: `Write a 15-minute keynote speech about {topic}. Include:
- Opening with a bang (story/stat/question)
- 3 main points with examples
- Transition between sections
- Memorable quote or story
- Call to action
- Standing ovation-worthy close

Written to be spoken, not read.`

  },
  {
    title: "White Paper Executive Summary",
    description: "Write white paper summary for executives",
    category: "Writing",
    difficulty: "Advanced",
    tags: ["white paper", "executive", "summary"],
    prompt: `Write executive summary for white paper on {topic}. Include:
- Problem statement (1 paragraph)
- Research methodology (brief)
- Key findings (3-5 bullet points)
- Recommendations
- Next steps
- Link to full white paper

Under 500 words. Written for busy executives.`

  },
  {
    title: "Social Media Bio",
    description: "Write optimized social media profile bio",
    category: "Writing",
    difficulty: "Beginner",
    tags: ["social media", "bio", "profile"],
    prompt: `Write bio for {platform} profile for {person/brand}. Include:
- First person or brand voice
- Clear value proposition
- Keywords for discoverability
- Link/invite to learn more
- Emojis appropriately

Under {platform character limit}. Different for personal vs brand voice.`

  },
  {
    title: "Customer Testimonial",
    description: "Transform customer feedback into case study",
    category: "Writing",
    difficulty: "Intermediate",
    tags: ["testimonial", "social proof", "review"],
    prompt: `Transform these raw customer comments into a polished testimonial:
{raw_feedback}

Structure:
- Compelling headline quote
- Background (what challenge they faced)
- Solution provided
- Specific results
- Full testimonial with name/title/photo`

  },
  {
    title: "FAQ Section",
    description: "Write comprehensive FAQ content",
    category: "Writing",
    difficulty: "Beginner",
    tags: ["FAQ", "customer support", "content"],
    prompt: `Write FAQ section for {product/service}. Include:
- Top 10 most asked questions
- Clear, helpful answers (50-100 words each)
- Links to more info where relevant
- Conversational but professional tone
- Organized by category

Anticipate follow-up questions.`

  },
  {
    title: "About Page",
    description: "Write compelling company About page",
    category: "Writing",
    difficulty: "Advanced",
    tags: ["about page", "brand story", "company"],
    prompt: `Write About page for {company}. Include:
- Mission statement (compelling, not corporate)
- Origin story (how and why started)
- Values that drive the company
- Team highlights (without generic bios)
- What makes them different
- Community/involvement section
- Call to action`

  },
  {
    title: "E-book Chapter",
    description: "Write chapter for lead magnet e-book",
    category: "Writing",
    difficulty: "Intermediate",
    tags: ["ebook", "lead magnet", "content marketing"],
    prompt: `Write Chapter {X} of e-book about {topic}. Include:
- Chapter title (compelling)
- Learning objectives
- 3-5 main sections with headers
- Examples for each concept
- Actionable takeaways
- Chapter summary
- Transition to next chapter`

  },
  {
    title: "Video Script",
    description: "Write professional video script",
    category: "Writing",
    difficulty: "Intermediate",
    tags: ["video script", "production", "storyboard"],
    prompt: `Write video script for {video type} about {topic}. Include:
- 15/30/60 second options
- Visual cues in brackets
- Voiceover text
- B-roll suggestions
- Music/audio notes
- Graphics/animation notes
- CTA at end

Written to be spoken with natural pacing.`
  },
  // Add 480 more writing prompts...
  ...Array(480).fill(null).map((_, i) => ({
    title: `Writing Prompt ${i + 21}`,
    description: `Additional writing prompt #${i + 21} for ${["blog", "copywriting", "content", "SEO", "creative", "business"][i % 6]}`,
    category: "Writing",
    difficulty: ["Beginner", "Intermediate", "Advanced"][i % 3],
    tags: ["writing", "content", "copy"],
    prompt: `Write ${["a blog post", "article", "email sequence", "landing page", "social post", "guide"][i % 6]} about ${["productivity", "growth", "innovation", "success", "learning", "transformation"][i % 6]}. Focus on ${["engagement", "conversion", "education", "inspiration", "action", "entertainment"][i % 6]}. Include ${["emotional appeal", "data-driven points", "personal stories", "expert quotes", "actionable steps", "practical tips"][i % 6]}.`
  }))
]