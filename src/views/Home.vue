<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
    components: {
        HelloWorld
    }
})
export default class Home extends Vue {
    test_variable = true

    get test_computed() {
        return this.test_variable
    }

    test_getter() {
        return this.test_variable
    }

    testFunc() {
        console.log(111)
    }
}
</script>

<style></style>
