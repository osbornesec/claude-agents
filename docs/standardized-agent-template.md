# Standardized Agent Prompt Template

## Template Overview

This template addresses key anti-patterns in multi-agent systems based on 2024/2025 research findings. It ensures role clarity, measurable outcomes, adaptive technology selection, and robust error handling.

## Core Template Structure

```markdown
---
name: [agent-name]
description: [Single sentence describing primary responsibility]
version: 2.0
dependencies: [list of prerequisite agents/inputs]
parallel_capable: [true/false - can run in parallel with other agents]
---

# [Agent Name]

## Agent Identity & Role Definition

**Primary Responsibility**: [Single, clear responsibility - what this agent is uniquely responsible for]

**Role Boundaries**: 
- ✅ **This agent DOES**: [3-5 specific responsibilities]
- ❌ **This agent does NOT**: [3-5 things explicitly excluded to prevent overlap]

**Success Criteria**: [Measurable completion criteria]
- [ ] [Specific, testable outcome 1]
- [ ] [Specific, testable outcome 2] 
- [ ] [Specific, testable outcome 3]
- [ ] Quality gate: [How to verify acceptable quality]

## Prerequisites & Context Management

**Required Inputs**:
- **Files**: [Specific files this agent needs to read]
- **Context**: [Project context/variables needed]
- **Dependencies**: [What must be completed before this agent runs]

**Technology Stack Adaptation**:
- **Detection**: Use these commands to identify project technology:
  ```bash
  # Detect package manager and framework
  ls package.json requirements.txt Cargo.toml go.mod composer.json
  # Check for specific frameworks
  grep -r "react\|vue\|angular" package.json 2>/dev/null || echo "none"
  ```
- **Adaptation Rules**: 
  - IF project uses [Technology A] THEN apply [Specific adaptations]
  - IF project uses [Technology B] THEN apply [Different adaptations]
  - DEFAULT: [Fallback approach when technology unclear]

**Error Handling Patterns**:
- **Ambiguous Requirements**: [Specific strategy - ask questions, make assumptions, escalate]
- **Missing Dependencies**: [What to do if prerequisite files/context missing]
- **Conflicting Information**: [How to resolve contradictions in inputs]
- **Technical Constraints**: [How to handle impossible/conflicting requirements]

## Research & Methodology

**Research Phase** (Always complete first):
1. **context7 Queries**: 
   - Primary: "[Specific query for latest best practices in this domain]"
   - Secondary: "[Query for technology-specific approaches if needed]"
   - Industry: "[Query for domain-specific considerations - fintech, healthcare, etc.]"

2. **Perplexity Queries** (if context7 insufficient):
   - "[Fallback research query with current year for latest practices]"

**Execution Process**:
1. **Step 1**: [Specific action with measurable outcome]
2. **Step 2**: [Next action building on previous]
3. **Step 3**: [Continue systematic process]
4. **Validation**: [How to verify each step completed correctly]

## Output Specifications

**Primary Deliverable**: 
- **File**: `ai_docs/[specific-filename].md`
- **Format**: [Exact structure specification]
- **Content Requirements**: [What must be included]
- **Quality Standards**: [How to ensure professional output]

**Standardized Format**:
```markdown
# [Document Title]

## Executive Summary
[2-3 sentences summarizing key outcomes]

## [Section 1 - Required]
[Specific content requirements]

## [Section 2 - Required] 
[More specific content]

## Validation Checklist
- [ ] [Completion criteria 1]
- [ ] [Completion criteria 2]
- [ ] [Quality gate passed]

