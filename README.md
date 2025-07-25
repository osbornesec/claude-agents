# Claude Code Agentic Software Development System

A comprehensive agentic software development system that integrates **Canon Test-Driven Development (TDD)** principles with specialized AI agents for systematic, high-quality software development.

## Overview

This repository contains an orchestrated workflow system where **Orchestrator Claude** analyzes incoming tasks and delegates them sequentially to specialized sub-agents following established workflows enhanced with Canon TDD principles as defined by Kent Beck.

## Canon TDD Integration

The system emphasizes Kent Beck's Canon TDD approach:

- ✅ Creating a test list first, then iteratively writing tests
- ✅ Red-Green-Refactor cycles: Write failing test → Make it pass → Improve design  
- ✅ Building confidence through systematic testing
- ✅ No faking assertions, constants, or deletion of code
- ✅ Adding discoveries to the test list during implementation

### Canon TDD Cycle

```mermaid
graph LR
    subgraph "Canon TDD Workflow"
        TL[Create Test List]
        WT[Write Test]
        RED[🔴 Red: Test Fails]
        GREEN[🟢 Green: Make Test Pass]
        REFACTOR[🔵 Refactor: Improve Design]
        ADD[Add Discovery to Test List]
    end
    
    TL --> WT
    WT --> RED
    RED --> GREEN
    GREEN --> REFACTOR
    REFACTOR --> WT
    GREEN --> ADD
    REFACTOR --> ADD
    ADD --> WT
    
    style RED fill:#ffcccc
    style GREEN fill:#ccffcc
    style REFACTOR fill:#ccccff
    style TL fill:#ffffcc
    style ADD fill:#ffccff
```

## System Architecture

### Complete Workflow Diagram

```mermaid
graph TD
    Start[Start: Project Initiation]
    RA[Requirements Analyst]
    DE[Domain Expert]
    UX[UX Specialist]
    SA[Software Architect]
    DBS[Database Specialist]
    SEC[Security Specialist]
    UID[UI/UX Designer]
    TP[Test Planner]
    LD[Lead Developer]
    FS[Frontend Specialist]
    BS[Backend Specialist]
    DEVOPS[DevOps Engineer]
    PO[Performance Optimizer]
    QAT[QA Tester]
    AT[Automation Tester]
    PT[Performance Tester]
    ST[Security Tester]
    AS[Accessibility Specialist]
    CR[Code Reviewer]
    DS[Documentation Specialist]
    LCS[Legal/Compliance Specialist]
    SE[Sustainability Expert]
    DEPL[Deployment Engineer]
    OPS[Operations Specialist]
    MD[Maintenance Developer]
    ANAL[Analytics Specialist]
    End[End: Ongoing Maintenance]

    Start --> RA
    RA -->|Gather requirements| DE
    DE -->|Incorporate domain knowledge| UX
    UX -->|Define user needs| SA
    SA -->|Design architecture| DBS
    DBS -->|Data modeling| SEC
    SEC -->|Security integration| UID
    UID -->|UI prototypes| TP
    TP -->|Test scenarios| LD
    LD -->|Core implementation - TDD cycle| FS
    FS -->|Frontend code - TDD cycle| BS
    BS -->|Backend code - TDD cycle| DEVOPS
    DEVOPS -->|Setup CI/CD| PO
    PO -->|Optimize performance| QAT
    QAT -->|Test cases| AT
    AT -->|Automated tests| PT
    PT -->|Load testing| ST
    ST -->|Penetration testing| AS
    AS -->|Accessibility checks| CR
    CR -->|Peer review| DS
    DS -->|Documentation| LCS
    LCS -->|Compliance check| SE
    SE -->|Sustainability assessment| DEPL
    DEPL -->|Deployment| OPS
    OPS -->|Monitoring| MD
    MD -->|Bug fixes| ANAL
    ANAL -->|Usage analytics| End
```

### System Architecture Overview

