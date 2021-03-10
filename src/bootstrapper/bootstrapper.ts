import { bus, IncrementAcceptedMessage, IncrementMessage } from "./messageBus";

const INCREMENT_ACCEPTED_ACKNOWLEDGEMENT_TIMEOUT = 100;

export type IncrementCallback = (increment: number) => void;

let onIncrementCallback: IncrementCallback | undefined;

export function bootstrap(rootNode: HTMLElement | null, success: () => void) {
  let isPrimaryInstance = false;

  const timeoutId = setTimeout(() => {
      isPrimaryInstance = true;
      success();
    },
    INCREMENT_ACCEPTED_ACKNOWLEDGEMENT_TIMEOUT
  );

  // Retrieve the initial increment from the 'increment' query param defaulted with 1.
  const incrementQueryParam = new URLSearchParams(window.location.search).get('increment') || '';
  const initialIncrement = Number.parseInt(incrementQueryParam || '', 10) || 1;

  // Send an Initial Increment message the bus.
  bus.postMessage(new IncrementMessage(initialIncrement));

  // Listen for messages on the bus.
  bus.onMessage(message => {
    switch (message.type) {
      case 'INCREMENT_MESSAGE': {
        bus.postMessage(new IncrementAcceptedMessage());
        console.log('Accepting increment message');
        onIncrementCallback && onIncrementCallback(message.value);
        
      }; break;
      case 'INCREMENT_ACCEPTED_MESSAGE': {
        if (!isPrimaryInstance) {
          clearTimeout(timeoutId);
          console.log('Increment accepted message received - closing');
          bus.close();
          rootNode && insertCloseWindowScript(rootNode);
        }
      }
    }
  });
}

export function onBootstrapIncrementMessage(callback: IncrementCallback) {
  onIncrementCallback = callback;
}

function insertCloseWindowScript(rootNode: HTMLElement) {
  window.close(); //FIXME no more authorized by browsers
}