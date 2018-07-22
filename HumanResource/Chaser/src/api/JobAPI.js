import {
    server_host
} from './api_config';

const getJobsByJobTypeOrderId = (orderId) => {
    return fetch(`${server_host}/service/job/get_job_by_jobtype_orderid/${orderId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const getJobByMultiParams = (params) => {
    return fetch(`${server_host}/service/job/search_jobs_by_url_queries`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params) //body: {jobType, province, name}
    });
};

const joinToJob = (jobId, userId) => {
    const body = {
        userId: userId
    }
    return fetch(`${server_host}/service/job/join_to_job/${jobId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
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

const getJoinedUsers = (jobId, amount) => {
    return fetch(`${server_host}/service/job/get_joined_users_by_amount/${jobId}/${amount}`, {
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
    markJob,
    joinToJob,
    getJoinedUsers,
    getJobByMultiParams
};