```mermaid
graph TB
    subgraph "Input Layer"
        USER[User Request]
        ORCH[Orchestrator Claude]
    end
    
    subgraph "Agent Network"
        subgraph "Planning Phase"
            RA2[Requirements Analyst]
            SA2[Software Architect]
            TP2[Test Planner]
        end
        
        subgraph "Development Phase"
            LD2[Lead Developer]
            FS2[Frontend Specialist]
            BS2[Backend Specialist]
        end
        
        subgraph "Quality Phase"
            QA2[QA Tester]
            ST2[Security Tester]
            CR2[Code Reviewer]
        end
        
        subgraph "Operations Phase"
            DO2[DevOps Engineer]
            OP2[Operations Specialist]
            MD2[Maintenance Developer]
        end
    end
    
    subgraph "Output Layer"
        DOCS[ai_docs/ Directory]
        DELIV[Final Deliverables]
    end
    
    USER --> ORCH
    ORCH --> RA2
    RA2 --> SA2
    SA2 --> TP2
    TP2 --> LD2
    LD2 --> FS2
    FS2 --> BS2
    BS2 --> QA2
    QA2 --> ST2
    ST2 --> CR2
    CR2 --> DO2
    DO2 --> OP2
    OP2 --> MD2
    
    RA2 --> DOCS
    SA2 --> DOCS
    TP2 --> DOCS
    LD2 --> DOCS
    FS2 --> DOCS
    BS2 --> DOCS
    QA2 --> DOCS
    ST2 --> DOCS
    CR2 --> DOCS
    DO2 --> DOCS
    OP2 --> DOCS
    MD2 --> DOCS
    
    DOCS --> DELIV
```

### Agent Coordination

