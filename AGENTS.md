# AI Instruction Plan

You are helping me complete FIT1050 Assignment 3: Website Development and Report.

I previously selected the Monash student club MASS³ / masscubed, which stands for Monash Advanced Science & Science Scholars Society. For this assignment, I need to create a fictionalised homepage inspired by this club. All original identifiable club information must be replaced with fictional information, including names, contact details, committee members and specific club identity details.

The website must be a desktop homepage only, based on one approved HTML5 UP template from https://html5up.net/. The homepage should contain 4–6 different content sections. A navigation menu and footer should be included, but they do not count as content sections. The website must customise the original template by changing text, images, colours, backgrounds, fonts, layout and section structure. The website folder must be under 25MB, and the HTML should pass validation with no errors. The final website will be uploaded to a web host, and the hosted URL will be included in the report. These are required by the assignment brief.

The grading rubric rewards strong template customisation, a new colour scheme, webfonts, modified layout, clear information architecture, good visual design, JavaScript interactivity, image optimisation, HTML validation and successful hosting. The report also needs clear explanations of five design decisions using theory and visual evidence.

## Project Direction

Create a fictional version of MASS³.

Use this fictional name: Monash Future Science Society
Alternative short name: MFSS

The website should still feel inspired by MASS³ / masscubed, but it must not copy the real club directly. The fictional club should support Monash students interested in advanced science, research, academic networking, science communication and social events.

## Target Audience

The target audience is:

Monash undergraduate science students aged 18–24, especially students in advanced science, research, data science, environmental science, chemistry, physics, earth science or related degrees. They are academically motivated but also want a friendly student community, peer support, events and opportunities to connect with other high-achieving science students.

## Visual Design Direction

Create a professional but welcoming science society visual style.

Use:

- Main colour: deep navy / dark blue
- Accent colour: teal or cyan
- Secondary accent: light grey or soft blue
- Background: mostly white or very light grey, with some dark feature sections
- Fonts: use a readable modern sans-serif font for body text, and a more elegant serif or strong heading font for titles
- Style: clean, academic, modern, trustworthy, student-friendly

The current real MASS³ website looks minimal and text-heavy. The new design should improve this by using clearer visual hierarchy, more spacing, modern cards, better section separation and stronger calls to action.

## Homepage Structure

Create 6 content sections:

Section 1: Hero / Welcome

Purpose: Immediately explain what the society is and encourage students to join.

Content:

Title:
Monash Future Science Society

Subtitle:
A student community for curious minds, future researchers and science problem-solvers.

Body text:
MFSS connects Monash students through academic support, research-focused events, social activities and opportunities to explore science beyond the classroom.

Buttons:

- Join the Society
- View Events

Design instruction:

Use a strong hero section with a science-related background image or abstract pattern. Add a clear call-to-action button. Make it more visually engaging than the original MASS³ homepage.

⸻

Section 2: About the Society

Purpose: Explain the fictional club’s purpose.

Heading:
About MFSS

Content:
Monash Future Science Society is a fictional student-led community for students who are passionate about science, research and collaboration. The society supports students through workshops, peer networking, academic events and social activities. It is designed for students who want to meet like-minded peers, learn about research pathways and build confidence in their university experience.

Design instruction:

Use a two-column layout: text on one side, image or icon group on the other. Use short paragraphs rather than dense text.

⸻

Section 3: What We Do

Purpose: Show key benefits and user goals.

Create three or four cards:

1. Research Pathways
   Learn about honours, postgraduate research and academic opportunities.
2. Science Communication
   Practise explaining complex ideas clearly through talks, workshops and student-led activities.
3. Peer Support
   Connect with students from different science disciplines and year levels.
4. Social Events
   Join trivia nights, mixers, study sessions and informal meetups.

Design instruction:

Use card-based layout with icons. This helps users scan information quickly.

⸻

Section 4: Events

Purpose: Replace the original calendar screenshot with a more useful and attractive events section.

Heading:
Upcoming Events

Create three event cards:

1. Science Trivia Night
   Week 4, Friday 6:00 PM
   A relaxed social event for students to meet new people and test their science knowledge.
2. Research Pathways Panel
   Week 6, Wednesday 5:30 PM
   Hear from honours students, PhD candidates and academics about future study options.
3. Exam Study Mixer
   Week 10, Monday 4:00 PM
   A peer-supported study session with snacks, planning tips and group revision.

Design instruction:

Do not embed a large empty calendar. Instead, use cards with dates, event type labels and buttons. This improves information architecture because users can immediately see useful event information.

Add JavaScript here:

Create an event filter with buttons:

- All
- Academic
- Social
- Study

When users click a filter button, only matching event cards should be displayed. This must be implemented with simple JavaScript and must work without server-side scripting.

⸻

Section 5: Committee / Student Leaders

Purpose: Inspired by the original committee page, but fictionalised.

Heading:
Meet the Student Team

Create four fictional committee members:

1. Maya Chen — President
   Advanced Science student interested in chemistry, sustainability and science communication.
2. Ethan Brooks — Vice President
   Physics and mathematics student passionate about research mentoring and student events.
