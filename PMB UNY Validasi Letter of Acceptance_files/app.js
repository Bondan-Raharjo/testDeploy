window.addEventListener('load', e => {
    //new PWAConfApp();
    registerSW(); // <-- Add this
});

async function registerSW() { // (1)
    if ('serviceWorker' in navigator) { // (2)
        try {
            await navigator.serviceWorker.register('/sw.js'); // (3)
        } catch (e) {
            console.error('ServiceWorker registration failed. Sorry about that.'); // (4)
        }
    } else {
        console.error('ServiceWorker not loaded'); //(5)
    }
}