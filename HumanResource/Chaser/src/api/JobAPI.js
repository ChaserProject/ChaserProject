import { server_host } from './api_config';

const getJobsByJobTypeOrderId = (orderId) => {
    return fetch(`${server_host}/service/job/get_job_by_jobtype_orderid/${orderId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const increaseViewOfJob = (jobId) => {
    return fetch(`${server_host}/service/job/increase_views/${jobId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const getJobById = (id) => {
    return fetch(`${server_host}/service/job/get_job_by_id/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const getMarkedJobsOfUserByUserId = (id) => {
    return fetch(`${server_host}/service/user/get_marked_jobs_of_user_by_user_id/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const unMarkJob = (userId, jobId) => {
    const body = {
        userId,
        jobId
    };
    return fetch(`${server_host}/service/job/un_mark_job`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
};

const markJob = (userId, jobId) => {
    const body = {
        userId,
        jobId
    };
    return fetch(`${server_host}/service/job/mark_job`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
};

module.exports = {
    getJobsByJobTypeOrderId,
    increaseViewOfJob,
    getJobById,
    getMarkedJobsOfUserByUserId,
    unMarkJob,
    markJob
};
