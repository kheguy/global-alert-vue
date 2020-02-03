<template>
    <transition name="alert">
        <div class="alert-wrapper" v-if="visible">
            {{ message }}
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Alert",
        data () {
            return {
                message: '',
                visible: false
            }
        },
        methods: {
            show (message) {
                this.visible = true
                this.message = message
                setTimeout(() => {
                    this.visible = false
                }, 5000)
            }
        }
    }
</script>

<style scoped>
    .alert-wrapper {
        position: absolute;
        top: 100px;
        left: 0;
        padding: 10px 10px 10px 20px;
        background-color: lightpink;
    }
    .alert-enter-active, .alert-leave-active {
        transition: all 1s ease;
    }
    .alert-enter, .alert-leave-to {
        transform: translateX(-300px);
    }
</style>