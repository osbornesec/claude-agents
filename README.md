# Claude Agents Collection

> **⚠️ Work in Progress**: This initial release is under active development. Features and documentation are being continuously enhanced.

A comprehensive collection of 379 specialized AI agents designed for Claude Code workflows, covering the entire software development lifecycle from requirements analysis to production deployment.

## 🚀 Overview

This repository contains a sophisticated ecosystem of AI agents that work individually or collaboratively to handle complex software engineering tasks. Each agent is a domain expert with specific technical expertise, built-in quality assurance, and integration capabilities.

### Key Features

- **379 Specialized Agents** across all major technology domains
- **Multi-Agent Coordination** for complex workflow orchestration  
- **Quality Assurance Framework** with 4-level validation systems
- **Claude Code Integration** with hooks and workflow automation
- **Production-Ready Patterns** with enterprise-grade considerations
- **Comprehensive Documentation** with implementation examples

## 📊 Agent Categories

| Category | Count | Examples | Description |
|----------|-------|----------|-------------|
| **Language Specialists** | 28 | `lang-python-specialist`, `lang-typescript-specialist` | Programming language experts |
| **Database Specialists** | 22 | `db-postgresql-specialist`, `db-mongodb-specialist` | Database design and optimization |
| **Web Frameworks** | 21 | `web-react-specialist`, `web-fastapi-developer` | Modern web development frameworks |
| **Architecture** | 18 | `arch-software-architect`, `arch-microservices-architect` | System design and architecture |
| **Machine Learning** | 17 | `ml-pytorch-specialist`, `ml-langchain-specialist` | AI/ML implementation and deployment |
| **Security** | 15 | `security-specialist`, `security-cryptography-specialist` | Security auditing and implementation |
| **Project Management** | 15 | `pm-project-planner`, `pm-agile-coach` | Project planning and methodology |
| **Development Tools** | 14 | `tools-code-reviewer`, `tools-refactoring-expert` | Code quality and development tools |
| **Cloud Platforms** | 14 | `cloud-aws-specialist`, `cloud-azure-specialist` | Cloud infrastructure and deployment |
| **Bot Development** | 13 | `bot-discord-bot-specialist`, `bot-slack-bot-specialist` | Chatbot and automation development |

