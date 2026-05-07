// Orbius | NotX Development
// Author: NOT X
import { db } from '#dbManager';

export default {
        name: 'messageCreate',
        async execute({ eventArgs }) {
                if (!eventArgs?.[0]) return;

                const [message] = eventArgs;

                if (message.author?.bot || !message.guild) return;

                try {
                        const isBlacklisted = await db.guild?.isMessageChannelBlacklisted(
                                message.guild.id,
                                message.channel.id,
                        );
                        if (isBlacklisted) return;

                        await db.userMessageCounter?.increment(message.guild.id, message.author.id);
                } catch {
                }
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