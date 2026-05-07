// Orbius | NotX Development
// Author: NOT X
import { Command } from '#command';
import {
        MessageFlags,
        ButtonStyle,
        ButtonBuilder,
        ActionRowBuilder,
        ContainerBuilder,
        TextDisplayBuilder,
        SeparatorBuilder,
        SeparatorSpacingSize,
} from 'discord.js';

class PremiumCommand extends Command {
        constructor() {
                super({
                        name: 'premium',
                        description: 'Shows information about Falcron Premium',
                        usage: 'premium',
                        cooldown: 10,
                        enabledSlash: true,
                        slashData: {
                                name: 'premium',
                                description: 'Shows information about Falcron Premium',
                        },
                });
        }

        async execute({ ctx }) {
                const container = new ContainerBuilder();
                container.setAccentColor(0xffffff);

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent('**Orbius Premium**'),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true),
                );

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                                ' Orbius Premium is now available to purchase, you can purchase Orbius Premium by joining the official support server',
                        ),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true),
                );

                container.addActionRowComponents(
                        new ActionRowBuilder().addComponents(
                                new ButtonBuilder()
                                        .setLabel('Get Premium')
                                        .setURL('https://discord.gg/NotX')
                                        .setStyle(ButtonStyle.Link),
                        ),
                );

                await ctx.reply({
                        components: [container],
                        flags: MessageFlags.IsComponentsV2,
                });
        }
}

export default new PremiumCommand();

/**
 * Project: Orbius
 * Author: NOT X
 * Organization: NotX Development
 * GitHub: https://github.com/notxggs
 * License: Custom
 *
 * © 2026 NotX Development. All rights reserved.
 */
