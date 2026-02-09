#!/bin/sh
set -eu

if [ ! -f ".next/standalone/server.js" ]; then
	echo "[entrypoint] Missing .next/standalone/server.js." >&2
	exit 1
fi

if [ "${VERIFY_NEXT_CHUNKS:-1}" = "1" ] && [ -d ".next/server/app" ]; then
	chunk_refs="$(grep -Rho 'static/chunks/[a-zA-Z0-9._-]*\.css' .next/server/app 2>/dev/null | sort -u || true)"
	ref_count=0
	missing_count=0
	for rel_path in $chunk_refs; do
		ref_count=$((ref_count + 1))
		if [ ! -f ".next/$rel_path" ]; then
			echo "[entrypoint] Missing chunk referenced by manifest: .next/$rel_path" >&2
			missing_count=$((missing_count + 1))
		fi
	done
	echo "[entrypoint] CSS chunk refs=$ref_count missing=$missing_count"
fi

echo "[entrypoint] Starting standalone server..."
"$@" &
server_pid=$!

if [ "${RUN_GENERATE_AFTER_STARTUP:-1}" = "1" ]; then
	(
		echo "[entrypoint] Running build:generate in background..."
		if bun run build:generate; then
			echo "[entrypoint] build:generate completed."
		else
			echo "[entrypoint] build:generate failed (continuing with running server)." >&2
		fi
	) &
	generate_pid=$!
else
	generate_pid=""
fi

on_exit() {
	if [ -n "${generate_pid:-}" ] && kill -0 "$generate_pid" 2>/dev/null; then
		kill "$generate_pid" 2>/dev/null || true
		wait "$generate_pid" 2>/dev/null || true
	fi
	if kill -0 "$server_pid" 2>/dev/null; then
		kill "$server_pid" 2>/dev/null || true
	fi
}

trap on_exit INT TERM

wait "$server_pid"
server_status=$?

if [ -n "${generate_pid:-}" ] && kill -0 "$generate_pid" 2>/dev/null; then
	kill "$generate_pid" 2>/dev/null || true
	wait "$generate_pid" 2>/dev/null || true
fi

exit "$server_status"
