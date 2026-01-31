# AGENTS.md

## Overview
CMS application used to manage site content, assets, and related APIs consumed by the public web app.

## Folder Structure
- `src/`: CMS source code and configuration.
- `public/`: Static assets served by the CMS.
- `Dockerfile` / `dev.Dockerfile`: Build and dev images.

## Core Behaviors & Patterns
- Preserve API compatibility with the public app.
- Prefer explicit configuration changes over implicit defaults.
- Keep server behavior aligned with existing CMS conventions.

## Conventions
- Maintain existing linting and formatting conventions.
- Avoid renaming routes, fields, or schema keys without a clear request.
- Keep environment variable usage consistent with current patterns.

## Working Agreements
- Scope changes to the request; avoid unrelated refactors.
- Keep edits minimal and consistent with existing style.
- Summarize edits with exact file paths.
