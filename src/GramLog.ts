import axios from 'axios';

export class Gramlog {
  private token: string;
  private chatId: string | number;
  private apiUrl: string;

  constructor(token: string, chatId: string | number) {
    this.token = token;
    this.chatId = chatId;
    this.apiUrl = `https://api.telegram.org/bot${this.token}/sendMessage`;
  }

  private getEmoji(level: string): string {
    const emojis: { [key: string]: string } = {
      INFO: 'ℹ️',
      DEBUG: '🐛',
      SUCCESS: '✅',
      WARN: '⚠️',
      ERROR: '❌'
    };
    return emojis[level.toUpperCase()] || '';
  }

  private async sendMessage(level: string, title: string, message: string): Promise<void> {
    const emoji = this.getEmoji(level);
    const formattedMessage = `${emoji} *${level.toUpperCase()}* - *${title}*\n${message}`;
    const payload = {
      chat_id: this.chatId,
      text: formattedMessage,
      parse_mode: 'Markdown'
    };

    try {
      const response = await axios.post(this.apiUrl, payload, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status !== 200) {
        throw new Error(`Erro ao enviar mensagem: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Erro no Gramlog:', error);
    }
  }

  public async info(title: string, message: string): Promise<void> {
    await this.sendMessage('INFO', title, message);
  }

  public async debug(title: string, message: string): Promise<void> {
    await this.sendMessage('DEBUG', title, message);
  }

  public async success(title: string, message: string): Promise<void> {
    await this.sendMessage('SUCCESS', title, message);
  }

  public async warn(title: string, message: string): Promise<void> {
    await this.sendMessage('WARN', title, message);
  }

  public async error(title: string, message: string): Promise<void> {
    await this.sendMessage('ERROR', title, message);
  }
}