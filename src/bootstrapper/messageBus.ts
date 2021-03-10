type Message = IncrementMessage | IncrementAcceptedMessage;

export class IncrementMessage {
  type = 'INCREMENT_MESSAGE' as const;
  constructor(public value: number) {};
}; 

export class IncrementAcceptedMessage {
  type = 'INCREMENT_ACCEPTED_MESSAGE' as const;
  constructor() {};
};

type OnMessageCallback = (message: Message) => void;

interface MessageBus {
  postMessage(message: Message): void;
  onMessage(callback: OnMessageCallback): void;
  close(): void;
}

// Connect to the channel named "sp_bus".
const channel = new BroadcastChannel('sp_bus');

export const bus = <MessageBus>{
  postMessage(message) {
    channel.postMessage(message);
  },
  onMessage(callback) {
    channel.onmessage = function(e: MessageEvent<Message>) {
      callback(e.data);
    };
  },
  close() {
    channel.close();
  }
};