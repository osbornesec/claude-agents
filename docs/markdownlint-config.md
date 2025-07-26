# Markdownlint Configuration

This project uses strict markdownlint rules to ensure consistent, high-quality markdown formatting
across all documentation and agent files.

## Configuration Files

### `.markdownlint-cli2.jsonc`

Main markdownlint configuration with strict rules for:

- Line length limits (100 chars, 120 for code blocks)
- Heading hierarchy and formatting
- List formatting and indentation
- Code block and link formatting
- Proper capitalization of technical terms

### `.markdownlint-proper-names.json`

Maintains a categorized list of technical terms that should be properly capitalized:

- **technicalTerms**: Core technologies (JavaScript, TypeScript, API, etc.)
- **frameworks**: Web and backend frameworks (React, Express, Django, etc.)
- **databases**: Database technologies (PostgreSQL, MongoDB, Redis, etc.)
- **cloudProviders**: Cloud platforms (AWS, Azure, GCP, etc.)
- **tools**: Development tools (Docker, Kubernetes, Terraform, etc.)

## Usage

### Running Lint Checks

```bash
# Check all markdown files
npm run lint:md

# Fix auto-fixable issues
npm run lint:md:fix

# Run full quality check (lint + format)
npm run quality
```

### Managing Proper Names

To add new technical terms that should be properly capitalized:

1. **Edit `.markdownlint-proper-names.json`** - Add terms to appropriate categories
2. **Update `.markdownlint-cli2.jsonc`** - Add the new terms to the MD044 names array
3. **Test the configuration**:

   ```bash
   node scripts/build-markdownlint-config.js
   npm run lint:md
   ```

### Adding New Categories

To add a new category of proper names:

1. Add the category to `.markdownlint-proper-names.json`
2. Update the build script if needed
3. Add the terms to the main configuration

## Pre-commit Integration

The markdownlint rules are enforced via pre-commit hooks using `lint-staged`:

- All staged `.md` files are automatically linted and fixed
- Formatting is applied with Prettier
- Commits are blocked if unfixable issues remain

## Rule Customization

### Common Rule Adjustments

- **MD013 (line length)**: Adjust `line_length` in config for different limits
- **MD044 (proper names)**: Add new technical terms to the names array
- **MD036 (emphasis)**: Currently disabled for agent files with structured sections

### Disabling Rules

To disable a rule for specific files, add to the `ignores` array or use inline comments:

```markdown
<!-- markdownlint-disable-next-line MD013 -->

This is a very long line that exceeds the normal length limit but is necessary for this specific
case.
```

## Troubleshooting

### Common Issues

1. **Line too long (MD013)**: Break long lines at sentence boundaries or after commas
2. **Improper capitalization (MD044)**: Check if the term is in the proper names list
3. **Heading hierarchy (MD001)**: Ensure headings increment by only one level

### Getting Help

- View all available names: `node scripts/build-markdownlint-config.js`
- Check specific file: `npx markdownlint-cli2 "path/to/file.md"`
- Lint with explanations: `npx markdownlint-cli2 --fix "**/*.md"`
