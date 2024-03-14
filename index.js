import {genNodeAPI} from "arseeding-js";
import {readdirSync, readFileSync, writeFileSync} from "fs";


const run = async () => {

    const arseedUrl = 'https://arseed.web3infra.dev'
    const payCurrencyTag = 'ethereum-usdt-0xdac17f958d2ee523a2206206994597c13d831ec7' // everPay 支持的 token tag (chainType-symbol-id)
    const options = {
        tags: [{name: 'Content-Type', value: 'image/png'}]
    }
    const instance = genNodeAPI("");

    let records = [];
    const path = "../../Downloads/demoar/";
    const files = readdirSync(path);
    for (const file of files) {

        console.log("path:", path + file);

        const data = readFileSync(path + file);
        // console.log(data);

        const res = await instance.sendAndPay(arseedUrl, data, payCurrencyTag, options);
        res.path = file;
        console.log('res', res);

        records.push(res);

    }

    const jsonString = JSON.stringify(records);
    await writeFileSync('../../Downloads/records.json', jsonString);

}

run().then();
