{
  "name": "RPMS-07",
  "hostRequirements": {
    "cpus": 8,
    "memory": "16gb"
  },
  "dockerComposeFile": "../docker-compose.yml",
  "service": "backend",
  "workspaceFolder": "/workspace",
  "features": {
    "ghcr.io/devcontainers/features/docker-in-docker:2": {
      "version": "latest",
      "moby": false
    },
    "ghcr.io/devcontainers/features/node:1": {
      "version": "lts"
    }
  },
  "customizations": {
    "vscode": {
      "extensions": [
        "xdebug.php-debug",
        "bmewburn.vscode-intelephense-client",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "cweijan.vscode-database-client2" 
      ]
    }
  },
  "remoteEnv": {
    "GITHUB_CODESPACES": "${localEnv:CODESPACES}"
  },
  "postStartCommand": "git config --global --add safe.directory /workspace"
}