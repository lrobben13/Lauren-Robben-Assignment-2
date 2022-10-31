//does the browser support the service worker?

if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register(".sw.js")
    .then(reg => {
        console.log(`Service Worker Registration (Scope: ${reg.scope})`);
    })
    .catch((error) => {
        console.log(`Service Worker Error (${error})`);
    });
} else{
    console.log("Service Worker not avaliable");
}
