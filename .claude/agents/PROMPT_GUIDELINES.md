# Agent Prompt Engineering Guidelines

## 1. Analysis of Existing Agent Prompts

An analysis of agent prompts within the `.claude/agents/` directory reveals a sophisticated, multi-tiered approach to agent design. While prompt structures vary, they share a common goal: to elicit expert-level, high-quality, and contextually-aware responses. The prompts can be categorized into three levels of increasing sophistication.

### Level 1: The Deep Technical Expert
*   **Example:** `algo-display-formatting-algorithm-designer.md`
*   **Characteristics:**
    *   **Hyper-Specific Persona:** Defines an agent with deep, academic-level expertise in a narrow domain.
    *   **Process-Oriented:** Focuses on the *how* of task execution, prescribing specific algorithms, design patterns, and code-level quality metrics (e.g., cyclomatic complexity).
    *   **"Before & After" Examples:** Uses concrete code examples to illustrate refactoring and improvement patterns.
    *   **Implicit Quality Control:** Includes a simple self-critique checklist to guide the agent's final review.
*   **Strengths:** Excellent for tasks requiring deep technical knowledge and code transformation.
*   **Weaknesses:** Less aware of its role in a broader workflow; can be overly rigid if the prescribed process isn't a perfect fit for the problem.

### Level 2: The Role-Based Document Generator
*   **Example:** `api-design-architect.md`
*   **Characteristics:**
    *   **Role-Based Persona:** Defines the agent as a specific professional (e.g., "API Design Architect").
    *   **Deliverable-Oriented:** Focuses on the *what* of the task, providing a clear structure for a final report or document.
    *   **"Good vs. Bad" Examples:** Uses contrasting examples to illustrate best practices and common pitfalls at a design level.
    *   **Clear Boundaries:** Defines the scope of the expected output.
*   **Strengths:** Very effective for generating well-structured, comprehensive documents and plans.
*   **Weaknesses:** Lacks dynamic context awareness and formal interaction protocols with other agents.

### Level 3: The Collaborative System Component
*   **Example:** `arch-software-architect.md`
*   **Characteristics:**
    *   **System-Aware Persona:** Defines the agent not just by its role, but by its relationships and boundaries with other agents in a system.
    *   **Orchestration-Ready:** Includes YAML metadata (`dependencies`, `parallel_capable`) to be used by a higher-level orchestration engine.
    *   **Dynamic Context Acquisition:** Contains instructions for inspecting the environment (e.g., using `ls`, `grep`) to adapt its strategy.
    *   **Formal Handoffs:** Specifies what information to pass to downstream agents.
    *   **Mandatory, Structured Self-Critique:** Requires the agent to perform a detailed self-assessment against a template and save it as an artifact. This is a powerful, built-in quality assurance loop.
*   **Strengths:** Forms the backbone of a robust, scalable, and high-accountability multi-agent system.
*   **Weaknesses:** Requires more overhead to create each prompt, but the investment yields significantly higher quality and more reliable automation.

## 2. Key Principles for a Unified Approach

The most effective prompts are not just instructions; they are comprehensive "operating manuals" for an AI agent. A unified approach should standardize the most powerful features observed in the Level 3 prompts.

1.  **Standardized Structure:** All prompts must follow a consistent, predictable structure. This makes them easier to create, maintain, and for agents (and humans) to understand.
2.  **Explicit Collaboration:** Agents should be aware of their role in a larger system. Defining dependencies, boundaries, and handoff protocols is critical.
3.  **Dynamic Grounding:** Agents should be grounded in the current context by actively inspecting the state of the repository, rather than relying solely on the initial user request.
4.  **Accountability & Quality Assurance:** Agents are responsible for the quality of their own work. A mandatory, structured self-critique is the best mechanism to ensure this.
5.  **Predictable Outputs:** The exact format and location of deliverables must be specified to enable reliable automation and chaining of agentic tasks.

---

## 3. Standardized Directory Structure

To ensure predictability and organization, all agent-generated artifacts should be stored in a dedicated `ai_docs/` directory at the root of the repository. This includes primary deliverables, self-critiques, and other logs or documents.

- **Primary Deliverables**: `ai_docs/deliverables/[agent-name]/[deliverable-name].md`
- **Self-Critiques**: `ai_docs/self-critique/[agent-name].md`
- **Handoffs/Comms**: `ai_docs/comms/[source-agent-name]/[target-agent-name].md`

This convention keeps AI-related files neatly organized and separate from the main source code and human-written documentation.

## 4. The Unified Agent Prompt Template

**Note on Flexibility**: This template is a comprehensive blueprint designed for complex, collaborative agents. For simpler, standalone agents, some sections may be simplified or omitted. For example, an agent that does not hand off to another agent can omit the "Coordination & Workflow Integration" section. Use your judgment to apply the template proportionally to the task's complexity.

Copy and adapt the following template for all new agent prompts.

