if (typeof window === 'undefined') {
    const { server } = require('./server');
    server.listen();
    // server.listen({ onUnhandledRequest: 'bypass' });
} else {
    const { worker } = require('./browser');
    worker.start();
    // worker.start({ onUnhandledRequest: 'bypass' });
}

export {};

// async function initMocks() {
//     if (typeof window === 'undefined') { 
//         const { server } = await import('./server');
//         server.listen({ onUnhandledRequest: 'bypass' });
//     } 
//     else { 
//         const { browser } = await import('./browser');
//      worker.start({ onUnhandledRequest: 'bypass' });
//     } 
// }

// initMocks()