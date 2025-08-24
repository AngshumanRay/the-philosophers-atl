# The Philosopher's Atlas - Product Requirements Document

An interactive digital atlas that transforms the vast landscape of philosophical thought into an accessible, beautifully organized exploration platform where users can discover philosophers, explore their ideas through curated topics, and instantly compare perspectives across different thinkers.

**Experience Qualities**:
1. **Scholarly** - Should feel intellectually rigorous and academically credible, like browsing a premium university library
2. **Intuitive** - Complex philosophical concepts should be organized in ways that feel naturally discoverable and interconnected
3. **Contemplative** - The design should encourage deep thinking and reflection, with a calm, focused atmosphere

**Complexity Level**: Light Application (multiple features with basic state)
- Manages multiple philosophers, topics, and comparison states while maintaining simplicity in navigation and core interactions

## Essential Features

### Philosopher Directory
- **Functionality**: Browse comprehensive profiles of major philosophers with biographical info, key works, and philosophical schools
- **Purpose**: Provides entry point and context for understanding each thinker's background and significance
- **Trigger**: User clicks "Explore Philosophers" or selects from navigation
- **Progression**: Directory view → Philosopher card selection → Detailed profile → Topic exploration
- **Success criteria**: Users can easily find and learn about philosophers they're interested in

### Topic-Based Content Organization
- **Functionality**: Organize philosophical content by universal themes (Ethics, Free Will, Truth, etc.) rather than just by philosopher
- **Purpose**: Allows cross-philosophical exploration and makes complex ideas more approachable
- **Trigger**: User selects topic from main navigation or philosopher profile
- **Progression**: Topic selection → Philosopher perspectives list → Individual perspective reading → Related topics
- **Success criteria**: Users can explore how different philosophers approach the same fundamental questions

### Side-by-Side Comparison Tool
- **Functionality**: Select any two philosophers and instantly see their positions on chosen topics displayed in parallel
- **Purpose**: Highlights philosophical debates and contrasting viewpoints for deeper understanding
- **Trigger**: User clicks "Compare" button or uses comparison interface
- **Progression**: Philosopher A selection → Philosopher B selection → Topic selection → Side-by-side display → Topic switching
- **Success criteria**: Users can easily understand how different thinkers approach the same questions

### Guided Reading Experience
- **Functionality**: Curated excerpts and summaries organized by difficulty and relevance
- **Purpose**: Makes dense philosophical texts accessible without losing their essential meaning
- **Trigger**: User clicks on specific topic under a philosopher
- **Progression**: Topic selection → Content difficulty choice → Reading with context → Related explorations
- **Success criteria**: Users can engage with philosophical content at their comfort level

## Edge Case Handling

- **Empty Search Results**: Show suggested similar philosophers and topics with educational context
- **Complex Philosophical Terms**: Hover tooltips with clear definitions and pronunciation guides
- **Mobile Reading**: Optimize long-form content for mobile screens with smart text sizing and spacing
- **Comparison Conflicts**: Handle cases where philosophers don't have recorded positions on specific topics
- **Loading Large Content**: Progressive loading with meaningful previews and reading time estimates

## Design Direction

The design should evoke the feeling of exploring a beautifully curated rare book collection - sophisticated, timeless, and intellectually inspiring. It should feel like a digital Renaissance library with modern accessibility, balancing scholarly gravitas with contemporary usability.

## Color Selection

Analogous color scheme centered around warm earth tones that evoke classical learning and contemplation.

- **Primary Color**: Deep Sage Green (oklch(0.45 0.08 150)) - communicates wisdom, growth, and natural contemplation
- **Secondary Colors**: Warm Cream (oklch(0.95 0.02 85)) for backgrounds and Charcoal (oklch(0.25 0.01 20)) for structure
- **Accent Color**: Rich Amber (oklch(0.65 0.12 75)) - draws attention to key insights and calls-to-action
- **Foreground/Background Pairings**:
  - Background (Warm Cream): Charcoal text (oklch(0.25 0.01 20)) - Ratio 8.2:1 ✓
  - Card (White): Charcoal text (oklch(0.25 0.01 20)) - Ratio 9.1:1 ✓  
  - Primary (Deep Sage): White text (oklch(0.98 0 0)) - Ratio 5.1:1 ✓
  - Secondary (Light Sage): Charcoal text (oklch(0.25 0.01 20)) - Ratio 6.8:1 ✓
  - Accent (Rich Amber): White text (oklch(0.98 0 0)) - Ratio 4.7:1 ✓

## Font Selection

Typography should convey scholarly authority while remaining highly readable, using serif fonts that reference classical academic tradition balanced with clean sans-serif for interface elements.

- **Typographic Hierarchy**:
  - H1 (Site Title): Playfair Display Bold/32px/tight letter spacing
  - H2 (Section Headers): Playfair Display Semibold/24px/normal spacing  
  - H3 (Philosopher Names): Playfair Display Medium/20px/normal spacing
  - Body (Philosophical Content): Crimson Text Regular/16px/1.6 line height
  - UI Elements: Inter Medium/14px/normal spacing
  - Captions: Inter Regular/12px/wide letter spacing

## Animations

Animations should feel like the gentle, deliberate movement of turning pages in a treasured book - purposeful, elegant, and never rushed.

- **Purposeful Meaning**: Smooth transitions between philosophers and topics should feel like navigating through connected ideas
- **Hierarchy of Movement**: Primary focus on content transitions, subtle hover states on interactive elements, gentle fade-ins for new information

## Component Selection

- **Components**: 
  - Cards for philosopher profiles and topic summaries
  - Tabs for switching between comparison views and topic categories
  - Dialog for detailed reading experiences
  - ScrollArea for long philosophical texts
  - Separator for organizing content sections
  - Badge for philosophical schools and time periods
  - Button variants for different action types (explore, compare, read)

- **Customizations**: 
  - Custom philosopher comparison layout component
  - Elegant reading progress indicator for long texts
  - Topic interconnection visualization

- **States**: 
  - Buttons should have subtle shadow depth changes on hover
  - Cards should have gentle lift animations when selected
  - Active comparison states should be clearly highlighted

- **Icon Selection**: 
  - Book icons for reading actions
  - Scale/Balance icons for comparisons  
  - Compass icons for exploration
  - Lightbulb for insights and key ideas

- **Spacing**: 
  - Generous padding using Tailwind's 6-8 scale for breathing room
  - Consistent 4-unit gaps between related elements
  - 8-12 unit separation between major sections

- **Mobile**: 
  - Single column layout with expandable sections
  - Sticky navigation for easy topic switching
  - Optimized reading view with larger text sizes
  - Simplified comparison view with tabbed interface instead of side-by-side