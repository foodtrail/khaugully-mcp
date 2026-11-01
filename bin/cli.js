#!/usr/bin/env node
import { spawn } from 'node:child_process';

const remoteUrl = process.env.KHAUGULLY_MCP_URL || 'https://khaugully.app/mcp';
const args = ['-y', 'mcp-remote', remoteUrl];

const child = spawn('npx', args, {
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
