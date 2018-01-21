let code = {};

code.default = `
<template>
    <svg-bar value="65"></svg-bar>
</template>
`;
code.radiusCircleWidth = `
<template>
    <svg-bar value="90" :options="{radius:130,circleWidth:30}"></svg-bar>
</template>
`;
code.rectDefault = `
<template>
    <svg-bar value="65" type="rect"></svg-bar>
</template>
`;
code.rectDefault = `
<template>
    <svg-bar value="65" type="rect" :options="{rectRadius:10}"></svg-bar>
</template>
`;
code.pathColors = `
<template>
    <svg-bar value="65" :options="{pathColors: ['yellow','rgb(33, 150, 243)']}"></svg-bar>
</template>
`;
code.varyStrokeArray1 = `
<template>
    <svg-bar value="65" :options="{radius:100,circleLineCap: 'round',varyStrokeArray: [10,20]}"></svg-bar>
</template>
`;
code.varyStrokeArray2 = `
<template>
    <svg-bar value="65" :options="{radius:100,circleLineCap: 'round',varyStrokeArray: [20,10]}"></svg-bar>
</template>
`;
code.varyStrokeArray3 = `
<template>
    <svg-bar value="65" type="rect" :options="{varyStrokeArray: [20,10]}"></svg-bar>
</template>
`;
code.text = `
<template>
    <svg-bar value="65.88" :options="options"></svg-bar>
</template>
<script>
    export default {
            computed: {
                options () {
                    return {
                            radius: 80,
                            text: function (value) {
                                  return this.htmlifyNumber(value) + '<span style="font-size: 0.4em;">%</span>';
                                 },
                            textColor: 'rgb(33, 150, 243)'
                        }
                }
             }
       }
</script>
`;
code.gradientColor = `
<template>
    <svg-bar value="62" type="rect" :options="{gradientColor: ['rgb(33, 150, 243)','yellow']}"></svg-bar>
</template>
`;
export default code;