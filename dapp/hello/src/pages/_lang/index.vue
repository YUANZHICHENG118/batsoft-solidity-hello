<template>
    <div>
        <p>我的地址：{{ account }}</p>
        <p>订单号：{{ orderId }}</p>
        <p>钱包余额：{{ banlance }} BNB</p>
        <Button :loading="loading" :disabled="loading" @click="setOrder">设置</Button>
        <Input :disabled="false" v-model="setOrderId" placeholder="Enter something..."
               style="width: 300px; background-color: #fff; color: #0a0e17"/>

    </div>
</template>

<script>
    import web3Mixins from '@/mixins/web3'

    /**
     * abi 是区块链刚才部署合约后生成的ABI
     */
    export default {
        mixins: [web3Mixins],
        data () {
            return {
                loading: false,
                contractAddress: '0x69Ec4D5F485a8731cbff9aC30c043c2F47739172', // 刚才部署的合约地址
                orderId: 0,
                setOrderId: 0,
                banlance: 0,
                abi: [{
                    'inputs': [],
                    'name': 'getOrderId',
                    'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
                    'stateMutability': 'view',
                    'type': 'function'
                }, {
                    'inputs': [{ 'internalType': 'uint256', 'name': 'x', 'type': 'uint256' }],
                    'name': 'setOrderId',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }]
            };
        },
        computed: {},
        methods: {
            // 初始化合约
            getContract () {
                return new this.web3.eth.Contract(this.abi, this.contractAddress);
            },
            // 查询余额BNB
            getBalance (address) {
                this.web3.eth.getBalance(address).then(d => {
                    this.banlance = this.web3.utils.fromWei(d, 'ether')
                })
            },
            // 查询订单号
            findOrder () {
                let contract = this.getContract();
                contract.methods.getOrderId().call().then(d => {
                    this.orderId = d
                });
            },
            // 设置合约订单ID
            async setOrder () {
                this.loading = true;
                let contract = this.getContract();

                const gasAmount = await contract.methods.setOrderId(this.setOrderId).estimateGas({
                    from: this.account,
                    value: 0
                });
                return contract.methods.setOrderId(this.setOrderId).send({
                    from: this.account,
                    value: 0,
                    gasLimit: gasAmount
                }).then(data => {
                    this.$Notice.success({ desc: '设置成功，请等待区块确认' })
                    console.log('result ====', data)
                    setTimeout(this.findOrder, 8000)
                    this.loading = false
                    return data;
                }).catch(e => {
                    this.loading = false
                    console.log('result', e)
                    this.$Notice.success({ desc: '异常' })
                })
            },
            // 转账
            tx () {
                const gas = 5 * Math.pow(10, 9)
                let params = [
                    {
                        from: this.account,
                        to: '0x60330E5BEfc56da31619660E4a0E4f4F7c04D092',
                        gas: this.web3.utils.numberToHex(57710),
                        gasPrice: this.web3.utils.numberToHex(gas),
                        value: this.web3.utils.numberToHex(this.web3.utils.toWei(0.1, 'ether')),
                        data: '0x0'
                    }
                ];
                window.ethereum.request({
                    method: 'eth_sendTransaction',
                    params
                }).then((result) => {
                    this.$Notice.success({ desc: '支付成功，请等待区块确认' })
                    console.log('hash===', result)
                }).catch((error) => {
                    console.log('===error', error)
                // If the request fails, the Promise will reject with an error.
                });
            }
        },
        mounted () {
            this.findOrder()
            if (this.account != null) {
                this.getBalance(this.account)
            } else {
                setTimeout(() => {
                    this.getBalance(this.account)
                }, 5000)
            }
        }
    }
</script>
