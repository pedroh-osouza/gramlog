# 📬 Gramlog

## 🚀 Instalação

Você só precisa do `axios` instalado:

```bash
npm install axios
```

Depois, adicione o arquivo `Gramlog.ts` ao seu projeto.

## ⚙️ Configuração

Você vai precisar de:

1. **Um bot no Telegram**  
   Crie um usando o [@BotFather](https://t.me/BotFather) e pegue o token.

2. **Um chat_id**  
   Pode ser seu ID pessoal ou de um grupo. Para obter, envie uma mensagem para o bot e use a API do Telegram para descobrir o ID:
   
   ```
   https://api.telegram.org/botSEU_TOKEN/getUpdates
   ```

## 🧠 Uso

```ts
import { Gramlog } from './Gramlog';

const gramlog = new Gramlog('SEU_BOT_TOKEN', 'SEU_CHAT_ID');

// Exemplos:
await gramlog.info('Servidor iniciado', 'O app está rodando na porta 3000');
await gramlog.debug('Dados recebidos', JSON.stringify({ foo: 'bar' }));
await gramlog.success('Pagamento aprovado', 'Pedido #123 foi pago com sucesso.');
await gramlog.warn('Uso de memória alto', 'O uso de RAM ultrapassou 80%.');
await gramlog.error('Erro no banco', 'Timeout ao conectar no PostgreSQL.');
```

## 📝 Formato da Mensagem

As mensagens são enviadas com formatação Markdown e seguem este modelo:

```
[emoji] LEVEL - TÍTULO
Mensagem detalhada
```

**Exemplo:**

```
✅ SUCCESS - Pagamento aprovado
Pedido #123 foi pago com sucesso.
```

## 📌 Níveis de Log

| Método         | Emoji | Descrição                    |
|----------------|--------|------------------------------|
| `info`         | ℹ️     | Informações gerais           |
| `debug`        | 🐛     | Logs de depuração            |
| `success`      | ✅     | Operações bem-sucedidas      |
| `warn`         | ⚠️     | Avisos importantes           |
| `error`        | ❌     | Erros que exigem atenção     |

## ❗ Avisos

- O Telegram tem **limite de taxa**. Não dispare milhares de mensagens ou você será bloqueado.
- Ideal para logs de produção ou alertas pontuais.
- Não abuse: log demais é ruído. Use para o que importa.
