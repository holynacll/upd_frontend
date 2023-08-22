import { AxiosError } from "axios";

export function handleInvalidForm(err: any, errors: any) {
  if (err instanceof AxiosError && err.response?.status === 422) {
    errors.value = err.response.data.errors;
  }
}