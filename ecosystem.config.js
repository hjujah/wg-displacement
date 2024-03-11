module.exports = {
	apps: [
		{
			name: "wg",
			script: "pm2 startOrReload ecosystem.config.js --env development",
			env: {
				NODE_ENV: "development"
			},
			env_production: {
				NODE_ENV: "development"
			}
		}
	],

	deploy: {
		staging: {
			user: "synchronized",
			host: "157.245.77.136",
			ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
			ref: "origin/main",
			repo: "git@bitbucket.org:rbln7/wg.git",
			path: "/home/synchronized/sites/wg-displacement/",
			"post-deploy": "npm install && npm run build && pm2 restart wg3028"
		},
		
	}
}
