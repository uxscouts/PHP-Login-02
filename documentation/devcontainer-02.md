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
  "forwardPorts": [
    3000,
    8001,
    3306
  ],
  "portsAttributes": {
    "3000": {
      "label": "React Frontend"
    },
    "3306": {
      "label": "MySQL Database",
      "onAutoForward": "ignore"
    },
    "8001": {
      "label": "PHP Backend",
      "onAutoForward": "notify"
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
  }
}