```markdown
---
name: [agent-name]
version: 1.0
description: [A brief, one-line description of the agent's purpose.]
dependencies: [list-of-required-agents-or-artifacts] # e.g., [requirements-analyst, ui-designer]
parallel_capable: [true/false] # Can this agent run concurrently with its dependencies?
---

# [Agent Title, e.g., Security Threat Modeler]

## 1. Agent Identity & Role Definition

**Primary Responsibility**: [State the agent's core purpose in one sentence. What is the single most important thing it is responsible for creating or deciding?]

**Role Boundaries**:
- ✅ **This agent DOES**:
  - [List 3-5 key activities the agent is authorized to perform.]
  - [Example: Analyze code for potential security vulnerabilities.]
  - [Example: Generate threat models based on system architecture.]
  - [Example: Classify threats using the STRIDE methodology.]

- ❌ **This agent does NOT**:
  - [List 3-5 activities that are explicitly out of scope.]
  - [Example: Implement code changes to fix vulnerabilities (delegates to a developer agent).]
  - [Example: Define the system architecture (depends on the Software Architect agent).]
  - [Example: Make final decisions on risk acceptance (delegates to a project manager).]

**Success Criteria**:
- [ ] [A checklist of 3-5 high-level goals that must be met for the agent's work to be considered complete and successful.]
- [ ] [Example: A comprehensive threat model is produced in the specified format.]
- [ ] [Example: All identified threats are mapped to specific system components.]
- [ ] [Example: Mitigation strategies are proposed for all high-priority threats.]

## 2. Prerequisites & Context Management

**Required Inputs**:
- **Files**: `ai_docs/deliverables/[dependency-name]/[required-input.md]` # e.g., ai_docs/deliverables/software-architect/architecture.md
- **Context**: [Describe other contextual information needed, e.g., "Compliance requirements (PCI, HIPAA)."]

**Context Acquisition Commands**:
# Use shell commands to inspect the environment and gather dynamic context.
# Example: Detect the primary programming language.
ls package.json && echo "Node.js/JavaScript project detected"
ls requirements.txt setup.py pyproject.toml && echo "Python project detected"

# Example: Grep for keywords in source files.
grep -r "auth" src/ && echo "Authentication logic detected."

## 3. Research & Methodology

**Research Phase** (Always complete first):
1. **Internal Knowledge**: Review the provided input files thoroughly.
2. **External Research**:
   - Primary Query: "[domain] [technology] [task] best practices"
   - Secondary Query: "[specific-problem] mitigation strategies"

**Methodology**:
1. **[Step 1]**: [Describe the first logical step in the agent's process.]
2. **[Step 2]**: [Describe the second step.]
3. **[Step 3]**: [And so on...]

## 4. Output Specifications

**Primary Deliverable**:
- **File**: `ai_docs/deliverables/[agent-name]/[primary-output.md]` # e.g., ai_docs/deliverables/security-threat-modeler/threat-model.md
- **Format**: [Describe the required format, ideally with a markdown template.]
- **Content Requirements**: [List key sections that must be included.]
- **Quality Standards**: [Define the quality bar, e.g., "All threats must be traceable to a specific requirement or component."]

### Standardized Output Template
```markdown
# [Title of Deliverable]

## 1. Executive Summary
[A brief overview of the findings.]

## 2. [Section Title]
[Content...]

## 3. [Another Section]
[Content...]
```

## 5. Few-Shot Examples

### ✅ Good Example: [Describe a good scenario]

[Provide a concrete example of a high-quality output or correct reasoning process. This could be a snippet of a report, a well-formed API call, etc.]

### ❌ Bad Example: [Describe a bad scenario]

[Provide a contrasting example that shows a common mistake or anti-pattern. Explain *why* it's bad.]

## 6. Coordination & Workflow Integration

**Handoff Notes**:
- **For Next Agent ([Agent Name])**:
  - [Provide specific notes and context that the next agent in the workflow will need.]
  - [Example: "The threat model identifies vulnerabilities in the auth service; a developer agent should now focus on implementing the recommended mitigations in that service's codebase."]

**Handoff Requirements**:
- **Next Agents**: [List the agent(s) that depend on this one's output.]
- **Context Transfer**: [Describe the key information being passed on.]

## 7. Self-Critique Process

**Execute this self-critique IMMEDIATELY after completing your primary deliverables.** Do not proceed to handoff until this is complete. Write the output to `ai_docs/self-critique/[agent-name].md`.

### Self-Critique Questions
1. **Requirement Coverage**: Did I address all relevant aspects of the input documents and requirements?
2. **Quality of Analysis**: Is my analysis thorough, well-reasoned, and based on the provided context and research? Are there any gaps?
3. **Output Quality**: Does my deliverable meet all the requirements specified in the "Output Specifications"? Is it clear, complete, and actionable?
4. **Boundary Adherence**: Did I stay within my defined role boundaries? Did I avoid performing tasks that should be delegated to other agents?
5. **Handoff Readiness**: Is my output truly ready for the next agent? Have I provided all necessary context for a successful handoff?

### Self-Critique Report Template
```markdown
# [Agent Name] Self-Critique

## 1. Assessment of Quality
*   **Requirement Coverage**: [Briefly assess how well requirements were met. Note any gaps.]
*   **Analysis Quality**: [Critique the depth and accuracy of the analysis.]
*   **Output Quality**: [Assess the final deliverable against the spec.]

## 2. Areas for Improvement
*   [Identify 1-3 specific things that could have been done better.]
*   [Example: "My initial research could have been more focused on X, which would have revealed Y earlier."]

## 3. What I Did Well
*   [Identify 1-3 specific successes.]
*   [Example: "The dynamic context gathering successfully identified the key technology stack, which allowed for a more tailored analysis."]

## 4. Confidence Score
*   **Score**: [e.g., 9/10]
*   **Justification**: [Briefly explain the reason for the score. e.g., "Confident that the deliverable is high-quality and ready for handoff, but there was a minor requirement that was ambiguous."]
```
```
