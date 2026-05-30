#!/bin/sh
set -eu

LOCK_FILE="pnpm-lock.yaml"
STAMP_FILE="node_modules/.pnpm-lock-hash"
INSTALL_FLAGS="install --frozen-lockfile"

needs_install=0

if [ ! -d node_modules ]; then
  needs_install=1
fi

if [ "$needs_install" -eq 0 ] && [ -f "$LOCK_FILE" ]; then
  current_hash="$(sha256sum "$LOCK_FILE" | awk '{print $1}')"
  previous_hash=""
  if [ -f "$STAMP_FILE" ]; then
    previous_hash="$(cat "$STAMP_FILE")"
  fi
  if [ "$current_hash" != "$previous_hash" ]; then
    needs_install=1
  fi
fi

if [ "$needs_install" -eq 1 ]; then
	if [ -f "$LOCK_FILE" ]; then
		pnpm $INSTALL_FLAGS
		mkdir -p "$(dirname "$STAMP_FILE")"
		sha256sum "$LOCK_FILE" | awk '{print $1}' > "$STAMP_FILE"
	else
		pnpm install
	fi
fi

exec "$@"
