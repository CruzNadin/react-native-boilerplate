import axios from '@/api/axios';

const getProfile = async () => axios.get('users/CruzNadin');

export default {getProfile};
