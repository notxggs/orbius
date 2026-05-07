// Orbius | NotX Development
// Author: NOT X
export default {
        name: 'inviteDelete',
        async execute({ eventArgs, client }) {
                const [invite] = eventArgs;
                if (!invite.guild) return;

                const guildCache = client.inviteCache?.get(invite.guild.id);
                if (guildCache) guildCache.delete(invite.code);
        },
};

/**
 * Project: Orbius
 * Author: NOT X
 * Organization: NotX Development
 * GitHub: https://github.com/notxggs
 * License: Custom
 *
 * © 2026 NotX Development. All rights reserved.
 */