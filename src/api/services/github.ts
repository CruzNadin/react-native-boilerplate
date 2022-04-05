import axios from '@/api/axios';

const getProfile = async () => axios.get('users/CruzNadin');
const getRepos = async () => axios.get('users/CruzNadin/repos');

export default {getProfile, getRepos};
