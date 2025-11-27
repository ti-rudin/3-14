module.exports = {
  apps: [{
    name: '3-14.ti-soft.ru',
    cwd: '/home/rudin/3-14',
    script: 'npm',
    args: 'run serve',
    env: {
      NODE_ENV: 'production',
      PORT: 3140,
      VITE_ALLOWED_HOSTS: '3-14.ti-soft.ru,localhost',
      VITE_MAIN_FRONTEND_DOMAIN: '3-14.ti-soft.ru'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
