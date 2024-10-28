export interface Queue {
  name: string;
  namespace: string;
}

export interface Workload {
  name: string;
  queue: string;
  status: string;
}