*See [Agent Categories](#-complete-agent-categories) below for the full breakdown.*

## 🛠️ Core Capabilities

### Multi-Level Validation Framework

Each agent implements a sophisticated quality assurance system:

- **Level 0**: Test Creation - Comprehensive test suite development
- **Level 1**: Code Quality - Style, conventions, and best practices
- **Level 2**: Unit Testing - Individual component validation  
- **Level 3**: Integration Testing - System-wide workflow validation
- **Level 4**: Advanced Validation - Performance, security, and compliance

### PRP (Product Requirement Prompt) Methodology

Advanced workflow management system for complex feature development:

- **Blueprint Architecture** - Detailed implementation planning
- **Context Engineering** - Intelligent documentation management
- **Validation Loops** - Multi-stage quality gates
- **Success Metrics** - Measurable outcome tracking

### Claude Code Integration

Native integration with Claude Code workflows:

- **Hook System** - Automated workflow triggers
- **Context Management** - Intelligent prompt engineering
- **Quality Gates** - Built-in validation checkpoints
- **Status Reporting** - Progress tracking and coordination

## 🏗️ Agent Architecture

### Agent Definition Structure

```yaml
---
name: agent-identifier  
description: Brief capability description
model: sonnet|opus (optional)
color: Color (optional)
dependencies: [list] (optional)
parallel_capable: true|false (optional)
---

# Agent Implementation
- Role definition and boundaries
- Technical expertise areas
- Step-by-step methodologies
- Integration capabilities
- Quality standards
- Implementation examples
```

### Coordination Patterns

Agents are designed for both independent operation and collaborative workflows:

- **Sequential Workflows** - Agents pass work through validation stages
- **Parallel Processing** - Multiple agents work simultaneously on different aspects
- **Hierarchical Coordination** - Lead agents orchestrate specialist teams
- **Context Sharing** - Intelligent information flow between agents

## 📋 Usage Examples

### Basic Agent Invocation

```markdown
@agent-lang-python-specialist Create a FastAPI application with authentication
```

### Multi-Agent Workflow

```markdown
@agent-requirements-analyst Analyze the requirements
@agent-software-architect Design the system architecture  
@agent-lang-python-specialist Implement the backend
@agent-web-react-specialist Build the frontend
@agent-testing-specialist Create comprehensive tests
```

### PRP-Based Development

```markdown
@agent-prp-specification-writer Create a PRP for user authentication
@agent-prp-execution-orchestrator Execute the authentication PRP
@agent-prp-quality-assurance-specialist Validate implementation
```

## 🎯 Specialized Domains

### Enterprise Development
- **Architecture Planning** - System design, scalability, integration patterns
- **Security Implementation** - OWASP compliance, cryptography, audit frameworks
- **Quality Assurance** - Testing strategies, validation frameworks, compliance

### Modern Technology Stack
- **Cloud Native** - Kubernetes, serverless, microservices architecture  
- **AI/ML Integration** - Model deployment, MLOps, inference optimization
- **Real-time Systems** - WebSockets, streaming, event-driven architecture

### Development Operations
- **CI/CD Pipelines** - Automated testing, deployment, monitoring
- **Infrastructure as Code** - Terraform, CloudFormation, container orchestration
- **Observability** - Logging, metrics, tracing, alerting systems

## 📈 Quality Standards

### Code Quality Framework
- **Static Analysis** - ESLint, Pylint, SonarQube integration
- **Security Scanning** - SAST/DAST tools, vulnerability assessment
- **Performance Testing** - Load testing, profiling, optimization

### Documentation Standards  
- **API Documentation** - OpenAPI/Swagger specifications
- **Architecture Diagrams** - Mermaid diagrams, system documentation
- **Implementation Guides** - Step-by-step tutorials with examples

### Testing Methodology
- **Test-Driven Development** - Red-Green-Refactor cycles
- **Behavior-Driven Development** - Gherkin specifications
- **Contract Testing** - API contract validation

## 🔧 Installation & Setup

### Prerequisites
- Claude Code CLI installed
- Git for version control
- Docker (optional, for containerized examples)

### Agent Installation

```bash
# Clone the repository
git clone https://github.com/your-org/claude-agents.git
cd claude-agents

# Install agents in Claude Code
claude-code install agents --path .claude/agents/
```

### Configuration

```bash
# Configure default settings
claude-code config set agents.auto-coordination true
claude-code config set agents.validation-level 3
claude-code config set agents.parallel-execution true
```

## 📚 Complete Agent Categories

<details>
<summary><strong>🔍 Click to expand full categorization</strong></summary>

### Language Specialists (28 agents)
`lang-python-specialist`, `lang-typescript-specialist`, `lang-javascript-typescript-specialist`, `lang-go-specialist`, `lang-rust-specialist`, `lang-java-specialist`, `lang-csharp-specialist`, `lang-php-specialist`, `lang-ruby-specialist`, `lang-swift-specialist`, `lang-kotlin-specialist`, `lang-scala-specialist`, `lang-elixir-specialist`, `lang-haskell-specialist`, `lang-dart-specialist`, `lang-c-specialist`, `lang-cpp-specialist`, `lang-r-specialist`, `lang-python-async-expert`, `lang-python-auth-specialist`, `lang-python-celery-task-expert`, `lang-python-cython-optimizer`, `lang-python-linter`, `lang-python-multiprocessing-specialist`, `lang-python-profiler`, `lang-python-security-auditor`, `lang-typescript-error-fixer`, `lang-typescript-eslint-fixer`

### Database Specialists (22 agents)  
`db-postgresql-specialist`, `db-mongodb-specialist`, `db-redis-specialist`, `db-mysql-specialist`, `db-elasticsearch-specialist`, `db-database-specialist`, `db-sqlalchemy-expert`, `db-database-migration-specialist`, `db-database-schema-architect`, `db-mongodb-python-specialist`, `db-redis-python-expert`, `db-elasticsearch-python-dev`, `db-cassandra-specialist`, `db-clickhouse-specialist`, `db-convex-specialist`, `db-dbt-specialist`, `db-dynamodb-specialist`, `db-influxdb-timeseries-specialist`, `db-neo4j-graph-specialist`, `db-oracle-specialist`, `db-snowflake-specialist`, `db-vector-database-specialist`

### Web Framework Specialists (21 agents)
`web-react-specialist`, `web-nextjs-specialist`, `web-fastapi-developer`, `web-django-expert`, `web-flask-specialist`, `web-nodejs-specialist`, `web-express-specialist`, `web-angular-specialist`, `web-vue-js-specialist`, `web-vuejs-specialist`, `web-svelte-specialist`, `web-solid-js-specialist`, `web-astro-specialist`, `web-remix-specialist`, `web-qwik-specialist`, `web-nestjs-specialist`, `web-laravel-specialist`, `web-spring-boot-specialist`, `web-ruby-on-rails-specialist`, `web-phoenix-specialist`, `web-dotnet-core-specialist`

### Architecture Specialists (18 agents)
`arch-software-architect`, `arch-system-architect`, `arch-microservices-architect`, `arch-backend-specialist`, `arch-frontend-specialist`, `arch-system-architecture-designer`, `arch-microservices-architecture-designer`, `arch-scalability-architecture-designer`, `arch-integration-architecture-planner`, `arch-technology-stack-evaluator`, `arch-tech-stack-evaluator`, `arch-library-framework-curator`, `arch-developer-experience-specialist`, `arch-enterprise-platform-specialist`, `arch-domain-expert`, `arch-mcp-protocol-specialist`, `arch-technology-compatibility-assessor`, `arch-third-party-dependency-evaluator`

### Machine Learning Specialists (17 agents)
`ml-pytorch-specialist`, `ml-tensorflow-developer`, `ml-langchain-specialist`, `ml-machine-learning-specialist`, `ml-huggingface-specialist`, `ml-scikit-learn-expert`, `ml-tensorflow-keras-specialist`, `ml-llamaindex-specialist`, `ml-transformers-specialist`, `ml-mlops-engineer`, `ml-model-deployment-expert`, `ml-automl-specialist`, `ml-computer-vision-specialist`, `ml-nlp-python-expert`, `ml-stable-diffusion-specialist`, `ml-gemini-ai-specialist`, `ml-google-gemini-ai-specialist`

### Security Specialists (15 agents)
`security-specialist`, `security-tester`, `security-analyst`, `security-auth-specialist`, `security-privacy-specialist`, `security-application-security-specialist`, `security-cryptography-specialist`, `security-penetration-testing-specialist`, `security-reverse-engineering-specialist`, `security-cloud-security-architect`, `security-secrets-management-specialist`, `security-static-analysis-sast-specialist`, `security-owasp-top-10-auditor`, `security-architecture-planner`, `security-safety-fixer`

### Project Management (15 agents)
`pm-project-planner`, `pm-agile-coach`, `pm-scrum-master`, `pm-product-owner`, `pm-project-manager-prp`, `pm-task-estimator`, `pm-effort-estimation-specialist`, `pm-milestone-scheduler`, `pm-release-schedule-coordinator`, `pm-sprint-iteration-planner`, `pm-timeline-buffer-strategist`, `pm-critical-path-analyzer`, `pm-dependency-mapper`, `pm-budget-cost-estimator`, `pm-jira-administrator`

### Development Tools (14 agents)
`tools-code-reviewer`, `tools-refactoring-expert`, `tools-codebase-analyzer`, `tools-git-specialist`, `tools-development-tool-optimizer`, `tools-code-complexity-refactor`, `tools-complexity-reduction-architect`, `tools-control-flow-decomposer`, `tools-code-style-formatter`, `tools-vim-specialist`, `tools-emacs-specialist`, `tools-vscode-extension-developer`, `tools-yargs-cli-specialist`, `tools-cli-specialist`

### Cloud Platforms (14 agents)  
`cloud-aws-specialist`, `cloud-azure-specialist`, `cloud-gcp-specialist`, `cloud-vercel-specialist`, `cloud-netlify-specialist`, `cloud-cloudflare-specialist`, `cloud-railway-specialist`, `cloud-databricks-specialist`, `cloud-aws-python-developer`, `cloud-serverless-architect`, `cloud-platform-selector`, `cloud-railway-deployment-specialist`, `cloud-railway-deployment-troubleshooter`, `cloud-railway-health-troubleshooter`

### Bot Development (13 agents)
`bot-discord-bot-specialist`, `bot-slack-bot-specialist`, `bot-telegram-bot-specialist`, `bot-teams-bot-specialist`, `bot-whatsapp-bot-specialist`, `bot-discord-bot-security-specialist`, `bot-discord-bot-testing-specialist`, `bot-discord-bot-refactoring-specialist`, `bot-discord-activity-db-architect`, `bot-discord-cron-scheduler`, `bot-discord-di-container-specialist`, `bot-discord-event-tracker`, `bot-button-interaction-specialist`

*[Additional categories continue...]*

</details>

## 🤝 Contributing

We welcome contributions to expand and improve the agent collection:

1. **Fork the repository**
2. **Create agent following the standard structure**
3. **Add comprehensive examples and validation**
4. **Submit pull request with detailed description**

### Agent Development Guidelines

- Follow the standard YAML frontmatter format
- Include comprehensive technical expertise sections
- Provide real-world implementation examples  
- Implement quality assurance frameworks
- Ensure Claude Code integration compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the Claude Code ecosystem
- Inspired by real-world software engineering challenges
- Community-driven development and improvement
- Enterprise-grade quality standards

---

**🔗 Quick Links**: [Documentation](docs/) | [Examples](examples/) | [Contributing](CONTRIBUTING.md) | [Issues](issues/) | [Discussions](discussions/)