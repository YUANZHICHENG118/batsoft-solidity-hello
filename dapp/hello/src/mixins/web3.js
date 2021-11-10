
import Web3 from 'web3';
/**
 * web3js
 * */
export default {

    data () {
        return {
            web3: null,
            account: null
        }
    },
    methods: {
        baseContract  (abi, address) {
            let contract = new this.web3.eth.Contract(abi, address);
            return contract
        },
        getAccount  () {
            return this.account;
        },
        initWeb3 () {
            if (window.ethereum) {
                this.chainId = parseInt(window.ethereum.chainId)
                this.web3 = new Web3(window.ethereum);
                this.connectWallet();
            } else if (window.web3) { // 老版 MetaMask Legacy dapp browsers...
                this.web3 = new Web3(window.web3.currentProvider);
            }
        },
        // 连接钱包
        connectWallet () {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(data => {
                    console.log('===data,', data);
                    // this.account = data ? data[0] : undefined
                    this.account = data ? data[0] : undefined
                })
                .catch(err => {
                    console.log('===err,', err);
                    if (err.code === 4001) {
                        // EIP 1193 userRejectedRequest error
                        console.log('Please connect to MetaMask.');
                    } else {
                        console.error(err);
                    }
                });

            // 监听账号变化
            window.ethereum.on('accountsChanged', function (data) {
                console.log('accountsChanged', data[0])
                // this.account = data ? data[0] : undefined
                this.account = data ? data[0] : undefined
            })
        }
    },
    mounted () {
        this.initWeb3()
    }
}