Each agent saves outputs to the **ai_docs/** directory for seamless handoffs:
- `requirements.md` - Requirements and user stories
- `architecture.md` - System design and tech stack
- `database-design.md` - Schema and optimization
- `security-design.md` - Security architecture and controls
- `ui-design.md` - Design system and prototypes
- `test-scenarios.md` - Comprehensive test list for TDD
- `implementation-progress.md` - Development progress and TDD cycles
- And more specialized documentation files

### Data Flow Between Agents

```mermaid
graph LR
    subgraph "Agent Inputs"
        REQ[User Requirements]
        PREV[Previous Agent Output]
        CONTEXT[Project Context]
    end
    
    subgraph "Agent Processing"
        AGENT[Specialized Agent]
        RESEARCH[Research Best Practices]
        PROCESS[Domain Processing]
        VALIDATE[Quality Validation]
    end
    
    subgraph "Agent Outputs"
        DOCS[ai_docs/ Files]
        HANDOFF[Handoff Instructions]
        NEXT[Next Agent Context]
    end
    
    subgraph "Feedback Loop"
        REVIEW[Review & Iteration]
        REFINE[Refinement]
    end
    
    REQ --> AGENT
    PREV --> AGENT
    CONTEXT --> AGENT
    
    AGENT --> RESEARCH
    RESEARCH --> PROCESS
    PROCESS --> VALIDATE
    
    VALIDATE --> DOCS
    VALIDATE --> HANDOFF
    VALIDATE --> NEXT
    
    NEXT --> REVIEW
    REVIEW --> REFINE
    REFINE --> AGENT
    
    DOCS --> PREV
    
    style AGENT fill:#e3f2fd
    style DOCS fill:#fff3e0
    style RESEARCH fill:#f1f8e9
    style VALIDATE fill:#ffebee
```

## Available Specialists

### Core Development
- **[Requirements Analyst](/.claude/agents/requirements-analyst.md)** - Gathers and analyzes project requirements
- **[Software Architect](/.claude/agents/software-architect.md)** - Designs system architecture and tech stack decisions
- **[Lead Developer](/.claude/agents/lead-developer.md)** - Coordinates TDD cycles and core implementation
- **[Frontend Specialist](/.claude/agents/frontend-specialist.md)** - UI implementation with TDD cycles
- **[Backend Specialist](/.claude/agents/backend-specialist.md)** - Server-side implementation with TDD cycles

### Domain & Design
- **[Domain Expert](/.claude/agents/domain-expert.md)** - Incorporates industry-specific knowledge
- **[UX Specialist](/.claude/agents/ux-specialist.md)** - Defines user experience requirements
- **[UI/UX Designer](/.claude/agents/ui-ux-designer.md)** - Creates design systems and prototypes

### Data & Security
- **[Database Specialist](/.claude/agents/database-specialist.md)** - Database design and optimization
- **[Security Specialist](/.claude/agents/security-specialist.md)** - Security architecture and controls
- **[Security Tester](/.claude/agents/security-tester.md)** - Penetration testing and vulnerability assessment

### Testing & Quality
- **[Test Planner](/.claude/agents/test-planner.md)** - Creates comprehensive test scenarios for TDD
- **[QA Tester](/.claude/agents/qa-tester.md)** - Manual and automated test case development
- **[Automation Tester](/.claude/agents/automation-tester.md)** - Test automation framework implementation
- **[Performance Tester](/.claude/agents/performance-tester.md)** - Load testing and performance validation
- **[Code Reviewer](/.claude/agents/code-reviewer.md)** - Peer review and TDD compliance verification

### Operations & Infrastructure
- **[DevOps Engineer](/.claude/agents/devops-engineer.md)** - CI/CD pipeline setup and automation
- **[Deployment Engineer](/.claude/agents/deployment-engineer.md)** - Production deployment strategies
- **[Operations Specialist](/.claude/agents/operations-specialist.md)** - System monitoring and maintenance
- **[Performance Optimizer](/.claude/agents/performance-optimizer.md)** - System performance analysis and optimization

### Specialized Services
- **[Accessibility Specialist](/.claude/agents/accessibility-specialist.md)** - WCAG compliance and accessibility testing
- **[Documentation Specialist](/.claude/agents/documentation-specialist.md)** - Technical documentation and guides
- **[Legal Compliance Specialist](/.claude/agents/legal-compliance-specialist.md)** - Regulatory compliance and legal requirements
- **[Sustainability Expert](/.claude/agents/sustainability-expert.md)** - Environmental impact and sustainable development practices
- **[Maintenance Developer](/.claude/agents/maintenance-developer.md)** - Bug fixes and system maintenance
- **[Analytics Specialist](/.claude/agents/analytics-specialist.md)** - Usage analytics and performance metrics

## Entry Point Decision Matrix

### Decision Tree for Agent Selection

```mermaid
graph TD
    START[User Request]
    
    START --> Q1{Task Type?}
    
    Q1 -->|New Project/Feature| RA3[Requirements Analyst]
    Q1 -->|Bug/Issue| Q2{Bug Type?}
    Q1 -->|Performance| PO3[Performance Optimizer]
    Q1 -->|Security| Q3{Security Type?}
    Q1 -->|Documentation| DS3[Documentation Specialist]
    Q1 -->|Deployment| Q4{Deployment Type?}
    Q1 -->|Maintenance| MD3[Maintenance Developer]
    Q1 -->|Testing| Q5{Testing Type?}
    
    Q2 -->|Frontend Bug| FS3[Frontend Specialist]
    Q2 -->|Backend Bug| BS3[Backend Specialist]
    Q2 -->|General Bug| LD3[Lead Developer]
    
    Q3 -->|Architecture Review| SEC3[Security Specialist]
    Q3 -->|Vulnerability Testing| ST3[Security Tester]
    
    Q4 -->|CI/CD Issues| DO3[DevOps Engineer]
    Q4 -->|Production Deployment| DE3[Deployment Engineer]
    
    Q5 -->|Test Planning| TP3[Test Planner]
    Q5 -->|Automation| AT3[Automation Tester]
    Q5 -->|Performance Testing| PT3[Performance Tester]
    Q5 -->|Security Testing| ST4[Security Tester]
    Q5 -->|Accessibility Testing| AS3[Accessibility Specialist]
    
    style RA3 fill:#e1f5fe
    style PO3 fill:#fff3e0
    style DS3 fill:#f3e5f5
    style MD3 fill:#e8f5e8
    style FS3 fill:#fff8e1
    style BS3 fill:#fce4ec
    style LD3 fill:#e0f2f1
    style SEC3 fill:#ffebee
    style ST3 fill:#ffebee
    style DO3 fill:#e3f2fd
    style DE3 fill:#e3f2fd
    style TP3 fill:#f1f8e9
    style AT3 fill:#f1f8e9
    style PT3 fill:#f1f8e9
    style ST4 fill:#ffebee
    style AS3 fill:#faf2ff
```

### Quick Reference

**New Project/Feature Development**: Start with Requirements Analyst  
**Bug Fixes/Issues**: Start with Lead Developer or Backend/Frontend Specialist  
**Performance Issues**: Start with Performance Optimizer  
**Security Concerns**: Start with Security Specialist or Security Tester  
**Documentation Updates**: Start with Documentation Specialist  
**Deployment Issues**: Start with DevOps Engineer or Deployment Engineer  
**Maintenance Tasks**: Start with Maintenance Developer  
**Testing Tasks**: Start with Test Planner or appropriate testing specialist  

## Key Features

### Systematic Quality Assurance
- Each specialist focuses on their expertise area
- Comprehensive coverage of all software development aspects
- Clear handoff protocols between agents

### Canon TDD Integration
- Test-driven development throughout the workflow
- Systematic testing approach with confidence building
- Proper Red-Green-Refactor cycles

### Scalable Process
- Workflows adapt to project size and complexity
- Agent refinement based on project context (languages, frameworks, platforms)
- Custom workflow creation for unique requirements

### Knowledge Preservation
- All outputs documented and traceable
- Feedback loops enable iterative refinement
- Continuous improvement through lessons learned

## Agent Refinement

Subagent files should be refined based on specific project context:

- **Language-Specific**: Adapt for JavaScript/TypeScript, Python, Java, Go, Rust, etc.
- **Framework-Specific**: Customize for React, Vue, Angular, Express, FastAPI, Spring Boot, etc.
- **Library-Specific**: Include relevant tools like Redux, Prisma, Jest, Playwright, etc.
- **Domain-Specific**: Enhance for industries like healthcare, finance, e-commerce, etc.
- **Platform-Specific**: Adjust for AWS, GCP, Azure, Kubernetes, Docker, etc.

## Usage

### Orchestration Protocol

The Orchestrator Claude follows this systematic approach:

1. **Parse the Request**: Analyze task complexity and scope
2. **Determine Entry Point**: Choose appropriate starting specialist
3. **Plan the Workflow**: Map out required agents
4. **Execute Sequential Delegation**: Use Task tool to invoke agents
5. **Monitor Handoffs**: Ensure proper output passing between agents
6. **Coordinate Feedback Loops**: Handle iterations and refinements

```mermaid
graph TD
    INPUT[User Request]
    
    subgraph "Orchestrator Analysis"
        PARSE[Parse Request]
        ANALYZE[Analyze Complexity]
        ENTRY[Determine Entry Point]
        PLAN[Plan Workflow]
    end
    
    subgraph "Agent Execution"
        DELEGATE[Sequential Delegation]
        MONITOR[Monitor Handoffs]
        COORD[Coordinate Feedback]
    end
    
    subgraph "Quality Control"
        VERIFY[Verify Deliverables]
        VALIDATE[Validate Quality Gates]
        ITERATE[Handle Iterations]
    end
    
    OUTPUT[Final Deliverables]
    
    INPUT --> PARSE
    PARSE --> ANALYZE
    ANALYZE --> ENTRY
    ENTRY --> PLAN
    PLAN --> DELEGATE
    DELEGATE --> MONITOR
    MONITOR --> COORD
    COORD --> VERIFY
    VERIFY --> VALIDATE
    VALIDATE --> ITERATE
    ITERATE -->|If needed| DELEGATE
    VALIDATE -->|Complete| OUTPUT
    
    style INPUT fill:#e1f5fe
    style OUTPUT fill:#e8f5e8
    style PARSE fill:#fff3e0
    style ANALYZE fill:#fff3e0
    style ENTRY fill:#fff3e0
    style PLAN fill:#fff3e0
    style DELEGATE fill:#f3e5f5
    style MONITOR fill:#f3e5f5
    style COORD fill:#f3e5f5
    style VERIFY fill:#ffebee
    style VALIDATE fill:#ffebee
    style ITERATE fill:#ffebee
```

### Quality Gates

Each handoff includes:
- ✅ Complete deliverables from current agent
- ✅ Clear inputs for next agent  
- ✅ Updated test scenarios (for TDD agents)
- ✅ Risk identification and mitigation
- ✅ Quality gates verification

## Benefits

- **Expert-Level Output**: Each agent brings specialized domain knowledge
- **Comprehensive Coverage**: No aspect of software development is overlooked  
- **Test-Driven Quality**: Canon TDD ensures robust, well-tested code
- **Scalable Workflows**: System adapts from simple tasks to complex projects
- **Knowledge Transfer**: All work is documented and traceable
- **Continuous Improvement**: System learns and refines processes over time

## MCP Server Integration

This system leverages Model Context Protocol (MCP) servers for enhanced capabilities:

- **[Context7](https://github.com/modelcontextprotocol/servers/tree/main/src/context7)** - Provides up-to-date documentation and code examples for any library, ensuring agents have access to current best practices and implementation patterns
- **[Perplexity](https://github.com/modelcontextprotocol/servers/tree/main/src/perplexity)** - Enables real-time web search and research capabilities for agents to access the latest information, trends, and solutions

These MCP integrations ensure that all agents can access current documentation, research latest best practices, and provide solutions based on the most up-to-date information available.

### Agent Research Protocol

All sub-agents follow this enhanced research workflow:
1. **Context7 Documentation Lookup** - Research relevant libraries and frameworks
2. **Perplexity Web Search** - Find latest best practices and solutions  
3. **Domain Processing** - Apply specialist expertise to the research
4. **Output Generation** - Create deliverables with current best practices

## Contributing

This system is designed to be extensible. New specialists can be added to the `.claude/agents/` directory following the established patterns and integration points.

## License

[Add your license information here]

---

**Getting Started**: Simply describe your software development task to the Orchestrator Claude, and the appropriate workflow will be automatically determined and executed through the specialized agent network.