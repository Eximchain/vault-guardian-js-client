const auth = {
  type: 'object',
  properties: {
    client_token: {
      type: 'string',
    },
    policies: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    metadata: {
      type: 'object',
    },
    lease_duration: {
      type: 'integer',
    },
    renewable: {
      type: 'boolean',
    },
  },
};

const tokenResponse = {
  type: 'object',
  properties: {
    auth,
  },
  required: ['auth'],
};

module.exports = {
  guardianLogin: {
    method: 'POST',
    path: '/{{mount_point}}{{^mount_point}}guardian{{/mount_point}}/login/',
    tokenSource: true,
    schema: {
      req: {
        type: 'object',
        properties: {
          username: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
        required: ['username', 'password'],
      },
      res: tokenResponse,
    },
  },
  guardianSign: {
    method: 'POST',
    path: '/{{mount_point}}{{^mount_point}}guardian{{/mount_point}}/sign/',
    schema: {
      req: {
        type: 'object',
        properties: {
          token: {
            type: 'string',
          },
        },
        required: ['token'],
      },
      res: {
        type: 'object',
        properties: {
          data: {
            type: 'object',
            properties: {
              signature: {
                type: 'string',
              },
            },
          },
        },
        required: ['data'],
      },
    },
  },
  unwrap: {
    method: 'POST',
    path: '/sys/wrapping/unwrap',
    schema: {
      req: {
        type: 'object',
        properties: {
          token: {
            type: 'string',
          },
        },
      },
    },
  },
};
