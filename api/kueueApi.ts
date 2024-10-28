import axios from 'axios';

export const fetchQueues = async (): Promise<Queue[]> => {
  const response = await axios.get('/apis/kueue.x-k8s.io/v1beta1/queues');
  return response.data.items;
};

export const fetchWorkloads = async (): Promise<Workload[]> => {
  const response = await axios.get('/apis/kueue.x-k8s.io/v1beta1/workloads');
  return response.data.items;
};
