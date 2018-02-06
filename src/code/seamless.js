let code = {};

code.top = `
<template>
    <vue-seamless-scroll :data="listData" class="seamless-warp">
        <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            }
       }
</script>
`;

code.bottom = `
<template>
    <vue-seamless-scroll :data="listData" :class-option="classOption" class="seamless-warp">
        <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            },
            computed: {
                classOption () {
                    return {
                            direction: 0
                        }
                }
             }
       }
</script>
`;

code.left = `
<template>
    <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
        <ul class="item">
            <li v-for="item in newsList" v-text="item.title"></li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp2 {
        overflow: hidden;
        height: 25px;
        width: 380px;
        ul.item {
            width: 580px;
            li {
                float: left;
                margin-right: 10px;
            }
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                newsList: [{
                      'title': 'A simple, seamless scrolling for Vue.js'
                    }, {
                      'title': 'A curated list of awesome things related to Vue.js'
                    }]
                 }
            },
            computed: {
                optionLeft () {
                    return {
                            direction: 2,
                            limitMoveNum: 2
                        }
                }
             }
       }
</script>
`;

code.switch1 = `
<template>
    <vue-seamless-scroll :class-option="optionSwitch1" class="seamless-warp3">
        <span slot="left-switch" class="left-arrow"></span>
        <span slot="right-switch" class="right-arrow"></span>
        <ul class="item">
            <li v-for="item in listData">{{item}}</li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp3 {
        overflow: hidden;
        height: 140px;
        width: 140px * 4;
        margin: 0 auto;
        .left-arrow, .right-arrow {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #00a0e9;
            cursor: pointer;
            &:hover {
                background-color: #0f39fa;
            }
            &::before {
                position: absolute;
                content: '';
                width: 16px;
                height: 16px;
                top: 12px;
                left: 15px;
                border: 2px solid #fff;
            }
        }
        .left-arrow::before {
            border-right: 0;
            border-bottom: 0;
            transform: rotate(-45deg);
        }
        .right-arrow::before {
            border-left: 0;
            border-top: 0;
            left: 9px;
            transform: rotate(-45deg);
        }
        ul.item {
            width: 140px * 8;
            li {
                float: left;
                width: 120px;
                height: 120px;
                margin: 10px;
                line-height: 120px;
                background-color: #999;
                color: #fff;
                text-align: center;
                font-size: 30px;
            }
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [1, 2, 3, 4, 5, 6, 7, 8]
            },
            computed: {
                optionSwitch1 () {
                  return {
                    autoPlay: false,
                    switchSingleStep: 140
                    }
                }
             }
       }
</script>
`;
code.switch2 = `
<template>
    <vue-seamless-scroll :class-option="optionSwitch2" class="seamless-warp3">
        <span slot="left-switch" class="left-arrow"></span>
        <span slot="right-switch" class="right-arrow"></span>
        <ul class="item">
            <li v-for="item in listData">{{item}}</li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp3 {
        overflow: hidden;
        height: 140px;
        width: 140px * 4;
        margin: 0 auto;
        .left-arrow, .right-arrow {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #00a0e9;
            cursor: pointer;
            &:hover {
                background-color: #0f39fa;
            }
            &::before {
                position: absolute;
                content: '';
                width: 16px;
                height: 16px;
                top: 12px;
                left: 15px;
                border: 2px solid #fff;
            }
        }
        .left-arrow::before {
            border-right: 0;
            border-bottom: 0;
            transform: rotate(-45deg);
        }
        .right-arrow::before {
            border-left: 0;
            border-top: 0;
            left: 9px;
            transform: rotate(-45deg);
        }
        ul.item {
            width: 140px * 8;
            li {
                float: left;
                width: 120px;
                height: 120px;
                margin: 10px;
                line-height: 120px;
                background-color: #999;
                color: #fff;
                text-align: center;
                font-size: 30px;
            }
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [1, 2, 3, 4, 5, 6, 7, 8]
            },
            computed: {
                optionSwitch2 () {
                  return {
                    autoPlay: false,
                    switchSingleStep: 100,
                    switchDelay: 200
                    }
                }
             }
       }
</script>
`;
code.hover = `
<template>
    <vue-seamless-scroll :data="listData" :class-option="optionHover" class="seamless-warp">
        <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            },
            computed: {
                optionHover () {
                    return {
                            hoverStop: false
                        }
                }
             }
       }
</script>
`;
code.singleHeight = `
<template>
    <vue-seamless-scroll :data="listData" :class-option="optionSingleHeight" class="seamless-warp">
        <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            },
        computed: {
              optionSingleHeight () {
                  return {
                           singleHeight: 26
                         }
                }
             }
       }
</script>
`;
code.singleHeightTime = `
<template>
    <vue-seamless-scroll :data="listData" :class-option="optionSingleHeightTime" class="seamless-warp">
        <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            },
            computed: {
                optionSingleHeightTime () {
                    return {
                            singleHeight: 26,
                            waitTime: 2500
                        }
                }
             }
       }
</script>
`;

code.watch = `
<template>
    <vue-seamless-scroll :data="listData" :class-option="optionWatch" class="seamless-warp">
        <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            },
            computed: {
                optionWatch () {
                    return {
                            limitMoveNum: 10
                        }
                }
            },
            created () {
                setTimeout(() => {
                     this.listData = this.listData.concat(this.listData)
                   }, 3000)
            }
       }
</script>
`;
code.noWatch = `
<template>
    <vue-seamless-scroll :data="listData" :class-option="optionNoWatch" class="seamless-warp">
        <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            },
            computed: {
                optionNoWatch () {
                    return {
                            limitMoveNum: 10,
                            openWatch: false
                        }
                }
            },
            created () {
                setTimeout(() => {
                     this.listData = this.listData.concat(this.listData)
                   }, 3000)
            }
       }
</script>
`;
export default code;