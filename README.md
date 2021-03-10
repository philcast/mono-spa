# mono-spa
> Mono-instance Single Page Application sample - using the Broadcast Channel API

Ensures there is only a single instance of the spa in the browser.
The first loaded application instance becomes the primary counter initialized with 0. A click on the counter button increments by 1.

If another instance is loaded in the same browser, it delegates the counter operations to the primary instance asking to increment with the optional **increment** query param (defaulted to 1). Once the delegation is acknowledged, it then closes the secondary instance (browser tab).

## TODO
(when a secondary spa instance is loaded and the counter delegation is acknowledged)
- Fix closing the secondary instance (browser tab) that wasn't opened by a script or link in modern browsers. How to reproduce: open another browser instance and manually input the url.
- Ask the browser to switch to the primary instance that becomes the active browser tab.

## Technical stack

- [Vite frontend build tool](https://vitejs.dev/)
- [React](reactjs.org)
- [Typescript](https://www.typescriptlang.org/)

## Scripts

| Npm Script                | Description                                            |
| ------------------------- | :----------------------------------------------------- |
| dev                       | Starts the dev server                                  |
| build                     | Builds for production                                  |
| serve                     | Locally previews the production build                  |


## Documentation links

- https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
- https://developers.google.com/web/updates/2016/09/broadcastchannel

