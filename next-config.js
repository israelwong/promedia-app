module.exports = {
    async rewrites() {
      return [
        {
          // Reescribe cualquier solicitud del subdominio hacia /carpeta
          source: '/',
          destination: '/admin',
          has: [
            {
              type: 'host',
              value: 'admin.promedia.mx', // Aquí colocas el subdominio que configuraste
            },
          ],
        },
      ]
    },
  }
  