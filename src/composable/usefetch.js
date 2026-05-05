import { ref } from 'vue'
import API from '@/services/api'

export function useFetch(url) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      const res = await API.get(url)
      data.value = res.data
    } catch (err) {
      error.value = 'Failed to fetch data'
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    fetchData
  }
}