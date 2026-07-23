import { marketWatcher, } from "@reiryoku/mida";

const watcher = await marketWatcher({ tradingAccount: myAccount, });

await watcher.watch("BTCUSDT", { watchTicks: true, });

watcher.on("tick", (event) => {
    const { tick, } = event.descriptor;

    log(`Bitcoin price is now ${tick.bid} USD!`);
});

// come back to this when you get better with javascript, you can use the watcher to watch multiple markets at once, and even watch for specific events like price changes or volume spikes. You can also use the watcher to place trades automatically based on certain conditions.
// https://dev.to/vasile_peste/nodejs-crypto-trading-for-beginners-2pn1 