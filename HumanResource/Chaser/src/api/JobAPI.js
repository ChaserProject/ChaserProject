
const getJobsByJobTypeOrderId = (orderId) => {
    return fetch(`http://192.168.135.1:3000/service/job/get_job_by_jobtype_orderid/${orderId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const increaseViewOfJob = (jobId) => {
    return fetch(`http://192.168.135.1:3000/service/job/increase_views/${jobId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const getJobById = (id) => {
    return fetch(`http://192.168.135.1:3000/service/job/get_job_by_id/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

const getMarkedJobsOfUserByUserId = (id) => {
    return fetch(`http://192.168.135.1:3000/service/user/get_marked_jobs_of_user_by_user_id/${id}`, {
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
    return fetch('http://192.168.135.1:3000/service/job/un_mark_job', {
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
    return fetch('http://192.168.135.1:3000/service/job/mark_job', {
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
