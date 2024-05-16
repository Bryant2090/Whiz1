import { BaseCommand, Command, Message } from '../../Structures'

@Command('wallet', {
    description: ' check out your wallet gold',
    usage: 'wallet',
    category: 'economy',
    exp: 10,
    cooldown: 10
})
export default class command extends BaseCommand {
    override execute = async ({ reply, sender }: Message): Promise<void> => {
        const { wallet } = await this.client.DB.getUser(sender.jid)
        const text = `👛 *Wallet* 👛\n\n🪙 *Coins ${wallet}*`
        return void (await reply(text))
    }
}
