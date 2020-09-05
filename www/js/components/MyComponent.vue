<template>
    <p>{{ greeting }} World!</p>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                greeting: "Hello"
            };
        }
    };
</script>

<style lang='scss'>
    p {
        text-align: center;
    }
</style>