import {
    server_host
} from '../api/api_config';

const getAllProvinces = () => {
    return fetch(`${server_host}/service/province/get_all_provinces`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

module.exports = {
    getAllProvinces
};