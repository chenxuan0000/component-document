<template>
    <div class="wd1000-auto upgrade-awards">
        <div class="upgrade-get">
            <div class="line-bar">
                <line-bar :type="'rect'" :value="90" :options="lineBarOptions" :valAddCalBack="valAddCalBack"
                          class="svg-bar"></line-bar>
                <ul class="vip-sign">
                    <li :class="[level.className,{active:level.active}]" v-for="level in levelArray">
                        <div class="limit-hover-hack">
                            <p class="icon"></p>
                            <p class="name">{{level.name}}</p>
                            <div class="dot-block">
                                <span class="dot-inner" :class="level.dotCur"></span>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="flex">
                    <li class="cash" :class="item.state" v-for="item in cashArr">
                        <div v-if="item.value">
                            <div class="cash-div flex">
                                <div class="face-value"><span>{{item.value}}</span>元</div>
                                <div class="type">{{item.type}}</div>
                            </div>
                            <button class="receive">已领取</button>
                        </div>
                        <div v-else class="noAward"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex intro-info">
            <intro-table :detail="tableDetail" :thWidth="'84px'"></intro-table>
            <intro-text :text="introText"></intro-text>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "../common";

    .upgrade-get {
        @include white-shadow-block;
        .noAward {
            margin: -15px 0 0 -62px;
            width: 88px;
            height: 85px;
            background-image: url('../img/no-award.png');
        }
        .cash {
            padding-top: 10px;
            margin: 0 10px 0 23px;
            text-align: center;
            &.disabled {
                .desc {
                    opacity: 0.4;
                    color: #fac01e;
                }
                .cash-div {
                    opacity: 0.5;
                    background-image: url('../img/cash-coupon-disable.png');
                }
            }
            &.can {
                .desc {
                    color: #fac01e;
                }
                .cash-div {
                    background-image: url('../img/cash-coupon-can.png');
                }
                .receive {
                    @include receive-btn(2);
                }
            }
            .desc {
                padding: 4px 8px;
                line-height: 18px;
                font-size: 12px;
                color: #c5c5c5;
            }
            .receive {
                margin-top: 10px;
                @include receive-btn;
            }
            .cash-div {
                color: #fff;
                overflow: hidden;
                width: 115px;
                height: 62px;
                margin-top: 8px;
                background-image: url('../img/cash-coupon-has.png');
                background-size: cover;
                .face-value {
                    width: 70px;
                    text-align: center;
                    line-height: 62px;
                    font-size: 11.2px;
                    span {
                        font-weight: bold;
                        padding-right: 2px;
                        font-size: 22.2px;
                    }
                }
                .type {
                    width: 18px;
                    margin-top: 6px;
                    font-weight: bold;
                    margin-left: 13px;
                    font-size: 14.8px;
                    line-height: 17px;
                }
            }
        }
        .line-bar {
            height: 100%;
            width: 740px;
            margin: 0 auto;
            background: url("../img/line-bar-bg2.png") center 58px no-repeat;
        }
        .svg-bar {
            height: 20px;
            padding-top: 53.5px;
            text-align: center;
        }
        .vip-sign {
            position: relative;
            top: -59px;
            width: 100%;
            color: #fff;
            li {
                position: absolute;
                transform: translateX(-40%);
                &.active {
                    &::before {
                        display: block;
                    }
                    .dot-block .dot-inner {
                        display: block;
                    }
                    .name {
                        opacity: 1;
                    }
                    &.vip1 {
                        .icon {
                            background-image: url('../img/vip1-100.png');
                        }
                    }
                    &.vip2 {
                        .icon {
                            background-image: url('../img/vip2-100.png');
                        }
                    }
                    &.vip3 {
                        .icon {
                            background-image: url('../img/vip3-100.png');
                        }
                    }
                    &.vip4 {
                        .icon {
                            background-image: url('../img/vip4-100.png');
                        }
                    }
                    &.vip5 {
                        .icon {
                            background-image: url('../img/vip5-100.png');
                        }
                    }
                    &.vip6 {
                        .icon {
                            background-image: url('../img/vip6-100.png');
                        }
                    }

                }
                .dot-block {
                    position: relative;
                    height: 30px;
                    .dot-inner {
                        position: absolute;
                        display: none;
                        left: 50%;
                        top: 11px;
                        transform: translate(-50%, -50%);
                        border: 1px solid #fac01e;
                        border-radius: 50%;
                        background-color: #fac01e;
                        animation: dotSlide .5s ease-out forwards;
                        &.cur {
                            width: 7px;
                            height: 7px;
                            background-color: #f5f5f5;
                            box-shadow: 0 0 0 3px #f5f5f5
                        }
                    }
                }
                .icon {
                    height: 22px;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .name {
                    font-weight: bold;
                    color: #505050;
                    text-align: center;
                    opacity: 0.5;
                }
                &.vip1 {
                    transform: translateX(-34%);
                    .icon {
                        background-image: url('../img/vip1-50.png');
                        background-size: 19px 14px;
                    }
                }
                &.vip2 {
                    left: 20%;
                    .icon {
                        background-image: url('../img/vip2-50.png');
                        background-size: 19px 14px;
                    }
                }
                &.vip3 {
                    left: 40%;
                    transform: translateX(-48%);
                    .icon {
                        background-image: url('../img/vip3-50.png');
                        background-size: 20px 15px;
                    }
                }
                &.vip4 {
                    left: 60%;
                    transform: translateX(-58%);
                    .icon {
                        background-image: url('../img/vip4-50.png');
                        background-size: 24px 19px;
                    }
                }
                &.vip5 {
                    left: 80%;
                    transform: translateX(-70%);
                    .icon {
                        background-image: url('../img/vip5-50.png');
                        background-size: 24px 20px;
                    }
                }
                &.vip6 {
                    left: 100%;
                    transform: translateX(-78%);
                    .icon {
                        background-image: url('../img/vip6-50.png');
                        background-size: 25px 20px;
                    }
                }
            }
        }
    }

    .upgrade-awards {
        @include tab-body-child(333px, 286px, -337px, -44px, '../img/tab-body4-bg.png');
    }
</style>
<script>
  import introText from '../common-vue/intro-vue.vue'
  import introTable from '../common-vue/table-vue.vue'
  import lineBar from 'svg-progress-bar'

  export default {
    data () {
      return {
        level: 4,
        levelArray: [{
          className: 'vip1',
          name: 'VIP1',
          active: true
        }, {
          className: 'vip2',
          name: 'VIP2',
          active: false
        }, {
          className: 'vip3',
          name: 'VIP3',
          active: false
        }, {
          className: 'vip4',
          name: 'VIP4',
          active: false
        }, {
          className: 'vip5',
          name: 'VIP5',
          active: false
        }, {
          className: 'vip6',
          name: 'VIP6',
          active: false
        }],
        cashArr: [{
          value: null
        },{
          value: 5,
          type: '现金券',
          state: ''
        }, {
          value: 10,
          type: '现金券',
          state: 'can'
        }, {
          value: 50,
          type: '现金券',
          state: 'disabled'
        }, {
          value: 150,
          type: '现金券',
          state: 'disabled'
        }, {
          value: 200,
          type: '现金券',
          state: 'disabled'
        }]
      }
    },
    props: {},
    computed: {
      lineBarOptions () {
        return {
          text: '',
          duration: 0,
          pathColors: ['transparent', '#fac01e'],
          rectWidth: 725,
          rectHeight: 4,
          rectRadius: 2
        }
      },
      valAddCalBack () {
        return [
          {
            value: 20,
            func: () => {
              this._setActive(1)
            }
          },
          {
            value: 40,
            func: () => {
              this._setActive(2)
            }
          },
          {
            value: 60,
            func: () => {
              this._setActive(3)
            }
          },
          {
            value: 80,
            func: () => {
              this._setActive(4)
            }
          },
          {
            value: 100,
            func: () => {
              this._setActive(5)
            }
          }
        ]
      },
      introText () {
        return {
          rights: ['提升VIP会员等级后，您可以在本页面领取会员升级奖励！'],
          rules: ['• 升级奖励为现金券，有效期为3天，自用户领取之日起计算',
            '• 跨级升级的会员，升级后可同时领取所跨级别以及当前达到级别的所有升级奖励。<br/>例如，从V1一次性升级到V3的会员，升级后可一齐领取V2、V3等级的升级奖励。'
          ]
        }
      },
      tableDetail () {
        return {
          th: ['会员等级', '升级奖励', '期限', '起投金额', '有效期'],
          tr: [
            ['VIP1', '-', '-', '-', '-'],
            ['VIP2', '5元现金券', '30-300天', '1000元', '3天'],
            ['VIP3', '10元现金券', '30-300天', '10000元', '3天'],
            ['VIP4', '50元现金券', '30-300天', '20000元', '3天'],
            ['VIP5', '150元现金券', '30-300天', '50000元', '3天'],
            ['VIP6', '200元现金券', '30-300天', '60000元', '3天'],
          ]
        }
      }
    },
    components: {
      introText,
      introTable,
      lineBar
    },
    methods: {
      _setActive (index) {
        this.levelArray[index].active = true
        if (index === this.level) {
          this.levelArray[index].dotCur = 'cur'
          if (index < 6) {
            this.levelArray[index + 1].upDisplay = 'block'
          }
        }
        this.levelArray.push()
      }
    },
    created () {}
  }
</script>