3. Aisha Rahman — Secretary
   Data science student who enjoys organising workshops and helping students find resources.
4. Liam Walker — Treasurer
   Earth science student interested in climate research and community-building.

Design instruction:

Use circular profile images or illustrated placeholders. Do not use real committee names or photos from the original club. If using downloaded images, use permissively licensed images and reference them.

⸻

Section 6: Join / Newsletter

Purpose: Create a clear conversion section.

Heading:
Join the MFSS Community

Content:
Become part of a supportive science student network. Members receive event updates, workshop invitations and opportunities to connect with other students across Monash science disciplines.

Include:

- Join button
- Newsletter signup form with name and email fields
- Fictional contact email: hello@mfss-example.org
- Fictional location: Clayton Campus, Science Student Hub

Design instruction:

This section should be visually prominent and should use a clear call-to-action.

Add JavaScript here if possible:

When the user submits the newsletter form, show a simple message such as:

“Thank you for subscribing! We’ll send you the next MFSS update soon.”

The form does not need to actually send data.

⸻

Navigation Menu

Use these labels:

- Home
- About
- Activities
- Events
- Team
- Join

Navigation links can scroll to homepage sections. If smooth scrolling is easy to implement, include it.

⸻

Footer

Include fictional details:

Monash Future Science Society
Fictional student society website created for FIT1050 Assignment 3.
Email: hello@mfss-example.org
Instagram: @mfss.example

Also include small reference text if needed.

⸻

Image Requirements

Use only images that are:

- Public Domain,
- Creative Commons,
- or permissively licensed for free commercial use.

Optimise all images:

- Resize images to actual display dimensions.
- Compress images before final submission.
- Use JPG/WebP for photos.
- Use SVG/PNG for simple icons or logos.
- Keep total website folder under 25MB.

All images must be referenced in the report.

⸻

Accessibility Requirements

Make sure the website includes:

1. Descriptive alt text for meaningful images.
2. Empty alt text for decorative images.
3. Strong colour contrast between text and background.
4. Clear heading hierarchy: h1, h2, h3.
5. Descriptive button and link text.
6. Keyboard-friendly navigation and form controls.
7. Labels for form inputs.

⸻

JavaScript Requirements

Add at least two simple JavaScript interactions:

Interaction 1: Event Filter

Users can filter event cards by category:

- All
- Academic
- Social
- Study

This supports user goals because students can quickly find events relevant to their interests.

Interaction 2: Newsletter Confirmation

When the user submits the newsletter form, prevent the default form action and show a confirmation message on the page.

Optional third interaction:

Add a “Back to top” button that appears after scrolling.

⸻

Report Plan

Write a 600–1200 word report.

The report must include:

1. Hosted website URL
2. Site topic and purpose, up to 100 words
3. Target audience, up to 100 words
4. Five design decision sections:
   - Visual design style
   - Information architecture
   - Image optimisation
   - Web content accessibility
   - JavaScript interactivity
5. References list

Each design decision should explain one most important decision, not many small decisions. Each explanation should connect the design choice to FIT1050 theory such as visual hierarchy, consistency, user goals, accessibility, optimisation, affordance, feedback or interaction design.

The report should also include cropped screenshots:

- Screenshot of the original MASS³ website or Assignment 2 reference
- Screenshot of the redesigned homepage
- Screenshot examples from similar websites where relevant

⸻

Suggested Report Arguments

Visual Design Style

Main decision: Use a modern science-focused style with navy, teal, clean typography and card-based layouts.

Justification: This improves visual hierarchy, consistency and professional appearance. It also better matches the target audience of academically motivated science students.

Information Architecture

Main decision: Organise homepage sections around the user journey: understand the society, see benefits, view events, meet the team and join.

Justification: This supports user goals and makes information easier to scan than the original text-heavy layout.

Image Optimisation

Main decision: Resize and compress all images before adding them to the website.

Justification: This improves loading speed, reduces unnecessary file size and supports the assignment requirement that the website folder must stay under 25MB.

Accessibility

Main decision: Use clear headings, strong colour contrast and descriptive alt text.

Justification: This makes the site easier to use for students with different visual abilities and improves compatibility with assistive technology.

JavaScript Interactivity

Main decision: Add event filtering and newsletter confirmation.

Justification: The event filter helps users find relevant activities quickly, while the newsletter confirmation gives immediate feedback after interaction.

⸻

References Needed

The final references list should include:

1. HTML5 UP template used
2. All downloaded images
3. Any icons used
4. Any webfonts used
5. Any external JavaScript tutorial or code source
6. Screenshots of similar websites used in the report
7. Any AI-generated images, if used, including:
   - tool URL
   - exact prompt
   - image description

⸻

Final Deliverables

Prepare:

1. A ZIP file containing the complete website folder.
2. A PDF report with the hosted website URL and references.

Before submission, check:

- Website opens correctly on desktop.
- Homepage displays well at 1920 × 1080.
- All text and image content is customised.
- There are 4–6 content sections.
- Navigation is present.
- JavaScript works without errors.
- HTML validation has no errors.
- Folder size is under 25MB.
- Report is 600–1200 words.
- References are complete.
