# WellLife — Prompt Log

**Chosen Sector:** Health & Wellness Innovation  
**Project Title:** WellLife – Health and Wellness Guide  
**Target Users:** Students and community members

## Task 1 — Sector Selection

**Objective:** Identify a local challenge and propose a web-based solution.

**Chosen Sector:** Health & Wellness Innovation

**Local Challenge:**

Students and community members may find it difficult to keep track of simple daily wellness habits or find general wellness reminders in one easy-to-use place. This is a proposed challenge for the prototype, not a measured research finding.

**Proposed Solution:**

WellLife – Health and Wellness Guide is a responsive, single-page website that provides educational wellness tips and allows users to track daily habits and count their water glasses.

**Core Features:**
1. Rotating educational wellness tips.
2. Daily habit checklist with a progress indicator.
3. Water-glass counter with plus and minus buttons.

**Scope and Safety:**

The prototype uses semantic HTML, CSS, and JavaScript. It does not require a backend, database, authentication, or external APIs. The website provides educational content only and does not give medical diagnoses or treatment recommendations.

---

## Task 2 — Zero-Shot Prompting

**Technique:** Zero-Shot Prompting

**Objective:** Generate a simple health and wellness webpage using a prompt without examples.

**Prompt Used:**

Create a simple webpage about health and wellness for students. Use HTML, CSS, and JavaScript. Include a heading, a short introduction, and simple wellness tips. Keep the design clean and easy to understand.

**Actual Output:**

Copilot generated a simple health and wellness webpage for students. It included a heading, a short introduction, and basic wellness tips. The webpage had a clean and easy-to-understand design and appeared in the preview window.

**Observation:**

The generated webpage included a heading, a short introduction, and simple wellness tips for students. The design was clean and easy to understand. However, the webpage may need more specific requirements and interactive features to make it more useful.

# Task 3 – Structured Prompting

**Technique:** Structured Prompting

**Objective:** To improve the relevance and quality of the AI-generated webpage by providing clear and specific instructions.

## Prompt Used

Act as a frontend web developer. Create a responsive single-page Health and Wellness Guide called WellLife for students. Include educational wellness tips, an interactive daily habit checklist, and a water-glass counter to help students practice healthy daily habits. Use semantic HTML, CSS, and vanilla JavaScript. Do not use external frameworks, backend services, databases, authentication, or external APIs. Do not include medical diagnoses, treatment recommendations, or fake live health warnings. Provide the complete source code for `index.html`, `style.css`, and `script.js`. The interface must remain clean and readable on mobile screens, and the checklist and water counter must work through mouse and keyboard interaction. The water counter must never go below zero, and the checklist progress must update whenever an item is checked or unchecked.

## Actual Output

Copilot generated a WellLife health and wellness webpage based on the prompt. The output was intended to include wellness tips, a daily habit checklist, and a water-glass counter. The generated source code was organized into HTML, CSS, and JavaScript files.

## Observation

The structured prompt provided clearer and more detailed instructions than the zero-shot prompt used in Task 2. It specified the target users, required features, technologies, and design expectations. It also included requirements for keyboard interaction, checklist progress, and the water counter. However, the webpage still needs to be tested to confirm that the interactive features work correctly and that the layout is responsive on different screen sizes.

## Differences Compared with Task 2

1. **Prompt structure:** Task 2 used a short and general prompt, while Task 3 provided more detailed instructions.
2. **Required features:** Task 2 focused on a heading, introduction, and wellness tips, while Task 3 specified a daily habit checklist and a water-glass counter.
3. **Technical requirements:** Task 3 specified separate HTML, CSS, and JavaScript files, along with keyboard interaction and mobile responsiveness, which were not explicitly required in Task 2.

# Task 4 – Experiment A: Few-Shot Prompting

**Technique:** Few-Shot Prompting

**Objective:** To guide Copilot in generating wellness checklist items by providing examples of the expected format.

## Prompt Used

I am developing a student health and wellness website called WellLife. Generate four additional daily wellness checklist items using the exact format shown in the examples below.

Example 1:
Item: Drink water regularly
Category: Hydration
Description: Drink water throughout the day to stay hydrated.

Example 2:
Item: Take a short break
Category: Mental Wellness
Description: Step away from studying for a few minutes to relax your mind.