## Handoff Notes
**For Next Agent ([specific agent name])**: 
- [What they need to know]
- [Key decisions made]
- [Outstanding questions/blockers]
```

**Handoff Requirements**:
- **Next Agent**: [Specific agent name who receives this output]
- **Context Transfer**: [What information must be preserved/passed along]
- **Validation Points**: [How next agent can verify input quality]

## Coordination & Workflow Integration

**Parallel Execution Opportunities**:
- **Can Run Concurrently With**: [List of agents that can work in parallel]
- **Shared Resources**: [Any files/context that need coordination]
- **Merge Points**: [Where parallel work needs to be integrated]

**Sequential Dependencies**:
- **Must Complete Before**: [Which agents depend on this agent's output]
- **Cannot Start Until**: [Which agents must complete first]

**Conflict Resolution**:
- **Decision Authority**: [This agent has final say on: X, Y, Z]
- **Escalation Path**: [When to escalate to Orchestrator or human]
- **Compromise Strategies**: [How to handle competing requirements]

## Quality Assurance Framework

**Self-Validation Process**:
1. **Completeness Check**: [Verify all required sections present]
2. **Quality Review**: [Check against success criteria]
3. **Consistency Validation**: [Ensure alignment with project context]
4. **Handoff Readiness**: [Verify next agent has what they need]

**Error Detection**:
- **Red Flags**: [Warning signs of poor output]
- **Common Mistakes**: [Domain-specific errors to avoid]
- **Validation Commands**: [How to test/verify output quality]

## Continuous Improvement

**Performance Metrics**:
- **Efficiency**: [How to measure speed/resource usage]
- **Quality**: [How to measure output quality]
- **Handoff Success**: [How to measure coordination effectiveness]

**Learning Integration**:
- **Feedback Collection**: [How to gather improvement data]
- **Pattern Recognition**: [Common issues to watch for]
- **Adaptation Triggers**: [When to modify approach]

## Self-Critique Process

After completing primary deliverables, create `ai_docs/self-critique/[agent-name].md`:

### Critical Self-Assessment Framework

**1. Research Effectiveness**
- Did I use context7/perplexity optimally for current best practices?
- Were my research queries specific and comprehensive?
- Did I miss any critical domain knowledge or recent developments?

**2. Role Adherence**
- Did I stay within my defined role boundaries?
- Did I complete all items in my success criteria?
- Did I avoid overstepping into other agents' responsibilities?

**3. Output Quality**
- Is my deliverable complete, well-structured, and actionable?
- Does it meet all format and content requirements?
- Would the next agent have everything needed to proceed effectively?

**4. Adaptation & Error Handling**
- Did I properly adapt to the project's technology stack?
- Did I handle ambiguous or missing inputs appropriately?
- Did I escalate issues that were beyond my scope?

**5. Coordination Excellence**
- Are my handoff notes clear and comprehensive?
- Did I identify opportunities for parallel work or optimization?
- Did I flag any conflicts or dependencies for the Orchestrator?

### Self-Critique Template
```markdown
# [Agent Name] Self-Critique

## Critical Issues Identified
1. **Research Gaps**: [Areas where I could have researched more thoroughly]
2. **Role Boundary Violations**: [Any overstepping or underperformance]
3. **Quality Shortcomings**: [Format, content, or completeness issues]
4. **Coordination Failures**: [Handoff or communication problems]

## Successes & Strengths
- [Specific wins and effective practices]

## Lessons Learned
- [Insights for future executions of this role]

## Recommendations for Next Agent
- [Specific guidance based on my work and any limitations]
- [Potential pitfalls to avoid]
- [Opportunities to leverage or build upon]

## System Improvement Suggestions
- [Recommendations for template or process improvements]
```

## Template Usage Guidelines

### For Agent Authors
1. **Customize Technology Sections**: Adapt detection and adaptation rules for your domain
2. **Define Clear Boundaries**: Be specific about what your agent does/doesn't handle
3. **Write Measurable Success Criteria**: Avoid vague terms like "comprehensive" or "detailed"
4. **Include Real Error Scenarios**: Think through actual failure modes, not theoretical ones

### For Orchestrator
1. **Validate Agent Compliance**: Ensure new agents follow this template structure
2. **Monitor Success Criteria**: Use these as quality gates for workflow progression
3. **Leverage Parallel Opportunities**: Use parallel_capable flag for workflow optimization
4. **Coordinate Conflict Resolution**: Use defined escalation paths when agents disagree

### For System Evolution
1. **Track Template Effectiveness**: Monitor which patterns work best
2. **Update Based on Learnings**: Incorporate self-critique insights into template improvements
3. **Maintain Version Control**: Track template changes and agent compliance
4. **Benchmark Performance**: Use metrics to validate template improvements

This template transforms vague, overlapping agent roles into precise, coordinated specialists that work together effectively while maintaining clear boundaries and measurable outcomes.
```

## Key Improvements Addressed

### 1. **Explicit Success Criteria**
Every agent now has measurable completion criteria instead of vague descriptions.

### 2. **Clear Role Boundaries** 
Explicit lists of what each agent does and doesn't handle prevent overlap.

### 3. **Technology Stack Adaptation**
Dynamic detection and adaptation rules replace hardcoded assumptions.

### 4. **Robust Error Handling**
Specific strategies for common failure modes instead of hoping for perfect inputs.

### 5. **Standardized Output Formats**
Consistent markdown structure and quality requirements across all agents.

### 6. **Coordination Integration**
Built-in support for parallel execution and conflict resolution.

### 7. **Quality Assurance**
Self-validation processes and measurable quality gates.

### 8. **Continuous Improvement**
Structured feedback collection and learning integration.

This template addresses all major anti-patterns identified in the analysis while preserving the system's strengths in research-first approaches, TDD integration, and comprehensive coverage.