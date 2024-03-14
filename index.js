import { genNodeAPI } from "arseeding-js";
import { readdirSync, readFile } from "fs";

const run = async () => {
    const arseedUrl = 'https://arseed.web3infra.dev'
    const payCurrencyTag = 'ethereum-usdt-0xdac17f958d2ee523a2206206994597c13d831ec7' // everPay 支持的 token tag (chainType-symbol-id)
    const options = {
        tags: [{name: 'Content-Type', value: 'image/png'}]
    }
    
    const instance = genNodeAPI('YOUR PRIVATE KEY')
    
    const path = "../../Downloads/demoar/";
    const files = readdirSync(path);
    files.forEach(file => {
        console.log("path:", path + file);
        readFile(path + file, async (err, data) => {
            
            console.log(data);
            const res = await instance.sendAndPay(arseedUrl, data, payCurrencyTag, options);
            console.log('res', res);
            
        })
    })
    
    
}

await run();
