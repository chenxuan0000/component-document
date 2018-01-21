let code = {};

code.default = `
<template>
    <div class="line-bar">
        <svg-bar type="rect" :value="90" :options="lineBarOptions" :valAddCalBack="valAddCalBack" class="svg-bar"></svg-bar>
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
    </div>
</template>
<style lang="scss" scoped>
    .line-bar {
        height: 100px;
        width: 740px;
        margin: 40px auto;
        background: url("../../img/line-bar-bg2.png") center 55px no-repeat;
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
            transform: translateX(-37%);
            &::before {
                position: absolute;
                content: '';
                display: none;
                width: 195px;
                height: 197px;
                top: -89px;
                left: -75px;
                background: url('../../img/star.gif');
                animation: starShow 0.35s forwards;
                z-index: -1;
            }
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
                        background-image: url('../../img/vip1-100.png');
                    }
                }
                &.vip2 {
                    .icon {
                        background-image: url('../../img/vip2-100.png');
                    }
                }
                &.vip3 {
                    .icon {
                        background-image: url('../../img/vip3-100.png');
                    }
                }
                &.vip4 {
                    .icon {
                        background-image: url('../../img/vip4-100.png');
                    }
                }
                &.vip5 {
                    .icon {
                        background-image: url('../../img/vip5-100.png');
                    }
                }
                &.vip6 {
                    .icon {
                        background-image: url('../../img/vip6-100.png');
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
                transform: translateX(-27%);
                .icon {
                    background-image: url('../../img/vip1-50.png');
                    background-size: 19px 14px;
                }
            }
            &.vip2 {
                left: 20%;
                .icon {
                    background-image: url('../../img/vip2-50.png');
                    background-size: 19px 14px;
                }
            }
            &.vip3 {
                left: 40%;
                transform: translateX(-43%);
                .icon {
                    background-image: url('../../img/vip3-50.png');
                    background-size: 20px 15px;
                }
            }
            &.vip4 {
                left: 60%;
                transform: translateX(-54%);
                .icon {
                    background-image: url('../../img/vip4-50.png');
                    background-size: 24px 19px;
                }
            }
            &.vip5 {
                left: 80%;
                transform: translateX(-66%);
                .icon {
                    background-image: url('../../img/vip5-50.png');
                    background-size: 24px 20px;
                }
            }
            &.vip6 {
                left: 100%;
                transform: translateX(-72%);
                .icon {
                    background-image: url('../../img/vip6-50.png');
                    background-size: 25px 20px;
                }
            }
        }
    }

    @keyframes dotSlide {
        0% {
            border-width: 1px;
        }
        70% {
            border-width: 7px;
        }
        78% {
            border-width: 9px;
        }
        86% {
            border-width: 7px;
        }
        90% {
            border-width: 8px;
        }
        94% {
            border-width: 7px;
        }
        97% {
            border-width: 7.5px;
        }
        100% {
            border-width: 7px;
        }
    }
    @keyframes starShow {
        0% {
            opacity: 1;
            display: none;
        }
        100% {
            opacity: 0;
        }
    }
</style>
<script>export default {
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
        }]
      }
    },
    computed: {
      lineBarOptions () {
        return {
          text: '',
          duration: 2000,
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
      }
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
    created () {
    }
  }
`;

export default code;