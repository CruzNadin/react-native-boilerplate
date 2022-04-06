import axios from '@/api/axios';

const GITHUB_USER = 'CruzNadin';

const getProfile = async () => axios.get(`users/${GITHUB_USER}`);
const getRepos = async () => axios.get(`users/${GITHUB_USER}/repos`);

export default {getProfile, getRepos};
