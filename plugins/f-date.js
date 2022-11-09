import Vue from 'vue'
import moment from 'moment';

export default () => {
    Vue.filter('f-date', function (value, format) {
        if (!value) return '';
        else if (!format) return moment(value).format('DD/MM/YYYY');
        else return moment(value).format(format);
    })

    Vue.filter('f-time', function (value, format) {
        if (!value) return '';
        else if (!format) return moment(value).format('HH:mm');
        else return moment(value).format(format);
    })
}