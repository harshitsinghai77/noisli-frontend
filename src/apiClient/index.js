import { axiosInstance } from "./client";

const endpoints = {
  user_login(user_token) {
    return axiosInstance.post("/login", user_token);
  },

  save_analytics(analytics) {
    return axiosInstance.post("/analytics", analytics);
  },

  save_task(task) {
    return axiosInstance.post("/create_task", task);
  },

  get_analytics() {
    return axiosInstance.get("/analytics");
  },

  get_statistics(stats) {
    return axiosInstance.get(`/statistics/${stats}`);
  },

  get_tasks() {
    return axiosInstance.get("/get-tasks");
  },

  remove_tasks(task_id) {
    return axiosInstance.delete(`/tasks/${task_id}`);
  },

  get_settings() {
    return axiosInstance.get("/settings");
  },

  get_account() {
    return axiosInstance.get("/account");
  },

  update_account(account) {
    return axiosInstance.patch("/account", account);
  },

  update_settings(settings) {
    return axiosInstance.patch("/settings", settings);
  },

  delete_user() {
    return axiosInstance.delete("/delete");
  },

  get_streams(category) {
    return axiosInstance.get(`/get-all-streams/${category}`);
  },

  get_stream_by_id(category, id) {
    return axiosInstance.get(`/get-all-streams/${category}/${id}`);
  },
};

export default endpoints;
