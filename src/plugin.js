import Alert from './components/Alert'

export default {
    install (Vue) {
        document.addEventListener("DOMContentLoaded", function() {
            const el = document.createElement('div')
            el.setAttribute('id', 'alert')
            document.body.appendChild(el)

            const AlertInstance = new Vue({
                render: h => h(Alert)
            }).$mount('#alert')

            Vue.prototype.$alert = (message) => {
                AlertInstance.$children[0].show(message)
            }
        });
    }
}