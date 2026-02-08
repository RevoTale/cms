# AGENTS.md

## Overview
Unified Next.js runtime that serves both the public website and Payload CMS/admin APIs.

## Folder Structure
- `src/app/(frontend)/`: Public website routes (localized).
- `src/app/(payload)/`: Payload admin and generated API routes.
- `src/app/src/`: Shared public-website UI/data/i18n logic migrated from legacy `app`.
- `src/payload/`: Payload collections, hooks, tasks, and plugins.
- `public/`: Static assets served by the unified runtime.
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
