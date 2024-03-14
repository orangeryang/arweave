import { genNodeAPI } from "arseeding-js";
import { } from "fs";

const run = async () => {
    const instance = genNodeAPI('YOUR PRIVATE KEY')
    const arseedUrl = 'https://arseed.web3infra.dev'
    const data = Buffer.from('........')
    const payCurrencyTag = 'ethereum-usdt-0xdac17f958d2ee523a2206206994597c13d831ec7' // everPay 支持的 token tag (chainType-symbol-id)
    // const options = {
    //   tags: [{ name: 'Content-Type', value: 'image/png' }]
    // }
    // const res = await instance.sendAndPay(arseedUrl, data, payCurrencyTag, options)
    // console.log('res', res)
}
run()