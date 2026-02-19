# AGENTS.md

## Dev environment tips
- Run commands from the repository root.
- Install deps with `bun install --frozen-lockfile --linker=isolated`.
- In containers/devcontainers, use `bun install --frozen-lockfile --backend=copyfile` to avoid hardlink issues.
- Keep runtime startup focused on `bun dev`; dependency install should be one-time (`.devcontainer` `postCreateCommand`) or conditional (`docker/docker-entrypoint.sh`).
- Use Taskfile for routine commands: `task build:compile`, `task build:generate`, `task validate`, `task codegen:check`.
- Keep Payload CLI reuse in `package.json` via `bun run p:cli <command>` instead of inlining long `PAYLOAD_CONFIG_PATH` commands in Taskfile.
- Docker production build uses standalone runtime output only; switch build mode with `--build-arg NEXT_BUILD_MODE=<compile|default|generate>`.

## Testing instructions
- CI plans live in `.github/workflows/test.yml` and `.github/workflows/release.yml`.
- Before merge, run `task validate` and `task codegen:check`.
- If generated artifacts drift, run `task codegen` and then rerun `task validate`.
- For container-level verification, run `docker build -f docker/Dockerfile --target runner .` (optionally with `--build-arg NEXT_BUILD_MODE=...`).
- Keep all checks green before committing.

## PR instructions
- Scope edits to the request and avoid unrelated refactors.
- Preserve API/schema compatibility for `src/app/(frontend)` and `src/app/(payload)` unless explicitly requested.
- Keep Next.js `revalidate` exports as direct numeric literals (for example, `export const revalidate = 21600`) instead of imported constants.
- For image publishing changes, keep `.github/workflows/manual-compile-image.yml` behavior intact: manual dispatch, `build_mode` input, auto tags `latest` + latest git tag.
- Manual image workflow builds/pushes only; VPS deployment is manual.
- Summaries must include exact file paths changed and any assumptions/questions.