Generate four new wellness checklist items using the same format. Use appropriate categories such as Physical Wellness, Sleep, Nutrition, or Mental Wellness. Keep the descriptions short, simple, and suitable for students. Avoid medical advice. Present the four items as a checklist that can be added to the WellLife webpage.

## Actual Output

Copilot generated four additional wellness checklist items: taking a study stretch, eating a balanced snack, setting a bedtime routine, and writing down one good thing. Each item has a category and a short description suitable for students.

## Observation

The examples helped Copilot follow the requested item, category, and description format. It generated four additional wellness checklist items with different categories, making the results organized and easy to understand. The items were relevant to students and followed the structure shown in the examples.

# Task 4 – Experiment B: Role Assignment

**Technique:** Role Assignment

**Objective:** To review the WellLife website's accessibility and identify improvements.

## Prompt Used

Act as a frontend accessibility reviewer. Examine my WellLife – Health and Wellness Guide webpage for students. Review the HTML semantics, keyboard accessibility, form and checkbox labels, visible focus indicators, heading structure, and visual clarity. Identify specific accessibility issues in the existing interface and recommend targeted improvements without changing the project's scope. Keep the recommendations beginner-friendly and focused on the existing HTML, CSS, and JavaScript. Do not add a backend, database, authentication, or external APIs. Explain why each recommended improvement would make the webpage easier to use.

## Actual Output

Copilot reviewed the WellLife website and suggested improving text contrast, screen reader announcements, checklist counts, checkbox labels, and checklist grouping. It also confirmed that the website already has semantic HTML, keyboard focus styles, responsive design, and a working water counter.

## Observation

The role assignment helped Copilot focus on accessibility. It identified possible improvements and explained how they could make the website easier to use.


# Task 5 – Analyze Structured Reasoning and Refinement

**Technique:** Structured Reasoning and Refinement

**Objective:** To identify and improve a specific implementation weakness in the WellLife website.

## Prompt Used

Review my WellLife – Health and Wellness Guide project against the original requirements. Check the interactive daily wellness checklist, checklist progress counter, water-glass counter, HTML semantics, keyboard accessibility, and responsive layout.

Identify the two most important implementation issues based on my actual HTML, CSS, and JavaScript code. For each issue, explain the problem and recommend the smallest appropriate correction. Do not rewrite the entire project or add new features. Do not make changes to my files yet.

Finally, provide a simple verification procedure for testing the recommended corrections in the browser. Only report issues that you can confirm from the provided code.

## Actual Recommendations

Copilot identified two issues. The checklist initially showed a total of nine even though the page had eight checkboxes. It also recommended improving the screen reader announcement when the displayed wellness tip changes.

## Selected Correction

I corrected the initial checklist total in `index.html` from nine to eight by updating the progress label, maximum value, and fallback text.

## Verification Result

I tested the website in the browser. The checklist displayed 0 of 8 complete at first. When I checked and unchecked the habits, the progress counter and progress bar updated correctly.

## Observation

Copilot helped identify implementation issues and suggested small corrections instead of rewriting the whole website. Testing the changes helped me check whether the checklist progress matched the actual number of items.

# Task 6 – Compare and Submit

## Final Comparison Table

| Technique | Observation |
|---|---|
| **Zero-Shot Prompting** | Copilot generated the initial WellLife webpage, but some details and requirements needed further checking and improvement. |
| **Structured Prompting** | Adding the role, task, context, constraints, and acceptance criteria helped Copilot produce a more organized webpage with the required features. |
| **Few-Shot Prompting** | Providing examples helped Copilot generate four wellness checklist items using a consistent item, category, and description format. |
| **Role Assignment** | Asking Copilot to act as an accessibility reviewer helped identify concerns about text contrast, screen reader announcements, checklist counts, and checkbox labels. |
| **Structured Analysis and Refinement** | Copilot identified the incorrect initial checklist total and a possible screen reader announcement issue. The checklist total was corrected and tested in the browser. |

## Selected Final Prototype

I selected the refined version of WellLife as my final prototype because it includes the required wellness tips, interactive daily habit checklist, and water-glass counter. I also reviewed its accessibility and corrected the checklist's initial total to match the eight checklist items.

## Final Reflection

This activity taught me that the way I write prompts affects the results generated by AI. Structured prompting helped create a more organized website, while few-shot prompting made the checklist content more consistent. Role assignment helped identify accessibility concerns, and structured analysis helped me find and correct an issue in the checklist progress. I learned that AI-generated code should still be reviewed and tested before it is submitted.


