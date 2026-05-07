// Orbius | NotX Development
// Author: NOT X
export const config = {
        token: process.env.DISCORD_TOKEN || '',
        clientId: process.env.DISCORD_CLIENT_ID || '',
        prefix: '-',
        ownerIds: process.env.OWNER_IDS ? process.env.OWNER_IDS.split('1361564663686369420') : [1361564663686369420],
        ownerOnly: false,

        links: {
                supportServer: 'https://discord.com/invite/KzB3yzZNP6',
                invite: 'https://discord.com/oauth2/authorize?client_id=' + process.env.DISCORD_CLIENT_ID + '&permissions=8&integration_type=0&scope=bot',
        },

        cache: {
                maxSize: process.env.NODE_ENV === 'production' ? 100000 : 50000,
                flushOnStart: false,
                flushOnShutdown: false,
        },

        database: {
                uri: process.env.MONGODB_URI || '',
        },

        presence: {
                status: 'online',
                activity: {
                        name: '-help | NotX Development',
                        type: 'Watching',
                },
        },

        watermark: '',
        version: '1.0.0',
};

