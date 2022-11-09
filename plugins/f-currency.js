import Vue from 'vue'

export default () => {
    Vue.filter('f-currency', function (vlr) {
        return (vlr !== undefined) ? vlr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '';
    })
}